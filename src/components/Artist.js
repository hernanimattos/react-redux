import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAlbumDetails } from '../store/actions'
import {
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Artist = props => {
  return (
    <Row>
      <Col xs="12">
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Name</CardTitle>
            <CardSubtitle>Year</CardSubtitle>
            <Link
              onClick={props.getAlbumDetails('lllll', 'nois')}
              to={{
                pathname: `/artist/nome/detalhes/hernani`,
              }}
            >
              
              Detalhes
            </Link>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps =  (state) => {
  return {
    artists: state.artists,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAlbumDetails: (album,nome) => dispatch(getAlbumDetails(album, nome))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
