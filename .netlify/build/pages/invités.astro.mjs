import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, u as unescapeHTML, i as renderComponent, j as Fragment } from '../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_BmflSPPP.mjs';
import { f as formatDate, d as getInviteByName, e as getActiviteType } from '../chunks/backend_B_f8ogR8.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Cardinvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cardinvite;
  const { ...invite } = Astro2.props;
  const date = invite.expand?.anime_activite?.date_activite ? formatDate(invite.expand.anime_activite.date_activite) : null;
  invite.expand?.anime_activite?.titre || null;
  return renderTemplate`${maybeRenderHead()}<div class="group h-full flex flex-col overflow-hidden bg-white rounded-sm shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"> ${invite.photo ? renderTemplate`<div class="relative w-full h-56 overflow-hidden"> <img${addAttribute(invite.photo, "src")}${addAttribute(`Photo de ${invite.prenom} ${invite.nom}`, "alt")} class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"> </div>` : renderTemplate`<div class="w-full h-56 bg-gray-200 flex items-center justify-center"> <span class="text-gray-400">Pas de photo</span> </div>`} <div class="flex flex-col grow p-5"> <h3 class="text-xl md:text-3xl text-gray-900 mb-1"> ${invite.prenom} ${invite.nom} </h3> ${invite.metiers && renderTemplate`<p class="text-blue font-medium mb-3">${invite.metiers}</p>`} ${date && renderTemplate`<div class="mt-2 pt-3 border-t border-gray-100"> <p class="text-center pt-5 text-xl pb-4 mx-4"> ${invite.expand.anime_activite.titre_activite} </p> <p class="text-sm text-gray-600"> <span class="decoration-gray-600">Activité prévue le : </span>${" "} ${date} </p> </div>`} <div> <a${addAttribute(`/invit\xE9s/${invite.id}`, "href")} class="inline-flex items-center justify-center w-full button bg-brown">En savoir plus
</a> </div> </div> </div>`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Cardinvite.astro", void 0);

const $$Astro = createAstro();
const $$CardExposition = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardExposition;
  const { ...activite } = Astro2.props;
  const date = activite.date_activite ? formatDate(activite.date_activite) : null;
  return renderTemplate`${maybeRenderHead()}<div class="group h-full flex flex-col overflow-hidden bg-white rounded-sm shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"> ${activite.image ? renderTemplate`<div class="relative w-full h-56 overflow-hidden"> <img${addAttribute(activite.image, "src")}${addAttribute(`Photo de l'activit\xE9 ${activite.titre_activite}`, "alt")} class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"> </div>` : renderTemplate`<div class="w-full h-56 md:h-64 lg:h-72 bg-gray-200 flex items-center justify-center"> <span class="text-gray-400">Pas de photo</span> </div>`} <div class="flex flex-col grow p-4 md:p-5 lg:p-6"> <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-900 mb-1 line-clamp-2"> ${activite.titre_activite} </h3> ${activite.type && renderTemplate`<p class="text-blue font-medium mb-3 text-sm md:text-base"> ${activite.type} </p>`} ${activite.description && renderTemplate`<div class="text-gray-600 mb-3 prose-sm md:prose-base line-clamp-3 md:line-clamp-4"> <p>${unescapeHTML(
    activite.description.substring(0, 120) + (activite.description > 120 ? "..." : "")
  )}</p> </div>`} ${date && renderTemplate`<div class="mt-2 pt-3 border-t border-gray-100"> <p class="text-sm md:text-base text-gray-600 flex items-center"> <span class="font-semibold mr-1">
Activité prévue le :
</span>${" "} <span>${date}</span> </p> </div>`} <div class="mt-auto pt-4 md:pt-5"> <a${addAttribute(`/activites/${activite.id}`, "href")} class="inline-flex items-center justify-center w-full button bg-brown py-2 md:py-3 text-sm md:text-base">
En savoir plus
</a> </div> </div> </div>`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/CardExposition.astro", void 0);

const IconClap = new Proxy({"src":"/_astro/icon-clap.CUuZvOWc.svg","width":60,"height":60,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-clap.svg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const ByName = await getInviteByName();
  const activites = await getActiviteType();
  const title = "Activites";
  const subTitle = "12 au 16 novembre 2025";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "t": true, "title": title, "subTitle": subTitle }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> <header> <div class="flex justify-center items-center pb-8"> <img class="w-17 md:w-25 lg:w-30"${addAttribute(IconClap.src, "src")} alt="icone clap cinema" aria-hidden="true"> </div> <h2>Les Rencontres</h2> </header> <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-13 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"> ${ByName.map((invite) => renderTemplate`<li> ${renderComponent($$result3, "Cardinvite", $$Cardinvite, { ...invite })} </li>`)} </ul> </section> <section> <header> <h2>Nos Expositions</h2> </header> <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-13 sm:px-6 md:px-8"> ${activites.map((activite) => renderTemplate`<li> <p> ${renderComponent($$result3, "CardExposition", $$CardExposition, { ...activite })} </p> </li>`)} </ul> </section> ` })}` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/invit\xE9s/index.astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/invités/index.astro";
const $$url = "/invités";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
