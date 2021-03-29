'use strict';

var obsidian = require('obsidian');

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Provider = /** @class */ (function () {
    function Provider() {
    }
    Provider.prototype.matchWith = function (input) {
        var _this = this;
        var inputLowered = input.toLowerCase();
        var inputHasUpperCase = /[A-Z]/.test(input);
        // case-sensitive logic if input has an upper case.
        // Otherwise, uses case-insensitive logic
        var suggestions = this.completions
            .filter(function (suggestion) {
            return suggestion != input
                ? inputHasUpperCase
                    ? suggestion.includes(input)
                    : suggestion.toLowerCase().includes(inputLowered)
                : false;
        })
            .sort(function (a, b) { return a.localeCompare(b); })
            .sort(function (a, b) {
            return Number(b.toLowerCase().startsWith(inputLowered)) -
                Number(a.toLowerCase().startsWith(inputLowered));
        })
            .map(function (suggestion) {
            return { category: _this.category, value: suggestion };
        });
        return suggestions;
    };
    Provider.wordSeparatorRegex = /(\.|,|;|:|'|"|!|\?|-|\)|\]|\}|\/| |Enter)/g;
    Provider.placeholder = '#{}';
    return Provider;
}());

function defaultDirection() {
    return { index: 0, direction: 'still' };
}
function managePlaceholders(selectedValue, initialCursorIndex) {
    var normalizedValue;
    var placeholder = Provider.placeholder;
    var newCursorPosition = initialCursorIndex;
    var placeholderIndex = selectedValue.indexOf(placeholder);
    if (placeholderIndex > -1) {
        // TODO: Manage multiple placeholders
        var placeholderRegex = new RegExp(placeholder, 'g');
        normalizedValue = selectedValue.replace(placeholderRegex, '');
        newCursorPosition += placeholderIndex;
    }
    else {
        normalizedValue = selectedValue;
        newCursorPosition += selectedValue.length;
    }
    return { normalizedValue: normalizedValue, newCursorPosition: newCursorPosition };
}
function updateSelectedSuggestionFrom(event, selected, suggestionsLength) {
    var updatedSelected = selected;
    switch (event.ctrlKey + " " + event.key) {
        case 'true p':
        case 'false ArrowUp':
            var decreased = selected.index - 1;
            updatedSelected = {
                index: decreased < 0 ? suggestionsLength - 1 : decreased,
                direction: 'backward',
            };
            break;
        case 'true n':
        case 'false ArrowDown':
            var increased = selected.index + 1;
            updatedSelected = {
                index: increased >= suggestionsLength ? 0 : increased,
                direction: 'forward',
            };
            break;
    }
    return updatedSelected;
}
function copyObject(obj) {
    return __assign({}, obj);
}

function generateView(suggestions, selectedIndex) {
    var suggestionsHtml = suggestions.map(function (tip, index) {
        var isSelected = selectedIndex === index;
        return "\n        <div id=\"suggestion-" + index + "\" class=\"no-space-wrap suggestion-item" + (isSelected ? ' is-selected' : '') + "\">\n          <div id=\"suggestion-" + index + "\" class=\"suggestion-content\">\n          <span class=\"suggestion-flair\">" + tip.category + "</span>\n          " + tip.value + "\n          </div>\n        </div>\n      ";
    }, []);
    var suggestionsJoined = suggestionsHtml.join('\n');
    var viewString = "\n      <div id=\"suggestion-list\" class=\"suggestion\">\n        " + (suggestionsJoined.length > 0
        ? suggestionsJoined
        : '<div class="no-suggestions">No match found</div>') + "\n      </div>\n      <div class=\"prompt-instructions\">\n        <div class=\"prompt-instruction\">\n          <span class=\"prompt-instruction-command\">Ctrl+N /\u2191 </span>\n          <span>Next Suggestion</span>\n        </div>\n        <div class=\"prompt-instruction\">\n          <span class=\"prompt-instruction-command\">Ctrl+P /\u2193 </span>\n          <span>Previous Suggestion</span>\n        </div>\n        <div class=\"prompt-instruction\">\n          <span class=\"prompt-instruction-command\">Enter</span>\n          <span>Select Suggestion</span>\n        </div>\n      </div>\n    ";
    var containerNode = document.createElement('div');
    containerNode.classList.add('suggestion-container');
    containerNode.insertAdjacentHTML('beforeend', viewString);
    return containerNode;
}
function updateCachedView(view, selectedIndex) {
    var _a;
    var children = (_a = view.firstElementChild) === null || _a === void 0 ? void 0 : _a.children;
    if (!children)
        return;
    for (var index = 0; index < children.length; index++) {
        var child = children[index];
        child.toggleClass('is-selected', index === selectedIndex);
    }
}
function scrollTo(selected, view, suggestionsLength) {
    if (!view || suggestionsLength === 0)
        return;
    // TODO: Improve scrolling with page size and boundaries
    var parent = view.children[0];
    var selectedIndex = selected.index;
    var child = parent.children[0];
    if (child) {
        var scrollAmount = child.scrollHeight * selectedIndex;
        switch (selected.direction) {
            case 'forward':
                if (selectedIndex === 0)
                    // End -> Start
                    parent.scrollTop = 0;
                else
                    parent.scrollTop = scrollAmount;
                break;
            case 'backward':
                if (selectedIndex === suggestionsLength - 1)
                    // End <- Start
                    parent.scrollTop = parent.scrollHeight;
                else
                    parent.scrollTop = scrollAmount;
                break;
        }
    }
}
function appendWidget(editor, view, scrollable) {
    if (scrollable === void 0) { scrollable = true; }
    var cursor = editor.getCursor();
    editor.addWidget({ ch: cursor.ch, line: cursor.line }, view, scrollable);
}

var TOKENIZE_STRATEGIES = [
    'default',
    'japanese',
    'arabic',
];
var Tokenizer = /** @class */ (function () {
    function Tokenizer() {
        this.wordSeparatorPattern = /[\[\]()<>"'.,|:; `!?\/]/;
        // NOTE: global flag takes note of lastIndex used!
        this.trimPattern = new RegExp(this.wordSeparatorPattern, 'g');
    }
    Tokenizer.prototype.lastWordStartPos = function (text, index, options) {
        if (options === void 0) { options = { normalize: false }; }
        var _a = options.normalize
            ? this.normalizedLine(text, index)
            : { normalized: text, updatedCursor: index }, normalized = _a.normalized, updatedCursor = _a.updatedCursor;
        var wordStartIndex = updatedCursor;
        while (wordStartIndex &&
            !this.isWordSeparator(normalized.charAt(wordStartIndex - 1)))
            wordStartIndex -= 1;
        return wordStartIndex;
    };
    Tokenizer.prototype.lastWordFrom = function (text, cursorIndex, options) {
        if (options === void 0) { options = { normalize: false }; }
        var _a = options.normalize
            ? this.normalizedLine(text, cursorIndex)
            : { normalized: text, updatedCursor: cursorIndex }, normalized = _a.normalized, updatedCursor = _a.updatedCursor;
        if (options.normalize)
            // Already normalized
            options.normalize = false;
        var wordStartIndex = this.lastWordStartPos(normalized, updatedCursor, options);
        var word = null;
        if (wordStartIndex !== updatedCursor)
            word = text.slice(wordStartIndex, updatedCursor);
        return word;
    };
    Tokenizer.prototype.isWordSeparator = function (char) {
        return this.wordSeparatorPattern.test(char);
    };
    /*
     * Remove spaces and word separators
     * near the left of the cursorIndex
     */
    Tokenizer.prototype.normalizedLine = function (line, cursorIndex) {
        var partialLine = line.slice(0, cursorIndex);
        var normalized = partialLine.trimEnd();
        // Subtract how many spaces removed
        var updatedCursor = cursorIndex - (partialLine.length - normalized.length);
        if (normalized.length === 0)
            return { normalized: '', updatedCursor: 0 };
        var lastChar = normalized.charAt(updatedCursor - 1);
        if (this.isWordSeparator(lastChar)) {
            updatedCursor -= 1;
            normalized = normalized.slice(0, updatedCursor);
        }
        return { normalized: normalized, updatedCursor: updatedCursor };
    };
    return Tokenizer;
}());

var DefaultTokenizer = /** @class */ (function (_super) {
    __extends(DefaultTokenizer, _super);
    function DefaultTokenizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultTokenizer.prototype.tokenize = function (text, range) {
        var _this = this;
        var tokens = text
            .slice(range === null || range === void 0 ? void 0 : range.start, range === null || range === void 0 ? void 0 : range.end)
            .split('\n')
            .flatMap(function (line) { return line.split(_this.trimPattern); })
            .filter(function (t) { return t.length > 0; });
        return { range: range, tokens: tokens };
    };
    return DefaultTokenizer;
}(Tokenizer));

var ArabicTokenizer = /** @class */ (function (_super) {
    __extends(ArabicTokenizer, _super);
    function ArabicTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wordSeparatorPattern = /[\[\]()<>"'.,|; `!?،؛]/;
        return _this;
    }
    return ArabicTokenizer;
}(DefaultTokenizer));

// @ts-nocheck
// Because this code is originally javascript code.
// TinySegmenter 0.1 -- Super compact Japanese tokenizer in Javascript
// (c) 2008 Taku Kudo <taku@chasen.org>
// TinySegmenter is freely distributable under the terms of a new BSD licence.
// For details, see http://chasen.org/~taku/software/TinySegmenter/LICENCE.txt
function TinySegmenter() {
    var patterns = {
        '[一二三四五六七八九十百千万億兆]': 'M',
        '[一-龠々〆ヵヶ]': 'H',
        '[ぁ-ん]': 'I',
        '[ァ-ヴーｱ-ﾝﾞｰ]': 'K',
        '[a-zA-Zａ-ｚＡ-Ｚ]': 'A',
        '[0-9０-９]': 'N',
    };
    this.chartype_ = [];
    for (var i in patterns) {
        var regexp = new RegExp();
        regexp.compile(i);
        this.chartype_.push([regexp, patterns[i]]);
    }
    this.BIAS__ = -332;
    this.BC1__ = { HH: 6, II: 2461, KH: 406, OH: -1378 };
    this.BC2__ = {
        AA: -3267,
        AI: 2744,
        AN: -878,
        HH: -4070,
        HM: -1711,
        HN: 4012,
        HO: 3761,
        IA: 1327,
        IH: -1184,
        II: -1332,
        IK: 1721,
        IO: 5492,
        KI: 3831,
        KK: -8741,
        MH: -3132,
        MK: 3334,
        OO: -2920,
    };
    this.BC3__ = {
        HH: 996,
        HI: 626,
        HK: -721,
        HN: -1307,
        HO: -836,
        IH: -301,
        KK: 2762,
        MK: 1079,
        MM: 4034,
        OA: -1652,
        OH: 266,
    };
    this.BP1__ = { BB: 295, OB: 304, OO: -125, UB: 352 };
    this.BP2__ = { BO: 60, OO: -1762 };
    this.BQ1__ = {
        BHH: 1150,
        BHM: 1521,
        BII: -1158,
        BIM: 886,
        BMH: 1208,
        BNH: 449,
        BOH: -91,
        BOO: -2597,
        OHI: 451,
        OIH: -296,
        OKA: 1851,
        OKH: -1020,
        OKK: 904,
        OOO: 2965,
    };
    this.BQ2__ = {
        BHH: 118,
        BHI: -1159,
        BHM: 466,
        BIH: -919,
        BKK: -1720,
        BKO: 864,
        OHH: -1139,
        OHM: -181,
        OIH: 153,
        UHI: -1146,
    };
    this.BQ3__ = {
        BHH: -792,
        BHI: 2664,
        BII: -299,
        BKI: 419,
        BMH: 937,
        BMM: 8335,
        BNN: 998,
        BOH: 775,
        OHH: 2174,
        OHM: 439,
        OII: 280,
        OKH: 1798,
        OKI: -793,
        OKO: -2242,
        OMH: -2402,
        OOO: 11699,
    };
    this.BQ4__ = {
        BHH: -3895,
        BIH: 3761,
        BII: -4654,
        BIK: 1348,
        BKK: -1806,
        BMI: -3385,
        BOO: -12396,
        OAH: 926,
        OHH: 266,
        OHK: -2036,
        ONN: -973,
    };
    this.BW1__ = {
        ',と': 660,
        ',同': 727,
        B1あ: 1404,
        B1同: 542,
        '、と': 660,
        '、同': 727,
        '」と': 1682,
        あっ: 1505,
        いう: 1743,
        いっ: -2055,
        いる: 672,
        うし: -4817,
        うん: 665,
        から: 3472,
        がら: 600,
        こう: -790,
        こと: 2083,
        こん: -1262,
        さら: -4143,
        さん: 4573,
        した: 2641,
        して: 1104,
        すで: -3399,
        そこ: 1977,
        それ: -871,
        たち: 1122,
        ため: 601,
        った: 3463,
        つい: -802,
        てい: 805,
        てき: 1249,
        でき: 1127,
        です: 3445,
        では: 844,
        とい: -4915,
        とみ: 1922,
        どこ: 3887,
        ない: 5713,
        なっ: 3015,
        など: 7379,
        なん: -1113,
        にし: 2468,
        には: 1498,
        にも: 1671,
        に対: -912,
        の一: -501,
        の中: 741,
        ませ: 2448,
        まで: 1711,
        まま: 2600,
        まる: -2155,
        やむ: -1947,
        よっ: -2565,
        れた: 2369,
        れで: -913,
        をし: 1860,
        を見: 731,
        亡く: -1886,
        京都: 2558,
        取り: -2784,
        大き: -2604,
        大阪: 1497,
        平方: -2314,
        引き: -1336,
        日本: -195,
        本当: -2423,
        毎日: -2113,
        目指: -724,
        Ｂ１あ: 1404,
        Ｂ１同: 542,
        '｣と': 1682,
    };
    this.BW2__ = {
        '..': -11822,
        11: -669,
        '――': -5730,
        '−−': -13175,
        いう: -1609,
        うか: 2490,
        かし: -1350,
        かも: -602,
        から: -7194,
        かれ: 4612,
        がい: 853,
        がら: -3198,
        きた: 1941,
        くな: -1597,
        こと: -8392,
        この: -4193,
        させ: 4533,
        され: 13168,
        さん: -3977,
        しい: -1819,
        しか: -545,
        した: 5078,
        して: 972,
        しな: 939,
        その: -3744,
        たい: -1253,
        たた: -662,
        ただ: -3857,
        たち: -786,
        たと: 1224,
        たは: -939,
        った: 4589,
        って: 1647,
        っと: -2094,
        てい: 6144,
        てき: 3640,
        てく: 2551,
        ては: -3110,
        ても: -3065,
        でい: 2666,
        でき: -1528,
        でし: -3828,
        です: -4761,
        でも: -4203,
        とい: 1890,
        とこ: -1746,
        とと: -2279,
        との: 720,
        とみ: 5168,
        とも: -3941,
        ない: -2488,
        なが: -1313,
        など: -6509,
        なの: 2614,
        なん: 3099,
        にお: -1615,
        にし: 2748,
        にな: 2454,
        によ: -7236,
        に対: -14943,
        に従: -4688,
        に関: -11388,
        のか: 2093,
        ので: -7059,
        のに: -6041,
        のの: -6125,
        はい: 1073,
        はが: -1033,
        はず: -2532,
        ばれ: 1813,
        まし: -1316,
        まで: -6621,
        まれ: 5409,
        めて: -3153,
        もい: 2230,
        もの: -10713,
        らか: -944,
        らし: -1611,
        らに: -1897,
        りし: 651,
        りま: 1620,
        れた: 4270,
        れて: 849,
        れば: 4114,
        ろう: 6067,
        われ: 7901,
        を通: -11877,
        んだ: 728,
        んな: -4115,
        一人: 602,
        一方: -1375,
        一日: 970,
        一部: -1051,
        上が: -4479,
        会社: -1116,
        出て: 2163,
        分の: -7758,
        同党: 970,
        同日: -913,
        大阪: -2471,
        委員: -1250,
        少な: -1050,
        年度: -8669,
        年間: -1626,
        府県: -2363,
        手権: -1982,
        新聞: -4066,
        日新: -722,
        日本: -7068,
        日米: 3372,
        曜日: -601,
        朝鮮: -2355,
        本人: -2697,
        東京: -1543,
        然と: -1384,
        社会: -1276,
        立て: -990,
        第に: -1612,
        米国: -4268,
        '１１': -669,
    };
    this.BW3__ = {
        あた: -2194,
        あり: 719,
        ある: 3846,
        'い.': -1185,
        'い。': -1185,
        いい: 5308,
        いえ: 2079,
        いく: 3029,
        いた: 2056,
        いっ: 1883,
        いる: 5600,
        いわ: 1527,
        うち: 1117,
        うと: 4798,
        えと: 1454,
        'か.': 2857,
        'か。': 2857,
        かけ: -743,
        かっ: -4098,
        かに: -669,
        から: 6520,
        かり: -2670,
        'が,': 1816,
        'が、': 1816,
        がき: -4855,
        がけ: -1127,
        がっ: -913,
        がら: -4977,
        がり: -2064,
        きた: 1645,
        けど: 1374,
        こと: 7397,
        この: 1542,
        ころ: -2757,
        さい: -714,
        さを: 976,
        'し,': 1557,
        'し、': 1557,
        しい: -3714,
        した: 3562,
        して: 1449,
        しな: 2608,
        しま: 1200,
        'す.': -1310,
        'す。': -1310,
        する: 6521,
        'ず,': 3426,
        'ず、': 3426,
        ずに: 841,
        そう: 428,
        'た.': 8875,
        'た。': 8875,
        たい: -594,
        たの: 812,
        たり: -1183,
        たる: -853,
        'だ.': 4098,
        'だ。': 4098,
        だっ: 1004,
        った: -4748,
        って: 300,
        てい: 6240,
        てお: 855,
        ても: 302,
        です: 1437,
        でに: -1482,
        では: 2295,
        とう: -1387,
        とし: 2266,
        との: 541,
        とも: -3543,
        どう: 4664,
        ない: 1796,
        なく: -903,
        など: 2135,
        'に,': -1021,
        'に、': -1021,
        にし: 1771,
        にな: 1906,
        には: 2644,
        'の,': -724,
        'の、': -724,
        の子: -1000,
        'は,': 1337,
        'は、': 1337,
        べき: 2181,
        まし: 1113,
        ます: 6943,
        まっ: -1549,
        まで: 6154,
        まれ: -793,
        らし: 1479,
        られ: 6820,
        るる: 3818,
        'れ,': 854,
        'れ、': 854,
        れた: 1850,
        れて: 1375,
        れば: -3246,
        れる: 1091,
        われ: -605,
        んだ: 606,
        んで: 798,
        カ月: 990,
        会議: 860,
        入り: 1232,
        大会: 2217,
        始め: 1681,
        市: 965,
        新聞: -5055,
        '日,': 974,
        '日、': 974,
        社会: 2024,
        ｶ月: 990,
    };
    this.TC1__ = {
        AAA: 1093,
        HHH: 1029,
        HHM: 580,
        HII: 998,
        HOH: -390,
        HOM: -331,
        IHI: 1169,
        IOH: -142,
        IOI: -1015,
        IOM: 467,
        MMH: 187,
        OOI: -1832,
    };
    this.TC2__ = {
        HHO: 2088,
        HII: -1023,
        HMM: -1154,
        IHI: -1965,
        KKH: 703,
        OII: -2649,
    };
    this.TC3__ = {
        AAA: -294,
        HHH: 346,
        HHI: -341,
        HII: -1088,
        HIK: 731,
        HOH: -1486,
        IHH: 128,
        IHI: -3041,
        IHO: -1935,
        IIH: -825,
        IIM: -1035,
        IOI: -542,
        KHH: -1216,
        KKA: 491,
        KKH: -1217,
        KOK: -1009,
        MHH: -2694,
        MHM: -457,
        MHO: 123,
        MMH: -471,
        NNH: -1689,
        NNO: 662,
        OHO: -3393,
    };
    this.TC4__ = {
        HHH: -203,
        HHI: 1344,
        HHK: 365,
        HHM: -122,
        HHN: 182,
        HHO: 669,
        HIH: 804,
        HII: 679,
        HOH: 446,
        IHH: 695,
        IHO: -2324,
        IIH: 321,
        III: 1497,
        IIO: 656,
        IOO: 54,
        KAK: 4845,
        KKA: 3386,
        KKK: 3065,
        MHH: -405,
        MHI: 201,
        MMH: -241,
        MMM: 661,
        MOM: 841,
    };
    this.TQ1__ = {
        BHHH: -227,
        BHHI: 316,
        BHIH: -132,
        BIHH: 60,
        BIII: 1595,
        BNHH: -744,
        BOHH: 225,
        BOOO: -908,
        OAKK: 482,
        OHHH: 281,
        OHIH: 249,
        OIHI: 200,
        OIIH: -68,
    };
    this.TQ2__ = { BIHH: -1401, BIII: -1033, BKAK: -543, BOOO: -5591 };
    this.TQ3__ = {
        BHHH: 478,
        BHHM: -1073,
        BHIH: 222,
        BHII: -504,
        BIIH: -116,
        BIII: -105,
        BMHI: -863,
        BMHM: -464,
        BOMH: 620,
        OHHH: 346,
        OHHI: 1729,
        OHII: 997,
        OHMH: 481,
        OIHH: 623,
        OIIH: 1344,
        OKAK: 2792,
        OKHH: 587,
        OKKA: 679,
        OOHH: 110,
        OOII: -685,
    };
    this.TQ4__ = {
        BHHH: -721,
        BHHM: -3604,
        BHII: -966,
        BIIH: -607,
        BIII: -2181,
        OAAA: -2763,
        OAKK: 180,
        OHHH: -294,
        OHHI: 2446,
        OHHO: 480,
        OHIH: -1573,
        OIHH: 1935,
        OIHI: -493,
        OIIH: 626,
        OIII: -4007,
        OKAK: -8156,
    };
    this.TW1__ = { につい: -4681, 東京都: 2026 };
    this.TW2__ = {
        ある程: -2049,
        いった: -1256,
        ころが: -2434,
        しょう: 3873,
        その後: -4430,
        だって: -1049,
        ていた: 1833,
        として: -4657,
        ともに: -4517,
        もので: 1882,
        一気に: -792,
        初めて: -1512,
        同時に: -8097,
        大きな: -1255,
        対して: -2721,
        社会党: -3216,
    };
    this.TW3__ = {
        いただ: -1734,
        してい: 1314,
        として: -4314,
        につい: -5483,
        にとっ: -5989,
        に当た: -6247,
        'ので,': -727,
        'ので、': -727,
        のもの: -600,
        れから: -3752,
        十二月: -2287,
    };
    this.TW4__ = {
        'いう.': 8576,
        'いう。': 8576,
        からな: -2348,
        してい: 2958,
        'たが,': 1516,
        'たが、': 1516,
        ている: 1538,
        という: 1349,
        ました: 5543,
        ません: 1097,
        ようと: -4258,
        よると: 5865,
    };
    this.UC1__ = { A: 484, K: 93, M: 645, O: -505 };
    this.UC2__ = { A: 819, H: 1059, I: 409, M: 3987, N: 5775, O: 646 };
    this.UC3__ = { A: -1370, I: 2311 };
    this.UC4__ = {
        A: -2643,
        H: 1809,
        I: -1032,
        K: -3450,
        M: 3565,
        N: 3876,
        O: 6646,
    };
    this.UC5__ = { H: 313, I: -1238, K: -799, M: 539, O: -831 };
    this.UC6__ = { H: -506, I: -253, K: 87, M: 247, O: -387 };
    this.UP1__ = { O: -214 };
    this.UP2__ = { B: 69, O: 935 };
    this.UP3__ = { B: 189 };
    this.UQ1__ = {
        BH: 21,
        BI: -12,
        BK: -99,
        BN: 142,
        BO: -56,
        OH: -95,
        OI: 477,
        OK: 410,
        OO: -2422,
    };
    this.UQ2__ = { BH: 216, BI: 113, OK: 1759 };
    this.UQ3__ = {
        BA: -479,
        BH: 42,
        BI: 1913,
        BK: -7198,
        BM: 3160,
        BN: 6427,
        BO: 14761,
        OI: -827,
        ON: -3212,
    };
    this.UW1__ = {
        ',': 156,
        '、': 156,
        '「': -463,
        あ: -941,
        う: -127,
        が: -553,
        き: 121,
        こ: 505,
        で: -201,
        と: -547,
        ど: -123,
        に: -789,
        の: -185,
        は: -847,
        も: -466,
        や: -470,
        よ: 182,
        ら: -292,
        り: 208,
        れ: 169,
        を: -446,
        ん: -137,
        '・': -135,
        主: -402,
        京: -268,
        区: -912,
        午: 871,
        国: -460,
        大: 561,
        委: 729,
        市: -411,
        日: -141,
        理: 361,
        生: -408,
        県: -386,
        都: -718,
        '｢': -463,
        '･': -135,
    };
    this.UW2__ = {
        ',': -829,
        '、': -829,
        〇: 892,
        '「': -645,
        '」': 3145,
        あ: -538,
        い: 505,
        う: 134,
        お: -502,
        か: 1454,
        が: -856,
        く: -412,
        こ: 1141,
        さ: 878,
        ざ: 540,
        し: 1529,
        す: -675,
        せ: 300,
        そ: -1011,
        た: 188,
        だ: 1837,
        つ: -949,
        て: -291,
        で: -268,
        と: -981,
        ど: 1273,
        な: 1063,
        に: -1764,
        の: 130,
        は: -409,
        ひ: -1273,
        べ: 1261,
        ま: 600,
        も: -1263,
        や: -402,
        よ: 1639,
        り: -579,
        る: -694,
        れ: 571,
        を: -2516,
        ん: 2095,
        ア: -587,
        カ: 306,
        キ: 568,
        ッ: 831,
        三: -758,
        不: -2150,
        世: -302,
        中: -968,
        主: -861,
        事: 492,
        人: -123,
        会: 978,
        保: 362,
        入: 548,
        初: -3025,
        副: -1566,
        北: -3414,
        区: -422,
        大: -1769,
        天: -865,
        太: -483,
        子: -1519,
        学: 760,
        実: 1023,
        小: -2009,
        市: -813,
        年: -1060,
        強: 1067,
        手: -1519,
        揺: -1033,
        政: 1522,
        文: -1355,
        新: -1682,
        日: -1815,
        明: -1462,
        最: -630,
        朝: -1843,
        本: -1650,
        東: -931,
        果: -665,
        次: -2378,
        民: -180,
        気: -1740,
        理: 752,
        発: 529,
        目: -1584,
        相: -242,
        県: -1165,
        立: -763,
        第: 810,
        米: 509,
        自: -1353,
        行: 838,
        西: -744,
        見: -3874,
        調: 1010,
        議: 1198,
        込: 3041,
        開: 1758,
        間: -1257,
        '｢': -645,
        '｣': 3145,
        ｯ: 831,
        ｱ: -587,
        ｶ: 306,
        ｷ: 568,
    };
    this.UW3__ = {
        ',': 4889,
        1: -800,
        '−': -1723,
        '、': 4889,
        々: -2311,
        〇: 5827,
        '」': 2670,
        '〓': -3573,
        あ: -2696,
        い: 1006,
        う: 2342,
        え: 1983,
        お: -4864,
        か: -1163,
        が: 3271,
        く: 1004,
        け: 388,
        げ: 401,
        こ: -3552,
        ご: -3116,
        さ: -1058,
        し: -395,
        す: 584,
        せ: 3685,
        そ: -5228,
        た: 842,
        ち: -521,
        っ: -1444,
        つ: -1081,
        て: 6167,
        で: 2318,
        と: 1691,
        ど: -899,
        な: -2788,
        に: 2745,
        の: 4056,
        は: 4555,
        ひ: -2171,
        ふ: -1798,
        へ: 1199,
        ほ: -5516,
        ま: -4384,
        み: -120,
        め: 1205,
        も: 2323,
        や: -788,
        よ: -202,
        ら: 727,
        り: 649,
        る: 5905,
        れ: 2773,
        わ: -1207,
        を: 6620,
        ん: -518,
        ア: 551,
        グ: 1319,
        ス: 874,
        ッ: -1350,
        ト: 521,
        ム: 1109,
        ル: 1591,
        ロ: 2201,
        ン: 278,
        '・': -3794,
        一: -1619,
        下: -1759,
        世: -2087,
        両: 3815,
        中: 653,
        主: -758,
        予: -1193,
        二: 974,
        人: 2742,
        今: 792,
        他: 1889,
        以: -1368,
        低: 811,
        何: 4265,
        作: -361,
        保: -2439,
        元: 4858,
        党: 3593,
        全: 1574,
        公: -3030,
        六: 755,
        共: -1880,
        円: 5807,
        再: 3095,
        分: 457,
        初: 2475,
        別: 1129,
        前: 2286,
        副: 4437,
        力: 365,
        動: -949,
        務: -1872,
        化: 1327,
        北: -1038,
        区: 4646,
        千: -2309,
        午: -783,
        協: -1006,
        口: 483,
        右: 1233,
        各: 3588,
        合: -241,
        同: 3906,
        和: -837,
        員: 4513,
        国: 642,
        型: 1389,
        場: 1219,
        外: -241,
        妻: 2016,
        学: -1356,
        安: -423,
        実: -1008,
        家: 1078,
        小: -513,
        少: -3102,
        州: 1155,
        市: 3197,
        平: -1804,
        年: 2416,
        広: -1030,
        府: 1605,
        度: 1452,
        建: -2352,
        当: -3885,
        得: 1905,
        思: -1291,
        性: 1822,
        戸: -488,
        指: -3973,
        政: -2013,
        教: -1479,
        数: 3222,
        文: -1489,
        新: 1764,
        日: 2099,
        旧: 5792,
        昨: -661,
        時: -1248,
        曜: -951,
        最: -937,
        月: 4125,
        期: 360,
        李: 3094,
        村: 364,
        東: -805,
        核: 5156,
        森: 2438,
        業: 484,
        氏: 2613,
        民: -1694,
        決: -1073,
        法: 1868,
        海: -495,
        無: 979,
        物: 461,
        特: -3850,
        生: -273,
        用: 914,
        町: 1215,
        的: 7313,
        直: -1835,
        省: 792,
        県: 6293,
        知: -1528,
        私: 4231,
        税: 401,
        立: -960,
        第: 1201,
        米: 7767,
        系: 3066,
        約: 3663,
        級: 1384,
        統: -4229,
        総: 1163,
        線: 1255,
        者: 6457,
        能: 725,
        自: -2869,
        英: 785,
        見: 1044,
        調: -562,
        財: -733,
        費: 1777,
        車: 1835,
        軍: 1375,
        込: -1504,
        通: -1136,
        選: -681,
        郎: 1026,
        郡: 4404,
        部: 1200,
        金: 2163,
        長: 421,
        開: -1432,
        間: 1302,
        関: -1282,
        雨: 2009,
        電: -1045,
        非: 2066,
        駅: 1620,
        '１': -800,
        '｣': 2670,
        '･': -3794,
        ｯ: -1350,
        ｱ: 551,
        ｸﾞ: 1319,
        ｽ: 874,
        ﾄ: 521,
        ﾑ: 1109,
        ﾙ: 1591,
        ﾛ: 2201,
        ﾝ: 278,
    };
    this.UW4__ = {
        ',': 3930,
        '.': 3508,
        '―': -4841,
        '、': 3930,
        '。': 3508,
        〇: 4999,
        '「': 1895,
        '」': 3798,
        '〓': -5156,
        あ: 4752,
        い: -3435,
        う: -640,
        え: -2514,
        お: 2405,
        か: 530,
        が: 6006,
        き: -4482,
        ぎ: -3821,
        く: -3788,
        け: -4376,
        げ: -4734,
        こ: 2255,
        ご: 1979,
        さ: 2864,
        し: -843,
        じ: -2506,
        す: -731,
        ず: 1251,
        せ: 181,
        そ: 4091,
        た: 5034,
        だ: 5408,
        ち: -3654,
        っ: -5882,
        つ: -1659,
        て: 3994,
        で: 7410,
        と: 4547,
        な: 5433,
        に: 6499,
        ぬ: 1853,
        ね: 1413,
        の: 7396,
        は: 8578,
        ば: 1940,
        ひ: 4249,
        び: -4134,
        ふ: 1345,
        へ: 6665,
        べ: -744,
        ほ: 1464,
        ま: 1051,
        み: -2082,
        む: -882,
        め: -5046,
        も: 4169,
        ゃ: -2666,
        や: 2795,
        ょ: -1544,
        よ: 3351,
        ら: -2922,
        り: -9726,
        る: -14896,
        れ: -2613,
        ろ: -4570,
        わ: -1783,
        を: 13150,
        ん: -2352,
        カ: 2145,
        コ: 1789,
        セ: 1287,
        ッ: -724,
        ト: -403,
        メ: -1635,
        ラ: -881,
        リ: -541,
        ル: -856,
        ン: -3637,
        '・': -4371,
        ー: -11870,
        一: -2069,
        中: 2210,
        予: 782,
        事: -190,
        井: -1768,
        人: 1036,
        以: 544,
        会: 950,
        体: -1286,
        作: 530,
        側: 4292,
        先: 601,
        党: -2006,
        共: -1212,
        内: 584,
        円: 788,
        初: 1347,
        前: 1623,
        副: 3879,
        力: -302,
        動: -740,
        務: -2715,
        化: 776,
        区: 4517,
        協: 1013,
        参: 1555,
        合: -1834,
        和: -681,
        員: -910,
        器: -851,
        回: 1500,
        国: -619,
        園: -1200,
        地: 866,
        場: -1410,
        塁: -2094,
        士: -1413,
        多: 1067,
        大: 571,
        子: -4802,
        学: -1397,
        定: -1057,
        寺: -809,
        小: 1910,
        屋: -1328,
        山: -1500,
        島: -2056,
        川: -2667,
        市: 2771,
        年: 374,
        庁: -4556,
        後: 456,
        性: 553,
        感: 916,
        所: -1566,
        支: 856,
        改: 787,
        政: 2182,
        教: 704,
        文: 522,
        方: -856,
        日: 1798,
        時: 1829,
        最: 845,
        月: -9066,
        木: -485,
        来: -442,
        校: -360,
        業: -1043,
        氏: 5388,
        民: -2716,
        気: -910,
        沢: -939,
        済: -543,
        物: -735,
        率: 672,
        球: -1267,
        生: -1286,
        産: -1101,
        田: -2900,
        町: 1826,
        的: 2586,
        目: 922,
        省: -3485,
        県: 2997,
        空: -867,
        立: -2112,
        第: 788,
        米: 2937,
        系: 786,
        約: 2171,
        経: 1146,
        統: -1169,
        総: 940,
        線: -994,
        署: 749,
        者: 2145,
        能: -730,
        般: -852,
        行: -792,
        規: 792,
        警: -1184,
        議: -244,
        谷: -1000,
        賞: 730,
        車: -1481,
        軍: 1158,
        輪: -1433,
        込: -3370,
        近: 929,
        道: -1291,
        選: 2596,
        郎: -4866,
        都: 1192,
        野: -1100,
        銀: -2213,
        長: 357,
        間: -2344,
        院: -2297,
        際: -2604,
        電: -878,
        領: -1659,
        題: -792,
        館: -1984,
        首: 1749,
        高: 2120,
        '｢': 1895,
        '｣': 3798,
        '･': -4371,
        ｯ: -724,
        ｰ: -11870,
        ｶ: 2145,
        ｺ: 1789,
        ｾ: 1287,
        ﾄ: -403,
        ﾒ: -1635,
        ﾗ: -881,
        ﾘ: -541,
        ﾙ: -856,
        ﾝ: -3637,
    };
    this.UW5__ = {
        ',': 465,
        '.': -299,
        1: -514,
        E2: -32768,
        ']': -2762,
        '、': 465,
        '。': -299,
        '「': 363,
        あ: 1655,
        い: 331,
        う: -503,
        え: 1199,
        お: 527,
        か: 647,
        が: -421,
        き: 1624,
        ぎ: 1971,
        く: 312,
        げ: -983,
        さ: -1537,
        し: -1371,
        す: -852,
        だ: -1186,
        ち: 1093,
        っ: 52,
        つ: 921,
        て: -18,
        で: -850,
        と: -127,
        ど: 1682,
        な: -787,
        に: -1224,
        の: -635,
        は: -578,
        べ: 1001,
        み: 502,
        め: 865,
        ゃ: 3350,
        ょ: 854,
        り: -208,
        る: 429,
        れ: 504,
        わ: 419,
        を: -1264,
        ん: 327,
        イ: 241,
        ル: 451,
        ン: -343,
        中: -871,
        京: 722,
        会: -1153,
        党: -654,
        務: 3519,
        区: -901,
        告: 848,
        員: 2104,
        大: -1296,
        学: -548,
        定: 1785,
        嵐: -1304,
        市: -2991,
        席: 921,
        年: 1763,
        思: 872,
        所: -814,
        挙: 1618,
        新: -1682,
        日: 218,
        月: -4353,
        査: 932,
        格: 1356,
        機: -1508,
        氏: -1347,
        田: 240,
        町: -3912,
        的: -3149,
        相: 1319,
        省: -1052,
        県: -4003,
        研: -997,
        社: -278,
        空: -813,
        統: 1955,
        者: -2233,
        表: 663,
        語: -1073,
        議: 1219,
        選: -1018,
        郎: -368,
        長: 786,
        間: 1191,
        題: 2368,
        館: -689,
        '１': -514,
        Ｅ２: -32768,
        '｢': 363,
        ｲ: 241,
        ﾙ: 451,
        ﾝ: -343,
    };
    this.UW6__ = {
        ',': 227,
        '.': 808,
        1: -270,
        E1: 306,
        '、': 227,
        '。': 808,
        あ: -307,
        う: 189,
        か: 241,
        が: -73,
        く: -121,
        こ: -200,
        じ: 1782,
        す: 383,
        た: -428,
        っ: 573,
        て: -1014,
        で: 101,
        と: -105,
        な: -253,
        に: -149,
        の: -417,
        は: -236,
        も: -206,
        り: 187,
        る: -135,
        を: 195,
        ル: -673,
        ン: -496,
        一: -277,
        中: 201,
        件: -800,
        会: 624,
        前: 302,
        区: 1792,
        員: -1212,
        委: 798,
        学: -960,
        市: 887,
        広: -695,
        後: 535,
        業: -697,
        相: 753,
        社: -507,
        福: 974,
        空: -822,
        者: 1811,
        連: 463,
        郎: 1082,
        '１': -270,
        Ｅ１: 306,
        ﾙ: -673,
        ﾝ: -496,
    };
    return this;
}
TinySegmenter.prototype.ctype_ = function (str) {
    for (var i in this.chartype_) {
        if (str.match(this.chartype_[i][0])) {
            return this.chartype_[i][1];
        }
    }
    return 'O';
};
TinySegmenter.prototype.ts_ = function (v) {
    if (v) {
        return v;
    }
    return 0;
};
TinySegmenter.prototype.segment = function (input) {
    if (input == null || input == undefined || input == '') {
        return [];
    }
    var result = [];
    var seg = ['B3', 'B2', 'B1'];
    var ctype = ['O', 'O', 'O'];
    var o = input.split('');
    for (i = 0; i < o.length; ++i) {
        seg.push(o[i]);
        ctype.push(this.ctype_(o[i]));
    }
    seg.push('E1');
    seg.push('E2');
    seg.push('E3');
    ctype.push('O');
    ctype.push('O');
    ctype.push('O');
    var word = seg[3];
    var p1 = 'U';
    var p2 = 'U';
    var p3 = 'U';
    for (var i = 4; i < seg.length - 3; ++i) {
        var score = this.BIAS__;
        var w1 = seg[i - 3];
        var w2 = seg[i - 2];
        var w3 = seg[i - 1];
        var w4 = seg[i];
        var w5 = seg[i + 1];
        var w6 = seg[i + 2];
        var c1 = ctype[i - 3];
        var c2 = ctype[i - 2];
        var c3 = ctype[i - 1];
        var c4 = ctype[i];
        var c5 = ctype[i + 1];
        var c6 = ctype[i + 2];
        score += this.ts_(this.UP1__[p1]);
        score += this.ts_(this.UP2__[p2]);
        score += this.ts_(this.UP3__[p3]);
        score += this.ts_(this.BP1__[p1 + p2]);
        score += this.ts_(this.BP2__[p2 + p3]);
        score += this.ts_(this.UW1__[w1]);
        score += this.ts_(this.UW2__[w2]);
        score += this.ts_(this.UW3__[w3]);
        score += this.ts_(this.UW4__[w4]);
        score += this.ts_(this.UW5__[w5]);
        score += this.ts_(this.UW6__[w6]);
        score += this.ts_(this.BW1__[w2 + w3]);
        score += this.ts_(this.BW2__[w3 + w4]);
        score += this.ts_(this.BW3__[w4 + w5]);
        score += this.ts_(this.TW1__[w1 + w2 + w3]);
        score += this.ts_(this.TW2__[w2 + w3 + w4]);
        score += this.ts_(this.TW3__[w3 + w4 + w5]);
        score += this.ts_(this.TW4__[w4 + w5 + w6]);
        score += this.ts_(this.UC1__[c1]);
        score += this.ts_(this.UC2__[c2]);
        score += this.ts_(this.UC3__[c3]);
        score += this.ts_(this.UC4__[c4]);
        score += this.ts_(this.UC5__[c5]);
        score += this.ts_(this.UC6__[c6]);
        score += this.ts_(this.BC1__[c2 + c3]);
        score += this.ts_(this.BC2__[c3 + c4]);
        score += this.ts_(this.BC3__[c4 + c5]);
        score += this.ts_(this.TC1__[c1 + c2 + c3]);
        score += this.ts_(this.TC2__[c2 + c3 + c4]);
        score += this.ts_(this.TC3__[c3 + c4 + c5]);
        score += this.ts_(this.TC4__[c4 + c5 + c6]);
        //  score += this.ts_(this.TC5__[c4 + c5 + c6]);
        score += this.ts_(this.UQ1__[p1 + c1]);
        score += this.ts_(this.UQ2__[p2 + c2]);
        score += this.ts_(this.UQ3__[p3 + c3]);
        score += this.ts_(this.BQ1__[p2 + c2 + c3]);
        score += this.ts_(this.BQ2__[p2 + c3 + c4]);
        score += this.ts_(this.BQ3__[p3 + c2 + c3]);
        score += this.ts_(this.BQ4__[p3 + c3 + c4]);
        score += this.ts_(this.TQ1__[p2 + c1 + c2 + c3]);
        score += this.ts_(this.TQ2__[p2 + c2 + c3 + c4]);
        score += this.ts_(this.TQ3__[p3 + c1 + c2 + c3]);
        score += this.ts_(this.TQ4__[p3 + c2 + c3 + c4]);
        var p = 'O';
        if (score > 0) {
            result.push(word);
            word = '';
            p = 'B';
        }
        p1 = p2;
        p2 = p3;
        p3 = p;
        word += seg[i];
    }
    result.push(word);
    return result;
};

var JapaneseTokenizer = /** @class */ (function (_super) {
    __extends(JapaneseTokenizer, _super);
    function JapaneseTokenizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @ts-ignore
        _this.tokenizer = new TinySegmenter();
        return _this;
    }
    JapaneseTokenizer.prototype.tokenize = function (text, range) {
        var _this = this;
        var tokens = text
            .slice(range === null || range === void 0 ? void 0 : range.start, range === null || range === void 0 ? void 0 : range.end)
            .split('\n')
            .flatMap(function (line) { return _this.tokenizer.segment(line); })
            .map(function (t) { return t.replace(_this.trimPattern, ''); });
        return { tokens: tokens };
    };
    return JapaneseTokenizer;
}(Tokenizer));

var TokenizerFactory = /** @class */ (function () {
    function TokenizerFactory() {
    }
    TokenizerFactory.getTokenizer = function (strategy) {
        var tokenizer;
        switch (strategy) {
            case 'default':
                tokenizer = new DefaultTokenizer();
                break;
            case 'japanese':
                tokenizer = new JapaneseTokenizer();
                break;
            case 'arabic':
                tokenizer = new ArabicTokenizer();
                break;
            default:
                throw new Error("Strategy '" + strategy + "' not found");
        }
        return tokenizer;
    };
    return TokenizerFactory;
}());

var FlowProvider = /** @class */ (function (_super) {
    __extends(FlowProvider, _super);
    function FlowProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.category = 'F';
        _this.completions = [];
        return _this;
    }
    FlowProvider.prototype.addLastWordFrom = function (line, cursorIndex, strategy) {
        var word = TokenizerFactory.getTokenizer(strategy).lastWordFrom(line, cursorIndex, { normalize: true });
        this.addWord(word);
    };
    FlowProvider.prototype.addWordsFrom = function (text, strategy) {
        var _this = this;
        if (strategy === void 0) { strategy = 'default'; }
        var result = TokenizerFactory.getTokenizer(strategy).tokenize(text);
        result.tokens.forEach(function (token) { return _this.addWord(token); });
    };
    FlowProvider.prototype.addWord = function (word) {
        if (!word || this.alreadyAdded(word))
            return;
        this.completions.push(word);
    };
    FlowProvider.prototype.alreadyAdded = function (word) {
        return this.completions.includes(word);
    };
    return FlowProvider;
}(Provider));

