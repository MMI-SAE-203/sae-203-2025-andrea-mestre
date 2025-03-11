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

export async function getActiviteByDate() {
  try {
    let activite = await pb.collection("activite").getFullList({
      sort: "date_activite",
    });
    activite = activite.map((activite) => {
      activite.image = pb.files.getURL(activite, activite.image);
      return activite;
    });
    return activite;
  } catch (error) {
    console.error(error);
    return [];
  }
}