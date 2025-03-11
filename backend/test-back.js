import { getFilmByDate } from "./backend.mjs";
import { getActiviteByDate } from "./backend.mjs";

/*
try {
  const film = await getFilmByDate();
  console.table(film);
} catch (error) {
  console.error(error);
}
*/

try {
  const activite = await getActiviteByDate();
  console.table(activite);
} catch (error) {
  console.error(error);
}
