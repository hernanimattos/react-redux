import { SEARCH_ARTIST, SEARCH_DETAILS } from './actions';


export const initialState = {
  artist: null,
  album: 'valor inicio',
  artists: [],
  details: {},
};


const artistReducer =(state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artist: action.artist,
        artists: action.artists,
        result: action.result
      };
    case SEARCH_DETAILS:
      return {
        artist: action.artist,
        albumName: action.albumName,
      };
    default:
      return { ...state };
  }
};

export default artistReducer;
