import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_RGiML3xJ.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/","cacheDir":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/node_modules/.astro/","outDir":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/dist/","srcDir":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/","publicDir":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/public/","buildClientDir":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/dist/","buildServerDir":"file:///C:/Users/THAI%20Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/billetterie","isIndex":false,"type":"page","pattern":"^\\/billetterie\\/?$","segments":[[{"content":"billetterie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/billetterie.astro","pathname":"/billetterie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ecoresposabilite","isIndex":false,"type":"page","pattern":"^\\/ecoresposabilite\\/?$","segments":[[{"content":"ecoresposabilite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ecoresposabilite.astro","pathname":"/ecoresposabilite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/festival","isIndex":false,"type":"page","pattern":"^\\/festival\\/?$","segments":[[{"content":"festival","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/festival.astro","pathname":"/festival","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/films/[id]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/films","isIndex":true,"type":"page","pattern":"^\\/films\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/films/index.astro","pathname":"/films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/infospratiques","isIndex":false,"type":"page","pattern":"^\\/infospratiques\\/?$","segments":[[{"content":"infospratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infospratiques.astro","pathname":"/infospratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/invités/[id]","isIndex":false,"type":"page","pattern":"^\\/invités\\/([^/]+?)\\/?$","segments":[[{"content":"invités","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invités/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/invités","isIndex":true,"type":"page","pattern":"^\\/invités\\/?$","segments":[[{"content":"invités","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invités/index.astro","pathname":"/invités","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BWG20MMG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/festival.astro",{"propagation":"none","containsHead":true}],["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/invités/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/films/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/films/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/pages/invités/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/billetterie@_@astro":"pages/billetterie.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/ecoresposabilite@_@astro":"pages/ecoresposabilite.astro.mjs","\u0000@astro-page:src/pages/festival@_@astro":"pages/festival.astro.mjs","\u0000@astro-page:src/pages/films/[id]@_@astro":"pages/films/_id_.astro.mjs","\u0000@astro-page:src/pages/films/index@_@astro":"pages/films.astro.mjs","\u0000@astro-page:src/pages/infospratiques@_@astro":"pages/infospratiques.astro.mjs","\u0000@astro-page:src/pages/invités/[id]@_@astro":"pages/invités/_id_.astro.mjs","\u0000@astro-page:src/pages/invités/index@_@astro":"pages/invités.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_60GZTAZZ.mjs","C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C4WxWaLD.mjs","C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CqqOoGP5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/THAI Nicolas/Documents/GitHub/sae-203-2025-andrea-mestre/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelector(\".menu-btn\"),s=document.querySelector(\".menu-close-btn\"),e=document.querySelector(\".menu\"),a=document.body;if(!t||!e)return;function o(){t.setAttribute(\"aria-expanded\",\"true\"),e.setAttribute(\"aria-hidden\",\"false\"),e.setAttribute(\"data-hidden\",\"false\"),e.classList.remove(\"-translate-x-full\"),a.classList.add(\"overflow-hidden\"),d()}function u(){t.setAttribute(\"aria-expanded\",\"false\"),e.setAttribute(\"aria-hidden\",\"true\"),e.setAttribute(\"data-hidden\",\"true\"),e.classList.add(\"-translate-x-full\"),a.classList.remove(\"overflow-hidden\"),r()}function d(){document.querySelectorAll(\".menu-item\").forEach((n,i)=>{setTimeout(()=>{n.classList.remove(\"translate-x-[-50px]\",\"opacity-0\")},i*75)})}function r(){document.querySelectorAll(\".menu-item\").forEach(n=>{n.classList.add(\"translate-x-[-50px]\",\"opacity-0\")})}t.addEventListener(\"click\",o),s&&s.addEventListener(\"click\",u)});"]],"assets":["/_astro/icon-planet.BAuq5aNg.svg","/_astro/icon-montain.DJAw26UF.svg","/_astro/icon-MMI_montbéliard.9xKtsNgv.png","/_astro/icon-ufc.Canwhijd.svg","/_astro/departement.DVNjUuEC.svg","/_astro/icon-camera.BJirB0ru.svg","/_astro/icon-clap.CUuZvOWc.svg","/_astro/img-montagne.CgrmogmG.svg","/_astro/icon-facebook.0-NBwPSj.svg","/_astro/icon-twitter.DDymPeqx.svg","/_astro/icon-instagram.CT4KAHli.svg","/_astro/icon-menu.I9rqL0iu.svg","/_astro/icon-croix.Bj1jgz9_.svg","/_astro/panier.jGL2ezrU.svg","/_astro/logo-festival_cinemagny.Bl5ytrao.svg","/_astro/playfair-latin-ext-400-normal.CSgqP5fI.woff2","/_astro/playfair-vietnamese-400-normal.C7WOzRez.woff2","/_astro/playfair-cyrillic-ext-400-normal.Pcp7sc5v.woff2","/_astro/playfair-cyrillic-400-normal.BXdLlmKK.woff2","/_astro/playfair-latin-400-normal.1dJYXFoQ.woff2","/_astro/playfair-display-cyrillic-400-normal.Bw4gXCin.woff2","/_astro/playfair-display-vietnamese-400-normal.DP5NnYLI.woff2","/_astro/playfair-display-latin-400-normal.B74d1IHM.woff2","/_astro/playfair-display-latin-ext-400-normal.CDP9IHBB.woff2","/_astro/montserrat-vietnamese-400-normal.CgEMIOQI.woff2","/_astro/montserrat-cyrillic-400-normal.BNZrkLa0.woff2","/_astro/montserrat-cyrillic-ext-400-normal.C8cdMEH1.woff2","/_astro/montserrat-latin-ext-400-normal.Cd0_BKvP.woff2","/_astro/montserrat-latin-400-normal.CIMKXMQI.woff2","/_astro/playfair-vietnamese-400-normal.lJrr49Z8.woff","/_astro/playfair-cyrillic-ext-400-normal.DshNYWhU.woff","/_astro/playfair-cyrillic-400-normal.CvJRbsfn.woff","/_astro/playfair-latin-ext-400-normal.COV6Huy0.woff","/_astro/playfair-latin-400-normal.tNP7ZrZI.woff","/_astro/playfair-display-cyrillic-400-normal.DIDQ5qyx.woff","/_astro/playfair-display-vietnamese-400-normal.0Xrw1F2p.woff","/_astro/playfair-display-latin-400-normal.DC9_0-8q.woff","/_astro/montserrat-cyrillic-400-normal.DpKvHuFb.woff","/_astro/playfair-display-latin-ext-400-normal.BpHmUUWd.woff","/_astro/montserrat-vietnamese-400-normal.B33MQ3yC.woff","/_astro/montserrat-cyrillic-ext-400-normal.BWKiD3Kv.woff","/_astro/montserrat-latin-ext-400-normal.Cy-iUbkq.woff","/_astro/montserrat-latin-400-normal.Sf4eHQyG.woff","/_astro/contact.BWG20MMG.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jZgb0VldmU4JoKgsDmc4FX+yH9tgmx7h8Taji5xtq9A="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
