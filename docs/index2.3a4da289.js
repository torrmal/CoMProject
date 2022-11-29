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
})({"1kP6C":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2e1dff853a4da289";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ZYb3n":[function(require,module,exports) {
var _three = require("three");
var _objloaderJs = require("three/examples/jsm/loaders/OBJLoader.js");
var _meshSurfaceSamplerJs = require("three/examples/jsm/math/MeshSurfaceSampler.js");
var _renderPassJs = require("three/examples/jsm/postprocessing/RenderPass.js");
var _unrealBloomPassJs = require("three/examples/jsm/postprocessing/UnrealBloomPass.js");
var _effectComposerJs = require("three/examples/jsm/postprocessing/EffectComposer.js");
const elContent = document.querySelector(".content");
const pixelRatio = 2;
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(60, elContent.offsetWidth / elContent.offsetHeight, 0.001, 50);
camera.position.z = 8;
const renderer = new _three.WebGLRenderer();
renderer.setPixelRatio(pixelRatio);
renderer.setSize(elContent.offsetWidth, elContent.offsetHeight);
elContent.appendChild(renderer.domElement);
const renderScene = new (0, _renderPassJs.RenderPass)(scene, camera);
const bloomPass = new (0, _unrealBloomPassJs.UnrealBloomPass)(new _three.Vector2(elContent.offsetWidth, elContent.offsetHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = 0;
bloomPass.strength = 0.6;
const composer = new (0, _effectComposerJs.EffectComposer)(renderer);
composer.setPixelRatio(pixelRatio);
composer.addPass(renderScene);
composer.addPass(bloomPass);
const group = new _three.Group();
scene.add(group);
const sparkles = [];
const sparklesGeometry = new _three.BufferGeometry();
const sparklesMaterial = new _three.ShaderMaterial({
    uniforms: {
        pointTexture: {
            value: new _three.TextureLoader().load("dotTexture.png")
        }
    },
    vertexShader: document.getElementById("vertexshader").textContent,
    fragmentShader: document.getElementById("fragmentshader").textContent,
    blending: _three.AdditiveBlending,
    alphaTest: 1.0,
    transparent: true
});
const points = new _three.Points(sparklesGeometry, sparklesMaterial);
group.add(points);
let sampler = null;
const lines = [];
let linesMaterials = [
    new _three.LineBasicMaterial({
        transparent: true,
        color: 0x125D98
    }),
    new _three.LineBasicMaterial({
        transparent: true,
        color: 0xCFD6DE
    })
];
let galaxyColors = [
    new _three.Color("#f9fbf2").multiplyScalar(0.8),
    new _three.Color("#ffede1").multiplyScalar(0.8),
    new _three.Color("#05c7f2").multiplyScalar(0.8),
    new _three.Color("#0597f2").multiplyScalar(0.8),
    new _three.Color("#0476d9").multiplyScalar(0.8)
];
function dots() {
    sampler = new (0, _meshSurfaceSamplerJs.MeshSurfaceSampler)(whale).build();
    for(let i = 0; i < 6; i++){
        const linesMesh = new _three.Line(new _three.BufferGeometry(), linesMaterials[i % 2]);
        linesMesh.coordinates = [];
        linesMesh.previous = null;
        lines.push(linesMesh);
        group.add(linesMesh);
    }
    requestAnimationFrame(render);
}
let whale = null;
const loader = new (0, _objloaderJs.OBJLoader)();
loader.load("man.obj", (obj)=>{
    whale = obj.children[0];
    whale.geometry.scale(0.7, 0.7, 0.7);
    whale.geometry.translate(0, -2, 0);
    whale.geometry.rotateY(0.2);
    dots();
}, (xhr)=>console.log(xhr.loaded / xhr.total * 100 + "% loaded"), (err)=>console.log("An error happened", err));
const p1 = new _three.Vector3();
function nextDot(line) {
    let ok = false;
    while(!ok){
        sampler.sample(p1);
        if (line.previous && p1.distanceTo(line.previous) < 0.3) {
            line.coordinates.push(p1.x, p1.y, p1.z);
            line.previous = p1.clone();
            for(let i = 0; i < 2; i++){
                const spark = new Sparkle();
                spark.setup(p1, line.material.color);
                sparkles.push(spark);
            }
            ok = true;
        } else if (!line.previous) line.previous = p1.clone();
    }
}
function updateSparklesGeometry() {
    let tempSparklesArraySizes = [];
    let tempSparklesArrayColors = [];
    sparkles.forEach((s)=>{
        tempSparklesArraySizes.push(s.size);
        tempSparklesArrayColors.push(s.color.r, s.color.g, s.color.b);
    });
    sparklesGeometry.setAttribute("color", new _three.Float32BufferAttribute(tempSparklesArrayColors, 3));
    sparklesGeometry.setAttribute("size", new _three.Float32BufferAttribute(tempSparklesArraySizes, 1));
}
class Sparkle extends _three.Vector3 {
    setup(origin, color) {
        this.x = origin.x;
        this.y = origin.y;
        this.z = origin.z;
        this.v = new _three.Vector3();
        /* X Speed */ this.v.x = _three.MathUtils.randFloat(0.001, 0.006);
        this.v.x *= Math.random() > 0.5 ? 1 : -1;
        /* Y Speed */ this.v.y = _three.MathUtils.randFloat(0.001, 0.006);
        this.v.y *= Math.random() > 0.5 ? 1 : -1;
        /* Z Speed */ this.v.z = _three.MathUtils.randFloat(0.001, 0.006);
        this.v.z *= Math.random() > 0.5 ? 1 : -1;
        this.size = Math.random() * 4 + 0.5 * pixelRatio;
        this.slowDown = 0.4 + Math.random() * 0.58;
        this.color = color;
    }
    update() {
        if (this.v.x > 0.001 || this.v.y > 0.001 || this.v.z > 0.001) {
            this.add(this.v);
            this.v.multiplyScalar(this.slowDown);
        }
    }
}
class Star {
    setup(color) {
        this.r = Math.random() * 12 + 3;
        this.phi = Math.random() * Math.PI * 2;
        this.theta = Math.random() * Math.PI;
        this.v = new _three.Vector2().random().subScalar(0.5).multiplyScalar(0.0007);
        this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
        this.y = this.r * Math.cos(this.phi);
        this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);
        this.size = Math.random() * 4 + 0.5 * pixelRatio;
        this.color = color;
    }
    update() {
        this.phi += this.v.x;
        this.theta += this.v.y;
        this.x = this.r * Math.sin(this.phi) * Math.sin(this.theta);
        this.y = this.r * Math.cos(this.phi);
        this.z = this.r * Math.sin(this.phi) * Math.cos(this.theta);
    }
}
/* Create stars */ const stars = [];
const galaxyGeometryVertices = [];
const galaxyGeometryColors = [];
const galaxyGeometrySizes = [];
for(let i = 0; i < 1500; i++){
    const star = new Star();
    star.setup(galaxyColors[Math.floor(Math.random() * galaxyColors.length)]);
    galaxyGeometryVertices.push(star.x, star.y, star.z);
    galaxyGeometryColors.push(star.color.r, star.color.g, star.color.b);
    galaxyGeometrySizes.push(star.size);
    stars.push(star);
}
const starsGeometry = new _three.BufferGeometry();
starsGeometry.setAttribute("size", new _three.Float32BufferAttribute(galaxyGeometrySizes, 1));
starsGeometry.setAttribute("color", new _three.Float32BufferAttribute(galaxyGeometryColors, 3));
const galaxyPoints = new _three.Points(starsGeometry, sparklesMaterial);
scene.add(galaxyPoints);
let _prev = 0;
function render(a) {
    requestAnimationFrame(render);
    galaxyPoints.rotation.y += 0.0005;
    group.rotation.x = Math.sin(a * 0.0003) * 0.1;
    group.rotation.y += 0.001;
    if (a - _prev > 30) {
        lines.forEach((l)=>{
            if (sparkles.length < 35000) {
                nextDot(l);
                nextDot(l);
            }
            const tempVertices = new Float32Array(l.coordinates);
            l.geometry.setAttribute("position", new _three.BufferAttribute(tempVertices, 3));
            l.geometry.computeBoundingSphere();
        });
        updateSparklesGeometry();
        _prev = a;
    }
    let tempSparklesArray = [];
    sparkles.forEach((s)=>{
        s.update();
        tempSparklesArray.push(s.x, s.y, s.z);
    });
    sparklesGeometry.setAttribute("position", new _three.Float32BufferAttribute(tempSparklesArray, 3));
    let tempStarsArray = [];
    stars.forEach((s)=>{
        s.update();
        tempStarsArray.push(s.x, s.y, s.z);
    });
    starsGeometry.setAttribute("position", new _three.Float32BufferAttribute(tempStarsArray, 3));
    composer.render();
}
function onWindowResize() {
    camera.aspect = elContent.offsetWidth / elContent.offsetHeight;
    camera.updateProjectionMatrix();
    composer.setSize(elContent.offsetWidth, elContent.offsetHeight);
    renderer.setSize(elContent.offsetWidth, elContent.offsetHeight);
    bloomPass.setSize(elContent.offsetWidth, elContent.offsetHeight);
}
window.addEventListener("resize", onWindowResize);

},{"three":"ktPTu","three/examples/jsm/loaders/OBJLoader.js":"htIhD","three/examples/jsm/math/MeshSurfaceSampler.js":"gkYaF","three/examples/jsm/postprocessing/RenderPass.js":"hXnUO","three/examples/jsm/postprocessing/UnrealBloomPass.js":"3iDYE","three/examples/jsm/postprocessing/EffectComposer.js":"e5jie"}],"hXnUO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RenderPass", ()=>RenderPass);
var _three = require("three");
var _passJs = require("../postprocessing/Pass.js");
class RenderPass extends (0, _passJs.Pass) {
    constructor(scene, camera, overrideMaterial, clearColor, clearAlpha){
        super();
        this.scene = scene;
        this.camera = camera;
        this.overrideMaterial = overrideMaterial;
        this.clearColor = clearColor;
        this.clearAlpha = clearAlpha !== undefined ? clearAlpha : 0;
        this.clear = true;
        this.clearDepth = false;
        this.needsSwap = false;
        this._oldClearColor = new (0, _three.Color)();
    }
    render(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {
        const oldAutoClear = renderer.autoClear;
        renderer.autoClear = false;
        let oldClearAlpha, oldOverrideMaterial;
        if (this.overrideMaterial !== undefined) {
            oldOverrideMaterial = this.scene.overrideMaterial;
            this.scene.overrideMaterial = this.overrideMaterial;
        }
        if (this.clearColor) {
            renderer.getClearColor(this._oldClearColor);
            oldClearAlpha = renderer.getClearAlpha();
            renderer.setClearColor(this.clearColor, this.clearAlpha);
        }
        if (this.clearDepth) renderer.clearDepth();
        renderer.setRenderTarget(this.renderToScreen ? null : readBuffer);
        // TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
        if (this.clear) renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
        renderer.render(this.scene, this.camera);
        if (this.clearColor) renderer.setClearColor(this._oldClearColor, oldClearAlpha);
        if (this.overrideMaterial !== undefined) this.scene.overrideMaterial = oldOverrideMaterial;
        renderer.autoClear = oldAutoClear;
    }
}

},{"three":"ktPTu","../postprocessing/Pass.js":"i2IfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i2IfB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pass", ()=>Pass);
parcelHelpers.export(exports, "FullScreenQuad", ()=>FullScreenQuad);
var _three = require("three");
class Pass {
    constructor(){
        // if set to true, the pass is processed by the composer
        this.enabled = true;
        // if set to true, the pass indicates to swap read and write buffer after rendering
        this.needsSwap = true;
        // if set to true, the pass clears its buffer before rendering
        this.clear = false;
        // if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
        this.renderToScreen = false;
    }
    setSize() {}
    render() {
        console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
}
// Helper for passes that need to fill the viewport with a single quad.
const _camera = new (0, _three.OrthographicCamera)(-1, 1, 1, -1, 0, 1);
// https://github.com/mrdoob/three.js/pull/21358
const _geometry = new (0, _three.BufferGeometry)();
_geometry.setAttribute("position", new (0, _three.Float32BufferAttribute)([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
], 3));
_geometry.setAttribute("uv", new (0, _three.Float32BufferAttribute)([
    0,
    2,
    0,
    0,
    2,
    0
], 2));
class FullScreenQuad {
    constructor(material){
        this._mesh = new (0, _three.Mesh)(_geometry, material);
    }
    dispose() {
        this._mesh.geometry.dispose();
    }
    render(renderer) {
        renderer.render(this._mesh, _camera);
    }
    get material() {
        return this._mesh.material;
    }
    set material(value) {
        this._mesh.material = value;
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3iDYE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnrealBloomPass", ()=>UnrealBloomPass);
var _three = require("three");
var _passJs = require("../postprocessing/Pass.js");
var _copyShaderJs = require("../shaders/CopyShader.js");
var _luminosityHighPassShaderJs = require("../shaders/LuminosityHighPassShader.js");
/**
 * UnrealBloomPass is inspired by the bloom pass of Unreal Engine. It creates a
 * mip map chain of bloom textures and blurs them with different radii. Because
 * of the weighted combination of mips, and because larger blurs are done on
 * higher mips, this effect provides good quality and performance.
 *
 * Reference:
 * - https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/
 */ class UnrealBloomPass extends (0, _passJs.Pass) {
    constructor(resolution, strength, radius, threshold){
        super();
        this.strength = strength !== undefined ? strength : 1;
        this.radius = radius;
        this.threshold = threshold;
        this.resolution = resolution !== undefined ? new (0, _three.Vector2)(resolution.x, resolution.y) : new (0, _three.Vector2)(256, 256);
        // create color only once here, reuse it later inside the render function
        this.clearColor = new (0, _three.Color)(0, 0, 0);
        // render targets
        const pars = {
            minFilter: (0, _three.LinearFilter),
            magFilter: (0, _three.LinearFilter),
            format: (0, _three.RGBAFormat)
        };
        this.renderTargetsHorizontal = [];
        this.renderTargetsVertical = [];
        this.nMips = 5;
        let resx = Math.round(this.resolution.x / 2);
        let resy = Math.round(this.resolution.y / 2);
        this.renderTargetBright = new (0, _three.WebGLRenderTarget)(resx, resy, pars);
        this.renderTargetBright.texture.name = "UnrealBloomPass.bright";
        this.renderTargetBright.texture.generateMipmaps = false;
        for(let i = 0; i < this.nMips; i++){
            const renderTargetHorizonal = new (0, _three.WebGLRenderTarget)(resx, resy, pars);
            renderTargetHorizonal.texture.name = "UnrealBloomPass.h" + i;
            renderTargetHorizonal.texture.generateMipmaps = false;
            this.renderTargetsHorizontal.push(renderTargetHorizonal);
            const renderTargetVertical = new (0, _three.WebGLRenderTarget)(resx, resy, pars);
            renderTargetVertical.texture.name = "UnrealBloomPass.v" + i;
            renderTargetVertical.texture.generateMipmaps = false;
            this.renderTargetsVertical.push(renderTargetVertical);
            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }
        // luminosity high pass material
        if ((0, _luminosityHighPassShaderJs.LuminosityHighPassShader) === undefined) console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");
        const highPassShader = (0, _luminosityHighPassShaderJs.LuminosityHighPassShader);
        this.highPassUniforms = (0, _three.UniformsUtils).clone(highPassShader.uniforms);
        this.highPassUniforms["luminosityThreshold"].value = threshold;
        this.highPassUniforms["smoothWidth"].value = 0.01;
        this.materialHighPassFilter = new (0, _three.ShaderMaterial)({
            uniforms: this.highPassUniforms,
            vertexShader: highPassShader.vertexShader,
            fragmentShader: highPassShader.fragmentShader,
            defines: {}
        });
        // Gaussian Blur Materials
        this.separableBlurMaterials = [];
        const kernelSizeArray = [
            3,
            5,
            7,
            9,
            11
        ];
        resx = Math.round(this.resolution.x / 2);
        resy = Math.round(this.resolution.y / 2);
        for(let i1 = 0; i1 < this.nMips; i1++){
            this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i1]));
            this.separableBlurMaterials[i1].uniforms["texSize"].value = new (0, _three.Vector2)(resx, resy);
            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }
        // Composite material
        this.compositeMaterial = this.getCompositeMaterial(this.nMips);
        this.compositeMaterial.uniforms["blurTexture1"].value = this.renderTargetsVertical[0].texture;
        this.compositeMaterial.uniforms["blurTexture2"].value = this.renderTargetsVertical[1].texture;
        this.compositeMaterial.uniforms["blurTexture3"].value = this.renderTargetsVertical[2].texture;
        this.compositeMaterial.uniforms["blurTexture4"].value = this.renderTargetsVertical[3].texture;
        this.compositeMaterial.uniforms["blurTexture5"].value = this.renderTargetsVertical[4].texture;
        this.compositeMaterial.uniforms["bloomStrength"].value = strength;
        this.compositeMaterial.uniforms["bloomRadius"].value = 0.1;
        this.compositeMaterial.needsUpdate = true;
        const bloomFactors = [
            1.0,
            0.8,
            0.6,
            0.4,
            0.2
        ];
        this.compositeMaterial.uniforms["bloomFactors"].value = bloomFactors;
        this.bloomTintColors = [
            new (0, _three.Vector3)(1, 1, 1),
            new (0, _three.Vector3)(1, 1, 1),
            new (0, _three.Vector3)(1, 1, 1),
            new (0, _three.Vector3)(1, 1, 1),
            new (0, _three.Vector3)(1, 1, 1)
        ];
        this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;
        // copy material
        if ((0, _copyShaderJs.CopyShader) === undefined) console.error("THREE.UnrealBloomPass relies on CopyShader");
        const copyShader = (0, _copyShaderJs.CopyShader);
        this.copyUniforms = (0, _three.UniformsUtils).clone(copyShader.uniforms);
        this.copyUniforms["opacity"].value = 1.0;
        this.materialCopy = new (0, _three.ShaderMaterial)({
            uniforms: this.copyUniforms,
            vertexShader: copyShader.vertexShader,
            fragmentShader: copyShader.fragmentShader,
            blending: (0, _three.AdditiveBlending),
            depthTest: false,
            depthWrite: false,
            transparent: true
        });
        this.enabled = true;
        this.needsSwap = false;
        this._oldClearColor = new (0, _three.Color)();
        this.oldClearAlpha = 1;
        this.basic = new (0, _three.MeshBasicMaterial)();
        this.fsQuad = new (0, _passJs.FullScreenQuad)(null);
    }
    dispose() {
        for(let i = 0; i < this.renderTargetsHorizontal.length; i++)this.renderTargetsHorizontal[i].dispose();
        for(let i1 = 0; i1 < this.renderTargetsVertical.length; i1++)this.renderTargetsVertical[i1].dispose();
        this.renderTargetBright.dispose();
    }
    setSize(width, height) {
        let resx = Math.round(width / 2);
        let resy = Math.round(height / 2);
        this.renderTargetBright.setSize(resx, resy);
        for(let i = 0; i < this.nMips; i++){
            this.renderTargetsHorizontal[i].setSize(resx, resy);
            this.renderTargetsVertical[i].setSize(resx, resy);
            this.separableBlurMaterials[i].uniforms["texSize"].value = new (0, _three.Vector2)(resx, resy);
            resx = Math.round(resx / 2);
            resy = Math.round(resy / 2);
        }
    }
    render(renderer, writeBuffer, readBuffer, deltaTime, maskActive) {
        renderer.getClearColor(this._oldClearColor);
        this.oldClearAlpha = renderer.getClearAlpha();
        const oldAutoClear = renderer.autoClear;
        renderer.autoClear = false;
        renderer.setClearColor(this.clearColor, 0);
        if (maskActive) renderer.state.buffers.stencil.setTest(false);
        // Render input to screen
        if (this.renderToScreen) {
            this.fsQuad.material = this.basic;
            this.basic.map = readBuffer.texture;
            renderer.setRenderTarget(null);
            renderer.clear();
            this.fsQuad.render(renderer);
        }
        // 1. Extract Bright Areas
        this.highPassUniforms["tDiffuse"].value = readBuffer.texture;
        this.highPassUniforms["luminosityThreshold"].value = this.threshold;
        this.fsQuad.material = this.materialHighPassFilter;
        renderer.setRenderTarget(this.renderTargetBright);
        renderer.clear();
        this.fsQuad.render(renderer);
        // 2. Blur All the mips progressively
        let inputRenderTarget = this.renderTargetBright;
        for(let i = 0; i < this.nMips; i++){
            this.fsQuad.material = this.separableBlurMaterials[i];
            this.separableBlurMaterials[i].uniforms["colorTexture"].value = inputRenderTarget.texture;
            this.separableBlurMaterials[i].uniforms["direction"].value = UnrealBloomPass.BlurDirectionX;
            renderer.setRenderTarget(this.renderTargetsHorizontal[i]);
            renderer.clear();
            this.fsQuad.render(renderer);
            this.separableBlurMaterials[i].uniforms["colorTexture"].value = this.renderTargetsHorizontal[i].texture;
            this.separableBlurMaterials[i].uniforms["direction"].value = UnrealBloomPass.BlurDirectionY;
            renderer.setRenderTarget(this.renderTargetsVertical[i]);
            renderer.clear();
            this.fsQuad.render(renderer);
            inputRenderTarget = this.renderTargetsVertical[i];
        }
        // Composite All the mips
        this.fsQuad.material = this.compositeMaterial;
        this.compositeMaterial.uniforms["bloomStrength"].value = this.strength;
        this.compositeMaterial.uniforms["bloomRadius"].value = this.radius;
        this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;
        renderer.setRenderTarget(this.renderTargetsHorizontal[0]);
        renderer.clear();
        this.fsQuad.render(renderer);
        // Blend it additively over the input texture
        this.fsQuad.material = this.materialCopy;
        this.copyUniforms["tDiffuse"].value = this.renderTargetsHorizontal[0].texture;
        if (maskActive) renderer.state.buffers.stencil.setTest(true);
        if (this.renderToScreen) {
            renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);
        } else {
            renderer.setRenderTarget(readBuffer);
            this.fsQuad.render(renderer);
        }
        // Restore renderer settings
        renderer.setClearColor(this._oldClearColor, this.oldClearAlpha);
        renderer.autoClear = oldAutoClear;
    }
    getSeperableBlurMaterial(kernelRadius) {
        return new (0, _three.ShaderMaterial)({
            defines: {
                "KERNEL_RADIUS": kernelRadius,
                "SIGMA": kernelRadius
            },
            uniforms: {
                "colorTexture": {
                    value: null
                },
                "texSize": {
                    value: new (0, _three.Vector2)(0.5, 0.5)
                },
                "direction": {
                    value: new (0, _three.Vector2)(0.5, 0.5)
                }
            },
            vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
            fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
        });
    }
    getCompositeMaterial(nMips) {
        return new (0, _three.ShaderMaterial)({
            defines: {
                "NUM_MIPS": nMips
            },
            uniforms: {
                "blurTexture1": {
                    value: null
                },
                "blurTexture2": {
                    value: null
                },
                "blurTexture3": {
                    value: null
                },
                "blurTexture4": {
                    value: null
                },
                "blurTexture5": {
                    value: null
                },
                "dirtTexture": {
                    value: null
                },
                "bloomStrength": {
                    value: 1.0
                },
                "bloomFactors": {
                    value: null
                },
                "bloomTintColors": {
                    value: null
                },
                "bloomRadius": {
                    value: 0.0
                }
            },
            vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
            fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
        });
    }
}
UnrealBloomPass.BlurDirectionX = new (0, _three.Vector2)(1.0, 0.0);
UnrealBloomPass.BlurDirectionY = new (0, _three.Vector2)(0.0, 1.0);

},{"three":"ktPTu","../postprocessing/Pass.js":"i2IfB","../shaders/CopyShader.js":"d0PyX","../shaders/LuminosityHighPassShader.js":"j8C2Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0PyX":[function(require,module,exports) {
/**
 * Full-screen textured quad shader
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CopyShader", ()=>CopyShader);
var CopyShader = {
    uniforms: {
        "tDiffuse": {
            value: null
        },
        "opacity": {
            value: 1.0
        }
    },
    vertexShader: /* glsl */ `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: /* glsl */ `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8C2Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LuminosityHighPassShader", ()=>LuminosityHighPassShader);
var _three = require("three");
/**
 * Luminosity
 * http://en.wikipedia.org/wiki/Luminosity
 */ const LuminosityHighPassShader = {
    shaderID: "luminosityHighPass",
    uniforms: {
        "tDiffuse": {
            value: null
        },
        "luminosityThreshold": {
            value: 1.0
        },
        "smoothWidth": {
            value: 1.0
        },
        "defaultColor": {
            value: new (0, _three.Color)(0x000000)
        },
        "defaultOpacity": {
            value: 0.0
        }
    },
    vertexShader: /* glsl */ `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: /* glsl */ `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
};

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5jie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectComposer", ()=>EffectComposer);
parcelHelpers.export(exports, "Pass", ()=>Pass);
parcelHelpers.export(exports, "FullScreenQuad", ()=>FullScreenQuad);
var _three = require("three");
var _copyShaderJs = require("../shaders/CopyShader.js");
var _shaderPassJs = require("../postprocessing/ShaderPass.js");
var _maskPassJs = require("../postprocessing/MaskPass.js");
class EffectComposer {
    constructor(renderer, renderTarget){
        this.renderer = renderer;
        if (renderTarget === undefined) {
            const parameters = {
                minFilter: (0, _three.LinearFilter),
                magFilter: (0, _three.LinearFilter),
                format: (0, _three.RGBAFormat)
            };
            const size = renderer.getSize(new (0, _three.Vector2)());
            this._pixelRatio = renderer.getPixelRatio();
            this._width = size.width;
            this._height = size.height;
            renderTarget = new (0, _three.WebGLRenderTarget)(this._width * this._pixelRatio, this._height * this._pixelRatio, parameters);
            renderTarget.texture.name = "EffectComposer.rt1";
        } else {
            this._pixelRatio = 1;
            this._width = renderTarget.width;
            this._height = renderTarget.height;
        }
        this.renderTarget1 = renderTarget;
        this.renderTarget2 = renderTarget.clone();
        this.renderTarget2.texture.name = "EffectComposer.rt2";
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;
        this.renderToScreen = true;
        this.passes = [];
        // dependencies
        if ((0, _copyShaderJs.CopyShader) === undefined) console.error("THREE.EffectComposer relies on CopyShader");
        if ((0, _shaderPassJs.ShaderPass) === undefined) console.error("THREE.EffectComposer relies on ShaderPass");
        this.copyPass = new (0, _shaderPassJs.ShaderPass)((0, _copyShaderJs.CopyShader));
        this.clock = new (0, _three.Clock)();
    }
    swapBuffers() {
        const tmp = this.readBuffer;
        this.readBuffer = this.writeBuffer;
        this.writeBuffer = tmp;
    }
    addPass(pass) {
        this.passes.push(pass);
        pass.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    insertPass(pass, index) {
        this.passes.splice(index, 0, pass);
        pass.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    removePass(pass) {
        const index = this.passes.indexOf(pass);
        if (index !== -1) this.passes.splice(index, 1);
    }
    isLastEnabledPass(passIndex) {
        for(let i = passIndex + 1; i < this.passes.length; i++){
            if (this.passes[i].enabled) return false;
        }
        return true;
    }
    render(deltaTime) {
        // deltaTime value is in seconds
        if (deltaTime === undefined) deltaTime = this.clock.getDelta();
        const currentRenderTarget = this.renderer.getRenderTarget();
        let maskActive = false;
        for(let i = 0, il = this.passes.length; i < il; i++){
            const pass = this.passes[i];
            if (pass.enabled === false) continue;
            pass.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i);
            pass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime, maskActive);
            if (pass.needsSwap) {
                if (maskActive) {
                    const context = this.renderer.getContext();
                    const stencil = this.renderer.state.buffers.stencil;
                    //context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );
                    stencil.setFunc(context.NOTEQUAL, 1, 0xffffffff);
                    this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, deltaTime);
                    //context.stencilFunc( context.EQUAL, 1, 0xffffffff );
                    stencil.setFunc(context.EQUAL, 1, 0xffffffff);
                }
                this.swapBuffers();
            }
            if ((0, _maskPassJs.MaskPass) !== undefined) {
                if (pass instanceof (0, _maskPassJs.MaskPass)) maskActive = true;
                else if (pass instanceof (0, _maskPassJs.ClearMaskPass)) maskActive = false;
            }
        }
        this.renderer.setRenderTarget(currentRenderTarget);
    }
    reset(renderTarget) {
        if (renderTarget === undefined) {
            const size = this.renderer.getSize(new (0, _three.Vector2)());
            this._pixelRatio = this.renderer.getPixelRatio();
            this._width = size.width;
            this._height = size.height;
            renderTarget = this.renderTarget1.clone();
            renderTarget.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
        }
        this.renderTarget1.dispose();
        this.renderTarget2.dispose();
        this.renderTarget1 = renderTarget;
        this.renderTarget2 = renderTarget.clone();
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;
    }
    setSize(width, height) {
        this._width = width;
        this._height = height;
        const effectiveWidth = this._width * this._pixelRatio;
        const effectiveHeight = this._height * this._pixelRatio;
        this.renderTarget1.setSize(effectiveWidth, effectiveHeight);
        this.renderTarget2.setSize(effectiveWidth, effectiveHeight);
        for(let i = 0; i < this.passes.length; i++)this.passes[i].setSize(effectiveWidth, effectiveHeight);
    }
    setPixelRatio(pixelRatio) {
        this._pixelRatio = pixelRatio;
        this.setSize(this._width, this._height);
    }
}
class Pass {
    constructor(){
        // if set to true, the pass is processed by the composer
        this.enabled = true;
        // if set to true, the pass indicates to swap read and write buffer after rendering
        this.needsSwap = true;
        // if set to true, the pass clears its buffer before rendering
        this.clear = false;
        // if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
        this.renderToScreen = false;
    }
    setSize() {}
    render() {
        console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
}
// Helper for passes that need to fill the viewport with a single quad.
const _camera = new (0, _three.OrthographicCamera)(-1, 1, 1, -1, 0, 1);
// https://github.com/mrdoob/three.js/pull/21358
const _geometry = new (0, _three.BufferGeometry)();
_geometry.setAttribute("position", new (0, _three.Float32BufferAttribute)([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
], 3));
_geometry.setAttribute("uv", new (0, _three.Float32BufferAttribute)([
    0,
    2,
    0,
    0,
    2,
    0
], 2));
class FullScreenQuad {
    constructor(material){
        this._mesh = new (0, _three.Mesh)(_geometry, material);
    }
    dispose() {
        this._mesh.geometry.dispose();
    }
    render(renderer) {
        renderer.render(this._mesh, _camera);
    }
    get material() {
        return this._mesh.material;
    }
    set material(value) {
        this._mesh.material = value;
    }
}

},{"three":"ktPTu","../shaders/CopyShader.js":"d0PyX","../postprocessing/ShaderPass.js":"5IxTN","../postprocessing/MaskPass.js":"jn76N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IxTN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShaderPass", ()=>ShaderPass);
var _three = require("three");
var _passJs = require("../postprocessing/Pass.js");
class ShaderPass extends (0, _passJs.Pass) {
    constructor(shader, textureID){
        super();
        this.textureID = textureID !== undefined ? textureID : "tDiffuse";
        if (shader instanceof (0, _three.ShaderMaterial)) {
            this.uniforms = shader.uniforms;
            this.material = shader;
        } else if (shader) {
            this.uniforms = (0, _three.UniformsUtils).clone(shader.uniforms);
            this.material = new (0, _three.ShaderMaterial)({
                defines: Object.assign({}, shader.defines),
                uniforms: this.uniforms,
                vertexShader: shader.vertexShader,
                fragmentShader: shader.fragmentShader
            });
        }
        this.fsQuad = new (0, _passJs.FullScreenQuad)(this.material);
    }
    render(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {
        if (this.uniforms[this.textureID]) this.uniforms[this.textureID].value = readBuffer.texture;
        this.fsQuad.material = this.material;
        if (this.renderToScreen) {
            renderer.setRenderTarget(null);
            this.fsQuad.render(renderer);
        } else {
            renderer.setRenderTarget(writeBuffer);
            // TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
            if (this.clear) renderer.clear(renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil);
            this.fsQuad.render(renderer);
        }
    }
}

},{"three":"ktPTu","../postprocessing/Pass.js":"i2IfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jn76N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MaskPass", ()=>MaskPass);
parcelHelpers.export(exports, "ClearMaskPass", ()=>ClearMaskPass);
var _passJs = require("../postprocessing/Pass.js");
class MaskPass extends (0, _passJs.Pass) {
    constructor(scene, camera){
        super();
        this.scene = scene;
        this.camera = camera;
        this.clear = true;
        this.needsSwap = false;
        this.inverse = false;
    }
    render(renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {
        const context = renderer.getContext();
        const state = renderer.state;
        // don't update color or depth
        state.buffers.color.setMask(false);
        state.buffers.depth.setMask(false);
        // lock buffers
        state.buffers.color.setLocked(true);
        state.buffers.depth.setLocked(true);
        // set up stencil
        let writeValue, clearValue;
        if (this.inverse) {
            writeValue = 0;
            clearValue = 1;
        } else {
            writeValue = 1;
            clearValue = 0;
        }
        state.buffers.stencil.setTest(true);
        state.buffers.stencil.setOp(context.REPLACE, context.REPLACE, context.REPLACE);
        state.buffers.stencil.setFunc(context.ALWAYS, writeValue, 0xffffffff);
        state.buffers.stencil.setClear(clearValue);
        state.buffers.stencil.setLocked(true);
        // draw into the stencil buffer
        renderer.setRenderTarget(readBuffer);
        if (this.clear) renderer.clear();
        renderer.render(this.scene, this.camera);
        renderer.setRenderTarget(writeBuffer);
        if (this.clear) renderer.clear();
        renderer.render(this.scene, this.camera);
        // unlock color and depth buffer for subsequent rendering
        state.buffers.color.setLocked(false);
        state.buffers.depth.setLocked(false);
        // only render where stencil is set to 1
        state.buffers.stencil.setLocked(false);
        state.buffers.stencil.setFunc(context.EQUAL, 1, 0xffffffff); // draw if == 1
        state.buffers.stencil.setOp(context.KEEP, context.KEEP, context.KEEP);
        state.buffers.stencil.setLocked(true);
    }
}
class ClearMaskPass extends (0, _passJs.Pass) {
    constructor(){
        super();
        this.needsSwap = false;
    }
    render(renderer /*, writeBuffer, readBuffer, deltaTime, maskActive */ ) {
        renderer.state.buffers.stencil.setLocked(false);
        renderer.state.buffers.stencil.setTest(false);
    }
}

},{"../postprocessing/Pass.js":"i2IfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1kP6C","ZYb3n"], "ZYb3n", "parcelRequire57db")

//# sourceMappingURL=index2.3a4da289.js.map
