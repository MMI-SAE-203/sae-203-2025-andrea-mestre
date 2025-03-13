import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B2oVCjxl.mjs';
import { c as getInviteById, f as formatDate } from '../../chunks/backend_B_f8ogR8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invite = await getInviteById(id);
  const dateNaissance = invite.expand?.anime_activite?.date_activite ? formatDate(invite.expand.anime_activite.date_activite) : null;
  if (!invite) {
    return Astro2.redirect("/invit\xE9s");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="flex justify-start items-center flex-col"> <img class="rounded-lg"${addAttribute(invite.photo, "src")} alt="photo invite"> <h1 class="text-6xl font-playfair-display drop-shadow-lg"> ${invite.nom} ${invite.prenom} </h1> <p class="font-monserrat text-2xl">${dateNaissance}</p> <p>${invite.metiers}</p> </div> </section> ` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/invit\xE9s/[id].astro", void 0);

const $$file = "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/invités/[id].astro";
const $$url = "/invités/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
