import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import MainNavigation from '../mainNavigation';
import { connect } from 'react-redux';
import { searchArtist } from '../store/actions'

const Search = props => {
  console.log(props, 'propspppp')
  const [search, setArtist] = useState({
    artist: null,
    result: false,
  });

  const handleSearching = e => {
    e.preventDefault();
    setArtist({
      result: true,
      artist: search.artist,
    });

    props.searchArtist(search.artist)
  };

  return (
    <Container>
      <Row>
        <Col xs="12">
          <Form onSubmit={handleSearching}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="search"
                id="search"
                value={Search.artist}
                placeholder="search"
                onChange={e => setArtist({ artist: e.target.value })}
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Col>
      </Row>
      <MainNavigation search={search}/>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    artist: state.artist
  };
};

const mapDispatchToProps = dispatch => {
  console.log(dispatch, 'dispath')
  return {
    searchArtist: artist => dispatch(searchArtist(artist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
