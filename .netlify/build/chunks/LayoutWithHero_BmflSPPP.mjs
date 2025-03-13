import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, k as renderSlot, h as addAttribute } from './astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_B2oVCjxl.mjs';

const $$Astro = createAstro();
const $$LayoutWithHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutWithHero;
  const {
    title,
    subTitle,
    src,
    alt,
    classContent = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-30"> <div> <h1 class="text-white font-playfair text-7xl drop-shadow-lg flex justify-center items-center"> ${title} </h1> ${subTitle && renderTemplate`<h2 class="text-white font-playfair-display text-2xl drop-shadow-lg flex justify-center items-center"> ${subTitle} </h2>`} </div> <div> ${renderSlot($$result2, $$slots["chapo"])} </div> <div${addAttribute(classContent, "class")}> ${renderSlot($$result2, $$slots["content"])} </div> </div>` })}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/layouts/LayoutWithHero.astro", void 0);

export { $$LayoutWithHero as $ };
