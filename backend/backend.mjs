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

export async function getInviteByName() {
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

export async function getFilmById(id) {
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

export async function getActiviteById(id) {
  const activite = await pb.collection("activite").getOne(id, {
    expand: "anime_invite",
  });
  activite.img = pb.files.getURL(activite, activite.img);

  if (activite.expand?.anime_invite) {
    activite.expand.anime_invite.img = pb.files.getURL(
      activite.expand.anime_invite,
      activite.expand.anime_invite.img
    );
  }

  return activite;
}

export async function getInviteById(id) {
  const invite = await pb.collection("invite").getOne(id);
  return invite;
}

export async function getActiviteByInviteId(inviteId) {
  const activites = await pb.collection("activite").getFullList({
    filter: `anime_invite ="${inviteId}"`,
    sort: "date_activite",
  });
  return activites;
}

export async function getActiviteByName(inviteName) {
  const invites = await pb.collection("invite").getFullList({
    filter: `nom="${inviteName}"`,
    expand: "activite",
    sort: "nom",
  });
  return invites;
}

export async function allActiviteByInviteName(nom) {
  const activite = await pb.collection("activite").getFullList({
     filter: `anime_invite.nom = '${nom}'`, 
    expand: "anime_invite" });
  return activite;
}


export async function addFilm(newFilm) {
  const film = await pb.collection('film').create(newFilm);
  return film;
}

export async function modifFilm(data, id) {
  const modif = await pb.collection('film').update(data, id);
  return modif;
}


//
export async function getFormuleByPrice() {
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

export async function getFilmsFeatured(limit = 4) {
  const allFilms = await getFilmByDate();
  return allFilms.slice(0, limit); 
}

export async function getEquipe() {
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

export async function formatDate(dateString) {
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

export async function getActiviteType() {
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