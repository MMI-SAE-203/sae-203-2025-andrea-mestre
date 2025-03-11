import { getFilmByDate } from "./backend.mjs";

try {
  const film = await getFilmByDate();
  console.table(film);
} catch (error) {
  console.error(error);
}