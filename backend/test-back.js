import { getFilmByDate } from "./backend.mjs";
import { getActiviteByDate } from "./backend.mjs";
import { getInviteByName } from "./backend.mjs";
import { getFilmById } from "./backend.mjs";
import { getActiviteById } from "./backend.mjs";
import { getInviteById } from "./backend.mjs";
import { getActiviteByInviteId } from "./backend.mjs";
import { getActiviteByName } from "./backend.mjs";
import { getFormuleByPrice } from "./backend.mjs";


/*
try {
  const film = await getFilmByDate();
  console.table(film);
} catch (error) {
  console.error(error);
}

try {
  const activite = await getActiviteByDate();
  console.table(activite);
} catch (error) {
  console.error(error);
}

try {
  const invites = await getInviteByName();
  console.table(invites);
} catch (error) {
  console.error(error);
}

try {
  const id = "kg95qr00359288u";
  const film = await getFilmById(id);
  console.table(film);
} catch (error) {
  console.error(error);
}

try {
  const id = "b852s87k9n7swqr";
  const activite = await getActiviteById(id);
  console.table(activite);
} catch (error) {
  console.error(error);
}


try {
  const id = "0ld21498lj382j2";
  const invite = await getInviteById(id);
  console.table(invite);
} catch (error) {
  console.error(error);
}

try {
  const inviteId = "0ld21498lj382j2";
  const activite = await getActiviteByInviteId(inviteId);
  console.table(activite);
} catch (error) {
  console.error(error);
}


try {
  const inviteName = "Albouy";
  const activite = await getActiviteByName(inviteName);
  console.table(activite);
} catch (error) {
  console.error(error);
}
*/
try {
  const formules = await getFormuleByPrice();
  console.table(formules);
} catch (error) {
  console.error(error);
}