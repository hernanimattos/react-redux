import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

const Album = (props) => {
  console.log(props, 'propsAlbum')
  return (
    <Row>
      {
        props.album && props.album.map((alb) => {
          return (
            <Col xs="12" xm="3" key={alb.idAlbum}>
              <article>
                <h4>Title: {alb.strAlbum}</h4>
                <p>Released: {alb.intYearReleased} </p>
                <img src={alb.strAlbumThumb} width="100%" />
                <p>Integrantes</p>
                <p>Componsitor</p>
                <div>Detalhes</div>
              </article>
            </Col>
          );
        })
      }
      
    </Row>
  );
};

const mapStateToProps = state => {
  console.log(state, 'State Album')
  return {
    album: state.album
  }
}

export default connect(mapStateToProps, null)(Album);
