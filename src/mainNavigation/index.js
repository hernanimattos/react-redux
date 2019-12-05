import React from 'react';
// import Artist from './Artist';
import Artist from '../components/Artist';
import Album from '../components/Album';
import Details from '../components/Details';
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
        render={props => <Album {...props} />} />
      <Route
        path={'/detalhes/:album'}
        render={props => <Details {...props} />}
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

export default MainNAvigation;
