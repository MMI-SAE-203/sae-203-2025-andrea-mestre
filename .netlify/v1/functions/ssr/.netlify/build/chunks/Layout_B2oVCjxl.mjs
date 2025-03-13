import { e as createComponent, m as maybeRenderHead, h as addAttribute, l as renderScript, r as renderTemplate, f as createAstro, i as renderComponent, k as renderSlot, n as renderHead } from './astro/server_RGiML3xJ.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const IconLogo = new Proxy({"src":"/_astro/logo-festival_cinemagny.Bl5ytrao.svg","width":182,"height":182,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/logo-festival_cinemagny.svg";
							}
							
							return target[name];
						}
					});

const IconMenu = new Proxy({"src":"/_astro/icon-menu.I9rqL0iu.svg","width":31,"height":28,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-menu.svg";
							}
							
							return target[name];
						}
					});

const IconCaddie = new Proxy({"src":"/_astro/panier.jGL2ezrU.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/panier.svg";
							}
							
							return target[name];
						}
					});

const IconClose = new Proxy({"src":"/_astro/icon-croix.Bj1jgz9_.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-croix.svg";
							}
							
							return target[name];
						}
					});

const IconInsta = new Proxy({"src":"/_astro/icon-instagram.CT4KAHli.svg","width":34,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-instagram.svg";
							}
							
							return target[name];
						}
					});

const IconFacebook = new Proxy({"src":"/_astro/icon-facebook.0-NBwPSj.svg","width":34,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-facebook.svg";
							}
							
							return target[name];
						}
					});

