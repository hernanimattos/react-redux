import HTTP from '../provider';

const getArtist = async artist =>
  await HTTP.get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`);

const getAlbums = async artist =>
  await HTTP.get(
    `https://theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist}`
  );

const getAlbumFromArtist = async (artist,albumName) =>
  await HTTP.get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}&${albumName}`);

export { getArtist, getAlbums, getAlbumFromArtist };
