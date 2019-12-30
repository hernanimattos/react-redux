import { getArtist, getAlbums, getAlbumDetails } from '../services';
export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const SEARCH_DETAILS = 'SEARCH_DETAILS';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';

export const searchArtist = ({ artist, result }) => {
  return dispatch => {
    return getArtist(artist).then(({ data }) => {
      const { artists } = data;
      dispatch({
        type: SEARCH_ARTIST,
        artists,
        result: artists && artists.length > 0 ? true : false,
        artist,
      });
    });
  };
};

export const searchAlbuns = artist => {
  return dispatch => {
    return getAlbums(artist).then(({ data }) => {
       const { album } = data;
      dispatch({
        type: SEARCH_ALBUM,
        album,
      });
    });
  };
};

export const getAlbumDetailsFromArtist = (strArtist, strAlbum) => {
  return dispatch => {
    return getAlbumDetails(strArtist, strAlbum).then(({data}) => {
      const { album } = data;
      dispatch({
        type: SEARCH_DETAILS,
        album,
        })
    });
  }
};
