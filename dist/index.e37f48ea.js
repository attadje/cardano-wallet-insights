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
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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
    bundle.hotData = {
    };
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _config = require("./config");
var _rewardsHistViewJs = require("./views/rewardsHistView.js");
var _rewardsHistViewJsDefault = parcelHelpers.interopDefault(_rewardsHistViewJs);
var _utilJs = require("./util.js");
const controlRewardsHist = async function() {
    _rewardsHistViewJsDefault.default.renderSpiner();
    const rewards_hist = await _modelJs.reward_history(_config.STAKE_ADDR);
    const rewards = rewards_hist.rewards.flatMap((x)=>_utilJs.lovelanceToAda(x)
    );
    _rewardsHistViewJsDefault.default.generateChart(rewards_hist.epochs, rewards);
};
controlRewardsHist();
const init = function() {
};
init();

},{"./model.js":"Y4A21","./config":"k5Hzs","./views/rewardsHistView.js":"13Alb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./util.js":"doATT"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "reward_history", ()=>reward_history
);
var _configJs = require("./config.js");
var _utilJs = require("./util.js");
const state = {
    api_key: _configJs.BF_APIKEY,
    network: _configJs.BF_NETWORK.mainnet
};
const reward_history = async function(stake_adrr) {
    const rewards_hist = await _utilJs.AJAX(`${state.network}/accounts/${stake_adrr}/rewards`);
    const epochs = [];
    const rewards = [];
    rewards_hist.forEach(function(item) {
        epochs.push(item.epoch);
        rewards.push(item.amount);
    });
    return {
        epochs: epochs,
        rewards: rewards
    };
//cardano-mainnet.blockfrost.io/api/v0/accounts/{stake_address}/rewards
};

},{"./config.js":"k5Hzs","./util.js":"doATT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BF_APIKEY", ()=>BF_APIKEY
);
parcelHelpers.export(exports, "BF_NETWORK", ()=>BF_NETWORK
);
parcelHelpers.export(exports, "STAKE_ADDR", ()=>STAKE_ADDR
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
const BF_APIKEY = "mainnetiSXrfNxhpPChKCnts2KX9MJ1eQ7exYgb";
const BF_NETWORK = {
    mainnet: "https://cardano-mainnet.blockfrost.io/api/v0",
    testnet: "	https://cardano-testnet.blockfrost.io/api/v0",
    ipfs: "https://ipfs.blockfrost.io/api/v0"
};
const STAKE_ADDR = "stake1uyttshgm6jtejckv48tll58hfw3fg2ffrcc4d5qvcc4yc7q9jsalf";
const TIMEOUT_SEC = 120;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"doATT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX
);
parcelHelpers.export(exports, "lovelanceToAda", ()=>lovelanceToAda
);
parcelHelpers.export(exports, "nbOfEpochs", ()=>nbOfEpochs
);
var _config = require("./config");
var bf_header = new Headers();
bf_header.append("project_id", "mainnetiSXrfNxhpPChKCnts2KX9MJ1eQ7exYgb");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url, {
            method: "GET",
            headers: bf_header
        });
        const res = await Promise.race([
            fetchPro,
            timeout(_config.TIMEOUT_SEC)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const lovelanceToAda = (lovelance)=>lovelance / 1000000
;
const nbOfEpochs = (nbOfMonths)=>6 * nbOfEpochs
;

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13Alb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _util = require("../util");
var _views = require("./views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class rewardsHistView extends _viewsDefault.default {
    _rewardsHistory;
    _epochsHistory;
    _classChartID = "rewardsHist";
    _parentElem = document.querySelector(".rewardsCardBody");
    _parentCardValueElem = document.querySelector(".amountOfReward");
    _parentCardBodyElem = document.querySelector(".rewardsCardBody");
    _parentCardeButtonElem = document.querySelector(".buttonRewardsHist");
    _buttonID = {
        oneMEpochs: 6,
        sixMEpochs: 36,
        oneYEpochs: 73,
        maxEpochs: 0
    };
    _chartData;
    _calcRewardAmount(rewards) {
        const sumRewards = rewards.reduce((pV, cV)=>pV + cV
        , 0);
        return Number.parseFloat(sumRewards).toFixed(2);
    }
    _renderRewardsChart() {
        return this._renderCardBody(`<canvas id="${this._classChartID}"></canvas>`);
    }
    generateChart(epochs, rewards) {
        // This method generate the chart for the rewards history
        this._rewardsHistory = rewards;
        this._epochsHistory = epochs;
        const rewardsAmount = this._calcRewardAmount(this._rewardsHistory);
        // Update the rewards amount
        this._parentCardValueElem.insertAdjacentHTML("beforeend", this._renderCardValue(`₳ ${rewardsAmount}`));
        // Render the chart of the rewards history in the body of the card
        this._parentCardBodyElem.insertAdjacentHTML("afterbegin", this._renderCardBody(this._renderChart()));
        // Generate the button for selected the range history
        this._parentCardeButtonElem.insertAdjacentHTML("afterbegin", this._renderCardButtonMarkup());
        const ctx = document.getElementById(this._classChartID).getContext("2d");
        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
        gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
        gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
        var config = {
            type: "line",
            data: {
                labels: epochs.slice(epochs.length - 18, epochs.length),
                datasets: [
                    {
                        label: "Rewards",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: "#d346b1",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0,
                        pointBackgroundColor: "#d346b1",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#d346b1",
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: rewards.slice(rewards.length - 18, rewards.length)
                    }, 
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                layout: {
                    padding: 6
                },
                tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 10,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(225,78,202,0.1)",
                                zeroLineColor: "rgba(255,255,255,0)"
                            },
                            ticks: {
                                beginAtZero: true,
                                min: 0,
                                suggestedMin: 0,
                                // suggestedMax: 125,
                                padding: 10,
                                fontColor: "#9a9a9a",
                                callback: function(val, index) {
                                    // Hide every 2nd tick label
                                    return index % 2 === 0 ? val : "";
                                }
                            }
                        }, 
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(225,78,202,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                padding: 10,
                                fontColor: "#9a9a9a",
                                callback: function(val, index) {
                                    // Hide every 2nd tick label
                                    return index % 4 === 0 ? val : "";
                                }
                            }
                        }, 
                    ]
                }
            }
        };
        this._chartData = new Chart(ctx, config);
        this._addHandelerButton();
    // document.querySelector("#maxEpochs").addEventListener("click", function () {
    //   var chart_data = rewards.slice(
    //     this._rewardsHistory.length - 4,
    //     this._rewardsHistory.length
    //   );
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = chart_data;
    //   data.labels = epochs.slice(
    //     this._rewardsHistory.length - 4,
    //     this._rewardsHistory.length
    //   );
    //   this._chartData.update();
    // });
    // document.querySelector("#allEpochs").addEventListener("click", function () {
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = rewards;
    //   data.labels = epochs;
    //   myChartData.update();
    // });
    // document.querySelector("#yEpochs").addEventListener("click", function () {
    //   var chart_data = [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130];
    //   var data = myChartData.config.data;
    //   data.datasets[0].data = chart_data;
    //   data.labels = chart_labels;
    //   myChartData.update();
    // });
    }
    _teste(epochsRewarded) {
        const startEpoch = epochsRewarded == 0 ? 0 : this._rewardsHistory.length - epochsRewarded;
        const endEpoch = this._rewardsHistory.length;
        const data = this._rewardsHistory.slice(startEpoch, endEpoch);
        const chartData = this._chartData.config.data;
        chartData.datasets[0].data = data;
        chartData.labels = this._epochsHistory.slice(startEpoch, endEpoch);
        this._chartData.update();
    }
    _addHandelerButton() {
        Object.entries(this._buttonID).forEach(([classID, epochsRewarded])=>{
            const buttonElem = document.querySelector(`#${classID}`);
            if (!buttonElem) return;
            buttonElem.addEventListener("click", this._teste.bind(this, epochsRewarded));
        });
    }
    _renderCardButtonMarkup() {
        this._clearCardButton();
        return `
    <label
      class="btn btn-sm btn-primary btn-simple active"
      id="oneMEpochs"
    >
      <input type="radio" name="options" checked />
      <span
        class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >1 m</span
      >
      <span class="d-block d-sm-none">
        1 m
      </span>
    </label>
    <label
      class="btn btn-sm btn-primary btn-simple
      id="sixMEpochs" ${this._rewardsHistory > 36.5 ? "" : "disabled"}>
      <input
        type="radio"
        class="d-none d-sm-none"
        name="options"
      />
      <span
        class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >6 m</span
      >
      <span class="d-block d-sm-none">
        6 m
      </span>
    </label>
    <label
    class="btn btn-sm btn-primary btn-simple
    id="oneYEpochs" ${this._rewardsHistory > 73 ? "" : "disabled"}>
    <input
      type="radio"
      class="d-none d-sm-none"
      name="options"
    />
    <span
      class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
      >1 a</span
    >
    <span class="d-block d-sm-none">
      1 a
    </span>
  </label>
    <label
      class="btn btn-sm btn-primary btn-simple"
      id="maxEpochs"
    >
      <input type="radio" class="d-none" name="options" />
      <span
        class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >Max.</span
      >
      <span class="d-block d-sm-none">
        Max.
      </span>
    </label>
    `;
    }
}
exports.default = new rewardsHistView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views":"8t69M","../util":"doATT"}],"8t69M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _clear() {
        this._parentElem.innerHTML = "";
    }
    _clearCardValue() {
        this._parentCardValueElem.innerHTML = "";
    }
    _clearCardBody() {
        this._parentCardBodyElem.innerHTML = "";
    }
    _clearCardButton() {
        this._parentCardeButtonElem.innerHTML = "";
    }
    renderSpiner() {
        const markup = `
    <div class="middle">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
    `;
        this._clear();
        this._parentElem.insertAdjacentHTML("beforeend", markup);
    }
    _renderCardValue(value) {
        this._clearCardValue();
        return `
      ${value}
  `;
    }
    _renderCardBody(htmlBody) {
        this._clearCardBody();
        return htmlBody;
    }
    _renderChart() {
        return `<canvas id="${this._classChartID}"></canvas>`;
    }
    _renderCardButton() {
        return `<label
              class="btn btn-sm btn-primary btn-simple active"
              id="mEpochs"
            >
              <input type="radio" name="options" checked />
              <span
                class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
                >1 m</span
              >
              <span class="d-block d-sm-none">
                1 m
              </span>
          </label>`;
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire3ffb")

//# sourceMappingURL=index.e37f48ea.js.map
