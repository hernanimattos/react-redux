import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'reactstrap';
import { getAlbumDetails } from '../store/actions';

const Album = (props) => {

  const searchForDetails = ({ idAlbum }) => {
    const { getAlbumDetails } = props;
    getAlbumDetails(idAlbum);
  };
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
                <Button onClick={() => searchForDetails(alb)}>Detalhes</Button>
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
    album: state.album,
    artist: state.artist
  }
}

const mapDispachToProps = dispatch => {
  return {
    getAlbumDetails: idAlbum => dispatch(getAlbumDetails(idAlbum)),
  };
}

export default connect(mapStateToProps, mapDispachToProps)(Album);
