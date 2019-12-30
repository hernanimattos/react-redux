import { SEARCH_ARTIST, SEARCH_ALBUM, SEARCH_DETAILS } from './actions';

export const initialState = {
  artist: null,
  album: [],
  artists: [],
  details: {},
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return {
        ...state,
        artist: action.artist,
        artists: action.artists,
        result: action.result,
      };
    case SEARCH_ALBUM:
      return {
        ...state,
        album: action.album
      };

    case SEARCH_DETAILS:
        return {
          ...state,
          album: action.album,
        }

    default:
      return { ...state };
  }
};

export default artistReducer;
