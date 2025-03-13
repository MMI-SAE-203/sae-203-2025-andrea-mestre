import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

async function getFilmByDate() {
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

async function getInviteByName() {
  try {
    let invites = await pb.collection("invite").getFullList({
      sort: "nom",
      expand: "anime_activite",
    });
    invites = invites.map((invite) => {
      invite.photo = pb.files.getURL(invite, invite.photo);
      return invite;
    });
    return invites;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getFilmById(id) {
  const film = await pb.collection("film").getOne(id, {
    expand: "participe",
  });
  film.affiche = pb.files.getURL(film, film.affiche);

  if (film.expand?.participe) {
    film.expand.participe.img = pb.files.getURL(
      film.expand.participe,
      film.expand.participe.img
    );
  }

  return film;
}

async function getInviteById(id) {
  try {
    const invite = await pb.collection("invite").getOne(id, {
      expand: "anime_activite",
    });

    invite.photo = pb.files.getURL(invite, invite.photo);

    if (invite.expand?.anime_activite) {
      invite.expand.anime_activite.photo = pb.files.getURL(
        invite.expand.anime_activite,
        invite.expand.anime_activite.photo
      );
    }

    return invite;
  } catch (error) {
    console.error(error);
    return {};
  }
}


//
async function getFormuleByPrice() {
  try {
    let formules = await pb.collection("formule").getFullList({
      sort: "prix",
    });
    return formules;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getFilmsFeatured(limit = 4) {
  const allFilms = await getFilmByDate();
  return allFilms.slice(0, limit); 
}

async function getEquipe() {
  try {
    let equipe = await pb.collection("equipe").getFullList({
    });
    equipe = equipe.map((equipe) => {
      equipe.photo = pb.files.getURL(equipe, equipe.photo);
      return equipe;
    });
    return equipe;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function formatDate(dateString) {
  const date = new Date(dateString);

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getUTCHours();

  return `Le ${ day } ${ month } à ${ hours } h`;
}

async function getActiviteType() {
  try {
    let activite = await pb.collection("activite").getFullList({
      filter: `type = "Exposition"`,
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

export { getFilmById as a, getFilmByDate as b, getInviteById as c, getInviteByName as d, getActiviteType as e, formatDate as f, getEquipe as g, getFilmsFeatured as h, getFormuleByPrice as i };