var LaTexProvider = /** @class */ (function (_super) {
    __extends(LaTexProvider, _super);
    function LaTexProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.category = "L";
        _this.completions = ["\\Arrowvert", "\\Bbbk", "\\Big", "\\Bigg", "\\Biggl", "\\Biggr", "\\Bigl", "\\Bigm", "\\Bigr", "\\Box", "\\Bumpeq", "\\Cap", "\\cite[#{}]{#{}}", "\\cite", "\\Cup", "\\DeclareMathOperator{#{}}{#{}}", "\\Delta", "\\Downarrow", "\\Finv", "\\Game", "\\Gamma", "\\Im", "\\Lambda", "\\Leftarrow", "\\Leftrightarrow", "\\Lleftarrow", "\\Longleftarrow", "\\Longleftrightarrow", "\\Longrightarrow", "\\Lsh", "\\Omega", "\\Phi", "\\Pi", "\\Pr", "\\Psi", "\\Re", "\\Rightarrow", "\\Rrightarrow", "\\Rsh", "\\S", "\\Sigma", "\\Subset", "\\Supset", "\\TeX", "\\Theta", "\\Uparrow", "\\Updownarrow", "\\Upsilon", "\\Vdash", "\\Vert", "\\Vvdash", "\\Xi", "\\above", "\\abovewithdelims", "\\acute{#{}}", "\\aleph", "\\alpha", "\\amalg", "\\angle", "\\approx", "\\approxeq", "\\arccos", "\\arcsin", "\\arctan", "\\arg", "\\arrowvert", "\\ast", "\\asymp", "\\atop",
            "\\atopwithdelims", "\\backepsilon", "\\backprime", "\\backsim", "\\backsimeq", "\\backslash", "\\bar{#{}}", "\\barwedge", "\\because", "\\beta", "\\beth", "\\between", "\\bf", "\\big", "\\bigcap", "\\bigcirc", "\\bigcup", "\\bigg", "\\biggl", "\\biggm", "\\biggr", "\\bigl", "\\bigm", "\\bigodot", "\\bigoplus", "\\bigotimes", "\\bigr\\}", "\\bigsqcup", "\\bigstar", "\\bigtriangledown", "\\bigtriangleup", "\\biguplus", "\\bigvee", "\\bigwedge", "\\binom{#{}}{#{}}", "\\blacklozenge", "\\blacksquare", "\\blacktriangle", "\\blacktriangledown", "\\blacktriangleleft", "\\blacktriangleright", "\\bmod", "\\boldsymbol{#{}}", "\\bot", "\\bowtie", "\\boxdot", "\\boxed{#{}}", "\\boxminus", "\\boxplus", "\\boxtimes", "\\brace", "\\bracevert", "\\brack", "\\breve{#{}}", "\\buildrel", "\\bullet", "\\bumpeq", "\\cal", "\\cap", "\\cases{#{}}", "\\cdot", "\\cdotp", "\\cdots",
            "\\centerdot", "\\cfrac{#{}}{#{}}", "\\check{#{}}", "\\checkmark", "\\chi", "\\choose", "\\circ", "\\circeq", "\\circlearrowleft", "\\circlearrowright", "\\circledS", "\\circledast", "\\circledcirc", "\\circleddash", "\\clubsuit", "\\colon", "\\complement", "\\cong", "\\coprod", "\\cos", "\\cosh", "\\cot", "\\coth", "\\cr", "\\csc", "\\cup", "\\curlyeqprec", "\\curlyeqsucc", "\\curlyvee", "\\curlywedge", "\\curvearrowleft", "\\curvearrowright", "\\dagger", "\\daleth", "\\dashleftarrow", "\\dashrightarrow", "\\dashv", "\\dbinom{#{}}{#{}}", "\\ddagger", "\\ddddot{#{}}", "\\dddot{#{}}", "\\ddot{#{}}", "\\ddots", "\\def", "\\deg", "\\delta", "\\det", "\\dfrac{#{}}{#{}}", "\\diagdown", "\\diagup", "\\diamond", "\\diamondsuit", "\\digamma", "\\dim", "\\displaylines", "\\displaystyle", "\\div", "\\divideontimes", "\\dot{#{}}", "\\doteq", "\\doteqdot", "\\dotplus",
            "\\dots", "\\dotsb", "\\dotsc", "\\dotsi", "\\dotsm", "\\dotso", "\\doublebarwedge", "\\downarrow", "\\downdownarrows", "\\downharpoonleft", "\\downharpoonright", "\\ell", "\\emptyset", "\\enspace", "\\epsilon", "\\eqalign{#{}}", "\\eqalignno{#{}}", "\\eqcirc", "\\eqref{#{}}", "\\eqsim", "\\eqslantgtr", "\\eqslantless", "\\equiv", "\\eta", "\\eth", "\\exists", "\\exp", "\\fallingdotseq", "\\flat", "\\forall", "\\frown", "\\gamma", "\\gcd", "\\ge", "\\geq", "\\geqq", "\\geqslant", "\\gets", "\\gg", "\\ggg", "\\gimel", "\\gnapprox", "\\gneq", "\\gneqq", "\\gnsim", "\\grave{#{}}", "\\gtrapprox", "\\gtrdot", "\\gtreqless", "\\gtreqqless", "\\gtrless", "\\gtrsim", "\\gvertneqq", "\\hat{#{}}", "\\hbar", "\\hbox", "\\heartsuit", "\\hfil", "\\hfill", "\\hom", "\\hookleftarrow", "\\hookrightarrow", "\\hphantom{#{}}", "\\hskip", "\\hslash", "\\idotsint", "\\iff",
            "\\iiiint", "\\iiint", "\\iint", "\\imath", "\\impliedby", "\\implies", "\\in", "\\inf", "\\infty", "\\injlim", "\\int\\limits_{#{}}^{#{}}", "\\intercal", "\\iota", "\\it", "\\jmath", "\\kappa", "\\ker", "\\kern", "\\lVert", "\\lambda", "\\land", "\\langle", "\\lbrace", "\\lbrack", "\\lceil", "\\ldotp", "\\ldots", "\\le", "\\left", "\\leftarrow", "\\leftarrowtail", "\\leftharpoondown", "\\leftharpoonup", "\\leftleftarrows", "\\leftrightarrow", "\\leftrightarrows", "\\leftrightharpoons", "\\leftrightsquigarrow", "\\leftroot{#{}}", "\\leftthreetimes", "\\leq", "\\leqalignno{#{}}", "\\leqq", "\\leqslant", "\\lessapprox", "\\lessdot", "\\lesseqgtr", "\\lesseqqgtr", "\\lessgtr", "\\lesssim", "\\let{#{}}{#{}}", "\\lfloor", "\\lg", "\\lgroup", "\\lhd", "\\lim", "\\liminf", "\\limits_{#{}}^{#{}}", "\\limsup", "\\ll", "\\llap{#{}}", "\\llcorner", "\\lll", "\\lmoustache",
            "\\ln", "\\lnapprox", "\\lneq", "\\lneqq", "\\lnot", "\\lnsim", "\\log", "\\longleftarrow", "\\longleftrightarrow", "\\longmapsto", "\\longrightarrow", "\\looparrowleft", "\\looparrowright", "\\lor", "\\lower", "\\lozenge", "\\lrcorner", "\\ltimes", "\\lvert", "\\lvertneqq", "\\maltese", "\\mapsto", "\\mathbb{#{}}", "\\mathbf{#{}}", "\\mathbin", "\\mathcal{#{}}", "\\mathchoice", "\\mathclose", "\\mathfrak{#{}}", "\\mathinner", "\\mathop", "\\mathopen", "\\mathord", "\\mathpunct", "\\mathrel", "\\mathstrut", "\\matrix{#{}}", "\\max", "\\measuredangle", "\\mho", "\\mid", "\\middle", "\\min", "\\mit", "\\mkern", "\\mod", "\\models", "\\moveleft", "\\moveright", "\\mp", "\\mskip", "\\mspace{#{}}", "\\mu", "\\multimap", "\\nLeftarrow", "\\nLeftrightarrow", "\\nRightarrow", "\\nVDash", "\\nVdash", "\\nabla", "\\natural", "\\ncong", "\\ne", "\\nearrow", "\\neg", "\\negmedspace",
            "\\negthickspace", "\\negthinspace", "\\neq", "\\nexists", "\\ngeq", "\\ngeqq", "\\ngeqslant", "\\ngtr", "\\ni", "\\nleftarrow", "\\nleftrightarrow", "\\nleq", "\\nleqq", "\\nleqslant", "\\nless", "\\nmid", "\\nolimits_{#{}}^{#{}}", "\\not", "\\notag", "\\notin", "\\nparallel", "\\nprec", "\\npreceq", "\\nrightarrow", "\\nshortmid", "\\nshortparallel", "\\nsim", "\\nsubseteq", "\\nsubseteqq", "\\nsucc", "\\nsucceq", "\\nsupseteq", "\\nsupseteqq", "\\ntriangleleft", "\\ntrianglelefteq", "\\ntriangleright", "\\ntrianglerighteq", "\\nu", "\\nvDash", "\\nvdash", "\\nwarrow", "\\odot", "\\oint", "\\oldstyle", "\\omega", "\\ominus", "\\operatorname{#{}}", "\\oplus", "\\oslash", "\\otimes", "\\over", "\\overbrace{#{}}", "\\overleftarrow{#{}}", "\\overleftrightarrow{#{}}", "\\overline{#{}}", "\\overrightarrow{#{}}", "\\overset{#{}}{#{}}", "\\overwithdelims", "\\owns",
            "\\parallel", "\\partial", "\\perp", "\\phantom{#{}}", "\\phi", "\\pi", "\\pitchfork", "\\pm", "\\pmatrix{#{}}", "\\pmb{#{}}", "\\pmod", "\\pod", "\\prec", "\\precapprox", "\\preccurlyeq", "\\preceq", "\\precnapprox", "\\precneqq", "\\precnsim", "\\precsim", "\\prime", "\\prod\\limits_{#{}}^{#{}}", "\\projlim", "\\propto", "\\psi", "\\qquad", "\\quad", "\\rVert", "\\raise", "\\rangle", "\\rbrace", "\\rbrack", "\\rceil", "\\rfloor", "\\rgroup", "\\rhd", "\\rho", "\\right", "\\rightarrow", "\\rightarrowtail", "\\rightharpoondown", "\\rightharpoonup", "\\rightleftarrows", "\\rightleftharpoons", "\\rightrightarrows", "\\rightsquigarrow", "\\rightthreetimes", "\\risingdotseq", "\\rlap{#{}}", "\\rm", "\\rmoustache", "\\root #{} \\of #{}", "\\rtimes", "\\rvert", "\\scriptscriptstyle", "\\scriptstyle", "\\searrow", "\\sec", "\\setminus", "\\sharp", "\\shortmid",
            "\\shortparallel", "\\sideset{#{}}{#{}}{#{}}", "\\sigma", "\\sim", "\\simeq", "\\sin", "\\sinh", "\\skew{#{}}{#{}}{#{}}", "\\smallfrown", "\\smallint", "\\smallsetminus", "\\smallsmile", "\\smash{#{}}", "\\smile", "\\space", "\\spadesuit", "\\sphericalangle", "\\sqcap", "\\sqcup", "\\sqrt{#{}}", "\\sqsubset", "\\sqsubseteq", "\\sqsupset", "\\sqsupseteq", "\\square", "\\star", "\\strut", "\\subset", "\\subseteq", "\\subseteqq", "\\subsetneq", "\\subsetneqq", "\\substack{#{}}", "\\succ", "\\succapprox", "\\succcurlyeq", "\\succeq", "\\succnapprox", "\\succneqq", "\\succnsim", "\\succsim", "\\sum\\limits_{#{}}^{#{}}", "\\sup", "\\supset", "\\supseteq", "\\supseteqq", "\\supsetneq", "\\supsetneqq", "\\surd", "\\swarrow", "\\tag{#{}}", "\\tan", "\\tanh", "\\tau", "\\tbinom{#{}}{#{}}", "\\text{#{}}", "\\textstyle", "\\tfrac{#{}}{#{}}", "\\therefore", "\\theta",
            "\\thickapprox", "\\thicksim", "\\thinspace", "\\tilde{#{}}", "\\times", "\\to", "\\top", "\\triangle", "\\triangledown", "\\triangleleft", "\\trianglelefteq", "\\triangleq", "\\triangleright", "\\trianglerighteq", "\\tt", "\\twoheadleftarrow", "\\twoheadrightarrow", "\\ulcorner", "\\underbrace{#{}}", "\\underleftarrow{#{}}", "\\underleftrightarrow{#{}}", "\\underline{#{}}", "\\underrightarrow{#{}}", "\\underset{#{}}{#{}}", "\\unlhd", "\\unrhd", "\\uparrow", "\\updownarrow", "\\upharpoonleft", "\\upharpoonright", "\\uplus", "\\uproot{#{}}", "\\upsilon", "\\upuparrows", "\\urcorner", "\\vDash", "\\varDelta", "\\varGamma", "\\varLambda", "\\varOmega", "\\varPhi", "\\varPi", "\\varPsi", "\\varSigma", "\\varTheta", "\\varUpsilon", "\\varXi", "\\varepsilon", "\\varinjlim", "\\varkappa", "\\varliminf", "\\varlimsup", "\\varnothing", "\\varphi", "\\varpi",
            "\\varprojlim", "\\varpropto", "\\varrho", "\\varsigma", "\\varsubsetneq", "\\varsubsetneqq", "\\varsupsetneq", "\\varsupsetneqq", "\\vartheta", "\\vartriangle", "\\vartriangleleft", "\\vartriangleright", "\\vcenter", "\\vdash", "\\vec{#{}}", "\\vee", "\\veebar", "\\vert", "\\vphantom{#{}}", "\\wedge", "\\widehat{#{}}", "\\widetilde{#{}}", "\\wp", "\\wr", "\\xi", "\\xleftarrow{#{}}", "\\xrightarrow{#{}}", "\\zeta", "\\begin{definition}", "\\begin{tikzcd}", "\\begin{tikzpicture}", "\\begin{align}", "\\begin{align*}", "\\begin{alignat}", "\\begin{alignat*}", "\\begin{aligned}", "\\begin{alignedat}", "\\begin{array}", "\\begin{Bmatrix}", "\\begin{bmatrix}", "\\begin{cases}", "\\begin{CD}", "\\begin{eqnarray}", "\\begin{eqnarray*}", "\\begin{equation}", "\\begin{equation*}", "\\begin{gather}", "\\begin{gather*}", "\\begin{gathered}", "\\begin{matrix}",
            "\\begin{multline}", "\\begin{multline*}", "\\begin{pmatrix}", "\\begin{smallmatrix}", "\\begin{split}", "\\begin{subarray}", "\\begin{Vmatrix}", "\\begin{vmatrix}"];
        return _this;
    }
    return LaTexProvider;
}(Provider));

