import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

const Details = (props) => {
  return (
    <Row>
      <Col xs="12">
        <article>
          <h2>Nome</h2>
          <p>Ano: </p>
          <p>Integrantes</p>
          <p>Componsitor</p>
          <div>Detalhes</div>
        </article>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    album: state.album
  }
}

export default connect(mapStateToProps,null)(Details);
