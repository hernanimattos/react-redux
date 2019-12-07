import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchAlbum } from '../store/actions';
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Artist = props => {
  console.log(props, 'Artist= > Props');
  const history = useHistory()

  const searchForDetails = () => {
    const { artist, searchAlbum } = props;
    history.push(`/detalhes/${artist}`)
    searchAlbum(artist);
  }
  return (
    <Row>
      {props.artists &&
        props.artists.map(artist => {
          return (
            <Col xs="12" key={artist.idArtist}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={artist.strArtistBanner}
                  alt={artist.strArtist}
                />
                <CardBody>
                  <CardTitle>{artist.strArtist}</CardTitle>
                  <CardSubtitle>Genre{artist.strGenre}</CardSubtitle>
                  <Button onClick={searchForDetails}>Albuns</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    artists: state.artists,
    artist: state.artist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchAlbum: artist => dispatch(searchAlbum(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
