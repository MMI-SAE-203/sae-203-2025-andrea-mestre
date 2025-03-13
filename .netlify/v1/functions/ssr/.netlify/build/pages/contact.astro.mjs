import { e as createComponent, i as renderComponent, r as renderTemplate, j as Fragment, m as maybeRenderHead } from '../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_BmflSPPP.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": "Contact" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section> <form action="/api/contact" method="POST" class="space-y-6"> <div> <label for="nomComplet" class="block text-sm font-medium text-gray-700">Nom complet</label> <input type="text" name="nom_complet" placeholder="Ex : Cristiano Ronaldo" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"> </div> <div> <label for="adresse_email" class="block text-sm font-medium text-gray-700">Adresse email</label> <input type="email" name="adresse_email" placeholder="Ex : cristiano.ronaldoSUI@gmail.com" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"> </div> <div> <label for="Objet" class="block text-sm font-medium text-gray-700">Objet</label> <input type="text" name="objet" placeholder="Ex : Demande de partenariat" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">Message</label> <textarea name="message" rows="4" placeholder="Ex : SUIIII" required class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"></textarea> </div> <div> <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-blue focus:outline-none focus:ring-2 focus:ring-offset-2">
Envoyer
</button> </div> </form> </section> ` })}` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/contact.astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
