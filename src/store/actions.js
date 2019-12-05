export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const SEARCH_DETAILS = 'SEARCH_DETAILS';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';

export const searchArtist = artist => {
  return dispatch => {
    dispatch({
      type: SEARCH_ARTIST,
      artist,
    });
  };
};

export const searchAlbum = album => {
  return dispatch => {
    dispatch({
      type: SEARCH_ALBUM,
      album,
    });
  };
};

export const searchDetails = (albumId, artistId) => {
    return dispatch => {
      dispatch({
        type: SEARCH_DETAILS,
        albumId,
        artistId
      });
    };
  };
