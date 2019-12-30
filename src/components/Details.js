import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

const Details = props => {
  let { album } = props;
  album = album[0]

  return (
    <Row>
      {album && album.idAlbum ? (
        <>
          <h3>
            <strong>Title: </strong> {album.strAlbum}
          </h3>
          <p>
            <strong>Year of rfeleased:</strong> {album.intYearReleased}
          </p>
          <p>
            <strong>Sales:</strong> {album.intSales}
          </p>
          <p>
            <strong>Description:</strong> {album.strDescriptionEN}
          </p>
        </>
      ) : (<>nao</>)}
    </Row>
  );
};

const mapStateToProps = state => {
  const { album } = state;
  return {
    album,
  };
};

export default connect(mapStateToProps, null)(Details);