var Autocomplete = /** @class */ (function () {
    function Autocomplete(settings) {
        var _this = this;
        this.keyMaps = {
            // Override code mirror default key maps
            'Ctrl-P': function () { },
            'Ctrl-N': function () { },
            Down: function () { },
            Up: function () { },
            Enter: function (editor) {
                _this.selectSuggestion(editor);
            },
            Esc: function (editor) {
                _this.removeViewFrom(editor);
                if (editor.getOption('keyMap') === 'vim-insert')
                    editor.operation(function () {
                        // https://github.com/codemirror/CodeMirror/blob/bd37a96d362b8d92895d3960d569168ec39e4165/keymap/vim.js#L5341
                        var vim = editor.state.vim;
                        vim.insertMode = false;
                        editor.setOption('keyMap', 'vim');
                    });
            },
        };
        this.settings = settings;
        this.loadProviders();
        this.suggestions = [];
        this.selected = defaultDirection();
        this.view = null;
    }
    Object.defineProperty(Autocomplete.prototype, "isShown", {
        get: function () {
            return this.view !== null;
        },
        enumerable: false,
        configurable: true
    });
    Autocomplete.prototype.toggleViewIn = function (editor) {
        var isEnabled = this.settings.enabled;
        if (this.isShown || !isEnabled) {
            this.cursorAtTrigger = null;
            this.removeViewFrom(editor);
        }
        else if (isEnabled) {
            var cursor = copyObject(editor.getCursor());
            var currentLine = editor.getLine(cursor.line);
            var wordStartIndex = this.tokenizer.lastWordStartPos(currentLine, cursor.ch);
            var cursorAt = cursor.ch;
            cursor.ch = wordStartIndex;
            this.cursorAtTrigger = cursor;
            var word = currentLine.slice(wordStartIndex, cursorAt);
            this.showViewIn(editor, word);
        }
    };
    Autocomplete.prototype.updateViewIn = function (editor, event) {
        if (!event.ctrlKey && event.key === ' ')
            return this.removeViewFrom(editor);
        this.selected = updateSelectedSuggestionFrom(event, this.selected, this.suggestions.length);
        var cursor = copyObject(editor.getCursor());
        var currentLine = editor.getLine(cursor.line);
        var completionWord = this.tokenizer.lastWordFrom(currentLine, cursor.ch);
        var recreate = completionWord !== this.lastCompletionWord;
        if (recreate) {
            this.lastCompletionWord = completionWord;
            this.showViewIn(editor, completionWord);
        }
        else
            updateCachedView(this.view, this.selected.index);
        scrollTo(this.selected, this.view, this.suggestions.length);
    };
    Autocomplete.prototype.removeViewFrom = function (editor) {
        this.selected = defaultDirection();
        editor.removeKeyMap(this.keyMaps);
        if (!this.view)
            return;
        this.addClickListener(this.view, editor, false);
        try {
            var parentNode = this.view.parentNode;
            if (parentNode) {
                var removed = parentNode.removeChild(this.view);
                if (removed)
                    this.view = null;
            }
        }
        catch (e) {
            console.error("Cannot destroy view. Reason: " + e);
        }
    };
    Autocomplete.prototype.updateProvidersFrom = function (event, editor) {
        var _this = this;
        var tokenizer = TokenizerFactory.getTokenizer(this.settings.flowProviderTokenizeStrategy);
        if (!event.ctrlKey &&
            (tokenizer.isWordSeparator(event.key) || event.key === 'Enter')) {
            var cursor_1 = copyObject(editor.getCursor());
            if (/Enter/.test(event.key)) {
                cursor_1.line -= 1;
                var currentLine = editor.getLine(cursor_1.line);
                // Changed editor pane
                if (!currentLine)
                    return;
                cursor_1.ch = currentLine.length;
            }
            var line_1 = editor.getLine(cursor_1.line);
            this.providers.forEach(function (provider) {
                // For now only FlowProvider
                if (provider instanceof FlowProvider)
                    provider.addLastWordFrom(line_1, cursor_1.ch, _this.tokenizerStrategy);
            });
        }
    };
    Autocomplete.prototype.scanFile = function (file, strategy) {
        var _a;
        if (strategy === void 0) { strategy = 'default'; }
        var providers = this.providers;
        (_a = file.vault) === null || _a === void 0 ? void 0 : _a.read(file).then(function (content) {
            // TODO: Make it async
            providers.forEach(function (provider) {
                if (provider instanceof FlowProvider)
                    provider.addWordsFrom(content, strategy);
            });
        });
    };
    Object.defineProperty(Autocomplete.prototype, "tokenizer", {
        get: function () {
            return TokenizerFactory.getTokenizer(this.tokenizerStrategy);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autocomplete.prototype, "tokenizerStrategy", {
        get: function () {
            return this.settings.flowProviderTokenizeStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Autocomplete.prototype.showViewIn = function (editor, completionWord) {
        if (completionWord === void 0) { completionWord = ''; }
        if (this.view)
            this.removeViewFrom(editor);
        this.suggestions = this.providers.reduce(function (acc, provider) { return acc.concat(provider.matchWith(completionWord || '')); }, []);
        if (this.suggestions.length === 1) {
            // Suggest automatically
            this.selected.index = 0;
            this.selectSuggestion(editor);
        }
        else {
            editor.addKeyMap(this.keyMaps);
            this.view = generateView(this.suggestions, this.selected.index);
            this.addClickListener(this.view, editor);
            appendWidget(editor, this.view);
        }
    };
    // TODO: Refactor
    Autocomplete.prototype.addClickListener = function (view, editor, add) {
        var _this = this;
        if (add === void 0) { add = true; }
        if (!this.onClickCallback)
            this.onClickCallback = function (event) {
                var element = event.target;
                var hintId = element.id;
                if (!hintId) {
                    var parent_1 = element.parentNode;
                    if (parent_1 && parent_1.id)
                        hintId = parent_1.id;
                }
                var hintIdPrefix = 'suggestion-';
                if (hintId && hintId.startsWith(hintIdPrefix)) {
                    hintId = hintId.replace(hintIdPrefix, '');
                    var id = parseInt(hintId);
                    if (id >= 0 && id < _this.suggestions.length) {
                        _this.selected.index = id;
                        _this.selectSuggestion(editor);
                    }
                }
            };
        if (add)
            view.addEventListener('click', this.onClickCallback);
        else
            view.removeEventListener('click', this.onClickCallback);
    };
    Autocomplete.prototype.selectSuggestion = function (editor) {
        var _this = this;
        var _a;
        var cursor = editor.getCursor();
        var selectedValue = (_a = this.suggestions[this.selected.index]) === null || _a === void 0 ? void 0 : _a.value;
        if (!selectedValue) {
            this.removeViewFrom(editor);
            return;
        }
        var _b = managePlaceholders(selectedValue, this.cursorAtTrigger.ch), normalizedValue = _b.normalizedValue, newCursorPosition = _b.newCursorPosition;
        editor.operation(function () {
            editor.replaceRange(normalizedValue, _this.cursorAtTrigger, cursor);
            var updatedCursor = {
                line: cursor.line,
                ch: newCursorPosition,
            };
            editor.setCursor(updatedCursor);
        });
        // Need to remove it here because of focus
        this.removeViewFrom(editor);
        editor.focus();
    };
    Autocomplete.prototype.loadProviders = function () {
        var providers = [];
        if (this.settings.flowProvider)
            providers.push(new FlowProvider());
        if (this.settings.latexProvider)
            providers.push(new LaTexProvider());
        this.providers = providers;
    };
    return Autocomplete;
}());

var AutocompleteSettings = /** @class */ (function () {
    function AutocompleteSettings() {
        this.enabled = true;
        // TODO: Refactor provider settings
        this.latexProvider = true;
        this.flowProvider = true;
        this.flowProviderScanCurrent = true;
        this.flowProviderTokenizeStrategy = 'default';
    }
    return AutocompleteSettings;
}());

var AutocompleteSettingsTab = /** @class */ (function (_super) {
    __extends(AutocompleteSettingsTab, _super);
    function AutocompleteSettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    AutocompleteSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Autocomplete Settings' });
        new obsidian.Setting(containerEl)
            .setName('Enabled')
            .setDesc('Set the autocomplete state')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.enabled).onChange(function (value) {
                _this.plugin.settings.enabled = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        // Providers
        new obsidian.Setting(containerEl)
            .setName('Text Providers')
            .setDesc('The providers below suggest completions based on input. Be aware that enabling multiple providers can decrease performance.')
            .setHeading();
        new obsidian.Setting(containerEl)
            .setClass('no-border-top')
            .setName('LaTex Provider')
            .setDesc('Toggle LaTex suggestions')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.latexProvider).onChange(function (value) {
                _this.plugin.settings.latexProvider = value;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Flow Provider')
            .setDesc('Learns as you type. For now limited to current session.')
            .addToggle(function (cb) {
            return cb.setValue(_this.plugin.settings.flowProvider).onChange(function (value) {
                _this.plugin.settings.flowProvider = value;
                if (!value)
                    // Scan current file can be enabled only if flow provider is
                    _this.plugin.settings.flowProviderScanCurrent = false;
                _this.plugin.saveData(_this.plugin.settings);
                _this.plugin.refresh();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Flow Provider: Scan strategy')
            .setDesc('Choose the default scan strategy')
            .addDropdown(function (cb) {
            // Add options
            TOKENIZE_STRATEGIES.forEach(function (strategy) {
                var capitalized = strategy.replace(/^\w/, function (c) {
                    return c.toLocaleUpperCase();
                });
                cb.addOption(strategy, capitalized);
            });
            var settings = _this.plugin.settings;
            cb.setValue(settings.flowProviderTokenizeStrategy).onChange(function (value) {
                if (settings.flowProvider) {
                    _this.plugin.settings.flowProviderTokenizeStrategy = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.refresh();
                }
                else {
                    new obsidian.Notice('Cannot change because flow provider is not enabled.');
                }
            });
        });
        // TODO: Improve UI reactivity when parent setting is disabled
        new obsidian.Setting(containerEl)
            .setName('Flow Provider: Scan current file')
            .setDesc('Provides current file text suggestions. Be aware of performance issues with large files.')
            .addToggle(function (cb) {
            var settings = _this.plugin.settings;
            cb.setValue(settings.flowProvider && settings.flowProviderScanCurrent).onChange(function (value) {
                if (settings.flowProvider) {
                    _this.plugin.settings.flowProviderScanCurrent = value;
                    _this.plugin.saveData(_this.plugin.settings);
                    _this.plugin.refresh();
                }
                else if (value) {
                    // Cannot enable plugin
                    cb.setValue(false);
                    new obsidian.Notice('Cannot activate because flow provider is not enabled.');
                }
            });
        });
    };
    return AutocompleteSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBarView = /** @class */ (function () {
    function StatusBarView(plugin, settings) {
        var _this = this;
        this.onStatusBarClick = function () {
            var currentStrategy = _this.settings.flowProviderTokenizeStrategy;
            var currentIndex = TOKENIZE_STRATEGIES.findIndex(function (strategy) { return strategy === currentStrategy; });
            var newStrategy = currentIndex === TOKENIZE_STRATEGIES.length - 1
                ? TOKENIZE_STRATEGIES[0]
                : TOKENIZE_STRATEGIES[currentIndex + 1];
            _this.settings.flowProviderTokenizeStrategy = newStrategy;
            _this.plugin.saveData(_this.settings);
            _this.statusBar.innerHTML = _this.getStatusBarText(newStrategy);
        };
        this.plugin = plugin;
        this.settings = settings;
    }
    StatusBarView.prototype.addStatusBar = function () {
        if (!this.settings.flowProvider)
            return;
        var statusBar = this.plugin.addStatusBarItem();
        statusBar.addClass('mod-clickable');
        statusBar.innerHTML = this.getStatusBarText(this.settings.flowProviderTokenizeStrategy);
        statusBar.addEventListener('click', this.onStatusBarClick);
        this.statusBar = statusBar;
    };
    StatusBarView.prototype.removeStatusBar = function () {
        if (!this.statusBar)
            return;
        this.statusBar.removeEventListener('click', this.onStatusBarClick);
        this.statusBar.remove();
    };
    StatusBarView.prototype.getStatusBarText = function (strategy) {
        return "strategy: " + strategy;
    };
    return StatusBarView;
}());

var AutocompletePlugin = /** @class */ (function (_super) {
    __extends(AutocompletePlugin, _super);
    function AutocompletePlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keyUpListener = function (editor, event) {
            var autocomplete = _this.autocomplete;
            autocomplete.updateProvidersFrom(event, editor);
            if (!autocomplete.isShown)
                return;
            _this.updateEditorIfChanged(editor, autocomplete);
            _this.autocomplete.updateViewIn(editor, event);
        };
        return _this;
    }
    AutocompletePlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log('Loading Autocomplete plugin.');
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [new AutocompleteSettings()];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        this.addSettingTab(new AutocompleteSettingsTab(this.app, this));
                        if (!this.settings.enabled)
                            return [2 /*return*/];
                        this.statusBar = new StatusBarView(this, this.settings);
                        this.enable();
                        this.addCommands();
                        return [2 /*return*/];
                }
            });
        });
    };
    AutocompletePlugin.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Unloaded Obsidian Autocomplete');
                this.disable();
                return [2 /*return*/];
            });
        });
    };
    AutocompletePlugin.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.disable();
                this.enable();
                return [2 /*return*/];
            });
        });
    };
    AutocompletePlugin.prototype.addCommands = function () {
        var _this = this;
        this.addCommand({
            id: 'autocomplete-toggle',
            name: 'Toggle Autocomplete',
            hotkeys: [
                {
                    modifiers: ['Ctrl'],
                    key: ' ',
                },
            ],
            callback: function () {
                var autocomplete = _this.autocomplete;
                var editor = _this.getValidEditorFor(autocomplete);
                if (editor) {
                    // Do not open on vim normal mode
                    if (editor.getOption('keyMap') === 'vim')
                        return;
                    autocomplete.toggleViewIn(editor);
                }
            },
        });
        this.addScanCommands();
    };
    AutocompletePlugin.prototype.enable = function () {
        var _this = this;
        this.autocomplete = new Autocomplete(this.settings);
        var settings = this.settings;
        if (this.settings.flowProvider)
            this.statusBar.addStatusBar();
        if (settings.flowProviderScanCurrent) {
            this.app.workspace.on('file-open', this.onFileOpened, this);
            if (this.app.workspace.layoutReady)
                this.onLayoutReady();
            this.app.workspace.on('layout-ready', this.onLayoutReady, this);
        }
        this.registerCodeMirror(function (editor) {
            editor.on('keyup', _this.keyUpListener);
        });
    };
    AutocompletePlugin.prototype.disable = function () {
        var _this = this;
        var workspace = this.app.workspace;
        // Always remove to avoid any kind problem
        workspace.off('file-open', this.onFileOpened);
        workspace.off('layout-ready', this.onLayoutReady);
        this.statusBar.removeStatusBar();
        workspace.iterateCodeMirrors(function (cm) {
            cm.off('keyup', _this.keyUpListener);
            _this.autocomplete.removeViewFrom(cm);
        });
    };
    AutocompletePlugin.prototype.addScanCommands = function () {
        var _this = this;
        TOKENIZE_STRATEGIES.forEach(function (type) {
            var capitalized = type.replace(/^\w/, function (c) { return c.toLocaleUpperCase(); });
            var name = "Scan current file " + (type !== 'default' ? "(" + capitalized + ")" : '');
            _this.addCommand({
                id: "autocomplete-scan-current-file-" + type,
                name: name,
                callback: function () {
                    if (!_this.settings.flowProviderScanCurrent) {
                        new obsidian.Notice('Please activate setting flow Provider: Scan current file');
                    }
                    var autocomplete = _this.autocomplete;
                    var editor = _this.getValidEditorFor(autocomplete);
                    if (editor) {
                        var file = _this.app.workspace.getActiveFile();
                        autocomplete.scanFile(file, type);
                    }
                },
            });
        });
    };
    AutocompletePlugin.prototype.onLayoutReady = function () {
        var file = this.app.workspace.getActiveFile();
        if (file)
            this.autocomplete.scanFile(file, this.settings.flowProviderTokenizeStrategy);
    };
    AutocompletePlugin.prototype.onFileOpened = function (file) {
        if (file)
            this.autocomplete.scanFile(file, this.settings.flowProviderTokenizeStrategy);
    };
    AutocompletePlugin.prototype.getValidEditorFor = function (autocomplete) {
        var currentEditor = this.getCurrentEditor();
        if (currentEditor)
            this.updateEditorIfChanged(currentEditor, autocomplete);
        return currentEditor;
    };
    AutocompletePlugin.prototype.updateEditorIfChanged = function (editor, autocomplete) {
        if (!this.lastUsedEditor)
            this.lastUsedEditor = editor;
        if (editor !== this.lastUsedEditor) {
            autocomplete.removeViewFrom(this.lastUsedEditor);
            this.lastUsedEditor = editor;
        }
    };
    AutocompletePlugin.prototype.getCurrentEditor = function () {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        return view ? view.sourceMode.cmEditor : null;
    };
    return AutocompletePlugin;
}(obsidian.Plugin));

