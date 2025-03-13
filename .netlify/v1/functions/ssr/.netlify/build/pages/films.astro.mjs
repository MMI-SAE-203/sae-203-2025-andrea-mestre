import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B2oVCjxl.mjs';
import 'clsx';
import { b as getFilmByDate } from '../chunks/backend_B_f8ogR8.mjs';
export { renderers } from '../renderers.mjs';

const Camera = new Proxy({"src":"/_astro/icon-camera.BJirB0ru.svg","width":60,"height":60,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-camera.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Cardfilms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardfilms;
  const { ...film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/films/${film.id}`, "href")} class="flex justify-center items-center flex-col"> <img class="transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden"${addAttribute(film.affiche, "src")} alt="affiche film"> <h3 class="font-monserrat text-2xl pt-2">${film.titre}</h3> <p class="text-sm">${film.realisateur}</p> </a>`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Cardfilms.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await getFilmByDate();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 md:px-8 pt-12 md:pt-16 md:max-w-3xl lg:max-w-4xl mx-auto"> <p class="pb-4 text-base md:text-lg">
Découvrez la programmation riche et diversifiée du festival, mettant
            à l'honneur des films audacieux, des documentaires inspirants et des
            œuvres inédites.
</p> <p class="pb-4 text-base md:text-lg">
Que vous soyez amateur de courts métrages, de longs métrages ou
            d'animations, plongez dans un univers cinématographique unique, où
            chaque projection est une nouvelle aventure à vivre.
</p> <p class="intro text-base md:text-lg font-medium italic pb-6">
Ne manquez pas les temps forts et les exclusivités qui rythmeront
            cette édition !
</p> </div> <section> <header> <div class="flex justify-center items-center pb-12 md:pb-16 lg:pb-20 pt-8"> <img${addAttribute(Camera.src, "src")} alt="icon caméra" aria-hidden="true" class="w-16 md:w-20 lg:w-24"> </div> <h2 class="text-center text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12">Liste des Films</h2> </header> <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"> ${films.map((film) => renderTemplate`<li class="flex justify-center"> ${renderComponent($$result2, "Cardfilms", $$Cardfilms, { ...film })} </li>`)} </ul> </section> ` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/films/index.astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/films/index.astro";
const $$url = "/films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
