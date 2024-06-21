// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gv7I1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4d94d0802d3ace14";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"4aBH6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _web = require("solid-js/web");
var _indexCss = require("./index.css");
var _router = require("@solidjs/router");
var _layout = require("./layout");
var _layoutDefault = parcelHelpers.interopDefault(_layout);
(0, _web.render)(()=>(0, _web.createComponent)((0, _router.Router), {
        root: (0, _layoutDefault.default),
        get children () {
            return (0, _web.createComponent)((0, _router.Route), {
                path: "/",
                component: demoComponent
            });
        }
    }), document.body);
function demoComponent() {
    return [];
}

},{"solid-js/web":"4YlCe","./index.css":"irmnC","@solidjs/router":"3P0aT","./layout":"szwO8","@parcel/transformer-js/src/esmodule-helpers.js":"bArT6"}],"4YlCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorBoundary", ()=>(0, _solidJs.ErrorBoundary));
parcelHelpers.export(exports, "For", ()=>(0, _solidJs.For));
parcelHelpers.export(exports, "Index", ()=>(0, _solidJs.Index));
parcelHelpers.export(exports, "Match", ()=>(0, _solidJs.Match));
parcelHelpers.export(exports, "Show", ()=>(0, _solidJs.Show));
parcelHelpers.export(exports, "Suspense", ()=>(0, _solidJs.Suspense));
parcelHelpers.export(exports, "SuspenseList", ()=>(0, _solidJs.SuspenseList));
parcelHelpers.export(exports, "Switch", ()=>(0, _solidJs.Switch));
parcelHelpers.export(exports, "createComponent", ()=>(0, _solidJs.createComponent));
parcelHelpers.export(exports, "effect", ()=>(0, _solidJs.createRenderEffect));
parcelHelpers.export(exports, "getOwner", ()=>(0, _solidJs.getOwner));
parcelHelpers.export(exports, "memo", ()=>(0, _solidJs.createMemo));
parcelHelpers.export(exports, "mergeProps", ()=>(0, _solidJs.mergeProps));
parcelHelpers.export(exports, "untrack", ()=>(0, _solidJs.untrack));
parcelHelpers.export(exports, "Aliases", ()=>Aliases);
parcelHelpers.export(exports, "Assets", ()=>voidFn);
parcelHelpers.export(exports, "ChildProperties", ()=>ChildProperties);
parcelHelpers.export(exports, "DOMElements", ()=>DOMElements);
parcelHelpers.export(exports, "DelegatedEvents", ()=>DelegatedEvents);
parcelHelpers.export(exports, "Dynamic", ()=>Dynamic);
parcelHelpers.export(exports, "Hydration", ()=>Hydration);
parcelHelpers.export(exports, "HydrationScript", ()=>voidFn);
parcelHelpers.export(exports, "NoHydration", ()=>NoHydration);
parcelHelpers.export(exports, "Portal", ()=>Portal);
parcelHelpers.export(exports, "Properties", ()=>Properties);
parcelHelpers.export(exports, "RequestContext", ()=>RequestContext);
parcelHelpers.export(exports, "SVGElements", ()=>SVGElements);
parcelHelpers.export(exports, "SVGNamespace", ()=>SVGNamespace);
parcelHelpers.export(exports, "addEventListener", ()=>addEventListener);
parcelHelpers.export(exports, "assign", ()=>assign);
parcelHelpers.export(exports, "classList", ()=>classList);
parcelHelpers.export(exports, "className", ()=>className);
parcelHelpers.export(exports, "clearDelegatedEvents", ()=>clearDelegatedEvents);
parcelHelpers.export(exports, "delegateEvents", ()=>delegateEvents);
parcelHelpers.export(exports, "dynamicProperty", ()=>dynamicProperty);
parcelHelpers.export(exports, "escape", ()=>escape);
parcelHelpers.export(exports, "generateHydrationScript", ()=>voidFn);
parcelHelpers.export(exports, "getAssets", ()=>voidFn);
parcelHelpers.export(exports, "getHydrationKey", ()=>getHydrationKey);
parcelHelpers.export(exports, "getNextElement", ()=>getNextElement);
parcelHelpers.export(exports, "getNextMarker", ()=>getNextMarker);
parcelHelpers.export(exports, "getNextMatch", ()=>getNextMatch);
parcelHelpers.export(exports, "getPropAlias", ()=>getPropAlias);
parcelHelpers.export(exports, "getRequestEvent", ()=>voidFn);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "innerHTML", ()=>innerHTML);
parcelHelpers.export(exports, "insert", ()=>insert);
parcelHelpers.export(exports, "isDev", ()=>isDev);
parcelHelpers.export(exports, "isServer", ()=>isServer);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "renderToStream", ()=>renderToStream);
parcelHelpers.export(exports, "renderToString", ()=>renderToString);
parcelHelpers.export(exports, "renderToStringAsync", ()=>renderToStringAsync);
parcelHelpers.export(exports, "resolveSSRNode", ()=>resolveSSRNode);
parcelHelpers.export(exports, "runHydrationEvents", ()=>runHydrationEvents);
parcelHelpers.export(exports, "setAttribute", ()=>setAttribute);
parcelHelpers.export(exports, "setAttributeNS", ()=>setAttributeNS);
parcelHelpers.export(exports, "setProperty", ()=>setProperty);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "ssr", ()=>ssr);
parcelHelpers.export(exports, "ssrAttribute", ()=>ssrAttribute);
parcelHelpers.export(exports, "ssrClassList", ()=>ssrClassList);
parcelHelpers.export(exports, "ssrElement", ()=>ssrElement);
parcelHelpers.export(exports, "ssrHydrationKey", ()=>ssrHydrationKey);
parcelHelpers.export(exports, "ssrSpread", ()=>ssrSpread);
parcelHelpers.export(exports, "ssrStyle", ()=>ssrStyle);
parcelHelpers.export(exports, "style", ()=>style);
parcelHelpers.export(exports, "template", ()=>template);
parcelHelpers.export(exports, "use", ()=>use);
parcelHelpers.export(exports, "useAssets", ()=>voidFn);
var _solidJs = require("solid-js");
const booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected"
];
const Properties = /*#__PURE__*/ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans
]);
const ChildProperties = /*#__PURE__*/ new Set([
    "innerHTML",
    "textContent",
    "innerText",
    "children"
]);
const Aliases = /*#__PURE__*/ Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
});
const PropAliases = /*#__PURE__*/ Object.assign(Object.create(null), {
    class: "className",
    formnovalidate: {
        $: "formNoValidate",
        BUTTON: 1,
        INPUT: 1
    },
    ismap: {
        $: "isMap",
        IMG: 1
    },
    nomodule: {
        $: "noModule",
        SCRIPT: 1
    },
    playsinline: {
        $: "playsInline",
        VIDEO: 1
    },
    readonly: {
        $: "readOnly",
        INPUT: 1,
        TEXTAREA: 1
    }
});
function getPropAlias(prop, tagName) {
    const a = PropAliases[prop];
    return typeof a === "object" ? a[tagName] ? a["$"] : undefined : a;
}
const DelegatedEvents = /*#__PURE__*/ new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart"
]);
const SVGElements = /*#__PURE__*/ new Set([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "set",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern"
]);
const SVGNamespace = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
};
const DOMElements = /*#__PURE__*/ new Set([
    "html",
    "base",
    "head",
    "link",
    "meta",
    "style",
    "title",
    "body",
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "main",
    "nav",
    "section",
    "body",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "area",
    "audio",
    "img",
    "map",
    "track",
    "video",
    "embed",
    "iframe",
    "object",
    "param",
    "picture",
    "portal",
    "source",
    "svg",
    "math",
    "canvas",
    "noscript",
    "script",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "textarea",
    "details",
    "dialog",
    "menu",
    "summary",
    "details",
    "slot",
    "template",
    "acronym",
    "applet",
    "basefont",
    "bgsound",
    "big",
    "blink",
    "center",
    "content",
    "dir",
    "font",
    "frame",
    "frameset",
    "hgroup",
    "image",
    "keygen",
    "marquee",
    "menuitem",
    "nobr",
    "noembed",
    "noframes",
    "plaintext",
    "rb",
    "rtc",
    "shadow",
    "spacer",
    "strike",
    "tt",
    "xmp",
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "image",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "plaintext",
    "portal",
    "pre",
    "progress",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp",
    "input",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
]);
function reconcileArrays(parentNode, a, b) {
    let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = a[aEnd - 1].nextSibling, map = null;
    while(aStart < aEnd || bStart < bEnd){
        if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
            continue;
        }
        while(a[aEnd - 1] === b[bEnd - 1]){
            aEnd--;
            bEnd--;
        }
        if (aEnd === aStart) {
            const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
            while(bStart < bEnd)parentNode.insertBefore(b[bStart++], node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            if (!map || !map.has(a[aStart])) a[aStart].remove();
            aStart++;
        }
        else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            const node = a[--aEnd].nextSibling;
            parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
            parentNode.insertBefore(b[--bEnd], node);
            a[aEnd] = b[bEnd];
        } else {
            if (!map) {
                map = new Map();
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            const index = map.get(a[aStart]);
            if (index != null) {
                if (bStart < index && index < bEnd) {
                    let i = aStart, sequence = 1, t;
                    while(++i < aEnd && i < bEnd){
                        if ((t = map.get(a[i])) == null || t !== index + sequence) break;
                        sequence++;
                    }
                    if (sequence > index - bStart) {
                        const node = a[aStart];
                        while(bStart < index)parentNode.insertBefore(b[bStart++], node);
                    } else parentNode.replaceChild(b[bStart++], a[aStart++]);
                } else aStart++;
            } else a[aStart++].remove();
        }
    }
}
const $$EVENTS = "_$DX_DELEGATE";
function render(code, element, init, options = {}) {
    let disposer;
    (0, _solidJs.createRoot)((dispose)=>{
        disposer = dispose;
        element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
    }, options.owner);
    return ()=>{
        disposer();
        element.textContent = "";
    };
}
function template(html, isCE, isSVG) {
    let node;
    const create = ()=>{
        const t = document.createElement("template");
        t.innerHTML = html;
        return isSVG ? t.content.firstChild.firstChild : t.content.firstChild;
    };
    const fn = isCE ? ()=>(0, _solidJs.untrack)(()=>document.importNode(node || (node = create()), true)) : ()=>(node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
}
function delegateEvents(eventNames, document1 = window.document) {
    const e = document1[$$EVENTS] || (document1[$$EVENTS] = new Set());
    for(let i = 0, l = eventNames.length; i < l; i++){
        const name = eventNames[i];
        if (!e.has(name)) {
            e.add(name);
            document1.addEventListener(name, eventHandler);
        }
    }
}
function clearDelegatedEvents(document1 = window.document) {
    if (document1[$$EVENTS]) {
        for (let name of document1[$$EVENTS].keys())document1.removeEventListener(name, eventHandler);
        delete document1[$$EVENTS];
    }
}
function setProperty(node, name, value) {
    !(0, _solidJs.sharedConfig).context && (node[name] = value);
}
function setAttribute(node, name, value) {
    if ((0, _solidJs.sharedConfig).context) return;
    if (value == null) node.removeAttribute(name);
    else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
    if ((0, _solidJs.sharedConfig).context) return;
    if (value == null) node.removeAttributeNS(namespace, name);
    else node.setAttributeNS(namespace, name, value);
}
function className(node, value) {
    if ((0, _solidJs.sharedConfig).context) return;
    if (value == null) node.removeAttribute("class");
    else node.className = value;
}
function addEventListener(node, name, handler, delegate) {
    if (delegate) {
        if (Array.isArray(handler)) {
            node[`$$${name}`] = handler[0];
            node[`$$${name}Data`] = handler[1];
        } else node[`$$${name}`] = handler;
    } else if (Array.isArray(handler)) {
        const handlerFn = handler[0];
        node.addEventListener(name, handler[0] = (e)=>handlerFn.call(node, handler[1], e));
    } else node.addEventListener(name, handler);
}
function classList(node, value, prev = {}) {
    const classKeys = Object.keys(value || {}), prevKeys = Object.keys(prev);
    let i, len;
    for(i = 0, len = prevKeys.length; i < len; i++){
        const key = prevKeys[i];
        if (!key || key === "undefined" || value[key]) continue;
        toggleClassKey(node, key, false);
        delete prev[key];
    }
    for(i = 0, len = classKeys.length; i < len; i++){
        const key = classKeys[i], classValue = !!value[key];
        if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
        toggleClassKey(node, key, true);
        prev[key] = classValue;
    }
    return prev;
}
function style(node, value, prev) {
    if (!value) return prev ? setAttribute(node, "style") : value;
    const nodeStyle = node.style;
    if (typeof value === "string") return nodeStyle.cssText = value;
    typeof prev === "string" && (nodeStyle.cssText = prev = undefined);
    prev || (prev = {});
    value || (value = {});
    let v, s;
    for(s in prev){
        value[s] == null && nodeStyle.removeProperty(s);
        delete prev[s];
    }
    for(s in value){
        v = value[s];
        if (v !== prev[s]) {
            nodeStyle.setProperty(s, v);
            prev[s] = v;
        }
    }
    return prev;
}
function spread(node, props = {}, isSVG, skipChildren) {
    const prevProps = {};
    if (!skipChildren) (0, _solidJs.createRenderEffect)(()=>prevProps.children = insertExpression(node, props.children, prevProps.children));
    (0, _solidJs.createRenderEffect)(()=>props.ref && props.ref(node));
    (0, _solidJs.createRenderEffect)(()=>assign(node, props, isSVG, true, prevProps, true));
    return prevProps;
}
function dynamicProperty(props, key) {
    const src = props[key];
    Object.defineProperty(props, key, {
        get () {
            return src();
        },
        enumerable: true
    });
    return props;
}
function use(fn, element, arg) {
    return (0, _solidJs.untrack)(()=>fn(element, arg));
}
function insert(parent, accessor, marker, initial) {
    if (marker !== undefined && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    (0, _solidJs.createRenderEffect)((current)=>insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
    props || (props = {});
    for(const prop in prevProps)if (!(prop in props)) {
        if (prop === "children") continue;
        prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef);
    }
    for(const prop in props){
        if (prop === "children") {
            if (!skipChildren) insertExpression(node, props.children);
            continue;
        }
        const value = props[prop];
        prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef);
    }
}
function hydrate$1(code, element, options = {}) {
    (0, _solidJs.sharedConfig).completed = globalThis._$HY.completed;
    (0, _solidJs.sharedConfig).events = globalThis._$HY.events;
    (0, _solidJs.sharedConfig).load = (id)=>globalThis._$HY.r[id];
    (0, _solidJs.sharedConfig).has = (id)=>id in globalThis._$HY.r;
    (0, _solidJs.sharedConfig).gather = (root)=>gatherHydratable(element, root);
    (0, _solidJs.sharedConfig).registry = new Map();
    (0, _solidJs.sharedConfig).context = {
        id: options.renderId || "",
        count: 0
    };
    gatherHydratable(element, options.renderId);
    const dispose = render(code, element, [
        ...element.childNodes
    ], options);
    (0, _solidJs.sharedConfig).context = null;
    return dispose;
}
function getNextElement(template) {
    let node, key;
    if (!(0, _solidJs.sharedConfig).context || !(node = (0, _solidJs.sharedConfig).registry.get(key = getHydrationKey()))) return template();
    if ((0, _solidJs.sharedConfig).completed) (0, _solidJs.sharedConfig).completed.add(node);
    (0, _solidJs.sharedConfig).registry.delete(key);
    return node;
}
function getNextMatch(el, nodeName) {
    while(el && el.localName !== nodeName)el = el.nextSibling;
    return el;
}
function getNextMarker(start) {
    let end = start, count = 0, current = [];
    if ((0, _solidJs.sharedConfig).context) while(end){
        if (end.nodeType === 8) {
            const v = end.nodeValue;
            if (v === "$") count++;
            else if (v === "/") {
                if (count === 0) return [
                    end,
                    current
                ];
                count--;
            }
        }
        current.push(end);
        end = end.nextSibling;
    }
    return [
        end,
        current
    ];
}
function runHydrationEvents() {
    if ((0, _solidJs.sharedConfig).events && !(0, _solidJs.sharedConfig).events.queued) {
        queueMicrotask(()=>{
            const { completed, events } = (0, _solidJs.sharedConfig);
            events.queued = false;
            while(events.length){
                const [el, e] = events[0];
                if (!completed.has(el)) return;
                eventHandler(e);
                events.shift();
            }
        });
        (0, _solidJs.sharedConfig).events.queued = true;
    }
}
function toPropertyName(name) {
    return name.toLowerCase().replace(/-([a-z])/g, (_, w)=>w.toUpperCase());
}
function toggleClassKey(node, key, value) {
    const classNames = key.trim().split(/\s+/);
    for(let i = 0, nameLen = classNames.length; i < nameLen; i++)node.classList.toggle(classNames[i], value);
}
function assignProp(node, prop, value, prev, isSVG, skipRef) {
    let isCE, isProp, isChildProp, propAlias, forceProp;
    if (prop === "style") return style(node, value, prev);
    if (prop === "classList") return classList(node, value, prev);
    if (value === prev) return prev;
    if (prop === "ref") {
        if (!skipRef) value(node);
    } else if (prop.slice(0, 3) === "on:") {
        const e = prop.slice(3);
        prev && node.removeEventListener(e, prev);
        value && node.addEventListener(e, value);
    } else if (prop.slice(0, 10) === "oncapture:") {
        const e = prop.slice(10);
        prev && node.removeEventListener(e, prev, true);
        value && node.addEventListener(e, value, true);
    } else if (prop.slice(0, 2) === "on") {
        const name = prop.slice(2).toLowerCase();
        const delegate = DelegatedEvents.has(name);
        if (!delegate && prev) {
            const h = Array.isArray(prev) ? prev[0] : prev;
            node.removeEventListener(name, h);
        }
        if (delegate || value) {
            addEventListener(node, name, value, delegate);
            delegate && delegateEvents([
                name
            ]);
        }
    } else if (prop.slice(0, 5) === "attr:") setAttribute(node, prop.slice(5), value);
    else if ((forceProp = prop.slice(0, 5) === "prop:") || (isChildProp = ChildProperties.has(prop)) || !isSVG && ((propAlias = getPropAlias(prop, node.tagName)) || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-"))) {
        if (forceProp) {
            prop = prop.slice(5);
            isProp = true;
        } else if ((0, _solidJs.sharedConfig).context) return value;
        if (prop === "class" || prop === "className") className(node, value);
        else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;
        else node[propAlias || prop] = value;
    } else {
        const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
        if (ns) setAttributeNS(node, ns, prop, value);
        else setAttribute(node, Aliases[prop] || prop, value);
    }
    return value;
}
function eventHandler(e) {
    const key = `$$${e.type}`;
    let node = e.composedPath && e.composedPath()[0] || e.target;
    if (e.target !== node) Object.defineProperty(e, "target", {
        configurable: true,
        value: node
    });
    Object.defineProperty(e, "currentTarget", {
        configurable: true,
        get () {
            return node || document;
        }
    });
    if ((0, _solidJs.sharedConfig).registry && !(0, _solidJs.sharedConfig).done) (0, _solidJs.sharedConfig).done = _$HY.done = true;
    while(node){
        const handler = node[key];
        if (handler && !node.disabled) {
            const data = node[`${key}Data`];
            data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
            if (e.cancelBubble) return;
        }
        node = node._$host || node.parentNode || node.host;
    }
}
function insertExpression(parent, value, current, marker, unwrapArray) {
    if ((0, _solidJs.sharedConfig).context) {
        !current && (current = [
            ...parent.childNodes
        ]);
        let cleaned = [];
        for(let i = 0; i < current.length; i++){
            const node = current[i];
            if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();
            else cleaned.push(node);
        }
        current = cleaned;
    }
    while(typeof current === "function")current = current();
    if (value === current) return current;
    const t = typeof value, multi = marker !== undefined;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
        if ((0, _solidJs.sharedConfig).context) return current;
        if (t === "number") value = value.toString();
        if (multi) {
            let node = current[0];
            if (node && node.nodeType === 3) node.data !== value && (node.data = value);
            else node = document.createTextNode(value);
            current = cleanChildren(parent, current, marker, node);
        } else if (current !== "" && typeof current === "string") current = parent.firstChild.data = value;
        else current = parent.textContent = value;
    } else if (value == null || t === "boolean") {
        if ((0, _solidJs.sharedConfig).context) return current;
        current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
        (0, _solidJs.createRenderEffect)(()=>{
            let v = value();
            while(typeof v === "function")v = v();
            current = insertExpression(parent, v, current, marker);
        });
        return ()=>current;
    } else if (Array.isArray(value)) {
        const array = [];
        const currentArray = current && Array.isArray(current);
        if (normalizeIncomingArray(array, value, current, unwrapArray)) {
            (0, _solidJs.createRenderEffect)(()=>current = insertExpression(parent, array, current, marker, true));
            return ()=>current;
        }
        if ((0, _solidJs.sharedConfig).context) {
            if (!array.length) return current;
            if (marker === undefined) return [
                ...parent.childNodes
            ];
            let node = array[0];
            let nodes = [
                node
            ];
            while((node = node.nextSibling) !== marker)nodes.push(node);
            return current = nodes;
        }
        if (array.length === 0) {
            current = cleanChildren(parent, current, marker);
            if (multi) return current;
        } else if (currentArray) {
            if (current.length === 0) appendNodes(parent, array, marker);
            else reconcileArrays(parent, current, array);
        } else {
            current && cleanChildren(parent);
            appendNodes(parent, array);
        }
        current = array;
    } else if (value.nodeType) {
        if ((0, _solidJs.sharedConfig).context && value.parentNode) return current = multi ? [
            value
        ] : value;
        if (Array.isArray(current)) {
            if (multi) return current = cleanChildren(parent, current, marker, value);
            cleanChildren(parent, current, null, value);
        } else if (current == null || current === "" || !parent.firstChild) parent.appendChild(value);
        else parent.replaceChild(value, parent.firstChild);
        current = value;
    }
    return current;
}
function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for(let i = 0, len = array.length; i < len; i++){
        let item = array[i], prev = current && current[i], t;
        if (item == null || item === true || item === false) ;
        else if ((t = typeof item) === "object" && item.nodeType) normalized.push(item);
        else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
        else if (t === "function") {
            if (unwrap) {
                while(typeof item === "function")item = item();
                dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [
                    item
                ], Array.isArray(prev) ? prev : [
                    prev
                ]) || dynamic;
            } else {
                normalized.push(item);
                dynamic = true;
            }
        } else {
            const value = String(item);
            if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);
            else normalized.push(document.createTextNode(value));
        }
    }
    return dynamic;
}
function appendNodes(parent, array, marker = null) {
    for(let i = 0, len = array.length; i < len; i++)parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
    if (marker === undefined) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
        let inserted = false;
        for(let i = current.length - 1; i >= 0; i--){
            const el = current[i];
            if (node !== el) {
                const isParent = el.parentNode === parent;
                if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);
                else isParent && el.remove();
            } else inserted = true;
        }
    } else parent.insertBefore(node, marker);
    return [
        node
    ];
}
function gatherHydratable(element, root) {
    const templates = element.querySelectorAll(`*[data-hk]`);
    for(let i = 0; i < templates.length; i++){
        const node = templates[i];
        const key = node.getAttribute("data-hk");
        if ((!root || key.startsWith(root)) && !(0, _solidJs.sharedConfig).registry.has(key)) (0, _solidJs.sharedConfig).registry.set(key, node);
    }
}
function getHydrationKey() {
    const hydrate = (0, _solidJs.sharedConfig).context;
    return `${hydrate.id}${hydrate.count++}`;
}
function NoHydration(props) {
    return (0, _solidJs.sharedConfig).context ? undefined : props.children;
}
function Hydration(props) {
    return props.children;
}
const voidFn = ()=>undefined;
const RequestContext = Symbol();
function innerHTML(parent, content) {
    !(0, _solidJs.sharedConfig).context && (parent.innerHTML = content);
}
function throwInBrowser(func) {
    const err = new Error(`${func.name} is not supported in the browser, returning undefined`);
    console.error(err);
}
function renderToString(fn, options) {
    throwInBrowser(renderToString);
}
function renderToStringAsync(fn, options) {
    throwInBrowser(renderToStringAsync);
}
function renderToStream(fn, options) {
    throwInBrowser(renderToStream);
}
function ssr(template, ...nodes) {}
function ssrElement(name, props, children, needsId) {}
function ssrClassList(value) {}
function ssrStyle(value) {}
function ssrAttribute(key, value) {}
function ssrHydrationKey() {}
function resolveSSRNode(node) {}
function escape(html) {}
function ssrSpread(props, isSVG, skipChildren) {}
const isServer = false;
const isDev = false;
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function createElement(tagName, isSVG = false) {
    return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
}
const hydrate = (...args)=>{
    (0, _solidJs.enableHydration)();
    return hydrate$1(...args);
};
function Portal(props) {
    const { useShadow } = props, marker = document.createTextNode(""), mount = ()=>props.mount || document.body, owner = (0, _solidJs.getOwner)();
    let content;
    let hydrating = !!(0, _solidJs.sharedConfig).context;
    (0, _solidJs.createEffect)(()=>{
        if (hydrating) (0, _solidJs.getOwner)().user = hydrating = false;
        content || (content = (0, _solidJs.runWithOwner)(owner, ()=>(0, _solidJs.createMemo)(()=>props.children)));
        const el = mount();
        if (el instanceof HTMLHeadElement) {
            const [clean, setClean] = (0, _solidJs.createSignal)(false);
            const cleanup = ()=>setClean(true);
            (0, _solidJs.createRoot)((dispose)=>insert(el, ()=>!clean() ? content() : dispose(), null));
            (0, _solidJs.onCleanup)(cleanup);
        } else {
            const container = createElement(props.isSVG ? "g" : "div", props.isSVG), renderRoot = useShadow && container.attachShadow ? container.attachShadow({
                mode: "open"
            }) : container;
            Object.defineProperty(container, "_$host", {
                get () {
                    return marker.parentNode;
                },
                configurable: true
            });
            insert(renderRoot, content);
            el.appendChild(container);
            props.ref && props.ref(container);
            (0, _solidJs.onCleanup)(()=>el.removeChild(container));
        }
    }, undefined, {
        render: !hydrating
    });
    return marker;
}
function Dynamic(props) {
    const [p, others] = (0, _solidJs.splitProps)(props, [
        "component"
    ]);
    const cached = (0, _solidJs.createMemo)(()=>p.component);
    return (0, _solidJs.createMemo)(()=>{
        const component = cached();
        switch(typeof component){
            case "function":
                return (0, _solidJs.untrack)(()=>component(others));
            case "string":
                const isSvg = SVGElements.has(component);
                const el = (0, _solidJs.sharedConfig).context ? getNextElement() : createElement(component, isSvg);
                spread(el, others, isSvg);
                return el;
        }
    });
}

},{"solid-js":"i4kAV","@parcel/transformer-js/src/esmodule-helpers.js":"bArT6"}],"i4kAV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$DEVCOMP", ()=>$DEVCOMP);
parcelHelpers.export(exports, "$PROXY", ()=>$PROXY);
parcelHelpers.export(exports, "$TRACK", ()=>$TRACK);
parcelHelpers.export(exports, "DEV", ()=>DEV);
parcelHelpers.export(exports, "ErrorBoundary", ()=>ErrorBoundary);
parcelHelpers.export(exports, "For", ()=>For);
parcelHelpers.export(exports, "Index", ()=>Index);
parcelHelpers.export(exports, "Match", ()=>Match);
parcelHelpers.export(exports, "Show", ()=>Show);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "SuspenseList", ()=>SuspenseList);
parcelHelpers.export(exports, "Switch", ()=>Switch);
parcelHelpers.export(exports, "batch", ()=>batch);
parcelHelpers.export(exports, "cancelCallback", ()=>cancelCallback);
parcelHelpers.export(exports, "catchError", ()=>catchError);
parcelHelpers.export(exports, "children", ()=>children);
parcelHelpers.export(exports, "createComponent", ()=>createComponent);
parcelHelpers.export(exports, "createComputed", ()=>createComputed);
parcelHelpers.export(exports, "createContext", ()=>createContext);
parcelHelpers.export(exports, "createDeferred", ()=>createDeferred);
parcelHelpers.export(exports, "createEffect", ()=>createEffect);
parcelHelpers.export(exports, "createMemo", ()=>createMemo);
parcelHelpers.export(exports, "createReaction", ()=>createReaction);
parcelHelpers.export(exports, "createRenderEffect", ()=>createRenderEffect);
parcelHelpers.export(exports, "createResource", ()=>createResource);
parcelHelpers.export(exports, "createRoot", ()=>createRoot);
parcelHelpers.export(exports, "createSelector", ()=>createSelector);
parcelHelpers.export(exports, "createSignal", ()=>createSignal);
parcelHelpers.export(exports, "createUniqueId", ()=>createUniqueId);
parcelHelpers.export(exports, "enableExternalSource", ()=>enableExternalSource);
parcelHelpers.export(exports, "enableHydration", ()=>enableHydration);
parcelHelpers.export(exports, "enableScheduling", ()=>enableScheduling);
parcelHelpers.export(exports, "equalFn", ()=>equalFn);
parcelHelpers.export(exports, "from", ()=>from);
parcelHelpers.export(exports, "getListener", ()=>getListener);
parcelHelpers.export(exports, "getOwner", ()=>getOwner);
parcelHelpers.export(exports, "indexArray", ()=>indexArray);
parcelHelpers.export(exports, "lazy", ()=>lazy);
parcelHelpers.export(exports, "mapArray", ()=>mapArray);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "observable", ()=>observable);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "onCleanup", ()=>onCleanup);
parcelHelpers.export(exports, "onError", ()=>onError);
parcelHelpers.export(exports, "onMount", ()=>onMount);
parcelHelpers.export(exports, "requestCallback", ()=>requestCallback);
parcelHelpers.export(exports, "resetErrorBoundaries", ()=>resetErrorBoundaries);
parcelHelpers.export(exports, "runWithOwner", ()=>runWithOwner);
parcelHelpers.export(exports, "sharedConfig", ()=>sharedConfig);
parcelHelpers.export(exports, "splitProps", ()=>splitProps);
parcelHelpers.export(exports, "startTransition", ()=>startTransition);
parcelHelpers.export(exports, "untrack", ()=>untrack);
parcelHelpers.export(exports, "useContext", ()=>useContext);
parcelHelpers.export(exports, "useTransition", ()=>useTransition);
let taskIdCounter = 1, isCallbackScheduled = false, isPerformingWork = false, taskQueue = [], currentTask = null, shouldYieldToHost = null, yieldInterval = 5, deadline = 0, maxYieldInterval = 300, scheduleCallback = null, scheduledCallback = null;
const maxSigned31BitInt = 1073741823;
function setupScheduler() {
    const channel = new MessageChannel(), port = channel.port2;
    scheduleCallback = ()=>port.postMessage(null);
    channel.port1.onmessage = ()=>{
        if (scheduledCallback !== null) {
            const currentTime = performance.now();
            deadline = currentTime + yieldInterval;
            const hasTimeRemaining = true;
            try {
                const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);
                if (!hasMoreWork) scheduledCallback = null;
                else port.postMessage(null);
            } catch (error) {
                port.postMessage(null);
                throw error;
            }
        }
    };
    if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
        const scheduling = navigator.scheduling;
        shouldYieldToHost = ()=>{
            const currentTime = performance.now();
            if (currentTime >= deadline) {
                if (scheduling.isInputPending()) return true;
                return currentTime >= maxYieldInterval;
            } else return false;
        };
    } else shouldYieldToHost = ()=>performance.now() >= deadline;
}
function enqueue(taskQueue, task) {
    function findIndex() {
        let m = 0;
        let n = taskQueue.length - 1;
        while(m <= n){
            const k = n + m >> 1;
            const cmp = task.expirationTime - taskQueue[k].expirationTime;
            if (cmp > 0) m = k + 1;
            else if (cmp < 0) n = k - 1;
            else return k;
        }
        return m;
    }
    taskQueue.splice(findIndex(), 0, task);
}
function requestCallback(fn, options) {
    if (!scheduleCallback) setupScheduler();
    let startTime = performance.now(), timeout = maxSigned31BitInt;
    if (options && options.timeout) timeout = options.timeout;
    const newTask = {
        id: taskIdCounter++,
        fn,
        startTime,
        expirationTime: startTime + timeout
    };
    enqueue(taskQueue, newTask);
    if (!isCallbackScheduled && !isPerformingWork) {
        isCallbackScheduled = true;
        scheduledCallback = flushWork;
        scheduleCallback();
    }
    return newTask;
}
function cancelCallback(task) {
    task.fn = null;
}
function flushWork(hasTimeRemaining, initialTime) {
    isCallbackScheduled = false;
    isPerformingWork = true;
    try {
        return workLoop(hasTimeRemaining, initialTime);
    } finally{
        currentTask = null;
        isPerformingWork = false;
    }
}
function workLoop(hasTimeRemaining, initialTime) {
    let currentTime = initialTime;
    currentTask = taskQueue[0] || null;
    while(currentTask !== null){
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) break;
        const callback = currentTask.fn;
        if (callback !== null) {
            currentTask.fn = null;
            const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
            callback(didUserCallbackTimeout);
            currentTime = performance.now();
            if (currentTask === taskQueue[0]) taskQueue.shift();
        } else taskQueue.shift();
        currentTask = taskQueue[0] || null;
    }
    return currentTask !== null;
}
const sharedConfig = {
    context: undefined,
    registry: undefined
};
function setHydrateContext(context) {
    sharedConfig.context = context;
}
function nextHydrateContext() {
    return {
        ...sharedConfig.context,
        id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
        count: 0
    };
}
const equalFn = (a, b)=>a === b;
const $PROXY = Symbol("solid-proxy");
const $TRACK = Symbol("solid-track");
const $DEVCOMP = Symbol("solid-dev-component");
const signalOptions = {
    equals: equalFn
};
let ERROR = null;
let runEffects = runQueue;
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
};
const NO_INIT = {};
var Owner = null;
let Transition = null;
let Scheduler = null;
let ExternalSourceConfig = null;
let Listener = null;
let Updates = null;
let Effects = null;
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === undefined ? owner : detachedOwner, root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: current ? current.context : null,
        owner: current
    }, updateFn = unowned ? fn : ()=>fn(()=>untrack(()=>cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
        return runUpdates(updateFn, true);
    } finally{
        Listener = listener;
        Owner = owner;
    }
}
function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
        value,
        observers: null,
        observerSlots: null,
        comparator: options.equals || undefined
    };
    const setter = (value)=>{
        if (typeof value === "function") {
            if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.tValue);
            else value = value(s.value);
        }
        return writeSignal(s, value);
    };
    return [
        readSignal.bind(s),
        setter
    ];
}
function createComputed(fn, value, options) {
    const c = createComputation(fn, value, true, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c);
    else updateComputation(c);
}
function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c);
    else updateComputation(c);
}
function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
    if (s) c.suspense = s;
    if (!options || !options.render) c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
}
function createReaction(onInvalidate, options) {
    let fn;
    const c = createComputation(()=>{
        fn ? fn() : untrack(onInvalidate);
        fn = undefined;
    }, undefined, false, 0), s = SuspenseContext && useContext(SuspenseContext);
    if (s) c.suspense = s;
    c.user = true;
    return (tracking)=>{
        fn = tracking;
        updateComputation(c);
    };
}
function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || undefined;
    if (Scheduler && Transition && Transition.running) {
        c.tState = STALE;
        Updates.push(c);
    } else updateComputation(c);
    return readSignal.bind(c);
}
function isPromise(v) {
    return v && typeof v === "object" && "then" in v;
}
function createResource(pSource, pFetcher, pOptions) {
    let source;
    let fetcher;
    let options;
    if (arguments.length === 2 && typeof pFetcher === "object" || arguments.length === 1) {
        source = true;
        fetcher = pSource;
        options = pFetcher || {};
    } else {
        source = pSource;
        fetcher = pFetcher;
        options = pOptions || {};
    }
    let pr = null, initP = NO_INIT, id = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
    const contexts = new Set(), [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(undefined), [track, trigger] = createSignal(undefined, {
        equals: false
    }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
    if (sharedConfig.context) {
        id = `${sharedConfig.context.id}${sharedConfig.context.count++}`;
        let v;
        if (options.ssrLoadFrom === "initial") initP = options.initialValue;
        else if (sharedConfig.load && (v = sharedConfig.load(id))) initP = v;
    }
    function loadEnd(p, v, error, key) {
        if (pr === p) {
            pr = null;
            key !== undefined && (resolved = true);
            if ((p === initP || v === initP) && options.onHydrated) queueMicrotask(()=>options.onHydrated(key, {
                    value: v
                }));
            initP = NO_INIT;
            if (Transition && p && loadedUnderTransition) {
                Transition.promises.delete(p);
                loadedUnderTransition = false;
                runUpdates(()=>{
                    Transition.running = true;
                    completeLoad(v, error);
                }, false);
            } else completeLoad(v, error);
        }
        return v;
    }
    function completeLoad(v, err) {
        runUpdates(()=>{
            if (err === undefined) setValue(()=>v);
            setState(err !== undefined ? "errored" : resolved ? "ready" : "unresolved");
            setError(err);
            for (const c of contexts.keys())c.decrement();
            contexts.clear();
        }, false);
    }
    function read() {
        const c = SuspenseContext && useContext(SuspenseContext), v = value(), err = error();
        if (err !== undefined && !pr) throw err;
        if (Listener && !Listener.user && c) createComputed(()=>{
            track();
            if (pr) {
                if (c.resolved && Transition && loadedUnderTransition) Transition.promises.add(pr);
                else if (!contexts.has(c)) {
                    c.increment();
                    contexts.add(c);
                }
            }
        });
        return v;
    }
    function load(refetching = true) {
        if (refetching !== false && scheduled) return;
        scheduled = false;
        const lookup = dynamic ? dynamic() : source;
        loadedUnderTransition = Transition && Transition.running;
        if (lookup == null || lookup === false) {
            loadEnd(pr, untrack(value));
            return;
        }
        if (Transition && pr) Transition.promises.delete(pr);
        const p = initP !== NO_INIT ? initP : untrack(()=>fetcher(lookup, {
                value: value(),
                refetching
            }));
        if (!isPromise(p)) {
            loadEnd(pr, p, undefined, lookup);
            return p;
        }
        pr = p;
        if ("value" in p) {
            if (p.status === "success") loadEnd(pr, p.value, undefined, lookup);
            else loadEnd(pr, undefined, undefined, lookup);
            return p;
        }
        scheduled = true;
        queueMicrotask(()=>scheduled = false);
        runUpdates(()=>{
            setState(resolved ? "refreshing" : "pending");
            trigger();
        }, false);
        return p.then((v)=>loadEnd(p, v, undefined, lookup), (e)=>loadEnd(p, undefined, castError(e), lookup));
    }
    Object.defineProperties(read, {
        state: {
            get: ()=>state()
        },
        error: {
            get: ()=>error()
        },
        loading: {
            get () {
                const s = state();
                return s === "pending" || s === "refreshing";
            }
        },
        latest: {
            get () {
                if (!resolved) return read();
                const err = error();
                if (err && !pr) throw err;
                return value();
            }
        }
    });
    if (dynamic) createComputed(()=>load(false));
    else load(false);
    return [
        read,
        {
            refetch: load,
            mutate: setValue
        }
    ];
}
function createDeferred(source, options) {
    let t, timeout = options ? options.timeoutMs : undefined;
    const node = createComputation(()=>{
        if (!t || !t.fn) t = requestCallback(()=>setDeferred(()=>node.value), timeout !== undefined ? {
            timeout
        } : undefined);
        return source();
    }, undefined, true);
    const [deferred, setDeferred] = createSignal(Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, options);
    updateComputation(node);
    setDeferred(()=>Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
    return deferred;
}
function createSelector(source, fn = equalFn, options) {
    const subs = new Map();
    const node = createComputation((p)=>{
        const v = source();
        for (const [key, val] of subs.entries())if (fn(key, v) !== fn(key, p)) for (const c of val.values()){
            c.state = STALE;
            if (c.pure) Updates.push(c);
            else Effects.push(c);
        }
        return v;
    }, undefined, true, STALE);
    updateComputation(node);
    return (key)=>{
        const listener = Listener;
        if (listener) {
            let l;
            if (l = subs.get(key)) l.add(listener);
            else subs.set(key, l = new Set([
                listener
            ]));
            onCleanup(()=>{
                l.delete(listener);
                !l.size && subs.delete(key);
            });
        }
        return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
    };
}
function batch(fn) {
    return runUpdates(fn, false);
}
function untrack(fn) {
    if (!ExternalSourceConfig && Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
        if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
        return fn();
    } finally{
        Listener = listener;
    }
}
function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return (prevValue)=>{
        let input;
        if (isArray) {
            input = Array(deps.length);
            for(let i = 0; i < deps.length; i++)input[i] = deps[i]();
        } else input = deps();
        if (defer) {
            defer = false;
            return undefined;
        }
        const result = untrack(()=>fn(input, prevInput, prevValue));
        prevInput = input;
        return result;
    };
}
function onMount(fn) {
    createEffect(()=>untrack(fn));
}
function onCleanup(fn) {
    if (Owner === null) ;
    else if (Owner.cleanups === null) Owner.cleanups = [
        fn
    ];
    else Owner.cleanups.push(fn);
    return fn;
}
function catchError(fn, handler) {
    ERROR || (ERROR = Symbol("error"));
    Owner = createComputation(undefined, undefined, true);
    Owner.context = {
        ...Owner.context,
        [ERROR]: [
            handler
        ]
    };
    if (Transition && Transition.running) Transition.sources.add(Owner);
    try {
        return fn();
    } catch (err) {
        handleError(err);
    } finally{
        Owner = Owner.owner;
    }
}
function getListener() {
    return Listener;
}
function getOwner() {
    return Owner;
}
function runWithOwner(o, fn) {
    const prev = Owner;
    const prevListener = Listener;
    Owner = o;
    Listener = null;
    try {
        return runUpdates(fn, true);
    } catch (err) {
        handleError(err);
    } finally{
        Owner = prev;
        Listener = prevListener;
    }
}
function enableScheduling(scheduler = requestCallback) {
    Scheduler = scheduler;
}
function startTransition(fn) {
    if (Transition && Transition.running) {
        fn();
        return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(()=>{
        Listener = l;
        Owner = o;
        let t;
        if (Scheduler || SuspenseContext) {
            t = Transition || (Transition = {
                sources: new Set(),
                effects: [],
                promises: new Set(),
                disposed: new Set(),
                queue: new Set(),
                running: true
            });
            t.done || (t.done = new Promise((res)=>t.resolve = res));
            t.running = true;
        }
        runUpdates(fn, false);
        Listener = Owner = null;
        return t ? t.done : undefined;
    });
}
const [transPending, setTransPending] = /*@__PURE__*/ createSignal(false);
function useTransition() {
    return [
        transPending,
        startTransition
    ];
}
function resumeEffects(e) {
    Effects.push.apply(Effects, e);
    e.length = 0;
}
function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
        id,
        Provider: createProvider(id),
        defaultValue
    };
}
function useContext(context) {
    return Owner && Owner.context && Owner.context[context.id] !== undefined ? Owner.context[context.id] : context.defaultValue;
}
function children(fn) {
    const children = createMemo(fn);
    const memo = createMemo(()=>resolveChildren(children()));
    memo.toArray = ()=>{
        const c = memo();
        return Array.isArray(c) ? c : c != null ? [
            c
        ] : [];
    };
    return memo;
}
let SuspenseContext;
function getSuspenseContext() {
    return SuspenseContext || (SuspenseContext = createContext());
}
function enableExternalSource(factory, untrack = (fn)=>fn()) {
    if (ExternalSourceConfig) {
        const { factory: oldFactory, untrack: oldUntrack } = ExternalSourceConfig;
        ExternalSourceConfig = {
            factory: (fn, trigger)=>{
                const oldSource = oldFactory(fn, trigger);
                const source = factory((x)=>oldSource.track(x), trigger);
                return {
                    track: (x)=>source.track(x),
                    dispose () {
                        source.dispose();
                        oldSource.dispose();
                    }
                };
            },
            untrack: (fn)=>oldUntrack(()=>untrack(fn))
        };
    } else ExternalSourceConfig = {
        factory,
        untrack
    };
}
function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) {
        if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this);
        else {
            const updates = Updates;
            Updates = null;
            runUpdates(()=>lookUpstream(this), false);
            Updates = updates;
        }
    }
    if (Listener) {
        const sSlot = this.observers ? this.observers.length : 0;
        if (!Listener.sources) {
            Listener.sources = [
                this
            ];
            Listener.sourceSlots = [
                sSlot
            ];
        } else {
            Listener.sources.push(this);
            Listener.sourceSlots.push(sSlot);
        }
        if (!this.observers) {
            this.observers = [
                Listener
            ];
            this.observerSlots = [
                Listener.sources.length - 1
            ];
        } else {
            this.observers.push(Listener);
            this.observerSlots.push(Listener.sources.length - 1);
        }
    }
    if (runningTransition && Transition.sources.has(this)) return this.tValue;
    return this.value;
}
function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
        if (Transition) {
            const TransitionRunning = Transition.running;
            if (TransitionRunning || !isComp && Transition.sources.has(node)) {
                Transition.sources.add(node);
                node.tValue = value;
            }
            if (!TransitionRunning) node.value = value;
        } else node.value = value;
        if (node.observers && node.observers.length) runUpdates(()=>{
            for(let i = 0; i < node.observers.length; i += 1){
                const o = node.observers[i];
                const TransitionRunning = Transition && Transition.running;
                if (TransitionRunning && Transition.disposed.has(o)) continue;
                if (TransitionRunning ? !o.tState : !o.state) {
                    if (o.pure) Updates.push(o);
                    else Effects.push(o);
                    if (o.observers) markDownstream(o);
                }
                if (!TransitionRunning) o.state = STALE;
                else o.tState = STALE;
            }
            if (Updates.length > 10e5) {
                Updates = [];
                throw new Error();
            }
        }, false);
    }
    return value;
}
function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
    if (Transition && !Transition.running && Transition.sources.has(node)) queueMicrotask(()=>{
        runUpdates(()=>{
            Transition && (Transition.running = true);
            Listener = Owner = node;
            runComputation(node, node.tValue, time);
            Listener = Owner = null;
        }, false);
    });
}
function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner, listener = Listener;
    Listener = Owner = node;
    try {
        nextValue = node.fn(value);
    } catch (err) {
        if (node.pure) {
            if (Transition && Transition.running) {
                node.tState = STALE;
                node.tOwned && node.tOwned.forEach(cleanNode);
                node.tOwned = undefined;
            } else {
                node.state = STALE;
                node.owned && node.owned.forEach(cleanNode);
                node.owned = null;
            }
        }
        node.updatedAt = time + 1;
        return handleError(err);
    } finally{
        Listener = listener;
        Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
        if (node.updatedAt != null && "observers" in node) writeSignal(node, nextValue, true);
        else if (Transition && Transition.running && node.pure) {
            Transition.sources.add(node);
            node.tValue = nextValue;
        } else node.value = nextValue;
        node.updatedAt = time;
    }
}
function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
        fn,
        state: state,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: init,
        owner: Owner,
        context: Owner ? Owner.context : null,
        pure
    };
    if (Transition && Transition.running) {
        c.state = 0;
        c.tState = state;
    }
    if (Owner === null) ;
    else if (Owner !== UNOWNED) {
        if (Transition && Transition.running && Owner.pure) {
            if (!Owner.tOwned) Owner.tOwned = [
                c
            ];
            else Owner.tOwned.push(c);
        } else if (!Owner.owned) Owner.owned = [
            c
        ];
        else Owner.owned.push(c);
    }
    if (ExternalSourceConfig && c.fn) {
        const [track, trigger] = createSignal(undefined, {
            equals: false
        });
        const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
        onCleanup(()=>ordinary.dispose());
        const triggerInTransition = ()=>startTransition(trigger).then(()=>inTransition.dispose());
        const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
        c.fn = (x)=>{
            track();
            return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
        };
    }
    return c;
}
function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if ((runningTransition ? node.tState : node.state) === 0) return;
    if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [
        node
    ];
    while((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)){
        if (runningTransition && Transition.disposed.has(node)) return;
        if (runningTransition ? node.tState : node.state) ancestors.push(node);
    }
    for(let i = ancestors.length - 1; i >= 0; i--){
        node = ancestors[i];
        if (runningTransition) {
            let top = node, prev = ancestors[i + 1];
            while((top = top.owner) && top !== prev){
                if (Transition.disposed.has(top)) return;
            }
        }
        if ((runningTransition ? node.tState : node.state) === STALE) updateComputation(node);
        else if ((runningTransition ? node.tState : node.state) === PENDING) {
            const updates = Updates;
            Updates = null;
            runUpdates(()=>lookUpstream(node, ancestors[0]), false);
            Updates = updates;
        }
    }
}
function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;
    else Effects = [];
    ExecCount++;
    try {
        const res = fn();
        completeUpdates(wait);
        return res;
    } catch (err) {
        if (!wait) Effects = null;
        Updates = null;
        handleError(err);
    }
}
function completeUpdates(wait) {
    if (Updates) {
        if (Scheduler && Transition && Transition.running) scheduleQueue(Updates);
        else runQueue(Updates);
        Updates = null;
    }
    if (wait) return;
    let res;
    if (Transition) {
        if (!Transition.promises.size && !Transition.queue.size) {
            const sources = Transition.sources;
            const disposed = Transition.disposed;
            Effects.push.apply(Effects, Transition.effects);
            res = Transition.resolve;
            for (const e of Effects){
                "tState" in e && (e.state = e.tState);
                delete e.tState;
            }
            Transition = null;
            runUpdates(()=>{
                for (const d of disposed)cleanNode(d);
                for (const v of sources){
                    v.value = v.tValue;
                    if (v.owned) for(let i = 0, len = v.owned.length; i < len; i++)cleanNode(v.owned[i]);
                    if (v.tOwned) v.owned = v.tOwned;
                    delete v.tValue;
                    delete v.tOwned;
                    v.tState = 0;
                }
                setTransPending(false);
            }, false);
        } else if (Transition.running) {
            Transition.running = false;
            Transition.effects.push.apply(Transition.effects, Effects);
            Effects = null;
            setTransPending(true);
            return;
        }
    }
    const e = Effects;
    Effects = null;
    if (e.length) runUpdates(()=>runEffects(e), false);
    if (res) res();
}
function runQueue(queue) {
    for(let i = 0; i < queue.length; i++)runTop(queue[i]);
}
function scheduleQueue(queue) {
    for(let i = 0; i < queue.length; i++){
        const item = queue[i];
        const tasks = Transition.queue;
        if (!tasks.has(item)) {
            tasks.add(item);
            Scheduler(()=>{
                tasks.delete(item);
                runUpdates(()=>{
                    Transition.running = true;
                    runTop(item);
                }, false);
                Transition && (Transition.running = false);
            });
        }
    }
}
function runUserEffects(queue) {
    let i, userLength = 0;
    for(i = 0; i < queue.length; i++){
        const e = queue[i];
        if (!e.user) runTop(e);
        else queue[userLength++] = e;
    }
    if (sharedConfig.context) {
        if (sharedConfig.count) {
            sharedConfig.effects || (sharedConfig.effects = []);
            sharedConfig.effects.push(...queue.slice(0, userLength));
            return;
        } else if (sharedConfig.effects) {
            queue = [
                ...sharedConfig.effects,
                ...queue
            ];
            userLength += sharedConfig.effects.length;
            delete sharedConfig.effects;
        }
        setHydrateContext();
    }
    for(i = 0; i < userLength; i++)runTop(queue[i]);
}
function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition) node.tState = 0;
    else node.state = 0;
    for(let i = 0; i < node.sources.length; i += 1){
        const source = node.sources[i];
        if (source.sources) {
            const state = runningTransition ? source.tState : source.state;
            if (state === STALE) {
                if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
            } else if (state === PENDING) lookUpstream(source, ignore);
        }
    }
}
function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for(let i = 0; i < node.observers.length; i += 1){
        const o = node.observers[i];
        if (runningTransition ? !o.tState : !o.state) {
            if (runningTransition) o.tState = PENDING;
            else o.state = PENDING;
            if (o.pure) Updates.push(o);
            else Effects.push(o);
            o.observers && markDownstream(o);
        }
    }
}
function cleanNode(node) {
    let i;
    if (node.sources) while(node.sources.length){
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
            const n = obs.pop(), s = source.observerSlots.pop();
            if (index < obs.length) {
                n.sourceSlots[s] = index;
                obs[index] = n;
                source.observerSlots[index] = s;
            }
        }
    }
    if (Transition && Transition.running && node.pure) {
        if (node.tOwned) {
            for(i = node.tOwned.length - 1; i >= 0; i--)cleanNode(node.tOwned[i]);
            delete node.tOwned;
        }
        reset(node, true);
    } else if (node.owned) {
        for(i = node.owned.length - 1; i >= 0; i--)cleanNode(node.owned[i]);
        node.owned = null;
    }
    if (node.cleanups) {
        for(i = node.cleanups.length - 1; i >= 0; i--)node.cleanups[i]();
        node.cleanups = null;
    }
    if (Transition && Transition.running) node.tState = 0;
    else node.state = 0;
}
function reset(node, top) {
    if (!top) {
        node.tState = 0;
        Transition.disposed.add(node);
    }
    if (node.owned) for(let i = 0; i < node.owned.length; i++)reset(node.owned[i]);
}
function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
        cause: err
    });
}
function runErrors(err, fns, owner) {
    try {
        for (const f of fns)f(err);
    } catch (e) {
        handleError(e, owner && owner.owner || null);
    }
}
function handleError(err, owner = Owner) {
    const fns = ERROR && owner && owner.context && owner.context[ERROR];
    const error = castError(err);
    if (!fns) throw error;
    if (Effects) Effects.push({
        fn () {
            runErrors(error, fns, owner);
        },
        state: STALE
    });
    else runErrors(error, fns, owner);
}
function resolveChildren(children) {
    if (typeof children === "function" && !children.length) return resolveChildren(children());
    if (Array.isArray(children)) {
        const results = [];
        for(let i = 0; i < children.length; i++){
            const result = resolveChildren(children[i]);
            Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
        }
        return results;
    }
    return children;
}
function createProvider(id, options) {
    return function provider(props) {
        let res;
        createRenderEffect(()=>res = untrack(()=>{
                Owner.context = {
                    ...Owner.context,
                    [id]: props.value
                };
                return children(()=>props.children);
            }), undefined);
        return res;
    };
}
function onError(fn) {
    ERROR || (ERROR = Symbol("error"));
    if (Owner === null) ;
    else if (Owner.context === null || !Owner.context[ERROR]) {
        Owner.context = {
            ...Owner.context,
            [ERROR]: [
                fn
            ]
        };
        mutateContext(Owner, ERROR, [
            fn
        ]);
    } else Owner.context[ERROR].push(fn);
}
function mutateContext(o, key, value) {
    if (o.owned) for(let i = 0; i < o.owned.length; i++){
        if (o.owned[i].context === o.context) mutateContext(o.owned[i], key, value);
        if (!o.owned[i].context) {
            o.owned[i].context = o.context;
            mutateContext(o.owned[i], key, value);
        } else if (!o.owned[i].context[key]) {
            o.owned[i].context[key] = value;
            mutateContext(o.owned[i], key, value);
        }
    }
}
function observable(input) {
    return {
        subscribe (observer) {
            if (!(observer instanceof Object) || observer == null) throw new TypeError("Expected the observer to be an object.");
            const handler = typeof observer === "function" ? observer : observer.next && observer.next.bind(observer);
            if (!handler) return {
                unsubscribe () {}
            };
            const dispose = createRoot((disposer)=>{
                createEffect(()=>{
                    const v = input();
                    untrack(()=>handler(v));
                });
                return disposer;
            });
            if (getOwner()) onCleanup(dispose);
            return {
                unsubscribe () {
                    dispose();
                }
            };
        },
        [Symbol.observable || "@@observable"] () {
            return this;
        }
    };
}
function from(producer) {
    const [s, set] = createSignal(undefined, {
        equals: false
    });
    if ("subscribe" in producer) {
        const unsub = producer.subscribe((v)=>set(()=>v));
        onCleanup(()=>"unsubscribe" in unsub ? unsub.unsubscribe() : unsub());
    } else {
        const clean = producer(set);
        onCleanup(clean);
    }
    return s;
}
const FALLBACK = Symbol("fallback");
function dispose(d) {
    for(let i = 0; i < d.length; i++)d[i]();
}
function mapArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        let newItems = list() || [], i, j;
        newItems[$TRACK];
        return untrack(()=>{
            let newLen = newItems.length, newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    indexes && (indexes = []);
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
            } else if (len === 0) {
                mapped = new Array(newLen);
                for(j = 0; j < newLen; j++){
                    items[j] = newItems[j];
                    mapped[j] = createRoot(mapper);
                }
                len = newLen;
            } else {
                temp = new Array(newLen);
                tempdisposers = new Array(newLen);
                indexes && (tempIndexes = new Array(newLen));
                for(start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
                for(end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--){
                    temp[newEnd] = mapped[end];
                    tempdisposers[newEnd] = disposers[end];
                    indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = new Map();
                newIndicesNext = new Array(newEnd + 1);
                for(j = newEnd; j >= start; j--){
                    item = newItems[j];
                    i = newIndices.get(item);
                    newIndicesNext[j] = i === undefined ? -1 : i;
                    newIndices.set(item, j);
                }
                for(i = start; i <= end; i++){
                    item = items[i];
                    j = newIndices.get(item);
                    if (j !== undefined && j !== -1) {
                        temp[j] = mapped[i];
                        tempdisposers[j] = disposers[i];
                        indexes && (tempIndexes[j] = indexes[i]);
                        j = newIndicesNext[j];
                        newIndices.set(item, j);
                    } else disposers[i]();
                }
                for(j = start; j < newLen; j++)if (j in temp) {
                    mapped[j] = temp[j];
                    disposers[j] = tempdisposers[j];
                    if (indexes) {
                        indexes[j] = tempIndexes[j];
                        indexes[j](j);
                    }
                } else mapped[j] = createRoot(mapper);
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
            }
            return mapped;
        });
        function mapper(disposer) {
            disposers[j] = disposer;
            if (indexes) {
                const [s, set] = createSignal(j);
                indexes[j] = set;
                return mapFn(newItems[j], s);
            }
            return mapFn(newItems[j]);
        }
    };
}
function indexArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], signals = [], len = 0, i;
    onCleanup(()=>dispose(disposers));
    return ()=>{
        const newItems = list() || [];
        newItems[$TRACK];
        return untrack(()=>{
            if (newItems.length === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    signals = [];
                }
                if (options.fallback) {
                    items = [
                        FALLBACK
                    ];
                    mapped[0] = createRoot((disposer)=>{
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
                return mapped;
            }
            if (items[0] === FALLBACK) {
                disposers[0]();
                disposers = [];
                items = [];
                mapped = [];
                len = 0;
            }
            for(i = 0; i < newItems.length; i++){
                if (i < items.length && items[i] !== newItems[i]) signals[i](()=>newItems[i]);
                else if (i >= items.length) mapped[i] = createRoot(mapper);
            }
            for(; i < items.length; i++)disposers[i]();
            len = signals.length = disposers.length = newItems.length;
            items = newItems.slice(0);
            return mapped = mapped.slice(0, len);
        });
        function mapper(disposer) {
            disposers[i] = disposer;
            const [s, set] = createSignal(newItems[i]);
            signals[i] = set;
            return mapFn(s, i);
        }
    };
}
let hydrationEnabled = false;
function enableHydration() {
    hydrationEnabled = true;
}
function createComponent(Comp, props) {
    if (hydrationEnabled) {
        if (sharedConfig.context) {
            const c = sharedConfig.context;
            setHydrateContext(nextHydrateContext());
            const r = untrack(()=>Comp(props || {}));
            setHydrateContext(c);
            return r;
        }
    }
    return untrack(()=>Comp(props || {}));
}
function trueFn() {
    return true;
}
const propTraps = {
    get (_, property, receiver) {
        if (property === $PROXY) return receiver;
        return _.get(property);
    },
    has (_, property) {
        if (property === $PROXY) return true;
        return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor (_, property) {
        return {
            configurable: true,
            enumerable: true,
            get () {
                return _.get(property);
            },
            set: trueFn,
            deleteProperty: trueFn
        };
    },
    ownKeys (_) {
        return _.keys();
    }
};
function resolveSource(s) {
    return !(s = typeof s === "function" ? s() : s) ? {} : s;
}
function resolveSources() {
    for(let i = 0, length = this.length; i < length; ++i){
        const v = this[i]();
        if (v !== undefined) return v;
    }
}
function mergeProps(...sources) {
    let proxy = false;
    for(let i = 0; i < sources.length; i++){
        const s = sources[i];
        proxy = proxy || !!s && $PROXY in s;
        sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
    }
    if (proxy) return new Proxy({
        get (property) {
            for(let i = sources.length - 1; i >= 0; i--){
                const v = resolveSource(sources[i])[property];
                if (v !== undefined) return v;
            }
        },
        has (property) {
            for(let i = sources.length - 1; i >= 0; i--){
                if (property in resolveSource(sources[i])) return true;
            }
            return false;
        },
        keys () {
            const keys = [];
            for(let i = 0; i < sources.length; i++)keys.push(...Object.keys(resolveSource(sources[i])));
            return [
                ...new Set(keys)
            ];
        }
    }, propTraps);
    const sourcesMap = {};
    const defined = Object.create(null);
    for(let i = sources.length - 1; i >= 0; i--){
        const source = sources[i];
        if (!source) continue;
        const sourceKeys = Object.getOwnPropertyNames(source);
        for(let i = sourceKeys.length - 1; i >= 0; i--){
            const key = sourceKeys[i];
            if (key === "__proto__" || key === "constructor") continue;
            const desc = Object.getOwnPropertyDescriptor(source, key);
            if (!defined[key]) defined[key] = desc.get ? {
                enumerable: true,
                configurable: true,
                get: resolveSources.bind(sourcesMap[key] = [
                    desc.get.bind(source)
                ])
            } : desc.value !== undefined ? desc : undefined;
            else {
                const sources = sourcesMap[key];
                if (sources) {
                    if (desc.get) sources.push(desc.get.bind(source));
                    else if (desc.value !== undefined) sources.push(()=>desc.value);
                }
            }
        }
    }
    const target = {};
    const definedKeys = Object.keys(defined);
    for(let i = definedKeys.length - 1; i >= 0; i--){
        const key = definedKeys[i], desc = defined[key];
        if (desc && desc.get) Object.defineProperty(target, key, desc);
        else target[key] = desc ? desc.value : undefined;
    }
    return target;
}
function splitProps(props, ...keys) {
    if ($PROXY in props) {
        const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
        const res = keys.map((k)=>{
            return new Proxy({
                get (property) {
                    return k.includes(property) ? props[property] : undefined;
                },
                has (property) {
                    return k.includes(property) && property in props;
                },
                keys () {
                    return k.filter((property)=>property in props);
                }
            }, propTraps);
        });
        res.push(new Proxy({
            get (property) {
                return blocked.has(property) ? undefined : props[property];
            },
            has (property) {
                return blocked.has(property) ? false : property in props;
            },
            keys () {
                return Object.keys(props).filter((k)=>!blocked.has(k));
            }
        }, propTraps));
        return res;
    }
    const otherObject = {};
    const objects = keys.map(()=>({}));
    for (const propName of Object.getOwnPropertyNames(props)){
        const desc = Object.getOwnPropertyDescriptor(props, propName);
        const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
        let blocked = false;
        let objectIndex = 0;
        for (const k of keys){
            if (k.includes(propName)) {
                blocked = true;
                isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
            }
            ++objectIndex;
        }
        if (!blocked) isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
    }
    return [
        ...objects,
        otherObject
    ];
}
function lazy(fn) {
    let comp;
    let p;
    const wrap = (props)=>{
        const ctx = sharedConfig.context;
        if (ctx) {
            const [s, set] = createSignal();
            sharedConfig.count || (sharedConfig.count = 0);
            sharedConfig.count++;
            (p || (p = fn())).then((mod)=>{
                setHydrateContext(ctx);
                sharedConfig.count--;
                set(()=>mod.default);
                setHydrateContext();
            });
            comp = s;
        } else if (!comp) {
            const [s] = createResource(()=>(p || (p = fn())).then((mod)=>mod.default));
            comp = s;
        }
        let Comp;
        return createMemo(()=>(Comp = comp()) && untrack(()=>{
                if (!ctx) return Comp(props);
                const c = sharedConfig.context;
                setHydrateContext(ctx);
                const r = Comp(props);
                setHydrateContext(c);
                return r;
            }));
    };
    wrap.preload = ()=>p || ((p = fn()).then((mod)=>comp = ()=>mod.default), p);
    return wrap;
}
let counter = 0;
function createUniqueId() {
    const ctx = sharedConfig.context;
    return ctx ? `${ctx.id}${ctx.count++}` : `cl-${counter++}`;
}
const narrowedError = (name)=>`Stale read from <${name}>.`;
function For(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(mapArray(()=>props.each, props.children, fallback || undefined));
}
function Index(props) {
    const fallback = "fallback" in props && {
        fallback: ()=>props.fallback
    };
    return createMemo(indexArray(()=>props.each, props.children, fallback || undefined));
}
function Show(props) {
    const keyed = props.keyed;
    const condition = createMemo(()=>props.when, undefined, {
        equals: (a, b)=>keyed ? a === b : !a === !b
    });
    return createMemo(()=>{
        const c = condition();
        if (c) {
            const child = props.children;
            const fn = typeof child === "function" && child.length > 0;
            return fn ? untrack(()=>child(keyed ? c : ()=>{
                    if (!untrack(condition)) throw narrowedError("Show");
                    return props.when;
                })) : child;
        }
        return props.fallback;
    }, undefined, undefined);
}
function Switch(props) {
    let keyed = false;
    const equals = (a, b)=>(keyed ? a[1] === b[1] : !a[1] === !b[1]) && a[2] === b[2];
    const conditions = children(()=>props.children), evalConditions = createMemo(()=>{
        let conds = conditions();
        if (!Array.isArray(conds)) conds = [
            conds
        ];
        for(let i = 0; i < conds.length; i++){
            const c = conds[i].when;
            if (c) {
                keyed = !!conds[i].keyed;
                return [
                    i,
                    c,
                    conds[i]
                ];
            }
        }
        return [
            -1
        ];
    }, undefined, {
        equals
    });
    return createMemo(()=>{
        const [index, when, cond] = evalConditions();
        if (index < 0) return props.fallback;
        const c = cond.children;
        const fn = typeof c === "function" && c.length > 0;
        return fn ? untrack(()=>c(keyed ? when : ()=>{
                if (untrack(evalConditions)[0] !== index) throw narrowedError("Match");
                return cond.when;
            })) : c;
    }, undefined, undefined);
}
function Match(props) {
    return props;
}
let Errors;
function resetErrorBoundaries() {
    Errors && [
        ...Errors
    ].forEach((fn)=>fn());
}
function ErrorBoundary(props) {
    let err;
    if (sharedConfig.context && sharedConfig.load) err = sharedConfig.load(sharedConfig.context.id + sharedConfig.context.count);
    const [errored, setErrored] = createSignal(err, undefined);
    Errors || (Errors = new Set());
    Errors.add(setErrored);
    onCleanup(()=>Errors.delete(setErrored));
    return createMemo(()=>{
        let e;
        if (e = errored()) {
            const f = props.fallback;
            return typeof f === "function" && f.length ? untrack(()=>f(e, ()=>setErrored())) : f;
        }
        return catchError(()=>props.children, setErrored);
    }, undefined, undefined);
}
const suspenseListEquals = (a, b)=>a.showContent === b.showContent && a.showFallback === b.showFallback;
const SuspenseListContext = createContext();
function SuspenseList(props) {
    let [wrapper, setWrapper] = createSignal(()=>({
            inFallback: false
        })), show;
    const listContext = useContext(SuspenseListContext);
    const [registry, setRegistry] = createSignal([]);
    if (listContext) show = listContext.register(createMemo(()=>wrapper()().inFallback));
    const resolved = createMemo((prev)=>{
        const reveal = props.revealOrder, tail = props.tail, { showContent = true, showFallback = true } = show ? show() : {}, reg = registry(), reverse = reveal === "backwards";
        if (reveal === "together") {
            const all = reg.every((inFallback)=>!inFallback());
            const res = reg.map(()=>({
                    showContent: all && showContent,
                    showFallback
                }));
            res.inFallback = !all;
            return res;
        }
        let stop = false;
        let inFallback = prev.inFallback;
        const res = [];
        for(let i = 0, len = reg.length; i < len; i++){
            const n = reverse ? len - i - 1 : i, s = reg[n]();
            if (!stop && !s) res[n] = {
                showContent,
                showFallback
            };
            else {
                const next = !stop;
                if (next) inFallback = true;
                res[n] = {
                    showContent: next,
                    showFallback: !tail || next && tail === "collapsed" ? showFallback : false
                };
                stop = true;
            }
        }
        if (!stop) inFallback = false;
        res.inFallback = inFallback;
        return res;
    }, {
        inFallback: false
    });
    setWrapper(()=>resolved);
    return createComponent(SuspenseListContext.Provider, {
        value: {
            register: (inFallback)=>{
                let index;
                setRegistry((registry)=>{
                    index = registry.length;
                    return [
                        ...registry,
                        inFallback
                    ];
                });
                return createMemo(()=>resolved()[index], undefined, {
                    equals: suspenseListEquals
                });
            }
        },
        get children () {
            return props.children;
        }
    });
}
function Suspense(props) {
    let counter = 0, show, ctx, p, flicker, error;
    const [inFallback, setFallback] = createSignal(false), SuspenseContext = getSuspenseContext(), store = {
        increment: ()=>{
            if (++counter === 1) setFallback(true);
        },
        decrement: ()=>{
            if (--counter === 0) setFallback(false);
        },
        inFallback,
        effects: [],
        resolved: false
    }, owner = getOwner();
    if (sharedConfig.context && sharedConfig.load) {
        const key = sharedConfig.context.id + sharedConfig.context.count;
        let ref = sharedConfig.load(key);
        if (ref && (typeof ref !== "object" || ref.status !== "success")) p = ref;
        if (p && p !== "$$f") {
            const [s, set] = createSignal(undefined, {
                equals: false
            });
            flicker = s;
            p.then(()=>{
                sharedConfig.gather(key);
                setHydrateContext(ctx);
                set();
                setHydrateContext();
            }).catch((err)=>{
                if (err || sharedConfig.done) {
                    err && (error = err);
                    return set();
                }
            });
        }
    }
    const listContext = useContext(SuspenseListContext);
    if (listContext) show = listContext.register(store.inFallback);
    let dispose;
    onCleanup(()=>dispose && dispose());
    return createComponent(SuspenseContext.Provider, {
        value: store,
        get children () {
            return createMemo(()=>{
                if (error) throw error;
                ctx = sharedConfig.context;
                if (flicker) {
                    flicker();
                    return flicker = undefined;
                }
                if (ctx && p === "$$f") setHydrateContext();
                const rendered = createMemo(()=>props.children);
                return createMemo((prev)=>{
                    const inFallback = store.inFallback(), { showContent = true, showFallback = true } = show ? show() : {};
                    if ((!inFallback || p && p !== "$$f") && showContent) {
                        store.resolved = true;
                        dispose && dispose();
                        dispose = ctx = p = undefined;
                        resumeEffects(store.effects);
                        return rendered();
                    }
                    if (!showFallback) return;
                    if (dispose) return prev;
                    return createRoot((disposer)=>{
                        dispose = disposer;
                        if (ctx) {
                            setHydrateContext({
                                id: ctx.id + "f",
                                count: 0
                            });
                            ctx = undefined;
                        }
                        return props.fallback;
                    }, owner);
                });
            });
        }
    });
}
const DEV = undefined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"bArT6"}],"bArT6":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"irmnC":[function() {},{}],"3P0aT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>A);
parcelHelpers.export(exports, "HashRouter", ()=>HashRouter);
parcelHelpers.export(exports, "MemoryRouter", ()=>MemoryRouter);
parcelHelpers.export(exports, "Navigate", ()=>Navigate);
parcelHelpers.export(exports, "Route", ()=>Route);
parcelHelpers.export(exports, "Router", ()=>Router);
parcelHelpers.export(exports, "StaticRouter", ()=>StaticRouter);
parcelHelpers.export(exports, "_mergeSearchString", ()=>mergeSearchString);
parcelHelpers.export(exports, "action", ()=>action);
parcelHelpers.export(exports, "cache", ()=>cache);
parcelHelpers.export(exports, "createAsync", ()=>createAsync);
parcelHelpers.export(exports, "createAsyncStore", ()=>createAsyncStore);
parcelHelpers.export(exports, "createBeforeLeave", ()=>createBeforeLeave);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
parcelHelpers.export(exports, "json", ()=>json);
parcelHelpers.export(exports, "keepDepth", ()=>keepDepth);
parcelHelpers.export(exports, "notifyIfNotBlocked", ()=>notifyIfNotBlocked);
parcelHelpers.export(exports, "redirect", ()=>redirect);
parcelHelpers.export(exports, "reload", ()=>reload);
parcelHelpers.export(exports, "revalidate", ()=>revalidate);
parcelHelpers.export(exports, "saveCurrentDepth", ()=>saveCurrentDepth);
parcelHelpers.export(exports, "useAction", ()=>useAction);
parcelHelpers.export(exports, "useBeforeLeave", ()=>useBeforeLeave);
parcelHelpers.export(exports, "useCurrentMatches", ()=>useCurrentMatches);
parcelHelpers.export(exports, "useHref", ()=>useHref);
parcelHelpers.export(exports, "useIsRouting", ()=>useIsRouting);
parcelHelpers.export(exports, "useLocation", ()=>useLocation);
parcelHelpers.export(exports, "useMatch", ()=>useMatch);
parcelHelpers.export(exports, "useNavigate", ()=>useNavigate);
parcelHelpers.export(exports, "useParams", ()=>useParams);
parcelHelpers.export(exports, "useResolvedPath", ()=>useResolvedPath);
parcelHelpers.export(exports, "useSearchParams", ()=>useSearchParams);
parcelHelpers.export(exports, "useSubmission", ()=>useSubmission);
parcelHelpers.export(exports, "useSubmissions", ()=>useSubmissions);
var _web = require("solid-js/web");
var _solidJs = require("solid-js");
var _store = require("solid-js/store");
function createBeforeLeave() {
    let listeners = new Set();
    function subscribe(listener) {
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    }
    let ignore = false;
    function confirm(to, options) {
        if (ignore) return ignore = false, true;
        const e = {
            to,
            options,
            defaultPrevented: false,
            preventDefault: ()=>e.defaultPrevented = true
        };
        for (const l of listeners)l.listener({
            ...e,
            from: l.location,
            retry: (force)=>{
                force && (ignore = true);
                l.navigate(to, {
                    ...options,
                    resolve: false
                });
            }
        });
        return !e.defaultPrevented;
    }
    return {
        subscribe,
        confirm
    };
}
// The following supports browser initiated blocking (eg back/forward)
let depth;
function saveCurrentDepth() {
    if (!window.history.state || window.history.state._depth == null) window.history.replaceState({
        ...window.history.state,
        _depth: window.history.length - 1
    }, "");
    depth = window.history.state._depth;
}
if (!(0, _web.isServer)) saveCurrentDepth();
function keepDepth(state) {
    return {
        ...state,
        _depth: window.history.state && window.history.state._depth
    };
}
function notifyIfNotBlocked(notify, block) {
    let ignore = false;
    return ()=>{
        const prevDepth = depth;
        saveCurrentDepth();
        const delta = prevDepth == null ? null : depth - prevDepth;
        if (ignore) {
            ignore = false;
            return;
        }
        if (delta && block(delta)) {
            ignore = true;
            window.history.go(-delta);
        } else notify();
    };
}
const hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
const trimPathRegex = /^\/+|(\/)\/+$/g;
const mockBase = "http://sr";
function normalizePath(path, omitSlash = false) {
    const s = path.replace(trimPathRegex, "$1");
    return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}
