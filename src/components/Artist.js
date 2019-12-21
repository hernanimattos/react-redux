import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchAlbuns } from '../store/actions';
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
  const history = useHistory()

  const searchForAlbuns = () => {
    const { artist, searchAlbuns } = props;
    history.push(`/albuns/${artist}`);
    searchAlbuns(artist);
  };
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
                  <Button onClick={searchForAlbuns}>Albuns</Button>
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
    artist: state.artist,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchAlbuns: artist => dispatch(searchAlbuns(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
