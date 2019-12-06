import HTTP from '../provider'
import { Action } from 'rxjs/internal/scheduler/Action';
export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const SEARCH_DETAILS = 'SEARCH_DETAILS';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';

const getArtist = async () => await HTTP.get('https://theaudiodb.com/api/v1/json/1/search.php?s=Snoop Dogg')


export const searchArtist = ({artist, result}) => {
  return dispatch => {
    return getArtist().then(({ data }) => {
      const { artists } = data;
      dispatch({
        type: SEARCH_ARTIST,
        artists,
        result: artists.length > 0 ? true : false,
        artist
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

export const getAlbumDetails = (artist, albumName) => {
    return dispatch => {
      dispatch({
        type: SEARCH_DETAILS,
        artist,
        albumName
      });
    };
  };
