import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, i as renderComponent, j as Fragment, h as addAttribute } from '../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_BmflSPPP.mjs';
import { h as getFilmsFeatured, i as getFormuleByPrice } from '../chunks/backend_B_f8ogR8.mjs';
import 'clsx';
import { I as ImgHero } from '../chunks/Layout_B2oVCjxl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardformule = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardformule;
  const { ...formule } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border mt-15 rounded-md"> <div class="flex justify-center items-center flex-col"> <div class="p-3.5 w-full border-b"> <h3 class="text-xl text-center">${formule.type}</h3> </div> <div class="text-center"> <p class="px-4 py-4"> ${formule.description} </p> <p class="text-2xl pb-3"> ${formule.prix} €
</p> <a class="text-white bg-black py-4 px-7 rounded-full relative top-2.5 
                       transition-all duration-300 hover:bg-background hover:text-black hover:border hover:border-black hover:scale-105" href="/billetterie" aria-label="Acheter la formule">
acheter
</a> </div> </div> </div>`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Cardformule.astro", void 0);

const IconIut = new Proxy({"src":"/_astro/icon-ufc.Canwhijd.svg","width":174,"height":173,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-ufc.svg";
							}
							
							return target[name];
						}
					});

const IconMmi = new Proxy({"src":"/_astro/icon-MMI_montbéliard.9xKtsNgv.png","width":225,"height":225,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-MMI_montbéliard.png";
							}
							
							return target[name];
						}
					});

const IconVosges = new Proxy({"src":"/_astro/departement.DVNjUuEC.svg","width":270,"height":110,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/departement.svg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuredFilms = await getFilmsFeatured(4);
  const formules = await getFormuleByPrice();
  const title = "Cin\xE9magny";
  const subTitle = "12 au 16 novembre 2025";
  const alt = "Montagne";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "subTitle": subTitle, "src": ImgHero, "alt": alt }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="px-7 pt-16 md:max-w-3xl lg:max-w-4xl mx-auto"> <p class="pb-2.5 md:text-lg lg:text-center">
Bienvenue à Cinémagny, le festival incontournable dédié à la célébration
        du 7e art sous toutes ses formes ! Ce rendez-vous unique offre une riche
        sélection de films, allant des longs métrages aux courts, en passant par
        des documentaires et des films d'animation.
</p> <p class="pb-6 md:text-lg lg:text-center">
Cinémagny se distingue par son engagement à promouvoir les talents
        émergents du cinéma indépendant et à mettre en lumière des artistes
        locaux. Vous y découvrirez des œuvres méconnues, originales et
        innovantes, dans un cadre authentique au cœur des Vosges.
</p> <div class="flex justify-center items-center"> <a class="bg-background text-black button mb-10" href="/festival" aria-label="En savoir plus sur le festival">En savoir plus sur le festival</a> </div> </div> <section> <header class="text-center mb-8"> <h2 class="text-3xl md:text-4xl">Les Films à la Une</h2> </header> <div class="grid grid-cols-2 md:grid-cols-4 md:gap-10 justify-center items-center px-4 md:px-12 md:max-w-6xl md:mx-auto"> ${featuredFilms.map((film) => renderTemplate`<div class="flex flex-col items-center"> <a${addAttribute(`/films/${film.id}`, "href")} class="w-36 h-56 md:w-56 md:h-80 lg:w-64 lg:h-96 mx-auto overflow-hidden rounded-lg"> <img class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"${addAttribute(film.affiche, "src")}${addAttribute(`Affiche du film ${film.titre}`, "alt")}> </a> <h2 class="text-center font-monserrat text-base md:text-base"> ${film.titre} </h2> </div>`)} </div> <div class="flex justify-center items-center mt-4 md:mt-8"> <a class="button bg-blue" href="/films" aria-label="Voir la programmation complète">La programmation complète</a> </div> </section> <section> <header class="text-center mb-8"> <h2 class="text-3xl md:text-4xl">Formules & Tarifs</h2> </header> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 px-4 md:px-12 max-w-7xl mx-auto justify-items-center"> ${formules.map((formule) => renderTemplate`<li class="w-full max-w-sm"> ${renderComponent($$result3, "Cardformule", $$Cardformule, { ...formule })} </li>`)} </ul> <div class="flex justify-center items-center pt-10 pb-8"> <a class="bg-brown button" href="/billeterie" aria-label="L'ensemble de nos tarifs">L'ensemble de nos tarifs</a> </div> </section> <section> <header class="text-center mb-8"> <h2 class="text-3xl md:text-4xl">Notre Engagement Écoresponsable</h2> </header> <p class="px-7 md:max-w-3xl lg:max-w-4xl mx-auto md:text-lg pb-8 lg:text-center">
L'écoresponsabilité est au cœur de notre festival. Nous nous engageons à
        réduire notre impact environnemental en privilégiant des pratiques
        durables, de l'utilisation de matériaux recyclés à la promotion de
        transports verts. Ensemble, faisons du cinéma un vecteur de changement
        pour un avenir plus respectueux de la planète.
</p> <div class="flex justify-center items-center"> <a class="bg-blue text-white button" href="/ecoresponsabilite" aria-label="Aller à notre page engagement">
Nos engagements écoresponsables
</a> </div> </section> <section> <header class="text-center mb-8"> <h2 class="text-3xl md:text-4xl">Nos Partenaires</h2> </header> <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24 py-8"> <a href="https://www.iut-nfc.univ-fcomte.fr/" target="_blank" aria-label="Visite le site partenaire UFC Nord Franche comté" class="transform transition-all duration-300 hover:scale-110"> <img${addAttribute(IconIut.src, "src")} alt="icon-itu" class="max-h-40 md:max-h-32 lg:max-h-40"> </a> <a href="https://www.iut-nfc.univ-fcomte.fr/b-u-t-metiers-du-multimedia-et-de-linternet/" target="_blank" aria-label="Visite le site partenaire MMI Montbéliard" class="transform transition-all duration-300 hover:scale-110"> <img${addAttribute(IconMmi.src, "src")} alt="icon-mmi" class="max-h-50 md:max-h-32 lg:max-h-40"> </a> <a href="https://www.vosges.fr/" target="_blank" aria-label="Visite le site partenaire des Vosges" class="transform transition-all duration-300 hover:scale-110"> <img${addAttribute(IconVosges.src, "src")} alt="icon-vosges" class="max-h-40 md:max-h-32 lg:max-h-40"> </a> </div> </section> ` })}` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/index.astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
