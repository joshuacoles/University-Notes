var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};

// node_modules/prettier/standalone.js
var require_standalone = __commonJS((exports2, module2) => {
  !function(e, t) {
    typeof exports2 == "object" && typeof module2 != "undefined" ? module2.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).prettier = t();
  }(exports2, function() {
    "use strict";
    function e(e2, t2) {
      if (e2 == null)
        return {};
      var n2, r2, o2 = {}, u2 = Object.keys(e2);
      for (r2 = 0; r2 < u2.length; r2++)
        n2 = u2[r2], t2.indexOf(n2) >= 0 || (o2[n2] = e2[n2]);
      return o2;
    }
    function t(e2, t2) {
      return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, {raw: {value: Object.freeze(t2)}}));
    }
    var n = {name: "prettier", version: "2.2.1", description: "Prettier is an opinionated code formatter", bin: "./bin/prettier.js", repository: "prettier/prettier", homepage: "https://prettier.io", author: "James Long", license: "MIT", main: "./index.js", browser: "./standalone.js", unpkg: "./standalone.js", engines: {node: ">=10.13.0"}, files: ["index.js", "standalone.js", "src", "bin"], dependencies: {"@angular/compiler": "10.2.3", "@babel/code-frame": "7.10.4", "@babel/parser": "7.12.5", "@glimmer/syntax": "0.66.0", "@iarna/toml": "2.2.5", "@typescript-eslint/typescript-estree": "4.8.1", "angular-estree-parser": "2.2.1", "angular-html-parser": "1.7.1", camelcase: "6.2.0", chalk: "4.1.0", "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540", "cjk-regex": "2.0.0", cosmiconfig: "7.0.0", dashify: "2.0.0", diff: "5.0.0", editorconfig: "0.15.3", "editorconfig-to-prettier": "0.2.0", "escape-string-regexp": "4.0.0", espree: "7.3.0", esutils: "2.0.3", "fast-glob": "3.2.4", "fast-json-stable-stringify": "2.1.0", "find-parent-dir": "0.3.0", "flow-parser": "0.138.0", "get-stdin": "8.0.0", globby: "11.0.1", graphql: "15.4.0", "html-element-attributes": "2.3.0", "html-styles": "1.0.0", "html-tag-names": "1.1.5", "html-void-elements": "1.0.5", ignore: "4.0.6", "jest-docblock": "26.0.0", json5: "2.1.3", leven: "3.1.0", "lines-and-columns": "1.1.6", "linguist-languages": "7.12.1", lodash: "4.17.20", mem: "8.0.0", meriyah: "3.1.6", minimatch: "3.0.4", minimist: "1.2.5", "n-readlines": "1.0.1", outdent: "0.7.1", "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee", "please-upgrade-node": "3.2.0", "postcss-less": "3.1.4", "postcss-media-query-parser": "0.2.3", "postcss-scss": "2.1.1", "postcss-selector-parser": "2.2.3", "postcss-values-parser": "2.0.1", "regexp-util": "1.2.2", "remark-footnotes": "2.0.0", "remark-math": "3.0.1", "remark-parse": "8.0.3", resolve: "1.19.0", semver: "7.3.2", "string-width": "4.2.0", typescript: "4.1.2", "unicode-regex": "3.0.0", unified: "9.2.0", vnopts: "1.0.2", "yaml-unist-parser": "1.3.1"}, devDependencies: {"@babel/core": "7.12.3", "@babel/preset-env": "7.12.1", "@babel/types": "7.12.6", "@glimmer/reference": "0.66.0", "@rollup/plugin-alias": "3.1.1", "@rollup/plugin-babel": "5.2.1", "@rollup/plugin-commonjs": "16.0.0", "@rollup/plugin-json": "4.1.0", "@rollup/plugin-node-resolve": "10.0.0", "@rollup/plugin-replace": "2.3.4", "@types/estree": "0.0.45", "@types/node": "14.14.0", "@typescript-eslint/types": "4.8.1", "babel-jest": "26.6.3", "babel-loader": "8.2.1", benchmark: "2.1.4", "builtin-modules": "3.1.0", "cross-env": "7.0.2", cspell: "4.2.2", eslint: "7.13.0", "eslint-config-prettier": "6.15.0", "eslint-formatter-friendly": "7.0.0", "eslint-plugin-import": "2.22.1", "eslint-plugin-jest": "24.1.3", "eslint-plugin-prettier-internal-rules": "file:scripts/tools/eslint-plugin-prettier-internal-rules", "eslint-plugin-react": "7.21.5", "eslint-plugin-unicorn": "23.0.0", execa: "4.1.0", jest: "26.6.3", "jest-snapshot-serializer-ansi": "1.0.0", "jest-snapshot-serializer-raw": "1.1.0", "jest-watch-typeahead": "0.6.1", "npm-run-all": "4.1.5", "path-browserify": "1.0.1", prettier: "2.2.0", rimraf: "3.0.2", rollup: "2.33.3", "rollup-plugin-node-globals": "1.4.0", "rollup-plugin-terser": "7.0.2", shelljs: "0.8.4", "snapshot-diff": "0.8.1", "strip-ansi": "6.0.0", "synchronous-promise": "2.0.15", tempy: "1.0.0", "terser-webpack-plugin": "5.0.3", webpack: "5.5.1"}, scripts: {prepublishOnly: 'echo "Error: must publish from dist/" && exit 1', "prepare-release": "yarn && yarn build && yarn test:dist", test: "jest", "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest", "test:dist": "cross-env NODE_ENV=production jest", "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest", "test:integration": "jest tests_integration", "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", lint: "run-p lint:*", "lint:typecheck": "tsc", "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly", "lint:changelog": "node ./scripts/lint-changelog.js", "lint:prettier": 'prettier . "!test*" --check', "lint:dist": 'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2018 "dist/!(bin-prettier|index|third-party).js"', "lint:spellcheck": 'cspell "**/*" ".github/**/*"', "lint:deps": "node ./scripts/check-deps.js", fix: "run-s fix:eslint fix:prettier", "fix:eslint": "yarn lint:eslint --fix", "fix:prettier": "yarn lint:prettier --write", build: "node --max-old-space-size=3072 ./scripts/build/build.js", "build-docs": "node ./scripts/build-docs.js"}};
    function r() {
    }
    function o(e2, t2, n2, r2, o2) {
      for (var u2 = 0, i2 = t2.length, a2 = 0, s2 = 0; u2 < i2; u2++) {
        var c2 = t2[u2];
        if (c2.removed) {
          if (c2.value = e2.join(r2.slice(s2, s2 + c2.count)), s2 += c2.count, u2 && t2[u2 - 1].added) {
            var l2 = t2[u2 - 1];
            t2[u2 - 1] = t2[u2], t2[u2] = l2;
          }
        } else {
          if (!c2.added && o2) {
            var p2 = n2.slice(a2, a2 + c2.count);
            p2 = p2.map(function(e3, t3) {
              var n3 = r2[s2 + t3];
              return n3.length > e3.length ? n3 : e3;
            }), c2.value = e2.join(p2);
          } else
            c2.value = e2.join(n2.slice(a2, a2 + c2.count));
          a2 += c2.count, c2.added || (s2 += c2.count);
        }
      }
      var d2 = t2[i2 - 1];
      return i2 > 1 && typeof d2.value == "string" && (d2.added || d2.removed) && e2.equals("", d2.value) && (t2[i2 - 2].value += d2.value, t2.pop()), t2;
    }
    function u(e2) {
      return {newPos: e2.newPos, components: e2.components.slice(0)};
    }
    r.prototype = {diff: function(e2, t2) {
      var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r2 = n2.callback;
      typeof n2 == "function" && (r2 = n2, n2 = {}), this.options = n2;
      var i2 = this;
      function a2(e3) {
        return r2 ? (setTimeout(function() {
          r2(void 0, e3);
        }, 0), true) : e3;
      }
      e2 = this.castInput(e2), t2 = this.castInput(t2), e2 = this.removeEmpty(this.tokenize(e2));
      var s2 = (t2 = this.removeEmpty(this.tokenize(t2))).length, c2 = e2.length, l2 = 1, p2 = s2 + c2, d2 = [{newPos: -1, components: []}], f2 = this.extractCommon(d2[0], t2, e2, 0);
      if (d2[0].newPos + 1 >= s2 && f2 + 1 >= c2)
        return a2([{value: this.join(t2), count: t2.length}]);
      function h2() {
        for (var n3 = -1 * l2; n3 <= l2; n3 += 2) {
          var r3 = void 0, p3 = d2[n3 - 1], f3 = d2[n3 + 1], h3 = (f3 ? f3.newPos : 0) - n3;
          p3 && (d2[n3 - 1] = void 0);
          var m3 = p3 && p3.newPos + 1 < s2, g2 = f3 && 0 <= h3 && h3 < c2;
          if (m3 || g2) {
            if (!m3 || g2 && p3.newPos < f3.newPos ? (r3 = u(f3), i2.pushComponent(r3.components, void 0, true)) : ((r3 = p3).newPos++, i2.pushComponent(r3.components, true, void 0)), h3 = i2.extractCommon(r3, t2, e2, n3), r3.newPos + 1 >= s2 && h3 + 1 >= c2)
              return a2(o(i2, r3.components, t2, e2, i2.useLongestToken));
            d2[n3] = r3;
          } else
            d2[n3] = void 0;
        }
        l2++;
      }
      if (r2)
        !function e3() {
          setTimeout(function() {
            if (l2 > p2)
              return r2();
            h2() || e3();
          }, 0);
        }();
      else
        for (; l2 <= p2; ) {
          var m2 = h2();
          if (m2)
            return m2;
        }
    }, pushComponent: function(e2, t2, n2) {
      var r2 = e2[e2.length - 1];
      r2 && r2.added === t2 && r2.removed === n2 ? e2[e2.length - 1] = {count: r2.count + 1, added: t2, removed: n2} : e2.push({count: 1, added: t2, removed: n2});
    }, extractCommon: function(e2, t2, n2, r2) {
      for (var o2 = t2.length, u2 = n2.length, i2 = e2.newPos, a2 = i2 - r2, s2 = 0; i2 + 1 < o2 && a2 + 1 < u2 && this.equals(t2[i2 + 1], n2[a2 + 1]); )
        i2++, a2++, s2++;
      return s2 && e2.components.push({count: s2}), e2.newPos = i2, a2;
    }, equals: function(e2, t2) {
      return this.options.comparator ? this.options.comparator(e2, t2) : e2 === t2 || this.options.ignoreCase && e2.toLowerCase() === t2.toLowerCase();
    }, removeEmpty: function(e2) {
      for (var t2 = [], n2 = 0; n2 < e2.length; n2++)
        e2[n2] && t2.push(e2[n2]);
      return t2;
    }, castInput: function(e2) {
      return e2;
    }, tokenize: function(e2) {
      return e2.split("");
    }, join: function(e2) {
      return e2.join("");
    }};
    var i = new r();
    function a(e2, t2) {
      if (typeof e2 == "function")
        t2.callback = e2;
      else if (e2)
        for (var n2 in e2)
          e2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
      return t2;
    }
    var s = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, c = /\S/, l = new r();
    l.equals = function(e2, t2) {
      return this.options.ignoreCase && (e2 = e2.toLowerCase(), t2 = t2.toLowerCase()), e2 === t2 || this.options.ignoreWhitespace && !c.test(e2) && !c.test(t2);
    }, l.tokenize = function(e2) {
      for (var t2 = e2.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n2 = 0; n2 < t2.length - 1; n2++)
        !t2[n2 + 1] && t2[n2 + 2] && s.test(t2[n2]) && s.test(t2[n2 + 2]) && (t2[n2] += t2[n2 + 2], t2.splice(n2 + 1, 2), n2--);
      return t2;
    };
    var p = new r();
    function d(e2, t2, n2) {
      return p.diff(e2, t2, n2);
    }
    p.tokenize = function(e2) {
      var t2 = [], n2 = e2.split(/(\n|\r\n)/);
      n2[n2.length - 1] || n2.pop();
      for (var r2 = 0; r2 < n2.length; r2++) {
        var o2 = n2[r2];
        r2 % 2 && !this.options.newlineIsToken ? t2[t2.length - 1] += o2 : (this.options.ignoreWhitespace && (o2 = o2.trim()), t2.push(o2));
      }
      return t2;
    };
    var f = new r();
    f.tokenize = function(e2) {
      return e2.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    var h = new r();
    function m(e2) {
      return (m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
      })(e2);
    }
    function g(e2) {
      return function(e3) {
        if (Array.isArray(e3))
          return D(e3);
      }(e2) || function(e3) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
          return Array.from(e3);
      }(e2) || function(e3, t2) {
        if (!e3)
          return;
        if (typeof e3 == "string")
          return D(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
        if (n2 === "Map" || n2 === "Set")
          return Array.from(e3);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return D(e3, t2);
      }(e2) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function D(e2, t2) {
      (t2 == null || t2 > e2.length) && (t2 = e2.length);
      for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
        r2[n2] = e2[n2];
      return r2;
    }
    h.tokenize = function(e2) {
      return e2.split(/([{}:;,]|\s+)/);
    };
    var y = Object.prototype.toString, E = new r();
    function C(e2, t2, n2, r2, o2) {
      var u2, i2;
      for (t2 = t2 || [], n2 = n2 || [], r2 && (e2 = r2(o2, e2)), u2 = 0; u2 < t2.length; u2 += 1)
        if (t2[u2] === e2)
          return n2[u2];
      if (y.call(e2) === "[object Array]") {
        for (t2.push(e2), i2 = new Array(e2.length), n2.push(i2), u2 = 0; u2 < e2.length; u2 += 1)
          i2[u2] = C(e2[u2], t2, n2, r2, o2);
        return t2.pop(), n2.pop(), i2;
      }
      if (e2 && e2.toJSON && (e2 = e2.toJSON()), m(e2) === "object" && e2 !== null) {
        t2.push(e2), i2 = {}, n2.push(i2);
        var a2, s2 = [];
        for (a2 in e2)
          e2.hasOwnProperty(a2) && s2.push(a2);
        for (s2.sort(), u2 = 0; u2 < s2.length; u2 += 1)
          i2[a2 = s2[u2]] = C(e2[a2], t2, n2, r2, a2);
        t2.pop(), n2.pop();
      } else
        i2 = e2;
      return i2;
    }
    E.useLongestToken = true, E.tokenize = p.tokenize, E.castInput = function(e2) {
      var t2 = this.options, n2 = t2.undefinedReplacement, r2 = t2.stringifyReplacer, o2 = r2 === void 0 ? function(e3, t3) {
        return t3 === void 0 ? n2 : t3;
      } : r2;
      return typeof e2 == "string" ? e2 : JSON.stringify(C(e2, null, null, o2), o2, "  ");
    }, E.equals = function(e2, t2) {
      return r.prototype.equals.call(E, e2.replace(/,([\r\n])/g, "$1"), t2.replace(/,([\r\n])/g, "$1"));
    };
    var b = new r();
    function v(e2) {
      var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = e2.split(/\r\n|[\n\v\f\r\x85]/), r2 = e2.match(/\r\n|[\n\v\f\r\x85]/g) || [], o2 = [], u2 = 0;
      function i2() {
        var e3 = {};
        for (o2.push(e3); u2 < n2.length; ) {
          var r3 = n2[u2];
          if (/^(\-\-\-|\+\+\+|@@)\s/.test(r3))
            break;
          var i3 = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r3);
          i3 && (e3.index = i3[1]), u2++;
        }
        for (a2(e3), a2(e3), e3.hunks = []; u2 < n2.length; ) {
          var c2 = n2[u2];
          if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c2))
            break;
          if (/^@@/.test(c2))
            e3.hunks.push(s2());
          else {
            if (c2 && t2.strict)
              throw new Error("Unknown line " + (u2 + 1) + " " + JSON.stringify(c2));
            u2++;
          }
        }
      }
      function a2(e3) {
        var t3 = /^(---|\+\+\+)\s+(.*)$/.exec(n2[u2]);
        if (t3) {
          var r3 = t3[1] === "---" ? "old" : "new", o3 = t3[2].split("	", 2), i3 = o3[0].replace(/\\\\/g, "\\");
          /^".*"$/.test(i3) && (i3 = i3.substr(1, i3.length - 2)), e3[r3 + "FileName"] = i3, e3[r3 + "Header"] = (o3[1] || "").trim(), u2++;
        }
      }
      function s2() {
        var e3 = u2, o3 = n2[u2++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), i3 = {oldStart: +o3[1], oldLines: o3[2] === void 0 ? 1 : +o3[2], newStart: +o3[3], newLines: o3[4] === void 0 ? 1 : +o3[4], lines: [], linedelimiters: []};
        i3.oldLines === 0 && (i3.oldStart += 1), i3.newLines === 0 && (i3.newStart += 1);
        for (var a3 = 0, s3 = 0; u2 < n2.length && !(n2[u2].indexOf("--- ") === 0 && u2 + 2 < n2.length && n2[u2 + 1].indexOf("+++ ") === 0 && n2[u2 + 2].indexOf("@@") === 0); u2++) {
          var c2 = n2[u2].length == 0 && u2 != n2.length - 1 ? " " : n2[u2][0];
          if (c2 !== "+" && c2 !== "-" && c2 !== " " && c2 !== "\\")
            break;
          i3.lines.push(n2[u2]), i3.linedelimiters.push(r2[u2] || "\n"), c2 === "+" ? a3++ : c2 === "-" ? s3++ : c2 === " " && (a3++, s3++);
        }
        if (a3 || i3.newLines !== 1 || (i3.newLines = 0), s3 || i3.oldLines !== 1 || (i3.oldLines = 0), t2.strict) {
          if (a3 !== i3.newLines)
            throw new Error("Added line count did not match for hunk at line " + (e3 + 1));
          if (s3 !== i3.oldLines)
            throw new Error("Removed line count did not match for hunk at line " + (e3 + 1));
        }
        return i3;
      }
      for (; u2 < n2.length; )
        i2();
      return o2;
    }
    function A(e2, t2, n2) {
      var r2 = true, o2 = false, u2 = false, i2 = 1;
      return function a2() {
        if (r2 && !u2) {
          if (o2 ? i2++ : r2 = false, e2 + i2 <= n2)
            return i2;
          u2 = true;
        }
        if (!o2)
          return u2 || (r2 = true), t2 <= e2 - i2 ? -i2++ : (o2 = true, a2());
      };
    }
    function F(e2, t2) {
      var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof t2 == "string" && (t2 = v(t2)), Array.isArray(t2)) {
        if (t2.length > 1)
          throw new Error("applyPatch only works with a single input.");
        t2 = t2[0];
      }
      var r2, o2, u2 = e2.split(/\r\n|[\n\v\f\r\x85]/), i2 = e2.match(/\r\n|[\n\v\f\r\x85]/g) || [], a2 = t2.hunks, s2 = n2.compareLine || function(e3, t3, n3, r3) {
        return t3 === r3;
      }, c2 = 0, l2 = n2.fuzzFactor || 0, p2 = 0, d2 = 0;
      function f2(e3, t3) {
        for (var n3 = 0; n3 < e3.lines.length; n3++) {
          var r3 = e3.lines[n3], o3 = r3.length > 0 ? r3[0] : " ", i3 = r3.length > 0 ? r3.substr(1) : r3;
          if (o3 === " " || o3 === "-") {
            if (!s2(t3 + 1, u2[t3], o3, i3) && ++c2 > l2)
              return false;
            t3++;
          }
        }
        return true;
      }
      for (var h2 = 0; h2 < a2.length; h2++) {
        for (var m2 = a2[h2], g2 = u2.length - m2.oldLines, D2 = 0, y2 = d2 + m2.oldStart - 1, E2 = A(y2, p2, g2); D2 !== void 0; D2 = E2())
          if (f2(m2, y2 + D2)) {
            m2.offset = d2 += D2;
            break;
          }
        if (D2 === void 0)
          return false;
        p2 = m2.offset + m2.oldStart + m2.oldLines;
      }
      for (var C2 = 0, b2 = 0; b2 < a2.length; b2++) {
        var F2 = a2[b2], x2 = F2.oldStart + F2.offset + C2 - 1;
        C2 += F2.newLines - F2.oldLines;
        for (var S2 = 0; S2 < F2.lines.length; S2++) {
          var w2 = F2.lines[S2], T2 = w2.length > 0 ? w2[0] : " ", B2 = w2.length > 0 ? w2.substr(1) : w2, N2 = F2.linedelimiters[S2];
          if (T2 === " ")
            x2++;
          else if (T2 === "-")
            u2.splice(x2, 1), i2.splice(x2, 1);
          else if (T2 === "+")
            u2.splice(x2, 0, B2), i2.splice(x2, 0, N2), x2++;
          else if (T2 === "\\") {
            var k2 = F2.lines[S2 - 1] ? F2.lines[S2 - 1][0] : null;
            k2 === "+" ? r2 = true : k2 === "-" && (o2 = true);
          }
        }
      }
      if (r2)
        for (; !u2[u2.length - 1]; )
          u2.pop(), i2.pop();
      else
        o2 && (u2.push(""), i2.push("\n"));
      for (var P2 = 0; P2 < u2.length - 1; P2++)
        u2[P2] = u2[P2] + i2[P2];
      return u2.join("");
    }
    function x(e2, t2, n2, r2, o2, u2, i2) {
      i2 || (i2 = {}), i2.context === void 0 && (i2.context = 4);
      var a2 = d(n2, r2, i2);
      function s2(e3) {
        return e3.map(function(e4) {
          return " " + e4;
        });
      }
      a2.push({value: "", lines: []});
      for (var c2 = [], l2 = 0, p2 = 0, f2 = [], h2 = 1, m2 = 1, D2 = function(e3) {
        var t3 = a2[e3], o3 = t3.lines || t3.value.replace(/\n$/, "").split("\n");
        if (t3.lines = o3, t3.added || t3.removed) {
          var u3;
          if (!l2) {
            var d2 = a2[e3 - 1];
            l2 = h2, p2 = m2, d2 && (f2 = i2.context > 0 ? s2(d2.lines.slice(-i2.context)) : [], l2 -= f2.length, p2 -= f2.length);
          }
          (u3 = f2).push.apply(u3, g(o3.map(function(e4) {
            return (t3.added ? "+" : "-") + e4;
          }))), t3.added ? m2 += o3.length : h2 += o3.length;
        } else {
          if (l2)
            if (o3.length <= 2 * i2.context && e3 < a2.length - 2) {
              var D3;
              (D3 = f2).push.apply(D3, g(s2(o3)));
            } else {
              var y3, E2 = Math.min(o3.length, i2.context);
              (y3 = f2).push.apply(y3, g(s2(o3.slice(0, E2))));
              var C2 = {oldStart: l2, oldLines: h2 - l2 + E2, newStart: p2, newLines: m2 - p2 + E2, lines: f2};
              if (e3 >= a2.length - 2 && o3.length <= i2.context) {
                var b2 = /\n$/.test(n2), v2 = /\n$/.test(r2), A2 = o3.length == 0 && f2.length > C2.oldLines;
                !b2 && A2 && n2.length > 0 && f2.splice(C2.oldLines, 0, "\\ No newline at end of file"), (b2 || A2) && v2 || f2.push("\\ No newline at end of file");
              }
              c2.push(C2), l2 = 0, p2 = 0, f2 = [];
            }
          h2 += o3.length, m2 += o3.length;
        }
      }, y2 = 0; y2 < a2.length; y2++)
        D2(y2);
      return {oldFileName: e2, newFileName: t2, oldHeader: o2, newHeader: u2, hunks: c2};
    }
    function S(e2, t2, n2, r2, o2, u2, i2) {
      return function(e3) {
        var t3 = [];
        e3.oldFileName == e3.newFileName && t3.push("Index: " + e3.oldFileName), t3.push("==================================================================="), t3.push("--- " + e3.oldFileName + (e3.oldHeader === void 0 ? "" : "	" + e3.oldHeader)), t3.push("+++ " + e3.newFileName + (e3.newHeader === void 0 ? "" : "	" + e3.newHeader));
        for (var n3 = 0; n3 < e3.hunks.length; n3++) {
          var r3 = e3.hunks[n3];
          r3.oldLines === 0 && (r3.oldStart -= 1), r3.newLines === 0 && (r3.newStart -= 1), t3.push("@@ -" + r3.oldStart + "," + r3.oldLines + " +" + r3.newStart + "," + r3.newLines + " @@"), t3.push.apply(t3, r3.lines);
        }
        return t3.join("\n") + "\n";
      }(x(e2, t2, n2, r2, o2, u2, i2));
    }
    function w(e2, t2) {
      if (t2.length > e2.length)
        return false;
      for (var n2 = 0; n2 < t2.length; n2++)
        if (t2[n2] !== e2[n2])
          return false;
      return true;
    }
    function T(e2) {
      var t2 = W(e2.lines), n2 = t2.oldLines, r2 = t2.newLines;
      n2 !== void 0 ? e2.oldLines = n2 : delete e2.oldLines, r2 !== void 0 ? e2.newLines = r2 : delete e2.newLines;
    }
    function B(e2, t2) {
      if (typeof e2 == "string") {
        if (/^@@/m.test(e2) || /^Index:/m.test(e2))
          return v(e2)[0];
        if (!t2)
          throw new Error("Must provide a base reference or pass in a patch");
        return x(void 0, void 0, t2, e2);
      }
      return e2;
    }
    function N(e2) {
      return e2.newFileName && e2.newFileName !== e2.oldFileName;
    }
    function k(e2, t2, n2) {
      return t2 === n2 ? t2 : (e2.conflict = true, {mine: t2, theirs: n2});
    }
    function P(e2, t2) {
      return e2.oldStart < t2.oldStart && e2.oldStart + e2.oldLines < t2.oldStart;
    }
    function O(e2, t2) {
      return {oldStart: e2.oldStart, oldLines: e2.oldLines, newStart: e2.newStart + t2, newLines: e2.newLines, lines: e2.lines};
    }
    function I(e2, t2, n2, r2, o2) {
      var u2 = {offset: t2, lines: n2, index: 0}, i2 = {offset: r2, lines: o2, index: 0};
      for (_(e2, u2, i2), _(e2, i2, u2); u2.index < u2.lines.length && i2.index < i2.lines.length; ) {
        var a2 = u2.lines[u2.index], s2 = i2.lines[i2.index];
        if (a2[0] !== "-" && a2[0] !== "+" || s2[0] !== "-" && s2[0] !== "+")
          if (a2[0] === "+" && s2[0] === " ") {
            var c2;
            (c2 = e2.lines).push.apply(c2, g(V(u2)));
          } else if (s2[0] === "+" && a2[0] === " ") {
            var l2;
            (l2 = e2.lines).push.apply(l2, g(V(i2)));
          } else
            a2[0] === "-" && s2[0] === " " ? M(e2, u2, i2) : s2[0] === "-" && a2[0] === " " ? M(e2, i2, u2, true) : a2 === s2 ? (e2.lines.push(a2), u2.index++, i2.index++) : j(e2, V(u2), V(i2));
        else
          L(e2, u2, i2);
      }
      R(e2, u2), R(e2, i2), T(e2);
    }
    function L(e2, t2, n2) {
      var r2 = V(t2), o2 = V(n2);
      if ($(r2) && $(o2)) {
        var u2, i2;
        if (w(r2, o2) && q(n2, r2, r2.length - o2.length))
          return void (u2 = e2.lines).push.apply(u2, g(r2));
        if (w(o2, r2) && q(t2, o2, o2.length - r2.length))
          return void (i2 = e2.lines).push.apply(i2, g(o2));
      } else if (function(e3, t3) {
        return e3.length === t3.length && w(e3, t3);
      }(r2, o2)) {
        var a2;
        return void (a2 = e2.lines).push.apply(a2, g(r2));
      }
      j(e2, r2, o2);
    }
    function M(e2, t2, n2, r2) {
      var o2, u2 = V(t2), i2 = function(e3, t3) {
        var n3 = [], r3 = [], o3 = 0, u3 = false, i3 = false;
        for (; o3 < t3.length && e3.index < e3.lines.length; ) {
          var a2 = e3.lines[e3.index], s2 = t3[o3];
          if (s2[0] === "+")
            break;
          if (u3 = u3 || a2[0] !== " ", r3.push(s2), o3++, a2[0] === "+")
            for (i3 = true; a2[0] === "+"; )
              n3.push(a2), a2 = e3.lines[++e3.index];
          s2.substr(1) === a2.substr(1) ? (n3.push(a2), e3.index++) : i3 = true;
        }
        (t3[o3] || "")[0] === "+" && u3 && (i3 = true);
        if (i3)
          return n3;
        for (; o3 < t3.length; )
          r3.push(t3[o3++]);
        return {merged: r3, changes: n3};
      }(n2, u2);
      i2.merged ? (o2 = e2.lines).push.apply(o2, g(i2.merged)) : j(e2, r2 ? i2 : u2, r2 ? u2 : i2);
    }
    function j(e2, t2, n2) {
      e2.conflict = true, e2.lines.push({conflict: true, mine: t2, theirs: n2});
    }
    function _(e2, t2, n2) {
      for (; t2.offset < n2.offset && t2.index < t2.lines.length; ) {
        var r2 = t2.lines[t2.index++];
        e2.lines.push(r2), t2.offset++;
      }
    }
    function R(e2, t2) {
      for (; t2.index < t2.lines.length; ) {
        var n2 = t2.lines[t2.index++];
        e2.lines.push(n2);
      }
    }
    function V(e2) {
      for (var t2 = [], n2 = e2.lines[e2.index][0]; e2.index < e2.lines.length; ) {
        var r2 = e2.lines[e2.index];
        if (n2 === "-" && r2[0] === "+" && (n2 = "+"), n2 !== r2[0])
          break;
        t2.push(r2), e2.index++;
      }
      return t2;
    }
    function $(e2) {
      return e2.reduce(function(e3, t2) {
        return e3 && t2[0] === "-";
      }, true);
    }
    function q(e2, t2, n2) {
      for (var r2 = 0; r2 < n2; r2++) {
        var o2 = t2[t2.length - n2 + r2].substr(1);
        if (e2.lines[e2.index + r2] !== " " + o2)
          return false;
      }
      return e2.index += n2, true;
    }
    function W(e2) {
      var t2 = 0, n2 = 0;
      return e2.forEach(function(e3) {
        if (typeof e3 != "string") {
          var r2 = W(e3.mine), o2 = W(e3.theirs);
          t2 !== void 0 && (r2.oldLines === o2.oldLines ? t2 += r2.oldLines : t2 = void 0), n2 !== void 0 && (r2.newLines === o2.newLines ? n2 += r2.newLines : n2 = void 0);
        } else
          n2 === void 0 || e3[0] !== "+" && e3[0] !== " " || n2++, t2 === void 0 || e3[0] !== "-" && e3[0] !== " " || t2++;
      }), {oldLines: t2, newLines: n2};
    }
    function U(e2) {
      var t2 = e2;
      return t2 = (t2 = (t2 = (t2 = t2.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
    }
    b.tokenize = function(e2) {
      return e2.slice();
    }, b.join = b.removeEmpty = function(e2) {
      return e2;
    };
    var J = Object.freeze({__proto__: null, Diff: r, applyPatch: F, applyPatches: function(e2, t2) {
      typeof e2 == "string" && (e2 = v(e2));
      var n2 = 0;
      !function r2() {
        var o2 = e2[n2++];
        if (!o2)
          return t2.complete();
        t2.loadFile(o2, function(e3, n3) {
          if (e3)
            return t2.complete(e3);
          var u2 = F(n3, o2, t2);
          t2.patched(o2, u2, function(e4) {
            if (e4)
              return t2.complete(e4);
            r2();
          });
        });
      }();
    }, canonicalize: C, convertChangesToDMP: function(e2) {
      for (var t2, n2, r2 = [], o2 = 0; o2 < e2.length; o2++)
        n2 = (t2 = e2[o2]).added ? 1 : t2.removed ? -1 : 0, r2.push([n2, t2.value]);
      return r2;
    }, convertChangesToXML: function(e2) {
      for (var t2 = [], n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2[n2];
        r2.added ? t2.push("<ins>") : r2.removed && t2.push("<del>"), t2.push(U(r2.value)), r2.added ? t2.push("</ins>") : r2.removed && t2.push("</del>");
      }
      return t2.join("");
    }, createPatch: function(e2, t2, n2, r2, o2, u2) {
      return S(e2, e2, t2, n2, r2, o2, u2);
    }, createTwoFilesPatch: S, diffArrays: function(e2, t2, n2) {
      return b.diff(e2, t2, n2);
    }, diffChars: function(e2, t2, n2) {
      return i.diff(e2, t2, n2);
    }, diffCss: function(e2, t2, n2) {
      return h.diff(e2, t2, n2);
    }, diffJson: function(e2, t2, n2) {
      return E.diff(e2, t2, n2);
    }, diffLines: d, diffSentences: function(e2, t2, n2) {
      return f.diff(e2, t2, n2);
    }, diffTrimmedLines: function(e2, t2, n2) {
      var r2 = a(n2, {ignoreWhitespace: true});
      return p.diff(e2, t2, r2);
    }, diffWords: function(e2, t2, n2) {
      return n2 = a(n2, {ignoreWhitespace: true}), l.diff(e2, t2, n2);
    }, diffWordsWithSpace: function(e2, t2, n2) {
      return l.diff(e2, t2, n2);
    }, merge: function(e2, t2, n2) {
      e2 = B(e2, n2), t2 = B(t2, n2);
      var r2 = {};
      (e2.index || t2.index) && (r2.index = e2.index || t2.index), (e2.newFileName || t2.newFileName) && (N(e2) ? N(t2) ? (r2.oldFileName = k(r2, e2.oldFileName, t2.oldFileName), r2.newFileName = k(r2, e2.newFileName, t2.newFileName), r2.oldHeader = k(r2, e2.oldHeader, t2.oldHeader), r2.newHeader = k(r2, e2.newHeader, t2.newHeader)) : (r2.oldFileName = e2.oldFileName, r2.newFileName = e2.newFileName, r2.oldHeader = e2.oldHeader, r2.newHeader = e2.newHeader) : (r2.oldFileName = t2.oldFileName || e2.oldFileName, r2.newFileName = t2.newFileName || e2.newFileName, r2.oldHeader = t2.oldHeader || e2.oldHeader, r2.newHeader = t2.newHeader || e2.newHeader)), r2.hunks = [];
      for (var o2 = 0, u2 = 0, i2 = 0, a2 = 0; o2 < e2.hunks.length || u2 < t2.hunks.length; ) {
        var s2 = e2.hunks[o2] || {oldStart: 1 / 0}, c2 = t2.hunks[u2] || {oldStart: 1 / 0};
        if (P(s2, c2))
          r2.hunks.push(O(s2, i2)), o2++, a2 += s2.newLines - s2.oldLines;
        else if (P(c2, s2))
          r2.hunks.push(O(c2, a2)), u2++, i2 += c2.newLines - c2.oldLines;
        else {
          var l2 = {oldStart: Math.min(s2.oldStart, c2.oldStart), oldLines: 0, newStart: Math.min(s2.newStart + i2, c2.oldStart + a2), newLines: 0, lines: []};
          I(l2, s2.oldStart, s2.lines, c2.oldStart, c2.lines), u2++, o2++, r2.hunks.push(l2);
        }
      }
      return r2;
    }, parsePatch: v, structuredPatch: x});
    function z(e2) {
      return {type: "concat", parts: e2};
    }
    function H(e2) {
      return {type: "indent", contents: e2};
    }
    function G(e2, t2) {
      return {type: "align", contents: t2, n: e2};
    }
    function X(e2, t2) {
      return {type: "group", id: (t2 = t2 || {}).id, contents: e2, break: !!t2.shouldBreak, expandedStates: t2.expandedStates};
    }
    const Y = {type: "break-parent"}, K = z([{type: "line", hard: true}, Y]), Q = z([{type: "line", hard: true, literal: true}, Y]);
    var Z = {concat: z, join: function(e2, t2) {
      const n2 = [];
      for (let r2 = 0; r2 < t2.length; r2++)
        r2 !== 0 && n2.push(e2), n2.push(t2[r2]);
      return z(n2);
    }, line: {type: "line"}, softline: {type: "line", soft: true}, hardline: K, literalline: Q, group: X, conditionalGroup: function(e2, t2) {
      return X(e2[0], Object.assign({}, t2, {expandedStates: e2}));
    }, fill: function(e2) {
      return {type: "fill", parts: e2};
    }, lineSuffix: function(e2) {
      return {type: "line-suffix", contents: e2};
    }, lineSuffixBoundary: {type: "line-suffix-boundary"}, cursor: {type: "cursor", placeholder: Symbol("cursor")}, breakParent: Y, ifBreak: function(e2, t2, n2) {
      return {type: "if-break", breakContents: e2, flatContents: t2, groupId: (n2 = n2 || {}).groupId};
    }, trim: {type: "trim"}, indent: H, align: G, addAlignmentToDoc: function(e2, t2, n2) {
      let r2 = e2;
      if (t2 > 0) {
        for (let e3 = 0; e3 < Math.floor(t2 / n2); ++e3)
          r2 = H(r2);
        r2 = G(t2 % n2, r2), r2 = G(-1 / 0, r2);
      }
      return r2;
    }, markAsRoot: function(e2) {
      return G({type: "root"}, e2);
    }, dedentToRoot: function(e2) {
      return G(-1 / 0, e2);
    }, dedent: function(e2) {
      return G(-1, e2);
    }}, ee = (e2) => typeof e2 == "string" ? e2.replace((({onlyFirst: e3 = false} = {}) => {
      const t2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t2, e3 ? void 0 : "g");
    })(), "") : e2;
    const te = (e2) => !Number.isNaN(e2) && (e2 >= 4352 && (e2 <= 4447 || e2 === 9001 || e2 === 9002 || 11904 <= e2 && e2 <= 12871 && e2 !== 12351 || 12880 <= e2 && e2 <= 19903 || 19968 <= e2 && e2 <= 42182 || 43360 <= e2 && e2 <= 43388 || 44032 <= e2 && e2 <= 55203 || 63744 <= e2 && e2 <= 64255 || 65040 <= e2 && e2 <= 65049 || 65072 <= e2 && e2 <= 65131 || 65281 <= e2 && e2 <= 65376 || 65504 <= e2 && e2 <= 65510 || 110592 <= e2 && e2 <= 110593 || 127488 <= e2 && e2 <= 127569 || 131072 <= e2 && e2 <= 262141));
    var ne = te, re = te;
    ne.default = re;
    const oe = (e2) => {
      if (typeof (e2 = e2.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) != "string" || e2.length === 0)
        return 0;
      e2 = ee(e2);
      let t2 = 0;
      for (let n2 = 0; n2 < e2.length; n2++) {
        const r2 = e2.codePointAt(n2);
        r2 <= 31 || r2 >= 127 && r2 <= 159 || (r2 >= 768 && r2 <= 879 || (r2 > 65535 && n2++, t2 += ne(r2) ? 2 : 1));
      }
      return t2;
    };
    var ue = oe, ie = oe;
    ue.default = ie;
    var ae = (e2) => {
      if (typeof e2 != "string")
        throw new TypeError("Expected a string");
      return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }, se = (e2) => e2[e2.length - 1], ce = typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {};
    function le() {
      throw new Error("setTimeout has not been defined");
    }
    function pe() {
      throw new Error("clearTimeout has not been defined");
    }
    var de = le, fe = pe;
    function he(e2) {
      if (de === setTimeout)
        return setTimeout(e2, 0);
      if ((de === le || !de) && setTimeout)
        return de = setTimeout, setTimeout(e2, 0);
      try {
        return de(e2, 0);
      } catch (t2) {
        try {
          return de.call(null, e2, 0);
        } catch (t3) {
          return de.call(this, e2, 0);
        }
      }
    }
    typeof ce.setTimeout == "function" && (de = setTimeout), typeof ce.clearTimeout == "function" && (fe = clearTimeout);
    var me, ge = [], De = false, ye = -1;
    function Ee() {
      De && me && (De = false, me.length ? ge = me.concat(ge) : ye = -1, ge.length && Ce());
    }
    function Ce() {
      if (!De) {
        var e2 = he(Ee);
        De = true;
        for (var t2 = ge.length; t2; ) {
          for (me = ge, ge = []; ++ye < t2; )
            me && me[ye].run();
          ye = -1, t2 = ge.length;
        }
        me = null, De = false, function(e3) {
          if (fe === clearTimeout)
            return clearTimeout(e3);
          if ((fe === pe || !fe) && clearTimeout)
            return fe = clearTimeout, clearTimeout(e3);
          try {
            fe(e3);
          } catch (t3) {
            try {
              return fe.call(null, e3);
            } catch (t4) {
              return fe.call(this, e3);
            }
          }
        }(e2);
      }
    }
    function be(e2, t2) {
      this.fun = e2, this.array = t2;
    }
    be.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    function ve() {
    }
    var Ae = ve, Fe = ve, xe = ve, Se = ve, we = ve, Te = ve, Be = ve;
    var Ne = ce.performance || {}, ke = Ne.now || Ne.mozNow || Ne.msNow || Ne.oNow || Ne.webkitNow || function() {
      return new Date().getTime();
    };
    var Pe = new Date();
    var Oe = {nextTick: function(e2) {
      var t2 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n2 = 1; n2 < arguments.length; n2++)
          t2[n2 - 1] = arguments[n2];
      ge.push(new be(e2, t2)), ge.length !== 1 || De || he(Ce);
    }, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: Ae, addListener: Fe, once: xe, off: Se, removeListener: we, removeAllListeners: Te, emit: Be, binding: function(e2) {
      throw new Error("process.binding is not supported");
    }, cwd: function() {
      return "/";
    }, chdir: function(e2) {
      throw new Error("process.chdir is not supported");
    }, umask: function() {
      return 0;
    }, hrtime: function(e2) {
      var t2 = 1e-3 * ke.call(Ne), n2 = Math.floor(t2), r2 = Math.floor(t2 % 1 * 1e9);
      return e2 && (n2 -= e2[0], (r2 -= e2[1]) < 0 && (n2--, r2 += 1e9)), [n2, r2];
    }, platform: "browser", release: {}, config: {}, uptime: function() {
      return (new Date() - Pe) / 1e3;
    }};
    var Ie = typeof Oe == "object" && Oe.env && Oe.env.NODE_DEBUG && /\bsemver\b/i.test(Oe.env.NODE_DEBUG) ? (...e2) => console.error("SEMVER", ...e2) : () => {
    };
    var Le = {SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16}, Me = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function je(e2, t2, n2) {
      return e2(n2 = {path: t2, exports: {}, require: function(e3, t3) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t3 == null && n2.path);
      }}, n2.exports), n2.exports;
    }
    function _e(e2) {
      return e2 && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
    }
    var Re = je(function(e2, t2) {
      const {MAX_SAFE_COMPONENT_LENGTH: n2} = Le, r2 = (t2 = e2.exports = {}).re = [], o2 = t2.src = [], u2 = t2.t = {};
      let i2 = 0;
      const a2 = (e3, t3, n3) => {
        const a3 = i2++;
        Ie(a3, t3), u2[e3] = a3, o2[a3] = t3, r2[a3] = new RegExp(t3, n3 ? "g" : void 0);
      };
      a2("NUMERICIDENTIFIER", "0|[1-9]\\d*"), a2("NUMERICIDENTIFIERLOOSE", "[0-9]+"), a2("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), a2("MAINVERSION", "(".concat(o2[u2.NUMERICIDENTIFIER], ")\\.") + "(".concat(o2[u2.NUMERICIDENTIFIER], ")\\.") + "(".concat(o2[u2.NUMERICIDENTIFIER], ")")), a2("MAINVERSIONLOOSE", "(".concat(o2[u2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(o2[u2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(o2[u2.NUMERICIDENTIFIERLOOSE], ")")), a2("PRERELEASEIDENTIFIER", "(?:".concat(o2[u2.NUMERICIDENTIFIER], "|").concat(o2[u2.NONNUMERICIDENTIFIER], ")")), a2("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(o2[u2.NUMERICIDENTIFIERLOOSE], "|").concat(o2[u2.NONNUMERICIDENTIFIER], ")")), a2("PRERELEASE", "(?:-(".concat(o2[u2.PRERELEASEIDENTIFIER], "(?:\\.").concat(o2[u2.PRERELEASEIDENTIFIER], ")*))")), a2("PRERELEASELOOSE", "(?:-?(".concat(o2[u2.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(o2[u2.PRERELEASEIDENTIFIERLOOSE], ")*))")), a2("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), a2("BUILD", "(?:\\+(".concat(o2[u2.BUILDIDENTIFIER], "(?:\\.").concat(o2[u2.BUILDIDENTIFIER], ")*))")), a2("FULLPLAIN", "v?".concat(o2[u2.MAINVERSION]).concat(o2[u2.PRERELEASE], "?").concat(o2[u2.BUILD], "?")), a2("FULL", "^".concat(o2[u2.FULLPLAIN], "$")), a2("LOOSEPLAIN", "[v=\\s]*".concat(o2[u2.MAINVERSIONLOOSE]).concat(o2[u2.PRERELEASELOOSE], "?").concat(o2[u2.BUILD], "?")), a2("LOOSE", "^".concat(o2[u2.LOOSEPLAIN], "$")), a2("GTLT", "((?:<|>)?=?)"), a2("XRANGEIDENTIFIERLOOSE", "".concat(o2[u2.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), a2("XRANGEIDENTIFIER", "".concat(o2[u2.NUMERICIDENTIFIER], "|x|X|\\*")), a2("XRANGEPLAIN", "[v=\\s]*(".concat(o2[u2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(o2[u2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(o2[u2.XRANGEIDENTIFIER], ")") + "(?:".concat(o2[u2.PRERELEASE], ")?").concat(o2[u2.BUILD], "?") + ")?)?"), a2("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(o2[u2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(o2[u2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(o2[u2.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(o2[u2.PRERELEASELOOSE], ")?").concat(o2[u2.BUILD], "?") + ")?)?"), a2("XRANGE", "^".concat(o2[u2.GTLT], "\\s*").concat(o2[u2.XRANGEPLAIN], "$")), a2("XRANGELOOSE", "^".concat(o2[u2.GTLT], "\\s*").concat(o2[u2.XRANGEPLAINLOOSE], "$")), a2("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(n2, "})") + "(?:\\.(\\d{1,".concat(n2, "}))?") + "(?:\\.(\\d{1,".concat(n2, "}))?") + "(?:$|[^\\d])"), a2("COERCERTL", o2[u2.COERCE], true), a2("LONETILDE", "(?:~>?)"), a2("TILDETRIM", "(\\s*)".concat(o2[u2.LONETILDE], "\\s+"), true), t2.tildeTrimReplace = "$1~", a2("TILDE", "^".concat(o2[u2.LONETILDE]).concat(o2[u2.XRANGEPLAIN], "$")), a2("TILDELOOSE", "^".concat(o2[u2.LONETILDE]).concat(o2[u2.XRANGEPLAINLOOSE], "$")), a2("LONECARET", "(?:\\^)"), a2("CARETTRIM", "(\\s*)".concat(o2[u2.LONECARET], "\\s+"), true), t2.caretTrimReplace = "$1^", a2("CARET", "^".concat(o2[u2.LONECARET]).concat(o2[u2.XRANGEPLAIN], "$")), a2("CARETLOOSE", "^".concat(o2[u2.LONECARET]).concat(o2[u2.XRANGEPLAINLOOSE], "$")), a2("COMPARATORLOOSE", "^".concat(o2[u2.GTLT], "\\s*(").concat(o2[u2.LOOSEPLAIN], ")$|^$")), a2("COMPARATOR", "^".concat(o2[u2.GTLT], "\\s*(").concat(o2[u2.FULLPLAIN], ")$|^$")), a2("COMPARATORTRIM", "(\\s*)".concat(o2[u2.GTLT], "\\s*(").concat(o2[u2.LOOSEPLAIN], "|").concat(o2[u2.XRANGEPLAIN], ")"), true), t2.comparatorTrimReplace = "$1$2$3", a2("HYPHENRANGE", "^\\s*(".concat(o2[u2.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(o2[u2.XRANGEPLAIN], ")") + "\\s*$"), a2("HYPHENRANGELOOSE", "^\\s*(".concat(o2[u2.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(o2[u2.XRANGEPLAINLOOSE], ")") + "\\s*$"), a2("STAR", "(<|>)?=?\\s*\\*"), a2("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), a2("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
    });
    const Ve = /^[0-9]+$/, $e = (e2, t2) => {
      const n2 = Ve.test(e2), r2 = Ve.test(t2);
      return n2 && r2 && (e2 = +e2, t2 = +t2), e2 === t2 ? 0 : n2 && !r2 ? -1 : r2 && !n2 ? 1 : e2 < t2 ? -1 : 1;
    };
    var qe = {compareIdentifiers: $e, rcompareIdentifiers: (e2, t2) => $e(t2, e2)};
    const {MAX_LENGTH: We, MAX_SAFE_INTEGER: Ue} = Le, {re: Je, t: ze} = Re, {compareIdentifiers: He} = qe;
    class Ge {
      constructor(e2, t2) {
        if (t2 && typeof t2 == "object" || (t2 = {loose: !!t2, includePrerelease: false}), e2 instanceof Ge) {
          if (e2.loose === !!t2.loose && e2.includePrerelease === !!t2.includePrerelease)
            return e2;
          e2 = e2.version;
        } else if (typeof e2 != "string")
          throw new TypeError("Invalid Version: ".concat(e2));
        if (e2.length > We)
          throw new TypeError("version is longer than ".concat(We, " characters"));
        Ie("SemVer", e2, t2), this.options = t2, this.loose = !!t2.loose, this.includePrerelease = !!t2.includePrerelease;
        const n2 = e2.trim().match(t2.loose ? Je[ze.LOOSE] : Je[ze.FULL]);
        if (!n2)
          throw new TypeError("Invalid Version: ".concat(e2));
        if (this.raw = e2, this.major = +n2[1], this.minor = +n2[2], this.patch = +n2[3], this.major > Ue || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > Ue || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > Ue || this.patch < 0)
          throw new TypeError("Invalid patch version");
        n2[4] ? this.prerelease = n2[4].split(".").map((e3) => {
          if (/^[0-9]+$/.test(e3)) {
            const t3 = +e3;
            if (t3 >= 0 && t3 < Ue)
              return t3;
          }
          return e3;
        }) : this.prerelease = [], this.build = n2[5] ? n2[5].split(".") : [], this.format();
      }
      format() {
        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
      }
      toString() {
        return this.version;
      }
      compare(e2) {
        if (Ie("SemVer.compare", this.version, this.options, e2), !(e2 instanceof Ge)) {
          if (typeof e2 == "string" && e2 === this.version)
            return 0;
          e2 = new Ge(e2, this.options);
        }
        return e2.version === this.version ? 0 : this.compareMain(e2) || this.comparePre(e2);
      }
      compareMain(e2) {
        return e2 instanceof Ge || (e2 = new Ge(e2, this.options)), He(this.major, e2.major) || He(this.minor, e2.minor) || He(this.patch, e2.patch);
      }
      comparePre(e2) {
        if (e2 instanceof Ge || (e2 = new Ge(e2, this.options)), this.prerelease.length && !e2.prerelease.length)
          return -1;
        if (!this.prerelease.length && e2.prerelease.length)
          return 1;
        if (!this.prerelease.length && !e2.prerelease.length)
          return 0;
        let t2 = 0;
        do {
          const n2 = this.prerelease[t2], r2 = e2.prerelease[t2];
          if (Ie("prerelease compare", t2, n2, r2), n2 === void 0 && r2 === void 0)
            return 0;
          if (r2 === void 0)
            return 1;
          if (n2 === void 0)
            return -1;
          if (n2 !== r2)
            return He(n2, r2);
        } while (++t2);
      }
      compareBuild(e2) {
        e2 instanceof Ge || (e2 = new Ge(e2, this.options));
        let t2 = 0;
        do {
          const n2 = this.build[t2], r2 = e2.build[t2];
          if (Ie("prerelease compare", t2, n2, r2), n2 === void 0 && r2 === void 0)
            return 0;
          if (r2 === void 0)
            return 1;
          if (n2 === void 0)
            return -1;
          if (n2 !== r2)
            return He(n2, r2);
        } while (++t2);
      }
      inc(e2, t2) {
        switch (e2) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t2);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t2);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t2), this.inc("pre", t2);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", t2), this.inc("pre", t2);
            break;
          case "major":
            this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              let e3 = this.prerelease.length;
              for (; --e3 >= 0; )
                typeof this.prerelease[e3] == "number" && (this.prerelease[e3]++, e3 = -2);
              e3 === -1 && this.prerelease.push(0);
            }
            t2 && (this.prerelease[0] === t2 ? isNaN(this.prerelease[1]) && (this.prerelease = [t2, 0]) : this.prerelease = [t2, 0]);
            break;
          default:
            throw new Error("invalid increment argument: ".concat(e2));
        }
        return this.format(), this.raw = this.version, this;
      }
    }
    var Xe = Ge;
    var Ye = (e2, t2, n2) => new Xe(e2, n2).compare(new Xe(t2, n2));
    var Ke = (e2, t2, n2) => Ye(e2, t2, n2) < 0;
    var Qe = (e2, t2, n2) => Ye(e2, t2, n2) >= 0, Ze = je(function(e2, t2) {
      function n2() {
        for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
          e3[t3] = arguments[t3];
      }
      function r2() {
        return typeof WeakMap != "undefined" ? new WeakMap() : {add: n2, delete: n2, get: n2, set: n2, has: function(e3) {
          return false;
        }};
      }
      Object.defineProperty(t2, "__esModule", {value: true});
      var o2 = Object.prototype.hasOwnProperty, u2 = function(e3, t3) {
        return o2.call(e3, t3);
      };
      function i2(e3, t3) {
        for (var n3 in t3)
          u2(t3, n3) && (e3[n3] = t3[n3]);
        return e3;
      }
      var a2 = /^[ \t]*(?:\r\n|\r|\n)/, s2 = /(?:\r\n|\r|\n)[ \t]*$/, c2 = /^(?:[\r\n]|$)/, l2 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p2 = /^[ \t]*[\r\n][ \t\r\n]*$/;
      function d2(e3, t3, n3) {
        var r3 = 0, o3 = e3[0].match(l2);
        o3 && (r3 = o3[1].length);
        var u3 = new RegExp("(\\r\\n|\\r|\\n).{0," + r3 + "}", "g");
        t3 && (e3 = e3.slice(1));
        var i3 = n3.newline, c3 = n3.trimLeadingNewline, p3 = n3.trimTrailingNewline, d3 = typeof i3 == "string", f3 = e3.length;
        return e3.map(function(e4, t4) {
          return e4 = e4.replace(u3, "$1"), t4 === 0 && c3 && (e4 = e4.replace(a2, "")), t4 === f3 - 1 && p3 && (e4 = e4.replace(s2, "")), d3 && (e4 = e4.replace(/\r\n|\n|\r/g, function(e5) {
            return i3;
          })), e4;
        });
      }
      function f2(e3, t3) {
        for (var n3 = "", r3 = 0, o3 = e3.length; r3 < o3; r3++)
          n3 += e3[r3], r3 < o3 - 1 && (n3 += t3[r3]);
        return n3;
      }
      function h2(e3) {
        return u2(e3, "raw") && u2(e3, "length");
      }
      var m2 = function e3(t3) {
        var n3 = r2(), o3 = r2();
        return i2(function r3(u3) {
          for (var a3 = [], s3 = 1; s3 < arguments.length; s3++)
            a3[s3 - 1] = arguments[s3];
          if (h2(u3)) {
            var l3 = u3, g2 = (a3[0] === r3 || a3[0] === m2) && p2.test(l3[0]) && c2.test(l3[1]), D2 = g2 ? o3 : n3, y2 = D2.get(l3);
            if (y2 || (y2 = d2(l3, g2, t3), D2.set(l3, y2)), a3.length === 0)
              return y2[0];
            var E2 = f2(y2, g2 ? a3.slice(1) : a3);
            return E2;
          }
          return e3(i2(i2({}, t3), u3 || {}));
        }, {string: function(e4) {
          return d2([e4], false, t3)[0];
        }});
      }({trimLeadingNewline: true, trimTrailingNewline: true});
      t2.outdent = m2, t2.default = m2;
      try {
        e2.exports = m2, Object.defineProperty(m2, "__esModule", {value: true}), m2.default = m2, m2.outdent = m2;
      } catch (e3) {
      }
    });
    function et() {
      const e2 = t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);
      return et = function() {
        return e2;
      }, e2;
    }
    function tt() {
      const e2 = t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
      return tt = function() {
        return e2;
      }, e2;
    }
    function nt() {
      const e2 = t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
      return nt = function() {
        return e2;
      }, e2;
    }
    function rt() {
      const e2 = t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);
      return rt = function() {
        return e2;
      }, e2;
    }
    function ot() {
      const e2 = t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);
      return ot = function() {
        return e2;
      }, e2;
    }
    function ut() {
      const e2 = t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);
      return ut = function() {
        return e2;
      }, e2;
    }
    const {outdent: it} = Ze, at = "Config", st = "Editor", ct = "Other", lt = "Global", pt = "Special", dt = {cursorOffset: {since: "1.4.0", category: pt, type: "int", default: -1, range: {start: -1, end: 1 / 0, step: 1}, description: it(ut()), cliCategory: st}, endOfLine: {since: "1.15.0", category: lt, type: "choice", default: [{since: "1.15.0", value: "auto"}, {since: "2.0.0", value: "lf"}], description: "Which end of line characters to apply.", choices: [{value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"}, {value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"}, {value: "cr", description: "Carriage Return character only (\\r), used very rarely"}, {value: "auto", description: it(ot())}]}, filepath: {since: "1.4.0", category: pt, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: ct, cliDescription: "Path to the file to pretend that stdin comes from."}, insertPragma: {since: "1.8.0", category: pt, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: ct}, parser: {since: "0.0.10", category: lt, type: "choice", default: [{since: "0.0.10", value: "babylon"}, {since: "1.13.0", value: void 0}], description: "Which parser to use.", exception: (e2) => typeof e2 == "string" || typeof e2 == "function", choices: [{value: "flow", description: "Flow"}, {value: "babel", since: "1.16.0", description: "JavaScript"}, {value: "babel-flow", since: "1.16.0", description: "Flow"}, {value: "babel-ts", since: "2.0.0", description: "TypeScript"}, {value: "typescript", since: "1.4.0", description: "TypeScript"}, {value: "espree", since: "2.2.0", description: "JavaScript"}, {value: "meriyah", since: "2.2.0", description: "JavaScript"}, {value: "css", since: "1.7.1", description: "CSS"}, {value: "less", since: "1.7.1", description: "Less"}, {value: "scss", since: "1.7.1", description: "SCSS"}, {value: "json", since: "1.5.0", description: "JSON"}, {value: "json5", since: "1.13.0", description: "JSON5"}, {value: "json-stringify", since: "1.13.0", description: "JSON.stringify"}, {value: "graphql", since: "1.5.0", description: "GraphQL"}, {value: "markdown", since: "1.8.0", description: "Markdown"}, {value: "mdx", since: "1.15.0", description: "MDX"}, {value: "vue", since: "1.10.0", description: "Vue"}, {value: "yaml", since: "1.14.0", description: "YAML"}, {value: "glimmer", since: null, description: "Handlebars"}, {value: "html", since: "1.15.0", description: "HTML"}, {value: "angular", since: "1.15.0", description: "Angular"}, {value: "lwc", since: "1.17.0", description: "Lightning Web Components"}]}, plugins: {since: "1.10.0", type: "path", array: true, default: [{value: []}], category: lt, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin", cliCategory: at}, pluginSearchDirs: {since: "1.13.0", type: "path", array: true, default: [{value: []}], category: lt, description: it(rt()), exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin-search-dir", cliCategory: at}, printWidth: {since: "0.0.0", category: lt, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: {start: 0, end: 1 / 0, step: 1}}, rangeEnd: {since: "1.4.0", category: pt, type: "int", default: 1 / 0, range: {start: 0, end: 1 / 0, step: 1}, description: it(nt()), cliCategory: st}, rangeStart: {since: "1.4.0", category: pt, type: "int", default: 0, range: {start: 0, end: 1 / 0, step: 1}, description: it(tt()), cliCategory: st}, requirePragma: {since: "1.7.0", category: pt, type: "boolean", default: false, description: it(et()), cliCategory: ct}, tabWidth: {type: "int", category: lt, default: 2, description: "Number of spaces per indentation level.", range: {start: 0, end: 1 / 0, step: 1}}, useTabs: {since: "1.0.0", category: lt, type: "boolean", default: false, description: "Indent with tabs instead of spaces."}, embeddedLanguageFormatting: {since: "2.1.0", category: lt, type: "choice", default: [{since: "2.1.0", value: "auto"}], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{value: "auto", description: "Format embedded code if Prettier can automatically identify it."}, {value: "off", description: "Never automatically format embedded code."}]}};
    const ft = {compare: Ye, lt: Ke, gte: Qe}, ht = n.version, mt = {CATEGORY_CONFIG: at, CATEGORY_EDITOR: st, CATEGORY_FORMAT: "Format", CATEGORY_OTHER: ct, CATEGORY_OUTPUT: "Output", CATEGORY_GLOBAL: lt, CATEGORY_SPECIAL: pt, options: dt}.options;
    var gt = {getSupportInfo: function({plugins: t2 = [], showUnreleased: n2 = false, showDeprecated: r2 = false, showInternal: o2 = false} = {}) {
      const u2 = ht.split("-", 1)[0], i2 = t2.reduce((e2, t3) => e2.concat(t3.languages || []), []).filter(s2), a2 = ((e2, t3) => Object.entries(e2).map(([e3, n3]) => Object.assign({[t3]: e3}, n3)))(Object.assign({}, ...t2.map(({options: e2}) => e2), mt), "name").filter((e2) => s2(e2) && c2(e2)).sort((e2, t3) => e2.name === t3.name ? 0 : e2.name < t3.name ? -1 : 1).map(function(t3) {
        if (o2)
          return t3;
        return e(t3, ["cliName", "cliCategory", "cliDescription"]);
      }).map((e2) => {
        e2 = Object.assign({}, e2), Array.isArray(e2.default) && (e2.default = e2.default.length === 1 ? e2.default[0].value : e2.default.filter(s2).sort((e3, t3) => ft.compare(t3.since, e3.since))[0].value), Array.isArray(e2.choices) && (e2.choices = e2.choices.filter((e3) => s2(e3) && c2(e3)), e2.name === "parser" && function(e3, t3, n4) {
          const r3 = new Set(e3.choices.map((e4) => e4.value));
          for (const o3 of t3)
            if (o3.parsers) {
              for (const t4 of o3.parsers)
                if (!r3.has(t4)) {
                  r3.add(t4);
                  const u3 = n4.find((e4) => e4.parsers && e4.parsers[t4]);
                  let i3 = o3.name;
                  u3 && u3.name && (i3 += " (plugin: ".concat(u3.name, ")")), e3.choices.push({value: t4, description: i3});
                }
            }
        }(e2, i2, t2));
        const n3 = t2.filter((t3) => t3.defaultOptions && t3.defaultOptions[e2.name] !== void 0).reduce((t3, n4) => (t3[n4.name] = n4.defaultOptions[e2.name], t3), {});
        return Object.assign({}, e2, {pluginDefaults: n3});
      });
      return {languages: i2, options: a2};
      function s2(e2) {
        return n2 || !("since" in e2) || e2.since && ft.gte(u2, e2.since);
      }
      function c2(e2) {
        return r2 || !("deprecated" in e2) || e2.deprecated && ft.lt(u2, e2.deprecated);
      }
    }};
    const {getSupportInfo: Dt} = gt, yt = /[^\x20-\x7F]/;
    function Et(e2) {
      return (t2, n2, r2) => {
        const o2 = r2 && r2.backwards;
        if (n2 === false)
          return false;
        const {length: u2} = t2;
        let i2 = n2;
        for (; i2 >= 0 && i2 < u2; ) {
          const n3 = t2.charAt(i2);
          if (e2 instanceof RegExp) {
            if (!e2.test(n3))
              return i2;
          } else if (!e2.includes(n3))
            return i2;
          o2 ? i2-- : i2++;
        }
        return (i2 === -1 || i2 === u2) && i2;
      };
    }
    const Ct = Et(/\s/), bt = Et(" 	"), vt = Et(",; 	"), At = Et(/[^\n\r]/);
    function Ft(e2, t2) {
      if (t2 === false)
        return false;
      if (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "*") {
        for (let n2 = t2 + 2; n2 < e2.length; ++n2)
          if (e2.charAt(n2) === "*" && e2.charAt(n2 + 1) === "/")
            return n2 + 2;
      }
      return t2;
    }
    function xt(e2, t2) {
      return t2 !== false && (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "/" ? At(e2, t2) : t2);
    }
    function St(e2, t2, n2) {
      const r2 = n2 && n2.backwards;
      if (t2 === false)
        return false;
      const o2 = e2.charAt(t2);
      if (r2) {
        if (e2.charAt(t2 - 1) === "\r" && o2 === "\n")
          return t2 - 2;
        if (o2 === "\n" || o2 === "\r" || o2 === "\u2028" || o2 === "\u2029")
          return t2 - 1;
      } else {
        if (o2 === "\r" && e2.charAt(t2 + 1) === "\n")
          return t2 + 2;
        if (o2 === "\n" || o2 === "\r" || o2 === "\u2028" || o2 === "\u2029")
          return t2 + 1;
      }
      return t2;
    }
    function wt(e2, t2, n2) {
      const r2 = bt(e2, (n2 = n2 || {}).backwards ? t2 - 1 : t2, n2);
      return r2 !== St(e2, r2, n2);
    }
    function Tt(e2, t2) {
      let n2 = null, r2 = t2;
      for (; r2 !== n2; )
        n2 = r2, r2 = vt(e2, r2), r2 = Ft(e2, r2), r2 = bt(e2, r2);
      return r2 = xt(e2, r2), r2 = St(e2, r2), r2 !== false && wt(e2, r2);
    }
    function Bt(e2, t2) {
      let n2 = null, r2 = t2;
      for (; r2 !== n2; )
        n2 = r2, r2 = bt(e2, r2), r2 = Ft(e2, r2), r2 = xt(e2, r2), r2 = St(e2, r2);
      return r2;
    }
    function Nt(e2, t2, n2) {
      return Bt(e2, n2(t2));
    }
    function kt(e2, t2, n2) {
      let r2 = 0;
      for (let o2 = n2 = n2 || 0; o2 < e2.length; ++o2)
        e2[o2] === "	" ? r2 = r2 + t2 - r2 % t2 : r2++;
      return r2;
    }
    function Pt(e2, t2) {
      const n2 = e2.slice(1, -1), r2 = {quote: '"', regex: /"/g}, o2 = {quote: "'", regex: /'/g}, u2 = t2 === "'" ? o2 : r2, i2 = u2 === o2 ? r2 : o2;
      let a2 = u2.quote;
      if (n2.includes(u2.quote) || n2.includes(i2.quote)) {
        a2 = (n2.match(u2.regex) || []).length > (n2.match(i2.regex) || []).length ? i2.quote : u2.quote;
      }
      return a2;
    }
    function Ot(e2, t2, n2) {
      const r2 = t2 === '"' ? "'" : '"', o2 = e2.replace(/\\([\S\s])|(["'])/g, (e3, o3, u2) => o3 === r2 ? o3 : u2 === t2 ? "\\" + u2 : u2 || (n2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(o3) ? o3 : "\\" + o3));
      return t2 + o2 + t2;
    }
    function It(e2, t2) {
      (e2.comments || (e2.comments = [])).push(t2), t2.printed = false, e2.type === "JSXText" && (t2.printed = true);
    }
    var Lt = {inferParserByLanguage: function(e2, t2) {
      const {languages: n2} = Dt({plugins: t2.plugins}), r2 = n2.find(({name: t3}) => t3.toLowerCase() === e2) || n2.find(({aliases: t3}) => Array.isArray(t3) && t3.includes(e2)) || n2.find(({extensions: t3}) => Array.isArray(t3) && t3.includes(".".concat(e2)));
      return r2 && r2.parsers[0];
    }, replaceEndOfLineWith: function(e2, t2) {
      const n2 = [];
      for (const r2 of e2.split("\n"))
        n2.length !== 0 && n2.push(t2), n2.push(r2);
      return n2;
    }, getStringWidth: function(e2) {
      return e2 ? yt.test(e2) ? ue(e2) : e2.length : 0;
    }, getMaxContinuousCount: function(e2, t2) {
      const n2 = e2.match(new RegExp("(".concat(ae(t2), ")+"), "g"));
      return n2 === null ? 0 : n2.reduce((e3, n3) => Math.max(e3, n3.length / t2.length), 0);
    }, getMinNotPresentContinuousCount: function(e2, t2) {
      const n2 = e2.match(new RegExp("(".concat(ae(t2), ")+"), "g"));
      if (n2 === null)
        return 0;
      const r2 = new Map();
      let o2 = 0;
      for (const e3 of n2) {
        const n3 = e3.length / t2.length;
        r2.set(n3, true), n3 > o2 && (o2 = n3);
      }
      for (let e3 = 1; e3 < o2; e3++)
        if (!r2.get(e3))
          return e3;
      return o2 + 1;
    }, getPenultimate: (e2) => e2[e2.length - 2], getLast: se, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Bt, getNextNonSpaceNonCommentCharacterIndex: Nt, getNextNonSpaceNonCommentCharacter: function(e2, t2, n2) {
      return e2.charAt(Nt(e2, t2, n2));
    }, skip: Et, skipWhitespace: Ct, skipSpaces: bt, skipToLineEnd: vt, skipEverythingButNewLine: At, skipInlineComment: Ft, skipTrailingComment: xt, skipNewline: St, isNextLineEmptyAfterIndex: Tt, isNextLineEmpty: function(e2, t2, n2) {
      return Tt(e2, n2(t2));
    }, isPreviousLineEmpty: function(e2, t2, n2) {
      let r2 = n2(t2) - 1;
      return r2 = bt(e2, r2, {backwards: true}), r2 = St(e2, r2, {backwards: true}), r2 = bt(e2, r2, {backwards: true}), r2 !== St(e2, r2, {backwards: true});
    }, hasNewline: wt, hasNewlineInRange: function(e2, t2, n2) {
      for (let r2 = t2; r2 < n2; ++r2)
        if (e2.charAt(r2) === "\n")
          return true;
      return false;
    }, hasSpaces: function(e2, t2, n2) {
      return bt(e2, (n2 = n2 || {}).backwards ? t2 - 1 : t2, n2) !== t2;
    }, getAlignmentSize: kt, getIndentSize: function(e2, t2) {
      const n2 = e2.lastIndexOf("\n");
      return n2 === -1 ? 0 : kt(e2.slice(n2 + 1).match(/^[\t ]*/)[0], t2);
    }, getPreferredQuote: Pt, printString: function(e2, t2, n2) {
      const r2 = e2.slice(1, -1), o2 = !r2.includes('"') && !r2.includes("'"), u2 = t2.parser === "json" ? '"' : t2.__isInHtmlAttribute ? "'" : Pt(e2, t2.singleQuote ? "'" : '"');
      return n2 ? o2 ? u2 + r2 + u2 : e2 : Ot(r2, u2, !(t2.parser === "css" || t2.parser === "less" || t2.parser === "scss" || t2.embeddedInHtml));
    }, printNumber: function(e2) {
      return e2.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    }, isNodeIgnoreComment: function(e2) {
      return e2.value.trim() === "prettier-ignore";
    }, makeString: Ot, addLeadingComment: function(e2, t2) {
      t2.leading = true, t2.trailing = false, It(e2, t2);
    }, addDanglingComment: function(e2, t2, n2) {
      t2.leading = false, t2.trailing = false, n2 && (t2.marker = n2), It(e2, t2);
    }, addTrailingComment: function(e2, t2) {
      t2.leading = false, t2.trailing = true, It(e2, t2);
    }, isFrontMatterNode: function(e2) {
      return e2 && e2.type === "front-matter";
    }, getShebang: function(e2) {
      if (!e2.startsWith("#!"))
        return "";
      const t2 = e2.indexOf("\n");
      return t2 === -1 ? e2 : e2.slice(0, t2);
    }};
    var Mt = {guessEndOfLine: function(e2) {
      const t2 = e2.indexOf("\r");
      return t2 >= 0 ? e2.charAt(t2 + 1) === "\n" ? "crlf" : "cr" : "lf";
    }, convertEndOfLineToChars: function(e2) {
      switch (e2) {
        case "cr":
          return "\r";
        case "crlf":
          return "\r\n";
        default:
          return "\n";
      }
    }, countEndOfLineChars: function(e2, t2) {
      let n2;
      if (t2 === "\n")
        n2 = /\n/g;
      else if (t2 === "\r")
        n2 = /\r/g;
      else {
        if (t2 !== "\r\n")
          throw new Error('Unexpected "eol" '.concat(JSON.stringify(t2), "."));
        n2 = /\r\n/g;
      }
      const r2 = e2.match(n2);
      return r2 ? r2.length : 0;
    }, normalizeEndOfLine: function(e2) {
      return e2.replace(/\r\n?/g, "\n");
    }};
    const {getStringWidth: jt} = Lt, {convertEndOfLineToChars: _t} = Mt, {concat: Rt, fill: Vt, cursor: $t} = Z;
    let qt;
    function Wt(e2, t2) {
      return Jt(e2, {type: "indent"}, t2);
    }
    function Ut(e2, t2, n2) {
      if (t2 === -1 / 0)
        return e2.root || {value: "", length: 0, queue: []};
      if (t2 < 0)
        return Jt(e2, {type: "dedent"}, n2);
      if (!t2)
        return e2;
      if (t2.type === "root")
        return Object.assign({}, e2, {root: e2});
      return Jt(e2, {type: typeof t2 == "string" ? "stringAlign" : "numberAlign", n: t2}, n2);
    }
    function Jt(e2, t2, n2) {
      const r2 = t2.type === "dedent" ? e2.queue.slice(0, -1) : e2.queue.concat(t2);
      let o2 = "", u2 = 0, i2 = 0, a2 = 0;
      for (const e3 of r2)
        switch (e3.type) {
          case "indent":
            l2(), n2.useTabs ? s2(1) : c2(n2.tabWidth);
            break;
          case "stringAlign":
            l2(), o2 += e3.n, u2 += e3.n.length;
            break;
          case "numberAlign":
            i2 += 1, a2 += e3.n;
            break;
          default:
            throw new Error("Unexpected type '".concat(e3.type, "'"));
        }
      return p2(), Object.assign({}, e2, {value: o2, length: u2, queue: r2});
      function s2(e3) {
        o2 += "	".repeat(e3), u2 += n2.tabWidth * e3;
      }
      function c2(e3) {
        o2 += " ".repeat(e3), u2 += e3;
      }
      function l2() {
        n2.useTabs ? function() {
          i2 > 0 && s2(i2);
          d2();
        }() : p2();
      }
      function p2() {
        a2 > 0 && c2(a2), d2();
      }
      function d2() {
        i2 = 0, a2 = 0;
      }
    }
    function zt(e2) {
      if (e2.length === 0)
        return 0;
      let t2 = 0;
      for (; e2.length > 0 && typeof e2[e2.length - 1] == "string" && e2[e2.length - 1].match(/^[\t ]*$/); )
        t2 += e2.pop().length;
      if (e2.length && typeof e2[e2.length - 1] == "string") {
        const n2 = e2[e2.length - 1].replace(/[\t ]*$/, "");
        t2 += e2[e2.length - 1].length - n2.length, e2[e2.length - 1] = n2;
      }
      return t2;
    }
    function Ht(e2, t2, n2, r2, o2) {
      let u2 = t2.length;
      const i2 = [e2], a2 = [];
      for (; n2 >= 0; ) {
        if (i2.length === 0) {
          if (u2 === 0)
            return true;
          i2.push(t2[u2 - 1]), u2--;
          continue;
        }
        const [e3, s2, c2] = i2.pop();
        if (typeof c2 == "string")
          a2.push(c2), n2 -= jt(c2);
        else
          switch (c2.type) {
            case "concat":
              for (let t3 = c2.parts.length - 1; t3 >= 0; t3--)
                i2.push([e3, s2, c2.parts[t3]]);
              break;
            case "indent":
              i2.push([Wt(e3, r2), s2, c2.contents]);
              break;
            case "align":
              i2.push([Ut(e3, c2.n, r2), s2, c2.contents]);
              break;
            case "trim":
              n2 += zt(a2);
              break;
            case "group":
              if (o2 && c2.break)
                return false;
              i2.push([e3, c2.break ? 1 : s2, c2.contents]), c2.id && (qt[c2.id] = i2[i2.length - 1][1]);
              break;
            case "fill":
              for (let t3 = c2.parts.length - 1; t3 >= 0; t3--)
                i2.push([e3, s2, c2.parts[t3]]);
              break;
            case "if-break": {
              const t3 = c2.groupId ? qt[c2.groupId] : s2;
              t3 === 1 && c2.breakContents && i2.push([e3, s2, c2.breakContents]), t3 === 2 && c2.flatContents && i2.push([e3, s2, c2.flatContents]);
              break;
            }
            case "line":
              switch (s2) {
                case 2:
                  if (!c2.hard) {
                    c2.soft || (a2.push(" "), n2 -= 1);
                    break;
                  }
                  return true;
                case 1:
                  return true;
              }
          }
      }
      return false;
    }
    var Gt = {printDocToString: function(e2, t2) {
      qt = {};
      const n2 = t2.printWidth, r2 = _t(t2.endOfLine);
      let o2 = 0;
      const u2 = [[{value: "", length: 0, queue: []}, 1, e2]], i2 = [];
      let a2 = false, s2 = [];
      for (; u2.length !== 0; ) {
        const [e3, c3, l2] = u2.pop();
        if (typeof l2 == "string") {
          const e4 = r2 !== "\n" && l2.includes("\n") ? l2.replace(/\n/g, r2) : l2;
          i2.push(e4), o2 += jt(e4);
        } else
          switch (l2.type) {
            case "cursor":
              i2.push($t.placeholder);
              break;
            case "concat":
              for (let t3 = l2.parts.length - 1; t3 >= 0; t3--)
                u2.push([e3, c3, l2.parts[t3]]);
              break;
            case "indent":
              u2.push([Wt(e3, t2), c3, l2.contents]);
              break;
            case "align":
              u2.push([Ut(e3, l2.n, t2), c3, l2.contents]);
              break;
            case "trim":
              o2 -= zt(i2);
              break;
            case "group":
              switch (c3) {
                case 2:
                  if (!a2) {
                    u2.push([e3, l2.break ? 1 : 2, l2.contents]);
                    break;
                  }
                case 1: {
                  a2 = false;
                  const r3 = [e3, 2, l2.contents], i3 = n2 - o2;
                  if (!l2.break && Ht(r3, u2, i3, t2))
                    u2.push(r3);
                  else if (l2.expandedStates) {
                    const n3 = l2.expandedStates[l2.expandedStates.length - 1];
                    if (l2.break) {
                      u2.push([e3, 1, n3]);
                      break;
                    }
                    for (let r4 = 1; r4 < l2.expandedStates.length + 1; r4++) {
                      if (r4 >= l2.expandedStates.length) {
                        u2.push([e3, 1, n3]);
                        break;
                      }
                      {
                        const n4 = [e3, 2, l2.expandedStates[r4]];
                        if (Ht(n4, u2, i3, t2)) {
                          u2.push(n4);
                          break;
                        }
                      }
                    }
                  } else
                    u2.push([e3, 1, l2.contents]);
                  break;
                }
              }
              l2.id && (qt[l2.id] = u2[u2.length - 1][1]);
              break;
            case "fill": {
              const r3 = n2 - o2, {parts: i3} = l2;
              if (i3.length === 0)
                break;
              const [a3, s3] = i3, p2 = [e3, 2, a3], d2 = [e3, 1, a3], f2 = Ht(p2, [], r3, t2, true);
              if (i3.length === 1) {
                f2 ? u2.push(p2) : u2.push(d2);
                break;
              }
              const h2 = [e3, 2, s3], m2 = [e3, 1, s3];
              if (i3.length === 2) {
                f2 ? (u2.push(h2), u2.push(p2)) : (u2.push(m2), u2.push(d2));
                break;
              }
              i3.splice(0, 2);
              const g2 = [e3, c3, Vt(i3)], D2 = i3[0];
              Ht([e3, 2, Rt([a3, s3, D2])], [], r3, t2, true) ? (u2.push(g2), u2.push(h2), u2.push(p2)) : f2 ? (u2.push(g2), u2.push(m2), u2.push(p2)) : (u2.push(g2), u2.push(m2), u2.push(d2));
              break;
            }
            case "if-break": {
              const t3 = l2.groupId ? qt[l2.groupId] : c3;
              t3 === 1 && l2.breakContents && u2.push([e3, c3, l2.breakContents]), t3 === 2 && l2.flatContents && u2.push([e3, c3, l2.flatContents]);
              break;
            }
            case "line-suffix":
              s2.push([e3, c3, l2.contents]);
              break;
            case "line-suffix-boundary":
              s2.length > 0 && u2.push([e3, c3, {type: "line", hard: true}]);
              break;
            case "line":
              switch (c3) {
                case 2:
                  if (!l2.hard) {
                    l2.soft || (i2.push(" "), o2 += 1);
                    break;
                  }
                  a2 = true;
                case 1:
                  if (s2.length) {
                    u2.push([e3, c3, l2]), u2.push(...s2.reverse()), s2 = [];
                    break;
                  }
                  l2.literal ? e3.root ? (i2.push(r2, e3.root.value), o2 = e3.root.length) : (i2.push(r2), o2 = 0) : (o2 -= zt(i2), i2.push(r2 + e3.value), o2 = e3.length);
              }
          }
        u2.length === 0 && s2.length && (u2.push(...s2.reverse()), s2 = []);
      }
      const c2 = i2.indexOf($t.placeholder);
      if (c2 !== -1) {
        const e3 = i2.indexOf($t.placeholder, c2 + 1), t3 = i2.slice(0, c2).join(""), n3 = i2.slice(c2 + 1, e3).join("");
        return {formatted: t3 + n3 + i2.slice(e3 + 1).join(""), cursorNodeStart: t3.length, cursorNodeText: n3};
      }
      return {formatted: i2.join("")};
    }};
    const {literalline: Xt, concat: Yt} = Z, Kt = {};
    function Qt(e2, t2, n2, r2) {
      const o2 = [e2];
      for (; o2.length !== 0; ) {
        const e3 = o2.pop();
        if (e3 !== Kt) {
          if (n2 && o2.push(e3, Kt), !t2 || t2(e3) !== false)
            if (e3.type === "concat" || e3.type === "fill")
              for (let t3 = e3.parts.length - 1; t3 >= 0; --t3)
                o2.push(e3.parts[t3]);
            else if (e3.type === "if-break")
              e3.flatContents && o2.push(e3.flatContents), e3.breakContents && o2.push(e3.breakContents);
            else if (e3.type === "group" && e3.expandedStates)
              if (r2)
                for (let t3 = e3.expandedStates.length - 1; t3 >= 0; --t3)
                  o2.push(e3.expandedStates[t3]);
              else
                o2.push(e3.contents);
            else
              e3.contents && o2.push(e3.contents);
        } else
          n2(o2.pop());
      }
    }
    function Zt(e2, t2) {
      if (e2.type === "concat" || e2.type === "fill") {
        const n2 = e2.parts.map((e3) => Zt(e3, t2));
        return t2(Object.assign({}, e2, {parts: n2}));
      }
      if (e2.type === "if-break") {
        const n2 = e2.breakContents && Zt(e2.breakContents, t2), r2 = e2.flatContents && Zt(e2.flatContents, t2);
        return t2(Object.assign({}, e2, {breakContents: n2, flatContents: r2}));
      }
      if (e2.contents) {
        const n2 = Zt(e2.contents, t2);
        return t2(Object.assign({}, e2, {contents: n2}));
      }
      return t2(e2);
    }
    function en(e2, t2, n2) {
      let r2 = n2, o2 = false;
      return Qt(e2, function(e3) {
        const n3 = t2(e3);
        if (n3 !== void 0 && (o2 = true, r2 = n3), o2)
          return false;
      }), r2;
    }
    function tn(e2) {
      return typeof e2 != "string" && (e2.type === "line" || void 0);
    }
    function nn(e2) {
      return !(e2.type !== "group" || !e2.break) || (!(e2.type !== "line" || !e2.hard) || (e2.type === "break-parent" || void 0));
    }
    function rn(e2) {
      if (e2.length > 0) {
        const t2 = e2[e2.length - 1];
        t2.expandedStates || (t2.break = true);
      }
      return null;
    }
    function on(e2) {
      return e2.type !== "line" || e2.hard ? e2.type === "if-break" ? e2.flatContents || "" : e2 : e2.soft ? "" : " ";
    }
    function un(e2) {
      const t2 = [], n2 = e2.filter(Boolean);
      for (; n2.length !== 0; ) {
        const e3 = n2.shift();
        e3 && (e3.type !== "concat" ? t2.length === 0 || typeof t2[t2.length - 1] != "string" || typeof e3 != "string" ? t2.push(e3) : t2[t2.length - 1] += e3 : n2.unshift(...e3.parts));
      }
      return t2;
    }
    function an(e2) {
      if (e2.type === "concat") {
        const t2 = [];
        for (let n2 = 0; n2 < e2.parts.length; ++n2) {
          const r2 = e2.parts[n2];
          if (typeof r2 != "string" && r2.type === "concat")
            t2.push(...an(r2).parts);
          else {
            const e3 = an(r2);
            e3 !== "" && t2.push(e3);
          }
        }
        return Object.assign({}, e2, {parts: t2});
      }
      return e2.type === "if-break" ? Object.assign({}, e2, {breakContents: e2.breakContents != null ? an(e2.breakContents) : null, flatContents: e2.flatContents != null ? an(e2.flatContents) : null}) : e2.type === "group" ? Object.assign({}, e2, {contents: an(e2.contents), expandedStates: e2.expandedStates ? e2.expandedStates.map(an) : e2.expandedStates}) : e2.contents ? Object.assign({}, e2, {contents: an(e2.contents)}) : e2;
    }
    function sn(e2) {
      if (typeof e2 == "string")
        return JSON.stringify(e2);
      if (e2.type === "line")
        return e2.literal ? "literalline" : e2.hard ? "hardline" : e2.soft ? "softline" : "line";
      if (e2.type === "break-parent")
        return "breakParent";
      if (e2.type === "trim")
        return "trim";
      if (e2.type === "concat")
        return "[" + e2.parts.map(sn).join(", ") + "]";
      if (e2.type === "indent")
        return "indent(" + sn(e2.contents) + ")";
      if (e2.type === "align")
        return e2.n === -1 / 0 ? "dedentToRoot(" + sn(e2.contents) + ")" : e2.n < 0 ? "dedent(" + sn(e2.contents) + ")" : e2.n.type === "root" ? "markAsRoot(" + sn(e2.contents) + ")" : "align(" + JSON.stringify(e2.n) + ", " + sn(e2.contents) + ")";
      if (e2.type === "if-break")
        return "ifBreak(" + sn(e2.breakContents) + (e2.flatContents ? ", " + sn(e2.flatContents) : "") + ")";
      if (e2.type === "group")
        return e2.expandedStates ? "conditionalGroup([" + e2.expandedStates.map(sn).join(",") + "])" : (e2.break ? "wrappedGroup" : "group") + "(" + sn(e2.contents) + ")";
      if (e2.type === "fill")
        return "fill(" + e2.parts.map(sn).join(", ") + ")";
      if (e2.type === "line-suffix")
        return "lineSuffix(" + sn(e2.contents) + ")";
      if (e2.type === "line-suffix-boundary")
        return "lineSuffixBoundary";
      throw new Error("Unknown doc type " + e2.type);
    }
    var cn = {builders: Z, printer: Gt, utils: {isEmpty: function(e2) {
      return typeof e2 == "string" && e2.length === 0;
    }, willBreak: function(e2) {
      return en(e2, nn, false);
    }, isLineNext: function(e2) {
      return en(e2, tn, false);
    }, traverseDoc: Qt, findInDoc: en, mapDoc: Zt, propagateBreaks: function(e2) {
      const t2 = new Set(), n2 = [];
      Qt(e2, function(e3) {
        if (e3.type === "break-parent" && rn(n2), e3.type === "group") {
          if (n2.push(e3), t2.has(e3))
            return false;
          t2.add(e3);
        }
      }, function(e3) {
        if (e3.type === "group") {
          n2.pop().break && rn(n2);
        }
      }, true);
    }, removeLines: function(e2) {
      return Zt(e2, on);
    }, stripTrailingHardline: function e2(t2, n2 = false) {
      if (t2.type === "concat" && t2.parts.length !== 0) {
        const r2 = n2 ? function(e3) {
          let t3, {parts: n3} = e3;
          for (let r3 = e3.parts.length; r3 > 0 && !t3; r3--)
            t3 = n3[r3 - 1];
          return t3.type === "group" && (n3 = t3.contents.parts), n3;
        }(t2) : t2.parts, o2 = r2[r2.length - 1];
        if (o2.type === "concat")
          return o2.parts.length === 2 && o2.parts[0].hard && o2.parts[1].type === "break-parent" ? {type: "concat", parts: r2.slice(0, -1)} : {type: "concat", parts: t2.parts.slice(0, -1).concat(e2(o2))};
      }
      return t2;
    }, normalizeParts: un, normalizeDoc: function(e2) {
      return Zt(e2, (e3) => e3.parts ? Object.assign({}, e3, {parts: un(e3.parts)}) : e3);
    }, replaceNewlinesWithLiterallines: function(e2) {
      return Zt(e2, (e3) => typeof e3 == "string" && e3.includes("\n") ? Yt(e3.split(/(\n)/g).map((e4, t2) => t2 % 2 == 0 ? e4 : Xt)) : e3);
    }}, debug: {printDocToDebug: (e2) => sn(an(e2))}};
    const ln = () => false, pn = () => "";
    var dn = {existsSync: ln, readFileSync: pn}, fn = Object.freeze({__proto__: null, existsSync: ln, readFileSync: pn, default: dn});
    function hn(e2) {
      if (typeof e2 != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(e2));
    }
    function mn(e2, t2) {
      for (var n2, r2 = "", o2 = 0, u2 = -1, i2 = 0, a2 = 0; a2 <= e2.length; ++a2) {
        if (a2 < e2.length)
          n2 = e2.charCodeAt(a2);
        else {
          if (n2 === 47)
            break;
          n2 = 47;
        }
        if (n2 === 47) {
          if (u2 === a2 - 1 || i2 === 1)
            ;
          else if (u2 !== a2 - 1 && i2 === 2) {
            if (r2.length < 2 || o2 !== 2 || r2.charCodeAt(r2.length - 1) !== 46 || r2.charCodeAt(r2.length - 2) !== 46) {
              if (r2.length > 2) {
                var s2 = r2.lastIndexOf("/");
                if (s2 !== r2.length - 1) {
                  s2 === -1 ? (r2 = "", o2 = 0) : o2 = (r2 = r2.slice(0, s2)).length - 1 - r2.lastIndexOf("/"), u2 = a2, i2 = 0;
                  continue;
                }
              } else if (r2.length === 2 || r2.length === 1) {
                r2 = "", o2 = 0, u2 = a2, i2 = 0;
                continue;
              }
            }
            t2 && (r2.length > 0 ? r2 += "/.." : r2 = "..", o2 = 2);
          } else
            r2.length > 0 ? r2 += "/" + e2.slice(u2 + 1, a2) : r2 = e2.slice(u2 + 1, a2), o2 = a2 - u2 - 1;
          u2 = a2, i2 = 0;
        } else
          n2 === 46 && i2 !== -1 ? ++i2 : i2 = -1;
      }
      return r2;
    }
    var gn = {resolve: function() {
      for (var e2, t2 = "", n2 = false, r2 = arguments.length - 1; r2 >= -1 && !n2; r2--) {
        var o2;
        r2 >= 0 ? o2 = arguments[r2] : (e2 === void 0 && (e2 = Oe.cwd()), o2 = e2), hn(o2), o2.length !== 0 && (t2 = o2 + "/" + t2, n2 = o2.charCodeAt(0) === 47);
      }
      return t2 = mn(t2, !n2), n2 ? t2.length > 0 ? "/" + t2 : "/" : t2.length > 0 ? t2 : ".";
    }, normalize: function(e2) {
      if (hn(e2), e2.length === 0)
        return ".";
      var t2 = e2.charCodeAt(0) === 47, n2 = e2.charCodeAt(e2.length - 1) === 47;
      return (e2 = mn(e2, !t2)).length !== 0 || t2 || (e2 = "."), e2.length > 0 && n2 && (e2 += "/"), t2 ? "/" + e2 : e2;
    }, isAbsolute: function(e2) {
      return hn(e2), e2.length > 0 && e2.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var e2, t2 = 0; t2 < arguments.length; ++t2) {
        var n2 = arguments[t2];
        hn(n2), n2.length > 0 && (e2 === void 0 ? e2 = n2 : e2 += "/" + n2);
      }
      return e2 === void 0 ? "." : gn.normalize(e2);
    }, relative: function(e2, t2) {
      if (hn(e2), hn(t2), e2 === t2)
        return "";
      if ((e2 = gn.resolve(e2)) === (t2 = gn.resolve(t2)))
        return "";
      for (var n2 = 1; n2 < e2.length && e2.charCodeAt(n2) === 47; ++n2)
        ;
      for (var r2 = e2.length, o2 = r2 - n2, u2 = 1; u2 < t2.length && t2.charCodeAt(u2) === 47; ++u2)
        ;
      for (var i2 = t2.length - u2, a2 = o2 < i2 ? o2 : i2, s2 = -1, c2 = 0; c2 <= a2; ++c2) {
        if (c2 === a2) {
          if (i2 > a2) {
            if (t2.charCodeAt(u2 + c2) === 47)
              return t2.slice(u2 + c2 + 1);
            if (c2 === 0)
              return t2.slice(u2 + c2);
          } else
            o2 > a2 && (e2.charCodeAt(n2 + c2) === 47 ? s2 = c2 : c2 === 0 && (s2 = 0));
          break;
        }
        var l2 = e2.charCodeAt(n2 + c2);
        if (l2 !== t2.charCodeAt(u2 + c2))
          break;
        l2 === 47 && (s2 = c2);
      }
      var p2 = "";
      for (c2 = n2 + s2 + 1; c2 <= r2; ++c2)
        c2 !== r2 && e2.charCodeAt(c2) !== 47 || (p2.length === 0 ? p2 += ".." : p2 += "/..");
      return p2.length > 0 ? p2 + t2.slice(u2 + s2) : (u2 += s2, t2.charCodeAt(u2) === 47 && ++u2, t2.slice(u2));
    }, _makeLong: function(e2) {
      return e2;
    }, dirname: function(e2) {
      if (hn(e2), e2.length === 0)
        return ".";
      for (var t2 = e2.charCodeAt(0), n2 = t2 === 47, r2 = -1, o2 = true, u2 = e2.length - 1; u2 >= 1; --u2)
        if ((t2 = e2.charCodeAt(u2)) === 47) {
          if (!o2) {
            r2 = u2;
            break;
          }
        } else
          o2 = false;
      return r2 === -1 ? n2 ? "/" : "." : n2 && r2 === 1 ? "//" : e2.slice(0, r2);
    }, basename: function(e2, t2) {
      if (t2 !== void 0 && typeof t2 != "string")
        throw new TypeError('"ext" argument must be a string');
      hn(e2);
      var n2, r2 = 0, o2 = -1, u2 = true;
      if (t2 !== void 0 && t2.length > 0 && t2.length <= e2.length) {
        if (t2.length === e2.length && t2 === e2)
          return "";
        var i2 = t2.length - 1, a2 = -1;
        for (n2 = e2.length - 1; n2 >= 0; --n2) {
          var s2 = e2.charCodeAt(n2);
          if (s2 === 47) {
            if (!u2) {
              r2 = n2 + 1;
              break;
            }
          } else
            a2 === -1 && (u2 = false, a2 = n2 + 1), i2 >= 0 && (s2 === t2.charCodeAt(i2) ? --i2 == -1 && (o2 = n2) : (i2 = -1, o2 = a2));
        }
        return r2 === o2 ? o2 = a2 : o2 === -1 && (o2 = e2.length), e2.slice(r2, o2);
      }
      for (n2 = e2.length - 1; n2 >= 0; --n2)
        if (e2.charCodeAt(n2) === 47) {
          if (!u2) {
            r2 = n2 + 1;
            break;
          }
        } else
          o2 === -1 && (u2 = false, o2 = n2 + 1);
      return o2 === -1 ? "" : e2.slice(r2, o2);
    }, extname: function(e2) {
      hn(e2);
      for (var t2 = -1, n2 = 0, r2 = -1, o2 = true, u2 = 0, i2 = e2.length - 1; i2 >= 0; --i2) {
        var a2 = e2.charCodeAt(i2);
        if (a2 !== 47)
          r2 === -1 && (o2 = false, r2 = i2 + 1), a2 === 46 ? t2 === -1 ? t2 = i2 : u2 !== 1 && (u2 = 1) : t2 !== -1 && (u2 = -1);
        else if (!o2) {
          n2 = i2 + 1;
          break;
        }
      }
      return t2 === -1 || r2 === -1 || u2 === 0 || u2 === 1 && t2 === r2 - 1 && t2 === n2 + 1 ? "" : e2.slice(t2, r2);
    }, format: function(e2) {
      if (e2 === null || typeof e2 != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e2);
      return function(e3, t2) {
        var n2 = t2.dir || t2.root, r2 = t2.base || (t2.name || "") + (t2.ext || "");
        return n2 ? n2 === t2.root ? n2 + r2 : n2 + e3 + r2 : r2;
      }("/", e2);
    }, parse: function(e2) {
      hn(e2);
      var t2 = {root: "", dir: "", base: "", ext: "", name: ""};
      if (e2.length === 0)
        return t2;
      var n2, r2 = e2.charCodeAt(0), o2 = r2 === 47;
      o2 ? (t2.root = "/", n2 = 1) : n2 = 0;
      for (var u2 = -1, i2 = 0, a2 = -1, s2 = true, c2 = e2.length - 1, l2 = 0; c2 >= n2; --c2)
        if ((r2 = e2.charCodeAt(c2)) !== 47)
          a2 === -1 && (s2 = false, a2 = c2 + 1), r2 === 46 ? u2 === -1 ? u2 = c2 : l2 !== 1 && (l2 = 1) : u2 !== -1 && (l2 = -1);
        else if (!s2) {
          i2 = c2 + 1;
          break;
        }
      return u2 === -1 || a2 === -1 || l2 === 0 || l2 === 1 && u2 === a2 - 1 && u2 === i2 + 1 ? a2 !== -1 && (t2.base = t2.name = i2 === 0 && o2 ? e2.slice(1, a2) : e2.slice(i2, a2)) : (i2 === 0 && o2 ? (t2.name = e2.slice(1, u2), t2.base = e2.slice(1, a2)) : (t2.name = e2.slice(i2, u2), t2.base = e2.slice(i2, a2)), t2.ext = e2.slice(u2, a2)), i2 > 0 ? t2.dir = e2.slice(0, i2 - 1) : o2 && (t2.dir = "/"), t2;
    }, sep: "/", delimiter: ":", win32: null, posix: null};
    gn.posix = gn;
    var Dn = gn, yn = Object.freeze(Object.assign(Object.create(null), Dn, {default: Dn, __moduleExports: Dn})), En = [], Cn = [], bn = typeof Uint8Array != "undefined" ? Uint8Array : Array, vn = false;
    function An() {
      vn = true;
      for (var e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t2 = 0, n2 = e2.length; t2 < n2; ++t2)
        En[t2] = e2[t2], Cn[e2.charCodeAt(t2)] = t2;
      Cn["-".charCodeAt(0)] = 62, Cn["_".charCodeAt(0)] = 63;
    }
    function Fn(e2, t2, n2) {
      for (var r2, o2, u2 = [], i2 = t2; i2 < n2; i2 += 3)
        r2 = (e2[i2] << 16) + (e2[i2 + 1] << 8) + e2[i2 + 2], u2.push(En[(o2 = r2) >> 18 & 63] + En[o2 >> 12 & 63] + En[o2 >> 6 & 63] + En[63 & o2]);
      return u2.join("");
    }
    function xn(e2) {
      var t2;
      vn || An();
      for (var n2 = e2.length, r2 = n2 % 3, o2 = "", u2 = [], i2 = 16383, a2 = 0, s2 = n2 - r2; a2 < s2; a2 += i2)
        u2.push(Fn(e2, a2, a2 + i2 > s2 ? s2 : a2 + i2));
      return r2 === 1 ? (t2 = e2[n2 - 1], o2 += En[t2 >> 2], o2 += En[t2 << 4 & 63], o2 += "==") : r2 === 2 && (t2 = (e2[n2 - 2] << 8) + e2[n2 - 1], o2 += En[t2 >> 10], o2 += En[t2 >> 4 & 63], o2 += En[t2 << 2 & 63], o2 += "="), u2.push(o2), u2.join("");
    }
    function Sn(e2, t2, n2, r2, o2) {
      var u2, i2, a2 = 8 * o2 - r2 - 1, s2 = (1 << a2) - 1, c2 = s2 >> 1, l2 = -7, p2 = n2 ? o2 - 1 : 0, d2 = n2 ? -1 : 1, f2 = e2[t2 + p2];
      for (p2 += d2, u2 = f2 & (1 << -l2) - 1, f2 >>= -l2, l2 += a2; l2 > 0; u2 = 256 * u2 + e2[t2 + p2], p2 += d2, l2 -= 8)
        ;
      for (i2 = u2 & (1 << -l2) - 1, u2 >>= -l2, l2 += r2; l2 > 0; i2 = 256 * i2 + e2[t2 + p2], p2 += d2, l2 -= 8)
        ;
      if (u2 === 0)
        u2 = 1 - c2;
      else {
        if (u2 === s2)
          return i2 ? NaN : 1 / 0 * (f2 ? -1 : 1);
        i2 += Math.pow(2, r2), u2 -= c2;
      }
      return (f2 ? -1 : 1) * i2 * Math.pow(2, u2 - r2);
    }
    function wn(e2, t2, n2, r2, o2, u2) {
      var i2, a2, s2, c2 = 8 * u2 - o2 - 1, l2 = (1 << c2) - 1, p2 = l2 >> 1, d2 = o2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f2 = r2 ? 0 : u2 - 1, h2 = r2 ? 1 : -1, m2 = t2 < 0 || t2 === 0 && 1 / t2 < 0 ? 1 : 0;
      for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (a2 = isNaN(t2) ? 1 : 0, i2 = l2) : (i2 = Math.floor(Math.log(t2) / Math.LN2), t2 * (s2 = Math.pow(2, -i2)) < 1 && (i2--, s2 *= 2), (t2 += i2 + p2 >= 1 ? d2 / s2 : d2 * Math.pow(2, 1 - p2)) * s2 >= 2 && (i2++, s2 /= 2), i2 + p2 >= l2 ? (a2 = 0, i2 = l2) : i2 + p2 >= 1 ? (a2 = (t2 * s2 - 1) * Math.pow(2, o2), i2 += p2) : (a2 = t2 * Math.pow(2, p2 - 1) * Math.pow(2, o2), i2 = 0)); o2 >= 8; e2[n2 + f2] = 255 & a2, f2 += h2, a2 /= 256, o2 -= 8)
        ;
      for (i2 = i2 << o2 | a2, c2 += o2; c2 > 0; e2[n2 + f2] = 255 & i2, f2 += h2, i2 /= 256, c2 -= 8)
        ;
      e2[n2 + f2 - h2] |= 128 * m2;
    }
    var Tn = {}.toString, Bn = Array.isArray || function(e2) {
      return Tn.call(e2) == "[object Array]";
    };
    function Nn() {
      return Pn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function kn(e2, t2) {
      if (Nn() < t2)
        throw new RangeError("Invalid typed array length");
      return Pn.TYPED_ARRAY_SUPPORT ? (e2 = new Uint8Array(t2)).__proto__ = Pn.prototype : (e2 === null && (e2 = new Pn(t2)), e2.length = t2), e2;
    }
    function Pn(e2, t2, n2) {
      if (!(Pn.TYPED_ARRAY_SUPPORT || this instanceof Pn))
        return new Pn(e2, t2, n2);
      if (typeof e2 == "number") {
        if (typeof t2 == "string")
          throw new Error("If encoding is specified then the first argument must be a string");
        return Ln(this, e2);
      }
      return On(this, e2, t2, n2);
    }
    function On(e2, t2, n2, r2) {
      if (typeof t2 == "number")
        throw new TypeError('"value" argument must not be a number');
      return typeof ArrayBuffer != "undefined" && t2 instanceof ArrayBuffer ? function(e3, t3, n3, r3) {
        if (t3.byteLength, n3 < 0 || t3.byteLength < n3)
          throw new RangeError("'offset' is out of bounds");
        if (t3.byteLength < n3 + (r3 || 0))
          throw new RangeError("'length' is out of bounds");
        t3 = n3 === void 0 && r3 === void 0 ? new Uint8Array(t3) : r3 === void 0 ? new Uint8Array(t3, n3) : new Uint8Array(t3, n3, r3);
        Pn.TYPED_ARRAY_SUPPORT ? (e3 = t3).__proto__ = Pn.prototype : e3 = Mn(e3, t3);
        return e3;
      }(e2, t2, n2, r2) : typeof t2 == "string" ? function(e3, t3, n3) {
        typeof n3 == "string" && n3 !== "" || (n3 = "utf8");
        if (!Pn.isEncoding(n3))
          throw new TypeError('"encoding" must be a valid string encoding');
        var r3 = 0 | Rn(t3, n3), o2 = (e3 = kn(e3, r3)).write(t3, n3);
        o2 !== r3 && (e3 = e3.slice(0, o2));
        return e3;
      }(e2, t2, n2) : function(e3, t3) {
        if (_n(t3)) {
          var n3 = 0 | jn(t3.length);
          return (e3 = kn(e3, n3)).length === 0 || t3.copy(e3, 0, 0, n3), e3;
        }
        if (t3) {
          if (typeof ArrayBuffer != "undefined" && t3.buffer instanceof ArrayBuffer || "length" in t3)
            return typeof t3.length != "number" || (r3 = t3.length) != r3 ? kn(e3, 0) : Mn(e3, t3);
          if (t3.type === "Buffer" && Bn(t3.data))
            return Mn(e3, t3.data);
        }
        var r3;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(e2, t2);
    }
    function In(e2) {
      if (typeof e2 != "number")
        throw new TypeError('"size" argument must be a number');
      if (e2 < 0)
        throw new RangeError('"size" argument must not be negative');
    }
    function Ln(e2, t2) {
      if (In(t2), e2 = kn(e2, t2 < 0 ? 0 : 0 | jn(t2)), !Pn.TYPED_ARRAY_SUPPORT)
        for (var n2 = 0; n2 < t2; ++n2)
          e2[n2] = 0;
      return e2;
    }
    function Mn(e2, t2) {
      var n2 = t2.length < 0 ? 0 : 0 | jn(t2.length);
      e2 = kn(e2, n2);
      for (var r2 = 0; r2 < n2; r2 += 1)
        e2[r2] = 255 & t2[r2];
      return e2;
    }
    function jn(e2) {
      if (e2 >= Nn())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Nn().toString(16) + " bytes");
      return 0 | e2;
    }
    function _n(e2) {
      return !(e2 == null || !e2._isBuffer);
    }
    function Rn(e2, t2) {
      if (_n(e2))
        return e2.length;
      if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e2) || e2 instanceof ArrayBuffer))
        return e2.byteLength;
      typeof e2 != "string" && (e2 = "" + e2);
      var n2 = e2.length;
      if (n2 === 0)
        return 0;
      for (var r2 = false; ; )
        switch (t2) {
          case "ascii":
          case "latin1":
          case "binary":
            return n2;
          case "utf8":
          case "utf-8":
          case void 0:
            return dr(e2).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return 2 * n2;
          case "hex":
            return n2 >>> 1;
          case "base64":
            return fr(e2).length;
          default:
            if (r2)
              return dr(e2).length;
            t2 = ("" + t2).toLowerCase(), r2 = true;
        }
    }
    function Vn(e2, t2, n2) {
      var r2 = false;
      if ((t2 === void 0 || t2 < 0) && (t2 = 0), t2 > this.length)
        return "";
      if ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0)
        return "";
      if ((n2 >>>= 0) <= (t2 >>>= 0))
        return "";
      for (e2 || (e2 = "utf8"); ; )
        switch (e2) {
          case "hex":
            return tr(this, t2, n2);
          case "utf8":
          case "utf-8":
            return Kn(this, t2, n2);
          case "ascii":
            return Zn(this, t2, n2);
          case "latin1":
          case "binary":
            return er(this, t2, n2);
          case "base64":
            return Yn(this, t2, n2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return nr(this, t2, n2);
          default:
            if (r2)
              throw new TypeError("Unknown encoding: " + e2);
            e2 = (e2 + "").toLowerCase(), r2 = true;
        }
    }
    function $n(e2, t2, n2) {
      var r2 = e2[t2];
      e2[t2] = e2[n2], e2[n2] = r2;
    }
    function qn(e2, t2, n2, r2, o2) {
      if (e2.length === 0)
        return -1;
      if (typeof n2 == "string" ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = o2 ? 0 : e2.length - 1), n2 < 0 && (n2 = e2.length + n2), n2 >= e2.length) {
        if (o2)
          return -1;
        n2 = e2.length - 1;
      } else if (n2 < 0) {
        if (!o2)
          return -1;
        n2 = 0;
      }
      if (typeof t2 == "string" && (t2 = Pn.from(t2, r2)), _n(t2))
        return t2.length === 0 ? -1 : Wn(e2, t2, n2, r2, o2);
      if (typeof t2 == "number")
        return t2 &= 255, Pn.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(e2, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e2, t2, n2) : Wn(e2, [t2], n2, r2, o2);
      throw new TypeError("val must be string, number or Buffer");
    }
    function Wn(e2, t2, n2, r2, o2) {
      var u2, i2 = 1, a2 = e2.length, s2 = t2.length;
      if (r2 !== void 0 && ((r2 = String(r2).toLowerCase()) === "ucs2" || r2 === "ucs-2" || r2 === "utf16le" || r2 === "utf-16le")) {
        if (e2.length < 2 || t2.length < 2)
          return -1;
        i2 = 2, a2 /= 2, s2 /= 2, n2 /= 2;
      }
      function c2(e3, t3) {
        return i2 === 1 ? e3[t3] : e3.readUInt16BE(t3 * i2);
      }
      if (o2) {
        var l2 = -1;
        for (u2 = n2; u2 < a2; u2++)
          if (c2(e2, u2) === c2(t2, l2 === -1 ? 0 : u2 - l2)) {
            if (l2 === -1 && (l2 = u2), u2 - l2 + 1 === s2)
              return l2 * i2;
          } else
            l2 !== -1 && (u2 -= u2 - l2), l2 = -1;
      } else
        for (n2 + s2 > a2 && (n2 = a2 - s2), u2 = n2; u2 >= 0; u2--) {
          for (var p2 = true, d2 = 0; d2 < s2; d2++)
            if (c2(e2, u2 + d2) !== c2(t2, d2)) {
              p2 = false;
              break;
            }
          if (p2)
            return u2;
        }
      return -1;
    }
    function Un(e2, t2, n2, r2) {
      n2 = Number(n2) || 0;
      var o2 = e2.length - n2;
      r2 ? (r2 = Number(r2)) > o2 && (r2 = o2) : r2 = o2;
      var u2 = t2.length;
      if (u2 % 2 != 0)
        throw new TypeError("Invalid hex string");
      r2 > u2 / 2 && (r2 = u2 / 2);
      for (var i2 = 0; i2 < r2; ++i2) {
        var a2 = parseInt(t2.substr(2 * i2, 2), 16);
        if (isNaN(a2))
          return i2;
        e2[n2 + i2] = a2;
      }
      return i2;
    }
    function Jn(e2, t2, n2, r2) {
      return hr(dr(t2, e2.length - n2), e2, n2, r2);
    }
    function zn(e2, t2, n2, r2) {
      return hr(function(e3) {
        for (var t3 = [], n3 = 0; n3 < e3.length; ++n3)
          t3.push(255 & e3.charCodeAt(n3));
        return t3;
      }(t2), e2, n2, r2);
    }
    function Hn(e2, t2, n2, r2) {
      return zn(e2, t2, n2, r2);
    }
    function Gn(e2, t2, n2, r2) {
      return hr(fr(t2), e2, n2, r2);
    }
    function Xn(e2, t2, n2, r2) {
      return hr(function(e3, t3) {
        for (var n3, r3, o2, u2 = [], i2 = 0; i2 < e3.length && !((t3 -= 2) < 0); ++i2)
          r3 = (n3 = e3.charCodeAt(i2)) >> 8, o2 = n3 % 256, u2.push(o2), u2.push(r3);
        return u2;
      }(t2, e2.length - n2), e2, n2, r2);
    }
    function Yn(e2, t2, n2) {
      return t2 === 0 && n2 === e2.length ? xn(e2) : xn(e2.slice(t2, n2));
    }
    function Kn(e2, t2, n2) {
      n2 = Math.min(e2.length, n2);
      for (var r2 = [], o2 = t2; o2 < n2; ) {
        var u2, i2, a2, s2, c2 = e2[o2], l2 = null, p2 = c2 > 239 ? 4 : c2 > 223 ? 3 : c2 > 191 ? 2 : 1;
        if (o2 + p2 <= n2)
          switch (p2) {
            case 1:
              c2 < 128 && (l2 = c2);
              break;
            case 2:
              (192 & (u2 = e2[o2 + 1])) == 128 && (s2 = (31 & c2) << 6 | 63 & u2) > 127 && (l2 = s2);
              break;
            case 3:
              u2 = e2[o2 + 1], i2 = e2[o2 + 2], (192 & u2) == 128 && (192 & i2) == 128 && (s2 = (15 & c2) << 12 | (63 & u2) << 6 | 63 & i2) > 2047 && (s2 < 55296 || s2 > 57343) && (l2 = s2);
              break;
            case 4:
              u2 = e2[o2 + 1], i2 = e2[o2 + 2], a2 = e2[o2 + 3], (192 & u2) == 128 && (192 & i2) == 128 && (192 & a2) == 128 && (s2 = (15 & c2) << 18 | (63 & u2) << 12 | (63 & i2) << 6 | 63 & a2) > 65535 && s2 < 1114112 && (l2 = s2);
          }
        l2 === null ? (l2 = 65533, p2 = 1) : l2 > 65535 && (l2 -= 65536, r2.push(l2 >>> 10 & 1023 | 55296), l2 = 56320 | 1023 & l2), r2.push(l2), o2 += p2;
      }
      return function(e3) {
        var t3 = e3.length;
        if (t3 <= Qn)
          return String.fromCharCode.apply(String, e3);
        var n3 = "", r3 = 0;
        for (; r3 < t3; )
          n3 += String.fromCharCode.apply(String, e3.slice(r3, r3 += Qn));
        return n3;
      }(r2);
    }
    Pn.TYPED_ARRAY_SUPPORT = ce.TYPED_ARRAY_SUPPORT === void 0 || ce.TYPED_ARRAY_SUPPORT, Pn.poolSize = 8192, Pn._augment = function(e2) {
      return e2.__proto__ = Pn.prototype, e2;
    }, Pn.from = function(e2, t2, n2) {
      return On(null, e2, t2, n2);
    }, Pn.TYPED_ARRAY_SUPPORT && (Pn.prototype.__proto__ = Uint8Array.prototype, Pn.__proto__ = Uint8Array), Pn.alloc = function(e2, t2, n2) {
      return function(e3, t3, n3, r2) {
        return In(t3), t3 <= 0 ? kn(e3, t3) : n3 !== void 0 ? typeof r2 == "string" ? kn(e3, t3).fill(n3, r2) : kn(e3, t3).fill(n3) : kn(e3, t3);
      }(null, e2, t2, n2);
    }, Pn.allocUnsafe = function(e2) {
      return Ln(null, e2);
    }, Pn.allocUnsafeSlow = function(e2) {
      return Ln(null, e2);
    }, Pn.isBuffer = function(e2) {
      return e2 != null && (!!e2._isBuffer || mr(e2) || function(e3) {
        return typeof e3.readFloatLE == "function" && typeof e3.slice == "function" && mr(e3.slice(0, 0));
      }(e2));
    }, Pn.compare = function(e2, t2) {
      if (!_n(e2) || !_n(t2))
        throw new TypeError("Arguments must be Buffers");
      if (e2 === t2)
        return 0;
      for (var n2 = e2.length, r2 = t2.length, o2 = 0, u2 = Math.min(n2, r2); o2 < u2; ++o2)
        if (e2[o2] !== t2[o2]) {
          n2 = e2[o2], r2 = t2[o2];
          break;
        }
      return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
    }, Pn.isEncoding = function(e2) {
      switch (String(e2).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, Pn.concat = function(e2, t2) {
      if (!Bn(e2))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (e2.length === 0)
        return Pn.alloc(0);
      var n2;
      if (t2 === void 0)
        for (t2 = 0, n2 = 0; n2 < e2.length; ++n2)
          t2 += e2[n2].length;
      var r2 = Pn.allocUnsafe(t2), o2 = 0;
      for (n2 = 0; n2 < e2.length; ++n2) {
        var u2 = e2[n2];
        if (!_n(u2))
          throw new TypeError('"list" argument must be an Array of Buffers');
        u2.copy(r2, o2), o2 += u2.length;
      }
      return r2;
    }, Pn.byteLength = Rn, Pn.prototype._isBuffer = true, Pn.prototype.swap16 = function() {
      var e2 = this.length;
      if (e2 % 2 != 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t2 = 0; t2 < e2; t2 += 2)
        $n(this, t2, t2 + 1);
      return this;
    }, Pn.prototype.swap32 = function() {
      var e2 = this.length;
      if (e2 % 4 != 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t2 = 0; t2 < e2; t2 += 4)
        $n(this, t2, t2 + 3), $n(this, t2 + 1, t2 + 2);
      return this;
    }, Pn.prototype.swap64 = function() {
      var e2 = this.length;
      if (e2 % 8 != 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t2 = 0; t2 < e2; t2 += 8)
        $n(this, t2, t2 + 7), $n(this, t2 + 1, t2 + 6), $n(this, t2 + 2, t2 + 5), $n(this, t2 + 3, t2 + 4);
      return this;
    }, Pn.prototype.toString = function() {
      var e2 = 0 | this.length;
      return e2 === 0 ? "" : arguments.length === 0 ? Kn(this, 0, e2) : Vn.apply(this, arguments);
    }, Pn.prototype.equals = function(e2) {
      if (!_n(e2))
        throw new TypeError("Argument must be a Buffer");
      return this === e2 || Pn.compare(this, e2) === 0;
    }, Pn.prototype.inspect = function() {
      var e2 = "";
      return this.length > 0 && (e2 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e2 += " ... ")), "<Buffer " + e2 + ">";
    }, Pn.prototype.compare = function(e2, t2, n2, r2, o2) {
      if (!_n(e2))
        throw new TypeError("Argument must be a Buffer");
      if (t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = e2 ? e2.length : 0), r2 === void 0 && (r2 = 0), o2 === void 0 && (o2 = this.length), t2 < 0 || n2 > e2.length || r2 < 0 || o2 > this.length)
        throw new RangeError("out of range index");
      if (r2 >= o2 && t2 >= n2)
        return 0;
      if (r2 >= o2)
        return -1;
      if (t2 >= n2)
        return 1;
      if (this === e2)
        return 0;
      for (var u2 = (o2 >>>= 0) - (r2 >>>= 0), i2 = (n2 >>>= 0) - (t2 >>>= 0), a2 = Math.min(u2, i2), s2 = this.slice(r2, o2), c2 = e2.slice(t2, n2), l2 = 0; l2 < a2; ++l2)
        if (s2[l2] !== c2[l2]) {
          u2 = s2[l2], i2 = c2[l2];
          break;
        }
      return u2 < i2 ? -1 : i2 < u2 ? 1 : 0;
    }, Pn.prototype.includes = function(e2, t2, n2) {
      return this.indexOf(e2, t2, n2) !== -1;
    }, Pn.prototype.indexOf = function(e2, t2, n2) {
      return qn(this, e2, t2, n2, true);
    }, Pn.prototype.lastIndexOf = function(e2, t2, n2) {
      return qn(this, e2, t2, n2, false);
    }, Pn.prototype.write = function(e2, t2, n2, r2) {
      if (t2 === void 0)
        r2 = "utf8", n2 = this.length, t2 = 0;
      else if (n2 === void 0 && typeof t2 == "string")
        r2 = t2, n2 = this.length, t2 = 0;
      else {
        if (!isFinite(t2))
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t2 |= 0, isFinite(n2) ? (n2 |= 0, r2 === void 0 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
      }
      var o2 = this.length - t2;
      if ((n2 === void 0 || n2 > o2) && (n2 = o2), e2.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      r2 || (r2 = "utf8");
      for (var u2 = false; ; )
        switch (r2) {
          case "hex":
            return Un(this, e2, t2, n2);
          case "utf8":
          case "utf-8":
            return Jn(this, e2, t2, n2);
          case "ascii":
            return zn(this, e2, t2, n2);
          case "latin1":
          case "binary":
            return Hn(this, e2, t2, n2);
          case "base64":
            return Gn(this, e2, t2, n2);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Xn(this, e2, t2, n2);
          default:
            if (u2)
              throw new TypeError("Unknown encoding: " + r2);
            r2 = ("" + r2).toLowerCase(), u2 = true;
        }
    }, Pn.prototype.toJSON = function() {
      return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)};
    };
    var Qn = 4096;
    function Zn(e2, t2, n2) {
      var r2 = "";
      n2 = Math.min(e2.length, n2);
      for (var o2 = t2; o2 < n2; ++o2)
        r2 += String.fromCharCode(127 & e2[o2]);
      return r2;
    }
    function er(e2, t2, n2) {
      var r2 = "";
      n2 = Math.min(e2.length, n2);
      for (var o2 = t2; o2 < n2; ++o2)
        r2 += String.fromCharCode(e2[o2]);
      return r2;
    }
    function tr(e2, t2, n2) {
      var r2 = e2.length;
      (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
      for (var o2 = "", u2 = t2; u2 < n2; ++u2)
        o2 += pr(e2[u2]);
      return o2;
    }
    function nr(e2, t2, n2) {
      for (var r2 = e2.slice(t2, n2), o2 = "", u2 = 0; u2 < r2.length; u2 += 2)
        o2 += String.fromCharCode(r2[u2] + 256 * r2[u2 + 1]);
      return o2;
    }
    function rr(e2, t2, n2) {
      if (e2 % 1 != 0 || e2 < 0)
        throw new RangeError("offset is not uint");
      if (e2 + t2 > n2)
        throw new RangeError("Trying to access beyond buffer length");
    }
    function or(e2, t2, n2, r2, o2, u2) {
      if (!_n(e2))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t2 > o2 || t2 < u2)
        throw new RangeError('"value" argument is out of bounds');
      if (n2 + r2 > e2.length)
        throw new RangeError("Index out of range");
    }
    function ur(e2, t2, n2, r2) {
      t2 < 0 && (t2 = 65535 + t2 + 1);
      for (var o2 = 0, u2 = Math.min(e2.length - n2, 2); o2 < u2; ++o2)
        e2[n2 + o2] = (t2 & 255 << 8 * (r2 ? o2 : 1 - o2)) >>> 8 * (r2 ? o2 : 1 - o2);
    }
    function ir(e2, t2, n2, r2) {
      t2 < 0 && (t2 = 4294967295 + t2 + 1);
      for (var o2 = 0, u2 = Math.min(e2.length - n2, 4); o2 < u2; ++o2)
        e2[n2 + o2] = t2 >>> 8 * (r2 ? o2 : 3 - o2) & 255;
    }
    function ar(e2, t2, n2, r2, o2, u2) {
      if (n2 + r2 > e2.length)
        throw new RangeError("Index out of range");
      if (n2 < 0)
        throw new RangeError("Index out of range");
    }
    function sr(e2, t2, n2, r2, o2) {
      return o2 || ar(e2, 0, n2, 4), wn(e2, t2, n2, r2, 23, 4), n2 + 4;
    }
    function cr(e2, t2, n2, r2, o2) {
      return o2 || ar(e2, 0, n2, 8), wn(e2, t2, n2, r2, 52, 8), n2 + 8;
    }
    Pn.prototype.slice = function(e2, t2) {
      var n2, r2 = this.length;
      if ((e2 = ~~e2) < 0 ? (e2 += r2) < 0 && (e2 = 0) : e2 > r2 && (e2 = r2), (t2 = t2 === void 0 ? r2 : ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), t2 < e2 && (t2 = e2), Pn.TYPED_ARRAY_SUPPORT)
        (n2 = this.subarray(e2, t2)).__proto__ = Pn.prototype;
      else {
        var o2 = t2 - e2;
        n2 = new Pn(o2, void 0);
        for (var u2 = 0; u2 < o2; ++u2)
          n2[u2] = this[u2 + e2];
      }
      return n2;
    }, Pn.prototype.readUIntLE = function(e2, t2, n2) {
      e2 |= 0, t2 |= 0, n2 || rr(e2, t2, this.length);
      for (var r2 = this[e2], o2 = 1, u2 = 0; ++u2 < t2 && (o2 *= 256); )
        r2 += this[e2 + u2] * o2;
      return r2;
    }, Pn.prototype.readUIntBE = function(e2, t2, n2) {
      e2 |= 0, t2 |= 0, n2 || rr(e2, t2, this.length);
      for (var r2 = this[e2 + --t2], o2 = 1; t2 > 0 && (o2 *= 256); )
        r2 += this[e2 + --t2] * o2;
      return r2;
    }, Pn.prototype.readUInt8 = function(e2, t2) {
      return t2 || rr(e2, 1, this.length), this[e2];
    }, Pn.prototype.readUInt16LE = function(e2, t2) {
      return t2 || rr(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
    }, Pn.prototype.readUInt16BE = function(e2, t2) {
      return t2 || rr(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
    }, Pn.prototype.readUInt32LE = function(e2, t2) {
      return t2 || rr(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + 16777216 * this[e2 + 3];
    }, Pn.prototype.readUInt32BE = function(e2, t2) {
      return t2 || rr(e2, 4, this.length), 16777216 * this[e2] + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
    }, Pn.prototype.readIntLE = function(e2, t2, n2) {
      e2 |= 0, t2 |= 0, n2 || rr(e2, t2, this.length);
      for (var r2 = this[e2], o2 = 1, u2 = 0; ++u2 < t2 && (o2 *= 256); )
        r2 += this[e2 + u2] * o2;
      return r2 >= (o2 *= 128) && (r2 -= Math.pow(2, 8 * t2)), r2;
    }, Pn.prototype.readIntBE = function(e2, t2, n2) {
      e2 |= 0, t2 |= 0, n2 || rr(e2, t2, this.length);
      for (var r2 = t2, o2 = 1, u2 = this[e2 + --r2]; r2 > 0 && (o2 *= 256); )
        u2 += this[e2 + --r2] * o2;
      return u2 >= (o2 *= 128) && (u2 -= Math.pow(2, 8 * t2)), u2;
    }, Pn.prototype.readInt8 = function(e2, t2) {
      return t2 || rr(e2, 1, this.length), 128 & this[e2] ? -1 * (255 - this[e2] + 1) : this[e2];
    }, Pn.prototype.readInt16LE = function(e2, t2) {
      t2 || rr(e2, 2, this.length);
      var n2 = this[e2] | this[e2 + 1] << 8;
      return 32768 & n2 ? 4294901760 | n2 : n2;
    }, Pn.prototype.readInt16BE = function(e2, t2) {
      t2 || rr(e2, 2, this.length);
      var n2 = this[e2 + 1] | this[e2] << 8;
      return 32768 & n2 ? 4294901760 | n2 : n2;
    }, Pn.prototype.readInt32LE = function(e2, t2) {
      return t2 || rr(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
    }, Pn.prototype.readInt32BE = function(e2, t2) {
      return t2 || rr(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
    }, Pn.prototype.readFloatLE = function(e2, t2) {
      return t2 || rr(e2, 4, this.length), Sn(this, e2, true, 23, 4);
    }, Pn.prototype.readFloatBE = function(e2, t2) {
      return t2 || rr(e2, 4, this.length), Sn(this, e2, false, 23, 4);
    }, Pn.prototype.readDoubleLE = function(e2, t2) {
      return t2 || rr(e2, 8, this.length), Sn(this, e2, true, 52, 8);
    }, Pn.prototype.readDoubleBE = function(e2, t2) {
      return t2 || rr(e2, 8, this.length), Sn(this, e2, false, 52, 8);
    }, Pn.prototype.writeUIntLE = function(e2, t2, n2, r2) {
      (e2 = +e2, t2 |= 0, n2 |= 0, r2) || or(this, e2, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
      var o2 = 1, u2 = 0;
      for (this[t2] = 255 & e2; ++u2 < n2 && (o2 *= 256); )
        this[t2 + u2] = e2 / o2 & 255;
      return t2 + n2;
    }, Pn.prototype.writeUIntBE = function(e2, t2, n2, r2) {
      (e2 = +e2, t2 |= 0, n2 |= 0, r2) || or(this, e2, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
      var o2 = n2 - 1, u2 = 1;
      for (this[t2 + o2] = 255 & e2; --o2 >= 0 && (u2 *= 256); )
        this[t2 + o2] = e2 / u2 & 255;
      return t2 + n2;
    }, Pn.prototype.writeUInt8 = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 1, 255, 0), Pn.TYPED_ARRAY_SUPPORT || (e2 = Math.floor(e2)), this[t2] = 255 & e2, t2 + 1;
    }, Pn.prototype.writeUInt16LE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e2, this[t2 + 1] = e2 >>> 8) : ur(this, e2, t2, true), t2 + 2;
    }, Pn.prototype.writeUInt16BE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 8, this[t2 + 1] = 255 & e2) : ur(this, e2, t2, false), t2 + 2;
    }, Pn.prototype.writeUInt32LE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e2 >>> 24, this[t2 + 2] = e2 >>> 16, this[t2 + 1] = e2 >>> 8, this[t2] = 255 & e2) : ir(this, e2, t2, true), t2 + 4;
    }, Pn.prototype.writeUInt32BE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 24, this[t2 + 1] = e2 >>> 16, this[t2 + 2] = e2 >>> 8, this[t2 + 3] = 255 & e2) : ir(this, e2, t2, false), t2 + 4;
    }, Pn.prototype.writeIntLE = function(e2, t2, n2, r2) {
      if (e2 = +e2, t2 |= 0, !r2) {
        var o2 = Math.pow(2, 8 * n2 - 1);
        or(this, e2, t2, n2, o2 - 1, -o2);
      }
      var u2 = 0, i2 = 1, a2 = 0;
      for (this[t2] = 255 & e2; ++u2 < n2 && (i2 *= 256); )
        e2 < 0 && a2 === 0 && this[t2 + u2 - 1] !== 0 && (a2 = 1), this[t2 + u2] = (e2 / i2 >> 0) - a2 & 255;
      return t2 + n2;
    }, Pn.prototype.writeIntBE = function(e2, t2, n2, r2) {
      if (e2 = +e2, t2 |= 0, !r2) {
        var o2 = Math.pow(2, 8 * n2 - 1);
        or(this, e2, t2, n2, o2 - 1, -o2);
      }
      var u2 = n2 - 1, i2 = 1, a2 = 0;
      for (this[t2 + u2] = 255 & e2; --u2 >= 0 && (i2 *= 256); )
        e2 < 0 && a2 === 0 && this[t2 + u2 + 1] !== 0 && (a2 = 1), this[t2 + u2] = (e2 / i2 >> 0) - a2 & 255;
      return t2 + n2;
    }, Pn.prototype.writeInt8 = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 1, 127, -128), Pn.TYPED_ARRAY_SUPPORT || (e2 = Math.floor(e2)), e2 < 0 && (e2 = 255 + e2 + 1), this[t2] = 255 & e2, t2 + 1;
    }, Pn.prototype.writeInt16LE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e2, this[t2 + 1] = e2 >>> 8) : ur(this, e2, t2, true), t2 + 2;
    }, Pn.prototype.writeInt16BE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 8, this[t2 + 1] = 255 & e2) : ur(this, e2, t2, false), t2 + 2;
    }, Pn.prototype.writeInt32LE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 4, 2147483647, -2147483648), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e2, this[t2 + 1] = e2 >>> 8, this[t2 + 2] = e2 >>> 16, this[t2 + 3] = e2 >>> 24) : ir(this, e2, t2, true), t2 + 4;
    }, Pn.prototype.writeInt32BE = function(e2, t2, n2) {
      return e2 = +e2, t2 |= 0, n2 || or(this, e2, t2, 4, 2147483647, -2147483648), e2 < 0 && (e2 = 4294967295 + e2 + 1), Pn.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 24, this[t2 + 1] = e2 >>> 16, this[t2 + 2] = e2 >>> 8, this[t2 + 3] = 255 & e2) : ir(this, e2, t2, false), t2 + 4;
    }, Pn.prototype.writeFloatLE = function(e2, t2, n2) {
      return sr(this, e2, t2, true, n2);
    }, Pn.prototype.writeFloatBE = function(e2, t2, n2) {
      return sr(this, e2, t2, false, n2);
    }, Pn.prototype.writeDoubleLE = function(e2, t2, n2) {
      return cr(this, e2, t2, true, n2);
    }, Pn.prototype.writeDoubleBE = function(e2, t2, n2) {
      return cr(this, e2, t2, false, n2);
    }, Pn.prototype.copy = function(e2, t2, n2, r2) {
      if (n2 || (n2 = 0), r2 || r2 === 0 || (r2 = this.length), t2 >= e2.length && (t2 = e2.length), t2 || (t2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2)
        return 0;
      if (e2.length === 0 || this.length === 0)
        return 0;
      if (t2 < 0)
        throw new RangeError("targetStart out of bounds");
      if (n2 < 0 || n2 >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (r2 < 0)
        throw new RangeError("sourceEnd out of bounds");
      r2 > this.length && (r2 = this.length), e2.length - t2 < r2 - n2 && (r2 = e2.length - t2 + n2);
      var o2, u2 = r2 - n2;
      if (this === e2 && n2 < t2 && t2 < r2)
        for (o2 = u2 - 1; o2 >= 0; --o2)
          e2[o2 + t2] = this[o2 + n2];
      else if (u2 < 1e3 || !Pn.TYPED_ARRAY_SUPPORT)
        for (o2 = 0; o2 < u2; ++o2)
          e2[o2 + t2] = this[o2 + n2];
      else
        Uint8Array.prototype.set.call(e2, this.subarray(n2, n2 + u2), t2);
      return u2;
    }, Pn.prototype.fill = function(e2, t2, n2, r2) {
      if (typeof e2 == "string") {
        if (typeof t2 == "string" ? (r2 = t2, t2 = 0, n2 = this.length) : typeof n2 == "string" && (r2 = n2, n2 = this.length), e2.length === 1) {
          var o2 = e2.charCodeAt(0);
          o2 < 256 && (e2 = o2);
        }
        if (r2 !== void 0 && typeof r2 != "string")
          throw new TypeError("encoding must be a string");
        if (typeof r2 == "string" && !Pn.isEncoding(r2))
          throw new TypeError("Unknown encoding: " + r2);
      } else
        typeof e2 == "number" && (e2 &= 255);
      if (t2 < 0 || this.length < t2 || this.length < n2)
        throw new RangeError("Out of range index");
      if (n2 <= t2)
        return this;
      var u2;
      if (t2 >>>= 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, e2 || (e2 = 0), typeof e2 == "number")
        for (u2 = t2; u2 < n2; ++u2)
          this[u2] = e2;
      else {
        var i2 = _n(e2) ? e2 : dr(new Pn(e2, r2).toString()), a2 = i2.length;
        for (u2 = 0; u2 < n2 - t2; ++u2)
          this[u2 + t2] = i2[u2 % a2];
      }
      return this;
    };
    var lr = /[^+\/0-9A-Za-z-_]/g;
    function pr(e2) {
      return e2 < 16 ? "0" + e2.toString(16) : e2.toString(16);
    }
    function dr(e2, t2) {
      var n2;
      t2 = t2 || 1 / 0;
      for (var r2 = e2.length, o2 = null, u2 = [], i2 = 0; i2 < r2; ++i2) {
        if ((n2 = e2.charCodeAt(i2)) > 55295 && n2 < 57344) {
          if (!o2) {
            if (n2 > 56319) {
              (t2 -= 3) > -1 && u2.push(239, 191, 189);
              continue;
            }
            if (i2 + 1 === r2) {
              (t2 -= 3) > -1 && u2.push(239, 191, 189);
              continue;
            }
            o2 = n2;
            continue;
          }
          if (n2 < 56320) {
            (t2 -= 3) > -1 && u2.push(239, 191, 189), o2 = n2;
            continue;
          }
          n2 = 65536 + (o2 - 55296 << 10 | n2 - 56320);
        } else
          o2 && (t2 -= 3) > -1 && u2.push(239, 191, 189);
        if (o2 = null, n2 < 128) {
          if ((t2 -= 1) < 0)
            break;
          u2.push(n2);
        } else if (n2 < 2048) {
          if ((t2 -= 2) < 0)
            break;
          u2.push(n2 >> 6 | 192, 63 & n2 | 128);
        } else if (n2 < 65536) {
          if ((t2 -= 3) < 0)
            break;
          u2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
        } else {
          if (!(n2 < 1114112))
            throw new Error("Invalid code point");
          if ((t2 -= 4) < 0)
            break;
          u2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
        }
      }
      return u2;
    }
    function fr(e2) {
      return function(e3) {
        var t2, n2, r2, o2, u2, i2;
        vn || An();
        var a2 = e3.length;
        if (a2 % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        u2 = e3[a2 - 2] === "=" ? 2 : e3[a2 - 1] === "=" ? 1 : 0, i2 = new bn(3 * a2 / 4 - u2), r2 = u2 > 0 ? a2 - 4 : a2;
        var s2 = 0;
        for (t2 = 0, n2 = 0; t2 < r2; t2 += 4, n2 += 3)
          o2 = Cn[e3.charCodeAt(t2)] << 18 | Cn[e3.charCodeAt(t2 + 1)] << 12 | Cn[e3.charCodeAt(t2 + 2)] << 6 | Cn[e3.charCodeAt(t2 + 3)], i2[s2++] = o2 >> 16 & 255, i2[s2++] = o2 >> 8 & 255, i2[s2++] = 255 & o2;
        return u2 === 2 ? (o2 = Cn[e3.charCodeAt(t2)] << 2 | Cn[e3.charCodeAt(t2 + 1)] >> 4, i2[s2++] = 255 & o2) : u2 === 1 && (o2 = Cn[e3.charCodeAt(t2)] << 10 | Cn[e3.charCodeAt(t2 + 1)] << 4 | Cn[e3.charCodeAt(t2 + 2)] >> 2, i2[s2++] = o2 >> 8 & 255, i2[s2++] = 255 & o2), i2;
      }(function(e3) {
        if ((e3 = function(e4) {
          return e4.trim ? e4.trim() : e4.replace(/^\s+|\s+$/g, "");
        }(e3).replace(lr, "")).length < 2)
          return "";
        for (; e3.length % 4 != 0; )
          e3 += "=";
        return e3;
      }(e2));
    }
    function hr(e2, t2, n2, r2) {
      for (var o2 = 0; o2 < r2 && !(o2 + n2 >= t2.length || o2 >= e2.length); ++o2)
        t2[o2 + n2] = e2[o2];
      return o2;
    }
    function mr(e2) {
      return !!e2.constructor && typeof e2.constructor.isBuffer == "function" && e2.constructor.isBuffer(e2);
    }
    var gr = _e(fn);
    var Dr = class {
      constructor(e2, t2) {
        (t2 = t2 || {}).readChunk || (t2.readChunk = 1024), t2.newLineCharacter ? t2.newLineCharacter = t2.newLineCharacter.charCodeAt(0) : t2.newLineCharacter = 10, this.fd = typeof e2 == "number" ? e2 : gr.openSync(e2, "r"), this.options = t2, this.newLineCharacter = t2.newLineCharacter, this.reset();
      }
      _searchInBuffer(e2, t2) {
        let n2 = -1;
        for (let r2 = 0; r2 <= e2.length; r2++) {
          if (e2[r2] === t2) {
            n2 = r2;
            break;
          }
        }
        return n2;
      }
      reset() {
        this.eofReached = false, this.linesCache = [], this.fdPosition = 0;
      }
      close() {
        gr.closeSync(this.fd), this.fd = null;
      }
      _extractLines(e2) {
        let t2;
        const n2 = [];
        let r2 = 0, o2 = 0;
        for (; ; ) {
          let u3 = e2[r2++];
          if (u3 === this.newLineCharacter)
            t2 = e2.slice(o2, r2), n2.push(t2), o2 = r2;
          else if (u3 === void 0)
            break;
        }
        let u2 = e2.slice(o2, r2);
        return u2.length && n2.push(u2), n2;
      }
      _readChunk(e2) {
        let t2, n2 = 0;
        const r2 = [];
        do {
          const e3 = new Pn(this.options.readChunk);
          t2 = gr.readSync(this.fd, e3, 0, this.options.readChunk, this.fdPosition), n2 += t2, this.fdPosition = this.fdPosition + t2, r2.push(e3);
        } while (t2 && this._searchInBuffer(r2[r2.length - 1], this.options.newLineCharacter) === -1);
        let o2 = Pn.concat(r2);
        return t2 < this.options.readChunk && (this.eofReached = true, o2 = o2.slice(0, n2)), n2 && (this.linesCache = this._extractLines(o2), e2 && (this.linesCache[0] = Pn.concat([e2, this.linesCache[0]]))), n2;
      }
      next() {
        if (!this.fd)
          return false;
        let e2, t2 = false;
        if (this.eofReached && this.linesCache.length === 0)
          return t2;
        if (this.linesCache.length || (e2 = this._readChunk()), this.linesCache.length) {
          t2 = this.linesCache.shift();
          t2[t2.length - 1] !== this.newLineCharacter && (e2 = this._readChunk(t2), e2 && (t2 = this.linesCache.shift()));
        }
        return this.eofReached && this.linesCache.length === 0 && this.close(), t2 && t2[t2.length - 1] === this.newLineCharacter && (t2 = t2.slice(0, t2.length - 1)), t2;
      }
    };
    var yr = function(e2) {
      for (var t2 = -1, n2 = e2 == null ? 0 : e2.length, r2 = {}; ++t2 < n2; ) {
        var o2 = e2[t2];
        r2[o2[0]] = o2[1];
      }
      return r2;
    };
    class Er extends Error {
    }
    class Cr extends Error {
    }
    class br extends Error {
    }
    var vr = {ConfigError: Er, DebugError: Cr, UndefinedParserError: br}, Ar = function(e2, t2) {
      return (Ar = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(e3, t3) {
        e3.__proto__ = t3;
      } || function(e3, t3) {
        for (var n2 in t3)
          t3.hasOwnProperty(n2) && (e3[n2] = t3[n2]);
      })(e2, t2);
    };
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
    
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
    
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    var Fr = function() {
      return (Fr = Object.assign || function(e2) {
        for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
          for (var o2 in t2 = arguments[n2])
            Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
        return e2;
      }).apply(this, arguments);
    };
    function xr(e2) {
      var t2 = typeof Symbol == "function" && Symbol.iterator, n2 = t2 && e2[t2], r2 = 0;
      if (n2)
        return n2.call(e2);
      if (e2 && typeof e2.length == "number")
        return {next: function() {
          return e2 && r2 >= e2.length && (e2 = void 0), {value: e2 && e2[r2++], done: !e2};
        }};
      throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function Sr(e2, t2) {
      var n2 = typeof Symbol == "function" && e2[Symbol.iterator];
      if (!n2)
        return e2;
      var r2, o2, u2 = n2.call(e2), i2 = [];
      try {
        for (; (t2 === void 0 || t2-- > 0) && !(r2 = u2.next()).done; )
          i2.push(r2.value);
      } catch (e3) {
        o2 = {error: e3};
      } finally {
        try {
          r2 && !r2.done && (n2 = u2.return) && n2.call(u2);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
      return i2;
    }
    function wr(e2) {
      return this instanceof wr ? (this.v = e2, this) : new wr(e2);
    }
    var Tr = Object.freeze({__proto__: null, __extends: function(e2, t2) {
      function n2() {
        this.constructor = e2;
      }
      Ar(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
    }, get __assign() {
      return Fr;
    }, __rest: function(e2, t2) {
      var n2 = {};
      for (var r2 in e2)
        Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
      if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
        var o2 = 0;
        for (r2 = Object.getOwnPropertySymbols(e2); o2 < r2.length; o2++)
          t2.indexOf(r2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[o2]) && (n2[r2[o2]] = e2[r2[o2]]);
      }
      return n2;
    }, __decorate: function(e2, t2, n2, r2) {
      var o2, u2 = arguments.length, i2 = u2 < 3 ? t2 : r2 === null ? r2 = Object.getOwnPropertyDescriptor(t2, n2) : r2;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i2 = Reflect.decorate(e2, t2, n2, r2);
      else
        for (var a2 = e2.length - 1; a2 >= 0; a2--)
          (o2 = e2[a2]) && (i2 = (u2 < 3 ? o2(i2) : u2 > 3 ? o2(t2, n2, i2) : o2(t2, n2)) || i2);
      return u2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
    }, __param: function(e2, t2) {
      return function(n2, r2) {
        t2(n2, r2, e2);
      };
    }, __metadata: function(e2, t2) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e2, t2);
    }, __awaiter: function(e2, t2, n2, r2) {
      return new (n2 || (n2 = Promise))(function(o2, u2) {
        function i2(e3) {
          try {
            s2(r2.next(e3));
          } catch (e4) {
            u2(e4);
          }
        }
        function a2(e3) {
          try {
            s2(r2.throw(e3));
          } catch (e4) {
            u2(e4);
          }
        }
        function s2(e3) {
          var t3;
          e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2(function(e4) {
            e4(t3);
          })).then(i2, a2);
        }
        s2((r2 = r2.apply(e2, t2 || [])).next());
      });
    }, __generator: function(e2, t2) {
      var n2, r2, o2, u2, i2 = {label: 0, sent: function() {
        if (1 & o2[0])
          throw o2[1];
        return o2[1];
      }, trys: [], ops: []};
      return u2 = {next: a2(0), throw: a2(1), return: a2(2)}, typeof Symbol == "function" && (u2[Symbol.iterator] = function() {
        return this;
      }), u2;
      function a2(u3) {
        return function(a3) {
          return function(u4) {
            if (n2)
              throw new TypeError("Generator is already executing.");
            for (; i2; )
              try {
                if (n2 = 1, r2 && (o2 = 2 & u4[0] ? r2.return : u4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, u4[1])).done)
                  return o2;
                switch (r2 = 0, o2 && (u4 = [2 & u4[0], o2.value]), u4[0]) {
                  case 0:
                  case 1:
                    o2 = u4;
                    break;
                  case 4:
                    return i2.label++, {value: u4[1], done: false};
                  case 5:
                    i2.label++, r2 = u4[1], u4 = [0];
                    continue;
                  case 7:
                    u4 = i2.ops.pop(), i2.trys.pop();
                    continue;
                  default:
                    if (!(o2 = i2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || u4[0] !== 6 && u4[0] !== 2)) {
                      i2 = 0;
                      continue;
                    }
                    if (u4[0] === 3 && (!o2 || u4[1] > o2[0] && u4[1] < o2[3])) {
                      i2.label = u4[1];
                      break;
                    }
                    if (u4[0] === 6 && i2.label < o2[1]) {
                      i2.label = o2[1], o2 = u4;
                      break;
                    }
                    if (o2 && i2.label < o2[2]) {
                      i2.label = o2[2], i2.ops.push(u4);
                      break;
                    }
                    o2[2] && i2.ops.pop(), i2.trys.pop();
                    continue;
                }
                u4 = t2.call(e2, i2);
              } catch (e3) {
                u4 = [6, e3], r2 = 0;
              } finally {
                n2 = o2 = 0;
              }
            if (5 & u4[0])
              throw u4[1];
            return {value: u4[0] ? u4[1] : void 0, done: true};
          }([u3, a3]);
        };
      }
    }, __createBinding: function(e2, t2, n2, r2) {
      r2 === void 0 && (r2 = n2), e2[r2] = t2[n2];
    }, __exportStar: function(e2, t2) {
      for (var n2 in e2)
        n2 === "default" || t2.hasOwnProperty(n2) || (t2[n2] = e2[n2]);
    }, __values: xr, __read: Sr, __spread: function() {
      for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
        e2 = e2.concat(Sr(arguments[t2]));
      return e2;
    }, __spreadArrays: function() {
      for (var e2 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++)
        e2 += arguments[t2].length;
      var r2 = Array(e2), o2 = 0;
      for (t2 = 0; t2 < n2; t2++)
        for (var u2 = arguments[t2], i2 = 0, a2 = u2.length; i2 < a2; i2++, o2++)
          r2[o2] = u2[i2];
      return r2;
    }, __await: wr, __asyncGenerator: function(e2, t2, n2) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var r2, o2 = n2.apply(e2, t2 || []), u2 = [];
      return r2 = {}, i2("next"), i2("throw"), i2("return"), r2[Symbol.asyncIterator] = function() {
        return this;
      }, r2;
      function i2(e3) {
        o2[e3] && (r2[e3] = function(t3) {
          return new Promise(function(n3, r3) {
            u2.push([e3, t3, n3, r3]) > 1 || a2(e3, t3);
          });
        });
      }
      function a2(e3, t3) {
        try {
          (n3 = o2[e3](t3)).value instanceof wr ? Promise.resolve(n3.value.v).then(s2, c2) : l2(u2[0][2], n3);
        } catch (e4) {
          l2(u2[0][3], e4);
        }
        var n3;
      }
      function s2(e3) {
        a2("next", e3);
      }
      function c2(e3) {
        a2("throw", e3);
      }
      function l2(e3, t3) {
        e3(t3), u2.shift(), u2.length && a2(u2[0][0], u2[0][1]);
      }
    }, __asyncDelegator: function(e2) {
      var t2, n2;
      return t2 = {}, r2("next"), r2("throw", function(e3) {
        throw e3;
      }), r2("return"), t2[Symbol.iterator] = function() {
        return this;
      }, t2;
      function r2(r3, o2) {
        t2[r3] = e2[r3] ? function(t3) {
          return (n2 = !n2) ? {value: wr(e2[r3](t3)), done: r3 === "return"} : o2 ? o2(t3) : t3;
        } : o2;
      }
    }, __asyncValues: function(e2) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var t2, n2 = e2[Symbol.asyncIterator];
      return n2 ? n2.call(e2) : (e2 = xr(e2), t2 = {}, r2("next"), r2("throw"), r2("return"), t2[Symbol.asyncIterator] = function() {
        return this;
      }, t2);
      function r2(n3) {
        t2[n3] = e2[n3] && function(t3) {
          return new Promise(function(r3, o2) {
            (function(e3, t4, n4, r4) {
              Promise.resolve(r4).then(function(t5) {
                e3({value: t5, done: n4});
              }, t4);
            })(r3, o2, (t3 = e2[n3](t3)).done, t3.value);
          });
        };
      }
    }, __makeTemplateObject: function(e2, t2) {
      return Object.defineProperty ? Object.defineProperty(e2, "raw", {value: t2}) : e2.raw = t2, e2;
    }, __importStar: function(e2) {
      if (e2 && e2.__esModule)
        return e2;
      var t2 = {};
      if (e2 != null)
        for (var n2 in e2)
          Object.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
      return t2.default = e2, t2;
    }, __importDefault: function(e2) {
      return e2 && e2.__esModule ? e2 : {default: e2};
    }, __classPrivateFieldGet: function(e2, t2) {
      if (!t2.has(e2))
        throw new TypeError("attempted to get private field on non-instance");
      return t2.get(e2);
    }, __classPrivateFieldSet: function(e2, t2, n2) {
      if (!t2.has(e2))
        throw new TypeError("attempted to set private field on non-instance");
      return t2.set(e2, n2), n2;
    }}), Br = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.apiDescriptor = {key: (e3) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e3) ? e3 : JSON.stringify(e3), value(e3) {
        if (e3 === null || typeof e3 != "object")
          return JSON.stringify(e3);
        if (Array.isArray(e3))
          return "[".concat(e3.map((e4) => t2.apiDescriptor.value(e4)).join(", "), "]");
        const n2 = Object.keys(e3);
        return n2.length === 0 ? "{}" : "{ ".concat(n2.map((n3) => "".concat(t2.apiDescriptor.key(n3), ": ").concat(t2.apiDescriptor.value(e3[n3]))).join(", "), " }");
      }, pair: ({key: e3, value: n2}) => t2.apiDescriptor.value({[e3]: n2})};
    }), Nr = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(Br, t2);
    }), kr = /[|\\{}()[\]^$+*?.]/g, Pr = function(e2) {
      if (typeof e2 != "string")
        throw new TypeError("Expected a string");
      return e2.replace(kr, "\\$&");
    }, Or = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]}, Ir = je(function(e2) {
      var t2 = {};
      for (var n2 in Or)
        Or.hasOwnProperty(n2) && (t2[Or[n2]] = n2);
      var r2 = e2.exports = {rgb: {channels: 3, labels: "rgb"}, hsl: {channels: 3, labels: "hsl"}, hsv: {channels: 3, labels: "hsv"}, hwb: {channels: 3, labels: "hwb"}, cmyk: {channels: 4, labels: "cmyk"}, xyz: {channels: 3, labels: "xyz"}, lab: {channels: 3, labels: "lab"}, lch: {channels: 3, labels: "lch"}, hex: {channels: 1, labels: ["hex"]}, keyword: {channels: 1, labels: ["keyword"]}, ansi16: {channels: 1, labels: ["ansi16"]}, ansi256: {channels: 1, labels: ["ansi256"]}, hcg: {channels: 3, labels: ["h", "c", "g"]}, apple: {channels: 3, labels: ["r16", "g16", "b16"]}, gray: {channels: 1, labels: ["gray"]}};
      for (var o2 in r2)
        if (r2.hasOwnProperty(o2)) {
          if (!("channels" in r2[o2]))
            throw new Error("missing channels property: " + o2);
          if (!("labels" in r2[o2]))
            throw new Error("missing channel labels property: " + o2);
          if (r2[o2].labels.length !== r2[o2].channels)
            throw new Error("channel and label counts mismatch: " + o2);
          var u2 = r2[o2].channels, i2 = r2[o2].labels;
          delete r2[o2].channels, delete r2[o2].labels, Object.defineProperty(r2[o2], "channels", {value: u2}), Object.defineProperty(r2[o2], "labels", {value: i2});
        }
      r2.rgb.hsl = function(e3) {
        var t3, n3, r3 = e3[0] / 255, o3 = e3[1] / 255, u3 = e3[2] / 255, i3 = Math.min(r3, o3, u3), a2 = Math.max(r3, o3, u3), s2 = a2 - i3;
        return a2 === i3 ? t3 = 0 : r3 === a2 ? t3 = (o3 - u3) / s2 : o3 === a2 ? t3 = 2 + (u3 - r3) / s2 : u3 === a2 && (t3 = 4 + (r3 - o3) / s2), (t3 = Math.min(60 * t3, 360)) < 0 && (t3 += 360), n3 = (i3 + a2) / 2, [t3, 100 * (a2 === i3 ? 0 : n3 <= 0.5 ? s2 / (a2 + i3) : s2 / (2 - a2 - i3)), 100 * n3];
      }, r2.rgb.hsv = function(e3) {
        var t3, n3, r3, o3, u3, i3 = e3[0] / 255, a2 = e3[1] / 255, s2 = e3[2] / 255, c2 = Math.max(i3, a2, s2), l2 = c2 - Math.min(i3, a2, s2), p2 = function(e4) {
          return (c2 - e4) / 6 / l2 + 0.5;
        };
        return l2 === 0 ? o3 = u3 = 0 : (u3 = l2 / c2, t3 = p2(i3), n3 = p2(a2), r3 = p2(s2), i3 === c2 ? o3 = r3 - n3 : a2 === c2 ? o3 = 1 / 3 + t3 - r3 : s2 === c2 && (o3 = 2 / 3 + n3 - t3), o3 < 0 ? o3 += 1 : o3 > 1 && (o3 -= 1)), [360 * o3, 100 * u3, 100 * c2];
      }, r2.rgb.hwb = function(e3) {
        var t3 = e3[0], n3 = e3[1], o3 = e3[2];
        return [r2.rgb.hsl(e3)[0], 100 * (1 / 255 * Math.min(t3, Math.min(n3, o3))), 100 * (o3 = 1 - 1 / 255 * Math.max(t3, Math.max(n3, o3)))];
      }, r2.rgb.cmyk = function(e3) {
        var t3, n3 = e3[0] / 255, r3 = e3[1] / 255, o3 = e3[2] / 255;
        return [100 * ((1 - n3 - (t3 = Math.min(1 - n3, 1 - r3, 1 - o3))) / (1 - t3) || 0), 100 * ((1 - r3 - t3) / (1 - t3) || 0), 100 * ((1 - o3 - t3) / (1 - t3) || 0), 100 * t3];
      }, r2.rgb.keyword = function(e3) {
        var n3 = t2[e3];
        if (n3)
          return n3;
        var r3, o3, u3, i3 = 1 / 0;
        for (var a2 in Or)
          if (Or.hasOwnProperty(a2)) {
            var s2 = Or[a2], c2 = (o3 = e3, u3 = s2, Math.pow(o3[0] - u3[0], 2) + Math.pow(o3[1] - u3[1], 2) + Math.pow(o3[2] - u3[2], 2));
            c2 < i3 && (i3 = c2, r3 = a2);
          }
        return r3;
      }, r2.keyword.rgb = function(e3) {
        return Or[e3];
      }, r2.rgb.xyz = function(e3) {
        var t3 = e3[0] / 255, n3 = e3[1] / 255, r3 = e3[2] / 255;
        return [100 * (0.4124 * (t3 = t3 > 0.04045 ? Math.pow((t3 + 0.055) / 1.055, 2.4) : t3 / 12.92) + 0.3576 * (n3 = n3 > 0.04045 ? Math.pow((n3 + 0.055) / 1.055, 2.4) : n3 / 12.92) + 0.1805 * (r3 = r3 > 0.04045 ? Math.pow((r3 + 0.055) / 1.055, 2.4) : r3 / 12.92)), 100 * (0.2126 * t3 + 0.7152 * n3 + 0.0722 * r3), 100 * (0.0193 * t3 + 0.1192 * n3 + 0.9505 * r3)];
      }, r2.rgb.lab = function(e3) {
        var t3 = r2.rgb.xyz(e3), n3 = t3[0], o3 = t3[1], u3 = t3[2];
        return o3 /= 100, u3 /= 108.883, n3 = (n3 /= 95.047) > 8856e-6 ? Math.pow(n3, 1 / 3) : 7.787 * n3 + 16 / 116, [116 * (o3 = o3 > 8856e-6 ? Math.pow(o3, 1 / 3) : 7.787 * o3 + 16 / 116) - 16, 500 * (n3 - o3), 200 * (o3 - (u3 = u3 > 8856e-6 ? Math.pow(u3, 1 / 3) : 7.787 * u3 + 16 / 116))];
      }, r2.hsl.rgb = function(e3) {
        var t3, n3, r3, o3, u3, i3 = e3[0] / 360, a2 = e3[1] / 100, s2 = e3[2] / 100;
        if (a2 === 0)
          return [u3 = 255 * s2, u3, u3];
        t3 = 2 * s2 - (n3 = s2 < 0.5 ? s2 * (1 + a2) : s2 + a2 - s2 * a2), o3 = [0, 0, 0];
        for (var c2 = 0; c2 < 3; c2++)
          (r3 = i3 + 1 / 3 * -(c2 - 1)) < 0 && r3++, r3 > 1 && r3--, u3 = 6 * r3 < 1 ? t3 + 6 * (n3 - t3) * r3 : 2 * r3 < 1 ? n3 : 3 * r3 < 2 ? t3 + (n3 - t3) * (2 / 3 - r3) * 6 : t3, o3[c2] = 255 * u3;
        return o3;
      }, r2.hsl.hsv = function(e3) {
        var t3 = e3[0], n3 = e3[1] / 100, r3 = e3[2] / 100, o3 = n3, u3 = Math.max(r3, 0.01);
        return n3 *= (r3 *= 2) <= 1 ? r3 : 2 - r3, o3 *= u3 <= 1 ? u3 : 2 - u3, [t3, 100 * (r3 === 0 ? 2 * o3 / (u3 + o3) : 2 * n3 / (r3 + n3)), 100 * ((r3 + n3) / 2)];
      }, r2.hsv.rgb = function(e3) {
        var t3 = e3[0] / 60, n3 = e3[1] / 100, r3 = e3[2] / 100, o3 = Math.floor(t3) % 6, u3 = t3 - Math.floor(t3), i3 = 255 * r3 * (1 - n3), a2 = 255 * r3 * (1 - n3 * u3), s2 = 255 * r3 * (1 - n3 * (1 - u3));
        switch (r3 *= 255, o3) {
          case 0:
            return [r3, s2, i3];
          case 1:
            return [a2, r3, i3];
          case 2:
            return [i3, r3, s2];
          case 3:
            return [i3, a2, r3];
          case 4:
            return [s2, i3, r3];
          case 5:
            return [r3, i3, a2];
        }
      }, r2.hsv.hsl = function(e3) {
        var t3, n3, r3, o3 = e3[0], u3 = e3[1] / 100, i3 = e3[2] / 100, a2 = Math.max(i3, 0.01);
        return r3 = (2 - u3) * i3, n3 = u3 * a2, [o3, 100 * (n3 = (n3 /= (t3 = (2 - u3) * a2) <= 1 ? t3 : 2 - t3) || 0), 100 * (r3 /= 2)];
      }, r2.hwb.rgb = function(e3) {
        var t3, n3, r3, o3, u3, i3, a2, s2 = e3[0] / 360, c2 = e3[1] / 100, l2 = e3[2] / 100, p2 = c2 + l2;
        switch (p2 > 1 && (c2 /= p2, l2 /= p2), r3 = 6 * s2 - (t3 = Math.floor(6 * s2)), (1 & t3) != 0 && (r3 = 1 - r3), o3 = c2 + r3 * ((n3 = 1 - l2) - c2), t3) {
          default:
          case 6:
          case 0:
            u3 = n3, i3 = o3, a2 = c2;
            break;
          case 1:
            u3 = o3, i3 = n3, a2 = c2;
            break;
          case 2:
            u3 = c2, i3 = n3, a2 = o3;
            break;
          case 3:
            u3 = c2, i3 = o3, a2 = n3;
            break;
          case 4:
            u3 = o3, i3 = c2, a2 = n3;
            break;
          case 5:
            u3 = n3, i3 = c2, a2 = o3;
        }
        return [255 * u3, 255 * i3, 255 * a2];
      }, r2.cmyk.rgb = function(e3) {
        var t3 = e3[0] / 100, n3 = e3[1] / 100, r3 = e3[2] / 100, o3 = e3[3] / 100;
        return [255 * (1 - Math.min(1, t3 * (1 - o3) + o3)), 255 * (1 - Math.min(1, n3 * (1 - o3) + o3)), 255 * (1 - Math.min(1, r3 * (1 - o3) + o3))];
      }, r2.xyz.rgb = function(e3) {
        var t3, n3, r3, o3 = e3[0] / 100, u3 = e3[1] / 100, i3 = e3[2] / 100;
        return n3 = -0.9689 * o3 + 1.8758 * u3 + 0.0415 * i3, r3 = 0.0557 * o3 + -0.204 * u3 + 1.057 * i3, t3 = (t3 = 3.2406 * o3 + -1.5372 * u3 + -0.4986 * i3) > 31308e-7 ? 1.055 * Math.pow(t3, 1 / 2.4) - 0.055 : 12.92 * t3, n3 = n3 > 31308e-7 ? 1.055 * Math.pow(n3, 1 / 2.4) - 0.055 : 12.92 * n3, r3 = r3 > 31308e-7 ? 1.055 * Math.pow(r3, 1 / 2.4) - 0.055 : 12.92 * r3, [255 * (t3 = Math.min(Math.max(0, t3), 1)), 255 * (n3 = Math.min(Math.max(0, n3), 1)), 255 * (r3 = Math.min(Math.max(0, r3), 1))];
      }, r2.xyz.lab = function(e3) {
        var t3 = e3[0], n3 = e3[1], r3 = e3[2];
        return n3 /= 100, r3 /= 108.883, t3 = (t3 /= 95.047) > 8856e-6 ? Math.pow(t3, 1 / 3) : 7.787 * t3 + 16 / 116, [116 * (n3 = n3 > 8856e-6 ? Math.pow(n3, 1 / 3) : 7.787 * n3 + 16 / 116) - 16, 500 * (t3 - n3), 200 * (n3 - (r3 = r3 > 8856e-6 ? Math.pow(r3, 1 / 3) : 7.787 * r3 + 16 / 116))];
      }, r2.lab.xyz = function(e3) {
        var t3, n3, r3, o3 = e3[0];
        t3 = e3[1] / 500 + (n3 = (o3 + 16) / 116), r3 = n3 - e3[2] / 200;
        var u3 = Math.pow(n3, 3), i3 = Math.pow(t3, 3), a2 = Math.pow(r3, 3);
        return n3 = u3 > 8856e-6 ? u3 : (n3 - 16 / 116) / 7.787, t3 = i3 > 8856e-6 ? i3 : (t3 - 16 / 116) / 7.787, r3 = a2 > 8856e-6 ? a2 : (r3 - 16 / 116) / 7.787, [t3 *= 95.047, n3 *= 100, r3 *= 108.883];
      }, r2.lab.lch = function(e3) {
        var t3, n3 = e3[0], r3 = e3[1], o3 = e3[2];
        return (t3 = 360 * Math.atan2(o3, r3) / 2 / Math.PI) < 0 && (t3 += 360), [n3, Math.sqrt(r3 * r3 + o3 * o3), t3];
      }, r2.lch.lab = function(e3) {
        var t3, n3 = e3[0], r3 = e3[1];
        return t3 = e3[2] / 360 * 2 * Math.PI, [n3, r3 * Math.cos(t3), r3 * Math.sin(t3)];
      }, r2.rgb.ansi16 = function(e3) {
        var t3 = e3[0], n3 = e3[1], o3 = e3[2], u3 = 1 in arguments ? arguments[1] : r2.rgb.hsv(e3)[2];
        if ((u3 = Math.round(u3 / 50)) === 0)
          return 30;
        var i3 = 30 + (Math.round(o3 / 255) << 2 | Math.round(n3 / 255) << 1 | Math.round(t3 / 255));
        return u3 === 2 && (i3 += 60), i3;
      }, r2.hsv.ansi16 = function(e3) {
        return r2.rgb.ansi16(r2.hsv.rgb(e3), e3[2]);
      }, r2.rgb.ansi256 = function(e3) {
        var t3 = e3[0], n3 = e3[1], r3 = e3[2];
        return t3 === n3 && n3 === r3 ? t3 < 8 ? 16 : t3 > 248 ? 231 : Math.round((t3 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t3 / 255 * 5) + 6 * Math.round(n3 / 255 * 5) + Math.round(r3 / 255 * 5);
      }, r2.ansi16.rgb = function(e3) {
        var t3 = e3 % 10;
        if (t3 === 0 || t3 === 7)
          return e3 > 50 && (t3 += 3.5), [t3 = t3 / 10.5 * 255, t3, t3];
        var n3 = 0.5 * (1 + ~~(e3 > 50));
        return [(1 & t3) * n3 * 255, (t3 >> 1 & 1) * n3 * 255, (t3 >> 2 & 1) * n3 * 255];
      }, r2.ansi256.rgb = function(e3) {
        if (e3 >= 232) {
          var t3 = 10 * (e3 - 232) + 8;
          return [t3, t3, t3];
        }
        var n3;
        return e3 -= 16, [Math.floor(e3 / 36) / 5 * 255, Math.floor((n3 = e3 % 36) / 6) / 5 * 255, n3 % 6 / 5 * 255];
      }, r2.rgb.hex = function(e3) {
        var t3 = (((255 & Math.round(e3[0])) << 16) + ((255 & Math.round(e3[1])) << 8) + (255 & Math.round(e3[2]))).toString(16).toUpperCase();
        return "000000".substring(t3.length) + t3;
      }, r2.hex.rgb = function(e3) {
        var t3 = e3.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t3)
          return [0, 0, 0];
        var n3 = t3[0];
        t3[0].length === 3 && (n3 = n3.split("").map(function(e4) {
          return e4 + e4;
        }).join(""));
        var r3 = parseInt(n3, 16);
        return [r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3];
      }, r2.rgb.hcg = function(e3) {
        var t3, n3 = e3[0] / 255, r3 = e3[1] / 255, o3 = e3[2] / 255, u3 = Math.max(Math.max(n3, r3), o3), i3 = Math.min(Math.min(n3, r3), o3), a2 = u3 - i3;
        return t3 = a2 <= 0 ? 0 : u3 === n3 ? (r3 - o3) / a2 % 6 : u3 === r3 ? 2 + (o3 - n3) / a2 : 4 + (n3 - r3) / a2 + 4, t3 /= 6, [360 * (t3 %= 1), 100 * a2, 100 * (a2 < 1 ? i3 / (1 - a2) : 0)];
      }, r2.hsl.hcg = function(e3) {
        var t3 = e3[1] / 100, n3 = e3[2] / 100, r3 = 1, o3 = 0;
        return (r3 = n3 < 0.5 ? 2 * t3 * n3 : 2 * t3 * (1 - n3)) < 1 && (o3 = (n3 - 0.5 * r3) / (1 - r3)), [e3[0], 100 * r3, 100 * o3];
      }, r2.hsv.hcg = function(e3) {
        var t3 = e3[1] / 100, n3 = e3[2] / 100, r3 = t3 * n3, o3 = 0;
        return r3 < 1 && (o3 = (n3 - r3) / (1 - r3)), [e3[0], 100 * r3, 100 * o3];
      }, r2.hcg.rgb = function(e3) {
        var t3 = e3[0] / 360, n3 = e3[1] / 100, r3 = e3[2] / 100;
        if (n3 === 0)
          return [255 * r3, 255 * r3, 255 * r3];
        var o3, u3 = [0, 0, 0], i3 = t3 % 1 * 6, a2 = i3 % 1, s2 = 1 - a2;
        switch (Math.floor(i3)) {
          case 0:
            u3[0] = 1, u3[1] = a2, u3[2] = 0;
            break;
          case 1:
            u3[0] = s2, u3[1] = 1, u3[2] = 0;
            break;
          case 2:
            u3[0] = 0, u3[1] = 1, u3[2] = a2;
            break;
          case 3:
            u3[0] = 0, u3[1] = s2, u3[2] = 1;
            break;
          case 4:
            u3[0] = a2, u3[1] = 0, u3[2] = 1;
            break;
          default:
            u3[0] = 1, u3[1] = 0, u3[2] = s2;
        }
        return o3 = (1 - n3) * r3, [255 * (n3 * u3[0] + o3), 255 * (n3 * u3[1] + o3), 255 * (n3 * u3[2] + o3)];
      }, r2.hcg.hsv = function(e3) {
        var t3 = e3[1] / 100, n3 = t3 + e3[2] / 100 * (1 - t3), r3 = 0;
        return n3 > 0 && (r3 = t3 / n3), [e3[0], 100 * r3, 100 * n3];
      }, r2.hcg.hsl = function(e3) {
        var t3 = e3[1] / 100, n3 = e3[2] / 100 * (1 - t3) + 0.5 * t3, r3 = 0;
        return n3 > 0 && n3 < 0.5 ? r3 = t3 / (2 * n3) : n3 >= 0.5 && n3 < 1 && (r3 = t3 / (2 * (1 - n3))), [e3[0], 100 * r3, 100 * n3];
      }, r2.hcg.hwb = function(e3) {
        var t3 = e3[1] / 100, n3 = t3 + e3[2] / 100 * (1 - t3);
        return [e3[0], 100 * (n3 - t3), 100 * (1 - n3)];
      }, r2.hwb.hcg = function(e3) {
        var t3 = e3[1] / 100, n3 = 1 - e3[2] / 100, r3 = n3 - t3, o3 = 0;
        return r3 < 1 && (o3 = (n3 - r3) / (1 - r3)), [e3[0], 100 * r3, 100 * o3];
      }, r2.apple.rgb = function(e3) {
        return [e3[0] / 65535 * 255, e3[1] / 65535 * 255, e3[2] / 65535 * 255];
      }, r2.rgb.apple = function(e3) {
        return [e3[0] / 255 * 65535, e3[1] / 255 * 65535, e3[2] / 255 * 65535];
      }, r2.gray.rgb = function(e3) {
        return [e3[0] / 100 * 255, e3[0] / 100 * 255, e3[0] / 100 * 255];
      }, r2.gray.hsl = r2.gray.hsv = function(e3) {
        return [0, 0, e3[0]];
      }, r2.gray.hwb = function(e3) {
        return [0, 100, e3[0]];
      }, r2.gray.cmyk = function(e3) {
        return [0, 0, 0, e3[0]];
      }, r2.gray.lab = function(e3) {
        return [e3[0], 0, 0];
      }, r2.gray.hex = function(e3) {
        var t3 = 255 & Math.round(e3[0] / 100 * 255), n3 = ((t3 << 16) + (t3 << 8) + t3).toString(16).toUpperCase();
        return "000000".substring(n3.length) + n3;
      }, r2.rgb.gray = function(e3) {
        return [(e3[0] + e3[1] + e3[2]) / 3 / 255 * 100];
      };
    });
    function Lr(e2) {
      var t2 = function() {
        for (var e3 = {}, t3 = Object.keys(Ir), n3 = t3.length, r3 = 0; r3 < n3; r3++)
          e3[t3[r3]] = {distance: -1, parent: null};
        return e3;
      }(), n2 = [e2];
      for (t2[e2].distance = 0; n2.length; )
        for (var r2 = n2.pop(), o2 = Object.keys(Ir[r2]), u2 = o2.length, i2 = 0; i2 < u2; i2++) {
          var a2 = o2[i2], s2 = t2[a2];
          s2.distance === -1 && (s2.distance = t2[r2].distance + 1, s2.parent = r2, n2.unshift(a2));
        }
      return t2;
    }
    function Mr(e2, t2) {
      return function(n2) {
        return t2(e2(n2));
      };
    }
    function jr(e2, t2) {
      for (var n2 = [t2[e2].parent, e2], r2 = Ir[t2[e2].parent][e2], o2 = t2[e2].parent; t2[o2].parent; )
        n2.unshift(t2[o2].parent), r2 = Mr(Ir[t2[o2].parent][o2], r2), o2 = t2[o2].parent;
      return r2.conversion = n2, r2;
    }
    var _r = {};
    Object.keys(Ir).forEach(function(e2) {
      _r[e2] = {}, Object.defineProperty(_r[e2], "channels", {value: Ir[e2].channels}), Object.defineProperty(_r[e2], "labels", {value: Ir[e2].labels});
      var t2 = function(e3) {
        for (var t3 = Lr(e3), n2 = {}, r2 = Object.keys(t3), o2 = r2.length, u2 = 0; u2 < o2; u2++) {
          var i2 = r2[u2];
          t3[i2].parent !== null && (n2[i2] = jr(i2, t3));
        }
        return n2;
      }(e2);
      Object.keys(t2).forEach(function(n2) {
        var r2 = t2[n2];
        _r[e2][n2] = function(e3) {
          var t3 = function(t4) {
            if (t4 == null)
              return t4;
            arguments.length > 1 && (t4 = Array.prototype.slice.call(arguments));
            var n3 = e3(t4);
            if (typeof n3 == "object")
              for (var r3 = n3.length, o2 = 0; o2 < r3; o2++)
                n3[o2] = Math.round(n3[o2]);
            return n3;
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        }(r2), _r[e2][n2].raw = function(e3) {
          var t3 = function(t4) {
            return t4 == null ? t4 : (arguments.length > 1 && (t4 = Array.prototype.slice.call(arguments)), e3(t4));
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        }(r2);
      });
    });
    var Rr = _r, Vr = je(function(e2) {
      const t2 = (e3, t3) => function() {
        const n3 = e3.apply(Rr, arguments);
        return "[".concat(n3 + t3, "m");
      }, n2 = (e3, t3) => function() {
        const n3 = e3.apply(Rr, arguments);
        return "[".concat(38 + t3, ";5;").concat(n3, "m");
      }, r2 = (e3, t3) => function() {
        const n3 = e3.apply(Rr, arguments);
        return "[".concat(38 + t3, ";2;").concat(n3[0], ";").concat(n3[1], ";").concat(n3[2], "m");
      };
      Object.defineProperty(e2, "exports", {enumerable: true, get: function() {
        const e3 = new Map(), o2 = {modifier: {reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29]}, color: {black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39]}, bgColor: {bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49]}};
        o2.color.grey = o2.color.gray;
        for (const t3 of Object.keys(o2)) {
          const n3 = o2[t3];
          for (const t4 of Object.keys(n3)) {
            const r3 = n3[t4];
            o2[t4] = {open: "[".concat(r3[0], "m"), close: "[".concat(r3[1], "m")}, n3[t4] = o2[t4], e3.set(r3[0], r3[1]);
          }
          Object.defineProperty(o2, t3, {value: n3, enumerable: false}), Object.defineProperty(o2, "codes", {value: e3, enumerable: false});
        }
        const u2 = (e4) => e4, i2 = (e4, t3, n3) => [e4, t3, n3];
        o2.color.close = "[39m", o2.bgColor.close = "[49m", o2.color.ansi = {ansi: t2(u2, 0)}, o2.color.ansi256 = {ansi256: n2(u2, 0)}, o2.color.ansi16m = {rgb: r2(i2, 0)}, o2.bgColor.ansi = {ansi: t2(u2, 10)}, o2.bgColor.ansi256 = {ansi256: n2(u2, 10)}, o2.bgColor.ansi16m = {rgb: r2(i2, 10)};
        for (let e4 of Object.keys(Rr)) {
          if (typeof Rr[e4] != "object")
            continue;
          const u3 = Rr[e4];
          e4 === "ansi16" && (e4 = "ansi"), "ansi16" in u3 && (o2.color.ansi[e4] = t2(u3.ansi16, 0), o2.bgColor.ansi[e4] = t2(u3.ansi16, 10)), "ansi256" in u3 && (o2.color.ansi256[e4] = n2(u3.ansi256, 0), o2.bgColor.ansi256[e4] = n2(u3.ansi256, 10)), "rgb" in u3 && (o2.color.ansi16m[e4] = r2(u3.rgb, 0), o2.bgColor.ansi16m[e4] = r2(u3.rgb, 10));
        }
        return o2;
      }});
    }), $r = (e2, t2) => {
      t2 = t2 || Oe.argv;
      const n2 = e2.startsWith("-") ? "" : e2.length === 1 ? "-" : "--", r2 = t2.indexOf(n2 + e2), o2 = t2.indexOf("--");
      return r2 !== -1 && (o2 === -1 || r2 < o2);
    }, qr = _e(Object.freeze({__proto__: null, default: {EOL: "\n", platform: () => "browser", cpus: () => [{model: "Prettier"}]}}));
    const Wr = Oe.env;
    let Ur;
    function Jr(e2) {
      return function(e3) {
        return e3 !== 0 && {level: e3, hasBasic: true, has256: e3 >= 2, has16m: e3 >= 3};
      }(function(e3) {
        if (Ur === false)
          return 0;
        if ($r("color=16m") || $r("color=full") || $r("color=truecolor"))
          return 3;
        if ($r("color=256"))
          return 2;
        if (e3 && !e3.isTTY && Ur !== true)
          return 0;
        const t2 = Ur ? 1 : 0;
        if (Oe.platform === "win32") {
          const e4 = qr.release().split(".");
          return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(e4[0]) >= 10 && Number(e4[2]) >= 10586 ? Number(e4[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in Wr)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e4) => e4 in Wr) || Wr.CI_NAME === "codeship" ? 1 : t2;
        if ("TEAMCITY_VERSION" in Wr)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Wr.TEAMCITY_VERSION) ? 1 : 0;
        if (Wr.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in Wr) {
          const e4 = parseInt((Wr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (Wr.TERM_PROGRAM) {
            case "iTerm.app":
              return e4 >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(Wr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Wr.TERM) || "COLORTERM" in Wr ? 1 : (Wr.TERM, t2);
      }(e2));
    }
    $r("no-color") || $r("no-colors") || $r("color=false") ? Ur = false : ($r("color") || $r("colors") || $r("color=true") || $r("color=always")) && (Ur = true), "FORCE_COLOR" in Wr && (Ur = Wr.FORCE_COLOR.length === 0 || parseInt(Wr.FORCE_COLOR, 10) !== 0);
    var zr = {supportsColor: Jr, stdout: Jr(Oe.stdout), stderr: Jr(Oe.stderr)};
    const Hr = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Gr = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, Xr = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, Yr = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, Kr = new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", "\x07"]]);
    function Qr(e2) {
      return e2[0] === "u" && e2.length === 5 || e2[0] === "x" && e2.length === 3 ? String.fromCharCode(parseInt(e2.slice(1), 16)) : Kr.get(e2) || e2;
    }
    function Zr(e2, t2) {
      const n2 = [], r2 = t2.trim().split(/\s*,\s*/g);
      let o2;
      for (const t3 of r2)
        if (isNaN(t3)) {
          if (!(o2 = t3.match(Xr)))
            throw new Error("Invalid Chalk template style argument: ".concat(t3, " (in style '").concat(e2, "')"));
          n2.push(o2[2].replace(Yr, (e3, t4, n3) => t4 ? Qr(t4) : n3));
        } else
          n2.push(Number(t3));
      return n2;
    }
    function eo(e2) {
      Gr.lastIndex = 0;
      const t2 = [];
      let n2;
      for (; (n2 = Gr.exec(e2)) !== null; ) {
        const e3 = n2[1];
        if (n2[2]) {
          const r2 = Zr(e3, n2[2]);
          t2.push([e3].concat(r2));
        } else
          t2.push([e3]);
      }
      return t2;
    }
    function to(e2, t2) {
      const n2 = {};
      for (const e3 of t2)
        for (const t3 of e3.styles)
          n2[t3[0]] = e3.inverse ? null : t3.slice(1);
      let r2 = e2;
      for (const e3 of Object.keys(n2))
        if (Array.isArray(n2[e3])) {
          if (!(e3 in r2))
            throw new Error("Unknown Chalk style: ".concat(e3));
          r2 = n2[e3].length > 0 ? r2[e3].apply(r2, n2[e3]) : r2[e3];
        }
      return r2;
    }
    var no = (e2, t2) => {
      const n2 = [], r2 = [];
      let o2 = [];
      if (t2.replace(Hr, (t3, u2, i2, a2, s2, c2) => {
        if (u2)
          o2.push(Qr(u2));
        else if (a2) {
          const t4 = o2.join("");
          o2 = [], r2.push(n2.length === 0 ? t4 : to(e2, n2)(t4)), n2.push({inverse: i2, styles: eo(a2)});
        } else if (s2) {
          if (n2.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          r2.push(to(e2, n2)(o2.join(""))), o2 = [], n2.pop();
        } else
          o2.push(c2);
      }), r2.push(o2.join("")), n2.length > 0) {
        const e3 = "Chalk template literal is missing ".concat(n2.length, " closing bracket").concat(n2.length === 1 ? "" : "s", " (`}`)");
        throw new Error(e3);
      }
      return r2.join("");
    }, ro = je(function(e2) {
      const t2 = zr.stdout, n2 = Oe.platform === "win32" && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"), r2 = ["ansi", "ansi", "ansi256", "ansi16m"], o2 = new Set(["gray"]), u2 = Object.create(null);
      function i2(e3, n3) {
        n3 = n3 || {};
        const r3 = t2 ? t2.level : 0;
        e3.level = n3.level === void 0 ? r3 : n3.level, e3.enabled = "enabled" in n3 ? n3.enabled : e3.level > 0;
      }
      function a2(e3) {
        if (!this || !(this instanceof a2) || this.template) {
          const t3 = {};
          return i2(t3, e3), t3.template = function() {
            const e4 = [].slice.call(arguments);
            return p2.apply(null, [t3.template].concat(e4));
          }, Object.setPrototypeOf(t3, a2.prototype), Object.setPrototypeOf(t3.template, t3), t3.template.constructor = a2, t3.template;
        }
        i2(this, e3);
      }
      n2 && (Vr.blue.open = "[94m");
      for (const e3 of Object.keys(Vr))
        Vr[e3].closeRe = new RegExp(Pr(Vr[e3].close), "g"), u2[e3] = {get() {
          const t3 = Vr[e3];
          return c2.call(this, this._styles ? this._styles.concat(t3) : [t3], this._empty, e3);
        }};
      u2.visible = {get() {
        return c2.call(this, this._styles || [], true, "visible");
      }}, Vr.color.closeRe = new RegExp(Pr(Vr.color.close), "g");
      for (const e3 of Object.keys(Vr.color.ansi))
        o2.has(e3) || (u2[e3] = {get() {
          const t3 = this.level;
          return function() {
            const n3 = Vr.color[r2[t3]][e3].apply(null, arguments), o3 = {open: n3, close: Vr.color.close, closeRe: Vr.color.closeRe};
            return c2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
          };
        }});
      Vr.bgColor.closeRe = new RegExp(Pr(Vr.bgColor.close), "g");
      for (const e3 of Object.keys(Vr.bgColor.ansi)) {
        if (o2.has(e3))
          continue;
        u2["bg" + e3[0].toUpperCase() + e3.slice(1)] = {get() {
          const t3 = this.level;
          return function() {
            const n3 = Vr.bgColor[r2[t3]][e3].apply(null, arguments), o3 = {open: n3, close: Vr.bgColor.close, closeRe: Vr.bgColor.closeRe};
            return c2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
          };
        }};
      }
      const s2 = Object.defineProperties(() => {
      }, u2);
      function c2(e3, t3, n3) {
        const r3 = function() {
          return l2.apply(r3, arguments);
        };
        r3._styles = e3, r3._empty = t3;
        const o3 = this;
        return Object.defineProperty(r3, "level", {enumerable: true, get: () => o3.level, set(e4) {
          o3.level = e4;
        }}), Object.defineProperty(r3, "enabled", {enumerable: true, get: () => o3.enabled, set(e4) {
          o3.enabled = e4;
        }}), r3.hasGrey = this.hasGrey || n3 === "gray" || n3 === "grey", r3.__proto__ = s2, r3;
      }
      function l2() {
        const e3 = arguments, t3 = e3.length;
        let r3 = String(arguments[0]);
        if (t3 === 0)
          return "";
        if (t3 > 1)
          for (let n3 = 1; n3 < t3; n3++)
            r3 += " " + e3[n3];
        if (!this.enabled || this.level <= 0 || !r3)
          return this._empty ? "" : r3;
        const o3 = Vr.dim.open;
        n2 && this.hasGrey && (Vr.dim.open = "");
        for (const e4 of this._styles.slice().reverse())
          r3 = e4.open + r3.replace(e4.closeRe, e4.open) + e4.close, r3 = r3.replace(/\r?\n/g, "".concat(e4.close, "$&").concat(e4.open));
        return Vr.dim.open = o3, r3;
      }
      function p2(e3, t3) {
        if (!Array.isArray(t3))
          return [].slice.call(arguments, 1).join(" ");
        const n3 = [].slice.call(arguments, 2), r3 = [t3.raw[0]];
        for (let e4 = 1; e4 < t3.length; e4++)
          r3.push(String(n3[e4 - 1]).replace(/[{}\\]/g, "\\$&")), r3.push(String(t3.raw[e4]));
        return no(e3, r3.join(""));
      }
      Object.defineProperties(a2.prototype, u2), e2.exports = a2(), e2.exports.supportsColor = t2, e2.exports.default = e2.exports;
    }), oo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.commonDeprecatedHandler = (e3, t3, {descriptor: n2}) => {
        const r2 = ["".concat(ro.default.yellow(typeof e3 == "string" ? n2.key(e3) : n2.pair(e3)), " is deprecated")];
        return t3 && r2.push("we now treat it as ".concat(ro.default.blue(typeof t3 == "string" ? n2.key(t3) : n2.pair(t3)))), r2.join("; ") + ".";
      };
    }), uo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(oo, t2);
    }), io = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.commonInvalidHandler = (e3, t3, n2) => ["Invalid ".concat(ro.default.red(n2.descriptor.key(e3)), " value."), "Expected ".concat(ro.default.blue(n2.schemas[e3].expected(n2)), ","), "but received ".concat(ro.default.red(n2.descriptor.value(t3)), ".")].join(" ");
    }), ao = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(io, t2);
    }), so = [], co = [], lo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.levenUnknownHandler = (e3, t3, {descriptor: n2, logger: r2, schemas: o2}) => {
        const u2 = ["Ignored unknown option ".concat(ro.default.yellow(n2.pair({key: e3, value: t3})), ".")], i2 = Object.keys(o2).sort().find((t4) => function(e4, t5) {
          if (e4 === t5)
            return 0;
          var n3 = e4;
          e4.length > t5.length && (e4 = t5, t5 = n3);
          var r3 = e4.length, o3 = t5.length;
          if (r3 === 0)
            return o3;
          if (o3 === 0)
            return r3;
          for (; r3 > 0 && e4.charCodeAt(~-r3) === t5.charCodeAt(~-o3); )
            r3--, o3--;
          if (r3 === 0)
            return o3;
          for (var u3, i3, a2, s2, c2 = 0; c2 < r3 && e4.charCodeAt(c2) === t5.charCodeAt(c2); )
            c2++;
          if (o3 -= c2, (r3 -= c2) == 0)
            return o3;
          for (var l2 = 0, p2 = 0; l2 < r3; )
            co[c2 + l2] = e4.charCodeAt(c2 + l2), so[l2] = ++l2;
          for (; p2 < o3; )
            for (u3 = t5.charCodeAt(c2 + p2), a2 = p2++, i3 = p2, l2 = 0; l2 < r3; l2++)
              s2 = u3 === co[c2 + l2] ? a2 : a2 + 1, a2 = so[l2], i3 = so[l2] = a2 > i3 ? s2 > i3 ? i3 + 1 : s2 : s2 > a2 ? a2 + 1 : s2;
          return i3;
        }(e3, t4) < 3);
        i2 && u2.push("Did you mean ".concat(ro.default.blue(n2.key(i2)), "?")), r2.warn(u2.join(" "));
      };
    }), po = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(lo, t2);
    }), fo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(uo, t2), Tr.__exportStar(ao, t2), Tr.__exportStar(po, t2);
    }), ho = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      const n2 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
      function r2(e3, t3) {
        const r3 = new e3(t3), i2 = Object.create(r3);
        for (const e4 of n2)
          e4 in t3 && (i2[e4] = u2(t3[e4], r3, o2.prototype[e4].length));
        return i2;
      }
      t2.createSchema = r2;
      class o2 {
        constructor(e3) {
          this.name = e3.name;
        }
        static create(e3) {
          return r2(this, e3);
        }
        default(e3) {
        }
        expected(e3) {
          return "nothing";
        }
        validate(e3, t3) {
          return false;
        }
        deprecated(e3, t3) {
          return false;
        }
        forward(e3, t3) {
        }
        redirect(e3, t3) {
        }
        overlap(e3, t3, n3) {
          return e3;
        }
        preprocess(e3, t3) {
          return e3;
        }
        postprocess(e3, t3) {
          return e3;
        }
      }
      function u2(e3, t3, n3) {
        return typeof e3 == "function" ? (...r3) => e3(...r3.slice(0, n3 - 1), t3, ...r3.slice(n3 - 1)) : () => e3;
      }
      t2.Schema = o2;
    }), mo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        constructor(e3) {
          super(e3), this._sourceName = e3.sourceName;
        }
        expected(e3) {
          return e3.schemas[this._sourceName].expected(e3);
        }
        validate(e3, t3) {
          return t3.schemas[this._sourceName].validate(e3, t3);
        }
        redirect(e3, t3) {
          return this._sourceName;
        }
      }
      t2.AliasSchema = n2;
    }), go = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        expected() {
          return "anything";
        }
        validate() {
          return true;
        }
      }
      t2.AnySchema = n2;
    }), Do = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        constructor(e3) {
          var {valueSchema: t3, name: n4 = t3.name} = e3, r3 = Tr.__rest(e3, ["valueSchema", "name"]);
          super(Object.assign({}, r3, {name: n4})), this._valueSchema = t3;
        }
        expected(e3) {
          return "an array of ".concat(this._valueSchema.expected(e3));
        }
        validate(e3, t3) {
          if (!Array.isArray(e3))
            return false;
          const n4 = [];
          for (const r3 of e3) {
            const e4 = t3.normalizeValidateResult(this._valueSchema.validate(r3, t3), r3);
            e4 !== true && n4.push(e4.value);
          }
          return n4.length === 0 || {value: n4};
        }
        deprecated(e3, t3) {
          const n4 = [];
          for (const r3 of e3) {
            const e4 = t3.normalizeDeprecatedResult(this._valueSchema.deprecated(r3, t3), r3);
            e4 !== false && n4.push(...e4.map(({value: e5}) => ({value: [e5]})));
          }
          return n4;
        }
        forward(e3, t3) {
          const n4 = [];
          for (const o2 of e3) {
            const e4 = t3.normalizeForwardResult(this._valueSchema.forward(o2, t3), o2);
            n4.push(...e4.map(r2));
          }
          return n4;
        }
        redirect(e3, t3) {
          const n4 = [], o2 = [];
          for (const u2 of e3) {
            const e4 = t3.normalizeRedirectResult(this._valueSchema.redirect(u2, t3), u2);
            "remain" in e4 && n4.push(e4.remain), o2.push(...e4.redirect.map(r2));
          }
          return n4.length === 0 ? {redirect: o2} : {redirect: o2, remain: n4};
        }
        overlap(e3, t3) {
          return e3.concat(t3);
        }
      }
      function r2({from: e3, to: t3}) {
        return {from: [e3], to: t3};
      }
      t2.ArraySchema = n2;
    }), yo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        expected() {
          return "true or false";
        }
        validate(e3) {
          return typeof e3 == "boolean";
        }
      }
      t2.BooleanSchema = n2;
    }), Eo = je(function(e2, t2) {
      function n2(e3, t3) {
        return typeof e3 == "string" || "key" in e3 ? {from: t3, to: e3} : "from" in e3 ? {from: e3.from, to: e3.to} : {from: t3, to: e3.to};
      }
      function r2(e3, t3) {
        return e3 === void 0 ? [] : Array.isArray(e3) ? e3.map((e4) => n2(e4, t3)) : [n2(e3, t3)];
      }
      Object.defineProperty(t2, "__esModule", {value: true}), t2.recordFromArray = function(e3, t3) {
        const n3 = Object.create(null);
        for (const r3 of e3) {
          const e4 = r3[t3];
          if (n3[e4])
            throw new Error("Duplicate ".concat(t3, " ").concat(JSON.stringify(e4)));
          n3[e4] = r3;
        }
        return n3;
      }, t2.mapFromArray = function(e3, t3) {
        const n3 = new Map();
        for (const r3 of e3) {
          const e4 = r3[t3];
          if (n3.has(e4))
            throw new Error("Duplicate ".concat(t3, " ").concat(JSON.stringify(e4)));
          n3.set(e4, r3);
        }
        return n3;
      }, t2.createAutoChecklist = function() {
        const e3 = Object.create(null);
        return (t3) => {
          const n3 = JSON.stringify(t3);
          return !!e3[n3] || (e3[n3] = true, false);
        };
      }, t2.partition = function(e3, t3) {
        const n3 = [], r3 = [];
        for (const o2 of e3)
          t3(o2) ? n3.push(o2) : r3.push(o2);
        return [n3, r3];
      }, t2.isInt = function(e3) {
        return e3 === Math.floor(e3);
      }, t2.comparePrimitive = function(e3, t3) {
        if (e3 === t3)
          return 0;
        const n3 = typeof e3, r3 = typeof t3, o2 = ["undefined", "object", "boolean", "number", "string"];
        return n3 !== r3 ? o2.indexOf(n3) - o2.indexOf(r3) : n3 !== "string" ? Number(e3) - Number(t3) : e3.localeCompare(t3);
      }, t2.normalizeDefaultResult = function(e3) {
        return e3 === void 0 ? {} : e3;
      }, t2.normalizeValidateResult = function(e3, t3) {
        return e3 === true || (e3 === false ? {value: t3} : e3);
      }, t2.normalizeDeprecatedResult = function(e3, t3, n3 = false) {
        return e3 !== false && (e3 === true ? !!n3 || [{value: t3}] : "value" in e3 ? [e3] : e3.length !== 0 && e3);
      }, t2.normalizeTransferResult = n2, t2.normalizeForwardResult = r2, t2.normalizeRedirectResult = function(e3, t3) {
        const n3 = r2(typeof e3 == "object" && "redirect" in e3 ? e3.redirect : e3, t3);
        return n3.length === 0 ? {remain: t3, redirect: n3} : typeof e3 == "object" && "remain" in e3 ? {remain: e3.remain, redirect: n3} : {redirect: n3};
      };
    }), Co = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        constructor(e3) {
          super(e3), this._choices = Eo.mapFromArray(e3.choices.map((e4) => e4 && typeof e4 == "object" ? e4 : {value: e4}), "value");
        }
        expected({descriptor: e3}) {
          const t3 = Array.from(this._choices.keys()).map((e4) => this._choices.get(e4)).filter((e4) => !e4.deprecated).map((e4) => e4.value).sort(Eo.comparePrimitive).map(e3.value), n4 = t3.slice(0, -2), r2 = t3.slice(-2);
          return n4.concat(r2.join(" or ")).join(", ");
        }
        validate(e3) {
          return this._choices.has(e3);
        }
        deprecated(e3) {
          const t3 = this._choices.get(e3);
          return !(!t3 || !t3.deprecated) && {value: e3};
        }
        forward(e3) {
          const t3 = this._choices.get(e3);
          return t3 ? t3.forward : void 0;
        }
        redirect(e3) {
          const t3 = this._choices.get(e3);
          return t3 ? t3.redirect : void 0;
        }
      }
      t2.ChoiceSchema = n2;
    }), bo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        expected() {
          return "a number";
        }
        validate(e3, t3) {
          return typeof e3 == "number";
        }
      }
      t2.NumberSchema = n2;
    }), vo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends bo.NumberSchema {
        expected() {
          return "an integer";
        }
        validate(e3, t3) {
          return t3.normalizeValidateResult(super.validate(e3, t3), e3) === true && Eo.isInt(e3);
        }
      }
      t2.IntegerSchema = n2;
    }), Ao = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 extends ho.Schema {
        expected() {
          return "a string";
        }
        validate(e3) {
          return typeof e3 == "string";
        }
      }
      t2.StringSchema = n2;
    }), Fo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(mo, t2), Tr.__exportStar(go, t2), Tr.__exportStar(Do, t2), Tr.__exportStar(yo, t2), Tr.__exportStar(Co, t2), Tr.__exportStar(vo, t2), Tr.__exportStar(bo, t2), Tr.__exportStar(Ao, t2);
    }), xo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.defaultDescriptor = Br.apiDescriptor, t2.defaultUnknownHandler = lo.levenUnknownHandler, t2.defaultInvalidHandler = ao.commonInvalidHandler, t2.defaultDeprecatedHandler = oo.commonDeprecatedHandler;
    }), So = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.normalize = (e3, t3, r2) => new n2(t3, r2).normalize(e3);
      class n2 {
        constructor(e3, t3) {
          const {logger: n4 = console, descriptor: r2 = xo.defaultDescriptor, unknown: o2 = xo.defaultUnknownHandler, invalid: u2 = xo.defaultInvalidHandler, deprecated: i2 = xo.defaultDeprecatedHandler} = t3 || {};
          this._utils = {descriptor: r2, logger: n4 || {warn: () => {
          }}, schemas: Eo.recordFromArray(e3, "name"), normalizeDefaultResult: Eo.normalizeDefaultResult, normalizeDeprecatedResult: Eo.normalizeDeprecatedResult, normalizeForwardResult: Eo.normalizeForwardResult, normalizeRedirectResult: Eo.normalizeRedirectResult, normalizeValidateResult: Eo.normalizeValidateResult}, this._unknownHandler = o2, this._invalidHandler = u2, this._deprecatedHandler = i2, this.cleanHistory();
        }
        cleanHistory() {
          this._hasDeprecationWarned = Eo.createAutoChecklist();
        }
        normalize(e3) {
          const t3 = {}, n4 = [e3], r2 = () => {
            for (; n4.length !== 0; ) {
              const e4 = n4.shift(), r3 = this._applyNormalization(e4, t3);
              n4.push(...r3);
            }
          };
          r2();
          for (const e4 of Object.keys(this._utils.schemas)) {
            const r3 = this._utils.schemas[e4];
            if (!(e4 in t3)) {
              const t4 = Eo.normalizeDefaultResult(r3.default(this._utils));
              "value" in t4 && n4.push({[e4]: t4.value});
            }
          }
          r2();
          for (const e4 of Object.keys(this._utils.schemas)) {
            const n5 = this._utils.schemas[e4];
            e4 in t3 && (t3[e4] = n5.postprocess(t3[e4], this._utils));
          }
          return t3;
        }
        _applyNormalization(e3, t3) {
          const n4 = [], [r2, o2] = Eo.partition(Object.keys(e3), (e4) => e4 in this._utils.schemas);
          for (const o3 of r2) {
            const r3 = this._utils.schemas[o3], u2 = r3.preprocess(e3[o3], this._utils), i2 = Eo.normalizeValidateResult(r3.validate(u2, this._utils), u2);
            if (i2 !== true) {
              const {value: e4} = i2, t4 = this._invalidHandler(o3, e4, this._utils);
              throw typeof t4 == "string" ? new Error(t4) : t4;
            }
            const a2 = ({from: e4, to: t4}) => {
              n4.push(typeof t4 == "string" ? {[t4]: e4} : {[t4.key]: t4.value});
            }, s2 = ({value: e4, redirectTo: t4}) => {
              const n5 = Eo.normalizeDeprecatedResult(r3.deprecated(e4, this._utils), u2, true);
              if (n5 !== false)
                if (n5 === true)
                  this._hasDeprecationWarned(o3) || this._utils.logger.warn(this._deprecatedHandler(o3, t4, this._utils));
                else
                  for (const {value: e5} of n5) {
                    const n6 = {key: o3, value: e5};
                    if (!this._hasDeprecationWarned(n6)) {
                      const r4 = typeof t4 == "string" ? {key: t4, value: e5} : t4;
                      this._utils.logger.warn(this._deprecatedHandler(n6, r4, this._utils));
                    }
                  }
            };
            Eo.normalizeForwardResult(r3.forward(u2, this._utils), u2).forEach(a2);
            const c2 = Eo.normalizeRedirectResult(r3.redirect(u2, this._utils), u2);
            if (c2.redirect.forEach(a2), "remain" in c2) {
              const e4 = c2.remain;
              t3[o3] = o3 in t3 ? r3.overlap(t3[o3], e4, this._utils) : e4, s2({value: e4});
            }
            for (const {from: e4, to: t4} of c2.redirect)
              s2({value: e4, redirectTo: t4});
          }
          for (const r3 of o2) {
            const o3 = e3[r3], u2 = this._unknownHandler(r3, o3, this._utils);
            if (u2)
              for (const e4 of Object.keys(u2)) {
                const r4 = {[e4]: u2[e4]};
                e4 in this._utils.schemas ? n4.push(r4) : Object.assign(t3, r4);
              }
          }
          return n4;
        }
      }
      t2.Normalizer = n2;
    }), wo = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Tr.__exportStar(Nr, t2), Tr.__exportStar(fo, t2), Tr.__exportStar(Fo, t2), Tr.__exportStar(So, t2), Tr.__exportStar(ho, t2);
    });
    const To = [], Bo = [], No = (e2, t2) => {
      if (e2 === t2)
        return 0;
      const n2 = e2;
      e2.length > t2.length && (e2 = t2, t2 = n2);
      let r2 = e2.length, o2 = t2.length;
      for (; r2 > 0 && e2.charCodeAt(~-r2) === t2.charCodeAt(~-o2); )
        r2--, o2--;
      let u2, i2, a2, s2, c2 = 0;
      for (; c2 < r2 && e2.charCodeAt(c2) === t2.charCodeAt(c2); )
        c2++;
      if (r2 -= c2, o2 -= c2, r2 === 0)
        return o2;
      let l2 = 0, p2 = 0;
      for (; l2 < r2; )
        Bo[l2] = e2.charCodeAt(c2 + l2), To[l2] = ++l2;
      for (; p2 < o2; )
        for (u2 = t2.charCodeAt(c2 + p2), a2 = p2++, i2 = p2, l2 = 0; l2 < r2; l2++)
          s2 = u2 === Bo[l2] ? a2 : a2 + 1, a2 = To[l2], i2 = To[l2] = a2 > i2 ? s2 > i2 ? i2 + 1 : s2 : s2 > a2 ? a2 + 1 : s2;
      return i2;
    };
    var ko = No, Po = No;
    ko.default = Po;
    var Oo = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]};
    const Io = {};
    for (const e2 of Object.keys(Oo))
      Io[Oo[e2]] = e2;
    const Lo = {rgb: {channels: 3, labels: "rgb"}, hsl: {channels: 3, labels: "hsl"}, hsv: {channels: 3, labels: "hsv"}, hwb: {channels: 3, labels: "hwb"}, cmyk: {channels: 4, labels: "cmyk"}, xyz: {channels: 3, labels: "xyz"}, lab: {channels: 3, labels: "lab"}, lch: {channels: 3, labels: "lch"}, hex: {channels: 1, labels: ["hex"]}, keyword: {channels: 1, labels: ["keyword"]}, ansi16: {channels: 1, labels: ["ansi16"]}, ansi256: {channels: 1, labels: ["ansi256"]}, hcg: {channels: 3, labels: ["h", "c", "g"]}, apple: {channels: 3, labels: ["r16", "g16", "b16"]}, gray: {channels: 1, labels: ["gray"]}};
    var Mo = Lo;
    for (const e2 of Object.keys(Lo)) {
      if (!("channels" in Lo[e2]))
        throw new Error("missing channels property: " + e2);
      if (!("labels" in Lo[e2]))
        throw new Error("missing channel labels property: " + e2);
      if (Lo[e2].labels.length !== Lo[e2].channels)
        throw new Error("channel and label counts mismatch: " + e2);
      const {channels: t2, labels: n2} = Lo[e2];
      delete Lo[e2].channels, delete Lo[e2].labels, Object.defineProperty(Lo[e2], "channels", {value: t2}), Object.defineProperty(Lo[e2], "labels", {value: n2});
    }
    function jo(e2) {
      const t2 = function() {
        const e3 = {}, t3 = Object.keys(Mo);
        for (let n3 = t3.length, r2 = 0; r2 < n3; r2++)
          e3[t3[r2]] = {distance: -1, parent: null};
        return e3;
      }(), n2 = [e2];
      for (t2[e2].distance = 0; n2.length; ) {
        const e3 = n2.pop(), r2 = Object.keys(Mo[e3]);
        for (let o2 = r2.length, u2 = 0; u2 < o2; u2++) {
          const o3 = r2[u2], i2 = t2[o3];
          i2.distance === -1 && (i2.distance = t2[e3].distance + 1, i2.parent = e3, n2.unshift(o3));
        }
      }
      return t2;
    }
    function _o(e2, t2) {
      return function(n2) {
        return t2(e2(n2));
      };
    }
    function Ro(e2, t2) {
      const n2 = [t2[e2].parent, e2];
      let r2 = Mo[t2[e2].parent][e2], o2 = t2[e2].parent;
      for (; t2[o2].parent; )
        n2.unshift(t2[o2].parent), r2 = _o(Mo[t2[o2].parent][o2], r2), o2 = t2[o2].parent;
      return r2.conversion = n2, r2;
    }
    Lo.rgb.hsl = function(e2) {
      const t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255, o2 = Math.min(t2, n2, r2), u2 = Math.max(t2, n2, r2), i2 = u2 - o2;
      let a2, s2;
      u2 === o2 ? a2 = 0 : t2 === u2 ? a2 = (n2 - r2) / i2 : n2 === u2 ? a2 = 2 + (r2 - t2) / i2 : r2 === u2 && (a2 = 4 + (t2 - n2) / i2), a2 = Math.min(60 * a2, 360), a2 < 0 && (a2 += 360);
      const c2 = (o2 + u2) / 2;
      return s2 = u2 === o2 ? 0 : c2 <= 0.5 ? i2 / (u2 + o2) : i2 / (2 - u2 - o2), [a2, 100 * s2, 100 * c2];
    }, Lo.rgb.hsv = function(e2) {
      let t2, n2, r2, o2, u2;
      const i2 = e2[0] / 255, a2 = e2[1] / 255, s2 = e2[2] / 255, c2 = Math.max(i2, a2, s2), l2 = c2 - Math.min(i2, a2, s2), p2 = function(e3) {
        return (c2 - e3) / 6 / l2 + 0.5;
      };
      return l2 === 0 ? (o2 = 0, u2 = 0) : (u2 = l2 / c2, t2 = p2(i2), n2 = p2(a2), r2 = p2(s2), i2 === c2 ? o2 = r2 - n2 : a2 === c2 ? o2 = 1 / 3 + t2 - r2 : s2 === c2 && (o2 = 2 / 3 + n2 - t2), o2 < 0 ? o2 += 1 : o2 > 1 && (o2 -= 1)), [360 * o2, 100 * u2, 100 * c2];
    }, Lo.rgb.hwb = function(e2) {
      const t2 = e2[0], n2 = e2[1];
      let r2 = e2[2];
      const o2 = Lo.rgb.hsl(e2)[0], u2 = 1 / 255 * Math.min(t2, Math.min(n2, r2));
      return r2 = 1 - 1 / 255 * Math.max(t2, Math.max(n2, r2)), [o2, 100 * u2, 100 * r2];
    }, Lo.rgb.cmyk = function(e2) {
      const t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255, o2 = Math.min(1 - t2, 1 - n2, 1 - r2);
      return [100 * ((1 - t2 - o2) / (1 - o2) || 0), 100 * ((1 - n2 - o2) / (1 - o2) || 0), 100 * ((1 - r2 - o2) / (1 - o2) || 0), 100 * o2];
    }, Lo.rgb.keyword = function(e2) {
      const t2 = Io[e2];
      if (t2)
        return t2;
      let n2, r2 = 1 / 0;
      for (const t3 of Object.keys(Oo)) {
        const i2 = (u2 = Oo[t3], ((o2 = e2)[0] - u2[0]) ** 2 + (o2[1] - u2[1]) ** 2 + (o2[2] - u2[2]) ** 2);
        i2 < r2 && (r2 = i2, n2 = t3);
      }
      var o2, u2;
      return n2;
    }, Lo.keyword.rgb = function(e2) {
      return Oo[e2];
    }, Lo.rgb.xyz = function(e2) {
      let t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255;
      t2 = t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92, n2 = n2 > 0.04045 ? ((n2 + 0.055) / 1.055) ** 2.4 : n2 / 12.92, r2 = r2 > 0.04045 ? ((r2 + 0.055) / 1.055) ** 2.4 : r2 / 12.92;
      return [100 * (0.4124 * t2 + 0.3576 * n2 + 0.1805 * r2), 100 * (0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2), 100 * (0.0193 * t2 + 0.1192 * n2 + 0.9505 * r2)];
    }, Lo.rgb.lab = function(e2) {
      const t2 = Lo.rgb.xyz(e2);
      let n2 = t2[0], r2 = t2[1], o2 = t2[2];
      n2 /= 95.047, r2 /= 100, o2 /= 108.883, n2 = n2 > 8856e-6 ? n2 ** (1 / 3) : 7.787 * n2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116, o2 = o2 > 8856e-6 ? o2 ** (1 / 3) : 7.787 * o2 + 16 / 116;
      return [116 * r2 - 16, 500 * (n2 - r2), 200 * (r2 - o2)];
    }, Lo.hsl.rgb = function(e2) {
      const t2 = e2[0] / 360, n2 = e2[1] / 100, r2 = e2[2] / 100;
      let o2, u2, i2;
      if (n2 === 0)
        return i2 = 255 * r2, [i2, i2, i2];
      o2 = r2 < 0.5 ? r2 * (1 + n2) : r2 + n2 - r2 * n2;
      const a2 = 2 * r2 - o2, s2 = [0, 0, 0];
      for (let e3 = 0; e3 < 3; e3++)
        u2 = t2 + 1 / 3 * -(e3 - 1), u2 < 0 && u2++, u2 > 1 && u2--, i2 = 6 * u2 < 1 ? a2 + 6 * (o2 - a2) * u2 : 2 * u2 < 1 ? o2 : 3 * u2 < 2 ? a2 + (o2 - a2) * (2 / 3 - u2) * 6 : a2, s2[e3] = 255 * i2;
      return s2;
    }, Lo.hsl.hsv = function(e2) {
      const t2 = e2[0];
      let n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = n2;
      const u2 = Math.max(r2, 0.01);
      r2 *= 2, n2 *= r2 <= 1 ? r2 : 2 - r2, o2 *= u2 <= 1 ? u2 : 2 - u2;
      return [t2, 100 * (r2 === 0 ? 2 * o2 / (u2 + o2) : 2 * n2 / (r2 + n2)), 100 * ((r2 + n2) / 2)];
    }, Lo.hsv.rgb = function(e2) {
      const t2 = e2[0] / 60, n2 = e2[1] / 100;
      let r2 = e2[2] / 100;
      const o2 = Math.floor(t2) % 6, u2 = t2 - Math.floor(t2), i2 = 255 * r2 * (1 - n2), a2 = 255 * r2 * (1 - n2 * u2), s2 = 255 * r2 * (1 - n2 * (1 - u2));
      switch (r2 *= 255, o2) {
        case 0:
          return [r2, s2, i2];
        case 1:
          return [a2, r2, i2];
        case 2:
          return [i2, r2, s2];
        case 3:
          return [i2, a2, r2];
        case 4:
          return [s2, i2, r2];
        case 5:
          return [r2, i2, a2];
      }
    }, Lo.hsv.hsl = function(e2) {
      const t2 = e2[0], n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = Math.max(r2, 0.01);
      let u2, i2;
      i2 = (2 - n2) * r2;
      const a2 = (2 - n2) * o2;
      return u2 = n2 * o2, u2 /= a2 <= 1 ? a2 : 2 - a2, u2 = u2 || 0, i2 /= 2, [t2, 100 * u2, 100 * i2];
    }, Lo.hwb.rgb = function(e2) {
      const t2 = e2[0] / 360;
      let n2 = e2[1] / 100, r2 = e2[2] / 100;
      const o2 = n2 + r2;
      let u2;
      o2 > 1 && (n2 /= o2, r2 /= o2);
      const i2 = Math.floor(6 * t2), a2 = 1 - r2;
      u2 = 6 * t2 - i2, (1 & i2) != 0 && (u2 = 1 - u2);
      const s2 = n2 + u2 * (a2 - n2);
      let c2, l2, p2;
      switch (i2) {
        default:
        case 6:
        case 0:
          c2 = a2, l2 = s2, p2 = n2;
          break;
        case 1:
          c2 = s2, l2 = a2, p2 = n2;
          break;
        case 2:
          c2 = n2, l2 = a2, p2 = s2;
          break;
        case 3:
          c2 = n2, l2 = s2, p2 = a2;
          break;
        case 4:
          c2 = s2, l2 = n2, p2 = a2;
          break;
        case 5:
          c2 = a2, l2 = n2, p2 = s2;
      }
      return [255 * c2, 255 * l2, 255 * p2];
    }, Lo.cmyk.rgb = function(e2) {
      const t2 = e2[0] / 100, n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = e2[3] / 100;
      return [255 * (1 - Math.min(1, t2 * (1 - o2) + o2)), 255 * (1 - Math.min(1, n2 * (1 - o2) + o2)), 255 * (1 - Math.min(1, r2 * (1 - o2) + o2))];
    }, Lo.xyz.rgb = function(e2) {
      const t2 = e2[0] / 100, n2 = e2[1] / 100, r2 = e2[2] / 100;
      let o2, u2, i2;
      return o2 = 3.2406 * t2 + -1.5372 * n2 + -0.4986 * r2, u2 = -0.9689 * t2 + 1.8758 * n2 + 0.0415 * r2, i2 = 0.0557 * t2 + -0.204 * n2 + 1.057 * r2, o2 = o2 > 31308e-7 ? 1.055 * o2 ** (1 / 2.4) - 0.055 : 12.92 * o2, u2 = u2 > 31308e-7 ? 1.055 * u2 ** (1 / 2.4) - 0.055 : 12.92 * u2, i2 = i2 > 31308e-7 ? 1.055 * i2 ** (1 / 2.4) - 0.055 : 12.92 * i2, o2 = Math.min(Math.max(0, o2), 1), u2 = Math.min(Math.max(0, u2), 1), i2 = Math.min(Math.max(0, i2), 1), [255 * o2, 255 * u2, 255 * i2];
    }, Lo.xyz.lab = function(e2) {
      let t2 = e2[0], n2 = e2[1], r2 = e2[2];
      t2 /= 95.047, n2 /= 100, r2 /= 108.883, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116, n2 = n2 > 8856e-6 ? n2 ** (1 / 3) : 7.787 * n2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116;
      return [116 * n2 - 16, 500 * (t2 - n2), 200 * (n2 - r2)];
    }, Lo.lab.xyz = function(e2) {
      let t2, n2, r2;
      n2 = (e2[0] + 16) / 116, t2 = e2[1] / 500 + n2, r2 = n2 - e2[2] / 200;
      const o2 = n2 ** 3, u2 = t2 ** 3, i2 = r2 ** 3;
      return n2 = o2 > 8856e-6 ? o2 : (n2 - 16 / 116) / 7.787, t2 = u2 > 8856e-6 ? u2 : (t2 - 16 / 116) / 7.787, r2 = i2 > 8856e-6 ? i2 : (r2 - 16 / 116) / 7.787, t2 *= 95.047, n2 *= 100, r2 *= 108.883, [t2, n2, r2];
    }, Lo.lab.lch = function(e2) {
      const t2 = e2[0], n2 = e2[1], r2 = e2[2];
      let o2;
      o2 = 360 * Math.atan2(r2, n2) / 2 / Math.PI, o2 < 0 && (o2 += 360);
      return [t2, Math.sqrt(n2 * n2 + r2 * r2), o2];
    }, Lo.lch.lab = function(e2) {
      const t2 = e2[0], n2 = e2[1], r2 = e2[2] / 360 * 2 * Math.PI;
      return [t2, n2 * Math.cos(r2), n2 * Math.sin(r2)];
    }, Lo.rgb.ansi16 = function(e2, t2 = null) {
      const [n2, r2, o2] = e2;
      let u2 = t2 === null ? Lo.rgb.hsv(e2)[2] : t2;
      if (u2 = Math.round(u2 / 50), u2 === 0)
        return 30;
      let i2 = 30 + (Math.round(o2 / 255) << 2 | Math.round(r2 / 255) << 1 | Math.round(n2 / 255));
      return u2 === 2 && (i2 += 60), i2;
    }, Lo.hsv.ansi16 = function(e2) {
      return Lo.rgb.ansi16(Lo.hsv.rgb(e2), e2[2]);
    }, Lo.rgb.ansi256 = function(e2) {
      const t2 = e2[0], n2 = e2[1], r2 = e2[2];
      if (t2 === n2 && n2 === r2)
        return t2 < 8 ? 16 : t2 > 248 ? 231 : Math.round((t2 - 8) / 247 * 24) + 232;
      return 16 + 36 * Math.round(t2 / 255 * 5) + 6 * Math.round(n2 / 255 * 5) + Math.round(r2 / 255 * 5);
    }, Lo.ansi16.rgb = function(e2) {
      let t2 = e2 % 10;
      if (t2 === 0 || t2 === 7)
        return e2 > 50 && (t2 += 3.5), t2 = t2 / 10.5 * 255, [t2, t2, t2];
      const n2 = 0.5 * (1 + ~~(e2 > 50));
      return [(1 & t2) * n2 * 255, (t2 >> 1 & 1) * n2 * 255, (t2 >> 2 & 1) * n2 * 255];
    }, Lo.ansi256.rgb = function(e2) {
      if (e2 >= 232) {
        const t3 = 10 * (e2 - 232) + 8;
        return [t3, t3, t3];
      }
      let t2;
      e2 -= 16;
      return [Math.floor(e2 / 36) / 5 * 255, Math.floor((t2 = e2 % 36) / 6) / 5 * 255, t2 % 6 / 5 * 255];
    }, Lo.rgb.hex = function(e2) {
      const t2 = (((255 & Math.round(e2[0])) << 16) + ((255 & Math.round(e2[1])) << 8) + (255 & Math.round(e2[2]))).toString(16).toUpperCase();
      return "000000".substring(t2.length) + t2;
    }, Lo.hex.rgb = function(e2) {
      const t2 = e2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t2)
        return [0, 0, 0];
      let n2 = t2[0];
      t2[0].length === 3 && (n2 = n2.split("").map((e3) => e3 + e3).join(""));
      const r2 = parseInt(n2, 16);
      return [r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2];
    }, Lo.rgb.hcg = function(e2) {
      const t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255, o2 = Math.max(Math.max(t2, n2), r2), u2 = Math.min(Math.min(t2, n2), r2), i2 = o2 - u2;
      let a2, s2;
      return a2 = i2 < 1 ? u2 / (1 - i2) : 0, s2 = i2 <= 0 ? 0 : o2 === t2 ? (n2 - r2) / i2 % 6 : o2 === n2 ? 2 + (r2 - t2) / i2 : 4 + (t2 - n2) / i2, s2 /= 6, s2 %= 1, [360 * s2, 100 * i2, 100 * a2];
    }, Lo.hsl.hcg = function(e2) {
      const t2 = e2[1] / 100, n2 = e2[2] / 100, r2 = n2 < 0.5 ? 2 * t2 * n2 : 2 * t2 * (1 - n2);
      let o2 = 0;
      return r2 < 1 && (o2 = (n2 - 0.5 * r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
    }, Lo.hsv.hcg = function(e2) {
      const t2 = e2[1] / 100, n2 = e2[2] / 100, r2 = t2 * n2;
      let o2 = 0;
      return r2 < 1 && (o2 = (n2 - r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
    }, Lo.hcg.rgb = function(e2) {
      const t2 = e2[0] / 360, n2 = e2[1] / 100, r2 = e2[2] / 100;
      if (n2 === 0)
        return [255 * r2, 255 * r2, 255 * r2];
      const o2 = [0, 0, 0], u2 = t2 % 1 * 6, i2 = u2 % 1, a2 = 1 - i2;
      let s2 = 0;
      switch (Math.floor(u2)) {
        case 0:
          o2[0] = 1, o2[1] = i2, o2[2] = 0;
          break;
        case 1:
          o2[0] = a2, o2[1] = 1, o2[2] = 0;
          break;
        case 2:
          o2[0] = 0, o2[1] = 1, o2[2] = i2;
          break;
        case 3:
          o2[0] = 0, o2[1] = a2, o2[2] = 1;
          break;
        case 4:
          o2[0] = i2, o2[1] = 0, o2[2] = 1;
          break;
        default:
          o2[0] = 1, o2[1] = 0, o2[2] = a2;
      }
      return s2 = (1 - n2) * r2, [255 * (n2 * o2[0] + s2), 255 * (n2 * o2[1] + s2), 255 * (n2 * o2[2] + s2)];
    }, Lo.hcg.hsv = function(e2) {
      const t2 = e2[1] / 100, n2 = t2 + e2[2] / 100 * (1 - t2);
      let r2 = 0;
      return n2 > 0 && (r2 = t2 / n2), [e2[0], 100 * r2, 100 * n2];
    }, Lo.hcg.hsl = function(e2) {
      const t2 = e2[1] / 100, n2 = e2[2] / 100 * (1 - t2) + 0.5 * t2;
      let r2 = 0;
      return n2 > 0 && n2 < 0.5 ? r2 = t2 / (2 * n2) : n2 >= 0.5 && n2 < 1 && (r2 = t2 / (2 * (1 - n2))), [e2[0], 100 * r2, 100 * n2];
    }, Lo.hcg.hwb = function(e2) {
      const t2 = e2[1] / 100, n2 = t2 + e2[2] / 100 * (1 - t2);
      return [e2[0], 100 * (n2 - t2), 100 * (1 - n2)];
    }, Lo.hwb.hcg = function(e2) {
      const t2 = e2[1] / 100, n2 = 1 - e2[2] / 100, r2 = n2 - t2;
      let o2 = 0;
      return r2 < 1 && (o2 = (n2 - r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
    }, Lo.apple.rgb = function(e2) {
      return [e2[0] / 65535 * 255, e2[1] / 65535 * 255, e2[2] / 65535 * 255];
    }, Lo.rgb.apple = function(e2) {
      return [e2[0] / 255 * 65535, e2[1] / 255 * 65535, e2[2] / 255 * 65535];
    }, Lo.gray.rgb = function(e2) {
      return [e2[0] / 100 * 255, e2[0] / 100 * 255, e2[0] / 100 * 255];
    }, Lo.gray.hsl = function(e2) {
      return [0, 0, e2[0]];
    }, Lo.gray.hsv = Lo.gray.hsl, Lo.gray.hwb = function(e2) {
      return [0, 100, e2[0]];
    }, Lo.gray.cmyk = function(e2) {
      return [0, 0, 0, e2[0]];
    }, Lo.gray.lab = function(e2) {
      return [e2[0], 0, 0];
    }, Lo.gray.hex = function(e2) {
      const t2 = 255 & Math.round(e2[0] / 100 * 255), n2 = ((t2 << 16) + (t2 << 8) + t2).toString(16).toUpperCase();
      return "000000".substring(n2.length) + n2;
    }, Lo.rgb.gray = function(e2) {
      return [(e2[0] + e2[1] + e2[2]) / 3 / 255 * 100];
    };
    const Vo = {};
    Object.keys(Mo).forEach((e2) => {
      Vo[e2] = {}, Object.defineProperty(Vo[e2], "channels", {value: Mo[e2].channels}), Object.defineProperty(Vo[e2], "labels", {value: Mo[e2].labels});
      const t2 = function(e3) {
        const t3 = jo(e3), n2 = {}, r2 = Object.keys(t3);
        for (let e4 = r2.length, o2 = 0; o2 < e4; o2++) {
          const e5 = r2[o2];
          t3[e5].parent !== null && (n2[e5] = Ro(e5, t3));
        }
        return n2;
      }(e2);
      Object.keys(t2).forEach((n2) => {
        const r2 = t2[n2];
        Vo[e2][n2] = function(e3) {
          const t3 = function(...t4) {
            const n3 = t4[0];
            if (n3 == null)
              return n3;
            n3.length > 1 && (t4 = n3);
            const r3 = e3(t4);
            if (typeof r3 == "object")
              for (let e4 = r3.length, t5 = 0; t5 < e4; t5++)
                r3[t5] = Math.round(r3[t5]);
            return r3;
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        }(r2), Vo[e2][n2].raw = function(e3) {
          const t3 = function(...t4) {
            const n3 = t4[0];
            return n3 == null ? n3 : (n3.length > 1 && (t4 = n3), e3(t4));
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        }(r2);
      });
    });
    var $o = Vo, qo = je(function(e2) {
      const t2 = (e3, t3) => (...n3) => {
        const r3 = e3(...n3);
        return "[".concat(r3 + t3, "m");
      }, n2 = (e3, t3) => (...n3) => {
        const r3 = e3(...n3);
        return "[".concat(38 + t3, ";5;").concat(r3, "m");
      }, r2 = (e3, t3) => (...n3) => {
        const r3 = e3(...n3);
        return "[".concat(38 + t3, ";2;").concat(r3[0], ";").concat(r3[1], ";").concat(r3[2], "m");
      }, o2 = (e3) => e3, u2 = (e3, t3, n3) => [e3, t3, n3], i2 = (e3, t3, n3) => {
        Object.defineProperty(e3, t3, {get: () => {
          const r3 = n3();
          return Object.defineProperty(e3, t3, {value: r3, enumerable: true, configurable: true}), r3;
        }, enumerable: true, configurable: true});
      };
      let a2;
      const s2 = (e3, t3, n3, r3) => {
        a2 === void 0 && (a2 = $o);
        const o3 = r3 ? 10 : 0, u3 = {};
        for (const [r4, i3] of Object.entries(a2)) {
          const a3 = r4 === "ansi16" ? "ansi" : r4;
          r4 === t3 ? u3[a3] = e3(n3, o3) : typeof i3 == "object" && (u3[a3] = e3(i3[t3], o3));
        }
        return u3;
      };
      Object.defineProperty(e2, "exports", {enumerable: true, get: function() {
        const e3 = new Map(), a3 = {modifier: {reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29]}, color: {black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39]}, bgColor: {bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49]}};
        a3.color.gray = a3.color.blackBright, a3.bgColor.bgGray = a3.bgColor.bgBlackBright, a3.color.grey = a3.color.blackBright, a3.bgColor.bgGrey = a3.bgColor.bgBlackBright;
        for (const [t3, n3] of Object.entries(a3)) {
          for (const [t4, r3] of Object.entries(n3))
            a3[t4] = {open: "[".concat(r3[0], "m"), close: "[".concat(r3[1], "m")}, n3[t4] = a3[t4], e3.set(r3[0], r3[1]);
          Object.defineProperty(a3, t3, {value: n3, enumerable: false});
        }
        return Object.defineProperty(a3, "codes", {value: e3, enumerable: false}), a3.color.close = "[39m", a3.bgColor.close = "[49m", i2(a3.color, "ansi", () => s2(t2, "ansi16", o2, false)), i2(a3.color, "ansi256", () => s2(n2, "ansi256", o2, false)), i2(a3.color, "ansi16m", () => s2(r2, "rgb", u2, false)), i2(a3.bgColor, "ansi", () => s2(t2, "ansi16", o2, true)), i2(a3.bgColor, "ansi256", () => s2(n2, "ansi256", o2, true)), i2(a3.bgColor, "ansi16m", () => s2(r2, "rgb", u2, true)), a3;
      }});
    }), Wo = {isatty: () => false}, Uo = (e2, t2 = Oe.argv) => {
      const n2 = e2.startsWith("-") ? "" : e2.length === 1 ? "-" : "--", r2 = t2.indexOf(n2 + e2), o2 = t2.indexOf("--");
      return r2 !== -1 && (o2 === -1 || r2 < o2);
    }, Jo = _e(Object.freeze({__proto__: null, default: Wo}));
    const {env: zo} = Oe;
    let Ho;
    function Go(e2) {
      return e2 !== 0 && {level: e2, hasBasic: true, has256: e2 >= 2, has16m: e2 >= 3};
    }
    function Xo(e2, t2) {
      if (Ho === 0)
        return 0;
      if (Uo("color=16m") || Uo("color=full") || Uo("color=truecolor"))
        return 3;
      if (Uo("color=256"))
        return 2;
      if (e2 && !t2 && Ho === void 0)
        return 0;
      const n2 = Ho || 0;
      if (zo.TERM === "dumb")
        return n2;
      if (Oe.platform === "win32") {
        const e3 = qr.release().split(".");
        return Number(e3[0]) >= 10 && Number(e3[2]) >= 10586 ? Number(e3[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in zo)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e3) => e3 in zo) || zo.CI_NAME === "codeship" ? 1 : n2;
      if ("TEAMCITY_VERSION" in zo)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(zo.TEAMCITY_VERSION) ? 1 : 0;
      if ("GITHUB_ACTIONS" in zo)
        return 1;
      if (zo.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in zo) {
        const e3 = parseInt((zo.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (zo.TERM_PROGRAM) {
          case "iTerm.app":
            return e3 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(zo.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(zo.TERM) || "COLORTERM" in zo ? 1 : n2;
    }
    Uo("no-color") || Uo("no-colors") || Uo("color=false") || Uo("color=never") ? Ho = 0 : (Uo("color") || Uo("colors") || Uo("color=true") || Uo("color=always")) && (Ho = 1), "FORCE_COLOR" in zo && (Ho = zo.FORCE_COLOR === "true" ? 1 : zo.FORCE_COLOR === "false" ? 0 : zo.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(zo.FORCE_COLOR, 10), 3));
    var Yo = {supportsColor: function(e2) {
      return Go(Xo(e2, e2 && e2.isTTY));
    }, stdout: Go(Xo(true, Jo.isatty(1))), stderr: Go(Xo(true, Jo.isatty(2)))};
    var Ko = {stringReplaceAll: (e2, t2, n2) => {
      let r2 = e2.indexOf(t2);
      if (r2 === -1)
        return e2;
      const o2 = t2.length;
      let u2 = 0, i2 = "";
      do {
        i2 += e2.substr(u2, r2 - u2) + t2 + n2, u2 = r2 + o2, r2 = e2.indexOf(t2, u2);
      } while (r2 !== -1);
      return i2 += e2.substr(u2), i2;
    }, stringEncaseCRLFWithFirstIndex: (e2, t2, n2, r2) => {
      let o2 = 0, u2 = "";
      do {
        const i2 = e2[r2 - 1] === "\r";
        u2 += e2.substr(o2, (i2 ? r2 - 1 : r2) - o2) + t2 + (i2 ? "\r\n" : "\n") + n2, o2 = r2 + 1, r2 = e2.indexOf("\n", o2);
      } while (r2 !== -1);
      return u2 += e2.substr(o2), u2;
    }};
    const Qo = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Zo = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, eu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, tu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, nu = new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", "\x07"]]);
    function ru(e2) {
      const t2 = e2[0] === "u", n2 = e2[1] === "{";
      return t2 && !n2 && e2.length === 5 || e2[0] === "x" && e2.length === 3 ? String.fromCharCode(parseInt(e2.slice(1), 16)) : t2 && n2 ? String.fromCodePoint(parseInt(e2.slice(2, -1), 16)) : nu.get(e2) || e2;
    }
    function ou(e2, t2) {
      const n2 = [], r2 = t2.trim().split(/\s*,\s*/g);
      let o2;
      for (const t3 of r2) {
        const r3 = Number(t3);
        if (Number.isNaN(r3)) {
          if (!(o2 = t3.match(eu)))
            throw new Error("Invalid Chalk template style argument: ".concat(t3, " (in style '").concat(e2, "')"));
          n2.push(o2[2].replace(tu, (e3, t4, n3) => t4 ? ru(t4) : n3));
        } else
          n2.push(r3);
      }
      return n2;
    }
    function uu(e2) {
      Zo.lastIndex = 0;
      const t2 = [];
      let n2;
      for (; (n2 = Zo.exec(e2)) !== null; ) {
        const e3 = n2[1];
        if (n2[2]) {
          const r2 = ou(e3, n2[2]);
          t2.push([e3].concat(r2));
        } else
          t2.push([e3]);
      }
      return t2;
    }
    function iu(e2, t2) {
      const n2 = {};
      for (const e3 of t2)
        for (const t3 of e3.styles)
          n2[t3[0]] = e3.inverse ? null : t3.slice(1);
      let r2 = e2;
      for (const [e3, t3] of Object.entries(n2))
        if (Array.isArray(t3)) {
          if (!(e3 in r2))
            throw new Error("Unknown Chalk style: ".concat(e3));
          r2 = t3.length > 0 ? r2[e3](...t3) : r2[e3];
        }
      return r2;
    }
    var au = (e2, t2) => {
      const n2 = [], r2 = [];
      let o2 = [];
      if (t2.replace(Qo, (t3, u2, i2, a2, s2, c2) => {
        if (u2)
          o2.push(ru(u2));
        else if (a2) {
          const t4 = o2.join("");
          o2 = [], r2.push(n2.length === 0 ? t4 : iu(e2, n2)(t4)), n2.push({inverse: i2, styles: uu(a2)});
        } else if (s2) {
          if (n2.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          r2.push(iu(e2, n2)(o2.join(""))), o2 = [], n2.pop();
        } else
          o2.push(c2);
      }), r2.push(o2.join("")), n2.length > 0) {
        const e3 = "Chalk template literal is missing ".concat(n2.length, " closing bracket").concat(n2.length === 1 ? "" : "s", " (`}`)");
        throw new Error(e3);
      }
      return r2.join("");
    };
    const {stdout: su, stderr: cu} = Yo, {stringReplaceAll: lu, stringEncaseCRLFWithFirstIndex: pu} = Ko, {isArray: du} = Array, fu = ["ansi", "ansi", "ansi256", "ansi16m"], hu = Object.create(null);
    class mu {
      constructor(e2) {
        return gu(e2);
      }
    }
    const gu = (e2) => {
      const t2 = {};
      return ((e3, t3 = {}) => {
        if (t3.level && !(Number.isInteger(t3.level) && t3.level >= 0 && t3.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        const n2 = su ? su.level : 0;
        e3.level = t3.level === void 0 ? n2 : t3.level;
      })(t2, e2), t2.template = (...e3) => Fu(t2.template, ...e3), Object.setPrototypeOf(t2, Du.prototype), Object.setPrototypeOf(t2.template, t2), t2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      }, t2.template.Instance = mu, t2.template;
    };
    function Du(e2) {
      return gu(e2);
    }
    for (const [e2, t2] of Object.entries(qo))
      hu[e2] = {get() {
        const n2 = bu(this, Cu(t2.open, t2.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, e2, {value: n2}), n2;
      }};
    hu.visible = {get() {
      const e2 = bu(this, this._styler, true);
      return Object.defineProperty(this, "visible", {value: e2}), e2;
    }};
    const yu = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const e2 of yu)
      hu[e2] = {get() {
        const {level: t2} = this;
        return function(...n2) {
          const r2 = Cu(qo.color[fu[t2]][e2](...n2), qo.color.close, this._styler);
          return bu(this, r2, this._isEmpty);
        };
      }};
    for (const e2 of yu) {
      hu["bg" + e2[0].toUpperCase() + e2.slice(1)] = {get() {
        const {level: t2} = this;
        return function(...n2) {
          const r2 = Cu(qo.bgColor[fu[t2]][e2](...n2), qo.bgColor.close, this._styler);
          return bu(this, r2, this._isEmpty);
        };
      }};
    }
    const Eu = Object.defineProperties(() => {
    }, Object.assign({}, hu, {level: {enumerable: true, get() {
      return this._generator.level;
    }, set(e2) {
      this._generator.level = e2;
    }}})), Cu = (e2, t2, n2) => {
      let r2, o2;
      return n2 === void 0 ? (r2 = e2, o2 = t2) : (r2 = n2.openAll + e2, o2 = t2 + n2.closeAll), {open: e2, close: t2, openAll: r2, closeAll: o2, parent: n2};
    }, bu = (e2, t2, n2) => {
      const r2 = (...e3) => du(e3[0]) && du(e3[0].raw) ? vu(r2, Fu(r2, ...e3)) : vu(r2, e3.length === 1 ? "" + e3[0] : e3.join(" "));
      return Object.setPrototypeOf(r2, Eu), r2._generator = e2, r2._styler = t2, r2._isEmpty = n2, r2;
    }, vu = (e2, t2) => {
      if (e2.level <= 0 || !t2)
        return e2._isEmpty ? "" : t2;
      let n2 = e2._styler;
      if (n2 === void 0)
        return t2;
      const {openAll: r2, closeAll: o2} = n2;
      if (t2.indexOf("") !== -1)
        for (; n2 !== void 0; )
          t2 = lu(t2, n2.close, n2.open), n2 = n2.parent;
      const u2 = t2.indexOf("\n");
      return u2 !== -1 && (t2 = pu(t2, o2, r2, u2)), r2 + t2 + o2;
    };
    let Au;
    const Fu = (e2, ...t2) => {
      const [n2] = t2;
      if (!du(n2) || !du(n2.raw))
        return t2.join(" ");
      const r2 = t2.slice(1), o2 = [n2.raw[0]];
      for (let e3 = 1; e3 < n2.length; e3++)
        o2.push(String(r2[e3 - 1]).replace(/[{}\\]/g, "\\$&"), String(n2.raw[e3]));
      return Au === void 0 && (Au = au), Au(e2, o2.join(""));
    };
    Object.defineProperties(Du.prototype, hu);
    const xu = Du();
    xu.supportsColor = su, xu.stderr = Du({level: cu ? cu.level : 0}), xu.stderr.supportsColor = cu;
    var Su = xu;
    var wu = function(e2, t2) {
      for (var n2 = -1, r2 = t2.length, o2 = e2.length; ++n2 < r2; )
        e2[o2 + n2] = t2[n2];
      return e2;
    }, Tu = typeof Me == "object" && Me && Me.Object === Object && Me, Bu = typeof self == "object" && self && self.Object === Object && self, Nu = (Tu || Bu || Function("return this")()).Symbol, ku = Object.prototype, Pu = ku.hasOwnProperty, Ou = ku.toString, Iu = Nu ? Nu.toStringTag : void 0;
    var Lu = function(e2) {
      var t2 = Pu.call(e2, Iu), n2 = e2[Iu];
      try {
        e2[Iu] = void 0;
        var r2 = true;
      } catch (e3) {
      }
      var o2 = Ou.call(e2);
      return r2 && (t2 ? e2[Iu] = n2 : delete e2[Iu]), o2;
    }, Mu = Object.prototype.toString;
    var ju = function(e2) {
      return Mu.call(e2);
    }, _u = Nu ? Nu.toStringTag : void 0;
    var Ru = function(e2) {
      return e2 == null ? e2 === void 0 ? "[object Undefined]" : "[object Null]" : _u && _u in Object(e2) ? Lu(e2) : ju(e2);
    };
    var Vu = function(e2) {
      return e2 != null && typeof e2 == "object";
    };
    var $u = function(e2) {
      return Vu(e2) && Ru(e2) == "[object Arguments]";
    }, qu = Object.prototype, Wu = qu.hasOwnProperty, Uu = qu.propertyIsEnumerable, Ju = $u(function() {
      return arguments;
    }()) ? $u : function(e2) {
      return Vu(e2) && Wu.call(e2, "callee") && !Uu.call(e2, "callee");
    }, zu = Array.isArray, Hu = Nu ? Nu.isConcatSpreadable : void 0;
    var Gu = function(e2) {
      return zu(e2) || Ju(e2) || !!(Hu && e2 && e2[Hu]);
    };
    var Xu = function e2(t2, n2, r2, o2, u2) {
      var i2 = -1, a2 = t2.length;
      for (r2 || (r2 = Gu), u2 || (u2 = []); ++i2 < a2; ) {
        var s2 = t2[i2];
        n2 > 0 && r2(s2) ? n2 > 1 ? e2(s2, n2 - 1, r2, o2, u2) : wu(u2, s2) : o2 || (u2[u2.length] = s2);
      }
      return u2;
    };
    var Yu = function(e2) {
      return (e2 == null ? 0 : e2.length) ? Xu(e2, 1) : [];
    };
    const Ku = {key: (e2) => e2.length === 1 ? "-".concat(e2) : "--".concat(e2), value: (e2) => wo.apiDescriptor.value(e2), pair: ({key: e2, value: t2}) => t2 === false ? "--no-".concat(e2) : t2 === true ? Ku.key(e2) : t2 === "" ? "".concat(Ku.key(e2), " without an argument") : "".concat(Ku.key(e2), "=").concat(t2)};
    class Qu extends wo.ChoiceSchema {
      constructor({name: e2, flags: t2}) {
        super({name: e2, choices: t2}), this._flags = t2.slice().sort();
      }
      preprocess(e2, t2) {
        if (typeof e2 == "string" && e2.length !== 0 && !this._flags.includes(e2)) {
          const n2 = this._flags.find((t3) => ko(t3, e2) < 3);
          if (n2)
            return t2.logger.warn(["Unknown flag ".concat(Su.yellow(t2.descriptor.value(e2)), ","), "did you mean ".concat(Su.blue(t2.descriptor.value(n2)), "?")].join(" ")), n2;
        }
        return e2;
      }
      expected() {
        return "a flag";
      }
    }
    let Zu;
    function ei(t2, n2, {logger: r2, isCLI: o2 = false, passThrough: u2 = false} = {}) {
      const i2 = u2 ? Array.isArray(u2) ? (e2, t3) => u2.includes(e2) ? {[e2]: t3} : void 0 : (e2, t3) => ({[e2]: t3}) : (t3, n3, r3) => {
        const o3 = e(r3.schemas, ["_"]);
        return wo.levenUnknownHandler(t3, n3, Object.assign({}, r3, {schemas: o3}));
      }, a2 = o2 ? Ku : wo.apiDescriptor, s2 = function(e2, {isCLI: t3}) {
        const n3 = [];
        t3 && n3.push(wo.AnySchema.create({name: "_"}));
        for (const r3 of e2)
          n3.push(ti(r3, {isCLI: t3, optionInfos: e2})), r3.alias && t3 && n3.push(wo.AliasSchema.create({name: r3.alias, sourceName: r3.name}));
        return n3;
      }(n2, {isCLI: o2}), c2 = new wo.Normalizer(s2, {logger: r2, unknown: i2, descriptor: a2}), l2 = r2 !== false;
      l2 && Zu && (c2._hasDeprecationWarned = Zu);
      const p2 = c2.normalize(t2);
      return l2 && (Zu = c2._hasDeprecationWarned), p2;
    }
    function ti(e2, {isCLI: t2, optionInfos: n2}) {
      let r2;
      const o2 = {name: e2.name}, u2 = {};
      switch (e2.type) {
        case "int":
          r2 = wo.IntegerSchema, t2 && (o2.preprocess = (e3) => Number(e3));
          break;
        case "string":
          r2 = wo.StringSchema;
          break;
        case "choice":
          r2 = wo.ChoiceSchema, o2.choices = e2.choices.map((t3) => typeof t3 == "object" && t3.redirect ? Object.assign({}, t3, {redirect: {to: {key: e2.name, value: t3.redirect}}}) : t3);
          break;
        case "boolean":
          r2 = wo.BooleanSchema;
          break;
        case "flag":
          r2 = Qu, o2.flags = Yu(n2.map((e3) => [e3.alias, e3.description && e3.name, e3.oppositeDescription && "no-".concat(e3.name)].filter(Boolean)));
          break;
        case "path":
          r2 = wo.StringSchema;
          break;
        default:
          throw new Error("Unexpected type ".concat(e2.type));
      }
      if (e2.exception ? o2.validate = (t3, n3, r3) => e2.exception(t3) || n3.validate(t3, r3) : o2.validate = (e3, t3, n3) => e3 === void 0 || t3.validate(e3, n3), e2.redirect && (u2.redirect = (t3) => t3 ? {to: {key: e2.redirect.option, value: e2.redirect.value}} : void 0), e2.deprecated && (u2.deprecated = true), t2 && !e2.array) {
        const e3 = o2.preprocess || ((e4) => e4);
        o2.preprocess = (t3, n3, r3) => n3.preprocess(e3(Array.isArray(t3) ? t3[t3.length - 1] : t3), r3);
      }
      return e2.array ? wo.ArraySchema.create(Object.assign({}, t2 ? {preprocess: (e3) => [].concat(e3)} : {}, u2, {valueSchema: r2.create(o2)})) : r2.create(Object.assign({}, o2, u2));
    }
    var ni = {normalizeApiOptions: function(e2, t2, n2) {
      return ei(e2, t2, n2);
    }, normalizeCliOptions: function(e2, t2, n2) {
      return ei(e2, t2, Object.assign({isCLI: true}, n2));
    }};
    function ri(e2, t2) {
      const {ignoreDecorators: n2} = t2 || {};
      if (!n2) {
        const t3 = e2.declaration && e2.declaration.decorators || e2.decorators;
        if (t3 && t3.length > 0)
          return ri(t3[0]);
      }
      return e2.range ? e2.range[0] : e2.start;
    }
    function oi(e2) {
      const t2 = e2.range ? e2.range[1] : e2.end;
      return e2.typeAnnotation ? Math.max(t2, oi(e2.typeAnnotation)) : t2;
    }
    function ui(e2, t2) {
      return ri(e2) === ri(t2);
    }
    var ii = {locStart: ri, locEnd: oi, composeLoc: function(e2, t2 = e2) {
      const n2 = ri(e2);
      return [n2, typeof t2 == "number" ? n2 + t2 : oi(t2)];
    }, hasSameLocStart: ui, hasSameLoc: function(e2, t2) {
      return ui(e2, t2) && function(e3, t3) {
        return oi(e3) === oi(t3);
      }(e2, t2);
    }}, ai = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t2.matchToToken = function(e3) {
        var t3 = {type: "invalid", value: e3[0], closed: void 0};
        return e3[1] ? (t3.type = "string", t3.closed = !(!e3[3] && !e3[4])) : e3[5] ? t3.type = "comment" : e3[6] ? (t3.type = "comment", t3.closed = !!e3[7]) : e3[8] ? t3.type = "regex" : e3[9] ? t3.type = "number" : e3[10] ? t3.type = "name" : e3[11] ? t3.type = "punctuator" : e3[12] && (t3.type = "whitespace"), t3;
      };
    }), si = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.isIdentifierStart = c2, t2.isIdentifierChar = l2, t2.isIdentifierName = function(e3) {
        let t3 = true;
        for (let n3 = 0, r3 = Array.from(e3); n3 < r3.length; n3++) {
          const e4 = r3[n3].codePointAt(0);
          if (t3) {
            if (!c2(e4))
              return false;
            t3 = false;
          } else if (!l2(e4))
            return false;
        }
        return !t3;
      };
      let n2 = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", r2 = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
      const o2 = new RegExp("[" + n2 + "]"), u2 = new RegExp("[" + n2 + r2 + "]");
      n2 = r2 = null;
      const i2 = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], a2 = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
      function s2(e3, t3) {
        let n3 = 65536;
        for (let r3 = 0, o3 = t3.length; r3 < o3; r3 += 2) {
          if (n3 += t3[r3], n3 > e3)
            return false;
          if (n3 += t3[r3 + 1], n3 >= e3)
            return true;
        }
        return false;
      }
      function c2(e3) {
        return e3 < 65 ? e3 === 36 : e3 <= 90 || (e3 < 97 ? e3 === 95 : e3 <= 122 || (e3 <= 65535 ? e3 >= 170 && o2.test(String.fromCharCode(e3)) : s2(e3, i2)));
      }
      function l2(e3) {
        return e3 < 48 ? e3 === 36 : e3 < 58 || !(e3 < 65) && (e3 <= 90 || (e3 < 97 ? e3 === 95 : e3 <= 122 || (e3 <= 65535 ? e3 >= 170 && u2.test(String.fromCharCode(e3)) : s2(e3, i2) || s2(e3, a2))));
      }
    }), ci = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.isReservedWord = a2, t2.isStrictReservedWord = s2, t2.isStrictBindOnlyReservedWord = c2, t2.isStrictBindReservedWord = function(e3, t3) {
        return s2(e3, t3) || c2(e3);
      }, t2.isKeyword = function(e3) {
        return o2.has(e3);
      };
      const n2 = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], r2 = ["eval", "arguments"], o2 = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]), u2 = new Set(n2), i2 = new Set(r2);
      function a2(e3, t3) {
        return t3 && e3 === "await" || e3 === "enum";
      }
      function s2(e3, t3) {
        return a2(e3, t3) || u2.has(e3);
      }
      function c2(e3) {
        return i2.has(e3);
      }
    }), li = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), Object.defineProperty(t2, "isIdentifierName", {enumerable: true, get: function() {
        return si.isIdentifierName;
      }}), Object.defineProperty(t2, "isIdentifierChar", {enumerable: true, get: function() {
        return si.isIdentifierChar;
      }}), Object.defineProperty(t2, "isIdentifierStart", {enumerable: true, get: function() {
        return si.isIdentifierStart;
      }}), Object.defineProperty(t2, "isReservedWord", {enumerable: true, get: function() {
        return ci.isReservedWord;
      }}), Object.defineProperty(t2, "isStrictBindOnlyReservedWord", {enumerable: true, get: function() {
        return ci.isStrictBindOnlyReservedWord;
      }}), Object.defineProperty(t2, "isStrictBindReservedWord", {enumerable: true, get: function() {
        return ci.isStrictBindReservedWord;
      }}), Object.defineProperty(t2, "isStrictReservedWord", {enumerable: true, get: function() {
        return ci.isStrictReservedWord;
      }}), Object.defineProperty(t2, "isKeyword", {enumerable: true, get: function() {
        return ci.isKeyword;
      }});
    }), pi = /[|\\{}()[\]^$+*?.]/g, di = function(e2) {
      if (typeof e2 != "string")
        throw new TypeError("Expected a string");
      return e2.replace(pi, "\\$&");
    }, fi = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]}, hi = je(function(e2) {
      var t2 = {};
      for (var n2 in fi)
        fi.hasOwnProperty(n2) && (t2[fi[n2]] = n2);
      var r2 = e2.exports = {rgb: {channels: 3, labels: "rgb"}, hsl: {channels: 3, labels: "hsl"}, hsv: {channels: 3, labels: "hsv"}, hwb: {channels: 3, labels: "hwb"}, cmyk: {channels: 4, labels: "cmyk"}, xyz: {channels: 3, labels: "xyz"}, lab: {channels: 3, labels: "lab"}, lch: {channels: 3, labels: "lch"}, hex: {channels: 1, labels: ["hex"]}, keyword: {channels: 1, labels: ["keyword"]}, ansi16: {channels: 1, labels: ["ansi16"]}, ansi256: {channels: 1, labels: ["ansi256"]}, hcg: {channels: 3, labels: ["h", "c", "g"]}, apple: {channels: 3, labels: ["r16", "g16", "b16"]}, gray: {channels: 1, labels: ["gray"]}};
      for (var o2 in r2)
        if (r2.hasOwnProperty(o2)) {
          if (!("channels" in r2[o2]))
            throw new Error("missing channels property: " + o2);
          if (!("labels" in r2[o2]))
            throw new Error("missing channel labels property: " + o2);
          if (r2[o2].labels.length !== r2[o2].channels)
            throw new Error("channel and label counts mismatch: " + o2);
          var u2 = r2[o2].channels, i2 = r2[o2].labels;
          delete r2[o2].channels, delete r2[o2].labels, Object.defineProperty(r2[o2], "channels", {value: u2}), Object.defineProperty(r2[o2], "labels", {value: i2});
        }
      r2.rgb.hsl = function(e3) {
        var t3, n3, r3 = e3[0] / 255, o3 = e3[1] / 255, u3 = e3[2] / 255, i3 = Math.min(r3, o3, u3), a2 = Math.max(r3, o3, u3), s2 = a2 - i3;
        return a2 === i3 ? t3 = 0 : r3 === a2 ? t3 = (o3 - u3) / s2 : o3 === a2 ? t3 = 2 + (u3 - r3) / s2 : u3 === a2 && (t3 = 4 + (r3 - o3) / s2), (t3 = Math.min(60 * t3, 360)) < 0 && (t3 += 360), n3 = (i3 + a2) / 2, [t3, 100 * (a2 === i3 ? 0 : n3 <= 0.5 ? s2 / (a2 + i3) : s2 / (2 - a2 - i3)), 100 * n3];
      }, r2.rgb.hsv = function(e3) {
        var t3, n3, r3, o3, u3, i3 = e3[0] / 255, a2 = e3[1] / 255, s2 = e3[2] / 255, c2 = Math.max(i3, a2, s2), l2 = c2 - Math.min(i3, a2, s2), p2 = function(e4) {
          return (c2 - e4) / 6 / l2 + 0.5;
        };
        return l2 === 0 ? o3 = u3 = 0 : (u3 = l2 / c2, t3 = p2(i3), n3 = p2(a2), r3 = p2(s2), i3 === c2 ? o3 = r3 - n3 : a2 === c2 ? o3 = 1 / 3 + t3 - r3 : s2 === c2 && (o3 = 2 / 3 + n3 - t3), o3 < 0 ? o3 += 1 : o3 > 1 && (o3 -= 1)), [360 * o3, 100 * u3, 100 * c2];
      }, r2.rgb.hwb = function(e3) {
        var t3 = e3[0], n3 = e3[1], o3 = e3[2];
        return [r2.rgb.hsl(e3)[0], 100 * (1 / 255 * Math.min(t3, Math.min(n3, o3))), 100 * (o3 = 1 - 1 / 255 * Math.max(t3, Math.max(n3, o3)))];
      }, r2.rgb.cmyk = function(e3) {
        var t3, n3 = e3[0] / 255, r3 = e3[1] / 255, o3 = e3[2] / 255;
        return [100 * ((1 - n3 - (t3 = Math.min(1 - n3, 1 - r3, 1 - o3))) / (1 - t3) || 0), 100 * ((1 - r3 - t3) / (1 - t3) || 0), 100 * ((1 - o3 - t3) / (1 - t3) || 0), 100 * t3];
      }, r2.rgb.keyword = function(e3) {
        var n3 = t2[e3];
        if (n3)
          return n3;
        var r3, o3, u3, i3 = 1 / 0;
        for (var a2 in fi)
          if (fi.hasOwnProperty(a2)) {
            var s2 = fi[a2], c2 = (o3 = e3, u3 = s2, Math.pow(o3[0] - u3[0], 2) + Math.pow(o3[1] - u3[1], 2) + Math.pow(o3[2] - u3[2], 2));
            c2 < i3 && (i3 = c2, r3 = a2);
          }
        return r3;
      }, r2.keyword.rgb = function(e3) {
        return fi[e3];
      }, r2.rgb.xyz = function(e3) {
        var t3 = e3[0] / 255, n3 = e3[1] / 255, r3 = e3[2] / 255;
        return [100 * (0.4124 * (t3 = t3 > 0.04045 ? Math.pow((t3 + 0.055) / 1.055, 2.4) : t3 / 12.92) + 0.3576 * (n3 = n3 > 0.04045 ? Math.pow((n3 + 0.055) / 1.055, 2.4) : n3 / 12.92) + 0.1805 * (r3 = r3 > 0.04045 ? Math.pow((r3 + 0.055) / 1.055, 2.4) : r3 / 12.92)), 100 * (0.2126 * t3 + 0.7152 * n3 + 0.0722 * r3), 100 * (0.0193 * t3 + 0.1192 * n3 + 0.9505 * r3)];
      }, r2.rgb.lab = function(e3) {
        var t3 = r2.rgb.xyz(e3), n3 = t3[0], o3 = t3[1], u3 = t3[2];
        return o3 /= 100, u3 /= 108.883, n3 = (n3 /= 95.047) > 8856e-6 ? Math.pow(n3, 1 / 3) : 7.787 * n3 + 16 / 116, [116 * (o3 = o3 > 8856e-6 ? Math.pow(o3, 1 / 3) : 7.787 * o3 + 16 / 116) - 16, 500 * (n3 - o3), 200 * (o3 - (u3 = u3 > 8856e-6 ? Math.pow(u3, 1 / 3) : 7.787 * u3 + 16 / 116))];
      }, r2.hsl.rgb = function(e3) {
        var t3, n3, r3, o3, u3, i3 = e3[0] / 360, a2 = e3[1] / 100, s2 = e3[2] / 100;
        if (a2 === 0)
          return [u3 = 255 * s2, u3, u3];
        t3 = 2 * s2 - (n3 = s2 < 0.5 ? s2 * (1 + a2) : s2 + a2 - s2 * a2), o3 = [0, 0, 0];
        for (var c2 = 0; c2 < 3; c2++)
          (r3 = i3 + 1 / 3 * -(c2 - 1)) < 0 && r3++, r3 > 1 && r3--, u3 = 6 * r3 < 1 ? t3 + 6 * (n3 - t3) * r3 : 2 * r3 < 1 ? n3 : 3 * r3 < 2 ? t3 + (n3 - t3) * (2 / 3 - r3) * 6 : t3, o3[c2] = 255 * u3;
        return o3;
      }, r2.hsl.hsv = function(e3) {
        var t3 = e3[0], n3 = e3[1] / 100, r3 = e3[2] / 100, o3 = n3, u3 = Math.max(r3, 0.01);
        return n3 *= (r3 *= 2) <= 1 ? r3 : 2 - r3, o3 *= u3 <= 1 ? u3 : 2 - u3, [t3, 100 * (r3 === 0 ? 2 * o3 / (u3 + o3) : 2 * n3 / (r3 + n3)), 100 * ((r3 + n3) / 2)];
      }, r2.hsv.rgb = function(e3) {
        var t3 = e3[0] / 60, n3 = e3[1] / 100, r3 = e3[2] / 100, o3 = Math.floor(t3) % 6, u3 = t3 - Math.floor(t3), i3 = 255 * r3 * (1 - n3), a2 = 255 * r3 * (1 - n3 * u3), s2 = 255 * r3 * (1 - n3 * (1 - u3));
        switch (r3 *= 255, o3) {
          case 0:
            return [r3, s2, i3];
          case 1:
            return [a2, r3, i3];
          case 2:
            return [i3, r3, s2];
          case 3:
            return [i3, a2, r3];
          case 4:
            return [s2, i3, r3];
          case 5:
            return [r3, i3, a2];
        }
      }, r2.hsv.hsl = function(e3) {
        var t3, n3, r3, o3 = e3[0], u3 = e3[1] / 100, i3 = e3[2] / 100, a2 = Math.max(i3, 0.01);
        return r3 = (2 - u3) * i3, n3 = u3 * a2, [o3, 100 * (n3 = (n3 /= (t3 = (2 - u3) * a2) <= 1 ? t3 : 2 - t3) || 0), 100 * (r3 /= 2)];
      }, r2.hwb.rgb = function(e3) {
        var t3, n3, r3, o3, u3, i3, a2, s2 = e3[0] / 360, c2 = e3[1] / 100, l2 = e3[2] / 100, p2 = c2 + l2;
        switch (p2 > 1 && (c2 /= p2, l2 /= p2), r3 = 6 * s2 - (t3 = Math.floor(6 * s2)), (1 & t3) != 0 && (r3 = 1 - r3), o3 = c2 + r3 * ((n3 = 1 - l2) - c2), t3) {
          default:
          case 6:
          case 0:
            u3 = n3, i3 = o3, a2 = c2;
            break;
          case 1:
            u3 = o3, i3 = n3, a2 = c2;
            break;
          case 2:
            u3 = c2, i3 = n3, a2 = o3;
            break;
          case 3:
            u3 = c2, i3 = o3, a2 = n3;
            break;
          case 4:
            u3 = o3, i3 = c2, a2 = n3;
            break;
          case 5:
            u3 = n3, i3 = c2, a2 = o3;
        }
        return [255 * u3, 255 * i3, 255 * a2];
      }, r2.cmyk.rgb = function(e3) {
        var t3 = e3[0] / 100, n3 = e3[1] / 100, r3 = e3[2] / 100, o3 = e3[3] / 100;
        return [255 * (1 - Math.min(1, t3 * (1 - o3) + o3)), 255 * (1 - Math.min(1, n3 * (1 - o3) + o3)), 255 * (1 - Math.min(1, r3 * (1 - o3) + o3))];
      }, r2.xyz.rgb = function(e3) {
        var t3, n3, r3, o3 = e3[0] / 100, u3 = e3[1] / 100, i3 = e3[2] / 100;
        return n3 = -0.9689 * o3 + 1.8758 * u3 + 0.0415 * i3, r3 = 0.0557 * o3 + -0.204 * u3 + 1.057 * i3, t3 = (t3 = 3.2406 * o3 + -1.5372 * u3 + -0.4986 * i3) > 31308e-7 ? 1.055 * Math.pow(t3, 1 / 2.4) - 0.055 : 12.92 * t3, n3 = n3 > 31308e-7 ? 1.055 * Math.pow(n3, 1 / 2.4) - 0.055 : 12.92 * n3, r3 = r3 > 31308e-7 ? 1.055 * Math.pow(r3, 1 / 2.4) - 0.055 : 12.92 * r3, [255 * (t3 = Math.min(Math.max(0, t3), 1)), 255 * (n3 = Math.min(Math.max(0, n3), 1)), 255 * (r3 = Math.min(Math.max(0, r3), 1))];
      }, r2.xyz.lab = function(e3) {
        var t3 = e3[0], n3 = e3[1], r3 = e3[2];
        return n3 /= 100, r3 /= 108.883, t3 = (t3 /= 95.047) > 8856e-6 ? Math.pow(t3, 1 / 3) : 7.787 * t3 + 16 / 116, [116 * (n3 = n3 > 8856e-6 ? Math.pow(n3, 1 / 3) : 7.787 * n3 + 16 / 116) - 16, 500 * (t3 - n3), 200 * (n3 - (r3 = r3 > 8856e-6 ? Math.pow(r3, 1 / 3) : 7.787 * r3 + 16 / 116))];
      }, r2.lab.xyz = function(e3) {
        var t3, n3, r3, o3 = e3[0];
        t3 = e3[1] / 500 + (n3 = (o3 + 16) / 116), r3 = n3 - e3[2] / 200;
        var u3 = Math.pow(n3, 3), i3 = Math.pow(t3, 3), a2 = Math.pow(r3, 3);
        return n3 = u3 > 8856e-6 ? u3 : (n3 - 16 / 116) / 7.787, t3 = i3 > 8856e-6 ? i3 : (t3 - 16 / 116) / 7.787, r3 = a2 > 8856e-6 ? a2 : (r3 - 16 / 116) / 7.787, [t3 *= 95.047, n3 *= 100, r3 *= 108.883];
      }, r2.lab.lch = function(e3) {
        var t3, n3 = e3[0], r3 = e3[1], o3 = e3[2];
        return (t3 = 360 * Math.atan2(o3, r3) / 2 / Math.PI) < 0 && (t3 += 360), [n3, Math.sqrt(r3 * r3 + o3 * o3), t3];
      }, r2.lch.lab = function(e3) {
        var t3, n3 = e3[0], r3 = e3[1];
        return t3 = e3[2] / 360 * 2 * Math.PI, [n3, r3 * Math.cos(t3), r3 * Math.sin(t3)];
      }, r2.rgb.ansi16 = function(e3) {
        var t3 = e3[0], n3 = e3[1], o3 = e3[2], u3 = 1 in arguments ? arguments[1] : r2.rgb.hsv(e3)[2];
        if ((u3 = Math.round(u3 / 50)) === 0)
          return 30;
        var i3 = 30 + (Math.round(o3 / 255) << 2 | Math.round(n3 / 255) << 1 | Math.round(t3 / 255));
        return u3 === 2 && (i3 += 60), i3;
      }, r2.hsv.ansi16 = function(e3) {
        return r2.rgb.ansi16(r2.hsv.rgb(e3), e3[2]);
      }, r2.rgb.ansi256 = function(e3) {
        var t3 = e3[0], n3 = e3[1], r3 = e3[2];
        return t3 === n3 && n3 === r3 ? t3 < 8 ? 16 : t3 > 248 ? 231 : Math.round((t3 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t3 / 255 * 5) + 6 * Math.round(n3 / 255 * 5) + Math.round(r3 / 255 * 5);
      }, r2.ansi16.rgb = function(e3) {
        var t3 = e3 % 10;
        if (t3 === 0 || t3 === 7)
          return e3 > 50 && (t3 += 3.5), [t3 = t3 / 10.5 * 255, t3, t3];
        var n3 = 0.5 * (1 + ~~(e3 > 50));
        return [(1 & t3) * n3 * 255, (t3 >> 1 & 1) * n3 * 255, (t3 >> 2 & 1) * n3 * 255];
      }, r2.ansi256.rgb = function(e3) {
        if (e3 >= 232) {
          var t3 = 10 * (e3 - 232) + 8;
          return [t3, t3, t3];
        }
        var n3;
        return e3 -= 16, [Math.floor(e3 / 36) / 5 * 255, Math.floor((n3 = e3 % 36) / 6) / 5 * 255, n3 % 6 / 5 * 255];
      }, r2.rgb.hex = function(e3) {
        var t3 = (((255 & Math.round(e3[0])) << 16) + ((255 & Math.round(e3[1])) << 8) + (255 & Math.round(e3[2]))).toString(16).toUpperCase();
        return "000000".substring(t3.length) + t3;
      }, r2.hex.rgb = function(e3) {
        var t3 = e3.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!t3)
          return [0, 0, 0];
        var n3 = t3[0];
        t3[0].length === 3 && (n3 = n3.split("").map(function(e4) {
          return e4 + e4;
        }).join(""));
        var r3 = parseInt(n3, 16);
        return [r3 >> 16 & 255, r3 >> 8 & 255, 255 & r3];
      }, r2.rgb.hcg = function(e3) {
        var t3, n3 = e3[0] / 255, r3 = e3[1] / 255, o3 = e3[2] / 255, u3 = Math.max(Math.max(n3, r3), o3), i3 = Math.min(Math.min(n3, r3), o3), a2 = u3 - i3;
        return t3 = a2 <= 0 ? 0 : u3 === n3 ? (r3 - o3) / a2 % 6 : u3 === r3 ? 2 + (o3 - n3) / a2 : 4 + (n3 - r3) / a2 + 4, t3 /= 6, [360 * (t3 %= 1), 100 * a2, 100 * (a2 < 1 ? i3 / (1 - a2) : 0)];
      }, r2.hsl.hcg = function(e3) {
        var t3 = e3[1] / 100, n3 = e3[2] / 100, r3 = 1, o3 = 0;
        return (r3 = n3 < 0.5 ? 2 * t3 * n3 : 2 * t3 * (1 - n3)) < 1 && (o3 = (n3 - 0.5 * r3) / (1 - r3)), [e3[0], 100 * r3, 100 * o3];
      }, r2.hsv.hcg = function(e3) {
        var t3 = e3[1] / 100, n3 = e3[2] / 100, r3 = t3 * n3, o3 = 0;
        return r3 < 1 && (o3 = (n3 - r3) / (1 - r3)), [e3[0], 100 * r3, 100 * o3];
      }, r2.hcg.rgb = function(e3) {
        var t3 = e3[0] / 360, n3 = e3[1] / 100, r3 = e3[2] / 100;
        if (n3 === 0)
          return [255 * r3, 255 * r3, 255 * r3];
        var o3, u3 = [0, 0, 0], i3 = t3 % 1 * 6, a2 = i3 % 1, s2 = 1 - a2;
        switch (Math.floor(i3)) {
          case 0:
            u3[0] = 1, u3[1] = a2, u3[2] = 0;
            break;
          case 1:
            u3[0] = s2, u3[1] = 1, u3[2] = 0;
            break;
          case 2:
            u3[0] = 0, u3[1] = 1, u3[2] = a2;
            break;
          case 3:
            u3[0] = 0, u3[1] = s2, u3[2] = 1;
            break;
          case 4:
            u3[0] = a2, u3[1] = 0, u3[2] = 1;
            break;
          default:
            u3[0] = 1, u3[1] = 0, u3[2] = s2;
        }
        return o3 = (1 - n3) * r3, [255 * (n3 * u3[0] + o3), 255 * (n3 * u3[1] + o3), 255 * (n3 * u3[2] + o3)];
      }, r2.hcg.hsv = function(e3) {
        var t3 = e3[1] / 100, n3 = t3 + e3[2] / 100 * (1 - t3), r3 = 0;
        return n3 > 0 && (r3 = t3 / n3), [e3[0], 100 * r3, 100 * n3];
      }, r2.hcg.hsl = function(e3) {
        var t3 = e3[1] / 100, n3 = e3[2] / 100 * (1 - t3) + 0.5 * t3, r3 = 0;
        return n3 > 0 && n3 < 0.5 ? r3 = t3 / (2 * n3) : n3 >= 0.5 && n3 < 1 && (r3 = t3 / (2 * (1 - n3))), [e3[0], 100 * r3, 100 * n3];
      }, r2.hcg.hwb = function(e3) {
        var t3 = e3[1] / 100, n3 = t3 + e3[2] / 100 * (1 - t3);
        return [e3[0], 100 * (n3 - t3), 100 * (1 - n3)];
      }, r2.hwb.hcg = function(e3) {
        var t3 = e3[1] / 100, n3 = 1 - e3[2] / 100, r3 = n3 - t3, o3 = 0;
        return r3 < 1 && (o3 = (n3 - r3) / (1 - r3)), [e3[0], 100 * r3, 100 * o3];
      }, r2.apple.rgb = function(e3) {
        return [e3[0] / 65535 * 255, e3[1] / 65535 * 255, e3[2] / 65535 * 255];
      }, r2.rgb.apple = function(e3) {
        return [e3[0] / 255 * 65535, e3[1] / 255 * 65535, e3[2] / 255 * 65535];
      }, r2.gray.rgb = function(e3) {
        return [e3[0] / 100 * 255, e3[0] / 100 * 255, e3[0] / 100 * 255];
      }, r2.gray.hsl = r2.gray.hsv = function(e3) {
        return [0, 0, e3[0]];
      }, r2.gray.hwb = function(e3) {
        return [0, 100, e3[0]];
      }, r2.gray.cmyk = function(e3) {
        return [0, 0, 0, e3[0]];
      }, r2.gray.lab = function(e3) {
        return [e3[0], 0, 0];
      }, r2.gray.hex = function(e3) {
        var t3 = 255 & Math.round(e3[0] / 100 * 255), n3 = ((t3 << 16) + (t3 << 8) + t3).toString(16).toUpperCase();
        return "000000".substring(n3.length) + n3;
      }, r2.rgb.gray = function(e3) {
        return [(e3[0] + e3[1] + e3[2]) / 3 / 255 * 100];
      };
    });
    function mi(e2) {
      var t2 = function() {
        for (var e3 = {}, t3 = Object.keys(hi), n3 = t3.length, r3 = 0; r3 < n3; r3++)
          e3[t3[r3]] = {distance: -1, parent: null};
        return e3;
      }(), n2 = [e2];
      for (t2[e2].distance = 0; n2.length; )
        for (var r2 = n2.pop(), o2 = Object.keys(hi[r2]), u2 = o2.length, i2 = 0; i2 < u2; i2++) {
          var a2 = o2[i2], s2 = t2[a2];
          s2.distance === -1 && (s2.distance = t2[r2].distance + 1, s2.parent = r2, n2.unshift(a2));
        }
      return t2;
    }
    function gi(e2, t2) {
      return function(n2) {
        return t2(e2(n2));
      };
    }
    function Di(e2, t2) {
      for (var n2 = [t2[e2].parent, e2], r2 = hi[t2[e2].parent][e2], o2 = t2[e2].parent; t2[o2].parent; )
        n2.unshift(t2[o2].parent), r2 = gi(hi[t2[o2].parent][o2], r2), o2 = t2[o2].parent;
      return r2.conversion = n2, r2;
    }
    var yi = {};
    Object.keys(hi).forEach(function(e2) {
      yi[e2] = {}, Object.defineProperty(yi[e2], "channels", {value: hi[e2].channels}), Object.defineProperty(yi[e2], "labels", {value: hi[e2].labels});
      var t2 = function(e3) {
        for (var t3 = mi(e3), n2 = {}, r2 = Object.keys(t3), o2 = r2.length, u2 = 0; u2 < o2; u2++) {
          var i2 = r2[u2];
          t3[i2].parent !== null && (n2[i2] = Di(i2, t3));
        }
        return n2;
      }(e2);
      Object.keys(t2).forEach(function(n2) {
        var r2 = t2[n2];
        yi[e2][n2] = function(e3) {
          var t3 = function(t4) {
            if (t4 == null)
              return t4;
            arguments.length > 1 && (t4 = Array.prototype.slice.call(arguments));
            var n3 = e3(t4);
            if (typeof n3 == "object")
              for (var r3 = n3.length, o2 = 0; o2 < r3; o2++)
                n3[o2] = Math.round(n3[o2]);
            return n3;
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        }(r2), yi[e2][n2].raw = function(e3) {
          var t3 = function(t4) {
            return t4 == null ? t4 : (arguments.length > 1 && (t4 = Array.prototype.slice.call(arguments)), e3(t4));
          };
          return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
        }(r2);
      });
    });
    var Ei = yi, Ci = je(function(e2) {
      const t2 = (e3, t3) => function() {
        const n3 = e3.apply(Ei, arguments);
        return "[".concat(n3 + t3, "m");
      }, n2 = (e3, t3) => function() {
        const n3 = e3.apply(Ei, arguments);
        return "[".concat(38 + t3, ";5;").concat(n3, "m");
      }, r2 = (e3, t3) => function() {
        const n3 = e3.apply(Ei, arguments);
        return "[".concat(38 + t3, ";2;").concat(n3[0], ";").concat(n3[1], ";").concat(n3[2], "m");
      };
      Object.defineProperty(e2, "exports", {enumerable: true, get: function() {
        const e3 = new Map(), o2 = {modifier: {reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29]}, color: {black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39]}, bgColor: {bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49]}};
        o2.color.grey = o2.color.gray;
        for (const t3 of Object.keys(o2)) {
          const n3 = o2[t3];
          for (const t4 of Object.keys(n3)) {
            const r3 = n3[t4];
            o2[t4] = {open: "[".concat(r3[0], "m"), close: "[".concat(r3[1], "m")}, n3[t4] = o2[t4], e3.set(r3[0], r3[1]);
          }
          Object.defineProperty(o2, t3, {value: n3, enumerable: false}), Object.defineProperty(o2, "codes", {value: e3, enumerable: false});
        }
        const u2 = (e4) => e4, i2 = (e4, t3, n3) => [e4, t3, n3];
        o2.color.close = "[39m", o2.bgColor.close = "[49m", o2.color.ansi = {ansi: t2(u2, 0)}, o2.color.ansi256 = {ansi256: n2(u2, 0)}, o2.color.ansi16m = {rgb: r2(i2, 0)}, o2.bgColor.ansi = {ansi: t2(u2, 10)}, o2.bgColor.ansi256 = {ansi256: n2(u2, 10)}, o2.bgColor.ansi16m = {rgb: r2(i2, 10)};
        for (let e4 of Object.keys(Ei)) {
          if (typeof Ei[e4] != "object")
            continue;
          const u3 = Ei[e4];
          e4 === "ansi16" && (e4 = "ansi"), "ansi16" in u3 && (o2.color.ansi[e4] = t2(u3.ansi16, 0), o2.bgColor.ansi[e4] = t2(u3.ansi16, 10)), "ansi256" in u3 && (o2.color.ansi256[e4] = n2(u3.ansi256, 0), o2.bgColor.ansi256[e4] = n2(u3.ansi256, 10)), "rgb" in u3 && (o2.color.ansi16m[e4] = r2(u3.rgb, 0), o2.bgColor.ansi16m[e4] = r2(u3.rgb, 10));
        }
        return o2;
      }});
    });
    const bi = Oe.env;
    let vi;
    function Ai(e2) {
      return function(e3) {
        return e3 !== 0 && {level: e3, hasBasic: true, has256: e3 >= 2, has16m: e3 >= 3};
      }(function(e3) {
        if (vi === false)
          return 0;
        if ($r("color=16m") || $r("color=full") || $r("color=truecolor"))
          return 3;
        if ($r("color=256"))
          return 2;
        if (e3 && !e3.isTTY && vi !== true)
          return 0;
        const t2 = vi ? 1 : 0;
        if (Oe.platform === "win32") {
          const e4 = qr.release().split(".");
          return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(e4[0]) >= 10 && Number(e4[2]) >= 10586 ? Number(e4[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in bi)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e4) => e4 in bi) || bi.CI_NAME === "codeship" ? 1 : t2;
        if ("TEAMCITY_VERSION" in bi)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(bi.TEAMCITY_VERSION) ? 1 : 0;
        if (bi.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in bi) {
          const e4 = parseInt((bi.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (bi.TERM_PROGRAM) {
            case "iTerm.app":
              return e4 >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(bi.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(bi.TERM) || "COLORTERM" in bi ? 1 : (bi.TERM, t2);
      }(e2));
    }
    $r("no-color") || $r("no-colors") || $r("color=false") ? vi = false : ($r("color") || $r("colors") || $r("color=true") || $r("color=always")) && (vi = true), "FORCE_COLOR" in bi && (vi = bi.FORCE_COLOR.length === 0 || parseInt(bi.FORCE_COLOR, 10) !== 0);
    var Fi = {supportsColor: Ai, stdout: Ai(Oe.stdout), stderr: Ai(Oe.stderr)};
    const xi = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Si = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, wi = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, Ti = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, Bi = new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", "\x07"]]);
    function Ni(e2) {
      return e2[0] === "u" && e2.length === 5 || e2[0] === "x" && e2.length === 3 ? String.fromCharCode(parseInt(e2.slice(1), 16)) : Bi.get(e2) || e2;
    }
    function ki(e2, t2) {
      const n2 = [], r2 = t2.trim().split(/\s*,\s*/g);
      let o2;
      for (const t3 of r2)
        if (isNaN(t3)) {
          if (!(o2 = t3.match(wi)))
            throw new Error("Invalid Chalk template style argument: ".concat(t3, " (in style '").concat(e2, "')"));
          n2.push(o2[2].replace(Ti, (e3, t4, n3) => t4 ? Ni(t4) : n3));
        } else
          n2.push(Number(t3));
      return n2;
    }
    function Pi(e2) {
      Si.lastIndex = 0;
      const t2 = [];
      let n2;
      for (; (n2 = Si.exec(e2)) !== null; ) {
        const e3 = n2[1];
        if (n2[2]) {
          const r2 = ki(e3, n2[2]);
          t2.push([e3].concat(r2));
        } else
          t2.push([e3]);
      }
      return t2;
    }
    function Oi(e2, t2) {
      const n2 = {};
      for (const e3 of t2)
        for (const t3 of e3.styles)
          n2[t3[0]] = e3.inverse ? null : t3.slice(1);
      let r2 = e2;
      for (const e3 of Object.keys(n2))
        if (Array.isArray(n2[e3])) {
          if (!(e3 in r2))
            throw new Error("Unknown Chalk style: ".concat(e3));
          r2 = n2[e3].length > 0 ? r2[e3].apply(r2, n2[e3]) : r2[e3];
        }
      return r2;
    }
    var Ii = (e2, t2) => {
      const n2 = [], r2 = [];
      let o2 = [];
      if (t2.replace(xi, (t3, u2, i2, a2, s2, c2) => {
        if (u2)
          o2.push(Ni(u2));
        else if (a2) {
          const t4 = o2.join("");
          o2 = [], r2.push(n2.length === 0 ? t4 : Oi(e2, n2)(t4)), n2.push({inverse: i2, styles: Pi(a2)});
        } else if (s2) {
          if (n2.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          r2.push(Oi(e2, n2)(o2.join(""))), o2 = [], n2.pop();
        } else
          o2.push(c2);
      }), r2.push(o2.join("")), n2.length > 0) {
        const e3 = "Chalk template literal is missing ".concat(n2.length, " closing bracket").concat(n2.length === 1 ? "" : "s", " (`}`)");
        throw new Error(e3);
      }
      return r2.join("");
    }, Li = je(function(e2) {
      const t2 = Fi.stdout, n2 = Oe.platform === "win32" && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"), r2 = ["ansi", "ansi", "ansi256", "ansi16m"], o2 = new Set(["gray"]), u2 = Object.create(null);
      function i2(e3, n3) {
        n3 = n3 || {};
        const r3 = t2 ? t2.level : 0;
        e3.level = n3.level === void 0 ? r3 : n3.level, e3.enabled = "enabled" in n3 ? n3.enabled : e3.level > 0;
      }
      function a2(e3) {
        if (!this || !(this instanceof a2) || this.template) {
          const t3 = {};
          return i2(t3, e3), t3.template = function() {
            const e4 = [].slice.call(arguments);
            return p2.apply(null, [t3.template].concat(e4));
          }, Object.setPrototypeOf(t3, a2.prototype), Object.setPrototypeOf(t3.template, t3), t3.template.constructor = a2, t3.template;
        }
        i2(this, e3);
      }
      n2 && (Ci.blue.open = "[94m");
      for (const e3 of Object.keys(Ci))
        Ci[e3].closeRe = new RegExp(di(Ci[e3].close), "g"), u2[e3] = {get() {
          const t3 = Ci[e3];
          return c2.call(this, this._styles ? this._styles.concat(t3) : [t3], this._empty, e3);
        }};
      u2.visible = {get() {
        return c2.call(this, this._styles || [], true, "visible");
      }}, Ci.color.closeRe = new RegExp(di(Ci.color.close), "g");
      for (const e3 of Object.keys(Ci.color.ansi))
        o2.has(e3) || (u2[e3] = {get() {
          const t3 = this.level;
          return function() {
            const n3 = Ci.color[r2[t3]][e3].apply(null, arguments), o3 = {open: n3, close: Ci.color.close, closeRe: Ci.color.closeRe};
            return c2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
          };
        }});
      Ci.bgColor.closeRe = new RegExp(di(Ci.bgColor.close), "g");
      for (const e3 of Object.keys(Ci.bgColor.ansi)) {
        if (o2.has(e3))
          continue;
        u2["bg" + e3[0].toUpperCase() + e3.slice(1)] = {get() {
          const t3 = this.level;
          return function() {
            const n3 = Ci.bgColor[r2[t3]][e3].apply(null, arguments), o3 = {open: n3, close: Ci.bgColor.close, closeRe: Ci.bgColor.closeRe};
            return c2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
          };
        }};
      }
      const s2 = Object.defineProperties(() => {
      }, u2);
      function c2(e3, t3, n3) {
        const r3 = function() {
          return l2.apply(r3, arguments);
        };
        r3._styles = e3, r3._empty = t3;
        const o3 = this;
        return Object.defineProperty(r3, "level", {enumerable: true, get: () => o3.level, set(e4) {
          o3.level = e4;
        }}), Object.defineProperty(r3, "enabled", {enumerable: true, get: () => o3.enabled, set(e4) {
          o3.enabled = e4;
        }}), r3.hasGrey = this.hasGrey || n3 === "gray" || n3 === "grey", r3.__proto__ = s2, r3;
      }
      function l2() {
        const e3 = arguments, t3 = e3.length;
        let r3 = String(arguments[0]);
        if (t3 === 0)
          return "";
        if (t3 > 1)
          for (let n3 = 1; n3 < t3; n3++)
            r3 += " " + e3[n3];
        if (!this.enabled || this.level <= 0 || !r3)
          return this._empty ? "" : r3;
        const o3 = Ci.dim.open;
        n2 && this.hasGrey && (Ci.dim.open = "");
        for (const e4 of this._styles.slice().reverse())
          r3 = e4.open + r3.replace(e4.closeRe, e4.open) + e4.close, r3 = r3.replace(/\r?\n/g, "".concat(e4.close, "$&").concat(e4.open));
        return Ci.dim.open = o3, r3;
      }
      function p2(e3, t3) {
        if (!Array.isArray(t3))
          return [].slice.call(arguments, 1).join(" ");
        const n3 = [].slice.call(arguments, 2), r3 = [t3.raw[0]];
        for (let e4 = 1; e4 < t3.length; e4++)
          r3.push(String(n3[e4 - 1]).replace(/[{}\\]/g, "\\$&")), r3.push(String(t3.raw[e4]));
        return Ii(e3, r3.join(""));
      }
      Object.defineProperties(a2.prototype, u2), e2.exports = a2(), e2.exports.supportsColor = t2, e2.exports.default = e2.exports;
    }), Mi = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.shouldHighlight = c2, t2.getChalk = l2, t2.default = function(e3, t3 = {}) {
        if (c2(t3)) {
          const n3 = l2(t3);
          return function(e4, t4) {
            return t4.replace(r2.default, function(...t5) {
              const n4 = function(e5) {
                const [t6, n5] = e5.slice(-2), o4 = (0, r2.matchToToken)(e5);
                if (o4.type === "name") {
                  if ((0, li.isKeyword)(o4.value) || (0, li.isReservedWord)(o4.value))
                    return "keyword";
                  if (a2.test(o4.value) && (n5[t6 - 1] === "<" || n5.substr(t6 - 2, 2) == "</"))
                    return "jsx_tag";
                  if (o4.value[0] !== o4.value[0].toLowerCase())
                    return "capitalized";
                }
                if (o4.type === "punctuator" && s2.test(o4.value))
                  return "bracket";
                if (o4.type === "invalid" && (o4.value === "@" || o4.value === "#"))
                  return "punctuator";
                return o4.type;
              }(t5), o3 = e4[n4];
              return o3 ? t5[0].split(i2).map((e5) => o3(e5)).join("\n") : t5[0];
            });
          }(function(e4) {
            return {keyword: e4.cyan, capitalized: e4.yellow, jsx_tag: e4.yellow, punctuator: e4.yellow, number: e4.magenta, string: e4.green, regex: e4.magenta, comment: e4.grey, invalid: e4.white.bgRed.bold};
          }(n3), e3);
        }
        return e3;
      };
      var n2, r2 = function(e3) {
        if (e3 && e3.__esModule)
          return e3;
        if (e3 === null || typeof e3 != "object" && typeof e3 != "function")
          return {default: e3};
        var t3 = u2();
        if (t3 && t3.has(e3))
          return t3.get(e3);
        var n3 = {}, r3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o3 in e3)
          if (Object.prototype.hasOwnProperty.call(e3, o3)) {
            var i3 = r3 ? Object.getOwnPropertyDescriptor(e3, o3) : null;
            i3 && (i3.get || i3.set) ? Object.defineProperty(n3, o3, i3) : n3[o3] = e3[o3];
          }
        n3.default = e3, t3 && t3.set(e3, n3);
        return n3;
      }(ai), o2 = (n2 = Li) && n2.__esModule ? n2 : {default: n2};
      function u2() {
        if (typeof WeakMap != "function")
          return null;
        var e3 = new WeakMap();
        return u2 = function() {
          return e3;
        }, e3;
      }
      const i2 = /\r\n|[\n\r\u2028\u2029]/, a2 = /^[a-z][\w-]*$/i, s2 = /^[()[\]{}]$/;
      function c2(e3) {
        return o2.default.supportsColor || e3.forceColor;
      }
      function l2(e3) {
        let t3 = o2.default;
        return e3.forceColor && (t3 = new o2.default.constructor({enabled: true, level: 1})), t3;
      }
    }), ji = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true}), t2.codeFrameColumns = i2, t2.default = function(e3, t3, n3, r3 = {}) {
        if (!o2) {
          o2 = true;
          const e4 = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
          if (Oe.emitWarning)
            Oe.emitWarning(e4, "DeprecationWarning");
          else {
            new Error(e4).name = "DeprecationWarning", console.warn(new Error(e4));
          }
        }
        n3 = Math.max(n3, 0);
        return i2(e3, {start: {column: n3, line: t3}}, r3);
      };
      var n2 = function(e3) {
        if (e3 && e3.__esModule)
          return e3;
        if (e3 === null || typeof e3 != "object" && typeof e3 != "function")
          return {default: e3};
        var t3 = r2();
        if (t3 && t3.has(e3))
          return t3.get(e3);
        var n3 = {}, o3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u3 in e3)
          if (Object.prototype.hasOwnProperty.call(e3, u3)) {
            var i3 = o3 ? Object.getOwnPropertyDescriptor(e3, u3) : null;
            i3 && (i3.get || i3.set) ? Object.defineProperty(n3, u3, i3) : n3[u3] = e3[u3];
          }
        n3.default = e3, t3 && t3.set(e3, n3);
        return n3;
      }(Mi);
      function r2() {
        if (typeof WeakMap != "function")
          return null;
        var e3 = new WeakMap();
        return r2 = function() {
          return e3;
        }, e3;
      }
      let o2 = false;
      const u2 = /\r\n|[\n\r\u2028\u2029]/;
      function i2(e3, t3, r3 = {}) {
        const o3 = (r3.highlightCode || r3.forceColor) && (0, n2.shouldHighlight)(r3), i3 = (0, n2.getChalk)(r3), a2 = function(e4) {
          return {gutter: e4.grey, marker: e4.red.bold, message: e4.red.bold};
        }(i3), s2 = (e4, t4) => o3 ? e4(t4) : t4, c2 = e3.split(u2), {start: l2, end: p2, markerLines: d2} = function(e4, t4, n3) {
          const r4 = Object.assign({column: 0, line: -1}, e4.start), o4 = Object.assign({}, r4, e4.end), {linesAbove: u3 = 2, linesBelow: i4 = 3} = n3 || {}, a3 = r4.line, s3 = r4.column, c3 = o4.line, l3 = o4.column;
          let p3 = Math.max(a3 - (u3 + 1), 0), d3 = Math.min(t4.length, c3 + i4);
          a3 === -1 && (p3 = 0), c3 === -1 && (d3 = t4.length);
          const f3 = c3 - a3, h3 = {};
          if (f3)
            for (let e5 = 0; e5 <= f3; e5++) {
              const n4 = e5 + a3;
              if (s3)
                if (e5 === 0) {
                  const e6 = t4[n4 - 1].length;
                  h3[n4] = [s3, e6 - s3 + 1];
                } else if (e5 === f3)
                  h3[n4] = [0, l3];
                else {
                  const r5 = t4[n4 - e5].length;
                  h3[n4] = [0, r5];
                }
              else
                h3[n4] = true;
            }
          else
            h3[a3] = s3 === l3 ? !s3 || [s3, 0] : [s3, l3 - s3];
          return {start: p3, end: d3, markerLines: h3};
        }(t3, c2, r3), f2 = t3.start && typeof t3.start.column == "number", h2 = String(p2).length;
        let m2 = (o3 ? (0, n2.default)(e3, r3) : e3).split(u2).slice(l2, p2).map((e4, t4) => {
          const n3 = l2 + 1 + t4, o4 = " ".concat(n3).slice(-h2), u3 = " ".concat(o4, " | "), i4 = d2[n3], c3 = !d2[n3 + 1];
          if (i4) {
            let t5 = "";
            if (Array.isArray(i4)) {
              const n4 = e4.slice(0, Math.max(i4[0] - 1, 0)).replace(/[^\t]/g, " "), o5 = i4[1] || 1;
              t5 = ["\n ", s2(a2.gutter, u3.replace(/\d/g, " ")), n4, s2(a2.marker, "^").repeat(o5)].join(""), c3 && r3.message && (t5 += " " + s2(a2.message, r3.message));
            }
            return [s2(a2.marker, ">"), s2(a2.gutter, u3), e4, t5].join("");
          }
          return " ".concat(s2(a2.gutter, u3)).concat(e4);
        }).join("\n");
        return r3.message && !f2 && (m2 = "".concat(" ".repeat(h2 + 1)).concat(r3.message, "\n").concat(m2)), o3 ? i3.reset(m2) : m2;
      }
    }), _i = _e(yn);
    const {ConfigError: Ri} = vr, {locStart: Vi, locEnd: $i} = ii, qi = Object.getOwnPropertyNames, Wi = Object.getOwnPropertyDescriptor;
    function Ui(e2) {
      const t2 = {};
      for (const n2 of e2.plugins)
        if (n2.parsers)
          for (const e3 of qi(n2.parsers))
            Object.defineProperty(t2, e3, Wi(n2.parsers, e3));
      return t2;
    }
    function Ji(e2, t2) {
      if (t2 = t2 || Ui(e2), typeof e2.parser == "function")
        return {parse: e2.parser, astFormat: "estree", locStart: Vi, locEnd: $i};
      if (typeof e2.parser == "string") {
        if (Object.prototype.hasOwnProperty.call(t2, e2.parser))
          return t2[e2.parser];
        throw new Ri(`Couldn't resolve parser "`.concat(e2.parser, '". Parsers must be explicitly added to the standalone bundle.'));
      }
    }
    var zi = {parse: function(e2, t2) {
      const n2 = Ui(t2), r2 = Object.keys(n2).reduce((e3, t3) => Object.defineProperty(e3, t3, {enumerable: true, get: () => n2[t3].parse}), {}), o2 = Ji(t2, n2);
      try {
        return o2.preprocess && (e2 = o2.preprocess(e2, t2)), {text: e2, ast: o2.parse(e2, r2, t2)};
      } catch (t3) {
        const {loc: n3} = t3;
        if (n3) {
          const {codeFrameColumns: r3} = ji;
          throw t3.codeFrame = r3(e2, n3, {highlightCode: true}), t3.message += "\n" + t3.codeFrame, t3;
        }
        throw t3.stack;
      }
    }, resolveParser: Ji};
    const {UndefinedParserError: Hi} = vr, {getSupportInfo: Gi} = gt, {resolveParser: Xi} = zi, Yi = {astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null};
    function Ki(e2, t2) {
      const n2 = _i.basename(e2).toLowerCase(), r2 = Gi({plugins: t2}).languages.filter((e3) => e3.since !== null);
      let o2 = r2.find((e3) => e3.extensions && e3.extensions.some((e4) => n2.endsWith(e4)) || e3.filenames && e3.filenames.some((e4) => e4.toLowerCase() === n2));
      if (!o2 && !n2.includes(".")) {
        const t3 = function(e3) {
          if (typeof e3 != "string")
            return "";
          let t4;
          try {
            t4 = gr.openSync(e3, "r");
          } catch (e4) {
            return "";
          }
          try {
            const e4 = new Dr(t4).next().toString("utf8"), n3 = e4.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);
            if (n3)
              return n3[1];
            const r3 = e4.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);
            return r3 ? r3[1] : "";
          } catch (e4) {
            return "";
          } finally {
            try {
              gr.closeSync(t4);
            } catch (e4) {
            }
          }
        }(e2);
        o2 = r2.find((e3) => e3.interpreters && e3.interpreters.includes(t3));
      }
      return o2 && o2.parsers[0];
    }
    var Qi = {normalize: function(e2, t2) {
      t2 = t2 || {};
      const n2 = Object.assign({}, e2), r2 = Gi({plugins: e2.plugins, showUnreleased: true, showDeprecated: true}).options, o2 = Object.assign({}, Yi, yr(r2.filter((e3) => e3.default !== void 0).map((e3) => [e3.name, e3.default])));
      if (!n2.parser)
        if (n2.filepath) {
          if (n2.parser = Ki(n2.filepath, n2.plugins), !n2.parser)
            throw new Hi("No parser could be inferred for file: ".concat(n2.filepath));
        } else {
          (t2.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n2.parser = "babel";
        }
      const u2 = Xi(ni.normalizeApiOptions(n2, [r2.find((e3) => e3.name === "parser")], {passThrough: true, logger: false}));
      n2.astFormat = u2.astFormat, n2.locEnd = u2.locEnd, n2.locStart = u2.locStart;
      const i2 = function(e3) {
        const {astFormat: t3} = e3;
        if (!t3)
          throw new Error("getPlugin() requires astFormat to be set");
        const n3 = e3.plugins.find((e4) => e4.printers && e4.printers[t3]);
        if (!n3)
          throw new Error(`Couldn't find plugin for AST format "`.concat(t3, '"'));
        return n3;
      }(n2);
      n2.printer = i2.printers[n2.astFormat];
      const a2 = r2.filter((e3) => e3.pluginDefaults && e3.pluginDefaults[i2.name] !== void 0).reduce((e3, t3) => Object.assign(e3, {[t3.name]: t3.pluginDefaults[i2.name]}), {}), s2 = Object.assign({}, o2, a2);
      return Object.keys(s2).forEach((e3) => {
        n2[e3] == null && (n2[e3] = s2[e3]);
      }), n2.parser === "json" && (n2.trailingComma = "none"), ni.normalizeApiOptions(n2, r2, Object.assign({passThrough: Object.keys(Yi)}, t2));
    }, hiddenDefaults: Yi, inferParser: Ki};
    var Zi = function e2(t2, n2, r2) {
      if (Array.isArray(t2))
        return t2.map((t3) => e2(t3, n2, r2)).filter(Boolean);
      if (!t2 || typeof t2 != "object")
        return t2;
      const o2 = n2.printer.massageAstNode;
      let u2;
      u2 = o2 && o2.ignoredProperties ? o2.ignoredProperties : new Set();
      const i2 = {};
      for (const r3 of Object.keys(t2))
        u2.has(r3) || typeof t2[r3] == "function" || (i2[r3] = e2(t2[r3], n2, t2));
      if (o2) {
        const e3 = o2(t2, i2, r2);
        if (e3 === null)
          return;
        if (e3)
          return e3;
      }
      return i2;
    };
    function ea() {
    }
    ea.ok = function() {
    }, ea.strictEqual = function() {
    };
    var ta = _e(Object.freeze({__proto__: null, default: ea}));
    const {builders: {concat: na, line: ra, hardline: oa, breakParent: ua, indent: ia, lineSuffix: aa, join: sa, cursor: ca}} = cn, {hasNewline: la, skipNewline: pa, skipSpaces: da, isPreviousLineEmpty: fa, addLeadingComment: ha, addDanglingComment: ma, addTrailingComment: ga} = Lt, Da = Symbol("child-nodes");
    function ya(e2, t2, n2) {
      if (!e2)
        return;
      const {printer: r2, locStart: o2, locEnd: u2} = t2;
      if (n2) {
        if (r2.canAttachComment && r2.canAttachComment(e2)) {
          let t3;
          for (t3 = n2.length - 1; t3 >= 0 && !(o2(n2[t3]) <= o2(e2) && u2(n2[t3]) <= u2(e2)); --t3)
            ;
          return void n2.splice(t3 + 1, 0, e2);
        }
      } else if (e2[Da])
        return e2[Da];
      const i2 = r2.getCommentChildNodes && r2.getCommentChildNodes(e2, t2) || typeof e2 == "object" && Object.keys(e2).filter((e3) => e3 !== "enclosingNode" && e3 !== "precedingNode" && e3 !== "followingNode" && e3 !== "tokens" && e3 !== "comments").map((t3) => e2[t3]);
      return i2 ? (n2 || Object.defineProperty(e2, Da, {value: n2 = [], enumerable: false}), i2.forEach((e3) => {
        ya(e3, t2, n2);
      }), n2) : void 0;
    }
    function Ea(e2, t2, n2) {
      const {locStart: r2, locEnd: o2} = n2, u2 = r2(t2), i2 = o2(t2), a2 = ya(e2, n2);
      let s2, c2, l2 = 0, p2 = a2.length;
      for (; l2 < p2; ) {
        const e3 = l2 + p2 >> 1, d2 = a2[e3], f2 = r2(d2), h2 = o2(d2);
        if (f2 <= u2 && i2 <= h2)
          return t2.enclosingNode = d2, void Ea(d2, t2, n2);
        if (f2 <= u2)
          s2 = d2, l2 = e3 + 1;
        else {
          if (!(i2 <= f2))
            throw new Error("Comment location overlaps with node location");
          c2 = d2, p2 = e3;
        }
      }
      if (t2.enclosingNode && t2.enclosingNode.type === "TemplateLiteral") {
        const {quasis: e3} = t2.enclosingNode, r3 = va(e3, t2, n2);
        s2 && va(e3, s2, n2) !== r3 && (s2 = null), c2 && va(e3, c2, n2) !== r3 && (c2 = null);
      }
      s2 && (t2.precedingNode = s2), c2 && (t2.followingNode = c2);
    }
    function Ca(e2, t2, n2) {
      const r2 = e2.length;
      if (r2 === 0)
        return;
      const {precedingNode: o2, followingNode: u2, enclosingNode: i2} = e2[0], a2 = n2.printer.getGapRegex && n2.printer.getGapRegex(i2) || /^[\s(]*$/;
      let s2, c2 = n2.locStart(u2);
      for (s2 = r2; s2 > 0; --s2) {
        const r3 = e2[s2 - 1];
        ta.strictEqual(r3.precedingNode, o2), ta.strictEqual(r3.followingNode, u2);
        const i3 = t2.slice(n2.locEnd(r3), c2);
        if (!a2.test(i3))
          break;
        c2 = n2.locStart(r3);
      }
      e2.forEach((e3, t3) => {
        t3 < s2 ? ga(o2, e3) : ha(u2, e3);
      });
      for (const e3 of [o2, u2])
        e3.comments && e3.comments.length > 1 && e3.comments.sort((e4, t3) => n2.locStart(e4) - n2.locStart(t3));
      e2.length = 0;
    }
    function ba(e2, t2) {
      return e2.getValue().printed = true, t2.printer.printComment(e2, t2);
    }
    function va(e2, t2, n2) {
      const r2 = n2.locStart(t2) - 1;
      for (let t3 = 1; t3 < e2.length; ++t3)
        if (r2 < n2.locStart(e2[t3]))
          return t3 - 1;
      return 0;
    }
    function Aa(e2, t2, n2) {
      return e2.getNode() === t2.cursorNode && e2.getValue() ? na([ca, n2, ca]) : n2;
    }
    var Fa = {attach: function(e2, t2, n2, r2) {
      if (!Array.isArray(e2))
        return;
      const o2 = [], {locStart: u2, locEnd: i2} = r2;
      e2.forEach((a2, s2) => {
        if (r2.parser === "json" || r2.parser === "json5" || r2.parser === "__js_expression" || r2.parser === "__vue_expression") {
          if (u2(a2) - u2(t2) <= 0)
            return void ha(t2, a2);
          if (i2(a2) - i2(t2) >= 0)
            return void ga(t2, a2);
        }
        Ea(t2, a2, r2);
        const {precedingNode: c2, enclosingNode: l2, followingNode: p2} = a2, d2 = r2.printer.handleComments && r2.printer.handleComments.ownLine ? r2.printer.handleComments.ownLine : () => false, f2 = r2.printer.handleComments && r2.printer.handleComments.endOfLine ? r2.printer.handleComments.endOfLine : () => false, h2 = r2.printer.handleComments && r2.printer.handleComments.remaining ? r2.printer.handleComments.remaining : () => false, m2 = e2.length - 1 === s2;
        if (la(n2, u2(a2), {backwards: true}))
          d2(a2, n2, r2, t2, m2) || (p2 ? ha(p2, a2) : c2 ? ga(c2, a2) : ma(l2 || t2, a2));
        else if (la(n2, i2(a2)))
          f2(a2, n2, r2, t2, m2) || (c2 ? ga(c2, a2) : p2 ? ha(p2, a2) : ma(l2 || t2, a2));
        else if (h2(a2, n2, r2, t2, m2))
          ;
        else if (c2 && p2) {
          const e3 = o2.length;
          if (e3 > 0) {
            o2[e3 - 1].followingNode !== a2.followingNode && Ca(o2, n2, r2);
          }
          o2.push(a2);
        } else
          c2 ? ga(c2, a2) : p2 ? ha(p2, a2) : ma(l2 || t2, a2);
      }), Ca(o2, n2, r2), e2.forEach((e3) => {
        delete e3.precedingNode, delete e3.enclosingNode, delete e3.followingNode;
      });
    }, printComments: function(e2, t2, n2, r2) {
      const o2 = e2.getValue(), u2 = t2(e2), i2 = o2 && o2.comments;
      if (!i2 || i2.length === 0)
        return Aa(e2, n2, u2);
      const a2 = [], s2 = [r2 ? ";" : "", u2];
      return e2.each((e3) => {
        const t3 = e3.getValue(), {leading: r3, trailing: o3} = t3;
        if (r3) {
          const r4 = function(e4, t4) {
            const n3 = e4.getValue(), r5 = ba(e4, t4);
            if (!r5)
              return "";
            if (t4.printer.isBlockComment && t4.printer.isBlockComment(n3)) {
              const e5 = la(t4.originalText, t4.locEnd(n3)) ? la(t4.originalText, t4.locStart(n3), {backwards: true}) ? oa : ra : " ";
              return na([r5, e5]);
            }
            return na([r5, oa]);
          }(e3, n2);
          if (!r4)
            return;
          a2.push(r4);
          const o4 = n2.originalText, u3 = pa(o4, da(o4, n2.locEnd(t3)));
          u3 !== false && la(o4, u3) && a2.push(oa);
        } else
          o3 && s2.push(function(e4, t4) {
            const n3 = e4.getValue(), r4 = ba(e4, t4);
            if (!r4)
              return "";
            const {printer: o4, originalText: u3, locStart: i3} = t4, a3 = o4.isBlockComment && o4.isBlockComment(n3);
            if (la(u3, i3(n3), {backwards: true})) {
              const e5 = fa(u3, n3, i3);
              return aa(na([oa, e5 ? oa : "", r4]));
            }
            let s3 = na([" ", r4]);
            return a3 || (s3 = na([aa(s3), ua])), s3;
          }(e3, n2));
      }, "comments"), Aa(e2, n2, na(a2.concat(s2)));
    }, printDanglingComments: function(e2, t2, n2, r2) {
      const o2 = [], u2 = e2.getValue();
      return u2 && u2.comments ? (e2.each((e3) => {
        const n3 = e3.getValue();
        !n3 || n3.leading || n3.trailing || r2 && !r2(n3) || o2.push(ba(e3, t2));
      }, "comments"), o2.length === 0 ? "" : n2 ? sa(oa, o2) : ia(na([oa, sa(oa, o2)]))) : "";
    }, getSortedChildNodes: ya, ensureAllCommentsPrinted: function(e2) {
      e2 && e2.forEach((e3) => {
        if (!e3.printed)
          throw new Error('Comment "' + e3.value.trim() + '" was not printed. Please report this error!');
        delete e3.printed;
      });
    }};
    function xa(e2, t2) {
      const n2 = Sa(e2.stack, t2);
      return n2 === -1 ? null : e2.stack[n2];
    }
    function Sa(e2, t2) {
      for (let n2 = e2.length - 1; n2 >= 0; n2 -= 2) {
        const r2 = e2[n2];
        if (r2 && !Array.isArray(r2) && --t2 < 0)
          return n2;
      }
      return -1;
    }
    var wa = class {
      constructor(e2) {
        this.stack = [e2];
      }
      getName() {
        const {stack: e2} = this, {length: t2} = e2;
        return t2 > 1 ? e2[t2 - 2] : null;
      }
      getValue() {
        return se(this.stack);
      }
      getNode(e2 = 0) {
        return xa(this, e2);
      }
      getParentNode(e2 = 0) {
        return xa(this, e2 + 1);
      }
      call(e2, ...t2) {
        const {stack: n2} = this, {length: r2} = n2;
        let o2 = se(n2);
        for (const e3 of t2)
          o2 = o2[e3], n2.push(e3, o2);
        const u2 = e2(this);
        return n2.length = r2, u2;
      }
      callParent(e2, t2 = 0) {
        const n2 = Sa(this.stack, t2 + 1), r2 = this.stack.splice(n2 + 1), o2 = e2(this);
        return this.stack.push(...r2), o2;
      }
      each(e2, ...t2) {
        const {stack: n2} = this, {length: r2} = n2;
        let o2 = se(n2);
        for (const e3 of t2)
          o2 = o2[e3], n2.push(e3, o2);
        for (let t3 = 0; t3 < o2.length; ++t3)
          n2.push(t3, o2[t3]), e2(this, t3), n2.length -= 2;
        n2.length = r2;
      }
      map(e2, ...t2) {
        const n2 = [];
        return this.each((t3, r2) => {
          n2[r2] = e2(t3, r2);
        }, ...t2), n2;
      }
      match(...e2) {
        let t2 = this.stack.length - 1, n2 = null, r2 = this.stack[t2--];
        for (const o2 of e2) {
          if (r2 === void 0)
            return false;
          let e3 = null;
          if (typeof n2 == "number" && (e3 = n2, n2 = this.stack[t2--], r2 = this.stack[t2--]), o2 && !o2(r2, n2, e3))
            return false;
          n2 = this.stack[t2--], r2 = this.stack[t2--];
        }
        return true;
      }
    };
    const {utils: {stripTrailingHardline: Ta}} = cn, {normalize: Ba} = Qi;
    var Na = {printSubtree: function(e2, t2, n2, r2) {
      if (n2.printer.embed && n2.embeddedLanguageFormatting === "auto")
        return n2.printer.embed(e2, t2, (e3, t3, o2) => function(e4, t4, n3, r3, {stripTrailingHardline: o3 = false} = {}) {
          const u2 = Ba(Object.assign({}, n3, t4, {parentParser: n3.parser, embeddedInHtml: !(!n3.embeddedInHtml && n3.parser !== "html" && n3.parser !== "vue" && n3.parser !== "angular" && n3.parser !== "lwc"), originalText: e4}), {passThrough: true}), i2 = zi.parse(e4, u2), {ast: a2} = i2;
          e4 = i2.text;
          const s2 = a2.comments;
          delete a2.comments, Fa.attach(s2, a2, e4, u2), u2[Symbol.for("comments")] = s2 || [], u2[Symbol.for("tokens")] = a2.tokens || [];
          const c2 = r3(a2, u2);
          if (Fa.ensureAllCommentsPrinted(s2), o3)
            return typeof c2 == "string" ? c2.replace(/(?:\r?\n)*$/, "") : Ta(c2, true);
          return c2;
        }(e3, t3, n2, r2, o2), n2);
    }};
    const ka = cn, Pa = ka.builders, {concat: Oa, hardline: Ia, addAlignmentToDoc: La} = Pa, Ma = ka.utils;
    function ja(e2, t2, n2 = 0) {
      const {printer: r2} = t2;
      r2.preprocess && (e2 = r2.preprocess(e2, t2));
      const o2 = new Map();
      let u2 = function e3(n3, u3) {
        const i2 = n3.getValue(), a2 = i2 && typeof i2 == "object" && u3 === void 0;
        if (a2 && o2.has(i2))
          return o2.get(i2);
        let s2;
        return s2 = r2.willPrintOwnComments && r2.willPrintOwnComments(n3, t2) ? _a(n3, t2, e3, u3) : Fa.printComments(n3, (n4) => _a(n4, t2, e3, u3), t2, u3 && u3.needsSemi), a2 && o2.set(i2, s2), s2;
      }(new wa(e2));
      return n2 > 0 && (u2 = La(Oa([Ia, u2]), n2, t2.tabWidth)), Ma.propagateBreaks(u2), u2;
    }
    function _a(e2, t2, n2, r2) {
      ta.ok(e2 instanceof wa);
      const o2 = e2.getValue(), {printer: u2} = t2;
      if (u2.hasPrettierIgnore && u2.hasPrettierIgnore(e2))
        return function(e3, t3) {
          const {originalText: n3, [Symbol.for("comments")]: r3, locStart: o3, locEnd: u3} = t3, i2 = o3(e3), a2 = u3(e3);
          for (const e4 of r3)
            o3(e4) >= i2 && u3(e4) <= a2 && (e4.printed = true);
          return n3.slice(i2, a2);
        }(o2, t2);
      if (o2)
        try {
          const r3 = Na.printSubtree(e2, n2, t2, ja);
          if (r3)
            return r3;
        } catch (e3) {
          if (Me.PRETTIER_DEBUG)
            throw e3;
        }
      return u2.print(e2, t2, n2, r2);
    }
    var Ra = ja;
    function Va(e2, t2, n2, r2, o2 = []) {
      if (!(t2 < n2.locStart(e2) || t2 > n2.locEnd(e2))) {
        for (const u2 of Fa.getSortedChildNodes(e2, n2)) {
          const i2 = Va(u2, t2, n2, r2, [e2, ...o2]);
          if (i2)
            return i2;
        }
        return !r2 || r2(e2) ? {node: e2, parentNodes: o2} : void 0;
      }
    }
    const $a = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"]), qa = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
    function Wa(e2, t2) {
      if (t2 == null)
        return false;
      switch (e2.parser) {
        case "flow":
        case "babel":
        case "babel-flow":
        case "babel-ts":
        case "typescript":
        case "espree":
        case "meriyah":
          return function(e3) {
            return e3 === "Directive" || e3 === "TypeAlias" || e3 === "TSExportAssignment" || e3.startsWith("Declare") || e3.startsWith("TSDeclare") || e3.endsWith("Statement") || e3.endsWith("Declaration");
          }(t2.type);
        case "json":
          return $a.has(t2.type);
        case "graphql":
          return qa.has(t2.kind);
        case "vue":
          return t2.tag !== "root";
      }
      return false;
    }
    var Ua = {calculateRange: function(e2, t2, n2) {
      const r2 = e2.slice(t2.rangeStart, t2.rangeEnd), o2 = Math.max(t2.rangeStart + r2.search(/\S/), t2.rangeStart);
      let u2;
      for (u2 = t2.rangeEnd; u2 > t2.rangeStart && !/\S/.test(e2[u2 - 1]); --u2)
        ;
      const i2 = Va(n2, o2, t2, (e3) => Wa(t2, e3)), a2 = Va(n2, u2, t2, (e3) => Wa(t2, e3));
      if (!i2 || !a2)
        return {rangeStart: 0, rangeEnd: 0};
      const {startNode: s2, endNode: c2} = function(e3, t3, n3) {
        let r3 = e3.node, o3 = t3.node;
        if (r3 === o3)
          return {startNode: r3, endNode: o3};
        for (const r4 of t3.parentNodes) {
          if (!(r4.type !== "Program" && r4.type !== "File" && n3.locStart(r4) >= n3.locStart(e3.node)))
            break;
          o3 = r4;
        }
        for (const o4 of e3.parentNodes) {
          if (!(o4.type !== "Program" && o4.type !== "File" && n3.locEnd(o4) <= n3.locEnd(t3.node)))
            break;
          r3 = o4;
        }
        return {startNode: r3, endNode: o3};
      }(i2, a2, t2);
      return {rangeStart: Math.min(t2.locStart(s2), t2.locStart(c2)), rangeEnd: Math.max(t2.locEnd(s2), t2.locEnd(c2))};
    }, findNodeAtOffset: Va};
    const {printer: {printDocToString: Ja}, debug: {printDocToDebug: za}} = cn, {getAlignmentSize: Ha} = Lt, {guessEndOfLine: Ga, convertEndOfLineToChars: Xa, countEndOfLineChars: Ya, normalizeEndOfLine: Ka} = Mt, Qa = Qi.normalize, Za = Symbol("cursor");
    function es(e2, t2, n2) {
      const r2 = t2.comments;
      return r2 && (delete t2.comments, Fa.attach(r2, t2, e2, n2)), n2[Symbol.for("comments")] = r2 || [], n2[Symbol.for("tokens")] = t2.tokens || [], n2.originalText = e2, r2;
    }
    function ts(e2, t2, n2) {
      if (!e2 || !e2.trim().length)
        return {formatted: "", cursorOffset: -1};
      n2 = n2 || 0;
      const {ast: r2, text: o2} = zi.parse(e2, t2);
      if (t2.cursorOffset >= 0) {
        const e3 = Ua.findNodeAtOffset(r2, t2.cursorOffset, t2);
        e3 && e3.node && (t2.cursorNode = e3.node);
      }
      const u2 = es(o2, r2, t2), i2 = Ra(r2, t2, n2), a2 = Ja(i2, t2);
      if (Fa.ensureAllCommentsPrinted(u2), n2 > 0) {
        const e3 = a2.formatted.trim();
        a2.cursorNodeStart !== void 0 && (a2.cursorNodeStart -= a2.formatted.indexOf(e3)), a2.formatted = e3 + Xa(t2.endOfLine);
      }
      if (t2.cursorOffset >= 0) {
        let e3, n3, r3, u3, i3;
        if (t2.cursorNode && a2.cursorNodeText ? (e3 = t2.locStart(t2.cursorNode), n3 = o2.slice(e3, t2.locEnd(t2.cursorNode)), r3 = t2.cursorOffset - e3, u3 = a2.cursorNodeStart, i3 = a2.cursorNodeText) : (e3 = 0, n3 = o2, r3 = t2.cursorOffset, u3 = 0, i3 = a2.formatted), n3 === i3)
          return {formatted: a2.formatted, cursorOffset: u3 + r3};
        const s2 = n3.split("");
        s2.splice(r3, 0, Za);
        const c2 = i3.split(""), l2 = J.diffArrays(s2, c2);
        let p2 = u3;
        for (const e4 of l2)
          if (e4.removed) {
            if (e4.value.includes(Za))
              break;
          } else
            p2 += e4.count;
        return {formatted: a2.formatted, cursorOffset: p2};
      }
      return {formatted: a2.formatted, cursorOffset: -1};
    }
    function ns(e2, t2, n2) {
      return typeof t2 != "number" || isNaN(t2) || t2 < 0 || t2 > e2.length ? n2 : t2;
    }
    function rs(e2, t2) {
      let {cursorOffset: n2, rangeStart: r2, rangeEnd: o2} = t2;
      return n2 = ns(e2, n2, -1), r2 = ns(e2, r2, 0), o2 = ns(e2, o2, e2.length), Object.assign({}, t2, {cursorOffset: n2, rangeStart: r2, rangeEnd: o2});
    }
    function os(e2, t2) {
      let {cursorOffset: n2, rangeStart: r2, rangeEnd: o2, endOfLine: u2} = rs(e2, t2);
      const i2 = e2.charAt(0) === "\uFEFF";
      if (i2 && (e2 = e2.slice(1), n2--, r2--, o2--), u2 === "auto" && (u2 = Ga(e2)), e2.includes("\r")) {
        const t3 = (t4) => Ya(e2.slice(0, Math.max(t4, 0)), "\r\n");
        n2 -= t3(n2), r2 -= t3(r2), o2 -= t3(o2), e2 = Ka(e2);
      }
      return {hasBOM: i2, text: e2, options: rs(e2, Object.assign({}, t2, {cursorOffset: n2, rangeStart: r2, rangeEnd: o2, endOfLine: u2}))};
    }
    function us(e2, t2) {
      let {hasBOM: n2, text: r2, options: o2} = os(e2, Qa(t2));
      const u2 = zi.resolveParser(o2), i2 = !u2.hasPragma || u2.hasPragma(r2);
      if (o2.requirePragma && !i2)
        return {formatted: e2, cursorOffset: t2.cursorOffset};
      let a2;
      return o2.rangeStart > 0 || o2.rangeEnd < r2.length ? a2 = function(e3, t3) {
        const {ast: n3, text: r3} = zi.parse(e3, t3), {rangeStart: o3, rangeEnd: u3} = Ua.calculateRange(r3, t3, n3), i3 = r3.slice(o3, u3), a3 = Math.min(o3, r3.lastIndexOf("\n", o3) + 1), s2 = r3.slice(a3, o3).match(/^\s*/)[0], c2 = Ha(s2, t3.tabWidth), l2 = ts(i3, Object.assign({}, t3, {rangeStart: 0, rangeEnd: 1 / 0, cursorOffset: t3.cursorOffset > o3 && t3.cursorOffset < u3 ? t3.cursorOffset - o3 : -1, endOfLine: "lf"}), c2), p2 = l2.formatted.trimEnd();
        let {cursorOffset: d2} = t3;
        d2 >= u3 ? d2 = t3.cursorOffset + (p2.length - i3.length) : l2.cursorOffset >= 0 && (d2 = l2.cursorOffset + o3);
        let f2 = r3.slice(0, o3) + p2 + r3.slice(u3);
        if (t3.endOfLine !== "lf") {
          const e4 = Xa(t3.endOfLine);
          d2 >= 0 && e4 === "\r\n" && (d2 += Ya(f2.slice(0, d2), "\n")), f2 = f2.replace(/\n/g, e4);
        }
        return {formatted: f2, cursorOffset: d2};
      }(r2, o2) : (!i2 && o2.insertPragma && o2.printer.insertPragma && (r2 = o2.printer.insertPragma(r2)), a2 = ts(r2, o2)), n2 && (a2.formatted = "\uFEFF" + a2.formatted, a2.cursorOffset >= 0 && a2.cursorOffset++), a2;
    }
    var is = {formatWithCursor: us, parse(e2, t2, n2) {
      const {text: r2, options: o2} = os(e2, Qa(t2)), u2 = zi.parse(r2, o2);
      return n2 && (u2.ast = Zi(u2.ast, o2)), u2;
    }, formatAST(e2, t2) {
      t2 = Qa(t2);
      const n2 = Ra(e2, t2);
      return Ja(n2, t2);
    }, formatDoc: (e2, t2) => us(za(e2), Object.assign({}, t2, {parser: "babel"})).formatted, printToDoc(e2, t2) {
      t2 = Qa(t2);
      const {ast: n2, text: r2} = zi.parse(e2, t2);
      return es(r2, n2, t2), Ra(n2, t2);
    }, printDocToString: (e2, t2) => Ja(e2, Qa(t2))};
    const {getMaxContinuousCount: as, getStringWidth: ss, getAlignmentSize: cs, getIndentSize: ls, skip: ps, skipWhitespace: ds, skipSpaces: fs, skipNewline: hs, skipToLineEnd: ms, skipEverythingButNewLine: gs, skipInlineComment: Ds, skipTrailingComment: ys, hasNewline: Es, hasNewlineInRange: Cs, hasSpaces: bs, isNextLineEmpty: vs, isNextLineEmptyAfterIndex: As, isPreviousLineEmpty: Fs, getNextNonSpaceNonCommentCharacterIndex: xs, makeString: Ss, addLeadingComment: ws, addDanglingComment: Ts, addTrailingComment: Bs} = Lt;
    var Ns = {getMaxContinuousCount: as, getStringWidth: ss, getAlignmentSize: cs, getIndentSize: ls, skip: ps, skipWhitespace: ds, skipSpaces: fs, skipNewline: hs, skipToLineEnd: ms, skipEverythingButNewLine: gs, skipInlineComment: Ds, skipTrailingComment: ys, hasNewline: Es, hasNewlineInRange: Cs, hasSpaces: bs, isNextLineEmpty: vs, isNextLineEmptyAfterIndex: As, isPreviousLineEmpty: Fs, getNextNonSpaceNonCommentCharacterIndex: xs, makeString: Ss, addLeadingComment: ws, addDanglingComment: Ts, addTrailingComment: Bs}, ks = function(t2, n2) {
      const {languageId: r2} = t2, o2 = e(t2, ["languageId"]);
      return Object.assign({linguistLanguageId: r2}, o2, n2(t2));
    }, Ps = je(function(e2) {
      !function() {
        function t2(e3) {
          if (e3 == null)
            return false;
          switch (e3.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement":
              return true;
          }
          return false;
        }
        function n2(e3) {
          switch (e3.type) {
            case "IfStatement":
              return e3.alternate != null ? e3.alternate : e3.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return e3.body;
          }
          return null;
        }
        e2.exports = {isExpression: function(e3) {
          if (e3 == null)
            return false;
          switch (e3.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return true;
          }
          return false;
        }, isStatement: t2, isIterationStatement: function(e3) {
          if (e3 == null)
            return false;
          switch (e3.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return true;
          }
          return false;
        }, isSourceElement: function(e3) {
          return t2(e3) || e3 != null && e3.type === "FunctionDeclaration";
        }, isProblematicIfStatement: function(e3) {
          var t3;
          if (e3.type !== "IfStatement")
            return false;
          if (e3.alternate == null)
            return false;
          t3 = e3.consequent;
          do {
            if (t3.type === "IfStatement" && t3.alternate == null)
              return true;
            t3 = n2(t3);
          } while (t3);
          return false;
        }, trailingStatement: n2};
      }();
    }), Os = je(function(e2) {
      !function() {
        var t2, n2, r2, o2, u2, i2;
        function a2(e3) {
          return e3 <= 65535 ? String.fromCharCode(e3) : String.fromCharCode(Math.floor((e3 - 65536) / 1024) + 55296) + String.fromCharCode((e3 - 65536) % 1024 + 56320);
        }
        for (n2 = {NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/}, t2 = {NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/}, r2 = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], o2 = new Array(128), i2 = 0; i2 < 128; ++i2)
          o2[i2] = i2 >= 97 && i2 <= 122 || i2 >= 65 && i2 <= 90 || i2 === 36 || i2 === 95;
        for (u2 = new Array(128), i2 = 0; i2 < 128; ++i2)
          u2[i2] = i2 >= 97 && i2 <= 122 || i2 >= 65 && i2 <= 90 || i2 >= 48 && i2 <= 57 || i2 === 36 || i2 === 95;
        e2.exports = {isDecimalDigit: function(e3) {
          return 48 <= e3 && e3 <= 57;
        }, isHexDigit: function(e3) {
          return 48 <= e3 && e3 <= 57 || 97 <= e3 && e3 <= 102 || 65 <= e3 && e3 <= 70;
        }, isOctalDigit: function(e3) {
          return e3 >= 48 && e3 <= 55;
        }, isWhiteSpace: function(e3) {
          return e3 === 32 || e3 === 9 || e3 === 11 || e3 === 12 || e3 === 160 || e3 >= 5760 && r2.indexOf(e3) >= 0;
        }, isLineTerminator: function(e3) {
          return e3 === 10 || e3 === 13 || e3 === 8232 || e3 === 8233;
        }, isIdentifierStartES5: function(e3) {
          return e3 < 128 ? o2[e3] : n2.NonAsciiIdentifierStart.test(a2(e3));
        }, isIdentifierPartES5: function(e3) {
          return e3 < 128 ? u2[e3] : n2.NonAsciiIdentifierPart.test(a2(e3));
        }, isIdentifierStartES6: function(e3) {
          return e3 < 128 ? o2[e3] : t2.NonAsciiIdentifierStart.test(a2(e3));
        }, isIdentifierPartES6: function(e3) {
          return e3 < 128 ? u2[e3] : t2.NonAsciiIdentifierPart.test(a2(e3));
        }};
      }();
    }), Is = je(function(e2) {
      !function() {
        var t2 = Os;
        function n2(e3, t3) {
          return !(!t3 && e3 === "yield") && r2(e3, t3);
        }
        function r2(e3, t3) {
          if (t3 && function(e4) {
            switch (e4) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return true;
              default:
                return false;
            }
          }(e3))
            return true;
          switch (e3.length) {
            case 2:
              return e3 === "if" || e3 === "in" || e3 === "do";
            case 3:
              return e3 === "var" || e3 === "for" || e3 === "new" || e3 === "try";
            case 4:
              return e3 === "this" || e3 === "else" || e3 === "case" || e3 === "void" || e3 === "with" || e3 === "enum";
            case 5:
              return e3 === "while" || e3 === "break" || e3 === "catch" || e3 === "throw" || e3 === "const" || e3 === "yield" || e3 === "class" || e3 === "super";
            case 6:
              return e3 === "return" || e3 === "typeof" || e3 === "delete" || e3 === "switch" || e3 === "export" || e3 === "import";
            case 7:
              return e3 === "default" || e3 === "finally" || e3 === "extends";
            case 8:
              return e3 === "function" || e3 === "continue" || e3 === "debugger";
            case 10:
              return e3 === "instanceof";
            default:
              return false;
          }
        }
        function o2(e3, t3) {
          return e3 === "null" || e3 === "true" || e3 === "false" || n2(e3, t3);
        }
        function u2(e3, t3) {
          return e3 === "null" || e3 === "true" || e3 === "false" || r2(e3, t3);
        }
        function i2(e3) {
          var n3, r3, o3;
          if (e3.length === 0)
            return false;
          if (o3 = e3.charCodeAt(0), !t2.isIdentifierStartES5(o3))
            return false;
          for (n3 = 1, r3 = e3.length; n3 < r3; ++n3)
            if (o3 = e3.charCodeAt(n3), !t2.isIdentifierPartES5(o3))
              return false;
          return true;
        }
        function a2(e3) {
          var n3, r3, o3, u3, i3;
          if (e3.length === 0)
            return false;
          for (i3 = t2.isIdentifierStartES6, n3 = 0, r3 = e3.length; n3 < r3; ++n3) {
            if (55296 <= (o3 = e3.charCodeAt(n3)) && o3 <= 56319) {
              if (++n3 >= r3)
                return false;
              if (!(56320 <= (u3 = e3.charCodeAt(n3)) && u3 <= 57343))
                return false;
              o3 = 1024 * (o3 - 55296) + (u3 - 56320) + 65536;
            }
            if (!i3(o3))
              return false;
            i3 = t2.isIdentifierPartES6;
          }
          return true;
        }
        e2.exports = {isKeywordES5: n2, isKeywordES6: r2, isReservedWordES5: o2, isReservedWordES6: u2, isRestrictedWord: function(e3) {
          return e3 === "eval" || e3 === "arguments";
        }, isIdentifierNameES5: i2, isIdentifierNameES6: a2, isIdentifierES5: function(e3, t3) {
          return i2(e3) && !o2(e3, t3);
        }, isIdentifierES6: function(e3, t3) {
          return a2(e3) && !u2(e3, t3);
        }};
      }();
    });
    const Ls = je(function(e2, t2) {
      t2.ast = Ps, t2.code = Os, t2.keyword = Is;
    }).keyword.isIdentifierNameES5, {getLast: Ms, hasNewline: js, hasNewlineInRange: _s, skipWhitespace: Rs} = Lt, {locStart: Vs, locEnd: $s, hasSameLocStart: qs} = ii, Ws = "(?:(?=.)\\s)", Us = new RegExp("^".concat(Ws, "*:")), Js = new RegExp("^".concat(Ws, "*::"));
    function zs(e2, t2) {
      if (!e2 || typeof e2 != "object")
        return false;
      if (Array.isArray(e2))
        return e2.some((e3) => zs(e3, t2));
      const n2 = t2(e2);
      return typeof n2 == "boolean" ? n2 : Object.keys(e2).some((n3) => zs(e2[n3], t2));
    }
    function Hs(e2) {
      return e2.type === "AssignmentExpression" || e2.type === "BinaryExpression" || e2.type === "LogicalExpression" || e2.type === "NGPipeExpression" || e2.type === "ConditionalExpression" || e2.type === "CallExpression" || e2.type === "OptionalCallExpression" || e2.type === "MemberExpression" || e2.type === "OptionalMemberExpression" || e2.type === "SequenceExpression" || e2.type === "TaggedTemplateExpression" || e2.type === "BindExpression" || e2.type === "UpdateExpression" && !e2.prefix || e2.type === "TSAsExpression" || e2.type === "TSNonNullExpression";
    }
    function Gs(e2) {
      return e2.type === "Block" || e2.type === "CommentBlock" || e2.type === "MultiLine";
    }
    const Xs = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
    function Ys(e2) {
      return e2 && Xs.has(e2.type);
    }
    function Ks(e2) {
      return e2.type === "BooleanLiteral" || e2.type === "DirectiveLiteral" || e2.type === "Literal" || e2.type === "NullLiteral" || e2.type === "NumericLiteral" || e2.type === "BigIntLiteral" || e2.type === "DecimalLiteral" || e2.type === "RegExpLiteral" || e2.type === "StringLiteral" || e2.type === "TemplateLiteral" || e2.type === "TSTypeLiteral" || e2.type === "JSXText";
    }
    function Qs(e2) {
      return e2.type === "NumericLiteral" || e2.type === "Literal" && typeof e2.value == "number";
    }
    function Zs(e2) {
      return e2.type === "StringLiteral" || e2.type === "Literal" && typeof e2.value == "string";
    }
    function ec(e2) {
      return e2.type === "FunctionExpression" || e2.type === "ArrowFunctionExpression";
    }
    function tc(e2) {
      return !(e2.type !== "CallExpression" && e2.type !== "OptionalCallExpression" || e2.callee.type !== "Identifier" || e2.callee.name !== "async" && e2.callee.name !== "inject" && e2.callee.name !== "fakeAsync");
    }
    function nc(e2) {
      return e2.type === "JSXElement" || e2.type === "JSXFragment";
    }
    function rc(e2) {
      return e2.kind === "get" || e2.kind === "set";
    }
    function oc(e2) {
      return rc(e2) || qs(e2, e2.value);
    }
    const uc = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
    const ic = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
    const ac = /^(skip|[fx]?(it|describe|test))$/;
    function sc(e2) {
      return e2.type === "CallExpression" || e2.type === "OptionalCallExpression";
    }
    const cc = new RegExp("([ \n\r	]+)"), lc = new RegExp("[^ \n\r	]");
    function pc(e2) {
      return Ks(e2) && (lc.test(mc(e2)) || !/\n/.test(mc(e2)));
    }
    function dc(e2, t2) {
      if (nc(t2))
        return xc(t2);
      return t2.comments && t2.comments.some((t3) => t3.leading && js(e2, $s(t3)));
    }
    function fc(e2) {
      return /^(\d+|\d+\.\d+)$/.test(e2);
    }
    function hc(e2) {
      return e2.quasis.some((e3) => e3.value.raw.includes("\n"));
    }
    function mc(e2) {
      return e2.extra ? e2.extra.raw : e2.raw;
    }
    const gc = {"==": true, "!=": true, "===": true, "!==": true}, Dc = {"*": true, "/": true, "%": true}, yc = {">>": true, ">>>": true, "<<": true};
    const Ec = {};
    function Cc(e2) {
      return Ec[e2];
    }
    [["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].forEach((e2, t2) => {
      e2.forEach((e3) => {
        Ec[e3] = t2;
      });
    });
    const bc = new WeakMap();
    function vc(e2) {
      if (bc.has(e2))
        return bc.get(e2);
      const t2 = [];
      return e2.this && t2.push(e2.this), Array.isArray(e2.parameters) ? t2.push(...e2.parameters) : Array.isArray(e2.params) && t2.push(...e2.params), e2.rest && t2.push(e2.rest), bc.set(e2, t2), t2;
    }
    const Ac = new WeakMap();
    function Fc(e2) {
      return e2.value.trim() === "prettier-ignore";
    }
    function xc(e2) {
      return e2 && (e2.comments && e2.comments.length > 0 && e2.comments.some((e3) => Fc(e3) && !e3.unignore) || e2.prettierIgnore);
    }
    function Sc(e2) {
      return xc(e2.getValue());
    }
    var wc = {classChildNeedsASIProtection: function(e2) {
      if (e2) {
        if (e2.static || e2.accessibility)
          return false;
        if (!e2.computed) {
          const t2 = e2.key && e2.key.name;
          if (t2 === "in" || t2 === "instanceof")
            return true;
        }
        switch (e2.type) {
          case "ClassProperty":
          case "FieldDefinition":
          case "TSAbstractClassProperty":
            return e2.computed;
          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "ClassMethod":
          case "ClassPrivateMethod": {
            const t2 = e2.value ? e2.value.async : e2.async, n2 = e2.value ? e2.value.generator : e2.generator;
            return !t2 && e2.kind !== "get" && e2.kind !== "set" && !(!e2.computed && !n2);
          }
          case "TSIndexSignature":
            return true;
          default:
            return false;
        }
      }
    }, classPropMayCauseASIProblems: function(e2) {
      const t2 = e2.getNode();
      if (t2.type !== "ClassProperty" && t2.type !== "FieldDefinition")
        return false;
      const n2 = t2.key && t2.key.name;
      return !(n2 !== "static" && n2 !== "get" && n2 !== "set" || t2.value || t2.typeAnnotation) || void 0;
    }, getFunctionParameters: vc, iterateFunctionParametersPath: function(e2, t2) {
      const n2 = e2.getValue();
      let r2 = 0;
      const o2 = (e3) => t2(e3, r2++);
      n2.this && e2.call(o2, "this"), Array.isArray(n2.parameters) ? e2.each(o2, "parameters") : Array.isArray(n2.params) && e2.each(o2, "params"), n2.rest && e2.call(o2, "rest");
    }, getCallArguments: function(e2) {
      if (Ac.has(e2))
        return Ac.get(e2);
      const t2 = e2.type === "ImportExpression" ? [e2.source] : e2.arguments;
      return Ac.set(e2, t2), t2;
    }, iterateCallArgumentsPath: function(e2, t2) {
      e2.getValue().type === "ImportExpression" ? e2.call((e3) => t2(e3, 0), "source") : e2.each(t2, "arguments");
    }, hasRestParameter: function(e2) {
      if (e2.rest)
        return true;
      const t2 = vc(e2);
      return t2.length > 0 && Ms(t2).type === "RestElement";
    }, getLeftSidePathName: function(e2, t2) {
      if (t2.expressions)
        return ["expressions", 0];
      if (t2.left)
        return ["left"];
      if (t2.test)
        return ["test"];
      if (t2.object)
        return ["object"];
      if (t2.callee)
        return ["callee"];
      if (t2.tag)
        return ["tag"];
      if (t2.argument)
        return ["argument"];
      if (t2.expression)
        return ["expression"];
      throw new Error("Unexpected node has no left side.");
    }, getParentExportDeclaration: function(e2) {
      const t2 = e2.getParentNode();
      return e2.getName() === "declaration" && Ys(t2) ? t2 : null;
    }, getTypeScriptMappedTypeModifier: function(e2, t2) {
      return e2 === "+" ? "+" + t2 : e2 === "-" ? "-" + t2 : t2;
    }, hasDanglingComments: function(e2) {
      return e2.comments && e2.comments.some((e3) => !e3.leading && !e3.trailing);
    }, hasFlowAnnotationComment: function(e2) {
      return e2 && Gs(e2[0]) && Js.test(e2[0].value);
    }, hasFlowShorthandAnnotationComment: function(e2) {
      return e2.extra && e2.extra.parenthesized && e2.trailingComments && Gs(e2.trailingComments[0]) && Us.test(e2.trailingComments[0].value);
    }, hasLeadingComment: function(e2) {
      return e2.comments && e2.comments.some((e3) => e3.leading);
    }, hasLeadingOwnLineComment: dc, hasNakedLeftSide: Hs, hasNewlineBetweenOrAfterDecorators: function(e2, t2) {
      return _s(t2.originalText, Vs(e2.decorators[0]), $s(Ms(e2.decorators))) || js(t2.originalText, $s(Ms(e2.decorators)));
    }, hasNgSideEffect: function(e2) {
      return zs(e2.getValue(), (e3) => {
        switch (e3.type) {
          case void 0:
            return false;
          case "CallExpression":
          case "OptionalCallExpression":
          case "AssignmentExpression":
            return true;
        }
      });
    }, hasNode: zs, hasPrettierIgnore: function(e2) {
      return Sc(e2) || function(e3) {
        const t2 = e3.getValue(), n2 = e3.getParentNode();
        if (!(n2 && t2 && nc(t2) && nc(n2)))
          return false;
        let r2 = null;
        for (let e4 = n2.children.indexOf(t2); e4 > 0; e4--) {
          const t3 = n2.children[e4 - 1];
          if (t3.type !== "JSXText" || pc(t3)) {
            r2 = t3;
            break;
          }
        }
        return r2 && r2.type === "JSXExpressionContainer" && r2.expression.type === "JSXEmptyExpression" && r2.expression.comments && r2.expression.comments.some((e4) => Fc(e4));
      }(e2);
    }, hasTrailingComment: function(e2) {
      return e2.comments && e2.comments.some((e3) => e3.trailing);
    }, hasTrailingLineComment: function(e2) {
      return e2.comments && e2.comments.some((e3) => e3.trailing && !Gs(e3));
    }, hasIgnoreComment: Sc, hasNodeIgnoreComment: xc, identity: function(e2) {
      return e2;
    }, isBinaryish: function(e2) {
      return uc.has(e2.type);
    }, isBlockComment: Gs, isLineComment: function(e2) {
      return e2.type === "Line" || e2.type === "CommentLine" || e2.type === "SingleLine" || e2.type === "HashbangComment" || e2.type === "HTMLOpen" || e2.type === "HTMLClose";
    }, isPrettierIgnoreComment: Fc, isCallOrOptionalCallExpression: sc, isEmptyJSXElement: function(e2) {
      if (e2.children.length === 0)
        return true;
      if (e2.children.length > 1)
        return false;
      const t2 = e2.children[0];
      return Ks(t2) && !pc(t2);
    }, isExportDeclaration: Ys, isFlowAnnotationComment: function(e2, t2) {
      const n2 = Vs(t2), r2 = Rs(e2, $s(t2));
      return r2 !== false && e2.slice(n2, n2 + 2) === "/*" && e2.slice(r2, r2 + 2) === "*/";
    }, isFunctionCompositionArgs: function(e2) {
      if (e2.length <= 1)
        return false;
      let t2 = 0;
      for (const n2 of e2)
        if (ec(n2)) {
          if (t2 += 1, t2 > 1)
            return true;
        } else if (sc(n2)) {
          for (const e3 of n2.arguments)
            if (ec(e3))
              return true;
        }
      return false;
    }, isFunctionNotation: oc, isFunctionOrArrowExpression: ec, isGetterOrSetter: rc, isJestEachTemplateLiteral: function(e2, t2) {
      const n2 = /^[fx]?(describe|it|test)$/;
      return t2.type === "TaggedTemplateExpression" && t2.quasi === e2 && t2.tag.type === "MemberExpression" && t2.tag.property.type === "Identifier" && t2.tag.property.name === "each" && (t2.tag.object.type === "Identifier" && n2.test(t2.tag.object.name) || t2.tag.object.type === "MemberExpression" && t2.tag.object.property.type === "Identifier" && (t2.tag.object.property.name === "only" || t2.tag.object.property.name === "skip") && t2.tag.object.object.type === "Identifier" && n2.test(t2.tag.object.object.name));
    }, isJSXNode: nc, isJSXWhitespaceExpression: function(e2) {
      return e2.type === "JSXExpressionContainer" && Ks(e2.expression) && e2.expression.value === " " && !e2.expression.comments;
    }, isLastStatement: function(e2) {
      const t2 = e2.getParentNode();
      if (!t2)
        return true;
      const n2 = e2.getValue(), r2 = (t2.body || t2.consequent).filter((e3) => e3.type !== "EmptyStatement");
      return r2[r2.length - 1] === n2;
    }, isLiteral: Ks, isLongCurriedCallExpression: function(e2) {
      const t2 = e2.getValue(), n2 = e2.getParentNode();
      return sc(t2) && sc(n2) && n2.callee === t2 && t2.arguments.length > n2.arguments.length && n2.arguments.length > 0;
    }, isSimpleCallArgument: function e2(t2, n2) {
      if (n2 >= 2)
        return false;
      const r2 = (t3) => e2(t3, n2 + 1), o2 = t2.type === "Literal" && "regex" in t2 && t2.regex.pattern || t2.type === "RegExpLiteral" && t2.pattern;
      return !(o2 && o2.length > 5) && (t2.type === "Literal" || t2.type === "BigIntLiteral" || t2.type === "DecimalLiteral" || t2.type === "BooleanLiteral" || t2.type === "NullLiteral" || t2.type === "NumericLiteral" || t2.type === "RegExpLiteral" || t2.type === "StringLiteral" || t2.type === "Identifier" || t2.type === "ThisExpression" || t2.type === "Super" || t2.type === "PrivateName" || t2.type === "ArgumentPlaceholder" || t2.type === "Import" || (t2.type === "TemplateLiteral" ? t2.expressions.every(r2) : t2.type === "ObjectExpression" ? t2.properties.every((e3) => !e3.computed && (e3.shorthand || e3.value && r2(e3.value))) : t2.type === "ArrayExpression" ? t2.elements.every((e3) => e3 === null || r2(e3)) : t2.type === "ImportExpression" ? r2(t2.source) : t2.type === "CallExpression" || t2.type === "OptionalCallExpression" || t2.type === "NewExpression" ? e2(t2.callee, n2) && t2.arguments.every(r2) : t2.type === "MemberExpression" || t2.type === "OptionalMemberExpression" ? e2(t2.object, n2) && e2(t2.property, n2) : t2.type !== "UnaryExpression" || t2.operator !== "!" && t2.operator !== "-" ? t2.type === "TSNonNullExpression" && e2(t2.expression, n2) : e2(t2.argument, n2)));
    }, isMeaningfulJSXText: pc, isMemberExpressionChain: function e2(t2) {
      return (t2.type === "MemberExpression" || t2.type === "OptionalMemberExpression") && (t2.object.type === "Identifier" || e2(t2.object));
    }, isMemberish: function(e2) {
      return e2.type === "MemberExpression" || e2.type === "OptionalMemberExpression" || e2.type === "BindExpression" && Boolean(e2.object);
    }, isNgForOf: function(e2, t2, n2) {
      return e2.type === "NGMicrosyntaxKeyedExpression" && e2.key.name === "of" && t2 === 1 && n2.body[0].type === "NGMicrosyntaxLet" && n2.body[0].value === null;
    }, isNumericLiteral: Qs, isObjectType: function(e2) {
      return e2.type === "ObjectTypeAnnotation" || e2.type === "TSTypeLiteral";
    }, isObjectTypePropertyAFunction: function(e2) {
      return !(e2.type !== "ObjectTypeProperty" && e2.type !== "ObjectTypeInternalSlot" || e2.value.type !== "FunctionTypeAnnotation" || e2.static || oc(e2));
    }, isSimpleType: function(e2) {
      return !!e2 && (!(e2.type !== "GenericTypeAnnotation" && e2.type !== "TSTypeReference" || e2.typeParameters) || !!ic.has(e2.type));
    }, isSimpleNumber: fc, isSimpleTemplateLiteral: function(e2) {
      let t2 = "expressions";
      e2.type === "TSTemplateLiteralType" && (t2 = "types");
      const n2 = e2[t2];
      return n2.length !== 0 && n2.every((e3) => {
        if (e3.comments)
          return false;
        if (e3.type === "Identifier" || e3.type === "ThisExpression")
          return true;
        if (e3.type === "MemberExpression" || e3.type === "OptionalMemberExpression") {
          let t3 = e3;
          for (; t3.type === "MemberExpression" || t3.type === "OptionalMemberExpression"; ) {
            if (t3.property.type !== "Identifier" && t3.property.type !== "Literal" && t3.property.type !== "StringLiteral" && t3.property.type !== "NumericLiteral")
              return false;
            if (t3 = t3.object, t3.comments)
              return false;
          }
          return t3.type === "Identifier" || t3.type === "ThisExpression";
        }
        return false;
      });
    }, isStringLiteral: Zs, isStringPropSafeToUnquote: function(e2, t2) {
      return t2.parser !== "json" && Zs(e2.key) && mc(e2.key).slice(1, -1) === e2.key.value && (Ls(e2.key.value) && !((t2.parser === "typescript" || t2.parser === "babel-ts") && e2.type === "ClassProperty") || fc(e2.key.value) && String(Number(e2.key.value)) === e2.key.value && (t2.parser === "babel" || t2.parser === "espree" || t2.parser === "meriyah"));
    }, isTemplateOnItsOwnLine: function(e2, t2) {
      return (e2.type === "TemplateLiteral" && hc(e2) || e2.type === "TaggedTemplateExpression" && hc(e2.quasi)) && !js(t2, Vs(e2), {backwards: true});
    }, isTestCall: function e2(t2, n2) {
      if (t2.type !== "CallExpression")
        return false;
      if (t2.arguments.length === 1) {
        if (tc(t2) && n2 && e2(n2))
          return ec(t2.arguments[0]);
        if ((r2 = t2).callee.type === "Identifier" && /^(before|after)(Each|All)$/.test(r2.callee.name) && r2.arguments.length === 1)
          return tc(t2.arguments[0]);
      } else if ((t2.arguments.length === 2 || t2.arguments.length === 3) && (t2.callee.type === "Identifier" && ac.test(t2.callee.name) || function(e3) {
        return (e3.callee.type === "MemberExpression" || e3.callee.type === "OptionalMemberExpression") && e3.callee.object.type === "Identifier" && e3.callee.property.type === "Identifier" && ac.test(e3.callee.object.name) && (e3.callee.property.name === "only" || e3.callee.property.name === "skip");
      }(t2)) && (function(e3) {
        return e3.type === "TemplateLiteral";
      }(t2.arguments[0]) || Zs(t2.arguments[0])))
        return !(t2.arguments[2] && !Qs(t2.arguments[2])) && ((t2.arguments.length === 2 ? ec(t2.arguments[1]) : function(e3) {
          return e3.type === "FunctionExpression" || e3.type === "ArrowFunctionExpression" && e3.body.type === "BlockStatement";
        }(t2.arguments[1]) && vc(t2.arguments[1]).length <= 1) || tc(t2.arguments[1]));
      var r2;
      return false;
    }, isTheOnlyJSXElementInMarkdown: function(e2, t2) {
      if (e2.parentParser !== "markdown" && e2.parentParser !== "mdx")
        return false;
      const n2 = t2.getNode();
      if (!n2.expression || !nc(n2.expression))
        return false;
      const r2 = t2.getParentNode();
      return r2.type === "Program" && r2.body.length === 1;
    }, isTSXFile: function(e2) {
      return e2.filepath && /\.tsx$/i.test(e2.filepath);
    }, isTypeAnnotationAFunction: function(e2) {
      return !(e2.type !== "TypeAnnotation" && e2.type !== "TSTypeAnnotation" || e2.typeAnnotation.type !== "FunctionTypeAnnotation" || e2.static || qs(e2, e2.typeAnnotation));
    }, matchJsxWhitespaceRegex: cc, needsHardlineAfterDanglingComment: function(e2) {
      if (!e2.comments)
        return false;
      const t2 = Ms(e2.comments.filter((e3) => !e3.leading && !e3.trailing));
      return t2 && !Gs(t2);
    }, rawText: mc, returnArgumentHasLeadingComment: function(e2, t2) {
      if (dc(e2.originalText, t2))
        return true;
      if (Hs(t2)) {
        let r2, o2 = t2;
        for (; r2 = (n2 = o2).expressions ? n2.expressions[0] : n2.left || n2.test || n2.callee || n2.object || n2.tag || n2.argument || n2.expression; )
          if (o2 = r2, dc(e2.originalText, o2))
            return true;
      }
      var n2;
      return false;
    }, shouldPrintComma: function(e2, t2 = "es5") {
      return e2.trailingComma === "es5" && t2 === "es5" || e2.trailingComma === "all" && (t2 === "all" || t2 === "es5");
    }, isBitwiseOperator: function(e2) {
      return !!yc[e2] || e2 === "|" || e2 === "^" || e2 === "&";
    }, shouldFlatten: function(e2, t2) {
      return Cc(t2) === Cc(e2) && (e2 !== "**" && ((!gc[e2] || !gc[t2]) && (!(t2 === "%" && Dc[e2] || e2 === "%" && Dc[t2]) && ((t2 === e2 || !Dc[t2] || !Dc[e2]) && (!yc[e2] || !yc[t2])))));
    }, startsWithNoLookaheadToken: function e2(t2, n2) {
      switch ((t2 = function(e3) {
        for (; e3.left; )
          e3 = e3.left;
        return e3;
      }(t2)).type) {
        case "FunctionExpression":
        case "ClassExpression":
        case "DoExpression":
          return n2;
        case "ObjectExpression":
          return true;
        case "MemberExpression":
        case "OptionalMemberExpression":
          return e2(t2.object, n2);
        case "TaggedTemplateExpression":
          return t2.tag.type !== "FunctionExpression" && e2(t2.tag, n2);
        case "CallExpression":
        case "OptionalCallExpression":
          return t2.callee.type !== "FunctionExpression" && e2(t2.callee, n2);
        case "ConditionalExpression":
          return e2(t2.test, n2);
        case "UpdateExpression":
          return !t2.prefix && e2(t2.argument, n2);
        case "BindExpression":
          return t2.object && e2(t2.object, n2);
        case "SequenceExpression":
          return e2(t2.expressions[0], n2);
        case "TSAsExpression":
          return e2(t2.expression, n2);
        default:
          return false;
      }
    }, getPrecedence: Cc};
    const {getLast: Tc, hasNewline: Bc, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Nc, getNextNonSpaceNonCommentCharacter: kc, hasNewlineInRange: Pc, addLeadingComment: Oc, addTrailingComment: Ic, addDanglingComment: Lc, getNextNonSpaceNonCommentCharacterIndex: Mc} = Lt, {isBlockComment: jc, getFunctionParameters: _c, isPrettierIgnoreComment: Rc, isJSXNode: Vc, hasFlowShorthandAnnotationComment: $c, hasFlowAnnotationComment: qc, hasIgnoreComment: Wc} = wc, {locStart: Uc, locEnd: Jc} = ii;
    function zc(e2, t2) {
      const n2 = (e2.body || e2.properties).find(({type: e3}) => e3 !== "EmptyStatement");
      n2 ? Oc(n2, t2) : Lc(e2, t2);
    }
    function Hc(e2, t2) {
      e2.type === "BlockStatement" ? zc(e2, t2) : Oc(e2, t2);
    }
    function Gc(e2, t2) {
      const {precedingNode: n2, enclosingNode: r2, followingNode: o2} = e2;
      if (!r2 || r2.type !== "IfStatement" || !o2)
        return false;
      return kc(t2, e2, Jc) === ")" ? (Ic(n2, e2), true) : n2 === r2.consequent && o2 === r2.alternate ? (n2.type === "BlockStatement" ? Ic(n2, e2) : Lc(r2, e2), true) : o2.type === "BlockStatement" ? (zc(o2, e2), true) : o2.type === "IfStatement" ? (Hc(o2.consequent, e2), true) : r2.consequent === o2 && (Oc(o2, e2), true);
    }
    function Xc(e2, t2) {
      const {precedingNode: n2, enclosingNode: r2, followingNode: o2} = e2;
      if (!r2 || r2.type !== "WhileStatement" || !o2)
        return false;
      return kc(t2, e2, Jc) === ")" ? (Ic(n2, e2), true) : o2.type === "BlockStatement" ? (zc(o2, e2), true) : r2.body === o2 && (Oc(o2, e2), true);
    }
    function Yc(e2) {
      const {precedingNode: t2, enclosingNode: n2, followingNode: r2} = e2;
      return !(!n2 || n2.type !== "TryStatement" && n2.type !== "CatchClause" || !r2) && (n2.type === "CatchClause" && t2 ? (Ic(t2, e2), true) : r2.type === "BlockStatement" ? (zc(r2, e2), true) : r2.type === "TryStatement" ? (Hc(r2.finalizer, e2), true) : r2.type === "CatchClause" && (Hc(r2.body, e2), true));
    }
    function Kc(e2) {
      const {precedingNode: t2, enclosingNode: n2, followingNode: r2} = e2;
      if (n2 && (n2.type === "ClassDeclaration" || n2.type === "ClassExpression" || n2.type === "DeclareClass" || n2.type === "DeclareInterface" || n2.type === "InterfaceDeclaration" || n2.type === "TSInterfaceDeclaration")) {
        if (n2.decorators && n2.decorators.length > 0 && (!r2 || r2.type !== "Decorator"))
          return Ic(n2.decorators[n2.decorators.length - 1], e2), true;
        if (n2.body && r2 === n2.body)
          return zc(n2.body, e2), true;
        if (r2) {
          for (const o2 of ["implements", "extends", "mixins"])
            if (n2[o2] && r2 === n2[o2][0])
              return !t2 || t2 !== n2.id && t2 !== n2.typeParameters && t2 !== n2.superClass ? Lc(n2, e2, o2) : Ic(t2, e2), true;
        }
      }
      return false;
    }
    function Qc(e2, t2) {
      const {precedingNode: n2, enclosingNode: r2} = e2;
      return (r2 && n2 && (r2.type === "Property" || r2.type === "TSDeclareMethod" || r2.type === "TSAbstractMethodDefinition") && n2.type === "Identifier" && r2.key === n2 && kc(t2, n2, Jc) !== ":" || !(!n2 || !r2 || n2.type !== "Decorator" || r2.type !== "ClassMethod" && r2.type !== "ClassProperty" && r2.type !== "FieldDefinition" && r2.type !== "TSAbstractClassProperty" && r2.type !== "TSAbstractMethodDefinition" && r2.type !== "TSDeclareMethod" && r2.type !== "MethodDefinition")) && (Ic(n2, e2), true);
    }
    function Zc(e2, t2) {
      const {precedingNode: n2, enclosingNode: r2, followingNode: o2} = e2;
      if (n2 && n2.type === "FunctionTypeParam" && r2 && r2.type === "FunctionTypeAnnotation" && o2 && o2.type !== "FunctionTypeParam")
        return Ic(n2, e2), true;
      if (n2 && (n2.type === "Identifier" || n2.type === "AssignmentPattern") && r2 && ol(r2) && kc(t2, e2, Jc) === ")")
        return Ic(n2, e2), true;
      if (r2 && r2.type === "FunctionDeclaration" && o2 && o2.type === "BlockStatement") {
        const n3 = (() => {
          const e3 = _c(r2);
          if (e3.length !== 0)
            return Nc(t2, Jc(Tc(e3)));
          const n4 = Nc(t2, Jc(r2.id));
          return n4 !== false && Nc(t2, n4 + 1);
        })();
        if (Uc(e2) > n3)
          return zc(o2, e2), true;
      }
      return false;
    }
    function el(e2) {
      const {enclosingNode: t2} = e2;
      return !(!t2 || t2.type !== "ImportSpecifier") && (Oc(t2, e2), true);
    }
    function tl(e2) {
      const {enclosingNode: t2} = e2;
      return !(!t2 || t2.type !== "LabeledStatement") && (Oc(t2, e2), true);
    }
    function nl(e2, t2, n2) {
      const {enclosingNode: r2} = e2;
      return t2 && t2.body && t2.body.length === 0 ? (n2 ? Lc(t2, e2) : Oc(t2, e2), true) : !(!r2 || r2.type !== "Program" || r2.body.length !== 0 || !r2.directives || r2.directives.length !== 0) && (n2 ? Lc(r2, e2) : Oc(r2, e2), true);
    }
    function rl(e2) {
      const {enclosingNode: t2, followingNode: n2} = e2;
      if (Rc(e2) && t2 && t2.type === "TSMappedType" && n2 && n2.type === "TSTypeParameter" && n2.constraint)
        return t2.prettierIgnore = true, e2.unignore = true, true;
    }
    function ol(e2) {
      return e2.type === "ArrowFunctionExpression" || e2.type === "FunctionExpression" || e2.type === "FunctionDeclaration" || e2.type === "ObjectMethod" || e2.type === "ClassMethod" || e2.type === "TSDeclareFunction" || e2.type === "TSCallSignatureDeclaration" || e2.type === "TSConstructSignatureDeclaration" || e2.type === "TSMethodSignature" || e2.type === "TSConstructorType" || e2.type === "TSFunctionType" || e2.type === "TSDeclareMethod";
    }
    function ul(e2) {
      return jc(e2) && e2.value[0] === "*" && /@type\b/.test(e2.value);
    }
    var il = {handleOwnLineComment: function(e2, t2, n2, r2, o2) {
      return rl(e2) || Zc(e2, t2) || function(e3) {
        const {enclosingNode: t3, followingNode: n3} = e3;
        if (t3 && (t3.type === "MemberExpression" || t3.type === "OptionalMemberExpression") && n3 && n3.type === "Identifier")
          return Oc(t3, e3), true;
        return false;
      }(e2) || Gc(e2, t2) || Xc(e2, t2) || Yc(e2) || Kc(e2) || el(e2) || function(e3) {
        const {enclosingNode: t3} = e3;
        if (t3 && (t3.type === "ForInStatement" || t3.type === "ForOfStatement"))
          return Oc(t3, e3), true;
        return false;
      }(e2) || function(e3) {
        const {precedingNode: t3, enclosingNode: n3, followingNode: r3} = e3;
        if (n3 && (n3.type === "UnionTypeAnnotation" || n3.type === "TSUnionType"))
          return Rc(e3) && (r3.prettierIgnore = true, e3.unignore = true), !!t3 && (Ic(t3, e3), true);
        r3 && (r3.type === "UnionTypeAnnotation" || r3.type === "TSUnionType") && Rc(e3) && (r3.types[0].prettierIgnore = true, e3.unignore = true);
        return false;
      }(e2) || nl(e2, r2, o2) || function(e3, t3) {
        const {precedingNode: n3, enclosingNode: r3} = e3;
        if (n3 && n3.type === "ImportSpecifier" && r3 && r3.type === "ImportDeclaration" && Bc(t3, Jc(e3)))
          return Ic(n3, e3), true;
        return false;
      }(e2, t2) || function(e3) {
        const {enclosingNode: t3} = e3;
        if (t3 && t3.type === "AssignmentPattern")
          return Oc(t3, e3), true;
        return false;
      }(e2) || Qc(e2, t2) || tl(e2);
    }, handleEndOfLineComment: function(e2, t2, n2, r2, o2) {
      return function(e3) {
        const {followingNode: t3} = e3;
        if (t3 && ul(e3))
          return Oc(t3, e3), true;
        return false;
      }(e2) || Zc(e2, t2) || function(e3, t3) {
        const {precedingNode: n3, enclosingNode: r3, followingNode: o3} = e3, u2 = n3 && !Pc(t3, Jc(n3), Uc(e3));
        if ((!n3 || !u2) && r3 && (r3.type === "ConditionalExpression" || r3.type === "TSConditionalType") && o3)
          return Oc(o3, e3), true;
        return false;
      }(e2, t2) || el(e2) || Gc(e2, t2) || Xc(e2, t2) || Yc(e2) || Kc(e2) || tl(e2) || function(e3) {
        const {precedingNode: t3, enclosingNode: n3} = e3;
        if (n3 && (n3.type === "CallExpression" || n3.type === "OptionalCallExpression") && t3 && n3.callee === t3 && n3.arguments.length > 0)
          return Oc(n3.arguments[0], e3), true;
        return false;
      }(e2) || function(e3) {
        const {enclosingNode: t3} = e3;
        if (t3 && (t3.type === "Property" || t3.type === "ObjectProperty"))
          return Oc(t3, e3), true;
        return false;
      }(e2) || nl(e2, r2, o2) || function(e3) {
        const {enclosingNode: t3} = e3;
        if (t3 && t3.type === "TypeAlias")
          return Oc(t3, e3), true;
        return false;
      }(e2) || function(e3) {
        const {enclosingNode: t3, followingNode: n3} = e3;
        if (t3 && (t3.type === "VariableDeclarator" || t3.type === "AssignmentExpression") && n3 && (n3.type === "ObjectExpression" || n3.type === "ArrayExpression" || n3.type === "TemplateLiteral" || n3.type === "TaggedTemplateExpression" || jc(e3)))
          return Oc(n3, e3), true;
        return false;
      }(e2);
    }, handleRemainingComment: function(e2, t2, n2, r2, o2) {
      return !!(rl(e2) || Gc(e2, t2) || Xc(e2, t2) || function(e3) {
        const {precedingNode: t3, enclosingNode: n3} = e3;
        if (n3 && (n3.type === "ObjectProperty" || n3.type === "Property") && n3.shorthand && n3.key === t3 && n3.value.type === "AssignmentPattern")
          return Ic(n3.value.left, e3), true;
        return false;
      }(e2) || function(e3, t3) {
        if (kc(t3, e3, Jc) !== ")")
          return false;
        const {enclosingNode: n3} = e3;
        if (n3 && (ol(n3) && _c(n3).length === 0 || (n3.type === "CallExpression" || n3.type === "OptionalCallExpression" || n3.type === "NewExpression") && n3.arguments.length === 0))
          return Lc(n3, e3), true;
        if (n3 && n3.type === "MethodDefinition" && _c(n3.value).length === 0)
          return Lc(n3.value, e3), true;
        return false;
      }(e2, t2) || Qc(e2, t2) || nl(e2, r2, o2) || function(e3, t3) {
        const {enclosingNode: n3} = e3;
        if (!n3 || n3.type !== "ArrowFunctionExpression")
          return false;
        const r3 = Mc(t3, e3, Jc);
        if (r3 !== false && t3.slice(r3, r3 + 2) === "=>")
          return Lc(n3, e3), true;
        return false;
      }(e2, t2) || function(e3, t3) {
        if (kc(t3, e3, Jc) !== "(")
          return false;
        const {precedingNode: n3, enclosingNode: r3} = e3;
        if (n3 && r3 && (r3.type === "FunctionDeclaration" || r3.type === "FunctionExpression" || r3.type === "ClassMethod" || r3.type === "MethodDefinition" || r3.type === "ObjectMethod"))
          return Ic(n3, e3), true;
        return false;
      }(e2, t2) || function(e3) {
        const {precedingNode: t3, enclosingNode: n3, followingNode: r3} = e3;
        if (!n3 || n3.type !== "TSMappedType")
          return false;
        if (r3 && r3.type === "TSTypeParameter" && r3.name)
          return Oc(r3.name, e3), true;
        if (t3 && t3.type === "TSTypeParameter" && t3.constraint)
          return Ic(t3.constraint, e3), true;
        return false;
      }(e2) || function(e3) {
        const {enclosingNode: t3} = e3;
        if (t3 && (t3.type === "ContinueStatement" || t3.type === "BreakStatement") && !t3.label)
          return Ic(t3, e3), true;
        return false;
      }(e2) || function(e3, t3) {
        const {enclosingNode: n3, followingNode: r3} = e3;
        if (!r3 && n3 && (n3.type === "TSMethodSignature" || n3.type === "TSDeclareFunction" || n3.type === "TSAbstractMethodDefinition") && kc(t3, e3, Jc) === ";")
          return Ic(n3, e3), true;
        return false;
      }(e2, t2));
    }, hasLeadingComment: function(e2, t2 = () => true) {
      return e2.leadingComments ? e2.leadingComments.some(t2) : !!e2.comments && e2.comments.some((e3) => e3.leading && t2(e3));
    }, isTypeCastComment: ul, getGapRegex: function(e2) {
      if (e2 && e2.type !== "BinaryExpression" && e2.type !== "LogicalExpression")
        return /^[\s&(|]*$/;
    }, getCommentChildNodes: function(e2, t2) {
      if ((t2.parser === "typescript" || t2.parser === "flow" || t2.parser === "espree" || t2.parser === "meriyah") && e2.type === "MethodDefinition" && e2.value && e2.value.type === "FunctionExpression" && _c(e2.value).length === 0 && !e2.value.returnType && (!e2.value.typeParameters || e2.value.typeParameters.length === 0) && e2.value.body)
        return [...e2.decorators || [], e2.key, e2.value.body];
    }, willPrintOwnComments: function(e2) {
      const t2 = e2.getValue(), n2 = e2.getParentNode();
      return (t2 && (Vc(t2) || $c(t2) || n2 && (n2.type === "CallExpression" || n2.type === "OptionalCallExpression") && (qc(t2.leadingComments) || qc(t2.trailingComments))) || n2 && (n2.type === "JSXSpreadAttribute" || n2.type === "JSXSpreadChild" || n2.type === "UnionTypeAnnotation" || n2.type === "TSUnionType" || (n2.type === "ClassDeclaration" || n2.type === "ClassExpression") && n2.superClass === t2)) && (!Wc(e2) || n2.type === "UnionTypeAnnotation" || n2.type === "TSUnionType");
    }};
    const {getStringWidth: al, getIndentSize: sl} = Lt, {builders: {concat: cl, join: ll, hardline: pl, softline: dl, group: fl, indent: hl, align: ml, lineSuffixBoundary: gl, addAlignmentToDoc: Dl}, printer: {printDocToString: yl}, utils: {mapDoc: El}} = cn, {isBinaryish: Cl, isJestEachTemplateLiteral: bl, isSimpleTemplateLiteral: vl} = wc;
    function Al(e2) {
      return e2.replace(/([\\`]|\${)/g, "\\$1");
    }
    var Fl = {printTemplateLiteral: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (r2.type === "TemplateLiteral" && bl(r2, e2.getParentNode())) {
        const r3 = function(e3, t3, n3) {
          const r4 = e3.getNode(), o3 = r4.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (o3.length > 1 || o3.some((e4) => e4.length !== 0)) {
            t3.__inJestEach = true;
            const u3 = e3.map(n3, "expressions");
            t3.__inJestEach = false;
            const i3 = [], a3 = u3.map((e4) => "${" + yl(e4, Object.assign({}, t3, {printWidth: 1 / 0, endOfLine: "lf"})).formatted + "}"), s2 = [{hasLineBreak: false, cells: []}];
            for (let e4 = 1; e4 < r4.quasis.length; e4++) {
              const t4 = s2[s2.length - 1], n4 = a3[e4 - 1];
              t4.cells.push(n4), n4.includes("\n") && (t4.hasLineBreak = true), r4.quasis[e4].value.raw.includes("\n") && s2.push({hasLineBreak: false, cells: []});
            }
            const c2 = Math.max(o3.length, ...s2.map((e4) => e4.cells.length)), l2 = Array.from({length: c2}).fill(0), p2 = [{cells: o3}, ...s2.filter((e4) => e4.cells.length !== 0)];
            for (const {cells: e4} of p2.filter((e5) => !e5.hasLineBreak))
              e4.forEach((e5, t4) => {
                l2[t4] = Math.max(l2[t4], al(e5));
              });
            return i3.push(gl, "`", hl(cl([pl, ll(pl, p2.map((e4) => ll(" | ", e4.cells.map((t4, n4) => e4.hasLineBreak ? t4 : t4 + " ".repeat(l2[n4] - al(t4))))))])), pl, "`"), cl(i3);
          }
        }(e2, n2, t2);
        if (r3)
          return r3;
      }
      let o2 = "expressions";
      r2.type === "TSTemplateLiteralType" && (o2 = "types");
      const u2 = [];
      let i2 = e2.map(t2, o2);
      const a2 = vl(r2);
      return a2 && (i2 = i2.map((e3) => yl(e3, Object.assign({}, n2, {printWidth: 1 / 0})).formatted)), u2.push(gl, "`"), e2.each((e3) => {
        const s2 = e3.getName();
        if (u2.push(t2(e3)), s2 < i2.length) {
          const {tabWidth: t3} = n2, c2 = e3.getValue(), l2 = sl(c2.value.raw, t3);
          let p2 = i2[s2];
          if (!a2) {
            const e4 = r2[o2][s2];
            (e4.comments && e4.comments.length || e4.type === "MemberExpression" || e4.type === "OptionalMemberExpression" || e4.type === "ConditionalExpression" || e4.type === "SequenceExpression" || e4.type === "TSAsExpression" || Cl(e4)) && (p2 = cl([hl(cl([dl, p2])), dl]));
          }
          const d2 = l2 === 0 && c2.value.raw.endsWith("\n") ? ml(-1 / 0, p2) : Dl(p2, l2, t3);
          u2.push(fl(cl(["${", d2, gl, "}"])));
        }
      }, "quasis"), u2.push("`"), cl(u2);
    }, printTemplateExpressions: function(e2, t2) {
      return e2.map((e3) => function(e4, t3) {
        const n2 = e4.getValue();
        let r2 = t3(e4);
        return n2.comments && n2.comments.length && (r2 = fl(cl([hl(cl([dl, r2])), dl]))), cl(["${", r2, gl, "}"]);
      }(e3, t2), "expressions");
    }, escapeTemplateCharacters: function(e2, t2) {
      return El(e2, (e3) => {
        if (!e3.parts)
          return e3;
        const n2 = e3.parts.map((e4) => typeof e4 == "string" ? t2 ? e4.replace(/(\\*)`/g, "$1$1\\`") : Al(e4) : e4);
        return Object.assign({}, e3, {parts: n2});
      });
    }, uncookTemplateElementValue: Al};
    const {builders: {indent: xl, softline: Sl, literalline: wl, concat: Tl, dedentToRoot: Bl}} = cn, {escapeTemplateCharacters: Nl} = Fl;
    var kl = function(e2, t2, n2) {
      let r2 = e2.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (e3, t3) => "\\".repeat(t3.length / 2) + "`");
      const o2 = function(e3) {
        const t3 = e3.match(/^([^\S\n]*)\S/m);
        return t3 === null ? "" : t3[1];
      }(r2), u2 = o2 !== "";
      u2 && (r2 = r2.replace(new RegExp("^".concat(o2), "gm"), ""));
      const i2 = Nl(n2(r2, {parser: "markdown", __inJsTemplate: true}, {stripTrailingHardline: true}), true);
      return Tl(["`", u2 ? xl(Tl([Sl, i2])) : Tl([wl, Bl(i2)]), Sl, "`"]);
    };
    const {builders: {indent: Pl, hardline: Ol, softline: Il, concat: Ll}, utils: {mapDoc: Ml, replaceNewlinesWithLiterallines: jl}} = cn, {printTemplateExpressions: _l} = Fl;
    var Rl = function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = r2.quasis.map((e3) => e3.value.raw);
      let u2 = 0;
      return function(e3, t3, n3) {
        if (t3.quasis.length === 1 && !t3.quasis[0].value.raw.trim())
          return "``";
        const r3 = function(e4, t4) {
          if (!t4 || !t4.length)
            return e4;
          let n4 = 0;
          const r4 = Ml(e4, (e5) => {
            if (!e5 || !e5.parts || !e5.parts.length)
              return e5;
            let {parts: r5} = e5;
            const o3 = r5.indexOf("@"), u3 = o3 + 1;
            if (o3 > -1 && typeof r5[u3] == "string" && r5[u3].startsWith("prettier-placeholder")) {
              const e6 = r5[o3], t5 = r5[u3], n5 = r5.slice(u3 + 1);
              r5 = r5.slice(0, o3).concat([e6 + t5]).concat(n5);
            }
            const i2 = [];
            return r5.forEach((e6) => {
              typeof e6 == "string" && e6.includes("@prettier-placeholder") ? e6.split(/@prettier-placeholder-(\d+)-id/).forEach((e7, r6) => {
                r6 % 2 != 0 ? (i2.push(t4[e7]), n4++) : i2.push(jl(e7));
              }) : i2.push(e6);
            }), Object.assign({}, e5, {parts: i2});
          });
          return t4.length === n4 ? r4 : null;
        }(e3, n3);
        if (!r3)
          throw new Error("Couldn't insert all the expressions");
        return Ll(["`", Pl(Ll([Ol, r3])), Il, "`"]);
      }(n2(o2.reduce((e3, t3, n3) => n3 === 0 ? t3 : e3 + "@prettier-placeholder-" + u2++ + "-id" + t3, ""), {parser: "scss"}, {stripTrailingHardline: true}), r2, _l(e2, t2));
    };
    const {builders: {indent: Vl, join: $l, hardline: ql, concat: Wl}} = cn, {escapeTemplateCharacters: Ul, printTemplateExpressions: Jl} = Fl;
    function zl(e2) {
      const t2 = [];
      let n2 = false;
      return e2.map((e3) => e3.trim()).forEach((e3, r2, o2) => {
        e3 !== "" && (o2[r2 - 1] === "" && n2 ? t2.push(Wl([ql, e3])) : t2.push(e3), n2 = true);
      }), t2.length === 0 ? null : $l(ql, t2);
    }
    var Hl = function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = r2.quasis.length;
      if (o2 === 1 && r2.quasis[0].value.raw.trim() === "")
        return "``";
      const u2 = Jl(e2, t2), i2 = [];
      for (let e3 = 0; e3 < o2; e3++) {
        const t3 = e3 === 0, a2 = e3 === o2 - 1, s2 = r2.quasis[e3].value.cooked, c2 = s2.split("\n"), l2 = c2.length, p2 = u2[e3], d2 = l2 > 2 && c2[0].trim() === "" && c2[1].trim() === "", f2 = l2 > 2 && c2[l2 - 1].trim() === "" && c2[l2 - 2].trim() === "", h2 = c2.every((e4) => /^\s*(?:#[^\n\r]*)?$/.test(e4));
        if (!a2 && /#[^\n\r]*$/.test(c2[l2 - 1]))
          return null;
        let m2 = null;
        m2 = h2 ? zl(c2) : n2(s2, {parser: "graphql"}, {stripTrailingHardline: true}), m2 ? (m2 = Ul(m2, false), !t3 && d2 && i2.push(""), i2.push(m2), !a2 && f2 && i2.push("")) : t3 || a2 || !d2 || i2.push(""), p2 && i2.push(p2);
      }
      return Wl(["`", Vl(Wl([ql, $l(ql, i2)])), ql, "`"]);
    };
    const {builders: {indent: Gl, line: Xl, hardline: Yl, concat: Kl, group: Ql}, utils: {mapDoc: Zl}} = cn, {printTemplateExpressions: ep, uncookTemplateElementValue: tp} = Fl;
    let np = 0;
    var rp = function(e2, t2, n2, r2, {parser: o2}) {
      const u2 = e2.getValue(), i2 = np;
      np = np + 1 >>> 0;
      const a2 = (e3) => "PRETTIER_HTML_PLACEHOLDER_".concat(e3, "_").concat(i2, "_IN_JS"), s2 = u2.quasis.map((e3, t3, n3) => t3 === n3.length - 1 ? e3.value.cooked : e3.value.cooked + a2(t3)).join(""), c2 = ep(e2, t2);
      if (c2.length === 0 && s2.trim().length === 0)
        return "``";
      const l2 = new RegExp(a2("(\\d+)"), "g");
      let p2 = 0;
      const d2 = n2(s2, {parser: o2, __onHtmlRoot(e3) {
        p2 = e3.children.length;
      }}, {stripTrailingHardline: true}), f2 = Zl(d2, (e3) => {
        if (typeof e3 != "string")
          return e3;
        const t3 = [], n3 = e3.split(l2);
        for (let e4 = 0; e4 < n3.length; e4++) {
          let o3 = n3[e4];
          if (e4 % 2 == 0) {
            o3 && (o3 = tp(o3), r2.embeddedInHtml && (o3 = o3.replace(/<\/(script)\b/gi, "<\\/$1")), t3.push(o3));
            continue;
          }
          const u3 = +o3;
          t3.push(c2[u3]);
        }
        return Kl(t3);
      }), h2 = /^\s/.test(s2) ? " " : "", m2 = /\s$/.test(s2) ? " " : "", g2 = r2.htmlWhitespaceSensitivity === "ignore" ? Yl : h2 && m2 ? Xl : null;
      return Ql(Kl(g2 ? ["`", Gl(Kl([g2, Ql(f2)])), g2, "`"] : ["`", h2, p2 > 1 ? Gl(Ql(f2)) : Ql(f2), m2, "`"]));
    };
    const {isBlockComment: op} = wc, {hasLeadingComment: up} = il;
    function ip(e2) {
      return function(e3) {
        const t2 = e3.getValue(), n2 = e3.getParentNode(), r2 = e3.getParentNode(1);
        return r2 && t2.quasis && n2.type === "JSXExpressionContainer" && r2.type === "JSXElement" && r2.openingElement.name.name === "style" && r2.openingElement.attributes.some((e4) => e4.name.name === "jsx") || n2 && n2.type === "TaggedTemplateExpression" && n2.tag.type === "Identifier" && n2.tag.name === "css" || n2 && n2.type === "TaggedTemplateExpression" && n2.tag.type === "MemberExpression" && n2.tag.object.name === "css" && (n2.tag.property.name === "global" || n2.tag.property.name === "resolve");
      }(e2) || function(e3) {
        const t2 = e3.getParentNode();
        if (!t2 || t2.type !== "TaggedTemplateExpression")
          return false;
        const {tag: n2} = t2;
        switch (n2.type) {
          case "MemberExpression":
            return sp(n2.object) || cp(n2);
          case "CallExpression":
            return sp(n2.callee) || n2.callee.type === "MemberExpression" && (n2.callee.object.type === "MemberExpression" && (sp(n2.callee.object.object) || cp(n2.callee.object)) || n2.callee.object.type === "CallExpression" && sp(n2.callee.object.callee));
          case "Identifier":
            return n2.name === "css";
          default:
            return false;
        }
      }(e2) || function(e3) {
        const t2 = e3.getParentNode(), n2 = e3.getParentNode(1);
        return n2 && t2.type === "JSXExpressionContainer" && n2.type === "JSXAttribute" && n2.name.type === "JSXIdentifier" && n2.name.name === "css";
      }(e2) || function(e3) {
        return e3.match((e4) => e4.type === "TemplateLiteral", (e4, t2) => e4.type === "ArrayExpression" && t2 === "elements", (e4, t2) => (e4.type === "Property" || e4.type === "ObjectProperty") && e4.key.type === "Identifier" && e4.key.name === "styles" && t2 === "value", ...ap);
      }(e2) ? "css" : function(e3) {
        const t2 = e3.getValue(), n2 = e3.getParentNode();
        return lp(t2, "GraphQL") || n2 && (n2.type === "TaggedTemplateExpression" && (n2.tag.type === "MemberExpression" && n2.tag.object.name === "graphql" && n2.tag.property.name === "experimental" || n2.tag.type === "Identifier" && (n2.tag.name === "gql" || n2.tag.name === "graphql")) || n2.type === "CallExpression" && n2.callee.type === "Identifier" && n2.callee.name === "graphql");
      }(e2) ? "graphql" : function(e3) {
        return lp(e3.getValue(), "HTML") || e3.match((e4) => e4.type === "TemplateLiteral", (e4, t2) => e4.type === "TaggedTemplateExpression" && e4.tag.type === "Identifier" && e4.tag.name === "html" && t2 === "quasi");
      }(e2) ? "html" : function(e3) {
        return e3.match((e4) => e4.type === "TemplateLiteral", (e4, t2) => (e4.type === "Property" || e4.type === "ObjectProperty") && e4.key.type === "Identifier" && e4.key.name === "template" && t2 === "value", ...ap);
      }(e2) ? "angular" : function(e3) {
        const t2 = e3.getValue(), n2 = e3.getParentNode();
        return n2 && n2.type === "TaggedTemplateExpression" && t2.quasis.length === 1 && n2.tag.type === "Identifier" && (n2.tag.name === "md" || n2.tag.name === "markdown");
      }(e2) ? "markdown" : void 0;
    }
    const ap = [(e2, t2) => e2.type === "ObjectExpression" && t2 === "properties", (e2, t2) => e2.type === "CallExpression" && e2.callee.type === "Identifier" && e2.callee.name === "Component" && t2 === "arguments", (e2, t2) => e2.type === "Decorator" && t2 === "expression"];
    function sp(e2) {
      return e2.type === "Identifier" && e2.name === "styled";
    }
    function cp(e2) {
      return /^[A-Z]/.test(e2.object.name) && e2.property.name === "extend";
    }
    function lp(e2, t2) {
      return up(e2, (e3) => op(e3) && e3.value === " ".concat(t2, " "));
    }
    var pp = function(e2, t2, n2, r2) {
      const o2 = e2.getValue();
      if (o2.type !== "TemplateLiteral" || function({quasis: e3}) {
        return e3.some(({value: {cooked: e4}}) => e4 === null);
      }(o2))
        return;
      const u2 = ip(e2);
      return u2 ? u2 === "markdown" ? kl(e2, t2, n2) : u2 === "css" ? Rl(e2, t2, n2) : u2 === "graphql" ? Hl(e2, t2, n2) : u2 === "html" || u2 === "angular" ? rp(e2, t2, n2, r2, {parser: u2}) : void 0 : void 0;
    };
    const {isBlockComment: dp} = wc, fp = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]);
    function hp(e2, t2, n2) {
      if (e2.type === "Program" && delete t2.sourceType, e2.type !== "BigIntLiteral" && e2.type !== "BigIntLiteralTypeAnnotation" || t2.value && (t2.value = t2.value.toLowerCase()), e2.type !== "BigIntLiteral" && e2.type !== "Literal" || t2.bigint && (t2.bigint = t2.bigint.toLowerCase()), e2.type === "DecimalLiteral" && (t2.value = Number(t2.value)), e2.type === "EmptyStatement")
        return null;
      if (e2.type === "JSXText")
        return null;
      if (e2.type === "JSXExpressionContainer" && (e2.expression.type === "Literal" || e2.expression.type === "StringLiteral") && e2.expression.value === " ")
        return null;
      if (e2.type !== "Property" && e2.type !== "ObjectProperty" && e2.type !== "MethodDefinition" && e2.type !== "ClassProperty" && e2.type !== "ClassMethod" && e2.type !== "FieldDefinition" && e2.type !== "TSDeclareMethod" && e2.type !== "TSPropertySignature" && e2.type !== "ObjectTypeProperty" || typeof e2.key != "object" || !e2.key || e2.key.type !== "Literal" && e2.key.type !== "NumericLiteral" && e2.key.type !== "StringLiteral" && e2.key.type !== "Identifier" || delete t2.key, e2.type === "OptionalMemberExpression" && e2.optional === false && (t2.type = "MemberExpression", delete t2.optional), e2.type === "JSXElement" && e2.openingElement.name.name === "style" && e2.openingElement.attributes.some((e3) => e3.name.name === "jsx")) {
        t2.children.filter((e3) => e3.type === "JSXExpressionContainer" && e3.expression.type === "TemplateLiteral").map((e3) => e3.expression).reduce((e3, t3) => e3.concat(t3.quasis), []).forEach((e3) => delete e3.value);
      }
      e2.type === "JSXAttribute" && e2.name.name === "css" && e2.value.type === "JSXExpressionContainer" && e2.value.expression.type === "TemplateLiteral" && t2.value.expression.quasis.forEach((e3) => delete e3.value), e2.type === "JSXAttribute" && e2.value && e2.value.type === "Literal" && /["']|&quot;|&apos;/.test(e2.value.value) && (t2.value.value = t2.value.value.replace(/["']|&quot;|&apos;/g, '"'));
      const r2 = e2.expression || e2.callee;
      if (e2.type === "Decorator" && r2.type === "CallExpression" && r2.callee.name === "Component" && r2.arguments.length === 1) {
        const n3 = e2.expression.arguments[0].properties;
        t2.expression.arguments[0].properties.forEach((e3, t3) => {
          let r3 = null;
          switch (n3[t3].key.name) {
            case "styles":
              e3.value.type === "ArrayExpression" && (r3 = e3.value.elements[0]);
              break;
            case "template":
              e3.value.type === "TemplateLiteral" && (r3 = e3.value);
          }
          r3 && r3.quasis.forEach((e4) => delete e4.value);
        });
      }
      if (e2.type !== "TaggedTemplateExpression" || e2.tag.type !== "MemberExpression" && (e2.tag.type !== "Identifier" || e2.tag.name !== "gql" && e2.tag.name !== "graphql" && e2.tag.name !== "css" && e2.tag.name !== "md" && e2.tag.name !== "markdown" && e2.tag.name !== "html") && e2.tag.type !== "CallExpression" || t2.quasi.quasis.forEach((e3) => delete e3.value), e2.type === "TemplateLiteral") {
        (e2.leadingComments && e2.leadingComments.some((e3) => dp(e3) && ["GraphQL", "HTML"].some((t3) => e3.value === " ".concat(t3, " "))) || n2.type === "CallExpression" && n2.callee.name === "graphql") && t2.quasis.forEach((e3) => delete e3.value), e2.leadingComments || t2.quasis.forEach((e3) => {
          e3.value && delete e3.value.cooked;
        });
      }
      e2.type === "InterpreterDirective" && (t2.value = t2.value.trimEnd());
    }
    hp.ignoredProperties = fp;
    var mp = hp;
    const gp = (e2) => {
      if (typeof e2 != "string")
        throw new TypeError("Expected a string");
      const t2 = e2.match(/(?:\r?\n)/g) || [];
      if (t2.length === 0)
        return;
      const n2 = t2.filter((e3) => e3 === "\r\n").length;
      return n2 > t2.length - n2 ? "\r\n" : "\n";
    };
    var Dp = gp;
    Dp.graceful = (e2) => typeof e2 == "string" && gp(e2) || "\n";
    var yp = je(function(e2, t2) {
      function n2() {
        const e3 = qr;
        return n2 = function() {
          return e3;
        }, e3;
      }
      function r2() {
        const e3 = (t3 = Dp) && t3.__esModule ? t3 : {default: t3};
        var t3;
        return r2 = function() {
          return e3;
        }, e3;
      }
      Object.defineProperty(t2, "__esModule", {value: true}), t2.extract = function(e3) {
        const t3 = e3.match(i2);
        return t3 ? t3[0].trimLeft() : "";
      }, t2.strip = function(e3) {
        const t3 = e3.match(i2);
        return t3 && t3[0] ? e3.substring(t3[0].length) : e3;
      }, t2.parse = function(e3) {
        return f2(e3).pragmas;
      }, t2.parseWithComments = f2, t2.print = function({comments: e3 = "", pragmas: t3 = {}}) {
        const o3 = (0, r2().default)(e3) || n2().EOL, u3 = " *", i3 = Object.keys(t3), a3 = i3.map((e4) => h2(e4, t3[e4])).reduce((e4, t4) => e4.concat(t4), []).map((e4) => " * " + e4 + o3).join("");
        if (!e3) {
          if (i3.length === 0)
            return "";
          if (i3.length === 1 && !Array.isArray(t3[i3[0]])) {
            const e4 = t3[i3[0]];
            return "".concat("/**", " ").concat(h2(i3[0], e4)[0]).concat(" */");
          }
        }
        const s3 = e3.split(o3).map((e4) => "".concat(u3, " ").concat(e4)).join(o3) + o3;
        return "/**" + o3 + (e3 ? s3 : "") + (e3 && i3.length ? u3 + o3 : "") + a3 + " */";
      };
      const o2 = /\*\/$/, u2 = /^\/\*\*/, i2 = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, a2 = /(^|\s+)\/\/([^\r\n]*)/g, s2 = /^(\r?\n)+/, c2 = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, l2 = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, p2 = /(\r?\n|^) *\* ?/g, d2 = [];
      function f2(e3) {
        const t3 = (0, r2().default)(e3) || n2().EOL;
        e3 = e3.replace(u2, "").replace(o2, "").replace(p2, "$1");
        let i3 = "";
        for (; i3 !== e3; )
          i3 = e3, e3 = e3.replace(c2, "".concat(t3, "$1 $2").concat(t3));
        e3 = e3.replace(s2, "").trimRight();
        const f3 = Object.create(null), h3 = e3.replace(l2, "").replace(s2, "").trimRight();
        let m2;
        for (; m2 = l2.exec(e3); ) {
          const e4 = m2[2].replace(a2, "");
          typeof f3[m2[1]] == "string" || Array.isArray(f3[m2[1]]) ? f3[m2[1]] = d2.concat(f3[m2[1]], e4) : f3[m2[1]] = e4;
        }
        return {comments: h3, pragmas: f3};
      }
      function h2(e3, t3) {
        return d2.concat(t3).map((t4) => "@".concat(e3, " ").concat(t4).trim());
      }
    });
    const {parseWithComments: Ep, strip: Cp, extract: bp, print: vp} = yp, {getShebang: Ap} = Lt, {normalizeEndOfLine: Fp} = Mt;
    function xp(e2) {
      const t2 = Ap(e2);
      t2 && (e2 = e2.slice(t2.length + 1));
      const n2 = bp(e2), {pragmas: r2, comments: o2} = Ep(n2);
      return {shebang: t2, text: e2, pragmas: r2, comments: o2};
    }
    var Sp = {hasPragma: function(e2) {
      const t2 = Object.keys(xp(e2).pragmas);
      return t2.includes("prettier") || t2.includes("format");
    }, insertPragma: function(e2) {
      const {shebang: t2, text: n2, pragmas: r2, comments: o2} = xp(e2), u2 = Cp(n2), i2 = vp({pragmas: Object.assign({format: ""}, r2), comments: o2.trimStart()});
      return (t2 ? "".concat(t2, "\n") : "") + Fp(i2) + (u2.startsWith("\n") ? "\n" : "\n\n") + u2;
    }};
    const {getFunctionParameters: wp, getLeftSidePathName: Tp, hasFlowShorthandAnnotationComment: Bp, hasNakedLeftSide: Np, hasNode: kp, isBitwiseOperator: Pp, startsWithNoLookaheadToken: Op, shouldFlatten: Ip, getPrecedence: Lp} = wc;
    function Mp(e2, t2) {
      const n2 = e2.getParentNode();
      if (!n2)
        return false;
      const r2 = e2.getName(), o2 = e2.getNode();
      if (t2.__isInHtmlInterpolation && !t2.bracketSpacing && function(e3) {
        switch (e3.type) {
          case "ObjectExpression":
            return true;
          default:
            return false;
        }
      }(o2) && jp(e2))
        return true;
      if (function(e3) {
        return e3.type === "BlockStatement" || e3.type === "BreakStatement" || e3.type === "ClassBody" || e3.type === "ClassDeclaration" || e3.type === "ClassMethod" || e3.type === "ClassProperty" || e3.type === "FieldDefinition" || e3.type === "ClassPrivateProperty" || e3.type === "ContinueStatement" || e3.type === "DebuggerStatement" || e3.type === "DeclareClass" || e3.type === "DeclareExportAllDeclaration" || e3.type === "DeclareExportDeclaration" || e3.type === "DeclareFunction" || e3.type === "DeclareInterface" || e3.type === "DeclareModule" || e3.type === "DeclareModuleExports" || e3.type === "DeclareVariable" || e3.type === "DoWhileStatement" || e3.type === "EnumDeclaration" || e3.type === "ExportAllDeclaration" || e3.type === "ExportDefaultDeclaration" || e3.type === "ExportNamedDeclaration" || e3.type === "ExpressionStatement" || e3.type === "ForInStatement" || e3.type === "ForOfStatement" || e3.type === "ForStatement" || e3.type === "FunctionDeclaration" || e3.type === "IfStatement" || e3.type === "ImportDeclaration" || e3.type === "InterfaceDeclaration" || e3.type === "LabeledStatement" || e3.type === "MethodDefinition" || e3.type === "ReturnStatement" || e3.type === "SwitchStatement" || e3.type === "ThrowStatement" || e3.type === "TryStatement" || e3.type === "TSDeclareFunction" || e3.type === "TSEnumDeclaration" || e3.type === "TSImportEqualsDeclaration" || e3.type === "TSInterfaceDeclaration" || e3.type === "TSModuleDeclaration" || e3.type === "TSNamespaceExportDeclaration" || e3.type === "TypeAlias" || e3.type === "VariableDeclaration" || e3.type === "WhileStatement" || e3.type === "WithStatement";
      }(o2))
        return false;
      if (t2.parser !== "flow" && Bp(e2.getValue()))
        return true;
      if (o2.type === "Identifier")
        return !!(o2.extra && o2.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o2.name));
      switch (n2.type) {
        case "ParenthesizedExpression":
          return false;
        case "ClassDeclaration":
        case "ClassExpression":
          if (r2 === "superClass" && (o2.type === "ArrowFunctionExpression" || o2.type === "AssignmentExpression" || o2.type === "AwaitExpression" || o2.type === "BinaryExpression" || o2.type === "ConditionalExpression" || o2.type === "LogicalExpression" || o2.type === "NewExpression" || o2.type === "ObjectExpression" || o2.type === "ParenthesizedExpression" || o2.type === "SequenceExpression" || o2.type === "TaggedTemplateExpression" || o2.type === "UnaryExpression" || o2.type === "UpdateExpression" || o2.type === "YieldExpression"))
            return true;
          break;
        case "ExportDefaultDeclaration":
          return _p(e2, t2) || o2.type === "SequenceExpression";
        case "Decorator":
          if (r2 === "expression") {
            let e3 = false, t3 = false, n3 = o2;
            for (; n3; )
              switch (n3.type) {
                case "MemberExpression":
                  t3 = true, n3 = n3.object;
                  break;
                case "CallExpression":
                  if (t3 || e3)
                    return true;
                  e3 = true, n3 = n3.callee;
                  break;
                case "Identifier":
                  return false;
                default:
                  return true;
              }
            return true;
          }
          break;
        case "ExpressionStatement":
          if (Op(o2, true))
            return true;
          break;
        case "ArrowFunctionExpression":
          if (r2 === "body" && o2.type !== "SequenceExpression" && Op(o2, false))
            return true;
      }
      switch (o2.type) {
        case "SpreadElement":
        case "SpreadProperty":
          return r2 === "object" && n2.type === "MemberExpression";
        case "UpdateExpression":
          if (n2.type === "UnaryExpression")
            return o2.prefix && (o2.operator === "++" && n2.operator === "+" || o2.operator === "--" && n2.operator === "-");
        case "UnaryExpression":
          switch (n2.type) {
            case "UnaryExpression":
              return o2.operator === n2.operator && (o2.operator === "+" || o2.operator === "-");
            case "BindExpression":
              return true;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return r2 === "object";
            case "TaggedTemplateExpression":
              return true;
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return r2 === "callee";
            case "BinaryExpression":
              return r2 === "left" && n2.operator === "**";
            case "TSNonNullExpression":
              return true;
            default:
              return false;
          }
        case "BinaryExpression":
          if (n2.type === "UpdateExpression" || n2.type === "PipelineTopicExpression" && o2.operator === "|>")
            return true;
          if (o2.operator === "in" && function(e3) {
            let t3 = 0, n3 = e3.getValue();
            for (; n3; ) {
              const r3 = e3.getParentNode(t3++);
              if (r3 && r3.type === "ForStatement" && r3.init === n3)
                return true;
              n3 = r3;
            }
            return false;
          }(e2))
            return true;
          if (o2.operator === "|>" && o2.extra && o2.extra.parenthesized) {
            const t3 = e2.getParentNode(1);
            if (t3.type === "BinaryExpression" && t3.operator === "|>")
              return true;
          }
        case "TSTypeAssertion":
        case "TSAsExpression":
        case "LogicalExpression":
          switch (n2.type) {
            case "ConditionalExpression":
              return o2.type === "TSAsExpression";
            case "CallExpression":
            case "NewExpression":
            case "OptionalCallExpression":
              return r2 === "callee";
            case "ClassExpression":
            case "ClassDeclaration":
              return r2 === "superClass";
            case "TSTypeAssertion":
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "JSXSpreadAttribute":
            case "SpreadElement":
            case "SpreadProperty":
            case "BindExpression":
            case "AwaitExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
            case "UpdateExpression":
              return true;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return r2 === "object";
            case "AssignmentExpression":
              return r2 === "left" && (o2.type === "TSTypeAssertion" || o2.type === "TSAsExpression");
            case "LogicalExpression":
              if (o2.type === "LogicalExpression")
                return n2.operator !== o2.operator;
            case "BinaryExpression": {
              const {operator: e3, type: t3} = o2;
              if (!e3 && t3 !== "TSTypeAssertion")
                return true;
              const u2 = Lp(e3), i2 = n2.operator, a2 = Lp(i2);
              return a2 > u2 || (r2 === "right" && a2 === u2 || (a2 === u2 && !Ip(i2, e3) || (a2 < u2 && e3 === "%" ? i2 === "+" || i2 === "-" : !!Pp(i2))));
            }
            default:
              return false;
          }
        case "SequenceExpression":
          switch (n2.type) {
            case "ReturnStatement":
            case "ForStatement":
              return false;
            case "ExpressionStatement":
              return r2 !== "expression";
            case "ArrowFunctionExpression":
              return r2 !== "body";
            default:
              return true;
          }
        case "YieldExpression":
          if (n2.type === "UnaryExpression" || n2.type === "AwaitExpression" || n2.type === "TSAsExpression" || n2.type === "TSNonNullExpression")
            return true;
        case "AwaitExpression":
          switch (n2.type) {
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "LogicalExpression":
            case "SpreadElement":
            case "SpreadProperty":
            case "TSAsExpression":
            case "TSNonNullExpression":
            case "BindExpression":
              return true;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return r2 === "object";
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return r2 === "callee";
            case "ConditionalExpression":
              return r2 === "test";
            case "BinaryExpression":
              return !(!o2.argument && n2.operator === "|>");
            default:
              return false;
          }
        case "TSJSDocFunctionType":
        case "TSConditionalType":
          if (r2 === "extendsType" && n2.type === "TSConditionalType")
            return true;
        case "TSFunctionType":
        case "TSConstructorType":
          if (r2 === "checkType" && n2.type === "TSConditionalType")
            return true;
        case "TSUnionType":
        case "TSIntersectionType":
          if (n2.type === "TSUnionType" || n2.type === "TSIntersectionType")
            return true;
        case "TSInferType":
          if (o2.type === "TSInferType" && n2.type === "TSRestType")
            return false;
        case "TSTypeOperator":
          return n2.type === "TSArrayType" || n2.type === "TSOptionalType" || n2.type === "TSRestType" || r2 === "objectType" && n2.type === "TSIndexedAccessType" || n2.type === "TSTypeOperator" || n2.type === "TSTypeAnnotation" && /^TSJSDoc/.test(e2.getParentNode(1).type);
        case "ArrayTypeAnnotation":
          return n2.type === "NullableTypeAnnotation";
        case "IntersectionTypeAnnotation":
        case "UnionTypeAnnotation":
          return n2.type === "ArrayTypeAnnotation" || n2.type === "NullableTypeAnnotation" || n2.type === "IntersectionTypeAnnotation" || n2.type === "UnionTypeAnnotation";
        case "NullableTypeAnnotation":
          return n2.type === "ArrayTypeAnnotation";
        case "FunctionTypeAnnotation": {
          const t3 = n2.type === "NullableTypeAnnotation" ? e2.getParentNode(1) : n2;
          return t3.type === "UnionTypeAnnotation" || t3.type === "IntersectionTypeAnnotation" || t3.type === "ArrayTypeAnnotation" || t3.type === "NullableTypeAnnotation" || n2.type === "FunctionTypeParam" && n2.name === null && wp(o2).some((e3) => e3.typeAnnotation && e3.typeAnnotation.type === "NullableTypeAnnotation");
        }
        case "StringLiteral":
        case "NumericLiteral":
        case "Literal":
          if (typeof o2.value == "string" && n2.type === "ExpressionStatement" && !n2.directive) {
            const t3 = e2.getParentNode(1);
            return t3.type === "Program" || t3.type === "BlockStatement";
          }
          return r2 === "object" && n2.type === "MemberExpression" && typeof o2.value == "number";
        case "AssignmentExpression": {
          const t3 = e2.getParentNode(1);
          return r2 === "body" && n2.type === "ArrowFunctionExpression" || (r2 !== "key" || n2.type !== "ClassProperty" && n2.type !== "FieldDefinition" || !n2.computed) && ((r2 !== "init" && r2 !== "update" || n2.type !== "ForStatement") && (n2.type === "ExpressionStatement" ? o2.left.type === "ObjectPattern" : (r2 !== "key" || n2.type !== "TSPropertySignature") && (n2.type !== "AssignmentExpression" && ((n2.type !== "SequenceExpression" || !t3 || t3.type !== "ForStatement" || t3.init !== n2 && t3.update !== n2) && ((r2 !== "value" || n2.type !== "Property" || !t3 || t3.type !== "ObjectPattern" || !t3.properties.includes(n2)) && n2.type !== "NGChainedExpression")))));
        }
        case "ConditionalExpression":
          switch (n2.type) {
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "SpreadElement":
            case "SpreadProperty":
            case "BinaryExpression":
            case "LogicalExpression":
            case "NGPipeExpression":
            case "ExportDefaultDeclaration":
            case "AwaitExpression":
            case "JSXSpreadAttribute":
            case "TSTypeAssertion":
            case "TypeCastExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return true;
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return r2 === "callee";
            case "ConditionalExpression":
              return r2 === "test";
            case "MemberExpression":
            case "OptionalMemberExpression":
              return r2 === "object";
            default:
              return false;
          }
        case "FunctionExpression":
          switch (n2.type) {
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return r2 === "callee";
            case "TaggedTemplateExpression":
              return true;
            default:
              return false;
          }
        case "ArrowFunctionExpression":
          switch (n2.type) {
            case "PipelineTopicExpression":
              return !(!o2.extra || !o2.extra.parenthesized);
            case "BinaryExpression":
              return n2.operator !== "|>" || o2.extra && o2.extra.parenthesized;
            case "NewExpression":
            case "CallExpression":
            case "OptionalCallExpression":
              return r2 === "callee";
            case "MemberExpression":
            case "OptionalMemberExpression":
              return r2 === "object";
            case "TSAsExpression":
            case "BindExpression":
            case "TaggedTemplateExpression":
            case "UnaryExpression":
            case "LogicalExpression":
            case "AwaitExpression":
            case "TSTypeAssertion":
              return true;
            case "ConditionalExpression":
              return r2 === "test";
            default:
              return false;
          }
        case "ClassExpression":
          switch (n2.type) {
            case "NewExpression":
              return r2 === "callee";
            default:
              return false;
          }
        case "OptionalMemberExpression":
        case "OptionalCallExpression": {
          const t3 = e2.getParentNode(1);
          if (r2 === "object" && n2.type === "MemberExpression" || r2 === "callee" && (n2.type === "CallExpression" || n2.type === "NewExpression") || n2.type === "TSNonNullExpression" && t3.type === "MemberExpression" && t3.object === n2)
            return true;
        }
        case "CallExpression":
        case "MemberExpression":
        case "TaggedTemplateExpression":
        case "TSNonNullExpression":
          if (r2 === "callee" && (n2.type === "BindExpression" || n2.type === "NewExpression")) {
            let e3 = o2;
            for (; e3; )
              switch (e3.type) {
                case "CallExpression":
                case "OptionalCallExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                case "BindExpression":
                  e3 = e3.object;
                  break;
                case "TaggedTemplateExpression":
                  e3 = e3.tag;
                  break;
                case "TSNonNullExpression":
                  e3 = e3.expression;
                  break;
                default:
                  return false;
              }
          }
          return false;
        case "BindExpression":
          return r2 === "callee" && (n2.type === "BindExpression" || n2.type === "NewExpression") || r2 === "object" && (n2.type === "MemberExpression" || n2.type === "OptionalMemberExpression");
        case "NGPipeExpression":
          return !(n2.type === "NGRoot" || n2.type === "NGMicrosyntaxExpression" || !(n2.type !== "ObjectProperty" || o2.extra && o2.extra.parenthesized) || n2.type === "ArrayExpression" || (n2.type === "CallExpression" || n2.type === "OptionalCallExpression") && n2.arguments[r2] === o2 || r2 === "right" && n2.type === "NGPipeExpression" || r2 === "property" && n2.type === "MemberExpression" || n2.type === "AssignmentExpression");
        case "JSXFragment":
        case "JSXElement":
          return r2 === "callee" || r2 === "left" && n2.type === "BinaryExpression" && n2.operator === "<" || n2.type !== "ArrayExpression" && n2.type !== "ArrowFunctionExpression" && n2.type !== "AssignmentExpression" && n2.type !== "AssignmentPattern" && n2.type !== "BinaryExpression" && n2.type !== "CallExpression" && n2.type !== "NewExpression" && n2.type !== "ConditionalExpression" && n2.type !== "ExpressionStatement" && n2.type !== "JsExpressionRoot" && n2.type !== "JSXAttribute" && n2.type !== "JSXElement" && n2.type !== "JSXExpressionContainer" && n2.type !== "JSXFragment" && n2.type !== "LogicalExpression" && n2.type !== "ObjectProperty" && n2.type !== "OptionalCallExpression" && n2.type !== "Property" && n2.type !== "ReturnStatement" && n2.type !== "ThrowStatement" && n2.type !== "TypeCastExpression" && n2.type !== "VariableDeclarator" && n2.type !== "YieldExpression";
        case "TypeAnnotation":
          return r2 === "returnType" && n2.type === "ArrowFunctionExpression" && function(e3) {
            return kp(e3, (e4) => e4.type === "ObjectTypeAnnotation" && kp(e4, (e5) => e5.type === "FunctionTypeAnnotation" || void 0) || void 0);
          }(o2);
      }
      return false;
    }
    function jp(e2) {
      const t2 = e2.getValue(), n2 = e2.getParentNode(), r2 = e2.getName();
      switch (n2.type) {
        case "NGPipeExpression":
          if (typeof r2 == "number" && n2.arguments[r2] === t2 && n2.arguments.length - 1 === r2)
            return e2.callParent(jp);
          break;
        case "ObjectProperty":
          if (r2 === "value") {
            const t3 = e2.getParentNode(1);
            return t3.properties[t3.properties.length - 1] === n2;
          }
          break;
        case "BinaryExpression":
        case "LogicalExpression":
          if (r2 === "right")
            return e2.callParent(jp);
          break;
        case "ConditionalExpression":
          if (r2 === "alternate")
            return e2.callParent(jp);
          break;
        case "UnaryExpression":
          if (n2.prefix)
            return e2.callParent(jp);
      }
      return false;
    }
    function _p(e2, t2) {
      const n2 = e2.getValue(), r2 = e2.getParentNode();
      return n2.type === "FunctionExpression" || n2.type === "ClassExpression" ? r2.type === "ExportDefaultDeclaration" || !Mp(e2, t2) : !(!Np(n2) || r2.type !== "ExportDefaultDeclaration" && Mp(e2, t2)) && e2.call((e3) => _p(e3, t2), ...Tp(e2, n2));
    }
    var Rp = Mp;
    const {builders: {concat: Vp, join: $p, line: qp, group: Wp, softline: Up, indent: Jp}} = cn;
    var zp = {isVueEventBindingExpression: function e2(t2) {
      switch (t2.type) {
        case "MemberExpression":
          switch (t2.property.type) {
            case "Identifier":
            case "NumericLiteral":
            case "StringLiteral":
              return e2(t2.object);
          }
          return false;
        case "Identifier":
          return true;
        default:
          return false;
      }
    }, printHtmlBinding: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (t2.__onHtmlBindingRoot && e2.getName() === null && t2.__onHtmlBindingRoot(r2, t2), r2.type === "File")
        return t2.__isVueForBindingLeft ? e2.call((e3) => {
          const t3 = $p(Vp([",", qp]), e3.map(n2, "params")), {params: r3} = e3.getValue();
          return r3.length === 1 ? t3 : Vp(["(", Jp(Vp([Up, Wp(t3)])), Up, ")"]);
        }, "program", "body", 0) : t2.__isVueBindings ? e2.call((e3) => $p(Vp([",", qp]), e3.map(n2, "params")), "program", "body", 0) : void 0;
    }};
    var Hp = function(e2, t2) {
      switch (t2.parser) {
        case "json":
        case "json5":
        case "json-stringify":
        case "__js_expression":
        case "__vue_expression":
          return Object.assign({}, e2, {type: t2.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: e2, comments: [], rootMarker: t2.rootMarker});
        default:
          return e2;
      }
    };
    const {builders: {concat: Gp, group: Xp, indent: Yp, join: Kp, line: Qp, hardline: Zp}} = cn, {hasNewlineBetweenOrAfterDecorators: ed, getParentExportDeclaration: td} = wc;
    var nd = {printOptionalToken: function(e2) {
      const t2 = e2.getValue();
      return !t2.optional || t2.type === "Identifier" && t2 === e2.getParentNode().key ? "" : t2.type === "OptionalCallExpression" || t2.type === "OptionalMemberExpression" && t2.computed ? "?." : "?";
    }, printFunctionTypeParameters: function(e2, t2, n2) {
      const r2 = e2.getValue();
      return r2.typeArguments ? e2.call(n2, "typeArguments") : r2.typeParameters ? e2.call(n2, "typeParameters") : "";
    }, printBindExpressionCallee: function(e2, t2, n2) {
      return Gp(["::", e2.call(n2, "callee")]);
    }, printTypeScriptModifiers: function(e2, t2, n2) {
      const r2 = e2.getValue();
      return r2.modifiers && r2.modifiers.length ? Gp([Kp(" ", e2.map(n2, "modifiers")), " "]) : "";
    }, printDecorators: function(e2, t2, n2) {
      const r2 = e2.getValue();
      return Xp(Gp([Kp(Qp, e2.map(n2, "decorators")), ed(r2, t2) ? Zp : Qp]));
    }, printFlowDeclaration: function(e2, t2) {
      const n2 = td(e2);
      return n2 ? (ta.strictEqual(n2.type, "DeclareExportDeclaration"), t2) : Gp(["declare ", t2]);
    }, adjustClause: function(e2, t2, n2) {
      return e2.type === "EmptyStatement" ? ";" : e2.type === "BlockStatement" || n2 ? Gp([" ", t2]) : Yp(Gp([Qp, t2]));
    }};
    const {builders: {concat: rd, softline: od, group: ud, indent: id, join: ad, line: sd, ifBreak: cd, hardline: ld}} = cn, {printDanglingComments: pd} = Fa, {hasDanglingComments: dd, shouldPrintComma: fd, needsHardlineAfterDanglingComment: hd} = wc, {locStart: md, hasSameLoc: gd} = ii;
    function Dd(e2, t2, n2) {
      const r2 = e2.getValue();
      if (!r2.source)
        return "";
      const o2 = [];
      return Ed(r2, t2) || o2.push(" from"), o2.push(" ", e2.call(n2, "source")), rd(o2);
    }
    function yd(e2, t2, n2) {
      const r2 = e2.getValue();
      if (Ed(r2, t2))
        return "";
      const o2 = [" "];
      if (r2.specifiers && r2.specifiers.length > 0) {
        const u2 = [], i2 = [];
        if (e2.each((t3) => {
          const r3 = e2.getValue().type;
          if (r3 === "ExportNamespaceSpecifier" || r3 === "ExportDefaultSpecifier" || r3 === "ImportNamespaceSpecifier" || r3 === "ImportDefaultSpecifier")
            u2.push(n2(t3));
          else {
            if (r3 !== "ExportSpecifier" && r3 !== "ImportSpecifier")
              throw new Error("Unknown specifier type ".concat(JSON.stringify(r3)));
            i2.push(n2(t3));
          }
        }, "specifiers"), o2.push(ad(", ", u2)), i2.length !== 0) {
          u2.length !== 0 && o2.push(", ");
          i2.length > 1 || u2.length > 0 || r2.specifiers.some((e3) => e3.comments) ? o2.push(ud(rd(["{", id(rd([t2.bracketSpacing ? sd : od, ad(rd([",", sd]), i2)])), cd(fd(t2) ? "," : ""), t2.bracketSpacing ? sd : od, "}"]))) : o2.push(rd(["{", t2.bracketSpacing ? " " : "", rd(i2), t2.bracketSpacing ? " " : "", "}"]));
        }
      } else
        o2.push("{}");
      return rd(o2);
    }
    function Ed(e2, t2) {
      const {type: n2, importKind: r2, source: o2, specifiers: u2} = e2;
      return !(n2 !== "ImportDeclaration" || Array.isArray(u2) && u2.length > 0 || r2 === "type") && !/{\s*}/.test(t2.originalText.slice(md(e2), md(o2)));
    }
    function Cd(e2, t2, n2) {
      const r2 = e2.getNode();
      return Array.isArray(r2.assertions) && r2.assertions.length !== 0 ? rd([" assert {", t2.bracketSpacing ? " " : "", ad(", ", e2.map(n2, "assertions")), t2.bracketSpacing ? " " : "", "}"]) : "";
    }
    var bd = {printImportDeclaration: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = t2.semi ? ";" : "", u2 = [], {importKind: i2} = r2;
      return u2.push("import"), i2 && i2 !== "value" && u2.push(" ", i2), u2.push(yd(e2, t2, n2), Dd(e2, t2, n2), Cd(e2, t2, n2)), u2.push(o2), rd(u2);
    }, printExportDeclaration: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [], {type: u2, exportKind: i2, declaration: a2} = r2;
      return u2 === "DeclareExportDeclaration" && o2.push("declare "), o2.push("export"), (r2.default || u2 === "ExportDefaultDeclaration") && o2.push(" default"), dd(r2) && (o2.push(" ", pd(e2, t2, true)), hd(r2) && o2.push(ld)), a2 ? o2.push(" ", e2.call(n2, "declaration")) : o2.push(i2 === "type" ? " type" : "", yd(e2, t2, n2), Dd(e2, t2, n2), Cd(e2, t2, n2)), function(e3, t3) {
        if (!t3.semi)
          return false;
        const {type: n3, declaration: r3} = e3, o3 = e3.default || n3 === "ExportDefaultDeclaration";
        if (!r3)
          return true;
        const {type: u3} = r3;
        if (o3 && u3 !== "ClassDeclaration" && u3 !== "FunctionDeclaration" && u3 !== "TSInterfaceDeclaration" && u3 !== "DeclareClass" && u3 !== "DeclareFunction" && u3 !== "TSDeclareFunction" && u3 !== "EnumDeclaration")
          return true;
        return false;
      }(r2, t2) && o2.push(";"), rd(o2);
    }, printExportAllDeclaration: function(e2, t2, n2) {
      const r2 = e2.getValue();
      let o2 = t2.semi ? ";" : "";
      const u2 = [], {type: i2, exportKind: a2, exported: s2} = r2;
      return i2 === "DeclareExportAllDeclaration" && (u2.push("declare "), o2 = ""), u2.push("export"), a2 === "type" && u2.push(" type"), u2.push(" *"), s2 && u2.push(" as ", e2.call(n2, "exported")), u2.push(Dd(e2, t2, n2), Cd(e2, t2, n2), o2), rd(u2);
    }, printModuleSpecifier: function(e2, t2, n2) {
      const r2 = e2.getNode(), {type: o2, importKind: u2} = r2, i2 = [];
      o2 === "ImportSpecifier" && u2 && i2.push(u2, " ");
      const a2 = o2.startsWith("Import"), s2 = a2 ? "imported" : "local", c2 = a2 ? "local" : "exported";
      let l2 = "", p2 = "";
      return o2 === "ExportNamespaceSpecifier" || o2 === "ImportNamespaceSpecifier" ? l2 = "*" : r2[s2] && (l2 = e2.call(n2, s2)), !r2[c2] || r2[s2] && gd(r2[s2], r2[c2]) || (p2 = e2.call(n2, c2)), i2.push(l2, l2 && p2 ? " as " : "", p2), rd(i2);
    }};
    const {hasNewlineInRange: vd} = Lt, {isJSXNode: Ad, isBlockComment: Fd} = wc, {locStart: xd, locEnd: Sd} = ii, {builders: {concat: wd, line: Td, softline: Bd, group: Nd, indent: kd, align: Pd, ifBreak: Od, dedent: Id, breakParent: Ld}} = cn;
    var Md = function(e2, t2, n2, r2) {
      const o2 = e2.getValue(), u2 = o2[r2.consequentNodePropertyName], i2 = o2[r2.alternateNodePropertyName], a2 = [];
      let s2 = false;
      const c2 = e2.getParentNode(), l2 = c2.type === r2.conditionalNodeType && r2.testNodePropertyNames.some((e3) => c2[e3] === o2);
      let p2, d2, f2 = c2.type === r2.conditionalNodeType && !l2, h2 = 0;
      do {
        d2 = p2 || o2, p2 = e2.getParentNode(h2), h2++;
      } while (p2 && p2.type === r2.conditionalNodeType && r2.testNodePropertyNames.every((e3) => p2[e3] !== d2));
      const m2 = p2 || c2, g2 = d2;
      if (r2.shouldCheckJsx && (Ad(o2[r2.testNodePropertyNames[0]]) || Ad(u2) || Ad(i2) || function(e3) {
        return function(e4) {
          const t3 = [];
          return function e5(n3) {
            n3.type === "ConditionalExpression" ? (e5(n3.test), e5(n3.consequent), e5(n3.alternate)) : t3.push(n3);
          }(e4), t3;
        }(e3).some(Ad);
      }(g2))) {
        s2 = true, f2 = true;
        const t3 = (e3) => wd([Od("(", ""), kd(wd([Bd, e3])), Bd, Od(")", "")]), o3 = (e3) => e3.type === "NullLiteral" || e3.type === "Literal" && e3.value === null || e3.type === "Identifier" && e3.name === "undefined";
        a2.push(" ? ", o3(u2) ? e2.call(n2, r2.consequentNodePropertyName) : t3(e2.call(n2, r2.consequentNodePropertyName)), " : ", i2.type === r2.conditionalNodeType || o3(i2) ? e2.call(n2, r2.alternateNodePropertyName) : t3(e2.call(n2, r2.alternateNodePropertyName)));
      } else {
        const s3 = wd([Td, "? ", u2.type === r2.conditionalNodeType ? Od("", "(") : "", Pd(2, e2.call(n2, r2.consequentNodePropertyName)), u2.type === r2.conditionalNodeType ? Od("", ")") : "", Td, ": ", i2.type === r2.conditionalNodeType ? e2.call(n2, r2.alternateNodePropertyName) : Pd(2, e2.call(n2, r2.alternateNodePropertyName))]);
        a2.push(c2.type !== r2.conditionalNodeType || c2[r2.alternateNodePropertyName] === o2 || l2 ? s3 : t2.useTabs ? Id(kd(s3)) : Pd(Math.max(0, t2.tabWidth - 2), s3));
      }
      const D2 = Yu([...r2.testNodePropertyNames.map((e3) => o2[e3].comments), u2.comments, i2.comments]).filter(Boolean).some((e3) => Fd(e3) && vd(t2.originalText, xd(e3), Sd(e3))), y2 = !s2 && (c2.type === "MemberExpression" || c2.type === "OptionalMemberExpression" || c2.type === "NGPipeExpression" && c2.left === o2) && !c2.computed, E2 = ((e3) => c2 === m2 ? Nd(e3, {shouldBreak: D2}) : D2 ? wd([e3, Ld]) : e3)(wd([].concat((C2 = wd(r2.beforeParts()), c2.type === r2.conditionalNodeType && c2[r2.alternateNodePropertyName] === o2 ? Pd(2, C2) : C2), f2 ? wd(a2) : kd(wd(a2)), r2.afterParts(y2))));
      var C2;
      return l2 ? Nd(wd([kd(wd([Bd, E2])), Bd])) : E2;
    };
    const {getNextNonSpaceNonCommentCharacter: jd, isNextLineEmpty: _d} = Lt, {printDanglingComments: Rd} = Fa, {builders: {concat: Vd, line: $d, hardline: qd, softline: Wd, group: Ud, indent: Jd, ifBreak: zd}, utils: {removeLines: Hd}} = cn, {getFunctionParameters: Gd, iterateFunctionParametersPath: Xd, isSimpleType: Yd, isTestCall: Kd, isTypeAnnotationAFunction: Qd, isObjectType: Zd, isObjectTypePropertyAFunction: ef, hasRestParameter: tf, shouldPrintComma: nf} = wc, {locEnd: rf} = ii, {printFunctionTypeParameters: of} = nd;
    function uf(e2) {
      if (!e2)
        return false;
      const t2 = Gd(e2);
      if (t2.length !== 1)
        return false;
      const [n2] = t2;
      return !n2.comments && (n2.type === "ObjectPattern" || n2.type === "ArrayPattern" || n2.type === "Identifier" && n2.typeAnnotation && (n2.typeAnnotation.type === "TypeAnnotation" || n2.typeAnnotation.type === "TSTypeAnnotation") && Zd(n2.typeAnnotation.typeAnnotation) || n2.type === "FunctionTypeParam" && Zd(n2.typeAnnotation) || n2.type === "AssignmentPattern" && (n2.left.type === "ObjectPattern" || n2.left.type === "ArrayPattern") && (n2.right.type === "Identifier" || n2.right.type === "ObjectExpression" && n2.right.properties.length === 0 || n2.right.type === "ArrayExpression" && n2.right.elements.length === 0));
    }
    var af = {printFunctionParameters: function(e2, t2, n2, r2, o2) {
      const u2 = e2.getValue(), i2 = Gd(u2), a2 = o2 ? of(e2, n2, t2) : "";
      if (i2.length === 0)
        return Vd([a2, "(", Rd(e2, n2, true, (e3) => jd(n2.originalText, e3, rf) === ")"), ")"]);
      const s2 = e2.getParentNode(), c2 = Kd(s2), l2 = uf(u2), p2 = r2 && !i2.some((e3) => e3.comments), d2 = [];
      if (Xd(e2, (e3, r3) => {
        const o3 = r3 === i2.length - 1;
        o3 && u2.rest && d2.push("..."), d2.push(e3.call(t2)), o3 || (d2.push(","), c2 || l2 || p2 ? d2.push(" ") : _d(n2.originalText, i2[r3], rf) ? d2.push(qd, qd) : d2.push($d));
      }), p2)
        return Ud(Vd([Hd(a2), "(", Vd(d2.map(Hd)), ")"]));
      const f2 = i2.every((e3) => !e3.decorators);
      return l2 && f2 || c2 ? Vd([a2, "(", Vd(d2), ")"]) : (ef(s2) || Qd(s2) || s2.type === "TypeAlias" || s2.type === "UnionTypeAnnotation" || s2.type === "TSUnionType" || s2.type === "IntersectionTypeAnnotation" || s2.type === "FunctionTypeAnnotation" && s2.returnType === u2) && i2.length === 1 && i2[0].name === null && u2.this !== i2[0] && i2[0].typeAnnotation && u2.typeParameters === null && Yd(i2[0].typeAnnotation) && !u2.rest ? n2.arrowParens === "always" ? Vd(["(", Vd(d2), ")"]) : Vd(d2) : Vd([a2, "(", Jd(Vd([Wd, Vd(d2)])), zd(!tf(u2) && nf(n2, "all") ? "," : ""), Wd, ")"]);
    }, shouldHugFunctionParameters: uf};
    const {builders: {concat: sf}} = cn, {isFlowAnnotationComment: cf, isSimpleType: lf, isObjectType: pf} = wc;
    var df = {printTypeAnnotation: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (!r2.typeAnnotation)
        return "";
      const o2 = e2.getParentNode(), u2 = r2.definite || o2 && o2.type === "VariableDeclarator" && o2.definite, i2 = o2.type === "DeclareFunction" && o2.id === r2;
      return cf(t2.originalText, r2.typeAnnotation) ? sf([" /*: ", e2.call(n2, "typeAnnotation"), " */"]) : sf([i2 ? "" : u2 ? "!: " : ": ", e2.call(n2, "typeAnnotation")]);
    }, shouldHugType: function(e2) {
      if (lf(e2) || pf(e2))
        return true;
      if (e2.type === "UnionTypeAnnotation" || e2.type === "TSUnionType") {
        const t2 = e2.types.filter((e3) => e3.type === "VoidTypeAnnotation" || e3.type === "TSVoidKeyword" || e3.type === "NullLiteralTypeAnnotation" || e3.type === "TSNullKeyword").length, n2 = e2.types.some((e3) => e3.type === "ObjectTypeAnnotation" || e3.type === "TSTypeLiteral" || e3.type === "GenericTypeAnnotation" || e3.type === "TSTypeReference");
        if (e2.types.length - 1 === t2 && n2)
          return true;
      }
      return false;
    }};
    const {printDanglingComments: ff} = Fa, {builders: {concat: hf, line: mf, softline: gf, group: Df, indent: yf, ifBreak: Ef}} = cn, {getLast: Cf, isNextLineEmpty: bf} = Lt, {hasDanglingComments: vf, shouldPrintComma: Af} = wc, {locEnd: Ff} = ii, {printOptionalToken: xf} = nd, {printTypeAnnotation: Sf} = df;
    function wf(e2, t2, n2, r2) {
      const o2 = [];
      let u2 = [];
      return e2.each((e3) => {
        o2.push(hf(u2)), o2.push(Df(r2(e3))), u2 = [",", mf], e3.getValue() && bf(t2.originalText, e3.getValue(), Ff) && u2.push(gf);
      }, n2), hf(o2);
    }
    var Tf = {printArray: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [], u2 = r2.type === "TupleExpression" ? "#[" : "[";
      if (r2.elements.length === 0)
        vf(r2) ? o2.push(Df(hf([u2, ff(e2, t2), gf, "]"]))) : o2.push(u2, "]");
      else {
        const i2 = Cf(r2.elements), a2 = !(i2 && i2.type === "RestElement"), s2 = a2 && i2 === null, c2 = !t2.__inJestEach && r2.elements.length > 1 && r2.elements.every((e3, t3, n3) => {
          const r3 = e3 && e3.type;
          if (r3 !== "ArrayExpression" && r3 !== "ObjectExpression")
            return false;
          const o3 = n3[t3 + 1];
          if (o3 && r3 !== o3.type)
            return false;
          const u3 = r3 === "ArrayExpression" ? "elements" : "properties";
          return e3[u3] && e3[u3].length > 1;
        });
        o2.push(Df(hf([u2, yf(hf([gf, wf(e2, t2, "elements", n2)])), s2 ? "," : "", Ef(a2 && !s2 && Af(t2) ? "," : ""), ff(e2, t2, true), gf, "]"]), {shouldBreak: c2}));
      }
      return o2.push(xf(e2), Sf(e2, t2, n2)), hf(o2);
    }, printArrayItems: wf};
    const {printDanglingComments: Bf} = Fa, {builders: {concat: Nf, line: kf, softline: Pf, group: Of, indent: If, ifBreak: Lf, hardline: Mf}} = cn, {getLast: jf, isNextLineEmpty: _f, hasNewlineInRange: Rf, hasNewline: Vf} = Lt, {hasDanglingComments: $f, shouldPrintComma: qf, hasNodeIgnoreComment: Wf, isBlockComment: Uf} = wc, {locStart: Jf, locEnd: zf} = ii, {printOptionalToken: Hf} = nd, {shouldHugFunctionParameters: Gf} = af, {printTypeAnnotation: Xf, shouldHugType: Yf} = df;
    var Kf = {printObject: function(e2, t2, n2) {
      const r2 = t2.semi ? ";" : "", o2 = e2.getValue();
      let u2;
      u2 = o2.type === "TSTypeLiteral" ? "members" : o2.type === "TSInterfaceBody" ? "body" : "properties";
      const i2 = o2.type === "ObjectTypeAnnotation", a2 = [];
      i2 && a2.push("indexers", "callProperties", "internalSlots"), a2.push(u2);
      const s2 = a2.map((e3) => o2[e3][0]).sort((e3, t3) => Jf(e3) - Jf(t3))[0], c2 = e2.getParentNode(0), l2 = i2 && c2 && (c2.type === "InterfaceDeclaration" || c2.type === "DeclareInterface" || c2.type === "DeclareClass") && e2.getName() === "body", p2 = o2.type === "TSInterfaceBody" || l2 || o2.type === "ObjectPattern" && c2.type !== "FunctionDeclaration" && c2.type !== "FunctionExpression" && c2.type !== "ArrowFunctionExpression" && c2.type !== "ObjectMethod" && c2.type !== "ClassMethod" && c2.type !== "ClassPrivateMethod" && c2.type !== "AssignmentPattern" && c2.type !== "CatchClause" && o2.properties.some((e3) => e3.value && (e3.value.type === "ObjectPattern" || e3.value.type === "ArrayPattern")) || o2.type !== "ObjectPattern" && s2 && Rf(t2.originalText, Jf(o2), Jf(s2)), d2 = l2 ? ";" : o2.type === "TSInterfaceBody" || o2.type === "TSTypeLiteral" ? Lf(r2, ";") : ",", f2 = o2.type === "RecordExpression" ? "#{" : o2.exact ? "{|" : "{", h2 = o2.exact ? "|}" : "}", m2 = [];
      a2.forEach((t3) => {
        e2.each((e3) => {
          const t4 = e3.getValue();
          m2.push({node: t4, printed: n2(e3), loc: Jf(t4)});
        }, t3);
      });
      let g2 = [];
      const D2 = m2.sort((e3, t3) => e3.loc - t3.loc).map((e3) => {
        const n3 = Nf(g2.concat(Of(e3.printed)));
        return g2 = [d2, kf], e3.node.type !== "TSPropertySignature" && e3.node.type !== "TSMethodSignature" && e3.node.type !== "TSConstructSignatureDeclaration" || !Wf(e3.node) || g2.shift(), _f(t2.originalText, e3.node, zf) && g2.push(Mf), n3;
      });
      if (o2.inexact) {
        let n3;
        if ($f(o2)) {
          const r3 = !o2.comments.every((e3) => Uf(e3)), u3 = Bf(e2, t2, true);
          n3 = Nf([u3, r3 || Vf(t2.originalText, zf(o2.comments[o2.comments.length - 1])) ? Mf : kf, "..."]);
        } else
          n3 = "...";
        D2.push(Nf(g2.concat(n3)));
      }
      const y2 = jf(o2[u2]), E2 = !(o2.inexact || y2 && y2.type === "RestElement" || y2 && (y2.type === "TSPropertySignature" || y2.type === "TSCallSignatureDeclaration" || y2.type === "TSMethodSignature" || y2.type === "TSConstructSignatureDeclaration") && Wf(y2));
      let C2;
      if (D2.length === 0) {
        if (!$f(o2))
          return Nf([f2, h2, Xf(e2, t2, n2)]);
        C2 = Of(Nf([f2, Bf(e2, t2), Pf, h2, Hf(e2), Xf(e2, t2, n2)]));
      } else
        C2 = Nf([f2, If(Nf([t2.bracketSpacing ? kf : Pf, Nf(D2)])), Lf(E2 && (d2 !== "," || qf(t2)) ? d2 : ""), Nf([t2.bracketSpacing ? kf : Pf, h2]), Hf(e2), Xf(e2, t2, n2)]);
      return e2.match((e3) => e3.type === "ObjectPattern" && !e3.decorators, (e3, t3, n3) => Gf(e3) && (t3 === "params" || t3 === "parameters" || t3 === "this" || t3 === "rest") && n3 === 0) || e2.match(Yf, (e3, t3) => t3 === "typeAnnotation", (e3, t3) => t3 === "typeAnnotation", (e3, t3, n3) => Gf(e3) && (t3 === "params" || t3 === "parameters" || t3 === "this" || t3 === "rest") && n3 === 0) ? C2 : Of(C2, {shouldBreak: p2});
    }};
    const {printComments: Qf, printDanglingComments: Zf} = Fa, {builders: {concat: eh, line: th, hardline: nh, softline: rh, group: oh, indent: uh, conditionalGroup: ih, fill: ah, ifBreak: sh, lineSuffixBoundary: ch}, utils: {willBreak: lh, isLineNext: ph, isEmpty: dh}} = cn, {getLast: fh, getPreferredQuote: hh} = Lt, {hasTrailingComment: mh, isEmptyJSXElement: gh, isJSXWhitespaceExpression: Dh, isJSXNode: yh, isMeaningfulJSXText: Eh, matchJsxWhitespaceRegex: Ch, rawText: bh, isLiteral: vh, isCallOrOptionalCallExpression: Ah, isStringLiteral: Fh, isBinaryish: xh, isBlockComment: Sh} = wc, {willPrintOwnComments: wh} = il;
    function Th(e2, t2, n2) {
      const r2 = e2.getValue();
      if (r2.type === "JSXElement" && gh(r2))
        return eh([e2.call(n2, "openingElement"), e2.call(n2, "closingElement")]);
      const o2 = r2.type === "JSXElement" ? e2.call(n2, "openingElement") : e2.call(n2, "openingFragment"), u2 = r2.type === "JSXElement" ? e2.call(n2, "closingElement") : e2.call(n2, "closingFragment");
      if (r2.children.length === 1 && r2.children[0].type === "JSXExpressionContainer" && (r2.children[0].expression.type === "TemplateLiteral" || r2.children[0].expression.type === "TaggedTemplateExpression"))
        return eh([o2, eh(e2.map(n2, "children")), u2]);
      r2.children = r2.children.map((e3) => Dh(e3) ? {type: "JSXText", value: " ", raw: " "} : e3);
      const i2 = r2.children.filter(yh).length > 0, a2 = r2.children.filter((e3) => e3.type === "JSXExpressionContainer").length > 1, s2 = r2.type === "JSXElement" && r2.openingElement.attributes.length > 1;
      let c2 = lh(o2) || i2 || s2 || a2;
      const l2 = e2.getParentNode().rootMarker === "mdx", p2 = t2.singleQuote ? "{' '}" : '{" "}', d2 = l2 ? eh([" "]) : sh(eh([p2, rh]), " "), f2 = r2.openingElement && r2.openingElement.name && r2.openingElement.name.name === "fbt", h2 = function(e3, t3, n3, r3, o3) {
        const u3 = e3.getValue(), i3 = [];
        return e3.each((e4, t4) => {
          const a3 = e4.getValue();
          if (vh(a3)) {
            const e5 = bh(a3);
            if (Eh(a3)) {
              const n4 = e5.split(Ch);
              if (n4[0] === "") {
                if (i3.push(""), n4.shift(), /\n/.test(n4[0])) {
                  const e6 = u3.children[t4 + 1];
                  i3.push(Nh(o3, n4[1], a3, e6));
                } else
                  i3.push(r3);
                n4.shift();
              }
              let s3;
              if (fh(n4) === "" && (n4.pop(), s3 = n4.pop()), n4.length === 0)
                return;
              if (n4.forEach((e6, t5) => {
                t5 % 2 == 1 ? i3.push(th) : i3.push(e6);
              }), s3 !== void 0)
                if (/\n/.test(s3)) {
                  const e6 = u3.children[t4 + 1];
                  i3.push(Nh(o3, fh(i3), a3, e6));
                } else
                  i3.push(r3);
              else {
                const e6 = u3.children[t4 + 1];
                i3.push(Bh(o3, fh(i3), a3, e6));
              }
            } else
              /\n/.test(e5) ? e5.match(/\n/g).length > 1 && (i3.push(""), i3.push(nh)) : (i3.push(""), i3.push(r3));
          } else {
            const r4 = n3(e4);
            i3.push(r4);
            const s3 = u3.children[t4 + 1];
            if (s3 && Eh(s3)) {
              const e5 = bh(s3).trim().split(Ch)[0];
              i3.push(Bh(o3, e5, a3, s3));
            } else
              i3.push(nh);
          }
        }, "children"), i3;
      }(e2, 0, n2, d2, f2), m2 = r2.children.some((e3) => Eh(e3));
      for (let e3 = h2.length - 2; e3 >= 0; e3--) {
        const t3 = h2[e3] === "" && h2[e3 + 1] === "", n3 = h2[e3] === nh && h2[e3 + 1] === "" && h2[e3 + 2] === nh, r3 = (h2[e3] === rh || h2[e3] === nh) && h2[e3 + 1] === "" && h2[e3 + 2] === d2, o3 = h2[e3] === d2 && h2[e3 + 1] === "" && (h2[e3 + 2] === rh || h2[e3 + 2] === nh), u3 = h2[e3] === d2 && h2[e3 + 1] === "" && h2[e3 + 2] === d2, i3 = h2[e3] === rh && h2[e3 + 1] === "" && h2[e3 + 2] === nh || h2[e3] === nh && h2[e3 + 1] === "" && h2[e3 + 2] === rh;
        n3 && m2 || t3 || r3 || u3 || i3 ? h2.splice(e3, 2) : o3 && h2.splice(e3 + 1, 2);
      }
      for (; h2.length && (ph(fh(h2)) || dh(fh(h2))); )
        h2.pop();
      for (; h2.length && (ph(h2[0]) || dh(h2[0])) && (ph(h2[1]) || dh(h2[1])); )
        h2.shift(), h2.shift();
      const g2 = [];
      h2.forEach((e3, t3) => {
        if (e3 === d2) {
          if (t3 === 1 && h2[t3 - 1] === "")
            return h2.length === 2 ? void g2.push(p2) : void g2.push(eh([p2, nh]));
          if (t3 === h2.length - 1)
            return void g2.push(p2);
          if (h2[t3 - 1] === "" && h2[t3 - 2] === nh)
            return void g2.push(p2);
        }
        g2.push(e3), lh(e3) && (c2 = true);
      });
      const D2 = m2 ? ah(g2) : oh(eh(g2), {shouldBreak: true});
      if (l2)
        return D2;
      const y2 = oh(eh([o2, uh(eh([nh, D2])), nh, u2]));
      return c2 ? y2 : ih([oh(eh([o2, eh(h2), u2])), y2]);
    }
    function Bh(e2, t2, n2, r2) {
      return e2 ? "" : n2.type === "JSXElement" && !n2.closingElement || r2 && r2.type === "JSXElement" && !r2.closingElement ? t2.length === 1 ? rh : nh : rh;
    }
    function Nh(e2, t2, n2, r2) {
      return e2 ? nh : t2.length === 1 ? n2.type === "JSXElement" && !n2.closingElement || r2 && r2.type === "JSXElement" && !r2.closingElement ? nh : rh : nh;
    }
    function kh(e2, t2, n2) {
      const r2 = e2.getValue();
      return eh(["{", e2.call((e3) => {
        const r3 = eh(["...", n2(e3)]), o2 = e3.getValue();
        return o2.comments && o2.comments.length && wh(e3) ? eh([uh(eh([rh, Qf(e3, () => r3, t2)])), rh]) : r3;
      }, r2.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"]);
    }
    var Ph = {printJsxElement: function(e2, t2, n2) {
      const r2 = Qf(e2, () => Th(e2, t2, n2), t2);
      return function(e3, t3, n3) {
        const r3 = e3.getParentNode();
        if (!r3)
          return t3;
        if ({ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true}[r3.type])
          return t3;
        const o2 = e3.match(void 0, (e4) => e4.type === "ArrowFunctionExpression", Ah, (e4) => e4.type === "JSXExpressionContainer"), u2 = Rp(e3, n3);
        return oh(eh([u2 ? "" : sh("("), uh(eh([rh, t3])), rh, u2 ? "" : sh(")")]), {shouldBreak: o2});
      }(e2, r2, t2);
    }, printJsxAttribute: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [];
      if (o2.push(e2.call(n2, "name")), r2.value) {
        let u2;
        if (Fh(r2.value)) {
          let e3 = bh(r2.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"');
          const n3 = hh(e3, t2.jsxSingleQuote ? "'" : '"'), o3 = n3 === "'" ? "&apos;" : "&quot;";
          e3 = e3.slice(1, -1).replace(new RegExp(n3, "g"), o3), u2 = eh([n3, e3, n3]);
        } else
          u2 = e2.call(n2, "value");
        o2.push("=", u2);
      }
      return eh(o2);
    }, printJsxOpeningElement: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = r2.name && r2.name.comments && r2.name.comments.length > 0 || r2.typeParameters && r2.typeParameters.comments && r2.typeParameters.comments.length > 0;
      if (r2.selfClosing && !r2.attributes.length && !o2)
        return eh(["<", e2.call(n2, "name"), e2.call(n2, "typeParameters"), " />"]);
      if (r2.attributes && r2.attributes.length === 1 && r2.attributes[0].value && Fh(r2.attributes[0].value) && !r2.attributes[0].value.value.includes("\n") && !o2 && (!r2.attributes[0].comments || !r2.attributes[0].comments.length))
        return oh(eh(["<", e2.call(n2, "name"), e2.call(n2, "typeParameters"), " ", eh(e2.map(n2, "attributes")), r2.selfClosing ? " />" : ">"]));
      const u2 = r2.attributes.length && mh(fh(r2.attributes)), i2 = !r2.attributes.length && !o2 || t2.jsxBracketSameLine && (!o2 || r2.attributes.length) && !u2, a2 = r2.attributes && r2.attributes.some((e3) => e3.value && Fh(e3.value) && e3.value.value.includes("\n"));
      return oh(eh(["<", e2.call(n2, "name"), e2.call(n2, "typeParameters"), eh([uh(eh(e2.map((e3) => eh([th, n2(e3)]), "attributes"))), r2.selfClosing ? th : i2 ? ">" : rh]), r2.selfClosing ? "/>" : i2 ? "" : ">"]), {shouldBreak: a2});
    }, printJsxClosingElement: function(e2, t2, n2) {
      return eh(["</", e2.call(n2, "name"), ">"]);
    }, printJsxOpeningClosingFragment: function(e2, t2) {
      const n2 = e2.getValue(), r2 = n2.comments && n2.comments.length, o2 = r2 && !n2.comments.every((e3) => Sh(e3)), u2 = n2.type === "JSXOpeningFragment";
      return eh([u2 ? "<" : "</", uh(eh([o2 ? nh : r2 && !u2 ? " " : "", Zf(e2, t2, true)])), o2 ? nh : "", ">"]);
    }, printJsxExpressionContainer: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = e2.getParentNode(0), u2 = r2.expression.comments && r2.expression.comments.length > 0, i2 = r2.expression.type === "JSXEmptyExpression" || !u2 && (r2.expression.type === "ArrayExpression" || r2.expression.type === "ObjectExpression" || r2.expression.type === "ArrowFunctionExpression" || r2.expression.type === "CallExpression" || r2.expression.type === "OptionalCallExpression" || r2.expression.type === "FunctionExpression" || r2.expression.type === "TemplateLiteral" || r2.expression.type === "TaggedTemplateExpression" || r2.expression.type === "DoExpression" || yh(o2) && (r2.expression.type === "ConditionalExpression" || xh(r2.expression)));
      return oh(eh(i2 ? ["{", e2.call(n2, "expression"), ch, "}"] : ["{", uh(eh([rh, e2.call(n2, "expression")])), rh, ch, "}"]));
    }, printJsxEmptyExpression: function(e2, t2) {
      const n2 = e2.getValue(), r2 = n2.comments && !n2.comments.every((e3) => Sh(e3));
      return eh([Zf(e2, t2, !r2), r2 ? nh : ""]);
    }, printJsxSpreadAttribute: kh, printJsxSpreadChild: kh};
    const {printDanglingComments: Oh} = Fa, {builders: {concat: Ih, join: Lh, line: Mh, hardline: jh, softline: _h, group: Rh, indent: Vh, ifBreak: $h}} = cn, {hasDanglingComments: qh, isTestCall: Wh, isBlockComment: Uh, shouldPrintComma: Jh} = wc, {shouldHugType: zh} = df, Hh = new WeakMap();
    function Gh(e2) {
      return Hh.has(e2) || Hh.set(e2, Symbol("typeParameters")), Hh.get(e2);
    }
    function Xh(e2, t2) {
      const n2 = e2.getValue();
      if (!qh(n2))
        return "";
      const r2 = n2.comments.every((e3) => Uh(e3)), o2 = Oh(e2, t2, r2);
      return r2 ? o2 : Ih([o2, jh]);
    }
    var Yh = {printTypeParameters: function(e2, t2, n2, r2) {
      const o2 = e2.getValue();
      if (!o2[r2])
        return "";
      if (!Array.isArray(o2[r2]))
        return e2.call(n2, r2);
      const u2 = e2.getNode(2);
      return u2 != null && Wh(u2) || o2[r2].length === 0 || o2[r2].length === 1 && (zh(o2[r2][0]) || o2[r2][0].type === "GenericTypeAnnotation" && zh(o2[r2][0].id) || o2[r2][0].type === "TSTypeReference" && zh(o2[r2][0].typeName) || o2[r2][0].type === "NullableTypeAnnotation") ? Ih(["<", Lh(", ", e2.map(n2, r2)), Xh(e2, t2), ">"]) : Rh(Ih(["<", Vh(Ih([_h, Lh(Ih([",", Mh]), e2.map(n2, r2))])), $h(t2.parser !== "typescript" && t2.parser !== "babel-ts" && Jh(t2, "all") ? "," : ""), _h, ">"]), {id: Gh(o2)});
    }, getTypeParametersGroupId: Gh};
    const {printComments: Kh} = Fa, {printString: Qh, printNumber: Zh} = Lt, {builders: {concat: em}} = cn, {isNumericLiteral: tm, isSimpleNumber: nm, isStringLiteral: rm, isStringPropSafeToUnquote: om, rawText: um} = wc, im = new WeakMap();
    var am = {printPropertyKey: function(e2, t2, n2) {
      const r2 = e2.getNode();
      if (r2.computed)
        return em(["[", e2.call(n2, "key"), "]"]);
      const o2 = e2.getParentNode(), {key: u2} = r2;
      if (r2.type === "ClassPrivateProperty" && u2.type === "Identifier")
        return em(["#", e2.call(n2, "key")]);
      if (t2.quoteProps === "consistent" && !im.has(o2)) {
        const e3 = (o2.properties || o2.body || o2.members).some((e4) => !e4.computed && e4.key && rm(e4.key) && !om(e4, t2));
        im.set(o2, e3);
      }
      if ((u2.type === "Identifier" || tm(u2) && nm(Zh(um(u2))) && String(u2.value) === Zh(um(u2)) && t2.parser !== "typescript" && t2.parser !== "babel-ts") && (t2.parser === "json" || t2.quoteProps === "consistent" && im.get(o2))) {
        const n3 = Qh(JSON.stringify(u2.type === "Identifier" ? u2.name : u2.value.toString()), t2);
        return e2.call((e3) => Kh(e3, () => n3, t2), "key");
      }
      return om(r2, t2) && (t2.quoteProps === "as-needed" || t2.quoteProps === "consistent" && !im.get(o2)) ? e2.call((e3) => Kh(e3, () => /^\d/.test(u2.value) ? Zh(u2.value) : u2.value, t2), "key") : e2.call(n2, "key");
    }};
    const {printDanglingComments: sm} = Fa, {getNextNonSpaceNonCommentCharacterIndex: cm} = Lt, {builders: {concat: lm, line: pm, softline: dm, group: fm, indent: hm, ifBreak: mm, hardline: gm}} = cn, {getFunctionParameters: Dm, hasDanglingComments: ym, hasLeadingOwnLineComment: Em, isFlowAnnotationComment: Cm, isJSXNode: bm, isTemplateOnItsOwnLine: vm, shouldPrintComma: Am, startsWithNoLookaheadToken: Fm, returnArgumentHasLeadingComment: xm, isBinaryish: Sm, isLineComment: wm} = wc, {locEnd: Tm} = ii, {printFunctionParameters: Bm} = af, {printPropertyKey: Nm} = am, {printFunctionTypeParameters: km} = nd;
    function Pm(e2, t2, n2) {
      const r2 = [km(e2, t2, n2), fm(lm([Bm(e2, n2, t2), Im(e2, n2, t2)]))];
      return e2.getNode().body ? r2.push(" ", e2.call(n2, "body")) : r2.push(t2.semi ? ";" : ""), lm(r2);
    }
    function Om(e2, t2) {
      if (t2.arrowParens === "always")
        return false;
      if (t2.arrowParens === "avoid") {
        return function(e3) {
          const t3 = Dm(e3);
          return !(t3.length !== 1 || e3.typeParameters || ym(e3) || t3[0].type !== "Identifier" || t3[0].typeAnnotation || t3[0].comments || t3[0].optional || e3.predicate || e3.returnType);
        }(e2.getValue());
      }
      return false;
    }
    function Im(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = e2.call(t2, "returnType");
      if (r2.returnType && Cm(n2.originalText, r2.returnType))
        return lm([" /*: ", o2, " */"]);
      const u2 = [o2];
      return r2.returnType && r2.returnType.typeAnnotation && u2.unshift(": "), r2.predicate && u2.push(r2.returnType ? " " : ": ", e2.call(t2, "predicate")), lm(u2);
    }
    var Lm = {printFunctionDeclaration: function(e2, t2, n2, r2) {
      const o2 = e2.getValue(), u2 = [];
      return o2.async && u2.push("async "), o2.generator ? u2.push("function* ") : u2.push("function "), o2.id && u2.push(e2.call(t2, "id")), u2.push(km(e2, n2, t2), fm(lm([Bm(e2, t2, n2, r2), Im(e2, t2, n2)])), o2.body ? " " : "", e2.call(t2, "body")), lm(u2);
    }, printArrowFunctionExpression: function(e2, t2, n2, r2) {
      const o2 = e2.getValue(), u2 = [];
      o2.async && u2.push("async "), Om(e2, t2) ? u2.push(e2.call(n2, "params", 0)) : u2.push(fm(lm([Bm(e2, n2, t2, r2 && (r2.expandLastArg || r2.expandFirstArg), true), Im(e2, n2, t2)])));
      const i2 = sm(e2, t2, true, (e3) => {
        const n3 = cm(t2.originalText, e3, Tm);
        return n3 !== false && t2.originalText.slice(n3, n3 + 2) === "=>";
      });
      i2 && u2.push(" ", i2), u2.push(" =>");
      const a2 = e2.call((e3) => n2(e3, r2), "body");
      if (!Em(t2.originalText, o2.body) && (o2.body.type === "ArrayExpression" || o2.body.type === "ObjectExpression" || o2.body.type === "BlockStatement" || bm(o2.body) || vm(o2.body, t2.originalText) || o2.body.type === "ArrowFunctionExpression" || o2.body.type === "DoExpression"))
        return fm(lm([lm(u2), " ", a2]));
      if (o2.body.type === "SequenceExpression")
        return fm(lm([lm(u2), fm(lm([" (", hm(lm([dm, a2])), dm, ")"]))]));
      const s2 = (r2 && r2.expandLastArg || e2.getParentNode().type === "JSXExpressionContainer") && !(o2.comments && o2.comments.length), c2 = r2 && r2.expandLastArg && Am(t2, "all"), l2 = o2.body.type === "ConditionalExpression" && !Fm(o2.body, false);
      return fm(lm([lm(u2), fm(lm([hm(lm([pm, l2 ? mm("", "(") : "", a2, l2 ? mm("", ")") : ""])), s2 ? lm([mm(c2 ? "," : ""), dm]) : ""]))]));
    }, printMethod: function(e2, t2, n2) {
      const r2 = e2.getNode(), {kind: o2} = r2, u2 = r2.value || r2, i2 = [];
      return o2 && o2 !== "init" && o2 !== "method" && o2 !== "constructor" ? (ta.ok(o2 === "get" || o2 === "set"), i2.push(o2, " ")) : u2.async && i2.push("async "), u2.generator && i2.push("*"), i2.push(Nm(e2, t2, n2), r2.optional || r2.key.optional ? "?" : "", r2 === u2 ? Pm(e2, t2, n2) : e2.call((e3) => Pm(e3, t2, n2), "value")), lm(i2);
    }, printReturnAndThrowArgument: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = t2.semi ? ";" : "", u2 = [];
      r2.argument && (xm(t2, r2.argument) ? u2.push(lm([" (", hm(lm([gm, e2.call(n2, "argument")])), gm, ")"])) : Sm(r2.argument) || r2.argument.type === "SequenceExpression" ? u2.push(fm(lm([mm(" (", " "), hm(lm([dm, e2.call(n2, "argument")])), dm, mm(")")]))) : u2.push(" ", e2.call(n2, "argument")));
      const i2 = Array.isArray(r2.comments) && r2.comments[r2.comments.length - 1], a2 = i2 && wm(i2);
      return a2 && u2.push(o2), ym(r2) && u2.push(" ", sm(e2, t2, true)), a2 || u2.push(o2), lm(u2);
    }, shouldPrintParamsWithoutParens: Om};
    const {printComments: Mm, printDanglingComments: jm} = Fa, {builders: {concat: _m, join: Rm, line: Vm, hardline: $m, softline: qm, group: Wm, indent: Um, ifBreak: Jm}} = cn, {hasTrailingComment: zm, hasTrailingLineComment: Hm} = wc, {getTypeParametersGroupId: Gm} = Yh, {printMethod: Xm} = Lm, {printDecorators: Ym} = nd;
    function Km(e2) {
      return e2.typeParameters && !Hm(e2.typeParameters) && !function(e3) {
        return ["superClass", "extends", "mixins", "implements"].filter((t2) => !!e3[t2]).length > 1;
      }(e2);
    }
    function Qm(e2, t2, n2, r2) {
      const o2 = e2.getValue();
      if (!o2[r2] || o2[r2].length === 0)
        return "";
      const u2 = jm(e2, t2, true, ({marker: e3}) => e3 === r2);
      return _m([Km(o2) ? Jm(" ", Vm, {groupId: Gm(o2.typeParameters)}) : Vm, u2, u2 && $m, r2, Wm(Um(_m([Vm, Rm(_m([",", Vm]), e2.map(n2, r2))])))]);
    }
    function Zm(e2, t2, n2) {
      const r2 = e2.call(n2, "superClass");
      return e2.getParentNode().type === "AssignmentExpression" ? Wm(Jm(_m(["(", Um(_m([qm, r2])), qm, ")"]), r2)) : r2;
    }
    var eg = {printClass: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [];
      r2.abstract && o2.push("abstract "), o2.push("class");
      const u2 = r2.id && zm(r2.id) || r2.superClass && r2.superClass.comments && r2.superClass.comments.length !== 0 || r2.extends && r2.extends.length !== 0 || r2.mixins && r2.mixins.length !== 0 || r2.implements && r2.implements.length !== 0, i2 = [], a2 = [];
      if (r2.id && i2.push(" ", e2.call(n2, "id")), i2.push(e2.call(n2, "typeParameters")), r2.superClass) {
        const r3 = _m(["extends ", Zm(e2, t2, n2), e2.call(n2, "superTypeParameters")]), o3 = e2.call((e3) => Mm(e3, () => r3, t2), "superClass");
        u2 ? a2.push(Vm, Wm(o3)) : a2.push(" ", o3);
      } else
        a2.push(Qm(e2, t2, n2, "extends"));
      if (a2.push(Qm(e2, t2, n2, "mixins")), a2.push(Qm(e2, t2, n2, "implements")), u2) {
        const e3 = _m(a2);
        Km(r2) ? o2.push(Wm(_m(i2.concat(Jm(Um(e3), e3))))) : o2.push(Wm(Um(_m(i2.concat(e3)))));
      } else
        o2.push(...i2, ...a2);
      return o2.push(" ", e2.call(n2, "body")), _m(o2);
    }, printClassMethod: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [];
      return r2.decorators && r2.decorators.length !== 0 && o2.push(Ym(e2, t2, n2)), r2.accessibility && o2.push(r2.accessibility + " "), r2.static && o2.push("static "), (r2.type === "TSAbstractMethodDefinition" || r2.abstract) && o2.push("abstract "), o2.push(Xm(e2, t2, n2)), _m(o2);
    }};
    const {getLast: tg, getPenultimate: ng, isNextLineEmpty: rg} = Lt, {getFunctionParameters: og, iterateFunctionParametersPath: ug, hasLeadingComment: ig, hasTrailingComment: ag, isFunctionCompositionArgs: sg, isJSXNode: cg, isLongCurriedCallExpression: lg, shouldPrintComma: pg, getCallArguments: dg, iterateCallArgumentsPath: fg} = wc, {locEnd: hg} = ii, {builders: {concat: mg, line: gg, hardline: Dg, softline: yg, group: Eg, indent: Cg, conditionalGroup: bg, ifBreak: vg, breakParent: Ag}, utils: {willBreak: Fg}} = cn;
    function xg(e2) {
      return e2.type === "ObjectExpression" && (e2.properties.length > 0 || e2.comments) || e2.type === "ArrayExpression" && (e2.elements.length > 0 || e2.comments) || e2.type === "TSTypeAssertion" && xg(e2.expression) || e2.type === "TSAsExpression" && xg(e2.expression) || e2.type === "FunctionExpression" || e2.type === "ArrowFunctionExpression" && (!e2.returnType || !e2.returnType.typeAnnotation || e2.returnType.typeAnnotation.type !== "TSTypeReference") && (e2.body.type === "BlockStatement" || e2.body.type === "ArrowFunctionExpression" || e2.body.type === "ObjectExpression" || e2.body.type === "ArrayExpression" || e2.body.type === "CallExpression" || e2.body.type === "OptionalCallExpression" || e2.body.type === "ConditionalExpression" || cg(e2.body));
    }
    var Sg = function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = r2.type === "ImportExpression", u2 = dg(r2);
      if (u2.length === 0)
        return mg(["(", Fa.printDanglingComments(e2, t2, true), ")"]);
      if (u2.length === 2 && u2[0].type === "ArrowFunctionExpression" && og(u2[0]).length === 0 && u2[0].body.type === "BlockStatement" && u2[1].type === "ArrayExpression" && !u2.some((e3) => e3.comments))
        return mg(["(", e2.call(n2, "arguments", 0), ", ", e2.call(n2, "arguments", 1), ")"]);
      let i2 = false, a2 = false, s2 = false;
      const c2 = u2.length - 1, l2 = [];
      fg(e2, (e3, r3) => {
        const o3 = e3.getNode(), u3 = [n2(e3)];
        r3 === c2 || (rg(t2.originalText, o3, hg) ? (r3 === 0 && (s2 = true), i2 = true, u3.push(",", Dg, Dg)) : u3.push(",", gg)), a2 = function(e4, t3) {
          if (!e4 || e4.type !== "ArrowFunctionExpression" || !e4.body || e4.body.type !== "BlockStatement" || og(e4).length === 0)
            return false;
          let r4 = false;
          return ug(t3, (e5) => {
            r4 = r4 || Fg(mg([n2(e5)]));
          }), r4;
        }(o3, e3), l2.push(mg(u3));
      });
      const p2 = o2 || r2.callee && r2.callee.type === "Import" || !pg(t2, "all") ? "" : ",";
      function d2() {
        return Eg(mg(["(", Cg(mg([gg, mg(l2)])), p2, gg, ")"]), {shouldBreak: true});
      }
      if (e2.getParentNode().type !== "Decorator" && sg(u2))
        return d2();
      const f2 = function(e3) {
        if (e3.length !== 2)
          return false;
        const [t3, n3] = e3;
        return !(t3.comments && t3.comments.length || t3.type !== "FunctionExpression" && (t3.type !== "ArrowFunctionExpression" || t3.body.type !== "BlockStatement") || n3.type === "FunctionExpression" || n3.type === "ArrowFunctionExpression" || n3.type === "ConditionalExpression" || xg(n3));
      }(u2), h2 = function(e3) {
        const t3 = tg(e3), n3 = ng(e3);
        return !ig(t3) && !ag(t3) && xg(t3) && (!n3 || n3.type !== t3.type);
      }(u2);
      if (f2 || h2) {
        const t3 = (f2 ? l2.slice(1).some(Fg) : l2.slice(0, -1).some(Fg)) || i2 || a2;
        let o3 = [];
        fg(e2, (e3, t4) => {
          f2 && t4 === 0 && (o3 = [mg([e3.call((e4) => n2(e4, {expandFirstArg: true})), l2.length > 1 ? "," : "", s2 ? Dg : gg, s2 ? Dg : ""])].concat(l2.slice(1))), h2 && t4 === u2.length - 1 && (o3 = l2.slice(0, -1).concat(e3.call((e4) => n2(e4, {expandLastArg: true}))));
        });
        const c3 = l2.some(Fg), p3 = mg(["(", mg(o3), ")"]);
        return mg([c3 ? Ag : "", bg([c3 || r2.typeArguments || r2.typeParameters ? vg(d2(), p3) : p3, mg(f2 ? ["(", Eg(o3[0], {shouldBreak: true}), mg(o3.slice(1)), ")"] : ["(", mg(l2.slice(0, -1)), Eg(tg(o3), {shouldBreak: true}), ")"]), d2()], {shouldBreak: t3})]);
      }
      const m2 = mg(["(", Cg(mg([yg, mg(l2)])), vg(p2), yg, ")"]);
      return lg(e2) ? m2 : Eg(m2, {shouldBreak: l2.some(Fg) || i2});
    };
    const {builders: {concat: wg, softline: Tg, group: Bg, indent: Ng}} = cn, {isNumericLiteral: kg} = wc, {printOptionalToken: Pg} = nd;
    function Og(e2, t2, n2) {
      const r2 = e2.call(n2, "property"), o2 = e2.getValue(), u2 = Pg(e2);
      return o2.computed ? !o2.property || kg(o2.property) ? wg([u2, "[", r2, "]"]) : Bg(wg([u2, "[", Ng(wg([Tg, r2])), Tg, "]"])) : wg([u2, ".", r2]);
    }
    var Ig = {printMemberExpression: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = e2.getParentNode();
      let u2, i2 = 0;
      do {
        u2 = e2.getParentNode(i2), i2++;
      } while (u2 && (u2.type === "MemberExpression" || u2.type === "OptionalMemberExpression" || u2.type === "TSNonNullExpression"));
      const a2 = u2 && (u2.type === "NewExpression" || u2.type === "BindExpression" || u2.type === "VariableDeclarator" && u2.id.type !== "Identifier" || u2.type === "AssignmentExpression" && u2.left.type !== "Identifier") || r2.computed || r2.object.type === "Identifier" && r2.property.type === "Identifier" && o2.type !== "MemberExpression" && o2.type !== "OptionalMemberExpression";
      return wg([e2.call(n2, "object"), a2 ? Og(e2, t2, n2) : Bg(Ng(wg([Tg, Og(e2, t2, n2)])))]);
    }, printMemberLookup: Og};
    const {getLast: Lg, isNextLineEmpty: Mg, isNextLineEmptyAfterIndex: jg, getNextNonSpaceNonCommentCharacterIndex: _g} = Lt, {hasLeadingComment: Rg, hasTrailingComment: Vg, isCallOrOptionalCallExpression: $g, isFunctionOrArrowExpression: qg, isLongCurriedCallExpression: Wg, isMemberish: Ug, isNumericLiteral: Jg, isSimpleCallArgument: zg} = wc, {locEnd: Hg} = ii, {builders: {concat: Gg, join: Xg, hardline: Yg, group: Kg, indent: Qg, conditionalGroup: Zg, breakParent: eD}, utils: {willBreak: tD}} = cn, {printMemberLookup: nD} = Ig, {printOptionalToken: rD, printFunctionTypeParameters: oD, printBindExpressionCallee: uD} = nd;
    var iD = function(e2, t2, n2) {
      const r2 = e2.getParentNode(), o2 = !r2 || r2.type === "ExpressionStatement", u2 = [];
      function i2(e3) {
        const {originalText: n3} = t2, r3 = _g(n3, e3, Hg);
        return n3.charAt(r3) === ")" ? r3 !== false && jg(n3, r3 + 1) : Mg(n3, e3, Hg);
      }
      function a2(e3) {
        const r3 = e3.getValue();
        $g(r3) && (Ug(r3.callee) || $g(r3.callee)) ? (u2.unshift({node: r3, printed: Gg([Fa.printComments(e3, () => Gg([rD(e3), oD(e3, t2, n2), Sg(e3, t2, n2)]), t2), i2(r3) ? Yg : ""])}), e3.call((e4) => a2(e4), "callee")) : Ug(r3) ? (u2.unshift({node: r3, needsParens: Rp(e3, t2), printed: Fa.printComments(e3, () => r3.type === "OptionalMemberExpression" || r3.type === "MemberExpression" ? nD(e3, t2, n2) : uD(e3, t2, n2), t2)}), e3.call((e4) => a2(e4), "object")) : r3.type === "TSNonNullExpression" ? (u2.unshift({node: r3, printed: Fa.printComments(e3, () => "!", t2)}), e3.call((e4) => a2(e4), "expression")) : u2.unshift({node: r3, printed: e3.call(n2)});
      }
      const s2 = e2.getValue();
      u2.unshift({node: s2, printed: Gg([rD(e2), oD(e2, t2, n2), Sg(e2, t2, n2)])}), s2.callee && e2.call((e3) => a2(e3), "callee");
      const c2 = [];
      let l2 = [u2[0]], p2 = 1;
      for (; p2 < u2.length && (u2[p2].node.type === "TSNonNullExpression" || $g(u2[p2].node) || (u2[p2].node.type === "MemberExpression" || u2[p2].node.type === "OptionalMemberExpression") && u2[p2].node.computed && Jg(u2[p2].node.property)); ++p2)
        l2.push(u2[p2]);
      if (!$g(u2[0].node))
        for (; p2 + 1 < u2.length && (Ug(u2[p2].node) && Ug(u2[p2 + 1].node)); ++p2)
          l2.push(u2[p2]);
      c2.push(l2), l2 = [];
      let d2 = false;
      for (; p2 < u2.length; ++p2) {
        if (d2 && Ug(u2[p2].node)) {
          if (u2[p2].node.computed && Jg(u2[p2].node.property)) {
            l2.push(u2[p2]);
            continue;
          }
          c2.push(l2), l2 = [], d2 = false;
        }
        ($g(u2[p2].node) || u2[p2].node.type === "ImportExpression") && (d2 = true), l2.push(u2[p2]), u2[p2].node.comments && u2[p2].node.comments.some((e3) => e3.trailing) && (c2.push(l2), l2 = [], d2 = false);
      }
      function f2(e3) {
        return /^[A-Z]|^[$_]+$/.test(e3);
      }
      l2.length > 0 && c2.push(l2);
      const h2 = c2.length >= 2 && !c2[1][0].node.comments && function(e3) {
        const n3 = e3[1].length && e3[1][0].node.computed;
        if (e3[0].length === 1) {
          const r4 = e3[0][0].node;
          return r4.type === "ThisExpression" || r4.type === "Identifier" && (f2(r4.name) || o2 && function(e4) {
            return e4.length <= t2.tabWidth;
          }(r4.name) || n3);
        }
        const r3 = Lg(e3[0]).node;
        return (r3.type === "MemberExpression" || r3.type === "OptionalMemberExpression") && r3.property.type === "Identifier" && (f2(r3.property.name) || n3);
      }(c2);
      function m2(e3) {
        const t3 = e3.map((e4) => e4.printed);
        return e3.length > 0 && e3[e3.length - 1].needsParens ? Gg(["(", ...t3, ")"]) : Gg(t3);
      }
      const g2 = c2.map(m2), D2 = Gg(g2), y2 = h2 ? 3 : 2, E2 = Yu(c2), C2 = E2.slice(1, -1).some((e3) => Rg(e3.node)) || E2.slice(0, -1).some((e3) => Vg(e3.node)) || c2[y2] && Rg(c2[y2][0].node);
      if (c2.length <= y2 && !C2)
        return Wg(e2) ? D2 : Kg(D2);
      const b2 = Lg(c2[h2 ? 1 : 0]).node, v2 = !$g(b2) && i2(b2), A2 = Gg([m2(c2[0]), h2 ? Gg(c2.slice(1, 2).map(m2)) : "", v2 ? Yg : "", function(e3) {
        return e3.length === 0 ? "" : Qg(Kg(Gg([Yg, Xg(Yg, e3.map(m2))])));
      }(c2.slice(h2 ? 2 : 1))]), F2 = u2.map(({node: e3}) => e3).filter($g);
      return C2 || F2.length > 2 && F2.some((e3) => !e3.arguments.every((e4) => zg(e4, 0))) || g2.slice(0, -1).some(tD) || function() {
        const e3 = Lg(Lg(c2)).node, t3 = Lg(g2);
        return $g(e3) && tD(t3) && F2.slice(0, -1).some((e4) => e4.arguments.some(qg));
      }() ? Kg(A2) : Gg([tD(D2) || v2 ? eD : "", Zg([D2, A2])]);
    };
    const {builders: {concat: aD, join: sD, group: cD}} = cn, {getCallArguments: lD, hasFlowAnnotationComment: pD, isCallOrOptionalCallExpression: dD, isMemberish: fD, isTemplateOnItsOwnLine: hD, isTestCall: mD, iterateCallArgumentsPath: gD} = wc, {printOptionalToken: DD, printFunctionTypeParameters: yD} = nd;
    var ED = {printCallExpression: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = r2.type === "NewExpression", u2 = r2.type === "ImportExpression", i2 = DD(e2), a2 = lD(r2);
      if (a2.length > 0 && (!u2 && !o2 && r2.callee.type === "Identifier" && (r2.callee.name === "require" || r2.callee.name === "define") || a2.length === 1 && hD(a2[0], t2.originalText) || !o2 && mD(r2, e2.getParentNode()))) {
        const r3 = [];
        return gD(e2, (e3) => {
          r3.push(n2(e3));
        }), aD([o2 ? "new " : "", e2.call(n2, "callee"), i2, yD(e2, t2, n2), aD(["(", sD(", ", r3), ")"])]);
      }
      const s2 = (t2.parser === "babel" || t2.parser === "babel-flow") && r2.callee && r2.callee.type === "Identifier" && pD(r2.callee.trailingComments);
      if (s2 && (r2.callee.trailingComments[0].printed = true), !u2 && !o2 && fD(r2.callee) && !e2.call((e3) => Rp(e3, t2), "callee"))
        return iD(e2, t2, n2);
      const c2 = aD([o2 ? "new " : "", u2 ? "import" : e2.call(n2, "callee"), i2, s2 ? "/*:: ".concat(r2.callee.trailingComments[0].value.slice(2).trim(), " */") : "", yD(e2, t2, n2), Sg(e2, t2, n2)]);
      return u2 || dD(r2.callee) ? cD(c2) : c2;
    }};
    const {builders: {concat: CD, join: bD, line: vD, group: AD, indent: FD, ifBreak: xD}} = cn, {hasTrailingComment: SD, hasTrailingLineComment: wD, identity: TD} = wc, {getTypeParametersGroupId: BD} = Yh, {printTypeScriptModifiers: ND} = nd;
    var kD = {printInterface: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [];
      (r2.type === "DeclareInterface" || r2.declare) && o2.push("declare "), r2.type === "TSInterfaceDeclaration" && o2.push(r2.abstract ? "abstract " : "", ND(e2, t2, n2)), o2.push("interface");
      const u2 = [], i2 = [];
      r2.type !== "InterfaceTypeAnnotation" && u2.push(" ", e2.call(n2, "id"), e2.call(n2, "typeParameters"));
      const a2 = r2.typeParameters && !wD(r2.typeParameters);
      if (r2.extends && r2.extends.length !== 0 && i2.push(a2 ? xD(" ", vD, {groupId: BD(r2.typeParameters)}) : vD, "extends ", (r2.extends.length === 1 ? TD : FD)(bD(CD([",", vD]), e2.map(n2, "extends")))), r2.id && SD(r2.id) || r2.extends && r2.extends.length !== 0) {
        const e3 = CD(i2);
        a2 ? o2.push(AD(CD(u2.concat(xD(FD(e3), e3))))) : o2.push(AD(FD(CD(u2.concat(e3)))));
      } else
        o2.push(...u2, ...i2);
      return o2.push(" ", e2.call(n2, "body")), AD(CD(o2));
    }};
    const {printComments: PD} = Fa, {getLast: OD} = Lt, {builders: {concat: ID, join: LD, line: MD, softline: jD, group: _D, indent: RD, align: VD, ifBreak: $D}, utils: {normalizeParts: qD}} = cn, {hasLeadingOwnLineComment: WD, hasTrailingLineComment: UD, isBinaryish: JD, isJSXNode: zD, shouldFlatten: HD} = wc;
    let GD = 0;
    function XD(e2, t2, n2, r2, o2) {
      let u2 = [];
      const i2 = e2.getValue();
      if (JD(i2)) {
        HD(i2.operator, i2.left.operator) ? u2 = u2.concat(e2.call((e3) => XD(e3, t2, n2, true, o2), "left")) : u2.push(_D(e2.call(t2, "left")));
        const a2 = YD(i2), s2 = (i2.operator === "|>" || i2.type === "NGPipeExpression" || i2.operator === "|" && n2.parser === "__vue_expression") && !WD(n2.originalText, i2.right), c2 = i2.type === "NGPipeExpression" ? "|" : i2.operator, l2 = i2.type === "NGPipeExpression" && i2.arguments.length !== 0 ? _D(RD(ID([jD, ": ", LD(ID([jD, ":", $D(" ")]), e2.map(t2, "arguments").map((e3) => VD(2, _D(e3))))]))) : "", p2 = ID(a2 ? [c2, " ", e2.call(t2, "right"), l2] : [s2 ? MD : "", c2, s2 ? " " : MD, e2.call(t2, "right"), l2]), d2 = e2.getParentNode(), f2 = UD(i2.left), h2 = f2 || !(o2 && i2.type === "LogicalExpression") && d2.type !== i2.type && i2.left.type !== i2.type && i2.right.type !== i2.type;
        u2.push(s2 ? "" : " ", h2 ? _D(p2, {shouldBreak: f2}) : p2), r2 && i2.comments && (u2 = qD(PD(e2, () => ID(u2), n2).parts));
      } else
        u2.push(_D(e2.call(t2)));
      return u2;
    }
    function YD(e2) {
      return e2.type === "LogicalExpression" && (e2.right.type === "ObjectExpression" && e2.right.properties.length !== 0 || (e2.right.type === "ArrayExpression" && e2.right.elements.length !== 0 || !!zD(e2.right)));
    }
    var KD = {printBinaryishExpression: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = e2.getParentNode(), u2 = e2.getParentNode(1), i2 = r2 !== o2.body && (o2.type === "IfStatement" || o2.type === "WhileStatement" || o2.type === "SwitchStatement" || o2.type === "DoWhileStatement"), a2 = XD(e2, n2, t2, false, i2);
      if (i2)
        return ID(a2);
      if ((o2.type === "CallExpression" || o2.type === "OptionalCallExpression") && o2.callee === r2 || o2.type === "UnaryExpression" || (o2.type === "MemberExpression" || o2.type === "OptionalMemberExpression") && !o2.computed)
        return _D(ID([RD(ID([jD, ID(a2)])), jD]));
      const s2 = o2.type === "ReturnStatement" || o2.type === "ThrowStatement" || o2.type === "JSXExpressionContainer" && u2.type === "JSXAttribute" || r2.operator !== "|" && o2.type === "JsExpressionRoot" || r2.type !== "NGPipeExpression" && (o2.type === "NGRoot" && t2.parser === "__ng_binding" || o2.type === "NGMicrosyntaxExpression" && u2.type === "NGMicrosyntax" && u2.body.length === 1) || r2 === o2.body && o2.type === "ArrowFunctionExpression" || r2 !== o2.body && o2.type === "ForStatement" || o2.type === "ConditionalExpression" && u2.type !== "ReturnStatement" && u2.type !== "ThrowStatement" && u2.type !== "CallExpression" && u2.type !== "OptionalCallExpression" || o2.type === "TemplateLiteral", c2 = o2.type === "AssignmentExpression" || o2.type === "VariableDeclarator" || o2.type === "ClassProperty" || o2.type === "FieldDefinition" || o2.type === "TSAbstractClassProperty" || o2.type === "ClassPrivateProperty" || o2.type === "ObjectProperty" || o2.type === "Property", l2 = JD(r2.left) && HD(r2.operator, r2.left.operator);
      if (s2 || YD(r2) && !l2 || !YD(r2) && c2)
        return _D(ID(a2));
      if (a2.length === 0)
        return "";
      const p2 = zD(r2.right), d2 = a2.findIndex((e3) => typeof e3 != "string" && e3.type === "group"), f2 = a2.slice(0, d2 === -1 ? 1 : d2 + 1), h2 = ID(a2.slice(f2.length, p2 ? -1 : void 0)), m2 = Symbol("logicalChain-" + ++GD), g2 = _D(ID([...f2, RD(h2)]), {id: m2});
      if (!p2)
        return g2;
      const D2 = OD(a2);
      return _D(ID([g2, $D(RD(D2), D2, {groupId: m2})]));
    }, shouldInlineLogicalExpression: YD};
    const {builders: {concat: QD, line: ZD, group: ey, indent: ty}} = cn, {hasLeadingOwnLineComment: ny, isBinaryish: ry, isMemberExpressionChain: oy, isStringLiteral: uy} = wc, {shouldInlineLogicalExpression: iy} = KD;
    function ay(e2, t2, n2, r2, o2, u2) {
      if (!r2)
        return t2;
      const i2 = sy(e2, r2, o2, u2);
      return ey(QD([t2, n2, i2]));
    }
    function sy(e2, t2, n2, r2) {
      if (ny(r2.originalText, t2))
        return ty(QD([ZD, n2]));
      return ry(t2) && !iy(t2) || t2.type === "ConditionalExpression" && ry(t2.test) && !iy(t2.test) || t2.type === "StringLiteralTypeAnnotation" || t2.type === "ClassExpression" && t2.decorators && t2.decorators.length || (e2.type === "Identifier" || uy(e2) || e2.type === "MemberExpression") && (uy(t2) || oy(t2)) && r2.parser !== "json" && r2.parser !== "json5" || t2.type === "SequenceExpression" ? ey(ty(QD([ZD, n2]))) : QD([" ", n2]);
    }
    var cy = {printVariableDeclarator: function(e2, t2, n2) {
      const r2 = e2.getValue();
      return ay(r2.id, e2.call(n2, "id"), " =", r2.init, r2.init && e2.call(n2, "init"), t2);
    }, printAssignmentExpression: function(e2, t2, n2) {
      const r2 = e2.getValue();
      return ay(r2.left, e2.call(n2, "left"), QD([" ", r2.operator]), r2.right, e2.call(n2, "right"), t2);
    }, printAssignment: ay, printAssignmentRight: sy};
    const {isNextLineEmpty: ly} = Lt, {builders: {concat: py, join: dy, hardline: fy}} = cn, {classChildNeedsASIProtection: hy, classPropMayCauseASIProblems: my, getLeftSidePathName: gy, hasNakedLeftSide: Dy, isJSXNode: yy, isLastStatement: Ey, isTheOnlyJSXElementInMarkdown: Cy} = wc, {locEnd: by} = ii, {shouldPrintParamsWithoutParens: vy} = Lm;
    function Ay({path: e2, index: t2, bodyNode: n2, isClass: r2}, o2, u2) {
      const i2 = e2.getValue();
      if (!i2)
        return;
      if (i2.type === "EmptyStatement")
        return;
      const a2 = u2(e2), s2 = o2.originalText, c2 = [];
      if (o2.semi || r2 || Cy(o2, e2) || !function(e3, t3) {
        if (e3.getNode().type !== "ExpressionStatement")
          return false;
        return e3.call((e4) => Fy(e4, t3), "expression");
      }(e2, o2) ? c2.push(a2) : i2.comments && i2.comments.some((e3) => e3.leading) ? c2.push(u2(e2, {needsSemi: true})) : c2.push(";", a2), !o2.semi && r2) {
        if (my(e2))
          c2.push(";");
        else if (i2.type === "ClassProperty" || i2.type === "FieldDefinition") {
          const e3 = n2.body[t2 + 1];
          hy(e3) && c2.push(";");
        }
      }
      return ly(s2, i2, by) && !Ey(e2) && c2.push(fy), py(c2);
    }
    function Fy(e2, t2) {
      const n2 = e2.getValue();
      return !!(Rp(e2, t2) || n2.type === "ParenthesizedExpression" || n2.type === "TypeCastExpression" || n2.type === "ArrowFunctionExpression" && !vy(e2, t2) || n2.type === "ArrayExpression" || n2.type === "ArrayPattern" || n2.type === "UnaryExpression" && n2.prefix && (n2.operator === "+" || n2.operator === "-") || n2.type === "TemplateLiteral" || n2.type === "TemplateElement" || yy(n2) || n2.type === "BindExpression" && !n2.object || n2.type === "RegExpLiteral" || n2.type === "Literal" && n2.pattern || n2.type === "Literal" && n2.regex) || !!Dy(n2) && e2.call((e3) => Fy(e3, t2), ...gy(e2, n2));
    }
    var xy = {printStatementSequence: function(e2, t2, n2) {
      const r2 = e2.getNode(), o2 = r2.type === "ClassBody", u2 = e2.map((u3, i2) => Ay({path: e2, index: i2, bodyNode: r2, isClass: o2}, t2, n2)).filter(Boolean);
      return dy(fy, u2);
    }};
    const {printDanglingComments: Sy} = Fa, {isNextLineEmpty: wy} = Lt, {builders: {concat: Ty, hardline: By, indent: Ny}} = cn, {hasDanglingComments: ky} = wc, {locEnd: Py} = ii, {printStatementSequence: Oy} = xy;
    var Iy = {printBlock: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [], u2 = t2.semi ? ";" : "", i2 = e2.call((e3) => Oy(e3, t2, n2), "body");
      r2.type === "StaticBlock" && o2.push("static ");
      const a2 = r2.body.some((e3) => e3.type !== "EmptyStatement"), s2 = r2.directives && r2.directives.length > 0, c2 = e2.getParentNode(), l2 = e2.getParentNode(1);
      return a2 || s2 || ky(r2) || c2.type !== "ArrowFunctionExpression" && c2.type !== "FunctionExpression" && c2.type !== "FunctionDeclaration" && c2.type !== "ObjectMethod" && c2.type !== "ClassMethod" && c2.type !== "ClassPrivateMethod" && c2.type !== "ForStatement" && c2.type !== "WhileStatement" && c2.type !== "DoWhileStatement" && c2.type !== "DoExpression" && (c2.type !== "CatchClause" || l2.finalizer) && c2.type !== "TSModuleDeclaration" && c2.type !== "TSDeclareFunction" && r2.type !== "StaticBlock" ? (o2.push("{"), s2 && e2.each((e3) => {
        o2.push(Ny(Ty([By, n2(e3), u2]))), wy(t2.originalText, e3.getValue(), Py) && o2.push(By);
      }, "directives"), a2 && o2.push(Ny(Ty([By, i2]))), o2.push(Sy(e2, t2)), o2.push(By, "}"), Ty(o2)) : Ty([...o2, "{}"]);
    }};
    const {hasNewline: Ly} = Lt, {builders: {concat: My, join: jy, hardline: _y}} = cn, {isLineComment: Ry, isBlockComment: Vy} = wc, {locStart: $y, locEnd: qy} = ii;
    var Wy = {printComment: function(e2, t2) {
      const n2 = e2.getValue();
      if (Ry(n2))
        return t2.originalText.slice($y(n2), qy(n2)).trimEnd();
      if (Vy(n2)) {
        if (function(e4) {
          const t3 = "*".concat(e4.value, "*").split("\n");
          return t3.length > 1 && t3.every((e5) => e5.trim()[0] === "*");
        }(n2)) {
          const e4 = function(e5) {
            const t3 = e5.value.split("\n");
            return My(["/*", jy(_y, t3.map((e6, n3) => n3 === 0 ? e6.trimEnd() : " " + (n3 < t3.length - 1 ? e6.trim() : e6.trimStart()))), "*/"]);
          }(n2);
          return n2.trailing && !Ly(t2.originalText, $y(n2), {backwards: true}) ? My([_y, e4]) : e4;
        }
        const e3 = qy(n2), r2 = t2.originalText.slice(e3 - 3, e3) === "*-/";
        return "/*" + n2.value + (r2 ? "*-/" : "*/");
      }
      throw new Error("Not a comment: " + JSON.stringify(n2));
    }};
    const {hasNewline: Uy, hasNewlineInRange: Jy, getLast: zy, printString: Hy, printNumber: Gy, isNextLineEmpty: Xy} = Lt, {builders: {concat: Yy, join: Ky, line: Qy, hardline: Zy, softline: eE, literalline: tE, group: nE, indent: rE, align: oE, conditionalGroup: uE, ifBreak: iE}, utils: {isEmpty: aE}} = cn, {insertPragma: sE} = Sp, {printHtmlBinding: cE, isVueEventBindingExpression: lE} = zp, {getFunctionParameters: pE, getCallArguments: dE, getParentExportDeclaration: fE, getTypeScriptMappedTypeModifier: hE, hasDanglingComments: mE, hasFlowShorthandAnnotationComment: gE, hasLeadingOwnLineComment: DE, hasNewlineBetweenOrAfterDecorators: yE, hasNgSideEffect: EE, hasPrettierIgnore: CE, hasTrailingComment: bE, isExportDeclaration: vE, isFunctionNotation: AE, isGetterOrSetter: FE, isLiteral: xE, isNgForOf: SE, isObjectType: wE, isObjectTypePropertyAFunction: TE, isTheOnlyJSXElementInMarkdown: BE, isTSXFile: NE, isBlockComment: kE, needsHardlineAfterDanglingComment: PE, rawText: OE, shouldPrintComma: IE} = wc, {locStart: LE, locEnd: ME} = ii, {printOptionalToken: jE, printBindExpressionCallee: _E, printTypeScriptModifiers: RE, printDecorators: VE, printFlowDeclaration: $E, adjustClause: qE} = nd, {printImportDeclaration: WE, printExportDeclaration: UE, printExportAllDeclaration: JE, printModuleSpecifier: zE} = bd, {printFunctionParameters: HE} = af, {printTemplateLiteral: GE} = Fl, {printArray: XE, printArrayItems: YE} = Tf, {printObject: KE} = Kf, {printTypeAnnotation: QE, shouldHugType: ZE} = df, {printJsxElement: eC, printJsxAttribute: tC, printJsxOpeningElement: nC, printJsxClosingElement: rC, printJsxOpeningClosingFragment: oC, printJsxExpressionContainer: uC, printJsxEmptyExpression: iC, printJsxSpreadAttribute: aC, printJsxSpreadChild: sC} = Ph, {printClass: cC, printClassMethod: lC} = eg, {printTypeParameters: pC} = Yh, {printPropertyKey: dC} = am, {printFunctionDeclaration: fC, printArrowFunctionExpression: hC, printMethod: mC, printReturnAndThrowArgument: gC} = Lm, {printCallExpression: DC} = ED, {printInterface: yC} = kD, {printVariableDeclarator: EC, printAssignmentExpression: CC, printAssignment: bC, printAssignmentRight: vC} = cy, {printBinaryishExpression: AC} = KD, {printStatementSequence: FC} = xy, {printMemberExpression: xC} = Ig, {printBlock: SC} = Iy, {printComment: wC} = Wy;
    function TC(e2, t2, n2) {
      const r2 = OE(e2), o2 = n2 || e2.type === "DirectiveLiteral";
      return Hy(r2, t2, o2);
    }
    function BC(e2) {
      const t2 = e2.flags.split("").sort().join("");
      return "/".concat(e2.pattern, "/").concat(t2);
    }
    var NC = {preprocess: Hp, print: function(e2, t2, n2, r2) {
      const o2 = e2.getValue();
      let u2 = false;
      const i2 = function(e3, t3, n3, r3) {
        const o3 = e3.getValue(), u3 = t3.semi ? ";" : "";
        if (!o3)
          return "";
        if (typeof o3 == "string")
          return o3;
        const i3 = cE(e3, t3, n3);
        if (i3)
          return i3;
        let a3 = [];
        switch (o3.type) {
          case "JsExpressionRoot":
            return e3.call(n3, "node");
          case "JsonRoot":
            return Yy([e3.call(n3, "node"), Zy]);
          case "File":
            return o3.program && o3.program.interpreter && a3.push(e3.call((e4) => e4.call(n3, "interpreter"), "program")), a3.push(e3.call(n3, "program")), Yy(a3);
          case "Program": {
            const r4 = !o3.body.every(({type: e4}) => e4 === "EmptyStatement") || o3.comments;
            if (o3.directives) {
              const i4 = o3.directives.length;
              e3.each((e4, o4) => {
                a3.push(n3(e4), u3, Zy), (o4 < i4 - 1 || r4) && Xy(t3.originalText, e4.getValue(), ME) && a3.push(Zy);
              }, "directives");
            }
            return a3.push(e3.call((e4) => FC(e4, t3, n3), "body")), a3.push(Fa.printDanglingComments(e3, t3, true)), r4 && a3.push(Zy), Yy(a3);
          }
          case "EmptyStatement":
            return "";
          case "ExpressionStatement":
            if (o3.directive)
              return Yy([TC(o3.expression, t3, true), u3]);
            if (t3.parser === "__vue_event_binding") {
              const t4 = e3.getParentNode();
              if (t4.type === "Program" && t4.body.length === 1 && t4.body[0] === o3)
                return Yy([e3.call(n3, "expression"), lE(o3.expression) ? ";" : ""]);
            }
            return Yy([e3.call(n3, "expression"), BE(t3, e3) ? "" : u3]);
          case "ParenthesizedExpression":
            return !o3.expression.comments ? Yy(["(", e3.call(n3, "expression"), ")"]) : nE(Yy(["(", rE(Yy([eE, e3.call(n3, "expression")])), eE, ")"]));
          case "AssignmentExpression":
            return CC(e3, t3, n3);
          case "VariableDeclarator":
            return EC(e3, t3, n3);
          case "BinaryExpression":
          case "LogicalExpression":
          case "NGPipeExpression":
            return AC(e3, t3, n3);
          case "AssignmentPattern":
            return Yy([e3.call(n3, "left"), " = ", e3.call(n3, "right")]);
          case "TSTypeAssertion": {
            const t4 = !(o3.expression.type === "ArrayExpression" || o3.expression.type === "ObjectExpression"), r4 = nE(Yy(["<", rE(Yy([eE, e3.call(n3, "typeAnnotation")])), eE, ">"])), u4 = Yy([iE("("), rE(Yy([eE, e3.call(n3, "expression")])), eE, iE(")")]);
            return t4 ? uE([Yy([r4, e3.call(n3, "expression")]), Yy([r4, nE(u4, {shouldBreak: true})]), Yy([r4, e3.call(n3, "expression")])]) : nE(Yy([r4, e3.call(n3, "expression")]));
          }
          case "OptionalMemberExpression":
          case "MemberExpression":
            return xC(e3, t3, n3);
          case "MetaProperty":
            return Yy([e3.call(n3, "meta"), ".", e3.call(n3, "property")]);
          case "BindExpression":
            return o3.object && a3.push(e3.call(n3, "object")), a3.push(nE(rE(Yy([eE, _E(e3, t3, n3)])))), Yy(a3);
          case "Identifier":
            return Yy([o3.name, jE(e3), QE(e3, t3, n3)]);
          case "V8IntrinsicIdentifier":
            return Yy(["%", o3.name]);
          case "SpreadElement":
          case "SpreadElementPattern":
          case "SpreadProperty":
          case "SpreadPropertyPattern":
          case "RestElement":
          case "ObjectTypeSpreadProperty":
            return Yy(["...", e3.call(n3, "argument"), QE(e3, t3, n3)]);
          case "FunctionDeclaration":
          case "FunctionExpression":
            return a3.push(fC(e3, n3, t3, r3 && r3.expandLastArg && dE(e3.getParentNode()).length > 1)), o3.body || a3.push(u3), Yy(a3);
          case "ArrowFunctionExpression":
            return hC(e3, t3, n3, r3);
          case "YieldExpression":
            return a3.push("yield"), o3.delegate && a3.push("*"), o3.argument && a3.push(" ", e3.call(n3, "argument")), Yy(a3);
          case "AwaitExpression": {
            a3.push("await"), o3.argument && a3.push(" ", e3.call(n3, "argument"));
            const t4 = e3.getParentNode();
            return (t4.type === "CallExpression" || t4.type === "OptionalCallExpression") && t4.callee === o3 || (t4.type === "MemberExpression" || t4.type === "OptionalMemberExpression") && t4.object === o3 ? nE(Yy([rE(Yy([eE, Yy(a3)])), eE])) : Yy(a3);
          }
          case "TSExportAssignment":
            return Yy(["export = ", e3.call(n3, "expression"), u3]);
          case "ExportDefaultDeclaration":
          case "ExportNamedDeclaration":
          case "DeclareExportDeclaration":
            return UE(e3, t3, n3);
          case "ExportAllDeclaration":
          case "DeclareExportAllDeclaration":
            return JE(e3, t3, n3);
          case "ImportDeclaration":
            return WE(e3, t3, n3);
          case "ImportSpecifier":
          case "ExportSpecifier":
          case "ImportNamespaceSpecifier":
          case "ExportNamespaceSpecifier":
          case "ImportDefaultSpecifier":
          case "ExportDefaultSpecifier":
            return zE(e3, t3, n3);
          case "ImportAttribute":
            return Yy([e3.call(n3, "key"), ": ", e3.call(n3, "value")]);
          case "Import":
            return "import";
          case "TSModuleBlock":
          case "BlockStatement":
          case "StaticBlock":
            return SC(e3, t3, n3);
          case "ThrowStatement":
          case "ReturnStatement":
            return Yy([o3.type === "ReturnStatement" ? "return" : "throw", gC(e3, t3, n3)]);
          case "NewExpression":
          case "ImportExpression":
          case "OptionalCallExpression":
          case "CallExpression":
            return DC(e3, t3, n3);
          case "ObjectTypeInternalSlot":
            return Yy([o3.static ? "static " : "", "[[", e3.call(n3, "id"), "]]", jE(e3), o3.method ? "" : ": ", e3.call(n3, "value")]);
          case "ObjectExpression":
          case "ObjectPattern":
          case "ObjectTypeAnnotation":
          case "TSInterfaceBody":
          case "TSTypeLiteral":
          case "RecordExpression":
            return KE(e3, t3, n3);
          case "ObjectProperty":
          case "Property":
            return o3.method || o3.kind === "get" || o3.kind === "set" ? mC(e3, t3, n3) : (o3.shorthand ? a3.push(e3.call(n3, "value")) : a3.push(bC(o3.key, dC(e3, t3, n3), ":", o3.value, e3.call(n3, "value"), t3)), Yy(a3));
          case "ClassMethod":
          case "ClassPrivateMethod":
          case "MethodDefinition":
          case "TSAbstractMethodDefinition":
          case "TSDeclareMethod":
            return lC(e3, t3, n3);
          case "ObjectMethod":
            return mC(e3, t3, n3);
          case "Decorator":
            return Yy(["@", e3.call(n3, "expression"), e3.call(n3, "callee")]);
          case "ArrayExpression":
          case "ArrayPattern":
          case "TupleExpression":
            return XE(e3, t3, n3);
          case "SequenceExpression": {
            const t4 = e3.getParentNode(0);
            if (t4.type === "ExpressionStatement" || t4.type === "ForStatement") {
              const t5 = [];
              return e3.each((e4) => {
                e4.getName() === 0 ? t5.push(n3(e4)) : t5.push(",", rE(Yy([Qy, n3(e4)])));
              }, "expressions"), nE(Yy(t5));
            }
            return nE(Yy([Ky(Yy([",", Qy]), e3.map(n3, "expressions"))]));
          }
          case "ThisExpression":
            return "this";
          case "Super":
            return "super";
          case "NullLiteral":
            return "null";
          case "RegExpLiteral":
            return BC(o3);
          case "NumericLiteral":
            return Gy(o3.extra.raw);
          case "DecimalLiteral":
            return Gy(o3.value) + "m";
          case "BigIntLiteral":
            return (o3.bigint || o3.extra.raw).toLowerCase();
          case "BooleanLiteral":
          case "StringLiteral":
          case "Literal":
            return o3.regex ? BC(o3.regex) : o3.bigint ? o3.raw.toLowerCase() : typeof o3.value == "number" ? Gy(o3.raw) : typeof o3.value != "string" ? "" + o3.value : TC(o3, t3);
          case "Directive":
            return e3.call(n3, "value");
          case "DirectiveLiteral":
            return TC(o3, t3);
          case "UnaryExpression":
            return a3.push(o3.operator), /[a-z]$/.test(o3.operator) && a3.push(" "), o3.argument.comments && o3.argument.comments.length > 0 ? a3.push(nE(Yy(["(", rE(Yy([eE, e3.call(n3, "argument")])), eE, ")"]))) : a3.push(e3.call(n3, "argument")), Yy(a3);
          case "UpdateExpression":
            return a3.push(e3.call(n3, "argument"), o3.operator), o3.prefix && a3.reverse(), Yy(a3);
          case "ConditionalExpression":
            return Md(e3, t3, n3, {beforeParts: () => [e3.call(n3, "test")], afterParts: (e4) => [e4 ? eE : ""], shouldCheckJsx: true, conditionalNodeType: "ConditionalExpression", consequentNodePropertyName: "consequent", alternateNodePropertyName: "alternate", testNodePropertyNames: ["test"]});
          case "VariableDeclaration": {
            const t4 = e3.map((e4) => n3(e4), "declarations"), r4 = e3.getParentNode(), i4 = r4.type === "ForStatement" || r4.type === "ForInStatement" || r4.type === "ForOfStatement", s3 = o3.declarations.some((e4) => e4.init);
            let c3;
            return t4.length !== 1 || o3.declarations[0].comments ? t4.length > 0 && (c3 = rE(t4[0])) : c3 = t4[0], a3 = [o3.declare ? "declare " : "", o3.kind, c3 ? Yy([" ", c3]) : "", rE(Yy(t4.slice(1).map((e4) => Yy([",", s3 && !i4 ? Zy : Qy, e4]))))], i4 && r4.body !== o3 || a3.push(u3), nE(Yy(a3));
          }
          case "TSTypeAliasDeclaration": {
            o3.declare && a3.push("declare ");
            const r4 = vC(o3.id, o3.typeAnnotation, o3.typeAnnotation && e3.call(n3, "typeAnnotation"), t3);
            return a3.push("type ", e3.call(n3, "id"), e3.call(n3, "typeParameters"), " =", r4, u3), nE(Yy(a3));
          }
          case "WithStatement":
            return nE(Yy(["with (", e3.call(n3, "object"), ")", qE(o3.body, e3.call(n3, "body"))]));
          case "IfStatement": {
            const r4 = qE(o3.consequent, e3.call(n3, "consequent")), u4 = nE(Yy(["if (", nE(Yy([rE(Yy([eE, e3.call(n3, "test")])), eE])), ")", r4]));
            if (a3.push(u4), o3.alternate) {
              const r5 = bE(o3.consequent) && o3.consequent.comments.some((e4) => e4.trailing && !kE(e4)) || PE(o3), u5 = o3.consequent.type === "BlockStatement" && !r5;
              a3.push(u5 ? " " : Zy), mE(o3) && a3.push(Fa.printDanglingComments(e3, t3, true), r5 ? Zy : " "), a3.push("else", nE(qE(o3.alternate, e3.call(n3, "alternate"), o3.alternate.type === "IfStatement")));
            }
            return Yy(a3);
          }
          case "ForStatement": {
            const r4 = qE(o3.body, e3.call(n3, "body")), u4 = Fa.printDanglingComments(e3, t3, true), i4 = u4 ? Yy([u4, eE]) : "";
            return o3.init || o3.test || o3.update ? Yy([i4, nE(Yy(["for (", nE(Yy([rE(Yy([eE, e3.call(n3, "init"), ";", Qy, e3.call(n3, "test"), ";", Qy, e3.call(n3, "update")])), eE])), ")", r4]))]) : Yy([i4, nE(Yy(["for (;;)", r4]))]);
          }
          case "WhileStatement":
            return nE(Yy(["while (", nE(Yy([rE(Yy([eE, e3.call(n3, "test")])), eE])), ")", qE(o3.body, e3.call(n3, "body"))]));
          case "ForInStatement":
            return nE(Yy(["for (", e3.call(n3, "left"), " in ", e3.call(n3, "right"), ")", qE(o3.body, e3.call(n3, "body"))]));
          case "ForOfStatement":
            return nE(Yy(["for", o3.await ? " await" : "", " (", e3.call(n3, "left"), " of ", e3.call(n3, "right"), ")", qE(o3.body, e3.call(n3, "body"))]));
          case "DoWhileStatement": {
            const t4 = qE(o3.body, e3.call(n3, "body")), r4 = nE(Yy(["do", t4]));
            return a3 = [r4], o3.body.type === "BlockStatement" ? a3.push(" ") : a3.push(Zy), a3.push("while ("), a3.push(nE(Yy([rE(Yy([eE, e3.call(n3, "test")])), eE])), ")", u3), Yy(a3);
          }
          case "DoExpression":
            return Yy(["do ", e3.call(n3, "body")]);
          case "BreakStatement":
            return a3.push("break"), o3.label && a3.push(" ", e3.call(n3, "label")), a3.push(u3), Yy(a3);
          case "ContinueStatement":
            return a3.push("continue"), o3.label && a3.push(" ", e3.call(n3, "label")), a3.push(u3), Yy(a3);
          case "LabeledStatement":
            return o3.body.type === "EmptyStatement" ? Yy([e3.call(n3, "label"), ":;"]) : Yy([e3.call(n3, "label"), ": ", e3.call(n3, "body")]);
          case "TryStatement":
            return Yy(["try ", e3.call(n3, "block"), o3.handler ? Yy([" ", e3.call(n3, "handler")]) : "", o3.finalizer ? Yy([" finally ", e3.call(n3, "finalizer")]) : ""]);
          case "CatchClause":
            if (o3.param) {
              const r4 = o3.param.comments && o3.param.comments.some((e4) => !kE(e4) || e4.leading && Uy(t3.originalText, ME(e4)) || e4.trailing && Uy(t3.originalText, LE(e4), {backwards: true})), u4 = e3.call(n3, "param");
              return Yy(["catch ", Yy(r4 ? ["(", rE(Yy([eE, u4])), eE, ") "] : ["(", u4, ") "]), e3.call(n3, "body")]);
            }
            return Yy(["catch ", e3.call(n3, "body")]);
          case "SwitchStatement":
            return Yy([nE(Yy(["switch (", rE(Yy([eE, e3.call(n3, "discriminant")])), eE, ")"])), " {", o3.cases.length > 0 ? rE(Yy([Zy, Ky(Zy, e3.map((e4) => {
              const r4 = e4.getValue();
              return Yy([e4.call(n3), o3.cases.indexOf(r4) !== o3.cases.length - 1 && Xy(t3.originalText, r4, ME) ? Zy : ""]);
            }, "cases"))])) : "", Zy, "}"]);
          case "SwitchCase": {
            o3.test ? a3.push("case ", e3.call(n3, "test"), ":") : a3.push("default:");
            const r4 = o3.consequent.filter((e4) => e4.type !== "EmptyStatement");
            if (r4.length > 0) {
              const o4 = e3.call((e4) => FC(e4, t3, n3), "consequent");
              a3.push(r4.length === 1 && r4[0].type === "BlockStatement" ? Yy([" ", o4]) : rE(Yy([Zy, o4])));
            }
            return Yy(a3);
          }
          case "DebuggerStatement":
            return Yy(["debugger", u3]);
          case "JSXAttribute":
            return tC(e3, t3, n3);
          case "JSXIdentifier":
            return "" + o3.name;
          case "JSXNamespacedName":
            return Ky(":", [e3.call(n3, "namespace"), e3.call(n3, "name")]);
          case "JSXMemberExpression":
            return Ky(".", [e3.call(n3, "object"), e3.call(n3, "property")]);
          case "TSQualifiedName":
            return Ky(".", [e3.call(n3, "left"), e3.call(n3, "right")]);
          case "JSXSpreadAttribute":
            return aC(e3, t3, n3);
          case "JSXSpreadChild":
            return sC(e3, t3, n3);
          case "JSXExpressionContainer":
            return uC(e3, t3, n3);
          case "JSXFragment":
          case "JSXElement":
            return eC(e3, t3, n3);
          case "JSXOpeningElement":
            return nC(e3, t3, n3);
          case "JSXClosingElement":
            return rC(e3, t3, n3);
          case "JSXOpeningFragment":
          case "JSXClosingFragment":
            return oC(e3, t3);
          case "JSXText":
            throw new Error("JSXTest should be handled by JSXElement");
          case "JSXEmptyExpression":
            return iC(e3, t3);
          case "ClassBody":
            return o3.comments || o3.body.length !== 0 ? Yy(["{", o3.body.length > 0 ? rE(Yy([Zy, e3.call((e4) => FC(e4, t3, n3), "body")])) : Fa.printDanglingComments(e3, t3), Zy, "}"]) : "{}";
          case "ClassProperty":
          case "FieldDefinition":
          case "TSAbstractClassProperty":
          case "ClassPrivateProperty":
            return o3.decorators && o3.decorators.length !== 0 && a3.push(VE(e3, t3, n3)), o3.accessibility && a3.push(o3.accessibility + " "), o3.declare && a3.push("declare "), o3.static && a3.push("static "), (o3.type === "TSAbstractClassProperty" || o3.abstract) && a3.push("abstract "), o3.readonly && a3.push("readonly "), o3.variance && a3.push(e3.call(n3, "variance")), a3.push(dC(e3, t3, n3), jE(e3), QE(e3, t3, n3)), o3.value && a3.push(" =", vC(o3.key, o3.value, e3.call(n3, "value"), t3)), a3.push(u3), nE(Yy(a3));
          case "ClassDeclaration":
          case "ClassExpression":
            return o3.declare && a3.push("declare "), a3.push(cC(e3, t3, n3)), Yy(a3);
          case "TSInterfaceHeritage":
          case "TSExpressionWithTypeArguments":
            return a3.push(e3.call(n3, "expression")), o3.typeParameters && a3.push(e3.call(n3, "typeParameters")), Yy(a3);
          case "TemplateElement":
            return Ky(tE, o3.value.raw.split(/\r?\n/g));
          case "TSTemplateLiteralType":
          case "TemplateLiteral":
            return GE(e3, n3, t3);
          case "TaggedTemplateExpression":
            return Yy([e3.call(n3, "tag"), e3.call(n3, "typeParameters"), e3.call(n3, "quasi")]);
          case "Node":
          case "Printable":
          case "SourceLocation":
          case "Position":
          case "Statement":
          case "Function":
          case "Pattern":
          case "Expression":
          case "Declaration":
          case "Specifier":
          case "NamedSpecifier":
          case "Comment":
          case "MemberTypeAnnotation":
          case "Type":
            throw new Error("unprintable type: " + JSON.stringify(o3.type));
          case "TypeAnnotation":
          case "TSTypeAnnotation":
            return o3.typeAnnotation ? e3.call(n3, "typeAnnotation") : "";
          case "TSNamedTupleMember":
            return Yy([e3.call(n3, "label"), o3.optional ? "?" : "", ": ", e3.call(n3, "elementType")]);
          case "TSTupleType":
          case "TupleTypeAnnotation": {
            const r4 = o3.type === "TSTupleType" ? "elementTypes" : "types", u4 = o3[r4].length > 0 && zy(o3[r4]).type === "TSRestType";
            return nE(Yy(["[", rE(Yy([eE, YE(e3, t3, r4, n3)])), iE(IE(t3, "all") && !u4 ? "," : ""), Fa.printDanglingComments(e3, t3, true), eE, "]"]));
          }
          case "ExistsTypeAnnotation":
            return "*";
          case "EmptyTypeAnnotation":
            return "empty";
          case "MixedTypeAnnotation":
            return "mixed";
          case "ArrayTypeAnnotation":
            return Yy([e3.call(n3, "elementType"), "[]"]);
          case "BooleanLiteralTypeAnnotation":
            return "" + o3.value;
          case "DeclareClass":
            return $E(e3, cC(e3, t3, n3));
          case "TSDeclareFunction":
            return Yy([o3.declare ? "declare " : "", fC(e3, n3, t3), u3]);
          case "DeclareFunction":
            return $E(e3, Yy(["function ", e3.call(n3, "id"), o3.predicate ? " " : "", e3.call(n3, "predicate"), u3]));
          case "DeclareModule":
            return $E(e3, Yy(["module ", e3.call(n3, "id"), " ", e3.call(n3, "body")]));
          case "DeclareModuleExports":
            return $E(e3, Yy(["module.exports", ": ", e3.call(n3, "typeAnnotation"), u3]));
          case "DeclareVariable":
            return $E(e3, Yy(["var ", e3.call(n3, "id"), u3]));
          case "DeclareOpaqueType":
          case "OpaqueType":
            return a3.push("opaque type ", e3.call(n3, "id"), e3.call(n3, "typeParameters")), o3.supertype && a3.push(": ", e3.call(n3, "supertype")), o3.impltype && a3.push(" = ", e3.call(n3, "impltype")), a3.push(u3), o3.type === "DeclareOpaqueType" ? $E(e3, Yy(a3)) : Yy(a3);
          case "EnumDeclaration":
            return Yy(["enum ", e3.call(n3, "id"), " ", e3.call(n3, "body")]);
          case "EnumBooleanBody":
          case "EnumNumberBody":
          case "EnumStringBody":
          case "EnumSymbolBody":
            if (o3.type === "EnumSymbolBody" || o3.explicitType) {
              let e4 = null;
              switch (o3.type) {
                case "EnumBooleanBody":
                  e4 = "boolean";
                  break;
                case "EnumNumberBody":
                  e4 = "number";
                  break;
                case "EnumStringBody":
                  e4 = "string";
                  break;
                case "EnumSymbolBody":
                  e4 = "symbol";
              }
              a3.push("of ", e4, " ");
            }
            if (o3.members.length !== 0 || o3.hasUnknownMembers) {
              const r4 = o3.members.length ? [Zy, YE(e3, t3, "members", n3), o3.hasUnknownMembers || IE(t3) ? "," : ""] : [];
              a3.push(nE(Yy(["{", rE(Yy([...r4, ...o3.hasUnknownMembers ? [Zy, "..."] : []])), Fa.printDanglingComments(e3, t3, true), Zy, "}"])));
            } else
              a3.push(nE(Yy(["{", Fa.printDanglingComments(e3, t3), eE, "}"])));
            return Yy(a3);
          case "EnumBooleanMember":
          case "EnumNumberMember":
          case "EnumStringMember":
            return Yy([e3.call(n3, "id"), " = ", typeof o3.init == "object" ? e3.call(n3, "init") : String(o3.init)]);
          case "EnumDefaultedMember":
            return e3.call(n3, "id");
          case "FunctionTypeAnnotation":
          case "TSFunctionType": {
            const r4 = e3.getParentNode(0), u4 = e3.getParentNode(1), i4 = e3.getParentNode(2);
            let s3 = o3.type === "TSFunctionType" || !((r4.type === "ObjectTypeProperty" || r4.type === "ObjectTypeInternalSlot") && !r4.variance && !r4.optional && LE(r4) === LE(o3) || r4.type === "ObjectTypeCallProperty" || i4 && i4.type === "DeclareFunction"), c3 = s3 && (r4.type === "TypeAnnotation" || r4.type === "TSTypeAnnotation");
            const l2 = c3 && s3 && (r4.type === "TypeAnnotation" || r4.type === "TSTypeAnnotation") && u4.type === "ArrowFunctionExpression";
            return TE(r4) && (s3 = true, c3 = true), l2 && a3.push("("), a3.push(HE(e3, n3, t3, false, true)), (o3.returnType || o3.predicate || o3.typeAnnotation) && a3.push(s3 ? " => " : ": ", e3.call(n3, "returnType"), e3.call(n3, "predicate"), e3.call(n3, "typeAnnotation")), l2 && a3.push(")"), nE(Yy(a3));
          }
          case "TSRestType":
            return Yy(["...", e3.call(n3, "typeAnnotation")]);
          case "TSOptionalType":
            return Yy([e3.call(n3, "typeAnnotation"), "?"]);
          case "FunctionTypeParam": {
            const t4 = o3.name ? e3.call(n3, "name") : e3.getParentNode().this === o3 ? "this" : "";
            return Yy([t4, jE(e3), t4 ? ": " : "", e3.call(n3, "typeAnnotation")]);
          }
          case "DeclareInterface":
          case "InterfaceDeclaration":
          case "InterfaceTypeAnnotation":
          case "TSInterfaceDeclaration":
            return yC(e3, t3, n3);
          case "ClassImplements":
          case "InterfaceExtends":
            return Yy([e3.call(n3, "id"), e3.call(n3, "typeParameters")]);
          case "TSClassImplements":
            return Yy([e3.call(n3, "expression"), e3.call(n3, "typeParameters")]);
          case "TSIntersectionType":
          case "IntersectionTypeAnnotation": {
            const t4 = e3.map(n3, "types"), r4 = [];
            let u4 = false;
            for (let e4 = 0; e4 < t4.length; ++e4)
              e4 === 0 ? r4.push(t4[e4]) : wE(o3.types[e4 - 1]) && wE(o3.types[e4]) ? r4.push(Yy([" & ", u4 ? rE(t4[e4]) : t4[e4]])) : wE(o3.types[e4 - 1]) || wE(o3.types[e4]) ? (e4 > 1 && (u4 = true), r4.push(" & ", e4 > 1 ? rE(t4[e4]) : t4[e4])) : r4.push(rE(Yy([" &", Qy, t4[e4]])));
            return nE(Yy(r4));
          }
          case "TSUnionType":
          case "UnionTypeAnnotation": {
            const r4 = e3.getParentNode(), u4 = !(r4.type === "TypeParameterInstantiation" || r4.type === "TSTypeParameterInstantiation" || r4.type === "GenericTypeAnnotation" || r4.type === "TSTypeReference" || r4.type === "TSTypeAssertion" || r4.type === "TupleTypeAnnotation" || r4.type === "TSTupleType" || r4.type === "FunctionTypeParam" && !r4.name && e3.getParentNode(1).this !== r4 || (r4.type === "TypeAlias" || r4.type === "VariableDeclarator" || r4.type === "TSTypeAliasDeclaration") && DE(t3.originalText, o3)), i4 = ZE(o3), a4 = e3.map((e4) => {
              let r5 = e4.call(n3);
              return i4 || (r5 = oE(2, r5)), Fa.printComments(e4, () => r5, t3);
            }, "types");
            if (i4)
              return Ky(" | ", a4);
            const s3 = u4 && !DE(t3.originalText, o3), c3 = Yy([iE(Yy([s3 ? Qy : "", "| "])), Ky(Yy([Qy, "| "]), a4)]);
            return Rp(e3, t3) ? nE(Yy([rE(c3), eE])) : r4.type === "TupleTypeAnnotation" && r4.types.length > 1 || r4.type === "TSTupleType" && r4.elementTypes.length > 1 ? nE(Yy([rE(Yy([iE(Yy(["(", eE])), c3])), eE, iE(")")])) : nE(u4 ? rE(c3) : c3);
          }
          case "NullableTypeAnnotation":
            return Yy(["?", e3.call(n3, "typeAnnotation")]);
          case "Variance": {
            const {kind: e4} = o3;
            return ta.ok(e4 === "plus" || e4 === "minus"), e4 === "plus" ? "+" : "-";
          }
          case "ObjectTypeCallProperty":
            return o3.static && a3.push("static "), a3.push(e3.call(n3, "value")), Yy(a3);
          case "ObjectTypeIndexer":
            return Yy([o3.variance ? e3.call(n3, "variance") : "", "[", e3.call(n3, "id"), o3.id ? ": " : "", e3.call(n3, "key"), "]: ", e3.call(n3, "value")]);
          case "ObjectTypeProperty": {
            let r4 = "";
            return o3.proto ? r4 = "proto " : o3.static && (r4 = "static "), Yy([r4, FE(o3) ? o3.kind + " " : "", o3.variance ? e3.call(n3, "variance") : "", dC(e3, t3, n3), jE(e3), AE(o3) ? "" : ": ", e3.call(n3, "value")]);
          }
          case "QualifiedTypeIdentifier":
            return Yy([e3.call(n3, "qualification"), ".", e3.call(n3, "id")]);
          case "StringLiteralTypeAnnotation":
            return TC(o3, t3);
          case "NumberLiteralTypeAnnotation":
            ta.strictEqual(typeof o3.value, "number");
          case "BigIntLiteralTypeAnnotation":
            return o3.extra != null ? Gy(o3.extra.raw) : Gy(o3.raw);
          case "DeclareTypeAlias":
          case "TypeAlias": {
            (o3.type === "DeclareTypeAlias" || o3.declare) && a3.push("declare ");
            const r4 = vC(o3.id, o3.right, e3.call(n3, "right"), t3);
            return a3.push("type ", e3.call(n3, "id"), e3.call(n3, "typeParameters"), " =", r4, u3), nE(Yy(a3));
          }
          case "TypeCastExpression":
            return Yy(["(", e3.call(n3, "expression"), QE(e3, t3, n3), ")"]);
          case "TypeParameterDeclaration":
          case "TypeParameterInstantiation": {
            const r4 = pC(e3, t3, n3, "params");
            if (t3.parser === "flow") {
              const e4 = LE(o3), n4 = ME(o3), u4 = t3.originalText.lastIndexOf("/*", e4), i4 = t3.originalText.indexOf("*/", n4);
              if (u4 !== -1 && i4 !== -1) {
                const e5 = t3.originalText.slice(u4 + 2, i4).trim();
                if (e5.startsWith("::") && !e5.includes("/*") && !e5.includes("*/"))
                  return Yy(["/*:: ", r4, " */"]);
              }
            }
            return r4;
          }
          case "TSTypeParameterDeclaration":
          case "TSTypeParameterInstantiation":
            return pC(e3, t3, n3, "params");
          case "TSTypeParameter":
          case "TypeParameter": {
            const r4 = e3.getParentNode();
            if (r4.type === "TSMappedType")
              return a3.push("[", e3.call(n3, "name")), o3.constraint && a3.push(" in ", e3.call(n3, "constraint")), r4.nameType && a3.push(" as ", e3.callParent((e4) => e4.call(n3, "nameType"))), a3.push("]"), Yy(a3);
            o3.variance && a3.push(e3.call(n3, "variance")), a3.push(e3.call(n3, "name")), o3.bound && (a3.push(": "), a3.push(e3.call(n3, "bound"))), o3.constraint && a3.push(" extends ", e3.call(n3, "constraint")), o3.default && a3.push(" = ", e3.call(n3, "default"));
            const u4 = e3.getNode(2);
            return pE(r4).length === 1 && NE(t3) && !o3.constraint && u4.type === "ArrowFunctionExpression" && a3.push(","), Yy(a3);
          }
          case "TypeofTypeAnnotation":
            return Yy(["typeof ", e3.call(n3, "argument")]);
          case "InferredPredicate":
            return "%checks";
          case "DeclaredPredicate":
            return Yy(["%checks(", e3.call(n3, "value"), ")"]);
          case "TSAbstractKeyword":
            return "abstract";
          case "AnyTypeAnnotation":
          case "TSAnyKeyword":
            return "any";
          case "TSAsyncKeyword":
            return "async";
          case "BooleanTypeAnnotation":
          case "TSBooleanKeyword":
            return "boolean";
          case "BigIntTypeAnnotation":
          case "TSBigIntKeyword":
            return "bigint";
          case "TSConstKeyword":
            return "const";
          case "TSDeclareKeyword":
            return "declare";
          case "TSExportKeyword":
            return "export";
          case "NullLiteralTypeAnnotation":
          case "TSNullKeyword":
            return "null";
          case "TSNeverKeyword":
            return "never";
          case "NumberTypeAnnotation":
          case "TSNumberKeyword":
            return "number";
          case "TSObjectKeyword":
            return "object";
          case "TSProtectedKeyword":
            return "protected";
          case "TSPrivateKeyword":
            return "private";
          case "TSPublicKeyword":
            return "public";
          case "TSReadonlyKeyword":
            return "readonly";
          case "SymbolTypeAnnotation":
          case "TSSymbolKeyword":
            return "symbol";
          case "TSStaticKeyword":
            return "static";
          case "StringTypeAnnotation":
          case "TSStringKeyword":
            return "string";
          case "TSUndefinedKeyword":
            return "undefined";
          case "TSUnknownKeyword":
            return "unknown";
          case "VoidTypeAnnotation":
          case "TSVoidKeyword":
            return "void";
          case "TSAsExpression":
            return Yy([e3.call(n3, "expression"), " as ", e3.call(n3, "typeAnnotation")]);
          case "TSArrayType":
            return Yy([e3.call(n3, "elementType"), "[]"]);
          case "TSPropertySignature":
            return o3.export && a3.push("export "), o3.accessibility && a3.push(o3.accessibility + " "), o3.static && a3.push("static "), o3.readonly && a3.push("readonly "), a3.push(dC(e3, t3, n3), jE(e3)), o3.typeAnnotation && (a3.push(": "), a3.push(e3.call(n3, "typeAnnotation"))), o3.initializer && a3.push(" = ", e3.call(n3, "initializer")), Yy(a3);
          case "TSParameterProperty":
            return o3.accessibility && a3.push(o3.accessibility + " "), o3.export && a3.push("export "), o3.static && a3.push("static "), o3.readonly && a3.push("readonly "), a3.push(e3.call(n3, "parameter")), Yy(a3);
          case "GenericTypeAnnotation":
          case "TSTypeReference":
            return Yy([e3.call(n3, o3.type === "TSTypeReference" ? "typeName" : "id"), pC(e3, t3, n3, "typeParameters")]);
          case "TSTypeQuery":
            return Yy(["typeof ", e3.call(n3, "exprName")]);
          case "TSIndexSignature": {
            const r4 = e3.getParentNode(), i4 = o3.parameters.length > 1 ? iE(IE(t3) ? "," : "") : "", a4 = nE(Yy([rE(Yy([eE, Ky(Yy([", ", eE]), e3.map(n3, "parameters"))])), i4, eE]));
            return Yy([o3.export ? "export " : "", o3.accessibility ? Yy([o3.accessibility, " "]) : "", o3.static ? "static " : "", o3.readonly ? "readonly " : "", o3.declare ? "declare " : "", "[", o3.parameters ? a4 : "", o3.typeAnnotation ? "]: " : "]", o3.typeAnnotation ? e3.call(n3, "typeAnnotation") : "", r4.type === "ClassBody" ? u3 : ""]);
          }
          case "TSTypePredicate":
            return Yy([o3.asserts ? "asserts " : "", e3.call(n3, "parameterName"), o3.typeAnnotation ? Yy([" is ", e3.call(n3, "typeAnnotation")]) : ""]);
          case "TSNonNullExpression":
            return Yy([e3.call(n3, "expression"), "!"]);
          case "ThisTypeAnnotation":
          case "TSThisType":
            return "this";
          case "TSImportType":
            return Yy([o3.isTypeOf ? "typeof " : "", "import(", e3.call(n3, o3.parameter ? "parameter" : "argument"), ")", o3.qualifier ? Yy([".", e3.call(n3, "qualifier")]) : "", pC(e3, t3, n3, "typeParameters")]);
          case "TSLiteralType":
            return e3.call(n3, "literal");
          case "TSIndexedAccessType":
            return Yy([e3.call(n3, "objectType"), "[", e3.call(n3, "indexType"), "]"]);
          case "TSConstructSignatureDeclaration":
          case "TSCallSignatureDeclaration":
          case "TSConstructorType":
            if (o3.type !== "TSCallSignatureDeclaration" && a3.push("new "), a3.push(nE(HE(e3, n3, t3, false, true))), o3.returnType || o3.typeAnnotation) {
              const t4 = o3.type === "TSConstructorType";
              a3.push(t4 ? " => " : ": ", e3.call(n3, "returnType"), e3.call(n3, "typeAnnotation"));
            }
            return Yy(a3);
          case "TSTypeOperator":
            return Yy([o3.operator, " ", e3.call(n3, "typeAnnotation")]);
          case "TSMappedType": {
            const r4 = Jy(t3.originalText, LE(o3), ME(o3));
            return nE(Yy(["{", rE(Yy([t3.bracketSpacing ? Qy : eE, o3.readonly ? Yy([hE(o3.readonly, "readonly"), " "]) : "", RE(e3, t3, n3), e3.call(n3, "typeParameter"), o3.optional ? hE(o3.optional, "?") : "", o3.typeAnnotation ? ": " : "", e3.call(n3, "typeAnnotation"), iE(u3, "")])), Fa.printDanglingComments(e3, t3, true), t3.bracketSpacing ? Qy : eE, "}"]), {shouldBreak: r4});
          }
          case "TSMethodSignature":
            return a3.push(o3.accessibility ? Yy([o3.accessibility, " "]) : "", o3.export ? "export " : "", o3.static ? "static " : "", o3.readonly ? "readonly " : "", o3.computed ? "[" : "", e3.call(n3, "key"), o3.computed ? "]" : "", jE(e3), HE(e3, n3, t3, false, true)), (o3.returnType || o3.typeAnnotation) && a3.push(": ", e3.call(n3, "returnType"), e3.call(n3, "typeAnnotation")), nE(Yy(a3));
          case "TSNamespaceExportDeclaration":
            return a3.push("export as namespace ", e3.call(n3, "id")), t3.semi && a3.push(";"), nE(Yy(a3));
          case "TSEnumDeclaration":
            return o3.declare && a3.push("declare "), o3.modifiers && a3.push(RE(e3, t3, n3)), o3.const && a3.push("const "), a3.push("enum ", e3.call(n3, "id"), " "), o3.members.length === 0 ? a3.push(nE(Yy(["{", Fa.printDanglingComments(e3, t3), eE, "}"]))) : a3.push(nE(Yy(["{", rE(Yy([Zy, YE(e3, t3, "members", n3), IE(t3, "es5") ? "," : ""])), Fa.printDanglingComments(e3, t3, true), Zy, "}"]))), Yy(a3);
          case "TSEnumMember":
            return a3.push(e3.call(n3, "id")), o3.initializer && a3.push(" = ", e3.call(n3, "initializer")), Yy(a3);
          case "TSImportEqualsDeclaration":
            return o3.isExport && a3.push("export "), a3.push("import ", e3.call(n3, "id"), " = ", e3.call(n3, "moduleReference")), t3.semi && a3.push(";"), nE(Yy(a3));
          case "TSExternalModuleReference":
            return Yy(["require(", e3.call(n3, "expression"), ")"]);
          case "TSModuleDeclaration": {
            const r4 = e3.getParentNode(), i4 = xE(o3.id), s3 = r4.type === "TSModuleDeclaration", c3 = o3.body && o3.body.type === "TSModuleDeclaration";
            if (s3)
              a3.push(".");
            else {
              o3.declare && a3.push("declare "), a3.push(RE(e3, t3, n3));
              const r5 = t3.originalText.slice(LE(o3), LE(o3.id));
              o3.id.type === "Identifier" && o3.id.name === "global" && !/namespace|module/.test(r5) || a3.push(i4 || /(^|\s)module(\s|$)/.test(r5) ? "module " : "namespace ");
            }
            return a3.push(e3.call(n3, "id")), c3 ? a3.push(e3.call(n3, "body")) : o3.body ? a3.push(" ", nE(e3.call(n3, "body"))) : a3.push(u3), Yy(a3);
          }
          case "PrivateName":
            return Yy(["#", e3.call(n3, o3.id ? "id" : "name")]);
          case "TSPrivateIdentifier":
            return o3.escapedText;
          case "TSConditionalType":
            return Md(e3, t3, n3, {beforeParts: () => [e3.call(n3, "checkType"), " ", "extends", " ", e3.call(n3, "extendsType")], afterParts: () => [], shouldCheckJsx: false, conditionalNodeType: "TSConditionalType", consequentNodePropertyName: "trueType", alternateNodePropertyName: "falseType", testNodePropertyNames: ["checkType", "extendsType"]});
          case "TSInferType":
            return Yy(["infer", " ", e3.call(n3, "typeParameter")]);
          case "InterpreterDirective":
            return a3.push("#!", o3.value, Zy), Xy(t3.originalText, o3, ME) && a3.push(Zy), Yy(a3);
          case "NGRoot":
            return Yy([].concat(e3.call(n3, "node"), o3.node.comments && o3.node.comments.length !== 0 ? Yy([" //", o3.node.comments[0].value.trimEnd()]) : []));
          case "NGChainedExpression":
            return nE(Ky(Yy([";", Qy]), e3.map((e4) => EE(e4) ? n3(e4) : Yy(["(", n3(e4), ")"]), "expressions")));
          case "NGEmptyExpression":
            return "";
          case "NGQuotedExpression":
            return Yy([o3.prefix, ": ", o3.value.trim()]);
          case "NGMicrosyntax":
            return Yy(e3.map((e4, t4) => Yy([t4 === 0 ? "" : SE(e4.getValue(), t4, o3) ? " " : Yy([";", Qy]), n3(e4)]), "body"));
          case "NGMicrosyntaxKey":
            return /^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(o3.name) ? o3.name : JSON.stringify(o3.name);
          case "NGMicrosyntaxExpression":
            return Yy([e3.call(n3, "expression"), o3.alias === null ? "" : Yy([" as ", e3.call(n3, "alias")])]);
          case "NGMicrosyntaxKeyedExpression": {
            const t4 = e3.getName(), r4 = e3.getParentNode(), u4 = SE(o3, t4, r4) || (t4 === 1 && (o3.key.name === "then" || o3.key.name === "else") || t4 === 2 && o3.key.name === "else" && r4.body[t4 - 1].type === "NGMicrosyntaxKeyedExpression" && r4.body[t4 - 1].key.name === "then") && r4.body[0].type === "NGMicrosyntaxExpression";
            return Yy([e3.call(n3, "key"), u4 ? " " : ": ", e3.call(n3, "expression")]);
          }
          case "NGMicrosyntaxLet":
            return Yy(["let ", e3.call(n3, "key"), o3.value === null ? "" : Yy([" = ", e3.call(n3, "value")])]);
          case "NGMicrosyntaxAs":
            return Yy([e3.call(n3, "key"), " as ", e3.call(n3, "alias")]);
          case "PipelineBareFunction":
            return e3.call(n3, "callee");
          case "PipelineTopicExpression":
            return e3.call(n3, "expression");
          case "PipelinePrimaryTopicReference":
            return a3.push("#"), Yy(a3);
          case "ArgumentPlaceholder":
            return "?";
          case "TSJSDocAllType":
            return "*";
          case "TSJSDocUnknownType":
            return "?";
          case "TSJSDocNullableType":
            return Yy(["?", e3.call(n3, "typeAnnotation")]);
          case "TSJSDocNonNullableType":
            return Yy(["!", e3.call(n3, "typeAnnotation")]);
          case "TSJSDocFunctionType":
            return Yy(["function(", "): ", e3.call(n3, "typeAnnotation")]);
          default:
            throw new Error("unknown type: " + JSON.stringify(o3.type));
        }
      }(e2, t2, n2, r2);
      if (!o2 || aE(i2))
        return i2;
      const a2 = fE(e2), s2 = [];
      if (o2.type === "ClassMethod" || o2.type === "ClassPrivateMethod" || o2.type === "ClassProperty" || o2.type === "FieldDefinition" || o2.type === "TSAbstractClassProperty" || o2.type === "ClassPrivateProperty" || o2.type === "MethodDefinition" || o2.type === "TSAbstractMethodDefinition" || o2.type === "TSDeclareMethod")
        ;
      else if (o2.decorators && o2.decorators.length > 0 && !(a2 && LE(a2, {ignoreDecorators: true}) > LE(o2.decorators[0]))) {
        const r3 = o2.type === "ClassExpression" || o2.type === "ClassDeclaration" || yE(o2, t2) ? Zy : Qy;
        e2.each((e3) => {
          let t3 = e3.getValue();
          t3 = t3.expression ? t3.expression : t3.callee, s2.push(n2(e3), r3);
        }, "decorators"), a2 && s2.unshift(Zy);
      } else
        vE(o2) && o2.declaration && o2.declaration.decorators && o2.declaration.decorators.length > 0 && LE(o2, {ignoreDecorators: true}) > LE(o2.declaration.decorators[0]) ? e2.each((e3) => {
          const t3 = e3.getValue().type === "Decorator" ? "" : "@";
          s2.push(t3, n2(e3), Zy);
        }, "declaration", "decorators") : u2 = Rp(e2, t2);
      const c2 = [];
      if (u2 && c2.unshift("("), c2.push(i2), u2) {
        const t3 = e2.getValue();
        gE(t3) && (c2.push(" /*"), c2.push(t3.trailingComments[0].value.trimStart()), c2.push("*/"), t3.trailingComments[0].printed = true), c2.push(")");
      }
      return s2.length > 0 ? nE(Yy(s2.concat(c2))) : Yy(c2);
    }, embed: pp, insertPragma: sE, massageAstNode: mp, hasPrettierIgnore: CE, willPrintOwnComments: il.willPrintOwnComments, canAttachComment: function(e2) {
      return e2.type && e2.type !== "CommentBlock" && e2.type !== "CommentLine" && e2.type !== "Line" && e2.type !== "Block" && e2.type !== "EmptyStatement" && e2.type !== "TemplateElement" && e2.type !== "Import";
    }, printComment: wC, isBlockComment: kE, handleComments: {ownLine: il.handleOwnLineComment, endOfLine: il.handleEndOfLineComment, remaining: il.handleRemainingComment}, getGapRegex: il.getGapRegex, getCommentChildNodes: il.getCommentChildNodes};
    const {builders: {concat: kC, hardline: PC, indent: OC, join: IC}} = cn;
    const LC = new Set(["start", "end", "extra", "loc", "comments", "errors", "range"]);
    function MC(e2, t2) {
      const {type: n2} = e2;
      return n2 === "Identifier" ? {type: "StringLiteral", value: e2.name} : n2 === "UnaryExpression" && e2.operator === "+" ? t2.argument : void 0;
    }
    MC.ignoredProperties = LC;
    var jC = {preprocess: Hp, print: function(e2, t2, n2) {
      const r2 = e2.getValue();
      switch (r2.type) {
        case "JsonRoot":
          return kC([e2.call(n2, "node"), PC]);
        case "ArrayExpression":
          return r2.elements.length === 0 ? "[]" : kC(["[", OC(kC([PC, IC(kC([",", PC]), e2.map(n2, "elements"))])), PC, "]"]);
        case "ObjectExpression":
          return r2.properties.length === 0 ? "{}" : kC(["{", OC(kC([PC, IC(kC([",", PC]), e2.map(n2, "properties"))])), PC, "}"]);
        case "ObjectProperty":
          return kC([e2.call(n2, "key"), ": ", e2.call(n2, "value")]);
        case "UnaryExpression":
          return kC([r2.operator === "+" ? "" : r2.operator, e2.call(n2, "argument")]);
        case "NullLiteral":
          return "null";
        case "BooleanLiteral":
          return r2.value ? "true" : "false";
        case "StringLiteral":
        case "NumericLiteral":
          return JSON.stringify(r2.value);
        case "Identifier":
          return JSON.stringify(r2.name);
        default:
          throw new Error("unknown type: " + JSON.stringify(r2.type));
      }
    }, massageAstNode: MC};
    const _C = "Common";
    var RC = {bracketSpacing: {since: "0.0.0", category: _C, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets."}, singleQuote: {since: "0.0.0", category: _C, type: "boolean", default: false, description: "Use single quotes instead of double quotes."}, proseWrap: {since: "1.8.2", category: _C, type: "choice", default: [{since: "1.8.2", value: true}, {since: "1.9.0", value: "preserve"}], description: "How to wrap prose.", choices: [{since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width."}, {since: "1.9.0", value: "never", description: "Do not wrap prose."}, {since: "1.9.0", value: "preserve", description: "Wrap prose as-is."}]}};
    const VC = "JavaScript";
    var $C = {arrowParens: {since: "1.9.0", category: VC, type: "choice", default: [{since: "1.9.0", value: "avoid"}, {since: "2.0.0", value: "always"}], description: "Include parentheses around a sole arrow function parameter.", choices: [{value: "always", description: "Always include parens. Example: `(x) => x`"}, {value: "avoid", description: "Omit parens when possible. Example: `x => x`"}]}, bracketSpacing: RC.bracketSpacing, jsxBracketSameLine: {since: "0.17.0", category: VC, type: "boolean", default: false, description: "Put > on the last line instead of at a new line."}, semi: {since: "1.0.0", category: VC, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them."}, singleQuote: RC.singleQuote, jsxSingleQuote: {since: "1.15.0", category: VC, type: "boolean", default: false, description: "Use single quotes in JSX."}, quoteProps: {since: "1.17.0", category: VC, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{value: "as-needed", description: "Only add quotes around object properties where required."}, {value: "consistent", description: "If at least one property in an object requires quotes, quote all properties."}, {value: "preserve", description: "Respect the input use of quotes in object properties."}]}, trailingComma: {since: "0.0.0", category: VC, type: "choice", default: [{since: "0.0.0", value: false}, {since: "0.19.0", value: "none"}, {since: "2.0.0", value: "es5"}], description: "Print trailing commas wherever possible when multi-line.", choices: [{value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)"}, {value: "none", description: "No trailing commas."}, {value: "all", description: "Trailing commas wherever possible (including function arguments)."}]}}, qC = {name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183}, WC = {name: "JSX", type: "programming", group: "JavaScript", extensions: [".jsx"], tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 178}, UC = {name: "TypeScript", type: "programming", color: "#2b7489", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378}, JC = {name: "TSX", type: "programming", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924}, zC = {name: "JSON", type: "data", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", searchable: false, extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "composer.lock", "mcmod.info"], languageId: 174}, HC = {name: "JSON with Comments", type: "data", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423}, GC = {name: "JSON5", type: "data", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175};
    var XC = {languages: [ks(qC, (e2) => ({since: "0.0.0", parsers: ["babel", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], extensions: [...e2.extensions, ".wxs"]})), ks(qC, () => ({name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"]})), ks(WC, () => ({since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"]})), ks(UC, () => ({since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"]})), ks(JC, () => ({since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"]})), ks(zC, () => ({name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [], filenames: ["package.json", "package-lock.json", "composer.json"]})), ks(zC, (e2) => ({since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], filenames: [...e2.filenames, ".prettierrc"], extensions: e2.extensions.filter((e3) => e3 !== ".jsonl")})), ks(HC, (e2) => ({since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...e2.filenames, ".eslintrc"]})), ks(GC, () => ({since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"]}))], options: $C, printers: {estree: NC, "estree-json": jC}, parsers: {get babel() {
      return {}.parsers.babel;
    }, get "babel-flow"() {
      return {}.parsers["babel-flow"];
    }, get "babel-ts"() {
      return {}.parsers["babel-ts"];
    }, get json() {
      return {}.parsers.json;
    }, get json5() {
      return {}.parsers.json5;
    }, get "json-stringify"() {
      return {}.parsers["json-stringify"];
    }, get __js_expression() {
      return {}.parsers.__js_expression;
    }, get __vue_expression() {
      return {}.parsers.__vue_expression;
    }, get __vue_event_binding() {
      return {}.parsers.__vue_event_binding;
    }, get flow() {
      return {}.parsers.flow;
    }, get typescript() {
      return {}.parsers.typescript;
    }, get __ng_action() {
      return {}.parsers.__ng_action;
    }, get __ng_binding() {
      return {}.parsers.__ng_binding;
    }, get __ng_interpolation() {
      return {}.parsers.__ng_interpolation;
    }, get __ng_directive() {
      return {}.parsers.__ng_directive;
    }, get espree() {
      return {}.parsers.espree;
    }, get meriyah() {
      return {}.parsers.meriyah;
    }}};
    const {isFrontMatterNode: YC} = Lt, KC = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
    function QC(e2, t2, n2) {
      if (YC(e2) && e2.lang === "yaml" && delete t2.value, e2.type === "css-comment" && n2.type === "css-root" && n2.nodes.length !== 0) {
        if ((n2.nodes[0] === e2 || YC(n2.nodes[0]) && n2.nodes[1] === e2) && (delete t2.text, /^\*\s*@(format|prettier)\s*$/.test(e2.text)))
          return null;
        if (n2.type === "css-root" && se(n2.nodes) === e2)
          return null;
      }
      if (e2.type === "value-root" && delete t2.text, e2.type !== "media-query" && e2.type !== "media-query-list" && e2.type !== "media-feature-expression" || delete t2.value, e2.type === "css-rule" && delete t2.params, e2.type === "selector-combinator" && (t2.value = t2.value.replace(/\s+/g, " ")), e2.type === "media-feature" && (t2.value = t2.value.replace(/ /g, "")), (e2.type === "value-word" && (e2.isColor && e2.isHex || ["initial", "inherit", "unset", "revert"].includes(t2.value.replace().toLowerCase())) || e2.type === "media-feature" || e2.type === "selector-root-invalid" || e2.type === "selector-pseudo") && (t2.value = t2.value.toLowerCase()), e2.type === "css-decl" && (t2.prop = t2.prop.toLowerCase()), e2.type !== "css-atrule" && e2.type !== "css-import" || (t2.name = t2.name.toLowerCase()), e2.type === "value-number" && (t2.unit = t2.unit.toLowerCase()), e2.type !== "media-feature" && e2.type !== "media-keyword" && e2.type !== "media-type" && e2.type !== "media-unknown" && e2.type !== "media-url" && e2.type !== "media-value" && e2.type !== "selector-attribute" && e2.type !== "selector-string" && e2.type !== "selector-class" && e2.type !== "selector-combinator" && e2.type !== "value-string" || !t2.value || (t2.value = t2.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), e2.type === "selector-attribute" && (t2.attribute = t2.attribute.trim(), t2.namespace && typeof t2.namespace == "string" && (t2.namespace = t2.namespace.trim(), t2.namespace.length === 0 && (t2.namespace = true)), t2.value && (t2.value = t2.value.trim().replace(/^["']|["']$/g, ""), delete t2.quoted)), e2.type !== "media-value" && e2.type !== "media-type" && e2.type !== "value-number" && e2.type !== "selector-root-invalid" && e2.type !== "selector-class" && e2.type !== "selector-combinator" && e2.type !== "selector-tag" || !t2.value || (t2.value = t2.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (e3, t3, n3) => {
        const r2 = Number(t3);
        return isNaN(r2) ? e3 : r2 + n3.toLowerCase();
      })), e2.type === "selector-tag") {
        const n3 = e2.value.toLowerCase();
        ["from", "to"].includes(n3) && (t2.value = n3);
      }
      e2.type === "css-atrule" && e2.name.toLowerCase() === "supports" && delete t2.value, e2.type === "selector-unknown" && delete t2.value;
    }
    QC.ignoredProperties = KC;
    var ZC = QC;
    const {builders: {hardline: eb, concat: tb, markAsRoot: nb}} = cn, rb = {"---": "yaml", "+++": "toml"};
    var ob = {parse: function(e2) {
      const t2 = Object.keys(rb).map(ae).join("|"), n2 = e2.match(new RegExp("^(".concat(t2, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
      if (n2 === null)
        return {frontMatter: null, content: e2};
      const [r2, o2, u2, i2] = n2;
      let a2 = rb[o2];
      return a2 !== "toml" && u2 && u2.trim() && (a2 = u2.trim()), {frontMatter: {type: "front-matter", lang: a2, value: i2, raw: r2.replace(/\n$/, "")}, content: r2.replace(/[^\n]/g, " ") + e2.slice(r2.length)};
    }, print: function(e2, t2) {
      if (e2.lang === "yaml") {
        const n2 = e2.value.trim(), r2 = n2 ? t2(n2, {parser: "yaml"}, {stripTrailingHardline: true}) : "";
        return nb(tb(["---", eb, r2, r2 ? eb : "", "---"]));
      }
    }};
    const {builders: {hardline: ub, concat: ib}} = cn, {print: ab} = ob;
    var sb = function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (r2.type === "front-matter") {
        const e3 = ab(r2, n2);
        return e3 ? ib([e3, ub]) : "";
      }
    };
    const {parse: cb} = ob;
    var lb = {hasPragma: function(e2) {
      return Sp.hasPragma(cb(e2).content);
    }, insertPragma: function(e2) {
      const {frontMatter: t2, content: n2} = cb(e2);
      return (t2 ? t2.raw + "\n\n" : "") + Sp.insertPragma(n2);
    }};
    const pb = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
    function db(e2, t2) {
      const n2 = [].concat(t2);
      let r2, o2 = -1;
      for (; r2 = e2.getParentNode(++o2); )
        if (n2.includes(r2.type))
          return o2;
      return -1;
    }
    function fb(e2, t2) {
      const n2 = db(e2, t2);
      return n2 === -1 ? null : e2.getParentNode(n2);
    }
    function hb(e2) {
      return e2.type === "value-operator" && e2.value === "*";
    }
    function mb(e2) {
      return e2.type === "value-operator" && e2.value === "/";
    }
    function gb(e2) {
      return e2.type === "value-operator" && e2.value === "+";
    }
    function Db(e2) {
      return e2.type === "value-operator" && e2.value === "-";
    }
    function yb(e2) {
      return e2.type === "value-operator" && e2.value === "%";
    }
    function Eb(e2) {
      return e2.type === "value-comma_group" && e2.groups && e2.groups[1] && e2.groups[1].type === "value-colon";
    }
    function Cb(e2) {
      return e2.type === "value-paren_group" && e2.groups && e2.groups[0] && Eb(e2.groups[0]);
    }
    var bb = {getAncestorCounter: db, getAncestorNode: fb, getPropOfDeclNode: function(e2) {
      const t2 = fb(e2, "css-decl");
      return t2 && t2.prop && t2.prop.toLowerCase();
    }, hasSCSSInterpolation: function(e2) {
      if (e2 && e2.length) {
        for (let t2 = e2.length - 1; t2 > 0; t2--)
          if (e2[t2].type === "word" && e2[t2].value === "{" && e2[t2 - 1].type === "word" && e2[t2 - 1].value.endsWith("#"))
            return true;
      }
      return false;
    }, hasStringOrFunction: function(e2) {
      if (e2 && e2.length) {
        for (let t2 = 0; t2 < e2.length; t2++)
          if (e2[t2].type === "string" || e2[t2].type === "func")
            return true;
      }
      return false;
    }, maybeToLowerCase: function(e2) {
      return e2.includes("$") || e2.includes("@") || e2.includes("#") || e2.startsWith("%") || e2.startsWith("--") || e2.startsWith(":--") || e2.includes("(") && e2.includes(")") ? e2 : e2.toLowerCase();
    }, insideValueFunctionNode: function(e2, t2) {
      const n2 = fb(e2, "value-func");
      return n2 && n2.value && n2.value.toLowerCase() === t2;
    }, insideICSSRuleNode: function(e2) {
      const t2 = fb(e2, "css-rule");
      return t2 && t2.raws && t2.raws.selector && (t2.raws.selector.startsWith(":import") || t2.raws.selector.startsWith(":export"));
    }, insideAtRuleNode: function(e2, t2) {
      const n2 = [].concat(t2), r2 = fb(e2, "css-atrule");
      return r2 && n2.includes(r2.name.toLowerCase());
    }, insideURLFunctionInImportAtRuleNode: function(e2) {
      const t2 = e2.getValue(), n2 = fb(e2, "css-atrule");
      return n2 && n2.name === "import" && t2.groups[0].value === "url" && t2.groups.length === 2;
    }, isKeyframeAtRuleKeywords: function(e2, t2) {
      const n2 = fb(e2, "css-atrule");
      return n2 && n2.name && n2.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t2.toLowerCase());
    }, isWideKeywords: function(e2) {
      return ["initial", "inherit", "unset", "revert"].includes(e2.toLowerCase());
    }, isSCSS: function(e2, t2) {
      return e2 === "less" || e2 === "scss" ? e2 === "scss" : /(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t2);
    }, isSCSSVariable: function(e2) {
      return !(!e2 || e2.type !== "word" || !e2.value.startsWith("$"));
    }, isLastNode: function(e2, t2) {
      const n2 = e2.getParentNode();
      if (!n2)
        return false;
      const {nodes: r2} = n2;
      return r2 && r2.indexOf(t2) === r2.length - 1;
    }, isLessParser: function(e2) {
      return e2.parser === "css" || e2.parser === "less";
    }, isSCSSControlDirectiveNode: function(e2) {
      return e2.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(e2.name);
    }, isDetachedRulesetDeclarationNode: function(e2) {
      return !!e2.selector && (typeof e2.selector == "string" && /^@.+:.*$/.test(e2.selector) || e2.selector.value && /^@.+:.*$/.test(e2.selector.value));
    }, isRelationalOperatorNode: function(e2) {
      return e2.type === "value-word" && ["<", ">", "<=", ">="].includes(e2.value);
    }, isEqualityOperatorNode: function(e2) {
      return e2.type === "value-word" && ["==", "!="].includes(e2.value);
    }, isMultiplicationNode: hb, isDivisionNode: mb, isAdditionNode: gb, isSubtractionNode: Db, isModuloNode: yb, isMathOperatorNode: function(e2) {
      return hb(e2) || mb(e2) || gb(e2) || Db(e2) || yb(e2);
    }, isEachKeywordNode: function(e2) {
      return e2.type === "value-word" && e2.value === "in";
    }, isForKeywordNode: function(e2) {
      return e2.type === "value-word" && ["from", "through", "end"].includes(e2.value);
    }, isURLFunctionNode: function(e2) {
      return e2.type === "value-func" && e2.value.toLowerCase() === "url";
    }, isIfElseKeywordNode: function(e2) {
      return e2.type === "value-word" && ["and", "or", "not"].includes(e2.value);
    }, hasComposesNode: function(e2) {
      return e2.value && e2.value.type === "value-root" && e2.value.group && e2.value.group.type === "value-value" && e2.prop.toLowerCase() === "composes";
    }, hasParensAroundNode: function(e2) {
      return e2.value && e2.value.group && e2.value.group.group && e2.value.group.group.type === "value-paren_group" && e2.value.group.group.open !== null && e2.value.group.group.close !== null;
    }, hasEmptyRawBefore: function(e2) {
      return e2.raws && e2.raws.before === "";
    }, isSCSSNestedPropertyNode: function(e2) {
      return !!e2.selector && e2.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
    }, isDetachedRulesetCallNode: function(e2) {
      return e2.raws && e2.raws.params && /^\(\s*\)$/.test(e2.raws.params);
    }, isTemplatePlaceholderNode: function(e2) {
      return e2.name.startsWith("prettier-placeholder");
    }, isTemplatePropNode: function(e2) {
      return e2.prop.startsWith("@prettier-placeholder");
    }, isPostcssSimpleVarNode: function(e2, t2) {
      return e2.value === "$$" && e2.type === "value-func" && t2 && t2.type === "value-word" && !t2.raws.before;
    }, isKeyValuePairNode: Eb, isKeyValuePairInParenGroupNode: Cb, isSCSSMapItemNode: function(e2) {
      const t2 = e2.getValue();
      if (t2.groups.length === 0)
        return false;
      const n2 = e2.getParentNode(1);
      if (!(Cb(t2) || n2 && Cb(n2)))
        return false;
      const r2 = fb(e2, "css-decl");
      return !!(r2 && r2.prop && r2.prop.startsWith("$")) || (!!Cb(n2) || n2.type === "value-func");
    }, isInlineValueCommentNode: function(e2) {
      return e2.type === "value-comment" && e2.inline;
    }, isHashNode: function(e2) {
      return e2.type === "value-word" && e2.value === "#";
    }, isLeftCurlyBraceNode: function(e2) {
      return e2.type === "value-word" && e2.value === "{";
    }, isRightCurlyBraceNode: function(e2) {
      return e2.type === "value-word" && e2.value === "}";
    }, isWordNode: function(e2) {
      return ["value-word", "value-atword"].includes(e2.type);
    }, isColonNode: function(e2) {
      return e2.type === "value-colon";
    }, isMediaAndSupportsKeywords: function(e2) {
      return e2.value && ["not", "and", "or"].includes(e2.value.toLowerCase());
    }, isColorAdjusterFuncNode: function(e2) {
      return e2.type === "value-func" && pb.has(e2.value.toLowerCase());
    }, lastLineHasInlineComment: function(e2) {
      return /\/\//.test(e2.split(/[\n\r]/).pop());
    }, stringifyNode: function e2(t2) {
      if (t2.groups) {
        return (t2.open && t2.open.value ? t2.open.value : "") + t2.groups.reduce((n3, r3, o2) => n3 + e2(r3) + (t2.groups[0].type === "comma_group" && o2 !== t2.groups.length - 1 ? "," : ""), "") + (t2.close && t2.close.value ? t2.close.value : "");
      }
      const n2 = t2.raws && t2.raws.before ? t2.raws.before : "", r2 = t2.raws && t2.raws.quote ? t2.raws.quote : "";
      return n2 + r2 + (t2.type === "atword" ? "@" : "") + (t2.value ? t2.value : "") + r2 + (t2.unit ? t2.unit : "") + (t2.group ? e2(t2.group) : "") + (t2.raws && t2.raws.after ? t2.raws.after : "");
    }, isAtWordPlaceholderNode: function(e2) {
      return e2 && e2.type === "value-atword" && e2.value.startsWith("prettier-placeholder-");
    }}, vb = function(e2, t2) {
      let n2 = 0;
      for (let r2 = 0; r2 < e2.line - 1; ++r2)
        n2 = t2.indexOf("\n", n2) + 1;
      return n2 + e2.column;
    };
    const {getLast: Ab, skipEverythingButNewLine: Fb} = Lt;
    function xb(e2, t2) {
      return typeof e2.sourceIndex == "number" ? e2.sourceIndex : e2.source ? vb(e2.source.start, t2) - 1 : null;
    }
    function Sb(e2, t2) {
      if (e2.type === "css-comment" && e2.inline)
        return Fb(t2, e2.source.startOffset);
      const n2 = e2.nodes && Ab(e2.nodes);
      return n2 && e2.source && !e2.source.end && (e2 = n2), e2.source && e2.source.end ? vb(e2.source.end, t2) : null;
    }
    function wb(e2, t2, n2) {
      e2.source && (e2.source.startOffset = xb(e2, n2) + t2, e2.source.endOffset = Sb(e2, n2) + t2);
      for (const r2 in e2) {
        const o2 = e2[r2];
        r2 !== "source" && o2 && typeof o2 == "object" && wb(o2, t2, n2);
      }
    }
    function Tb(e2) {
      let t2 = e2.source.startOffset;
      return typeof e2.prop == "string" && (t2 += e2.prop.length), e2.type === "css-atrule" && typeof e2.name == "string" && (t2 += 1 + e2.name.length + e2.raws.afterName.match(/^\s*:?\s*/)[0].length), e2.type !== "css-atrule" && e2.raws && typeof e2.raws.between == "string" && (t2 += e2.raws.between.length), t2;
    }
    var Bb = {locStart: function(e2) {
      return e2.source.startOffset;
    }, locEnd: function(e2) {
      return e2.source.endOffset;
    }, calculateLoc: function e2(t2, n2) {
      t2.source && (t2.source.startOffset = xb(t2, n2), t2.source.endOffset = Sb(t2, n2));
      for (const r2 in t2) {
        const o2 = t2[r2];
        r2 !== "source" && o2 && typeof o2 == "object" && (o2.type === "value-root" || o2.type === "value-unknown" ? wb(o2, Tb(t2), o2.text || o2.value) : e2(o2, n2));
      }
    }, replaceQuotesInInlineComments: function(e2) {
      let t2, n2 = "initial", r2 = "initial", o2 = false;
      const u2 = [];
      for (let i2 = 0; i2 < e2.length; i2++) {
        const a2 = e2[i2];
        switch (n2) {
          case "initial":
            if (a2 === "'") {
              n2 = "single-quotes";
              continue;
            }
            if (a2 === '"') {
              n2 = "double-quotes";
              continue;
            }
            if ((a2 === "u" || a2 === "U") && e2.slice(i2, i2 + 4).toLowerCase() === "url(") {
              n2 = "url", i2 += 3;
              continue;
            }
            if (a2 === "*" && e2[i2 - 1] === "/") {
              n2 = "comment-block";
              continue;
            }
            if (a2 === "/" && e2[i2 - 1] === "/") {
              n2 = "comment-inline", t2 = i2 - 1;
              continue;
            }
            continue;
          case "single-quotes":
            if (a2 === "'" && e2[i2 - 1] !== "\\" && (n2 = r2, r2 = "initial"), a2 === "\n" || a2 === "\r")
              return e2;
            continue;
          case "double-quotes":
            if (a2 === '"' && e2[i2 - 1] !== "\\" && (n2 = r2, r2 = "initial"), a2 === "\n" || a2 === "\r")
              return e2;
            continue;
          case "url":
            if (a2 === ")" && (n2 = "initial"), a2 === "\n" || a2 === "\r")
              return e2;
            if (a2 === "'") {
              n2 = "single-quotes", r2 = "url";
              continue;
            }
            if (a2 === '"') {
              n2 = "double-quotes", r2 = "url";
              continue;
            }
            continue;
          case "comment-block":
            a2 === "/" && e2[i2 - 1] === "*" && (n2 = "initial");
            continue;
          case "comment-inline":
            a2 !== '"' && a2 !== "'" && a2 !== "*" || (o2 = true), a2 !== "\n" && a2 !== "\r" || (o2 && u2.push([t2, i2]), n2 = "initial", o2 = false);
            continue;
        }
      }
      for (const [t3, n3] of u2)
        e2 = e2.slice(0, t3) + e2.slice(t3, n3).replace(/["'*]/g, " ") + e2.slice(n3);
      return e2;
    }};
    const {printNumber: Nb, printString: kb, hasNewline: Pb, isFrontMatterNode: Ob, isNextLineEmpty: Ib} = Lt, {builders: {concat: Lb, join: Mb, line: jb, hardline: _b, softline: Rb, group: Vb, fill: $b, indent: qb, dedent: Wb, ifBreak: Ub, breakParent: Jb}, utils: {removeLines: zb}} = cn, {insertPragma: Hb} = lb, {getAncestorNode: Gb, getPropOfDeclNode: Xb, maybeToLowerCase: Yb, insideValueFunctionNode: Kb, insideICSSRuleNode: Qb, insideAtRuleNode: Zb, insideURLFunctionInImportAtRuleNode: ev, isKeyframeAtRuleKeywords: tv, isWideKeywords: nv, isSCSS: rv, isLastNode: ov, isLessParser: uv, isSCSSControlDirectiveNode: iv, isDetachedRulesetDeclarationNode: av, isRelationalOperatorNode: sv, isEqualityOperatorNode: cv, isMultiplicationNode: lv, isDivisionNode: pv, isAdditionNode: dv, isSubtractionNode: fv, isMathOperatorNode: hv, isEachKeywordNode: mv, isForKeywordNode: gv, isURLFunctionNode: Dv, isIfElseKeywordNode: yv, hasComposesNode: Ev, hasParensAroundNode: Cv, hasEmptyRawBefore: bv, isKeyValuePairNode: vv, isDetachedRulesetCallNode: Av, isTemplatePlaceholderNode: Fv, isTemplatePropNode: xv, isPostcssSimpleVarNode: Sv, isSCSSMapItemNode: wv, isInlineValueCommentNode: Tv, isHashNode: Bv, isLeftCurlyBraceNode: Nv, isRightCurlyBraceNode: kv, isWordNode: Pv, isColonNode: Ov, isMediaAndSupportsKeywords: Iv, isColorAdjusterFuncNode: Lv, lastLineHasInlineComment: Mv, isAtWordPlaceholderNode: jv} = bb, {locStart: _v, locEnd: Rv} = Bb;
    function Vv(e2) {
      return e2.trailingComma === "es5" || e2.trailingComma === "all";
    }
    function $v(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = [];
      return e2.each((e3, u2) => {
        const i2 = r2.nodes[u2 - 1];
        if (i2 && i2.type === "css-comment" && i2.text.trim() === "prettier-ignore") {
          const n3 = e3.getValue();
          o2.push(t2.originalText.slice(_v(n3), Rv(n3)));
        } else
          o2.push(e3.call(n2));
        u2 !== r2.nodes.length - 1 && (r2.nodes[u2 + 1].type === "css-comment" && !Pb(t2.originalText, _v(r2.nodes[u2 + 1]), {backwards: true}) && !Ob(r2.nodes[u2]) || r2.nodes[u2 + 1].type === "css-atrule" && r2.nodes[u2 + 1].name === "else" && r2.nodes[u2].type !== "css-comment" ? o2.push(" ") : (o2.push(t2.__isHTMLStyleAttribute ? jb : _b), Ib(t2.originalText, e3.getValue(), Rv) && !Ob(r2.nodes[u2]) && o2.push(_b)));
      }, "nodes"), Lb(o2);
    }
    const qv = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g, Wv = new RegExp(qv.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");
    function Uv(e2, t2) {
      return e2.replace(qv, (e3) => kb(e3, t2));
    }
    function Jv(e2, t2) {
      const n2 = t2.singleQuote ? "'" : '"';
      return e2.includes('"') || e2.includes("'") ? e2 : n2 + e2 + n2;
    }
    function zv(e2) {
      return e2.replace(Wv, (e3, t2, n2, r2, o2) => !n2 && r2 ? Hv(r2) + Yb(o2 || "") : e3);
    }
    function Hv(e2) {
      return Nb(e2).replace(/\.0(?=$|e)/, "");
    }
    var Gv = {print: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (!r2)
        return "";
      if (typeof r2 == "string")
        return r2;
      switch (r2.type) {
        case "front-matter":
          return Lb([r2.raw, _b]);
        case "css-root": {
          const o2 = $v(e2, t2, n2), u2 = r2.raws.after.trim();
          return Lb([o2, u2 ? " ".concat(u2) : "", o2.parts.length ? _b : ""]);
        }
        case "css-comment": {
          const e3 = r2.inline || r2.raws.inline, n3 = t2.originalText.slice(_v(r2), Rv(r2));
          return e3 ? n3.trimEnd() : n3;
        }
        case "css-rule":
          return Lb([e2.call(n2, "selector"), r2.important ? " !important" : "", r2.nodes ? Lb([r2.selector && r2.selector.type === "selector-unknown" && Mv(r2.selector.value) ? jb : " ", "{", r2.nodes.length > 0 ? qb(Lb([_b, $v(e2, t2, n2)])) : "", _b, "}", av(r2) ? ";" : ""]) : ";"]);
        case "css-decl": {
          const o2 = e2.getParentNode(), {between: u2} = r2.raws, i2 = u2.trim(), a2 = i2 === ":";
          let s2 = Ev(r2) ? zb(e2.call(n2, "value")) : e2.call(n2, "value");
          return !a2 && Mv(i2) && (s2 = qb(Lb([_b, Wb(s2)]))), Lb([r2.raws.before.replace(/[\s;]/g, ""), Qb(e2) ? r2.prop : Yb(r2.prop), i2.startsWith("//") ? " " : "", i2, r2.extend ? "" : " ", uv(t2) && r2.extend && r2.selector ? Lb(["extend(", e2.call(n2, "selector"), ")"]) : "", s2, r2.raws.important ? r2.raws.important.replace(/\s*!\s*important/i, " !important") : r2.important ? " !important" : "", r2.raws.scssDefault ? r2.raws.scssDefault.replace(/\s*!default/i, " !default") : r2.scssDefault ? " !default" : "", r2.raws.scssGlobal ? r2.raws.scssGlobal.replace(/\s*!global/i, " !global") : r2.scssGlobal ? " !global" : "", r2.nodes ? Lb([" {", qb(Lb([Rb, $v(e2, t2, n2)])), Rb, "}"]) : xv(r2) && !o2.raws.semicolon && t2.originalText[Rv(r2) - 1] !== ";" ? "" : t2.__isHTMLStyleAttribute && ov(e2, r2) ? Ub(";", "") : ";"]);
        }
        case "css-atrule": {
          const o2 = e2.getParentNode(), u2 = Fv(r2) && !o2.raws.semicolon && t2.originalText[Rv(r2) - 1] !== ";";
          if (uv(t2)) {
            if (r2.mixin)
              return Lb([e2.call(n2, "selector"), r2.important ? " !important" : "", u2 ? "" : ";"]);
            if (r2.function)
              return Lb([r2.name, Lb([e2.call(n2, "params")]), u2 ? "" : ";"]);
            if (r2.variable)
              return Lb(["@", r2.name, ": ", r2.value ? Lb([e2.call(n2, "value")]) : "", r2.raws.between.trim() ? r2.raws.between.trim() + " " : "", r2.nodes ? Lb(["{", qb(Lb([r2.nodes.length > 0 ? Rb : "", $v(e2, t2, n2)])), Rb, "}"]) : "", u2 ? "" : ";"]);
          }
          return Lb(["@", Av(r2) || r2.name.endsWith(":") ? r2.name : Yb(r2.name), r2.params ? Lb([Av(r2) ? "" : Fv(r2) ? r2.raws.afterName === "" ? "" : r2.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(r2.raws.afterName) ? Lb([_b, _b]) : /^\s*\n/.test(r2.raws.afterName) ? _b : " " : " ", e2.call(n2, "params")]) : "", r2.selector ? qb(Lb([" ", e2.call(n2, "selector")])) : "", r2.value ? Vb(Lb([" ", e2.call(n2, "value"), iv(r2) ? Cv(r2) ? " " : jb : ""])) : r2.name === "else" ? " " : "", r2.nodes ? Lb([iv(r2) ? "" : r2.selector && !r2.selector.nodes && typeof r2.selector.value == "string" && Mv(r2.selector.value) || !r2.selector && typeof r2.params == "string" && Mv(r2.params) ? jb : " ", "{", qb(Lb([r2.nodes.length > 0 ? Rb : "", $v(e2, t2, n2)])), Rb, "}"]) : u2 ? "" : ";"]);
        }
        case "media-query-list": {
          const t3 = [];
          return e2.each((e3) => {
            const r3 = e3.getValue();
            r3.type === "media-query" && r3.value === "" || t3.push(e3.call(n2));
          }, "nodes"), Vb(qb(Mb(jb, t3)));
        }
        case "media-query":
          return Lb([Mb(" ", e2.map(n2, "nodes")), ov(e2, r2) ? "" : ","]);
        case "media-type":
          return zv(Uv(r2.value, t2));
        case "media-feature-expression":
          return r2.nodes ? Lb(["(", Lb(e2.map(n2, "nodes")), ")"]) : r2.value;
        case "media-feature":
          return Yb(Uv(r2.value.replace(/ +/g, " "), t2));
        case "media-colon":
          return Lb([r2.value, " "]);
        case "media-value":
          return zv(Uv(r2.value, t2));
        case "media-keyword":
          return Uv(r2.value, t2);
        case "media-url":
          return Uv(r2.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t2);
        case "media-unknown":
          return r2.value;
        case "selector-root":
          return Vb(Lb([Zb(e2, "custom-selector") ? Lb([Gb(e2, "css-atrule").customSelector, jb]) : "", Mb(Lb([",", Zb(e2, ["extend", "custom-selector", "nest"]) ? jb : _b]), e2.map(n2, "nodes"))]));
        case "selector-selector":
          return Vb(qb(Lb(e2.map(n2, "nodes"))));
        case "selector-comment":
          return r2.value;
        case "selector-string":
          return Uv(r2.value, t2);
        case "selector-tag": {
          const t3 = e2.getParentNode(), n3 = t3 && t3.nodes.indexOf(r2), o2 = n3 && t3.nodes[n3 - 1];
          return Lb([r2.namespace ? Lb([r2.namespace === true ? "" : r2.namespace.trim(), "|"]) : "", o2.type === "selector-nesting" ? r2.value : zv(tv(e2, r2.value) ? r2.value.toLowerCase() : r2.value)]);
        }
        case "selector-id":
          return Lb(["#", r2.value]);
        case "selector-class":
          return Lb([".", zv(Uv(r2.value, t2))]);
        case "selector-attribute":
          return Lb(["[", r2.namespace ? Lb([r2.namespace === true ? "" : r2.namespace.trim(), "|"]) : "", r2.attribute.trim(), r2.operator ? r2.operator : "", r2.value ? Jv(Uv(r2.value.trim(), t2), t2) : "", r2.insensitive ? " i" : "", "]"]);
        case "selector-combinator": {
          if (r2.value === "+" || r2.value === ">" || r2.value === "~" || r2.value === ">>>") {
            const t3 = e2.getParentNode(), n4 = t3.type === "selector-selector" && t3.nodes[0] === r2 ? "" : jb;
            return Lb([n4, r2.value, ov(e2, r2) ? "" : " "]);
          }
          const n3 = r2.value.trim().startsWith("(") ? jb : "", o2 = zv(Uv(r2.value.trim(), t2)) || jb;
          return Lb([n3, o2]);
        }
        case "selector-universal":
          return Lb([r2.namespace ? Lb([r2.namespace === true ? "" : r2.namespace.trim(), "|"]) : "", r2.value]);
        case "selector-pseudo":
          return Lb([Yb(r2.value), r2.nodes && r2.nodes.length > 0 ? Lb(["(", Mb(", ", e2.map(n2, "nodes")), ")"]) : ""]);
        case "selector-nesting":
          return r2.value;
        case "selector-unknown": {
          const n3 = Gb(e2, "css-rule");
          if (n3 && n3.isSCSSNesterProperty)
            return zv(Uv(Yb(r2.value), t2));
          const o2 = e2.getParentNode();
          if (o2.raws && o2.raws.selector) {
            const e3 = _v(o2), n4 = e3 + o2.raws.selector.length;
            return t2.originalText.slice(e3, n4).trim();
          }
          const u2 = e2.getParentNode(1);
          if (o2.type === "value-paren_group" && u2 && u2.type === "value-func" && u2.value === "selector") {
            const e3 = _v(o2.open) + 1, n4 = Rv(o2.close) - 1, r3 = t2.originalText.slice(e3, n4).trim();
            return Mv(r3) ? Lb([Jb, r3]) : r3;
          }
          return r2.value;
        }
        case "value-value":
        case "value-root":
          return e2.call(n2, "group");
        case "value-comment":
          return t2.originalText.slice(_v(r2), Rv(r2));
        case "value-comma_group": {
          const t3 = e2.getParentNode(), o2 = e2.getParentNode(1), u2 = Xb(e2), i2 = u2 && t3.type === "value-value" && (u2 === "grid" || u2.startsWith("grid-template")), a2 = Gb(e2, "css-atrule"), s2 = a2 && iv(a2), c2 = e2.map(n2, "groups"), l2 = [], p2 = Kb(e2, "url");
          let d2 = false, f2 = false;
          for (let n3 = 0; n3 < r2.groups.length; ++n3) {
            l2.push(c2[n3]);
            const u3 = r2.groups[n3 - 1], h2 = r2.groups[n3], m2 = r2.groups[n3 + 1], g2 = r2.groups[n3 + 2];
            if (p2) {
              (m2 && dv(m2) || dv(h2)) && l2.push(" ");
              continue;
            }
            if (!m2)
              continue;
            if (h2.type === "value-word" && h2.value.endsWith("-") && jv(m2))
              continue;
            const D2 = h2.type === "value-string" && h2.value.startsWith("#{"), y2 = d2 && m2.type === "value-string" && m2.value.endsWith("}");
            if (D2 || y2) {
              d2 = !d2;
              continue;
            }
            if (d2)
              continue;
            if (Ov(h2) || Ov(m2))
              continue;
            if (h2.type === "value-atword" && h2.value === "")
              continue;
            if (h2.value === "~")
              continue;
            if (h2.value && h2.value.includes("\\") && m2 && m2.type !== "value-comment")
              continue;
            if (u3 && u3.value && u3.value.indexOf("\\") === u3.value.length - 1 && h2.type === "value-operator" && h2.value === "/")
              continue;
            if (h2.value === "\\")
              continue;
            if (Sv(h2, m2))
              continue;
            if (Bv(h2) || Nv(h2) || kv(m2) || Nv(m2) && bv(m2) || kv(h2) && bv(m2))
              continue;
            if (h2.value === "--" && Bv(m2))
              continue;
            const E2 = hv(h2), C2 = hv(m2);
            if ((E2 && Bv(m2) || C2 && kv(h2)) && bv(m2))
              continue;
            if (Kb(e2, "calc") && (dv(h2) || dv(m2) || fv(h2) || fv(m2)) && bv(m2))
              continue;
            const b2 = (dv(h2) || fv(h2)) && n3 === 0 && (m2.type === "value-number" || m2.isHex) && o2 && Lv(o2) && !bv(m2), v2 = g2 && g2.type === "value-func" || g2 && Pv(g2) || h2.type === "value-func" || Pv(h2), A2 = m2.type === "value-func" || Pv(m2) || u3 && u3.type === "value-func" || u3 && Pv(u3);
            if (lv(m2) || lv(h2) || Kb(e2, "calc") || b2 || !(pv(m2) && !v2 || pv(h2) && !A2 || dv(m2) && !v2 || dv(h2) && !A2 || fv(m2) || fv(h2)) || !(bv(m2) || E2 && (!u3 || u3 && hv(u3))))
              if (Tv(h2)) {
                if (t3.type === "value-paren_group") {
                  l2.push(Wb(_b));
                  continue;
                }
                l2.push(_b);
              } else
                s2 && (cv(m2) || sv(m2) || yv(m2) || mv(h2) || gv(h2)) || a2 && a2.name.toLowerCase() === "namespace" ? l2.push(" ") : i2 ? h2.source && m2.source && h2.source.start.line !== m2.source.start.line ? (l2.push(_b), f2 = true) : l2.push(" ") : C2 ? l2.push(" ") : m2 && m2.value === "..." || jv(h2) && jv(m2) && Rv(h2) === _v(m2) || l2.push(jb);
          }
          return f2 && l2.unshift(_b), s2 ? Vb(qb(Lb(l2))) : ev(e2) ? Vb($b(l2)) : Vb(qb($b(l2)));
        }
        case "value-paren_group": {
          const o2 = e2.getParentNode();
          if (o2 && Dv(o2) && (r2.groups.length === 1 || r2.groups.length > 0 && r2.groups[0].type === "value-comma_group" && r2.groups[0].groups.length > 0 && r2.groups[0].groups[0].type === "value-word" && r2.groups[0].groups[0].value.startsWith("data:")))
            return Lb([r2.open ? e2.call(n2, "open") : "", Mb(",", e2.map(n2, "groups")), r2.close ? e2.call(n2, "close") : ""]);
          if (!r2.open) {
            const t3 = e2.map(n2, "groups"), r3 = [];
            for (let e3 = 0; e3 < t3.length; e3++)
              e3 !== 0 && r3.push(Lb([",", jb])), r3.push(t3[e3]);
            return Vb(qb($b(r3)));
          }
          const u2 = wv(e2), i2 = r2.groups[r2.groups.length - 1], a2 = i2 && i2.type === "value-comment";
          return Vb(Lb([r2.open ? e2.call(n2, "open") : "", qb(Lb([Rb, Mb(Lb([",", jb]), e2.map((e3) => {
            const t3 = e3.getValue(), r3 = n2(e3);
            return vv(t3) && t3.type === "value-comma_group" && t3.groups && t3.groups[2] && t3.groups[2].type === "value-paren_group" ? (r3.contents.contents.parts[1] = Vb(r3.contents.contents.parts[1]), Vb(Wb(r3))) : r3;
          }, "groups"))])), Ub(!a2 && rv(t2.parser, t2.originalText) && u2 && Vv(t2) ? "," : ""), Rb, r2.close ? e2.call(n2, "close") : ""]), {shouldBreak: u2});
        }
        case "value-func":
          return Lb([r2.value, Zb(e2, "supports") && Iv(r2) ? " " : "", e2.call(n2, "group")]);
        case "value-paren":
          return r2.value;
        case "value-number":
          return Lb([Hv(r2.value), Yb(r2.unit)]);
        case "value-operator":
          return r2.value;
        case "value-word":
          return r2.isColor && r2.isHex || nv(r2.value) ? r2.value.toLowerCase() : r2.value;
        case "value-colon": {
          const t3 = e2.getParentNode(), n3 = t3 && t3.groups.indexOf(r2), o2 = n3 && t3.groups[n3 - 1];
          return Lb([r2.value, o2 && o2.value[o2.value.length - 1] === "\\" || Kb(e2, "url") ? "" : jb]);
        }
        case "value-comma":
          return Lb([r2.value, " "]);
        case "value-string":
          return kb(r2.raws.quote + r2.value + r2.raws.quote, t2);
        case "value-atword":
          return Lb(["@", r2.value]);
        case "value-unicode-range":
        case "value-unknown":
          return r2.value;
        default:
          throw new Error("Unknown postcss type ".concat(JSON.stringify(r2.type)));
      }
    }, embed: sb, insertPragma: Hb, massageAstNode: ZC}, Xv = {singleQuote: RC.singleQuote}, Yv = {name: "PostCSS", type: "markup", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437}, Kv = {name: "Less", type: "markup", color: "#1d365d", extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198}, Qv = {name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329};
    var Zv = {languages: [ks({name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50}, (e2) => ({since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...e2.extensions, ".wxss"]})), ks(Yv, () => ({since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"]})), ks(Kv, () => ({since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"]})), ks(Qv, () => ({since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"]}))], options: Xv, printers: {postcss: Gv}, parsers: {get css() {
      return {}.parsers.css;
    }, get less() {
      return {}.parsers.less;
    }, get scss() {
      return {}.parsers.scss;
    }}};
    var eA = {locStart: function(e2) {
      return e2.loc.start.offset;
    }, locEnd: function(e2) {
      return e2.loc.end.offset;
    }};
    function tA(e2, t2) {
      if (e2.type === "TextNode") {
        const n2 = e2.chars.trim();
        if (!n2)
          return null;
        t2.chars = n2;
      }
    }
    tA.ignoredProperties = new Set(["loc", "selfClosing"]);
    var nA = tA;
    const rA = new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
    function oA(e2) {
      return uA(e2, ["TextNode"]) && !/\S/.test(e2.chars);
    }
    function uA(e2, t2) {
      return e2 && t2.some((t3) => e2.type === t3);
    }
    function iA(e2, t2) {
      const n2 = e2.getValue(), r2 = e2.getParentNode(0) || {}, o2 = r2.children || r2.body || r2.parts || [], u2 = o2.indexOf(n2);
      return u2 !== -1 && o2[u2 + t2];
    }
    function aA(e2, t2 = 1) {
      return iA(e2, -t2);
    }
    function sA(e2) {
      return iA(e2, 1);
    }
    function cA(e2) {
      return uA(e2, ["MustacheCommentStatement"]) && typeof e2.value == "string" && e2.value.trim() === "prettier-ignore";
    }
    var lA = {getNextNode: sA, getPreviousNode: aA, hasPrettierIgnore: function(e2) {
      const t2 = e2.getValue(), n2 = aA(e2, 2);
      return cA(t2) || cA(n2);
    }, isNextNodeOfSomeType: function(e2, t2) {
      return uA(sA(e2), t2);
    }, isNodeOfSomeType: uA, isParentOfSomeType: function(e2, t2) {
      return uA(e2.getParentNode(0), t2);
    }, isPreviousNodeOfSomeType: function(e2, t2) {
      return uA(aA(e2), t2);
    }, isVoid: function(e2) {
      return function(e3) {
        return uA(e3, ["ElementNode"]) && typeof e3.tag == "string" && (function(e4) {
          return e4.toUpperCase() === e4;
        }(e3.tag[0]) || e3.tag.includes("."));
      }(e2) && e2.children.every((e3) => oA(e3)) || rA.has(e2.tag);
    }, isWhitespaceNode: oA};
    const {builders: {concat: pA, group: dA, hardline: fA, ifBreak: hA, indent: mA, join: gA, line: DA, softline: yA}} = cn, {locStart: EA, locEnd: CA} = eA, {getNextNode: bA, getPreviousNode: vA, hasPrettierIgnore: AA, isNextNodeOfSomeType: FA, isNodeOfSomeType: xA, isParentOfSomeType: SA, isPreviousNodeOfSomeType: wA, isVoid: TA, isWhitespaceNode: BA} = lA;
    function NA(e2, t2) {
      const n2 = e2.getValue();
      return pA(["<", n2.tag, kA(e2, t2), rF(n2), OA(n2)]);
    }
    function kA(e2, t2) {
      const n2 = e2.getValue();
      return mA(pA([n2.attributes.length ? DA : "", gA(DA, e2.map(t2, "attributes")), n2.modifiers.length ? DA : "", gA(DA, e2.map(t2, "modifiers")), n2.comments.length ? DA : "", gA(DA, e2.map(t2, "comments"))]));
    }
    function PA(e2, t2, n2) {
      return pA(e2.map((e3, r2) => r2 === 0 ? pA([yA, n2(e3, t2, n2)]) : n2(e3, t2, n2), "children"));
    }
    function OA(e2) {
      return TA(e2) ? hA(pA([yA, "/>"]), pA([" />", yA])) : hA(pA([yA, ">"]), ">");
    }
    function IA(e2) {
      const t2 = e2.escaped === false ? "{{{" : "{{", n2 = e2.strip && e2.strip.open ? "~" : "";
      return pA([t2, n2]);
    }
    function LA(e2) {
      const t2 = e2.escaped === false ? "}}}" : "}}", n2 = e2.strip && e2.strip.close ? "~" : "";
      return pA([n2, t2]);
    }
    function MA(e2) {
      const t2 = IA(e2), n2 = e2.openStrip.open ? "~" : "";
      return pA([t2, n2, "#"]);
    }
    function jA(e2) {
      const t2 = LA(e2), n2 = e2.openStrip.close ? "~" : "";
      return pA([n2, t2]);
    }
    function _A(e2) {
      const t2 = IA(e2), n2 = e2.closeStrip.open ? "~" : "";
      return pA([t2, n2, "/"]);
    }
    function RA(e2) {
      const t2 = LA(e2), n2 = e2.closeStrip.close ? "~" : "";
      return pA([n2, t2]);
    }
    function VA(e2) {
      const t2 = IA(e2), n2 = e2.inverseStrip.open ? "~" : "";
      return pA([t2, n2]);
    }
    function $A(e2) {
      const t2 = LA(e2), n2 = e2.inverseStrip.close ? "~" : "";
      return pA([n2, t2]);
    }
    function qA(e2, t2) {
      const n2 = e2.getValue();
      return dA(pA([MA(n2), eF(e2, t2), rF(n2.program), yA, jA(n2)]));
    }
    function WA(e2) {
      return pA([fA, VA(e2), "else", $A(e2)]);
    }
    function UA(e2, t2) {
      const n2 = e2.getParentNode(1);
      return pA([VA(n2), "else ", eF(e2, t2), $A(n2)]);
    }
    function JA(e2, t2) {
      const n2 = e2.getValue();
      return pA([zA(n2) ? yA : fA, _A(n2), e2.call(t2, "path"), RA(n2)]);
    }
    function zA(e2) {
      return xA(e2, ["BlockStatement"]) && e2.program.body.every((e3) => BA(e3));
    }
    function HA(e2) {
      return xA(e2, ["BlockStatement"]) && e2.inverse;
    }
    function GA(e2, t2) {
      if (zA(e2.getValue()))
        return "";
      const n2 = e2.call(t2, "program");
      return mA(pA([fA, n2]));
    }
    function XA(e2, t2) {
      const n2 = e2.getValue(), r2 = e2.call(t2, "inverse"), o2 = pA([fA, r2]);
      return function(e3) {
        return HA(e3) && e3.inverse.body.length === 1 && xA(e3.inverse.body[0], ["BlockStatement"]) && e3.inverse.body[0].path.parts[0] === "if";
      }(n2) ? o2 : HA(n2) ? pA([WA(n2), mA(o2)]) : "";
    }
    function YA(e2) {
      return (e2 = typeof e2 == "string" ? e2 : "").split("\n").length - 1;
    }
    function KA(e2 = 0, t2 = 0) {
      return new Array(Math.min(e2, t2)).fill(fA);
    }
    function QA(e2, t2) {
      const n2 = {quote: '"', regex: /"/g}, r2 = {quote: "'", regex: /'/g}, o2 = t2.singleQuote ? r2 : n2, u2 = o2 === r2 ? n2 : r2;
      let i2 = false;
      if (e2.includes(o2.quote) || e2.includes(u2.quote)) {
        i2 = (e2.match(o2.regex) || []).length > (e2.match(u2.regex) || []).length;
      }
      const a2 = i2 ? u2 : o2, s2 = e2.replace(a2.regex, "\\".concat(a2.quote));
      return pA([a2.quote, s2, a2.quote]);
    }
    function ZA(e2, t2) {
      const n2 = tF(e2, t2), r2 = nF(e2, t2);
      return r2 ? mA(pA([n2, DA, dA(r2)])) : n2;
    }
    function eF(e2, t2) {
      const n2 = tF(e2, t2), r2 = nF(e2, t2);
      return r2 ? mA(dA(pA([n2, DA, r2]))) : n2;
    }
    function tF(e2, t2) {
      return e2.call(t2, "path");
    }
    function nF(e2, t2) {
      const n2 = e2.getValue(), r2 = [];
      if (n2.params.length) {
        const n3 = e2.map(t2, "params");
        r2.push(...n3);
      }
      if (n2.hash && n2.hash.pairs.length > 0) {
        const n3 = e2.call(t2, "hash");
        r2.push(n3);
      }
      return r2.length ? gA(DA, r2) : "";
    }
    function rF(e2) {
      return e2 && e2.blockParams.length ? pA([" as |", e2.blockParams.join(" "), "|"]) : "";
    }
    var oF = {print: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (!r2)
        return "";
      if (AA(e2))
        return t2.originalText.slice(EA(r2), CA(r2));
      switch (r2.type) {
        case "Block":
        case "Program":
        case "Template":
          return dA(pA(e2.map(n2, "body")));
        case "ElementNode": {
          const o2 = FA(e2, ["ElementNode"]) ? fA : "";
          if (TA(r2))
            return pA([dA(NA(e2, n2)), o2]);
          const u2 = r2.children.every((e3) => BA(e3));
          return pA([dA(NA(e2, n2)), dA(pA([u2 ? "" : mA(PA(e2, t2, n2)), r2.children.length ? fA : "", pA(["</", r2.tag, ">"])])), o2]);
        }
        case "BlockStatement": {
          const t3 = e2.getParentNode(1), o2 = t3 && t3.inverse && t3.inverse.body.length === 1 && t3.inverse.body[0] === r2 && t3.inverse.body[0].path.parts[0] === "if";
          return pA(o2 ? [UA(e2, n2), GA(e2, n2), XA(e2, n2)] : [qA(e2, n2), dA(pA([GA(e2, n2), XA(e2, n2), JA(e2, n2)]))]);
        }
        case "ElementModifierStatement":
          return dA(pA(["{{", eF(e2, n2), yA, "}}"]));
        case "MustacheStatement": {
          const t3 = SA(e2, ["AttrNode", "ConcatStatement"]), o2 = SA(e2, ["ElementNode"]) && r2.hash.pairs.length === 0 && function(e3) {
            return e3.params.length === 0;
          }(r2), u2 = t3 || o2;
          return dA(pA([IA(r2), u2 ? mA(yA) : "", eF(e2, n2), yA, LA(r2)]));
        }
        case "SubExpression":
          return dA(pA(["(", ZA(e2, n2), yA, ")"]));
        case "AttrNode": {
          const o2 = r2.value.type === "TextNode";
          if (o2 && r2.value.chars === "" && EA(r2.value) === CA(r2.value))
            return pA([r2.name]);
          const u2 = e2.call(n2, "value"), i2 = o2 ? QA(u2.parts.join(), t2) : u2;
          return pA([r2.name, "=", i2]);
        }
        case "ConcatStatement": {
          const r3 = t2.singleQuote ? "'" : '"';
          return pA([r3, ...e2.map((e3) => n2(e3), "parts"), r3]);
        }
        case "Hash":
          return pA([gA(DA, e2.map(n2, "pairs"))]);
        case "HashPair":
          return pA([r2.key, "=", e2.call(n2, "value")]);
        case "TextNode": {
          const t3 = 2, n3 = !vA(e2), o2 = !bA(e2), u2 = !/\S/.test(r2.chars), i2 = YA(r2.chars);
          let a2 = function(e3) {
            return YA(((e3 = typeof e3 == "string" ? e3 : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
          }(r2.chars), s2 = function(e3) {
            return YA(((e3 = typeof e3 == "string" ? e3 : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
          }(r2.chars);
          if ((n3 || o2) && u2 && SA(e2, ["Block", "ElementNode", "Template"]))
            return "";
          u2 && i2 ? (a2 = Math.min(i2, t3), s2 = 0) : (FA(e2, ["BlockStatement", "ElementNode"]) && (s2 = Math.max(s2, 1)), wA(e2, ["BlockStatement", "ElementNode"]) && (a2 = Math.max(a2, 1)));
          if (e2.stack.includes("attributes")) {
            if (!function(e3, t4) {
              return SA(e3, ["AttrNode"]) && e3.getParentNode().name.toLowerCase() === t4 || SA(e3, ["ConcatStatement"]) && e3.getParentNode(1).name.toLowerCase() === t4;
            }(e2, "class"))
              return pA([r2.chars]);
            let n4 = "", o3 = "";
            return SA(e2, ["ConcatStatement"]) && (wA(e2, ["MustacheStatement"]) && (n4 = " "), FA(e2, ["MustacheStatement"]) && (o3 = " ")), pA([...KA(a2, t3), r2.chars.replace(/^\s+/g, n4).replace(/\s+$/, o3), ...KA(s2, t3)]);
          }
          let c2 = "", l2 = "";
          s2 === 0 && FA(e2, ["MustacheStatement"]) && (l2 = " "), a2 === 0 && wA(e2, ["MustacheStatement"]) && (c2 = " "), n3 && (a2 = 0, c2 = ""), o2 && (s2 = 0, l2 = "");
          let p2 = r2.chars;
          return p2.startsWith("{{") && p2.includes("}}") && (p2 = "\\" + p2), pA([...KA(a2, t3), p2.replace(/^\s+/g, c2).replace(/\s+$/, l2), ...KA(s2, t3)]);
        }
        case "MustacheCommentStatement": {
          const e3 = r2.value.includes("}}") ? "--" : "";
          return pA(["{{!", e3, r2.value, e3, "}}"]);
        }
        case "PathExpression":
          return r2.original;
        case "BooleanLiteral":
          return String(r2.value);
        case "CommentStatement":
          return pA(["<!--", r2.value, "-->"]);
        case "StringLiteral":
          return QA(r2.value, t2);
        case "NumberLiteral":
          return String(r2.value);
        case "UndefinedLiteral":
          return "undefined";
        case "NullLiteral":
          return "null";
        default:
          throw new Error("unknown glimmer type: " + JSON.stringify(r2.type));
      }
    }, massageAstNode: nA};
    var uF = {languages: [ks({name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155}, () => ({since: null, parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"]}))], printers: {glimmer: oF}, parsers: {get glimmer() {
      return {}.parsers.glimmer;
    }}};
    var iF = {hasPragma: function(e2) {
      return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e2);
    }, insertPragma: function(e2) {
      return "# @format\n\n" + e2;
    }};
    var aF = {locStart: function(e2) {
      return typeof e2.start == "number" ? e2.start : e2.loc && e2.loc.start;
    }, locEnd: function(e2) {
      return typeof e2.end == "number" ? e2.end : e2.loc && e2.loc.end;
    }};
    const {builders: {concat: sF, join: cF, hardline: lF, line: pF, softline: dF, group: fF, indent: hF, ifBreak: mF}} = cn, {isNextLineEmpty: gF} = Lt, {insertPragma: DF} = iF, {locStart: yF, locEnd: EF} = aF;
    function CF(e2, t2, n2) {
      if (n2.directives.length === 0)
        return "";
      const r2 = cF(pF, e2.map(t2, "directives"));
      return n2.kind === "FragmentDefinition" || n2.kind === "OperationDefinition" ? fF(sF([pF, r2])) : sF([" ", fF(hF(sF([dF, r2])))]);
    }
    function bF(e2, t2, n2) {
      const r2 = e2.getValue().length;
      return e2.map((e3, o2) => {
        const u2 = n2(e3);
        return gF(t2.originalText, e3.getValue(), EF) && o2 < r2 - 1 ? sF([u2, lF]) : u2;
      });
    }
    function vF(e2, t2, n2) {
      const r2 = e2.getNode(), o2 = [], {interfaces: u2} = r2, i2 = e2.map((e3) => n2(e3), "interfaces");
      for (let e3 = 0; e3 < u2.length; e3++) {
        const n3 = u2[e3];
        o2.push(i2[e3]);
        const r3 = u2[e3 + 1];
        if (r3) {
          const e4 = t2.originalText.slice(n3.loc.end, r3.loc.start), u3 = e4.includes("#"), i3 = e4.replace(/#.*/g, "").trim();
          o2.push(i3 === "," ? "," : " &"), o2.push(u3 ? pF : " ");
        }
      }
      return o2;
    }
    function AF() {
    }
    AF.ignoredProperties = new Set(["loc", "comments"]);
    var FF = {print: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (!r2)
        return "";
      if (typeof r2 == "string")
        return r2;
      switch (r2.kind) {
        case "Document": {
          const o2 = [];
          return e2.each((e3, u2) => {
            o2.push(sF([e3.call(n2)])), u2 !== r2.definitions.length - 1 && (o2.push(lF), gF(t2.originalText, e3.getValue(), EF) && o2.push(lF));
          }, "definitions"), sF([sF(o2), lF]);
        }
        case "OperationDefinition": {
          const o2 = t2.originalText[yF(r2)] !== "{", u2 = !!r2.name;
          return sF([o2 ? r2.operation : "", o2 && u2 ? sF([" ", e2.call(n2, "name")]) : "", r2.variableDefinitions && r2.variableDefinitions.length ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.map(n2, "variableDefinitions"))])), dF, ")"])) : "", CF(e2, n2, r2), r2.selectionSet && (o2 || u2) ? " " : "", e2.call(n2, "selectionSet")]);
        }
        case "FragmentDefinition":
          return sF(["fragment ", e2.call(n2, "name"), r2.variableDefinitions && r2.variableDefinitions.length ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.map(n2, "variableDefinitions"))])), dF, ")"])) : "", " on ", e2.call(n2, "typeCondition"), CF(e2, n2, r2), " ", e2.call(n2, "selectionSet")]);
        case "SelectionSet":
          return sF(["{", hF(sF([lF, cF(lF, e2.call((e3) => bF(e3, t2, n2), "selections"))])), lF, "}"]);
        case "Field":
          return fF(sF([r2.alias ? sF([e2.call(n2, "alias"), ": "]) : "", e2.call(n2, "name"), r2.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.call((e3) => bF(e3, t2, n2), "arguments"))])), dF, ")"])) : "", CF(e2, n2, r2), r2.selectionSet ? " " : "", e2.call(n2, "selectionSet")]));
        case "Name":
          return r2.value;
        case "StringValue":
          return r2.block ? sF(['"""', lF, cF(lF, r2.value.replace(/"""/g, "\\$&").split("\n")), lF, '"""']) : sF(['"', r2.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);
        case "IntValue":
        case "FloatValue":
        case "EnumValue":
          return r2.value;
        case "BooleanValue":
          return r2.value ? "true" : "false";
        case "NullValue":
          return "null";
        case "Variable":
          return sF(["$", e2.call(n2, "name")]);
        case "ListValue":
          return fF(sF(["[", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.map(n2, "values"))])), dF, "]"]));
        case "ObjectValue":
          return fF(sF(["{", t2.bracketSpacing && r2.fields.length > 0 ? " " : "", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.map(n2, "fields"))])), dF, mF("", t2.bracketSpacing && r2.fields.length > 0 ? " " : ""), "}"]));
        case "ObjectField":
        case "Argument":
          return sF([e2.call(n2, "name"), ": ", e2.call(n2, "value")]);
        case "Directive":
          return sF(["@", e2.call(n2, "name"), r2.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.call((e3) => bF(e3, t2, n2), "arguments"))])), dF, ")"])) : ""]);
        case "NamedType":
          return e2.call(n2, "name");
        case "VariableDefinition":
          return sF([e2.call(n2, "variable"), ": ", e2.call(n2, "type"), r2.defaultValue ? sF([" = ", e2.call(n2, "defaultValue")]) : "", CF(e2, n2, r2)]);
        case "ObjectTypeExtension":
        case "ObjectTypeDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", r2.kind === "ObjectTypeExtension" ? "extend " : "", "type ", e2.call(n2, "name"), r2.interfaces.length > 0 ? sF([" implements ", sF(vF(e2, t2, n2))]) : "", CF(e2, n2, r2), r2.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e2.call((e3) => bF(e3, t2, n2), "fields"))])), lF, "}"]) : ""]);
        case "FieldDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", e2.call(n2, "name"), r2.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.call((e3) => bF(e3, t2, n2), "arguments"))])), dF, ")"])) : "", ": ", e2.call(n2, "type"), CF(e2, n2, r2)]);
        case "DirectiveDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", "directive ", "@", e2.call(n2, "name"), r2.arguments.length > 0 ? fF(sF(["(", hF(sF([dF, cF(sF([mF("", ", "), dF]), e2.call((e3) => bF(e3, t2, n2), "arguments"))])), dF, ")"])) : "", r2.repeatable ? " repeatable" : "", sF([" on ", cF(" | ", e2.map(n2, "locations"))])]);
        case "EnumTypeExtension":
        case "EnumTypeDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", r2.kind === "EnumTypeExtension" ? "extend " : "", "enum ", e2.call(n2, "name"), CF(e2, n2, r2), r2.values.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e2.call((e3) => bF(e3, t2, n2), "values"))])), lF, "}"]) : ""]);
        case "EnumValueDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", e2.call(n2, "name"), CF(e2, n2, r2)]);
        case "InputValueDefinition":
          return sF([e2.call(n2, "description"), r2.description ? r2.description.block ? lF : pF : "", e2.call(n2, "name"), ": ", e2.call(n2, "type"), r2.defaultValue ? sF([" = ", e2.call(n2, "defaultValue")]) : "", CF(e2, n2, r2)]);
        case "InputObjectTypeExtension":
        case "InputObjectTypeDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", r2.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", e2.call(n2, "name"), CF(e2, n2, r2), r2.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e2.call((e3) => bF(e3, t2, n2), "fields"))])), lF, "}"]) : ""]);
        case "SchemaDefinition":
          return sF(["schema", CF(e2, n2, r2), " {", r2.operationTypes.length > 0 ? hF(sF([lF, cF(lF, e2.call((e3) => bF(e3, t2, n2), "operationTypes"))])) : "", lF, "}"]);
        case "OperationTypeDefinition":
          return sF([e2.call(n2, "operation"), ": ", e2.call(n2, "type")]);
        case "InterfaceTypeExtension":
        case "InterfaceTypeDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", r2.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", e2.call(n2, "name"), r2.interfaces.length > 0 ? sF([" implements ", sF(vF(e2, t2, n2))]) : "", CF(e2, n2, r2), r2.fields.length > 0 ? sF([" {", hF(sF([lF, cF(lF, e2.call((e3) => bF(e3, t2, n2), "fields"))])), lF, "}"]) : ""]);
        case "FragmentSpread":
          return sF(["...", e2.call(n2, "name"), CF(e2, n2, r2)]);
        case "InlineFragment":
          return sF(["...", r2.typeCondition ? sF([" on ", e2.call(n2, "typeCondition")]) : "", CF(e2, n2, r2), " ", e2.call(n2, "selectionSet")]);
        case "UnionTypeExtension":
        case "UnionTypeDefinition":
          return fF(sF([e2.call(n2, "description"), r2.description ? lF : "", fF(sF([r2.kind === "UnionTypeExtension" ? "extend " : "", "union ", e2.call(n2, "name"), CF(e2, n2, r2), r2.types.length > 0 ? sF([" =", mF("", " "), hF(sF([mF(sF([pF, "  "])), cF(sF([pF, "| "]), e2.map(n2, "types"))]))]) : ""]))]));
        case "ScalarTypeExtension":
        case "ScalarTypeDefinition":
          return sF([e2.call(n2, "description"), r2.description ? lF : "", r2.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", e2.call(n2, "name"), CF(e2, n2, r2)]);
        case "NonNullType":
          return sF([e2.call(n2, "type"), "!"]);
        case "ListType":
          return sF(["[", e2.call(n2, "type"), "]"]);
        default:
          throw new Error("unknown graphql type: " + JSON.stringify(r2.kind));
      }
    }, massageAstNode: AF, hasPrettierIgnore: function(e2) {
      const t2 = e2.getValue();
      return t2 && Array.isArray(t2.comments) && t2.comments.some((e3) => e3.value.trim() === "prettier-ignore");
    }, insertPragma: DF, printComment: function(e2) {
      const t2 = e2.getValue();
      if (t2.kind === "Comment")
        return "#" + t2.value.trimEnd();
      throw new Error("Not a comment: " + JSON.stringify(t2));
    }, canAttachComment: function(e2) {
      return e2.kind && e2.kind !== "Comment";
    }}, xF = {bracketSpacing: RC.bracketSpacing};
    var SF = {languages: [ks({name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139}, () => ({since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"]}))], options: xF, printers: {graphql: FF}, parsers: {get graphql() {
      return {}.parsers.graphql;
    }}};
    var wF = {locStart: function(e2) {
      return e2.position.start.offset;
    }, locEnd: function(e2) {
      return e2.position.end.offset;
    }};
    const {getLast: TF} = Lt, {locStart: BF, locEnd: NF} = wF, {cjkPattern: kF, kPattern: PF, punctuationPattern: OF} = {cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"}, IF = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], LF = IF.concat(["tableCell", "paragraph", "heading"]), MF = new RegExp(PF), jF = new RegExp(OF);
    function _F(e2, t2) {
      const [, n2, r2, o2] = t2.slice(e2.position.start.offset, e2.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
      return {numberText: n2, marker: r2, leadingSpaces: o2};
    }
    var RF = {mapAst: function(e2, t2) {
      return function e3(n2, r2, o2) {
        o2 = o2 || [];
        const u2 = Object.assign({}, t2(n2, r2, o2));
        return u2.children && (u2.children = u2.children.map((t3, n3) => e3(t3, n3, [u2].concat(o2)))), u2;
      }(e2, null, null);
    }, splitText: function(e2, t2) {
      const n2 = "non-cjk", r2 = "cj-letter", o2 = "cjk-punctuation", u2 = [];
      return (t2.proseWrap === "preserve" ? e2 : e2.replace(new RegExp("(".concat(kF, ")\n(").concat(kF, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach((e3, t3, a2) => {
        t3 % 2 != 1 ? (t3 !== 0 && t3 !== a2.length - 1 || e3 !== "") && e3.split(new RegExp("(".concat(kF, ")"))).forEach((e4, t4, u3) => {
          (t4 !== 0 && t4 !== u3.length - 1 || e4 !== "") && (t4 % 2 != 0 ? i2(jF.test(e4) ? {type: "word", value: e4, kind: o2, hasLeadingPunctuation: true, hasTrailingPunctuation: true} : {type: "word", value: e4, kind: MF.test(e4) ? "k-letter" : r2, hasLeadingPunctuation: false, hasTrailingPunctuation: false}) : e4 !== "" && i2({type: "word", value: e4, kind: n2, hasLeadingPunctuation: jF.test(e4[0]), hasTrailingPunctuation: jF.test(TF(e4))}));
        }) : u2.push({type: "whitespace", value: /\n/.test(e3) ? "\n" : " "});
      }), u2;
      function i2(e3) {
        const t3 = TF(u2);
        var i3, a2;
        t3 && t3.type === "word" && (t3.kind === n2 && e3.kind === r2 && !t3.hasTrailingPunctuation || t3.kind === r2 && e3.kind === n2 && !e3.hasLeadingPunctuation ? u2.push({type: "whitespace", value: " "}) : (i3 = n2, a2 = o2, t3.kind === i3 && e3.kind === a2 || t3.kind === a2 && e3.kind === i3 || [t3.value, e3.value].some((e4) => /\u3000/.test(e4)) || u2.push({type: "whitespace", value: ""}))), u2.push(e3);
      }
    }, punctuationPattern: OF, getFencedCodeBlockValue: function(e2, t2) {
      const {value: n2} = e2;
      return e2.position.end.offset === t2.length && n2.endsWith("\n") && t2.endsWith("\n") ? n2.slice(0, -1) : n2;
    }, getOrderedListItemInfo: _F, hasGitDiffFriendlyOrderedList: function(e2, t2) {
      if (!e2.ordered)
        return false;
      if (e2.children.length < 2)
        return false;
      const n2 = Number(_F(e2.children[0], t2.originalText).numberText), r2 = Number(_F(e2.children[1], t2.originalText).numberText);
      if (n2 === 0 && e2.children.length > 2) {
        const n3 = Number(_F(e2.children[2], t2.originalText).numberText);
        return r2 === 1 && n3 === 1;
      }
      return r2 === 1;
    }, INLINE_NODE_TYPES: IF, INLINE_NODE_WRAPPER_TYPES: LF, isAutolink: function(e2) {
      if (!e2 || e2.type !== "link" || e2.children.length !== 1)
        return false;
      const t2 = e2.children[0];
      return t2 && BF(e2) === BF(t2) && NF(e2) === NF(t2);
    }};
    const {inferParserByLanguage: VF, getMaxContinuousCount: $F} = Lt, {builders: {hardline: qF, concat: WF, markAsRoot: UF}, utils: {replaceNewlinesWithLiterallines: JF}} = cn, {print: zF} = ob, {getFencedCodeBlockValue: HF} = RF;
    var GF = function(e2, t2, n2, r2) {
      const o2 = e2.getValue();
      if (o2.type === "code" && o2.lang !== null) {
        const e3 = VF(o2.lang, r2);
        if (e3) {
          const t3 = r2.__inJsTemplate ? "~" : "`", u2 = t3.repeat(Math.max(3, $F(o2.value, t3) + 1)), i2 = n2(HF(o2, r2.originalText), {parser: e3}, {stripTrailingHardline: true});
          return UF(WF([u2, o2.lang, o2.meta ? " " + o2.meta : "", qF, JF(i2), qF, u2]));
        }
      }
      switch (o2.type) {
        case "front-matter":
          return zF(o2, n2);
        case "importExport":
          return WF([n2(o2.value, {parser: "babel"}, {stripTrailingHardline: true}), qF]);
        case "jsx":
          return n2("<$>".concat(o2.value, "</$>"), {parser: "__js_expression", rootMarker: "mdx"}, {stripTrailingHardline: true});
      }
      return null;
    };
    const {parse: XF} = ob, YF = ["format", "prettier"];
    function KF(e2) {
      const t2 = "@(".concat(YF.join("|"), ")"), n2 = new RegExp(["<!--\\s*".concat(t2, "\\s*-->"), "<!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t2, "[^\\S\n]*($|\n)[\\s\\S]*\n.*-->")].join("|"), "m"), r2 = e2.match(n2);
      return r2 && r2.index === 0;
    }
    var QF = {startWithPragma: KF, hasPragma: (e2) => KF(XF(e2).content.trimStart()), insertPragma: (e2) => {
      const t2 = XF(e2), n2 = "<!-- @".concat(YF[0], " -->");
      return t2.frontMatter ? "".concat(t2.frontMatter.raw, "\n\n").concat(n2, "\n\n").concat(t2.content) : "".concat(n2, "\n\n").concat(t2.content);
    }};
    const {getOrderedListItemInfo: ZF, mapAst: ex, splitText: tx} = RF, nx = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;
    function rx(e2, t2, n2) {
      return ex(e2, (e3) => {
        if (!e3.children)
          return e3;
        const r2 = e3.children.reduce((e4, r3) => {
          const o2 = e4[e4.length - 1];
          return o2 && t2(o2, r3) ? e4.splice(-1, 1, n2(o2, r3)) : e4.push(r3), e4;
        }, []);
        return Object.assign({}, e3, {children: r2});
      });
    }
    var ox = function(e2, t2) {
      return e2 = function(e3) {
        return rx(e3, (e4, t3) => e4.type === "importExport" && t3.type === "importExport", (e4, t3) => ({type: "importExport", value: e4.value + "\n\n" + t3.value, position: {start: e4.position.start, end: t3.position.end}}));
      }(e2 = function(e3) {
        return ex(e3, (e4) => e4.type !== "import" && e4.type !== "export" ? e4 : Object.assign({}, e4, {type: "importExport"}));
      }(e2 = function(e3, t3) {
        return ex(e3, (e4, n2, [r2]) => {
          if (e4.type !== "text")
            return e4;
          let {value: o2} = e4;
          return r2.type === "paragraph" && (n2 === 0 && (o2 = o2.trimStart()), n2 === r2.children.length - 1 && (o2 = o2.trimEnd())), {type: "sentence", position: e4.position, children: tx(o2, t3)};
        });
      }(e2 = function(e3, t3) {
        return ex(e3, (e4, t4, n3) => {
          if (e4.type === "list" && e4.children.length !== 0) {
            for (let t5 = 0; t5 < n3.length; t5++) {
              const r3 = n3[t5];
              if (r3.type === "list" && !r3.isAligned)
                return e4.isAligned = false, e4;
            }
            e4.isAligned = r2(e4);
          }
          return e4;
        });
        function n2(e4) {
          return e4.children.length === 0 ? -1 : e4.children[0].position.start.column - 1;
        }
        function r2(e4) {
          if (!e4.ordered)
            return true;
          const [r3, o2] = e4.children;
          if (ZF(r3, t3.originalText).leadingSpaces.length > 1)
            return true;
          const u2 = n2(r3);
          if (u2 === -1)
            return false;
          if (e4.children.length === 1)
            return u2 % t3.tabWidth == 0;
          if (u2 !== n2(o2))
            return false;
          if (u2 % t3.tabWidth == 0)
            return true;
          return ZF(o2, t3.originalText).leadingSpaces.length > 1;
        }
      }(e2 = function(e3, t3) {
        return ex(e3, (e4, n2, r2) => {
          if (e4.type === "code") {
            const n3 = /^\n?( {4,}|\t)/.test(t3.originalText.slice(e4.position.start.offset, e4.position.end.offset));
            if (e4.isIndented = n3, n3)
              for (let e5 = 0; e5 < r2.length; e5++) {
                const t4 = r2[e5];
                if (t4.hasIndentedCodeblock)
                  break;
                t4.type === "list" && (t4.hasIndentedCodeblock = true);
              }
          }
          return e4;
        });
      }(e2 = function(e3) {
        return ex(e3, (e4) => e4.type !== "inlineCode" ? e4 : Object.assign({}, e4, {value: e4.value.replace(/\s+/g, " ")}));
      }(e2 = function(e3) {
        return rx(e3, (e4, t3) => e4.type === "text" && t3.type === "text", (e4, t3) => ({type: "text", value: e4.value + t3.value, position: {start: e4.position.start, end: t3.position.end}}));
      }(e2 = function(e3, t3) {
        return ex(e3, (e4) => e4.type === "text" && e4.value !== "*" && e4.value !== "_" && nx.test(e4.value) && e4.position.end.offset - e4.position.start.offset !== e4.value.length ? Object.assign({}, e4, {value: t3.originalText.slice(e4.position.start.offset, e4.position.end.offset)}) : e4);
      }(e2, t2))), t2), t2), t2)));
    };
    const {isFrontMatterNode: ux} = Lt, {startWithPragma: ix} = QF, ax = new Set(["position", "raw"]);
    function sx(e2, t2, n2) {
      return e2.type !== "front-matter" && e2.type !== "code" && e2.type !== "yaml" && e2.type !== "import" && e2.type !== "export" && e2.type !== "jsx" || delete t2.value, e2.type === "list" && delete t2.isAligned, e2.type !== "list" && e2.type !== "listItem" || (delete t2.spread, delete t2.loose), e2.type === "text" ? null : (e2.type === "inlineCode" && (t2.value = e2.value.replace(/[\t\n ]+/g, " ")), e2.type === "wikiLink" && (t2.value = e2.value.trim().replace(/[\t\n]+/g, " ")), e2.type !== "definition" && e2.type !== "linkReference" || (t2.label = e2.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), e2.type !== "definition" && e2.type !== "link" && e2.type !== "image" || !e2.title || (t2.title = e2.title.replace(/\\(["')])/g, "$1")), n2 && n2.type === "root" && n2.children.length > 0 && (n2.children[0] === e2 || ux(n2.children[0]) && n2.children[1] === e2) && e2.type === "html" && ix(e2.value) ? null : void 0);
    }
    sx.ignoredProperties = ax;
    var cx = sx;
    const {getLast: lx, getMinNotPresentContinuousCount: px, getMaxContinuousCount: dx, getStringWidth: fx} = Lt, {builders: {breakParent: hx, concat: mx, join: gx, line: Dx, literalline: yx, markAsRoot: Ex, hardline: Cx, softline: bx, ifBreak: vx, fill: Ax, align: Fx, indent: xx, group: Sx}, utils: {normalizeDoc: wx}, printer: {printDocToString: Tx}} = cn, {replaceEndOfLineWith: Bx} = Lt, {insertPragma: Nx} = QF, {locStart: kx, locEnd: Px} = wF, {getFencedCodeBlockValue: Ox, hasGitDiffFriendlyOrderedList: Ix, splitText: Lx, punctuationPattern: Mx, INLINE_NODE_TYPES: jx, INLINE_NODE_WRAPPER_TYPES: _x, isAutolink: Rx} = RF, Vx = new Set(["importExport"]), $x = ["heading", "tableCell", "link", "wikiLink"], qx = new Set(["listItem", "definition", "footnoteDefinition"]);
    function Wx(e2, t2, n2, r2) {
      const o2 = e2.getValue(), u2 = o2.checked === null ? "" : o2.checked ? "[x] " : "[ ] ";
      return mx([u2, Xx(e2, t2, n2, {processor: (e3, o3) => {
        if (o3 === 0 && e3.getValue().type !== "list")
          return Fx(" ".repeat(u2.length), e3.call(n2));
        const i2 = " ".repeat((a2 = t2.tabWidth - r2.length, c2 = 3, a2 < (s2 = 0) ? s2 : a2 > c2 ? c2 : a2));
        var a2, s2, c2;
        return mx([i2, Fx(i2, e3.call(n2))]);
      }})]);
    }
    function Ux(e2, t2) {
      return function(e3, t3, n2) {
        n2 = n2 || (() => true);
        let r2 = -1;
        for (const o2 of t3.children)
          if (o2.type === e3.type && n2(o2) ? r2++ : r2 = -1, o2 === e3)
            return r2;
      }(e2, t2, (t3) => t3.ordered === e2.ordered);
    }
    function Jx(e2, t2) {
      const n2 = [].concat(t2);
      let r2, o2 = -1;
      for (; r2 = e2.getParentNode(++o2); )
        if (n2.includes(r2.type))
          return o2;
      return -1;
    }
    function zx(e2, t2) {
      const n2 = Jx(e2, t2);
      return n2 === -1 ? null : e2.getParentNode(n2);
    }
    function Hx(e2, t2, n2) {
      if (n2.proseWrap === "preserve" && t2 === "\n")
        return Cx;
      const r2 = n2.proseWrap === "always" && !zx(e2, $x);
      return t2 !== "" ? r2 ? Dx : " " : r2 ? bx : "";
    }
    function Gx(e2, t2, n2) {
      const r2 = [];
      let o2 = null;
      const {children: u2} = e2.getValue();
      return u2.forEach((e3, t3) => {
        switch (Kx(e3)) {
          case "start":
            o2 === null && (o2 = {index: t3, offset: e3.position.end.offset});
            break;
          case "end":
            o2 !== null && (r2.push({start: o2, end: {index: t3, offset: e3.position.start.offset}}), o2 = null);
        }
      }), Xx(e2, t2, n2, {processor: (e3, o3) => {
        if (r2.length !== 0) {
          const e4 = r2[0];
          if (o3 === e4.start.index)
            return mx([u2[e4.start.index].value, t2.originalText.slice(e4.start.offset, e4.end.offset), u2[e4.end.index].value]);
          if (e4.start.index < o3 && o3 < e4.end.index)
            return false;
          if (o3 === e4.end.index)
            return r2.shift(), false;
        }
        return e3.call(n2);
      }});
    }
    function Xx(e2, t2, n2, r2) {
      const o2 = (r2 = r2 || {}).postprocessor || mx, u2 = r2.processor || ((e3) => e3.call(n2)), i2 = e2.getValue(), a2 = [];
      let s2;
      return e2.each((e3, n3) => {
        const r3 = e3.getValue(), o3 = u2(e3, n3);
        if (o3 !== false) {
          const e4 = {parts: a2, prevNode: s2, parentNode: i2, options: t2};
          (function(e5, t3) {
            const n4 = t3.parts.length === 0, r4 = jx.includes(e5.type), o4 = e5.type === "html" && _x.includes(t3.parentNode.type);
            return n4 || r4 || o4;
          })(r3, e4) || (a2.push(Cx), s2 && Vx.has(s2.type) || (function(e5, t3) {
            const n4 = (t3.prevNode && t3.prevNode.type) === e5.type && qx.has(e5.type), r4 = t3.parentNode.type === "listItem" && !t3.parentNode.loose, o4 = t3.prevNode && t3.prevNode.type === "listItem" && t3.prevNode.loose, u3 = Kx(t3.prevNode) === "next", i3 = e5.type === "html" && t3.prevNode && t3.prevNode.type === "html" && t3.prevNode.position.end.line + 1 === e5.position.start.line, a3 = e5.type === "html" && t3.parentNode.type === "listItem" && t3.prevNode && t3.prevNode.type === "paragraph" && t3.prevNode.position.end.line + 1 === e5.position.start.line;
            return o4 || !(n4 || r4 || u3 || i3 || a3);
          }(r3, e4) || Qx(r3, e4)) && a2.push(Cx), Qx(r3, e4) && a2.push(Cx)), a2.push(o3), s2 = r3;
        }
      }, "children"), o2(a2);
    }
    function Yx(e2) {
      let t2 = e2;
      for (; t2.children && t2.children.length !== 0; )
        t2 = t2.children[t2.children.length - 1];
      return t2;
    }
    function Kx(e2) {
      if (e2.type !== "html")
        return false;
      const t2 = e2.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
      return t2 !== null && (t2[1] ? t2[1] : "next");
    }
    function Qx(e2, t2) {
      const n2 = t2.prevNode && t2.prevNode.type === "list", r2 = e2.type === "code" && e2.isIndented;
      return n2 && r2;
    }
    function Zx(e2, t2) {
      const n2 = [" "].concat(t2 || []);
      return new RegExp(n2.map((e3) => "\\".concat(e3)).join("|")).test(e2) ? "<".concat(e2, ">") : e2;
    }
    function eS(e2, t2, n2) {
      if (n2 == null && (n2 = true), !e2)
        return "";
      if (n2)
        return " " + eS(e2, t2, false);
      if ((e2 = e2.replace(/\\(["')])/g, "$1")).includes('"') && e2.includes("'") && !e2.includes(")"))
        return "(".concat(e2, ")");
      const r2 = e2.split("'").length - 1, o2 = e2.split('"').length - 1, u2 = r2 > o2 ? '"' : o2 > r2 || t2.singleQuote ? "'" : '"';
      return e2 = (e2 = e2.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(u2, ")"), "g"), "\\$1"), "".concat(u2).concat(e2).concat(u2);
    }
    var tS = {preprocess: ox, print: function(e2, t2, n2) {
      const r2 = e2.getValue();
      if (function(e3) {
        const t3 = zx(e3, ["linkReference", "imageReference"]);
        return t3 && (t3.type !== "linkReference" || t3.referenceType !== "full");
      }(e2))
        return mx(Lx(t2.originalText.slice(r2.position.start.offset, r2.position.end.offset), t2).map((n3) => n3.type === "word" ? n3.value : n3.value === "" ? "" : Hx(e2, n3.value, t2)));
      switch (r2.type) {
        case "front-matter":
          return t2.originalText.slice(r2.position.start.offset, r2.position.end.offset);
        case "root":
          return r2.children.length === 0 ? "" : mx([wx(Gx(e2, t2, n2)), Vx.has(Yx(r2).type) ? "" : Cx]);
        case "paragraph":
          return Xx(e2, t2, n2, {postprocessor: Ax});
        case "sentence":
          return Xx(e2, t2, n2);
        case "word": {
          let t3 = r2.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(Mx, ")(_+)"), "(_+)(".concat(Mx, "|$)")].join("|"), "g"), (e3, t4, n4, r3, o3) => (n4 ? "".concat(t4).concat(n4) : "".concat(r3).concat(o3)).replace(/_/g, "\\_"));
          const n3 = (e3, t4, n4) => e3.type === "sentence" && n4 === 0, o2 = (e3, t4, n4) => Rx(e3.children[n4 - 1]);
          return t3 !== r2.value && (e2.match(void 0, n3, o2) || e2.match(void 0, n3, (e3, t4, n4) => e3.type === "emphasis" && n4 === 0, o2)) && (t3 = t3.replace(/^(\\?[*_])+/, (e3) => e3.replace(/\\/g, ""))), t3;
        }
        case "whitespace": {
          const n3 = e2.getParentNode(), o2 = n3.children.indexOf(r2), u2 = n3.children[o2 + 1], i2 = u2 && /^>|^([*+-]|#{1,6}|\d+[).])$/.test(u2.value) ? "never" : t2.proseWrap;
          return Hx(e2, r2.value, {proseWrap: i2});
        }
        case "emphasis": {
          let o2;
          if (Rx(r2.children[0]))
            o2 = t2.originalText[r2.position.start.offset];
          else {
            const t3 = e2.getParentNode(), n3 = t3.children.indexOf(r2), u2 = t3.children[n3 - 1], i2 = t3.children[n3 + 1];
            o2 = u2 && u2.type === "sentence" && u2.children.length > 0 && lx(u2.children).type === "word" && !lx(u2.children).hasTrailingPunctuation || i2 && i2.type === "sentence" && i2.children.length > 0 && i2.children[0].type === "word" && !i2.children[0].hasLeadingPunctuation || zx(e2, "emphasis") ? "*" : "_";
          }
          return mx([o2, Xx(e2, t2, n2), o2]);
        }
        case "strong":
          return mx(["**", Xx(e2, t2, n2), "**"]);
        case "delete":
          return mx(["~~", Xx(e2, t2, n2), "~~"]);
        case "inlineCode": {
          const e3 = px(r2.value, "`"), t3 = "`".repeat(e3 || 1), n3 = e3 && !/^\s/.test(r2.value) ? " " : "";
          return mx([t3, n3, r2.value, n3, t3]);
        }
        case "wikiLink": {
          let e3 = "";
          return e3 = t2.proseWrap === "preserve" ? r2.value : r2.value.replace(/[\t\n]+/g, " "), mx(["[[", e3, "]]"]);
        }
        case "link":
          switch (t2.originalText[r2.position.start.offset]) {
            case "<": {
              const e3 = "mailto:", n3 = r2.url.startsWith(e3) && t2.originalText.slice(r2.position.start.offset + 1, r2.position.start.offset + 1 + e3.length) !== e3 ? r2.url.slice(e3.length) : r2.url;
              return mx(["<", n3, ">"]);
            }
            case "[":
              return mx(["[", Xx(e2, t2, n2), "](", Zx(r2.url, ")"), eS(r2.title, t2), ")"]);
            default:
              return t2.originalText.slice(r2.position.start.offset, r2.position.end.offset);
          }
        case "image":
          return mx(["![", r2.alt || "", "](", Zx(r2.url, ")"), eS(r2.title, t2), ")"]);
        case "blockquote":
          return mx(["> ", Fx("> ", Xx(e2, t2, n2))]);
        case "heading":
          return mx(["#".repeat(r2.depth) + " ", Xx(e2, t2, n2)]);
        case "code": {
          if (r2.isIndented) {
            const e4 = " ".repeat(4);
            return Fx(e4, mx([e4, mx(Bx(r2.value, Cx))]));
          }
          const e3 = t2.__inJsTemplate ? "~" : "`", n3 = e3.repeat(Math.max(3, dx(r2.value, e3) + 1));
          return mx([n3, r2.lang || "", r2.meta ? " " + r2.meta : "", Cx, mx(Bx(Ox(r2, t2.originalText), Cx)), Cx, n3]);
        }
        case "html": {
          const t3 = e2.getParentNode(), n3 = t3.type === "root" && lx(t3.children) === r2 ? r2.value.trimEnd() : r2.value, o2 = /^<!--[\S\s]*-->$/.test(n3);
          return mx(Bx(n3, o2 ? Cx : Ex(yx)));
        }
        case "list": {
          const o2 = Ux(r2, e2.getParentNode()), u2 = Ix(r2, t2);
          return Xx(e2, t2, n2, {processor: (e3, i2) => {
            const a2 = function() {
              const e4 = r2.ordered ? (i2 === 0 ? r2.start : u2 ? 1 : r2.start + i2) + (o2 % 2 == 0 ? ". " : ") ") : o2 % 2 == 0 ? "- " : "* ";
              return r2.isAligned || r2.hasIndentedCodeblock ? function(e5, t3) {
                const n3 = r3();
                return e5 + " ".repeat(n3 >= 4 ? 0 : n3);
                function r3() {
                  const n4 = e5.length % t3.tabWidth;
                  return n4 === 0 ? 0 : t3.tabWidth - n4;
                }
              }(e4, t2) : e4;
            }(), s2 = e3.getValue();
            return s2.children.length === 2 && s2.children[1].type === "html" && s2.children[0].position.start.column !== s2.children[1].position.start.column ? mx([a2, Wx(e3, t2, n2, a2)]) : mx([a2, Fx(" ".repeat(a2.length), Wx(e3, t2, n2, a2))]);
          }});
        }
        case "thematicBreak": {
          const t3 = Jx(e2, "list");
          if (t3 === -1)
            return "---";
          return Ux(e2.getParentNode(t3), e2.getParentNode(t3 + 1)) % 2 == 0 ? "***" : "---";
        }
        case "linkReference":
          return mx(["[", Xx(e2, t2, n2), "]", r2.referenceType === "full" ? mx(["[", r2.identifier, "]"]) : r2.referenceType === "collapsed" ? "[]" : ""]);
        case "imageReference":
          switch (r2.referenceType) {
            case "full":
              return mx(["![", r2.alt || "", "][", r2.identifier, "]"]);
            default:
              return mx(["![", r2.alt, "]", r2.referenceType === "collapsed" ? "[]" : ""]);
          }
        case "definition": {
          const e3 = t2.proseWrap === "always" ? Dx : " ";
          return Sx(mx([mx(["[", r2.identifier, "]:"]), xx(mx([e3, Zx(r2.url), r2.title === null ? "" : mx([e3, eS(r2.title, t2, false)])]))]));
        }
        case "footnote":
          return mx(["[^", Xx(e2, t2, n2), "]"]);
        case "footnoteReference":
          return mx(["[^", r2.identifier, "]"]);
        case "footnoteDefinition": {
          const o2 = e2.getParentNode().children[e2.getName() + 1], u2 = r2.children.length === 1 && r2.children[0].type === "paragraph" && (t2.proseWrap === "never" || t2.proseWrap === "preserve" && r2.children[0].position.start.line === r2.children[0].position.end.line);
          return mx(["[^", r2.identifier, "]: ", u2 ? Xx(e2, t2, n2) : Sx(mx([Fx(" ".repeat(4), Xx(e2, t2, n2, {processor: (e3, t3) => t3 === 0 ? Sx(mx([bx, e3.call(n2)])) : e3.call(n2)})), o2 && o2.type === "footnoteDefinition" ? bx : ""]))]);
        }
        case "table":
          return function(e3, t3, n3) {
            const r3 = Cx.parts[0], o2 = e3.getValue(), u2 = [], i2 = e3.map((e4) => e4.map((e5, r4) => {
              const o3 = Tx(e5.call(n3), t3).formatted, i3 = fx(o3);
              return u2[r4] = Math.max(u2[r4] || 3, i3), {text: o3, width: i3};
            }, "children"), "children"), a2 = c2(false);
            if (t3.proseWrap !== "never")
              return mx([hx, a2]);
            const s2 = c2(true);
            return mx([hx, Sx(vx(s2, a2))]);
            function c2(e4) {
              const t4 = [p2(i2[0], e4), l2(e4)];
              return i2.length > 1 && t4.push(gx(r3, i2.slice(1).map((t5) => p2(t5, e4)))), gx(r3, t4);
            }
            function l2(e4) {
              const t4 = u2.map((t5, n4) => {
                const r4 = o2.align[n4], u3 = r4 === "center" || r4 === "left" ? ":" : "-", i3 = r4 === "center" || r4 === "right" ? ":" : "-", a3 = e4 ? "-" : "-".repeat(t5 - 2);
                return "".concat(u3).concat(a3).concat(i3);
              });
              return "| ".concat(t4.join(" | "), " |");
            }
            function p2(e4, t4) {
              const n4 = e4.map(({text: e5, width: n5}, r4) => {
                if (t4)
                  return e5;
                const i3 = u2[r4] - n5, a3 = o2.align[r4];
                let s3 = 0;
                a3 === "right" ? s3 = i3 : a3 === "center" && (s3 = Math.floor(i3 / 2));
                const c3 = i3 - s3;
                return "".concat(" ".repeat(s3)).concat(e5).concat(" ".repeat(c3));
              });
              return "| ".concat(n4.join(" | "), " |");
            }
          }(e2, t2, n2);
        case "tableCell":
          return Xx(e2, t2, n2);
        case "break":
          return /\s/.test(t2.originalText[r2.position.start.offset]) ? mx(["  ", Ex(yx)]) : mx(["\\", Cx]);
        case "liquidNode":
          return mx(Bx(r2.value, Cx));
        case "importExport":
          return mx([r2.value, Cx]);
        case "jsx":
          return r2.value;
        case "math":
          return mx(["$$", Cx, r2.value ? mx([mx(Bx(r2.value, Cx)), Cx]) : "", "$$"]);
        case "inlineMath":
          return t2.originalText.slice(kx(r2), Px(r2));
        case "tableRow":
        case "listItem":
        default:
          throw new Error("Unknown markdown type ".concat(JSON.stringify(r2.type)));
      }
    }, embed: GF, massageAstNode: cx, hasPrettierIgnore: function(e2) {
      const t2 = +e2.getName();
      return t2 !== 0 && Kx(e2.getParentNode().children[t2 - 1]) === "next";
    }, insertPragma: Nx}, nS = {proseWrap: RC.proseWrap, singleQuote: RC.singleQuote}, rS = {name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222};
    var oS = {languages: [ks(rS, (e2) => ({since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: e2.filenames.concat(["README"]), extensions: e2.extensions.filter((e3) => e3 !== ".mdx")})), ks(rS, () => ({name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"]}))], options: nS, printers: {mdast: tS}, parsers: {get remark() {
      return {}.parsers.remark;
    }, get markdown() {
      return {}.parsers.remark;
    }, get mdx() {
      return {}.parsers.mdx;
    }}};
    const {isFrontMatterNode: uS} = Lt, iS = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
    function aS(e2, t2) {
      return e2.type === "text" || e2.type === "comment" || uS(e2) || e2.type === "yaml" || e2.type === "toml" ? null : (e2.type === "attribute" && delete t2.value, void (e2.type === "docType" && delete t2.value));
    }
    aS.ignoredProperties = iS;
    var sS = aS, cS = {"*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"], abbr: ["title"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], bdo: ["dir"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dfn: ["title"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["accesskey", "for", "form"], legend: ["accesskey", "align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"], select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"], slot: ["name"], source: ["media", "sizes", "src", "srcset", "type"], style: ["media", "nonce", "title", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"]};
    const {inferParserByLanguage: lS, isFrontMatterNode: pS} = Lt, {CSS_DISPLAY_TAGS: dS, CSS_DISPLAY_DEFAULT: fS, CSS_WHITE_SPACE_TAGS: hS, CSS_WHITE_SPACE_DEFAULT: mS} = {CSS_DISPLAY_TAGS: {area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block"}, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: {listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap"}, CSS_WHITE_SPACE_DEFAULT: "normal"}, gS = bS(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]), DS = function(e2, t2) {
      const n2 = Object.create(null);
      for (const r2 of Object.keys(e2))
        n2[r2] = t2(e2[r2], r2);
      return n2;
    }(cS, bS), yS = new Set(["	", "\n", "\f", "\r", " "]), ES = (e2) => e2.replace(/[\t\n\f\r ]+$/, ""), CS = (e2) => e2.match(/^[\t\n\f\r ]*/)[0];
    function bS(e2) {
      const t2 = Object.create(null);
      for (const n2 of e2)
        t2[n2] = true;
      return t2;
    }
    function vS(e2, t2) {
      return !(e2.type !== "ieConditionalComment" || !e2.lastChild || e2.lastChild.isSelfClosing || e2.lastChild.endSourceSpan) || (e2.type === "ieConditionalComment" && !e2.complete || (!(!IS(e2) || !e2.children.some((e3) => e3.type !== "text" && e3.type !== "interpolation")) || !(!VS(e2, t2) || FS(e2) || e2.type === "interpolation")));
    }
    function AS(e2) {
      if (e2.type === "attribute")
        return false;
      if (!e2.parent)
        return false;
      if (typeof e2.index != "number" || e2.index === 0)
        return false;
      return function(e3) {
        return e3.type === "comment" && e3.value.trim() === "prettier-ignore";
      }(e2.parent.children[e2.index - 1]);
    }
    function FS(e2) {
      return e2.type === "element" && (e2.fullName === "script" || e2.fullName === "style" || e2.fullName === "svg:style" || LS(e2) && (e2.name === "script" || e2.name === "style"));
    }
    function xS(e2) {
      return MS(e2).startsWith("pre");
    }
    function SS(e2) {
      return e2.type === "element" && e2.children.length !== 0 && (["html", "head", "ul", "ol", "select"].includes(e2.name) || e2.cssDisplay.startsWith("table") && e2.cssDisplay !== "table-cell");
    }
    function wS(e2) {
      return kS(e2) || e2.type === "element" && e2.fullName === "br" || TS(e2);
    }
    function TS(e2) {
      return BS(e2) && NS(e2);
    }
    function BS(e2) {
      return e2.hasLeadingSpaces && (e2.prev ? e2.prev.sourceSpan.end.line < e2.sourceSpan.start.line : e2.parent.type === "root" || e2.parent.startSourceSpan.end.line < e2.sourceSpan.start.line);
    }
    function NS(e2) {
      return e2.hasTrailingSpaces && (e2.next ? e2.next.sourceSpan.start.line > e2.sourceSpan.end.line : e2.parent.type === "root" || e2.parent.endSourceSpan && e2.parent.endSourceSpan.start.line > e2.sourceSpan.end.line);
    }
    function kS(e2) {
      switch (e2.type) {
        case "ieConditionalComment":
        case "comment":
        case "directive":
          return true;
        case "element":
          return ["script", "select"].includes(e2.name);
      }
      return false;
    }
    function PS(e2) {
      const {type: t2, lang: n2} = e2.attrMap;
      return t2 === "module" || t2 === "text/javascript" || t2 === "text/babel" || t2 === "application/javascript" || n2 === "jsx" ? "babel" : t2 === "application/x-typescript" || n2 === "ts" || n2 === "tsx" ? "typescript" : t2 === "text/markdown" ? "markdown" : t2 === "text/html" ? "html" : t2 && (t2.endsWith("json") || t2.endsWith("importmap")) ? "json" : t2 === "text/x-handlebars-template" ? "glimmer" : void 0;
    }
    function OS(e2) {
      return e2 === "block" || e2 === "list-item" || e2.startsWith("table");
    }
    function IS(e2) {
      return MS(e2).startsWith("pre");
    }
    function LS(e2) {
      return e2.type === "element" && !e2.hasExplicitNamespace && !["html", "svg"].includes(e2.namespace);
    }
    function MS(e2) {
      return e2.type === "element" && (!e2.namespace || LS(e2)) && hS[e2.name] || mS;
    }
    const jS = new Set(["template", "style", "script"]);
    function _S(e2, t2) {
      return RS(e2, t2) && !jS.has(e2.fullName);
    }
    function RS(e2, t2) {
      return t2.parser === "vue" && e2.type === "element" && e2.parent.type === "root" && e2.fullName.toLowerCase() !== "html";
    }
    function VS(e2, t2) {
      return RS(e2, t2) && (_S(e2, t2) || e2.attrMap.lang && e2.attrMap.lang !== "html");
    }
    var $S = {HTML_ELEMENT_ATTRIBUTES: DS, HTML_TAGS: gS, htmlTrim: (e2) => ((e3) => e3.replace(/^[\t\n\f\r ]+/, ""))(ES(e2)), htmlTrimPreserveIndentation: (e2) => ((e3) => e3.replace(/^[\t\f\r ]*?\n/g, ""))(ES(e2)), splitByHtmlWhitespace: (e2) => e2.split(/[\t\n\f\r ]+/), hasHtmlWhitespace: (e2) => /[\t\n\f\r ]/.test(e2), getLeadingAndTrailingHtmlWhitespace: (e2) => {
      const [, t2, n2, r2] = e2.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/);
      return {leadingWhitespace: t2, trailingWhitespace: r2, text: n2};
    }, canHaveInterpolation: function(e2) {
      return e2.children && !FS(e2);
    }, countChars: function(e2, t2) {
      let n2 = 0;
      for (let r2 = 0; r2 < e2.length; r2++)
        e2[r2] === t2 && n2++;
      return n2;
    }, countParents: function(e2, t2) {
      let n2 = 0;
      for (let r2 = e2.stack.length - 1; r2 >= 0; r2--) {
        const o2 = e2.stack[r2];
        o2 && typeof o2 == "object" && !Array.isArray(o2) && t2(o2) && n2++;
      }
      return n2;
    }, dedentString: function(e2, t2 = function(e3) {
      let t3 = 1 / 0;
      for (const n2 of e3.split("\n")) {
        if (n2.length === 0)
          continue;
        if (!yS.has(n2[0]))
          return 0;
        const e4 = CS(n2).length;
        n2.length !== e4 && e4 < t3 && (t3 = e4);
      }
      return t3 === 1 / 0 ? 0 : t3;
    }(e2)) {
      return t2 === 0 ? e2 : e2.split("\n").map((e3) => e3.slice(t2)).join("\n");
    }, forceBreakChildren: SS, forceBreakContent: function(e2) {
      return SS(e2) || e2.type === "element" && e2.children.length !== 0 && (["body", "script", "style"].includes(e2.name) || e2.children.some((e3) => function(e4) {
        return e4.children && e4.children.some((e5) => e5.type !== "text");
      }(e3))) || e2.firstChild && e2.firstChild === e2.lastChild && e2.firstChild.type !== "text" && BS(e2.firstChild) && (!e2.lastChild.isTrailingSpaceSensitive || NS(e2.lastChild));
    }, forceNextEmptyLine: function(e2) {
      return pS(e2) || e2.next && e2.sourceSpan.end && e2.sourceSpan.end.line + 1 < e2.next.sourceSpan.start.line;
    }, getLastDescendant: function e2(t2) {
      return t2.lastChild ? e2(t2.lastChild) : t2;
    }, getNodeCssStyleDisplay: function(e2, t2) {
      if (e2.prev && e2.prev.type === "comment") {
        const t3 = e2.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
        if (t3)
          return t3[1];
      }
      let n2 = false;
      if (e2.type === "element" && e2.namespace === "svg") {
        if (!function(e3, t3) {
          let n3 = e3;
          for (; n3; ) {
            if (t3(n3))
              return true;
            n3 = n3.parent;
          }
          return false;
        }(e2, (e3) => e3.fullName === "svg:foreignObject"))
          return e2.name === "svg" ? "inline-block" : "block";
        n2 = true;
      }
      switch (t2.htmlWhitespaceSensitivity) {
        case "strict":
          return "inline";
        case "ignore":
          return "block";
        default:
          return t2.parser === "vue" && e2.parent && e2.parent.type === "root" ? "block" : e2.type === "element" && (!e2.namespace || n2 || LS(e2)) && dS[e2.name] || fS;
      }
    }, getNodeCssStyleWhiteSpace: MS, getPrettierIgnoreAttributeCommentData: function(e2) {
      const t2 = e2.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
      return !!t2 && (!t2[1] || t2[1].split(/\s+/));
    }, hasPrettierIgnore: AS, inferScriptParser: function(e2, t2) {
      return e2.name !== "script" || e2.attrMap.src ? e2.name === "style" ? function(e3) {
        const {lang: t3} = e3.attrMap;
        return t3 && t3 !== "postcss" && t3 !== "css" ? t3 === "scss" ? "scss" : t3 === "less" ? "less" : void 0 : "css";
      }(e2) : t2 && VS(e2, t2) ? PS(e2) || !("src" in e2.attrMap) && lS(e2.attrMap.lang, t2) : void 0 : e2.attrMap.lang || e2.attrMap.type ? PS(e2) : "babel";
    }, isVueCustomBlock: _S, isVueNonHtmlBlock: VS, isVueSlotAttribute: function(e2) {
      const t2 = e2.fullName;
      return t2.charAt(0) === "#" || t2 === "slot-scope" || t2 === "v-slot" || t2.startsWith("v-slot:");
    }, isVueSfcBindingsAttribute: function(e2, t2) {
      const n2 = e2.parent;
      if (!RS(n2, t2))
        return false;
      const r2 = n2.fullName, o2 = e2.fullName;
      return r2 === "script" && o2 === "setup" || r2 === "style" && o2 === "vars";
    }, isDanglingSpaceSensitiveNode: function(e2) {
      return !(t2 = e2.cssDisplay, OS(t2) || t2 === "inline-block" || FS(e2));
      var t2;
    }, isIndentationSensitiveNode: xS, isLeadingSpaceSensitiveNode: function(e2, t2) {
      const n2 = function() {
        if (pS(e2))
          return false;
        if ((e2.type === "text" || e2.type === "interpolation") && e2.prev && (e2.prev.type === "text" || e2.prev.type === "interpolation"))
          return true;
        if (!e2.parent || e2.parent.cssDisplay === "none")
          return false;
        if (IS(e2.parent))
          return true;
        if (!e2.prev && (e2.parent.type === "root" || IS(e2) && e2.parent || FS(e2.parent) || _S(e2.parent, t2) || (n3 = e2.parent.cssDisplay, OS(n3) || n3 === "inline-block")))
          return false;
        var n3;
        if (e2.prev && !function(e3) {
          return !OS(e3);
        }(e2.prev.cssDisplay))
          return false;
        return true;
      }();
      return n2 && !e2.prev && e2.parent && e2.parent.tagDefinition && e2.parent.tagDefinition.ignoreFirstLf ? e2.type === "interpolation" : n2;
    }, isPreLikeNode: IS, isScriptLikeTag: FS, isTextLikeNode: function(e2) {
      return e2.type === "text" || e2.type === "comment";
    }, isTrailingSpaceSensitiveNode: function(e2, t2) {
      return !pS(e2) && (!(e2.type !== "text" && e2.type !== "interpolation" || !e2.next || e2.next.type !== "text" && e2.next.type !== "interpolation") || !(!e2.parent || e2.parent.cssDisplay === "none") && (!!IS(e2.parent) || !(!e2.next && (e2.parent.type === "root" || IS(e2) && e2.parent || FS(e2.parent) || _S(e2.parent, t2) || (n2 = e2.parent.cssDisplay, OS(n2) || n2 === "inline-block"))) && !(e2.next && !function(e3) {
        return !OS(e3);
      }(e2.next.cssDisplay))));
      var n2;
    }, isWhitespaceSensitiveNode: function(e2) {
      return FS(e2) || e2.type === "interpolation" || xS(e2);
    }, isUnknownNamespace: LS, preferHardlineAsLeadingSpaces: function(e2) {
      return kS(e2) || e2.prev && wS(e2.prev) || TS(e2);
    }, preferHardlineAsTrailingSpaces: wS, shouldNotPrintClosingTag: function(e2, t2) {
      return !e2.isSelfClosing && !e2.endSourceSpan && (AS(e2) || vS(e2.parent, t2));
    }, shouldPreserveContent: vS, unescapeQuoteEntities: function(e2) {
      return e2.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
    }}, qS = je(function(e2, t2) {
      function n2(e3) {
        return t2.$0 <= e3 && e3 <= t2.$9;
      }
      /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
      Object.defineProperty(t2, "__esModule", {value: true}), t2.$EOF = 0, t2.$BSPACE = 8, t2.$TAB = 9, t2.$LF = 10, t2.$VTAB = 11, t2.$FF = 12, t2.$CR = 13, t2.$SPACE = 32, t2.$BANG = 33, t2.$DQ = 34, t2.$HASH = 35, t2.$$ = 36, t2.$PERCENT = 37, t2.$AMPERSAND = 38, t2.$SQ = 39, t2.$LPAREN = 40, t2.$RPAREN = 41, t2.$STAR = 42, t2.$PLUS = 43, t2.$COMMA = 44, t2.$MINUS = 45, t2.$PERIOD = 46, t2.$SLASH = 47, t2.$COLON = 58, t2.$SEMICOLON = 59, t2.$LT = 60, t2.$EQ = 61, t2.$GT = 62, t2.$QUESTION = 63, t2.$0 = 48, t2.$7 = 55, t2.$9 = 57, t2.$A = 65, t2.$E = 69, t2.$F = 70, t2.$X = 88, t2.$Z = 90, t2.$LBRACKET = 91, t2.$BACKSLASH = 92, t2.$RBRACKET = 93, t2.$CARET = 94, t2.$_ = 95, t2.$a = 97, t2.$b = 98, t2.$e = 101, t2.$f = 102, t2.$n = 110, t2.$r = 114, t2.$t = 116, t2.$u = 117, t2.$v = 118, t2.$x = 120, t2.$z = 122, t2.$LBRACE = 123, t2.$BAR = 124, t2.$RBRACE = 125, t2.$NBSP = 160, t2.$PIPE = 124, t2.$TILDA = 126, t2.$AT = 64, t2.$BT = 96, t2.isWhitespace = function(e3) {
        return e3 >= t2.$TAB && e3 <= t2.$SPACE || e3 == t2.$NBSP;
      }, t2.isDigit = n2, t2.isAsciiLetter = function(e3) {
        return e3 >= t2.$a && e3 <= t2.$z || e3 >= t2.$A && e3 <= t2.$Z;
      }, t2.isAsciiHexDigit = function(e3) {
        return e3 >= t2.$a && e3 <= t2.$f || e3 >= t2.$A && e3 <= t2.$F || n2(e3);
      }, t2.isNewLine = function(e3) {
        return e3 === t2.$LF || e3 === t2.$CR;
      }, t2.isOctalDigit = function(e3) {
        return t2.$0 <= e3 && e3 <= t2.$7;
      };
    }), WS = je(function(e2, t2) {
      /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
      Object.defineProperty(t2, "__esModule", {value: true});
      class n2 {
        constructor(e3, t3, n4) {
          this.filePath = e3, this.name = t3, this.members = n4;
        }
        assertNoMembers() {
          if (this.members.length)
            throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
        }
      }
      t2.StaticSymbol = n2;
      t2.StaticSymbolCache = class {
        constructor() {
          this.cache = new Map();
        }
        get(e3, t3, r2) {
          const o2 = (r2 = r2 || []).length ? ".".concat(r2.join(".")) : "", u2 = '"'.concat(e3, '".').concat(t3).concat(o2);
          let i2 = this.cache.get(u2);
          return i2 || (i2 = new n2(e3, t3, r2), this.cache.set(u2, i2)), i2;
        }
      };
    }), US = je(function(e2, t2) {
      /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
      Object.defineProperty(t2, "__esModule", {value: true});
      const n2 = /-+([a-z0-9])/g;
      function r2(e3, t3, n3) {
        const r3 = e3.indexOf(t3);
        return r3 == -1 ? n3 : [e3.slice(0, r3).trim(), e3.slice(r3 + 1).trim()];
      }
      function o2(e3, t3, n3) {
        return Array.isArray(e3) ? t3.visitArray(e3, n3) : typeof (r3 = e3) == "object" && r3 !== null && Object.getPrototypeOf(r3) === a2 ? t3.visitStringMap(e3, n3) : e3 == null || typeof e3 == "string" || typeof e3 == "number" || typeof e3 == "boolean" ? t3.visitPrimitive(e3, n3) : t3.visitOther(e3, n3);
        var r3;
      }
      t2.dashCaseToCamelCase = function(e3) {
        return e3.replace(n2, (...e4) => e4[1].toUpperCase());
      }, t2.splitAtColon = function(e3, t3) {
        return r2(e3, ":", t3);
      }, t2.splitAtPeriod = function(e3, t3) {
        return r2(e3, ".", t3);
      }, t2.visitValue = o2, t2.isDefined = function(e3) {
        return e3 != null;
      }, t2.noUndefined = function(e3) {
        return e3 === void 0 ? null : e3;
      };
      t2.ValueTransformer = class {
        visitArray(e3, t3) {
          return e3.map((e4) => o2(e4, this, t3));
        }
        visitStringMap(e3, t3) {
          const n3 = {};
          return Object.keys(e3).forEach((r3) => {
            n3[r3] = o2(e3[r3], this, t3);
          }), n3;
        }
        visitPrimitive(e3, t3) {
          return e3;
        }
        visitOther(e3, t3) {
          return e3;
        }
      }, t2.SyncAsync = {assertSync: (e3) => {
        if (s2(e3))
          throw new Error("Illegal state: value cannot be a promise");
        return e3;
      }, then: (e3, t3) => s2(e3) ? e3.then(t3) : t3(e3), all: (e3) => e3.some(s2) ? Promise.all(e3) : e3}, t2.error = function(e3) {
        throw new Error("Internal Error: ".concat(e3));
      }, t2.syntaxError = function(e3, t3) {
        const n3 = Error(e3);
        return n3[u2] = true, t3 && (n3[i2] = t3), n3;
      };
      const u2 = "ngSyntaxError", i2 = "ngParseErrors";
      t2.isSyntaxError = function(e3) {
        return e3[u2];
      }, t2.getParseErrors = function(e3) {
        return e3[i2] || [];
      }, t2.escapeRegExp = function(e3) {
        return e3.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
      };
      const a2 = Object.getPrototypeOf({});
      function s2(e3) {
        return !!e3 && typeof e3.then == "function";
      }
      t2.utf8Encode = function(e3) {
        let t3 = "";
        for (let n3 = 0; n3 < e3.length; n3++) {
          let r3 = e3.charCodeAt(n3);
          if (r3 >= 55296 && r3 <= 56319 && e3.length > n3 + 1) {
            const t4 = e3.charCodeAt(n3 + 1);
            t4 >= 56320 && t4 <= 57343 && (n3++, r3 = (r3 - 55296 << 10) + t4 - 56320 + 65536);
          }
          r3 <= 127 ? t3 += String.fromCharCode(r3) : r3 <= 2047 ? t3 += String.fromCharCode(r3 >> 6 & 31 | 192, 63 & r3 | 128) : r3 <= 65535 ? t3 += String.fromCharCode(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128) : r3 <= 2097151 && (t3 += String.fromCharCode(r3 >> 18 & 7 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128));
        }
        return t3;
      }, t2.stringify = function e3(t3) {
        if (typeof t3 == "string")
          return t3;
        if (t3 instanceof Array)
          return "[" + t3.map(e3).join(", ") + "]";
        if (t3 == null)
          return "" + t3;
        if (t3.overriddenName)
          return "".concat(t3.overriddenName);
        if (t3.name)
          return "".concat(t3.name);
        if (!t3.toString)
          return "object";
        const n3 = t3.toString();
        if (n3 == null)
          return "" + n3;
        const r3 = n3.indexOf("\n");
        return r3 === -1 ? n3 : n3.substring(0, r3);
      }, t2.resolveForwardRef = function(e3) {
        return typeof e3 == "function" && e3.hasOwnProperty("__forward_ref__") ? e3() : e3;
      }, t2.isPromise = s2;
      t2.Version = class {
        constructor(e3) {
          this.full = e3;
          const t3 = e3.split(".");
          this.major = t3[0], this.minor = t3[1], this.patch = t3.slice(2).join(".");
        }
      };
      const c2 = typeof window != "undefined" && window, l2 = typeof self != "undefined" && typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && self, p2 = Me !== void 0 && Me || c2 || l2;
      t2.global = p2;
    }), JS = je(function(e2, t2) {
      /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
      Object.defineProperty(t2, "__esModule", {value: true});
      const n2 = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
      function r2(e3) {
        return e3.replace(/\W/g, "_");
      }
      t2.sanitizeIdentifier = r2;
      let o2 = 0;
      function u2(e3) {
        if (!e3 || !e3.reference)
          return null;
        const t3 = e3.reference;
        if (t3 instanceof WS.StaticSymbol)
          return t3.name;
        if (t3.__anonymousType)
          return t3.__anonymousType;
        let n3 = US.stringify(t3);
        return n3.indexOf("(") >= 0 ? (n3 = "anonymous_".concat(o2++), t3.__anonymousType = n3) : n3 = r2(n3), n3;
      }
      var i2;
      t2.identifierName = u2, t2.identifierModuleUrl = function(e3) {
        const t3 = e3.reference;
        return t3 instanceof WS.StaticSymbol ? t3.filePath : "./".concat(US.stringify(t3));
      }, t2.viewClassName = function(e3, t3) {
        return "View_".concat(u2({reference: e3}), "_").concat(t3);
      }, t2.rendererTypeName = function(e3) {
        return "RenderType_".concat(u2({reference: e3}));
      }, t2.hostViewClassName = function(e3) {
        return "HostView_".concat(u2({reference: e3}));
      }, t2.componentFactoryName = function(e3) {
        return "".concat(u2({reference: e3}), "NgFactory");
      }, function(e3) {
        e3[e3.Pipe = 0] = "Pipe", e3[e3.Directive = 1] = "Directive", e3[e3.NgModule = 2] = "NgModule", e3[e3.Injectable = 3] = "Injectable";
      }(i2 = t2.CompileSummaryKind || (t2.CompileSummaryKind = {})), t2.tokenName = function(e3) {
        return e3.value != null ? r2(e3.value) : u2(e3.identifier);
      }, t2.tokenReference = function(e3) {
        return e3.identifier != null ? e3.identifier.reference : e3.value;
      };
      t2.CompileStylesheetMetadata = class {
        constructor({moduleUrl: e3, styles: t3, styleUrls: n3} = {}) {
          this.moduleUrl = e3 || null, this.styles = s2(t3), this.styleUrls = s2(n3);
        }
      };
      t2.CompileTemplateMetadata = class {
        constructor({encapsulation: e3, template: t3, templateUrl: n3, htmlAst: r3, styles: o3, styleUrls: u3, externalStylesheets: i3, animations: a3, ngContentSelectors: l3, interpolation: p2, isInline: d2, preserveWhitespaces: f2}) {
          if (this.encapsulation = e3, this.template = t3, this.templateUrl = n3, this.htmlAst = r3, this.styles = s2(o3), this.styleUrls = s2(u3), this.externalStylesheets = s2(i3), this.animations = a3 ? c2(a3) : [], this.ngContentSelectors = l3 || [], p2 && p2.length != 2)
            throw new Error("'interpolation' should have a start and an end symbol.");
          this.interpolation = p2, this.isInline = d2, this.preserveWhitespaces = f2;
        }
        toSummary() {
          return {ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations};
        }
      };
      class a2 {
        static create({isHost: e3, type: t3, isComponent: r3, selector: o3, exportAs: u3, changeDetection: i3, inputs: s3, outputs: c3, host: l3, providers: p2, viewProviders: d2, queries: f2, guards: h2, viewQueries: m2, entryComponents: g2, template: D2, componentViewType: y2, rendererType: E2, componentFactory: C2}) {
          const b2 = {}, v2 = {}, A2 = {};
          l3 != null && Object.keys(l3).forEach((e4) => {
            const t4 = l3[e4], r4 = e4.match(n2);
            r4 === null ? A2[e4] = t4 : r4[1] != null ? v2[r4[1]] = t4 : r4[2] != null && (b2[r4[2]] = t4);
          });
          const F2 = {};
          s3 != null && s3.forEach((e4) => {
            const t4 = US.splitAtColon(e4, [e4, e4]);
            F2[t4[0]] = t4[1];
          });
          const x2 = {};
          return c3 != null && c3.forEach((e4) => {
            const t4 = US.splitAtColon(e4, [e4, e4]);
            x2[t4[0]] = t4[1];
          }), new a2({isHost: e3, type: t3, isComponent: !!r3, selector: o3, exportAs: u3, changeDetection: i3, inputs: F2, outputs: x2, hostListeners: b2, hostProperties: v2, hostAttributes: A2, providers: p2, viewProviders: d2, queries: f2, guards: h2, viewQueries: m2, entryComponents: g2, template: D2, componentViewType: y2, rendererType: E2, componentFactory: C2});
        }
        constructor({isHost: e3, type: t3, isComponent: n3, selector: r3, exportAs: o3, changeDetection: u3, inputs: i3, outputs: a3, hostListeners: c3, hostProperties: l3, hostAttributes: p2, providers: d2, viewProviders: f2, queries: h2, guards: m2, viewQueries: g2, entryComponents: D2, template: y2, componentViewType: E2, rendererType: C2, componentFactory: b2}) {
          this.isHost = !!e3, this.type = t3, this.isComponent = n3, this.selector = r3, this.exportAs = o3, this.changeDetection = u3, this.inputs = i3, this.outputs = a3, this.hostListeners = c3, this.hostProperties = l3, this.hostAttributes = p2, this.providers = s2(d2), this.viewProviders = s2(f2), this.queries = s2(h2), this.guards = m2, this.viewQueries = s2(g2), this.entryComponents = s2(D2), this.template = y2, this.componentViewType = E2, this.rendererType = C2, this.componentFactory = b2;
        }
        toSummary() {
          return {summaryKind: i2.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory};
        }
      }
      t2.CompileDirectiveMetadata = a2;
      t2.CompilePipeMetadata = class {
        constructor({type: e3, name: t3, pure: n3}) {
          this.type = e3, this.name = t3, this.pure = !!n3;
        }
        toSummary() {
          return {summaryKind: i2.Pipe, type: this.type, name: this.name, pure: this.pure};
        }
      };
      t2.CompileShallowModuleMetadata = class {
      };
      t2.CompileNgModuleMetadata = class {
        constructor({type: e3, providers: t3, declaredDirectives: n3, exportedDirectives: r3, declaredPipes: o3, exportedPipes: u3, entryComponents: i3, bootstrapComponents: a3, importedModules: c3, exportedModules: l3, schemas: p2, transitiveModule: d2, id: f2}) {
          this.type = e3 || null, this.declaredDirectives = s2(n3), this.exportedDirectives = s2(r3), this.declaredPipes = s2(o3), this.exportedPipes = s2(u3), this.providers = s2(t3), this.entryComponents = s2(i3), this.bootstrapComponents = s2(a3), this.importedModules = s2(c3), this.exportedModules = s2(l3), this.schemas = s2(p2), this.id = f2 || null, this.transitiveModule = d2 || null;
        }
        toSummary() {
          const e3 = this.transitiveModule;
          return {summaryKind: i2.NgModule, type: this.type, entryComponents: e3.entryComponents, providers: e3.providers, modules: e3.modules, exportedDirectives: e3.exportedDirectives, exportedPipes: e3.exportedPipes};
        }
      };
      function s2(e3) {
        return e3 || [];
      }
      t2.TransitiveCompileNgModuleMetadata = class {
        constructor() {
          this.directivesSet = new Set(), this.directives = [], this.exportedDirectivesSet = new Set(), this.exportedDirectives = [], this.pipesSet = new Set(), this.pipes = [], this.exportedPipesSet = new Set(), this.exportedPipes = [], this.modulesSet = new Set(), this.modules = [], this.entryComponentsSet = new Set(), this.entryComponents = [], this.providers = [];
        }
        addProvider(e3, t3) {
          this.providers.push({provider: e3, module: t3});
        }
        addDirective(e3) {
          this.directivesSet.has(e3.reference) || (this.directivesSet.add(e3.reference), this.directives.push(e3));
        }
        addExportedDirective(e3) {
          this.exportedDirectivesSet.has(e3.reference) || (this.exportedDirectivesSet.add(e3.reference), this.exportedDirectives.push(e3));
        }
        addPipe(e3) {
          this.pipesSet.has(e3.reference) || (this.pipesSet.add(e3.reference), this.pipes.push(e3));
        }
        addExportedPipe(e3) {
          this.exportedPipesSet.has(e3.reference) || (this.exportedPipesSet.add(e3.reference), this.exportedPipes.push(e3));
        }
        addModule(e3) {
          this.modulesSet.has(e3.reference) || (this.modulesSet.add(e3.reference), this.modules.push(e3));
        }
        addEntryComponent(e3) {
          this.entryComponentsSet.has(e3.componentType) || (this.entryComponentsSet.add(e3.componentType), this.entryComponents.push(e3));
        }
      };
      function c2(e3) {
        return e3.reduce((e4, t3) => {
          const n3 = Array.isArray(t3) ? c2(t3) : t3;
          return e4.concat(n3);
        }, []);
      }
      function l2(e3) {
        return e3.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
      }
      t2.ProviderMeta = class {
        constructor(e3, {useClass: t3, useValue: n3, useExisting: r3, useFactory: o3, deps: u3, multi: i3}) {
          this.token = e3, this.useClass = t3 || null, this.useValue = n3, this.useExisting = r3, this.useFactory = o3 || null, this.dependencies = u3 || null, this.multi = !!i3;
        }
      }, t2.flatten = c2, t2.templateSourceUrl = function(e3, t3, n3) {
        let r3;
        return r3 = n3.isInline ? t3.type.reference instanceof WS.StaticSymbol ? "".concat(t3.type.reference.filePath, ".").concat(t3.type.reference.name, ".html") : "".concat(u2(e3), "/").concat(u2(t3.type), ".html") : n3.templateUrl, t3.type.reference instanceof WS.StaticSymbol ? r3 : l2(r3);
      }, t2.sharedStylesheetJitUrl = function(e3, t3) {
        const n3 = e3.moduleUrl.split(/\/\\/g), r3 = n3[n3.length - 1];
        return l2("css/".concat(t3).concat(r3, ".ngstyle.js"));
      }, t2.ngModuleJitUrl = function(e3) {
        return l2("".concat(u2(e3.type), "/module.ngfactory.js"));
      }, t2.templateJitUrl = function(e3, t3) {
        return l2("".concat(u2(e3), "/").concat(u2(t3.type), ".ngfactory.js"));
      };
    }), zS = je(function(e2, t2) {
      Object.defineProperty(t2, "__esModule", {value: true});
      /**
           * @license
           * Copyright Google Inc. All Rights Reserved.
           *
           * Use of this source code is governed by an MIT-style license that can be
           * found in the LICENSE file at https://angular.io/license
           */
      class n2 {
        constructor(e3, t3, n3, r3) {
          this.file = e3, this.offset = t3, this.line = n3, this.col = r3;
        }
        toString() {
          return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
        }
        moveBy(e3) {
          const t3 = this.file.content, r3 = t3.length;
          let o3 = this.offset, u3 = this.line, i2 = this.col;
          for (; o3 > 0 && e3 < 0; ) {
            o3--, e3++;
            if (t3.charCodeAt(o3) == qS.$LF) {
              u3--;
              const e4 = t3.substr(0, o3 - 1).lastIndexOf(String.fromCharCode(qS.$LF));
              i2 = e4 > 0 ? o3 - e4 : o3;
            } else
              i2--;
          }
          for (; o3 < r3 && e3 > 0; ) {
            const n3 = t3.charCodeAt(o3);
            o3++, e3--, n3 == qS.$LF ? (u3++, i2 = 0) : i2++;
          }
          return new n2(this.file, o3, u3, i2);
        }
        getContext(e3, t3) {
          const n3 = this.file.content;
          let r3 = this.offset;
          if (r3 != null) {
            r3 > n3.length - 1 && (r3 = n3.length - 1);
            let o3 = r3, u3 = 0, i2 = 0;
            for (; u3 < e3 && r3 > 0 && (r3--, u3++, n3[r3] != "\n" || ++i2 != t3); )
              ;
            for (u3 = 0, i2 = 0; u3 < e3 && o3 < n3.length - 1 && (o3++, u3++, n3[o3] != "\n" || ++i2 != t3); )
              ;
            return {before: n3.substring(r3, this.offset), after: n3.substring(this.offset, o3 + 1)};
          }
          return null;
        }
      }
      t2.ParseLocation = n2;
      class r2 {
        constructor(e3, t3) {
          this.content = e3, this.url = t3;
        }
      }
      t2.ParseSourceFile = r2;
      class o2 {
        constructor(e3, t3, n3 = null) {
          this.start = e3, this.end = t3, this.details = n3;
        }
        toString() {
          return this.start.file.content.substring(this.start.offset, this.end.offset);
        }
      }
      var u2;
      t2.ParseSourceSpan = o2, t2.EMPTY_PARSE_LOCATION = new n2(new r2("", ""), 0, 0, 0), t2.EMPTY_SOURCE_SPAN = new o2(t2.EMPTY_PARSE_LOCATION, t2.EMPTY_PARSE_LOCATION), function(e3) {
        e3[e3.WARNING = 0] = "WARNING", e3[e3.ERROR = 1] = "ERROR";
      }(u2 = t2.ParseErrorLevel || (t2.ParseErrorLevel = {}));
      t2.ParseError = class {
        constructor(e3, t3, n3 = u2.ERROR) {
          this.span = e3, this.msg = t3, this.level = n3;
        }
        contextualMessage() {
          const e3 = this.span.start.getContext(100, 3);
          return e3 ? "".concat(this.msg, ' ("').concat(e3.before, "[").concat(u2[this.level], " ->]").concat(e3.after, '")') : this.msg;
        }
        toString() {
          const e3 = this.span.details ? ", ".concat(this.span.details) : "";
          return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e3);
        }
      }, t2.typeSourceSpan = function(e3, t3) {
        const u3 = JS.identifierModuleUrl(t3), i2 = u3 != null ? "in ".concat(e3, " ").concat(JS.identifierName(t3), " in ").concat(u3) : "in ".concat(e3, " ").concat(JS.identifierName(t3)), a2 = new r2("", i2);
        return new o2(new n2(a2, -1, -1, -1), new n2(a2, -1, -1, -1));
      }, t2.r3JitTypeSourceSpan = function(e3, t3, u3) {
        const i2 = "in ".concat(e3, " ").concat(t3, " in ").concat(u3), a2 = new r2("", i2);
        return new o2(new n2(a2, -1, -1, -1), new n2(a2, -1, -1, -1));
      };
    });
    const {ParseSourceSpan: HS} = zS, {htmlTrim: GS, getLeadingAndTrailingHtmlWhitespace: XS, hasHtmlWhitespace: YS, canHaveInterpolation: KS, getNodeCssStyleDisplay: QS, isDanglingSpaceSensitiveNode: ZS, isIndentationSensitiveNode: ew, isLeadingSpaceSensitiveNode: tw, isTrailingSpaceSensitiveNode: nw, isWhitespaceSensitiveNode: rw} = $S, ow = [function(e2) {
      return e2.map((e3) => {
        if (e3.type === "element" && e3.tagDefinition.ignoreFirstLf && e3.children.length !== 0 && e3.children[0].type === "text" && e3.children[0].value[0] === "\n") {
          const [t2, ...n2] = e3.children;
          return e3.clone({children: t2.value.length === 1 ? n2 : [t2.clone({value: t2.value.slice(1)}), ...n2]});
        }
        return e3;
      });
    }, function(e2) {
      const t2 = (e3) => e3.type === "element" && e3.prev && e3.prev.type === "ieConditionalStartComment" && e3.prev.sourceSpan.end.offset === e3.startSourceSpan.start.offset && e3.firstChild && e3.firstChild.type === "ieConditionalEndComment" && e3.firstChild.sourceSpan.start.offset === e3.startSourceSpan.end.offset;
      return e2.map((e3) => {
        if (e3.children) {
          const n2 = e3.children.map(t2);
          if (n2.some(Boolean)) {
            const t3 = [];
            for (let r2 = 0; r2 < e3.children.length; r2++) {
              const o2 = e3.children[r2];
              if (!n2[r2 + 1])
                if (n2[r2]) {
                  const e4 = o2.prev, n3 = o2.firstChild, r3 = new HS(e4.sourceSpan.start, n3.sourceSpan.end), u2 = new HS(r3.start, o2.sourceSpan.end);
                  t3.push(o2.clone({condition: e4.condition, sourceSpan: u2, startSourceSpan: r3, children: o2.children.slice(1)}));
                } else
                  t3.push(o2);
            }
            return e3.clone({children: t3});
          }
        }
        return e3;
      });
    }, function(e2) {
      return function(e3, t2, n2) {
        return e3.map((e4) => {
          if (e4.children) {
            const r2 = e4.children.map(t2);
            if (r2.some(Boolean)) {
              const t3 = [];
              for (let o2 = 0; o2 < e4.children.length; o2++) {
                const u2 = e4.children[o2];
                if (u2.type !== "text" && !r2[o2]) {
                  t3.push(u2);
                  continue;
                }
                const i2 = u2.type === "text" ? u2 : u2.clone({type: "text", value: n2(u2)});
                if (t3.length === 0 || t3[t3.length - 1].type !== "text") {
                  t3.push(i2);
                  continue;
                }
                const a2 = t3.pop();
                t3.push(a2.clone({value: a2.value + i2.value, sourceSpan: new HS(a2.sourceSpan.start, i2.sourceSpan.end)}));
              }
              return e4.clone({children: t3});
            }
          }
          return e4;
        });
      }(e2, (e3) => e3.type === "cdata", (e3) => "<![CDATA[".concat(e3.value, "]]>"));
    }, function(e2, t2) {
      if (t2.parser === "html")
        return e2;
      const n2 = /{{([\S\s]+?)}}/g;
      return e2.map((e3) => {
        if (!KS(e3))
          return e3;
        const t3 = [];
        for (const r2 of e3.children) {
          if (r2.type !== "text") {
            t3.push(r2);
            continue;
          }
          let e4 = r2.sourceSpan.start, o2 = null;
          const u2 = r2.value.split(n2);
          for (let n3 = 0; n3 < u2.length; n3++, e4 = o2) {
            const r3 = u2[n3];
            n3 % 2 != 0 ? (o2 = e4.moveBy(r3.length + 4), t3.push({type: "interpolation", sourceSpan: new HS(e4, o2), children: r3.length === 0 ? [] : [{type: "text", value: r3, sourceSpan: new HS(e4.moveBy(2), o2.moveBy(-2))}]})) : (o2 = e4.moveBy(r3.length), r3.length !== 0 && t3.push({type: "text", value: r3, sourceSpan: new HS(e4, o2)}));
          }
        }
        return e3.clone({children: t3});
      });
    }, function(e2) {
      const t2 = "whitespace";
      return e2.map((e3) => {
        if (!e3.children)
          return e3;
        if (e3.children.length === 0 || e3.children.length === 1 && e3.children[0].type === "text" && GS(e3.children[0].value).length === 0)
          return e3.clone({children: [], hasDanglingSpaces: e3.children.length !== 0});
        const n2 = rw(e3), r2 = ew(e3);
        return e3.clone({isWhitespaceSensitive: n2, isIndentationSensitive: r2, children: e3.children.reduce((e4, r3) => {
          if (r3.type !== "text" || n2)
            return e4.concat(r3);
          const o2 = [], {leadingWhitespace: u2, text: i2, trailingWhitespace: a2} = XS(r3.value);
          return u2 && o2.push({type: t2}), i2 && o2.push({type: "text", value: i2, sourceSpan: new HS(r3.sourceSpan.start.moveBy(u2.length), r3.sourceSpan.end.moveBy(-a2.length))}), a2 && o2.push({type: t2}), e4.concat(o2);
        }, []).reduce((e4, n3, r3, o2) => {
          if (n3.type === t2)
            return e4;
          const u2 = r3 !== 0 && o2[r3 - 1].type === t2, i2 = r3 !== o2.length - 1 && o2[r3 + 1].type === t2;
          return e4.concat(Object.assign({}, n3, {hasLeadingSpaces: u2, hasTrailingSpaces: i2}));
        }, [])});
      });
    }, function(e2, t2) {
      return e2.map((e3) => Object.assign(e3, {cssDisplay: QS(e3, t2)}));
    }, function(e2) {
      return e2.map((e3) => Object.assign(e3, {isSelfClosing: !e3.children || e3.type === "element" && (e3.tagDefinition.isVoid || e3.startSourceSpan === e3.endSourceSpan)}));
    }, function(e2, t2) {
      return e2.map((e3) => e3.type !== "element" ? e3 : Object.assign(e3, {hasHtmComponentClosingTag: e3.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t2.originalText.slice(e3.endSourceSpan.start.offset, e3.endSourceSpan.end.offset))}));
    }, function(e2, t2) {
      return e2.map((e3) => e3.children ? e3.children.length === 0 ? e3.clone({isDanglingSpaceSensitive: ZS(e3)}) : e3.clone({children: e3.children.map((e4) => Object.assign({}, e4, {isLeadingSpaceSensitive: tw(e4, t2), isTrailingSpaceSensitive: nw(e4, t2)})).map((e4, t3, n2) => Object.assign({}, e4, {isLeadingSpaceSensitive: (t3 === 0 || n2[t3 - 1].isTrailingSpaceSensitive) && e4.isLeadingSpaceSensitive, isTrailingSpaceSensitive: (t3 === n2.length - 1 || n2[t3 + 1].isLeadingSpaceSensitive) && e4.isTrailingSpaceSensitive}))}) : e3);
    }, function(e2) {
      const t2 = (e3) => e3.type === "element" && e3.attrs.length === 0 && e3.children.length === 1 && e3.firstChild.type === "text" && !YS(e3.children[0].value) && !e3.firstChild.hasLeadingSpaces && !e3.firstChild.hasTrailingSpaces && e3.isLeadingSpaceSensitive && !e3.hasLeadingSpaces && e3.isTrailingSpaceSensitive && !e3.hasTrailingSpaces && e3.prev && e3.prev.type === "text" && e3.next && e3.next.type === "text";
      return e2.map((e3) => {
        if (e3.children) {
          const n2 = e3.children.map(t2);
          if (n2.some(Boolean)) {
            const t3 = [];
            for (let r2 = 0; r2 < e3.children.length; r2++) {
              const o2 = e3.children[r2];
              if (n2[r2]) {
                const n3 = t3.pop(), u2 = e3.children[++r2], {isTrailingSpaceSensitive: i2, hasTrailingSpaces: a2} = u2;
                t3.push(n3.clone({value: n3.value + "<".concat(o2.rawName, ">") + o2.firstChild.value + "</".concat(o2.rawName, ">") + u2.value, sourceSpan: new HS(n3.sourceSpan.start, u2.sourceSpan.end), isTrailingSpaceSensitive: i2, hasTrailingSpaces: a2}));
              } else
                t3.push(o2);
            }
            return e3.clone({children: t3});
          }
        }
        return e3;
      });
    }];
    var uw = function(e2, t2) {
      for (const n2 of ow)
        e2 = n2(e2, t2);
      return e2;
    };
    var iw = {hasPragma: function(e2) {
      return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e2);
    }, insertPragma: function(e2) {
      return "<!-- @format -->\n\n" + e2.replace(/^\s*\n/, "");
    }};
    var aw = {locStart: function(e2) {
      return e2.sourceSpan.start.offset;
    }, locEnd: function(e2) {
      return e2.sourceSpan.end.offset;
    }};
    const {builders: {concat: sw, group: cw}} = cn;
    var lw = {isVueEventBindingExpression: function(e2) {
      const t2 = e2.trim();
      return /^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t2) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t2);
    }, printVueFor: function(e2, t2) {
      const {left: n2, operator: r2, right: o2} = function(e3) {
        const t3 = /([^]*?)\s+(in|of)\s+([^]*)/, n3 = /,([^,\]}]*)(?:,([^,\]}]*))?$/, r3 = /^\(|\)$/g, o3 = e3.match(t3);
        if (!o3)
          return;
        const u2 = {};
        u2.for = o3[3].trim();
        const i2 = o3[1].trim().replace(r3, ""), a2 = i2.match(n3);
        a2 ? (u2.alias = i2.replace(n3, ""), u2.iterator1 = a2[1].trim(), a2[2] && (u2.iterator2 = a2[2].trim())) : u2.alias = i2;
        return {left: "".concat([u2.alias, u2.iterator1, u2.iterator2].filter(Boolean).join(",")), operator: o3[2], right: u2.for};
      }(e2);
      return sw([cw(t2("function _(".concat(n2, ") {}"), {parser: "babel", __isVueForBindingLeft: true})), " ", r2, " ", t2(o2, {parser: "__js_expression"}, {stripTrailingHardline: true})]);
    }, printVueBindings: function(e2, t2) {
      return t2("function _(".concat(e2, ") {}"), {parser: "babel", __isVueBindings: true}, {stripTrailingHardline: true});
    }}, pw = je(function(e2) {
      !function(t2, n2) {
        e2.exports ? e2.exports = n2() : t2.parseSrcset = n2();
      }(Me, function() {
        return function(e3, t2) {
          var n2 = t2 && t2.logger || console;
          function r2(e4) {
            return e4 === " " || e4 === "	" || e4 === "\n" || e4 === "\f" || e4 === "\r";
          }
          function o2(t3) {
            var n3, r3 = t3.exec(e3.substring(D2));
            if (r3)
              return n3 = r3[0], D2 += n3.length, n3;
          }
          for (var u2, i2, a2, s2, c2, l2 = e3.length, p2 = /^[ \t\n\r\u000c]+/, d2 = /^[, \t\n\r\u000c]+/, f2 = /^[^ \t\n\r\u000c]+/, h2 = /[,]+$/, m2 = /^\d+$/, g2 = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D2 = 0, y2 = []; ; ) {
            if (o2(d2), D2 >= l2)
              return y2;
            u2 = o2(f2), i2 = [], u2.slice(-1) === "," ? (u2 = u2.replace(h2, ""), C2()) : E2();
          }
          function E2() {
            for (o2(p2), a2 = "", s2 = "in descriptor"; ; ) {
              if (c2 = e3.charAt(D2), s2 === "in descriptor")
                if (r2(c2))
                  a2 && (i2.push(a2), a2 = "", s2 = "after descriptor");
                else {
                  if (c2 === ",")
                    return D2 += 1, a2 && i2.push(a2), void C2();
                  if (c2 === "(")
                    a2 += c2, s2 = "in parens";
                  else {
                    if (c2 === "")
                      return a2 && i2.push(a2), void C2();
                    a2 += c2;
                  }
                }
              else if (s2 === "in parens")
                if (c2 === ")")
                  a2 += c2, s2 = "in descriptor";
                else {
                  if (c2 === "")
                    return i2.push(a2), void C2();
                  a2 += c2;
                }
              else if (s2 === "after descriptor")
                if (r2(c2))
                  ;
                else {
                  if (c2 === "")
                    return void C2();
                  s2 = "in descriptor", D2 -= 1;
                }
              D2 += 1;
            }
          }
          function C2() {
            var t3, r3, o3, a3, s3, c3, l3, p3, d3, f3 = false, h3 = {};
            for (a3 = 0; a3 < i2.length; a3++)
              c3 = (s3 = i2[a3])[s3.length - 1], l3 = s3.substring(0, s3.length - 1), p3 = parseInt(l3, 10), d3 = parseFloat(l3), m2.test(l3) && c3 === "w" ? ((t3 || r3) && (f3 = true), p3 === 0 ? f3 = true : t3 = p3) : g2.test(l3) && c3 === "x" ? ((t3 || r3 || o3) && (f3 = true), d3 < 0 ? f3 = true : r3 = d3) : m2.test(l3) && c3 === "h" ? ((o3 || r3) && (f3 = true), p3 === 0 ? f3 = true : o3 = p3) : f3 = true;
            f3 ? n2 && n2.error && n2.error("Invalid srcset descriptor found in '" + e3 + "' at '" + s3 + "'.") : (h3.url = u2, t3 && (h3.w = t3), r3 && (h3.d = r3), o3 && (h3.h = o3), y2.push(h3));
          }
        };
      });
    });
    const {builders: {concat: dw, ifBreak: fw, join: hw, line: mw}} = cn;
    var gw = {printImgSrcset: function(e2) {
      const t2 = pw(e2, {logger: {error(e3) {
        throw new Error(e3);
      }}}), n2 = t2.some(({w: e3}) => e3), r2 = t2.some(({h: e3}) => e3);
      if (n2 + r2 + t2.some(({d: e3}) => e3) > 1)
        throw new Error("Mixed descriptor in srcset is not supported");
      const o2 = n2 ? "w" : r2 ? "h" : "d", u2 = n2 ? "w" : r2 ? "h" : "x", i2 = (e3) => Math.max(...e3), a2 = t2.map((e3) => e3.url), s2 = i2(a2.map((e3) => e3.length)), c2 = t2.map((e3) => e3[o2]).map((e3) => e3 ? e3.toString() : ""), l2 = c2.map((e3) => {
        const t3 = e3.indexOf(".");
        return t3 === -1 ? e3.length : t3;
      }), p2 = i2(l2);
      return hw(dw([",", mw]), a2.map((e3, t3) => {
        const n3 = [e3], r3 = c2[t3];
        if (r3) {
          const o3 = s2 - e3.length + 1, i3 = p2 - l2[t3], a3 = " ".repeat(o3 + i3);
          n3.push(fw(a3, " "), r3 + u2);
        }
        return dw(n3);
      }));
    }, printClassNames: function(e2) {
      return e2.trim().split(/\s+/).join(" ");
    }};
    const {builders: Dw, utils: {mapDoc: yw, normalizeParts: Ew}} = cn, {replaceEndOfLineWith: Cw} = Lt, {print: bw} = ob, {breakParent: vw, dedentToRoot: Aw, fill: Fw, group: xw, hardline: Sw, ifBreak: ww, indent: Tw, join: Bw, line: Nw, literalline: kw, softline: Pw} = Dw, {htmlTrimPreserveIndentation: Ow, splitByHtmlWhitespace: Iw, countChars: Lw, countParents: Mw, dedentString: jw, forceBreakChildren: _w, forceBreakContent: Rw, forceNextEmptyLine: Vw, getLastDescendant: $w, getPrettierIgnoreAttributeCommentData: qw, hasPrettierIgnore: Ww, inferScriptParser: Uw, isVueCustomBlock: Jw, isVueNonHtmlBlock: zw, isVueSlotAttribute: Hw, isVueSfcBindingsAttribute: Gw, isScriptLikeTag: Xw, isTextLikeNode: Yw, preferHardlineAsLeadingSpaces: Kw, shouldNotPrintClosingTag: Qw, shouldPreserveContent: Zw, unescapeQuoteEntities: eT, isPreLikeNode: tT} = $S, {insertPragma: nT} = iw, {locStart: rT, locEnd: oT} = aw, {printVueFor: uT, printVueBindings: iT, isVueEventBindingExpression: aT} = lw, {printImgSrcset: sT, printClassNames: cT} = gw;
    function lT(e2) {
      const t2 = Ew(e2);
      return t2.length === 0 ? "" : t2.length === 1 ? t2[0] : Dw.concat(t2);
    }
    function pT(e2, t2, n2) {
      const r2 = e2.getValue();
      if (_w(r2))
        return lT([vw, lT(e2.map((e3) => {
          const t3 = e3.getValue(), n3 = t3.prev ? i2(t3.prev, t3) : "";
          return lT([n3 ? lT([n3, Vw(t3.prev) ? Sw : ""]) : "", u2(e3)]);
        }, "children"))]);
      const o2 = r2.children.map(() => Symbol(""));
      return lT(e2.map((e3, t3) => {
        const n3 = e3.getValue();
        if (Yw(n3)) {
          if (n3.prev && Yw(n3.prev)) {
            const t4 = i2(n3.prev, n3);
            if (t4)
              return Vw(n3.prev) ? lT([Sw, Sw, u2(e3)]) : lT([t4, u2(e3)]);
          }
          return u2(e3);
        }
        const r3 = [], a2 = [], s2 = [], c2 = [], l2 = n3.prev ? i2(n3.prev, n3) : "", p2 = n3.next ? i2(n3, n3.next) : "";
        return l2 && (Vw(n3.prev) ? r3.push(Sw, Sw) : l2 === Sw ? r3.push(Sw) : Yw(n3.prev) ? a2.push(l2) : a2.push(ww("", Pw, {groupId: o2[t3 - 1]}))), p2 && (Vw(n3) ? Yw(n3.next) && c2.push(Sw, Sw) : p2 === Sw ? Yw(n3.next) && c2.push(Sw) : s2.push(p2)), lT([].concat(r3, xw(lT([lT(a2), xw(lT([u2(e3), lT(s2)]), {id: o2[t3]})])), c2));
      }, "children"));
      function u2(e3) {
        const r3 = e3.getValue();
        return Ww(r3) ? lT([].concat(xT(r3, t2), Cw(t2.originalText.slice(rT(r3) + (r3.prev && CT(r3.prev) ? TT(r3).length : 0), oT(r3) - (r3.next && vT(r3.next) ? kT(r3, t2).length : 0)), kw), wT(r3, t2))) : n2(e3);
      }
      function i2(e3, t3) {
        return Yw(e3) && Yw(t3) ? e3.isTrailingSpaceSensitive ? e3.hasTrailingSpaces ? Kw(t3) ? Sw : Nw : "" : Kw(t3) ? Sw : Pw : CT(e3) && (Ww(t3) || t3.firstChild || t3.isSelfClosing || t3.type === "element" && t3.attrs.length !== 0) || e3.type === "element" && e3.isSelfClosing && vT(t3) ? "" : !t3.isLeadingSpaceSensitive || Kw(t3) || vT(t3) && e3.lastChild && FT(e3.lastChild) && e3.lastChild.lastChild && FT(e3.lastChild.lastChild) ? Sw : t3.hasLeadingSpaces ? Nw : Pw;
      }
    }
    function dT(e2, t2) {
      let n2 = e2.startSourceSpan.end.offset;
      e2.firstChild && bT(e2.firstChild) && (n2 -= BT(e2).length);
      let r2 = e2.endSourceSpan.start.offset;
      return e2.lastChild && FT(e2.lastChild) ? r2 += NT(e2, t2).length : AT(e2) && (r2 -= kT(e2.lastChild, t2).length), t2.originalText.slice(n2, r2);
    }
    function fT(e2, t2, n2) {
      const r2 = e2.getValue();
      if (!r2.attrs || r2.attrs.length === 0)
        return r2.isSelfClosing ? " " : "";
      const o2 = r2.prev && r2.prev.type === "comment" && qw(r2.prev.value), u2 = typeof o2 == "boolean" ? () => o2 : Array.isArray(o2) ? (e3) => o2.includes(e3.rawName) : () => false, i2 = e2.map((e3) => {
        const r3 = e3.getValue();
        return u2(r3) ? lT(Cw(t2.originalText.slice(rT(r3), oT(r3)), kw)) : n2(e3);
      }, "attrs"), a2 = r2.type === "element" && r2.fullName === "script" && r2.attrs.length === 1 && r2.attrs[0].fullName === "src" && r2.children.length === 0, s2 = [Tw(lT([a2 ? " " : Nw, Bw(Nw, i2)]))];
      return r2.firstChild && bT(r2.firstChild) || r2.isSelfClosing && AT(r2.parent) || a2 ? s2.push(r2.isSelfClosing ? " " : "") : s2.push(r2.isSelfClosing ? Nw : Pw), lT(s2);
    }
    function hT(e2, t2, n2) {
      const r2 = e2.getValue();
      return lT([mT(r2, t2), fT(e2, t2, n2), r2.isSelfClosing ? "" : gT(r2)]);
    }
    function mT(e2, t2) {
      return e2.prev && CT(e2.prev) ? "" : lT([xT(e2, t2), TT(e2)]);
    }
    function gT(e2) {
      return e2.firstChild && bT(e2.firstChild) ? "" : BT(e2);
    }
    function DT(e2, t2) {
      return lT([e2.isSelfClosing ? "" : yT(e2, t2), ET(e2, t2)]);
    }
    function yT(e2, t2) {
      return e2.lastChild && FT(e2.lastChild) ? "" : lT([ST(e2, t2), NT(e2, t2)]);
    }
    function ET(e2, t2) {
      return (e2.next ? vT(e2.next) : AT(e2.parent)) ? "" : lT([kT(e2, t2), wT(e2, t2)]);
    }
    function CT(e2) {
      return e2.next && !Yw(e2.next) && Yw(e2) && e2.isTrailingSpaceSensitive && !e2.hasTrailingSpaces;
    }
    function bT(e2) {
      return !e2.prev && e2.isLeadingSpaceSensitive && !e2.hasLeadingSpaces;
    }
    function vT(e2) {
      return e2.prev && e2.prev.type !== "docType" && !Yw(e2.prev) && e2.isLeadingSpaceSensitive && !e2.hasLeadingSpaces;
    }
    function AT(e2) {
      return e2.lastChild && e2.lastChild.isTrailingSpaceSensitive && !e2.lastChild.hasTrailingSpaces && !Yw($w(e2.lastChild)) && !tT(e2);
    }
    function FT(e2) {
      return !e2.next && !e2.hasTrailingSpaces && e2.isTrailingSpaceSensitive && Yw($w(e2));
    }
    function xT(e2, t2) {
      return bT(e2) ? BT(e2.parent) : vT(e2) ? kT(e2.prev, t2) : "";
    }
    function ST(e2, t2) {
      return AT(e2) ? kT(e2.lastChild, t2) : "";
    }
    function wT(e2, t2) {
      return FT(e2) ? NT(e2.parent, t2) : CT(e2) ? TT(e2.next) : "";
    }
    function TT(e2) {
      switch (e2.type) {
        case "ieConditionalComment":
        case "ieConditionalStartComment":
          return "<!--[if ".concat(e2.condition);
        case "ieConditionalEndComment":
          return "<!--<!";
        case "interpolation":
          return "{{";
        case "docType":
          return "<!DOCTYPE";
        case "element":
          if (e2.condition)
            return "<!--[if ".concat(e2.condition, "]><!--><").concat(e2.rawName);
        default:
          return "<".concat(e2.rawName);
      }
    }
    function BT(e2) {
      switch (ta(!e2.isSelfClosing), e2.type) {
        case "ieConditionalComment":
          return "]>";
        case "element":
          if (e2.condition)
            return "><!--<![endif]-->";
        default:
          return ">";
      }
    }
    function NT(e2, t2) {
      if (ta(!e2.isSelfClosing), Qw(e2, t2))
        return "";
      switch (e2.type) {
        case "ieConditionalComment":
          return "<!";
        case "element":
          if (e2.hasHtmComponentClosingTag)
            return "<//";
        default:
          return "</".concat(e2.rawName);
      }
    }
    function kT(e2, t2) {
      if (Qw(e2, t2))
        return "";
      switch (e2.type) {
        case "ieConditionalComment":
        case "ieConditionalEndComment":
          return "[endif]-->";
        case "ieConditionalStartComment":
          return "]><!-->";
        case "interpolation":
          return "}}";
        case "element":
          if (e2.isSelfClosing)
            return "/>";
        default:
          return ">";
      }
    }
    function PT(e2, t2 = e2.value) {
      return e2.parent.isWhitespaceSensitive ? e2.parent.isIndentationSensitive ? Cw(t2, kw) : Cw(jw(Ow(t2)), Sw) : Bw(Nw, Iw(t2)).parts;
    }
    var OT = {preprocess: uw, print: function(e2, t2, n2) {
      const r2 = e2.getValue();
      switch (r2.type) {
        case "front-matter":
          return lT(Cw(r2.raw, kw));
        case "root":
          return t2.__onHtmlRoot && t2.__onHtmlRoot(r2), Dw.concat([xw(pT(e2, t2, n2)), Sw]);
        case "element":
        case "ieConditionalComment": {
          if (Zw(r2, t2))
            return lT([].concat(xT(r2, t2), xw(hT(e2, t2, n2)), Cw(dT(r2, t2), kw), DT(r2, t2), wT(r2, t2)));
          const u2 = r2.children.length === 1 && r2.firstChild.type === "interpolation" && r2.firstChild.isLeadingSpaceSensitive && !r2.firstChild.hasLeadingSpaces && r2.lastChild.isTrailingSpaceSensitive && !r2.lastChild.hasTrailingSpaces, i2 = Symbol("element-attr-group-id");
          return lT([xw(lT([xw(hT(e2, t2, n2), {id: i2}), r2.children.length === 0 ? r2.hasDanglingSpaces && r2.isDanglingSpaceSensitive ? Nw : "" : lT([Rw(r2) ? vw : "", (o2 = lT([u2 ? ww(Pw, "", {groupId: i2}) : r2.firstChild.hasLeadingSpaces && r2.firstChild.isLeadingSpaceSensitive ? Nw : r2.firstChild.type === "text" && r2.isWhitespaceSensitive && r2.isIndentationSensitive ? Aw(Pw) : Pw, pT(e2, t2, n2)]), u2 ? ww(Tw(o2), o2, {groupId: i2}) : !Xw(r2) && !Jw(r2, t2) || r2.parent.type !== "root" || t2.parser !== "vue" || t2.vueIndentScriptAndStyle ? Tw(o2) : o2), (r2.next ? vT(r2.next) : AT(r2.parent)) ? r2.lastChild.hasTrailingSpaces && r2.lastChild.isTrailingSpaceSensitive ? " " : "" : u2 ? ww(Pw, "", {groupId: i2}) : r2.lastChild.hasTrailingSpaces && r2.lastChild.isTrailingSpaceSensitive ? Nw : (r2.lastChild.type === "comment" || r2.lastChild.type === "text" && r2.isWhitespaceSensitive && r2.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t2.tabWidth * Mw(e2, (e3) => e3.parent && e3.parent.type !== "root"), "}$")).test(r2.lastChild.value) ? "" : Pw])])), DT(r2, t2)]);
        }
        case "ieConditionalStartComment":
        case "ieConditionalEndComment":
          return lT([mT(r2), ET(r2)]);
        case "interpolation":
          return lT([mT(r2, t2), lT(e2.map(n2, "children")), ET(r2, t2)]);
        case "text":
          if (r2.parent.type === "interpolation") {
            const e3 = /\n[^\S\n]*?$/, t3 = e3.test(r2.value), n3 = t3 ? r2.value.replace(e3, "") : r2.value;
            return lT([lT(Cw(n3, kw)), t3 ? Sw : ""]);
          }
          return Fw(Ew([].concat(xT(r2, t2), PT(r2), wT(r2, t2))));
        case "docType":
          return lT([xw(lT([mT(r2, t2), " ", r2.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), ET(r2, t2)]);
        case "comment":
          return lT([xT(r2, t2), lT(Cw(t2.originalText.slice(rT(r2), oT(r2)), kw)), wT(r2, t2)]);
        case "attribute": {
          if (r2.value === null)
            return r2.rawName;
          const e3 = eT(r2.value), t3 = Lw(e3, "'") < Lw(e3, '"') ? "'" : '"';
          return lT([r2.rawName, lT(["=", t3, lT(Cw(t3 === '"' ? e3.replace(/"/g, "&quot;") : e3.replace(/'/g, "&apos;"), kw)), t3])]);
        }
        default:
          throw new Error("Unexpected node type ".concat(r2.type));
      }
      var o2;
    }, insertPragma: nT, massageAstNode: sS, embed: function(e2, t2, n2, r2) {
      const o2 = e2.getValue();
      switch (o2.type) {
        case "element":
          if (Xw(o2) || o2.type === "interpolation")
            return;
          if (!o2.isSelfClosing && zw(o2, r2)) {
            const u2 = Uw(o2, r2);
            if (!u2)
              return;
            const i2 = dT(o2, r2);
            let a2 = /^\s*$/.test(i2), s2 = "";
            return a2 || (s2 = n2(Ow(i2), {parser: u2}, {stripTrailingHardline: true}), a2 = s2 === ""), lT([xT(o2, r2), xw(hT(e2, r2, t2)), a2 ? "" : Sw, s2, a2 ? "" : Sw, DT(o2, r2), wT(o2, r2)]);
          }
          break;
        case "text":
          if (Xw(o2.parent)) {
            const e3 = Uw(o2.parent);
            if (e3) {
              const t3 = e3 === "markdown" ? jw(o2.value.replace(/^[^\S\n]*?\n/, "")) : o2.value, u2 = {parser: e3};
              if (r2.parser === "html" && e3 === "babel") {
                let e4 = "script";
                const {attrMap: t4} = o2.parent;
                t4 && (t4.type === "module" || t4.type === "text/babel" && t4["data-type"] === "module") && (e4 = "module"), u2.__babelSourceType = e4;
              }
              return Dw.concat([lT([vw, xT(o2, r2), n2(t3, u2, {stripTrailingHardline: true}), wT(o2, r2)])]);
            }
          } else if (o2.parent.type === "interpolation")
            return lT([Tw(lT([Nw, n2(o2.value, Object.assign({__isInHtmlInterpolation: true}, r2.parser === "angular" ? {parser: "__ng_interpolation", trailingComma: "none"} : r2.parser === "vue" ? {parser: "__vue_expression"} : {parser: "__js_expression"}), {stripTrailingHardline: true})])), o2.parent.next && vT(o2.parent.next) ? " " : Nw]);
          break;
        case "attribute": {
          if (!o2.value)
            break;
          if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r2.originalText.slice(o2.valueSpan.start.offset, o2.valueSpan.end.offset)))
            return lT([o2.rawName, "=", o2.value]);
          if (r2.parser === "lwc") {
            if (/^{[\S\s]*}$/.test(r2.originalText.slice(o2.valueSpan.start.offset, o2.valueSpan.end.offset)))
              return lT([o2.rawName, "=", o2.value]);
          }
          const e3 = function(e4, t3, n3) {
            const r3 = (t4) => new RegExp(t4.join("|")).test(e4.fullName), o3 = () => eT(e4.value);
            let u2 = false;
            const i2 = (e5, t4) => {
              const n4 = e5.type === "NGRoot" ? e5.node.type === "NGMicrosyntax" && e5.node.body.length === 1 && e5.node.body[0].type === "NGMicrosyntaxExpression" ? e5.node.body[0].expression : e5.node : e5.type === "JsExpressionRoot" ? e5.node : e5;
              !n4 || n4.type !== "ObjectExpression" && n4.type !== "ArrayExpression" && (t4.parser !== "__vue_expression" || n4.type !== "TemplateLiteral" && n4.type !== "StringLiteral") || (u2 = true);
            }, a2 = (e5) => xw(e5), s2 = (e5, t4 = true) => xw(lT([Tw(lT([Pw, e5])), t4 ? Pw : ""])), c2 = (e5) => u2 ? a2(e5) : s2(e5), l2 = (e5, n4) => t3(e5, Object.assign({__onHtmlBindingRoot: i2}, n4), {stripTrailingHardline: true});
            if (e4.fullName === "srcset" && (e4.parent.fullName === "img" || e4.parent.fullName === "source"))
              return s2(sT(o3()));
            if (e4.fullName === "class" && !n3.parentParser) {
              const e5 = o3();
              if (!e5.includes("{{"))
                return cT(e5);
            }
            if (e4.fullName === "style" && !n3.parentParser) {
              const e5 = o3();
              if (!e5.includes("{{"))
                return s2(l2(e5, {parser: "css", __isHTMLStyleAttribute: true}));
            }
            if (n3.parser === "vue") {
              if (e4.fullName === "v-for")
                return uT(o3(), l2);
              if (Hw(e4) || Gw(e4, n3))
                return iT(o3(), l2);
              const t4 = ["^:", "^v-bind:"], u3 = ["^v-"];
              if (r3(["^@", "^v-on:"])) {
                const e5 = o3();
                return c2(l2(e5, {parser: aT(e5) ? "__js_expression" : "__vue_event_binding"}));
              }
              if (r3(t4))
                return c2(l2(o3(), {parser: "__vue_expression"}));
              if (r3(u3))
                return c2(l2(o3(), {parser: "__js_expression"}));
            }
            if (n3.parser === "angular") {
              const t4 = (e5, t5) => l2(e5, Object.assign({}, t5, {trailingComma: "none"})), n4 = ["^\\*"], u3 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], i3 = ["^i18n(-.+)?$"];
              if (r3(["^\\(.+\\)$", "^on-"]))
                return c2(t4(o3(), {parser: "__ng_action"}));
              if (r3(u3))
                return c2(t4(o3(), {parser: "__ng_binding"}));
              if (r3(i3)) {
                const t5 = o3().trim();
                return s2(Fw(PT(e4, t5)), !t5.includes("@@"));
              }
              if (r3(n4))
                return c2(t4(o3(), {parser: "__ng_directive"}));
              const a3 = /{{([\S\s]+?)}}/g, p2 = o3();
              if (a3.test(p2)) {
                const e5 = [];
                return p2.split(a3).forEach((n5, r4) => {
                  if (r4 % 2 == 0)
                    e5.push(lT(Cw(n5, kw)));
                  else
                    try {
                      e5.push(xw(lT(["{{", Tw(lT([Nw, t4(n5, {parser: "__ng_interpolation", __isInHtmlInterpolation: true})])), Nw, "}}"])));
                    } catch (t5) {
                      e5.push("{{", lT(Cw(n5, kw)), "}}");
                    }
                }), xw(lT(e5));
              }
            }
            return null;
          }(o2, (e4, t3) => n2(e4, Object.assign({__isInHtmlAttribute: true}, t3), {stripTrailingHardline: true}), r2);
          if (e3)
            return lT([o2.rawName, '="', xw(yw(e3, (e4) => typeof e4 == "string" ? e4.replace(/"/g, "&quot;") : e4)), '"']);
          break;
        }
        case "front-matter":
          return bw(o2, n2);
      }
    }};
    const IT = "HTML";
    var LT = {htmlWhitespaceSensitivity: {since: "1.15.0", category: IT, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{value: "css", description: "Respect the default value of CSS display property."}, {value: "strict", description: "Whitespaces are considered sensitive."}, {value: "ignore", description: "Whitespaces are considered insensitive."}]}, vueIndentScriptAndStyle: {since: "1.19.0", category: IT, type: "boolean", default: false, description: "Indent script and style tags in Vue files."}}, MT = {name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"], languageId: 146}, jT = {name: "Vue", type: "markup", color: "#2c3e50", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391};
    var _T = {languages: [ks(MT, () => ({name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: []})), ks(MT, (e2) => ({since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: e2.extensions.concat([".mjml"])})), ks(MT, () => ({name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: []})), ks(jT, () => ({since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"]}))], printers: {html: OT}, options: LT, parsers: {get html() {
      return {}.parsers.html;
    }, get vue() {
      return {}.parsers.vue;
    }, get angular() {
      return {}.parsers.angular;
    }, get lwc() {
      return {}.parsers.lwc;
    }}};
    var RT = {isPragma: function(e2) {
      return /^\s*@(prettier|format)\s*$/.test(e2);
    }, hasPragma: function(e2) {
      return /^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e2);
    }, insertPragma: function(e2) {
      return "# @format\n\n".concat(e2);
    }};
    var VT = {locStart: function(e2) {
      return e2.position.start.offset;
    }, locEnd: function(e2) {
      return e2.position.end.offset;
    }};
    const {getLast: $T} = Lt;
    function qT(e2, t2) {
      return e2 && typeof e2.type == "string" && (!t2 || t2.includes(e2.type));
    }
    function WT(e2) {
      return e2.value.trim() === "prettier-ignore";
    }
    function UT(e2) {
      return e2 && e2.leadingComments && e2.leadingComments.length !== 0;
    }
    function JT(e2) {
      return e2 && e2.middleComments && e2.middleComments.length !== 0;
    }
    function zT(e2) {
      return e2 && e2.indicatorComment;
    }
    function HT(e2) {
      return e2 && e2.trailingComment;
    }
    function GT(e2) {
      return e2 && e2.endComments && e2.endComments.length !== 0;
    }
    function XT(e2) {
      const t2 = [];
      let n2;
      for (const r2 of e2.split(/( +)/g))
        r2 !== " " ? n2 === " " ? t2.push(r2) : t2.push((t2.pop() || "") + r2) : n2 === void 0 && t2.unshift(""), n2 = r2;
      return n2 === " " && t2.push((t2.pop() || "") + " "), t2[0] === "" && (t2.shift(), t2.unshift(" " + (t2.shift() || ""))), t2;
    }
    var YT = {getLast: $T, getAncestorCount: function(e2, t2) {
      let n2 = 0;
      const r2 = e2.stack.length - 1;
      for (let o2 = 0; o2 < r2; o2++) {
        const r3 = e2.stack[o2];
        qT(r3) && t2(r3) && n2++;
      }
      return n2;
    }, isNode: qT, isEmptyNode: function(e2) {
      return !(e2.children && e2.children.length !== 0 || function(e3) {
        return UT(e3) || JT(e3) || zT(e3) || HT(e3) || GT(e3);
      }(e2));
    }, mapNode: function e2(t2, n2, r2) {
      return n2("children" in t2 ? Object.assign({}, t2, {children: t2.children.map((r3) => e2(r3, n2, t2))}) : t2, r2);
    }, defineShortcut: function(e2, t2, n2) {
      Object.defineProperty(e2, t2, {get: n2, enumerable: false});
    }, isNextLineEmpty: function(e2, t2) {
      let n2 = 0;
      const r2 = t2.length;
      for (let o2 = e2.position.end.offset - 1; o2 < r2; o2++) {
        const e3 = t2[o2];
        if (e3 === "\n" && n2++, n2 === 1 && /\S/.test(e3))
          return false;
        if (n2 === 2)
          return true;
      }
      return false;
    }, isLastDescendantNode: function(e2) {
      switch (e2.getValue().type) {
        case "tag":
        case "anchor":
        case "comment":
          return false;
      }
      const t2 = e2.stack.length;
      for (let n2 = 1; n2 < t2; n2++) {
        const t3 = e2.stack[n2], r2 = e2.stack[n2 - 1];
        if (Array.isArray(r2) && typeof t3 == "number" && t3 !== r2.length - 1)
          return false;
      }
      return true;
    }, getBlockValueLineContents: function(e2, {parentIndent: t2, isLastDescendant: n2, options: r2}) {
      const o2 = e2.position.start.line === e2.position.end.line ? "" : r2.originalText.slice(e2.position.start.offset, e2.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1], u2 = e2.indent === null ? (i2 = o2.match(/^( *)\S/m)) ? i2[1].length : 1 / 0 : e2.indent - 1 + t2;
      var i2;
      const a2 = o2.split("\n").map((e3) => e3.slice(u2));
      return r2.proseWrap === "preserve" || e2.type === "blockLiteral" ? s2(a2.map((e3) => e3.length === 0 ? [] : [e3])) : s2(a2.map((e3) => e3.length === 0 ? [] : XT(e3)).reduce((e3, t3, n3) => n3 === 0 || a2[n3 - 1].length === 0 || t3.length === 0 || /^\s/.test(t3[0]) || /^\s|\s$/.test($T(e3)) ? e3.concat([t3]) : e3.concat([e3.pop().concat(t3)]), []).map((e3) => e3.reduce((e4, t3) => e4.length !== 0 && /\s$/.test($T(e4)) ? e4.concat(e4.pop() + " " + t3) : e4.concat(t3), [])).map((e3) => r2.proseWrap === "never" ? [e3.join(" ")] : e3));
      function s2(t3) {
        if (e2.chomping === "keep")
          return $T(t3).length === 0 ? t3.slice(0, -1) : t3;
        let r3 = 0;
        for (let e3 = t3.length - 1; e3 >= 0 && t3[e3].length === 0; e3--)
          r3++;
        return r3 === 0 ? t3 : r3 >= 2 && !n2 ? t3.slice(0, -(r3 - 1)) : t3.slice(0, -r3);
      }
    }, getFlowScalarLineContents: function(e2, t2, n2) {
      const r2 = t2.split("\n").map((e3, t3, n3) => t3 === 0 && t3 === n3.length - 1 ? e3 : t3 !== 0 && t3 !== n3.length - 1 ? e3.trim() : t3 === 0 ? e3.trimEnd() : e3.trimStart());
      return n2.proseWrap === "preserve" ? r2.map((e3) => e3.length === 0 ? [] : [e3]) : r2.map((e3) => e3.length === 0 ? [] : XT(e3)).reduce((t3, n3, o2) => o2 === 0 || r2[o2 - 1].length === 0 || n3.length === 0 || e2 === "quoteDouble" && $T($T(t3)).endsWith("\\") ? t3.concat([n3]) : t3.concat([t3.pop().concat(n3)]), []).map((e3) => n2.proseWrap === "never" ? [e3.join(" ")] : e3);
    }, getLastDescendantNode: function e2(t2) {
      return "children" in t2 && t2.children.length !== 0 ? e2($T(t2.children)) : t2;
    }, hasPrettierIgnore: function(e2) {
      const t2 = e2.getValue();
      if (t2.type === "documentBody") {
        const t3 = e2.getParentNode();
        return GT(t3.head) && WT($T(t3.head.endComments));
      }
      return UT(t2) && WT($T(t2.leadingComments));
    }, hasLeadingComments: UT, hasMiddleComments: JT, hasIndicatorComment: zT, hasTrailingComment: HT, hasEndComments: GT};
    const KT = cn.builders, {conditionalGroup: QT, breakParent: ZT, concat: eB, dedent: tB, dedentToRoot: nB, fill: rB, group: oB, hardline: uB, ifBreak: iB, join: aB, line: sB, lineSuffix: cB, literalline: lB, markAsRoot: pB, softline: dB} = KT, {replaceEndOfLineWith: fB, isPreviousLineEmpty: hB} = Lt, {insertPragma: mB, isPragma: gB} = RT, {locStart: DB} = VT, {getAncestorCount: yB, getBlockValueLineContents: EB, getFlowScalarLineContents: CB, getLast: bB, getLastDescendantNode: vB, hasLeadingComments: AB, hasMiddleComments: FB, hasIndicatorComment: xB, hasTrailingComment: SB, hasEndComments: wB, hasPrettierIgnore: TB, isLastDescendantNode: BB, isNextLineEmpty: NB, isNode: kB, isEmptyNode: PB, defineShortcut: OB, mapNode: IB} = YT;
    function LB(e2) {
      switch (e2.type) {
        case "document":
          OB(e2, "head", () => e2.children[0]), OB(e2, "body", () => e2.children[1]);
          break;
        case "documentBody":
        case "sequenceItem":
        case "flowSequenceItem":
        case "mappingKey":
        case "mappingValue":
          OB(e2, "content", () => e2.children[0]);
          break;
        case "mappingItem":
        case "flowMappingItem":
          OB(e2, "key", () => e2.children[0]), OB(e2, "value", () => e2.children[1]);
      }
      return e2;
    }
    function MB(e2, t2, n2, r2, o2) {
      switch (e2.type) {
        case "root":
          return eB([aB(uB, n2.map((t3, r3) => {
            const u3 = e2.children[r3], i3 = e2.children[r3 + 1];
            return eB([o2(t3), VB(u3, i3) ? eB([uB, "...", SB(u3) ? eB([" ", n2.call(o2, "trailingComment")]) : ""]) : !i3 || SB(i3.head) ? "" : eB([uB, "---"])]);
          }, "children")), e2.children.length === 0 || (i2 = vB(e2), kB(i2, ["blockLiteral", "blockFolded"]) && i2.chomping === "keep") ? "" : uB]);
        case "document": {
          const u3 = t2.children[n2.getName() + 1];
          return aB(uB, [$B(e2, u3, t2, r2) === "head" ? aB(uB, [e2.head.children.length === 0 && e2.head.endComments.length === 0 ? "" : n2.call(o2, "head"), eB(["---", SB(e2.head) ? eB([" ", n2.call(o2, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", RB(e2) ? n2.call(o2, "body") : ""].filter(Boolean));
        }
        case "documentHead":
          return aB(uB, [].concat(n2.map(o2, "children"), n2.map(o2, "endComments")));
        case "documentBody": {
          const t3 = aB(uB, n2.map(o2, "children")).parts, r3 = aB(uB, n2.map(o2, "endComments")).parts, u3 = t3.length === 0 || r3.length === 0 ? "" : ((e3) => kB(e3, ["blockFolded", "blockLiteral"]) ? e3.chomping === "keep" ? "" : eB([uB, uB]) : uB)(vB(e2));
          return eB([].concat(t3, u3, r3));
        }
        case "directive":
          return eB(["%", aB(" ", [e2.name].concat(e2.parameters))]);
        case "comment":
          return eB(["#", e2.value]);
        case "alias":
          return eB(["*", e2.value]);
        case "tag":
          return r2.originalText.slice(e2.position.start.offset, e2.position.end.offset);
        case "anchor":
          return eB(["&", e2.value]);
        case "plain":
          return HB(e2.type, r2.originalText.slice(e2.position.start.offset, e2.position.end.offset), r2);
        case "quoteDouble":
        case "quoteSingle": {
          const t3 = "'", n3 = '"', o3 = r2.originalText.slice(e2.position.start.offset + 1, e2.position.end.offset - 1);
          if (e2.type === "quoteSingle" && o3.includes("\\") || e2.type === "quoteDouble" && /\\[^"]/.test(o3)) {
            const u4 = e2.type === "quoteDouble" ? n3 : t3;
            return eB([u4, HB(e2.type, o3, r2), u4]);
          }
          if (o3.includes(n3))
            return eB([t3, HB(e2.type, e2.type === "quoteDouble" ? o3.replace(/\\"/g, n3).replace(/'/g, t3.repeat(2)) : o3, r2), t3]);
          if (o3.includes(t3))
            return eB([n3, HB(e2.type, e2.type === "quoteSingle" ? o3.replace(/''/g, t3) : o3, r2), n3]);
          const u3 = r2.singleQuote ? t3 : n3;
          return eB([u3, HB(e2.type, o3, r2), u3]);
        }
        case "blockFolded":
        case "blockLiteral": {
          const t3 = yB(n2, (e3) => kB(e3, ["sequence", "mapping"])), u3 = BB(n2);
          return eB([e2.type === "blockFolded" ? ">" : "|", e2.indent === null ? "" : e2.indent.toString(), e2.chomping === "clip" ? "" : e2.chomping === "keep" ? "+" : "-", xB(e2) ? eB([" ", n2.call(o2, "indicatorComment")]) : "", (e2.indent === null ? tB : nB)(jB(e2.indent === null ? r2.tabWidth : e2.indent - 1 + t3, eB(EB(e2, {parentIndent: t3, isLastDescendant: u3, options: r2}).reduce((t4, n3, r3, o3) => t4.concat(r3 === 0 ? uB : "", rB(aB(sB, n3).parts), r3 !== o3.length - 1 ? n3.length === 0 ? uB : pB(lB) : e2.chomping === "keep" && u3 ? n3.length === 0 ? nB(uB) : nB(lB) : ""), []))))]);
        }
        case "sequence":
          return aB(uB, n2.map(o2, "children"));
        case "sequenceItem":
          return eB(["- ", jB(2, e2.content ? n2.call(o2, "content") : "")]);
        case "mappingKey":
        case "mappingValue":
          return e2.content ? n2.call(o2, "content") : "";
        case "mapping":
          return aB(uB, n2.map(o2, "children"));
        case "mappingItem":
        case "flowMappingItem": {
          const u3 = PB(e2.key), i3 = PB(e2.value);
          if (u3 && i3)
            return eB([": "]);
          const s2 = n2.call(o2, "key"), c2 = n2.call(o2, "value");
          if (i3)
            return e2.type === "flowMappingItem" && t2.type === "flowMapping" ? s2 : e2.type !== "mappingItem" || !qB(e2.key.content, r2) || SB(e2.key.content) || t2.tag && t2.tag.value === "tag:yaml.org,2002:set" ? eB(["? ", jB(2, s2)]) : eB([s2, WB(e2) ? " " : "", ":"]);
          if (u3)
            return eB([": ", jB(2, c2)]);
          const l2 = Symbol("mappingKey");
          return AB(e2.value) || !_B(e2.key.content) ? eB(["? ", jB(2, s2), uB, aB("", n2.map(o2, "value", "leadingComments").map((e3) => eB([e3, uB]))), ": ", jB(2, c2)]) : !function(e3) {
            if (!e3)
              return true;
            switch (e3.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
                return e3.position.start.line === e3.position.end.line;
              case "alias":
                return true;
              default:
                return false;
            }
          }(e2.key.content) || AB(e2.key.content) || FB(e2.key.content) || SB(e2.key.content) || wB(e2.key) || AB(e2.value.content) || FB(e2.value.content) || wB(e2.value) || !qB(e2.value.content, r2) ? QT([eB([oB(eB([iB("? "), oB(jB(2, s2), {id: l2})])), iB(eB([uB, ": ", jB(2, c2)]), a2(eB([WB(e2) ? " " : "", ":", AB(e2.value.content) || wB(e2.value) && e2.value.content && !kB(e2.value.content, ["mapping", "sequence"]) || t2.type === "mapping" && SB(e2.key.content) && _B(e2.value.content) || kB(e2.value.content, ["mapping", "sequence"]) && e2.value.content.tag === null && e2.value.content.anchor === null ? uB : e2.value.content ? sB : "", c2])), {groupId: l2})])]) : eB([s2, WB(e2) ? " " : "", ": ", c2]);
        }
        case "flowMapping":
        case "flowSequence": {
          const t3 = e2.type === "flowMapping" ? "{" : "[", i3 = e2.type === "flowMapping" ? "}" : "]", s2 = e2.type === "flowMapping" && e2.children.length !== 0 && r2.bracketSpacing ? sB : dB, c2 = e2.children.length !== 0 && ((u2 = bB(e2.children)).type === "flowMappingItem" && PB(u2.key) && PB(u2.value)), l2 = r2.trailingComma === "none" ? "" : iB(",", "");
          return eB([t3, a2(eB([s2, eB(n2.map((t4, n3) => eB([o2(t4), n3 === e2.children.length - 1 ? "" : eB([",", sB, e2.children[n3].position.start.line !== e2.children[n3 + 1].position.start.line ? zB(t4, r2.originalText) : ""])]), "children")), l2, wB(e2) ? eB([uB, aB(uB, n2.map(o2, "endComments"))]) : ""])), c2 ? "" : s2, i3]);
        }
        case "flowSequenceItem":
          return n2.call(o2, "content");
        default:
          throw new Error("Unexpected node type ".concat(e2.type));
      }
      var u2, i2;
      function a2(e3) {
        return KT.align(" ".repeat(r2.tabWidth), e3);
      }
    }
    function jB(e2, t2) {
      return typeof e2 == "number" && e2 > 0 ? KT.align(" ".repeat(e2), t2) : KT.align(e2, t2);
    }
    function _B(e2) {
      if (!e2)
        return true;
      switch (e2.type) {
        case "plain":
        case "quoteDouble":
        case "quoteSingle":
        case "alias":
        case "flowMapping":
        case "flowSequence":
          return true;
        default:
          return false;
      }
    }
    function RB(e2) {
      return e2.body.children.length !== 0 || wB(e2.body);
    }
    function VB(e2, t2) {
      return SB(e2) || t2 && (t2.head.children.length !== 0 || wB(t2.head));
    }
    function $B(e2, t2, n2, r2) {
      return n2.children[0] === e2 && /---(\s|$)/.test(r2.originalText.slice(DB(e2), DB(e2) + 4)) || e2.head.children.length !== 0 || wB(e2.head) || SB(e2.head) ? "head" : !VB(e2, t2) && (!!t2 && "root");
    }
    function qB(e2, t2) {
      if (!e2)
        return true;
      switch (e2.type) {
        case "plain":
        case "quoteSingle":
        case "quoteDouble":
          break;
        case "alias":
          return true;
        default:
          return false;
      }
      if (t2.proseWrap === "preserve")
        return e2.position.start.line === e2.position.end.line;
      if (/\\$/m.test(t2.originalText.slice(e2.position.start.offset, e2.position.end.offset)))
        return false;
      switch (t2.proseWrap) {
        case "never":
          return !e2.value.includes("\n");
        case "always":
          return !/[\n ]/.test(e2.value);
        default:
          return false;
      }
    }
    function WB(e2) {
      return e2.key.content && e2.key.content.type === "alias";
    }
    function UB(e2) {
      return wB(e2) && !kB(e2, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
    }
    const JB = new WeakMap();
    function zB(e2, t2) {
      const n2 = e2.getValue(), r2 = e2.stack[0];
      let o2;
      return JB.has(r2) ? o2 = JB.get(r2) : (o2 = new Set(), JB.set(r2, o2)), o2.has(n2.position.end.line) || (o2.add(n2.position.end.line), !NB(n2, t2) || UB(e2.getParentNode())) ? "" : dB;
    }
    function HB(e2, t2, n2) {
      const r2 = CB(e2, t2, n2);
      return aB(uB, r2.map((e3) => rB(aB(sB, e3).parts)));
    }
    var GB = {preprocess: function(e2) {
      return IB(e2, LB);
    }, print: function(e2, t2, n2) {
      const r2 = e2.getValue(), o2 = e2.getParentNode(), u2 = r2.tag ? e2.call(n2, "tag") : "", i2 = r2.anchor ? e2.call(n2, "anchor") : "", a2 = kB(r2, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !BB(e2) ? zB(e2, t2.originalText) : "";
      return eB([r2.type !== "mappingValue" && AB(r2) ? eB([aB(uB, e2.map(n2, "leadingComments")), uB]) : "", u2, u2 && i2 ? " " : "", i2, u2 || i2 ? kB(r2, ["sequence", "mapping"]) && !FB(r2) ? uB : " " : "", FB(r2) ? eB([r2.middleComments.length === 1 ? "" : uB, aB(uB, e2.map(n2, "middleComments")), uB]) : "", TB(e2) ? eB(fB(t2.originalText.slice(r2.position.start.offset, r2.position.end.offset).trimEnd(), lB)) : oB(MB(r2, o2, e2, t2, n2)), SB(r2) && !kB(r2, ["document", "documentHead"]) ? cB(eB([r2.type !== "mappingValue" || r2.content ? " " : "", o2.type === "mappingKey" && e2.getParentNode(2).type === "mapping" && _B(r2) ? "" : ZT, e2.call(n2, "trailingComment")])) : "", UB(r2) ? jB(r2.type === "sequenceItem" ? 2 : 0, eB([uB, aB(uB, e2.map((e3) => eB([hB(t2.originalText, e3.getValue(), DB) ? uB : "", n2(e3)]), "endComments"))])) : "", a2]);
    }, massageAstNode: function(e2, t2) {
      if (kB(t2))
        switch (delete t2.position, t2.type) {
          case "comment":
            if (gB(t2.value))
              return null;
            break;
          case "quoteDouble":
          case "quoteSingle":
            t2.type = "quote";
        }
    }, insertPragma: mB}, XB = {bracketSpacing: RC.bracketSpacing, singleQuote: RC.singleQuote, proseWrap: RC.proseWrap};
    var YB = [XC, Zv, uF, SF, oS, _T, {languages: [ks({name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407}, (e2) => ({since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: e2.filenames.filter((e3) => e3 !== "yarn.lock")}))], printers: {yaml: GB}, options: XB, parsers: {get yaml() {
      return {}.parsers.yaml;
    }}}];
    const {version: KB} = n, {getSupportInfo: QB} = gt, ZB = YB.map((t2) => e(t2, ["parsers"]));
    function eN(e2, t2 = 1) {
      return (...n2) => {
        const r2 = n2[t2] || {}, o2 = r2.plugins || [];
        return n2[t2] = Object.assign({}, r2, {plugins: [...ZB, ...Array.isArray(o2) ? o2 : Object.values(o2)]}), e2(...n2);
      };
    }
    const tN = eN(is.formatWithCursor);
    return {formatWithCursor: tN, format: (e2, t2) => tN(e2, t2).formatted, check(e2, t2) {
      const {formatted: n2} = tN(e2, t2);
      return n2 === e2;
    }, doc: cn, getSupportInfo: eN(QB, 0), version: KB, util: Ns, __debug: {parse: eN(is.parse), formatAST: eN(is.formatAST), formatDoc: eN(is.formatDoc), printToDoc: eN(is.printToDoc), printDocToString: eN(is.printDocToString)}};
  });
});

// node_modules/prettier/parser-markdown.js
var require_parser_markdown = __commonJS((exports2, module2) => {
  !function(e, t) {
    typeof exports2 == "object" && typeof module2 != "undefined" ? module2.exports = t() : typeof define == "function" && define.amd ? define(t) : ((e = typeof globalThis != "undefined" ? globalThis : e || self).prettierPlugins = e.prettierPlugins || {}, e.prettierPlugins.markdown = t());
  }(exports2, function() {
    "use strict";
    var e = function() {
      for (var e2 = {}, r2 = 0; r2 < arguments.length; r2++) {
        var n2 = arguments[r2];
        for (var u2 in n2)
          t.call(n2, u2) && (e2[u2] = n2[u2]);
      }
      return e2;
    }, t = Object.prototype.hasOwnProperty;
    function r(e2, t2, r2) {
      return e2(r2 = {path: t2, exports: {}, require: function(e3, t3) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(t3 == null && r2.path);
      }}, r2.exports), r2.exports;
    }
    function n(e2) {
      return e2 && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
    }
    var u = Object.freeze({__proto__: null, default: {}}), i = r(function(e2) {
      typeof Object.create == "function" ? e2.exports = function(e3, t2) {
        t2 && (e3.super_ = t2, e3.prototype = Object.create(t2.prototype, {constructor: {value: e3, enumerable: false, writable: true, configurable: true}}));
      } : e2.exports = function(e3, t2) {
        if (t2) {
          e3.super_ = t2;
          var r2 = function() {
          };
          r2.prototype = t2.prototype, e3.prototype = new r2(), e3.prototype.constructor = e3;
        }
      };
    }), o = n(u), a = r(function(e2) {
      try {
        var t2 = o;
        if (typeof t2.inherits != "function")
          throw "";
        e2.exports = t2.inherits;
      } catch (t3) {
        e2.exports = i;
      }
    }), c = function(t2) {
      var r2, n2, u2;
      for (n2 in a(o2, t2), a(i2, o2), r2 = o2.prototype)
        (u2 = r2[n2]) && typeof u2 == "object" && (r2[n2] = "concat" in u2 ? u2.concat() : e(u2));
      return o2;
      function i2(e2) {
        return t2.apply(this, e2);
      }
      function o2() {
        return this instanceof o2 ? t2.apply(this, arguments) : new i2(arguments);
      }
    };
    var s = function(e2, t2, r2) {
      return function() {
        var n2 = r2 || this, u2 = n2[e2];
        return n2[e2] = !t2, i2;
        function i2() {
          n2[e2] = u2;
        }
      };
    };
    var l = function(e2) {
      var t2 = function(e3) {
        var t3 = [], r2 = e3.indexOf("\n");
        for (; r2 !== -1; )
          t3.push(r2 + 1), r2 = e3.indexOf("\n", r2 + 1);
        return t3.push(e3.length + 1), t3;
      }(String(e2));
      return {toPosition: f(t2), toOffset: D(t2)};
    };
    function f(e2) {
      return function(t2) {
        var r2 = -1, n2 = e2.length;
        if (t2 < 0)
          return {};
        for (; ++r2 < n2; )
          if (e2[r2] > t2)
            return {line: r2 + 1, column: t2 - (e2[r2 - 1] || 0) + 1, offset: t2};
        return {};
      };
    }
    function D(e2) {
      return function(t2) {
        var r2 = t2 && t2.line, n2 = t2 && t2.column;
        if (!isNaN(r2) && !isNaN(n2) && r2 - 1 in e2)
          return (e2[r2 - 2] || 0) + n2 - 1 || 0;
        return -1;
      };
    }
    var p = function(e2, t2) {
      return function(r2) {
        var n2, u2 = 0, i2 = r2.indexOf(d), o2 = e2[t2], a2 = [];
        for (; i2 !== -1; )
          a2.push(r2.slice(u2, i2)), u2 = i2 + 1, (n2 = r2.charAt(u2)) && o2.indexOf(n2) !== -1 || a2.push(d), i2 = r2.indexOf(d, u2 + 1);
        return a2.push(r2.slice(u2)), a2.join("");
      };
    }, d = "\\";
    var h = {AElig: "\xC6", AMP: "&", Aacute: "\xC1", Acirc: "\xC2", Agrave: "\xC0", Aring: "\xC5", Atilde: "\xC3", Auml: "\xC4", COPY: "\xA9", Ccedil: "\xC7", ETH: "\xD0", Eacute: "\xC9", Ecirc: "\xCA", Egrave: "\xC8", Euml: "\xCB", GT: ">", Iacute: "\xCD", Icirc: "\xCE", Igrave: "\xCC", Iuml: "\xCF", LT: "<", Ntilde: "\xD1", Oacute: "\xD3", Ocirc: "\xD4", Ograve: "\xD2", Oslash: "\xD8", Otilde: "\xD5", Ouml: "\xD6", QUOT: '"', REG: "\xAE", THORN: "\xDE", Uacute: "\xDA", Ucirc: "\xDB", Ugrave: "\xD9", Uuml: "\xDC", Yacute: "\xDD", aacute: "\xE1", acirc: "\xE2", acute: "\xB4", aelig: "\xE6", agrave: "\xE0", amp: "&", aring: "\xE5", atilde: "\xE3", auml: "\xE4", brvbar: "\xA6", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", eacute: "\xE9", ecirc: "\xEA", egrave: "\xE8", eth: "\xF0", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", iacute: "\xED", icirc: "\xEE", iexcl: "\xA1", igrave: "\xEC", iquest: "\xBF", iuml: "\xEF", laquo: "\xAB", lt: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", ntilde: "\xF1", oacute: "\xF3", ocirc: "\xF4", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", oslash: "\xF8", otilde: "\xF5", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', raquo: "\xBB", reg: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", thorn: "\xFE", times: "\xD7", uacute: "\xFA", ucirc: "\xFB", ugrave: "\xF9", uml: "\xA8", uuml: "\xFC", yacute: "\xFD", yen: "\xA5", yuml: "\xFF"}, g = {0: "\uFFFD", 128: "\u20AC", 130: "\u201A", 131: "\u0192", 132: "\u201E", 133: "\u2026", 134: "\u2020", 135: "\u2021", 136: "\u02C6", 137: "\u2030", 138: "\u0160", 139: "\u2039", 140: "\u0152", 142: "\u017D", 145: "\u2018", 146: "\u2019", 147: "\u201C", 148: "\u201D", 149: "\u2022", 150: "\u2013", 151: "\u2014", 152: "\u02DC", 153: "\u2122", 154: "\u0161", 155: "\u203A", 156: "\u0153", 158: "\u017E", 159: "\u0178"}, m = function(e2) {
      var t2 = typeof e2 == "string" ? e2.charCodeAt(0) : e2;
      return t2 >= 48 && t2 <= 57;
    };
    var E = function(e2) {
      var t2 = typeof e2 == "string" ? e2.charCodeAt(0) : e2;
      return t2 >= 97 && t2 <= 102 || t2 >= 65 && t2 <= 70 || t2 >= 48 && t2 <= 57;
    };
    var C = function(e2) {
      var t2 = typeof e2 == "string" ? e2.charCodeAt(0) : e2;
      return t2 >= 97 && t2 <= 122 || t2 >= 65 && t2 <= 90;
    };
    var b = function(e2) {
      return C(e2) || m(e2);
    };
    var v = {AEli: "\xC6", AElig: "\xC6", AM: "&", AMP: "&", Aacut: "\xC1", Aacute: "\xC1", Abreve: "\u0102", Acir: "\xC2", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrav: "\xC0", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", Arin: "\xC5", Aring: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", Atild: "\xC3", Atilde: "\xC3", Aum: "\xC4", Auml: "\xC4", Backslash: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", Bcy: "\u0411", Because: "\u2235", Bernoullis: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", Bscr: "\u212C", Bumpeq: "\u224E", CHcy: "\u0427", COP: "\xA9", COPY: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", Cayleys: "\u212D", Ccaron: "\u010C", Ccedi: "\xC7", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", CenterDot: "\xB7", Cfr: "\u212D", Chi: "\u03A7", CircleDot: "\u2299", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", Colon: "\u2237", Colone: "\u2A74", Congruent: "\u2261", Conint: "\u222F", ContourIntegral: "\u222E", Copf: "\u2102", Coproduct: "\u2210", CounterClockwiseContourIntegral: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", DD: "\u2145", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", Diamond: "\u22C4", DifferentialD: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", Downarrow: "\u21D3", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ET: "\xD0", ETH: "\xD0", Eacut: "\xC9", Eacute: "\xC9", Ecaron: "\u011A", Ecir: "\xCA", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrav: "\xC8", Egrave: "\xC8", Element: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", Equilibrium: "\u21CC", Escr: "\u2130", Esim: "\u2A73", Eta: "\u0397", Eum: "\xCB", Euml: "\xCB", Exists: "\u2203", ExponentialE: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", G: ">", GT: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", HilbertSpace: "\u210B", Hopf: "\u210D", HorizontalLine: "\u2500", Hscr: "\u210B", Hstrok: "\u0126", HumpDownHump: "\u224E", HumpEqual: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacut: "\xCD", Iacute: "\xCD", Icir: "\xCE", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Igrav: "\xCC", Igrave: "\xCC", Im: "\u2111", Imacr: "\u012A", ImaginaryI: "\u2148", Implies: "\u21D2", Int: "\u222C", Integral: "\u222B", Intersection: "\u22C2", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Ium: "\xCF", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", L: "<", LT: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Larr: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", LeftRightArrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", Leftarrow: "\u21D0", Leftrightarrow: "\u21D4", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", LongLeftRightArrow: "\u27F7", LongRightArrow: "\u27F6", Longleftarrow: "\u27F8", Longleftrightarrow: "\u27FA", Longrightarrow: "\u27F9", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", Lscr: "\u2112", Lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", Mopf: "\u{1D544}", Mscr: "\u2133", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", Nscr: "\u{1D4A9}", Ntild: "\xD1", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacut: "\xD3", Oacute: "\xD3", Ocir: "\xD4", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograv: "\xD2", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslas: "\xD8", Oslash: "\xD8", Otild: "\xD5", Otilde: "\xD5", Otimes: "\u2A37", Oum: "\xD6", Ouml: "\xD6", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", Poincareplane: "\u210C", Popf: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", Prime: "\u2033", Product: "\u220F", Proportion: "\u2237", Proportional: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUO: '"', QUOT: '"', Qfr: "\u{1D514}", Qopf: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", RE: "\xAE", REG: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", Rfr: "\u211C", Rho: "\u03A1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", Rightarrow: "\u21D2", Ropf: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", Rscr: "\u211B", Rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", SuchThat: "\u220B", Sum: "\u2211", Sup: "\u22D1", Superset: "\u2283", SupersetEqual: "\u2287", Supset: "\u22D1", THOR: "\xDE", THORN: "\xDE", TRADE: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacut: "\xDA", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucir: "\xDB", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrav: "\xD9", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", UpEquilibrium: "\u296E", UpTee: "\u22A5", UpTeeArrow: "\u21A5", Uparrow: "\u21D1", Updownarrow: "\u21D5", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uum: "\xDC", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacut: "\xDD", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", ZeroWidthSpace: "\u200B", Zeta: "\u0396", Zfr: "\u2128", Zopf: "\u2124", Zscr: "\u{1D4B5}", aacut: "\xE1", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acir: "\xE2", acirc: "\xE2", acut: "\xB4", acute: "\xB4", acy: "\u0430", aeli: "\xE6", aelig: "\xE6", af: "\u2061", afr: "\u{1D51E}", agrav: "\xE0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", am: "&", amp: "&", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", ap: "\u2248", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", apid: "\u224B", apos: "'", approx: "\u2248", approxeq: "\u224A", arin: "\xE5", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", asymp: "\u2248", asympeq: "\u224D", atild: "\xE3", atilde: "\xE3", aum: "\xE4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", beta: "\u03B2", beth: "\u2136", between: "\u226C", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxh: "\u2500", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", bprime: "\u2035", breve: "\u02D8", brvba: "\xA6", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", bumpeq: "\u224F", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", ccaps: "\u2A4D", ccaron: "\u010D", ccedi: "\xE7", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cedi: "\xB8", cedil: "\xB8", cemptyv: "\u29B2", cen: "\xA2", cent: "\xA2", centerdot: "\xB7", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledR: "\xAE", circledS: "\u24C8", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", conint: "\u222E", copf: "\u{1D554}", coprod: "\u2210", cop: "\xA9", copy: "\xA9", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curre: "\xA4", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dArr: "\u21D3", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", darr: "\u2193", dash: "\u2010", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", dcaron: "\u010F", dcy: "\u0434", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", ddotseq: "\u2A77", de: "\xB0", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", dharl: "\u21C3", dharr: "\u21C2", diam: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divid: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", dot: "\u02D9", doteq: "\u2250", doteqdot: "\u2251", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", downarrow: "\u2193", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eDDot: "\u2A77", eDot: "\u2251", eacut: "\xE9", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\xEA", ecirc: "\xEA", ecolon: "\u2255", ecy: "\u044D", edot: "\u0117", ee: "\u2147", efDot: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrav: "\xE8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", equals: "=", equest: "\u225F", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", erarr: "\u2971", escr: "\u212F", esdot: "\u2250", esim: "\u2242", eta: "\u03B7", et: "\xF0", eth: "\xF0", eum: "\xEB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", expectation: "\u2130", exponentiale: "\u2147", fallingdotseq: "\u2252", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac1: "\xBC", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac3: "\xBE", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", gE: "\u2267", gEl: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gammad: "\u03DD", gap: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", ge: "\u2265", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", gjcy: "\u0453", gl: "\u2277", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", gopf: "\u{1D558}", grave: "`", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", g: ">", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hArr: "\u21D4", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", hardcy: "\u044A", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", hbar: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hslash: "\u210F", hstrok: "\u0127", hybull: "\u2043", hyphen: "\u2010", iacut: "\xED", iacute: "\xED", ic: "\u2063", icir: "\xEE", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexc: "\xA1", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", igrav: "\xEC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", image: "\u2111", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", int: "\u222B", intcal: "\u22BA", integers: "\u2124", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iprod: "\u2A3C", iques: "\xBF", iquest: "\xBF", iscr: "\u{1D4BE}", isin: "\u2208", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", itilde: "\u0129", iukcy: "\u0456", ium: "\xEF", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAarr: "\u21DA", lArr: "\u21D0", lAtail: "\u291B", lBarr: "\u290E", lE: "\u2266", lEg: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", lambda: "\u03BB", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", laqu: "\xAB", laquo: "\xAB", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lceil: "\u2308", lcub: "{", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leftarrow: "\u2190", leftarrowtail: "\u21A2", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", leftthreetimes: "\u22CB", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", lessgtr: "\u2276", lesssim: "\u2272", lfisht: "\u297C", lfloor: "\u230A", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", lstrok: "\u0142", l: "<", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", mac: "\xAF", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", measuredangle: "\u2221", mfr: "\u{1D52A}", mho: "\u2127", micr: "\xB5", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middo: "\xB7", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", mstpos: "\u223E", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nGtv: "\u226B\u0338", nLeftarrow: "\u21CD", nLeftrightarrow: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nLtv: "\u226A\u0338", nRightarrow: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nabla: "\u2207", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbs: "\xA0", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", neArr: "\u21D7", nearhk: "\u2924", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", nexist: "\u2204", nexists: "\u2204", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", ngsim: "\u2275", ngt: "\u226F", ngtr: "\u226F", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", njcy: "\u045A", nlArr: "\u21CD", nlE: "\u2266\u0338", nlarr: "\u219A", nldr: "\u2025", nle: "\u2270", nleftarrow: "\u219A", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nlsim: "\u2274", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nmid: "\u2224", nopf: "\u{1D55F}", no: "\xAC", not: "\xAC", notin: "\u2209", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", ntild: "\xF1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", oS: "\u24C8", oacut: "\xF3", oacute: "\xF3", oast: "\u229B", ocir: "\xF4", ocirc: "\xF4", ocy: "\u043E", odash: "\u229D", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograv: "\xF2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", oplus: "\u2295", or: "\u2228", orarr: "\u21BB", ord: "\xBA", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oscr: "\u2134", oslas: "\xF8", oslash: "\xF8", osol: "\u2298", otild: "\xF5", otilde: "\xF5", otimes: "\u2297", otimesas: "\u2A36", oum: "\xF6", ouml: "\xF6", ovbar: "\u233D", par: "\xB6", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", plusm: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", pointint: "\u2A15", popf: "\u{1D561}", poun: "\xA3", pound: "\xA3", pr: "\u227A", prE: "\u2AB3", prap: "\u2AB7", prcue: "\u227C", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", prime: "\u2032", primes: "\u2119", prnE: "\u2AB5", prnap: "\u2AB9", prnsim: "\u22E8", prod: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quo: '"', quot: '"', rAarr: "\u21DB", rArr: "\u21D2", rAtail: "\u291C", rBarr: "\u290F", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raqu: "\xBB", raquo: "\xBB", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rceil: "\u2309", rcub: "}", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", re: "\xAE", reg: "\xAE", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", rightarrow: "\u2192", rightarrowtail: "\u21A3", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", rightthreetimes: "\u22CC", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", rsaquo: "\u203A", rscr: "\u{1D4C7}", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", sbquo: "\u201A", sc: "\u227B", scE: "\u2AB4", scap: "\u2AB8", scaron: "\u0161", sccue: "\u227D", sce: "\u2AB0", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", scnap: "\u2ABA", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", seArr: "\u21D8", searhk: "\u2925", searr: "\u2198", searrow: "\u2198", sec: "\xA7", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shortmid: "\u2223", shortparallel: "\u2225", sh: "\xAD", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", square: "\u25A1", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", subE: "\u2AC5", subdot: "\u2ABD", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", sum: "\u2211", sung: "\u266A", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supe: "\u2287", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swarhk: "\u2926", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szli: "\xDF", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tbrk: "\u23B4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", thor: "\xFE", thorn: "\xFE", tilde: "\u02DC", time: "\xD7", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", uArr: "\u21D1", uHar: "\u2963", uacut: "\xFA", uacute: "\xFA", uarr: "\u2191", ubrcy: "\u045E", ubreve: "\u016D", ucir: "\xFB", ucirc: "\xFB", ucy: "\u0443", udarr: "\u21C5", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", ufr: "\u{1D532}", ugrav: "\xF9", ugrave: "\xF9", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", um: "\xA8", uml: "\xA8", uogon: "\u0173", uopf: "\u{1D566}", uparrow: "\u2191", updownarrow: "\u2195", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", upsi: "\u03C5", upsih: "\u03D2", upsilon: "\u03C5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", uum: "\xFC", uuml: "\xFC", uwangle: "\u29A7", vArr: "\u21D5", vBar: "\u2AE8", vBarv: "\u2AE9", vDash: "\u22A8", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vcy: "\u0432", vdash: "\u22A2", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", vert: "|", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", yacut: "\xFD", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", ye: "\xA5", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yum: "\xFF", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeetrf: "\u2128", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C"}, F = function(e2) {
      return !!A.call(v, e2) && v[e2];
    }, A = {}.hasOwnProperty;
    var y = function(e2, t2) {
      var r2, n2, u2 = {};
      t2 || (t2 = {});
      for (n2 in O)
        r2 = t2[n2], u2[n2] = r2 == null ? O[n2] : r2;
      (u2.position.indent || u2.position.start) && (u2.indent = u2.position.indent || [], u2.position = u2.position.start);
      return function(e3, t3) {
        var r3, n3, u3, i2, o2, a2, c2, s2, l2, f2, D2, p2, d2, m2, E2, C2, v2, A2, y2, O2 = t3.additional, P2 = t3.nonTerminated, j2 = t3.text, z2 = t3.reference, U2 = t3.warning, M2 = t3.textContext, G2 = t3.referenceContext, V2 = t3.warningContext, _2 = t3.position, $2 = t3.indent || [], H2 = e3.length, X2 = 0, W2 = -1, Y2 = _2.column || 1, Z2 = _2.line || 1, J2 = "", K2 = [];
        typeof O2 == "string" && (O2 = O2.charCodeAt(0));
        C2 = Q2(), s2 = U2 ? ee2 : x, X2--, H2++;
        for (; ++X2 < H2; )
          if (o2 === 10 && (Y2 = $2[W2] || 1), (o2 = e3.charCodeAt(X2)) === 38) {
            if ((c2 = e3.charCodeAt(X2 + 1)) === 9 || c2 === 10 || c2 === 12 || c2 === 32 || c2 === 38 || c2 === 60 || c2 != c2 || O2 && c2 === O2) {
              J2 += k(o2), Y2++;
              continue;
            }
            for (p2 = d2 = X2 + 1, y2 = d2, c2 === 35 ? (y2 = ++p2, (c2 = e3.charCodeAt(y2)) === 88 || c2 === 120 ? (m2 = B, y2 = ++p2) : m2 = T) : m2 = L, r3 = "", D2 = "", i2 = "", E2 = S[m2], y2--; ++y2 < H2 && E2(c2 = e3.charCodeAt(y2)); )
              i2 += k(c2), m2 === L && w.call(h, i2) && (r3 = i2, D2 = h[i2]);
            (u3 = e3.charCodeAt(y2) === 59) && (y2++, (n3 = m2 === L && F(i2)) && (r3 = i2, D2 = n3)), A2 = 1 + y2 - d2, (u3 || P2) && (i2 ? m2 === L ? (u3 && !D2 ? s2(5, 1) : (r3 !== i2 && (A2 = 1 + (y2 = p2 + r3.length) - p2, u3 = false), u3 || (l2 = r3 ? 1 : 3, t3.attribute ? (c2 = e3.charCodeAt(y2)) === 61 ? (s2(l2, A2), D2 = null) : b(c2) ? D2 = null : s2(l2, A2) : s2(l2, A2))), a2 = D2) : (u3 || s2(2, A2), R(a2 = parseInt(i2, N[m2])) ? (s2(7, A2), a2 = k(65533)) : a2 in g ? (s2(6, A2), a2 = g[a2]) : (f2 = "", q(a2) && s2(6, A2), a2 > 65535 && (f2 += k((a2 -= 65536) >>> 10 | 55296), a2 = 56320 | 1023 & a2), a2 = f2 + k(a2))) : m2 !== L && s2(4, A2)), a2 ? (te2(), C2 = Q2(), X2 = y2 - 1, Y2 += y2 - d2 + 1, K2.push(a2), (v2 = Q2()).offset++, z2 && z2.call(G2, a2, {start: C2, end: v2}, e3.slice(d2 - 1, y2)), C2 = v2) : (i2 = e3.slice(d2 - 1, y2), J2 += i2, Y2 += i2.length, X2 = y2 - 1);
          } else
            o2 === 10 && (Z2++, W2++, Y2 = 0), o2 == o2 ? (J2 += k(o2), Y2++) : te2();
        return K2.join("");
        function Q2() {
          return {line: Z2, column: Y2, offset: X2 + (_2.offset || 0)};
        }
        function ee2(e4, t4) {
          var r4 = Q2();
          r4.column += t4, r4.offset += t4, U2.call(V2, I[e4], r4, e4);
        }
        function te2() {
          J2 && (K2.push(J2), j2 && j2.call(M2, J2, {start: C2, end: Q2()}), J2 = "");
        }
      }(e2, u2);
    }, w = {}.hasOwnProperty, k = String.fromCharCode, x = Function.prototype, O = {warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true}, L = "named", B = "hexadecimal", T = "decimal", N = {hexadecimal: 16, decimal: 10}, S = {};
    S.named = b, S[T] = m, S[B] = E;
    var I = {};
    function R(e2) {
      return e2 >= 55296 && e2 <= 57343 || e2 > 1114111;
    }
    function q(e2) {
      return e2 >= 1 && e2 <= 8 || e2 === 11 || e2 >= 13 && e2 <= 31 || e2 >= 127 && e2 <= 159 || e2 >= 64976 && e2 <= 65007 || (65535 & e2) == 65535 || (65535 & e2) == 65534;
    }
    I[1] = "Named character references must be terminated by a semicolon", I[2] = "Numeric character references must be terminated by a semicolon", I[3] = "Named character references cannot be empty", I[4] = "Numeric character references cannot be empty", I[5] = "Named character references must be known", I[6] = "Numeric character references cannot be disallowed", I[7] = "Numeric character references cannot be outside the permissible Unicode range";
    var P = function(t2) {
      return n2.raw = u2, n2;
      function r2(e2) {
        for (var r3 = t2.offset, n3 = e2.line, u3 = []; ++n3 && n3 in r3; )
          u3.push((r3[n3] || 0) + 1);
        return {start: e2, indent: u3};
      }
      function n2(e2, n3, u3) {
        y(e2, {position: r2(n3), warning: i2, text: u3, reference: u3, textContext: t2, referenceContext: t2});
      }
      function u2(t3, n3, u3) {
        return y(t3, e(u3, {position: r2(n3), warning: i2}));
      }
      function i2(e2, r3, n3) {
        n3 !== 3 && t2.file.message(e2, r3);
      }
    };
    var j = function(e2) {
      return function(t2, r2) {
        var n2, u2, i2, o2, a2, c2 = this, s2 = c2.offset, l2 = [], f2 = c2[e2 + "Methods"], D2 = c2[e2 + "Tokenizers"], p2 = r2.line, d2 = r2.column;
        if (!t2)
          return l2;
        F2.now = m2, F2.file = c2.file, h2("");
        for (; t2; ) {
          for (n2 = -1, u2 = f2.length, o2 = false; ++n2 < u2 && (!(i2 = D2[f2[n2]]) || i2.onlyAtStart && !c2.atStart || i2.notInList && c2.inList || i2.notInBlock && c2.inBlock || i2.notInLink && c2.inLink || (a2 = t2.length, i2.apply(c2, [F2, t2]), !(o2 = a2 !== t2.length))); )
            ;
          o2 || c2.file.fail(new Error("Infinite loop"), F2.now());
        }
        return c2.eof = m2(), l2;
        function h2(e3) {
          for (var t3 = -1, r3 = e3.indexOf("\n"); r3 !== -1; )
            p2++, t3 = r3, r3 = e3.indexOf("\n", r3 + 1);
          t3 === -1 ? d2 += e3.length : d2 = e3.length - t3, p2 in s2 && (t3 !== -1 ? d2 += s2[p2] : d2 <= s2[p2] && (d2 = s2[p2] + 1));
        }
        function g2() {
          var e3 = [], t3 = p2 + 1;
          return function() {
            for (var r3 = p2 + 1; t3 < r3; )
              e3.push((s2[t3] || 0) + 1), t3++;
            return e3;
          };
        }
        function m2() {
          var e3 = {line: p2, column: d2};
          return e3.offset = c2.toOffset(e3), e3;
        }
        function E2(e3) {
          this.start = e3, this.end = m2();
        }
        function C2(e3) {
          t2.slice(0, e3.length) !== e3 && c2.file.fail(new Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"), m2());
        }
        function b2() {
          var e3 = m2();
          return t3;
          function t3(t4, r3) {
            var n3 = t4.position, u3 = n3 ? n3.start : e3, i3 = [], o3 = n3 && n3.end.line, a3 = e3.line;
            if (t4.position = new E2(u3), n3 && r3 && n3.indent) {
              if (i3 = n3.indent, o3 < a3) {
                for (; ++o3 < a3; )
                  i3.push((s2[o3] || 0) + 1);
                i3.push(e3.column);
              }
              r3 = i3.concat(r3);
            }
            return t4.position.indent = r3 || [], t4;
          }
        }
        function v2(e3, t3) {
          var r3 = t3 ? t3.children : l2, n3 = r3[r3.length - 1];
          return n3 && e3.type === n3.type && (e3.type === "text" || e3.type === "blockquote") && z(n3) && z(e3) && (e3 = (e3.type === "text" ? U : M).call(c2, n3, e3)), e3 !== n3 && r3.push(e3), c2.atStart && l2.length !== 0 && c2.exitStart(), e3;
        }
        function F2(e3) {
          var r3 = g2(), n3 = b2(), u3 = m2();
          return C2(e3), i3.reset = o3, o3.test = a3, i3.test = a3, t2 = t2.slice(e3.length), h2(e3), r3 = r3(), i3;
          function i3(e4, t3) {
            return n3(v2(n3(e4), t3), r3);
          }
          function o3() {
            var r4 = i3.apply(null, arguments);
            return p2 = u3.line, d2 = u3.column, t2 = e3 + t2, r4;
          }
          function a3() {
            var r4 = n3({});
            return p2 = u3.line, d2 = u3.column, t2 = e3 + t2, r4.position;
          }
        }
      };
    };
    function z(e2) {
      var t2, r2;
      return e2.type !== "text" || !e2.position || (t2 = e2.position.start, r2 = e2.position.end, t2.line !== r2.line || r2.column - t2.column === e2.value.length);
    }
    function U(e2, t2) {
      return e2.value += t2.value, e2;
    }
    function M(e2, t2) {
      return this.options.commonmark || this.options.gfm ? t2 : (e2.children = e2.children.concat(t2.children), e2);
    }
    var G = H, V = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"], _ = V.concat(["~", "|"]), $ = _.concat(["\n", '"', "$", "%", "&", "'", ",", "/", ":", ";", "<", "=", "?", "@", "^"]);
    function H(e2) {
      var t2 = e2 || {};
      return t2.commonmark ? $ : t2.gfm ? _ : V;
    }
    H.default = V, H.gfm = _, H.commonmark = $;
    var X = {position: true, gfm: true, commonmark: false, pedantic: false, blocks: ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]}, W = function(t2) {
      var r2, n2, u2 = this, i2 = u2.options;
      if (t2 == null)
        t2 = {};
      else {
        if (typeof t2 != "object")
          throw new Error("Invalid value `" + t2 + "` for setting `options`");
        t2 = e(t2);
      }
      for (r2 in X) {
        if ((n2 = t2[r2]) == null && (n2 = i2[r2]), r2 !== "blocks" && typeof n2 != "boolean" || r2 === "blocks" && typeof n2 != "object")
          throw new Error("Invalid value `" + n2 + "` for setting `options." + r2 + "`");
        t2[r2] = n2;
      }
      return u2.options = t2, u2.escape = G(t2), u2;
    };
    var Y = Z;
    function Z(e2) {
      if (typeof e2 == "string")
        return function(e3) {
          return t2;
          function t2(t3) {
            return Boolean(t3 && t3.type === e3);
          }
        }(e2);
      if (e2 == null)
        return Q;
      if (typeof e2 == "object")
        return ("length" in e2 ? K : J)(e2);
      if (typeof e2 == "function")
        return e2;
      throw new Error("Expected function, string, or object as test");
    }
    function J(e2) {
      return function(t2) {
        var r2;
        for (r2 in e2)
          if (t2[r2] !== e2[r2])
            return false;
        return true;
      };
    }
    function K(e2) {
      var t2 = function(e3) {
        for (var t3 = [], r3 = e3.length, n2 = -1; ++n2 < r3; )
          t3[n2] = Z(e3[n2]);
        return t3;
      }(e2), r2 = t2.length;
      return function() {
        var e3 = -1;
        for (; ++e3 < r2; )
          if (t2[e3].apply(this, arguments))
            return true;
        return false;
      };
    }
    function Q() {
      return true;
    }
    var ee = ne, te = "skip", re = false;
    function ne(e2, t2, r2, n2) {
      var u2;
      function i2(e3, o2, a2) {
        var c2, s2 = [];
        return (t2 && !u2(e3, o2, a2[a2.length - 1] || null) || (s2 = ue(r2(e3, a2)))[0] !== re) && e3.children && s2[0] !== te && (c2 = ue(function(e4, t3) {
          var r3, u3 = -1, o3 = n2 ? -1 : 1, a3 = (n2 ? e4.length : u3) + o3;
          for (; a3 > u3 && a3 < e4.length; ) {
            if ((r3 = i2(e4[a3], a3, t3))[0] === re)
              return r3;
            a3 = typeof r3[1] == "number" ? r3[1] : a3 + o3;
          }
        }(e3.children, a2.concat(e3))))[0] === re ? c2 : s2;
      }
      typeof t2 == "function" && typeof r2 != "function" && (n2 = r2, r2 = t2, t2 = null), u2 = Y(t2), i2(e2, null, []);
    }
    function ue(e2) {
      return e2 !== null && typeof e2 == "object" && "length" in e2 ? e2 : typeof e2 == "number" ? [true, e2] : [e2];
    }
    ne.CONTINUE = true, ne.SKIP = te, ne.EXIT = re;
    var ie = se, oe = ee.CONTINUE, ae = ee.SKIP, ce = ee.EXIT;
    function se(e2, t2, r2, n2) {
      typeof t2 == "function" && typeof r2 != "function" && (n2 = r2, r2 = t2, t2 = null), ee(e2, t2, function(e3, t3) {
        var n3 = t3[t3.length - 1], u2 = n3 ? n3.children.indexOf(e3) : null;
        return r2(e3, u2, n3);
      }, n2);
    }
    se.CONTINUE = oe, se.SKIP = ae, se.EXIT = ce;
    var le = function(e2, t2) {
      return ie(e2, t2 ? fe : De), e2;
    };
    function fe(e2) {
      delete e2.position;
    }
    function De(e2) {
      e2.position = void 0;
    }
    var pe = function() {
      var t2, r2 = this, n2 = String(r2.file), u2 = {line: 1, column: 1, offset: 0}, i2 = e(u2);
      (n2 = n2.replace(de, "\n")).charCodeAt(0) === 65279 && (n2 = n2.slice(1), i2.column++, i2.offset++);
      t2 = {type: "root", children: r2.tokenizeBlock(n2, i2), position: {start: u2, end: r2.eof || e(u2)}}, r2.options.position || le(t2, true);
      return t2;
    }, de = /\r\n|\r/g;
    var he = /^[ \t]*(\n|$)/, ge = function(e2, t2, r2) {
      var n2, u2 = "", i2 = 0, o2 = t2.length;
      for (; i2 < o2 && (n2 = he.exec(t2.slice(i2))) != null; )
        i2 += n2[0].length, u2 += n2[0];
      if (u2 === "")
        return;
      if (r2)
        return true;
      e2(u2);
    };
    var me, Ee = "", Ce = function(e2, t2) {
      if (typeof e2 != "string")
        throw new TypeError("expected a string");
      if (t2 === 1)
        return e2;
      if (t2 === 2)
        return e2 + e2;
      var r2 = e2.length * t2;
      if (me !== e2 || me === void 0)
        me = e2, Ee = "";
      else if (Ee.length >= r2)
        return Ee.substr(0, r2);
      for (; r2 > Ee.length && t2 > 1; )
        1 & t2 && (Ee += e2), t2 >>= 1, e2 += e2;
      return Ee = (Ee += e2).substr(0, r2);
    };
    var be = function(e2) {
      var t2 = String(e2), r2 = t2.length;
      for (; t2.charAt(--r2) === "\n"; )
        ;
      return t2.slice(0, r2 + 1);
    };
    var ve = function(e2, t2, r2) {
      var n2, u2, i2, o2 = -1, a2 = t2.length, c2 = "", s2 = "", l2 = "", f2 = "";
      for (; ++o2 < a2; )
        if (n2 = t2.charAt(o2), i2)
          if (i2 = false, c2 += l2, s2 += f2, l2 = "", f2 = "", n2 === "\n")
            l2 = n2, f2 = n2;
          else
            for (c2 += n2, s2 += n2; ++o2 < a2; ) {
              if (!(n2 = t2.charAt(o2)) || n2 === "\n") {
                f2 = n2, l2 = n2;
                break;
              }
              c2 += n2, s2 += n2;
            }
        else if (n2 === " " && t2.charAt(o2 + 1) === n2 && t2.charAt(o2 + 2) === n2 && t2.charAt(o2 + 3) === n2)
          l2 += Fe, o2 += 3, i2 = true;
        else if (n2 === "	")
          l2 += n2, i2 = true;
        else {
          for (u2 = ""; n2 === "	" || n2 === " "; )
            u2 += n2, n2 = t2.charAt(++o2);
          if (n2 !== "\n")
            break;
          l2 += u2 + n2, f2 += n2;
        }
      if (s2)
        return !!r2 || e2(c2)({type: "code", lang: null, meta: null, value: be(s2)});
    }, Fe = Ce(" ", 4);
    var Ae = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2, p2, d2, h2, g2 = this, m2 = g2.options.gfm, E2 = t2.length + 1, C2 = 0, b2 = "";
      if (!m2)
        return;
      for (; C2 < E2 && ((i2 = t2.charAt(C2)) === ke || i2 === we); )
        b2 += i2, C2++;
      if (d2 = C2, (i2 = t2.charAt(C2)) !== "~" && i2 !== "`")
        return;
      C2++, u2 = i2, n2 = 1, b2 += i2;
      for (; C2 < E2 && (i2 = t2.charAt(C2)) === u2; )
        b2 += i2, n2++, C2++;
      if (n2 < 3)
        return;
      for (; C2 < E2 && ((i2 = t2.charAt(C2)) === ke || i2 === we); )
        b2 += i2, C2++;
      o2 = "", s2 = "";
      for (; C2 < E2 && (i2 = t2.charAt(C2)) !== ye && (u2 !== "`" || i2 !== u2); )
        i2 === ke || i2 === we ? s2 += i2 : (o2 += s2 + i2, s2 = ""), C2++;
      if ((i2 = t2.charAt(C2)) && i2 !== ye)
        return;
      if (r2)
        return true;
      (h2 = e2.now()).column += b2.length, h2.offset += b2.length, b2 += o2, o2 = g2.decode.raw(g2.unescape(o2), h2), s2 && (b2 += s2);
      s2 = "", D2 = "", p2 = "", l2 = "", f2 = "";
      var v2 = true;
      for (; C2 < E2; )
        if (i2 = t2.charAt(C2), l2 += D2, f2 += p2, D2 = "", p2 = "", i2 === ye) {
          for (v2 ? (b2 += i2, v2 = false) : (D2 += i2, p2 += i2), s2 = "", C2++; C2 < E2 && (i2 = t2.charAt(C2)) === ke; )
            s2 += i2, C2++;
          if (D2 += s2, p2 += s2.slice(d2), !(s2.length >= 4)) {
            for (s2 = ""; C2 < E2 && (i2 = t2.charAt(C2)) === u2; )
              s2 += i2, C2++;
            if (D2 += s2, p2 += s2, !(s2.length < n2)) {
              for (s2 = ""; C2 < E2 && ((i2 = t2.charAt(C2)) === ke || i2 === we); )
                D2 += i2, p2 += i2, C2++;
              if (!i2 || i2 === ye)
                break;
            }
          }
        } else
          l2 += i2, p2 += i2, C2++;
      b2 += l2 + D2, C2 = -1, E2 = o2.length;
      for (; ++C2 < E2; )
        if ((i2 = o2.charAt(C2)) === ke || i2 === we)
          a2 || (a2 = o2.slice(0, C2));
        else if (a2) {
          c2 = o2.slice(C2);
          break;
        }
      return e2(b2)({type: "code", lang: a2 || o2 || null, meta: c2 || null, value: f2});
    }, ye = "\n", we = "	", ke = " ";
    var xe = r(function(e2, t2) {
      (t2 = e2.exports = function(e3) {
        return e3.replace(/^\s*|\s*$/g, "");
      }).left = function(e3) {
        return e3.replace(/^\s*/, "");
      }, t2.right = function(e3) {
        return e3.replace(/\s*$/, "");
      };
    }), Oe = function(e2, t2, r2, n2) {
      var u2, i2, o2 = e2.length, a2 = -1;
      for (; ++a2 < o2; )
        if (u2 = e2[a2], ((i2 = u2[1] || {}).pedantic === void 0 || i2.pedantic === r2.options.pedantic) && (i2.commonmark === void 0 || i2.commonmark === r2.options.commonmark) && t2[u2[0]].apply(r2, n2))
          return true;
      return false;
    };
    var Le = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2 = this, p2 = D2.offset, d2 = D2.blockTokenizers, h2 = D2.interruptBlockquote, g2 = e2.now(), m2 = g2.line, E2 = t2.length, C2 = [], b2 = [], v2 = [], F2 = 0;
      for (; F2 < E2 && ((u2 = t2.charAt(F2)) === " " || u2 === "	"); )
        F2++;
      if (t2.charAt(F2) !== ">")
        return;
      if (r2)
        return true;
      F2 = 0;
      for (; F2 < E2; ) {
        for (o2 = t2.indexOf("\n", F2), s2 = F2, l2 = false, o2 === -1 && (o2 = E2); F2 < E2 && ((u2 = t2.charAt(F2)) === " " || u2 === "	"); )
          F2++;
        if (t2.charAt(F2) === ">" ? (F2++, l2 = true, t2.charAt(F2) === " " && F2++) : F2 = s2, a2 = t2.slice(F2, o2), !l2 && !xe(a2)) {
          F2 = s2;
          break;
        }
        if (!l2 && (i2 = t2.slice(F2), Oe(h2, d2, D2, [e2, i2, true])))
          break;
        c2 = s2 === F2 ? a2 : t2.slice(s2, o2), v2.push(F2 - s2), C2.push(c2), b2.push(a2), F2 = o2 + 1;
      }
      F2 = -1, E2 = v2.length, n2 = e2(C2.join("\n"));
      for (; ++F2 < E2; )
        p2[m2] = (p2[m2] || 0) + v2[F2], m2++;
      return f2 = D2.enterBlock(), b2 = D2.tokenizeBlock(b2.join("\n"), g2), f2(), n2({type: "blockquote", children: b2});
    };
    var Be = function(e2, t2, r2) {
      var n2, u2, i2, o2 = this.options.pedantic, a2 = t2.length + 1, c2 = -1, s2 = e2.now(), l2 = "", f2 = "";
      for (; ++c2 < a2; ) {
        if ((n2 = t2.charAt(c2)) !== Ne && n2 !== Te) {
          c2--;
          break;
        }
        l2 += n2;
      }
      i2 = 0;
      for (; ++c2 <= a2; ) {
        if ((n2 = t2.charAt(c2)) !== Se) {
          c2--;
          break;
        }
        l2 += n2, i2++;
      }
      if (i2 > 6)
        return;
      if (!i2 || !o2 && t2.charAt(c2 + 1) === Se)
        return;
      a2 = t2.length + 1, u2 = "";
      for (; ++c2 < a2; ) {
        if ((n2 = t2.charAt(c2)) !== Ne && n2 !== Te) {
          c2--;
          break;
        }
        u2 += n2;
      }
      if (!o2 && u2.length === 0 && n2 && n2 !== "\n")
        return;
      if (r2)
        return true;
      l2 += u2, u2 = "", f2 = "";
      for (; ++c2 < a2 && (n2 = t2.charAt(c2)) && n2 !== "\n"; )
        if (n2 === Ne || n2 === Te || n2 === Se) {
          for (; n2 === Ne || n2 === Te; )
            u2 += n2, n2 = t2.charAt(++c2);
          if (o2 || !f2 || u2 || n2 !== Se) {
            for (; n2 === Se; )
              u2 += n2, n2 = t2.charAt(++c2);
            for (; n2 === Ne || n2 === Te; )
              u2 += n2, n2 = t2.charAt(++c2);
            c2--;
          } else
            f2 += n2;
        } else
          f2 += u2 + n2, u2 = "";
      return s2.column += l2.length, s2.offset += l2.length, e2(l2 += f2 + u2)({type: "heading", depth: i2, children: this.tokenizeInline(f2, s2)});
    }, Te = "	", Ne = " ", Se = "#";
    var Ie = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2 = -1, c2 = t2.length + 1, s2 = "";
      for (; ++a2 < c2 && ((n2 = t2.charAt(a2)) === "	" || n2 === " "); )
        s2 += n2;
      if (n2 !== "*" && n2 !== "-" && n2 !== "_")
        return;
      u2 = n2, s2 += n2, i2 = 1, o2 = "";
      for (; ++a2 < c2; )
        if ((n2 = t2.charAt(a2)) === u2)
          i2++, s2 += o2 + u2, o2 = "";
        else {
          if (n2 !== " ")
            return i2 >= 3 && (!n2 || n2 === "\n") ? (s2 += o2, !!r2 || e2(s2)({type: "thematicBreak"})) : void 0;
          o2 += n2;
        }
    };
    var Re = function(e2) {
      var t2, r2 = 0, n2 = 0, u2 = e2.charAt(r2), i2 = {}, o2 = 0;
      for (; u2 === "	" || u2 === " "; ) {
        for (n2 += t2 = u2 === "	" ? 4 : 1, t2 > 1 && (n2 = Math.floor(n2 / t2) * t2); o2 < n2; )
          i2[++o2] = r2;
        u2 = e2.charAt(++r2);
      }
      return {indent: n2, stops: i2};
    };
    var qe = function(e2, t2) {
      var r2, n2, u2, i2 = e2.split("\n"), o2 = i2.length + 1, a2 = 1 / 0, c2 = [];
      i2.unshift(Ce(" ", t2) + "!");
      for (; o2--; )
        if (n2 = Re(i2[o2]), c2[o2] = n2.stops, xe(i2[o2]).length !== 0) {
          if (!n2.indent) {
            a2 = 1 / 0;
            break;
          }
          n2.indent > 0 && n2.indent < a2 && (a2 = n2.indent);
        }
      if (a2 !== 1 / 0)
        for (o2 = i2.length; o2--; ) {
          for (u2 = c2[o2], r2 = a2; r2 && !(r2 in u2); )
            r2--;
          i2[o2] = i2[o2].slice(u2[r2] + 1);
        }
      return i2.shift(), i2.join("\n");
    };
    var Pe = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2, p2, d2, h2, g2, E2, C2, b2, v2, F2, A2, y2, w2, k2, x2 = this, O2 = x2.options.commonmark, L2 = x2.options.pedantic, B2 = x2.blockTokenizers, T2 = x2.interruptList, N2 = 0, S2 = t2.length, I2 = null, R2 = false;
      for (; N2 < S2 && ((o2 = t2.charAt(N2)) === Ue || o2 === je); )
        N2++;
      if ((o2 = t2.charAt(N2)) === "*" || o2 === "+" || o2 === "-")
        a2 = o2, i2 = false;
      else {
        for (i2 = true, u2 = ""; N2 < S2 && (o2 = t2.charAt(N2), m(o2)); )
          u2 += o2, N2++;
        if (o2 = t2.charAt(N2), !u2 || !(o2 === "." || O2 && o2 === ")"))
          return;
        if (r2 && u2 !== "1")
          return;
        I2 = parseInt(u2, 10), a2 = o2;
      }
      if ((o2 = t2.charAt(++N2)) !== je && o2 !== Ue && (L2 || o2 !== ze && o2 !== ""))
        return;
      if (r2)
        return true;
      N2 = 0, g2 = [], E2 = [], C2 = [];
      for (; N2 < S2; ) {
        for (c2 = t2.indexOf(ze, N2), s2 = N2, l2 = false, k2 = false, c2 === -1 && (c2 = S2), n2 = 0; N2 < S2; ) {
          if ((o2 = t2.charAt(N2)) === Ue)
            n2 += 4 - n2 % 4;
          else {
            if (o2 !== je)
              break;
            n2++;
          }
          N2++;
        }
        if (b2 && n2 >= b2.indent && (k2 = true), o2 = t2.charAt(N2), f2 = null, !k2) {
          if (o2 === "*" || o2 === "+" || o2 === "-")
            f2 = o2, N2++, n2++;
          else {
            for (u2 = ""; N2 < S2 && (o2 = t2.charAt(N2), m(o2)); )
              u2 += o2, N2++;
            o2 = t2.charAt(N2), N2++, u2 && (o2 === "." || O2 && o2 === ")") && (f2 = o2, n2 += u2.length + 1);
          }
          if (f2)
            if ((o2 = t2.charAt(N2)) === Ue)
              n2 += 4 - n2 % 4, N2++;
            else if (o2 === je) {
              for (w2 = N2 + 4; N2 < w2 && t2.charAt(N2) === je; )
                N2++, n2++;
              N2 === w2 && t2.charAt(N2) === je && (N2 -= 3, n2 -= 3);
            } else
              o2 !== ze && o2 !== "" && (f2 = null);
        }
        if (f2) {
          if (!L2 && a2 !== f2)
            break;
          l2 = true;
        } else
          O2 || k2 || t2.charAt(s2) !== je ? O2 && b2 && (k2 = n2 >= b2.indent || n2 > 4) : k2 = true, l2 = false, N2 = s2;
        if (p2 = t2.slice(s2, c2), D2 = s2 === N2 ? p2 : t2.slice(N2, c2), (f2 === "*" || f2 === "_" || f2 === "-") && B2.thematicBreak.call(x2, e2, p2, true))
          break;
        if (d2 = h2, h2 = !l2 && !xe(D2).length, k2 && b2)
          b2.value = b2.value.concat(C2, p2), E2 = E2.concat(C2, p2), C2 = [];
        else if (l2)
          C2.length !== 0 && (R2 = true, b2.value.push(""), b2.trail = C2.concat()), b2 = {value: [p2], indent: n2, trail: []}, g2.push(b2), E2 = E2.concat(C2, p2), C2 = [];
        else if (h2) {
          if (d2 && !O2)
            break;
          C2.push(p2);
        } else {
          if (d2)
            break;
          if (Oe(T2, B2, x2, [e2, p2, true]))
            break;
          b2.value = b2.value.concat(C2, p2), E2 = E2.concat(C2, p2), C2 = [];
        }
        N2 = c2 + 1;
      }
      A2 = e2(E2.join(ze)).reset({type: "list", ordered: i2, start: I2, spread: R2, children: []}), v2 = x2.enterList(), F2 = x2.enterBlock(), N2 = -1, S2 = g2.length;
      for (; ++N2 < S2; )
        b2 = g2[N2].value.join(ze), y2 = e2.now(), e2(b2)(He(x2, b2, y2), A2), b2 = g2[N2].trail.join(ze), N2 !== S2 - 1 && (b2 += ze), e2(b2);
      return v2(), F2(), A2;
    }, je = " ", ze = "\n", Ue = "	", Me = /\n\n(?!\s*$)/, Ge = /^\[([ X\tx])][ \t]/, Ve = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/, _e = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/, $e = /^( {1,4}|\t)?/gm;
    function He(e2, t2, r2) {
      var n2, u2, i2 = e2.offset, o2 = e2.options.pedantic ? Xe : We, a2 = null;
      return t2 = o2.apply(null, arguments), e2.options.gfm && (n2 = t2.match(Ge)) && (u2 = n2[0].length, a2 = n2[1].toLowerCase() === "x", i2[r2.line] += u2, t2 = t2.slice(u2)), {type: "listItem", spread: Me.test(t2), checked: a2, children: e2.tokenizeBlock(t2, r2)};
    }
    function Xe(e2, t2, r2) {
      var n2 = e2.offset, u2 = r2.line;
      return t2 = t2.replace(_e, i2), u2 = r2.line, t2.replace($e, i2);
      function i2(e3) {
        return n2[u2] = (n2[u2] || 0) + e3.length, u2++, "";
      }
    }
    function We(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2 = e2.offset, f2 = r2.line;
      for (o2 = (t2 = t2.replace(Ve, function(e3, t3, r3, o3, a3) {
        u2 = t3 + r3 + o3, i2 = a3, Number(r3) < 10 && u2.length % 2 == 1 && (r3 = je + r3);
        return (n2 = t3 + Ce(je, r3.length) + o3) + i2;
      })).split(ze), (a2 = qe(t2, Re(n2).indent).split(ze))[0] = i2, l2[f2] = (l2[f2] || 0) + u2.length, f2++, c2 = 0, s2 = o2.length; ++c2 < s2; )
        l2[f2] = (l2[f2] || 0) + o2[c2].length - a2[c2].length, f2++;
      return a2.join(ze);
    }
    var Ye = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2 = e2.now(), s2 = t2.length, l2 = -1, f2 = "";
      for (; ++l2 < s2; ) {
        if ((i2 = t2.charAt(l2)) !== " " || l2 >= 3) {
          l2--;
          break;
        }
        f2 += i2;
      }
      n2 = "", u2 = "";
      for (; ++l2 < s2; ) {
        if ((i2 = t2.charAt(l2)) === "\n") {
          l2--;
          break;
        }
        i2 === " " || i2 === "	" ? u2 += i2 : (n2 += u2 + i2, u2 = "");
      }
      if (c2.column += f2.length, c2.offset += f2.length, f2 += n2 + u2, i2 = t2.charAt(++l2), o2 = t2.charAt(++l2), i2 !== "\n" || o2 !== "=" && o2 !== "-")
        return;
      f2 += i2, u2 = o2, a2 = o2 === "=" ? 1 : 2;
      for (; ++l2 < s2; ) {
        if ((i2 = t2.charAt(l2)) !== o2) {
          if (i2 !== "\n")
            return;
          l2--;
          break;
        }
        u2 += i2;
      }
      if (r2)
        return true;
      return e2(f2 + u2)({type: "heading", depth: a2, children: this.tokenizeInline(n2, c2)});
    };
    var Ze = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\u0000-\\u0020]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, Je = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Ke = {openCloseTag: new RegExp("^(?:" + Ze + "|" + Je + ")"), tag: new RegExp("^(?:" + Ze + "|" + Je + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")}, Qe = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2 = this.options.blocks.join("|"), f2 = new RegExp("^</?(" + l2 + ")(?=(\\s|/?>|$))", "i"), D2 = t2.length, p2 = 0, d2 = [[et, tt, true], [rt, nt, true], [ut, it, true], [ot, at, true], [ct, st, true], [f2, lt, true], [ft, lt, false]];
      for (; p2 < D2 && ((o2 = t2.charAt(p2)) === "	" || o2 === " "); )
        p2++;
      if (t2.charAt(p2) !== "<")
        return;
      n2 = (n2 = t2.indexOf("\n", p2 + 1)) === -1 ? D2 : n2, u2 = t2.slice(p2, n2), i2 = -1, a2 = d2.length;
      for (; ++i2 < a2; )
        if (d2[i2][0].test(u2)) {
          c2 = d2[i2];
          break;
        }
      if (!c2)
        return;
      if (r2)
        return c2[2];
      if (p2 = n2, !c2[1].test(u2))
        for (; p2 < D2; ) {
          if (n2 = (n2 = t2.indexOf("\n", p2 + 1)) === -1 ? D2 : n2, u2 = t2.slice(p2 + 1, n2), c2[1].test(u2)) {
            u2 && (p2 = n2);
            break;
          }
          p2 = n2;
        }
      return s2 = t2.slice(0, p2), e2(s2)({type: "html", value: s2});
    }, et = /^<(script|pre|style)(?=(\s|>|$))/i, tt = /<\/(script|pre|style)>/i, rt = /^<!--/, nt = /-->/, ut = /^<\?/, it = /\?>/, ot = /^<![A-Za-z]/, at = />/, ct = /^<!\[CDATA\[/, st = /]]>/, lt = /^$/, ft = new RegExp(Ke.openCloseTag.source + "\\s*$");
    var Dt = function(e2) {
      return dt.test(typeof e2 == "number" ? pt(e2) : e2.charAt(0));
    }, pt = String.fromCharCode, dt = /\s/;
    var ht = function(e2) {
      return String(e2).replace(/\s+/g, " ");
    };
    var gt = function(e2) {
      return ht(e2).toLowerCase();
    };
    var mt = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2 = this, D2 = f2.options.commonmark, p2 = 0, d2 = t2.length, h2 = "";
      for (; p2 < d2 && ((o2 = t2.charAt(p2)) === bt || o2 === Ct); )
        h2 += o2, p2++;
      if ((o2 = t2.charAt(p2)) !== "[")
        return;
      p2++, h2 += o2, i2 = "";
      for (; p2 < d2 && (o2 = t2.charAt(p2)) !== vt; )
        o2 === "\\" && (i2 += o2, p2++, o2 = t2.charAt(p2)), i2 += o2, p2++;
      if (!i2 || t2.charAt(p2) !== vt || t2.charAt(p2 + 1) !== ":")
        return;
      c2 = i2, p2 = (h2 += i2 + vt + ":").length, i2 = "";
      for (; p2 < d2 && ((o2 = t2.charAt(p2)) === Ct || o2 === bt || o2 === Et); )
        h2 += o2, p2++;
      if (o2 = t2.charAt(p2), i2 = "", n2 = h2, o2 === "<") {
        for (p2++; p2 < d2 && Ft(o2 = t2.charAt(p2)); )
          i2 += o2, p2++;
        if ((o2 = t2.charAt(p2)) === Ft.delimiter)
          h2 += "<" + i2 + o2, p2++;
        else {
          if (D2)
            return;
          p2 -= i2.length + 1, i2 = "";
        }
      }
      if (!i2) {
        for (; p2 < d2 && At(o2 = t2.charAt(p2)); )
          i2 += o2, p2++;
        h2 += i2;
      }
      if (!i2)
        return;
      s2 = i2, i2 = "";
      for (; p2 < d2 && ((o2 = t2.charAt(p2)) === Ct || o2 === bt || o2 === Et); )
        i2 += o2, p2++;
      o2 = t2.charAt(p2), a2 = null, o2 === '"' ? a2 = '"' : o2 === "'" ? a2 = "'" : o2 === "(" && (a2 = ")");
      if (a2) {
        if (!i2)
          return;
        for (p2 = (h2 += i2 + o2).length, i2 = ""; p2 < d2 && (o2 = t2.charAt(p2)) !== a2; ) {
          if (o2 === Et) {
            if (p2++, (o2 = t2.charAt(p2)) === Et || o2 === a2)
              return;
            i2 += Et;
          }
          i2 += o2, p2++;
        }
        if ((o2 = t2.charAt(p2)) !== a2)
          return;
        u2 = h2, h2 += i2 + o2, p2++, l2 = i2, i2 = "";
      } else
        i2 = "", p2 = h2.length;
      for (; p2 < d2 && ((o2 = t2.charAt(p2)) === Ct || o2 === bt); )
        h2 += o2, p2++;
      if (!(o2 = t2.charAt(p2)) || o2 === Et)
        return !!r2 || (n2 = e2(n2).test().end, s2 = f2.decode.raw(f2.unescape(s2), n2, {nonTerminated: false}), l2 && (u2 = e2(u2).test().end, l2 = f2.decode.raw(f2.unescape(l2), u2)), e2(h2)({type: "definition", identifier: gt(c2), label: c2, title: l2 || null, url: s2}));
    }, Et = "\n", Ct = "	", bt = " ", vt = "]";
    function Ft(e2) {
      return e2 !== ">" && e2 !== "[" && e2 !== vt;
    }
    function At(e2) {
      return e2 !== "[" && e2 !== vt && !Dt(e2);
    }
    Ft.delimiter = ">";
    var yt = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2, p2, d2, h2, g2, m2, E2, C2, b2, v2, F2, A2, y2;
      if (!this.options.gfm)
        return;
      n2 = 0, E2 = 0, c2 = t2.length + 1, s2 = [];
      for (; n2 < c2; ) {
        if (F2 = t2.indexOf(wt, n2), A2 = t2.indexOf("|", n2 + 1), F2 === -1 && (F2 = t2.length), A2 === -1 || A2 > F2) {
          if (E2 < 2)
            return;
          break;
        }
        s2.push(t2.slice(n2, F2)), E2++, n2 = F2 + 1;
      }
      o2 = s2.join(wt), u2 = s2.splice(1, 1)[0] || [], n2 = 0, c2 = u2.length, E2--, i2 = false, p2 = [];
      for (; n2 < c2; ) {
        if ((f2 = u2.charAt(n2)) === "|") {
          if (D2 = null, i2 === false) {
            if (y2 === false)
              return;
          } else
            p2.push(i2), i2 = false;
          y2 = false;
        } else if (f2 === "-")
          D2 = true, i2 = i2 || null;
        else if (f2 === ":")
          i2 = i2 === kt ? "center" : D2 && i2 === null ? "right" : kt;
        else if (!Dt(f2))
          return;
        n2++;
      }
      i2 !== false && p2.push(i2);
      if (p2.length < 1)
        return;
      if (r2)
        return true;
      m2 = -1, b2 = [], v2 = e2(o2).reset({type: "table", align: p2, children: b2});
      for (; ++m2 < E2; ) {
        for (C2 = s2[m2], a2 = {type: "tableRow", children: []}, m2 && e2(wt), e2(C2).reset(a2, v2), c2 = C2.length + 1, n2 = 0, l2 = "", d2 = "", h2 = true; n2 < c2; )
          (f2 = C2.charAt(n2)) !== "	" && f2 !== " " ? (f2 === "" || f2 === "|" ? h2 ? e2(f2) : (!d2 && !f2 || h2 || (o2 = d2, l2.length > 1 && (f2 ? (o2 += l2.slice(0, -1), l2 = l2.charAt(l2.length - 1)) : (o2 += l2, l2 = "")), g2 = e2.now(), e2(o2)({type: "tableCell", children: this.tokenizeInline(d2, g2)}, a2)), e2(l2 + f2), l2 = "", d2 = "") : (l2 && (d2 += l2, l2 = ""), d2 += f2, f2 === "\\" && n2 !== c2 - 2 && (d2 += C2.charAt(n2 + 1), n2++)), h2 = false, n2++) : (d2 ? l2 += f2 : e2(f2), n2++);
        m2 || e2(wt + u2);
      }
      return v2;
    }, wt = "\n", kt = "left";
    var xt = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2 = this, s2 = c2.options.commonmark, l2 = c2.blockTokenizers, f2 = c2.interruptParagraph, D2 = t2.indexOf(Ot), p2 = t2.length;
      for (; D2 < p2; ) {
        if (D2 === -1) {
          D2 = p2;
          break;
        }
        if (t2.charAt(D2 + 1) === Ot)
          break;
        if (s2) {
          for (o2 = 0, n2 = D2 + 1; n2 < p2; ) {
            if ((i2 = t2.charAt(n2)) === "	") {
              o2 = 4;
              break;
            }
            if (i2 !== " ")
              break;
            o2++, n2++;
          }
          if (o2 >= 4 && i2 !== Ot) {
            D2 = t2.indexOf(Ot, D2 + 1);
            continue;
          }
        }
        if (u2 = t2.slice(D2 + 1), Oe(f2, l2, c2, [e2, u2, true]))
          break;
        if (n2 = D2, (D2 = t2.indexOf(Ot, D2 + 1)) !== -1 && xe(t2.slice(n2, D2)) === "") {
          D2 = n2;
          break;
        }
      }
      if (u2 = t2.slice(0, D2), r2)
        return true;
      return a2 = e2.now(), u2 = be(u2), e2(u2)({type: "paragraph", children: c2.tokenizeInline(u2, a2)});
    }, Ot = "\n";
    var Lt = function(e2, t2) {
      return e2.indexOf("\\", t2);
    };
    var Bt = Tt;
    Tt.locator = Lt;
    function Tt(e2, t2, r2) {
      var n2, u2;
      if (t2.charAt(0) === "\\" && (n2 = t2.charAt(1), this.escape.indexOf(n2) !== -1))
        return !!r2 || (u2 = n2 === "\n" ? {type: "break"} : {type: "text", value: n2}, e2("\\" + n2)(u2));
    }
    var Nt = function(e2, t2) {
      return e2.indexOf("<", t2);
    };
    var St = qt;
    qt.locator = Nt, qt.notInLink = true;
    var It = "mailto:", Rt = It.length;
    function qt(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2 = this, s2 = "", l2 = t2.length, f2 = 0, D2 = "", p2 = false, d2 = "";
      if (t2.charAt(0) === "<") {
        for (f2++, s2 = "<"; f2 < l2 && (n2 = t2.charAt(f2), !(Dt(n2) || n2 === ">" || n2 === "@" || n2 === ":" && t2.charAt(f2 + 1) === "/")); )
          D2 += n2, f2++;
        if (D2) {
          if (d2 += D2, D2 = "", d2 += n2 = t2.charAt(f2), f2++, n2 === "@")
            p2 = true;
          else {
            if (n2 !== ":" || t2.charAt(f2 + 1) !== "/")
              return;
            d2 += "/", f2++;
          }
          for (; f2 < l2 && (n2 = t2.charAt(f2), !Dt(n2) && n2 !== ">"); )
            D2 += n2, f2++;
          if (n2 = t2.charAt(f2), D2 && n2 === ">")
            return !!r2 || (i2 = d2 += D2, s2 += d2 + n2, (u2 = e2.now()).column++, u2.offset++, p2 && (d2.slice(0, Rt).toLowerCase() === It ? (i2 = i2.slice(Rt), u2.column += Rt, u2.offset += Rt) : d2 = It + d2), o2 = c2.inlineTokenizers, c2.inlineTokenizers = {text: o2.text}, a2 = c2.enterLink(), i2 = c2.tokenizeInline(i2, u2), c2.inlineTokenizers = o2, a2(), e2(s2)({type: "link", title: null, url: y(d2, {nonTerminated: false}), children: i2}));
        }
      }
    }
    var Pt = function(e2, t2) {
      var r2, n2 = String(e2), u2 = 0;
      if (typeof t2 != "string" || t2.length !== 1)
        throw new Error("Expected character");
      r2 = n2.indexOf(t2);
      for (; r2 !== -1; )
        u2++, r2 = n2.indexOf(t2, r2 + 1);
      return u2;
    };
    var jt = function(e2, t2) {
      var r2, n2, u2, i2 = -1;
      if (!this.options.gfm)
        return i2;
      n2 = zt.length, r2 = -1;
      for (; ++r2 < n2; )
        (u2 = e2.indexOf(zt[r2], t2)) !== -1 && (i2 === -1 || u2 < i2) && (i2 = u2);
      return i2;
    }, zt = ["www.", "http://", "https://"];
    var Ut = Mt;
    Mt.locator = jt, Mt.notInLink = true;
    function Mt(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2, p2, d2, h2, g2, E2 = this, b2 = E2.options.gfm, v2 = E2.inlineTokenizers, F2 = t2.length, A2 = -1, w2 = false;
      if (b2) {
        if (t2.slice(0, 4) === "www.")
          w2 = true, o2 = 4;
        else if (t2.slice(0, 7).toLowerCase() === "http://")
          o2 = 7;
        else {
          if (t2.slice(0, 8).toLowerCase() !== "https://")
            return;
          o2 = 8;
        }
        for (A2 = o2 - 1, i2 = o2, n2 = []; o2 < F2; )
          if ((s2 = t2.charCodeAt(o2)) !== 46) {
            if (!m(s2) && !C(s2) && s2 !== 45 && s2 !== 95)
              break;
            o2++;
          } else {
            if (A2 === o2 - 1)
              break;
            n2.push(o2), A2 = o2, o2++;
          }
        if (s2 === 46 && (n2.pop(), o2--), n2[0] !== void 0 && (u2 = n2.length < 2 ? i2 : n2[n2.length - 2] + 1, t2.slice(u2, o2).indexOf("_") === -1)) {
          if (r2)
            return true;
          for (l2 = o2, a2 = o2; o2 < F2 && (s2 = t2.charCodeAt(o2), !Dt(s2) && s2 !== 60); )
            o2++, s2 === 33 || s2 === 42 || s2 === 44 || s2 === 46 || s2 === 58 || s2 === 63 || s2 === 95 || s2 === 126 || (l2 = o2);
          if (o2 = l2, t2.charCodeAt(o2 - 1) === 41)
            for (c2 = t2.slice(a2, o2), f2 = Pt(c2, "("), D2 = Pt(c2, ")"); D2 > f2; )
              o2 = a2 + c2.lastIndexOf(")"), c2 = t2.slice(a2, o2), D2--;
          if (t2.charCodeAt(o2 - 1) === 59 && (o2--, C(t2.charCodeAt(o2 - 1)))) {
            for (l2 = o2 - 2; C(t2.charCodeAt(l2)); )
              l2--;
            t2.charCodeAt(l2) === 38 && (o2 = l2);
          }
          return p2 = t2.slice(0, o2), h2 = y(p2, {nonTerminated: false}), w2 && (h2 = "http://" + h2), g2 = E2.enterLink(), E2.inlineTokenizers = {text: v2.text}, d2 = E2.tokenizeInline(p2, e2.now()), E2.inlineTokenizers = v2, g2(), e2(p2)({type: "link", title: null, url: h2, children: d2});
        }
      }
    }
    var Gt = function e2(t2, r2) {
      var n2, u2;
      if (!this.options.gfm)
        return -1;
      if ((n2 = t2.indexOf("@", r2)) === -1)
        return -1;
      if ((u2 = n2) === r2 || !Vt(t2.charCodeAt(u2 - 1)))
        return e2.call(this, t2, n2 + 1);
      for (; u2 > r2 && Vt(t2.charCodeAt(u2 - 1)); )
        u2--;
      return u2;
    };
    function Vt(e2) {
      return m(e2) || C(e2) || e2 === 43 || e2 === 45 || e2 === 46 || e2 === 95;
    }
    var _t = $t;
    $t.locator = Gt, $t.notInLink = true;
    function $t(e2, t2, r2) {
      var n2, u2, i2, o2, a2 = this, c2 = a2.options.gfm, s2 = a2.inlineTokenizers, l2 = 0, f2 = t2.length, D2 = -1;
      if (c2) {
        for (n2 = t2.charCodeAt(l2); m(n2) || C(n2) || n2 === 43 || n2 === 45 || n2 === 46 || n2 === 95; )
          n2 = t2.charCodeAt(++l2);
        if (l2 !== 0 && n2 === 64) {
          for (l2++; l2 < f2 && (n2 = t2.charCodeAt(l2), m(n2) || C(n2) || n2 === 45 || n2 === 46 || n2 === 95); )
            l2++, D2 === -1 && n2 === 46 && (D2 = l2);
          if (D2 !== -1 && D2 !== l2 && n2 !== 45 && n2 !== 95)
            return n2 === 46 && l2--, u2 = t2.slice(0, l2), !!r2 || (o2 = a2.enterLink(), a2.inlineTokenizers = {text: s2.text}, i2 = a2.tokenizeInline(u2, e2.now()), a2.inlineTokenizers = s2, o2(), e2(u2)({type: "link", title: null, url: "mailto:" + y(u2, {nonTerminated: false}), children: i2}));
        }
      }
    }
    var Ht = Ke.tag, Xt = Zt;
    Zt.locator = Nt;
    var Wt = /^<a /i, Yt = /^<\/a>/i;
    function Zt(e2, t2, r2) {
      var n2, u2, i2 = this, o2 = t2.length;
      if (!(t2.charAt(0) !== "<" || o2 < 3) && (n2 = t2.charAt(1), (C(n2) || n2 === "?" || n2 === "!" || n2 === "/") && (u2 = t2.match(Ht))))
        return !!r2 || (u2 = u2[0], !i2.inLink && Wt.test(u2) ? i2.inLink = true : i2.inLink && Yt.test(u2) && (i2.inLink = false), e2(u2)({type: "html", value: u2}));
    }
    var Jt = function(e2, t2) {
      var r2 = e2.indexOf("[", t2), n2 = e2.indexOf("![", t2);
      if (n2 === -1)
        return r2;
      return r2 < n2 ? r2 : n2;
    };
    var Kt = rr;
    rr.locator = Jt;
    var Qt = "(", er = ")", tr = "\\";
    function rr(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2, p2, d2, h2, g2, m2, E2, C2, b2, v2 = this, F2 = "", A2 = 0, y2 = t2.charAt(0), w2 = v2.options.pedantic, k2 = v2.options.commonmark, x2 = v2.options.gfm;
      if (y2 === "!" && (l2 = true, F2 = y2, y2 = t2.charAt(++A2)), y2 === "[" && (l2 || !v2.inLink)) {
        for (F2 += y2, g2 = "", A2++, p2 = t2.length, h2 = 0, (E2 = e2.now()).column += A2, E2.offset += A2; A2 < p2; ) {
          if (c2 = y2 = t2.charAt(A2), y2 === "`") {
            for (u2 = 1; t2.charAt(A2 + 1) === "`"; )
              c2 += y2, A2++, u2++;
            i2 ? u2 >= i2 && (i2 = 0) : i2 = u2;
          } else if (y2 === tr)
            A2++, c2 += t2.charAt(A2);
          else if (i2 && !x2 || y2 !== "[") {
            if ((!i2 || x2) && y2 === "]") {
              if (!h2) {
                if (t2.charAt(A2 + 1) !== Qt)
                  return;
                c2 += Qt, n2 = true, A2++;
                break;
              }
              h2--;
            }
          } else
            h2++;
          g2 += c2, c2 = "", A2++;
        }
        if (n2) {
          for (f2 = g2, F2 += g2 + c2, A2++; A2 < p2 && (y2 = t2.charAt(A2), Dt(y2)); )
            F2 += y2, A2++;
          if (g2 = "", o2 = F2, (y2 = t2.charAt(A2)) === "<") {
            for (A2++, o2 += "<"; A2 < p2 && (y2 = t2.charAt(A2)) !== ">"; ) {
              if (k2 && y2 === "\n")
                return;
              g2 += y2, A2++;
            }
            if (t2.charAt(A2) !== ">")
              return;
            F2 += "<" + g2 + ">", m2 = g2, A2++;
          } else {
            for (y2 = null, c2 = ""; A2 < p2 && (y2 = t2.charAt(A2), !c2 || !(y2 === '"' || y2 === "'" || k2 && y2 === Qt)); ) {
              if (Dt(y2)) {
                if (!w2)
                  break;
                c2 += y2;
              } else {
                if (y2 === Qt)
                  h2++;
                else if (y2 === er) {
                  if (h2 === 0)
                    break;
                  h2--;
                }
                g2 += c2, c2 = "", y2 === tr && (g2 += tr, y2 = t2.charAt(++A2)), g2 += y2;
              }
              A2++;
            }
            m2 = g2, A2 = (F2 += g2).length;
          }
          for (g2 = ""; A2 < p2 && (y2 = t2.charAt(A2), Dt(y2)); )
            g2 += y2, A2++;
          if (y2 = t2.charAt(A2), F2 += g2, g2 && (y2 === '"' || y2 === "'" || k2 && y2 === Qt))
            if (A2++, g2 = "", D2 = y2 === Qt ? er : y2, a2 = F2 += y2, k2) {
              for (; A2 < p2 && (y2 = t2.charAt(A2)) !== D2; )
                y2 === tr && (g2 += tr, y2 = t2.charAt(++A2)), A2++, g2 += y2;
              if ((y2 = t2.charAt(A2)) !== D2)
                return;
              for (d2 = g2, F2 += g2 + y2, A2++; A2 < p2 && (y2 = t2.charAt(A2), Dt(y2)); )
                F2 += y2, A2++;
            } else
              for (c2 = ""; A2 < p2; ) {
                if ((y2 = t2.charAt(A2)) === D2)
                  s2 && (g2 += D2 + c2, c2 = ""), s2 = true;
                else if (s2) {
                  if (y2 === er) {
                    F2 += g2 + D2 + c2, d2 = g2;
                    break;
                  }
                  Dt(y2) ? c2 += y2 : (g2 += D2 + c2 + y2, c2 = "", s2 = false);
                } else
                  g2 += y2;
                A2++;
              }
          if (t2.charAt(A2) === er)
            return !!r2 || (F2 += er, m2 = v2.decode.raw(v2.unescape(m2), e2(o2).test().end, {nonTerminated: false}), d2 && (a2 = e2(a2).test().end, d2 = v2.decode.raw(v2.unescape(d2), a2)), b2 = {type: l2 ? "image" : "link", title: d2 || null, url: m2}, l2 ? b2.alt = v2.decode.raw(v2.unescape(f2), E2) || null : (C2 = v2.enterLink(), b2.children = v2.tokenizeInline(f2, E2), C2()), e2(F2)(b2));
        }
      }
    }
    var nr = sr;
    sr.locator = Jt;
    var ur = "link", ir = "full", or = "[", ar = "\\", cr = "]";
    function sr(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2 = this, D2 = f2.options.commonmark, p2 = t2.charAt(0), d2 = 0, h2 = t2.length, g2 = "", m2 = "", E2 = ur, C2 = "shortcut";
      if (p2 === "!" && (E2 = "image", m2 = p2, p2 = t2.charAt(++d2)), p2 === or) {
        for (d2++, m2 += p2, c2 = "", l2 = 0; d2 < h2; ) {
          if ((p2 = t2.charAt(d2)) === or)
            s2 = true, l2++;
          else if (p2 === cr) {
            if (!l2)
              break;
            l2--;
          }
          p2 === ar && (c2 += ar, p2 = t2.charAt(++d2)), c2 += p2, d2++;
        }
        if (g2 = c2, n2 = c2, (p2 = t2.charAt(d2)) === cr) {
          if (d2++, g2 += p2, c2 = "", !D2)
            for (; d2 < h2 && (p2 = t2.charAt(d2), Dt(p2)); )
              c2 += p2, d2++;
          if ((p2 = t2.charAt(d2)) === or) {
            for (u2 = "", c2 += p2, d2++; d2 < h2 && (p2 = t2.charAt(d2)) !== or && p2 !== cr; )
              p2 === ar && (u2 += ar, p2 = t2.charAt(++d2)), u2 += p2, d2++;
            (p2 = t2.charAt(d2)) === cr ? (C2 = u2 ? ir : "collapsed", c2 += u2 + p2, d2++) : u2 = "", g2 += c2, c2 = "";
          } else {
            if (!n2)
              return;
            u2 = n2;
          }
          if (C2 === ir || !s2)
            return g2 = m2 + g2, E2 === ur && f2.inLink ? null : !!r2 || ((i2 = e2.now()).column += m2.length, i2.offset += m2.length, o2 = {type: E2 + "Reference", identifier: gt(u2 = C2 === ir ? u2 : n2), label: u2, referenceType: C2}, E2 === ur ? (a2 = f2.enterLink(), o2.children = f2.tokenizeInline(n2, i2), a2()) : o2.alt = f2.decode.raw(f2.unescape(n2), i2) || null, e2(g2)(o2));
        }
      }
    }
    var lr = function(e2, t2) {
      var r2 = e2.indexOf("**", t2), n2 = e2.indexOf("__", t2);
      if (n2 === -1)
        return r2;
      if (r2 === -1)
        return n2;
      return n2 < r2 ? n2 : r2;
    };
    var fr = Dr;
    Dr.locator = lr;
    function Dr(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2 = 0, f2 = t2.charAt(l2);
      if (!(f2 !== "*" && f2 !== "_" || t2.charAt(++l2) !== f2 || (u2 = this.options.pedantic, a2 = (i2 = f2) + i2, c2 = t2.length, l2++, o2 = "", f2 = "", u2 && Dt(t2.charAt(l2)))))
        for (; l2 < c2; ) {
          if (s2 = f2, !((f2 = t2.charAt(l2)) !== i2 || t2.charAt(l2 + 1) !== i2 || u2 && Dt(s2)) && (f2 = t2.charAt(l2 + 2)) !== i2) {
            if (!xe(o2))
              return;
            return !!r2 || ((n2 = e2.now()).column += 2, n2.offset += 2, e2(a2 + o2 + a2)({type: "strong", children: this.tokenizeInline(o2, n2)}));
          }
          u2 || f2 !== "\\" || (o2 += f2, f2 = t2.charAt(++l2)), o2 += f2, l2++;
        }
    }
    var pr = function(e2) {
      return hr.test(typeof e2 == "number" ? dr(e2) : e2.charAt(0));
    }, dr = String.fromCharCode, hr = /\w/;
    var gr = function(e2, t2) {
      var r2 = e2.indexOf("*", t2), n2 = e2.indexOf("_", t2);
      if (n2 === -1)
        return r2;
      if (r2 === -1)
        return n2;
      return n2 < r2 ? n2 : r2;
    };
    var mr = Er;
    Er.locator = gr;
    function Er(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2 = 0, f2 = t2.charAt(l2);
      if (!(f2 !== "*" && f2 !== "_" || (u2 = this.options.pedantic, a2 = f2, i2 = f2, c2 = t2.length, l2++, o2 = "", f2 = "", u2 && Dt(t2.charAt(l2)))))
        for (; l2 < c2; ) {
          if (s2 = f2, !((f2 = t2.charAt(l2)) !== i2 || u2 && Dt(s2))) {
            if ((f2 = t2.charAt(++l2)) !== i2) {
              if (!xe(o2) || s2 === i2)
                return;
              if (!u2 && i2 === "_" && pr(f2)) {
                o2 += i2;
                continue;
              }
              return !!r2 || ((n2 = e2.now()).column++, n2.offset++, e2(a2 + o2 + i2)({type: "emphasis", children: this.tokenizeInline(o2, n2)}));
            }
            o2 += i2;
          }
          u2 || f2 !== "\\" || (o2 += f2, f2 = t2.charAt(++l2)), o2 += f2, l2++;
        }
    }
    var Cr = function(e2, t2) {
      return e2.indexOf("~~", t2);
    };
    var br = Fr;
    Fr.locator = Cr;
    var vr = "~";
    function Fr(e2, t2, r2) {
      var n2, u2, i2, o2 = "", a2 = "", c2 = "", s2 = "";
      if (this.options.gfm && t2.charAt(0) === vr && t2.charAt(1) === vr && !Dt(t2.charAt(2)))
        for (n2 = 1, u2 = t2.length, (i2 = e2.now()).column += 2, i2.offset += 2; ++n2 < u2; ) {
          if (!((o2 = t2.charAt(n2)) !== vr || a2 !== vr || c2 && Dt(c2)))
            return !!r2 || e2("~~" + s2 + "~~")({type: "delete", children: this.tokenizeInline(s2, i2)});
          s2 += a2, c2 = a2, a2 = o2;
        }
    }
    var Ar = function(e2, t2) {
      return e2.indexOf("`", t2);
    };
    var yr = wr;
    wr.locator = Ar;
    function wr(e2, t2, r2) {
      for (var n2, u2, i2, o2, a2, c2, s2 = t2.length, l2 = 0; l2 < s2 && t2.charCodeAt(l2) === 96; )
        l2++;
      if (l2 !== 0 && l2 !== s2) {
        for (n2 = l2, a2 = t2.charCodeAt(l2); l2 < s2; ) {
          if (o2 = a2, a2 = t2.charCodeAt(l2 + 1), o2 === 96) {
            if (u2 === void 0 && (u2 = l2), i2 = l2 + 1, a2 !== 96 && i2 - u2 === n2) {
              c2 = true;
              break;
            }
          } else
            u2 !== void 0 && (u2 = void 0, i2 = void 0);
          l2++;
        }
        if (c2) {
          if (r2)
            return true;
          if (l2 = n2, s2 = u2, o2 = t2.charCodeAt(l2), a2 = t2.charCodeAt(s2 - 1), c2 = false, s2 - l2 > 2 && (o2 === 32 || o2 === 10) && (a2 === 32 || a2 === 10)) {
            for (l2++, s2--; l2 < s2; ) {
              if ((o2 = t2.charCodeAt(l2)) !== 32 && o2 !== 10) {
                c2 = true;
                break;
              }
              l2++;
            }
            c2 === true && (n2++, u2--);
          }
          return e2(t2.slice(0, i2))({type: "inlineCode", value: t2.slice(n2, u2)});
        }
      }
    }
    var kr = function(e2, t2) {
      var r2 = e2.indexOf("\n", t2);
      for (; r2 > t2 && e2.charAt(r2 - 1) === " "; )
        r2--;
      return r2;
    };
    var xr = Or;
    Or.locator = kr;
    function Or(e2, t2, r2) {
      for (var n2, u2 = t2.length, i2 = -1, o2 = ""; ++i2 < u2; ) {
        if ((n2 = t2.charAt(i2)) === "\n") {
          if (i2 < 2)
            return;
          return !!r2 || e2(o2 += n2)({type: "break"});
        }
        if (n2 !== " ")
          return;
        o2 += n2;
      }
    }
    var Lr = function(e2, t2, r2) {
      var n2, u2, i2, o2, a2, c2, s2, l2, f2, D2, p2 = this;
      if (r2)
        return true;
      n2 = p2.inlineMethods, o2 = n2.length, u2 = p2.inlineTokenizers, i2 = -1, f2 = t2.length;
      for (; ++i2 < o2; )
        (l2 = n2[i2]) !== "text" && u2[l2] && ((s2 = u2[l2].locator) || e2.file.fail("Missing locator: `" + l2 + "`"), (c2 = s2.call(p2, t2, 1)) !== -1 && c2 < f2 && (f2 = c2));
      a2 = t2.slice(0, f2), D2 = e2.now(), p2.decode(a2, D2, function(t3, r3, n3) {
        e2(n3 || t3)({type: "text", value: t3});
      });
    };
    var Br = Tr;
    function Tr(t2, r2) {
      this.file = r2, this.offset = {}, this.options = e(this.options), this.setOptions({}), this.inList = false, this.inBlock = false, this.inLink = false, this.atStart = true, this.toOffset = l(r2).toOffset, this.unescape = p(this, "escape"), this.decode = P(this);
    }
    var Nr = Tr.prototype;
    function Sr(e2) {
      var t2, r2 = [];
      for (t2 in e2)
        r2.push(t2);
      return r2;
    }
    Nr.setOptions = W, Nr.parse = pe, Nr.options = X, Nr.exitStart = s("atStart", true), Nr.enterList = s("inList", false), Nr.enterLink = s("inLink", false), Nr.enterBlock = s("inBlock", false), Nr.interruptParagraph = [["thematicBreak"], ["list"], ["atxHeading"], ["fencedCode"], ["blockquote"], ["html"], ["setextHeading", {commonmark: false}], ["definition", {commonmark: false}]], Nr.interruptList = [["atxHeading", {pedantic: false}], ["fencedCode", {pedantic: false}], ["thematicBreak", {pedantic: false}], ["definition", {commonmark: false}]], Nr.interruptBlockquote = [["indentedCode", {commonmark: true}], ["fencedCode", {commonmark: true}], ["atxHeading", {commonmark: true}], ["setextHeading", {commonmark: true}], ["thematicBreak", {commonmark: true}], ["html", {commonmark: true}], ["list", {commonmark: true}], ["definition", {commonmark: false}]], Nr.blockTokenizers = {blankLine: ge, indentedCode: ve, fencedCode: Ae, blockquote: Le, atxHeading: Be, thematicBreak: Ie, list: Pe, setextHeading: Ye, html: Qe, definition: mt, table: yt, paragraph: xt}, Nr.inlineTokenizers = {escape: Bt, autoLink: St, url: Ut, email: _t, html: Xt, link: Kt, reference: nr, strong: fr, emphasis: mr, deletion: br, code: yr, break: xr, text: Lr}, Nr.blockMethods = Sr(Nr.blockTokenizers), Nr.inlineMethods = Sr(Nr.inlineTokenizers), Nr.tokenizeBlock = j("block"), Nr.tokenizeInline = j("inline"), Nr.tokenizeFactory = j;
    var Ir = Rr;
    function Rr(t2) {
      var r2 = this.data("settings"), n2 = c(Br);
      n2.prototype.options = e(n2.prototype.options, r2, t2), this.Parser = n2;
    }
    Rr.Parser = Br;
    var qr = function(e2) {
      if (e2)
        throw e2;
    };
    var Pr = Object.prototype.hasOwnProperty, jr = Object.prototype.toString, zr = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, Mr = function(e2) {
      return typeof Array.isArray == "function" ? Array.isArray(e2) : jr.call(e2) === "[object Array]";
    }, Gr = function(e2) {
      if (!e2 || jr.call(e2) !== "[object Object]")
        return false;
      var t2, r2 = Pr.call(e2, "constructor"), n2 = e2.constructor && e2.constructor.prototype && Pr.call(e2.constructor.prototype, "isPrototypeOf");
      if (e2.constructor && !r2 && !n2)
        return false;
      for (t2 in e2)
        ;
      return t2 === void 0 || Pr.call(e2, t2);
    }, Vr = function(e2, t2) {
      zr && t2.name === "__proto__" ? zr(e2, t2.name, {enumerable: true, configurable: true, value: t2.newValue, writable: true}) : e2[t2.name] = t2.newValue;
    }, _r = function(e2, t2) {
      if (t2 === "__proto__") {
        if (!Pr.call(e2, t2))
          return;
        if (Ur)
          return Ur(e2, t2).value;
      }
      return e2[t2];
    }, $r = function e2() {
      var t2, r2, n2, u2, i2, o2, a2 = arguments[0], c2 = 1, s2 = arguments.length, l2 = false;
      for (typeof a2 == "boolean" && (l2 = a2, a2 = arguments[1] || {}, c2 = 2), (a2 == null || typeof a2 != "object" && typeof a2 != "function") && (a2 = {}); c2 < s2; ++c2)
        if ((t2 = arguments[c2]) != null)
          for (r2 in t2)
            n2 = _r(a2, r2), a2 !== (u2 = _r(t2, r2)) && (l2 && u2 && (Gr(u2) || (i2 = Mr(u2))) ? (i2 ? (i2 = false, o2 = n2 && Mr(n2) ? n2 : []) : o2 = n2 && Gr(n2) ? n2 : {}, Vr(a2, {name: r2, newValue: e2(l2, o2, u2)})) : u2 !== void 0 && Vr(a2, {name: r2, newValue: u2}));
      return a2;
    }, Hr = (e2) => {
      if (Object.prototype.toString.call(e2) !== "[object Object]")
        return false;
      const t2 = Object.getPrototypeOf(e2);
      return t2 === null || t2 === Object.prototype;
    }, Xr = [].slice, Wr = function(e2, t2) {
      var r2;
      return function() {
        var t3, i2 = Xr.call(arguments, 0), o2 = e2.length > i2.length;
        o2 && i2.push(n2);
        try {
          t3 = e2.apply(null, i2);
        } catch (e3) {
          if (o2 && r2)
            throw e3;
          return n2(e3);
        }
        o2 || (t3 && typeof t3.then == "function" ? t3.then(u2, n2) : t3 instanceof Error ? n2(t3) : u2(t3));
      };
      function n2() {
        r2 || (r2 = true, t2.apply(null, arguments));
      }
      function u2(e3) {
        n2(null, e3);
      }
    };
    var Yr = Jr;
    Jr.wrap = Wr;
    var Zr = [].slice;
    function Jr() {
      var e2 = [], t2 = {run: function() {
        var t3 = -1, r2 = Zr.call(arguments, 0, -1), n2 = arguments[arguments.length - 1];
        if (typeof n2 != "function")
          throw new Error("Expected function as last argument, not " + n2);
        function u2(i2) {
          var o2 = e2[++t3], a2 = Zr.call(arguments, 0), c2 = a2.slice(1), s2 = r2.length, l2 = -1;
          if (i2)
            n2(i2);
          else {
            for (; ++l2 < s2; )
              c2[l2] !== null && c2[l2] !== void 0 || (c2[l2] = r2[l2]);
            r2 = c2, o2 ? Wr(o2, u2).apply(null, r2) : n2.apply(null, [null].concat(r2));
          }
        }
        u2.apply(null, [null].concat(r2));
      }, use: function(r2) {
        if (typeof r2 != "function")
          throw new Error("Expected `fn` to be a function, not " + r2);
        return e2.push(r2), t2;
      }};
      return t2;
    }
    var Kr = {}.hasOwnProperty, Qr = function(e2) {
      if (!e2 || typeof e2 != "object")
        return "";
      if (Kr.call(e2, "position") || Kr.call(e2, "type"))
        return tn(e2.position);
      if (Kr.call(e2, "start") || Kr.call(e2, "end"))
        return tn(e2);
      if (Kr.call(e2, "line") || Kr.call(e2, "column"))
        return en(e2);
      return "";
    };
    function en(e2) {
      return e2 && typeof e2 == "object" || (e2 = {}), rn(e2.line) + ":" + rn(e2.column);
    }
    function tn(e2) {
      return e2 && typeof e2 == "object" || (e2 = {}), en(e2.start) + "-" + en(e2.end);
    }
    function rn(e2) {
      return e2 && typeof e2 == "number" ? e2 : 1;
    }
    var nn = an;
    function un() {
    }
    un.prototype = Error.prototype, an.prototype = new un();
    var on = an.prototype;
    function an(e2, t2, r2) {
      var n2, u2, i2;
      typeof t2 == "string" && (r2 = t2, t2 = null), n2 = function(e3) {
        var t3, r3 = [null, null];
        typeof e3 == "string" && ((t3 = e3.indexOf(":")) === -1 ? r3[1] = e3 : (r3[0] = e3.slice(0, t3), r3[1] = e3.slice(t3 + 1)));
        return r3;
      }(r2), u2 = Qr(t2) || "1:1", i2 = {start: {line: null, column: null}, end: {line: null, column: null}}, t2 && t2.position && (t2 = t2.position), t2 && (t2.start ? (i2 = t2, t2 = t2.start) : i2.start = t2), e2.stack && (this.stack = e2.stack, e2 = e2.message), this.message = e2, this.name = u2, this.reason = e2, this.line = t2 ? t2.line : null, this.column = t2 ? t2.column : null, this.location = i2, this.source = n2[0], this.ruleId = n2[1];
    }
    on.file = "", on.name = "", on.reason = "", on.message = "", on.stack = "", on.fatal = null, on.column = null, on.line = null;
    var cn = typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {};
    function sn() {
      throw new Error("setTimeout has not been defined");
    }
    function ln() {
      throw new Error("clearTimeout has not been defined");
    }
    var fn = sn, Dn = ln;
    function pn(e2) {
      if (fn === setTimeout)
        return setTimeout(e2, 0);
      if ((fn === sn || !fn) && setTimeout)
        return fn = setTimeout, setTimeout(e2, 0);
      try {
        return fn(e2, 0);
      } catch (t2) {
        try {
          return fn.call(null, e2, 0);
        } catch (t3) {
          return fn.call(this, e2, 0);
        }
      }
    }
    typeof cn.setTimeout == "function" && (fn = setTimeout), typeof cn.clearTimeout == "function" && (Dn = clearTimeout);
    var dn, hn = [], gn = false, mn = -1;
    function En() {
      gn && dn && (gn = false, dn.length ? hn = dn.concat(hn) : mn = -1, hn.length && Cn());
    }
    function Cn() {
      if (!gn) {
        var e2 = pn(En);
        gn = true;
        for (var t2 = hn.length; t2; ) {
          for (dn = hn, hn = []; ++mn < t2; )
            dn && dn[mn].run();
          mn = -1, t2 = hn.length;
        }
        dn = null, gn = false, function(e3) {
          if (Dn === clearTimeout)
            return clearTimeout(e3);
          if ((Dn === ln || !Dn) && clearTimeout)
            return Dn = clearTimeout, clearTimeout(e3);
          try {
            Dn(e3);
          } catch (t3) {
            try {
              return Dn.call(null, e3);
            } catch (t4) {
              return Dn.call(this, e3);
            }
          }
        }(e2);
      }
    }
    function bn(e2, t2) {
      this.fun = e2, this.array = t2;
    }
    bn.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    function vn() {
    }
    var Fn = vn, An = vn, yn = vn, wn = vn, kn = vn, xn = vn, On = vn;
    var Ln = cn.performance || {}, Bn = Ln.now || Ln.mozNow || Ln.msNow || Ln.oNow || Ln.webkitNow || function() {
      return new Date().getTime();
    };
    var Tn = new Date();
    var Nn = {nextTick: function(e2) {
      var t2 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r2 = 1; r2 < arguments.length; r2++)
          t2[r2 - 1] = arguments[r2];
      hn.push(new bn(e2, t2)), hn.length !== 1 || gn || pn(Cn);
    }, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: Fn, addListener: An, once: yn, off: wn, removeListener: kn, removeAllListeners: xn, emit: On, binding: function(e2) {
      throw new Error("process.binding is not supported");
    }, cwd: function() {
      return "/";
    }, chdir: function(e2) {
      throw new Error("process.chdir is not supported");
    }, umask: function() {
      return 0;
    }, hrtime: function(e2) {
      var t2 = 1e-3 * Bn.call(Ln), r2 = Math.floor(t2), n2 = Math.floor(t2 % 1 * 1e9);
      return e2 && (r2 -= e2[0], (n2 -= e2[1]) < 0 && (r2--, n2 += 1e9)), [r2, n2];
    }, platform: "browser", release: {}, config: {}, uptime: function() {
      return (new Date() - Tn) / 1e3;
    }};
    function Sn(e2) {
      if (typeof e2 != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(e2));
    }
    function In(e2, t2) {
      for (var r2, n2 = "", u2 = 0, i2 = -1, o2 = 0, a2 = 0; a2 <= e2.length; ++a2) {
        if (a2 < e2.length)
          r2 = e2.charCodeAt(a2);
        else {
          if (r2 === 47)
            break;
          r2 = 47;
        }
        if (r2 === 47) {
          if (i2 === a2 - 1 || o2 === 1)
            ;
          else if (i2 !== a2 - 1 && o2 === 2) {
            if (n2.length < 2 || u2 !== 2 || n2.charCodeAt(n2.length - 1) !== 46 || n2.charCodeAt(n2.length - 2) !== 46) {
              if (n2.length > 2) {
                var c2 = n2.lastIndexOf("/");
                if (c2 !== n2.length - 1) {
                  c2 === -1 ? (n2 = "", u2 = 0) : u2 = (n2 = n2.slice(0, c2)).length - 1 - n2.lastIndexOf("/"), i2 = a2, o2 = 0;
                  continue;
                }
              } else if (n2.length === 2 || n2.length === 1) {
                n2 = "", u2 = 0, i2 = a2, o2 = 0;
                continue;
              }
            }
            t2 && (n2.length > 0 ? n2 += "/.." : n2 = "..", u2 = 2);
          } else
            n2.length > 0 ? n2 += "/" + e2.slice(i2 + 1, a2) : n2 = e2.slice(i2 + 1, a2), u2 = a2 - i2 - 1;
          i2 = a2, o2 = 0;
        } else
          r2 === 46 && o2 !== -1 ? ++o2 : o2 = -1;
      }
      return n2;
    }
    var Rn = {resolve: function() {
      for (var e2, t2 = "", r2 = false, n2 = arguments.length - 1; n2 >= -1 && !r2; n2--) {
        var u2;
        n2 >= 0 ? u2 = arguments[n2] : (e2 === void 0 && (e2 = Nn.cwd()), u2 = e2), Sn(u2), u2.length !== 0 && (t2 = u2 + "/" + t2, r2 = u2.charCodeAt(0) === 47);
      }
      return t2 = In(t2, !r2), r2 ? t2.length > 0 ? "/" + t2 : "/" : t2.length > 0 ? t2 : ".";
    }, normalize: function(e2) {
      if (Sn(e2), e2.length === 0)
        return ".";
      var t2 = e2.charCodeAt(0) === 47, r2 = e2.charCodeAt(e2.length - 1) === 47;
      return (e2 = In(e2, !t2)).length !== 0 || t2 || (e2 = "."), e2.length > 0 && r2 && (e2 += "/"), t2 ? "/" + e2 : e2;
    }, isAbsolute: function(e2) {
      return Sn(e2), e2.length > 0 && e2.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var e2, t2 = 0; t2 < arguments.length; ++t2) {
        var r2 = arguments[t2];
        Sn(r2), r2.length > 0 && (e2 === void 0 ? e2 = r2 : e2 += "/" + r2);
      }
      return e2 === void 0 ? "." : Rn.normalize(e2);
    }, relative: function(e2, t2) {
      if (Sn(e2), Sn(t2), e2 === t2)
        return "";
      if ((e2 = Rn.resolve(e2)) === (t2 = Rn.resolve(t2)))
        return "";
      for (var r2 = 1; r2 < e2.length && e2.charCodeAt(r2) === 47; ++r2)
        ;
      for (var n2 = e2.length, u2 = n2 - r2, i2 = 1; i2 < t2.length && t2.charCodeAt(i2) === 47; ++i2)
        ;
      for (var o2 = t2.length - i2, a2 = u2 < o2 ? u2 : o2, c2 = -1, s2 = 0; s2 <= a2; ++s2) {
        if (s2 === a2) {
          if (o2 > a2) {
            if (t2.charCodeAt(i2 + s2) === 47)
              return t2.slice(i2 + s2 + 1);
            if (s2 === 0)
              return t2.slice(i2 + s2);
          } else
            u2 > a2 && (e2.charCodeAt(r2 + s2) === 47 ? c2 = s2 : s2 === 0 && (c2 = 0));
          break;
        }
        var l2 = e2.charCodeAt(r2 + s2);
        if (l2 !== t2.charCodeAt(i2 + s2))
          break;
        l2 === 47 && (c2 = s2);
      }
      var f2 = "";
      for (s2 = r2 + c2 + 1; s2 <= n2; ++s2)
        s2 !== n2 && e2.charCodeAt(s2) !== 47 || (f2.length === 0 ? f2 += ".." : f2 += "/..");
      return f2.length > 0 ? f2 + t2.slice(i2 + c2) : (i2 += c2, t2.charCodeAt(i2) === 47 && ++i2, t2.slice(i2));
    }, _makeLong: function(e2) {
      return e2;
    }, dirname: function(e2) {
      if (Sn(e2), e2.length === 0)
        return ".";
      for (var t2 = e2.charCodeAt(0), r2 = t2 === 47, n2 = -1, u2 = true, i2 = e2.length - 1; i2 >= 1; --i2)
        if ((t2 = e2.charCodeAt(i2)) === 47) {
          if (!u2) {
            n2 = i2;
            break;
          }
        } else
          u2 = false;
      return n2 === -1 ? r2 ? "/" : "." : r2 && n2 === 1 ? "//" : e2.slice(0, n2);
    }, basename: function(e2, t2) {
      if (t2 !== void 0 && typeof t2 != "string")
        throw new TypeError('"ext" argument must be a string');
      Sn(e2);
      var r2, n2 = 0, u2 = -1, i2 = true;
      if (t2 !== void 0 && t2.length > 0 && t2.length <= e2.length) {
        if (t2.length === e2.length && t2 === e2)
          return "";
        var o2 = t2.length - 1, a2 = -1;
        for (r2 = e2.length - 1; r2 >= 0; --r2) {
          var c2 = e2.charCodeAt(r2);
          if (c2 === 47) {
            if (!i2) {
              n2 = r2 + 1;
              break;
            }
          } else
            a2 === -1 && (i2 = false, a2 = r2 + 1), o2 >= 0 && (c2 === t2.charCodeAt(o2) ? --o2 == -1 && (u2 = r2) : (o2 = -1, u2 = a2));
        }
        return n2 === u2 ? u2 = a2 : u2 === -1 && (u2 = e2.length), e2.slice(n2, u2);
      }
      for (r2 = e2.length - 1; r2 >= 0; --r2)
        if (e2.charCodeAt(r2) === 47) {
          if (!i2) {
            n2 = r2 + 1;
            break;
          }
        } else
          u2 === -1 && (i2 = false, u2 = r2 + 1);
      return u2 === -1 ? "" : e2.slice(n2, u2);
    }, extname: function(e2) {
      Sn(e2);
      for (var t2 = -1, r2 = 0, n2 = -1, u2 = true, i2 = 0, o2 = e2.length - 1; o2 >= 0; --o2) {
        var a2 = e2.charCodeAt(o2);
        if (a2 !== 47)
          n2 === -1 && (u2 = false, n2 = o2 + 1), a2 === 46 ? t2 === -1 ? t2 = o2 : i2 !== 1 && (i2 = 1) : t2 !== -1 && (i2 = -1);
        else if (!u2) {
          r2 = o2 + 1;
          break;
        }
      }
      return t2 === -1 || n2 === -1 || i2 === 0 || i2 === 1 && t2 === n2 - 1 && t2 === r2 + 1 ? "" : e2.slice(t2, n2);
    }, format: function(e2) {
      if (e2 === null || typeof e2 != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e2);
      return function(e3, t2) {
        var r2 = t2.dir || t2.root, n2 = t2.base || (t2.name || "") + (t2.ext || "");
        return r2 ? r2 === t2.root ? r2 + n2 : r2 + e3 + n2 : n2;
      }("/", e2);
    }, parse: function(e2) {
      Sn(e2);
      var t2 = {root: "", dir: "", base: "", ext: "", name: ""};
      if (e2.length === 0)
        return t2;
      var r2, n2 = e2.charCodeAt(0), u2 = n2 === 47;
      u2 ? (t2.root = "/", r2 = 1) : r2 = 0;
      for (var i2 = -1, o2 = 0, a2 = -1, c2 = true, s2 = e2.length - 1, l2 = 0; s2 >= r2; --s2)
        if ((n2 = e2.charCodeAt(s2)) !== 47)
          a2 === -1 && (c2 = false, a2 = s2 + 1), n2 === 46 ? i2 === -1 ? i2 = s2 : l2 !== 1 && (l2 = 1) : i2 !== -1 && (l2 = -1);
        else if (!c2) {
          o2 = s2 + 1;
          break;
        }
      return i2 === -1 || a2 === -1 || l2 === 0 || l2 === 1 && i2 === a2 - 1 && i2 === o2 + 1 ? a2 !== -1 && (t2.base = t2.name = o2 === 0 && u2 ? e2.slice(1, a2) : e2.slice(o2, a2)) : (o2 === 0 && u2 ? (t2.name = e2.slice(1, i2), t2.base = e2.slice(1, a2)) : (t2.name = e2.slice(o2, i2), t2.base = e2.slice(o2, a2)), t2.ext = e2.slice(i2, a2)), o2 > 0 ? t2.dir = e2.slice(0, o2 - 1) : u2 && (t2.dir = "/"), t2;
    }, sep: "/", delimiter: ":", win32: null, posix: null};
    Rn.posix = Rn;
    var qn = Rn, Pn = n(Object.freeze(Object.assign(Object.create(null), qn, {default: qn, __moduleExports: qn})));
    var jn = function(e2, t2) {
      if (typeof e2 != "string")
        return e2;
      if (e2.length === 0)
        return e2;
      var r2 = Pn.basename(e2, Pn.extname(e2)) + t2;
      return Pn.join(Pn.dirname(e2), r2);
    }, zn = function(e2) {
      return e2 != null && e2.constructor != null && typeof e2.constructor.isBuffer == "function" && e2.constructor.isBuffer(e2);
    }, Un = _n, Mn = {}.hasOwnProperty, Gn = _n.prototype, Vn = ["history", "path", "basename", "stem", "extname", "dirname"];
    /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
    function _n(e2) {
      var t2, r2, n2;
      if (e2) {
        if (typeof e2 == "string" || zn(e2))
          e2 = {contents: e2};
        else if ("message" in e2 && "messages" in e2)
          return e2;
      } else
        e2 = {};
      if (!(this instanceof _n))
        return new _n(e2);
      for (this.data = {}, this.messages = [], this.history = [], this.cwd = Nn.cwd(), r2 = -1, n2 = Vn.length; ++r2 < n2; )
        t2 = Vn[r2], Mn.call(e2, t2) && (this[t2] = e2[t2]);
      for (t2 in e2)
        Vn.indexOf(t2) === -1 && (this[t2] = e2[t2]);
    }
    function $n(e2, t2) {
      if (e2.indexOf(Pn.sep) !== -1)
        throw new Error("`" + t2 + "` cannot be a path: did not expect `" + Pn.sep + "`");
    }
    function Hn(e2, t2) {
      if (!e2)
        throw new Error("`" + t2 + "` cannot be empty");
    }
    function Xn(e2, t2) {
      if (!e2)
        throw new Error("Setting `" + t2 + "` requires `path` to be set too");
    }
    Gn.toString = function(e2) {
      var t2 = this.contents || "";
      return zn(t2) ? t2.toString(e2) : String(t2);
    }, Object.defineProperty(Gn, "path", {get: function() {
      return this.history[this.history.length - 1];
    }, set: function(e2) {
      Hn(e2, "path"), e2 !== this.path && this.history.push(e2);
    }}), Object.defineProperty(Gn, "dirname", {get: function() {
      return typeof this.path == "string" ? Pn.dirname(this.path) : void 0;
    }, set: function(e2) {
      Xn(this.path, "dirname"), this.path = Pn.join(e2 || "", this.basename);
    }}), Object.defineProperty(Gn, "basename", {get: function() {
      return typeof this.path == "string" ? Pn.basename(this.path) : void 0;
    }, set: function(e2) {
      Hn(e2, "basename"), $n(e2, "basename"), this.path = Pn.join(this.dirname || "", e2);
    }}), Object.defineProperty(Gn, "extname", {get: function() {
      return typeof this.path == "string" ? Pn.extname(this.path) : void 0;
    }, set: function(e2) {
      var t2 = e2 || "";
      if ($n(t2, "extname"), Xn(this.path, "extname"), t2) {
        if (t2.charAt(0) !== ".")
          throw new Error("`extname` must start with `.`");
        if (t2.indexOf(".", 1) !== -1)
          throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = jn(this.path, t2);
    }}), Object.defineProperty(Gn, "stem", {get: function() {
      return typeof this.path == "string" ? Pn.basename(this.path, this.extname) : void 0;
    }, set: function(e2) {
      Hn(e2, "stem"), $n(e2, "stem"), this.path = Pn.join(this.dirname || "", e2 + (this.extname || ""));
    }});
    var Wn = Un, Yn = Un.prototype;
    Yn.message = function(e2, t2, r2) {
      var n2 = this.path, u2 = new nn(e2, t2, r2);
      n2 && (u2.name = n2 + ":" + u2.name, u2.file = n2);
      return u2.fatal = false, this.messages.push(u2), u2;
    }, Yn.info = function() {
      var e2 = this.message.apply(this, arguments);
      return e2.fatal = null, e2;
    }, Yn.fail = function() {
      var e2 = this.message.apply(this, arguments);
      throw e2.fatal = true, e2;
    };
    var Zn = function e2() {
      var t2 = [], r2 = Yr(), n2 = {}, u2 = false, i2 = -1;
      return o2.data = function(e3, t3) {
        if (typeof e3 == "string")
          return arguments.length === 2 ? (nu("data", u2), n2[e3] = t3, o2) : Kn.call(n2, e3) && n2[e3] || null;
        if (e3)
          return nu("data", u2), n2 = e3, o2;
        return n2;
      }, o2.freeze = a2, o2.attachers = t2, o2.use = function(e3) {
        var r3;
        if (nu("use", u2), e3 == null)
          ;
        else if (typeof e3 == "function")
          l3.apply(null, arguments);
        else {
          if (typeof e3 != "object")
            throw new Error("Expected usable value, not `" + e3 + "`");
          "length" in e3 ? s3(e3) : i3(e3);
        }
        r3 && (n2.settings = $r(n2.settings || {}, r3));
        return o2;
        function i3(e4) {
          s3(e4.plugins), e4.settings && (r3 = $r(r3 || {}, e4.settings));
        }
        function a3(e4) {
          if (typeof e4 == "function")
            l3(e4);
          else {
            if (typeof e4 != "object")
              throw new Error("Expected usable value, not `" + e4 + "`");
            "length" in e4 ? l3.apply(null, e4) : i3(e4);
          }
        }
        function s3(e4) {
          var t3, r4;
          if (e4 == null)
            ;
          else {
            if (typeof e4 != "object" || !("length" in e4))
              throw new Error("Expected a list of plugins, not `" + e4 + "`");
            for (t3 = e4.length, r4 = -1; ++r4 < t3; )
              a3(e4[r4]);
          }
        }
        function l3(e4, r4) {
          var n3 = c2(e4);
          n3 ? (Hr(n3[1]) && Hr(r4) && (r4 = $r(n3[1], r4)), n3[1] = r4) : t2.push(Jn.call(arguments));
        }
      }, o2.parse = function(e3) {
        var t3, r3 = Wn(e3);
        if (a2(), tu("parse", t3 = o2.Parser), eu(t3, "parse"))
          return new t3(String(r3), r3).parse();
        return t3(String(r3), r3);
      }, o2.stringify = function(e3, t3) {
        var r3, n3 = Wn(t3);
        if (a2(), ru("stringify", r3 = o2.Compiler), uu(e3), eu(r3, "compile"))
          return new r3(e3, n3).compile();
        return r3(e3, n3);
      }, o2.run = s2, o2.runSync = function(e3, t3) {
        var r3, n3 = false;
        return s2(e3, t3, u3), iu("runSync", "run", n3), r3;
        function u3(e4, t4) {
          n3 = true, qr(e4), r3 = t4;
        }
      }, o2.process = l2, o2.processSync = f2, o2;
      function o2() {
        for (var r3 = e2(), u3 = t2.length, i3 = -1; ++i3 < u3; )
          r3.use.apply(null, t2[i3]);
        return r3.data($r(true, {}, n2)), r3;
      }
      function a2() {
        var e3, n3, a3, c3;
        if (u2)
          return o2;
        for (; ++i2 < t2.length; )
          n3 = (e3 = t2[i2])[0], null, (a3 = e3[1]) !== false && (a3 === true && (e3[1] = void 0), typeof (c3 = n3.apply(o2, e3.slice(1))) == "function" && r2.use(c3));
        return u2 = true, i2 = 1 / 0, o2;
      }
      function c2(e3) {
        for (var r3, n3 = t2.length, u3 = -1; ++u3 < n3; )
          if ((r3 = t2[u3])[0] === e3)
            return r3;
      }
      function s2(e3, t3, n3) {
        if (uu(e3), a2(), n3 || typeof t3 != "function" || (n3 = t3, t3 = null), !n3)
          return new Promise(u3);
        function u3(u4, i3) {
          r2.run(e3, Wn(t3), function(t4, r3, o3) {
            r3 = r3 || e3, t4 ? i3(t4) : u4 ? u4(r3) : n3(null, r3, o3);
          });
        }
        u3(null, n3);
      }
      function l2(e3, t3) {
        if (a2(), tu("process", o2.Parser), ru("process", o2.Compiler), !t3)
          return new Promise(r3);
        function r3(r4, n3) {
          var u3 = Wn(e3);
          Qn.run(o2, {file: u3}, function(e4) {
            e4 ? n3(e4) : r4 ? r4(u3) : t3(null, u3);
          });
        }
        r3(null, t3);
      }
      function f2(e3) {
        var t3, r3 = false;
        return a2(), tu("processSync", o2.Parser), ru("processSync", o2.Compiler), l2(t3 = Wn(e3), function(e4) {
          r3 = true, qr(e4);
        }), iu("processSync", "process", r3), t3;
      }
    }().freeze(), Jn = [].slice, Kn = {}.hasOwnProperty, Qn = Yr().use(function(e2, t2) {
      t2.tree = e2.parse(t2.file);
    }).use(function(e2, t2, r2) {
      e2.run(t2.tree, t2.file, function(e3, n2, u2) {
        e3 ? r2(e3) : (t2.tree = n2, t2.file = u2, r2());
      });
    }).use(function(e2, t2) {
      var r2 = e2.stringify(t2.tree, t2.file), n2 = t2.file;
      r2 == null || (typeof r2 == "string" || (u2 = r2, u2 != null && u2.constructor != null && typeof u2.constructor.isBuffer == "function" && u2.constructor.isBuffer(u2)) ? n2.contents = r2 : n2.result = r2);
      var u2;
    });
    function eu(e2, t2) {
      return typeof e2 == "function" && e2.prototype && (function(e3) {
        var t3;
        for (t3 in e3)
          return true;
        return false;
      }(e2.prototype) || t2 in e2.prototype);
    }
    function tu(e2, t2) {
      if (typeof t2 != "function")
        throw new Error("Cannot `" + e2 + "` without `Parser`");
    }
    function ru(e2, t2) {
      if (typeof t2 != "function")
        throw new Error("Cannot `" + e2 + "` without `Compiler`");
    }
    function nu(e2, t2) {
      if (t2)
        throw new Error("Cannot invoke `" + e2 + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
    }
    function uu(e2) {
      if (!e2 || typeof e2.type != "string")
        throw new Error("Expected node, got `" + e2 + "`");
    }
    function iu(e2, t2, r2) {
      if (!r2)
        throw new Error("`" + e2 + "` finished async. Use `" + t2 + "` instead");
    }
    var ou = {isRemarkParser: function(e2) {
      return Boolean(e2 && e2.prototype && e2.prototype.blockTokenizers);
    }, isRemarkCompiler: function(e2) {
      return Boolean(e2 && e2.prototype && e2.prototype.visitors);
    }}, au = function(e2) {
      const t2 = this.Parser, r2 = this.Compiler;
      ou.isRemarkParser(t2) && function(e3, t3) {
        const r3 = e3.prototype, n2 = r3.inlineMethods;
        function u2(e4, t4) {
          return e4.indexOf("$", t4);
        }
        function i2(e4, r4, n3) {
          const u3 = r4.length;
          let i3, o2, a2, c2, s2, l2, f2, D2 = false, p2 = false, d2 = 0;
          if (r4.charCodeAt(d2) === 92 && (p2 = true, d2++), r4.charCodeAt(d2) === cu) {
            if (d2++, p2)
              return !!n3 || e4(r4.slice(0, d2))({type: "text", value: "$"});
            if (r4.charCodeAt(d2) === cu && (D2 = true, d2++), a2 = r4.charCodeAt(d2), a2 !== 32 && a2 !== 9) {
              for (c2 = d2; d2 < u3; ) {
                if (o2 = a2, a2 = r4.charCodeAt(d2 + 1), o2 === cu) {
                  if (i3 = r4.charCodeAt(d2 - 1), i3 !== 32 && i3 !== 9 && (a2 != a2 || a2 < 48 || a2 > 57) && (!D2 || a2 === cu)) {
                    s2 = d2 - 1, d2++, D2 && d2++, l2 = d2;
                    break;
                  }
                } else
                  o2 === 92 && (d2++, a2 = r4.charCodeAt(d2 + 1));
                d2++;
              }
              if (l2 !== void 0)
                return !!n3 || (f2 = r4.slice(c2, s2 + 1), e4(r4.slice(0, l2))({type: "inlineMath", value: f2, data: {hName: "span", hProperties: {className: su.concat(D2 && t3.inlineMathDouble ? [lu] : [])}, hChildren: [{type: "text", value: f2}]}}));
            }
          }
        }
        i2.locator = u2, r3.inlineTokenizers.math = i2, n2.splice(n2.indexOf("text"), 0, "math");
      }(t2, e2);
      ou.isRemarkCompiler(r2) && function(e3) {
        function t3(e4) {
          let t4 = "$";
          return (e4.data && e4.data.hProperties && e4.data.hProperties.className || []).includes(lu) && (t4 = "$$"), t4 + e4.value + t4;
        }
        e3.prototype.visitors.inlineMath = t3;
      }(r2);
    };
    const cu = 36, su = ["math", "math-inline"], lu = "math-display";
    var fu = function() {
      const e2 = this.Parser, t2 = this.Compiler;
      ou.isRemarkParser(e2) && function(e3) {
        const t3 = e3.prototype, r2 = t3.blockMethods, n2 = t3.interruptParagraph, u2 = t3.interruptList, i2 = t3.interruptBlockquote;
        function o2(e4, t4, r3) {
          var n3 = t4.length, u3 = 0;
          let i3, o3, a2, c2, s2, l2, f2, D2, p2, d2, h2;
          for (; u3 < n3 && t4.charCodeAt(u3) === Du; )
            u3++;
          for (s2 = u3; u3 < n3 && t4.charCodeAt(u3) === pu; )
            u3++;
          if (l2 = u3 - s2, !(l2 < 2)) {
            for (; u3 < n3 && t4.charCodeAt(u3) === Du; )
              u3++;
            for (f2 = u3; u3 < n3; ) {
              if (i3 = t4.charCodeAt(u3), i3 === pu)
                return;
              if (i3 === 10)
                break;
              u3++;
            }
            if (t4.charCodeAt(u3) === 10) {
              if (r3)
                return true;
              for (o3 = [], f2 !== u3 && o3.push(t4.slice(f2, u3)), u3++, a2 = t4.indexOf(du, u3 + 1), a2 = a2 === -1 ? n3 : a2; u3 < n3; ) {
                for (D2 = false, d2 = u3, h2 = a2, c2 = a2, p2 = 0; c2 > d2 && t4.charCodeAt(c2 - 1) === Du; )
                  c2--;
                for (; c2 > d2 && t4.charCodeAt(c2 - 1) === pu; )
                  p2++, c2--;
                for (l2 <= p2 && t4.indexOf("$", d2) === c2 && (D2 = true, h2 = c2); d2 <= h2 && d2 - u3 < s2 && t4.charCodeAt(d2) === Du; )
                  d2++;
                if (D2)
                  for (; h2 > d2 && t4.charCodeAt(h2 - 1) === Du; )
                    h2--;
                if (D2 && d2 === h2 || o3.push(t4.slice(d2, h2)), D2)
                  break;
                u3 = a2 + 1, a2 = t4.indexOf(du, u3 + 1), a2 = a2 === -1 ? n3 : a2;
              }
              return o3 = o3.join("\n"), e4(t4.slice(0, a2))({type: "math", value: o3, data: {hName: "div", hProperties: {className: hu.concat()}, hChildren: [{type: "text", value: o3}]}});
            }
          }
        }
        t3.blockTokenizers.math = o2, r2.splice(r2.indexOf("fencedCode") + 1, 0, "math"), n2.splice(n2.indexOf("fencedCode") + 1, 0, ["math"]), u2.splice(u2.indexOf("fencedCode") + 1, 0, ["math"]), i2.splice(i2.indexOf("fencedCode") + 1, 0, ["math"]);
      }(e2);
      ou.isRemarkCompiler(t2) && function(e3) {
        function t3(e4) {
          return "$$\n" + e4.value + "\n$$";
        }
        e3.prototype.visitors.math = t3;
      }(t2);
    };
    const Du = 32, pu = 36, du = "\n", hu = ["math", "math-display"];
    var gu = function(e2) {
      var t2 = e2 || {};
      fu.call(this, t2), au.call(this, t2);
    };
    var mu = function(e2) {
      var t2 = this.Parser, r2 = this.Compiler;
      (function(e3) {
        return Boolean(e3 && e3.prototype && e3.prototype.blockTokenizers);
      })(t2) && function(e3, t3) {
        var r3, n2 = t3 || {}, u2 = e3.prototype, i2 = u2.blockTokenizers, o2 = u2.inlineTokenizers, a2 = u2.blockMethods, c2 = u2.inlineMethods, s2 = i2.definition, l2 = o2.reference, f2 = [], D2 = -1, p2 = a2.length;
        for (; ++D2 < p2; )
          (r3 = a2[D2]) !== "newline" && r3 !== "indentedCode" && r3 !== "paragraph" && r3 !== "footnoteDefinition" && f2.push([r3]);
        f2.push(["footnoteDefinition"]), n2.inlineNotes && (yu(c2, "reference", "inlineNote"), o2.inlineNote = g2);
        function d2(e4, t4, r4) {
          for (var n3, u3, o3, a3, c3, s3, l3, f3, D3, p3, d3, h3, g3, m3 = this, E3 = m3.interruptFootnoteDefinition, C3 = m3.offset, b3 = t4.length + 1, v2 = 0, F2 = []; v2 < b3 && ((a3 = t4.charCodeAt(v2)) === 9 || a3 === Cu); )
            v2++;
          if (t4.charCodeAt(v2++) === bu && t4.charCodeAt(v2++) === Fu) {
            for (u3 = v2; v2 < b3; ) {
              if ((a3 = t4.charCodeAt(v2)) != a3 || a3 === Eu || a3 === 9 || a3 === Cu)
                return;
              if (a3 === vu) {
                o3 = v2, v2++;
                break;
              }
              v2++;
            }
            if (o3 !== void 0 && u3 !== o3 && t4.charCodeAt(v2++) === 58) {
              if (r4)
                return true;
              for (n3 = t4.slice(u3, o3), c3 = e4.now(), D3 = 0, p3 = 0, d3 = v2, h3 = []; v2 < b3; ) {
                if ((a3 = t4.charCodeAt(v2)) != a3 || a3 === Eu)
                  g3 = {start: D3, contentStart: d3 || v2, contentEnd: v2, end: v2}, h3.push(g3), a3 === Eu && (D3 = v2 + 1, p3 = 0, d3 = void 0, g3.end = D3);
                else if (p3 !== void 0)
                  if (a3 === Cu || a3 === 9)
                    (p3 += a3 === Cu ? 1 : 4 - p3 % 4) > 4 && (p3 = void 0, d3 = v2);
                  else {
                    if (p3 < 4 && g3 && (g3.contentStart === g3.contentEnd || wu(E3, i2, m3, [e4, t4.slice(v2, 1024), true])))
                      break;
                    p3 = void 0, d3 = v2;
                  }
                v2++;
              }
              for (v2 = -1, b3 = h3.length; b3 > 0 && (g3 = h3[b3 - 1]).contentStart === g3.contentEnd; )
                b3--;
              for (s3 = e4(t4.slice(0, g3.contentEnd)); ++v2 < b3; )
                g3 = h3[v2], C3[c3.line + v2] = (C3[c3.line + v2] || 0) + (g3.contentStart - g3.start), F2.push(t4.slice(g3.contentStart, g3.end));
              return l3 = m3.enterBlock(), f3 = m3.tokenizeBlock(F2.join(""), c3), l3(), s3({type: "footnoteDefinition", identifier: n3.toLowerCase(), label: n3, children: f3});
            }
          }
        }
        function h2(e4, t4, r4) {
          var n3, u3, i3, o3, a3 = t4.length + 1, c3 = 0;
          if (t4.charCodeAt(c3++) === bu && t4.charCodeAt(c3++) === Fu) {
            for (u3 = c3; c3 < a3; ) {
              if ((o3 = t4.charCodeAt(c3)) != o3 || o3 === Eu || o3 === 9 || o3 === Cu)
                return;
              if (o3 === vu) {
                i3 = c3, c3++;
                break;
              }
              c3++;
            }
            if (i3 !== void 0 && u3 !== i3)
              return !!r4 || (n3 = t4.slice(u3, i3), e4(t4.slice(0, c3))({type: "footnoteReference", identifier: n3.toLowerCase(), label: n3}));
          }
        }
        function g2(e4, t4, r4) {
          var n3, u3, i3, o3, a3, c3, s3, l3 = this, f3 = t4.length + 1, D3 = 0, p3 = 0;
          if (t4.charCodeAt(D3++) === Fu && t4.charCodeAt(D3++) === bu) {
            for (i3 = D3; D3 < f3; ) {
              if ((u3 = t4.charCodeAt(D3)) != u3)
                return;
              if (c3 === void 0)
                if (u3 === 92)
                  D3 += 2;
                else if (u3 === bu)
                  p3++, D3++;
                else if (u3 === vu) {
                  if (p3 === 0) {
                    o3 = D3, D3++;
                    break;
                  }
                  p3--, D3++;
                } else if (u3 === Au) {
                  for (a3 = D3, c3 = 1; t4.charCodeAt(a3 + c3) === Au; )
                    c3++;
                  D3 += c3;
                } else
                  D3++;
              else if (u3 === Au) {
                for (a3 = D3, s3 = 1; t4.charCodeAt(a3 + s3) === Au; )
                  s3++;
                D3 += s3, c3 === s3 && (c3 = void 0), s3 = void 0;
              } else
                D3++;
            }
            if (o3 !== void 0)
              return !!r4 || ((n3 = e4.now()).column += 2, n3.offset += 2, e4(t4.slice(0, D3))({type: "footnote", children: l3.tokenizeInline(t4.slice(i3, o3), n3)}));
          }
        }
        function m2(e4, t4, r4) {
          var n3 = 0;
          if (t4.charCodeAt(n3) === 33 && n3++, t4.charCodeAt(n3) === bu && t4.charCodeAt(n3 + 1) !== Fu)
            return l2.call(this, e4, t4, r4);
        }
        function E2(e4, t4, r4) {
          for (var n3 = 0, u3 = t4.charCodeAt(n3); u3 === Cu || u3 === 9; )
            u3 = t4.charCodeAt(++n3);
          if (u3 === bu && t4.charCodeAt(n3 + 1) !== Fu)
            return s2.call(this, e4, t4, r4);
        }
        function C2(e4, t4) {
          return e4.indexOf("[", t4);
        }
        function b2(e4, t4) {
          return e4.indexOf("^[", t4);
        }
        yu(a2, "definition", "footnoteDefinition"), yu(c2, "reference", "footnoteCall"), i2.definition = E2, i2.footnoteDefinition = d2, o2.footnoteCall = h2, o2.reference = m2, u2.interruptFootnoteDefinition = f2, m2.locator = l2.locator, h2.locator = C2, g2.locator = b2;
      }(t2, e2);
      (function(e3) {
        return Boolean(e3 && e3.prototype && e3.prototype.visitors);
      })(r2) && function(e3) {
        var t3 = e3.prototype.visitors, r3 = "    ";
        function n2(e4) {
          return "^[" + this.all(e4).join("") + "]";
        }
        function u2(e4) {
          return "[^" + (e4.label || e4.identifier) + "]";
        }
        function i2(e4) {
          for (var t4, n3 = this.all(e4).join("\n\n").split("\n"), u3 = 0, i3 = n3.length; ++u3 < i3; )
            (t4 = n3[u3]) !== "" && (n3[u3] = r3 + t4);
          return "[^" + (e4.label || e4.identifier) + "]: " + n3.join("\n");
        }
        t3.footnote = n2, t3.footnoteReference = u2, t3.footnoteDefinition = i2;
      }(r2);
    }, Eu = 10, Cu = 32, bu = 91, vu = 93, Fu = 94, Au = 96;
    function yu(e2, t2, r2) {
      e2.splice(e2.indexOf(t2), 0, r2);
    }
    function wu(e2, t2, r2, n2) {
      for (var u2 = e2.length, i2 = -1; ++i2 < u2; )
        if (t2[e2[i2][0]].apply(r2, n2))
          return true;
      return false;
    }
    var ku = (e2) => {
      if (typeof e2 != "string")
        throw new TypeError("Expected a string");
      return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    };
    function xu(e2) {
      return {type: "concat", parts: e2};
    }
    function Ou(e2) {
      return {type: "indent", contents: e2};
    }
    function Lu(e2, t2) {
      return {type: "align", contents: t2, n: e2};
    }
    function Bu(e2, t2) {
      return {type: "group", id: (t2 = t2 || {}).id, contents: e2, break: !!t2.shouldBreak, expandedStates: t2.expandedStates};
    }
    const Tu = {type: "break-parent"}, Nu = xu([{type: "line", hard: true}, Tu]), Su = xu([{type: "line", hard: true, literal: true}, Tu]);
    var Iu = {concat: xu, join: function(e2, t2) {
      const r2 = [];
      for (let n2 = 0; n2 < t2.length; n2++)
        n2 !== 0 && r2.push(e2), r2.push(t2[n2]);
      return xu(r2);
    }, line: {type: "line"}, softline: {type: "line", soft: true}, hardline: Nu, literalline: Su, group: Bu, conditionalGroup: function(e2, t2) {
      return Bu(e2[0], Object.assign({}, t2, {expandedStates: e2}));
    }, fill: function(e2) {
      return {type: "fill", parts: e2};
    }, lineSuffix: function(e2) {
      return {type: "line-suffix", contents: e2};
    }, lineSuffixBoundary: {type: "line-suffix-boundary"}, cursor: {type: "cursor", placeholder: Symbol("cursor")}, breakParent: Tu, ifBreak: function(e2, t2, r2) {
      return {type: "if-break", breakContents: e2, flatContents: t2, groupId: (r2 = r2 || {}).groupId};
    }, trim: {type: "trim"}, indent: Ou, align: Lu, addAlignmentToDoc: function(e2, t2, r2) {
      let n2 = e2;
      if (t2 > 0) {
        for (let e3 = 0; e3 < Math.floor(t2 / r2); ++e3)
          n2 = Ou(n2);
        n2 = Lu(t2 % r2, n2), n2 = Lu(-1 / 0, n2);
      }
      return n2;
    }, markAsRoot: function(e2) {
      return Lu({type: "root"}, e2);
    }, dedentToRoot: function(e2) {
      return Lu(-1 / 0, e2);
    }, dedent: function(e2) {
      return Lu(-1, e2);
    }}, Ru = (e2) => typeof e2 == "string" ? e2.replace((({onlyFirst: e3 = false} = {}) => {
      const t2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t2, e3 ? void 0 : "g");
    })(), "") : e2;
    const qu = (e2) => !Number.isNaN(e2) && (e2 >= 4352 && (e2 <= 4447 || e2 === 9001 || e2 === 9002 || 11904 <= e2 && e2 <= 12871 && e2 !== 12351 || 12880 <= e2 && e2 <= 19903 || 19968 <= e2 && e2 <= 42182 || 43360 <= e2 && e2 <= 43388 || 44032 <= e2 && e2 <= 55203 || 63744 <= e2 && e2 <= 64255 || 65040 <= e2 && e2 <= 65049 || 65072 <= e2 && e2 <= 65131 || 65281 <= e2 && e2 <= 65376 || 65504 <= e2 && e2 <= 65510 || 110592 <= e2 && e2 <= 110593 || 127488 <= e2 && e2 <= 127569 || 131072 <= e2 && e2 <= 262141));
    var Pu = qu, ju = qu;
    Pu.default = ju;
    const zu = (e2) => {
      if (typeof (e2 = e2.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) != "string" || e2.length === 0)
        return 0;
      e2 = Ru(e2);
      let t2 = 0;
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2.codePointAt(r2);
        n2 <= 31 || n2 >= 127 && n2 <= 159 || (n2 >= 768 && n2 <= 879 || (n2 > 65535 && r2++, t2 += Pu(n2) ? 2 : 1));
      }
      return t2;
    };
    var Uu = zu, Mu = zu;
    Uu.default = Mu;
    function Gu(e2, t2) {
      return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, {raw: {value: Object.freeze(t2)}}));
    }
    var Vu = typeof Nn == "object" && Nn.env && Nn.env.NODE_DEBUG && /\bsemver\b/i.test(Nn.env.NODE_DEBUG) ? (...e2) => console.error("SEMVER", ...e2) : () => {
    };
    var _u = {SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16}, $u = r(function(e2, t2) {
      const {MAX_SAFE_COMPONENT_LENGTH: r2} = _u, n2 = (t2 = e2.exports = {}).re = [], u2 = t2.src = [], i2 = t2.t = {};
      let o2 = 0;
      const a2 = (e3, t3, r3) => {
        const a3 = o2++;
        Vu(a3, t3), i2[e3] = a3, u2[a3] = t3, n2[a3] = new RegExp(t3, r3 ? "g" : void 0);
      };
      a2("NUMERICIDENTIFIER", "0|[1-9]\\d*"), a2("NUMERICIDENTIFIERLOOSE", "[0-9]+"), a2("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), a2("MAINVERSION", "(".concat(u2[i2.NUMERICIDENTIFIER], ")\\.") + "(".concat(u2[i2.NUMERICIDENTIFIER], ")\\.") + "(".concat(u2[i2.NUMERICIDENTIFIER], ")")), a2("MAINVERSIONLOOSE", "(".concat(u2[i2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u2[i2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(u2[i2.NUMERICIDENTIFIERLOOSE], ")")), a2("PRERELEASEIDENTIFIER", "(?:".concat(u2[i2.NUMERICIDENTIFIER], "|").concat(u2[i2.NONNUMERICIDENTIFIER], ")")), a2("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(u2[i2.NUMERICIDENTIFIERLOOSE], "|").concat(u2[i2.NONNUMERICIDENTIFIER], ")")), a2("PRERELEASE", "(?:-(".concat(u2[i2.PRERELEASEIDENTIFIER], "(?:\\.").concat(u2[i2.PRERELEASEIDENTIFIER], ")*))")), a2("PRERELEASELOOSE", "(?:-?(".concat(u2[i2.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(u2[i2.PRERELEASEIDENTIFIERLOOSE], ")*))")), a2("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), a2("BUILD", "(?:\\+(".concat(u2[i2.BUILDIDENTIFIER], "(?:\\.").concat(u2[i2.BUILDIDENTIFIER], ")*))")), a2("FULLPLAIN", "v?".concat(u2[i2.MAINVERSION]).concat(u2[i2.PRERELEASE], "?").concat(u2[i2.BUILD], "?")), a2("FULL", "^".concat(u2[i2.FULLPLAIN], "$")), a2("LOOSEPLAIN", "[v=\\s]*".concat(u2[i2.MAINVERSIONLOOSE]).concat(u2[i2.PRERELEASELOOSE], "?").concat(u2[i2.BUILD], "?")), a2("LOOSE", "^".concat(u2[i2.LOOSEPLAIN], "$")), a2("GTLT", "((?:<|>)?=?)"), a2("XRANGEIDENTIFIERLOOSE", "".concat(u2[i2.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), a2("XRANGEIDENTIFIER", "".concat(u2[i2.NUMERICIDENTIFIER], "|x|X|\\*")), a2("XRANGEPLAIN", "[v=\\s]*(".concat(u2[i2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u2[i2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(u2[i2.XRANGEIDENTIFIER], ")") + "(?:".concat(u2[i2.PRERELEASE], ")?").concat(u2[i2.BUILD], "?") + ")?)?"), a2("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(u2[i2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u2[i2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(u2[i2.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(u2[i2.PRERELEASELOOSE], ")?").concat(u2[i2.BUILD], "?") + ")?)?"), a2("XRANGE", "^".concat(u2[i2.GTLT], "\\s*").concat(u2[i2.XRANGEPLAIN], "$")), a2("XRANGELOOSE", "^".concat(u2[i2.GTLT], "\\s*").concat(u2[i2.XRANGEPLAINLOOSE], "$")), a2("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(r2, "})") + "(?:\\.(\\d{1,".concat(r2, "}))?") + "(?:\\.(\\d{1,".concat(r2, "}))?") + "(?:$|[^\\d])"), a2("COERCERTL", u2[i2.COERCE], true), a2("LONETILDE", "(?:~>?)"), a2("TILDETRIM", "(\\s*)".concat(u2[i2.LONETILDE], "\\s+"), true), t2.tildeTrimReplace = "$1~", a2("TILDE", "^".concat(u2[i2.LONETILDE]).concat(u2[i2.XRANGEPLAIN], "$")), a2("TILDELOOSE", "^".concat(u2[i2.LONETILDE]).concat(u2[i2.XRANGEPLAINLOOSE], "$")), a2("LONECARET", "(?:\\^)"), a2("CARETTRIM", "(\\s*)".concat(u2[i2.LONECARET], "\\s+"), true), t2.caretTrimReplace = "$1^", a2("CARET", "^".concat(u2[i2.LONECARET]).concat(u2[i2.XRANGEPLAIN], "$")), a2("CARETLOOSE", "^".concat(u2[i2.LONECARET]).concat(u2[i2.XRANGEPLAINLOOSE], "$")), a2("COMPARATORLOOSE", "^".concat(u2[i2.GTLT], "\\s*(").concat(u2[i2.LOOSEPLAIN], ")$|^$")), a2("COMPARATOR", "^".concat(u2[i2.GTLT], "\\s*(").concat(u2[i2.FULLPLAIN], ")$|^$")), a2("COMPARATORTRIM", "(\\s*)".concat(u2[i2.GTLT], "\\s*(").concat(u2[i2.LOOSEPLAIN], "|").concat(u2[i2.XRANGEPLAIN], ")"), true), t2.comparatorTrimReplace = "$1$2$3", a2("HYPHENRANGE", "^\\s*(".concat(u2[i2.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(u2[i2.XRANGEPLAIN], ")") + "\\s*$"), a2("HYPHENRANGELOOSE", "^\\s*(".concat(u2[i2.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(u2[i2.XRANGEPLAINLOOSE], ")") + "\\s*$"), a2("STAR", "(<|>)?=?\\s*\\*"), a2("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), a2("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
    });
    const Hu = /^[0-9]+$/, Xu = (e2, t2) => {
      const r2 = Hu.test(e2), n2 = Hu.test(t2);
      return r2 && n2 && (e2 = +e2, t2 = +t2), e2 === t2 ? 0 : r2 && !n2 ? -1 : n2 && !r2 ? 1 : e2 < t2 ? -1 : 1;
    };
    var Wu = {compareIdentifiers: Xu, rcompareIdentifiers: (e2, t2) => Xu(t2, e2)};
    const {MAX_LENGTH: Yu, MAX_SAFE_INTEGER: Zu} = _u, {re: Ju, t: Ku} = $u, {compareIdentifiers: Qu} = Wu;
    class ei {
      constructor(e2, t2) {
        if (t2 && typeof t2 == "object" || (t2 = {loose: !!t2, includePrerelease: false}), e2 instanceof ei) {
          if (e2.loose === !!t2.loose && e2.includePrerelease === !!t2.includePrerelease)
            return e2;
          e2 = e2.version;
        } else if (typeof e2 != "string")
          throw new TypeError("Invalid Version: ".concat(e2));
        if (e2.length > Yu)
          throw new TypeError("version is longer than ".concat(Yu, " characters"));
        Vu("SemVer", e2, t2), this.options = t2, this.loose = !!t2.loose, this.includePrerelease = !!t2.includePrerelease;
        const r2 = e2.trim().match(t2.loose ? Ju[Ku.LOOSE] : Ju[Ku.FULL]);
        if (!r2)
          throw new TypeError("Invalid Version: ".concat(e2));
        if (this.raw = e2, this.major = +r2[1], this.minor = +r2[2], this.patch = +r2[3], this.major > Zu || this.major < 0)
          throw new TypeError("Invalid major version");
        if (this.minor > Zu || this.minor < 0)
          throw new TypeError("Invalid minor version");
        if (this.patch > Zu || this.patch < 0)
          throw new TypeError("Invalid patch version");
        r2[4] ? this.prerelease = r2[4].split(".").map((e3) => {
          if (/^[0-9]+$/.test(e3)) {
            const t3 = +e3;
            if (t3 >= 0 && t3 < Zu)
              return t3;
          }
          return e3;
        }) : this.prerelease = [], this.build = r2[5] ? r2[5].split(".") : [], this.format();
      }
      format() {
        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
      }
      toString() {
        return this.version;
      }
      compare(e2) {
        if (Vu("SemVer.compare", this.version, this.options, e2), !(e2 instanceof ei)) {
          if (typeof e2 == "string" && e2 === this.version)
            return 0;
          e2 = new ei(e2, this.options);
        }
        return e2.version === this.version ? 0 : this.compareMain(e2) || this.comparePre(e2);
      }
      compareMain(e2) {
        return e2 instanceof ei || (e2 = new ei(e2, this.options)), Qu(this.major, e2.major) || Qu(this.minor, e2.minor) || Qu(this.patch, e2.patch);
      }
      comparePre(e2) {
        if (e2 instanceof ei || (e2 = new ei(e2, this.options)), this.prerelease.length && !e2.prerelease.length)
          return -1;
        if (!this.prerelease.length && e2.prerelease.length)
          return 1;
        if (!this.prerelease.length && !e2.prerelease.length)
          return 0;
        let t2 = 0;
        do {
          const r2 = this.prerelease[t2], n2 = e2.prerelease[t2];
          if (Vu("prerelease compare", t2, r2, n2), r2 === void 0 && n2 === void 0)
            return 0;
          if (n2 === void 0)
            return 1;
          if (r2 === void 0)
            return -1;
          if (r2 !== n2)
            return Qu(r2, n2);
        } while (++t2);
      }
      compareBuild(e2) {
        e2 instanceof ei || (e2 = new ei(e2, this.options));
        let t2 = 0;
        do {
          const r2 = this.build[t2], n2 = e2.build[t2];
          if (Vu("prerelease compare", t2, r2, n2), r2 === void 0 && n2 === void 0)
            return 0;
          if (n2 === void 0)
            return 1;
          if (r2 === void 0)
            return -1;
          if (r2 !== n2)
            return Qu(r2, n2);
        } while (++t2);
      }
      inc(e2, t2) {
        switch (e2) {
          case "premajor":
            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t2);
            break;
          case "preminor":
            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t2);
            break;
          case "prepatch":
            this.prerelease.length = 0, this.inc("patch", t2), this.inc("pre", t2);
            break;
          case "prerelease":
            this.prerelease.length === 0 && this.inc("patch", t2), this.inc("pre", t2);
            break;
          case "major":
            this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
            break;
          case "minor":
            this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
            break;
          case "patch":
            this.prerelease.length === 0 && this.patch++, this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0)
              this.prerelease = [0];
            else {
              let e3 = this.prerelease.length;
              for (; --e3 >= 0; )
                typeof this.prerelease[e3] == "number" && (this.prerelease[e3]++, e3 = -2);
              e3 === -1 && this.prerelease.push(0);
            }
            t2 && (this.prerelease[0] === t2 ? isNaN(this.prerelease[1]) && (this.prerelease = [t2, 0]) : this.prerelease = [t2, 0]);
            break;
          default:
            throw new Error("invalid increment argument: ".concat(e2));
        }
        return this.format(), this.raw = this.version, this;
      }
    }
    var ti = ei;
    var ri = (e2, t2, r2) => new ti(e2, r2).compare(new ti(t2, r2));
    var ni = (e2, t2, r2) => ri(e2, t2, r2) < 0;
    var ui = (e2, t2, r2) => ri(e2, t2, r2) >= 0, ii = "2.2.1", oi = r(function(e2, t2) {
      function r2() {
        for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
          e3[t3] = arguments[t3];
      }
      function n2() {
        return typeof WeakMap != "undefined" ? new WeakMap() : {add: r2, delete: r2, get: r2, set: r2, has: function(e3) {
          return false;
        }};
      }
      Object.defineProperty(t2, "__esModule", {value: true});
      var u2 = Object.prototype.hasOwnProperty, i2 = function(e3, t3) {
        return u2.call(e3, t3);
      };
      function o2(e3, t3) {
        for (var r3 in t3)
          i2(t3, r3) && (e3[r3] = t3[r3]);
        return e3;
      }
      var a2 = /^[ \t]*(?:\r\n|\r|\n)/, c2 = /(?:\r\n|\r|\n)[ \t]*$/, s2 = /^(?:[\r\n]|$)/, l2 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, f2 = /^[ \t]*[\r\n][ \t\r\n]*$/;
      function D2(e3, t3, r3) {
        var n3 = 0, u3 = e3[0].match(l2);
        u3 && (n3 = u3[1].length);
        var i3 = new RegExp("(\\r\\n|\\r|\\n).{0," + n3 + "}", "g");
        t3 && (e3 = e3.slice(1));
        var o3 = r3.newline, s3 = r3.trimLeadingNewline, f3 = r3.trimTrailingNewline, D3 = typeof o3 == "string", p3 = e3.length;
        return e3.map(function(e4, t4) {
          return e4 = e4.replace(i3, "$1"), t4 === 0 && s3 && (e4 = e4.replace(a2, "")), t4 === p3 - 1 && f3 && (e4 = e4.replace(c2, "")), D3 && (e4 = e4.replace(/\r\n|\n|\r/g, function(e5) {
            return o3;
          })), e4;
        });
      }
      function p2(e3, t3) {
        for (var r3 = "", n3 = 0, u3 = e3.length; n3 < u3; n3++)
          r3 += e3[n3], n3 < u3 - 1 && (r3 += t3[n3]);
        return r3;
      }
      function d2(e3) {
        return i2(e3, "raw") && i2(e3, "length");
      }
      var h2 = function e3(t3) {
        var r3 = n2(), u3 = n2();
        return o2(function n3(i3) {
          for (var a3 = [], c3 = 1; c3 < arguments.length; c3++)
            a3[c3 - 1] = arguments[c3];
          if (d2(i3)) {
            var l3 = i3, g2 = (a3[0] === n3 || a3[0] === h2) && f2.test(l3[0]) && s2.test(l3[1]), m2 = g2 ? u3 : r3, E2 = m2.get(l3);
            if (E2 || (E2 = D2(l3, g2, t3), m2.set(l3, E2)), a3.length === 0)
              return E2[0];
            var C2 = p2(E2, g2 ? a3.slice(1) : a3);
            return C2;
          }
          return e3(o2(o2({}, t3), i3 || {}));
        }, {string: function(e4) {
          return D2([e4], false, t3)[0];
        }});
      }({trimLeadingNewline: true, trimTrailingNewline: true});
      t2.outdent = h2, t2.default = h2;
      try {
        e2.exports = h2, Object.defineProperty(h2, "__esModule", {value: true}), h2.default = h2, h2.outdent = h2;
      } catch (e3) {
      }
    });
    function ai() {
      const e2 = Gu(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]);
      return ai = function() {
        return e2;
      }, e2;
    }
    function ci() {
      const e2 = Gu(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
      return ci = function() {
        return e2;
      }, e2;
    }
    function si() {
      const e2 = Gu(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]);
      return si = function() {
        return e2;
      }, e2;
    }
    function li() {
      const e2 = Gu(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]);
      return li = function() {
        return e2;
      }, e2;
    }
    function fi() {
      const e2 = Gu(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]);
      return fi = function() {
        return e2;
      }, e2;
    }
    function Di() {
      const e2 = Gu(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]);
      return Di = function() {
        return e2;
      }, e2;
    }
    const {outdent: pi} = oi, di = "Config", hi = "Editor", gi = "Other", mi = "Global", Ei = "Special", Ci = {cursorOffset: {since: "1.4.0", category: Ei, type: "int", default: -1, range: {start: -1, end: 1 / 0, step: 1}, description: pi(Di()), cliCategory: hi}, endOfLine: {since: "1.15.0", category: mi, type: "choice", default: [{since: "1.15.0", value: "auto"}, {since: "2.0.0", value: "lf"}], description: "Which end of line characters to apply.", choices: [{value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos"}, {value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows"}, {value: "cr", description: "Carriage Return character only (\\r), used very rarely"}, {value: "auto", description: pi(fi())}]}, filepath: {since: "1.4.0", category: Ei, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: gi, cliDescription: "Path to the file to pretend that stdin comes from."}, insertPragma: {since: "1.8.0", category: Ei, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: gi}, parser: {since: "0.0.10", category: mi, type: "choice", default: [{since: "0.0.10", value: "babylon"}, {since: "1.13.0", value: void 0}], description: "Which parser to use.", exception: (e2) => typeof e2 == "string" || typeof e2 == "function", choices: [{value: "flow", description: "Flow"}, {value: "babel", since: "1.16.0", description: "JavaScript"}, {value: "babel-flow", since: "1.16.0", description: "Flow"}, {value: "babel-ts", since: "2.0.0", description: "TypeScript"}, {value: "typescript", since: "1.4.0", description: "TypeScript"}, {value: "espree", since: "2.2.0", description: "JavaScript"}, {value: "meriyah", since: "2.2.0", description: "JavaScript"}, {value: "css", since: "1.7.1", description: "CSS"}, {value: "less", since: "1.7.1", description: "Less"}, {value: "scss", since: "1.7.1", description: "SCSS"}, {value: "json", since: "1.5.0", description: "JSON"}, {value: "json5", since: "1.13.0", description: "JSON5"}, {value: "json-stringify", since: "1.13.0", description: "JSON.stringify"}, {value: "graphql", since: "1.5.0", description: "GraphQL"}, {value: "markdown", since: "1.8.0", description: "Markdown"}, {value: "mdx", since: "1.15.0", description: "MDX"}, {value: "vue", since: "1.10.0", description: "Vue"}, {value: "yaml", since: "1.14.0", description: "YAML"}, {value: "glimmer", since: null, description: "Handlebars"}, {value: "html", since: "1.15.0", description: "HTML"}, {value: "angular", since: "1.15.0", description: "Angular"}, {value: "lwc", since: "1.17.0", description: "Lightning Web Components"}]}, plugins: {since: "1.10.0", type: "path", array: true, default: [{value: []}], category: mi, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin", cliCategory: di}, pluginSearchDirs: {since: "1.13.0", type: "path", array: true, default: [{value: []}], category: mi, description: pi(li()), exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin-search-dir", cliCategory: di}, printWidth: {since: "0.0.0", category: mi, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: {start: 0, end: 1 / 0, step: 1}}, rangeEnd: {since: "1.4.0", category: Ei, type: "int", default: 1 / 0, range: {start: 0, end: 1 / 0, step: 1}, description: pi(si()), cliCategory: hi}, rangeStart: {since: "1.4.0", category: Ei, type: "int", default: 0, range: {start: 0, end: 1 / 0, step: 1}, description: pi(ci()), cliCategory: hi}, requirePragma: {since: "1.7.0", category: Ei, type: "boolean", default: false, description: pi(ai()), cliCategory: gi}, tabWidth: {type: "int", category: mi, default: 2, description: "Number of spaces per indentation level.", range: {start: 0, end: 1 / 0, step: 1}}, useTabs: {since: "1.0.0", category: mi, type: "boolean", default: false, description: "Indent with tabs instead of spaces."}, embeddedLanguageFormatting: {since: "2.1.0", category: mi, type: "choice", default: [{since: "2.1.0", value: "auto"}], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{value: "auto", description: "Format embedded code if Prettier can automatically identify it."}, {value: "off", description: "Never automatically format embedded code."}]}};
    const bi = {compare: ri, lt: ni, gte: ui}, vi = ii, Fi = {CATEGORY_CONFIG: di, CATEGORY_EDITOR: hi, CATEGORY_FORMAT: "Format", CATEGORY_OTHER: gi, CATEGORY_OUTPUT: "Output", CATEGORY_GLOBAL: mi, CATEGORY_SPECIAL: Ei, options: Ci}.options;
    var Ai = {getSupportInfo: function({plugins: e2 = [], showUnreleased: t2 = false, showDeprecated: r2 = false, showInternal: n2 = false} = {}) {
      const u2 = vi.split("-", 1)[0], i2 = e2.reduce((e3, t3) => e3.concat(t3.languages || []), []).filter(s2), o2 = (a2 = Object.assign({}, ...e2.map(({options: e3}) => e3), Fi), c2 = "name", Object.entries(a2).map(([e3, t3]) => Object.assign({[c2]: e3}, t3))).filter((e3) => s2(e3) && l2(e3)).sort((e3, t3) => e3.name === t3.name ? 0 : e3.name < t3.name ? -1 : 1).map(function(e3) {
        if (n2)
          return e3;
        return function(e4, t3) {
          if (e4 == null)
            return {};
          var r3, n3, u3 = {}, i3 = Object.keys(e4);
          for (n3 = 0; n3 < i3.length; n3++)
            r3 = i3[n3], t3.indexOf(r3) >= 0 || (u3[r3] = e4[r3]);
          return u3;
        }(e3, ["cliName", "cliCategory", "cliDescription"]);
      }).map((t3) => {
        t3 = Object.assign({}, t3), Array.isArray(t3.default) && (t3.default = t3.default.length === 1 ? t3.default[0].value : t3.default.filter(s2).sort((e3, t4) => bi.compare(t4.since, e3.since))[0].value), Array.isArray(t3.choices) && (t3.choices = t3.choices.filter((e3) => s2(e3) && l2(e3)), t3.name === "parser" && function(e3, t4, r4) {
          const n3 = new Set(e3.choices.map((e4) => e4.value));
          for (const u3 of t4)
            if (u3.parsers) {
              for (const t5 of u3.parsers)
                if (!n3.has(t5)) {
                  n3.add(t5);
                  const i3 = r4.find((e4) => e4.parsers && e4.parsers[t5]);
                  let o3 = u3.name;
                  i3 && i3.name && (o3 += " (plugin: ".concat(i3.name, ")")), e3.choices.push({value: t5, description: o3});
                }
            }
        }(t3, i2, e2));
        const r3 = e2.filter((e3) => e3.defaultOptions && e3.defaultOptions[t3.name] !== void 0).reduce((e3, r4) => (e3[r4.name] = r4.defaultOptions[t3.name], e3), {});
        return Object.assign({}, t3, {pluginDefaults: r3});
      });
      var a2, c2;
      return {languages: i2, options: o2};
      function s2(e3) {
        return t2 || !("since" in e3) || e3.since && bi.gte(u2, e3.since);
      }
      function l2(e3) {
        return r2 || !("deprecated" in e3) || e3.deprecated && bi.lt(u2, e3.deprecated);
      }
    }};
    const {getSupportInfo: yi} = Ai, wi = /[^\x20-\x7F]/;
    function ki(e2) {
      return (t2, r2, n2) => {
        const u2 = n2 && n2.backwards;
        if (r2 === false)
          return false;
        const {length: i2} = t2;
        let o2 = r2;
        for (; o2 >= 0 && o2 < i2; ) {
          const r3 = t2.charAt(o2);
          if (e2 instanceof RegExp) {
            if (!e2.test(r3))
              return o2;
          } else if (!e2.includes(r3))
            return o2;
          u2 ? o2-- : o2++;
        }
        return (o2 === -1 || o2 === i2) && o2;
      };
    }
    const xi = ki(/\s/), Oi = ki(" 	"), Li = ki(",; 	"), Bi = ki(/[^\n\r]/);
    function Ti(e2, t2) {
      if (t2 === false)
        return false;
      if (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "*") {
        for (let r2 = t2 + 2; r2 < e2.length; ++r2)
          if (e2.charAt(r2) === "*" && e2.charAt(r2 + 1) === "/")
            return r2 + 2;
      }
      return t2;
    }
    function Ni(e2, t2) {
      return t2 !== false && (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "/" ? Bi(e2, t2) : t2);
    }
    function Si(e2, t2, r2) {
      const n2 = r2 && r2.backwards;
      if (t2 === false)
        return false;
      const u2 = e2.charAt(t2);
      if (n2) {
        if (e2.charAt(t2 - 1) === "\r" && u2 === "\n")
          return t2 - 2;
        if (u2 === "\n" || u2 === "\r" || u2 === "\u2028" || u2 === "\u2029")
          return t2 - 1;
      } else {
        if (u2 === "\r" && e2.charAt(t2 + 1) === "\n")
          return t2 + 2;
        if (u2 === "\n" || u2 === "\r" || u2 === "\u2028" || u2 === "\u2029")
          return t2 + 1;
      }
      return t2;
    }
    function Ii(e2, t2, r2) {
      const n2 = Oi(e2, (r2 = r2 || {}).backwards ? t2 - 1 : t2, r2);
      return n2 !== Si(e2, n2, r2);
    }
    function Ri(e2, t2) {
      let r2 = null, n2 = t2;
      for (; n2 !== r2; )
        r2 = n2, n2 = Li(e2, n2), n2 = Ti(e2, n2), n2 = Oi(e2, n2);
      return n2 = Ni(e2, n2), n2 = Si(e2, n2), n2 !== false && Ii(e2, n2);
    }
    function qi(e2, t2) {
      let r2 = null, n2 = t2;
      for (; n2 !== r2; )
        r2 = n2, n2 = Oi(e2, n2), n2 = Ti(e2, n2), n2 = Ni(e2, n2), n2 = Si(e2, n2);
      return n2;
    }
    function Pi(e2, t2, r2) {
      return qi(e2, r2(t2));
    }
    function ji(e2, t2, r2) {
      let n2 = 0;
      for (let u2 = r2 = r2 || 0; u2 < e2.length; ++u2)
        e2[u2] === "	" ? n2 = n2 + t2 - n2 % t2 : n2++;
      return n2;
    }
    function zi(e2, t2) {
      const r2 = e2.slice(1, -1), n2 = {quote: '"', regex: /"/g}, u2 = {quote: "'", regex: /'/g}, i2 = t2 === "'" ? u2 : n2, o2 = i2 === u2 ? n2 : u2;
      let a2 = i2.quote;
      if (r2.includes(i2.quote) || r2.includes(o2.quote)) {
        a2 = (r2.match(i2.regex) || []).length > (r2.match(o2.regex) || []).length ? o2.quote : i2.quote;
      }
      return a2;
    }
    function Ui(e2, t2, r2) {
      const n2 = t2 === '"' ? "'" : '"', u2 = e2.replace(/\\([\S\s])|(["'])/g, (e3, u3, i2) => u3 === n2 ? u3 : i2 === t2 ? "\\" + i2 : i2 || (r2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(u3) ? u3 : "\\" + u3));
      return t2 + u2 + t2;
    }
    function Mi(e2, t2) {
      (e2.comments || (e2.comments = [])).push(t2), t2.printed = false, e2.type === "JSXText" && (t2.printed = true);
    }
    var Gi = {inferParserByLanguage: function(e2, t2) {
      const {languages: r2} = yi({plugins: t2.plugins}), n2 = r2.find(({name: t3}) => t3.toLowerCase() === e2) || r2.find(({aliases: t3}) => Array.isArray(t3) && t3.includes(e2)) || r2.find(({extensions: t3}) => Array.isArray(t3) && t3.includes(".".concat(e2)));
      return n2 && n2.parsers[0];
    }, replaceEndOfLineWith: function(e2, t2) {
      const r2 = [];
      for (const n2 of e2.split("\n"))
        r2.length !== 0 && r2.push(t2), r2.push(n2);
      return r2;
    }, getStringWidth: function(e2) {
      return e2 ? wi.test(e2) ? Uu(e2) : e2.length : 0;
    }, getMaxContinuousCount: function(e2, t2) {
      const r2 = e2.match(new RegExp("(".concat(ku(t2), ")+"), "g"));
      return r2 === null ? 0 : r2.reduce((e3, r3) => Math.max(e3, r3.length / t2.length), 0);
    }, getMinNotPresentContinuousCount: function(e2, t2) {
      const r2 = e2.match(new RegExp("(".concat(ku(t2), ")+"), "g"));
      if (r2 === null)
        return 0;
      const n2 = new Map();
      let u2 = 0;
      for (const e3 of r2) {
        const r3 = e3.length / t2.length;
        n2.set(r3, true), r3 > u2 && (u2 = r3);
      }
      for (let e3 = 1; e3 < u2; e3++)
        if (!n2.get(e3))
          return e3;
      return u2 + 1;
    }, getPenultimate: (e2) => e2[e2.length - 2], getLast: (e2) => e2[e2.length - 1], getNextNonSpaceNonCommentCharacterIndexWithStartIndex: qi, getNextNonSpaceNonCommentCharacterIndex: Pi, getNextNonSpaceNonCommentCharacter: function(e2, t2, r2) {
      return e2.charAt(Pi(e2, t2, r2));
    }, skip: ki, skipWhitespace: xi, skipSpaces: Oi, skipToLineEnd: Li, skipEverythingButNewLine: Bi, skipInlineComment: Ti, skipTrailingComment: Ni, skipNewline: Si, isNextLineEmptyAfterIndex: Ri, isNextLineEmpty: function(e2, t2, r2) {
      return Ri(e2, r2(t2));
    }, isPreviousLineEmpty: function(e2, t2, r2) {
      let n2 = r2(t2) - 1;
      return n2 = Oi(e2, n2, {backwards: true}), n2 = Si(e2, n2, {backwards: true}), n2 = Oi(e2, n2, {backwards: true}), n2 !== Si(e2, n2, {backwards: true});
    }, hasNewline: Ii, hasNewlineInRange: function(e2, t2, r2) {
      for (let n2 = t2; n2 < r2; ++n2)
        if (e2.charAt(n2) === "\n")
          return true;
      return false;
    }, hasSpaces: function(e2, t2, r2) {
      return Oi(e2, (r2 = r2 || {}).backwards ? t2 - 1 : t2, r2) !== t2;
    }, getAlignmentSize: ji, getIndentSize: function(e2, t2) {
      const r2 = e2.lastIndexOf("\n");
      return r2 === -1 ? 0 : ji(e2.slice(r2 + 1).match(/^[\t ]*/)[0], t2);
    }, getPreferredQuote: zi, printString: function(e2, t2, r2) {
      const n2 = e2.slice(1, -1), u2 = !n2.includes('"') && !n2.includes("'"), i2 = t2.parser === "json" ? '"' : t2.__isInHtmlAttribute ? "'" : zi(e2, t2.singleQuote ? "'" : '"');
      return r2 ? u2 ? i2 + n2 + i2 : e2 : Ui(n2, i2, !(t2.parser === "css" || t2.parser === "less" || t2.parser === "scss" || t2.embeddedInHtml));
    }, printNumber: function(e2) {
      return e2.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    }, isNodeIgnoreComment: function(e2) {
      return e2.value.trim() === "prettier-ignore";
    }, makeString: Ui, addLeadingComment: function(e2, t2) {
      t2.leading = true, t2.trailing = false, Mi(e2, t2);
    }, addDanglingComment: function(e2, t2, r2) {
      t2.leading = false, t2.trailing = false, r2 && (t2.marker = r2), Mi(e2, t2);
    }, addTrailingComment: function(e2, t2) {
      t2.leading = false, t2.trailing = true, Mi(e2, t2);
    }, isFrontMatterNode: function(e2) {
      return e2 && e2.type === "front-matter";
    }, getShebang: function(e2) {
      if (!e2.startsWith("#!"))
        return "";
      const t2 = e2.indexOf("\n");
      return t2 === -1 ? e2 : e2.slice(0, t2);
    }};
    var Vi = {guessEndOfLine: function(e2) {
      const t2 = e2.indexOf("\r");
      return t2 >= 0 ? e2.charAt(t2 + 1) === "\n" ? "crlf" : "cr" : "lf";
    }, convertEndOfLineToChars: function(e2) {
      switch (e2) {
        case "cr":
          return "\r";
        case "crlf":
          return "\r\n";
        default:
          return "\n";
      }
    }, countEndOfLineChars: function(e2, t2) {
      let r2;
      if (t2 === "\n")
        r2 = /\n/g;
      else if (t2 === "\r")
        r2 = /\r/g;
      else {
        if (t2 !== "\r\n")
          throw new Error('Unexpected "eol" '.concat(JSON.stringify(t2), "."));
        r2 = /\r\n/g;
      }
      const n2 = e2.match(r2);
      return n2 ? n2.length : 0;
    }, normalizeEndOfLine: function(e2) {
      return e2.replace(/\r\n?/g, "\n");
    }};
    const {getStringWidth: _i} = Gi, {convertEndOfLineToChars: $i} = Vi, {concat: Hi, fill: Xi, cursor: Wi} = Iu;
    let Yi;
    function Zi(e2, t2) {
      return Ki(e2, {type: "indent"}, t2);
    }
    function Ji(e2, t2, r2) {
      if (t2 === -1 / 0)
        return e2.root || {value: "", length: 0, queue: []};
      if (t2 < 0)
        return Ki(e2, {type: "dedent"}, r2);
      if (!t2)
        return e2;
      if (t2.type === "root")
        return Object.assign({}, e2, {root: e2});
      return Ki(e2, {type: typeof t2 == "string" ? "stringAlign" : "numberAlign", n: t2}, r2);
    }
    function Ki(e2, t2, r2) {
      const n2 = t2.type === "dedent" ? e2.queue.slice(0, -1) : e2.queue.concat(t2);
      let u2 = "", i2 = 0, o2 = 0, a2 = 0;
      for (const e3 of n2)
        switch (e3.type) {
          case "indent":
            l2(), r2.useTabs ? c2(1) : s2(r2.tabWidth);
            break;
          case "stringAlign":
            l2(), u2 += e3.n, i2 += e3.n.length;
            break;
          case "numberAlign":
            o2 += 1, a2 += e3.n;
            break;
          default:
            throw new Error("Unexpected type '".concat(e3.type, "'"));
        }
      return f2(), Object.assign({}, e2, {value: u2, length: i2, queue: n2});
      function c2(e3) {
        u2 += "	".repeat(e3), i2 += r2.tabWidth * e3;
      }
      function s2(e3) {
        u2 += " ".repeat(e3), i2 += e3;
      }
      function l2() {
        r2.useTabs ? function() {
          o2 > 0 && c2(o2);
          D2();
        }() : f2();
      }
      function f2() {
        a2 > 0 && s2(a2), D2();
      }
      function D2() {
        o2 = 0, a2 = 0;
      }
    }
    function Qi(e2) {
      if (e2.length === 0)
        return 0;
      let t2 = 0;
      for (; e2.length > 0 && typeof e2[e2.length - 1] == "string" && e2[e2.length - 1].match(/^[\t ]*$/); )
        t2 += e2.pop().length;
      if (e2.length && typeof e2[e2.length - 1] == "string") {
        const r2 = e2[e2.length - 1].replace(/[\t ]*$/, "");
        t2 += e2[e2.length - 1].length - r2.length, e2[e2.length - 1] = r2;
      }
      return t2;
    }
    function eo(e2, t2, r2, n2, u2) {
      let i2 = t2.length;
      const o2 = [e2], a2 = [];
      for (; r2 >= 0; ) {
        if (o2.length === 0) {
          if (i2 === 0)
            return true;
          o2.push(t2[i2 - 1]), i2--;
          continue;
        }
        const [e3, c2, s2] = o2.pop();
        if (typeof s2 == "string")
          a2.push(s2), r2 -= _i(s2);
        else
          switch (s2.type) {
            case "concat":
              for (let t3 = s2.parts.length - 1; t3 >= 0; t3--)
                o2.push([e3, c2, s2.parts[t3]]);
              break;
            case "indent":
              o2.push([Zi(e3, n2), c2, s2.contents]);
              break;
            case "align":
              o2.push([Ji(e3, s2.n, n2), c2, s2.contents]);
              break;
            case "trim":
              r2 += Qi(a2);
              break;
            case "group":
              if (u2 && s2.break)
                return false;
              o2.push([e3, s2.break ? 1 : c2, s2.contents]), s2.id && (Yi[s2.id] = o2[o2.length - 1][1]);
              break;
            case "fill":
              for (let t3 = s2.parts.length - 1; t3 >= 0; t3--)
                o2.push([e3, c2, s2.parts[t3]]);
              break;
            case "if-break": {
              const t3 = s2.groupId ? Yi[s2.groupId] : c2;
              t3 === 1 && s2.breakContents && o2.push([e3, c2, s2.breakContents]), t3 === 2 && s2.flatContents && o2.push([e3, c2, s2.flatContents]);
              break;
            }
            case "line":
              switch (c2) {
                case 2:
                  if (!s2.hard) {
                    s2.soft || (a2.push(" "), r2 -= 1);
                    break;
                  }
                  return true;
                case 1:
                  return true;
              }
          }
      }
      return false;
    }
    var to = {printDocToString: function(e2, t2) {
      Yi = {};
      const r2 = t2.printWidth, n2 = $i(t2.endOfLine);
      let u2 = 0;
      const i2 = [[{value: "", length: 0, queue: []}, 1, e2]], o2 = [];
      let a2 = false, c2 = [];
      for (; i2.length !== 0; ) {
        const [e3, s3, l2] = i2.pop();
        if (typeof l2 == "string") {
          const e4 = n2 !== "\n" && l2.includes("\n") ? l2.replace(/\n/g, n2) : l2;
          o2.push(e4), u2 += _i(e4);
        } else
          switch (l2.type) {
            case "cursor":
              o2.push(Wi.placeholder);
              break;
            case "concat":
              for (let t3 = l2.parts.length - 1; t3 >= 0; t3--)
                i2.push([e3, s3, l2.parts[t3]]);
              break;
            case "indent":
              i2.push([Zi(e3, t2), s3, l2.contents]);
              break;
            case "align":
              i2.push([Ji(e3, l2.n, t2), s3, l2.contents]);
              break;
            case "trim":
              u2 -= Qi(o2);
              break;
            case "group":
              switch (s3) {
                case 2:
                  if (!a2) {
                    i2.push([e3, l2.break ? 1 : 2, l2.contents]);
                    break;
                  }
                case 1: {
                  a2 = false;
                  const n3 = [e3, 2, l2.contents], o3 = r2 - u2;
                  if (!l2.break && eo(n3, i2, o3, t2))
                    i2.push(n3);
                  else if (l2.expandedStates) {
                    const r3 = l2.expandedStates[l2.expandedStates.length - 1];
                    if (l2.break) {
                      i2.push([e3, 1, r3]);
                      break;
                    }
                    for (let n4 = 1; n4 < l2.expandedStates.length + 1; n4++) {
                      if (n4 >= l2.expandedStates.length) {
                        i2.push([e3, 1, r3]);
                        break;
                      }
                      {
                        const r4 = [e3, 2, l2.expandedStates[n4]];
                        if (eo(r4, i2, o3, t2)) {
                          i2.push(r4);
                          break;
                        }
                      }
                    }
                  } else
                    i2.push([e3, 1, l2.contents]);
                  break;
                }
              }
              l2.id && (Yi[l2.id] = i2[i2.length - 1][1]);
              break;
            case "fill": {
              const n3 = r2 - u2, {parts: o3} = l2;
              if (o3.length === 0)
                break;
              const [a3, c3] = o3, f2 = [e3, 2, a3], D2 = [e3, 1, a3], p2 = eo(f2, [], n3, t2, true);
              if (o3.length === 1) {
                p2 ? i2.push(f2) : i2.push(D2);
                break;
              }
              const d2 = [e3, 2, c3], h2 = [e3, 1, c3];
              if (o3.length === 2) {
                p2 ? (i2.push(d2), i2.push(f2)) : (i2.push(h2), i2.push(D2));
                break;
              }
              o3.splice(0, 2);
              const g2 = [e3, s3, Xi(o3)], m2 = o3[0];
              eo([e3, 2, Hi([a3, c3, m2])], [], n3, t2, true) ? (i2.push(g2), i2.push(d2), i2.push(f2)) : p2 ? (i2.push(g2), i2.push(h2), i2.push(f2)) : (i2.push(g2), i2.push(h2), i2.push(D2));
              break;
            }
            case "if-break": {
              const t3 = l2.groupId ? Yi[l2.groupId] : s3;
              t3 === 1 && l2.breakContents && i2.push([e3, s3, l2.breakContents]), t3 === 2 && l2.flatContents && i2.push([e3, s3, l2.flatContents]);
              break;
            }
            case "line-suffix":
              c2.push([e3, s3, l2.contents]);
              break;
            case "line-suffix-boundary":
              c2.length > 0 && i2.push([e3, s3, {type: "line", hard: true}]);
              break;
            case "line":
              switch (s3) {
                case 2:
                  if (!l2.hard) {
                    l2.soft || (o2.push(" "), u2 += 1);
                    break;
                  }
                  a2 = true;
                case 1:
                  if (c2.length) {
                    i2.push([e3, s3, l2]), i2.push(...c2.reverse()), c2 = [];
                    break;
                  }
                  l2.literal ? e3.root ? (o2.push(n2, e3.root.value), u2 = e3.root.length) : (o2.push(n2), u2 = 0) : (u2 -= Qi(o2), o2.push(n2 + e3.value), u2 = e3.length);
              }
          }
        i2.length === 0 && c2.length && (i2.push(...c2.reverse()), c2 = []);
      }
      const s2 = o2.indexOf(Wi.placeholder);
      if (s2 !== -1) {
        const e3 = o2.indexOf(Wi.placeholder, s2 + 1), t3 = o2.slice(0, s2).join(""), r3 = o2.slice(s2 + 1, e3).join("");
        return {formatted: t3 + r3 + o2.slice(e3 + 1).join(""), cursorNodeStart: t3.length, cursorNodeText: r3};
      }
      return {formatted: o2.join("")};
    }};
    const {literalline: ro, concat: no} = Iu, uo = {};
    function io(e2, t2, r2, n2) {
      const u2 = [e2];
      for (; u2.length !== 0; ) {
        const e3 = u2.pop();
        if (e3 !== uo) {
          if (r2 && u2.push(e3, uo), !t2 || t2(e3) !== false)
            if (e3.type === "concat" || e3.type === "fill")
              for (let t3 = e3.parts.length - 1; t3 >= 0; --t3)
                u2.push(e3.parts[t3]);
            else if (e3.type === "if-break")
              e3.flatContents && u2.push(e3.flatContents), e3.breakContents && u2.push(e3.breakContents);
            else if (e3.type === "group" && e3.expandedStates)
              if (n2)
                for (let t3 = e3.expandedStates.length - 1; t3 >= 0; --t3)
                  u2.push(e3.expandedStates[t3]);
              else
                u2.push(e3.contents);
            else
              e3.contents && u2.push(e3.contents);
        } else
          r2(u2.pop());
      }
    }
    function oo(e2, t2) {
      if (e2.type === "concat" || e2.type === "fill") {
        const r2 = e2.parts.map((e3) => oo(e3, t2));
        return t2(Object.assign({}, e2, {parts: r2}));
      }
      if (e2.type === "if-break") {
        const r2 = e2.breakContents && oo(e2.breakContents, t2), n2 = e2.flatContents && oo(e2.flatContents, t2);
        return t2(Object.assign({}, e2, {breakContents: r2, flatContents: n2}));
      }
      if (e2.contents) {
        const r2 = oo(e2.contents, t2);
        return t2(Object.assign({}, e2, {contents: r2}));
      }
      return t2(e2);
    }
    function ao(e2, t2, r2) {
      let n2 = r2, u2 = false;
      return io(e2, function(e3) {
        const r3 = t2(e3);
        if (r3 !== void 0 && (u2 = true, n2 = r3), u2)
          return false;
      }), n2;
    }
    function co(e2) {
      return typeof e2 != "string" && (e2.type === "line" || void 0);
    }
    function so(e2) {
      return !(e2.type !== "group" || !e2.break) || (!(e2.type !== "line" || !e2.hard) || (e2.type === "break-parent" || void 0));
    }
    function lo(e2) {
      if (e2.length > 0) {
        const t2 = e2[e2.length - 1];
        t2.expandedStates || (t2.break = true);
      }
      return null;
    }
    function fo(e2) {
      return e2.type !== "line" || e2.hard ? e2.type === "if-break" ? e2.flatContents || "" : e2 : e2.soft ? "" : " ";
    }
    function Do(e2) {
      const t2 = [], r2 = e2.filter(Boolean);
      for (; r2.length !== 0; ) {
        const e3 = r2.shift();
        e3 && (e3.type !== "concat" ? t2.length === 0 || typeof t2[t2.length - 1] != "string" || typeof e3 != "string" ? t2.push(e3) : t2[t2.length - 1] += e3 : r2.unshift(...e3.parts));
      }
      return t2;
    }
    function po(e2) {
      if (e2.type === "concat") {
        const t2 = [];
        for (let r2 = 0; r2 < e2.parts.length; ++r2) {
          const n2 = e2.parts[r2];
          if (typeof n2 != "string" && n2.type === "concat")
            t2.push(...po(n2).parts);
          else {
            const e3 = po(n2);
            e3 !== "" && t2.push(e3);
          }
        }
        return Object.assign({}, e2, {parts: t2});
      }
      return e2.type === "if-break" ? Object.assign({}, e2, {breakContents: e2.breakContents != null ? po(e2.breakContents) : null, flatContents: e2.flatContents != null ? po(e2.flatContents) : null}) : e2.type === "group" ? Object.assign({}, e2, {contents: po(e2.contents), expandedStates: e2.expandedStates ? e2.expandedStates.map(po) : e2.expandedStates}) : e2.contents ? Object.assign({}, e2, {contents: po(e2.contents)}) : e2;
    }
    function ho(e2) {
      if (typeof e2 == "string")
        return JSON.stringify(e2);
      if (e2.type === "line")
        return e2.literal ? "literalline" : e2.hard ? "hardline" : e2.soft ? "softline" : "line";
      if (e2.type === "break-parent")
        return "breakParent";
      if (e2.type === "trim")
        return "trim";
      if (e2.type === "concat")
        return "[" + e2.parts.map(ho).join(", ") + "]";
      if (e2.type === "indent")
        return "indent(" + ho(e2.contents) + ")";
      if (e2.type === "align")
        return e2.n === -1 / 0 ? "dedentToRoot(" + ho(e2.contents) + ")" : e2.n < 0 ? "dedent(" + ho(e2.contents) + ")" : e2.n.type === "root" ? "markAsRoot(" + ho(e2.contents) + ")" : "align(" + JSON.stringify(e2.n) + ", " + ho(e2.contents) + ")";
      if (e2.type === "if-break")
        return "ifBreak(" + ho(e2.breakContents) + (e2.flatContents ? ", " + ho(e2.flatContents) : "") + ")";
      if (e2.type === "group")
        return e2.expandedStates ? "conditionalGroup([" + e2.expandedStates.map(ho).join(",") + "])" : (e2.break ? "wrappedGroup" : "group") + "(" + ho(e2.contents) + ")";
      if (e2.type === "fill")
        return "fill(" + e2.parts.map(ho).join(", ") + ")";
      if (e2.type === "line-suffix")
        return "lineSuffix(" + ho(e2.contents) + ")";
      if (e2.type === "line-suffix-boundary")
        return "lineSuffixBoundary";
      throw new Error("Unknown doc type " + e2.type);
    }
    var go = {builders: Iu, printer: to, utils: {isEmpty: function(e2) {
      return typeof e2 == "string" && e2.length === 0;
    }, willBreak: function(e2) {
      return ao(e2, so, false);
    }, isLineNext: function(e2) {
      return ao(e2, co, false);
    }, traverseDoc: io, findInDoc: ao, mapDoc: oo, propagateBreaks: function(e2) {
      const t2 = new Set(), r2 = [];
      io(e2, function(e3) {
        if (e3.type === "break-parent" && lo(r2), e3.type === "group") {
          if (r2.push(e3), t2.has(e3))
            return false;
          t2.add(e3);
        }
      }, function(e3) {
        if (e3.type === "group") {
          r2.pop().break && lo(r2);
        }
      }, true);
    }, removeLines: function(e2) {
      return oo(e2, fo);
    }, stripTrailingHardline: function e2(t2, r2 = false) {
      if (t2.type === "concat" && t2.parts.length !== 0) {
        const n2 = r2 ? function(e3) {
          let t3, {parts: r3} = e3;
          for (let n3 = e3.parts.length; n3 > 0 && !t3; n3--)
            t3 = r3[n3 - 1];
          return t3.type === "group" && (r3 = t3.contents.parts), r3;
        }(t2) : t2.parts, u2 = n2[n2.length - 1];
        if (u2.type === "concat")
          return u2.parts.length === 2 && u2.parts[0].hard && u2.parts[1].type === "break-parent" ? {type: "concat", parts: n2.slice(0, -1)} : {type: "concat", parts: t2.parts.slice(0, -1).concat(e2(u2))};
      }
      return t2;
    }, normalizeParts: Do, normalizeDoc: function(e2) {
      return oo(e2, (e3) => e3.parts ? Object.assign({}, e3, {parts: Do(e3.parts)}) : e3);
    }, replaceNewlinesWithLiterallines: function(e2) {
      return oo(e2, (e3) => typeof e3 == "string" && e3.includes("\n") ? no(e3.split(/(\n)/g).map((e4, t2) => t2 % 2 == 0 ? e4 : ro)) : e3);
    }}, debug: {printDocToDebug: (e2) => ho(po(e2))}};
    const {builders: {hardline: mo, concat: Eo, markAsRoot: Co}} = go, bo = {"---": "yaml", "+++": "toml"};
    var vo = {parse: function(e2) {
      const t2 = Object.keys(bo).map(ku).join("|"), r2 = e2.match(new RegExp("^(".concat(t2, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
      if (r2 === null)
        return {frontMatter: null, content: e2};
      const [n2, u2, i2, o2] = r2;
      let a2 = bo[u2];
      return a2 !== "toml" && i2 && i2.trim() && (a2 = i2.trim()), {frontMatter: {type: "front-matter", lang: a2, value: o2, raw: n2.replace(/\n$/, "")}, content: n2.replace(/[^\n]/g, " ") + e2.slice(n2.length)};
    }, print: function(e2, t2) {
      if (e2.lang === "yaml") {
        const r2 = e2.value.trim(), n2 = r2 ? t2(r2, {parser: "yaml"}, {stripTrailingHardline: true}) : "";
        return Co(Eo(["---", mo, n2, n2 ? mo : "", "---"]));
      }
    }};
    const {parse: Fo} = vo, Ao = ["format", "prettier"];
    function yo(e2) {
      const t2 = "@(".concat(Ao.join("|"), ")"), r2 = new RegExp(["<!--\\s*".concat(t2, "\\s*-->"), "<!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t2, "[^\\S\n]*($|\n)[\\s\\S]*\n.*-->")].join("|"), "m"), n2 = e2.match(r2);
      return n2 && n2.index === 0;
    }
    var wo = {startWithPragma: yo, hasPragma: (e2) => yo(Fo(e2).content.trimStart()), insertPragma: (e2) => {
      const t2 = Fo(e2), r2 = "<!-- @".concat(Ao[0], " -->");
      return t2.frontMatter ? "".concat(t2.frontMatter.raw, "\n\n").concat(r2, "\n\n").concat(t2.content) : "".concat(r2, "\n\n").concat(t2.content);
    }};
    var ko = {locStart: function(e2) {
      return e2.position.start.offset;
    }, locEnd: function(e2) {
      return e2.position.end.offset;
    }};
    const {getLast: xo} = Gi, {locStart: Oo, locEnd: Lo} = ko, {cjkPattern: Bo, kPattern: To, punctuationPattern: No} = {cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]"}, So = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], Io = So.concat(["tableCell", "paragraph", "heading"]), Ro = new RegExp(To), qo = new RegExp(No);
    function Po(e2, t2) {
      const [, r2, n2, u2] = t2.slice(e2.position.start.offset, e2.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
      return {numberText: r2, marker: n2, leadingSpaces: u2};
    }
    var jo = {mapAst: function(e2, t2) {
      return function e3(r2, n2, u2) {
        u2 = u2 || [];
        const i2 = Object.assign({}, t2(r2, n2, u2));
        return i2.children && (i2.children = i2.children.map((t3, r3) => e3(t3, r3, [i2].concat(u2)))), i2;
      }(e2, null, null);
    }, splitText: function(e2, t2) {
      const r2 = "non-cjk", n2 = "cj-letter", u2 = "cjk-punctuation", i2 = [];
      return (t2.proseWrap === "preserve" ? e2 : e2.replace(new RegExp("(".concat(Bo, ")\n(").concat(Bo, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach((e3, t3, a2) => {
        t3 % 2 != 1 ? (t3 !== 0 && t3 !== a2.length - 1 || e3 !== "") && e3.split(new RegExp("(".concat(Bo, ")"))).forEach((e4, t4, i3) => {
          (t4 !== 0 && t4 !== i3.length - 1 || e4 !== "") && (t4 % 2 != 0 ? o2(qo.test(e4) ? {type: "word", value: e4, kind: u2, hasLeadingPunctuation: true, hasTrailingPunctuation: true} : {type: "word", value: e4, kind: Ro.test(e4) ? "k-letter" : n2, hasLeadingPunctuation: false, hasTrailingPunctuation: false}) : e4 !== "" && o2({type: "word", value: e4, kind: r2, hasLeadingPunctuation: qo.test(e4[0]), hasTrailingPunctuation: qo.test(xo(e4))}));
        }) : i2.push({type: "whitespace", value: /\n/.test(e3) ? "\n" : " "});
      }), i2;
      function o2(e3) {
        const t3 = xo(i2);
        var o3, a2;
        t3 && t3.type === "word" && (t3.kind === r2 && e3.kind === n2 && !t3.hasTrailingPunctuation || t3.kind === n2 && e3.kind === r2 && !e3.hasLeadingPunctuation ? i2.push({type: "whitespace", value: " "}) : (o3 = r2, a2 = u2, t3.kind === o3 && e3.kind === a2 || t3.kind === a2 && e3.kind === o3 || [t3.value, e3.value].some((e4) => /\u3000/.test(e4)) || i2.push({type: "whitespace", value: ""}))), i2.push(e3);
      }
    }, punctuationPattern: No, getFencedCodeBlockValue: function(e2, t2) {
      const {value: r2} = e2;
      return e2.position.end.offset === t2.length && r2.endsWith("\n") && t2.endsWith("\n") ? r2.slice(0, -1) : r2;
    }, getOrderedListItemInfo: Po, hasGitDiffFriendlyOrderedList: function(e2, t2) {
      if (!e2.ordered)
        return false;
      if (e2.children.length < 2)
        return false;
      const r2 = Number(Po(e2.children[0], t2.originalText).numberText), n2 = Number(Po(e2.children[1], t2.originalText).numberText);
      if (r2 === 0 && e2.children.length > 2) {
        const r3 = Number(Po(e2.children[2], t2.originalText).numberText);
        return n2 === 1 && r3 === 1;
      }
      return n2 === 1;
    }, INLINE_NODE_TYPES: So, INLINE_NODE_WRAPPER_TYPES: Io, isAutolink: function(e2) {
      if (!e2 || e2.type !== "link" || e2.children.length !== 1)
        return false;
      const t2 = e2.children[0];
      return t2 && Oo(e2) === Oo(t2) && Lo(e2) === Lo(t2);
    }};
    const zo = /^import\s/, Uo = /^export\s/, Mo = (e2) => zo.test(e2), Go = (e2) => Uo.test(e2), Vo = (e2, t2) => {
      const r2 = t2.indexOf("\n\n"), n2 = t2.slice(0, r2);
      if (Go(n2) || Mo(n2))
        return e2(n2)({type: Go(n2) ? "export" : "import", value: n2});
    };
    Vo.locator = (e2) => Go(e2) || Mo(e2) ? -1 : 1;
    var _o = {esSyntax: function() {
      const {Parser: e2} = this, t2 = e2.prototype.blockTokenizers, r2 = e2.prototype.blockMethods;
      t2.esSyntax = Vo, r2.splice(r2.indexOf("paragraph"), 0, "esSyntax");
    }, BLOCKS_REGEX: "[a-z][a-z0-9]*(\\.[a-z][a-z0-9]*)*|", COMMENT_REGEX: "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->"};
    const {parse: $o} = vo, {locStart: Ho, locEnd: Xo} = ko, {mapAst: Wo, INLINE_NODE_WRAPPER_TYPES: Yo} = jo;
    function Zo({isMDX: e2}) {
      return (t2) => {
        const r2 = Zn().use(Ir, Object.assign({commonmark: true}, e2 && {blocks: [_o.BLOCKS_REGEX]})).use(mu).use(Qo).use(gu).use(e2 ? _o.esSyntax : Jo).use(ea).use(e2 ? Ko : Jo).use(ta).use(ra);
        return r2.runSync(r2.parse(t2));
      };
    }
    function Jo(e2) {
      return e2;
    }
    function Ko() {
      return (e2) => Wo(e2, (e3, t2, [r2]) => e3.type !== "html" || e3.value.match(_o.COMMENT_REGEX) || Yo.includes(r2.type) ? e3 : Object.assign({}, e3, {type: "jsx"}));
    }
    function Qo() {
      const e2 = this.Parser.prototype;
      function t2(e3, t3) {
        const r2 = $o(t3);
        if (r2.frontMatter)
          return e3(r2.frontMatter.raw)(r2.frontMatter);
      }
      e2.blockMethods = ["frontMatter"].concat(e2.blockMethods), e2.blockTokenizers.frontMatter = t2, t2.onlyAtStart = true;
    }
    function ea() {
      const e2 = this.Parser.prototype, t2 = e2.inlineMethods;
      function r2(e3, t3) {
        const r3 = t3.match(/^({%[\S\s]*?%}|{{[\S\s]*?}})/);
        if (r3)
          return e3(r3[0])({type: "liquidNode", value: r3[0]});
      }
      t2.splice(t2.indexOf("text"), 0, "liquid"), e2.inlineTokenizers.liquid = r2, r2.locator = function(e3, t3) {
        return e3.indexOf("{", t3);
      };
    }
    function ta() {
      const e2 = "wikiLink", t2 = /^\[\[(?<linkContents>.+?)]]/s, r2 = this.Parser.prototype, n2 = r2.inlineMethods;
      function u2(r3, n3) {
        const u3 = t2.exec(n3);
        if (u3) {
          const t3 = u3.groups.linkContents.trim();
          return r3(u3[0])({type: e2, value: t3});
        }
      }
      n2.splice(n2.indexOf("link"), 0, e2), r2.inlineTokenizers.wikiLink = u2, u2.locator = function(e3, t3) {
        return e3.indexOf("[", t3);
      };
    }
    function ra() {
      const e2 = this.Parser.prototype, t2 = e2.blockTokenizers.list;
      function r2(e3, t3, r3) {
        return t3.type === "listItem" && (t3.loose = t3.spread || e3.charAt(e3.length - 1) === "\n", t3.loose && (r3.loose = true)), t3;
      }
      e2.blockTokenizers.list = function(e3, n2, u2) {
        function i2(t3) {
          const n3 = e3(t3);
          function u3(e4, u4) {
            return n3(r2(t3, e4, u4), u4);
          }
          return u3.reset = function(e4, u4) {
            return n3.reset(r2(t3, e4, u4), u4);
          }, u3;
        }
        return i2.now = e3.now, t2.call(this, i2, n2, u2);
      };
    }
    const na = {astFormat: "mdast", hasPragma: wo.hasPragma, locStart: Ho, locEnd: Xo}, ua = Object.assign({}, na, {parse: Zo({isMDX: false})});
    return {parsers: {remark: ua, markdown: ua, mdx: Object.assign({}, na, {parse: Zo({isMDX: true})})}};
  });
});

// src/main.ts
__markAsModule(exports);
__export(exports, {
  default: () => main_default
});
var import_obsidian = __toModule(require("obsidian"));
var prettier = __toModule(require_standalone());
var import_parser_markdown = __toModule(require_parser_markdown());
var positionToCursorOffset = (code, {line, ch}) => {
  return code.split("\n").reduce((pos, currLine, index) => {
    if (index < line) {
      return pos + currLine.length + 1;
    }
    if (index === line) {
      return pos + ch;
    }
    return pos;
  }, 0);
};
var cursorOffsetToPosition = (code, cursorOffset) => {
  const substring = code.slice(0, cursorOffset);
  const line = substring.split("\n").length - 1;
  const indexOfLastLine = substring.lastIndexOf("\n");
  return {
    line,
    ch: cursorOffset - indexOfLastLine - 1
  };
};
var PrettierFormatSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const {containerEl} = this;
    containerEl.empty();
    containerEl.createEl("h2", {text: "Prettier Format - Settings"});
    new import_obsidian.Setting(containerEl).setName("Format on Save").setDesc("If enabled, format the current note when you save the file via hotkey").addToggle((toggle) => toggle.setValue(this.plugin.settings.formatOnSave || false).onChange((value) => {
      this.plugin.settings.formatOnSave = value;
      this.plugin.saveData(this.plugin.settings);
      this.display();
    }));
  }
};
var fixListItemIndent = (text) => {
  return text.replace(/^([ ]*)[-*][ ]+/gm, "$1- ");
};
var PrettierPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = {};
    this.getPrettierSettings = (cm) => {
      const tabWidth = cm.getOption("tabSize") || 4;
      const useTabs = cm.getOption("indentWithTabs") ?? true;
      return {tabWidth, useTabs};
    };
    this.formatAll = () => {
      const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (activeView) {
        const editor = activeView.sourceMode.cmEditor;
        const text = editor.getValue();
        const cursor = editor.getCursor();
        const position = positionToCursorOffset(text, cursor);
        const {
          formatted: rawFormatted,
          cursorOffset
        } = prettier.formatWithCursor(text, {
          parser: "markdown",
          plugins: [import_parser_markdown.default],
          cursorOffset: position,
          ...this.getPrettierSettings(editor)
        });
        const formatted = fixListItemIndent(rawFormatted);
        if (formatted === text) {
          return;
        }
        editor.setValue(formatted);
        editor.setCursor(cursorOffsetToPosition(formatted, cursorOffset));
        const {left, top} = editor.getScrollInfo();
        editor.scrollTo(left, top);
      }
    };
  }
  async onload() {
    console.log("Load Prettier Format plugin");
    this.settings = {
      ...await this.loadData()
    };
    this.addCommand({
      id: "format-note",
      name: "Format the entire note",
      callback: this.formatAll
    });
    this.addCommand({
      id: "format-selection",
      name: "Format the just the selection in the note",
      callback: () => {
        const activeView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (activeView) {
          const editor = activeView.sourceMode.cmEditor;
          const text = editor.getSelection();
          const formatted = fixListItemIndent(prettier.format(text, {
            parser: "markdown",
            plugins: [import_parser_markdown.default],
            ...this.getPrettierSettings(editor)
          }));
          if (formatted === text) {
            return;
          }
          editor.replaceSelection(formatted);
        }
      }
    });
    this.addSettingTab(new PrettierFormatSettingsTab(this.app, this));
    const saveCommandDefinition = this.app.commands?.commands?.["editor:save-file"];
    const save = saveCommandDefinition?.callback;
    if (typeof save === "function") {
      saveCommandDefinition.callback = () => {
        if (this.settings.formatOnSave) {
          this.formatAll();
        }
        save();
      };
    }
  }
};
var main_default = PrettierPlugin;
