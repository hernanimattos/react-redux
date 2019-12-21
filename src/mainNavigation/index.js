import React from 'react';
import { connect } from 'react-redux';
import Artist from '../components/Artist';
import Details from '../components/Details';
import Album from '../components/Album';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const MainNAvigation = props => {
  const { search: { 
    result,
    artist
  } } = props;

  return (
    <Router>
      <Route 
        path={'/artist/:search'} 
        render={props => <Artist {...props} />} />
      <Route 
        path={'/album/:search'} 
        render={props => <Details {...props} />} />
      <Route
        path={'/albuns/:artist'}
        render={props => <Album {...props} />}
      />
      {
         result && (<Redirect
          to={{
            pathname: `/artist/${artist}`,
            state: {
              s: artist,
            },
          }}
        />)
      }
      
    </Router>
  );
};

const matStateToProps = (state) => {
  return {
    artist: state.artist,
    result: state.result
  }
}

export default connect(matStateToProps, null)(MainNAvigation);
