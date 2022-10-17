!function(){"use strict";(()=>{var e={895:()=>{try{self["workbox:cacheable-response:6.4.2"]&&_()}catch(e){}},913:()=>{try{self["workbox:core:6.4.2"]&&_()}catch(e){}},550:()=>{try{self["workbox:expiration:6.4.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}(()=>{s(913);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[t.prefix,e,t.suffix].filter((e=>e&&e.length>0)).join("-"),n=e=>e||a(t.precache),r=e=>e||a(t.runtime);function i(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class c{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const o=new Set;function l(e){return"string"==typeof e?new Request(e):e}s(873);class h{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new c,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:s}=this;let a=l(t);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const r=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=l(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(t,s){const a=l(t);await new Promise((e=>setTimeout(e,0)));const n=await this.getCacheKey(a,"write");if(!s)throw new e("cache-put-with-no-response",{url:(r=n.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:h,matchOptions:u}=this._strategy,d=await self.caches.open(h),f=this.hasCallback("cacheDidUpdate"),p=f?await async function(e,t,s,a){const n=i(t.url,s);if(t.url===n)return e.match(t,a);const r=Object.assign(Object.assign({},a),{ignoreSearch:!0}),c=await e.keys(t,r);for(const t of c)if(n===i(t.url,s))return e.match(t,a)}(d,n.clone(),["__WB_REVISION__"],u):null;try{await d.put(n,f?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of o)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:p,newResponse:c.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=l(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class u{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new h(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(t,s,a){let n;await t.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,t),!n||"error"===n.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(n=await r({error:e,event:a,request:s}),n)break;if(!n)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))n=await e({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}const d={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};s(80);const f=e=>e&&"object"==typeof e?e:{handle:e};class p{constructor(e,t,s="GET"){this.handler=f(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=f(e)}}class g extends p{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class m{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const l=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||l)&&(o=o.catch((async a=>{if(l)try{return await l.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,f(e))}setCatchHandler(e){this._catchHandler=f(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(t){if(!this._routes.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this._routes.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this._routes.get(t.method).splice(s,1)}}let w,b,y;function _(t,s,a){let n;if("string"==typeof t){const e=new URL(t,location.href);n=new p((({url:t})=>t.href===e.href),s,a)}else if(t instanceof RegExp)n=new g(t,s,a);else if("function"==typeof t)n=new p(t,s,a);else{if(!(t instanceof p))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=t}return(w||(w=new m,w.addFetchListener(),w.addCacheListener()),w).registerRoute(n),n}function v(e,t){const s=t();return e.waitUntil(s),s}function R(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:a}=t;if(!a)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),r=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:r.href}}s(977);class x{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class C{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}class E extends u{constructor(e={}){e.cacheName=n(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=n.integrity,r=t.integrity,i=!r||r===e;a=await s.fetch(new Request(t,{integrity:r||e})),e&&i&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,a.clone()))}return a}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(t);if(!await s.cachePut(t,a.clone()))throw new e("bad-precaching-response",{url:t.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==E.copyRedirectedCacheableResponsesPlugin&&(a===E.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},E.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let a=null;if(t.url&&(a=new URL(t.url).origin),a!==self.location.origin)throw new e("cross-origin-copy-response",{origin:a});const n=t.clone(),r={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},i=r,c=function(){if(void 0===b){const e=new Response("");if("body"in e)try{new Response(e.body),b=!0}catch(e){b=!1}b=!1}return b}()?n.body:await n.blob();return new Response(c,i)}(t):t};class L{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new E({cacheName:n(e),plugins:[...t,new C({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const a of t){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:t,url:n}=R(a),r="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:t});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==a.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(t,a.integrity)}if(this._urlsToCacheKeys.set(n,t),this._urlsToCacheModes.set(n,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return v(e,(async()=>{const t=new x;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return v(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}const M=()=>(y||(y=new L),y);class k extends p{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(n);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function q(e){e.then((()=>{}))}let T,U;const D=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,P=new WeakMap;let K={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return N.get(e);if("objectStoreNames"===t)return e.objectStoreNames||I.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return A(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function A(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(A(e.result)),a()},r=()=>{s(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&D.set(t,e)})).catch((()=>{})),P.set(t,e),t}(e);if(S.has(e))return S.get(e);const t=function(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(U||(U=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(B(this),e),A(D.get(this))}:function(...e){return A(t.apply(B(this),e))}:function(e,...s){const a=t.call(B(this),e,...s);return I.set(a,e.sort?e.sort():[e]),A(a)}:(e instanceof IDBTransaction&&function(e){if(N.has(e))return;const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),a()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)}));N.set(e,t)}(e),s=e,(T||(T=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>s instanceof e))?new Proxy(e,K):e);var t,s}(e);return t!==e&&(S.set(e,t),P.set(t,e)),t}const B=e=>P.get(e),O=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],W=new Map;function F(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(W.get(t))return W.get(t);const s=t.replace(/FromIndex$/,""),a=t!==s,n=j.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!O.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let i=r.store;return a&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),n&&r.done]))[0]};return W.set(t,r),r}var H;H=K,K={...H,get:(e,t,s)=>F(e,t)||H.get(e,t,s),has:(e,t)=>!!F(e,t)||H.has(e,t)},s(550);const $="cache-entries",G=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class V{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore($,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(()=>t())),A(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=G(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction($,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get($,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let a=await s.transaction($).store.index("timestamp").openCursor(null,"prev");const n=[];let r=0;for(;a;){const s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?n.push(a.value):r++),a=await a.continue()}const i=[];for(const e of n)await s.delete($,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+G(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:n,terminated:r}={}){const i=indexedDB.open(e,t),c=A(i);return a&&i.addEventListener("upgradeneeded",(e=>{a(A(i.result),e.oldVersion,e.newVersion,A(i.transaction))})),s&&i.addEventListener("blocked",(()=>s())),c.then((e=>{r&&e.addEventListener("close",(()=>r())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class Q{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new V(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,q(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}class J{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const n=this._isResponseDateFresh(a),r=this._getCacheExpiration(s);q(r.expireEntries());const i=r.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return n?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),o.add(t))}_getCacheExpiration(t){if(t===r())throw new e("expire-custom-caches-only");let s=this._cacheExpirations.get(t);return s||(s=new Q(t,this._config),this._cacheExpirations.set(t,s)),s}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}s(895);class z{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class X{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new z(e)}}const Y=location.hostname.endsWith(".app.local")||"localhost"===location.hostname,Z=31536e3;function ee(e){return`energy-service-${e}-v1.2.2`}Y&&console.debug("Service worker version 1.0.0 loading..."),(e=>{(e=>{for(const s of Object.keys(t))e(s)})((s=>{"string"==typeof e[s]&&(t[s]=e[s])}))})({prefix:"energy-service",suffix:"v1.2.2",precache:"assets",runtime:"assets",googleAnalytics:"custom-google-analytics-name"}),self.addEventListener("activate",(e=>{const t=n();e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e));return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(t).then((e=>{})))}));const te=[{revision:null,url:"/business-card/assets/font/Manrope-Bold-0d920c4d6ed87515afb2b3d862955f8a.eot"},{revision:null,url:"/business-card/assets/font/Manrope-Bold-4416f774ecda3eb111f01c4ca8ba0987.ttf"},{revision:null,url:"/business-card/assets/font/Manrope-Bold-bfc4033bf77be1adec8a703b1e56b2d9.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-Bold-e87eff17fbd788c39558e709b8178248.woff"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraBold-4bed77390d8d60665848bae8c3dbec39.ttf"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraBold-a3ed7dc1b6c7090404af17b751eec827.woff"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraBold-d1d11772ef8869b256d9cb0dae1d85a3.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraBold-f7dab79dc55f2b46e17b3fb87316df72.eot"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraLight-3079dc07ea69ca354603c39bdefdb8db.eot"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraLight-708827ef7f5a37ae330d822c98810438.ttf"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraLight-9bd3449662ab5558992a88cbfff67ae9.woff"},{revision:null,url:"/business-card/assets/font/Manrope-ExtraLight-b8e4fc408760a02a5c84d372c6534d73.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-Light-536c57e6662544ecdbe0b7b68f07f3ea.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-Light-7ddd8c0dc34c005ef95e975330de9f97.woff"},{revision:null,url:"/business-card/assets/font/Manrope-Light-d1ff03dd3337b15dbadf5a94e730018e.ttf"},{revision:null,url:"/business-card/assets/font/Manrope-Light-e113b31bea296d5d752ee60f6b241a05.eot"},{revision:null,url:"/business-card/assets/font/Manrope-Medium-135592bdcde6fb4228eecd597111607d.eot"},{revision:null,url:"/business-card/assets/font/Manrope-Medium-230210f79765501c1ab718ffbc1399f9.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-Medium-455e3f5bb2cbb93667d5197d224593b7.woff"},{revision:null,url:"/business-card/assets/font/Manrope-Medium-78617ce2a6a4e9d9f36ec5d074706397.ttf"},{revision:null,url:"/business-card/assets/font/Manrope-Regular-15e344c414d52dd672ef8595fc7ccca8.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-Regular-d1384c3221d6bf5c6f29c3c28b3cbea8.woff"},{revision:null,url:"/business-card/assets/font/Manrope-Regular-d9a9a709e99ed578e0a2b4a023096648.eot"},{revision:null,url:"/business-card/assets/font/Manrope-Regular-fa5192ac22e523632fc42a8a10450ac1.ttf"},{revision:null,url:"/business-card/assets/font/Manrope-SemiBold-08b3000b995f4fdccf7c6110fac5a0ac.eot"},{revision:null,url:"/business-card/assets/font/Manrope-SemiBold-45721b3429a1fa90f750079d23dfcc25.woff2"},{revision:null,url:"/business-card/assets/font/Manrope-SemiBold-a716e35a52599b8145e462e6b9ebe83b.woff"},{revision:null,url:"/business-card/assets/font/Manrope-SemiBold-c5b5af003b93c0c9a2eac4950fe1f708.ttf"},{revision:null,url:"/business-card/assets/images/card-contacts-gradient-38d0addfe355f79146a6bf83273aa15e.png"},{revision:null,url:"/business-card/assets/images/card-contacts-gradient@2x-bed338b595e31f62eabb69d2964c3e75.png"},{revision:null,url:"/business-card/assets/images/check-a74022cef1f8f635e3ad671f53555096.png"},{revision:null,url:"/business-card/assets/images/check@2x-fc45b349279de01a842918d3ac972dd9.png"},{revision:null,url:"/business-card/assets/images/leasing-categories-gradient-e64a72e2dc7c919275df613cd12613cc.png"},{revision:null,url:"/business-card/assets/images/leasing-categories-gradient@2x-74981cc9d0c2e6e11dd893545dc27a69.png"},{revision:null,url:"/business-card/assets/images/logo-ac5aa5fa1d4519f1a072e146c905ffe8.svg"},{revision:"6044e3231b1cc6ff39ce52a2ad77ebb1",url:"/business-card/index.html"},{revision:null,url:"/business-card/js/index-456b48823e1c56f1df5a.js"},{revision:null,url:"/business-card/js/runtime-4f74c5d2d11f16d50f36.js"},{revision:null,url:"/business-card/js/vendor-3bb6a318cf0569021840.js"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"/business-card/robots.txt"},{revision:null,url:"/business-card/style/index-5cbc2dda817fd532489c.css"}];var se;Y&&console.trace("energy-service:: Assets that will be cached: ",te),se=te,M().precache(se),function(e){const t=M();_(new k(t,void 0))}(),_((({request:e,url:t})=>(console.log(t.pathname),t.pathname.startsWith("/static/")??["style","images","font","js"].includes(e.destination))),new class extends u{async _handle(t,s){let a,n=await s.cacheMatch(t);if(n);else try{n=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}if(!n)throw new e("no-response",{url:t.url,error:a});return n}}({cacheName:ee("assets"),plugins:[new X({statuses:[0,200]}),new J({maxAgeSeconds:Z,maxEntries:200,purgeOnQuotaError:!0})]})),_((({request:e,url:t})=>/^\//.exec(t.pathname)),new class extends u{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(d),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(t,s){const a=[],n=[];let r;if(this._networkTimeoutSeconds){const{id:e,promise:i}=this._getTimeoutPromise({request:t,logs:a,handler:s});r=e,n.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:t,logs:a,handler:s});n.push(i);const c=await s.waitUntil((async()=>await s.waitUntil(Promise.race(n))||await i)());if(!c)throw new e("no-response",{url:t.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}({cacheName:ee("home"),plugins:[new X({statuses:[0,200]}),new J({maxEntries:1,maxAgeSeconds:Z})]})),self.addEventListener("message",(e=>{e&&e.data&&("GET_VERSION"===e.data&&(Y&&console.debug("energy-service:: Returning the service worker version: 1.0.0"),e.ports[0].postMessage("1.0.0")),"SKIP_WAITING"===e.data&&(Y&&console.debug("energy-service:: Skipping waiting..."),self.skipWaiting()),"CLIENTS_CLAIM"===e.data&&(Y&&console.debug("energy-service:: Claiming clients and cleaning old caches"),self.clients.claim()),"UNREGISTER"===e.data&&(caches.keys().then((e=>Promise.all(e.map((e=>caches.delete(e)))))),self.registration.unregister()))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>!new RegExp("v1.2.2").exec(e))).map((e=>caches.delete(e)))))))}))})()})()}();
