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
            <Col xs="12" sm="4" key={alb.idAlbum}>
              <article>
                <h4>{alb.strAlbum}</h4>
                <img src={alb.strAlbumThumb} width="100%" />
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