const IconTwitter = new Proxy({"src":"/_astro/icon-twitter.DDymPeqx.svg","width":46,"height":38,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/icon-twitter.svg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between items-center p-7 md:px-12"> <div class="md:hidden"> <img class="w-10 cursor-pointer menu-btn"${addAttribute(IconMenu.src, "src")} alt="boutton menu" aria-expanded="false"> </div> <div class="hidden md:flex md:flex-1 md:items-center"> <nav class="desktop-nav"> <ul class="flex space-x-19"> <li> <a href="/festival" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Festival</a> </li> <li> <a href="/films" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Programme</a> </li> <li> <a href="/invités" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Activités</a> </li> <li> <a href="/billeterie" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Billetterie</a> </li> </ul> </nav> </div> <div> <a href="/" aria-label="Retourner à l'accueil"> <img${addAttribute(IconLogo.src, "src")} alt="logoFestival"> </a> </div> <div class="md:flex-1 flex justify-end items-center"> <div class="hidden md:flex md:mr-6"> <ul class="flex space-x-19"> <li> <a href="/ecoresponsabilite" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Écoresponsabilité</a> </li> <li> <a href="/infospratiques" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Infos Pratiques</a> </li> <li> <a href="/contact" class="text-white font-playfair-display text-2xl uppercase transition duration-300 hover:text-black transform hover:scale-110">Contact</a> </li> </ul> </div> <a aria-label="aller au panier" class="transform hover:scale-110 transition duration-300 p-0 m-0"> <img class="w-11 md:w-7"${addAttribute(IconCaddie.src, "src")} alt="panier"> </a> </div> </div> <nav class="menu fixed top-0 left-0 w-full h-full bg-blue transform transition-transform duration-400 ease-in-out -translate-x-full md:hidden" aria-hidden="true" data-hidden="true"> <div class="p-15 pt-20"> <ul class="flex flex-col gap-10 items-start space-y-4"> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item"> <a href="/" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Accueil</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-75"> <a href="/festival" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Festival</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-150"> <a href="/films" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Programme</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-225"> <a href="/activites" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Activités</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-300"> <a href="/billeterie" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Billetterie</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-375"> <a href="/ecoresponsabilite" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Écoresponsabilité</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-450"> <a href="/infos-pratiques" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Infos pratiques</a> </li> <li class="transform translate-x-[-50px] opacity-0 transition-all duration-300 menu-item delay-525"> <a href="/contact" class="text-3xl text-white font-playfair-display transition-colors hover:text-black">Contact</a> </li> </ul> <button class="menu-close-btn flex absolute right-15 top-19 transform transition-all duration-300 hover:rotate-90 hover:scale-110" aria-label="Fermer le menu"> <img class="w-10"${addAttribute(IconClose.src, "src")} alt="Fermer le menu"> </button> </div> <div class="absolute bottom-10 left-22"> <ul class="flex flex-row gap-15" aria-label="Nos Réseaux sociaux"> <li> <a href="https://www.facebook.com/mmimontbeliard/?locale=fr_FR" aria-label="Viste notre facebook" class="block transform hover:scale-110 transition duration-300"> <img class="w-10"${addAttribute(IconFacebook.src, "src")} alt="icon-facebook"> </a> </li> <li> <a href="https://www.instagram.com/mmi_montbeliard/p/C1KAs9_N_Ed/?img_index=1" aria-label="Visite notre instagram" class="block transform hover:scale-110 transition duration-300"> <img class="w-10"${addAttribute(IconInsta.src, "src")} alt="icon instagram"> </a> </li> <li> <a href="https://twitter.com/mmimontbeliard" aria-label="Visite notre twitter" class="block transform hover:scale-110 transition duration-300"> <img class="w-12"${addAttribute(IconTwitter.src, "src")} alt="icon twitter"> </a> </li> </ul> </div> </nav> ${renderScript($$result, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Header.astro", void 0);

const ImgHero = new Proxy({"src":"/_astro/img-montagne.CgrmogmG.svg","width":391,"height":75,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/assets/icons/img-montagne.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <ul class="flex justify-center items-center flex-col gap-10 pt-10"> <li> <a class="text-white text-xl font-bold" href="/festival" aria-label="Visite notre page festival">Festival</a> </li> <li> <a class="text-white text-xl font-bold" href="/contact.html" aria-label="contact nous dans la page contact">Contact</a> </li> <li> <a class="text-white text-xl font-bold" href="#" aria-label="faq">FAQ</a> </li> <li> <a class="text-white text-xl font-bold" href="#" aria-label="notre page support">Support</a> </li> </ul> <div class="py-10 "> <ul class="flex justify-center items-center gap-10"> <li> <a href="https://www.instagram.com/mmi_montbeliard/" aria-label="Visite notre instagram"> <img class="w-12"${addAttribute(IconInsta.src, "src")} alt="icon-intagram"> </a> </li> <li> <a href="https://www.facebook.com/mmimontbeliard/?locale=fr_FR" aria-label="visite notre facebook"> <img class="w-12"${addAttribute(IconFacebook.src, "src")} alt="icon-facebook"> </a> </li> <li> <a href="https://x.com/MMImontbeliard/status/1365345886981656577" aria-label="visite notre twitter"> <img class="w-15"${addAttribute(IconTwitter.src, "src")} alt="icon-twitter"> </a> </li> </ul> </div> <div class="flex justify-center items-center "> <p class="text-white text-center text-xs w-60">
Ce site est un projet réalisé en 2024 dans le cadre d'un exercice
            pédagogique au département MMi de Montbéliard
</p> </div> <div> <img class="w-full h-auto"${addAttribute(ImgHero.src, "src")} alt="montagne design" aria-hidden="true"> </div> </footer>`;
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image = "/screenshot.jpg" } = Astro2.props;
  const baseUrl = "https://www.example.com";
  const pageUrl = `${baseUrl}${Astro2.url.pathname}`;
  const siteName = "Cinemagny";
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>', '</title><meta name="description"', '><meta name="generator"', '><meta name="robots" content="index, follow"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site" content="@yourtwitterhandle"><link rel="canonical"', '><!-- Les liens preconnect pour Google Fonts ne sont plus n\xE9cessaires avec @fontsource --><link rel="dns-prefetch"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>Cinemagny</title>", "</head> <body> ", " <main> ", " </main> ", ' <script type="module" src="/src/js/script.js"><\/script> </body> </html>'])), title ? `${title} \u2014 ${siteName}` : siteName, addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(pageUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(pageUrl, "href"), addAttribute(pageUrl, "href"), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/layouts/Layout.astro", void 0);

export { $$Layout as $, ImgHero as I };
