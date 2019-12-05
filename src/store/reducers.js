import { SEARCH_ARTIST } from './actions';

export const initialState = {
  artist: null,
  album: {},
  artists: [],
  details: {},
};

 const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      console.log('busacando artists', action);
      return { 
          nome: 'hernani'
      }

    default:
        return {...state}
  }
};

export default artistReducer;

