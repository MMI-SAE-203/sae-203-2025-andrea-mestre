import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B2oVCjxl.mjs';
import { a as getFilmById } from '../../chunks/backend_B_f8ogR8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await getFilmById(id);
  if (!film) {
    return Astro2.redirect("/films");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="flex justify-start items-center flex-col"> <img class="rounded-lg"${addAttribute(film.affiche, "src")} alt="affiche du film"> <h1 class="text-6xl font-playfair-display drop-shadow-lg"> ${film.titre} </h1> <p class="font-monserrat text-2xl">${film.realisateur}</p> <p>${film.genre}</p> <p>${film.duree} minutes / ${film.date_sortie} / ${film.langue}</p> </div> <div> <p>${unescapeHTML(film.synopsis)}</p> </div> </section> ` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/films/[id].astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
