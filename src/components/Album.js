import React, { useState} from 'react';
import { connect } from 'react-redux';
import { Col, Row, Button } from 'reactstrap';
import { getAlbumDetailsFromArtist } from '../store/actions';
import { useHistory } from 'react-router-dom';

const Album = (props) => {
  const history = useHistory()

  const searchForDetails = (album) => {
    const { strArtist, strAlbum } = album
    const { getAlbumDetailsFromArtist } = props;
    
    getAlbumDetailsFromArtist(strArtist, strAlbum );
    history.push(`/album/${strAlbum}`);
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
  return {
    album: state.album,
    ...state
  }
}

const mapDispachToProps = dispatch => {
  return {
    getAlbumDetailsFromArtist: (strArtist, strAlbum) => dispatch(getAlbumDetailsFromArtist(strArtist, strAlbum)),
  };
}

export default connect(mapStateToProps, mapDispachToProps)(Album);
