import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { Row, Col, Button } from 'reactstrap';
import AccountTieIcon from 'mdi-react/AccountTieIcon';
import CalendarCheckIcon from 'mdi-react/CalendarCheckIcon';
import DatePickerField from '../../../../shared/components/form/DatePicker';
import PageLoading from '../../../../shared/components/PageLoading';

class MonthlypaymentForm extends Component {
  render() {
    return (
      <form className="form" onSubmit={handleSubmit}>
        <Row>
          <Col md={3}>
            <div className="form__form-group">
              <span className="form__form-group-label">Fecha</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <CalendarCheckIcon />
                </div>
                <Field 
                  name="period"
                  component={DatePickerField}
                  disabled={true}
                  today={true}
                />
              </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="form__form-group">
              <span className="form__form-group-label">Alumno</span>
              <div className="form__form-group-field">
                <Field 
                  name="studentId"
                  component={SelectField}
                  options={students}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="form__form-group">
              <span className="form__form-group-label">Responsable</span>
              <div className="form__form-group-field">
                <Field 
                  name="parentId"
                  component={SelectField}
                  options={parents}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="form__form-group">
              <span className="form__form-group-label">Concepto</span>
              <div className="form__form-group-field">
                <Field 
                  name="parentId"
                  component={SelectField}
                  options={parents}
                  disabled={true}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="form__form-group">
              <span className="form__form-group-label">Concepto</span>
              <div className="form__form-group-field">
                <Field 
                  name="parentId"
                  component={SelectField}
                  options={concepts}
                  disabled={true}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h6>Detalle</h6>
            <Table className="table--bordered" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Mora</th>
                  <th>Descuento</th>
                  <th>Subtotal</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {detailList.map((detail, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{detail.name}</td>
                    <td>{detail.price}</td>
                    <td>{detail.delay}</td>
                    <td>{detail.discount}</td>
                    <td>{detail.total}</td>
                    <td>
                      <button className="table-btn">
                        <DeleteForeverIcon /> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>Total</td>
                  <td>{total}</td>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Button disabled={ invalid || pristine || submitting } color="primary" size="sm" type="submit">Guardar</Button>
            <Button disabled={submitting || pristine}  size="sm" onClick={reset} >Cancelar</Button>
          </Col>
        </Row>
        { submitting && <PageLoading />}
      </form>
    );
  }
}

MonthlypaymentForm.propTypes = {

};

export default MonthlypaymentForm;