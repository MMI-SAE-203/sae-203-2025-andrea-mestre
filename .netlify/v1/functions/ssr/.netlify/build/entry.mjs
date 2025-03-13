import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_60GZTAZZ.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/billetterie.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/ecoresposabilite.astro.mjs');
const _page4 = () => import('./pages/festival.astro.mjs');
const _page5 = () => import('./pages/films/_id_.astro.mjs');
const _page6 = () => import('./pages/films.astro.mjs');
const _page7 = () => import('./pages/infospratiques.astro.mjs');
const _page8 = () => import('./pages/invités/_id_.astro.mjs');
const _page9 = () => import('./pages/invités.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/billetterie.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/ecoresposabilite.astro", _page3],
    ["src/pages/festival.astro", _page4],
    ["src/pages/films/[id].astro", _page5],
    ["src/pages/films/index.astro", _page6],
    ["src/pages/infospratiques.astro", _page7],
    ["src/pages/invités/[id].astro", _page8],
    ["src/pages/invités/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "36c9c2ab-7744-45d1-a0ff-ed4dd3022887"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