function resolvePath(base, path, from) {
    if (hasSchemeRegex.test(path)) return undefined;
    const basePath = normalizePath(base);
    const fromPath = from && normalizePath(from);
    let result = "";
    if (!fromPath || path.startsWith("/")) result = basePath;
    else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) result = basePath + fromPath;
    else result = fromPath;
    return (result || "/") + normalizePath(path, !result);
}
function invariant(value, message) {
    if (value == null) throw new Error(message);
    return value;
}
function joinPaths(from, to) {
    return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}
function extractSearchParams(url) {
    const params = {};
    url.searchParams.forEach((value, key)=>{
        params[key] = value;
    });
    return params;
}
function createMatcher(path, partial, matchFilters) {
    const [pattern, splat] = path.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    const len = segments.length;
    return (location)=>{
        const locSegments = location.split("/").filter(Boolean);
        const lenDiff = locSegments.length - len;
        if (lenDiff < 0 || lenDiff > 0 && splat === undefined && !partial) return null;
        const match = {
            path: len ? "" : "/",
            params: {}
        };
        const matchFilter = (s)=>matchFilters === undefined ? undefined : matchFilters[s];
        for(let i = 0; i < len; i++){
            const segment = segments[i];
            const locSegment = locSegments[i];
            const dynamic = segment[0] === ":";
            const key = dynamic ? segment.slice(1) : segment;
            if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment;
            else if (dynamic || !matchSegment(locSegment, segment)) return null;
            match.path += `/${locSegment}`;
        }
        if (splat) {
            const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
            if (matchSegment(remainder, matchFilter(splat))) match.params[splat] = remainder;
            else return null;
        }
        return match;
    };
}
function matchSegment(input, filter) {
    const isEqual = (s)=>s.localeCompare(input, undefined, {
            sensitivity: "base"
        }) === 0;
    if (filter === undefined) return true;
    else if (typeof filter === "string") return isEqual(filter);
    else if (typeof filter === "function") return filter(input);
    else if (Array.isArray(filter)) return filter.some(isEqual);
    else if (filter instanceof RegExp) return filter.test(input);
    return false;
}
function scoreRoute(route) {
    const [pattern, splat] = route.pattern.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    return segments.reduce((score, segment)=>score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === undefined ? 0 : 1));
}
function createMemoObject(fn) {
    const map = new Map();
    const owner = (0, _solidJs.getOwner)();
    return new Proxy({}, {
        get (_, property) {
            if (!map.has(property)) (0, _solidJs.runWithOwner)(owner, ()=>map.set(property, (0, _solidJs.createMemo)(()=>fn()[property])));
            return map.get(property)();
        },
        getOwnPropertyDescriptor () {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys () {
            return Reflect.ownKeys(fn());
        }
    });
}
function mergeSearchString(search, params) {
    const merged = new URLSearchParams(search);
    Object.entries(params).forEach(([key, value])=>{
        if (value == null || value === "") merged.delete(key);
        else merged.set(key, String(value));
    });
    const s = merged.toString();
    return s ? `?${s}` : "";
}
function expandOptionals(pattern) {
    let match = /(\/?\:[^\/]+)\?/.exec(pattern);
    if (!match) return [
        pattern
    ];
    let prefix = pattern.slice(0, match.index);
    let suffix = pattern.slice(match.index + match[0].length);
    const prefixes = [
        prefix,
        prefix += match[1]
    ];
    // This section handles adjacent optional params. We don't actually want all permuations since
    // that will lead to equivalent routes which have the same number of params. For example
    // `/:a?/:b?/:c`? only has the unique expansion: `/`, `/:a`, `/:a/:b`, `/:a/:b/:c` and we can
    // discard `/:b`, `/:c`, `/:b/:c` by building them up in order and not recursing. This also helps
    // ensure predictability where earlier params have precidence.
    while(match = /^(\/\:[^\/]+)\?/.exec(suffix)){
        prefixes.push(prefix += match[1]);
        suffix = suffix.slice(match[0].length);
    }
    return expandOptionals(suffix).reduce((results, expansion)=>[
            ...results,
            ...prefixes.map((p)=>p + expansion)
        ], []);
}
const MAX_REDIRECTS = 100;
const RouterContextObj = (0, _solidJs.createContext)();
const RouteContextObj = (0, _solidJs.createContext)();
const useRouter = ()=>invariant((0, _solidJs.useContext)(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
const useRoute = ()=>(0, _solidJs.useContext)(RouteContextObj) || useRouter().base;
const useResolvedPath = (path)=>{
    const route = useRoute();
    return (0, _solidJs.createMemo)(()=>route.resolvePath(path()));
};
const useHref = (to)=>{
    const router = useRouter();
    return (0, _solidJs.createMemo)(()=>{
        const to_ = to();
        return to_ !== undefined ? router.renderPath(to_) : to_;
    });
};
const useNavigate = ()=>useRouter().navigatorFactory();
const useLocation = ()=>useRouter().location;
const useIsRouting = ()=>useRouter().isRouting;
const useMatch = (path, matchFilters)=>{
    const location = useLocation();
    const matchers = (0, _solidJs.createMemo)(()=>expandOptionals(path()).map((path)=>createMatcher(path, undefined, matchFilters)));
    return (0, _solidJs.createMemo)(()=>{
        for (const matcher of matchers()){
            const match = matcher(location.pathname);
            if (match) return match;
        }
    });
};
const useCurrentMatches = ()=>useRouter().matches;
const useParams = ()=>useRouter().params;
const useSearchParams = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const setSearchParams = (params, options)=>{
        const searchString = (0, _solidJs.untrack)(()=>location.pathname + mergeSearchString(location.search, params) + location.hash);
        navigate(searchString, {
            scroll: false,
            resolve: false,
            ...options
        });
    };
    return [
        location.query,
        setSearchParams
    ];
};
const useBeforeLeave = (listener)=>{
    const s = useRouter().beforeLeave.subscribe({
        listener,
        location: useLocation(),
        navigate: useNavigate()
    });
    (0, _solidJs.onCleanup)(s);
};
function createRoutes(routeDef, base = "") {
    const { component, load, children, info } = routeDef;
    const isLeaf = !children || Array.isArray(children) && !children.length;
    const shared = {
        key: routeDef,
        component,
        load,
        info
    };
    return asArray(routeDef.path).reduce((acc, originalPath)=>{
        for (const expandedPath of expandOptionals(originalPath)){
            const path = joinPaths(base, expandedPath);
            let pattern = isLeaf ? path : path.split("/*", 1)[0];
            pattern = pattern.split("/").map((s)=>{
                return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
            }).join("/");
            acc.push({
                ...shared,
                originalPath,
                pattern,
                matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
            });
        }
        return acc;
    }, []);
}
function createBranch(routes, index = 0) {
    return {
        routes,
        score: scoreRoute(routes[routes.length - 1]) * 10000 - index,
        matcher (location) {
            const matches = [];
            for(let i = routes.length - 1; i >= 0; i--){
                const route = routes[i];
                const match = route.matcher(location);
                if (!match) return null;
                matches.unshift({
                    ...match,
                    route
                });
            }
            return matches;
        }
    };
}
function asArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
function createBranches(routeDef, base = "", stack = [], branches = []) {
    const routeDefs = asArray(routeDef);
    for(let i = 0, len = routeDefs.length; i < len; i++){
        const def = routeDefs[i];
        if (def && typeof def === "object") {
            if (!def.hasOwnProperty("path")) def.path = "";
            const routes = createRoutes(def, base);
            for (const route of routes){
                stack.push(route);
                const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
                if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches);
                else {
                    const branch = createBranch([
                        ...stack
                    ], branches.length);
                    branches.push(branch);
                }
                stack.pop();
            }
        }
    }
    // Stack will be empty on final return
    return stack.length ? branches : branches.sort((a, b)=>b.score - a.score);
}
function getRouteMatches(branches, location) {
    for(let i = 0, len = branches.length; i < len; i++){
        const match = branches[i].matcher(location);
        if (match) return match;
    }
    return [];
}
function createLocation(path, state) {
    const origin = new URL(mockBase);
    const url = (0, _solidJs.createMemo)((prev)=>{
        const path_ = path();
        try {
            return new URL(path_, origin);
        } catch (err) {
            console.error(`Invalid path ${path_}`);
            return prev;
        }
    }, origin, {
        equals: (a, b)=>a.href === b.href
    });
    const pathname = (0, _solidJs.createMemo)(()=>url().pathname);
    const search = (0, _solidJs.createMemo)(()=>url().search, true);
    const hash = (0, _solidJs.createMemo)(()=>url().hash);
    const key = ()=>"";
    return {
        get pathname () {
            return pathname();
        },
        get search () {
            return search();
        },
        get hash () {
            return hash();
        },
        get state () {
            return state();
        },
        get key () {
            return key();
        },
        query: createMemoObject((0, _solidJs.on)(search, ()=>extractSearchParams(url())))
    };
}
let intent;
function getIntent() {
    return intent;
}
let inLoadFn = false;
function getInLoadFn() {
    return inLoadFn;
}
function setInLoadFn(value) {
    inLoadFn = value;
}
function createRouterContext(integration, branches, getContext, options = {}) {
    const { signal: [source, setSource], utils = {} } = integration;
    const parsePath = utils.parsePath || ((p)=>p);
    const renderPath = utils.renderPath || ((p)=>p);
    const beforeLeave = utils.beforeLeave || createBeforeLeave();
    const basePath = resolvePath("", options.base || "");
    if (basePath === undefined) throw new Error(`${basePath} is not a valid base path`);
    else if (basePath && !source().value) setSource({
        value: basePath,
        replace: true,
        scroll: false
    });
    const [isRouting, setIsRouting] = (0, _solidJs.createSignal)(false);
    const start = async (callback)=>{
        setIsRouting(true);
        try {
            await (0, _solidJs.startTransition)(callback);
        } finally{
            setIsRouting(false);
        }
    };
    const [reference, setReference] = (0, _solidJs.createSignal)(source().value);
    const [state, setState] = (0, _solidJs.createSignal)(source().state);
    const location = createLocation(reference, state);
    const referrers = [];
    const submissions = (0, _solidJs.createSignal)((0, _web.isServer) ? initFromFlash() : []);
    const matches = (0, _solidJs.createMemo)(()=>{
        if (typeof options.transformUrl === "function") return getRouteMatches(branches(), options.transformUrl(location.pathname));
        return getRouteMatches(branches(), location.pathname);
    });
    const params = createMemoObject(()=>{
        const m = matches();
        const params = {};
        for(let i = 0; i < m.length; i++)Object.assign(params, m[i].params);
        return params;
    });
    const baseRoute = {
        pattern: basePath,
        path: ()=>basePath,
        outlet: ()=>null,
        resolvePath (to) {
            return resolvePath(basePath, to);
        }
    };
    (0, _solidJs.createRenderEffect)(()=>{
        const { value, state } = source();
        // Untrack this whole block so `start` doesn't cause Solid's Listener to be preserved
        (0, _solidJs.untrack)(()=>{
            start(()=>{
                intent = "native";
                if (value !== reference()) setReference(value);
                setState(state);
                (0, _solidJs.resetErrorBoundaries)();
                submissions[1]([]);
            }).then(()=>{
                intent = undefined;
            });
        });
    });
    return {
        base: baseRoute,
        location,
        params,
        isRouting,
        renderPath,
        parsePath,
        navigatorFactory,
        matches,
        beforeLeave,
        preloadRoute,
        singleFlight: options.singleFlight === undefined ? true : options.singleFlight,
        submissions
    };
    function navigateFromRoute(route, to, options) {
        // Untrack in case someone navigates in an effect - don't want to track `reference` or route paths
        (0, _solidJs.untrack)(()=>{
            if (typeof to === "number") {
                if (!to) ;
                else if (utils.go) utils.go(to);
                else console.warn("Router integration does not support relative routing");
                return;
            }
            const { replace, resolve, scroll, state: nextState } = {
                replace: false,
                resolve: true,
                scroll: true,
                ...options
            };
            const resolvedTo = resolve ? route.resolvePath(to) : resolvePath("", to);
            if (resolvedTo === undefined) throw new Error(`Path '${to}' is not a routable path`);
            else if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
            const current = reference();
            if (resolvedTo !== current || nextState !== state()) {
                if (0, _web.isServer) {
                    const e = (0, _web.getRequestEvent)();
                    e && (e.response = {
                        status: 302,
                        headers: new Headers({
                            Location: resolvedTo
                        })
                    });
                    setSource({
                        value: resolvedTo,
                        replace,
                        scroll,
                        state: nextState
                    });
                } else if (beforeLeave.confirm(resolvedTo, options)) {
                    const len = referrers.push({
                        value: current,
                        replace,
                        scroll,
                        state: state()
                    });
                    start(()=>{
                        intent = "navigate";
                        setReference(resolvedTo);
                        setState(nextState);
                        (0, _solidJs.resetErrorBoundaries)();
                        submissions[1]([]);
                    }).then(()=>{
                        if (referrers.length === len) {
                            intent = undefined;
                            navigateEnd({
                                value: resolvedTo,
                                state: nextState
                            });
                        }
                    });
                }
            }
        });
    }
    function navigatorFactory(route) {
        // Workaround for vite issue (https://github.com/vitejs/vite/issues/3803)
        route = route || (0, _solidJs.useContext)(RouteContextObj) || baseRoute;
        return (to, options)=>navigateFromRoute(route, to, options);
    }
    function navigateEnd(next) {
        const first = referrers[0];
        if (first) {
            if (next.value !== first.value || next.state !== first.state) setSource({
                ...next,
                replace: first.replace,
                scroll: first.scroll
            });
            referrers.length = 0;
        }
    }
    function preloadRoute(url, preloadData) {
        const matches = getRouteMatches(branches(), url.pathname);
        const prevIntent = intent;
        intent = "preload";
        for(let match in matches){
            const { route, params } = matches[match];
            route.component && route.component.preload && route.component.preload();
            const { load } = route;
            inLoadFn = true;
            preloadData && load && (0, _solidJs.runWithOwner)(getContext(), ()=>load({
                    params,
                    location: {
                        pathname: url.pathname,
                        search: url.search,
                        hash: url.hash,
                        query: extractSearchParams(url),
                        state: null,
                        key: ""
                    },
                    intent: "preload"
                }));
            inLoadFn = false;
        }
        intent = prevIntent;
    }
    function initFromFlash() {
        const e = (0, _web.getRequestEvent)();
        return e && e.router && e.router.submission ? [
            e.router.submission
        ] : [];
    }
}
function createRouteContext(router, parent, outlet, match) {
    const { base, location, params } = router;
    const { pattern, component, load } = match().route;
    const path = (0, _solidJs.createMemo)(()=>match().path);
    component && component.preload && component.preload();
    inLoadFn = true;
    const data = load ? load({
        params,
        location,
        intent: intent || "initial"
    }) : undefined;
    inLoadFn = false;
    const route = {
        parent,
        pattern,
        path,
        outlet: ()=>component ? (0, _solidJs.createComponent)(component, {
                params,
                location,
                data,
                get children () {
                    return outlet();
                }
            }) : outlet(),
        resolvePath (to) {
            return resolvePath(base.path(), to, path());
        }
    };
    return route;
}
const createRouterComponent = (router)=>(props)=>{
        const { base } = props;
        const routeDefs = (0, _solidJs.children)(()=>props.children);
        const branches = (0, _solidJs.createMemo)(()=>createBranches(routeDefs(), props.base || ""));
        let context;
        const routerState = createRouterContext(router, branches, ()=>context, {
            base,
            singleFlight: props.singleFlight,
            transformUrl: props.transformUrl
        });
        router.create && router.create(routerState);
        return (0, _web.createComponent)(RouterContextObj.Provider, {
            value: routerState,
            get children () {
                return (0, _web.createComponent)(Root, {
                    routerState: routerState,
                    get root () {
                        return props.root;
                    },
                    get load () {
                        return props.rootLoad;
                    },
                    get children () {
                        return [
                            (0, _web.memo)(()=>(context = (0, _solidJs.getOwner)()) && null),
                            (0, _web.createComponent)(Routes, {
                                routerState: routerState,
                                get branches () {
                                    return branches();
                                }
                            })
                        ];
                    }
                });
            }
        });
    };
function Root(props) {
    const location = props.routerState.location;
    const params = props.routerState.params;
    const data = (0, _solidJs.createMemo)(()=>props.load && (0, _solidJs.untrack)(()=>{
            setInLoadFn(true);
            props.load({
                params,
                location,
                intent: getIntent() || "initial"
            });
            setInLoadFn(false);
        }));
    return (0, _web.createComponent)((0, _solidJs.Show), {
        get when () {
            return props.root;
        },
        keyed: true,
        get fallback () {
            return props.children;
        },
        children: (Root)=>(0, _web.createComponent)(Root, {
                params: params,
                location: location,
                get data () {
                    return data();
                },
                get children () {
                    return props.children;
                }
            })
    });
}
function Routes(props) {
    if (0, _web.isServer) {
        const e = (0, _web.getRequestEvent)();
        if (e && e.router && e.router.dataOnly) {
            dataOnly(e, props.routerState, props.branches);
            return;
        }
        e && ((e.router || (e.router = {})).matches || (e.router.matches = props.routerState.matches().map(({ route, path, params })=>({
                path: route.originalPath,
                pattern: route.pattern,
                match: path,
                params,
                info: route.info
            }))));
    }
    const disposers = [];
    let root;
    const routeStates = (0, _solidJs.createMemo)((0, _solidJs.on)(props.routerState.matches, (nextMatches, prevMatches, prev)=>{
        let equal = prevMatches && nextMatches.length === prevMatches.length;
        const next = [];
        for(let i = 0, len = nextMatches.length; i < len; i++){
            const prevMatch = prevMatches && prevMatches[i];
            const nextMatch = nextMatches[i];
            if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) next[i] = prev[i];
            else {
                equal = false;
                if (disposers[i]) disposers[i]();
                (0, _solidJs.createRoot)((dispose)=>{
                    disposers[i] = dispose;
                    next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(()=>routeStates()[i + 1]), ()=>props.routerState.matches()[i]);
                });
            }
        }
        disposers.splice(nextMatches.length).forEach((dispose)=>dispose());
        if (prev && equal) return prev;
        root = next[0];
        return next;
    }));
    return createOutlet(()=>routeStates() && root)();
}
const createOutlet = (child)=>{
    return ()=>(0, _web.createComponent)((0, _solidJs.Show), {
            get when () {
                return child();
            },
            keyed: true,
            children: (child)=>(0, _web.createComponent)(RouteContextObj.Provider, {
                    value: child,
                    get children () {
                        return child.outlet();
                    }
                })
        });
};
const Route = (props)=>{
    const childRoutes = (0, _solidJs.children)(()=>props.children);
    return (0, _solidJs.mergeProps)(props, {
        get children () {
            return childRoutes();
        }
    });
};
// for data only mode with single flight mutations
function dataOnly(event, routerState, branches) {
    const url = new URL(event.request.url);
    const prevMatches = getRouteMatches(branches, new URL(event.router.previousUrl || event.request.url).pathname);
    const matches = getRouteMatches(branches, url.pathname);
    for(let match = 0; match < matches.length; match++){
        if (!prevMatches[match] || matches[match].route !== prevMatches[match].route) event.router.dataOnly = true;
        const { route, params } = matches[match];
        route.load && route.load({
            params,
            location: routerState.location,
            intent: "preload"
        });
    }
}
function intercept([value, setValue], get, set) {
    return [
        get ? ()=>get(value()) : value,
        set ? (v)=>setValue(set(v)) : setValue
    ];
}
function querySelector(selector) {
    if (selector === "#") return null;
    // Guard against selector being an invalid CSS selector
    try {
        return document.querySelector(selector);
    } catch (e) {
        return null;
    }
}
function createRouter(config) {
    let ignore = false;
    const wrap = (value)=>typeof value === "string" ? {
            value
        } : value;
    const signal = intercept((0, _solidJs.createSignal)(wrap(config.get()), {
        equals: (a, b)=>a.value === b.value && a.state === b.state
    }), undefined, (next)=>{
        !ignore && config.set(next);
        return next;
    });
    config.init && (0, _solidJs.onCleanup)(config.init((value = config.get())=>{
        ignore = true;
        signal[1](wrap(value));
        ignore = false;
    }));
    return createRouterComponent({
        signal,
        create: config.create,
        utils: config.utils
    });
}
function bindEvent(target, type, handler) {
    target.addEventListener(type, handler);
    return ()=>target.removeEventListener(type, handler);
}
function scrollToHash(hash, fallbackTop) {
    const el = querySelector(`#${hash}`);
    if (el) el.scrollIntoView();
    else if (fallbackTop) window.scrollTo(0, 0);
}
function getPath(url) {
    const u = new URL(url);
    return u.pathname + u.search;
}
function StaticRouter(props) {
    let e;
    const url = props.url || (e = (0, _web.getRequestEvent)()) && getPath(e.request.url) || "";
    const obj = {
        value: props.transformUrl ? props.transformUrl(url) : url
    };
    return createRouterComponent({
        signal: [
            ()=>obj,
            (next)=>Object.assign(obj, next)
        ]
    })(props);
}
const LocationHeader = "Location";
const PRELOAD_TIMEOUT = 5000;
const CACHE_TIMEOUT = 180000;
let cacheMap = new Map();
// cleanup forward/back cache
if (!(0, _web.isServer)) setInterval(()=>{
    const now = Date.now();
    for (let [k, v] of cacheMap.entries())if (!v[3].count && now - v[0] > CACHE_TIMEOUT) cacheMap.delete(k);
}, 300000);
function getCache() {
    if (!(0, _web.isServer)) return cacheMap;
    const req = (0, _web.getRequestEvent)();
    if (!req) throw new Error("Cannot find cache context");
    return (req.router || (req.router = {})).cache || (req.router.cache = new Map());
}
function revalidate(key, force = true) {
    return (0, _solidJs.startTransition)(()=>{
        const now = Date.now();
        cacheKeyOp(key, (entry)=>{
            force && (entry[0] = 0); //force cache miss
            entry[3][1](now); // retrigger live signals
        });
    });
}
function cacheKeyOp(key, fn) {
    key && !Array.isArray(key) && (key = [
        key
    ]);
    for (let k of cacheMap.keys())if (key === undefined || matchKey(k, key)) fn(cacheMap.get(k));
}
function cache(fn, name) {
    // prioritize GET for server functions
    if (fn.GET) fn = fn.GET;
    const cachedFn = (...args)=>{
        const cache = getCache();
        const intent = getIntent();
        const inLoadFn = getInLoadFn();
        const owner = (0, _solidJs.getOwner)();
        const navigate = owner ? useNavigate() : undefined;
        const now = Date.now();
        const key = name + hashKey(args);
        let cached = cache.get(key);
        let tracking;
        if (0, _web.isServer) {
            const e = (0, _web.getRequestEvent)();
            if (e) {
                const dataOnly = (e.router || (e.router = {})).dataOnly;
                if (dataOnly) {
                    const data = e && (e.router.data || (e.router.data = {}));
                    if (data && key in data) return data[key];
                    if (Array.isArray(dataOnly) && !dataOnly.includes(key)) {
                        data[key] = undefined;
                        return Promise.resolve();
                    }
                }
            }
        }
        if ((0, _solidJs.getListener)() && !(0, _web.isServer)) {
            tracking = true;
            (0, _solidJs.onCleanup)(()=>cached[3].count--);
        }
        if (cached && cached[0] && ((0, _web.isServer) || intent === "native" || cached[3].count || Date.now() - cached[0] < PRELOAD_TIMEOUT)) {
            if (tracking) {
                cached[3].count++;
                cached[3][0](); // track
            }
            if (cached[2] === "preload" && intent !== "preload") cached[0] = now;
            let res = cached[1];
            if (!inLoadFn) {
                res = "then" in cached[1] ? cached[1].then(handleResponse(false), handleResponse(true)) : handleResponse(false)(cached[1]);
                !(0, _web.isServer) && intent === "navigate" && (0, _solidJs.startTransition)(()=>cached[3][1](cached[0])); // update version
            } else "then" in res && res.catch(()=>{});
            return res;
        }
        let res = !(0, _web.isServer) && (0, _solidJs.sharedConfig).context && (0, _solidJs.sharedConfig).has(key) ? (0, _solidJs.sharedConfig).load(key) // hydrating
         : fn(...args);
        if (cached) {
            cached[0] = now;
            cached[1] = res;
            cached[2] = intent;
            !(0, _web.isServer) && intent === "navigate" && (0, _solidJs.startTransition)(()=>cached[3][1](cached[0])); // update version
        } else {
            cache.set(key, cached = [
                now,
                res,
                intent,
                (0, _solidJs.createSignal)(now)
            ]);
            cached[3].count = 0;
        }
        if (tracking) {
            cached[3].count++;
            cached[3][0](); // track
        }
        if (0, _web.isServer) {
            const e = (0, _web.getRequestEvent)();
            if (e && e.router.dataOnly) return e.router.data[key] = res;
        }
        if (!inLoadFn) res = "then" in res ? res.then(handleResponse(false), handleResponse(true)) : handleResponse(false)(res);
        else "then" in res && res.catch(()=>{});
        // serialize on server
        if ((0, _web.isServer) && (0, _solidJs.sharedConfig).context && (0, _solidJs.sharedConfig).context.async && !(0, _solidJs.sharedConfig).context.noHydrate) {
            const e = (0, _web.getRequestEvent)();
            (!e || !e.serverOnly) && (0, _solidJs.sharedConfig).context.serialize(key, res);
        }
        return res;
        function handleResponse(error) {
            return async (v)=>{
                if (v instanceof Response) {
                    if (v.headers.has("Location")) {
                        if (navigate) (0, _solidJs.startTransition)(()=>{
                            let url = v.headers.get(LocationHeader);
                            if (url && url.startsWith("/")) navigate(url, {
                                replace: true
                            });
                            else if (!(0, _web.isServer) && url) window.location.href = url;
                        });
                        return;
                    }
                    if (v.customBody) v = await v.customBody();
                }
                if (error) throw v;
                return v;
            };
        }
    };
    cachedFn.keyFor = (...args)=>name + hashKey(args);
    cachedFn.key = name;
    return cachedFn;
}
cache.set = (key, value)=>{
    const cache = getCache();
    const now = Date.now();
    let cached = cache.get(key);
    if (cached) {
        cached[0] = now;
        cached[1] = value;
        cached[2] = "preload";
    } else {
        cache.set(key, cached = [
            now,
            value,
            ,
            (0, _solidJs.createSignal)(now)
        ]);
        cached[3].count = 0;
    }
};
cache.clear = ()=>getCache().clear();
function matchKey(key, keys) {
    for (let k of keys){
        if (key.startsWith(k)) return true;
    }
    return false;
}
// Modified from the amazing Tanstack Query library (MIT)
// https://github.com/TanStack/query/blob/main/packages/query-core/src/utils.ts#L168
function hashKey(args) {
    return JSON.stringify(args, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function isPlainObject(obj) {
    let proto;
    return obj != null && typeof obj === "object" && (!(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype);
}
const actions = /* #__PURE__ */ new Map();
function useSubmissions(fn, filter) {
    const router = useRouter();
    const subs = (0, _solidJs.createMemo)(()=>router.submissions[0]().filter((s)=>s.url === fn.toString() && (!filter || filter(s.input))));
    return new Proxy([], {
        get (_, property) {
            if (property === (0, _solidJs.$TRACK)) return subs();
            if (property === "pending") return subs().some((sub)=>!sub.result);
            return subs()[property];
        }
    });
}
function useSubmission(fn, filter) {
    const submissions = useSubmissions(fn, filter);
    return new Proxy({}, {
        get (_, property) {
            return submissions[submissions.length - 1]?.[property];
        }
    });
}
function useAction(action) {
    const r = useRouter();
    return (...args)=>action.apply({
            r
        }, args);
}
function action(fn, name) {
    function mutate(...variables) {
        const router = this.r;
        const form = this.f;
        const p = (router.singleFlight && fn.withOptions ? fn.withOptions({
            headers: {
                "X-Single-Flight": "true"
            }
        }) : fn)(...variables);
        const [result, setResult] = (0, _solidJs.createSignal)();
        let submission;
        function handler(error) {
            return async (res)=>{
                const result = await handleResponse(res, error, router.navigatorFactory());
                if (!result) return submission.clear();
                setResult(result);
                if (result.error && !form) throw result.error;
                return result.data;
            };
        }
        router.submissions[1]((s)=>[
                ...s,
                submission = {
                    input: variables,
                    url,
                    get result () {
                        return result()?.data;
                    },
                    get error () {
                        return result()?.error;
                    },
                    get pending () {
                        return !result();
                    },
                    clear () {
                        router.submissions[1]((v)=>v.filter((i)=>i.input !== variables));
                    },
                    retry () {
                        setResult(undefined);
                        const p = fn(...variables);
                        return p.then(handler(), handler(true));
                    }
                }
            ]);
        return p.then(handler(), handler(true));
    }
    const url = fn.url || name && `https://action/${name}` || (!(0, _web.isServer) ? `https://action/${hashString(fn.toString())}` : "");
    return toAction(mutate, url);
}
function toAction(fn, url) {
    fn.toString = ()=>{
        if (!url) throw new Error("Client Actions need explicit names if server rendered");
        return url;
    };
    fn.with = function(...args) {
        const newFn = function(...passedArgs) {
            return fn.call(this, ...args, ...passedArgs);
        };
        const uri = new URL(url, mockBase);
        uri.searchParams.set("args", hashKey(args));
        return toAction(newFn, (uri.origin === "https://action" ? uri.origin : "") + uri.pathname + uri.search);
    };
    fn.url = url;
    if (!(0, _web.isServer)) {
        actions.set(url, fn);
        (0, _solidJs.getOwner)() && (0, _solidJs.onCleanup)(()=>actions.delete(url));
    }
    return fn;
}
const hashString = (s)=>s.split("").reduce((a, b)=>(a << 5) - a + b.charCodeAt(0) | 0, 0);
async function handleResponse(response, error, navigate) {
    let data;
    let custom;
    let keys;
    let flightKeys;
    if (response instanceof Response) {
        if (response.headers.has("X-Revalidate")) keys = response.headers.get("X-Revalidate").split(",");
        if (response.customBody) {
            data = custom = await response.customBody();
            if (response.headers.has("X-Single-Flight")) {
                data = data._$value;
                delete custom._$value;
                flightKeys = Object.keys(custom);
            }
        }
        if (response.headers.has("Location")) {
            const locationUrl = response.headers.get("Location") || "/";
            if (locationUrl.startsWith("http")) window.location.href = locationUrl;
            else navigate(locationUrl);
        }
    } else if (error) return {
        error: response
    };
    else data = response;
    // invalidate
    cacheKeyOp(keys, (entry)=>entry[0] = 0);
    // set cache
    flightKeys && flightKeys.forEach((k)=>cache.set(k, custom[k]));
    // trigger revalidation
    await revalidate(keys, false);
    return data != null ? {
        data
    } : undefined;
}
function setupNativeEvents(preload = true, explicitLinks = false, actionBase = "/_server", transformUrl) {
    return (router)=>{
        const basePath = router.base.path();
        const navigateFromRoute = router.navigatorFactory(router.base);
        let preloadTimeout = {};
        function isSvg(el) {
            return el.namespaceURI === "http://www.w3.org/2000/svg";
        }
        function handleAnchor(evt) {
            if (evt.defaultPrevented || evt.button !== 0 || evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey) return;
            const a = evt.composedPath().find((el)=>el instanceof Node && el.nodeName.toUpperCase() === "A");
            if (!a || explicitLinks && !a.hasAttribute("link")) return;
            const svg = isSvg(a);
            const href = svg ? a.href.baseVal : a.href;
            const target = svg ? a.target.baseVal : a.target;
            if (target || !href && !a.hasAttribute("state")) return;
            const rel = (a.getAttribute("rel") || "").split(/\s+/);
            if (a.hasAttribute("download") || rel && rel.includes("external")) return;
            const url = svg ? new URL(href, document.baseURI) : new URL(href);
            if (url.origin !== window.location.origin || basePath && url.pathname && !url.pathname.toLowerCase().startsWith(basePath.toLowerCase())) return;
            return [
                a,
                url
            ];
        }
        function handleAnchorClick(evt) {
            const res = handleAnchor(evt);
            if (!res) return;
            const [a, url] = res;
            const to = router.parsePath(url.pathname + url.search + url.hash);
            const state = a.getAttribute("state");
            evt.preventDefault();
            navigateFromRoute(to, {
                resolve: false,
                replace: a.hasAttribute("replace"),
                scroll: !a.hasAttribute("noscroll"),
                state: state && JSON.parse(state)
            });
        }
        function handleAnchorPreload(evt) {
            const res = handleAnchor(evt);
            if (!res) return;
            const [a, url] = res;
            if (typeof transformUrl === "function") url.pathname = transformUrl(url.pathname);
            if (!preloadTimeout[url.pathname]) router.preloadRoute(url, a.getAttribute("preload") !== "false");
        }
        function handleAnchorIn(evt) {
            const res = handleAnchor(evt);
            if (!res) return;
            const [a, url] = res;
            if (typeof transformUrl === "function") url.pathname = transformUrl(url.pathname);
            if (preloadTimeout[url.pathname]) return;
            preloadTimeout[url.pathname] = setTimeout(()=>{
                router.preloadRoute(url, a.getAttribute("preload") !== "false");
                delete preloadTimeout[url.pathname];
            }, 200);
        }
        function handleAnchorOut(evt) {
            const res = handleAnchor(evt);
            if (!res) return;
            const [, url] = res;
            if (typeof transformUrl === "function") url.pathname = transformUrl(url.pathname);
            if (preloadTimeout[url.pathname]) {
                clearTimeout(preloadTimeout[url.pathname]);
                delete preloadTimeout[url.pathname];
            }
        }
        function handleFormSubmit(evt) {
            if (evt.defaultPrevented) return;
            let actionRef = evt.submitter && evt.submitter.hasAttribute("formaction") ? evt.submitter.getAttribute("formaction") : evt.target.getAttribute("action");
            if (!actionRef) return;
            if (!actionRef.startsWith("https://action/")) {
                // normalize server actions
                const url = new URL(actionRef, mockBase);
                actionRef = router.parsePath(url.pathname + url.search);
                if (!actionRef.startsWith(actionBase)) return;
            }
            if (evt.target.method.toUpperCase() !== "POST") throw new Error("Only POST forms are supported for Actions");
            const handler = actions.get(actionRef);
            if (handler) {
                evt.preventDefault();
                const data = new FormData(evt.target);
                if (evt.submitter && evt.submitter.name) data.append(evt.submitter.name, evt.submitter.value);
                handler.call({
                    r: router,
                    f: evt.target
                }, data);
            }
        }
        // ensure delegated event run first
        (0, _web.delegateEvents)([
            "click",
            "submit"
        ]);
        document.addEventListener("click", handleAnchorClick);
        if (preload) {
            document.addEventListener("mouseover", handleAnchorIn);
            document.addEventListener("mouseout", handleAnchorOut);
            document.addEventListener("focusin", handleAnchorPreload);
            document.addEventListener("touchstart", handleAnchorPreload);
        }
        document.addEventListener("submit", handleFormSubmit);
        (0, _solidJs.onCleanup)(()=>{
            document.removeEventListener("click", handleAnchorClick);
            if (preload) {
                document.removeEventListener("mouseover", handleAnchorIn);
                document.removeEventListener("mouseout", handleAnchorOut);
                document.removeEventListener("focusin", handleAnchorPreload);
                document.removeEventListener("touchstart", handleAnchorPreload);
            }
            document.removeEventListener("submit", handleFormSubmit);
        });
    };
}
function Router(props) {
    if (0, _web.isServer) return StaticRouter(props);
    const getSource = ()=>{
        const url = window.location.pathname + window.location.search;
        return {
            value: props.transformUrl ? props.transformUrl(url) + window.location.hash : url + window.location.hash,
            state: window.history.state
        };
    };
    const beforeLeave = createBeforeLeave();
    return createRouter({
        get: getSource,
        set ({ value, replace, scroll, state }) {
            if (replace) window.history.replaceState(keepDepth(state), "", value);
            else window.history.pushState(state, "", value);
            scrollToHash(window.location.hash.slice(1), scroll);
            saveCurrentDepth();
        },
        init: (notify)=>bindEvent(window, "popstate", notifyIfNotBlocked(notify, (delta)=>{
                if (delta && delta < 0) return !beforeLeave.confirm(delta);
                else {
                    const s = getSource();
                    return !beforeLeave.confirm(s.value, {
                        state: s.state
                    });
                }
            })),
        create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase, props.transformUrl),
        utils: {
            go: (delta)=>window.history.go(delta),
            beforeLeave
        }
    })(props);
}
function hashParser(str) {
    const to = str.replace(/^.*?#/, "");
    // Hash-only hrefs like `#foo` from plain anchors will come in as `/#foo` whereas a link to
    // `/foo` will be `/#/foo`. Check if the to starts with a `/` and if not append it as a hash
    // to the current path so we can handle these in-page anchors correctly.
    if (!to.startsWith("/")) {
        const [, path = "/"] = window.location.hash.split("#", 2);
        return `${path}#${to}`;
    }
    return to;
}
function HashRouter(props) {
    const getSource = ()=>window.location.hash.slice(1);
    const beforeLeave = createBeforeLeave();
    return createRouter({
        get: getSource,
        set ({ value, replace, scroll, state }) {
            if (replace) window.history.replaceState(keepDepth(state), "", "#" + value);
            else window.history.pushState(state, "", "#" + value);
            const hashIndex = value.indexOf("#");
            const hash = hashIndex >= 0 ? value.slice(hashIndex + 1) : "";
            scrollToHash(hash, scroll);
            saveCurrentDepth();
        },
        init: (notify)=>bindEvent(window, "hashchange", notifyIfNotBlocked(notify, (delta)=>!beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
        create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase),
        utils: {
            go: (delta)=>window.history.go(delta),
            renderPath: (path)=>`#${path}`,
            parsePath: hashParser,
            beforeLeave
        }
    })(props);
}
function createMemoryHistory() {
    const entries = [
        "/"
    ];
    let index = 0;
    const listeners = [];
    const go = (n)=>{
        // https://github.com/remix-run/react-router/blob/682810ca929d0e3c64a76f8d6e465196b7a2ac58/packages/router/history.ts#L245
        index = Math.max(0, Math.min(index + n, entries.length - 1));
        const value = entries[index];
        listeners.forEach((listener)=>listener(value));
    };
    return {
        get: ()=>entries[index],
        set: ({ value, scroll, replace })=>{
            if (replace) entries[index] = value;
            else {
                entries.splice(index + 1, entries.length - index, value);
                index++;
            }
            listeners.forEach((listener)=>listener(value));
            setTimeout(()=>{
                if (scroll) scrollToHash(value.split("#")[1] || "", true);
            }, 0);
        },
        back: ()=>{
            go(-1);
        },
        forward: ()=>{
            go(1);
        },
        go,
        listen: (listener)=>{
            listeners.push(listener);
            return ()=>{
                const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            };
        }
    };
}
function MemoryRouter(props) {
    const memoryHistory = props.history || createMemoryHistory();
    return createRouter({
        get: memoryHistory.get,
        set: memoryHistory.set,
        init: memoryHistory.listen,
        create: setupNativeEvents(props.preload, props.explicitLinks, props.actionBase),
        utils: {
            go: memoryHistory.go
        }
    })(props);
}
const _tmpl$ = /*#__PURE__*/ (0, _web.template)(`<a>`);
function A(props) {
    props = (0, _solidJs.mergeProps)({
        inactiveClass: "inactive",
        activeClass: "active"
    }, props);
    const [, rest] = (0, _solidJs.splitProps)(props, [
        "href",
        "state",
        "class",
        "activeClass",
        "inactiveClass",
        "end"
    ]);
    const to = useResolvedPath(()=>props.href);
    const href = useHref(to);
    const location = useLocation();
    const isActive = (0, _solidJs.createMemo)(()=>{
        const to_ = to();
        if (to_ === undefined) return [
            false,
            false
        ];
        const path = normalizePath(to_.split(/[?#]/, 1)[0]).toLowerCase();
        const loc = normalizePath(location.pathname).toLowerCase();
        return [
            props.end ? path === loc : loc.startsWith(path + "/") || loc === path,
            path === loc
        ];
    });
    return (()=>{
        const _el$ = _tmpl$();
        (0, _web.spread)(_el$, (0, _web.mergeProps)(rest, {
            get href () {
                return href() || props.href;
            },
            get state () {
                return JSON.stringify(props.state);
            },
            get classList () {
                return {
                    ...props.class && {
                        [props.class]: true
                    },
                    [props.inactiveClass]: !isActive()[0],
                    [props.activeClass]: isActive()[0],
                    ...rest.classList
                };
            },
            "link": "",
            get ["aria-current"] () {
                return isActive()[1] ? "page" : undefined;
            }
        }), false, false);
        return _el$;
    })();
}
function Navigate(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const { href, state } = props;
    const path = typeof href === "function" ? href({
        navigate,
        location
    }) : href;
    navigate(path, {
        replace: true,
        state
    });
    return null;
}
/**
 * This is mock of the eventual Solid 2.0 primitive. It is not fully featured.
 */ function createAsync(fn, options) {
    let resource;
    let prev = ()=>!resource || resource.state === "unresolved" ? undefined : resource.latest;
    [resource] = (0, _solidJs.createResource)(()=>subFetch(fn, (0, _solidJs.untrack)(prev)), (v)=>v, options);
    return ()=>resource();
}
function createAsyncStore(fn, options = {}) {
    let resource;
    let prev = ()=>!resource || resource.state === "unresolved" ? undefined : (0, _store.unwrap)(resource.latest);
    [resource] = (0, _solidJs.createResource)(()=>subFetch(fn, (0, _solidJs.untrack)(prev)), (v)=>v, {
        ...options,
        storage: (init)=>createDeepSignal(init, options.reconcile)
    });
    return ()=>resource();
}
function createDeepSignal(value, options) {
    const [store, setStore] = (0, _store.createStore)({
        value
    });
    return [
        ()=>store.value,
        (v)=>{
            typeof v === "function" && (v = v());
            setStore("value", (0, _store.reconcile)(v, options));
            return store.value;
        }
    ];
}
// mock promise while hydrating to prevent fetching
class MockPromise {
    static all() {
        return new MockPromise();
    }
    static allSettled() {
        return new MockPromise();
    }
    static any() {
        return new MockPromise();
    }
    static race() {
        return new MockPromise();
    }
    static reject() {
        return new MockPromise();
    }
    static resolve() {
        return new MockPromise();
    }
    catch() {
        return new MockPromise();
    }
    then() {
        return new MockPromise();
    }
    finally() {
        return new MockPromise();
    }
}
function subFetch(fn, prev) {
    if ((0, _web.isServer) || !(0, _solidJs.sharedConfig).context) return fn(prev);
    const ogFetch = fetch;
    const ogPromise = Promise;
    try {
        window.fetch = ()=>new MockPromise();
        Promise = MockPromise;
        return fn(prev);
    } finally{
        window.fetch = ogFetch;
        Promise = ogPromise;
    }
}
function redirect(url, init = 302) {
    let responseInit;
    let revalidate;
    if (typeof init === "number") responseInit = {
        status: init
    };
    else {
        ({ revalidate, ...responseInit } = init);
        if (typeof responseInit.status === "undefined") responseInit.status = 302;
    }
    const headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    revalidate && headers.set("X-Revalidate", revalidate.toString());
    const response = new Response(null, {
        ...responseInit,
        headers: headers
    });
    return response;
}
function reload(init = {}) {
    const { revalidate, ...responseInit } = init;
    const headers = new Headers(responseInit.headers);
    revalidate && headers.set("X-Revalidate", revalidate.toString());
    return new Response(null, {
        ...responseInit,
        headers
    });
}
function json(data, init = {}) {
    const { revalidate, ...responseInit } = init;
    const headers = new Headers(responseInit.headers);
    revalidate && headers.set("X-Revalidate", revalidate.toString());
    headers.set("Content-Type", "application/json");
    const response = new Response(JSON.stringify(data), {
        ...responseInit,
        headers
    });
    response.customBody = ()=>data;
    return response;
}

},{"solid-js/web":"4YlCe","solid-js":"i4kAV","solid-js/store":"4ME77","@parcel/transformer-js/src/esmodule-helpers.js":"bArT6"}],"4ME77":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$RAW", ()=>$RAW);
parcelHelpers.export(exports, "DEV", ()=>DEV);
parcelHelpers.export(exports, "createMutable", ()=>createMutable);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "modifyMutable", ()=>modifyMutable);
parcelHelpers.export(exports, "produce", ()=>produce);
parcelHelpers.export(exports, "reconcile", ()=>reconcile);
parcelHelpers.export(exports, "unwrap", ()=>unwrap);
var _solidJs = require("solid-js");
const $RAW = Symbol("store-raw"), $NODE = Symbol("store-node"), $HAS = Symbol("store-has"), $SELF = Symbol("store-self");
function wrap$1(value) {
    let p = value[0, _solidJs.$PROXY];
    if (!p) {
        Object.defineProperty(value, (0, _solidJs.$PROXY), {
            value: p = new Proxy(value, proxyTraps$1)
        });
        if (!Array.isArray(value)) {
            const keys = Object.keys(value), desc = Object.getOwnPropertyDescriptors(value);
            for(let i = 0, l = keys.length; i < l; i++){
                const prop = keys[i];
                if (desc[prop].get) Object.defineProperty(value, prop, {
                    enumerable: desc[prop].enumerable,
                    get: desc[prop].get.bind(p)
                });
            }
        }
    }
    return p;
}
function isWrappable(obj) {
    let proto;
    return obj != null && typeof obj === "object" && (obj[0, _solidJs.$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
}
function unwrap(item, set = new Set()) {
    let result, unwrapped, v, prop;
    if (result = item != null && item[$RAW]) return result;
    if (!isWrappable(item) || set.has(item)) return item;
    if (Array.isArray(item)) {
        if (Object.isFrozen(item)) item = item.slice(0);
        else set.add(item);
        for(let i = 0, l = item.length; i < l; i++){
            v = item[i];
            if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
        }
    } else {
        if (Object.isFrozen(item)) item = Object.assign({}, item);
        else set.add(item);
        const keys = Object.keys(item), desc = Object.getOwnPropertyDescriptors(item);
        for(let i = 0, l = keys.length; i < l; i++){
            prop = keys[i];
            if (desc[prop].get) continue;
            v = item[prop];
            if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
        }
    }
    return item;
}
function getNodes(target, symbol) {
    let nodes = target[symbol];
    if (!nodes) Object.defineProperty(target, symbol, {
        value: nodes = Object.create(null)
    });
    return nodes;
}
function getNode(nodes, property, value) {
    if (nodes[property]) return nodes[property];
    const [s, set] = (0, _solidJs.createSignal)(value, {
        equals: false,
        internal: true
    });
    s.$ = set;
    return nodes[property] = s;
}
function proxyDescriptor$1(target, property) {
    const desc = Reflect.getOwnPropertyDescriptor(target, property);
    if (!desc || desc.get || !desc.configurable || property === (0, _solidJs.$PROXY) || property === $NODE) return desc;
    delete desc.value;
    delete desc.writable;
    desc.get = ()=>target[0, _solidJs.$PROXY][property];
    return desc;
}
function trackSelf(target) {
    (0, _solidJs.getListener)() && getNode(getNodes(target, $NODE), $SELF)();
}
function ownKeys(target) {
    trackSelf(target);
    return Reflect.ownKeys(target);
}
const proxyTraps$1 = {
    get (target, property, receiver) {
        if (property === $RAW) return target;
        if (property === (0, _solidJs.$PROXY)) return receiver;
        if (property === (0, _solidJs.$TRACK)) {
            trackSelf(target);
            return receiver;
        }
        const nodes = getNodes(target, $NODE);
        const tracked = nodes[property];
        let value = tracked ? tracked() : target[property];
        if (property === $NODE || property === $HAS || property === "__proto__") return value;
        if (!tracked) {
            const desc = Object.getOwnPropertyDescriptor(target, property);
            if ((0, _solidJs.getListener)() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
        }
        return isWrappable(value) ? wrap$1(value) : value;
    },
    has (target, property) {
        if (property === $RAW || property === (0, _solidJs.$PROXY) || property === (0, _solidJs.$TRACK) || property === $NODE || property === $HAS || property === "__proto__") return true;
        (0, _solidJs.getListener)() && getNode(getNodes(target, $HAS), property)();
        return property in target;
    },
    set () {
        return true;
    },
    deleteProperty () {
        return true;
    },
    ownKeys: ownKeys,
    getOwnPropertyDescriptor: proxyDescriptor$1
};
function setProperty(state, property, value, deleting = false) {
    if (!deleting && state[property] === value) return;
    const prev = state[property], len = state.length;
    if (value === undefined) {
        delete state[property];
        if (state[$HAS] && state[$HAS][property] && prev !== undefined) state[$HAS][property].$();
    } else {
        state[property] = value;
        if (state[$HAS] && state[$HAS][property] && prev === undefined) state[$HAS][property].$();
    }
    let nodes = getNodes(state, $NODE), node;
    if (node = getNode(nodes, property, prev)) node.$(()=>value);
    if (Array.isArray(state) && state.length !== len) {
        for(let i = state.length; i < len; i++)(node = nodes[i]) && node.$();
        (node = getNode(nodes, "length", len)) && node.$(state.length);
    }
    (node = nodes[$SELF]) && node.$();
}
function mergeStoreNode(state, value) {
    const keys = Object.keys(value);
    for(let i = 0; i < keys.length; i += 1){
        const key = keys[i];
        setProperty(state, key, value[key]);
    }
}
function updateArray(current, next) {
    if (typeof next === "function") next = next(current);
    next = unwrap(next);
    if (Array.isArray(next)) {
        if (current === next) return;
        let i = 0, len = next.length;
        for(; i < len; i++){
            const value = next[i];
            if (current[i] !== value) setProperty(current, i, value);
        }
        setProperty(current, "length", len);
    } else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
    let part, prev = current;
    if (path.length > 1) {
        part = path.shift();
        const partType = typeof part, isArray = Array.isArray(current);
        if (Array.isArray(part)) {
            for(let i = 0; i < part.length; i++)updatePath(current, [
                part[i]
            ].concat(path), traversed);
            return;
        } else if (isArray && partType === "function") {
            for(let i = 0; i < current.length; i++)if (part(current[i], i)) updatePath(current, [
                i
            ].concat(path), traversed);
            return;
        } else if (isArray && partType === "object") {
            const { from = 0, to = current.length - 1, by = 1 } = part;
            for(let i = from; i <= to; i += by)updatePath(current, [
                i
            ].concat(path), traversed);
            return;
        } else if (path.length > 1) {
            updatePath(current[part], path, [
                part
            ].concat(traversed));
            return;
        }
        prev = current[part];
        traversed = [
            part
        ].concat(traversed);
    }
    let value = path[0];
    if (typeof value === "function") {
        value = value(prev, traversed);
        if (value === prev) return;
    }
    if (part === undefined && value == undefined) return;
    value = unwrap(value);
    if (part === undefined || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) mergeStoreNode(prev, value);
    else setProperty(current, part, value);
}
function createStore(...[store, options]) {
    const unwrappedStore = unwrap(store || {});
    const isArray = Array.isArray(unwrappedStore);
    const wrappedStore = wrap$1(unwrappedStore);
    function setStore(...args) {
        (0, _solidJs.batch)(()=>{
            isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
        });
    }
    return [
        wrappedStore,
        setStore
    ];
}
function proxyDescriptor(target, property) {
    const desc = Reflect.getOwnPropertyDescriptor(target, property);
    if (!desc || desc.get || desc.set || !desc.configurable || property === (0, _solidJs.$PROXY) || property === $NODE) return desc;
    delete desc.value;
    delete desc.writable;
    desc.get = ()=>target[0, _solidJs.$PROXY][property];
    desc.set = (v)=>target[0, _solidJs.$PROXY][property] = v;
    return desc;
}
const proxyTraps = {
    get (target, property, receiver) {
        if (property === $RAW) return target;
        if (property === (0, _solidJs.$PROXY)) return receiver;
        if (property === (0, _solidJs.$TRACK)) {
            trackSelf(target);
            return receiver;
        }
        const nodes = getNodes(target, $NODE);
        const tracked = nodes[property];
        let value = tracked ? tracked() : target[property];
        if (property === $NODE || property === $HAS || property === "__proto__") return value;
        if (!tracked) {
            const desc = Object.getOwnPropertyDescriptor(target, property);
            const isFunction = typeof value === "function";
            if ((0, _solidJs.getListener)() && (!isFunction || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
            else if (value != null && isFunction && value === Array.prototype[property]) return (...args)=>(0, _solidJs.batch)(()=>Array.prototype[property].apply(receiver, args));
        }
        return isWrappable(value) ? wrap(value) : value;
    },
    has (target, property) {
        if (property === $RAW || property === (0, _solidJs.$PROXY) || property === (0, _solidJs.$TRACK) || property === $NODE || property === $HAS || property === "__proto__") return true;
        (0, _solidJs.getListener)() && getNode(getNodes(target, $HAS), property)();
        return property in target;
    },
    set (target, property, value) {
        (0, _solidJs.batch)(()=>setProperty(target, property, unwrap(value)));
        return true;
    },
    deleteProperty (target, property) {
        (0, _solidJs.batch)(()=>setProperty(target, property, undefined, true));
        return true;
    },
    ownKeys: ownKeys,
    getOwnPropertyDescriptor: proxyDescriptor
};
function wrap(value) {
    let p = value[0, _solidJs.$PROXY];
    if (!p) {
        Object.defineProperty(value, (0, _solidJs.$PROXY), {
            value: p = new Proxy(value, proxyTraps)
        });
        const keys = Object.keys(value), desc = Object.getOwnPropertyDescriptors(value);
        for(let i = 0, l = keys.length; i < l; i++){
            const prop = keys[i];
            if (desc[prop].get) {
                const get = desc[prop].get.bind(p);
                Object.defineProperty(value, prop, {
                    get
                });
            }
            if (desc[prop].set) {
                const og = desc[prop].set, set = (v)=>(0, _solidJs.batch)(()=>og.call(p, v));
                Object.defineProperty(value, prop, {
                    set
                });
            }
        }
    }
    return p;
}
function createMutable(state, options) {
    const unwrappedStore = unwrap(state || {});
    const wrappedStore = wrap(unwrappedStore);
    return wrappedStore;
}
function modifyMutable(state, modifier) {
    (0, _solidJs.batch)(()=>modifier(unwrap(state)));
}
const $ROOT = Symbol("store-root");
function applyState(target, parent, property, merge, key) {
    const previous = parent[property];
    if (target === previous) return;
    const isArray = Array.isArray(target);
    if (property !== $ROOT && (!isWrappable(target) || !isWrappable(previous) || isArray !== Array.isArray(previous) || key && target[key] !== previous[key])) {
        setProperty(parent, property, target);
        return;
    }
    if (isArray) {
        if (target.length && previous.length && (!merge || key && target[0] && target[0][key] != null)) {
            let i, j, start, end, newEnd, item, newIndicesNext, keyVal;
            for(start = 0, end = Math.min(previous.length, target.length); start < end && (previous[start] === target[start] || key && previous[start] && target[start] && previous[start][key] === target[start][key]); start++)applyState(target[start], previous, start, merge, key);
            const temp = new Array(target.length), newIndices = new Map();
            for(end = previous.length - 1, newEnd = target.length - 1; end >= start && newEnd >= start && (previous[end] === target[newEnd] || key && previous[start] && target[start] && previous[end][key] === target[newEnd][key]); end--, newEnd--)temp[newEnd] = previous[end];
            if (start > newEnd || start > end) {
                for(j = start; j <= newEnd; j++)setProperty(previous, j, target[j]);
                for(; j < target.length; j++){
                    setProperty(previous, j, temp[j]);
                    applyState(target[j], previous, j, merge, key);
                }
                if (previous.length > target.length) setProperty(previous, "length", target.length);
                return;
            }
            newIndicesNext = new Array(newEnd + 1);
            for(j = newEnd; j >= start; j--){
                item = target[j];
                keyVal = key && item ? item[key] : item;
                i = newIndices.get(keyVal);
                newIndicesNext[j] = i === undefined ? -1 : i;
                newIndices.set(keyVal, j);
            }
            for(i = start; i <= end; i++){
                item = previous[i];
                keyVal = key && item ? item[key] : item;
                j = newIndices.get(keyVal);
                if (j !== undefined && j !== -1) {
                    temp[j] = previous[i];
                    j = newIndicesNext[j];
                    newIndices.set(keyVal, j);
                }
            }
            for(j = start; j < target.length; j++)if (j in temp) {
                setProperty(previous, j, temp[j]);
                applyState(target[j], previous, j, merge, key);
            } else setProperty(previous, j, target[j]);
        } else for(let i = 0, len = target.length; i < len; i++)applyState(target[i], previous, i, merge, key);
        if (previous.length > target.length) setProperty(previous, "length", target.length);
        return;
    }
    const targetKeys = Object.keys(target);
    for(let i = 0, len = targetKeys.length; i < len; i++)applyState(target[targetKeys[i]], previous, targetKeys[i], merge, key);
    const previousKeys = Object.keys(previous);
    for(let i = 0, len = previousKeys.length; i < len; i++)if (target[previousKeys[i]] === undefined) setProperty(previous, previousKeys[i], undefined);
}
function reconcile(value, options = {}) {
    const { merge, key = "id" } = options, v = unwrap(value);
    return (state)=>{
        if (!isWrappable(state) || !isWrappable(v)) return v;
        const res = applyState(v, {
            [$ROOT]: state
        }, $ROOT, merge, key);
        return res === undefined ? state : res;
    };
}
const producers = new WeakMap();
const setterTraps = {
    get (target, property) {
        if (property === $RAW) return target;
        const value = target[property];
        let proxy;
        return isWrappable(value) ? producers.get(value) || (producers.set(value, proxy = new Proxy(value, setterTraps)), proxy) : value;
    },
    set (target, property, value) {
        setProperty(target, property, unwrap(value));
        return true;
    },
    deleteProperty (target, property) {
        setProperty(target, property, undefined, true);
        return true;
    }
};
function produce(fn) {
    return (state)=>{
        if (isWrappable(state)) {
            let proxy;
            if (!(proxy = producers.get(state))) producers.set(state, proxy = new Proxy(state, setterTraps));
            fn(proxy);
        }
        return state;
    };
}
const DEV = undefined;

},{"solid-js":"i4kAV","@parcel/transformer-js/src/esmodule-helpers.js":"bArT6"}],"szwO8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _web = require("solid-js/web");
var _tmpl$ = /*#__PURE__*/ (0, _web.template)(`<div><h1>Layout</h1><!$><!/>`);
exports.default = (props)=>{
    return (()=>{
        var _el$ = (0, _web.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, [_el$4, _co$] = (0, _web.getNextMarker)(_el$3.nextSibling);
        (0, _web.insert)(_el$, ()=>props.children, _el$4, _co$);
        return _el$;
    })();
};

},{"solid-js/web":"4YlCe","@parcel/transformer-js/src/esmodule-helpers.js":"bArT6"}]},["gv7I1","4aBH6"], "4aBH6", "parcelRequire8ce3")

//# sourceMappingURL=index.2d3ace14.js.map
