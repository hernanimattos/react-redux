import { SEARCH_ARTIST, SEARCH_DETAILS } from './actions';


export const initialState = {
  artist: null,
  album: {},
  artists: [],
  details: {},
};


const artistReducer =(state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artists: action.artists,
        artist: 'oi'
      };
    case SEARCH_DETAILS:
      return {
        artistName: action.artistName,
        albumName: action.albumName,
      };
    default:
      return { ...state };
  }
};

export default artistReducer;