module.exports = AutocompletePlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9wcm92aWRlcnMvcHJvdmlkZXIudHMiLCIuLi9zcmMvYXV0b2NvbXBsZXRlL2NvcmUudHMiLCIuLi9zcmMvYXV0b2NvbXBsZXRlL3ZpZXcudHMiLCIuLi9zcmMvcHJvdmlkZXJzL2Zsb3cvdG9rZW5pemVyLnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplci9kZWZhdWx0LnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplci9hcmFiaWMudHMiLCIuLi9zcmMvdmVuZG9yL3Rpbnktc2VnbWVudGVyLnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplci9qYXBhbmVzZS50cyIsIi4uL3NyYy9wcm92aWRlcnMvZmxvdy9mYWN0b3J5LnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9mbG93LnRzIiwiLi4vc3JjL3Byb3ZpZGVycy9sYXRleC50cyIsIi4uL3NyYy9hdXRvY29tcGxldGUudHMiLCIuLi9zcmMvc2V0dGluZ3Mvc2V0dGluZ3MudHMiLCIuLi9zcmMvc2V0dGluZ3Mvc2V0dGluZ3MtdGFiLnRzIiwiLi4vc3JjL3N0YXR1c2Jhci50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQcm92aWRlciB7XG4gIGFic3RyYWN0IHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmdcbiAgYWJzdHJhY3QgY29tcGxldGlvbnM6IEFycmF5PHN0cmluZz5cblxuICBzdGF0aWMgcmVhZG9ubHkgd29yZFNlcGFyYXRvclJlZ2V4ID0gLyhcXC58LHw7fDp8J3xcInwhfFxcP3wtfFxcKXxcXF18XFx9fFxcL3wgfEVudGVyKS9nXG4gIHN0YXRpYyByZWFkb25seSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyN7fSdcblxuICBtYXRjaFdpdGgoaW5wdXQ6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgY29uc3QgaW5wdXRMb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGlucHV0SGFzVXBwZXJDYXNlID0gL1tBLVpdLy50ZXN0KGlucHV0KVxuXG4gICAgLy8gY2FzZS1zZW5zaXRpdmUgbG9naWMgaWYgaW5wdXQgaGFzIGFuIHVwcGVyIGNhc2UuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2VzIGNhc2UtaW5zZW5zaXRpdmUgbG9naWNcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuY29tcGxldGlvbnNcbiAgICAgIC5maWx0ZXIoKHN1Z2dlc3Rpb24pID0+XG4gICAgICAgIHN1Z2dlc3Rpb24gIT0gaW5wdXRcbiAgICAgICAgICA/IGlucHV0SGFzVXBwZXJDYXNlXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb24uaW5jbHVkZXMoaW5wdXQpXG4gICAgICAgICAgICA6IHN1Z2dlc3Rpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dExvd2VyZWQpXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSlcbiAgICAgIC5zb3J0KFxuICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICBOdW1iZXIoYi50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoaW5wdXRMb3dlcmVkKSkgLVxuICAgICAgICAgIE51bWJlcihhLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChpbnB1dExvd2VyZWQpKVxuICAgICAgKVxuICAgICAgLm1hcCgoc3VnZ2VzdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4geyBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSwgdmFsdWU6IHN1Z2dlc3Rpb24gfVxuICAgICAgfSlcblxuICAgIHJldHVybiBzdWdnZXN0aW9uc1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxldGlvbiB7XG4gIGNhdGVnb3J5OiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xufVxuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuLi9wcm92aWRlcnMvcHJvdmlkZXInXG5cbmV4cG9ydCB0eXBlIERpcmVjdGlvbiA9IHtcbiAgaW5kZXg6IG51bWJlclxuICBkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcgfCAnc3RpbGwnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gIHJldHVybiB7IGluZGV4OiAwLCBkaXJlY3Rpb246ICdzdGlsbCcgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFuYWdlUGxhY2Vob2xkZXJzKFxuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmcsXG4gIGluaXRpYWxDdXJzb3JJbmRleDogbnVtYmVyXG4pOiB7IG5vcm1hbGl6ZWRWYWx1ZTogc3RyaW5nOyBuZXdDdXJzb3JQb3NpdGlvbjogbnVtYmVyIH0ge1xuICBsZXQgbm9ybWFsaXplZFZhbHVlOiBzdHJpbmdcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBQcm92aWRlci5wbGFjZWhvbGRlclxuICBsZXQgbmV3Q3Vyc29yUG9zaXRpb24gPSBpbml0aWFsQ3Vyc29ySW5kZXhcblxuICBjb25zdCBwbGFjZWhvbGRlckluZGV4ID0gc2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHBsYWNlaG9sZGVyKVxuICBpZiAocGxhY2Vob2xkZXJJbmRleCA+IC0xKSB7XG4gICAgLy8gVE9ETzogTWFuYWdlIG11bHRpcGxlIHBsYWNlaG9sZGVyc1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyUmVnZXggPSBuZXcgUmVnRXhwKHBsYWNlaG9sZGVyLCAnZycpXG4gICAgbm9ybWFsaXplZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZS5yZXBsYWNlKHBsYWNlaG9sZGVyUmVnZXgsICcnKVxuICAgIG5ld0N1cnNvclBvc2l0aW9uICs9IHBsYWNlaG9sZGVySW5kZXhcbiAgfSBlbHNlIHtcbiAgICBub3JtYWxpemVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlXG4gICAgbmV3Q3Vyc29yUG9zaXRpb24gKz0gc2VsZWN0ZWRWYWx1ZS5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiB7IG5vcm1hbGl6ZWRWYWx1ZSwgbmV3Q3Vyc29yUG9zaXRpb24gfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRTdWdnZXN0aW9uRnJvbShcbiAgZXZlbnQ6IEtleWJvYXJkRXZlbnQsXG4gIHNlbGVjdGVkOiBEaXJlY3Rpb24sXG4gIHN1Z2dlc3Rpb25zTGVuZ3RoOiBudW1iZXJcbikge1xuICBsZXQgdXBkYXRlZFNlbGVjdGVkOiBEaXJlY3Rpb24gPSBzZWxlY3RlZFxuICBzd2l0Y2ggKGAke2V2ZW50LmN0cmxLZXl9ICR7ZXZlbnQua2V5fWApIHtcbiAgICBjYXNlICd0cnVlIHAnOlxuICAgIGNhc2UgJ2ZhbHNlIEFycm93VXAnOlxuICAgICAgY29uc3QgZGVjcmVhc2VkID0gc2VsZWN0ZWQuaW5kZXggLSAxXG4gICAgICB1cGRhdGVkU2VsZWN0ZWQgPSB7XG4gICAgICAgIGluZGV4OiBkZWNyZWFzZWQgPCAwID8gc3VnZ2VzdGlvbnNMZW5ndGggLSAxIDogZGVjcmVhc2VkLFxuICAgICAgICBkaXJlY3Rpb246ICdiYWNrd2FyZCcsXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3RydWUgbic6XG4gICAgY2FzZSAnZmFsc2UgQXJyb3dEb3duJzpcbiAgICAgIGNvbnN0IGluY3JlYXNlZCA9IHNlbGVjdGVkLmluZGV4ICsgMVxuICAgICAgdXBkYXRlZFNlbGVjdGVkID0ge1xuICAgICAgICBpbmRleDogaW5jcmVhc2VkID49IHN1Z2dlc3Rpb25zTGVuZ3RoID8gMCA6IGluY3JlYXNlZCxcbiAgICAgICAgZGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICB9XG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZWRTZWxlY3RlZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weU9iamVjdChvYmo6IGFueSk6IGFueSB7XG4gIHJldHVybiB7IC4uLm9iaiB9XG59XG4iLCJpbXBvcnQgeyBDb21wbGV0aW9uIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3Byb3ZpZGVyJ1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi9jb3JlJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVWaWV3KHN1Z2dlc3Rpb25zOiBDb21wbGV0aW9uW10sIHNlbGVjdGVkSW5kZXg6IG51bWJlcikge1xuICBjb25zdCBzdWdnZXN0aW9uc0h0bWwgPSBzdWdnZXN0aW9ucy5tYXAoKHRpcDogQ29tcGxldGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXhcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGlkPVwic3VnZ2VzdGlvbi0ke2luZGV4fVwiIGNsYXNzPVwibm8tc3BhY2Utd3JhcCBzdWdnZXN0aW9uLWl0ZW0ke1xuICAgICAgaXNTZWxlY3RlZCA/ICcgaXMtc2VsZWN0ZWQnIDogJydcbiAgICB9XCI+XG4gICAgICAgICAgPGRpdiBpZD1cInN1Z2dlc3Rpb24tJHtpbmRleH1cIiBjbGFzcz1cInN1Z2dlc3Rpb24tY29udGVudFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3VnZ2VzdGlvbi1mbGFpclwiPiR7dGlwLmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAke3RpcC52YWx1ZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gIH0sIFtdKVxuICBjb25zdCBzdWdnZXN0aW9uc0pvaW5lZCA9IHN1Z2dlc3Rpb25zSHRtbC5qb2luKCdcXG4nKVxuICBjb25zdCB2aWV3U3RyaW5nID0gYFxuICAgICAgPGRpdiBpZD1cInN1Z2dlc3Rpb24tbGlzdFwiIGNsYXNzPVwic3VnZ2VzdGlvblwiPlxuICAgICAgICAke1xuICAgICAgICAgIHN1Z2dlc3Rpb25zSm9pbmVkLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnNKb2luZWRcbiAgICAgICAgICAgIDogJzxkaXYgY2xhc3M9XCJuby1zdWdnZXN0aW9uc1wiPk5vIG1hdGNoIGZvdW5kPC9kaXY+J1xuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9tcHQtaW5zdHJ1Y3Rpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tcHQtaW5zdHJ1Y3Rpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb21wdC1pbnN0cnVjdGlvbi1jb21tYW5kXCI+Q3RybCtOIC/ihpEgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPk5leHQgU3VnZ2VzdGlvbjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9tcHQtaW5zdHJ1Y3Rpb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb21wdC1pbnN0cnVjdGlvbi1jb21tYW5kXCI+Q3RybCtQIC/ihpMgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlByZXZpb3VzIFN1Z2dlc3Rpb248L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvbXB0LWluc3RydWN0aW9uXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9tcHQtaW5zdHJ1Y3Rpb24tY29tbWFuZFwiPkVudGVyPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlNlbGVjdCBTdWdnZXN0aW9uPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGBcbiAgY29uc3QgY29udGFpbmVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRhaW5lck5vZGUuY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGlvbi1jb250YWluZXInKVxuICBjb250YWluZXJOb2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdmlld1N0cmluZylcblxuICByZXR1cm4gY29udGFpbmVyTm9kZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2FjaGVkVmlldyh2aWV3OiBIVE1MRWxlbWVudCwgc2VsZWN0ZWRJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gdmlldy5maXJzdEVsZW1lbnRDaGlsZD8uY2hpbGRyZW5cblxuICBpZiAoIWNoaWxkcmVuKSByZXR1cm5cblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cbiAgICBjaGlsZC50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnLCBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG8oXG4gIHNlbGVjdGVkOiBEaXJlY3Rpb24sXG4gIHZpZXc6IEhUTUxFbGVtZW50LFxuICBzdWdnZXN0aW9uc0xlbmd0aDogbnVtYmVyXG4pIHtcbiAgaWYgKCF2aWV3IHx8IHN1Z2dlc3Rpb25zTGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBUT0RPOiBJbXByb3ZlIHNjcm9sbGluZyB3aXRoIHBhZ2Ugc2l6ZSBhbmQgYm91bmRhcmllc1xuXG4gIGNvbnN0IHBhcmVudCA9IHZpZXcuY2hpbGRyZW5bMF1cbiAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkLmluZGV4XG4gIGNvbnN0IGNoaWxkID0gcGFyZW50LmNoaWxkcmVuWzBdXG4gIGlmIChjaGlsZCkge1xuICAgIGxldCBzY3JvbGxBbW91bnQgPSBjaGlsZC5zY3JvbGxIZWlnaHQgKiBzZWxlY3RlZEluZGV4XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAnZm9yd2FyZCc6XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKVxuICAgICAgICAgIC8vIEVuZCAtPiBTdGFydFxuICAgICAgICAgIHBhcmVudC5zY3JvbGxUb3AgPSAwXG4gICAgICAgIGVsc2UgcGFyZW50LnNjcm9sbFRvcCA9IHNjcm9sbEFtb3VudFxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFja3dhcmQnOlxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gc3VnZ2VzdGlvbnNMZW5ndGggLSAxKVxuICAgICAgICAgIC8vIEVuZCA8LSBTdGFydFxuICAgICAgICAgIHBhcmVudC5zY3JvbGxUb3AgPSBwYXJlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICAgIGVsc2UgcGFyZW50LnNjcm9sbFRvcCA9IHNjcm9sbEFtb3VudFxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kV2lkZ2V0KFxuICBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxuICB2aWV3OiBIVE1MRWxlbWVudCxcbiAgc2Nyb2xsYWJsZSA9IHRydWVcbikge1xuICBjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcblxuICBlZGl0b3IuYWRkV2lkZ2V0KHsgY2g6IGN1cnNvci5jaCwgbGluZTogY3Vyc29yLmxpbmUgfSwgdmlldywgc2Nyb2xsYWJsZSlcbn1cbiIsImV4cG9ydCB0eXBlIFRva2VuaXplU3RyYXRlZ3kgPSAnZGVmYXVsdCcgfCAnamFwYW5lc2UnIHwgJ2FyYWJpYydcbmV4cG9ydCBjb25zdCBUT0tFTklaRV9TVFJBVEVHSUVTOiBUb2tlbml6ZVN0cmF0ZWd5W10gPSBbXG4gICdkZWZhdWx0JyxcbiAgJ2phcGFuZXNlJyxcbiAgJ2FyYWJpYycsXG5dXG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5pemVkUmVzdWx0IHtcbiAgcmFuZ2U/OiBSYW5nZVxuICB0b2tlbnM6IHN0cmluZ1tdXG59XG5cbmV4cG9ydCB0eXBlIFJhbmdlID0geyBzdGFydD86IG51bWJlcjsgZW5kPzogbnVtYmVyIH1cbmV4cG9ydCB0eXBlIFRva2VuaXplck9wdGlvbnMgPSB7IG5vcm1hbGl6ZTogYm9vbGVhbiB9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUb2tlbml6ZXIge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29yZFNlcGFyYXRvclBhdHRlcm46IFJlZ0V4cCA9IC9bXFxbXFxdKCk8PlwiJy4sfDo7IGAhP1xcL10vXG4gIHByb3RlY3RlZCByZWFkb25seSB0cmltUGF0dGVybjogUmVnRXhwXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gTk9URTogZ2xvYmFsIGZsYWcgdGFrZXMgbm90ZSBvZiBsYXN0SW5kZXggdXNlZCFcbiAgICB0aGlzLnRyaW1QYXR0ZXJuID0gbmV3IFJlZ0V4cCh0aGlzLndvcmRTZXBhcmF0b3JQYXR0ZXJuLCAnZycpXG4gIH1cblxuICBhYnN0cmFjdCB0b2tlbml6ZSh0ZXh0OiBzdHJpbmcsIHJhbmdlPzogUmFuZ2UpOiBUb2tlbml6ZWRSZXN1bHQgfCB1bmRlZmluZWRcblxuICBsYXN0V29yZFN0YXJ0UG9zKFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIG9wdGlvbnM6IFRva2VuaXplck9wdGlvbnMgPSB7IG5vcm1hbGl6ZTogZmFsc2UgfVxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHsgbm9ybWFsaXplZCwgdXBkYXRlZEN1cnNvciB9ID0gb3B0aW9ucy5ub3JtYWxpemVcbiAgICAgID8gdGhpcy5ub3JtYWxpemVkTGluZSh0ZXh0LCBpbmRleClcbiAgICAgIDogeyBub3JtYWxpemVkOiB0ZXh0LCB1cGRhdGVkQ3Vyc29yOiBpbmRleCB9XG5cbiAgICBsZXQgd29yZFN0YXJ0SW5kZXggPSB1cGRhdGVkQ3Vyc29yXG4gICAgd2hpbGUgKFxuICAgICAgd29yZFN0YXJ0SW5kZXggJiZcbiAgICAgICF0aGlzLmlzV29yZFNlcGFyYXRvcihub3JtYWxpemVkLmNoYXJBdCh3b3JkU3RhcnRJbmRleCAtIDEpKVxuICAgIClcbiAgICAgIHdvcmRTdGFydEluZGV4IC09IDFcblxuICAgIHJldHVybiB3b3JkU3RhcnRJbmRleFxuICB9XG5cbiAgbGFzdFdvcmRGcm9tKFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBjdXJzb3JJbmRleDogbnVtYmVyLFxuICAgIG9wdGlvbnM6IFRva2VuaXplck9wdGlvbnMgPSB7IG5vcm1hbGl6ZTogZmFsc2UgfVxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCB7IG5vcm1hbGl6ZWQsIHVwZGF0ZWRDdXJzb3IgfSA9IG9wdGlvbnMubm9ybWFsaXplXG4gICAgICA/IHRoaXMubm9ybWFsaXplZExpbmUodGV4dCwgY3Vyc29ySW5kZXgpXG4gICAgICA6IHsgbm9ybWFsaXplZDogdGV4dCwgdXBkYXRlZEN1cnNvcjogY3Vyc29ySW5kZXggfVxuXG4gICAgaWYgKG9wdGlvbnMubm9ybWFsaXplKVxuICAgICAgLy8gQWxyZWFkeSBub3JtYWxpemVkXG4gICAgICBvcHRpb25zLm5vcm1hbGl6ZSA9IGZhbHNlXG5cbiAgICBsZXQgd29yZFN0YXJ0SW5kZXggPSB0aGlzLmxhc3RXb3JkU3RhcnRQb3MoXG4gICAgICBub3JtYWxpemVkLFxuICAgICAgdXBkYXRlZEN1cnNvcixcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gICAgbGV0IHdvcmQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgaWYgKHdvcmRTdGFydEluZGV4ICE9PSB1cGRhdGVkQ3Vyc29yKVxuICAgICAgd29yZCA9IHRleHQuc2xpY2Uod29yZFN0YXJ0SW5kZXgsIHVwZGF0ZWRDdXJzb3IpXG5cbiAgICByZXR1cm4gd29yZFxuICB9XG5cbiAgaXNXb3JkU2VwYXJhdG9yKGNoYXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLndvcmRTZXBhcmF0b3JQYXR0ZXJuLnRlc3QoY2hhcilcbiAgfVxuXG4gIC8qXG4gICAqIFJlbW92ZSBzcGFjZXMgYW5kIHdvcmQgc2VwYXJhdG9yc1xuICAgKiBuZWFyIHRoZSBsZWZ0IG9mIHRoZSBjdXJzb3JJbmRleFxuICAgKi9cbiAgcHJpdmF0ZSBub3JtYWxpemVkTGluZShcbiAgICBsaW5lOiBzdHJpbmcsXG4gICAgY3Vyc29ySW5kZXg6IG51bWJlclxuICApOiB7IG5vcm1hbGl6ZWQ6IHN0cmluZzsgdXBkYXRlZEN1cnNvcjogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHBhcnRpYWxMaW5lID0gbGluZS5zbGljZSgwLCBjdXJzb3JJbmRleClcbiAgICBsZXQgbm9ybWFsaXplZCA9IHBhcnRpYWxMaW5lLnRyaW1FbmQoKVxuXG4gICAgLy8gU3VidHJhY3QgaG93IG1hbnkgc3BhY2VzIHJlbW92ZWRcbiAgICBsZXQgdXBkYXRlZEN1cnNvciA9IGN1cnNvckluZGV4IC0gKHBhcnRpYWxMaW5lLmxlbmd0aCAtIG5vcm1hbGl6ZWQubGVuZ3RoKVxuXG4gICAgaWYgKG5vcm1hbGl6ZWQubGVuZ3RoID09PSAwKSByZXR1cm4geyBub3JtYWxpemVkOiAnJywgdXBkYXRlZEN1cnNvcjogMCB9XG5cbiAgICBjb25zdCBsYXN0Q2hhciA9IG5vcm1hbGl6ZWQuY2hhckF0KHVwZGF0ZWRDdXJzb3IgLSAxKVxuXG4gICAgaWYgKHRoaXMuaXNXb3JkU2VwYXJhdG9yKGxhc3RDaGFyKSkge1xuICAgICAgdXBkYXRlZEN1cnNvciAtPSAxXG4gICAgICBub3JtYWxpemVkID0gbm9ybWFsaXplZC5zbGljZSgwLCB1cGRhdGVkQ3Vyc29yKVxuICAgIH1cblxuICAgIHJldHVybiB7IG5vcm1hbGl6ZWQsIHVwZGF0ZWRDdXJzb3IgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBSYW5nZSwgVG9rZW5pemVyIH0gZnJvbSAnLi4vdG9rZW5pemVyJ1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRva2VuaXplciBleHRlbmRzIFRva2VuaXplciB7XG4gIHRva2VuaXplKHRleHQ6IHN0cmluZywgcmFuZ2U/OiBSYW5nZSkge1xuICAgIGNvbnN0IHRva2VucyA9IHRleHRcbiAgICAgIC5zbGljZShyYW5nZT8uc3RhcnQsIHJhbmdlPy5lbmQpXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmxhdE1hcDxzdHJpbmc+KChsaW5lKSA9PiBsaW5lLnNwbGl0KHRoaXMudHJpbVBhdHRlcm4pKVxuICAgICAgLmZpbHRlcigodCkgPT4gdC5sZW5ndGggPiAwKVxuXG4gICAgcmV0dXJuIHsgcmFuZ2UsIHRva2VucyB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERlZmF1bHRUb2tlbml6ZXIgfSBmcm9tICcuL2RlZmF1bHQnXG5cbmV4cG9ydCBjbGFzcyBBcmFiaWNUb2tlbml6ZXIgZXh0ZW5kcyBEZWZhdWx0VG9rZW5pemVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHdvcmRTZXBhcmF0b3JQYXR0ZXJuOiBSZWdFeHAgPSAvW1xcW1xcXSgpPD5cIicuLHw7IGAhP9iM2JtdL1xufVxuIiwiLy8gQHRzLW5vY2hlY2tcbi8vIEJlY2F1c2UgdGhpcyBjb2RlIGlzIG9yaWdpbmFsbHkgamF2YXNjcmlwdCBjb2RlLlxuXG4vLyBUaW55U2VnbWVudGVyIDAuMSAtLSBTdXBlciBjb21wYWN0IEphcGFuZXNlIHRva2VuaXplciBpbiBKYXZhc2NyaXB0XG4vLyAoYykgMjAwOCBUYWt1IEt1ZG8gPHRha3VAY2hhc2VuLm9yZz5cbi8vIFRpbnlTZWdtZW50ZXIgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUgdW5kZXIgdGhlIHRlcm1zIG9mIGEgbmV3IEJTRCBsaWNlbmNlLlxuLy8gRm9yIGRldGFpbHMsIHNlZSBodHRwOi8vY2hhc2VuLm9yZy9+dGFrdS9zb2Z0d2FyZS9UaW55U2VnbWVudGVyL0xJQ0VOQ0UudHh0XG5cbmV4cG9ydCBmdW5jdGlvbiBUaW55U2VnbWVudGVyKCkge1xuICB2YXIgcGF0dGVybnMgPSB7XG4gICAgJ1vkuIDkuozkuInlm5vkupTlha3kuIPlhavkuZ3ljYHnmb7ljYPkuIflhITlhYZdJzogJ00nLFxuICAgICdb5LiALem+oOOAheOAhuODteODtl0nOiAnSCcsXG4gICAgJ1vjgYEt44KTXSc6ICdJJyxcbiAgICAnW+OCoS3jg7Tjg7zvvbEt776d776e772wXSc6ICdLJyxcbiAgICAnW2EtekEtWu+9gS3vvZrvvKEt77y6XSc6ICdBJyxcbiAgICAnWzAtOe+8kC3vvJldJzogJ04nLFxuICB9XG4gIHRoaXMuY2hhcnR5cGVfID0gW11cbiAgZm9yICh2YXIgaSBpbiBwYXR0ZXJucykge1xuICAgIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKClcbiAgICByZWdleHAuY29tcGlsZShpKVxuICAgIHRoaXMuY2hhcnR5cGVfLnB1c2goW3JlZ2V4cCwgcGF0dGVybnNbaV1dKVxuICB9XG5cbiAgdGhpcy5CSUFTX18gPSAtMzMyXG4gIHRoaXMuQkMxX18gPSB7IEhIOiA2LCBJSTogMjQ2MSwgS0g6IDQwNiwgT0g6IC0xMzc4IH1cbiAgdGhpcy5CQzJfXyA9IHtcbiAgICBBQTogLTMyNjcsXG4gICAgQUk6IDI3NDQsXG4gICAgQU46IC04NzgsXG4gICAgSEg6IC00MDcwLFxuICAgIEhNOiAtMTcxMSxcbiAgICBITjogNDAxMixcbiAgICBITzogMzc2MSxcbiAgICBJQTogMTMyNyxcbiAgICBJSDogLTExODQsXG4gICAgSUk6IC0xMzMyLFxuICAgIElLOiAxNzIxLFxuICAgIElPOiA1NDkyLFxuICAgIEtJOiAzODMxLFxuICAgIEtLOiAtODc0MSxcbiAgICBNSDogLTMxMzIsXG4gICAgTUs6IDMzMzQsXG4gICAgT086IC0yOTIwLFxuICB9XG4gIHRoaXMuQkMzX18gPSB7XG4gICAgSEg6IDk5NixcbiAgICBISTogNjI2LFxuICAgIEhLOiAtNzIxLFxuICAgIEhOOiAtMTMwNyxcbiAgICBITzogLTgzNixcbiAgICBJSDogLTMwMSxcbiAgICBLSzogMjc2MixcbiAgICBNSzogMTA3OSxcbiAgICBNTTogNDAzNCxcbiAgICBPQTogLTE2NTIsXG4gICAgT0g6IDI2NixcbiAgfVxuICB0aGlzLkJQMV9fID0geyBCQjogMjk1LCBPQjogMzA0LCBPTzogLTEyNSwgVUI6IDM1MiB9XG4gIHRoaXMuQlAyX18gPSB7IEJPOiA2MCwgT086IC0xNzYyIH1cbiAgdGhpcy5CUTFfXyA9IHtcbiAgICBCSEg6IDExNTAsXG4gICAgQkhNOiAxNTIxLFxuICAgIEJJSTogLTExNTgsXG4gICAgQklNOiA4ODYsXG4gICAgQk1IOiAxMjA4LFxuICAgIEJOSDogNDQ5LFxuICAgIEJPSDogLTkxLFxuICAgIEJPTzogLTI1OTcsXG4gICAgT0hJOiA0NTEsXG4gICAgT0lIOiAtMjk2LFxuICAgIE9LQTogMTg1MSxcbiAgICBPS0g6IC0xMDIwLFxuICAgIE9LSzogOTA0LFxuICAgIE9PTzogMjk2NSxcbiAgfVxuICB0aGlzLkJRMl9fID0ge1xuICAgIEJISDogMTE4LFxuICAgIEJISTogLTExNTksXG4gICAgQkhNOiA0NjYsXG4gICAgQklIOiAtOTE5LFxuICAgIEJLSzogLTE3MjAsXG4gICAgQktPOiA4NjQsXG4gICAgT0hIOiAtMTEzOSxcbiAgICBPSE06IC0xODEsXG4gICAgT0lIOiAxNTMsXG4gICAgVUhJOiAtMTE0NixcbiAgfVxuICB0aGlzLkJRM19fID0ge1xuICAgIEJISDogLTc5MixcbiAgICBCSEk6IDI2NjQsXG4gICAgQklJOiAtMjk5LFxuICAgIEJLSTogNDE5LFxuICAgIEJNSDogOTM3LFxuICAgIEJNTTogODMzNSxcbiAgICBCTk46IDk5OCxcbiAgICBCT0g6IDc3NSxcbiAgICBPSEg6IDIxNzQsXG4gICAgT0hNOiA0MzksXG4gICAgT0lJOiAyODAsXG4gICAgT0tIOiAxNzk4LFxuICAgIE9LSTogLTc5MyxcbiAgICBPS086IC0yMjQyLFxuICAgIE9NSDogLTI0MDIsXG4gICAgT09POiAxMTY5OSxcbiAgfVxuICB0aGlzLkJRNF9fID0ge1xuICAgIEJISDogLTM4OTUsXG4gICAgQklIOiAzNzYxLFxuICAgIEJJSTogLTQ2NTQsXG4gICAgQklLOiAxMzQ4LFxuICAgIEJLSzogLTE4MDYsXG4gICAgQk1JOiAtMzM4NSxcbiAgICBCT086IC0xMjM5NixcbiAgICBPQUg6IDkyNixcbiAgICBPSEg6IDI2NixcbiAgICBPSEs6IC0yMDM2LFxuICAgIE9OTjogLTk3MyxcbiAgfVxuICB0aGlzLkJXMV9fID0ge1xuICAgICcs44GoJzogNjYwLFxuICAgICcs5ZCMJzogNzI3LFxuICAgIEIx44GCOiAxNDA0LFxuICAgIEIx5ZCMOiA1NDIsXG4gICAgJ+OAgeOBqCc6IDY2MCxcbiAgICAn44CB5ZCMJzogNzI3LFxuICAgICfjgI3jgagnOiAxNjgyLFxuICAgIOOBguOBozogMTUwNSxcbiAgICDjgYTjgYY6IDE3NDMsXG4gICAg44GE44GjOiAtMjA1NSxcbiAgICDjgYTjgos6IDY3MixcbiAgICDjgYbjgZc6IC00ODE3LFxuICAgIOOBhuOCkzogNjY1LFxuICAgIOOBi+OCiTogMzQ3MixcbiAgICDjgYzjgok6IDYwMCxcbiAgICDjgZPjgYY6IC03OTAsXG4gICAg44GT44GoOiAyMDgzLFxuICAgIOOBk+OCkzogLTEyNjIsXG4gICAg44GV44KJOiAtNDE0MyxcbiAgICDjgZXjgpM6IDQ1NzMsXG4gICAg44GX44GfOiAyNjQxLFxuICAgIOOBl+OBpjogMTEwNCxcbiAgICDjgZnjgac6IC0zMzk5LFxuICAgIOOBneOBkzogMTk3NyxcbiAgICDjgZ3jgow6IC04NzEsXG4gICAg44Gf44GhOiAxMTIyLFxuICAgIOOBn+OCgTogNjAxLFxuICAgIOOBo+OBnzogMzQ2MyxcbiAgICDjgaTjgYQ6IC04MDIsXG4gICAg44Gm44GEOiA4MDUsXG4gICAg44Gm44GNOiAxMjQ5LFxuICAgIOOBp+OBjTogMTEyNyxcbiAgICDjgafjgZk6IDM0NDUsXG4gICAg44Gn44GvOiA4NDQsXG4gICAg44Go44GEOiAtNDkxNSxcbiAgICDjgajjgb86IDE5MjIsXG4gICAg44Gp44GTOiAzODg3LFxuICAgIOOBquOBhDogNTcxMyxcbiAgICDjgarjgaM6IDMwMTUsXG4gICAg44Gq44GpOiA3Mzc5LFxuICAgIOOBquOCkzogLTExMTMsXG4gICAg44Gr44GXOiAyNDY4LFxuICAgIOOBq+OBrzogMTQ5OCxcbiAgICDjgavjgoI6IDE2NzEsXG4gICAg44Gr5a++OiAtOTEyLFxuICAgIOOBruS4gDogLTUwMSxcbiAgICDjga7kuK06IDc0MSxcbiAgICDjgb7jgZs6IDI0NDgsXG4gICAg44G+44GnOiAxNzExLFxuICAgIOOBvuOBvjogMjYwMCxcbiAgICDjgb7jgos6IC0yMTU1LFxuICAgIOOChOOCgDogLTE5NDcsXG4gICAg44KI44GjOiAtMjU2NSxcbiAgICDjgozjgZ86IDIzNjksXG4gICAg44KM44GnOiAtOTEzLFxuICAgIOOCkuOBlzogMTg2MCxcbiAgICDjgpLopos6IDczMSxcbiAgICDkuqHjgY86IC0xODg2LFxuICAgIOS6rOmDvTogMjU1OCxcbiAgICDlj5bjgoo6IC0yNzg0LFxuICAgIOWkp+OBjTogLTI2MDQsXG4gICAg5aSn6ZiqOiAxNDk3LFxuICAgIOW5s+aWuTogLTIzMTQsXG4gICAg5byV44GNOiAtMTMzNixcbiAgICDml6XmnKw6IC0xOTUsXG4gICAg5pys5b2TOiAtMjQyMyxcbiAgICDmr47ml6U6IC0yMTEzLFxuICAgIOebruaMhzogLTcyNCxcbiAgICDvvKLvvJHjgYI6IDE0MDQsXG4gICAg77yi77yR5ZCMOiA1NDIsXG4gICAgJ++9o+OBqCc6IDE2ODIsXG4gIH1cbiAgdGhpcy5CVzJfXyA9IHtcbiAgICAnLi4nOiAtMTE4MjIsXG4gICAgMTE6IC02NjksXG4gICAgJ+KAleKAlSc6IC01NzMwLFxuICAgICfiiJLiiJInOiAtMTMxNzUsXG4gICAg44GE44GGOiAtMTYwOSxcbiAgICDjgYbjgYs6IDI0OTAsXG4gICAg44GL44GXOiAtMTM1MCxcbiAgICDjgYvjgoI6IC02MDIsXG4gICAg44GL44KJOiAtNzE5NCxcbiAgICDjgYvjgow6IDQ2MTIsXG4gICAg44GM44GEOiA4NTMsXG4gICAg44GM44KJOiAtMzE5OCxcbiAgICDjgY3jgZ86IDE5NDEsXG4gICAg44GP44GqOiAtMTU5NyxcbiAgICDjgZPjgag6IC04MzkyLFxuICAgIOOBk+OBrjogLTQxOTMsXG4gICAg44GV44GbOiA0NTMzLFxuICAgIOOBleOCjDogMTMxNjgsXG4gICAg44GV44KTOiAtMzk3NyxcbiAgICDjgZfjgYQ6IC0xODE5LFxuICAgIOOBl+OBizogLTU0NSxcbiAgICDjgZfjgZ86IDUwNzgsXG4gICAg44GX44GmOiA5NzIsXG4gICAg44GX44GqOiA5MzksXG4gICAg44Gd44GuOiAtMzc0NCxcbiAgICDjgZ/jgYQ6IC0xMjUzLFxuICAgIOOBn+OBnzogLTY2MixcbiAgICDjgZ/jgaA6IC0zODU3LFxuICAgIOOBn+OBoTogLTc4NixcbiAgICDjgZ/jgag6IDEyMjQsXG4gICAg44Gf44GvOiAtOTM5LFxuICAgIOOBo+OBnzogNDU4OSxcbiAgICDjgaPjgaY6IDE2NDcsXG4gICAg44Gj44GoOiAtMjA5NCxcbiAgICDjgabjgYQ6IDYxNDQsXG4gICAg44Gm44GNOiAzNjQwLFxuICAgIOOBpuOBjzogMjU1MSxcbiAgICDjgabjga86IC0zMTEwLFxuICAgIOOBpuOCgjogLTMwNjUsXG4gICAg44Gn44GEOiAyNjY2LFxuICAgIOOBp+OBjTogLTE1MjgsXG4gICAg44Gn44GXOiAtMzgyOCxcbiAgICDjgafjgZk6IC00NzYxLFxuICAgIOOBp+OCgjogLTQyMDMsXG4gICAg44Go44GEOiAxODkwLFxuICAgIOOBqOOBkzogLTE3NDYsXG4gICAg44Go44GoOiAtMjI3OSxcbiAgICDjgajjga46IDcyMCxcbiAgICDjgajjgb86IDUxNjgsXG4gICAg44Go44KCOiAtMzk0MSxcbiAgICDjgarjgYQ6IC0yNDg4LFxuICAgIOOBquOBjDogLTEzMTMsXG4gICAg44Gq44GpOiAtNjUwOSxcbiAgICDjgarjga46IDI2MTQsXG4gICAg44Gq44KTOiAzMDk5LFxuICAgIOOBq+OBijogLTE2MTUsXG4gICAg44Gr44GXOiAyNzQ4LFxuICAgIOOBq+OBqjogMjQ1NCxcbiAgICDjgavjgog6IC03MjM2LFxuICAgIOOBq+WvvjogLTE0OTQzLFxuICAgIOOBq+W+kzogLTQ2ODgsXG4gICAg44Gr6ZaiOiAtMTEzODgsXG4gICAg44Gu44GLOiAyMDkzLFxuICAgIOOBruOBpzogLTcwNTksXG4gICAg44Gu44GrOiAtNjA0MSxcbiAgICDjga7jga46IC02MTI1LFxuICAgIOOBr+OBhDogMTA3MyxcbiAgICDjga/jgYw6IC0xMDMzLFxuICAgIOOBr+OBmjogLTI1MzIsXG4gICAg44Gw44KMOiAxODEzLFxuICAgIOOBvuOBlzogLTEzMTYsXG4gICAg44G+44GnOiAtNjYyMSxcbiAgICDjgb7jgow6IDU0MDksXG4gICAg44KB44GmOiAtMzE1MyxcbiAgICDjgoLjgYQ6IDIyMzAsXG4gICAg44KC44GuOiAtMTA3MTMsXG4gICAg44KJ44GLOiAtOTQ0LFxuICAgIOOCieOBlzogLTE2MTEsXG4gICAg44KJ44GrOiAtMTg5NyxcbiAgICDjgorjgZc6IDY1MSxcbiAgICDjgorjgb46IDE2MjAsXG4gICAg44KM44GfOiA0MjcwLFxuICAgIOOCjOOBpjogODQ5LFxuICAgIOOCjOOBsDogNDExNCxcbiAgICDjgo3jgYY6IDYwNjcsXG4gICAg44KP44KMOiA3OTAxLFxuICAgIOOCkumAmjogLTExODc3LFxuICAgIOOCk+OBoDogNzI4LFxuICAgIOOCk+OBqjogLTQxMTUsXG4gICAg5LiA5Lq6OiA2MDIsXG4gICAg5LiA5pa5OiAtMTM3NSxcbiAgICDkuIDml6U6IDk3MCxcbiAgICDkuIDpg6g6IC0xMDUxLFxuICAgIOS4iuOBjDogLTQ0NzksXG4gICAg5Lya56S+OiAtMTExNixcbiAgICDlh7rjgaY6IDIxNjMsXG4gICAg5YiG44GuOiAtNzc1OCxcbiAgICDlkIzlhZo6IDk3MCxcbiAgICDlkIzml6U6IC05MTMsXG4gICAg5aSn6ZiqOiAtMjQ3MSxcbiAgICDlp5Tlk6E6IC0xMjUwLFxuICAgIOWwkeOBqjogLTEwNTAsXG4gICAg5bm05bqmOiAtODY2OSxcbiAgICDlubTplpM6IC0xNjI2LFxuICAgIOW6nOecjDogLTIzNjMsXG4gICAg5omL5qipOiAtMTk4MixcbiAgICDmlrDogZ46IC00MDY2LFxuICAgIOaXpeaWsDogLTcyMixcbiAgICDml6XmnKw6IC03MDY4LFxuICAgIOaXpeexszogMzM3MixcbiAgICDmm5zml6U6IC02MDEsXG4gICAg5pyd6a6uOiAtMjM1NSxcbiAgICDmnKzkuro6IC0yNjk3LFxuICAgIOadseS6rDogLTE1NDMsXG4gICAg54S244GoOiAtMTM4NCxcbiAgICDnpL7kvJo6IC0xMjc2LFxuICAgIOeri+OBpjogLTk5MCxcbiAgICDnrKzjgas6IC0xNjEyLFxuICAgIOexs+WbvTogLTQyNjgsXG4gICAgJ++8ke+8kSc6IC02NjksXG4gIH1cbiAgdGhpcy5CVzNfXyA9IHtcbiAgICDjgYLjgZ86IC0yMTk0LFxuICAgIOOBguOCijogNzE5LFxuICAgIOOBguOCizogMzg0NixcbiAgICAn44GELic6IC0xMTg1LFxuICAgICfjgYTjgIInOiAtMTE4NSxcbiAgICDjgYTjgYQ6IDUzMDgsXG4gICAg44GE44GIOiAyMDc5LFxuICAgIOOBhOOBjzogMzAyOSxcbiAgICDjgYTjgZ86IDIwNTYsXG4gICAg44GE44GjOiAxODgzLFxuICAgIOOBhOOCizogNTYwMCxcbiAgICDjgYTjgo86IDE1MjcsXG4gICAg44GG44GhOiAxMTE3LFxuICAgIOOBhuOBqDogNDc5OCxcbiAgICDjgYjjgag6IDE0NTQsXG4gICAgJ+OBiy4nOiAyODU3LFxuICAgICfjgYvjgIInOiAyODU3LFxuICAgIOOBi+OBkTogLTc0MyxcbiAgICDjgYvjgaM6IC00MDk4LFxuICAgIOOBi+OBqzogLTY2OSxcbiAgICDjgYvjgok6IDY1MjAsXG4gICAg44GL44KKOiAtMjY3MCxcbiAgICAn44GMLCc6IDE4MTYsXG4gICAgJ+OBjOOAgSc6IDE4MTYsXG4gICAg44GM44GNOiAtNDg1NSxcbiAgICDjgYzjgZE6IC0xMTI3LFxuICAgIOOBjOOBozogLTkxMyxcbiAgICDjgYzjgok6IC00OTc3LFxuICAgIOOBjOOCijogLTIwNjQsXG4gICAg44GN44GfOiAxNjQ1LFxuICAgIOOBkeOBqTogMTM3NCxcbiAgICDjgZPjgag6IDczOTcsXG4gICAg44GT44GuOiAxNTQyLFxuICAgIOOBk+OCjTogLTI3NTcsXG4gICAg44GV44GEOiAtNzE0LFxuICAgIOOBleOCkjogOTc2LFxuICAgICfjgZcsJzogMTU1NyxcbiAgICAn44GX44CBJzogMTU1NyxcbiAgICDjgZfjgYQ6IC0zNzE0LFxuICAgIOOBl+OBnzogMzU2MixcbiAgICDjgZfjgaY6IDE0NDksXG4gICAg44GX44GqOiAyNjA4LFxuICAgIOOBl+OBvjogMTIwMCxcbiAgICAn44GZLic6IC0xMzEwLFxuICAgICfjgZnjgIInOiAtMTMxMCxcbiAgICDjgZnjgos6IDY1MjEsXG4gICAgJ+OBmiwnOiAzNDI2LFxuICAgICfjgZrjgIEnOiAzNDI2LFxuICAgIOOBmuOBqzogODQxLFxuICAgIOOBneOBhjogNDI4LFxuICAgICfjgZ8uJzogODg3NSxcbiAgICAn44Gf44CCJzogODg3NSxcbiAgICDjgZ/jgYQ6IC01OTQsXG4gICAg44Gf44GuOiA4MTIsXG4gICAg44Gf44KKOiAtMTE4MyxcbiAgICDjgZ/jgos6IC04NTMsXG4gICAgJ+OBoC4nOiA0MDk4LFxuICAgICfjgaDjgIInOiA0MDk4LFxuICAgIOOBoOOBozogMTAwNCxcbiAgICDjgaPjgZ86IC00NzQ4LFxuICAgIOOBo+OBpjogMzAwLFxuICAgIOOBpuOBhDogNjI0MCxcbiAgICDjgabjgYo6IDg1NSxcbiAgICDjgabjgoI6IDMwMixcbiAgICDjgafjgZk6IDE0MzcsXG4gICAg44Gn44GrOiAtMTQ4MixcbiAgICDjgafjga86IDIyOTUsXG4gICAg44Go44GGOiAtMTM4NyxcbiAgICDjgajjgZc6IDIyNjYsXG4gICAg44Go44GuOiA1NDEsXG4gICAg44Go44KCOiAtMzU0MyxcbiAgICDjganjgYY6IDQ2NjQsXG4gICAg44Gq44GEOiAxNzk2LFxuICAgIOOBquOBjzogLTkwMyxcbiAgICDjgarjgak6IDIxMzUsXG4gICAgJ+OBqywnOiAtMTAyMSxcbiAgICAn44Gr44CBJzogLTEwMjEsXG4gICAg44Gr44GXOiAxNzcxLFxuICAgIOOBq+OBqjogMTkwNixcbiAgICDjgavjga86IDI2NDQsXG4gICAgJ+OBriwnOiAtNzI0LFxuICAgICfjga7jgIEnOiAtNzI0LFxuICAgIOOBruWtkDogLTEwMDAsXG4gICAgJ+OBrywnOiAxMzM3LFxuICAgICfjga/jgIEnOiAxMzM3LFxuICAgIOOBueOBjTogMjE4MSxcbiAgICDjgb7jgZc6IDExMTMsXG4gICAg44G+44GZOiA2OTQzLFxuICAgIOOBvuOBozogLTE1NDksXG4gICAg44G+44GnOiA2MTU0LFxuICAgIOOBvuOCjDogLTc5MyxcbiAgICDjgonjgZc6IDE0NzksXG4gICAg44KJ44KMOiA2ODIwLFxuICAgIOOCi+OCizogMzgxOCxcbiAgICAn44KMLCc6IDg1NCxcbiAgICAn44KM44CBJzogODU0LFxuICAgIOOCjOOBnzogMTg1MCxcbiAgICDjgozjgaY6IDEzNzUsXG4gICAg44KM44GwOiAtMzI0NixcbiAgICDjgozjgos6IDEwOTEsXG4gICAg44KP44KMOiAtNjA1LFxuICAgIOOCk+OBoDogNjA2LFxuICAgIOOCk+OBpzogNzk4LFxuICAgIOOCq+aciDogOTkwLFxuICAgIOS8muitsDogODYwLFxuICAgIOWFpeOCijogMTIzMixcbiAgICDlpKfkvJo6IDIyMTcsXG4gICAg5aeL44KBOiAxNjgxLFxuICAgIOW4gjogOTY1LFxuICAgIOaWsOiBnjogLTUwNTUsXG4gICAgJ+aXpSwnOiA5NzQsXG4gICAgJ+aXpeOAgSc6IDk3NCxcbiAgICDnpL7kvJo6IDIwMjQsXG4gICAg77225pyIOiA5OTAsXG4gIH1cbiAgdGhpcy5UQzFfXyA9IHtcbiAgICBBQUE6IDEwOTMsXG4gICAgSEhIOiAxMDI5LFxuICAgIEhITTogNTgwLFxuICAgIEhJSTogOTk4LFxuICAgIEhPSDogLTM5MCxcbiAgICBIT006IC0zMzEsXG4gICAgSUhJOiAxMTY5LFxuICAgIElPSDogLTE0MixcbiAgICBJT0k6IC0xMDE1LFxuICAgIElPTTogNDY3LFxuICAgIE1NSDogMTg3LFxuICAgIE9PSTogLTE4MzIsXG4gIH1cbiAgdGhpcy5UQzJfXyA9IHtcbiAgICBISE86IDIwODgsXG4gICAgSElJOiAtMTAyMyxcbiAgICBITU06IC0xMTU0LFxuICAgIElISTogLTE5NjUsXG4gICAgS0tIOiA3MDMsXG4gICAgT0lJOiAtMjY0OSxcbiAgfVxuICB0aGlzLlRDM19fID0ge1xuICAgIEFBQTogLTI5NCxcbiAgICBISEg6IDM0NixcbiAgICBISEk6IC0zNDEsXG4gICAgSElJOiAtMTA4OCxcbiAgICBISUs6IDczMSxcbiAgICBIT0g6IC0xNDg2LFxuICAgIElISDogMTI4LFxuICAgIElISTogLTMwNDEsXG4gICAgSUhPOiAtMTkzNSxcbiAgICBJSUg6IC04MjUsXG4gICAgSUlNOiAtMTAzNSxcbiAgICBJT0k6IC01NDIsXG4gICAgS0hIOiAtMTIxNixcbiAgICBLS0E6IDQ5MSxcbiAgICBLS0g6IC0xMjE3LFxuICAgIEtPSzogLTEwMDksXG4gICAgTUhIOiAtMjY5NCxcbiAgICBNSE06IC00NTcsXG4gICAgTUhPOiAxMjMsXG4gICAgTU1IOiAtNDcxLFxuICAgIE5OSDogLTE2ODksXG4gICAgTk5POiA2NjIsXG4gICAgT0hPOiAtMzM5MyxcbiAgfVxuICB0aGlzLlRDNF9fID0ge1xuICAgIEhISDogLTIwMyxcbiAgICBISEk6IDEzNDQsXG4gICAgSEhLOiAzNjUsXG4gICAgSEhNOiAtMTIyLFxuICAgIEhITjogMTgyLFxuICAgIEhITzogNjY5LFxuICAgIEhJSDogODA0LFxuICAgIEhJSTogNjc5LFxuICAgIEhPSDogNDQ2LFxuICAgIElISDogNjk1LFxuICAgIElITzogLTIzMjQsXG4gICAgSUlIOiAzMjEsXG4gICAgSUlJOiAxNDk3LFxuICAgIElJTzogNjU2LFxuICAgIElPTzogNTQsXG4gICAgS0FLOiA0ODQ1LFxuICAgIEtLQTogMzM4NixcbiAgICBLS0s6IDMwNjUsXG4gICAgTUhIOiAtNDA1LFxuICAgIE1ISTogMjAxLFxuICAgIE1NSDogLTI0MSxcbiAgICBNTU06IDY2MSxcbiAgICBNT006IDg0MSxcbiAgfVxuICB0aGlzLlRRMV9fID0ge1xuICAgIEJISEg6IC0yMjcsXG4gICAgQkhISTogMzE2LFxuICAgIEJISUg6IC0xMzIsXG4gICAgQklISDogNjAsXG4gICAgQklJSTogMTU5NSxcbiAgICBCTkhIOiAtNzQ0LFxuICAgIEJPSEg6IDIyNSxcbiAgICBCT09POiAtOTA4LFxuICAgIE9BS0s6IDQ4MixcbiAgICBPSEhIOiAyODEsXG4gICAgT0hJSDogMjQ5LFxuICAgIE9JSEk6IDIwMCxcbiAgICBPSUlIOiAtNjgsXG4gIH1cbiAgdGhpcy5UUTJfXyA9IHsgQklISDogLTE0MDEsIEJJSUk6IC0xMDMzLCBCS0FLOiAtNTQzLCBCT09POiAtNTU5MSB9XG4gIHRoaXMuVFEzX18gPSB7XG4gICAgQkhISDogNDc4LFxuICAgIEJISE06IC0xMDczLFxuICAgIEJISUg6IDIyMixcbiAgICBCSElJOiAtNTA0LFxuICAgIEJJSUg6IC0xMTYsXG4gICAgQklJSTogLTEwNSxcbiAgICBCTUhJOiAtODYzLFxuICAgIEJNSE06IC00NjQsXG4gICAgQk9NSDogNjIwLFxuICAgIE9ISEg6IDM0NixcbiAgICBPSEhJOiAxNzI5LFxuICAgIE9ISUk6IDk5NyxcbiAgICBPSE1IOiA0ODEsXG4gICAgT0lISDogNjIzLFxuICAgIE9JSUg6IDEzNDQsXG4gICAgT0tBSzogMjc5MixcbiAgICBPS0hIOiA1ODcsXG4gICAgT0tLQTogNjc5LFxuICAgIE9PSEg6IDExMCxcbiAgICBPT0lJOiAtNjg1LFxuICB9XG4gIHRoaXMuVFE0X18gPSB7XG4gICAgQkhISDogLTcyMSxcbiAgICBCSEhNOiAtMzYwNCxcbiAgICBCSElJOiAtOTY2LFxuICAgIEJJSUg6IC02MDcsXG4gICAgQklJSTogLTIxODEsXG4gICAgT0FBQTogLTI3NjMsXG4gICAgT0FLSzogMTgwLFxuICAgIE9ISEg6IC0yOTQsXG4gICAgT0hISTogMjQ0NixcbiAgICBPSEhPOiA0ODAsXG4gICAgT0hJSDogLTE1NzMsXG4gICAgT0lISDogMTkzNSxcbiAgICBPSUhJOiAtNDkzLFxuICAgIE9JSUg6IDYyNixcbiAgICBPSUlJOiAtNDAwNyxcbiAgICBPS0FLOiAtODE1NixcbiAgfVxuICB0aGlzLlRXMV9fID0geyDjgavjgaTjgYQ6IC00NjgxLCDmnbHkuqzpg706IDIwMjYgfVxuICB0aGlzLlRXMl9fID0ge1xuICAgIOOBguOCi+eoizogLTIwNDksXG4gICAg44GE44Gj44GfOiAtMTI1NixcbiAgICDjgZPjgo3jgYw6IC0yNDM0LFxuICAgIOOBl+OCh+OBhjogMzg3MyxcbiAgICDjgZ3jga7lvow6IC00NDMwLFxuICAgIOOBoOOBo+OBpjogLTEwNDksXG4gICAg44Gm44GE44GfOiAxODMzLFxuICAgIOOBqOOBl+OBpjogLTQ2NTcsXG4gICAg44Go44KC44GrOiAtNDUxNyxcbiAgICDjgoLjga7jgac6IDE4ODIsXG4gICAg5LiA5rCX44GrOiAtNzkyLFxuICAgIOWIneOCgeOBpjogLTE1MTIsXG4gICAg5ZCM5pmC44GrOiAtODA5NyxcbiAgICDlpKfjgY3jgao6IC0xMjU1LFxuICAgIOWvvuOBl+OBpjogLTI3MjEsXG4gICAg56S+5Lya5YWaOiAtMzIxNixcbiAgfVxuICB0aGlzLlRXM19fID0ge1xuICAgIOOBhOOBn+OBoDogLTE3MzQsXG4gICAg44GX44Gm44GEOiAxMzE0LFxuICAgIOOBqOOBl+OBpjogLTQzMTQsXG4gICAg44Gr44Gk44GEOiAtNTQ4MyxcbiAgICDjgavjgajjgaM6IC01OTg5LFxuICAgIOOBq+W9k+OBnzogLTYyNDcsXG4gICAgJ+OBruOBpywnOiAtNzI3LFxuICAgICfjga7jgafjgIEnOiAtNzI3LFxuICAgIOOBruOCguOBrjogLTYwMCxcbiAgICDjgozjgYvjgok6IC0zNzUyLFxuICAgIOWNgeS6jOaciDogLTIyODcsXG4gIH1cbiAgdGhpcy5UVzRfXyA9IHtcbiAgICAn44GE44GGLic6IDg1NzYsXG4gICAgJ+OBhOOBhuOAgic6IDg1NzYsXG4gICAg44GL44KJ44GqOiAtMjM0OCxcbiAgICDjgZfjgabjgYQ6IDI5NTgsXG4gICAgJ+OBn+OBjCwnOiAxNTE2LFxuICAgICfjgZ/jgYzjgIEnOiAxNTE2LFxuICAgIOOBpuOBhOOCizogMTUzOCxcbiAgICDjgajjgYTjgYY6IDEzNDksXG4gICAg44G+44GX44GfOiA1NTQzLFxuICAgIOOBvuOBm+OCkzogMTA5NyxcbiAgICDjgojjgYbjgag6IC00MjU4LFxuICAgIOOCiOOCi+OBqDogNTg2NSxcbiAgfVxuICB0aGlzLlVDMV9fID0geyBBOiA0ODQsIEs6IDkzLCBNOiA2NDUsIE86IC01MDUgfVxuICB0aGlzLlVDMl9fID0geyBBOiA4MTksIEg6IDEwNTksIEk6IDQwOSwgTTogMzk4NywgTjogNTc3NSwgTzogNjQ2IH1cbiAgdGhpcy5VQzNfXyA9IHsgQTogLTEzNzAsIEk6IDIzMTEgfVxuICB0aGlzLlVDNF9fID0ge1xuICAgIEE6IC0yNjQzLFxuICAgIEg6IDE4MDksXG4gICAgSTogLTEwMzIsXG4gICAgSzogLTM0NTAsXG4gICAgTTogMzU2NSxcbiAgICBOOiAzODc2LFxuICAgIE86IDY2NDYsXG4gIH1cbiAgdGhpcy5VQzVfXyA9IHsgSDogMzEzLCBJOiAtMTIzOCwgSzogLTc5OSwgTTogNTM5LCBPOiAtODMxIH1cbiAgdGhpcy5VQzZfXyA9IHsgSDogLTUwNiwgSTogLTI1MywgSzogODcsIE06IDI0NywgTzogLTM4NyB9XG4gIHRoaXMuVVAxX18gPSB7IE86IC0yMTQgfVxuICB0aGlzLlVQMl9fID0geyBCOiA2OSwgTzogOTM1IH1cbiAgdGhpcy5VUDNfXyA9IHsgQjogMTg5IH1cbiAgdGhpcy5VUTFfXyA9IHtcbiAgICBCSDogMjEsXG4gICAgQkk6IC0xMixcbiAgICBCSzogLTk5LFxuICAgIEJOOiAxNDIsXG4gICAgQk86IC01NixcbiAgICBPSDogLTk1LFxuICAgIE9JOiA0NzcsXG4gICAgT0s6IDQxMCxcbiAgICBPTzogLTI0MjIsXG4gIH1cbiAgdGhpcy5VUTJfXyA9IHsgQkg6IDIxNiwgQkk6IDExMywgT0s6IDE3NTkgfVxuICB0aGlzLlVRM19fID0ge1xuICAgIEJBOiAtNDc5LFxuICAgIEJIOiA0MixcbiAgICBCSTogMTkxMyxcbiAgICBCSzogLTcxOTgsXG4gICAgQk06IDMxNjAsXG4gICAgQk46IDY0MjcsXG4gICAgQk86IDE0NzYxLFxuICAgIE9JOiAtODI3LFxuICAgIE9OOiAtMzIxMixcbiAgfVxuICB0aGlzLlVXMV9fID0ge1xuICAgICcsJzogMTU2LFxuICAgICfjgIEnOiAxNTYsXG4gICAgJ+OAjCc6IC00NjMsXG4gICAg44GCOiAtOTQxLFxuICAgIOOBhjogLTEyNyxcbiAgICDjgYw6IC01NTMsXG4gICAg44GNOiAxMjEsXG4gICAg44GTOiA1MDUsXG4gICAg44GnOiAtMjAxLFxuICAgIOOBqDogLTU0NyxcbiAgICDjgak6IC0xMjMsXG4gICAg44GrOiAtNzg5LFxuICAgIOOBrjogLTE4NSxcbiAgICDjga86IC04NDcsXG4gICAg44KCOiAtNDY2LFxuICAgIOOChDogLTQ3MCxcbiAgICDjgog6IDE4MixcbiAgICDjgok6IC0yOTIsXG4gICAg44KKOiAyMDgsXG4gICAg44KMOiAxNjksXG4gICAg44KSOiAtNDQ2LFxuICAgIOOCkzogLTEzNyxcbiAgICAn44O7JzogLTEzNSxcbiAgICDkuLs6IC00MDIsXG4gICAg5LqsOiAtMjY4LFxuICAgIOWMujogLTkxMixcbiAgICDljYg6IDg3MSxcbiAgICDlm706IC00NjAsXG4gICAg5aSnOiA1NjEsXG4gICAg5aeUOiA3MjksXG4gICAg5biCOiAtNDExLFxuICAgIOaXpTogLTE0MSxcbiAgICDnkIY6IDM2MSxcbiAgICDnlJ86IC00MDgsXG4gICAg55yMOiAtMzg2LFxuICAgIOmDvTogLTcxOCxcbiAgICAn772iJzogLTQ2MyxcbiAgICAn772lJzogLTEzNSxcbiAgfVxuICB0aGlzLlVXMl9fID0ge1xuICAgICcsJzogLTgyOSxcbiAgICAn44CBJzogLTgyOSxcbiAgICDjgIc6IDg5MixcbiAgICAn44CMJzogLTY0NSxcbiAgICAn44CNJzogMzE0NSxcbiAgICDjgYI6IC01MzgsXG4gICAg44GEOiA1MDUsXG4gICAg44GGOiAxMzQsXG4gICAg44GKOiAtNTAyLFxuICAgIOOBizogMTQ1NCxcbiAgICDjgYw6IC04NTYsXG4gICAg44GPOiAtNDEyLFxuICAgIOOBkzogMTE0MSxcbiAgICDjgZU6IDg3OCxcbiAgICDjgZY6IDU0MCxcbiAgICDjgZc6IDE1MjksXG4gICAg44GZOiAtNjc1LFxuICAgIOOBmzogMzAwLFxuICAgIOOBnTogLTEwMTEsXG4gICAg44GfOiAxODgsXG4gICAg44GgOiAxODM3LFxuICAgIOOBpDogLTk0OSxcbiAgICDjgaY6IC0yOTEsXG4gICAg44GnOiAtMjY4LFxuICAgIOOBqDogLTk4MSxcbiAgICDjgak6IDEyNzMsXG4gICAg44GqOiAxMDYzLFxuICAgIOOBqzogLTE3NjQsXG4gICAg44GuOiAxMzAsXG4gICAg44GvOiAtNDA5LFxuICAgIOOBsjogLTEyNzMsXG4gICAg44G5OiAxMjYxLFxuICAgIOOBvjogNjAwLFxuICAgIOOCgjogLTEyNjMsXG4gICAg44KEOiAtNDAyLFxuICAgIOOCiDogMTYzOSxcbiAgICDjgoo6IC01NzksXG4gICAg44KLOiAtNjk0LFxuICAgIOOCjDogNTcxLFxuICAgIOOCkjogLTI1MTYsXG4gICAg44KTOiAyMDk1LFxuICAgIOOCojogLTU4NyxcbiAgICDjgqs6IDMwNixcbiAgICDjgq06IDU2OCxcbiAgICDjg4M6IDgzMSxcbiAgICDkuIk6IC03NTgsXG4gICAg5LiNOiAtMjE1MCxcbiAgICDkuJY6IC0zMDIsXG4gICAg5LitOiAtOTY4LFxuICAgIOS4uzogLTg2MSxcbiAgICDkuos6IDQ5MixcbiAgICDkuro6IC0xMjMsXG4gICAg5LyaOiA5NzgsXG4gICAg5L+dOiAzNjIsXG4gICAg5YWlOiA1NDgsXG4gICAg5YidOiAtMzAyNSxcbiAgICDlia86IC0xNTY2LFxuICAgIOWMlzogLTM0MTQsXG4gICAg5Yy6OiAtNDIyLFxuICAgIOWkpzogLTE3NjksXG4gICAg5aSpOiAtODY1LFxuICAgIOWkqjogLTQ4MyxcbiAgICDlrZA6IC0xNTE5LFxuICAgIOWtpjogNzYwLFxuICAgIOWunzogMTAyMyxcbiAgICDlsI86IC0yMDA5LFxuICAgIOW4gjogLTgxMyxcbiAgICDlubQ6IC0xMDYwLFxuICAgIOW8tzogMTA2NyxcbiAgICDmiYs6IC0xNTE5LFxuICAgIOaPujogLTEwMzMsXG4gICAg5pS/OiAxNTIyLFxuICAgIOaWhzogLTEzNTUsXG4gICAg5pawOiAtMTY4MixcbiAgICDml6U6IC0xODE1LFxuICAgIOaYjjogLTE0NjIsXG4gICAg5pyAOiAtNjMwLFxuICAgIOacnTogLTE4NDMsXG4gICAg5pysOiAtMTY1MCxcbiAgICDmnbE6IC05MzEsXG4gICAg5p6cOiAtNjY1LFxuICAgIOasoTogLTIzNzgsXG4gICAg5rCROiAtMTgwLFxuICAgIOawlzogLTE3NDAsXG4gICAg55CGOiA3NTIsXG4gICAg55m6OiA1MjksXG4gICAg55uuOiAtMTU4NCxcbiAgICDnm7g6IC0yNDIsXG4gICAg55yMOiAtMTE2NSxcbiAgICDnq4s6IC03NjMsXG4gICAg56ysOiA4MTAsXG4gICAg57GzOiA1MDksXG4gICAg6IeqOiAtMTM1MyxcbiAgICDooYw6IDgzOCxcbiAgICDopb86IC03NDQsXG4gICAg6KaLOiAtMzg3NCxcbiAgICDoqr86IDEwMTAsXG4gICAg6K2wOiAxMTk4LFxuICAgIOi+vDogMzA0MSxcbiAgICDplos6IDE3NTgsXG4gICAg6ZaTOiAtMTI1NyxcbiAgICAn772iJzogLTY0NSxcbiAgICAn772jJzogMzE0NSxcbiAgICDvva86IDgzMSxcbiAgICDvvbE6IC01ODcsXG4gICAg7722OiAzMDYsXG4gICAg7723OiA1NjgsXG4gIH1cbiAgdGhpcy5VVzNfXyA9IHtcbiAgICAnLCc6IDQ4ODksXG4gICAgMTogLTgwMCxcbiAgICAn4oiSJzogLTE3MjMsXG4gICAgJ+OAgSc6IDQ4ODksXG4gICAg44CFOiAtMjMxMSxcbiAgICDjgIc6IDU4MjcsXG4gICAgJ+OAjSc6IDI2NzAsXG4gICAgJ+OAkyc6IC0zNTczLFxuICAgIOOBgjogLTI2OTYsXG4gICAg44GEOiAxMDA2LFxuICAgIOOBhjogMjM0MixcbiAgICDjgYg6IDE5ODMsXG4gICAg44GKOiAtNDg2NCxcbiAgICDjgYs6IC0xMTYzLFxuICAgIOOBjDogMzI3MSxcbiAgICDjgY86IDEwMDQsXG4gICAg44GROiAzODgsXG4gICAg44GSOiA0MDEsXG4gICAg44GTOiAtMzU1MixcbiAgICDjgZQ6IC0zMTE2LFxuICAgIOOBlTogLTEwNTgsXG4gICAg44GXOiAtMzk1LFxuICAgIOOBmTogNTg0LFxuICAgIOOBmzogMzY4NSxcbiAgICDjgZ06IC01MjI4LFxuICAgIOOBnzogODQyLFxuICAgIOOBoTogLTUyMSxcbiAgICDjgaM6IC0xNDQ0LFxuICAgIOOBpDogLTEwODEsXG4gICAg44GmOiA2MTY3LFxuICAgIOOBpzogMjMxOCxcbiAgICDjgag6IDE2OTEsXG4gICAg44GpOiAtODk5LFxuICAgIOOBqjogLTI3ODgsXG4gICAg44GrOiAyNzQ1LFxuICAgIOOBrjogNDA1NixcbiAgICDjga86IDQ1NTUsXG4gICAg44GyOiAtMjE3MSxcbiAgICDjgbU6IC0xNzk4LFxuICAgIOOBuDogMTE5OSxcbiAgICDjgbs6IC01NTE2LFxuICAgIOOBvjogLTQzODQsXG4gICAg44G/OiAtMTIwLFxuICAgIOOCgTogMTIwNSxcbiAgICDjgoI6IDIzMjMsXG4gICAg44KEOiAtNzg4LFxuICAgIOOCiDogLTIwMixcbiAgICDjgok6IDcyNyxcbiAgICDjgoo6IDY0OSxcbiAgICDjgos6IDU5MDUsXG4gICAg44KMOiAyNzczLFxuICAgIOOCjzogLTEyMDcsXG4gICAg44KSOiA2NjIwLFxuICAgIOOCkzogLTUxOCxcbiAgICDjgqI6IDU1MSxcbiAgICDjgrA6IDEzMTksXG4gICAg44K5OiA4NzQsXG4gICAg44ODOiAtMTM1MCxcbiAgICDjg4g6IDUyMSxcbiAgICDjg6A6IDExMDksXG4gICAg44OrOiAxNTkxLFxuICAgIOODrTogMjIwMSxcbiAgICDjg7M6IDI3OCxcbiAgICAn44O7JzogLTM3OTQsXG4gICAg5LiAOiAtMTYxOSxcbiAgICDkuIs6IC0xNzU5LFxuICAgIOS4ljogLTIwODcsXG4gICAg5LihOiAzODE1LFxuICAgIOS4rTogNjUzLFxuICAgIOS4uzogLTc1OCxcbiAgICDkuog6IC0xMTkzLFxuICAgIOS6jDogOTc0LFxuICAgIOS6ujogMjc0MixcbiAgICDku4o6IDc5MixcbiAgICDku5Y6IDE4ODksXG4gICAg5LulOiAtMTM2OCxcbiAgICDkvY46IDgxMSxcbiAgICDkvZU6IDQyNjUsXG4gICAg5L2cOiAtMzYxLFxuICAgIOS/nTogLTI0MzksXG4gICAg5YWDOiA0ODU4LFxuICAgIOWFmjogMzU5MyxcbiAgICDlhag6IDE1NzQsXG4gICAg5YWsOiAtMzAzMCxcbiAgICDlha06IDc1NSxcbiAgICDlhbE6IC0xODgwLFxuICAgIOWGhjogNTgwNyxcbiAgICDlho06IDMwOTUsXG4gICAg5YiGOiA0NTcsXG4gICAg5YidOiAyNDc1LFxuICAgIOWIpTogMTEyOSxcbiAgICDliY06IDIyODYsXG4gICAg5YmvOiA0NDM3LFxuICAgIOWKmzogMzY1LFxuICAgIOWLlTogLTk0OSxcbiAgICDli5k6IC0xODcyLFxuICAgIOWMljogMTMyNyxcbiAgICDljJc6IC0xMDM4LFxuICAgIOWMujogNDY0NixcbiAgICDljYM6IC0yMzA5LFxuICAgIOWNiDogLTc4MyxcbiAgICDljZQ6IC0xMDA2LFxuICAgIOWPozogNDgzLFxuICAgIOWPszogMTIzMyxcbiAgICDlkIQ6IDM1ODgsXG4gICAg5ZCIOiAtMjQxLFxuICAgIOWQjDogMzkwNixcbiAgICDlkow6IC04MzcsXG4gICAg5ZOhOiA0NTEzLFxuICAgIOWbvTogNjQyLFxuICAgIOWeizogMTM4OSxcbiAgICDloLQ6IDEyMTksXG4gICAg5aSWOiAtMjQxLFxuICAgIOWmuzogMjAxNixcbiAgICDlraY6IC0xMzU2LFxuICAgIOWuiTogLTQyMyxcbiAgICDlrp86IC0xMDA4LFxuICAgIOWutjogMTA3OCxcbiAgICDlsI86IC01MTMsXG4gICAg5bCROiAtMzEwMixcbiAgICDlt546IDExNTUsXG4gICAg5biCOiAzMTk3LFxuICAgIOW5szogLTE4MDQsXG4gICAg5bm0OiAyNDE2LFxuICAgIOW6gzogLTEwMzAsXG4gICAg5bqcOiAxNjA1LFxuICAgIOW6pjogMTQ1MixcbiAgICDlu7o6IC0yMzUyLFxuICAgIOW9kzogLTM4ODUsXG4gICAg5b6XOiAxOTA1LFxuICAgIOaAnTogLTEyOTEsXG4gICAg5oCnOiAxODIyLFxuICAgIOaIuDogLTQ4OCxcbiAgICDmjIc6IC0zOTczLFxuICAgIOaUvzogLTIwMTMsXG4gICAg5pWZOiAtMTQ3OSxcbiAgICDmlbA6IDMyMjIsXG4gICAg5paHOiAtMTQ4OSxcbiAgICDmlrA6IDE3NjQsXG4gICAg5pelOiAyMDk5LFxuICAgIOaXpzogNTc5MixcbiAgICDmmKg6IC02NjEsXG4gICAg5pmCOiAtMTI0OCxcbiAgICDmm5w6IC05NTEsXG4gICAg5pyAOiAtOTM3LFxuICAgIOaciDogNDEyNSxcbiAgICDmnJ86IDM2MCxcbiAgICDmnY46IDMwOTQsXG4gICAg5p2ROiAzNjQsXG4gICAg5p2xOiAtODA1LFxuICAgIOaguDogNTE1NixcbiAgICDmo646IDI0MzgsXG4gICAg5qWtOiA0ODQsXG4gICAg5rCPOiAyNjEzLFxuICAgIOawkTogLTE2OTQsXG4gICAg5rG6OiAtMTA3MyxcbiAgICDms5U6IDE4NjgsXG4gICAg5rW3OiAtNDk1LFxuICAgIOeEoTogOTc5LFxuICAgIOeJqTogNDYxLFxuICAgIOeJuTogLTM4NTAsXG4gICAg55SfOiAtMjczLFxuICAgIOeUqDogOTE0LFxuICAgIOeUujogMTIxNSxcbiAgICDnmoQ6IDczMTMsXG4gICAg55u0OiAtMTgzNSxcbiAgICDnnIE6IDc5MixcbiAgICDnnIw6IDYyOTMsXG4gICAg55+lOiAtMTUyOCxcbiAgICDnp4E6IDQyMzEsXG4gICAg56iOOiA0MDEsXG4gICAg56uLOiAtOTYwLFxuICAgIOesrDogMTIwMSxcbiAgICDnsbM6IDc3NjcsXG4gICAg57O7OiAzMDY2LFxuICAgIOe0hDogMzY2MyxcbiAgICDntJo6IDEzODQsXG4gICAg57WxOiAtNDIyOSxcbiAgICDnt486IDExNjMsXG4gICAg57eaOiAxMjU1LFxuICAgIOiAhTogNjQ1NyxcbiAgICDog706IDcyNSxcbiAgICDoh6o6IC0yODY5LFxuICAgIOiLsTogNzg1LFxuICAgIOimizogMTA0NCxcbiAgICDoqr86IC01NjIsXG4gICAg6LKhOiAtNzMzLFxuICAgIOiyuzogMTc3NyxcbiAgICDou4o6IDE4MzUsXG4gICAg6LuNOiAxMzc1LFxuICAgIOi+vDogLTE1MDQsXG4gICAg6YCaOiAtMTEzNixcbiAgICDpgbg6IC02ODEsXG4gICAg6YOOOiAxMDI2LFxuICAgIOmDoTogNDQwNCxcbiAgICDpg6g6IDEyMDAsXG4gICAg6YeROiAyMTYzLFxuICAgIOmVtzogNDIxLFxuICAgIOmWizogLTE0MzIsXG4gICAg6ZaTOiAxMzAyLFxuICAgIOmWojogLTEyODIsXG4gICAg6ZuoOiAyMDA5LFxuICAgIOmbuzogLTEwNDUsXG4gICAg6Z2eOiAyMDY2LFxuICAgIOmnhTogMTYyMCxcbiAgICAn77yRJzogLTgwMCxcbiAgICAn772jJzogMjY3MCxcbiAgICAn772lJzogLTM3OTQsXG4gICAg772vOiAtMTM1MCxcbiAgICDvvbE6IDU1MSxcbiAgICDvvbjvvp46IDEzMTksXG4gICAg7729OiA4NzQsXG4gICAg776EOiA1MjEsXG4gICAg776ROiAxMTA5LFxuICAgIO++mTogMTU5MSxcbiAgICDvvps6IDIyMDEsXG4gICAg776dOiAyNzgsXG4gIH1cbiAgdGhpcy5VVzRfXyA9IHtcbiAgICAnLCc6IDM5MzAsXG4gICAgJy4nOiAzNTA4LFxuICAgICfigJUnOiAtNDg0MSxcbiAgICAn44CBJzogMzkzMCxcbiAgICAn44CCJzogMzUwOCxcbiAgICDjgIc6IDQ5OTksXG4gICAgJ+OAjCc6IDE4OTUsXG4gICAgJ+OAjSc6IDM3OTgsXG4gICAgJ+OAkyc6IC01MTU2LFxuICAgIOOBgjogNDc1MixcbiAgICDjgYQ6IC0zNDM1LFxuICAgIOOBhjogLTY0MCxcbiAgICDjgYg6IC0yNTE0LFxuICAgIOOBijogMjQwNSxcbiAgICDjgYs6IDUzMCxcbiAgICDjgYw6IDYwMDYsXG4gICAg44GNOiAtNDQ4MixcbiAgICDjgY46IC0zODIxLFxuICAgIOOBjzogLTM3ODgsXG4gICAg44GROiAtNDM3NixcbiAgICDjgZI6IC00NzM0LFxuICAgIOOBkzogMjI1NSxcbiAgICDjgZQ6IDE5NzksXG4gICAg44GVOiAyODY0LFxuICAgIOOBlzogLTg0MyxcbiAgICDjgZg6IC0yNTA2LFxuICAgIOOBmTogLTczMSxcbiAgICDjgZo6IDEyNTEsXG4gICAg44GbOiAxODEsXG4gICAg44GdOiA0MDkxLFxuICAgIOOBnzogNTAzNCxcbiAgICDjgaA6IDU0MDgsXG4gICAg44GhOiAtMzY1NCxcbiAgICDjgaM6IC01ODgyLFxuICAgIOOBpDogLTE2NTksXG4gICAg44GmOiAzOTk0LFxuICAgIOOBpzogNzQxMCxcbiAgICDjgag6IDQ1NDcsXG4gICAg44GqOiA1NDMzLFxuICAgIOOBqzogNjQ5OSxcbiAgICDjgaw6IDE4NTMsXG4gICAg44GtOiAxNDEzLFxuICAgIOOBrjogNzM5NixcbiAgICDjga86IDg1NzgsXG4gICAg44GwOiAxOTQwLFxuICAgIOOBsjogNDI0OSxcbiAgICDjgbM6IC00MTM0LFxuICAgIOOBtTogMTM0NSxcbiAgICDjgbg6IDY2NjUsXG4gICAg44G5OiAtNzQ0LFxuICAgIOOBuzogMTQ2NCxcbiAgICDjgb46IDEwNTEsXG4gICAg44G/OiAtMjA4MixcbiAgICDjgoA6IC04ODIsXG4gICAg44KBOiAtNTA0NixcbiAgICDjgoI6IDQxNjksXG4gICAg44KDOiAtMjY2NixcbiAgICDjgoQ6IDI3OTUsXG4gICAg44KHOiAtMTU0NCxcbiAgICDjgog6IDMzNTEsXG4gICAg44KJOiAtMjkyMixcbiAgICDjgoo6IC05NzI2LFxuICAgIOOCizogLTE0ODk2LFxuICAgIOOCjDogLTI2MTMsXG4gICAg44KNOiAtNDU3MCxcbiAgICDjgo86IC0xNzgzLFxuICAgIOOCkjogMTMxNTAsXG4gICAg44KTOiAtMjM1MixcbiAgICDjgqs6IDIxNDUsXG4gICAg44KzOiAxNzg5LFxuICAgIOOCuzogMTI4NyxcbiAgICDjg4M6IC03MjQsXG4gICAg44OIOiAtNDAzLFxuICAgIOODoTogLTE2MzUsXG4gICAg44OpOiAtODgxLFxuICAgIOODqjogLTU0MSxcbiAgICDjg6s6IC04NTYsXG4gICAg44OzOiAtMzYzNyxcbiAgICAn44O7JzogLTQzNzEsXG4gICAg44O8OiAtMTE4NzAsXG4gICAg5LiAOiAtMjA2OSxcbiAgICDkuK06IDIyMTAsXG4gICAg5LqIOiA3ODIsXG4gICAg5LqLOiAtMTkwLFxuICAgIOS6lTogLTE3NjgsXG4gICAg5Lq6OiAxMDM2LFxuICAgIOS7pTogNTQ0LFxuICAgIOS8mjogOTUwLFxuICAgIOS9kzogLTEyODYsXG4gICAg5L2cOiA1MzAsXG4gICAg5YG0OiA0MjkyLFxuICAgIOWFiDogNjAxLFxuICAgIOWFmjogLTIwMDYsXG4gICAg5YWxOiAtMTIxMixcbiAgICDlhoU6IDU4NCxcbiAgICDlhoY6IDc4OCxcbiAgICDliJ06IDEzNDcsXG4gICAg5YmNOiAxNjIzLFxuICAgIOWJrzogMzg3OSxcbiAgICDlips6IC0zMDIsXG4gICAg5YuVOiAtNzQwLFxuICAgIOWLmTogLTI3MTUsXG4gICAg5YyWOiA3NzYsXG4gICAg5Yy6OiA0NTE3LFxuICAgIOWNlDogMTAxMyxcbiAgICDlj4I6IDE1NTUsXG4gICAg5ZCIOiAtMTgzNCxcbiAgICDlkow6IC02ODEsXG4gICAg5ZOhOiAtOTEwLFxuICAgIOWZqDogLTg1MSxcbiAgICDlm546IDE1MDAsXG4gICAg5Zu9OiAtNjE5LFxuICAgIOWckjogLTEyMDAsXG4gICAg5ZywOiA4NjYsXG4gICAg5aC0OiAtMTQxMCxcbiAgICDloYE6IC0yMDk0LFxuICAgIOWjqzogLTE0MTMsXG4gICAg5aSaOiAxMDY3LFxuICAgIOWkpzogNTcxLFxuICAgIOWtkDogLTQ4MDIsXG4gICAg5a2mOiAtMTM5NyxcbiAgICDlrpo6IC0xMDU3LFxuICAgIOWvujogLTgwOSxcbiAgICDlsI86IDE5MTAsXG4gICAg5bGLOiAtMTMyOCxcbiAgICDlsbE6IC0xNTAwLFxuICAgIOWztjogLTIwNTYsXG4gICAg5bedOiAtMjY2NyxcbiAgICDluII6IDI3NzEsXG4gICAg5bm0OiAzNzQsXG4gICAg5bqBOiAtNDU1NixcbiAgICDlvow6IDQ1NixcbiAgICDmgKc6IDU1MyxcbiAgICDmhJ86IDkxNixcbiAgICDmiYA6IC0xNTY2LFxuICAgIOaUrzogODU2LFxuICAgIOaUuTogNzg3LFxuICAgIOaUvzogMjE4MixcbiAgICDmlZk6IDcwNCxcbiAgICDmloc6IDUyMixcbiAgICDmlrk6IC04NTYsXG4gICAg5pelOiAxNzk4LFxuICAgIOaZgjogMTgyOSxcbiAgICDmnIA6IDg0NSxcbiAgICDmnIg6IC05MDY2LFxuICAgIOacqDogLTQ4NSxcbiAgICDmnaU6IC00NDIsXG4gICAg5qChOiAtMzYwLFxuICAgIOalrTogLTEwNDMsXG4gICAg5rCPOiA1Mzg4LFxuICAgIOawkTogLTI3MTYsXG4gICAg5rCXOiAtOTEwLFxuICAgIOayojogLTkzOSxcbiAgICDmuIg6IC01NDMsXG4gICAg54mpOiAtNzM1LFxuICAgIOeOhzogNjcyLFxuICAgIOeQgzogLTEyNjcsXG4gICAg55SfOiAtMTI4NixcbiAgICDnlKM6IC0xMTAxLFxuICAgIOeUsDogLTI5MDAsXG4gICAg55S6OiAxODI2LFxuICAgIOeahDogMjU4NixcbiAgICDnm646IDkyMixcbiAgICDnnIE6IC0zNDg1LFxuICAgIOecjDogMjk5NyxcbiAgICDnqbo6IC04NjcsXG4gICAg56uLOiAtMjExMixcbiAgICDnrKw6IDc4OCxcbiAgICDnsbM6IDI5MzcsXG4gICAg57O7OiA3ODYsXG4gICAg57SEOiAyMTcxLFxuICAgIOe1jDogMTE0NixcbiAgICDntbE6IC0xMTY5LFxuICAgIOe3jzogOTQwLFxuICAgIOe3mjogLTk5NCxcbiAgICDnvbI6IDc0OSxcbiAgICDogIU6IDIxNDUsXG4gICAg6IO9OiAtNzMwLFxuICAgIOiIrDogLTg1MixcbiAgICDooYw6IC03OTIsXG4gICAg6KaPOiA3OTIsXG4gICAg6K2mOiAtMTE4NCxcbiAgICDorbA6IC0yNDQsXG4gICAg6LC3OiAtMTAwMCxcbiAgICDos546IDczMCxcbiAgICDou4o6IC0xNDgxLFxuICAgIOi7jTogMTE1OCxcbiAgICDovKo6IC0xNDMzLFxuICAgIOi+vDogLTMzNzAsXG4gICAg6L+ROiA5MjksXG4gICAg6YGTOiAtMTI5MSxcbiAgICDpgbg6IDI1OTYsXG4gICAg6YOOOiAtNDg2NixcbiAgICDpg706IDExOTIsXG4gICAg6YeOOiAtMTEwMCxcbiAgICDpioA6IC0yMjEzLFxuICAgIOmVtzogMzU3LFxuICAgIOmWkzogLTIzNDQsXG4gICAg6ZmiOiAtMjI5NyxcbiAgICDpmps6IC0yNjA0LFxuICAgIOmbuzogLTg3OCxcbiAgICDpoJg6IC0xNjU5LFxuICAgIOmhjDogLTc5MixcbiAgICDppKg6IC0xOTg0LFxuICAgIOmmljogMTc0OSxcbiAgICDpq5g6IDIxMjAsXG4gICAgJ++9oic6IDE4OTUsXG4gICAgJ++9oyc6IDM3OTgsXG4gICAgJ++9pSc6IC00MzcxLFxuICAgIO+9rzogLTcyNCxcbiAgICDvvbA6IC0xMTg3MCxcbiAgICDvvbY6IDIxNDUsXG4gICAg7726OiAxNzg5LFxuICAgIO+9vjogMTI4NyxcbiAgICDvvoQ6IC00MDMsXG4gICAg776SOiAtMTYzNSxcbiAgICDvvpc6IC04ODEsXG4gICAg776YOiAtNTQxLFxuICAgIO++mTogLTg1NixcbiAgICDvvp06IC0zNjM3LFxuICB9XG4gIHRoaXMuVVc1X18gPSB7XG4gICAgJywnOiA0NjUsXG4gICAgJy4nOiAtMjk5LFxuICAgIDE6IC01MTQsXG4gICAgRTI6IC0zMjc2OCxcbiAgICAnXSc6IC0yNzYyLFxuICAgICfjgIEnOiA0NjUsXG4gICAgJ+OAgic6IC0yOTksXG4gICAgJ+OAjCc6IDM2MyxcbiAgICDjgYI6IDE2NTUsXG4gICAg44GEOiAzMzEsXG4gICAg44GGOiAtNTAzLFxuICAgIOOBiDogMTE5OSxcbiAgICDjgYo6IDUyNyxcbiAgICDjgYs6IDY0NyxcbiAgICDjgYw6IC00MjEsXG4gICAg44GNOiAxNjI0LFxuICAgIOOBjjogMTk3MSxcbiAgICDjgY86IDMxMixcbiAgICDjgZI6IC05ODMsXG4gICAg44GVOiAtMTUzNyxcbiAgICDjgZc6IC0xMzcxLFxuICAgIOOBmTogLTg1MixcbiAgICDjgaA6IC0xMTg2LFxuICAgIOOBoTogMTA5MyxcbiAgICDjgaM6IDUyLFxuICAgIOOBpDogOTIxLFxuICAgIOOBpjogLTE4LFxuICAgIOOBpzogLTg1MCxcbiAgICDjgag6IC0xMjcsXG4gICAg44GpOiAxNjgyLFxuICAgIOOBqjogLTc4NyxcbiAgICDjgas6IC0xMjI0LFxuICAgIOOBrjogLTYzNSxcbiAgICDjga86IC01NzgsXG4gICAg44G5OiAxMDAxLFxuICAgIOOBvzogNTAyLFxuICAgIOOCgTogODY1LFxuICAgIOOCgzogMzM1MCxcbiAgICDjgoc6IDg1NCxcbiAgICDjgoo6IC0yMDgsXG4gICAg44KLOiA0MjksXG4gICAg44KMOiA1MDQsXG4gICAg44KPOiA0MTksXG4gICAg44KSOiAtMTI2NCxcbiAgICDjgpM6IDMyNyxcbiAgICDjgqQ6IDI0MSxcbiAgICDjg6s6IDQ1MSxcbiAgICDjg7M6IC0zNDMsXG4gICAg5LitOiAtODcxLFxuICAgIOS6rDogNzIyLFxuICAgIOS8mjogLTExNTMsXG4gICAg5YWaOiAtNjU0LFxuICAgIOWLmTogMzUxOSxcbiAgICDljLo6IC05MDEsXG4gICAg5ZGKOiA4NDgsXG4gICAg5ZOhOiAyMTA0LFxuICAgIOWkpzogLTEyOTYsXG4gICAg5a2mOiAtNTQ4LFxuICAgIOWumjogMTc4NSxcbiAgICDltZA6IC0xMzA0LFxuICAgIOW4gjogLTI5OTEsXG4gICAg5bitOiA5MjEsXG4gICAg5bm0OiAxNzYzLFxuICAgIOaAnTogODcyLFxuICAgIOaJgDogLTgxNCxcbiAgICDmjJk6IDE2MTgsXG4gICAg5pawOiAtMTY4MixcbiAgICDml6U6IDIxOCxcbiAgICDmnIg6IC00MzUzLFxuICAgIOafuzogOTMyLFxuICAgIOagvDogMTM1NixcbiAgICDmqZ86IC0xNTA4LFxuICAgIOawjzogLTEzNDcsXG4gICAg55SwOiAyNDAsXG4gICAg55S6OiAtMzkxMixcbiAgICDnmoQ6IC0zMTQ5LFxuICAgIOebuDogMTMxOSxcbiAgICDnnIE6IC0xMDUyLFxuICAgIOecjDogLTQwMDMsXG4gICAg56CUOiAtOTk3LFxuICAgIOekvjogLTI3OCxcbiAgICDnqbo6IC04MTMsXG4gICAg57WxOiAxOTU1LFxuICAgIOiAhTogLTIyMzMsXG4gICAg6KGoOiA2NjMsXG4gICAg6KqeOiAtMTA3MyxcbiAgICDorbA6IDEyMTksXG4gICAg6YG4OiAtMTAxOCxcbiAgICDpg446IC0zNjgsXG4gICAg6ZW3OiA3ODYsXG4gICAg6ZaTOiAxMTkxLFxuICAgIOmhjDogMjM2OCxcbiAgICDppKg6IC02ODksXG4gICAgJ++8kSc6IC01MTQsXG4gICAg77yl77ySOiAtMzI3NjgsXG4gICAgJ++9oic6IDM2MyxcbiAgICDvvbI6IDI0MSxcbiAgICDvvpk6IDQ1MSxcbiAgICDvvp06IC0zNDMsXG4gIH1cbiAgdGhpcy5VVzZfXyA9IHtcbiAgICAnLCc6IDIyNyxcbiAgICAnLic6IDgwOCxcbiAgICAxOiAtMjcwLFxuICAgIEUxOiAzMDYsXG4gICAgJ+OAgSc6IDIyNyxcbiAgICAn44CCJzogODA4LFxuICAgIOOBgjogLTMwNyxcbiAgICDjgYY6IDE4OSxcbiAgICDjgYs6IDI0MSxcbiAgICDjgYw6IC03MyxcbiAgICDjgY86IC0xMjEsXG4gICAg44GTOiAtMjAwLFxuICAgIOOBmDogMTc4MixcbiAgICDjgZk6IDM4MyxcbiAgICDjgZ86IC00MjgsXG4gICAg44GjOiA1NzMsXG4gICAg44GmOiAtMTAxNCxcbiAgICDjgac6IDEwMSxcbiAgICDjgag6IC0xMDUsXG4gICAg44GqOiAtMjUzLFxuICAgIOOBqzogLTE0OSxcbiAgICDjga46IC00MTcsXG4gICAg44GvOiAtMjM2LFxuICAgIOOCgjogLTIwNixcbiAgICDjgoo6IDE4NyxcbiAgICDjgos6IC0xMzUsXG4gICAg44KSOiAxOTUsXG4gICAg44OrOiAtNjczLFxuICAgIOODszogLTQ5NixcbiAgICDkuIA6IC0yNzcsXG4gICAg5LitOiAyMDEsXG4gICAg5Lu2OiAtODAwLFxuICAgIOS8mjogNjI0LFxuICAgIOWJjTogMzAyLFxuICAgIOWMujogMTc5MixcbiAgICDlk6E6IC0xMjEyLFxuICAgIOWnlDogNzk4LFxuICAgIOWtpjogLTk2MCxcbiAgICDluII6IDg4NyxcbiAgICDluoM6IC02OTUsXG4gICAg5b6MOiA1MzUsXG4gICAg5qWtOiAtNjk3LFxuICAgIOebuDogNzUzLFxuICAgIOekvjogLTUwNyxcbiAgICDnpo86IDk3NCxcbiAgICDnqbo6IC04MjIsXG4gICAg6ICFOiAxODExLFxuICAgIOmAozogNDYzLFxuICAgIOmDjjogMTA4MixcbiAgICAn77yRJzogLTI3MCxcbiAgICDvvKXvvJE6IDMwNixcbiAgICDvvpk6IC02NzMsXG4gICAg776dOiAtNDk2LFxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuVGlueVNlZ21lbnRlci5wcm90b3R5cGUuY3R5cGVfID0gZnVuY3Rpb24gKHN0cikge1xuICBmb3IgKHZhciBpIGluIHRoaXMuY2hhcnR5cGVfKSB7XG4gICAgaWYgKHN0ci5tYXRjaCh0aGlzLmNoYXJ0eXBlX1tpXVswXSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJ0eXBlX1tpXVsxXVxuICAgIH1cbiAgfVxuICByZXR1cm4gJ08nXG59XG5cblRpbnlTZWdtZW50ZXIucHJvdG90eXBlLnRzXyA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICh2KSB7XG4gICAgcmV0dXJuIHZcbiAgfVxuICByZXR1cm4gMFxufVxuXG5UaW55U2VnbWVudGVyLnByb3RvdHlwZS5zZWdtZW50ID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gIGlmIChpbnB1dCA9PSBudWxsIHx8IGlucHV0ID09IHVuZGVmaW5lZCB8fCBpbnB1dCA9PSAnJykge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc2VnID0gWydCMycsICdCMicsICdCMSddXG4gIHZhciBjdHlwZSA9IFsnTycsICdPJywgJ08nXVxuICB2YXIgbyA9IGlucHV0LnNwbGl0KCcnKVxuICBmb3IgKGkgPSAwOyBpIDwgby5sZW5ndGg7ICsraSkge1xuICAgIHNlZy5wdXNoKG9baV0pXG4gICAgY3R5cGUucHVzaCh0aGlzLmN0eXBlXyhvW2ldKSlcbiAgfVxuICBzZWcucHVzaCgnRTEnKVxuICBzZWcucHVzaCgnRTInKVxuICBzZWcucHVzaCgnRTMnKVxuICBjdHlwZS5wdXNoKCdPJylcbiAgY3R5cGUucHVzaCgnTycpXG4gIGN0eXBlLnB1c2goJ08nKVxuICB2YXIgd29yZCA9IHNlZ1szXVxuICB2YXIgcDEgPSAnVSdcbiAgdmFyIHAyID0gJ1UnXG4gIHZhciBwMyA9ICdVJ1xuICBmb3IgKHZhciBpID0gNDsgaSA8IHNlZy5sZW5ndGggLSAzOyArK2kpIHtcbiAgICB2YXIgc2NvcmUgPSB0aGlzLkJJQVNfX1xuICAgIHZhciB3MSA9IHNlZ1tpIC0gM11cbiAgICB2YXIgdzIgPSBzZWdbaSAtIDJdXG4gICAgdmFyIHczID0gc2VnW2kgLSAxXVxuICAgIHZhciB3NCA9IHNlZ1tpXVxuICAgIHZhciB3NSA9IHNlZ1tpICsgMV1cbiAgICB2YXIgdzYgPSBzZWdbaSArIDJdXG4gICAgdmFyIGMxID0gY3R5cGVbaSAtIDNdXG4gICAgdmFyIGMyID0gY3R5cGVbaSAtIDJdXG4gICAgdmFyIGMzID0gY3R5cGVbaSAtIDFdXG4gICAgdmFyIGM0ID0gY3R5cGVbaV1cbiAgICB2YXIgYzUgPSBjdHlwZVtpICsgMV1cbiAgICB2YXIgYzYgPSBjdHlwZVtpICsgMl1cbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVQMV9fW3AxXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVQMl9fW3AyXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVQM19fW3AzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJQMV9fW3AxICsgcDJdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlAyX19bcDIgKyBwM10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VVzFfX1t3MV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VVzJfX1t3Ml0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VVzNfX1t3M10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VVzRfX1t3NF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VVzVfX1t3NV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VVzZfX1t3Nl0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CVzFfX1t3MiArIHczXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJXMl9fW3czICsgdzRdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlczX19bdzQgKyB3NV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UVzFfX1t3MSArIHcyICsgdzNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVFcyX19bdzIgKyB3MyArIHc0XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRXM19fW3czICsgdzQgKyB3NV0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UVzRfX1t3NCArIHc1ICsgdzZdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVUMxX19bYzFdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVUMyX19bYzJdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVUMzX19bYzNdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVUM0X19bYzRdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVUM1X19bYzVdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVUM2X19bYzZdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQkMxX19bYzIgKyBjM10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CQzJfX1tjMyArIGM0XSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJDM19fW2M0ICsgYzVdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVEMxX19bYzEgKyBjMiArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlRDMl9fW2MyICsgYzMgKyBjNF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UQzNfX1tjMyArIGM0ICsgYzVdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVEM0X19bYzQgKyBjNSArIGM2XSlcbiAgICAvLyAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UQzVfX1tjNCArIGM1ICsgYzZdKTtcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLlVRMV9fW3AxICsgYzFdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuVVEyX19bcDIgKyBjMl0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5VUTNfX1twMyArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJRMV9fW3AyICsgYzIgKyBjM10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5CUTJfX1twMiArIGMzICsgYzRdKVxuICAgIHNjb3JlICs9IHRoaXMudHNfKHRoaXMuQlEzX19bcDMgKyBjMiArIGMzXSlcbiAgICBzY29yZSArPSB0aGlzLnRzXyh0aGlzLkJRNF9fW3AzICsgYzMgKyBjNF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UUTFfX1twMiArIGMxICsgYzIgKyBjM10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UUTJfX1twMiArIGMyICsgYzMgKyBjNF0pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UUTNfX1twMyArIGMxICsgYzIgKyBjM10pXG4gICAgc2NvcmUgKz0gdGhpcy50c18odGhpcy5UUTRfX1twMyArIGMyICsgYzMgKyBjNF0pXG4gICAgdmFyIHAgPSAnTydcbiAgICBpZiAoc2NvcmUgPiAwKSB7XG4gICAgICByZXN1bHQucHVzaCh3b3JkKVxuICAgICAgd29yZCA9ICcnXG4gICAgICBwID0gJ0InXG4gICAgfVxuICAgIHAxID0gcDJcbiAgICBwMiA9IHAzXG4gICAgcDMgPSBwXG4gICAgd29yZCArPSBzZWdbaV1cbiAgfVxuICByZXN1bHQucHVzaCh3b3JkKVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlueVNlZ21lbnRlclxuIiwiaW1wb3J0IHsgVGlueVNlZ21lbnRlciB9IGZyb20gJ3NyYy92ZW5kb3IvdGlueS1zZWdtZW50ZXInXG5pbXBvcnQgeyBSYW5nZSwgVG9rZW5pemVyIH0gZnJvbSAnLi4vdG9rZW5pemVyJ1xuXG5leHBvcnQgY2xhc3MgSmFwYW5lc2VUb2tlbml6ZXIgZXh0ZW5kcyBUb2tlbml6ZXIge1xuICAvLyBAdHMtaWdub3JlXG4gIHByaXZhdGUgdG9rZW5pemVyID0gbmV3IFRpbnlTZWdtZW50ZXIoKVxuXG4gIHRva2VuaXplKHRleHQ6IHN0cmluZywgcmFuZ2U/OiBSYW5nZSkge1xuICAgIGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSB0ZXh0XG4gICAgICAuc2xpY2UocmFuZ2U/LnN0YXJ0LCByYW5nZT8uZW5kKVxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLmZsYXRNYXA8c3RyaW5nPigobGluZSkgPT4gdGhpcy50b2tlbml6ZXIuc2VnbWVudChsaW5lKSlcbiAgICAgIC5tYXAoKHQpID0+IHQucmVwbGFjZSh0aGlzLnRyaW1QYXR0ZXJuLCAnJykpXG5cbiAgICByZXR1cm4geyB0b2tlbnMgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbml6ZVN0cmF0ZWd5LCBUb2tlbml6ZXIgfSBmcm9tICcuL3Rva2VuaXplcidcbmltcG9ydCB7IEFyYWJpY1Rva2VuaXplciB9IGZyb20gJy4vdG9rZW5pemVyL2FyYWJpYydcbmltcG9ydCB7IERlZmF1bHRUb2tlbml6ZXIgfSBmcm9tICcuL3Rva2VuaXplci9kZWZhdWx0J1xuaW1wb3J0IHsgSmFwYW5lc2VUb2tlbml6ZXIgfSBmcm9tICcuL3Rva2VuaXplci9qYXBhbmVzZSdcblxuZXhwb3J0IGNsYXNzIFRva2VuaXplckZhY3Rvcnkge1xuICBzdGF0aWMgZ2V0VG9rZW5pemVyKHN0cmF0ZWd5OiBUb2tlbml6ZVN0cmF0ZWd5KTogVG9rZW5pemVyIHtcbiAgICBsZXQgdG9rZW5pemVyOiBUb2tlbml6ZXJcbiAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgdG9rZW5pemVyID0gbmV3IERlZmF1bHRUb2tlbml6ZXIoKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdqYXBhbmVzZSc6XG4gICAgICAgIHRva2VuaXplciA9IG5ldyBKYXBhbmVzZVRva2VuaXplcigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhcmFiaWMnOlxuICAgICAgICB0b2tlbml6ZXIgPSBuZXcgQXJhYmljVG9rZW5pemVyKClcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdHJhdGVneSAnJHtzdHJhdGVneX0nIG5vdCBmb3VuZGApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuaXplclxuICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbml6ZXJGYWN0b3J5IH0gZnJvbSAnLi9mbG93L2ZhY3RvcnknXG5pbXBvcnQgeyBUb2tlbml6ZVN0cmF0ZWd5IH0gZnJvbSAnLi9mbG93L3Rva2VuaXplcidcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcidcblxuZXhwb3J0IGNsYXNzIEZsb3dQcm92aWRlciBleHRlbmRzIFByb3ZpZGVyIHtcbiAgY2F0ZWdvcnkgPSAnRidcbiAgY29tcGxldGlvbnM6IHN0cmluZ1tdID0gW11cblxuICBhZGRMYXN0V29yZEZyb20oXG4gICAgbGluZTogc3RyaW5nLFxuICAgIGN1cnNvckluZGV4OiBudW1iZXIsXG4gICAgc3RyYXRlZ3k6IFRva2VuaXplU3RyYXRlZ3lcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgd29yZCA9IFRva2VuaXplckZhY3RvcnkuZ2V0VG9rZW5pemVyKHN0cmF0ZWd5KS5sYXN0V29yZEZyb20oXG4gICAgICBsaW5lLFxuICAgICAgY3Vyc29ySW5kZXgsXG4gICAgICB7IG5vcm1hbGl6ZTogdHJ1ZSB9XG4gICAgKVxuXG4gICAgdGhpcy5hZGRXb3JkKHdvcmQpXG4gIH1cblxuICBhZGRXb3Jkc0Zyb20odGV4dDogc3RyaW5nLCBzdHJhdGVneTogVG9rZW5pemVTdHJhdGVneSA9ICdkZWZhdWx0Jykge1xuICAgIGNvbnN0IHJlc3VsdCA9IFRva2VuaXplckZhY3RvcnkuZ2V0VG9rZW5pemVyKHN0cmF0ZWd5KS50b2tlbml6ZSh0ZXh0KVxuXG4gICAgcmVzdWx0LnRva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4gdGhpcy5hZGRXb3JkKHRva2VuKSlcbiAgfVxuXG4gIHByaXZhdGUgYWRkV29yZCh3b3JkOiBzdHJpbmcpIHtcbiAgICBpZiAoIXdvcmQgfHwgdGhpcy5hbHJlYWR5QWRkZWQod29yZCkpIHJldHVyblxuXG4gICAgdGhpcy5jb21wbGV0aW9ucy5wdXNoKHdvcmQpXG4gIH1cblxuICBwcml2YXRlIGFscmVhZHlBZGRlZCh3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9ucy5pbmNsdWRlcyh3b3JkKVxuICB9XG59XG4iLCJpbXBvcnQge1Byb3ZpZGVyfSBmcm9tICcuL3Byb3ZpZGVyJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFUZXhQcm92aWRlciBleHRlbmRzIFByb3ZpZGVyIHtcbiAgICBjYXRlZ29yeSA9IFwiTFwiXG4gICAgY29tcGxldGlvbnMgPSBbXCJcXFxcQXJyb3d2ZXJ0XCIsIFwiXFxcXEJiYmtcIiwgXCJcXFxcQmlnXCIsIFwiXFxcXEJpZ2dcIiwgXCJcXFxcQmlnZ2xcIiwgXCJcXFxcQmlnZ3JcIiwgXCJcXFxcQmlnbFwiLCBcIlxcXFxCaWdtXCIsIFwiXFxcXEJpZ3JcIiwgXCJcXFxcQm94XCIsIFwiXFxcXEJ1bXBlcVwiLCBcIlxcXFxDYXBcIiwgXCJcXFxcY2l0ZVsje31deyN7fX1cIiwgXCJcXFxcY2l0ZVwiLCBcIlxcXFxDdXBcIiwgXCJcXFxcRGVjbGFyZU1hdGhPcGVyYXRvcnsje319eyN7fX1cIiwgXCJcXFxcRGVsdGFcIiwgXCJcXFxcRG93bmFycm93XCIsIFwiXFxcXEZpbnZcIiwgXCJcXFxcR2FtZVwiLCBcIlxcXFxHYW1tYVwiLCBcIlxcXFxJbVwiLCBcIlxcXFxMYW1iZGFcIiwgXCJcXFxcTGVmdGFycm93XCIsIFwiXFxcXExlZnRyaWdodGFycm93XCIsIFwiXFxcXExsZWZ0YXJyb3dcIiwgXCJcXFxcTG9uZ2xlZnRhcnJvd1wiLCBcIlxcXFxMb25nbGVmdHJpZ2h0YXJyb3dcIiwgXCJcXFxcTG9uZ3JpZ2h0YXJyb3dcIiwgXCJcXFxcTHNoXCIsIFwiXFxcXE9tZWdhXCIsIFwiXFxcXFBoaVwiLCBcIlxcXFxQaVwiLCBcIlxcXFxQclwiLCBcIlxcXFxQc2lcIiwgXCJcXFxcUmVcIiwgXCJcXFxcUmlnaHRhcnJvd1wiLCBcIlxcXFxScmlnaHRhcnJvd1wiLCBcIlxcXFxSc2hcIiwgXCJcXFxcU1wiLCBcIlxcXFxTaWdtYVwiLCBcIlxcXFxTdWJzZXRcIiwgXCJcXFxcU3Vwc2V0XCIsIFwiXFxcXFRlWFwiLCBcIlxcXFxUaGV0YVwiLCBcIlxcXFxVcGFycm93XCIsIFwiXFxcXFVwZG93bmFycm93XCIsIFwiXFxcXFVwc2lsb25cIiwgXCJcXFxcVmRhc2hcIiwgXCJcXFxcVmVydFwiLCBcIlxcXFxWdmRhc2hcIiwgXCJcXFxcWGlcIiwgXCJcXFxcYWJvdmVcIiwgXCJcXFxcYWJvdmV3aXRoZGVsaW1zXCIsIFwiXFxcXGFjdXRleyN7fX1cIiwgXCJcXFxcYWxlcGhcIiwgXCJcXFxcYWxwaGFcIiwgXCJcXFxcYW1hbGdcIiwgXCJcXFxcYW5nbGVcIiwgXCJcXFxcYXBwcm94XCIsIFwiXFxcXGFwcHJveGVxXCIsIFwiXFxcXGFyY2Nvc1wiLCBcIlxcXFxhcmNzaW5cIiwgXCJcXFxcYXJjdGFuXCIsIFwiXFxcXGFyZ1wiLCBcIlxcXFxhcnJvd3ZlcnRcIiwgXCJcXFxcYXN0XCIsIFwiXFxcXGFzeW1wXCIsIFwiXFxcXGF0b3BcIixcbiAgICAgICAgXCJcXFxcYXRvcHdpdGhkZWxpbXNcIiwgXCJcXFxcYmFja2Vwc2lsb25cIiwgXCJcXFxcYmFja3ByaW1lXCIsIFwiXFxcXGJhY2tzaW1cIiwgXCJcXFxcYmFja3NpbWVxXCIsIFwiXFxcXGJhY2tzbGFzaFwiLCBcIlxcXFxiYXJ7I3t9fVwiLCBcIlxcXFxiYXJ3ZWRnZVwiLCBcIlxcXFxiZWNhdXNlXCIsIFwiXFxcXGJldGFcIiwgXCJcXFxcYmV0aFwiLCBcIlxcXFxiZXR3ZWVuXCIsIFwiXFxcXGJmXCIsIFwiXFxcXGJpZ1wiLCBcIlxcXFxiaWdjYXBcIiwgXCJcXFxcYmlnY2lyY1wiLCBcIlxcXFxiaWdjdXBcIiwgXCJcXFxcYmlnZ1wiLCBcIlxcXFxiaWdnbFwiLCBcIlxcXFxiaWdnbVwiLCBcIlxcXFxiaWdnclwiLCBcIlxcXFxiaWdsXCIsIFwiXFxcXGJpZ21cIiwgXCJcXFxcYmlnb2RvdFwiLCBcIlxcXFxiaWdvcGx1c1wiLCBcIlxcXFxiaWdvdGltZXNcIiwgXCJcXFxcYmlnclxcXFx9XCIsIFwiXFxcXGJpZ3NxY3VwXCIsIFwiXFxcXGJpZ3N0YXJcIiwgXCJcXFxcYmlndHJpYW5nbGVkb3duXCIsIFwiXFxcXGJpZ3RyaWFuZ2xldXBcIiwgXCJcXFxcYmlndXBsdXNcIiwgXCJcXFxcYmlndmVlXCIsIFwiXFxcXGJpZ3dlZGdlXCIsIFwiXFxcXGJpbm9teyN7fX17I3t9fVwiLCBcIlxcXFxibGFja2xvemVuZ2VcIiwgXCJcXFxcYmxhY2tzcXVhcmVcIiwgXCJcXFxcYmxhY2t0cmlhbmdsZVwiLCBcIlxcXFxibGFja3RyaWFuZ2xlZG93blwiLCBcIlxcXFxibGFja3RyaWFuZ2xlbGVmdFwiLCBcIlxcXFxibGFja3RyaWFuZ2xlcmlnaHRcIiwgXCJcXFxcYm1vZFwiLCBcIlxcXFxib2xkc3ltYm9seyN7fX1cIiwgXCJcXFxcYm90XCIsIFwiXFxcXGJvd3RpZVwiLCBcIlxcXFxib3hkb3RcIiwgXCJcXFxcYm94ZWR7I3t9fVwiLCBcIlxcXFxib3htaW51c1wiLCBcIlxcXFxib3hwbHVzXCIsIFwiXFxcXGJveHRpbWVzXCIsIFwiXFxcXGJyYWNlXCIsIFwiXFxcXGJyYWNldmVydFwiLCBcIlxcXFxicmFja1wiLCBcIlxcXFxicmV2ZXsje319XCIsIFwiXFxcXGJ1aWxkcmVsXCIsIFwiXFxcXGJ1bGxldFwiLCBcIlxcXFxidW1wZXFcIiwgXCJcXFxcY2FsXCIsIFwiXFxcXGNhcFwiLCBcIlxcXFxjYXNlc3sje319XCIsIFwiXFxcXGNkb3RcIiwgXCJcXFxcY2RvdHBcIiwgXCJcXFxcY2RvdHNcIixcbiAgICAgICAgXCJcXFxcY2VudGVyZG90XCIsIFwiXFxcXGNmcmFjeyN7fX17I3t9fVwiLCBcIlxcXFxjaGVja3sje319XCIsIFwiXFxcXGNoZWNrbWFya1wiLCBcIlxcXFxjaGlcIiwgXCJcXFxcY2hvb3NlXCIsIFwiXFxcXGNpcmNcIiwgXCJcXFxcY2lyY2VxXCIsIFwiXFxcXGNpcmNsZWFycm93bGVmdFwiLCBcIlxcXFxjaXJjbGVhcnJvd3JpZ2h0XCIsIFwiXFxcXGNpcmNsZWRTXCIsIFwiXFxcXGNpcmNsZWRhc3RcIiwgXCJcXFxcY2lyY2xlZGNpcmNcIiwgXCJcXFxcY2lyY2xlZGRhc2hcIiwgXCJcXFxcY2x1YnN1aXRcIiwgXCJcXFxcY29sb25cIiwgXCJcXFxcY29tcGxlbWVudFwiLCBcIlxcXFxjb25nXCIsIFwiXFxcXGNvcHJvZFwiLCBcIlxcXFxjb3NcIiwgXCJcXFxcY29zaFwiLCBcIlxcXFxjb3RcIiwgXCJcXFxcY290aFwiLCBcIlxcXFxjclwiLCBcIlxcXFxjc2NcIiwgXCJcXFxcY3VwXCIsIFwiXFxcXGN1cmx5ZXFwcmVjXCIsIFwiXFxcXGN1cmx5ZXFzdWNjXCIsIFwiXFxcXGN1cmx5dmVlXCIsIFwiXFxcXGN1cmx5d2VkZ2VcIiwgXCJcXFxcY3VydmVhcnJvd2xlZnRcIiwgXCJcXFxcY3VydmVhcnJvd3JpZ2h0XCIsIFwiXFxcXGRhZ2dlclwiLCBcIlxcXFxkYWxldGhcIiwgXCJcXFxcZGFzaGxlZnRhcnJvd1wiLCBcIlxcXFxkYXNocmlnaHRhcnJvd1wiLCBcIlxcXFxkYXNodlwiLCBcIlxcXFxkYmlub217I3t9fXsje319XCIsIFwiXFxcXGRkYWdnZXJcIiwgXCJcXFxcZGRkZG90eyN7fX1cIiwgXCJcXFxcZGRkb3R7I3t9fVwiLCBcIlxcXFxkZG90eyN7fX1cIiwgXCJcXFxcZGRvdHNcIiwgXCJcXFxcZGVmXCIsIFwiXFxcXGRlZ1wiLCBcIlxcXFxkZWx0YVwiLCBcIlxcXFxkZXRcIiwgXCJcXFxcZGZyYWN7I3t9fXsje319XCIsIFwiXFxcXGRpYWdkb3duXCIsIFwiXFxcXGRpYWd1cFwiLCBcIlxcXFxkaWFtb25kXCIsIFwiXFxcXGRpYW1vbmRzdWl0XCIsIFwiXFxcXGRpZ2FtbWFcIiwgXCJcXFxcZGltXCIsIFwiXFxcXGRpc3BsYXlsaW5lc1wiLCBcIlxcXFxkaXNwbGF5c3R5bGVcIiwgXCJcXFxcZGl2XCIsIFwiXFxcXGRpdmlkZW9udGltZXNcIiwgXCJcXFxcZG90eyN7fX1cIiwgXCJcXFxcZG90ZXFcIiwgXCJcXFxcZG90ZXFkb3RcIiwgXCJcXFxcZG90cGx1c1wiLFxuICAgICAgICBcIlxcXFxkb3RzXCIsIFwiXFxcXGRvdHNiXCIsIFwiXFxcXGRvdHNjXCIsIFwiXFxcXGRvdHNpXCIsIFwiXFxcXGRvdHNtXCIsIFwiXFxcXGRvdHNvXCIsIFwiXFxcXGRvdWJsZWJhcndlZGdlXCIsIFwiXFxcXGRvd25hcnJvd1wiLCBcIlxcXFxkb3duZG93bmFycm93c1wiLCBcIlxcXFxkb3duaGFycG9vbmxlZnRcIiwgXCJcXFxcZG93bmhhcnBvb25yaWdodFwiLCBcIlxcXFxlbGxcIiwgXCJcXFxcZW1wdHlzZXRcIiwgXCJcXFxcZW5zcGFjZVwiLCBcIlxcXFxlcHNpbG9uXCIsIFwiXFxcXGVxYWxpZ257I3t9fVwiLCBcIlxcXFxlcWFsaWdubm97I3t9fVwiLCBcIlxcXFxlcWNpcmNcIiwgXCJcXFxcZXFyZWZ7I3t9fVwiLCBcIlxcXFxlcXNpbVwiLCBcIlxcXFxlcXNsYW50Z3RyXCIsIFwiXFxcXGVxc2xhbnRsZXNzXCIsIFwiXFxcXGVxdWl2XCIsIFwiXFxcXGV0YVwiLCBcIlxcXFxldGhcIiwgXCJcXFxcZXhpc3RzXCIsIFwiXFxcXGV4cFwiLCBcIlxcXFxmYWxsaW5nZG90c2VxXCIsIFwiXFxcXGZsYXRcIiwgXCJcXFxcZm9yYWxsXCIsIFwiXFxcXGZyb3duXCIsIFwiXFxcXGdhbW1hXCIsIFwiXFxcXGdjZFwiLCBcIlxcXFxnZVwiLCBcIlxcXFxnZXFcIiwgXCJcXFxcZ2VxcVwiLCBcIlxcXFxnZXFzbGFudFwiLCBcIlxcXFxnZXRzXCIsIFwiXFxcXGdnXCIsIFwiXFxcXGdnZ1wiLCBcIlxcXFxnaW1lbFwiLCBcIlxcXFxnbmFwcHJveFwiLCBcIlxcXFxnbmVxXCIsIFwiXFxcXGduZXFxXCIsIFwiXFxcXGduc2ltXCIsIFwiXFxcXGdyYXZleyN7fX1cIiwgXCJcXFxcZ3RyYXBwcm94XCIsIFwiXFxcXGd0cmRvdFwiLCBcIlxcXFxndHJlcWxlc3NcIiwgXCJcXFxcZ3RyZXFxbGVzc1wiLCBcIlxcXFxndHJsZXNzXCIsIFwiXFxcXGd0cnNpbVwiLCBcIlxcXFxndmVydG5lcXFcIiwgXCJcXFxcaGF0eyN7fX1cIiwgXCJcXFxcaGJhclwiLCBcIlxcXFxoYm94XCIsIFwiXFxcXGhlYXJ0c3VpdFwiLCBcIlxcXFxoZmlsXCIsIFwiXFxcXGhmaWxsXCIsIFwiXFxcXGhvbVwiLCBcIlxcXFxob29rbGVmdGFycm93XCIsIFwiXFxcXGhvb2tyaWdodGFycm93XCIsIFwiXFxcXGhwaGFudG9teyN7fX1cIiwgXCJcXFxcaHNraXBcIiwgXCJcXFxcaHNsYXNoXCIsIFwiXFxcXGlkb3RzaW50XCIsIFwiXFxcXGlmZlwiLFxuICAgICAgICBcIlxcXFxpaWlpbnRcIiwgXCJcXFxcaWlpbnRcIiwgXCJcXFxcaWludFwiLCBcIlxcXFxpbWF0aFwiLCBcIlxcXFxpbXBsaWVkYnlcIiwgXCJcXFxcaW1wbGllc1wiLCBcIlxcXFxpblwiLCBcIlxcXFxpbmZcIiwgXCJcXFxcaW5mdHlcIiwgXCJcXFxcaW5qbGltXCIsIFwiXFxcXGludFxcXFxsaW1pdHNfeyN7fX1eeyN7fX1cIiwgXCJcXFxcaW50ZXJjYWxcIiwgXCJcXFxcaW90YVwiLCBcIlxcXFxpdFwiLCBcIlxcXFxqbWF0aFwiLCBcIlxcXFxrYXBwYVwiLCBcIlxcXFxrZXJcIiwgXCJcXFxca2VyblwiLCBcIlxcXFxsVmVydFwiLCBcIlxcXFxsYW1iZGFcIiwgXCJcXFxcbGFuZFwiLCBcIlxcXFxsYW5nbGVcIiwgXCJcXFxcbGJyYWNlXCIsIFwiXFxcXGxicmFja1wiLCBcIlxcXFxsY2VpbFwiLCBcIlxcXFxsZG90cFwiLCBcIlxcXFxsZG90c1wiLCBcIlxcXFxsZVwiLCBcIlxcXFxsZWZ0XCIsIFwiXFxcXGxlZnRhcnJvd1wiLCBcIlxcXFxsZWZ0YXJyb3d0YWlsXCIsIFwiXFxcXGxlZnRoYXJwb29uZG93blwiLCBcIlxcXFxsZWZ0aGFycG9vbnVwXCIsIFwiXFxcXGxlZnRsZWZ0YXJyb3dzXCIsIFwiXFxcXGxlZnRyaWdodGFycm93XCIsIFwiXFxcXGxlZnRyaWdodGFycm93c1wiLCBcIlxcXFxsZWZ0cmlnaHRoYXJwb29uc1wiLCBcIlxcXFxsZWZ0cmlnaHRzcXVpZ2Fycm93XCIsIFwiXFxcXGxlZnRyb290eyN7fX1cIiwgXCJcXFxcbGVmdHRocmVldGltZXNcIiwgXCJcXFxcbGVxXCIsIFwiXFxcXGxlcWFsaWdubm97I3t9fVwiLCBcIlxcXFxsZXFxXCIsIFwiXFxcXGxlcXNsYW50XCIsIFwiXFxcXGxlc3NhcHByb3hcIiwgXCJcXFxcbGVzc2RvdFwiLCBcIlxcXFxsZXNzZXFndHJcIiwgXCJcXFxcbGVzc2VxcWd0clwiLCBcIlxcXFxsZXNzZ3RyXCIsIFwiXFxcXGxlc3NzaW1cIiwgXCJcXFxcbGV0eyN7fX17I3t9fVwiLCBcIlxcXFxsZmxvb3JcIiwgXCJcXFxcbGdcIiwgXCJcXFxcbGdyb3VwXCIsIFwiXFxcXGxoZFwiLCBcIlxcXFxsaW1cIiwgXCJcXFxcbGltaW5mXCIsIFwiXFxcXGxpbWl0c197I3t9fV57I3t9fVwiLCBcIlxcXFxsaW1zdXBcIiwgXCJcXFxcbGxcIiwgXCJcXFxcbGxhcHsje319XCIsIFwiXFxcXGxsY29ybmVyXCIsIFwiXFxcXGxsbFwiLCBcIlxcXFxsbW91c3RhY2hlXCIsXG4gICAgICAgIFwiXFxcXGxuXCIsIFwiXFxcXGxuYXBwcm94XCIsIFwiXFxcXGxuZXFcIiwgXCJcXFxcbG5lcXFcIiwgXCJcXFxcbG5vdFwiLCBcIlxcXFxsbnNpbVwiLCBcIlxcXFxsb2dcIiwgXCJcXFxcbG9uZ2xlZnRhcnJvd1wiLCBcIlxcXFxsb25nbGVmdHJpZ2h0YXJyb3dcIiwgXCJcXFxcbG9uZ21hcHN0b1wiLCBcIlxcXFxsb25ncmlnaHRhcnJvd1wiLCBcIlxcXFxsb29wYXJyb3dsZWZ0XCIsIFwiXFxcXGxvb3BhcnJvd3JpZ2h0XCIsIFwiXFxcXGxvclwiLCBcIlxcXFxsb3dlclwiLCBcIlxcXFxsb3plbmdlXCIsIFwiXFxcXGxyY29ybmVyXCIsIFwiXFxcXGx0aW1lc1wiLCBcIlxcXFxsdmVydFwiLCBcIlxcXFxsdmVydG5lcXFcIiwgXCJcXFxcbWFsdGVzZVwiLCBcIlxcXFxtYXBzdG9cIiwgXCJcXFxcbWF0aGJieyN7fX1cIiwgXCJcXFxcbWF0aGJmeyN7fX1cIiwgXCJcXFxcbWF0aGJpblwiLCBcIlxcXFxtYXRoY2FseyN7fX1cIiwgXCJcXFxcbWF0aGNob2ljZVwiLCBcIlxcXFxtYXRoY2xvc2VcIiwgXCJcXFxcbWF0aGZyYWt7I3t9fVwiLCBcIlxcXFxtYXRoaW5uZXJcIiwgXCJcXFxcbWF0aG9wXCIsIFwiXFxcXG1hdGhvcGVuXCIsIFwiXFxcXG1hdGhvcmRcIiwgXCJcXFxcbWF0aHB1bmN0XCIsIFwiXFxcXG1hdGhyZWxcIiwgXCJcXFxcbWF0aHN0cnV0XCIsIFwiXFxcXG1hdHJpeHsje319XCIsIFwiXFxcXG1heFwiLCBcIlxcXFxtZWFzdXJlZGFuZ2xlXCIsIFwiXFxcXG1ob1wiLCBcIlxcXFxtaWRcIiwgXCJcXFxcbWlkZGxlXCIsIFwiXFxcXG1pblwiLCBcIlxcXFxtaXRcIiwgXCJcXFxcbWtlcm5cIiwgXCJcXFxcbW9kXCIsIFwiXFxcXG1vZGVsc1wiLCBcIlxcXFxtb3ZlbGVmdFwiLCBcIlxcXFxtb3ZlcmlnaHRcIiwgXCJcXFxcbXBcIiwgXCJcXFxcbXNraXBcIiwgXCJcXFxcbXNwYWNleyN7fX1cIiwgXCJcXFxcbXVcIiwgXCJcXFxcbXVsdGltYXBcIiwgXCJcXFxcbkxlZnRhcnJvd1wiLCBcIlxcXFxuTGVmdHJpZ2h0YXJyb3dcIiwgXCJcXFxcblJpZ2h0YXJyb3dcIiwgXCJcXFxcblZEYXNoXCIsIFwiXFxcXG5WZGFzaFwiLCBcIlxcXFxuYWJsYVwiLCBcIlxcXFxuYXR1cmFsXCIsIFwiXFxcXG5jb25nXCIsIFwiXFxcXG5lXCIsIFwiXFxcXG5lYXJyb3dcIiwgXCJcXFxcbmVnXCIsIFwiXFxcXG5lZ21lZHNwYWNlXCIsXG4gICAgICAgIFwiXFxcXG5lZ3RoaWNrc3BhY2VcIiwgXCJcXFxcbmVndGhpbnNwYWNlXCIsIFwiXFxcXG5lcVwiLCBcIlxcXFxuZXhpc3RzXCIsIFwiXFxcXG5nZXFcIiwgXCJcXFxcbmdlcXFcIiwgXCJcXFxcbmdlcXNsYW50XCIsIFwiXFxcXG5ndHJcIiwgXCJcXFxcbmlcIiwgXCJcXFxcbmxlZnRhcnJvd1wiLCBcIlxcXFxubGVmdHJpZ2h0YXJyb3dcIiwgXCJcXFxcbmxlcVwiLCBcIlxcXFxubGVxcVwiLCBcIlxcXFxubGVxc2xhbnRcIiwgXCJcXFxcbmxlc3NcIiwgXCJcXFxcbm1pZFwiLCBcIlxcXFxub2xpbWl0c197I3t9fV57I3t9fVwiLCBcIlxcXFxub3RcIiwgXCJcXFxcbm90YWdcIiwgXCJcXFxcbm90aW5cIiwgXCJcXFxcbnBhcmFsbGVsXCIsIFwiXFxcXG5wcmVjXCIsIFwiXFxcXG5wcmVjZXFcIiwgXCJcXFxcbnJpZ2h0YXJyb3dcIiwgXCJcXFxcbnNob3J0bWlkXCIsIFwiXFxcXG5zaG9ydHBhcmFsbGVsXCIsIFwiXFxcXG5zaW1cIiwgXCJcXFxcbnN1YnNldGVxXCIsIFwiXFxcXG5zdWJzZXRlcXFcIiwgXCJcXFxcbnN1Y2NcIiwgXCJcXFxcbnN1Y2NlcVwiLCBcIlxcXFxuc3Vwc2V0ZXFcIiwgXCJcXFxcbnN1cHNldGVxcVwiLCBcIlxcXFxudHJpYW5nbGVsZWZ0XCIsIFwiXFxcXG50cmlhbmdsZWxlZnRlcVwiLCBcIlxcXFxudHJpYW5nbGVyaWdodFwiLCBcIlxcXFxudHJpYW5nbGVyaWdodGVxXCIsIFwiXFxcXG51XCIsIFwiXFxcXG52RGFzaFwiLCBcIlxcXFxudmRhc2hcIiwgXCJcXFxcbndhcnJvd1wiLCBcIlxcXFxvZG90XCIsIFwiXFxcXG9pbnRcIiwgXCJcXFxcb2xkc3R5bGVcIiwgXCJcXFxcb21lZ2FcIiwgXCJcXFxcb21pbnVzXCIsIFwiXFxcXG9wZXJhdG9ybmFtZXsje319XCIsIFwiXFxcXG9wbHVzXCIsIFwiXFxcXG9zbGFzaFwiLCBcIlxcXFxvdGltZXNcIiwgXCJcXFxcb3ZlclwiLCBcIlxcXFxvdmVyYnJhY2V7I3t9fVwiLCBcIlxcXFxvdmVybGVmdGFycm93eyN7fX1cIiwgXCJcXFxcb3ZlcmxlZnRyaWdodGFycm93eyN7fX1cIiwgXCJcXFxcb3ZlcmxpbmV7I3t9fVwiLCBcIlxcXFxvdmVycmlnaHRhcnJvd3sje319XCIsIFwiXFxcXG92ZXJzZXR7I3t9fXsje319XCIsIFwiXFxcXG92ZXJ3aXRoZGVsaW1zXCIsIFwiXFxcXG93bnNcIixcbiAgICAgICAgXCJcXFxccGFyYWxsZWxcIiwgXCJcXFxccGFydGlhbFwiLCBcIlxcXFxwZXJwXCIsIFwiXFxcXHBoYW50b217I3t9fVwiLCBcIlxcXFxwaGlcIiwgXCJcXFxccGlcIiwgXCJcXFxccGl0Y2hmb3JrXCIsIFwiXFxcXHBtXCIsIFwiXFxcXHBtYXRyaXh7I3t9fVwiLCBcIlxcXFxwbWJ7I3t9fVwiLCBcIlxcXFxwbW9kXCIsIFwiXFxcXHBvZFwiLCBcIlxcXFxwcmVjXCIsIFwiXFxcXHByZWNhcHByb3hcIiwgXCJcXFxccHJlY2N1cmx5ZXFcIiwgXCJcXFxccHJlY2VxXCIsIFwiXFxcXHByZWNuYXBwcm94XCIsIFwiXFxcXHByZWNuZXFxXCIsIFwiXFxcXHByZWNuc2ltXCIsIFwiXFxcXHByZWNzaW1cIiwgXCJcXFxccHJpbWVcIiwgXCJcXFxccHJvZFxcXFxsaW1pdHNfeyN7fX1eeyN7fX1cIiwgXCJcXFxccHJvamxpbVwiLCBcIlxcXFxwcm9wdG9cIiwgXCJcXFxccHNpXCIsIFwiXFxcXHFxdWFkXCIsIFwiXFxcXHF1YWRcIiwgXCJcXFxcclZlcnRcIiwgXCJcXFxccmFpc2VcIiwgXCJcXFxccmFuZ2xlXCIsIFwiXFxcXHJicmFjZVwiLCBcIlxcXFxyYnJhY2tcIiwgXCJcXFxccmNlaWxcIiwgXCJcXFxccmZsb29yXCIsIFwiXFxcXHJncm91cFwiLCBcIlxcXFxyaGRcIiwgXCJcXFxccmhvXCIsIFwiXFxcXHJpZ2h0XCIsIFwiXFxcXHJpZ2h0YXJyb3dcIiwgXCJcXFxccmlnaHRhcnJvd3RhaWxcIiwgXCJcXFxccmlnaHRoYXJwb29uZG93blwiLCBcIlxcXFxyaWdodGhhcnBvb251cFwiLCBcIlxcXFxyaWdodGxlZnRhcnJvd3NcIiwgXCJcXFxccmlnaHRsZWZ0aGFycG9vbnNcIiwgXCJcXFxccmlnaHRyaWdodGFycm93c1wiLCBcIlxcXFxyaWdodHNxdWlnYXJyb3dcIiwgXCJcXFxccmlnaHR0aHJlZXRpbWVzXCIsIFwiXFxcXHJpc2luZ2RvdHNlcVwiLCBcIlxcXFxybGFweyN7fX1cIiwgXCJcXFxccm1cIiwgXCJcXFxccm1vdXN0YWNoZVwiLCBcIlxcXFxyb290ICN7fSBcXFxcb2YgI3t9XCIsIFwiXFxcXHJ0aW1lc1wiLCBcIlxcXFxydmVydFwiLCBcIlxcXFxzY3JpcHRzY3JpcHRzdHlsZVwiLCBcIlxcXFxzY3JpcHRzdHlsZVwiLCBcIlxcXFxzZWFycm93XCIsIFwiXFxcXHNlY1wiLCBcIlxcXFxzZXRtaW51c1wiLCBcIlxcXFxzaGFycFwiLCBcIlxcXFxzaG9ydG1pZFwiLFxuICAgICAgICBcIlxcXFxzaG9ydHBhcmFsbGVsXCIsIFwiXFxcXHNpZGVzZXR7I3t9fXsje319eyN7fX1cIiwgXCJcXFxcc2lnbWFcIiwgXCJcXFxcc2ltXCIsIFwiXFxcXHNpbWVxXCIsIFwiXFxcXHNpblwiLCBcIlxcXFxzaW5oXCIsIFwiXFxcXHNrZXd7I3t9fXsje319eyN7fX1cIiwgXCJcXFxcc21hbGxmcm93blwiLCBcIlxcXFxzbWFsbGludFwiLCBcIlxcXFxzbWFsbHNldG1pbnVzXCIsIFwiXFxcXHNtYWxsc21pbGVcIiwgXCJcXFxcc21hc2h7I3t9fVwiLCBcIlxcXFxzbWlsZVwiLCBcIlxcXFxzcGFjZVwiLCBcIlxcXFxzcGFkZXN1aXRcIiwgXCJcXFxcc3BoZXJpY2FsYW5nbGVcIiwgXCJcXFxcc3FjYXBcIiwgXCJcXFxcc3FjdXBcIiwgXCJcXFxcc3FydHsje319XCIsIFwiXFxcXHNxc3Vic2V0XCIsIFwiXFxcXHNxc3Vic2V0ZXFcIiwgXCJcXFxcc3FzdXBzZXRcIiwgXCJcXFxcc3FzdXBzZXRlcVwiLCBcIlxcXFxzcXVhcmVcIiwgXCJcXFxcc3RhclwiLCBcIlxcXFxzdHJ1dFwiLCBcIlxcXFxzdWJzZXRcIiwgXCJcXFxcc3Vic2V0ZXFcIiwgXCJcXFxcc3Vic2V0ZXFxXCIsIFwiXFxcXHN1YnNldG5lcVwiLCBcIlxcXFxzdWJzZXRuZXFxXCIsIFwiXFxcXHN1YnN0YWNreyN7fX1cIiwgXCJcXFxcc3VjY1wiLCBcIlxcXFxzdWNjYXBwcm94XCIsIFwiXFxcXHN1Y2NjdXJseWVxXCIsIFwiXFxcXHN1Y2NlcVwiLCBcIlxcXFxzdWNjbmFwcHJveFwiLCBcIlxcXFxzdWNjbmVxcVwiLCBcIlxcXFxzdWNjbnNpbVwiLCBcIlxcXFxzdWNjc2ltXCIsIFwiXFxcXHN1bVxcXFxsaW1pdHNfeyN7fX1eeyN7fX1cIiwgXCJcXFxcc3VwXCIsIFwiXFxcXHN1cHNldFwiLCBcIlxcXFxzdXBzZXRlcVwiLCBcIlxcXFxzdXBzZXRlcXFcIiwgXCJcXFxcc3Vwc2V0bmVxXCIsIFwiXFxcXHN1cHNldG5lcXFcIiwgXCJcXFxcc3VyZFwiLCBcIlxcXFxzd2Fycm93XCIsIFwiXFxcXHRhZ3sje319XCIsIFwiXFxcXHRhblwiLCBcIlxcXFx0YW5oXCIsIFwiXFxcXHRhdVwiLCBcIlxcXFx0Ymlub217I3t9fXsje319XCIsIFwiXFxcXHRleHR7I3t9fVwiLCBcIlxcXFx0ZXh0c3R5bGVcIiwgXCJcXFxcdGZyYWN7I3t9fXsje319XCIsIFwiXFxcXHRoZXJlZm9yZVwiLCBcIlxcXFx0aGV0YVwiLFxuICAgICAgICBcIlxcXFx0aGlja2FwcHJveFwiLCBcIlxcXFx0aGlja3NpbVwiLCBcIlxcXFx0aGluc3BhY2VcIiwgXCJcXFxcdGlsZGV7I3t9fVwiLCBcIlxcXFx0aW1lc1wiLCBcIlxcXFx0b1wiLCBcIlxcXFx0b3BcIiwgXCJcXFxcdHJpYW5nbGVcIiwgXCJcXFxcdHJpYW5nbGVkb3duXCIsIFwiXFxcXHRyaWFuZ2xlbGVmdFwiLCBcIlxcXFx0cmlhbmdsZWxlZnRlcVwiLCBcIlxcXFx0cmlhbmdsZXFcIiwgXCJcXFxcdHJpYW5nbGVyaWdodFwiLCBcIlxcXFx0cmlhbmdsZXJpZ2h0ZXFcIiwgXCJcXFxcdHRcIiwgXCJcXFxcdHdvaGVhZGxlZnRhcnJvd1wiLCBcIlxcXFx0d29oZWFkcmlnaHRhcnJvd1wiLCBcIlxcXFx1bGNvcm5lclwiLCBcIlxcXFx1bmRlcmJyYWNleyN7fX1cIiwgXCJcXFxcdW5kZXJsZWZ0YXJyb3d7I3t9fVwiLCBcIlxcXFx1bmRlcmxlZnRyaWdodGFycm93eyN7fX1cIiwgXCJcXFxcdW5kZXJsaW5leyN7fX1cIiwgXCJcXFxcdW5kZXJyaWdodGFycm93eyN7fX1cIiwgXCJcXFxcdW5kZXJzZXR7I3t9fXsje319XCIsIFwiXFxcXHVubGhkXCIsIFwiXFxcXHVucmhkXCIsIFwiXFxcXHVwYXJyb3dcIiwgXCJcXFxcdXBkb3duYXJyb3dcIiwgXCJcXFxcdXBoYXJwb29ubGVmdFwiLCBcIlxcXFx1cGhhcnBvb25yaWdodFwiLCBcIlxcXFx1cGx1c1wiLCBcIlxcXFx1cHJvb3R7I3t9fVwiLCBcIlxcXFx1cHNpbG9uXCIsIFwiXFxcXHVwdXBhcnJvd3NcIiwgXCJcXFxcdXJjb3JuZXJcIiwgXCJcXFxcdkRhc2hcIiwgXCJcXFxcdmFyRGVsdGFcIiwgXCJcXFxcdmFyR2FtbWFcIiwgXCJcXFxcdmFyTGFtYmRhXCIsIFwiXFxcXHZhck9tZWdhXCIsIFwiXFxcXHZhclBoaVwiLCBcIlxcXFx2YXJQaVwiLCBcIlxcXFx2YXJQc2lcIiwgXCJcXFxcdmFyU2lnbWFcIiwgXCJcXFxcdmFyVGhldGFcIiwgXCJcXFxcdmFyVXBzaWxvblwiLCBcIlxcXFx2YXJYaVwiLCBcIlxcXFx2YXJlcHNpbG9uXCIsIFwiXFxcXHZhcmluamxpbVwiLCBcIlxcXFx2YXJrYXBwYVwiLCBcIlxcXFx2YXJsaW1pbmZcIiwgXCJcXFxcdmFybGltc3VwXCIsIFwiXFxcXHZhcm5vdGhpbmdcIiwgXCJcXFxcdmFycGhpXCIsIFwiXFxcXHZhcnBpXCIsXG4gICAgICAgIFwiXFxcXHZhcnByb2psaW1cIiwgXCJcXFxcdmFycHJvcHRvXCIsIFwiXFxcXHZhcnJob1wiLCBcIlxcXFx2YXJzaWdtYVwiLCBcIlxcXFx2YXJzdWJzZXRuZXFcIiwgXCJcXFxcdmFyc3Vic2V0bmVxcVwiLCBcIlxcXFx2YXJzdXBzZXRuZXFcIiwgXCJcXFxcdmFyc3Vwc2V0bmVxcVwiLCBcIlxcXFx2YXJ0aGV0YVwiLCBcIlxcXFx2YXJ0cmlhbmdsZVwiLCBcIlxcXFx2YXJ0cmlhbmdsZWxlZnRcIiwgXCJcXFxcdmFydHJpYW5nbGVyaWdodFwiLCBcIlxcXFx2Y2VudGVyXCIsIFwiXFxcXHZkYXNoXCIsIFwiXFxcXHZlY3sje319XCIsIFwiXFxcXHZlZVwiLCBcIlxcXFx2ZWViYXJcIiwgXCJcXFxcdmVydFwiLCBcIlxcXFx2cGhhbnRvbXsje319XCIsIFwiXFxcXHdlZGdlXCIsIFwiXFxcXHdpZGVoYXR7I3t9fVwiLCBcIlxcXFx3aWRldGlsZGV7I3t9fVwiLCBcIlxcXFx3cFwiLCBcIlxcXFx3clwiLCBcIlxcXFx4aVwiLCBcIlxcXFx4bGVmdGFycm93eyN7fX1cIiwgXCJcXFxceHJpZ2h0YXJyb3d7I3t9fVwiLCBcIlxcXFx6ZXRhXCIsIFwiXFxcXGJlZ2lue2RlZmluaXRpb259XCIsIFwiXFxcXGJlZ2lue3Rpa3pjZH1cIiwgXCJcXFxcYmVnaW57dGlrenBpY3R1cmV9XCIsIFwiXFxcXGJlZ2lue2FsaWdufVwiLCBcIlxcXFxiZWdpbnthbGlnbip9XCIsIFwiXFxcXGJlZ2lue2FsaWduYXR9XCIsIFwiXFxcXGJlZ2lue2FsaWduYXQqfVwiLCBcIlxcXFxiZWdpbnthbGlnbmVkfVwiLCBcIlxcXFxiZWdpbnthbGlnbmVkYXR9XCIsIFwiXFxcXGJlZ2lue2FycmF5fVwiLCBcIlxcXFxiZWdpbntCbWF0cml4fVwiLCBcIlxcXFxiZWdpbntibWF0cml4fVwiLCBcIlxcXFxiZWdpbntjYXNlc31cIiwgXCJcXFxcYmVnaW57Q0R9XCIsIFwiXFxcXGJlZ2lue2VxbmFycmF5fVwiLCBcIlxcXFxiZWdpbntlcW5hcnJheSp9XCIsIFwiXFxcXGJlZ2lue2VxdWF0aW9ufVwiLCBcIlxcXFxiZWdpbntlcXVhdGlvbip9XCIsIFwiXFxcXGJlZ2lue2dhdGhlcn1cIiwgXCJcXFxcYmVnaW57Z2F0aGVyKn1cIiwgXCJcXFxcYmVnaW57Z2F0aGVyZWR9XCIsIFwiXFxcXGJlZ2lue21hdHJpeH1cIixcbiAgICAgICAgXCJcXFxcYmVnaW57bXVsdGxpbmV9XCIsIFwiXFxcXGJlZ2lue211bHRsaW5lKn1cIiwgXCJcXFxcYmVnaW57cG1hdHJpeH1cIiwgXCJcXFxcYmVnaW57c21hbGxtYXRyaXh9XCIsIFwiXFxcXGJlZ2lue3NwbGl0fVwiLCBcIlxcXFxiZWdpbntzdWJhcnJheX1cIiwgXCJcXFxcYmVnaW57Vm1hdHJpeH1cIiwgXCJcXFxcYmVnaW57dm1hdHJpeH1cIl1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGlvbixcbiAgZGVmYXVsdERpcmVjdGlvbixcbiAgbWFuYWdlUGxhY2Vob2xkZXJzLFxuICB1cGRhdGVTZWxlY3RlZFN1Z2dlc3Rpb25Gcm9tLFxuICBjb3B5T2JqZWN0LFxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVWaWV3LFxuICBhcHBlbmRXaWRnZXQsXG4gIHVwZGF0ZUNhY2hlZFZpZXcsXG4gIHNjcm9sbFRvLFxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS92aWV3J1xuXG5pbXBvcnQgeyBGbG93UHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9mbG93J1xuaW1wb3J0IHsgVG9rZW5pemVTdHJhdGVneSB9IGZyb20gJy4vcHJvdmlkZXJzL2Zsb3cvdG9rZW5pemVyJ1xuaW1wb3J0IHsgVG9rZW5pemVyRmFjdG9yeSB9IGZyb20gJy4vcHJvdmlkZXJzL2Zsb3cvZmFjdG9yeSdcbmltcG9ydCBMYVRleFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2xhdGV4J1xuaW1wb3J0IHsgQ29tcGxldGlvbiwgUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9wcm92aWRlcidcblxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzJ1xuXG5pbXBvcnQgeyBURmlsZSB9IGZyb20gJ29ic2lkaWFuJ1xuXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlIHtcbiAgcHJpdmF0ZSBwcm92aWRlcnM6IFByb3ZpZGVyW11cbiAgcHJpdmF0ZSBzdWdnZXN0aW9uczogQ29tcGxldGlvbltdXG4gIHByaXZhdGUgc2VsZWN0ZWQ6IERpcmVjdGlvblxuXG4gIHByaXZhdGUgdmlldzogSFRNTEVsZW1lbnRcbiAgcHJpdmF0ZSBjdXJzb3JBdFRyaWdnZXI/OiBDb2RlTWlycm9yLlBvc2l0aW9uXG4gIHByaXZhdGUgbGFzdENvbXBsZXRpb25Xb3JkPzogc3RyaW5nXG4gIHByaXZhdGUgb25DbGlja0NhbGxiYWNrOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWRcblxuICBwcml2YXRlIHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5nc1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5nc1xuICAgIHRoaXMubG9hZFByb3ZpZGVycygpXG4gICAgdGhpcy5zdWdnZXN0aW9ucyA9IFtdXG4gICAgdGhpcy5zZWxlY3RlZCA9IGRlZmF1bHREaXJlY3Rpb24oKVxuICAgIHRoaXMudmlldyA9IG51bGxcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3ICE9PSBudWxsXG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlVmlld0luKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpIHtcbiAgICBjb25zdCBpc0VuYWJsZWQgPSB0aGlzLnNldHRpbmdzLmVuYWJsZWRcbiAgICBpZiAodGhpcy5pc1Nob3duIHx8ICFpc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuY3Vyc29yQXRUcmlnZ2VyID0gbnVsbFxuICAgICAgdGhpcy5yZW1vdmVWaWV3RnJvbShlZGl0b3IpXG4gICAgfSBlbHNlIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGNvcHlPYmplY3QoZWRpdG9yLmdldEN1cnNvcigpKVxuICAgICAgY29uc3QgY3VycmVudExpbmU6IHN0cmluZyA9IGVkaXRvci5nZXRMaW5lKGN1cnNvci5saW5lKVxuXG4gICAgICBjb25zdCB3b3JkU3RhcnRJbmRleCA9IHRoaXMudG9rZW5pemVyLmxhc3RXb3JkU3RhcnRQb3MoXG4gICAgICAgIGN1cnJlbnRMaW5lLFxuICAgICAgICBjdXJzb3IuY2hcbiAgICAgIClcbiAgICAgIGNvbnN0IGN1cnNvckF0ID0gY3Vyc29yLmNoXG4gICAgICBjdXJzb3IuY2ggPSB3b3JkU3RhcnRJbmRleFxuICAgICAgdGhpcy5jdXJzb3JBdFRyaWdnZXIgPSBjdXJzb3JcblxuICAgICAgY29uc3Qgd29yZCA9IGN1cnJlbnRMaW5lLnNsaWNlKHdvcmRTdGFydEluZGV4LCBjdXJzb3JBdClcblxuICAgICAgdGhpcy5zaG93Vmlld0luKGVkaXRvciwgd29yZClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVmlld0luKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IsIGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5jdHJsS2V5ICYmIGV2ZW50LmtleSA9PT0gJyAnKSByZXR1cm4gdGhpcy5yZW1vdmVWaWV3RnJvbShlZGl0b3IpXG5cbiAgICB0aGlzLnNlbGVjdGVkID0gdXBkYXRlU2VsZWN0ZWRTdWdnZXN0aW9uRnJvbShcbiAgICAgIGV2ZW50LFxuICAgICAgdGhpcy5zZWxlY3RlZCxcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMubGVuZ3RoXG4gICAgKVxuXG4gICAgY29uc3QgY3Vyc29yID0gY29weU9iamVjdChlZGl0b3IuZ2V0Q3Vyc29yKCkpXG4gICAgY29uc3QgY3VycmVudExpbmU6IHN0cmluZyA9IGVkaXRvci5nZXRMaW5lKGN1cnNvci5saW5lKVxuICAgIGNvbnN0IGNvbXBsZXRpb25Xb3JkID0gdGhpcy50b2tlbml6ZXIubGFzdFdvcmRGcm9tKGN1cnJlbnRMaW5lLCBjdXJzb3IuY2gpXG5cbiAgICBjb25zdCByZWNyZWF0ZSA9IGNvbXBsZXRpb25Xb3JkICE9PSB0aGlzLmxhc3RDb21wbGV0aW9uV29yZFxuICAgIGlmIChyZWNyZWF0ZSkge1xuICAgICAgdGhpcy5sYXN0Q29tcGxldGlvbldvcmQgPSBjb21wbGV0aW9uV29yZFxuICAgICAgdGhpcy5zaG93Vmlld0luKGVkaXRvciwgY29tcGxldGlvbldvcmQpXG4gICAgfSBlbHNlIHVwZGF0ZUNhY2hlZFZpZXcodGhpcy52aWV3LCB0aGlzLnNlbGVjdGVkLmluZGV4KVxuXG4gICAgc2Nyb2xsVG8odGhpcy5zZWxlY3RlZCwgdGhpcy52aWV3LCB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aClcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVWaWV3RnJvbShlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRlZmF1bHREaXJlY3Rpb24oKVxuICAgIGVkaXRvci5yZW1vdmVLZXlNYXAodGhpcy5rZXlNYXBzKVxuXG4gICAgaWYgKCF0aGlzLnZpZXcpIHJldHVyblxuICAgIHRoaXMuYWRkQ2xpY2tMaXN0ZW5lcih0aGlzLnZpZXcsIGVkaXRvciwgZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLnZpZXcucGFyZW50Tm9kZVxuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZCA9IHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy52aWV3KVxuICAgICAgICBpZiAocmVtb3ZlZCkgdGhpcy52aWV3ID0gbnVsbFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBkZXN0cm95IHZpZXcuIFJlYXNvbjogJHtlfWApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZVByb3ZpZGVyc0Zyb20oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpIHtcbiAgICBjb25zdCB0b2tlbml6ZXIgPSBUb2tlbml6ZXJGYWN0b3J5LmdldFRva2VuaXplcihcbiAgICAgIHRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyVG9rZW5pemVTdHJhdGVneVxuICAgIClcbiAgICBpZiAoXG4gICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgKHRva2VuaXplci5pc1dvcmRTZXBhcmF0b3IoZXZlbnQua2V5KSB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpXG4gICAgKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBjb3B5T2JqZWN0KGVkaXRvci5nZXRDdXJzb3IoKSlcbiAgICAgIGlmICgvRW50ZXIvLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgICBjdXJzb3IubGluZSAtPSAxXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gZWRpdG9yLmdldExpbmUoY3Vyc29yLmxpbmUpXG5cbiAgICAgICAgLy8gQ2hhbmdlZCBlZGl0b3IgcGFuZVxuICAgICAgICBpZiAoIWN1cnJlbnRMaW5lKSByZXR1cm5cblxuICAgICAgICBjdXJzb3IuY2ggPSBjdXJyZW50TGluZS5sZW5ndGhcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpbmUgPSBlZGl0b3IuZ2V0TGluZShjdXJzb3IubGluZSlcbiAgICAgIHRoaXMucHJvdmlkZXJzLmZvckVhY2goKHByb3ZpZGVyKSA9PiB7XG4gICAgICAgIC8vIEZvciBub3cgb25seSBGbG93UHJvdmlkZXJcbiAgICAgICAgaWYgKHByb3ZpZGVyIGluc3RhbmNlb2YgRmxvd1Byb3ZpZGVyKVxuICAgICAgICAgIHByb3ZpZGVyLmFkZExhc3RXb3JkRnJvbShsaW5lLCBjdXJzb3IuY2gsIHRoaXMudG9rZW5pemVyU3RyYXRlZ3kpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzY2FuRmlsZShmaWxlOiBURmlsZSwgc3RyYXRlZ3k6IFRva2VuaXplU3RyYXRlZ3kgPSAnZGVmYXVsdCcpIHtcbiAgICBjb25zdCBwcm92aWRlcnMgPSB0aGlzLnByb3ZpZGVyc1xuICAgIGZpbGUudmF1bHQ/LnJlYWQoZmlsZSkudGhlbigoY29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBUT0RPOiBNYWtlIGl0IGFzeW5jXG4gICAgICBwcm92aWRlcnMuZm9yRWFjaCgocHJvdmlkZXIpID0+IHtcbiAgICAgICAgaWYgKHByb3ZpZGVyIGluc3RhbmNlb2YgRmxvd1Byb3ZpZGVyKVxuICAgICAgICAgIHByb3ZpZGVyLmFkZFdvcmRzRnJvbShjb250ZW50LCBzdHJhdGVneSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRva2VuaXplcigpIHtcbiAgICByZXR1cm4gVG9rZW5pemVyRmFjdG9yeS5nZXRUb2tlbml6ZXIodGhpcy50b2tlbml6ZXJTdHJhdGVneSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHRva2VuaXplclN0cmF0ZWd5KCkge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3lcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1ZpZXdJbihlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLCBjb21wbGV0aW9uV29yZDogc3RyaW5nID0gJycpIHtcbiAgICBpZiAodGhpcy52aWV3KSB0aGlzLnJlbW92ZVZpZXdGcm9tKGVkaXRvcilcblxuICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSB0aGlzLnByb3ZpZGVycy5yZWR1Y2UoXG4gICAgICAoYWNjLCBwcm92aWRlcikgPT4gYWNjLmNvbmNhdChwcm92aWRlci5tYXRjaFdpdGgoY29tcGxldGlvbldvcmQgfHwgJycpKSxcbiAgICAgIFtdXG4gICAgKVxuICAgIGlmICh0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gU3VnZ2VzdCBhdXRvbWF0aWNhbGx5XG4gICAgICB0aGlzLnNlbGVjdGVkLmluZGV4ID0gMFxuICAgICAgdGhpcy5zZWxlY3RTdWdnZXN0aW9uKGVkaXRvcilcbiAgICB9IGVsc2Uge1xuICAgICAgZWRpdG9yLmFkZEtleU1hcCh0aGlzLmtleU1hcHMpXG5cbiAgICAgIHRoaXMudmlldyA9IGdlbmVyYXRlVmlldyh0aGlzLnN1Z2dlc3Rpb25zLCB0aGlzLnNlbGVjdGVkLmluZGV4KVxuICAgICAgdGhpcy5hZGRDbGlja0xpc3RlbmVyKHRoaXMudmlldywgZWRpdG9yKVxuICAgICAgYXBwZW5kV2lkZ2V0KGVkaXRvciwgdGhpcy52aWV3KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUga2V5TWFwcyA9IHtcbiAgICAvLyBPdmVycmlkZSBjb2RlIG1pcnJvciBkZWZhdWx0IGtleSBtYXBzXG4gICAgJ0N0cmwtUCc6ICgpID0+IHt9LFxuICAgICdDdHJsLU4nOiAoKSA9PiB7fSxcbiAgICBEb3duOiAoKSA9PiB7fSxcbiAgICBVcDogKCkgPT4ge30sXG4gICAgRW50ZXI6IChlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24oZWRpdG9yKVxuICAgIH0sXG4gICAgRXNjOiAoZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcikgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVWaWV3RnJvbShlZGl0b3IpXG4gICAgICBpZiAoZWRpdG9yLmdldE9wdGlvbigna2V5TWFwJykgPT09ICd2aW0taW5zZXJ0JylcbiAgICAgICAgZWRpdG9yLm9wZXJhdGlvbigoKSA9PiB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvZGVtaXJyb3IvQ29kZU1pcnJvci9ibG9iL2JkMzdhOTZkMzYyYjhkOTI4OTVkMzk2MGQ1NjkxNjhlYzM5ZTQxNjUva2V5bWFwL3ZpbS5qcyNMNTM0MVxuICAgICAgICAgIGNvbnN0IHZpbSA9IGVkaXRvci5zdGF0ZS52aW1cbiAgICAgICAgICB2aW0uaW5zZXJ0TW9kZSA9IGZhbHNlXG4gICAgICAgICAgZWRpdG9yLnNldE9wdGlvbigna2V5TWFwJywgJ3ZpbScpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgfVxuXG4gIC8vIFRPRE86IFJlZmFjdG9yXG4gIHByaXZhdGUgYWRkQ2xpY2tMaXN0ZW5lcihcbiAgICB2aWV3OiBIVE1MRWxlbWVudCxcbiAgICBlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLFxuICAgIGFkZCA9IHRydWVcbiAgKSB7XG4gICAgaWYgKCF0aGlzLm9uQ2xpY2tDYWxsYmFjaylcbiAgICAgIHRoaXMub25DbGlja0NhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgbGV0IGhpbnRJZCA9IGVsZW1lbnQuaWRcbiAgICAgICAgaWYgKCFoaW50SWQpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5pZCkgaGludElkID0gcGFyZW50LmlkXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoaW50SWRQcmVmaXggPSAnc3VnZ2VzdGlvbi0nXG4gICAgICAgIGlmIChoaW50SWQgJiYgaGludElkLnN0YXJ0c1dpdGgoaGludElkUHJlZml4KSkge1xuICAgICAgICAgIGhpbnRJZCA9IGhpbnRJZC5yZXBsYWNlKGhpbnRJZFByZWZpeCwgJycpXG4gICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChoaW50SWQpXG4gICAgICAgICAgaWYgKGlkID49IDAgJiYgaWQgPCB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5pbmRleCA9IGlkXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24oZWRpdG9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgaWYgKGFkZCkgdmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0NhbGxiYWNrKVxuICAgIGVsc2Ugdmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0NhbGxiYWNrKVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTdWdnZXN0aW9uKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpIHtcbiAgICBjb25zdCBjdXJzb3IgPSBlZGl0b3IuZ2V0Q3Vyc29yKClcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5zdWdnZXN0aW9uc1t0aGlzLnNlbGVjdGVkLmluZGV4XT8udmFsdWVcblxuICAgIGlmICghc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgdGhpcy5yZW1vdmVWaWV3RnJvbShlZGl0b3IpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IG5vcm1hbGl6ZWRWYWx1ZSwgbmV3Q3Vyc29yUG9zaXRpb24gfSA9IG1hbmFnZVBsYWNlaG9sZGVycyhcbiAgICAgIHNlbGVjdGVkVmFsdWUsXG4gICAgICB0aGlzLmN1cnNvckF0VHJpZ2dlciEuY2hcbiAgICApXG5cbiAgICBlZGl0b3Iub3BlcmF0aW9uKCgpID0+IHtcbiAgICAgIGVkaXRvci5yZXBsYWNlUmFuZ2Uobm9ybWFsaXplZFZhbHVlLCB0aGlzLmN1cnNvckF0VHJpZ2dlciwgY3Vyc29yKVxuXG4gICAgICBjb25zdCB1cGRhdGVkQ3Vyc29yID0ge1xuICAgICAgICBsaW5lOiBjdXJzb3IubGluZSxcbiAgICAgICAgY2g6IG5ld0N1cnNvclBvc2l0aW9uLFxuICAgICAgfVxuICAgICAgZWRpdG9yLnNldEN1cnNvcih1cGRhdGVkQ3Vyc29yKVxuICAgIH0pXG4gICAgLy8gTmVlZCB0byByZW1vdmUgaXQgaGVyZSBiZWNhdXNlIG9mIGZvY3VzXG4gICAgdGhpcy5yZW1vdmVWaWV3RnJvbShlZGl0b3IpXG4gICAgZWRpdG9yLmZvY3VzKClcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFByb3ZpZGVycygpIHtcbiAgICBjb25zdCBwcm92aWRlcnMgPSBbXVxuICAgIGlmICh0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlcikgcHJvdmlkZXJzLnB1c2gobmV3IEZsb3dQcm92aWRlcigpKVxuICAgIGlmICh0aGlzLnNldHRpbmdzLmxhdGV4UHJvdmlkZXIpIHByb3ZpZGVycy5wdXNoKG5ldyBMYVRleFByb3ZpZGVyKCkpXG5cbiAgICB0aGlzLnByb3ZpZGVycyA9IHByb3ZpZGVyc1xuICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbml6ZVN0cmF0ZWd5IH0gZnJvbSAnc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplcidcblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVNldHRpbmdzIHtcbiAgZW5hYmxlZDogYm9vbGVhbiA9IHRydWVcblxuICAvLyBUT0RPOiBSZWZhY3RvciBwcm92aWRlciBzZXR0aW5nc1xuICBsYXRleFByb3ZpZGVyOiBib29sZWFuID0gdHJ1ZVxuICBmbG93UHJvdmlkZXI6IGJvb2xlYW4gPSB0cnVlXG4gIGZsb3dQcm92aWRlclNjYW5DdXJyZW50OiBib29sZWFuID0gdHJ1ZVxuICBmbG93UHJvdmlkZXJUb2tlbml6ZVN0cmF0ZWd5OiBUb2tlbml6ZVN0cmF0ZWd5ID0gJ2RlZmF1bHQnXG59XG4iLCJpbXBvcnQgeyBBcHAsIE5vdGljZSwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gJ29ic2lkaWFuJ1xuaW1wb3J0IHtcbiAgVG9rZW5pemVTdHJhdGVneSxcbiAgVE9LRU5JWkVfU1RSQVRFR0lFUyxcbn0gZnJvbSAnc3JjL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplcidcbmltcG9ydCBBdXRvY29tcGxldGVQbHVnaW4gZnJvbSAnLi4vbWFpbidcblxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZVNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogQXV0b2NvbXBsZXRlUGx1Z2luXG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQXV0b2NvbXBsZXRlUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpc1xuXG4gICAgY29udGFpbmVyRWwuZW1wdHkoKVxuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnQXV0b2NvbXBsZXRlIFNldHRpbmdzJyB9KVxuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRW5hYmxlZCcpXG4gICAgICAuc2V0RGVzYygnU2V0IHRoZSBhdXRvY29tcGxldGUgc3RhdGUnKVxuICAgICAgLmFkZFRvZ2dsZSgoY2IpID0+XG4gICAgICAgIGNiLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZWQpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZWQgPSB2YWx1ZVxuICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVEYXRhKHRoaXMucGx1Z2luLnNldHRpbmdzKVxuICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgLy8gUHJvdmlkZXJzXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnVGV4dCBQcm92aWRlcnMnKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgICdUaGUgcHJvdmlkZXJzIGJlbG93IHN1Z2dlc3QgY29tcGxldGlvbnMgYmFzZWQgb24gaW5wdXQuIEJlIGF3YXJlIHRoYXQgZW5hYmxpbmcgbXVsdGlwbGUgcHJvdmlkZXJzIGNhbiBkZWNyZWFzZSBwZXJmb3JtYW5jZS4nXG4gICAgICApXG4gICAgICAuc2V0SGVhZGluZygpXG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXRDbGFzcygnbm8tYm9yZGVyLXRvcCcpXG4gICAgICAuc2V0TmFtZSgnTGFUZXggUHJvdmlkZXInKVxuICAgICAgLnNldERlc2MoJ1RvZ2dsZSBMYVRleCBzdWdnZXN0aW9ucycpXG4gICAgICAuYWRkVG9nZ2xlKChjYikgPT5cbiAgICAgICAgY2Iuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubGF0ZXhQcm92aWRlcikub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubGF0ZXhQcm92aWRlciA9IHZhbHVlXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdGbG93IFByb3ZpZGVyJylcbiAgICAgIC5zZXREZXNjKCdMZWFybnMgYXMgeW91IHR5cGUuIEZvciBub3cgbGltaXRlZCB0byBjdXJyZW50IHNlc3Npb24uJylcbiAgICAgIC5hZGRUb2dnbGUoKGNiKSA9PlxuICAgICAgICBjYi5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5mbG93UHJvdmlkZXIpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmZsb3dQcm92aWRlciA9IHZhbHVlXG4gICAgICAgICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgICAgIC8vIFNjYW4gY3VycmVudCBmaWxlIGNhbiBiZSBlbmFibGVkIG9ubHkgaWYgZmxvdyBwcm92aWRlciBpc1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZmxvd1Byb3ZpZGVyU2NhbkN1cnJlbnQgPSBmYWxzZVxuXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZURhdGEodGhpcy5wbHVnaW4uc2V0dGluZ3MpXG4gICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdGbG93IFByb3ZpZGVyOiBTY2FuIHN0cmF0ZWd5JylcbiAgICAgIC5zZXREZXNjKCdDaG9vc2UgdGhlIGRlZmF1bHQgc2NhbiBzdHJhdGVneScpXG4gICAgICAuYWRkRHJvcGRvd24oKGNiKSA9PiB7XG4gICAgICAgIC8vIEFkZCBvcHRpb25zXG4gICAgICAgIFRPS0VOSVpFX1NUUkFURUdJRVMuZm9yRWFjaCgoc3RyYXRlZ3kpID0+IHtcbiAgICAgICAgICBjb25zdCBjYXBpdGFsaXplZCA9IHN0cmF0ZWd5LnJlcGxhY2UoL15cXHcvLCAoYykgPT5cbiAgICAgICAgICAgIGMudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgIClcbiAgICAgICAgICBjYi5hZGRPcHRpb24oc3RyYXRlZ3ksIGNhcGl0YWxpemVkKVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3NcbiAgICAgICAgY2Iuc2V0VmFsdWUoc2V0dGluZ3MuZmxvd1Byb3ZpZGVyVG9rZW5pemVTdHJhdGVneSkub25DaGFuZ2UoXG4gICAgICAgICAgKHZhbHVlOiBUb2tlbml6ZVN0cmF0ZWd5KSA9PiB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuZmxvd1Byb3ZpZGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3kgPSB2YWx1ZVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncylcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXcgTm90aWNlKCdDYW5ub3QgY2hhbmdlIGJlY2F1c2UgZmxvdyBwcm92aWRlciBpcyBub3QgZW5hYmxlZC4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgIC8vIFRPRE86IEltcHJvdmUgVUkgcmVhY3Rpdml0eSB3aGVuIHBhcmVudCBzZXR0aW5nIGlzIGRpc2FibGVkXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnRmxvdyBQcm92aWRlcjogU2NhbiBjdXJyZW50IGZpbGUnKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgICdQcm92aWRlcyBjdXJyZW50IGZpbGUgdGV4dCBzdWdnZXN0aW9ucy4gQmUgYXdhcmUgb2YgcGVyZm9ybWFuY2UgaXNzdWVzIHdpdGggbGFyZ2UgZmlsZXMuJ1xuICAgICAgKVxuICAgICAgLmFkZFRvZ2dsZSgoY2IpID0+IHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5nc1xuICAgICAgICBjYi5zZXRWYWx1ZShcbiAgICAgICAgICBzZXR0aW5ncy5mbG93UHJvdmlkZXIgJiYgc2V0dGluZ3MuZmxvd1Byb3ZpZGVyU2NhbkN1cnJlbnRcbiAgICAgICAgKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBpZiAoc2V0dGluZ3MuZmxvd1Byb3ZpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5mbG93UHJvdmlkZXJTY2FuQ3VycmVudCA9IHZhbHVlXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnBsdWdpbi5zZXR0aW5ncylcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2goKVxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vIENhbm5vdCBlbmFibGUgcGx1Z2luXG4gICAgICAgICAgICBjYi5zZXRWYWx1ZShmYWxzZSlcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0Nhbm5vdCBhY3RpdmF0ZSBiZWNhdXNlIGZsb3cgcHJvdmlkZXIgaXMgbm90IGVuYWJsZWQuJylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBQbHVnaW4gfSBmcm9tICdvYnNpZGlhbidcbmltcG9ydCB7XG4gIFRva2VuaXplU3RyYXRlZ3ksXG4gIFRPS0VOSVpFX1NUUkFURUdJRVMsXG59IGZyb20gJy4vcHJvdmlkZXJzL2Zsb3cvdG9rZW5pemVyJ1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzJ1xuXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyVmlldyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBQbHVnaW5cbiAgcHJpdmF0ZSBzZXR0aW5nczogQXV0b2NvbXBsZXRlU2V0dGluZ3NcblxuICBwcml2YXRlIHN0YXR1c0JhcjogSFRNTEVsZW1lbnRcblxuICBjb25zdHJ1Y3RvcihwbHVnaW46IFBsdWdpbiwgc2V0dGluZ3M6IEF1dG9jb21wbGV0ZVNldHRpbmdzKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW5cbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3NcbiAgfVxuXG4gIGFkZFN0YXR1c0JhcigpIHtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyKSByZXR1cm5cblxuICAgIGNvbnN0IHN0YXR1c0JhciA9IHRoaXMucGx1Z2luLmFkZFN0YXR1c0Jhckl0ZW0oKVxuICAgIHN0YXR1c0Jhci5hZGRDbGFzcygnbW9kLWNsaWNrYWJsZScpXG4gICAgc3RhdHVzQmFyLmlubmVySFRNTCA9IHRoaXMuZ2V0U3RhdHVzQmFyVGV4dChcbiAgICAgIHRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyVG9rZW5pemVTdHJhdGVneVxuICAgIClcbiAgICBzdGF0dXNCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU3RhdHVzQmFyQ2xpY2spXG5cbiAgICB0aGlzLnN0YXR1c0JhciA9IHN0YXR1c0JhclxuICB9XG5cbiAgcmVtb3ZlU3RhdHVzQmFyKCkge1xuICAgIGlmICghdGhpcy5zdGF0dXNCYXIpIHJldHVyblxuXG4gICAgdGhpcy5zdGF0dXNCYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU3RhdHVzQmFyQ2xpY2spXG4gICAgdGhpcy5zdGF0dXNCYXIucmVtb3ZlKClcbiAgfVxuXG4gIG9uU3RhdHVzQmFyQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0cmF0ZWd5ID0gdGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXJUb2tlbml6ZVN0cmF0ZWd5XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gVE9LRU5JWkVfU1RSQVRFR0lFUy5maW5kSW5kZXgoXG4gICAgICAoc3RyYXRlZ3kpID0+IHN0cmF0ZWd5ID09PSBjdXJyZW50U3RyYXRlZ3lcbiAgICApXG4gICAgY29uc3QgbmV3U3RyYXRlZ3kgPVxuICAgICAgY3VycmVudEluZGV4ID09PSBUT0tFTklaRV9TVFJBVEVHSUVTLmxlbmd0aCAtIDFcbiAgICAgICAgPyBUT0tFTklaRV9TVFJBVEVHSUVTWzBdXG4gICAgICAgIDogVE9LRU5JWkVfU1RSQVRFR0lFU1tjdXJyZW50SW5kZXggKyAxXVxuXG4gICAgdGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXJUb2tlbml6ZVN0cmF0ZWd5ID0gbmV3U3RyYXRlZ3lcbiAgICB0aGlzLnBsdWdpbi5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKVxuXG4gICAgdGhpcy5zdGF0dXNCYXIuaW5uZXJIVE1MID0gdGhpcy5nZXRTdGF0dXNCYXJUZXh0KG5ld1N0cmF0ZWd5KVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTdGF0dXNCYXJUZXh0KHN0cmF0ZWd5OiBUb2tlbml6ZVN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGBzdHJhdGVneTogJHtzdHJhdGVneX1gXG4gIH1cbn1cbiIsImltcG9ydCB7IE1hcmtkb3duVmlldywgTm90aWNlLCBQbHVnaW4sIFRGaWxlIH0gZnJvbSAnb2JzaWRpYW4nXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tICcuL2F1dG9jb21wbGV0ZSdcbmltcG9ydCB7IFRPS0VOSVpFX1NUUkFURUdJRVMgfSBmcm9tICcuL3Byb3ZpZGVycy9mbG93L3Rva2VuaXplcidcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncydcbmltcG9ydCB7IEF1dG9jb21wbGV0ZVNldHRpbmdzVGFiIH0gZnJvbSAnLi9zZXR0aW5ncy9zZXR0aW5ncy10YWInXG5pbXBvcnQgeyBTdGF0dXNCYXJWaWV3IH0gZnJvbSAnLi9zdGF0dXNiYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHByaXZhdGUgYXV0b2NvbXBsZXRlOiBBdXRvY29tcGxldGVcbiAgcHJpdmF0ZSBsYXN0VXNlZEVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3JcblxuICBwcml2YXRlIHN0YXR1c0JhcjogU3RhdHVzQmFyVmlld1xuXG4gIHNldHRpbmdzOiBBdXRvY29tcGxldGVTZXR0aW5nc1xuXG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBBdXRvY29tcGxldGUgcGx1Z2luLicpXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBuZXcgQXV0b2NvbXBsZXRlU2V0dGluZ3MoKSxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgIClcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IEF1dG9jb21wbGV0ZVNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSlcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5lbmFibGVkKSByZXR1cm5cblxuICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0JhclZpZXcodGhpcywgdGhpcy5zZXR0aW5ncylcbiAgICB0aGlzLmVuYWJsZSgpXG4gICAgdGhpcy5hZGRDb21tYW5kcygpXG4gIH1cblxuICBhc3luYyBvbnVubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZygnVW5sb2FkZWQgT2JzaWRpYW4gQXV0b2NvbXBsZXRlJylcbiAgICB0aGlzLmRpc2FibGUoKVxuICB9XG5cbiAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKVxuICAgIHRoaXMuZW5hYmxlKClcbiAgfVxuXG4gIHByaXZhdGUgYWRkQ29tbWFuZHMoKSB7XG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnYXV0b2NvbXBsZXRlLXRvZ2dsZScsXG4gICAgICBuYW1lOiAnVG9nZ2xlIEF1dG9jb21wbGV0ZScsXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFsnQ3RybCddLFxuICAgICAgICAgIGtleTogJyAnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZ2V0VmFsaWRFZGl0b3JGb3IoYXV0b2NvbXBsZXRlKVxuXG4gICAgICAgIGlmIChlZGl0b3IpIHtcbiAgICAgICAgICAvLyBEbyBub3Qgb3BlbiBvbiB2aW0gbm9ybWFsIG1vZGVcbiAgICAgICAgICBpZiAoZWRpdG9yLmdldE9wdGlvbigna2V5TWFwJykgPT09ICd2aW0nKSByZXR1cm5cblxuICAgICAgICAgIGF1dG9jb21wbGV0ZS50b2dnbGVWaWV3SW4oZWRpdG9yKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pXG5cbiAgICB0aGlzLmFkZFNjYW5Db21tYW5kcygpXG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSBuZXcgQXV0b2NvbXBsZXRlKHRoaXMuc2V0dGluZ3MpXG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3NcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5mbG93UHJvdmlkZXIpIHRoaXMuc3RhdHVzQmFyLmFkZFN0YXR1c0JhcigpXG4gICAgaWYgKHNldHRpbmdzLmZsb3dQcm92aWRlclNjYW5DdXJyZW50KSB7XG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2ZpbGUtb3BlbicsIHRoaXMub25GaWxlT3BlbmVkLCB0aGlzKVxuXG4gICAgICBpZiAodGhpcy5hcHAud29ya3NwYWNlLmxheW91dFJlYWR5KSB0aGlzLm9uTGF5b3V0UmVhZHkoKVxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdsYXlvdXQtcmVhZHknLCB0aGlzLm9uTGF5b3V0UmVhZHksIHRoaXMpXG4gICAgfVxuXG4gICAgdGhpcy5yZWdpc3RlckNvZGVNaXJyb3IoKGVkaXRvcikgPT4ge1xuICAgICAgZWRpdG9yLm9uKCdrZXl1cCcsIHRoaXMua2V5VXBMaXN0ZW5lcilcbiAgICB9KVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLmFwcC53b3Jrc3BhY2VcbiAgICAvLyBBbHdheXMgcmVtb3ZlIHRvIGF2b2lkIGFueSBraW5kIHByb2JsZW1cbiAgICB3b3Jrc3BhY2Uub2ZmKCdmaWxlLW9wZW4nLCB0aGlzLm9uRmlsZU9wZW5lZClcbiAgICB3b3Jrc3BhY2Uub2ZmKCdsYXlvdXQtcmVhZHknLCB0aGlzLm9uTGF5b3V0UmVhZHkpXG5cbiAgICB0aGlzLnN0YXR1c0Jhci5yZW1vdmVTdGF0dXNCYXIoKVxuXG4gICAgd29ya3NwYWNlLml0ZXJhdGVDb2RlTWlycm9ycygoY20pID0+IHtcbiAgICAgIGNtLm9mZigna2V5dXAnLCB0aGlzLmtleVVwTGlzdGVuZXIpXG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZS5yZW1vdmVWaWV3RnJvbShjbSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTY2FuQ29tbWFuZHMoKSB7XG4gICAgVE9LRU5JWkVfU1RSQVRFR0lFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBjYXBpdGFsaXplZCA9IHR5cGUucmVwbGFjZSgvXlxcdy8sIChjKSA9PiBjLnRvTG9jYWxlVXBwZXJDYXNlKCkpXG4gICAgICBjb25zdCBuYW1lID0gYFNjYW4gY3VycmVudCBmaWxlICR7XG4gICAgICAgIHR5cGUgIT09ICdkZWZhdWx0JyA/IGAoJHtjYXBpdGFsaXplZH0pYCA6ICcnXG4gICAgICB9YFxuXG4gICAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgICBpZDogYGF1dG9jb21wbGV0ZS1zY2FuLWN1cnJlbnQtZmlsZS0ke3R5cGV9YCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyU2NhbkN1cnJlbnQpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgICAgICAgICdQbGVhc2UgYWN0aXZhdGUgc2V0dGluZyBmbG93IFByb3ZpZGVyOiBTY2FuIGN1cnJlbnQgZmlsZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZVxuICAgICAgICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZ2V0VmFsaWRFZGl0b3JGb3IoYXV0b2NvbXBsZXRlKVxuXG4gICAgICAgICAgaWYgKGVkaXRvcikge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKClcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5zY2FuRmlsZShmaWxlLCB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUga2V5VXBMaXN0ZW5lciA9IChlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLCBldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlXG4gICAgYXV0b2NvbXBsZXRlLnVwZGF0ZVByb3ZpZGVyc0Zyb20oZXZlbnQsIGVkaXRvcilcblxuICAgIGlmICghYXV0b2NvbXBsZXRlLmlzU2hvd24pIHJldHVyblxuXG4gICAgdGhpcy51cGRhdGVFZGl0b3JJZkNoYW5nZWQoZWRpdG9yLCBhdXRvY29tcGxldGUpXG5cbiAgICB0aGlzLmF1dG9jb21wbGV0ZS51cGRhdGVWaWV3SW4oZWRpdG9yLCBldmVudClcbiAgfVxuXG4gIHByaXZhdGUgb25MYXlvdXRSZWFkeSgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKVxuICAgIGlmIChmaWxlKVxuICAgICAgdGhpcy5hdXRvY29tcGxldGUuc2NhbkZpbGUoXG4gICAgICAgIGZpbGUsXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZmxvd1Byb3ZpZGVyVG9rZW5pemVTdHJhdGVneVxuICAgICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBvbkZpbGVPcGVuZWQoZmlsZTogVEZpbGUpIHtcbiAgICBpZiAoZmlsZSlcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlLnNjYW5GaWxlKFxuICAgICAgICBmaWxlLFxuICAgICAgICB0aGlzLnNldHRpbmdzLmZsb3dQcm92aWRlclRva2VuaXplU3RyYXRlZ3lcbiAgICAgIClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsaWRFZGl0b3JGb3IoXG4gICAgYXV0b2NvbXBsZXRlOiBBdXRvY29tcGxldGVcbiAgKTogQ29kZU1pcnJvci5FZGl0b3IgfCBudWxsIHtcbiAgICBjb25zdCBjdXJyZW50RWRpdG9yID0gdGhpcy5nZXRDdXJyZW50RWRpdG9yKClcblxuICAgIGlmIChjdXJyZW50RWRpdG9yKSB0aGlzLnVwZGF0ZUVkaXRvcklmQ2hhbmdlZChjdXJyZW50RWRpdG9yLCBhdXRvY29tcGxldGUpXG5cbiAgICByZXR1cm4gY3VycmVudEVkaXRvclxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFZGl0b3JJZkNoYW5nZWQoXG4gICAgZWRpdG9yOiBDb2RlTWlycm9yLkVkaXRvcixcbiAgICBhdXRvY29tcGxldGU6IEF1dG9jb21wbGV0ZVxuICApIHtcbiAgICBpZiAoIXRoaXMubGFzdFVzZWRFZGl0b3IpIHRoaXMubGFzdFVzZWRFZGl0b3IgPSBlZGl0b3JcblxuICAgIGlmIChlZGl0b3IgIT09IHRoaXMubGFzdFVzZWRFZGl0b3IpIHtcbiAgICAgIGF1dG9jb21wbGV0ZS5yZW1vdmVWaWV3RnJvbSh0aGlzLmxhc3RVc2VkRWRpdG9yKVxuICAgICAgdGhpcy5sYXN0VXNlZEVkaXRvciA9IGVkaXRvclxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3VycmVudEVkaXRvcigpOiBDb2RlTWlycm9yLkVkaXRvciB8IG51bGwge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpXG5cbiAgICByZXR1cm4gdmlldyA/IHZpZXcuc291cmNlTW9kZS5jbUVkaXRvciA6IG51bGxcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlNldHRpbmciLCJOb3RpY2UiLCJQbHVnaW5TZXR0aW5nVGFiIiwiTWFya2Rvd25WaWV3IiwiUGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFDRDtBQUNPLElBQUksUUFBUSxHQUFHLFdBQVc7QUFDakMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDckQsUUFBUSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3RCxZQUFZLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsWUFBWSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RixTQUFTO0FBQ1QsUUFBUSxPQUFPLENBQUMsQ0FBQztBQUNqQixNQUFLO0FBQ0wsSUFBSSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLEVBQUM7QUE0QkQ7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3pGLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDdkYsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7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RUFBRSxDQUFBO1FBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUMzQztJQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUE7SUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO0tBQ1YsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztLQUNSLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUE7SUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsRUFBRTtRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO0tBQ1YsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxLQUFLO0tBQ1gsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLEtBQUs7UUFDWCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLEdBQUc7S0FDVixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsSUFBSSxFQUFFLENBQUMsS0FBSztRQUNaLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsS0FBSztRQUNaLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxLQUFLO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEtBQUs7UUFDVixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsS0FBSztRQUNWLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEtBQUs7UUFDVixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEtBQUs7UUFDVixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULElBQUksRUFBRSxDQUFDLEdBQUc7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxJQUFJO1FBQ1IsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsRUFBRSxFQUFFLEdBQUc7UUFDUCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxFQUFFLEVBQUUsSUFBSTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxDQUFDLEdBQUc7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsQ0FBQyxHQUFHO1FBQ1IsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLEVBQUUsRUFBRSxDQUFDLElBQUk7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsSUFBSTtRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULEVBQUUsRUFBRSxJQUFJO1FBQ1IsRUFBRSxFQUFFLEdBQUc7S0FDUixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxDQUFDLElBQUk7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJO0tBQ1gsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxFQUFFO1FBQ1AsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsRUFBRTtLQUNWLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsSUFBSTtRQUNYLElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxHQUFHO1FBQ1QsSUFBSSxFQUFFLENBQUMsR0FBRztLQUNYLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLENBQUMsR0FBRztRQUNWLElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJO1FBQ1gsSUFBSSxFQUFFLEdBQUc7UUFDVCxJQUFJLEVBQUUsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxDQUFDLEdBQUc7UUFDVixJQUFJLEVBQUUsR0FBRztRQUNULElBQUksRUFBRSxDQUFDLElBQUk7UUFDWCxJQUFJLEVBQUUsQ0FBQyxJQUFJO0tBQ1osQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFBO0lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO0tBQ1gsQ0FBQTtJQUNELElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsS0FBSyxFQUFFLENBQUMsR0FBRztRQUNYLEtBQUssRUFBRSxDQUFDLEdBQUc7UUFDWCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQUk7S0FDWCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsS0FBSyxFQUFFLElBQUk7UUFDWCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxLQUFLLEVBQUUsSUFBSTtRQUNYLEtBQUssRUFBRSxJQUFJO1FBQ1gsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7S0FDVixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO0lBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFBO0lBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUc7UUFDWCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtLQUNSLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7SUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtJQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsRUFBRSxFQUFFLEVBQUU7UUFDTixFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ1AsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEVBQUUsRUFBRSxHQUFHO1FBQ1AsRUFBRSxFQUFFLENBQUMsSUFBSTtLQUNWLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxFQUFFO1FBQ04sRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsQ0FBQyxJQUFJO1FBQ1QsRUFBRSxFQUFFLElBQUk7UUFDUixFQUFFLEVBQUUsSUFBSTtRQUNSLEVBQUUsRUFBRSxLQUFLO1FBQ1QsRUFBRSxFQUFFLENBQUMsR0FBRztRQUNSLEVBQUUsRUFBRSxDQUFDLElBQUk7S0FDVixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsR0FBRyxFQUFFLENBQUMsR0FBRztRQUNULEdBQUcsRUFBRSxDQUFDLEdBQUc7S0FDVixDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsQ0FBQyxFQUFFLEdBQUc7UUFDTixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7S0FDUCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixHQUFHLEVBQUUsSUFBSTtRQUNULENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sRUFBRSxFQUFFLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7S0FDUCxDQUFBO0lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRztRQUNYLEdBQUcsRUFBRSxJQUFJO1FBQ1QsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULENBQUMsRUFBRSxJQUFJO1FBQ1AsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEtBQUs7UUFDVCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsR0FBRyxFQUFFLENBQUMsSUFBSTtRQUNWLENBQUMsRUFBRSxDQUFDLEtBQUs7UUFDVCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsR0FBRyxFQUFFLElBQUk7UUFDVCxHQUFHLEVBQUUsSUFBSTtRQUNULEdBQUcsRUFBRSxDQUFDLElBQUk7UUFDVixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsS0FBSztRQUNULENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtLQUNULENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLEVBQUUsRUFBRSxDQUFDLEtBQUs7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFJO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsR0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsSUFBSTtRQUNSLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLEdBQUcsRUFBRSxDQUFDLEdBQUc7UUFDVCxFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztLQUNSLENBQUE7SUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHO1FBQ1gsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxFQUFFLEVBQUUsR0FBRztRQUNQLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxJQUFJO1FBQ1IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLENBQUMsR0FBRztRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxDQUFDLElBQUk7UUFDUixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLElBQUk7UUFDUCxHQUFHLEVBQUUsQ0FBQyxHQUFHO1FBQ1QsRUFBRSxFQUFFLEdBQUc7UUFDUCxDQUFDLEVBQUUsQ0FBQyxHQUFHO1FBQ1AsQ0FBQyxFQUFFLENBQUMsR0FBRztLQUNSLENBQUE7SUFFRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRCxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUc7SUFDNUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzVCLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQzVCO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQTtBQUNaLENBQUMsQ0FBQTtBQUVELGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQztJQUN2QyxJQUFJLENBQUMsRUFBRTtRQUNMLE9BQU8sQ0FBQyxDQUFBO0tBQ1Q7SUFDRCxPQUFPLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQTtBQUVELGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsS0FBSztJQUMvQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLElBQUksRUFBRSxFQUFFO1FBQ3RELE9BQU8sRUFBRSxDQUFBO0tBQ1Y7SUFDRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDZixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzNCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUM5QjtJQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNmLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqQixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUE7SUFDWixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUE7SUFDWixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUE7SUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDdkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN2QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ25CLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbkIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNuQixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ25CLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDbkIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNyQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3JCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDckIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDckIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNyQixLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDakMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0MsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7O1FBRTNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdEMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEQsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hELEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7UUFDWCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksR0FBRyxFQUFFLENBQUE7WUFDVCxDQUFDLEdBQUcsR0FBRyxDQUFBO1NBQ1I7UUFDRCxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1AsRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQUNQLEVBQUUsR0FBRyxDQUFDLENB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
