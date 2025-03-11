import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getFilmByDate() {
  try {
    let filmdate = await pb.collection("film").getFullList({
      sort: "date_heure_projection",
    });
    filmdate = filmdate.map((film) => {
      film.affiche = pb.files.getURL(film, film.affiche);
      return film;
    });
    return filmdate;
  } catch (error) {
    console.error(error);
    return [];
  }
}