import HTTP from '../provider'
export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const SEARCH_DETAILS = 'SEARCH_DETAILS';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';

const getArtist = async () => await HTTP.get('https://theaudiodb.com/api/v1/json/1/search.php?s=Snoop Dogg')


export const searchArtist = artist => {
  return dispatch => {
    return getArtist().then(({ data }) => {
      const { artists } = data;
      dispatch({
        type: SEARCH_ARTIST,
        artists
      });
    })
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

export const getAlbumDetails = (artistName, albumName) => {
    return dispatch => {
      dispatch({
        type: SEARCH_DETAILS,
        artistName,
        albumName
      });
    };
  };
