import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, i as renderComponent, j as Fragment, h as addAttribute } from '../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_BmflSPPP.mjs';
import { g as getEquipe } from '../chunks/backend_B_f8ogR8.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const IconMontagne = new Proxy({"src":"/_astro/icon-montain.DJAw26UF.svg","width":55,"height":55,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-montain.svg";
							}
							
							return target[name];
						}
					});

const IconPlanet = new Proxy({"src":"/_astro/icon-planet.BAuq5aNg.svg","width":50,"height":55,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-planet.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Cardequipe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardequipe;
  const { ...membre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h2>${membre.prenom}</h2> </div>`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Cardequipe.astro", void 0);

const $$Festival = createComponent(async ($$result, $$props, $$slots) => {
  const equipe = await getEquipe();
  const title = "Festival Cin\xE9magny";
  const subTitle = "12 au 16 novembre 2025";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "subTitle": subTitle }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="px-7 pt-16 md:max-w-3xl lg:max-w-4xl mx-auto"> <p class="md:text-lg lg:text-center">
Bienvenue au Festival Cinémagny, le rendez-vous incontournable
                du cinéma indépendant ! Pendant cinq jours, plongez au cœur du
                7ᵉ art avec une programmation riche et variée : projections de
                longs et courts métrages, documentaires, films d'animation, et
                rencontres exclusives avec des réalisateurs et artistes
                émergents.
</p> <p class="pt-2.5 md:text-lg lg:text-center">
Que vous soyez cinéphile passionné ou simplement curieux, vivez
                une expérience unique, au cœur d'un cadre exceptionnel et
                convivial. Ne manquez pas cette célébration du cinéma qui met en
                lumière des talents locaux et internationaux !
</p> </div> <section class="mt-16"> <header class="text-center mb-8"> <h2 class="text-3xl md:text-4xl">
Le Rendez-vous dans les Vosges
</h2> </header> <div class="px-7 md:max-w-3xl lg:max-w-4xl mx-auto"> <p class="md:text-lg pb-20 lg:text-center">
Découvrez Cinémagny, le festival de cinéma qui célèbre la
                    créativité et l'audace du 7ᵉ art. Au programme : longs
                    métrages, courts, documentaires et animations, avec un focus
                    sur les talents émergents et les artistes locaux. Plus qu'un
                    festival, c'est un espace de rencontres, d'ateliers et de
                    discussions passionnantes au cœur des Vosges.
</p> </div> <div class="flex justify-center items-center pb-20"> <img class="w-17 md:w-25 lg:w-30"${addAttribute(IconMontagne.src, "src")} alt="icon petites motagnes" aria-hidden="true"> </div> <div class="px-7 md:max-w-3xl lg:max-w-4xl mx-auto"> <p class="pb-2.5 md:text-lg lg:text-center">
Dès sa création en 2016, Cinémagny s'est donné pour mission
                    de valoriser les talents émergents et de mettre en lumière
                    des artistes souvent méconnus, qu'ils soient locaux ou issus
                    du cinéma indépendant.
</p> <p class="pb-20 md:text-lg lg:text-center">
L'objectif principal était clair : offrir une tribune aux
                    œuvres originales et audacieuses, loin des sentiers battus,
                    et permettre au public de découvrir une diversité de regards
                    et d'histoires.
</p> <p class="pb-20 font-playfair-display text-2xl md:text-3xl lg:text-4xl text-center lg:text-center">
Rejoignez-nous et laissez-vous emporter par la magie du
                    cinéma, là où chaque image raconte une histoire.
</p> </div> <div class="flex justify-center items-center pb-20"> <img class="w-17 md:w-25 lg:w-30"${addAttribute(IconPlanet.src, "src")} alt="icon planète" aria-hidden="true"> </div> <div class="px-7 md:max-w-3xl lg:max-w-4xl mx-auto"> <p class="pb-2.5 md:text-lg lg:text-center">
Le Festival Cinémagny est bien plus qu'un événement
                    cinématographique : il est un acteur engagé pour l'écologie.
                    Au cœur des Vosges, ce festival met en avant des films qui
                    sensibilisent aux enjeux environnementaux, tout en adoptant
                    des pratiques durables.
</p> <p class="md:text-lg pb-20 lg:text-center">
En réduisant son empreinte carbone et en privilégiant des
                    solutions écologiques pour ses installations, Cinémagny
                    s'engage à promouvoir un cinéma responsable et respectueux
                    de la planète.
</p> </div> </section> <section> <header class="text-center mb-8"> <h2 class="text-3xl md:text-4xl">Notre Équipe</h2> </header> <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8 max-w-7xl mx-auto"> ${equipe.map((membre) => renderTemplate`<li class="flex justify-center"> ${renderComponent($$result3, "Cardequipe", $$Cardequipe, { ...membre })} </li>`)} </ul> </section> ` })}` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/festival.astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/festival.astro";
const $$url = "/festival";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Festival,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
