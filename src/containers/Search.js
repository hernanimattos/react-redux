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

   return props.searchArtist(search)
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
    artist: state.artist,
    result: state.result,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchArtist: search => dispatch(searchArtist(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
