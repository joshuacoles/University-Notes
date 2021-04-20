'use strict';

var obsidian = require('obsidian');
var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var util = require('util');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var path__namespace = /*#__PURE__*/_interopNamespace(path);

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    command_timeout: 5,
    template_folder: "",
    templates_pairs: [["", ""]],
    trigger_on_file_creation: false,
    enable_system_commands: false,
};
class TemplaterSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.app = app;
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        let desc;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Template folder location")
            .setDesc("Files in this folder will be available as templates.")
            .addText(text => {
            text.setPlaceholder("Example: folder 1/folder 2")
                .setValue(this.plugin.settings.template_folder)
                .onChange((new_folder) => {
                this.plugin.settings.template_folder = new_folder;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Timeout")
            .setDesc("Maximum timeout in seconds for a system command.")
            .addText(text => {
            text.setPlaceholder("Timeout")
                .setValue(this.plugin.settings.command_timeout.toString())
                .onChange((new_value) => {
                let new_timeout = Number(new_value);
                if (isNaN(new_timeout)) {
                    this.plugin.log_error("Timeout must be a number");
                    return;
                }
                this.plugin.settings.command_timeout = new_timeout;
                this.plugin.saveSettings();
            });
        });
        desc = document.createDocumentFragment();
        desc.append("Templater provides multiples predefined variables / functions that you can use.", desc.createEl("br"), "Check the ", desc.createEl("a", {
            href: "https://silentvoid13.github.io/Templater/",
            text: "documentation"
        }), " to get a list of all the available internal variables / functions.");
        new obsidian.Setting(containerEl)
            .setName("Internal Variables and Functions")
            .setDesc(desc);
        desc = document.createDocumentFragment();
        desc.append("Templater will listen for the new file creation event, and replace every command it finds in the new file's content.", desc.createEl("br"), "This makes Templater compatible with other plugins like the Daily note core plugin, Calendar plugin, Review plugin, Note refactor plugin, ...", desc.createEl("br"), desc.createEl("b", {
            text: "Warning: ",
        }), "This can be dangerous if you create new files with unknown / unsafe content on creation. Make sure that every new file's content is safe on creation.");
        new obsidian.Setting(containerEl)
            .setName("Trigger Templater on new file creation")
            .setDesc(desc)
            .addToggle(toggle => {
            toggle
                .setValue(this.plugin.settings.trigger_on_file_creation)
                .onChange(trigger_on_file_creation => {
                this.plugin.settings.trigger_on_file_creation = trigger_on_file_creation;
                this.plugin.saveSettings();
                this.plugin.update_trigger_file_on_creation();
            });
        });
        desc = document.createDocumentFragment();
        desc.append("Allows you to create user functions linked to system commands.", desc.createEl("br"), desc.createEl("b", {
            text: "Warning: "
        }), "It can be dangerous to execute arbitrary system commands from untrusted sources. Only run system commands that you understand, from trusted sources.");
        new obsidian.Setting(containerEl)
            .setName("Enable System Commands")
            .setDesc(desc)
            .addToggle(toggle => {
            toggle
                .setValue(this.plugin.settings.enable_system_commands)
                .onChange(enable_system_commands => {
                this.plugin.settings.enable_system_commands = enable_system_commands;
                this.plugin.saveSettings();
                // Force refresh
                this.display();
            });
        });
        if (this.plugin.settings.enable_system_commands) {
            let i = 1;
            this.plugin.settings.templates_pairs.forEach((template_pair) => {
                let div = containerEl.createEl('div');
                div.addClass("templater_div");
                let title = containerEl.createEl('h4', {
                    text: 'User Function n°' + i,
                });
                title.addClass("templater_title");
                let setting = new obsidian.Setting(containerEl)
                    .addExtraButton(extra => {
                    extra.setIcon("cross")
                        .setTooltip("Delete")
                        .onClick(() => {
                        let index = this.plugin.settings.templates_pairs.indexOf(template_pair);
                        if (index > -1) {
                            this.plugin.settings.templates_pairs.splice(index, 1);
                            // Force refresh
                            this.plugin.saveSettings();
                            this.display();
                        }
                    });
                })
                    .addText(text => {
                    let t = text.setPlaceholder('Function name')
                        .setValue(template_pair[0])
                        .onChange((new_value) => {
                        let index = this.plugin.settings.templates_pairs.indexOf(template_pair);
                        if (index > -1) {
                            this.plugin.settings.templates_pairs[index][0] = new_value;
                            this.plugin.saveSettings();
                        }
                    });
                    t.inputEl.addClass("templater_template");
                    return t;
                })
                    .addTextArea(text => {
                    let t = text.setPlaceholder('System Command')
                        .setValue(template_pair[1])
                        .onChange((new_cmd) => {
                        let index = this.plugin.settings.templates_pairs.indexOf(template_pair);
                        if (index > -1) {
                            this.plugin.settings.templates_pairs[index][1] = new_cmd;
                            this.plugin.saveSettings();
                        }
                    });
                    t.inputEl.setAttr("rows", 4);
                    t.inputEl.addClass("templater_cmd");
                    return t;
                });
                setting.infoEl.remove();
                div.appendChild(title);
                div.appendChild(containerEl.lastChild);
                i += 1;
            });
            let div = containerEl.createEl('div');
            div.addClass("templater_div2");
            let setting = new obsidian.Setting(containerEl)
                .addButton(button => {
                let b = button.setButtonText("Add New User Function").onClick(() => {
                    this.plugin.settings.templates_pairs.push(["", ""]);
                    // Force refresh
                    this.display();
                });
                b.buttonEl.addClass("templater_button");
                return b;
            });
            setting.infoEl.remove();
            div.appendChild(containerEl.lastChild);
        }
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function escapeRegExp$1(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function getTFilesFromFolder(app, folder_str) {
    folder_str = obsidian.normalizePath(folder_str);
    let folder = app.vault.getAbstractFileByPath(folder_str);
    if (!folder) {
        throw new Error(`${folder_str} folder doesn't exist`);
    }
    if (!(folder instanceof obsidian.TFolder)) {
        throw new Error(`${folder_str} is a file, not a folder`);
    }
    let files = [];
    obsidian.Vault.recurseChildren(folder, (file) => {
        if (file instanceof obsidian.TFile) {
            files.push(file);
        }
    });
    files.sort((a, b) => {
        return a.basename.localeCompare(b.basename);
    });
    return files;
}

var OpenMode;
(function (OpenMode) {
    OpenMode[OpenMode["InsertTemplate"] = 0] = "InsertTemplate";
    OpenMode[OpenMode["CreateNoteTemplate"] = 1] = "CreateNoteTemplate";
})(OpenMode || (OpenMode = {}));
class TemplaterFuzzySuggestModal extends obsidian.FuzzySuggestModal {
    constructor(app, plugin) {
        super(app);
        this.app = app;
        this.plugin = plugin;
    }
    getItems() {
        let template_files = [];
        if (this.plugin.settings.template_folder === "") {
            template_files = this.app.vault.getMarkdownFiles();
        }
        else {
            template_files = getTFilesFromFolder(this.app, this.plugin.settings.template_folder);
        }
        return template_files;
    }
    getItemText(item) {
        return item.basename;
    }
    onChooseItem(item, _evt) {
        switch (this.open_mode) {
            case OpenMode.InsertTemplate:
                this.plugin.parser.replace_templates_and_append(item);
                break;
            case OpenMode.CreateNoteTemplate:
                this.plugin.parser.create_new_note_from_template(item, this.creation_folder);
                break;
        }
    }
    start() {
        try {
            let files = this.getItems();
            // If there is only one file in the templates directory, we don't open the modal
            if (files.length === 1) {
                this.onChooseItem(files[0], null);
            }
            else {
                this.open();
            }
        }
        catch (error) {
            this.plugin.log_error(error);
        }
    }
    insert_template() {
        this.open_mode = OpenMode.InsertTemplate;
        this.start();
    }
    create_new_note_from_template(folder) {
        this.creation_folder = folder;
        this.open_mode = OpenMode.CreateNoteTemplate;
        this.start();
    }
}

function setPrototypeOf(obj, proto) {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(obj, proto);
    }
    else {
        obj.__proto__ = proto;
    }
}
// This is pretty much the only way to get nice, extended Errors
// without using ES6
/**
 * This returns a new Error with a custom prototype. Note that it's _not_ a constructor
 *
 * @param message Error message
 *
 * **Example**
 *
 * ```js
 * throw EtaErr("template not found")
 * ```
 */
function EtaErr(message) {
    var err = new Error(message);
    setPrototypeOf(err, EtaErr.prototype);
    return err;
}
EtaErr.prototype = Object.create(Error.prototype, {
    name: { value: 'Eta Error', enumerable: false }
});
/**
 * Throws an EtaErr with a nicely formatted error and message showing where in the template the error occurred.
 */
function ParseErr(message, str, indx) {
    var whitespace = str.slice(0, indx).split(/\n/);
    var lineNo = whitespace.length;
    var colNo = whitespace[lineNo - 1].length + 1;
    message +=
        ' at line ' +
            lineNo +
            ' col ' +
            colNo +
            ':\n\n' +
            '  ' +
            str.split(/\n/)[lineNo - 1] +
            '\n' +
            '  ' +
            Array(colNo).join(' ') +
            '^';
    throw EtaErr(message);
}

/**
 * @returns The global Promise function
 */
var promiseImpl = new Function('return this')().Promise;
/**
 * @returns A new AsyncFunction constuctor
 */
function getAsyncFunctionConstructor() {
    try {
        return new Function('return (async function(){}).constructor')();
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            throw EtaErr("This environment doesn't support async/await");
        }
        else {
            throw e;
        }
    }
}
/**
 * str.trimLeft polyfill
 *
 * @param str - Input string
 * @returns The string with left whitespace removed
 *
 */
function trimLeft(str) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!String.prototype.trimLeft) {
        return str.trimLeft();
    }
    else {
        return str.replace(/^\s+/, '');
    }
}
/**
 * str.trimRight polyfill
 *
 * @param str - Input string
 * @returns The string with right whitespace removed
 *
 */
function trimRight(str) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!String.prototype.trimRight) {
        return str.trimRight();
    }
    else {
        return str.replace(/\s+$/, ''); // TODO: do we really need to replace BOM's?
    }
}

// TODO: allow '-' to trim up until newline. Use [^\S\n\r] instead of \s
/* END TYPES */
function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
function copyProps(toObj, fromObj) {
    for (var key in fromObj) {
        if (hasOwnProp(fromObj, key)) {
            toObj[key] = fromObj[key];
        }
    }
    return toObj;
}
/**
 * Takes a string within a template and trims it, based on the preceding tag's whitespace control and `config.autoTrim`
 */
function trimWS(str, config, wsLeft, wsRight) {
    var leftTrim;
    var rightTrim;
    if (Array.isArray(config.autoTrim)) {
        // kinda confusing
        // but _}} will trim the left side of the following string
        leftTrim = config.autoTrim[1];
        rightTrim = config.autoTrim[0];
    }
    else {
        leftTrim = rightTrim = config.autoTrim;
    }
    if (wsLeft || wsLeft === false) {
        leftTrim = wsLeft;
    }
    if (wsRight || wsRight === false) {
        rightTrim = wsRight;
    }
    if (!rightTrim && !leftTrim) {
        return str;
    }
    if (leftTrim === 'slurp' && rightTrim === 'slurp') {
        return str.trim();
    }
    if (leftTrim === '_' || leftTrim === 'slurp') {
        // console.log('trimming left' + leftTrim)
        // full slurp
        str = trimLeft(str);
    }
    else if (leftTrim === '-' || leftTrim === 'nl') {
        // nl trim
        str = str.replace(/^(?:\r\n|\n|\r)/, '');
    }
    if (rightTrim === '_' || rightTrim === 'slurp') {
        // full slurp
        str = trimRight(str);
    }
    else if (rightTrim === '-' || rightTrim === 'nl') {
        // nl trim
        str = str.replace(/(?:\r\n|\n|\r)$/, ''); // TODO: make sure this gets \r\n
    }
    return str;
}
/**
 * A map of special HTML characters to their XML-escaped equivalents
 */
var escMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
function replaceChar(s) {
    return escMap[s];
}
/**
 * XML-escapes an input value after converting it to a string
 *
 * @param str - Input value (usually a string)
 * @returns XML-escaped string
 */
function XMLEscape(str) {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    // To deal with XSS. Based on Escape implementations of Mustache.JS and Marko, then customized.
    var newStr = String(str);
    if (/[&<>"']/.test(newStr)) {
        return newStr.replace(/[&<>"']/g, replaceChar);
    }
    else {
        return newStr;
    }
}

/* END TYPES */
var templateLitReg = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g;
var singleQuoteReg = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g;
var doubleQuoteReg = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
/** Escape special regular expression characters inside a string */
function escapeRegExp(string) {
    // From MDN
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function parse(str, config) {
    var buffer = [];
    var trimLeftOfNextStr = false;
    var lastIndex = 0;
    var parseOptions = config.parse;
    if (config.plugins) {
        for (var i = 0; i < config.plugins.length; i++) {
            var plugin = config.plugins[i];
            if (plugin.processTemplate) {
                str = plugin.processTemplate(str, config);
            }
        }
    }
    /* Adding for EJS compatibility */
    if (config.rmWhitespace) {
        // Code taken directly from EJS
        // Have to use two separate replaces here as `^` and `$` operators don't
        // work well with `\r` and empty lines don't work well with the `m` flag.
        // Essentially, this replaces the whitespace at the beginning and end of
        // each line and removes multiple newlines.
        str = str.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '');
    }
    /* End rmWhitespace option */
    templateLitReg.lastIndex = 0;
    singleQuoteReg.lastIndex = 0;
    doubleQuoteReg.lastIndex = 0;
    function pushString(strng, shouldTrimRightOfString) {
        if (strng) {
            // if string is truthy it must be of type 'string'
            strng = trimWS(strng, config, trimLeftOfNextStr, // this will only be false on the first str, the next ones will be null or undefined
            shouldTrimRightOfString);
            if (strng) {
                // replace \ with \\, ' with \'
                // we're going to convert all CRLF to LF so it doesn't take more than one replace
                strng = strng.replace(/\\|'/g, '\\$&').replace(/\r\n|\n|\r/g, '\\n');
                buffer.push(strng);
            }
        }
    }
    var prefixes = [parseOptions.exec, parseOptions.interpolate, parseOptions.raw].reduce(function (accumulator, prefix) {
        if (accumulator && prefix) {
            return accumulator + '|' + escapeRegExp(prefix);
        }
        else if (prefix) {
            // accumulator is falsy
            return escapeRegExp(prefix);
        }
        else {
            // prefix and accumulator are both falsy
            return accumulator;
        }
    }, '');
    var parseOpenReg = new RegExp('([^]*?)' + escapeRegExp(config.tags[0]) + '(-|_)?\\s*(' + prefixes + ')?\\s*', 'g');
    var parseCloseReg = new RegExp('\'|"|`|\\/\\*|(\\s*(-|_)?' + escapeRegExp(config.tags[1]) + ')', 'g');
    // TODO: benchmark having the \s* on either side vs using str.trim()
    var m;
    while ((m = parseOpenReg.exec(str))) {
        lastIndex = m[0].length + m.index;
        var precedingString = m[1];
        var wsLeft = m[2];
        var prefix = m[3] || ''; // by default either ~, =, or empty
        pushString(precedingString, wsLeft);
        parseCloseReg.lastIndex = lastIndex;
        var closeTag = void 0;
        var currentObj = false;
        while ((closeTag = parseCloseReg.exec(str))) {
            if (closeTag[1]) {
                var content = str.slice(lastIndex, closeTag.index);
                parseOpenReg.lastIndex = lastIndex = parseCloseReg.lastIndex;
                trimLeftOfNextStr = closeTag[2];
                var currentType = prefix === parseOptions.exec
                    ? 'e'
                    : prefix === parseOptions.raw
                        ? 'r'
                        : prefix === parseOptions.interpolate
                            ? 'i'
                            : '';
                currentObj = { t: currentType, val: content };
                break;
            }
            else {
                var char = closeTag[0];
                if (char === '/*') {
                    var commentCloseInd = str.indexOf('*/', parseCloseReg.lastIndex);
                    if (commentCloseInd === -1) {
                        ParseErr('unclosed comment', str, closeTag.index);
                    }
                    parseCloseReg.lastIndex = commentCloseInd;
                }
                else if (char === "'") {
                    singleQuoteReg.lastIndex = closeTag.index;
                    var singleQuoteMatch = singleQuoteReg.exec(str);
                    if (singleQuoteMatch) {
                        parseCloseReg.lastIndex = singleQuoteReg.lastIndex;
                    }
                    else {
                        ParseErr('unclosed string', str, closeTag.index);
                    }
                }
                else if (char === '"') {
                    doubleQuoteReg.lastIndex = closeTag.index;
                    var doubleQuoteMatch = doubleQuoteReg.exec(str);
                    if (doubleQuoteMatch) {
                        parseCloseReg.lastIndex = doubleQuoteReg.lastIndex;
                    }
                    else {
                        ParseErr('unclosed string', str, closeTag.index);
                    }
                }
                else if (char === '`') {
                    templateLitReg.lastIndex = closeTag.index;
                    var templateLitMatch = templateLitReg.exec(str);
                    if (templateLitMatch) {
                        parseCloseReg.lastIndex = templateLitReg.lastIndex;
                    }
                    else {
                        ParseErr('unclosed string', str, closeTag.index);
                    }
                }
            }
        }
        if (currentObj) {
            buffer.push(currentObj);
        }
        else {
            ParseErr('unclosed tag', str, m.index + precedingString.length);
        }
    }
    pushString(str.slice(lastIndex, str.length), false);
    if (config.plugins) {
        for (var i = 0; i < config.plugins.length; i++) {
            var plugin = config.plugins[i];
            if (plugin.processAST) {
                buffer = plugin.processAST(buffer, config);
            }
        }
    }
    return buffer;
}

/* END TYPES */
/**
 * Compiles a template string to a function string. Most often users just use `compile()`, which calls `compileToString` and creates a new function using the result
 *
 * **Example**
 *
 * ```js
 * compileToString("Hi <%= it.user %>", eta.config)
 * // "var tR='',include=E.include.bind(E),includeFile=E.includeFile.bind(E);tR+='Hi ';tR+=E.e(it.user);if(cb){cb(null,tR)} return tR"
 * ```
 */
function compileToString(str, config) {
    var buffer = parse(str, config);
    var res = "var tR='',__l,__lP" +
        (config.include ? ',include=E.include.bind(E)' : '') +
        (config.includeFile ? ',includeFile=E.includeFile.bind(E)' : '') +
        '\nfunction layout(p,d){__l=p;__lP=d}\n' +
        (config.globalAwait ? 'let _prs = [];\n' : '') +
        (config.useWith ? 'with(' + config.varName + '||{}){' : '') +
        compileScope(buffer, config) +
        (config.includeFile
            ? 'if(__l)tR=' +
                (config.async ? 'await ' : '') +
                ("includeFile(__l,Object.assign(" + config.varName + ",{body:tR},__lP))\n")
            : config.include
                ? 'if(__l)tR=' +
                    (config.async ? 'await ' : '') +
                    ("include(__l,Object.assign(" + config.varName + ",{body:tR},__lP))\n")
                : '') +
        'if(cb){cb(null,tR)} return tR' +
        (config.useWith ? '}' : '');
    if (config.plugins) {
        for (var i = 0; i < config.plugins.length; i++) {
            var plugin = config.plugins[i];
            if (plugin.processFnString) {
                res = plugin.processFnString(res, config);
            }
        }
    }
    return res;
}
/**
 * Loops through the AST generated by `parse` and transform each item into JS calls
 *
 * **Example**
 *
 * ```js
 * // AST version of 'Hi <%= it.user %>'
 * let templateAST = ['Hi ', { val: 'it.user', t: 'i' }]
 * compileScope(templateAST, eta.config)
 * // "tR+='Hi ';tR+=E.e(it.user);"
 * ```
 */
function compileScope(buff, config) {
    var i;
    var buffLength = buff.length;
    var returnStr = '';
    if (config.globalAwait) {
        for (i = 0; i < buffLength; i++) {
            var currentBlock = buff[i];
            if (typeof currentBlock !== 'string') {
                var type = currentBlock.t;
                if (type === 'r' || type === 'i') {
                    var content = currentBlock.val || '';
                    returnStr += "_prs.push(" + content + ");\n";
                }
            }
        }
        returnStr += 'let _rst = await Promise.all(_prs);\n';
    }
    var j = 0;
    for (i = 0; i < buffLength; i++) {
        var currentBlock = buff[i];
        if (typeof currentBlock === 'string') {
            var str = currentBlock;
            // we know string exists
            returnStr += "tR+='" + str + "'\n";
        }
        else {
            var type = currentBlock.t; // ~, s, !, ?, r
            var content = currentBlock.val || '';
            if (type === 'r') {
                // raw
                if (config.globalAwait) {
                    content = "_rst[" + j + "]";
                }
                if (config.filter) {
                    content = 'E.filter(' + content + ')';
                }
                returnStr += 'tR+=' + content + '\n';
                j++;
            }
            else if (type === 'i') {
                // interpolate
                if (config.globalAwait) {
                    content = "_rst[" + j + "]";
                }
                if (config.filter) {
                    content = 'E.filter(' + content + ')';
                }
                if (config.autoEscape) {
                    content = 'E.e(' + content + ')';
                }
                returnStr += 'tR+=' + content + '\n';
                j++;
                // reference
            }
            else if (type === 'e') {
                // execute
                returnStr += content + '\n'; // you need a \n in case you have <% } %>
            }
        }
    }
    return returnStr;
}

/**
 * Handles storage and accessing of values
 *
 * In this case, we use it to store compiled template functions
 * Indexed by their `name` or `filename`
 */
var Cacher = /** @class */ (function () {
    function Cacher(cache) {
        this.cache = cache;
    }
    Cacher.prototype.define = function (key, val) {
        this.cache[key] = val;
    };
    Cacher.prototype.get = function (key) {
        // string | array.
        // TODO: allow array of keys to look down
        // TODO: create plugin to allow referencing helpers, filters with dot notation
        return this.cache[key];
    };
    Cacher.prototype.remove = function (key) {
        delete this.cache[key];
    };
    Cacher.prototype.reset = function () {
        this.cache = {};
    };
    Cacher.prototype.load = function (cacheObj) {
        copyProps(this.cache, cacheObj);
    };
    return Cacher;
}());

/* END TYPES */
/**
 * Eta's template storage
 *
 * Stores partials and cached templates
 */
var templates = new Cacher({});

/* END TYPES */
/**
 * Include a template based on its name (or filepath, if it's already been cached).
 *
 * Called like `include(templateNameOrPath, data)`
 */
function includeHelper(templateNameOrPath, data) {
    var template = this.templates.get(templateNameOrPath);
    if (!template) {
        throw EtaErr('Could not fetch template "' + templateNameOrPath + '"');
    }
    return template(data, this);
}
/** Eta's base (global) configuration */
var config = {
    async: false,
    autoEscape: true,
    autoTrim: [false, 'nl'],
    cache: false,
    e: XMLEscape,
    include: includeHelper,
    parse: {
        exec: '',
        interpolate: '=',
        raw: '~'
    },
    plugins: [],
    rmWhitespace: false,
    tags: ['<%', '%>'],
    templates: templates,
    useWith: false,
    varName: 'it'
};
/**
 * Takes one or two partial (not necessarily complete) configuration objects, merges them 1 layer deep into eta.config, and returns the result
 *
 * @param override Partial configuration object
 * @param baseConfig Partial configuration object to merge before `override`
 *
 * **Example**
 *
 * ```js
 * let customConfig = getConfig({tags: ['!#', '#!']})
 * ```
 */
function getConfig(override, baseConfig) {
    // TODO: run more tests on this
    var res = {}; // Linked
    copyProps(res, config); // Creates deep clone of eta.config, 1 layer deep
    if (baseConfig) {
        copyProps(res, baseConfig);
    }
    if (override) {
        copyProps(res, override);
    }
    return res;
}

/* END TYPES */
/**
 * Takes a template string and returns a template function that can be called with (data, config, [cb])
 *
 * @param str - The template string
 * @param config - A custom configuration object (optional)
 *
 * **Example**
 *
 * ```js
 * let compiledFn = eta.compile("Hi <%= it.user %>")
 * // function anonymous()
 * let compiledFnStr = compiledFn.toString()
 * // "function anonymous(it,E,cb\n) {\nvar tR='',include=E.include.bind(E),includeFile=E.includeFile.bind(E);tR+='Hi ';tR+=E.e(it.user);if(cb){cb(null,tR)} return tR\n}"
 * ```
 */
function compile(str, config) {
    var options = getConfig(config || {});
    /* ASYNC HANDLING */
    // The below code is modified from mde/ejs. All credit should go to them.
    var ctor = options.async ? getAsyncFunctionConstructor() : Function;
    /* END ASYNC HANDLING */
    try {
        return new ctor(options.varName, 'E', // EtaConfig
        'cb', // optional callback
        compileToString(str, options)); // eslint-disable-line no-new-func
    }
    catch (e) {
        if (e instanceof SyntaxError) {
            throw EtaErr('Bad template syntax\n\n' +
                e.message +
                '\n' +
                Array(e.message.length + 1).join('=') +
                '\n' +
                compileToString(str, options) +
                '\n' // This will put an extra newline before the callstack for extra readability
            );
        }
        else {
            throw e;
        }
    }
}

var _BOM = /^\uFEFF/;
/* END TYPES */
/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * If `name` does not have an extension, it will default to `.eta`
 *
 * @param name specified path
 * @param parentfile parent file path
 * @param isDirectory whether parentfile is a directory
 * @return absolute path to template
 */
function getWholeFilePath(name, parentfile, isDirectory) {
    var includePath = path__namespace.resolve(isDirectory ? parentfile : path__namespace.dirname(parentfile), // returns directory the parent file is in
    name // file
    ) + (path__namespace.extname(name) ? '' : '.eta');
    return includePath;
}
/**
 * Get the absolute path to an included template
 *
 * If this is called with an absolute path (for example, starting with '/' or 'C:\')
 * then Eta will attempt to resolve the absolute path within options.views. If it cannot,
 * Eta will fallback to options.root or '/'
 *
 * If this is called with a relative path, Eta will:
 * - Look relative to the current template (if the current template has the `filename` property)
 * - Look inside each directory in options.views
 *
 * Note: if Eta is unable to find a template using path and options, it will throw an error.
 *
 * @param path    specified path
 * @param options compilation options
 * @return absolute path to template
 */
function getPath(path, options) {
    var includePath = false;
    var views = options.views;
    var searchedPaths = [];
    // If these four values are the same,
    // getPath() will return the same result every time.
    // We can cache the result to avoid expensive
    // file operations.
    var pathOptions = JSON.stringify({
        filename: options.filename,
        path: path,
        root: options.root,
        views: options.views
    });
    if (options.cache && options.filepathCache && options.filepathCache[pathOptions]) {
        // Use the cached filepath
        return options.filepathCache[pathOptions];
    }
    /** Add a filepath to the list of paths we've checked for a template */
    function addPathToSearched(pathSearched) {
        if (!searchedPaths.includes(pathSearched)) {
            searchedPaths.push(pathSearched);
        }
    }
    /**
     * Take a filepath (like 'partials/mypartial.eta'). Attempt to find the template file inside `views`;
     * return the resulting template file path, or `false` to indicate that the template was not found.
     *
     * @param views the filepath that holds templates, or an array of filepaths that hold templates
     * @param path the path to the template
     */
    function searchViews(views, path) {
        var filePath;
        // If views is an array, then loop through each directory
        // And attempt to find the template
        if (Array.isArray(views) &&
            views.some(function (v) {
                filePath = getWholeFilePath(path, v, true);
                addPathToSearched(filePath);
                return fs.existsSync(filePath);
            })) {
            // If the above returned true, we know that the filePath was just set to a path
            // That exists (Array.some() returns as soon as it finds a valid element)
            return filePath;
        }
        else if (typeof views === 'string') {
            // Search for the file if views is a single directory
            filePath = getWholeFilePath(path, views, true);
            addPathToSearched(filePath);
            if (fs.existsSync(filePath)) {
                return filePath;
            }
        }
        // Unable to find a file
        return false;
    }
    // Path starts with '/', 'C:\', etc.
    var match = /^[A-Za-z]+:\\|^\//.exec(path);
    // Absolute path, like /partials/partial.eta
    if (match && match.length) {
        // We have to trim the beginning '/' off the path, or else
        // path.resolve(dir, path) will always resolve to just path
        var formattedPath = path.replace(/^\/*/, '');
        // First, try to resolve the path within options.views
        includePath = searchViews(views, formattedPath);
        if (!includePath) {
            // If that fails, searchViews will return false. Try to find the path
            // inside options.root (by default '/', the base of the filesystem)
            var pathFromRoot = getWholeFilePath(formattedPath, options.root || '/', true);
            addPathToSearched(pathFromRoot);
            includePath = pathFromRoot;
        }
    }
    else {
        // Relative paths
        // Look relative to a passed filename first
        if (options.filename) {
            var filePath = getWholeFilePath(path, options.filename);
            addPathToSearched(filePath);
            if (fs.existsSync(filePath)) {
                includePath = filePath;
            }
        }
        // Then look for the template in options.views
        if (!includePath) {
            includePath = searchViews(views, path);
        }
        if (!includePath) {
            throw EtaErr('Could not find the template "' + path + '". Paths tried: ' + searchedPaths);
        }
    }
    // If caching and filepathCache are enabled,
    // cache the input & output of this function.
    if (options.cache && options.filepathCache) {
        options.filepathCache[pathOptions] = includePath;
    }
    return includePath;
}
/**
 * Reads a file synchronously
 */
function readFile(filePath) {
    try {
        return fs.readFileSync(filePath).toString().replace(_BOM, ''); // TODO: is replacing BOM's necessary?
    }
    catch (_a) {
        throw EtaErr("Failed to read template at '" + filePath + "'");
    }
}

// express is set like: app.engine('html', require('eta').renderFile)
/* END TYPES */
/**
 * Reads a template, compiles it into a function, caches it if caching isn't disabled, returns the function
 *
 * @param filePath Absolute path to template file
 * @param options Eta configuration overrides
 * @param noCache Optionally, make Eta not cache the template
 */
function loadFile(filePath, options, noCache) {
    var config = getConfig(options);
    var template = readFile(filePath);
    try {
        var compiledTemplate = compile(template, config);
        if (!noCache) {
            config.templates.define(config.filename, compiledTemplate);
        }
        return compiledTemplate;
    }
    catch (e) {
        throw EtaErr('Loading file: ' + filePath + ' failed:\n\n' + e.message);
    }
}
/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @param options   compilation options
 * @return Eta template function
 */
function handleCache$1(options) {
    var filename = options.filename;
    if (options.cache) {
        var func = options.templates.get(filename);
        if (func) {
            return func;
        }
        return loadFile(filename, options);
    }
    // Caching is disabled, so pass noCache = true
    return loadFile(filename, options, true);
}
/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * This returns a template function and the config object with which that template function should be called.
 *
 * @remarks
 *
 * It's important that this returns a config object with `filename` set.
 * Otherwise, the included file would not be able to use relative paths
 *
 * @param path path for the specified file (if relative, specify `views` on `options`)
 * @param options compilation options
 * @return [Eta template function, new config object]
 */
function includeFile(path, options) {
    // the below creates a new options object, using the parent filepath of the old options object and the path
    var newFileOptions = getConfig({ filename: getPath(path, options) }, options);
    // TODO: make sure properties are currectly copied over
    return [handleCache$1(newFileOptions), newFileOptions];
}

/* END TYPES */
/**
 * Called with `includeFile(path, data)`
 */
function includeFileHelper(path, data) {
    var templateAndConfig = includeFile(path, this);
    return templateAndConfig[0](data, templateAndConfig[1]);
}

/* END TYPES */
function handleCache(template, options) {
    if (options.cache && options.name && options.templates.get(options.name)) {
        return options.templates.get(options.name);
    }
    var templateFunc = typeof template === 'function' ? template : compile(template, options);
    // Note that we don't have to check if it already exists in the cache;
    // it would have returned earlier if it had
    if (options.cache && options.name) {
        options.templates.define(options.name, templateFunc);
    }
    return templateFunc;
}
/**
 * Render a template
 *
 * If `template` is a string, Eta will compile it to a function and then call it with the provided data.
 * If `template` is a template function, Eta will call it with the provided data.
 *
 * If `config.async` is `false`, Eta will return the rendered template.
 *
 * If `config.async` is `true` and there's a callback function, Eta will call the callback with `(err, renderedTemplate)`.
 * If `config.async` is `true` and there's not a callback function, Eta will return a Promise that resolves to the rendered template.
 *
 * If `config.cache` is `true` and `config` has a `name` or `filename` property, Eta will cache the template on the first render and use the cached template for all subsequent renders.
 *
 * @param template Template string or template function
 * @param data Data to render the template with
 * @param config Optional config options
 * @param cb Callback function
 */
function render(template, data, config, cb) {
    var options = getConfig(config || {});
    if (options.async) {
        if (cb) {
            // If user passes callback
            try {
                // Note: if there is an error while rendering the template,
                // It will bubble up and be caught here
                var templateFn = handleCache(template, options);
                templateFn(data, options, cb);
            }
            catch (err) {
                return cb(err);
            }
        }
        else {
            // No callback, try returning a promise
            if (typeof promiseImpl === 'function') {
                return new promiseImpl(function (resolve, reject) {
                    try {
                        resolve(handleCache(template, options)(data, options));
                    }
                    catch (err) {
                        reject(err);
                    }
                });
            }
            else {
                throw EtaErr("Please provide a callback function, this env doesn't support Promises");
            }
        }
    }
    else {
        return handleCache(template, options)(data, options);
    }
}
/**
 * Render a template asynchronously
 *
 * If `template` is a string, Eta will compile it to a function and call it with the provided data.
 * If `template` is a function, Eta will call it with the provided data.
 *
 * If there is a callback function, Eta will call it with `(err, renderedTemplate)`.
 * If there is not a callback function, Eta will return a Promise that resolves to the rendered template
 *
 * @param template Template string or template function
 * @param data Data to render the template with
 * @param config Optional config options
 * @param cb Callback function
 */
function renderAsync(template, data, config, cb) {
    // Using Object.assign to lower bundle size, using spread operator makes it larger because of typescript injected polyfills
    return render(template, data, Object.assign({}, config, { async: true }), cb);
}

// @denoify-ignore
config.includeFile = includeFileHelper;
config.filepathCache = {};

class TParser {
    constructor(app) {
        this.app = app;
    }
}

class InternalModule extends TParser {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
        this.static_templates = new Map();
        this.dynamic_templates = new Map();
    }
    getName() {
        return this.name;
    }
    generateContext(file) {
        return __awaiter(this, void 0, void 0, function* () {
            this.file = file;
            if (this.static_templates.size === 0) {
                yield this.createStaticTemplates();
            }
            yield this.updateTemplates();
            return Object.assign(Object.assign({}, Object.fromEntries(this.static_templates)), Object.fromEntries(this.dynamic_templates));
        });
    }
}

class InternalModuleDate extends InternalModule {
    constructor() {
        super(...arguments);
        this.name = "date";
    }
    createStaticTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            this.static_templates.set("now", this.generate_now());
            this.static_templates.set("tomorrow", this.generate_tomorrow());
            this.static_templates.set("weekday", this.generate_weekday());
            this.static_templates.set("yesterday", this.generate_yesterday());
        });
    }
    updateTemplates() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    generate_now() {
        return (format = "YYYY-MM-DD", offset, reference, reference_format) => {
            if (reference && !window.moment(reference, reference_format).isValid()) {
                throw new Error("Invalid reference date format, try specifying one with the argument 'reference_format'");
            }
            let duration;
            if (typeof offset === "string") {
                duration = window.moment.duration(offset);
            }
            else if (typeof offset === "number") {
                duration = window.moment.duration(offset, "days");
            }
            return window.moment(reference, reference_format).add(duration).format(format);
        };
    }
    generate_tomorrow() {
        return (format = "YYYY-MM-DD") => {
            return window.moment().add(1, 'days').format(format);
        };
    }
    generate_weekday() {
        return (format = "YYYY-MM-DD", weekday, reference, reference_format) => {
            if (reference && !window.moment(reference, reference_format).isValid()) {
                throw new Error("Invalid reference date format, try specifying one with the argument 'reference_format'");
            }
            return window.moment(reference, reference_format).weekday(weekday).format(format);
        };
    }
    generate_yesterday() {
        return (format = "YYYY-MM-DD") => {
            return window.moment().add(-1, 'days').format(format);
        };
    }
}

const UNSUPPORTED_MOBILE_TEMPLATE = "Error_MobileUnsupportedTemplate";
const ICON_DATA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.1328 28.7"><path d="M0 15.14 0 10.15 18.67 1.51 18.67 6.03 4.72 12.33 4.72 12.76 18.67 19.22 18.67 23.74 0 15.14ZM33.6928 1.84C33.6928 1.84 33.9761 2.1467 34.5428 2.76C35.1094 3.38 35.3928 4.56 35.3928 6.3C35.3928 8.0466 34.8195 9.54 33.6728 10.78C32.5261 12.02 31.0995 12.64 29.3928 12.64C27.6862 12.64 26.2661 12.0267 25.1328 10.8C23.9928 9.5733 23.4228 8.0867 23.4228 6.34C23.4228 4.6 23.9995 3.1066 25.1528 1.86C26.2994.62 27.7261 0 29.4328 0C31.1395 0 32.5594.6133 33.6928 1.84M49.8228.67 29.5328 28.38 24.4128 28.38 44.7128.67 49.8228.67M31.0328 8.38C31.0328 8.38 31.1395 8.2467 31.3528 7.98C31.5662 7.7067 31.6728 7.1733 31.6728 6.38C31.6728 5.5867 31.4461 4.92 30.9928 4.38C30.5461 3.84 29.9995 3.57 29.3528 3.57C28.7061 3.57 28.1695 3.84 27.7428 4.38C27.3228 4.92 27.1128 5.5867 27.1128 6.38C27.1128 7.1733 27.3361 7.84 27.7828 8.38C28.2361 8.9267 28.7861 9.2 29.4328 9.2C30.0795 9.2 30.6128 8.9267 31.0328 8.38M49.4328 17.9C49.4328 17.9 49.7161 18.2067 50.2828 18.82C50.8495 19.4333 51.1328 20.6133 51.1328 22.36C51.1328 24.1 50.5594 25.59 49.4128 26.83C48.2595 28.0766 46.8295 28.7 45.1228 28.7C43.4228 28.7 42.0028 28.0833 40.8628 26.85C39.7295 25.6233 39.1628 24.1366 39.1628 22.39C39.1628 20.65 39.7361 19.16 40.8828 17.92C42.0361 16.6733 43.4628 16.05 45.1628 16.05C46.8694 16.05 48.2928 16.6667 49.4328 17.9M46.8528 24.52C46.8528 24.52 46.9595 24.3833 47.1728 24.11C47.3795 23.8367 47.4828 23.3033 47.4828 22.51C47.4828 21.7167 47.2595 21.05 46.8128 20.51C46.3661 19.97 45.8162 19.7 45.1628 19.7C44.5161 19.7 43.9828 19.97 43.5628 20.51C43.1428 21.05 42.9328 21.7167 42.9328 22.51C42.9328 23.3033 43.1561 23.9733 43.6028 24.52C44.0494 25.06 44.5961 25.33 45.2428 25.33C45.8895 25.33 46.4261 25.06 46.8528 24.52Z" fill="currentColor"/></svg>`;

const DEPTH_LIMIT = 10;
class InternalModuleFile extends InternalModule {
    constructor() {
        super(...arguments);
        this.name = "file";
        this.include_depth = 0;
        this.linkpath_regex = new RegExp("^\\[\\[(.*)\\]\\]$");
    }
    createStaticTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Remove this
            this.static_templates.set("clipboard", this.generate_clipboard());
            this.static_templates.set("cursor", this.generate_cursor());
            this.static_templates.set("selection", this.generate_selection());
        });
    }
    updateTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dynamic_templates.set("content", yield this.generate_content());
            this.dynamic_templates.set("creation_date", this.generate_creation_date());
            this.dynamic_templates.set("folder", this.generate_folder());
            this.dynamic_templates.set("include", this.generate_include());
            this.dynamic_templates.set("last_modified_date", this.generate_last_modified_date());
            this.dynamic_templates.set("path", this.generate_path());
            this.dynamic_templates.set("rename", this.generate_rename());
            this.dynamic_templates.set("tags", this.generate_tags());
            this.dynamic_templates.set("title", this.generate_title());
        });
    }
    generate_clipboard() {
        return () => {
            // TODO: Remove this
            this.plugin.log_update("tp.file.clipboard was moved to a new module: System Module!<br/> You must now use tp.system.clipboard()");
            return "";
        };
    }
    generate_cursor() {
        return (order) => {
            // Hack to prevent empty output
            return `<% tp.file.cursor(${order !== null && order !== void 0 ? order : ''}) %>`;
        };
    }
    generate_content() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.app.vault.read(this.file);
        });
    }
    generate_creation_date() {
        return (format = "YYYY-MM-DD HH:mm") => {
            return window.moment(this.file.stat.ctime).format(format);
        };
    }
    generate_folder() {
        return (relative = false) => {
            let parent = this.file.parent;
            let folder;
            if (relative) {
                folder = parent.path;
            }
            else {
                folder = parent.name;
            }
            return folder;
        };
    }
    generate_include() {
        return (include_link) => __awaiter(this, void 0, void 0, function* () {
            // TODO: Add mutex for this, this may currently lead to a race condition. 
            // While not very impactful, that could still be annoying.
            this.include_depth += 1;
            if (this.include_depth > DEPTH_LIMIT) {
                this.include_depth = 0;
                throw new Error("Reached inclusion depth limit (max = 10)");
            }
            let match;
            if ((match = this.linkpath_regex.exec(include_link)) === null) {
                this.plugin.log_update("tp.file.include was updated! You must now provide the 'include_filename' parameter as an obsidian link in the form '[[MyFile]]'<br/><br/>This ensures that if you change a file name, tp.file.include isn't broken.<br/><br/>This also adds supports for sections and blocks inclusions!");
                return "";
            }
            const { path, subpath } = obsidian.parseLinktext(match[1]);
            let inc_file = this.app.metadataCache.getFirstLinkpathDest(path, "");
            if (!inc_file) {
                throw new Error(`File ${include_link} doesn't exist`);
            }
            if (!(inc_file instanceof obsidian.TFile)) {
                throw new Error(`${include_link} is a folder, not a file`);
            }
            let inc_file_content = yield this.app.vault.read(inc_file);
            if (subpath) {
                let cache = this.app.metadataCache.getFileCache(inc_file);
                if (cache) {
                    let result = obsidian.resolveSubpath(cache, subpath);
                    inc_file_content = inc_file_content.slice(result.start.offset, result.end.offset);
                }
            }
            let parsed_content = yield this.plugin.parser.parseTemplates(inc_file_content);
            this.include_depth -= 1;
            return parsed_content;
        });
    }
    generate_last_modified_date() {
        return (format = "YYYY-MM-DD HH:mm") => {
            return window.moment(this.file.stat.mtime).format(format);
        };
    }
    generate_path() {
        return (relative = false) => {
            // TODO: Add mobile support
            if (this.app.isMobile) {
                return UNSUPPORTED_MOBILE_TEMPLATE;
            }
            if (!(this.app.vault.adapter instanceof obsidian.FileSystemAdapter)) {
                throw new Error("app.vault is not a FileSystemAdapter instance");
            }
            let vault_path = this.app.vault.adapter.getBasePath();
            if (relative) {
                return this.file.path;
            }
            else {
                return `${vault_path}/${this.file.path}`;
            }
        };
    }
    generate_rename() {
        return (new_title) => __awaiter(this, void 0, void 0, function* () {
            let new_path = obsidian.normalizePath(`${this.file.parent.path}/${new_title}.${this.file.extension}`);
            yield this.app.fileManager.renameFile(this.file, new_path);
            return "";
        });
    }
    generate_selection() {
        return () => {
            let active_view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            if (active_view == null) {
                throw new Error("Active view is null, can't read selection.");
            }
            let editor = active_view.editor;
            return editor.getSelection();
        };
    }
    generate_tags() {
        let cache = this.app.metadataCache.getFileCache(this.file);
        return obsidian.getAllTags(cache);
    }
    generate_title() {
        return this.file.basename;
    }
}

class InternalModuleWeb extends InternalModule {
    constructor() {
        super(...arguments);
        this.name = "web";
    }
    createStaticTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            this.static_templates.set("daily_quote", this.generate_daily_quote());
            this.static_templates.set("random_picture", this.generate_random_picture());
            this.static_templates.set("get_request", this.generate_get_request());
        });
    }
    updateTemplates() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getRequest(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Error performing GET request");
            }
            return response;
        });
    }
    generate_daily_quote() {
        return () => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.getRequest("https://quotes.rest/qod");
            let json = yield response.json();
            let author = json.contents.quotes[0].author;
            let quote = json.contents.quotes[0].quote;
            let new_content = `> ${quote}\n> &mdash; <cite>${author}</cite>`;
            return new_content;
        });
    }
    generate_random_picture() {
        return (size, query) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.getRequest(`https://source.unsplash.com/random/${size !== null && size !== void 0 ? size : ''}?${query !== null && query !== void 0 ? query : ''}`);
            let url = response.url;
            return `![tp.web.random_picture](${url})`;
        });
    }
    generate_get_request() {
        return (url) => __awaiter(this, void 0, void 0, function* () {
            let response = yield this.getRequest(url);
            let json = yield response.json();
            return json;
        });
    }
}

class InternalModuleFrontmatter extends InternalModule {
    constructor() {
        super(...arguments);
        this.name = "frontmatter";
    }
    createStaticTemplates() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    updateTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            let cache = this.app.metadataCache.getFileCache(this.file);
            this.dynamic_templates = new Map(Object.entries((cache === null || cache === void 0 ? void 0 : cache.frontmatter) || {}));
        });
    }
}

class PromptModal extends obsidian.Modal {
    constructor(app, prompt_text, default_value) {
        super(app);
        this.prompt_text = prompt_text;
        this.default_value = default_value;
    }
    onOpen() {
        this.titleEl.setText(this.prompt_text);
        this.createForm();
    }
    onClose() {
        this.contentEl.empty();
    }
    createForm() {
        var _a;
        let div = this.contentEl.createDiv();
        div.addClass("templater-prompt-div");
        let form = div.createEl("form");
        form.addClass("templater-prompt-form");
        form.type = "submit";
        form.onsubmit = (e) => {
            e.preventDefault();
            this.cb(this.promptEl.value);
            this.close();
        };
        this.promptEl = form.createEl("input");
        this.promptEl.type = "text";
        this.promptEl.placeholder = "Type text here...";
        this.promptEl.value = (_a = this.default_value) !== null && _a !== void 0 ? _a : "";
        this.promptEl.addClass("templater-prompt-input");
        this.promptEl.select();
    }
    openAndGetValue(cb) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cb = cb;
            this.open();
        });
    }
}

class InternalModuleSystem extends InternalModule {
    constructor() {
        super(...arguments);
        this.name = "system";
    }
    createStaticTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            this.static_templates.set("clipboard", this.generate_clipboard());
            this.static_templates.set("prompt", this.generate_prompt());
        });
    }
    updateTemplates() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    generate_clipboard() {
        return () => __awaiter(this, void 0, void 0, function* () {
            // TODO: Add mobile support
            if (this.app.isMobile) {
                return UNSUPPORTED_MOBILE_TEMPLATE;
            }
            return yield navigator.clipboard.readText();
        });
    }
    generate_prompt() {
        return (prompt_text, default_value) => {
            let prompt = new PromptModal(this.app, prompt_text, default_value);
            return new Promise((resolve) => prompt.openAndGetValue(resolve));
        };
    }
}

class InternalTemplateParser extends TParser {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
        this.modules_array = new Array();
        this.createModules();
    }
    createModules() {
        this.modules_array.push(new InternalModuleDate(this.app, this.plugin));
        this.modules_array.push(new InternalModuleFile(this.app, this.plugin));
        this.modules_array.push(new InternalModuleWeb(this.app, this.plugin));
        this.modules_array.push(new InternalModuleFrontmatter(this.app, this.plugin));
        this.modules_array.push(new InternalModuleSystem(this.app, this.plugin));
    }
    generateContext(f) {
        return __awaiter(this, void 0, void 0, function* () {
            let modules_context_map = new Map();
            for (let mod of this.modules_array) {
                modules_context_map.set(mod.getName(), yield mod.generateContext(f));
            }
            return Object.fromEntries(modules_context_map);
        });
    }
}

class UserTemplateParser extends TParser {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
        this.resolveCwd();
    }
    resolveCwd() {
        // TODO: Add mobile support
        if (this.app.isMobile || !(this.app.vault.adapter instanceof obsidian.FileSystemAdapter)) {
            this.cwd = "";
        }
        else {
            this.cwd = this.app.vault.adapter.getBasePath();
        }
    }
    generateUserTemplates(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let user_templates = new Map();
            const exec_promise = util.promisify(child_process.exec);
            let context = yield this.plugin.parser.generateContext(file, ContextMode.INTERNAL);
            for (let [template, cmd] of this.plugin.settings.templates_pairs) {
                if (template === "" || cmd === "") {
                    continue;
                }
                if (this.app.isMobile) {
                    user_templates.set(template, (user_args) => {
                        return UNSUPPORTED_MOBILE_TEMPLATE;
                    });
                }
                else {
                    cmd = yield this.plugin.parser.parseTemplates(cmd, context);
                    user_templates.set(template, (user_args) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            let process_env = Object.assign(Object.assign({}, process.env), user_args);
                            let cmd_options = {
                                timeout: this.plugin.settings.command_timeout * 1000,
                                cwd: this.cwd,
                                env: process_env,
                            };
                            let { stdout } = yield exec_promise(cmd, cmd_options);
                            return stdout.trimRight();
                        }
                        catch (error) {
                            this.plugin.log_error(`Error with User Template ${template}`, error);
                        }
                    }));
                }
            }
            return user_templates;
        });
    }
    generateContext(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let user_templates = this.plugin.settings.enable_system_commands ? yield this.generateUserTemplates(file) : new Map();
            return Object.assign({}, Object.fromEntries(user_templates));
        });
    }
}

class CursorJumper {
    constructor(app) {
        this.app = app;
        this.cursor_regex = new RegExp("<%\\s*tp.file.cursor\\((?<order>[0-9]{0,2})\\)\\s*%>", "g");
    }
    get_editor_position_from_index(content, index) {
        let substr = content.substr(0, index);
        let l = 0;
        let offset = -1;
        let r = -1;
        for (; (r = substr.indexOf("\n", r + 1)) !== -1; l++, offset = r)
            ;
        offset += 1;
        let ch = content.substr(offset, index - offset).length;
        return { line: l, ch: ch };
    }
    jump_to_next_cursor_location() {
        return __awaiter(this, void 0, void 0, function* () {
            let active_view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            if (active_view === null) {
                throw new Error("No active view, can't append templates.");
            }
            let active_file = active_view.file;
            yield active_view.save();
            let content = yield this.app.vault.read(active_file);
            const { new_content, positions } = this.replace_and_get_cursor_positions(content);
            if (positions) {
                yield this.app.vault.modify(active_file, new_content);
                this.set_cursor_location(positions);
            }
        });
    }
    replace_and_get_cursor_positions(content) {
        let cursor_matches = [];
        let match;
        while ((match = this.cursor_regex.exec(content)) != null) {
            cursor_matches.push(match);
        }
        if (cursor_matches.length === 0) {
            return {};
        }
        cursor_matches.sort((m1, m2) => {
            return Number(m1.groups["order"]) - Number(m2.groups["order"]);
        });
        let match_str = cursor_matches[0][0];
        cursor_matches = cursor_matches.filter(m => {
            return m[0] === match_str;
        });
        let positions = [];
        let index_offset = 0;
        for (let match of cursor_matches) {
            let index = match.index - index_offset;
            positions.push(this.get_editor_position_from_index(content, index));
            content = content.replace(new RegExp(escapeRegExp$1(match[0])), "");
            index_offset += match[0].length;
            // TODO: Remove this, breaking for now waiting for the new setSelections API
            break;
            /*
            // For tp.file.cursor(), we only find one
            if (match[1] === "") {
                break;
            }
            */
        }
        return { new_content: content, positions: positions };
    }
    set_cursor_location(positions) {
        let active_view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (active_view === null) {
            return;
        }
        // TODO: Remove this
        let editor = active_view.editor;
        editor.focus();
        editor.setCursor(positions[0]);
        /*
        let selections = [];
        for (let pos of positions) {
            selections.push({anchor: pos, head: pos});
        }
        editor.focus();
        editor.setSelections(selections);
        */
        /*
        // Check https://github.com/obsidianmd/obsidian-api/issues/14

        let editor = active_view.editor;
        editor.focus();

        for (let pos of positions) {
            let transaction: EditorTransaction = {
                selection: {
                    from: pos
                }
            };
            editor.transaction(transaction);
        }
        */
    }
}

var ContextMode;
(function (ContextMode) {
    ContextMode[ContextMode["USER"] = 0] = "USER";
    ContextMode[ContextMode["INTERNAL"] = 1] = "INTERNAL";
    ContextMode[ContextMode["USER_INTERNAL"] = 2] = "USER_INTERNAL";
    ContextMode[ContextMode["DYNAMIC"] = 3] = "DYNAMIC";
})(ContextMode || (ContextMode = {}));
// TODO: Remove that
const tp_cursor = new RegExp("<%\\s*tp.file.cursor\\s*%>");
class TemplateParser extends TParser {
    constructor(app, plugin) {
        super(app);
        this.plugin = plugin;
        this.userTemplateParser = null;
        this.cursor_jumper = new CursorJumper(this.app);
        this.internalTemplateParser = new InternalTemplateParser(this.app, this.plugin);
        this.userTemplateParser = new UserTemplateParser(this.app, this.plugin);
    }
    setCurrentContext(file, context_mode) {
        return __awaiter(this, void 0, void 0, function* () {
            this.current_context = yield this.generateContext(file, context_mode);
        });
    }
    generateContext(file, context_mode = ContextMode.USER_INTERNAL) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = {};
            let internal_context = yield this.internalTemplateParser.generateContext(file);
            let user_context = {};
            if (!this.current_context) {
                // If a user system command is using tp.file.include, we need the context to be set.
                this.current_context = internal_context;
            }
            switch (context_mode) {
                case ContextMode.USER:
                    user_context = yield this.userTemplateParser.generateContext(file);
                    context = {
                        user: Object.assign({}, user_context)
                    };
                    break;
                case ContextMode.INTERNAL:
                    context = internal_context;
                    break;
                case ContextMode.DYNAMIC:
                    user_context = yield this.userTemplateParser.generateContext(file);
                    context = {
                        dynamic: Object.assign(Object.assign({}, internal_context), { user: Object.assign({}, user_context) })
                    };
                    break;
                case ContextMode.USER_INTERNAL:
                    user_context = yield this.userTemplateParser.generateContext(file);
                    context = Object.assign(Object.assign({}, internal_context), { user: Object.assign({}, user_context) });
                    break;
            }
            return context;
        });
    }
    parseTemplates(content, context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!context) {
                context = this.current_context;
            }
            if (content.match(tp_cursor)) {
                this.plugin.log_update(`tp.file.cursor was updated! It's now an internal function, you should call it like so: tp.file.cursor() <br/>
tp.file.cursor now supports cursor jump order! Specify the jump order as an argument (tp.file.cursor(1), tp.file.cursor(2), ...), if you wish to change the default top to bottom order.<br/>
Check the <a href='https://silentvoid13.github.io/Templater/docs/internal-variables-functions/internal-modules/file-module'>documentation</a> for more informations.`);
            }
            try {
                content = (yield renderAsync(content, context, {
                    varName: "tp",
                    parse: {
                        exec: "*",
                        interpolate: "~",
                        raw: "",
                    },
                    autoTrim: false,
                    globalAwait: true,
                }));
            }
            catch (error) {
                this.plugin.log_error("Template parsing error, aborting.", error);
            }
            return content;
        });
    }
    replace_in_active_file() {
        try {
            let active_view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            if (active_view === null) {
                throw new Error("Active view is null");
            }
            this.replace_templates_and_overwrite_in_file(active_view.file);
        }
        catch (error) {
            this.plugin.log_error(error);
        }
    }
    create_new_note_from_template(template_file, folder) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let template_content = yield this.app.vault.read(template_file);
                if (!folder) {
                    folder = this.app.fileManager.getNewFileParent("");
                    //folder = this.app.vault.getConfig("newFileFolderPath");
                }
                // TODO: Change that, not stable atm
                // @ts-ignore
                let created_note = yield this.app.fileManager.createNewMarkdownFile(folder, "Untitled");
                //let created_note = await this.app.vault.create("Untitled.md", "");
                yield this.setCurrentContext(created_note, ContextMode.USER_INTERNAL);
                let content = yield this.plugin.parser.parseTemplates(template_content);
                yield this.app.vault.modify(created_note, content);
                let active_leaf = this.app.workspace.activeLeaf;
                if (!active_leaf) {
                    throw new Error("No active leaf");
                }
                yield active_leaf.openFile(created_note, { state: { mode: 'source' }, eState: { rename: 'all' } });
                yield this.cursor_jumper.jump_to_next_cursor_location();
            }
            catch (error) {
                this.plugin.log_error(error);
            }
        });
    }
    replace_templates_and_append(template_file) {
        return __awaiter(this, void 0, void 0, function* () {
            let active_view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
            if (active_view === null) {
                throw new Error("No active view, can't append templates.");
            }
            let editor = active_view.editor;
            let doc = editor.getDoc();
            let content = yield this.app.vault.read(template_file);
            yield this.setCurrentContext(active_view.file, ContextMode.USER_INTERNAL);
            content = yield this.parseTemplates(content);
            doc.replaceSelection(content);
            yield this.cursor_jumper.jump_to_next_cursor_location();
            editor.focus();
        });
    }
    replace_templates_and_overwrite_in_file(file) {
        return __awaiter(this, void 0, void 0, function* () {
            let content = yield this.app.vault.read(file);
            yield this.setCurrentContext(file, ContextMode.USER_INTERNAL);
            let new_content = yield this.parseTemplates(content);
            if (new_content !== content) {
                yield this.app.vault.modify(file, new_content);
                if (this.app.workspace.getActiveFile() === file) {
                    yield this.cursor_jumper.jump_to_next_cursor_location();
                }
            }
        });
    }
}

class TemplaterPlugin extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.fuzzySuggest = new TemplaterFuzzySuggestModal(this.app, this);
            this.parser = new TemplateParser(this.app, this);
            this.registerMarkdownPostProcessor((el, ctx) => this.dynamic_templates_processor(el, ctx));
            obsidian.addIcon("templater-icon", ICON_DATA);
            this.addRibbonIcon('templater-icon', 'Templater', () => __awaiter(this, void 0, void 0, function* () {
                this.fuzzySuggest.insert_template();
            }));
            this.addCommand({
                id: "insert-templater",
                name: "Insert Template",
                hotkeys: [
                    {
                        modifiers: ["Alt"],
                        key: 'e',
                    },
                ],
                callback: () => {
                    this.fuzzySuggest.insert_template();
                },
            });
            this.addCommand({
                id: "replace-in-file-templater",
                name: "Replace templates in the active file",
                hotkeys: [
                    {
                        modifiers: ["Alt"],
                        key: 'r',
                    },
                ],
                callback: () => {
                    this.parser.replace_in_active_file();
                },
            });
            this.addCommand({
                id: "jump-to-next-cursor-location",
                name: "Jump to next cursor location",
                hotkeys: [
                    {
                        modifiers: ["Alt"],
                        key: "Tab",
                    },
                ],
                callback: () => {
                    try {
                        this.parser.cursor_jumper.jump_to_next_cursor_location();
                    }
                    catch (error) {
                        this.log_error(error);
                    }
                }
            });
            this.addCommand({
                id: "create-new-note-from-template",
                name: "Create new note from template",
                hotkeys: [
                    {
                        modifiers: ["Alt"],
                        key: "n",
                    },
                ],
                callback: () => {
                    this.fuzzySuggest.create_new_note_from_template();
                }
            });
            this.app.workspace.onLayoutReady(() => {
                this.update_trigger_file_on_creation();
            });
            this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
                if (file instanceof obsidian.TFolder) {
                    menu.addItem((item) => {
                        item.setTitle("Create new note from template")
                            .setIcon("templater-icon")
                            .onClick(evt => {
                            this.fuzzySuggest.create_new_note_from_template(file);
                        });
                    });
                }
            }));
            this.addSettingTab(new TemplaterSettingTab(this.app, this));
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    update_trigger_file_on_creation() {
        if (this.settings.trigger_on_file_creation) {
            this.trigger_on_file_creation_event = this.app.vault.on("create", (file) => __awaiter(this, void 0, void 0, function* () {
                // TODO: Find a way to not trigger this on files copy
                // TODO: find a better way to do this
                // Currently, I have to wait for the daily note plugin to add the file content before replacing
                // Not a problem with Calendar however since it creates the file with the existing content
                yield delay(300);
                // ! This could corrupt binary files
                if (!(file instanceof obsidian.TFile) || file.extension !== "md") {
                    return;
                }
                this.parser.replace_templates_and_overwrite_in_file(file);
            }));
            this.registerEvent(this.trigger_on_file_creation_event);
        }
        else {
            if (this.trigger_on_file_creation_event) {
                this.app.vault.offref(this.trigger_on_file_creation_event);
                this.trigger_on_file_creation_event = undefined;
            }
        }
    }
    log_update(msg) {
        let notice = new obsidian.Notice("", 15000);
        // TODO: Find better way for this
        // @ts-ignore
        notice.noticeEl.innerHTML = `<b>Templater update</b>:<br/>${msg}`;
    }
    log_error(msg, error) {
        let notice = new obsidian.Notice("", 8000);
        if (error) {
            // TODO: Find a better way for this
            // @ts-ignore
            notice.noticeEl.innerHTML = `<b>Templater Error</b>:<br/>${msg}<br/>Check console for more informations`;
            console.error(msg, error);
        }
        else {
            // @ts-ignore
            notice.noticeEl.innerHTML = `<b>Templater Error</b>:<br/>${msg}`;
        }
    }
    dynamic_templates_processor(el, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (el.textContent.contains("tp.dynamic")) {
                // TODO: This will not always be the active file, 
                // I need to use getFirstLinkpathDest and ctx to find the actual file
                let file = this.app.workspace.getActiveFile();
                yield this.parser.setCurrentContext(file, ContextMode.DYNAMIC);
                let new_html = yield this.parser.parseTemplates(el.innerHTML);
                el.innerHTML = new_html;
            }
        });
    }
}

module.exports = TemplaterPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9TZXR0aW5ncy50cyIsInNyYy9VdGlscy50cyIsInNyYy9UZW1wbGF0ZXJGdXp6eVN1Z2dlc3QudHMiLCJub2RlX21vZHVsZXMvZXRhL2Rpc3QvZXRhLmVzLmpzIiwic3JjL1RQYXJzZXIudHMiLCJzcmMvSW50ZXJuYWxUZW1wbGF0ZXMvSW50ZXJuYWxNb2R1bGUudHMiLCJzcmMvSW50ZXJuYWxUZW1wbGF0ZXMvZGF0ZS9JbnRlcm5hbE1vZHVsZURhdGUudHMiLCJzcmMvQ29uc3RhbnRzLnRzIiwic3JjL0ludGVybmFsVGVtcGxhdGVzL2ZpbGUvSW50ZXJuYWxNb2R1bGVGaWxlLnRzIiwic3JjL0ludGVybmFsVGVtcGxhdGVzL3dlYi9JbnRlcm5hbE1vZHVsZVdlYi50cyIsInNyYy9JbnRlcm5hbFRlbXBsYXRlcy9mcm9udG1hdHRlci9JbnRlcm5hbE1vZHVsZUZyb250bWF0dGVyLnRzIiwic3JjL0ludGVybmFsVGVtcGxhdGVzL3N5c3RlbS9Qcm9tcHRNb2RhbC50cyIsInNyYy9JbnRlcm5hbFRlbXBsYXRlcy9zeXN0ZW0vSW50ZXJuYWxNb2R1bGVTeXN0ZW0udHMiLCJzcmMvSW50ZXJuYWxUZW1wbGF0ZXMvSW50ZXJuYWxUZW1wbGF0ZVBhcnNlci50cyIsInNyYy9Vc2VyVGVtcGxhdGVzL1VzZXJUZW1wbGF0ZVBhcnNlci50cyIsInNyYy9DdXJzb3JKdW1wZXIudHMiLCJzcmMvVGVtcGxhdGVQYXJzZXIudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmltcG9ydCBUZW1wbGF0ZXJQbHVnaW4gZnJvbSAnLi9tYWluJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFRlbXBsYXRlclNldHRpbmdzID0ge1xuXHRjb21tYW5kX3RpbWVvdXQ6IDUsXG5cdHRlbXBsYXRlX2ZvbGRlcjogXCJcIixcblx0dGVtcGxhdGVzX3BhaXJzOiBbW1wiXCIsIFwiXCJdXSxcblx0dHJpZ2dlcl9vbl9maWxlX2NyZWF0aW9uOiBmYWxzZSxcblx0ZW5hYmxlX3N5c3RlbV9jb21tYW5kczogZmFsc2UsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlclNldHRpbmdzIHtcblx0Y29tbWFuZF90aW1lb3V0OiBudW1iZXI7XG5cdHRlbXBsYXRlX2ZvbGRlcjogc3RyaW5nO1xuXHR0ZW1wbGF0ZXNfcGFpcnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuXHR0cmlnZ2VyX29uX2ZpbGVfY3JlYXRpb246IGJvb2xlYW47XG5cdGVuYWJsZV9zeXN0ZW1fY29tbWFuZHM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZXJTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBhcHA6IEFwcCwgcHJpdmF0ZSBwbHVnaW46IFRlbXBsYXRlclBsdWdpbikge1xuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcblx0fVxuXG5cdGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0bGV0IHtjb250YWluZXJFbH0gPSB0aGlzO1xuXHRcdGxldCBkZXNjOiBEb2N1bWVudEZyYWdtZW50O1xuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKFwiVGVtcGxhdGUgZm9sZGVyIGxvY2F0aW9uXCIpXG5cdFx0XHQuc2V0RGVzYyhcIkZpbGVzIGluIHRoaXMgZm9sZGVyIHdpbGwgYmUgYXZhaWxhYmxlIGFzIHRlbXBsYXRlcy5cIilcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4ge1xuXHRcdFx0XHR0ZXh0LnNldFBsYWNlaG9sZGVyKFwiRXhhbXBsZTogZm9sZGVyIDEvZm9sZGVyIDJcIilcblx0XHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVfZm9sZGVyKVxuXHRcdFx0XHRcdC5vbkNoYW5nZSgobmV3X2ZvbGRlcikgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVfZm9sZGVyID0gbmV3X2ZvbGRlcjtcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHR9KTtcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdFx0LnNldE5hbWUoXCJUaW1lb3V0XCIpXG5cdFx0XHQuc2V0RGVzYyhcIk1heGltdW0gdGltZW91dCBpbiBzZWNvbmRzIGZvciBhIHN5c3RlbSBjb21tYW5kLlwiKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB7XG5cdFx0XHRcdHRleHQuc2V0UGxhY2Vob2xkZXIoXCJUaW1lb3V0XCIpXG5cdFx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbW1hbmRfdGltZW91dC50b1N0cmluZygpKVxuXHRcdFx0XHRcdC5vbkNoYW5nZSgobmV3X3ZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgbmV3X3RpbWVvdXQgPSBOdW1iZXIobmV3X3ZhbHVlKTtcblx0XHRcdFx0XHRcdGlmIChpc05hTihuZXdfdGltZW91dCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4ubG9nX2Vycm9yKFwiVGltZW91dCBtdXN0IGJlIGEgbnVtYmVyXCIpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb21tYW5kX3RpbWVvdXQgPSBuZXdfdGltZW91dDtcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHR9KTtcblxuXHRcdGRlc2MgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0ZGVzYy5hcHBlbmQoXG5cdFx0XHRcIlRlbXBsYXRlciBwcm92aWRlcyBtdWx0aXBsZXMgcHJlZGVmaW5lZCB2YXJpYWJsZXMgLyBmdW5jdGlvbnMgdGhhdCB5b3UgY2FuIHVzZS5cIixcblx0XHRcdGRlc2MuY3JlYXRlRWwoXCJiclwiKSxcblx0XHRcdFwiQ2hlY2sgdGhlIFwiLFxuXHRcdFx0ZGVzYy5jcmVhdGVFbChcImFcIiwge1xuXHRcdFx0XHRocmVmOiBcImh0dHBzOi8vc2lsZW50dm9pZDEzLmdpdGh1Yi5pby9UZW1wbGF0ZXIvXCIsXG5cdFx0XHRcdHRleHQ6IFwiZG9jdW1lbnRhdGlvblwiXG5cdFx0XHR9KSxcblx0XHRcdFwiIHRvIGdldCBhIGxpc3Qgb2YgYWxsIHRoZSBhdmFpbGFibGUgaW50ZXJuYWwgdmFyaWFibGVzIC8gZnVuY3Rpb25zLlwiLFxuXHRcdCk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKFwiSW50ZXJuYWwgVmFyaWFibGVzIGFuZCBGdW5jdGlvbnNcIilcblx0XHRcdC5zZXREZXNjKGRlc2MpO1xuXG5cdFx0ZGVzYyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRkZXNjLmFwcGVuZChcblx0XHRcdFwiVGVtcGxhdGVyIHdpbGwgbGlzdGVuIGZvciB0aGUgbmV3IGZpbGUgY3JlYXRpb24gZXZlbnQsIGFuZCByZXBsYWNlIGV2ZXJ5IGNvbW1hbmQgaXQgZmluZHMgaW4gdGhlIG5ldyBmaWxlJ3MgY29udGVudC5cIixcblx0XHRcdGRlc2MuY3JlYXRlRWwoXCJiclwiKSxcblx0XHRcdFwiVGhpcyBtYWtlcyBUZW1wbGF0ZXIgY29tcGF0aWJsZSB3aXRoIG90aGVyIHBsdWdpbnMgbGlrZSB0aGUgRGFpbHkgbm90ZSBjb3JlIHBsdWdpbiwgQ2FsZW5kYXIgcGx1Z2luLCBSZXZpZXcgcGx1Z2luLCBOb3RlIHJlZmFjdG9yIHBsdWdpbiwgLi4uXCIsXG5cdFx0XHRkZXNjLmNyZWF0ZUVsKFwiYnJcIiksXG5cdFx0XHRkZXNjLmNyZWF0ZUVsKFwiYlwiLCB7XG5cdFx0XHRcdHRleHQ6IFwiV2FybmluZzogXCIsXG5cdFx0XHR9KSxcblx0XHRcdFwiVGhpcyBjYW4gYmUgZGFuZ2Vyb3VzIGlmIHlvdSBjcmVhdGUgbmV3IGZpbGVzIHdpdGggdW5rbm93biAvIHVuc2FmZSBjb250ZW50IG9uIGNyZWF0aW9uLiBNYWtlIHN1cmUgdGhhdCBldmVyeSBuZXcgZmlsZSdzIGNvbnRlbnQgaXMgc2FmZSBvbiBjcmVhdGlvbi5cIlxuXHRcdCk7XHRcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdFx0LnNldE5hbWUoXCJUcmlnZ2VyIFRlbXBsYXRlciBvbiBuZXcgZmlsZSBjcmVhdGlvblwiKVxuXHRcdFx0LnNldERlc2MoZGVzYylcblx0XHRcdC5hZGRUb2dnbGUodG9nZ2xlID0+IHtcblx0XHRcdFx0dG9nZ2xlXG5cdFx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJfb25fZmlsZV9jcmVhdGlvbilcblx0XHRcdFx0XHQub25DaGFuZ2UodHJpZ2dlcl9vbl9maWxlX2NyZWF0aW9uID0+IHtcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnRyaWdnZXJfb25fZmlsZV9jcmVhdGlvbiA9IHRyaWdnZXJfb25fZmlsZV9jcmVhdGlvbjtcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4udXBkYXRlX3RyaWdnZXJfZmlsZV9vbl9jcmVhdGlvbigpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRkZXNjID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGRlc2MuYXBwZW5kKFxuXHRcdFx0XCJBbGxvd3MgeW91IHRvIGNyZWF0ZSB1c2VyIGZ1bmN0aW9ucyBsaW5rZWQgdG8gc3lzdGVtIGNvbW1hbmRzLlwiLFxuXHRcdFx0ZGVzYy5jcmVhdGVFbChcImJyXCIpLFxuXHRcdFx0ZGVzYy5jcmVhdGVFbChcImJcIiwge1xuXHRcdFx0XHR0ZXh0OiBcIldhcm5pbmc6IFwiXG5cdFx0XHR9KSxcblx0XHRcdFwiSXQgY2FuIGJlIGRhbmdlcm91cyB0byBleGVjdXRlIGFyYml0cmFyeSBzeXN0ZW0gY29tbWFuZHMgZnJvbSB1bnRydXN0ZWQgc291cmNlcy4gT25seSBydW4gc3lzdGVtIGNvbW1hbmRzIHRoYXQgeW91IHVuZGVyc3RhbmQsIGZyb20gdHJ1c3RlZCBzb3VyY2VzLlwiLFxuXHRcdCk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKFwiRW5hYmxlIFN5c3RlbSBDb21tYW5kc1wiKVxuXHRcdFx0LnNldERlc2MoZGVzYylcblx0XHRcdC5hZGRUb2dnbGUodG9nZ2xlID0+IHtcblx0XHRcdFx0dG9nZ2xlXG5cdFx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmVuYWJsZV9zeXN0ZW1fY29tbWFuZHMpXG5cdFx0XHRcdFx0Lm9uQ2hhbmdlKGVuYWJsZV9zeXN0ZW1fY29tbWFuZHMgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlX3N5c3RlbV9jb21tYW5kcyA9IGVuYWJsZV9zeXN0ZW1fY29tbWFuZHM7XG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdC8vIEZvcmNlIHJlZnJlc2hcblx0XHRcdFx0XHRcdHRoaXMuZGlzcGxheSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlX3N5c3RlbV9jb21tYW5kcykge1x0XG5cdFx0XHRsZXQgaSA9IDE7XG5cdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGF0ZXNfcGFpcnMuZm9yRWFjaCgodGVtcGxhdGVfcGFpcikgPT4ge1xuXHRcdFx0XHRsZXQgZGl2ID0gY29udGFpbmVyRWwuY3JlYXRlRWwoJ2RpdicpO1xuXHRcdFx0XHRkaXYuYWRkQ2xhc3MoXCJ0ZW1wbGF0ZXJfZGl2XCIpO1xuXG5cdFx0XHRcdGxldCB0aXRsZSA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoNCcsIHtcblx0XHRcdFx0XHR0ZXh0OiAnVXNlciBGdW5jdGlvbiBuwrAnICsgaSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpdGxlLmFkZENsYXNzKFwidGVtcGxhdGVyX3RpdGxlXCIpO1xuXG5cdFx0XHRcdGxldCBzZXR0aW5nID0gbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHRcdFx0LmFkZEV4dHJhQnV0dG9uKGV4dHJhID0+IHtcblx0XHRcdFx0XHRcdGV4dHJhLnNldEljb24oXCJjcm9zc1wiKVxuXHRcdFx0XHRcdFx0XHQuc2V0VG9vbHRpcChcIkRlbGV0ZVwiKVxuXHRcdFx0XHRcdFx0XHQub25DbGljaygoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVzX3BhaXJzLmluZGV4T2YodGVtcGxhdGVfcGFpcik7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsYXRlc19wYWlycy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRm9yY2UgcmVmcmVzaFxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmRpc3BsYXkoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYWRkVGV4dCh0ZXh0ID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHQgPSB0ZXh0LnNldFBsYWNlaG9sZGVyKCdGdW5jdGlvbiBuYW1lJylcblx0XHRcdFx0XHRcdFx0LnNldFZhbHVlKHRlbXBsYXRlX3BhaXJbMF0pXG5cdFx0XHRcdFx0XHRcdC5vbkNoYW5nZSgobmV3X3ZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVzX3BhaXJzLmluZGV4T2YodGVtcGxhdGVfcGFpcik7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsYXRlc19wYWlyc1tpbmRleF1bMF0gPSBuZXdfdmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR0LmlucHV0RWwuYWRkQ2xhc3MoXCJ0ZW1wbGF0ZXJfdGVtcGxhdGVcIik7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5hZGRUZXh0QXJlYSh0ZXh0ID0+IHtcblx0XHRcdFx0XHRcdGxldCB0ID0gdGV4dC5zZXRQbGFjZWhvbGRlcignU3lzdGVtIENvbW1hbmQnKVxuXHRcdFx0XHRcdFx0LnNldFZhbHVlKHRlbXBsYXRlX3BhaXJbMV0pXG5cdFx0XHRcdFx0XHQub25DaGFuZ2UoKG5ld19jbWQpID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVzX3BhaXJzLmluZGV4T2YodGVtcGxhdGVfcGFpcik7XG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVzX3BhaXJzW2luZGV4XVsxXSA9IG5ld19jbWQ7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHR0LmlucHV0RWwuc2V0QXR0cihcInJvd3NcIiwgNCk7XG5cdFx0XHRcdFx0XHR0LmlucHV0RWwuYWRkQ2xhc3MoXCJ0ZW1wbGF0ZXJfY21kXCIpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcblxuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXHRcdFx0XHRkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwubGFzdENoaWxkKTtcblxuXHRcdFx0XHRpKz0xO1xuXHRcdFx0fSk7XG5cblx0XHRcdGxldCBkaXYgPSBjb250YWluZXJFbC5jcmVhdGVFbCgnZGl2Jyk7XG5cdFx0XHRkaXYuYWRkQ2xhc3MoXCJ0ZW1wbGF0ZXJfZGl2MlwiKTtcblxuXHRcdFx0bGV0IHNldHRpbmcgPSBuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdFx0LmFkZEJ1dHRvbihidXR0b24gPT4ge1xuXHRcdFx0XHRcdGxldCBiID0gYnV0dG9uLnNldEJ1dHRvblRleHQoXCJBZGQgTmV3IFVzZXIgRnVuY3Rpb25cIikub25DbGljaygoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGF0ZXNfcGFpcnMucHVzaChbXCJcIiwgXCJcIl0pO1xuXHRcdFx0XHRcdFx0Ly8gRm9yY2UgcmVmcmVzaFxuXHRcdFx0XHRcdFx0dGhpcy5kaXNwbGF5KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Yi5idXR0b25FbC5hZGRDbGFzcyhcInRlbXBsYXRlcl9idXR0b25cIik7XG5cblx0XHRcdFx0XHRyZXR1cm4gYjtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXR0aW5nLmluZm9FbC5yZW1vdmUoKTtcblxuXHRcdFx0ZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsLmxhc3RDaGlsZCk7XG5cdFx0fVx0XG5cdH1cbn0iLCJpbXBvcnQgeyBBcHAsIG5vcm1hbGl6ZVBhdGgsIFRBYnN0cmFjdEZpbGUsIFRGaWxlLCBURm9sZGVyLCBWYXVsdCB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXM6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRURmlsZXNGcm9tRm9sZGVyKGFwcDogQXBwLCBmb2xkZXJfc3RyOiBzdHJpbmcpOiBBcnJheTxURmlsZT4ge1xuICAgIGZvbGRlcl9zdHIgPSBub3JtYWxpemVQYXRoKGZvbGRlcl9zdHIpO1xuXG4gICAgbGV0IGZvbGRlciA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyX3N0cik7XG4gICAgaWYgKCFmb2xkZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2ZvbGRlcl9zdHJ9IGZvbGRlciBkb2Vzbid0IGV4aXN0YCk7XG4gICAgfVxuICAgIGlmICghKGZvbGRlciBpbnN0YW5jZW9mIFRGb2xkZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtmb2xkZXJfc3RyfSBpcyBhIGZpbGUsIG5vdCBhIGZvbGRlcmApO1xuICAgIH1cblxuICAgIGxldCBmaWxlczogQXJyYXk8VEZpbGU+ID0gW107XG4gICAgVmF1bHQucmVjdXJzZUNoaWxkcmVuKGZvbGRlciwgKGZpbGU6IFRBYnN0cmFjdEZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYS5iYXNlbmFtZS5sb2NhbGVDb21wYXJlKGIuYmFzZW5hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVzO1xufSIsImltcG9ydCB7IEFwcCwgRnV6enlTdWdnZXN0TW9kYWwsIFRGaWxlLCBURm9sZGVyLCBub3JtYWxpemVQYXRoLCBWYXVsdCwgVEFic3RyYWN0RmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgZ2V0VEZpbGVzRnJvbUZvbGRlciB9IGZyb20gXCJVdGlsc1wiO1xuaW1wb3J0IFRlbXBsYXRlclBsdWdpbiBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgZW51bSBPcGVuTW9kZSB7XG4gICAgSW5zZXJ0VGVtcGxhdGUsXG4gICAgQ3JlYXRlTm90ZVRlbXBsYXRlLFxufTtcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlckZ1enp5U3VnZ2VzdE1vZGFsIGV4dGVuZHMgRnV6enlTdWdnZXN0TW9kYWw8VEZpbGU+IHtcbiAgICBwdWJsaWMgYXBwOiBBcHA7XG4gICAgcHJpdmF0ZSBwbHVnaW46IFRlbXBsYXRlclBsdWdpbjtcbiAgICBwcml2YXRlIG9wZW5fbW9kZTogT3Blbk1vZGU7XG4gICAgcHJpdmF0ZSBjcmVhdGlvbl9mb2xkZXI6IFRGb2xkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUZW1wbGF0ZXJQbHVnaW4pIHtcbiAgICAgICAgc3VwZXIoYXBwKTtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IFRGaWxlW10ge1xuICAgICAgICBsZXQgdGVtcGxhdGVfZmlsZXM6IFRGaWxlW10gPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVfZm9sZGVyID09PSBcIlwiKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZV9maWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBsYXRlX2ZpbGVzID0gZ2V0VEZpbGVzRnJvbUZvbGRlcih0aGlzLmFwcCwgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVfZm9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGVfZmlsZXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbVRleHQoaXRlbTogVEZpbGUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaXRlbS5iYXNlbmFtZTtcbiAgICB9XG5cbiAgICBvbkNob29zZUl0ZW0oaXRlbTogVEZpbGUsIF9ldnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm9wZW5fbW9kZSkge1xuICAgICAgICAgICAgY2FzZSBPcGVuTW9kZS5JbnNlcnRUZW1wbGF0ZTpcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5wYXJzZXIucmVwbGFjZV90ZW1wbGF0ZXNfYW5kX2FwcGVuZChpdGVtKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT3Blbk1vZGUuQ3JlYXRlTm90ZVRlbXBsYXRlOlxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnBhcnNlci5jcmVhdGVfbmV3X25vdGVfZnJvbV90ZW1wbGF0ZShpdGVtLCB0aGlzLmNyZWF0aW9uX2ZvbGRlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBmaWxlcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgb25lIGZpbGUgaW4gdGhlIHRlbXBsYXRlcyBkaXJlY3RvcnksIHdlIGRvbid0IG9wZW4gdGhlIG1vZGFsXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNob29zZUl0ZW0oZmlsZXNbMF0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZ19lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnNlcnRfdGVtcGxhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3Blbl9tb2RlID0gT3Blbk1vZGUuSW5zZXJ0VGVtcGxhdGU7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVfbmV3X25vdGVfZnJvbV90ZW1wbGF0ZShmb2xkZXI/OiBURm9sZGVyKSB7XG4gICAgICAgIHRoaXMuY3JlYXRpb25fZm9sZGVyID0gZm9sZGVyO1xuICAgICAgICB0aGlzLm9wZW5fbW9kZSA9IE9wZW5Nb2RlLkNyZWF0ZU5vdGVUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xuXG5mdW5jdGlvbiBzZXRQcm90b3R5cGVPZihvYmosIHByb3RvKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2Yob2JqLCBwcm90byk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBvYmouX19wcm90b19fID0gcHJvdG87XHJcbiAgICB9XHJcbn1cclxuLy8gVGhpcyBpcyBwcmV0dHkgbXVjaCB0aGUgb25seSB3YXkgdG8gZ2V0IG5pY2UsIGV4dGVuZGVkIEVycm9yc1xyXG4vLyB3aXRob3V0IHVzaW5nIEVTNlxyXG4vKipcclxuICogVGhpcyByZXR1cm5zIGEgbmV3IEVycm9yIHdpdGggYSBjdXN0b20gcHJvdG90eXBlLiBOb3RlIHRoYXQgaXQncyBfbm90XyBhIGNvbnN0cnVjdG9yXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdlIEVycm9yIG1lc3NhZ2VcclxuICpcclxuICogKipFeGFtcGxlKipcclxuICpcclxuICogYGBganNcclxuICogdGhyb3cgRXRhRXJyKFwidGVtcGxhdGUgbm90IGZvdW5kXCIpXHJcbiAqIGBgYFxyXG4gKi9cclxuZnVuY3Rpb24gRXRhRXJyKG1lc3NhZ2UpIHtcclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICBzZXRQcm90b3R5cGVPZihlcnIsIEV0YUVyci5wcm90b3R5cGUpO1xyXG4gICAgcmV0dXJuIGVycjtcclxufVxyXG5FdGFFcnIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUsIHtcclxuICAgIG5hbWU6IHsgdmFsdWU6ICdFdGEgRXJyb3InLCBlbnVtZXJhYmxlOiBmYWxzZSB9XHJcbn0pO1xyXG4vKipcclxuICogVGhyb3dzIGFuIEV0YUVyciB3aXRoIGEgbmljZWx5IGZvcm1hdHRlZCBlcnJvciBhbmQgbWVzc2FnZSBzaG93aW5nIHdoZXJlIGluIHRoZSB0ZW1wbGF0ZSB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBQYXJzZUVycihtZXNzYWdlLCBzdHIsIGluZHgpIHtcclxuICAgIHZhciB3aGl0ZXNwYWNlID0gc3RyLnNsaWNlKDAsIGluZHgpLnNwbGl0KC9cXG4vKTtcclxuICAgIHZhciBsaW5lTm8gPSB3aGl0ZXNwYWNlLmxlbmd0aDtcclxuICAgIHZhciBjb2xObyA9IHdoaXRlc3BhY2VbbGluZU5vIC0gMV0ubGVuZ3RoICsgMTtcclxuICAgIG1lc3NhZ2UgKz1cclxuICAgICAgICAnIGF0IGxpbmUgJyArXHJcbiAgICAgICAgICAgIGxpbmVObyArXHJcbiAgICAgICAgICAgICcgY29sICcgK1xyXG4gICAgICAgICAgICBjb2xObyArXHJcbiAgICAgICAgICAgICc6XFxuXFxuJyArXHJcbiAgICAgICAgICAgICcgICcgK1xyXG4gICAgICAgICAgICBzdHIuc3BsaXQoL1xcbi8pW2xpbmVObyAtIDFdICtcclxuICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAnICAnICtcclxuICAgICAgICAgICAgQXJyYXkoY29sTm8pLmpvaW4oJyAnKSArXHJcbiAgICAgICAgICAgICdeJztcclxuICAgIHRocm93IEV0YUVycihtZXNzYWdlKTtcclxufVxuXG4vKipcclxuICogQHJldHVybnMgVGhlIGdsb2JhbCBQcm9taXNlIGZ1bmN0aW9uXHJcbiAqL1xyXG52YXIgcHJvbWlzZUltcGwgPSBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKS5Qcm9taXNlO1xyXG4vKipcclxuICogQHJldHVybnMgQSBuZXcgQXN5bmNGdW5jdGlvbiBjb25zdHVjdG9yXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBc3luY0Z1bmN0aW9uQ29uc3RydWN0b3IoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ3JldHVybiAoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvcicpKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXRhRXJyKFwiVGhpcyBlbnZpcm9ubWVudCBkb2Vzbid0IHN1cHBvcnQgYXN5bmMvYXdhaXRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogc3RyLnRyaW1MZWZ0IHBvbHlmaWxsXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHIgLSBJbnB1dCBzdHJpbmdcclxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIGxlZnQgd2hpdGVzcGFjZSByZW1vdmVkXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmltTGVmdChzdHIpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcclxuICAgIGlmICghIVN0cmluZy5wcm90b3R5cGUudHJpbUxlZnQpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnRyaW1MZWZ0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgJycpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBzdHIudHJpbVJpZ2h0IHBvbHlmaWxsXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHIgLSBJbnB1dCBzdHJpbmdcclxuICogQHJldHVybnMgVGhlIHN0cmluZyB3aXRoIHJpZ2h0IHdoaXRlc3BhY2UgcmVtb3ZlZFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gdHJpbVJpZ2h0KHN0cikge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLWJvb2xlYW4tY2FzdFxyXG4gICAgaWYgKCEhU3RyaW5nLnByb3RvdHlwZS50cmltUmlnaHQpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnRyaW1SaWdodCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrJC8sICcnKTsgLy8gVE9ETzogZG8gd2UgcmVhbGx5IG5lZWQgdG8gcmVwbGFjZSBCT00ncz9cclxuICAgIH1cclxufVxuXG4vLyBUT0RPOiBhbGxvdyAnLScgdG8gdHJpbSB1cCB1bnRpbCBuZXdsaW5lLiBVc2UgW15cXFNcXG5cXHJdIGluc3RlYWQgb2YgXFxzXHJcbi8qIEVORCBUWVBFUyAqL1xyXG5mdW5jdGlvbiBoYXNPd25Qcm9wKG9iaiwgcHJvcCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xyXG59XHJcbmZ1bmN0aW9uIGNvcHlQcm9wcyh0b09iaiwgZnJvbU9iaikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIGZyb21PYmopIHtcclxuICAgICAgICBpZiAoaGFzT3duUHJvcChmcm9tT2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHRvT2JqW2tleV0gPSBmcm9tT2JqW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvT2JqO1xyXG59XHJcbi8qKlxyXG4gKiBUYWtlcyBhIHN0cmluZyB3aXRoaW4gYSB0ZW1wbGF0ZSBhbmQgdHJpbXMgaXQsIGJhc2VkIG9uIHRoZSBwcmVjZWRpbmcgdGFnJ3Mgd2hpdGVzcGFjZSBjb250cm9sIGFuZCBgY29uZmlnLmF1dG9UcmltYFxyXG4gKi9cclxuZnVuY3Rpb24gdHJpbVdTKHN0ciwgY29uZmlnLCB3c0xlZnQsIHdzUmlnaHQpIHtcclxuICAgIHZhciBsZWZ0VHJpbTtcclxuICAgIHZhciByaWdodFRyaW07XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcuYXV0b1RyaW0pKSB7XHJcbiAgICAgICAgLy8ga2luZGEgY29uZnVzaW5nXHJcbiAgICAgICAgLy8gYnV0IF99fSB3aWxsIHRyaW0gdGhlIGxlZnQgc2lkZSBvZiB0aGUgZm9sbG93aW5nIHN0cmluZ1xyXG4gICAgICAgIGxlZnRUcmltID0gY29uZmlnLmF1dG9UcmltWzFdO1xyXG4gICAgICAgIHJpZ2h0VHJpbSA9IGNvbmZpZy5hdXRvVHJpbVswXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxlZnRUcmltID0gcmlnaHRUcmltID0gY29uZmlnLmF1dG9UcmltO1xyXG4gICAgfVxyXG4gICAgaWYgKHdzTGVmdCB8fCB3c0xlZnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgbGVmdFRyaW0gPSB3c0xlZnQ7XHJcbiAgICB9XHJcbiAgICBpZiAod3NSaWdodCB8fCB3c1JpZ2h0ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJpZ2h0VHJpbSA9IHdzUmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJpZ2h0VHJpbSAmJiAhbGVmdFRyaW0pIHtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgaWYgKGxlZnRUcmltID09PSAnc2x1cnAnICYmIHJpZ2h0VHJpbSA9PT0gJ3NsdXJwJykge1xyXG4gICAgICAgIHJldHVybiBzdHIudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxlZnRUcmltID09PSAnXycgfHwgbGVmdFRyaW0gPT09ICdzbHVycCcpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndHJpbW1pbmcgbGVmdCcgKyBsZWZ0VHJpbSlcclxuICAgICAgICAvLyBmdWxsIHNsdXJwXHJcbiAgICAgICAgc3RyID0gdHJpbUxlZnQoc3RyKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxlZnRUcmltID09PSAnLScgfHwgbGVmdFRyaW0gPT09ICdubCcpIHtcclxuICAgICAgICAvLyBubCB0cmltXHJcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL14oPzpcXHJcXG58XFxufFxccikvLCAnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAocmlnaHRUcmltID09PSAnXycgfHwgcmlnaHRUcmltID09PSAnc2x1cnAnKSB7XHJcbiAgICAgICAgLy8gZnVsbCBzbHVycFxyXG4gICAgICAgIHN0ciA9IHRyaW1SaWdodChzdHIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmlnaHRUcmltID09PSAnLScgfHwgcmlnaHRUcmltID09PSAnbmwnKSB7XHJcbiAgICAgICAgLy8gbmwgdHJpbVxyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oPzpcXHJcXG58XFxufFxccikkLywgJycpOyAvLyBUT0RPOiBtYWtlIHN1cmUgdGhpcyBnZXRzIFxcclxcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cjtcclxufVxyXG4vKipcclxuICogQSBtYXAgb2Ygc3BlY2lhbCBIVE1MIGNoYXJhY3RlcnMgdG8gdGhlaXIgWE1MLWVzY2FwZWQgZXF1aXZhbGVudHNcclxuICovXHJcbnZhciBlc2NNYXAgPSB7XHJcbiAgICAnJic6ICcmYW1wOycsXHJcbiAgICAnPCc6ICcmbHQ7JyxcclxuICAgICc+JzogJyZndDsnLFxyXG4gICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICBcIidcIjogJyYjMzk7J1xyXG59O1xyXG5mdW5jdGlvbiByZXBsYWNlQ2hhcihzKSB7XHJcbiAgICByZXR1cm4gZXNjTWFwW3NdO1xyXG59XHJcbi8qKlxyXG4gKiBYTUwtZXNjYXBlcyBhbiBpbnB1dCB2YWx1ZSBhZnRlciBjb252ZXJ0aW5nIGl0IHRvIGEgc3RyaW5nXHJcbiAqXHJcbiAqIEBwYXJhbSBzdHIgLSBJbnB1dCB2YWx1ZSAodXN1YWxseSBhIHN0cmluZylcclxuICogQHJldHVybnMgWE1MLWVzY2FwZWQgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBYTUxFc2NhcGUoc3RyKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIC8vIFRvIGRlYWwgd2l0aCBYU1MuIEJhc2VkIG9uIEVzY2FwZSBpbXBsZW1lbnRhdGlvbnMgb2YgTXVzdGFjaGUuSlMgYW5kIE1hcmtvLCB0aGVuIGN1c3RvbWl6ZWQuXHJcbiAgICB2YXIgbmV3U3RyID0gU3RyaW5nKHN0cik7XHJcbiAgICBpZiAoL1smPD5cIiddLy50ZXN0KG5ld1N0cikpIHtcclxuICAgICAgICByZXR1cm4gbmV3U3RyLnJlcGxhY2UoL1smPD5cIiddL2csIHJlcGxhY2VDaGFyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXdTdHI7XHJcbiAgICB9XHJcbn1cblxuLyogRU5EIFRZUEVTICovXHJcbnZhciB0ZW1wbGF0ZUxpdFJlZyA9IC9gKD86XFxcXFtcXHNcXFNdfFxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkqfXwoPyFcXCR7KVteXFxcXGBdKSpgL2c7XHJcbnZhciBzaW5nbGVRdW90ZVJlZyA9IC8nKD86XFxcXFtcXHNcXHdcIidcXFxcYF18W15cXG5cXHInXFxcXF0pKj8nL2c7XHJcbnZhciBkb3VibGVRdW90ZVJlZyA9IC9cIig/OlxcXFxbXFxzXFx3XCInXFxcXGBdfFteXFxuXFxyXCJcXFxcXSkqP1wiL2c7XHJcbi8qKiBFc2NhcGUgc3BlY2lhbCByZWd1bGFyIGV4cHJlc3Npb24gY2hhcmFjdGVycyBpbnNpZGUgYSBzdHJpbmcgKi9cclxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykge1xyXG4gICAgLy8gRnJvbSBNRE5cclxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qK1xcLT9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXHJcbn1cclxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBjb25maWcpIHtcclxuICAgIHZhciBidWZmZXIgPSBbXTtcclxuICAgIHZhciB0cmltTGVmdE9mTmV4dFN0ciA9IGZhbHNlO1xyXG4gICAgdmFyIGxhc3RJbmRleCA9IDA7XHJcbiAgICB2YXIgcGFyc2VPcHRpb25zID0gY29uZmlnLnBhcnNlO1xyXG4gICAgaWYgKGNvbmZpZy5wbHVnaW5zKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcucGx1Z2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGx1Z2luID0gY29uZmlnLnBsdWdpbnNbaV07XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW4ucHJvY2Vzc1RlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBwbHVnaW4ucHJvY2Vzc1RlbXBsYXRlKHN0ciwgY29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qIEFkZGluZyBmb3IgRUpTIGNvbXBhdGliaWxpdHkgKi9cclxuICAgIGlmIChjb25maWcucm1XaGl0ZXNwYWNlKSB7XHJcbiAgICAgICAgLy8gQ29kZSB0YWtlbiBkaXJlY3RseSBmcm9tIEVKU1xyXG4gICAgICAgIC8vIEhhdmUgdG8gdXNlIHR3byBzZXBhcmF0ZSByZXBsYWNlcyBoZXJlIGFzIGBeYCBhbmQgYCRgIG9wZXJhdG9ycyBkb24ndFxyXG4gICAgICAgIC8vIHdvcmsgd2VsbCB3aXRoIGBcXHJgIGFuZCBlbXB0eSBsaW5lcyBkb24ndCB3b3JrIHdlbGwgd2l0aCB0aGUgYG1gIGZsYWcuXHJcbiAgICAgICAgLy8gRXNzZW50aWFsbHksIHRoaXMgcmVwbGFjZXMgdGhlIHdoaXRlc3BhY2UgYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mXHJcbiAgICAgICAgLy8gZWFjaCBsaW5lIGFuZCByZW1vdmVzIG11bHRpcGxlIG5ld2xpbmVzLlxyXG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9bXFxyXFxuXSsvZywgJ1xcbicpLnJlcGxhY2UoL15cXHMrfFxccyskL2dtLCAnJyk7XHJcbiAgICB9XHJcbiAgICAvKiBFbmQgcm1XaGl0ZXNwYWNlIG9wdGlvbiAqL1xyXG4gICAgdGVtcGxhdGVMaXRSZWcubGFzdEluZGV4ID0gMDtcclxuICAgIHNpbmdsZVF1b3RlUmVnLmxhc3RJbmRleCA9IDA7XHJcbiAgICBkb3VibGVRdW90ZVJlZy5sYXN0SW5kZXggPSAwO1xyXG4gICAgZnVuY3Rpb24gcHVzaFN0cmluZyhzdHJuZywgc2hvdWxkVHJpbVJpZ2h0T2ZTdHJpbmcpIHtcclxuICAgICAgICBpZiAoc3RybmcpIHtcclxuICAgICAgICAgICAgLy8gaWYgc3RyaW5nIGlzIHRydXRoeSBpdCBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZydcclxuICAgICAgICAgICAgc3RybmcgPSB0cmltV1Moc3RybmcsIGNvbmZpZywgdHJpbUxlZnRPZk5leHRTdHIsIC8vIHRoaXMgd2lsbCBvbmx5IGJlIGZhbHNlIG9uIHRoZSBmaXJzdCBzdHIsIHRoZSBuZXh0IG9uZXMgd2lsbCBiZSBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgICAgICAgICBzaG91bGRUcmltUmlnaHRPZlN0cmluZyk7XHJcbiAgICAgICAgICAgIGlmIChzdHJuZykge1xyXG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBcXCB3aXRoIFxcXFwsICcgd2l0aCBcXCdcclxuICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGdvaW5nIHRvIGNvbnZlcnQgYWxsIENSTEYgdG8gTEYgc28gaXQgZG9lc24ndCB0YWtlIG1vcmUgdGhhbiBvbmUgcmVwbGFjZVxyXG4gICAgICAgICAgICAgICAgc3RybmcgPSBzdHJuZy5yZXBsYWNlKC9cXFxcfCcvZywgJ1xcXFwkJicpLnJlcGxhY2UoL1xcclxcbnxcXG58XFxyL2csICdcXFxcbicpO1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goc3RybmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByZWZpeGVzID0gW3BhcnNlT3B0aW9ucy5leGVjLCBwYXJzZU9wdGlvbnMuaW50ZXJwb2xhdGUsIHBhcnNlT3B0aW9ucy5yYXddLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIHByZWZpeCkge1xyXG4gICAgICAgIGlmIChhY2N1bXVsYXRvciAmJiBwcmVmaXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgJ3wnICsgZXNjYXBlUmVnRXhwKHByZWZpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHByZWZpeCkge1xyXG4gICAgICAgICAgICAvLyBhY2N1bXVsYXRvciBpcyBmYWxzeVxyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlUmVnRXhwKHByZWZpeCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBwcmVmaXggYW5kIGFjY3VtdWxhdG9yIGFyZSBib3RoIGZhbHN5XHJcbiAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcclxuICAgICAgICB9XHJcbiAgICB9LCAnJyk7XHJcbiAgICB2YXIgcGFyc2VPcGVuUmVnID0gbmV3IFJlZ0V4cCgnKFteXSo/KScgKyBlc2NhcGVSZWdFeHAoY29uZmlnLnRhZ3NbMF0pICsgJygtfF8pP1xcXFxzKignICsgcHJlZml4ZXMgKyAnKT9cXFxccyonLCAnZycpO1xyXG4gICAgdmFyIHBhcnNlQ2xvc2VSZWcgPSBuZXcgUmVnRXhwKCdcXCd8XCJ8YHxcXFxcL1xcXFwqfChcXFxccyooLXxfKT8nICsgZXNjYXBlUmVnRXhwKGNvbmZpZy50YWdzWzFdKSArICcpJywgJ2cnKTtcclxuICAgIC8vIFRPRE86IGJlbmNobWFyayBoYXZpbmcgdGhlIFxccyogb24gZWl0aGVyIHNpZGUgdnMgdXNpbmcgc3RyLnRyaW0oKVxyXG4gICAgdmFyIG07XHJcbiAgICB3aGlsZSAoKG0gPSBwYXJzZU9wZW5SZWcuZXhlYyhzdHIpKSkge1xyXG4gICAgICAgIGxhc3RJbmRleCA9IG1bMF0ubGVuZ3RoICsgbS5pbmRleDtcclxuICAgICAgICB2YXIgcHJlY2VkaW5nU3RyaW5nID0gbVsxXTtcclxuICAgICAgICB2YXIgd3NMZWZ0ID0gbVsyXTtcclxuICAgICAgICB2YXIgcHJlZml4ID0gbVszXSB8fCAnJzsgLy8gYnkgZGVmYXVsdCBlaXRoZXIgfiwgPSwgb3IgZW1wdHlcclxuICAgICAgICBwdXNoU3RyaW5nKHByZWNlZGluZ1N0cmluZywgd3NMZWZ0KTtcclxuICAgICAgICBwYXJzZUNsb3NlUmVnLmxhc3RJbmRleCA9IGxhc3RJbmRleDtcclxuICAgICAgICB2YXIgY2xvc2VUYWcgPSB2b2lkIDA7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRPYmogPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAoKGNsb3NlVGFnID0gcGFyc2VDbG9zZVJlZy5leGVjKHN0cikpKSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9zZVRhZ1sxXSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBzdHIuc2xpY2UobGFzdEluZGV4LCBjbG9zZVRhZy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICBwYXJzZU9wZW5SZWcubGFzdEluZGV4ID0gbGFzdEluZGV4ID0gcGFyc2VDbG9zZVJlZy5sYXN0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0cmltTGVmdE9mTmV4dFN0ciA9IGNsb3NlVGFnWzJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUeXBlID0gcHJlZml4ID09PSBwYXJzZU9wdGlvbnMuZXhlY1xyXG4gICAgICAgICAgICAgICAgICAgID8gJ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBwcmVmaXggPT09IHBhcnNlT3B0aW9ucy5yYXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAncidcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwcmVmaXggPT09IHBhcnNlT3B0aW9ucy5pbnRlcnBvbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T2JqID0geyB0OiBjdXJyZW50VHlwZSwgdmFsOiBjb250ZW50IH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFyID0gY2xvc2VUYWdbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8qJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21tZW50Q2xvc2VJbmQgPSBzdHIuaW5kZXhPZignKi8nLCBwYXJzZUNsb3NlUmVnLmxhc3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRDbG9zZUluZCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFyc2VFcnIoJ3VuY2xvc2VkIGNvbW1lbnQnLCBzdHIsIGNsb3NlVGFnLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VDbG9zZVJlZy5sYXN0SW5kZXggPSBjb21tZW50Q2xvc2VJbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSBcIidcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZVF1b3RlUmVnLmxhc3RJbmRleCA9IGNsb3NlVGFnLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzaW5nbGVRdW90ZU1hdGNoID0gc2luZ2xlUXVvdGVSZWcuZXhlYyhzdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaW5nbGVRdW90ZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlQ2xvc2VSZWcubGFzdEluZGV4ID0gc2luZ2xlUXVvdGVSZWcubGFzdEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFyc2VFcnIoJ3VuY2xvc2VkIHN0cmluZycsIHN0ciwgY2xvc2VUYWcuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICdcIicpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb3VibGVRdW90ZVJlZy5sYXN0SW5kZXggPSBjbG9zZVRhZy5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG91YmxlUXVvdGVNYXRjaCA9IGRvdWJsZVF1b3RlUmVnLmV4ZWMoc3RyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlUXVvdGVNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUNsb3NlUmVnLmxhc3RJbmRleCA9IGRvdWJsZVF1b3RlUmVnLmxhc3RJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcnNlRXJyKCd1bmNsb3NlZCBzdHJpbmcnLCBzdHIsIGNsb3NlVGFnLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnYCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUxpdFJlZy5sYXN0SW5kZXggPSBjbG9zZVRhZy5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVMaXRNYXRjaCA9IHRlbXBsYXRlTGl0UmVnLmV4ZWMoc3RyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVMaXRNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUNsb3NlUmVnLmxhc3RJbmRleCA9IHRlbXBsYXRlTGl0UmVnLmxhc3RJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcnNlRXJyKCd1bmNsb3NlZCBzdHJpbmcnLCBzdHIsIGNsb3NlVGFnLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRPYmopIHtcclxuICAgICAgICAgICAgYnVmZmVyLnB1c2goY3VycmVudE9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBQYXJzZUVycigndW5jbG9zZWQgdGFnJywgc3RyLCBtLmluZGV4ICsgcHJlY2VkaW5nU3RyaW5nLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVzaFN0cmluZyhzdHIuc2xpY2UobGFzdEluZGV4LCBzdHIubGVuZ3RoKSwgZmFsc2UpO1xyXG4gICAgaWYgKGNvbmZpZy5wbHVnaW5zKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcucGx1Z2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGx1Z2luID0gY29uZmlnLnBsdWdpbnNbaV07XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW4ucHJvY2Vzc0FTVCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyID0gcGx1Z2luLnByb2Nlc3NBU1QoYnVmZmVyLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1ZmZlcjtcclxufVxuXG4vKiBFTkQgVFlQRVMgKi9cclxuLyoqXHJcbiAqIENvbXBpbGVzIGEgdGVtcGxhdGUgc3RyaW5nIHRvIGEgZnVuY3Rpb24gc3RyaW5nLiBNb3N0IG9mdGVuIHVzZXJzIGp1c3QgdXNlIGBjb21waWxlKClgLCB3aGljaCBjYWxscyBgY29tcGlsZVRvU3RyaW5nYCBhbmQgY3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB1c2luZyB0aGUgcmVzdWx0XHJcbiAqXHJcbiAqICoqRXhhbXBsZSoqXHJcbiAqXHJcbiAqIGBgYGpzXHJcbiAqIGNvbXBpbGVUb1N0cmluZyhcIkhpIDwlPSBpdC51c2VyICU+XCIsIGV0YS5jb25maWcpXHJcbiAqIC8vIFwidmFyIHRSPScnLGluY2x1ZGU9RS5pbmNsdWRlLmJpbmQoRSksaW5jbHVkZUZpbGU9RS5pbmNsdWRlRmlsZS5iaW5kKEUpO3RSKz0nSGkgJzt0Uis9RS5lKGl0LnVzZXIpO2lmKGNiKXtjYihudWxsLHRSKX0gcmV0dXJuIHRSXCJcclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21waWxlVG9TdHJpbmcoc3RyLCBjb25maWcpIHtcclxuICAgIHZhciBidWZmZXIgPSBwYXJzZShzdHIsIGNvbmZpZyk7XHJcbiAgICB2YXIgcmVzID0gXCJ2YXIgdFI9JycsX19sLF9fbFBcIiArXHJcbiAgICAgICAgKGNvbmZpZy5pbmNsdWRlID8gJyxpbmNsdWRlPUUuaW5jbHVkZS5iaW5kKEUpJyA6ICcnKSArXHJcbiAgICAgICAgKGNvbmZpZy5pbmNsdWRlRmlsZSA/ICcsaW5jbHVkZUZpbGU9RS5pbmNsdWRlRmlsZS5iaW5kKEUpJyA6ICcnKSArXHJcbiAgICAgICAgJ1xcbmZ1bmN0aW9uIGxheW91dChwLGQpe19fbD1wO19fbFA9ZH1cXG4nICtcclxuICAgICAgICAoY29uZmlnLmdsb2JhbEF3YWl0ID8gJ2xldCBfcHJzID0gW107XFxuJyA6ICcnKSArXHJcbiAgICAgICAgKGNvbmZpZy51c2VXaXRoID8gJ3dpdGgoJyArIGNvbmZpZy52YXJOYW1lICsgJ3x8e30peycgOiAnJykgK1xyXG4gICAgICAgIGNvbXBpbGVTY29wZShidWZmZXIsIGNvbmZpZykgK1xyXG4gICAgICAgIChjb25maWcuaW5jbHVkZUZpbGVcclxuICAgICAgICAgICAgPyAnaWYoX19sKXRSPScgK1xyXG4gICAgICAgICAgICAgICAgKGNvbmZpZy5hc3luYyA/ICdhd2FpdCAnIDogJycpICtcclxuICAgICAgICAgICAgICAgIChcImluY2x1ZGVGaWxlKF9fbCxPYmplY3QuYXNzaWduKFwiICsgY29uZmlnLnZhck5hbWUgKyBcIix7Ym9keTp0Un0sX19sUCkpXFxuXCIpXHJcbiAgICAgICAgICAgIDogY29uZmlnLmluY2x1ZGVcclxuICAgICAgICAgICAgICAgID8gJ2lmKF9fbCl0Uj0nICtcclxuICAgICAgICAgICAgICAgICAgICAoY29uZmlnLmFzeW5jID8gJ2F3YWl0ICcgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgICAgIChcImluY2x1ZGUoX19sLE9iamVjdC5hc3NpZ24oXCIgKyBjb25maWcudmFyTmFtZSArIFwiLHtib2R5OnRSfSxfX2xQKSlcXG5cIilcclxuICAgICAgICAgICAgICAgIDogJycpICtcclxuICAgICAgICAnaWYoY2Ipe2NiKG51bGwsdFIpfSByZXR1cm4gdFInICtcclxuICAgICAgICAoY29uZmlnLnVzZVdpdGggPyAnfScgOiAnJyk7XHJcbiAgICBpZiAoY29uZmlnLnBsdWdpbnMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwbHVnaW4gPSBjb25maWcucGx1Z2luc1tpXTtcclxuICAgICAgICAgICAgaWYgKHBsdWdpbi5wcm9jZXNzRm5TdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IHBsdWdpbi5wcm9jZXNzRm5TdHJpbmcocmVzLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufVxyXG4vKipcclxuICogTG9vcHMgdGhyb3VnaCB0aGUgQVNUIGdlbmVyYXRlZCBieSBgcGFyc2VgIGFuZCB0cmFuc2Zvcm0gZWFjaCBpdGVtIGludG8gSlMgY2FsbHNcclxuICpcclxuICogKipFeGFtcGxlKipcclxuICpcclxuICogYGBganNcclxuICogLy8gQVNUIHZlcnNpb24gb2YgJ0hpIDwlPSBpdC51c2VyICU+J1xyXG4gKiBsZXQgdGVtcGxhdGVBU1QgPSBbJ0hpICcsIHsgdmFsOiAnaXQudXNlcicsIHQ6ICdpJyB9XVxyXG4gKiBjb21waWxlU2NvcGUodGVtcGxhdGVBU1QsIGV0YS5jb25maWcpXHJcbiAqIC8vIFwidFIrPSdIaSAnO3RSKz1FLmUoaXQudXNlcik7XCJcclxuICogYGBgXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21waWxlU2NvcGUoYnVmZiwgY29uZmlnKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBidWZmTGVuZ3RoID0gYnVmZi5sZW5ndGg7XHJcbiAgICB2YXIgcmV0dXJuU3RyID0gJyc7XHJcbiAgICBpZiAoY29uZmlnLmdsb2JhbEF3YWl0KSB7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1ZmZMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudEJsb2NrID0gYnVmZltpXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50QmxvY2sgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGN1cnJlbnRCbG9jay50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyJyB8fCB0eXBlID09PSAnaScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IGN1cnJlbnRCbG9jay52YWwgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuU3RyICs9IFwiX3Bycy5wdXNoKFwiICsgY29udGVudCArIFwiKTtcXG5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5TdHIgKz0gJ2xldCBfcnN0ID0gYXdhaXQgUHJvbWlzZS5hbGwoX3Bycyk7XFxuJztcclxuICAgIH1cclxuICAgIHZhciBqID0gMDtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBidWZmTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgY3VycmVudEJsb2NrID0gYnVmZltpXTtcclxuICAgICAgICBpZiAodHlwZW9mIGN1cnJlbnRCbG9jayA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdmFyIHN0ciA9IGN1cnJlbnRCbG9jaztcclxuICAgICAgICAgICAgLy8gd2Uga25vdyBzdHJpbmcgZXhpc3RzXHJcbiAgICAgICAgICAgIHJldHVyblN0ciArPSBcInRSKz0nXCIgKyBzdHIgKyBcIidcXG5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gY3VycmVudEJsb2NrLnQ7IC8vIH4sIHMsICEsID8sIHJcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBjdXJyZW50QmxvY2sudmFsIHx8ICcnO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3InKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByYXdcclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZ2xvYmFsQXdhaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gXCJfcnN0W1wiICsgaiArIFwiXVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5maWx0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0gJ0UuZmlsdGVyKCcgKyBjb250ZW50ICsgJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuU3RyICs9ICd0Uis9JyArIGNvbnRlbnQgKyAnXFxuJztcclxuICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnaScpIHtcclxuICAgICAgICAgICAgICAgIC8vIGludGVycG9sYXRlXHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmdsb2JhbEF3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IFwiX3JzdFtcIiArIGogKyBcIl1cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9ICdFLmZpbHRlcignICsgY29udGVudCArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuYXV0b0VzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSAnRS5lKCcgKyBjb250ZW50ICsgJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuU3RyICs9ICd0Uis9JyArIGNvbnRlbnQgKyAnXFxuJztcclxuICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhlY3V0ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuU3RyICs9IGNvbnRlbnQgKyAnXFxuJzsgLy8geW91IG5lZWQgYSBcXG4gaW4gY2FzZSB5b3UgaGF2ZSA8JSB9ICU+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0dXJuU3RyO1xyXG59XG5cbi8qKlxyXG4gKiBIYW5kbGVzIHN0b3JhZ2UgYW5kIGFjY2Vzc2luZyBvZiB2YWx1ZXNcclxuICpcclxuICogSW4gdGhpcyBjYXNlLCB3ZSB1c2UgaXQgdG8gc3RvcmUgY29tcGlsZWQgdGVtcGxhdGUgZnVuY3Rpb25zXHJcbiAqIEluZGV4ZWQgYnkgdGhlaXIgYG5hbWVgIG9yIGBmaWxlbmFtZWBcclxuICovXHJcbnZhciBDYWNoZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYWNoZXIoY2FjaGUpIHtcclxuICAgICAgICB0aGlzLmNhY2hlID0gY2FjaGU7XHJcbiAgICB9XHJcbiAgICBDYWNoZXIucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IHZhbDtcclxuICAgIH07XHJcbiAgICBDYWNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAvLyBzdHJpbmcgfCBhcnJheS5cclxuICAgICAgICAvLyBUT0RPOiBhbGxvdyBhcnJheSBvZiBrZXlzIHRvIGxvb2sgZG93blxyXG4gICAgICAgIC8vIFRPRE86IGNyZWF0ZSBwbHVnaW4gdG8gYWxsb3cgcmVmZXJlbmNpbmcgaGVscGVycywgZmlsdGVycyB3aXRoIGRvdCBub3RhdGlvblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV07XHJcbiAgICB9O1xyXG4gICAgQ2FjaGVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FjaGVba2V5XTtcclxuICAgIH07XHJcbiAgICBDYWNoZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcclxuICAgIH07XHJcbiAgICBDYWNoZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAoY2FjaGVPYmopIHtcclxuICAgICAgICBjb3B5UHJvcHModGhpcy5jYWNoZSwgY2FjaGVPYmopO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDYWNoZXI7XHJcbn0oKSk7XG5cbi8qIEVORCBUWVBFUyAqL1xyXG4vKipcclxuICogRXRhJ3MgdGVtcGxhdGUgc3RvcmFnZVxyXG4gKlxyXG4gKiBTdG9yZXMgcGFydGlhbHMgYW5kIGNhY2hlZCB0ZW1wbGF0ZXNcclxuICovXHJcbnZhciB0ZW1wbGF0ZXMgPSBuZXcgQ2FjaGVyKHt9KTtcblxuLyogRU5EIFRZUEVTICovXHJcbi8qKlxyXG4gKiBJbmNsdWRlIGEgdGVtcGxhdGUgYmFzZWQgb24gaXRzIG5hbWUgKG9yIGZpbGVwYXRoLCBpZiBpdCdzIGFscmVhZHkgYmVlbiBjYWNoZWQpLlxyXG4gKlxyXG4gKiBDYWxsZWQgbGlrZSBgaW5jbHVkZSh0ZW1wbGF0ZU5hbWVPclBhdGgsIGRhdGEpYFxyXG4gKi9cclxuZnVuY3Rpb24gaW5jbHVkZUhlbHBlcih0ZW1wbGF0ZU5hbWVPclBhdGgsIGRhdGEpIHtcclxuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzLmdldCh0ZW1wbGF0ZU5hbWVPclBhdGgpO1xyXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHRocm93IEV0YUVycignQ291bGQgbm90IGZldGNoIHRlbXBsYXRlIFwiJyArIHRlbXBsYXRlTmFtZU9yUGF0aCArICdcIicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlKGRhdGEsIHRoaXMpO1xyXG59XHJcbi8qKiBFdGEncyBiYXNlIChnbG9iYWwpIGNvbmZpZ3VyYXRpb24gKi9cclxudmFyIGNvbmZpZyA9IHtcclxuICAgIGFzeW5jOiBmYWxzZSxcclxuICAgIGF1dG9Fc2NhcGU6IHRydWUsXHJcbiAgICBhdXRvVHJpbTogW2ZhbHNlLCAnbmwnXSxcclxuICAgIGNhY2hlOiBmYWxzZSxcclxuICAgIGU6IFhNTEVzY2FwZSxcclxuICAgIGluY2x1ZGU6IGluY2x1ZGVIZWxwZXIsXHJcbiAgICBwYXJzZToge1xyXG4gICAgICAgIGV4ZWM6ICcnLFxyXG4gICAgICAgIGludGVycG9sYXRlOiAnPScsXHJcbiAgICAgICAgcmF3OiAnfidcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXSxcclxuICAgIHJtV2hpdGVzcGFjZTogZmFsc2UsXHJcbiAgICB0YWdzOiBbJzwlJywgJyU+J10sXHJcbiAgICB0ZW1wbGF0ZXM6IHRlbXBsYXRlcyxcclxuICAgIHVzZVdpdGg6IGZhbHNlLFxyXG4gICAgdmFyTmFtZTogJ2l0J1xyXG59O1xyXG4vKipcclxuICogVGFrZXMgb25lIG9yIHR3byBwYXJ0aWFsIChub3QgbmVjZXNzYXJpbHkgY29tcGxldGUpIGNvbmZpZ3VyYXRpb24gb2JqZWN0cywgbWVyZ2VzIHRoZW0gMSBsYXllciBkZWVwIGludG8gZXRhLmNvbmZpZywgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxyXG4gKlxyXG4gKiBAcGFyYW0gb3ZlcnJpZGUgUGFydGlhbCBjb25maWd1cmF0aW9uIG9iamVjdFxyXG4gKiBAcGFyYW0gYmFzZUNvbmZpZyBQYXJ0aWFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIG1lcmdlIGJlZm9yZSBgb3ZlcnJpZGVgXHJcbiAqXHJcbiAqICoqRXhhbXBsZSoqXHJcbiAqXHJcbiAqIGBgYGpzXHJcbiAqIGxldCBjdXN0b21Db25maWcgPSBnZXRDb25maWcoe3RhZ3M6IFsnISMnLCAnIyEnXX0pXHJcbiAqIGBgYFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29uZmlnKG92ZXJyaWRlLCBiYXNlQ29uZmlnKSB7XHJcbiAgICAvLyBUT0RPOiBydW4gbW9yZSB0ZXN0cyBvbiB0aGlzXHJcbiAgICB2YXIgcmVzID0ge307IC8vIExpbmtlZFxyXG4gICAgY29weVByb3BzKHJlcywgY29uZmlnKTsgLy8gQ3JlYXRlcyBkZWVwIGNsb25lIG9mIGV0YS5jb25maWcsIDEgbGF5ZXIgZGVlcFxyXG4gICAgaWYgKGJhc2VDb25maWcpIHtcclxuICAgICAgICBjb3B5UHJvcHMocmVzLCBiYXNlQ29uZmlnKTtcclxuICAgIH1cclxuICAgIGlmIChvdmVycmlkZSkge1xyXG4gICAgICAgIGNvcHlQcm9wcyhyZXMsIG92ZXJyaWRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuLyoqIFVwZGF0ZSBFdGEncyBiYXNlIGNvbmZpZyAqL1xyXG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIGNvcHlQcm9wcyhjb25maWcsIG9wdGlvbnMpO1xyXG59XG5cbi8qIEVORCBUWVBFUyAqL1xyXG4vKipcclxuICogVGFrZXMgYSB0ZW1wbGF0ZSBzdHJpbmcgYW5kIHJldHVybnMgYSB0ZW1wbGF0ZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWQgd2l0aCAoZGF0YSwgY29uZmlnLCBbY2JdKVxyXG4gKlxyXG4gKiBAcGFyYW0gc3RyIC0gVGhlIHRlbXBsYXRlIHN0cmluZ1xyXG4gKiBAcGFyYW0gY29uZmlnIC0gQSBjdXN0b20gY29uZmlndXJhdGlvbiBvYmplY3QgKG9wdGlvbmFsKVxyXG4gKlxyXG4gKiAqKkV4YW1wbGUqKlxyXG4gKlxyXG4gKiBgYGBqc1xyXG4gKiBsZXQgY29tcGlsZWRGbiA9IGV0YS5jb21waWxlKFwiSGkgPCU9IGl0LnVzZXIgJT5cIilcclxuICogLy8gZnVuY3Rpb24gYW5vbnltb3VzKClcclxuICogbGV0IGNvbXBpbGVkRm5TdHIgPSBjb21waWxlZEZuLnRvU3RyaW5nKClcclxuICogLy8gXCJmdW5jdGlvbiBhbm9ueW1vdXMoaXQsRSxjYlxcbikge1xcbnZhciB0Uj0nJyxpbmNsdWRlPUUuaW5jbHVkZS5iaW5kKEUpLGluY2x1ZGVGaWxlPUUuaW5jbHVkZUZpbGUuYmluZChFKTt0Uis9J0hpICc7dFIrPUUuZShpdC51c2VyKTtpZihjYil7Y2IobnVsbCx0Uil9IHJldHVybiB0Ulxcbn1cIlxyXG4gKiBgYGBcclxuICovXHJcbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBjb25maWcpIHtcclxuICAgIHZhciBvcHRpb25zID0gZ2V0Q29uZmlnKGNvbmZpZyB8fCB7fSk7XHJcbiAgICAvKiBBU1lOQyBIQU5ETElORyAqL1xyXG4gICAgLy8gVGhlIGJlbG93IGNvZGUgaXMgbW9kaWZpZWQgZnJvbSBtZGUvZWpzLiBBbGwgY3JlZGl0IHNob3VsZCBnbyB0byB0aGVtLlxyXG4gICAgdmFyIGN0b3IgPSBvcHRpb25zLmFzeW5jID8gZ2V0QXN5bmNGdW5jdGlvbkNvbnN0cnVjdG9yKCkgOiBGdW5jdGlvbjtcclxuICAgIC8qIEVORCBBU1lOQyBIQU5ETElORyAqL1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gbmV3IGN0b3Iob3B0aW9ucy52YXJOYW1lLCAnRScsIC8vIEV0YUNvbmZpZ1xyXG4gICAgICAgICdjYicsIC8vIG9wdGlvbmFsIGNhbGxiYWNrXHJcbiAgICAgICAgY29tcGlsZVRvU3RyaW5nKHN0ciwgb3B0aW9ucykpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXRhRXJyKCdCYWQgdGVtcGxhdGUgc3ludGF4XFxuXFxuJyArXHJcbiAgICAgICAgICAgICAgICBlLm1lc3NhZ2UgK1xyXG4gICAgICAgICAgICAgICAgJ1xcbicgK1xyXG4gICAgICAgICAgICAgICAgQXJyYXkoZS5tZXNzYWdlLmxlbmd0aCArIDEpLmpvaW4oJz0nKSArXHJcbiAgICAgICAgICAgICAgICAnXFxuJyArXHJcbiAgICAgICAgICAgICAgICBjb21waWxlVG9TdHJpbmcoc3RyLCBvcHRpb25zKSArXHJcbiAgICAgICAgICAgICAgICAnXFxuJyAvLyBUaGlzIHdpbGwgcHV0IGFuIGV4dHJhIG5ld2xpbmUgYmVmb3JlIHRoZSBjYWxsc3RhY2sgZm9yIGV4dHJhIHJlYWRhYmlsaXR5XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG52YXIgX0JPTSA9IC9eXFx1RkVGRi87XHJcbi8qIEVORCBUWVBFUyAqL1xyXG4vKipcclxuICogR2V0IHRoZSBwYXRoIHRvIHRoZSBpbmNsdWRlZCBmaWxlIGZyb20gdGhlIHBhcmVudCBmaWxlIHBhdGggYW5kIHRoZVxyXG4gKiBzcGVjaWZpZWQgcGF0aC5cclxuICpcclxuICogSWYgYG5hbWVgIGRvZXMgbm90IGhhdmUgYW4gZXh0ZW5zaW9uLCBpdCB3aWxsIGRlZmF1bHQgdG8gYC5ldGFgXHJcbiAqXHJcbiAqIEBwYXJhbSBuYW1lIHNwZWNpZmllZCBwYXRoXHJcbiAqIEBwYXJhbSBwYXJlbnRmaWxlIHBhcmVudCBmaWxlIHBhdGhcclxuICogQHBhcmFtIGlzRGlyZWN0b3J5IHdoZXRoZXIgcGFyZW50ZmlsZSBpcyBhIGRpcmVjdG9yeVxyXG4gKiBAcmV0dXJuIGFic29sdXRlIHBhdGggdG8gdGVtcGxhdGVcclxuICovXHJcbmZ1bmN0aW9uIGdldFdob2xlRmlsZVBhdGgobmFtZSwgcGFyZW50ZmlsZSwgaXNEaXJlY3RvcnkpIHtcclxuICAgIHZhciBpbmNsdWRlUGF0aCA9IHBhdGgucmVzb2x2ZShpc0RpcmVjdG9yeSA/IHBhcmVudGZpbGUgOiBwYXRoLmRpcm5hbWUocGFyZW50ZmlsZSksIC8vIHJldHVybnMgZGlyZWN0b3J5IHRoZSBwYXJlbnQgZmlsZSBpcyBpblxyXG4gICAgbmFtZSAvLyBmaWxlXHJcbiAgICApICsgKHBhdGguZXh0bmFtZShuYW1lKSA/ICcnIDogJy5ldGEnKTtcclxuICAgIHJldHVybiBpbmNsdWRlUGF0aDtcclxufVxyXG4vKipcclxuICogR2V0IHRoZSBhYnNvbHV0ZSBwYXRoIHRvIGFuIGluY2x1ZGVkIHRlbXBsYXRlXHJcbiAqXHJcbiAqIElmIHRoaXMgaXMgY2FsbGVkIHdpdGggYW4gYWJzb2x1dGUgcGF0aCAoZm9yIGV4YW1wbGUsIHN0YXJ0aW5nIHdpdGggJy8nIG9yICdDOlxcJylcclxuICogdGhlbiBFdGEgd2lsbCBhdHRlbXB0IHRvIHJlc29sdmUgdGhlIGFic29sdXRlIHBhdGggd2l0aGluIG9wdGlvbnMudmlld3MuIElmIGl0IGNhbm5vdCxcclxuICogRXRhIHdpbGwgZmFsbGJhY2sgdG8gb3B0aW9ucy5yb290IG9yICcvJ1xyXG4gKlxyXG4gKiBJZiB0aGlzIGlzIGNhbGxlZCB3aXRoIGEgcmVsYXRpdmUgcGF0aCwgRXRhIHdpbGw6XHJcbiAqIC0gTG9vayByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB0ZW1wbGF0ZSAoaWYgdGhlIGN1cnJlbnQgdGVtcGxhdGUgaGFzIHRoZSBgZmlsZW5hbWVgIHByb3BlcnR5KVxyXG4gKiAtIExvb2sgaW5zaWRlIGVhY2ggZGlyZWN0b3J5IGluIG9wdGlvbnMudmlld3NcclxuICpcclxuICogTm90ZTogaWYgRXRhIGlzIHVuYWJsZSB0byBmaW5kIGEgdGVtcGxhdGUgdXNpbmcgcGF0aCBhbmQgb3B0aW9ucywgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci5cclxuICpcclxuICogQHBhcmFtIHBhdGggICAgc3BlY2lmaWVkIHBhdGhcclxuICogQHBhcmFtIG9wdGlvbnMgY29tcGlsYXRpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJuIGFic29sdXRlIHBhdGggdG8gdGVtcGxhdGVcclxuICovXHJcbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgb3B0aW9ucykge1xyXG4gICAgdmFyIGluY2x1ZGVQYXRoID0gZmFsc2U7XHJcbiAgICB2YXIgdmlld3MgPSBvcHRpb25zLnZpZXdzO1xyXG4gICAgdmFyIHNlYXJjaGVkUGF0aHMgPSBbXTtcclxuICAgIC8vIElmIHRoZXNlIGZvdXIgdmFsdWVzIGFyZSB0aGUgc2FtZSxcclxuICAgIC8vIGdldFBhdGgoKSB3aWxsIHJldHVybiB0aGUgc2FtZSByZXN1bHQgZXZlcnkgdGltZS5cclxuICAgIC8vIFdlIGNhbiBjYWNoZSB0aGUgcmVzdWx0IHRvIGF2b2lkIGV4cGVuc2l2ZVxyXG4gICAgLy8gZmlsZSBvcGVyYXRpb25zLlxyXG4gICAgdmFyIHBhdGhPcHRpb25zID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGZpbGVuYW1lOiBvcHRpb25zLmZpbGVuYW1lLFxyXG4gICAgICAgIHBhdGg6IHBhdGgsXHJcbiAgICAgICAgcm9vdDogb3B0aW9ucy5yb290LFxyXG4gICAgICAgIHZpZXdzOiBvcHRpb25zLnZpZXdzXHJcbiAgICB9KTtcclxuICAgIGlmIChvcHRpb25zLmNhY2hlICYmIG9wdGlvbnMuZmlsZXBhdGhDYWNoZSAmJiBvcHRpb25zLmZpbGVwYXRoQ2FjaGVbcGF0aE9wdGlvbnNdKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjYWNoZWQgZmlsZXBhdGhcclxuICAgICAgICByZXR1cm4gb3B0aW9ucy5maWxlcGF0aENhY2hlW3BhdGhPcHRpb25zXTtcclxuICAgIH1cclxuICAgIC8qKiBBZGQgYSBmaWxlcGF0aCB0byB0aGUgbGlzdCBvZiBwYXRocyB3ZSd2ZSBjaGVja2VkIGZvciBhIHRlbXBsYXRlICovXHJcbiAgICBmdW5jdGlvbiBhZGRQYXRoVG9TZWFyY2hlZChwYXRoU2VhcmNoZWQpIHtcclxuICAgICAgICBpZiAoIXNlYXJjaGVkUGF0aHMuaW5jbHVkZXMocGF0aFNlYXJjaGVkKSkge1xyXG4gICAgICAgICAgICBzZWFyY2hlZFBhdGhzLnB1c2gocGF0aFNlYXJjaGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRha2UgYSBmaWxlcGF0aCAobGlrZSAncGFydGlhbHMvbXlwYXJ0aWFsLmV0YScpLiBBdHRlbXB0IHRvIGZpbmQgdGhlIHRlbXBsYXRlIGZpbGUgaW5zaWRlIGB2aWV3c2A7XHJcbiAgICAgKiByZXR1cm4gdGhlIHJlc3VsdGluZyB0ZW1wbGF0ZSBmaWxlIHBhdGgsIG9yIGBmYWxzZWAgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdGVtcGxhdGUgd2FzIG5vdCBmb3VuZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmlld3MgdGhlIGZpbGVwYXRoIHRoYXQgaG9sZHMgdGVtcGxhdGVzLCBvciBhbiBhcnJheSBvZiBmaWxlcGF0aHMgdGhhdCBob2xkIHRlbXBsYXRlc1xyXG4gICAgICogQHBhcmFtIHBhdGggdGhlIHBhdGggdG8gdGhlIHRlbXBsYXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNlYXJjaFZpZXdzKHZpZXdzLCBwYXRoKSB7XHJcbiAgICAgICAgdmFyIGZpbGVQYXRoO1xyXG4gICAgICAgIC8vIElmIHZpZXdzIGlzIGFuIGFycmF5LCB0aGVuIGxvb3AgdGhyb3VnaCBlYWNoIGRpcmVjdG9yeVxyXG4gICAgICAgIC8vIEFuZCBhdHRlbXB0IHRvIGZpbmQgdGhlIHRlbXBsYXRlXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmlld3MpICYmXHJcbiAgICAgICAgICAgIHZpZXdzLnNvbWUoZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVQYXRoID0gZ2V0V2hvbGVGaWxlUGF0aChwYXRoLCB2LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFkZFBhdGhUb1NlYXJjaGVkKGZpbGVQYXRoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdHNTeW5jKGZpbGVQYXRoKTtcclxuICAgICAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGFib3ZlIHJldHVybmVkIHRydWUsIHdlIGtub3cgdGhhdCB0aGUgZmlsZVBhdGggd2FzIGp1c3Qgc2V0IHRvIGEgcGF0aFxyXG4gICAgICAgICAgICAvLyBUaGF0IGV4aXN0cyAoQXJyYXkuc29tZSgpIHJldHVybnMgYXMgc29vbiBhcyBpdCBmaW5kcyBhIHZhbGlkIGVsZW1lbnQpXHJcbiAgICAgICAgICAgIHJldHVybiBmaWxlUGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZpZXdzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAvLyBTZWFyY2ggZm9yIHRoZSBmaWxlIGlmIHZpZXdzIGlzIGEgc2luZ2xlIGRpcmVjdG9yeVxyXG4gICAgICAgICAgICBmaWxlUGF0aCA9IGdldFdob2xlRmlsZVBhdGgocGF0aCwgdmlld3MsIHRydWUpO1xyXG4gICAgICAgICAgICBhZGRQYXRoVG9TZWFyY2hlZChmaWxlUGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChleGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVuYWJsZSB0byBmaW5kIGEgZmlsZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIFBhdGggc3RhcnRzIHdpdGggJy8nLCAnQzpcXCcsIGV0Yy5cclxuICAgIHZhciBtYXRjaCA9IC9eW0EtWmEtel0rOlxcXFx8XlxcLy8uZXhlYyhwYXRoKTtcclxuICAgIC8vIEFic29sdXRlIHBhdGgsIGxpa2UgL3BhcnRpYWxzL3BhcnRpYWwuZXRhXHJcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gV2UgaGF2ZSB0byB0cmltIHRoZSBiZWdpbm5pbmcgJy8nIG9mZiB0aGUgcGF0aCwgb3IgZWxzZVxyXG4gICAgICAgIC8vIHBhdGgucmVzb2x2ZShkaXIsIHBhdGgpIHdpbGwgYWx3YXlzIHJlc29sdmUgdG8ganVzdCBwYXRoXHJcbiAgICAgICAgdmFyIGZvcm1hdHRlZFBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8qLywgJycpO1xyXG4gICAgICAgIC8vIEZpcnN0LCB0cnkgdG8gcmVzb2x2ZSB0aGUgcGF0aCB3aXRoaW4gb3B0aW9ucy52aWV3c1xyXG4gICAgICAgIGluY2x1ZGVQYXRoID0gc2VhcmNoVmlld3Modmlld3MsIGZvcm1hdHRlZFBhdGgpO1xyXG4gICAgICAgIGlmICghaW5jbHVkZVBhdGgpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhhdCBmYWlscywgc2VhcmNoVmlld3Mgd2lsbCByZXR1cm4gZmFsc2UuIFRyeSB0byBmaW5kIHRoZSBwYXRoXHJcbiAgICAgICAgICAgIC8vIGluc2lkZSBvcHRpb25zLnJvb3QgKGJ5IGRlZmF1bHQgJy8nLCB0aGUgYmFzZSBvZiB0aGUgZmlsZXN5c3RlbSlcclxuICAgICAgICAgICAgdmFyIHBhdGhGcm9tUm9vdCA9IGdldFdob2xlRmlsZVBhdGgoZm9ybWF0dGVkUGF0aCwgb3B0aW9ucy5yb290IHx8ICcvJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGFkZFBhdGhUb1NlYXJjaGVkKHBhdGhGcm9tUm9vdCk7XHJcbiAgICAgICAgICAgIGluY2x1ZGVQYXRoID0gcGF0aEZyb21Sb290O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbGF0aXZlIHBhdGhzXHJcbiAgICAgICAgLy8gTG9vayByZWxhdGl2ZSB0byBhIHBhc3NlZCBmaWxlbmFtZSBmaXJzdFxyXG4gICAgICAgIGlmIChvcHRpb25zLmZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlUGF0aCA9IGdldFdob2xlRmlsZVBhdGgocGF0aCwgb3B0aW9ucy5maWxlbmFtZSk7XHJcbiAgICAgICAgICAgIGFkZFBhdGhUb1NlYXJjaGVkKGZpbGVQYXRoKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlUGF0aCA9IGZpbGVQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFRoZW4gbG9vayBmb3IgdGhlIHRlbXBsYXRlIGluIG9wdGlvbnMudmlld3NcclxuICAgICAgICBpZiAoIWluY2x1ZGVQYXRoKSB7XHJcbiAgICAgICAgICAgIGluY2x1ZGVQYXRoID0gc2VhcmNoVmlld3Modmlld3MsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluY2x1ZGVQYXRoKSB7XHJcbiAgICAgICAgICAgIHRocm93IEV0YUVycignQ291bGQgbm90IGZpbmQgdGhlIHRlbXBsYXRlIFwiJyArIHBhdGggKyAnXCIuIFBhdGhzIHRyaWVkOiAnICsgc2VhcmNoZWRQYXRocyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgY2FjaGluZyBhbmQgZmlsZXBhdGhDYWNoZSBhcmUgZW5hYmxlZCxcclxuICAgIC8vIGNhY2hlIHRoZSBpbnB1dCAmIG91dHB1dCBvZiB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgaWYgKG9wdGlvbnMuY2FjaGUgJiYgb3B0aW9ucy5maWxlcGF0aENhY2hlKSB7XHJcbiAgICAgICAgb3B0aW9ucy5maWxlcGF0aENhY2hlW3BhdGhPcHRpb25zXSA9IGluY2x1ZGVQYXRoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluY2x1ZGVQYXRoO1xyXG59XHJcbi8qKlxyXG4gKiBSZWFkcyBhIGZpbGUgc3luY2hyb25vdXNseVxyXG4gKi9cclxuZnVuY3Rpb24gcmVhZEZpbGUoZmlsZVBhdGgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKS5yZXBsYWNlKF9CT00sICcnKTsgLy8gVE9ETzogaXMgcmVwbGFjaW5nIEJPTSdzIG5lY2Vzc2FyeT9cclxuICAgIH1cclxuICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgIHRocm93IEV0YUVycihcIkZhaWxlZCB0byByZWFkIHRlbXBsYXRlIGF0ICdcIiArIGZpbGVQYXRoICsgXCInXCIpO1xyXG4gICAgfVxyXG59XG5cbi8vIGV4cHJlc3MgaXMgc2V0IGxpa2U6IGFwcC5lbmdpbmUoJ2h0bWwnLCByZXF1aXJlKCdldGEnKS5yZW5kZXJGaWxlKVxyXG4vKiBFTkQgVFlQRVMgKi9cclxuLyoqXHJcbiAqIFJlYWRzIGEgdGVtcGxhdGUsIGNvbXBpbGVzIGl0IGludG8gYSBmdW5jdGlvbiwgY2FjaGVzIGl0IGlmIGNhY2hpbmcgaXNuJ3QgZGlzYWJsZWQsIHJldHVybnMgdGhlIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSBmaWxlUGF0aCBBYnNvbHV0ZSBwYXRoIHRvIHRlbXBsYXRlIGZpbGVcclxuICogQHBhcmFtIG9wdGlvbnMgRXRhIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXHJcbiAqIEBwYXJhbSBub0NhY2hlIE9wdGlvbmFsbHksIG1ha2UgRXRhIG5vdCBjYWNoZSB0aGUgdGVtcGxhdGVcclxuICovXHJcbmZ1bmN0aW9uIGxvYWRGaWxlKGZpbGVQYXRoLCBvcHRpb25zLCBub0NhY2hlKSB7XHJcbiAgICB2YXIgY29uZmlnID0gZ2V0Q29uZmlnKG9wdGlvbnMpO1xyXG4gICAgdmFyIHRlbXBsYXRlID0gcmVhZEZpbGUoZmlsZVBhdGgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgY29tcGlsZWRUZW1wbGF0ZSA9IGNvbXBpbGUodGVtcGxhdGUsIGNvbmZpZyk7XHJcbiAgICAgICAgaWYgKCFub0NhY2hlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy50ZW1wbGF0ZXMuZGVmaW5lKGNvbmZpZy5maWxlbmFtZSwgY29tcGlsZWRUZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21waWxlZFRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBFdGFFcnIoJ0xvYWRpbmcgZmlsZTogJyArIGZpbGVQYXRoICsgJyBmYWlsZWQ6XFxuXFxuJyArIGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEdldCB0aGUgdGVtcGxhdGUgZnJvbSBhIHN0cmluZyBvciBhIGZpbGUsIGVpdGhlciBjb21waWxlZCBvbi10aGUtZmx5IG9yXHJcbiAqIHJlYWQgZnJvbSBjYWNoZSAoaWYgZW5hYmxlZCksIGFuZCBjYWNoZSB0aGUgdGVtcGxhdGUgaWYgbmVlZGVkLlxyXG4gKlxyXG4gKiBJZiBgb3B0aW9ucy5jYWNoZWAgaXMgdHJ1ZSwgdGhpcyBmdW5jdGlvbiByZWFkcyB0aGUgZmlsZSBmcm9tXHJcbiAqIGBvcHRpb25zLmZpbGVuYW1lYCBzbyBpdCBtdXN0IGJlIHNldCBwcmlvciB0byBjYWxsaW5nIHRoaXMgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zICAgY29tcGlsYXRpb24gb3B0aW9uc1xyXG4gKiBAcmV0dXJuIEV0YSB0ZW1wbGF0ZSBmdW5jdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlQ2FjaGUkMShvcHRpb25zKSB7XHJcbiAgICB2YXIgZmlsZW5hbWUgPSBvcHRpb25zLmZpbGVuYW1lO1xyXG4gICAgaWYgKG9wdGlvbnMuY2FjaGUpIHtcclxuICAgICAgICB2YXIgZnVuYyA9IG9wdGlvbnMudGVtcGxhdGVzLmdldChmaWxlbmFtZSk7XHJcbiAgICAgICAgaWYgKGZ1bmMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb2FkRmlsZShmaWxlbmFtZSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvLyBDYWNoaW5nIGlzIGRpc2FibGVkLCBzbyBwYXNzIG5vQ2FjaGUgPSB0cnVlXHJcbiAgICByZXR1cm4gbG9hZEZpbGUoZmlsZW5hbWUsIG9wdGlvbnMsIHRydWUpO1xyXG59XHJcbi8qKlxyXG4gKiBUcnkgY2FsbGluZyBoYW5kbGVDYWNoZSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zIGFuZCBkYXRhIGFuZCBjYWxsIHRoZVxyXG4gKiBjYWxsYmFjayB3aXRoIHRoZSByZXN1bHQuIElmIGFuIGVycm9yIG9jY3VycywgY2FsbCB0aGUgY2FsbGJhY2sgd2l0aFxyXG4gKiB0aGUgZXJyb3IuIFVzZWQgYnkgcmVuZGVyRmlsZSgpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZGF0YSB0ZW1wbGF0ZSBkYXRhXHJcbiAqIEBwYXJhbSBvcHRpb25zIGNvbXBpbGF0aW9uIG9wdGlvbnNcclxuICogQHBhcmFtIGNiIGNhbGxiYWNrXHJcbiAqL1xyXG5mdW5jdGlvbiB0cnlIYW5kbGVDYWNoZShkYXRhLCBvcHRpb25zLCBjYikge1xyXG4gICAgaWYgKGNiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gTm90ZTogaWYgdGhlcmUgaXMgYW4gZXJyb3Igd2hpbGUgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgLy8gSXQgd2lsbCBidWJibGUgdXAgYW5kIGJlIGNhdWdodCBoZXJlXHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZUZuID0gaGFuZGxlQ2FjaGUkMShvcHRpb25zKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVGbihkYXRhLCBvcHRpb25zLCBjYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNiKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gTm8gY2FsbGJhY2ssIHRyeSByZXR1cm5pbmcgYSBwcm9taXNlXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9taXNlSW1wbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlRm4gPSBoYW5kbGVDYWNoZSQxKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0ZW1wbGF0ZUZuKGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFdGFFcnIoXCJQbGVhc2UgcHJvdmlkZSBhIGNhbGxiYWNrIGZ1bmN0aW9uLCB0aGlzIGVudiBkb2Vzbid0IHN1cHBvcnQgUHJvbWlzZXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBHZXQgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBJZiBgb3B0aW9ucy5jYWNoZWAgaXMgYHRydWVgLCB0aGVuIHRoZSB0ZW1wbGF0ZSBpcyBjYWNoZWQuXHJcbiAqXHJcbiAqIFRoaXMgcmV0dXJucyBhIHRlbXBsYXRlIGZ1bmN0aW9uIGFuZCB0aGUgY29uZmlnIG9iamVjdCB3aXRoIHdoaWNoIHRoYXQgdGVtcGxhdGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuICpcclxuICogQHJlbWFya3NcclxuICpcclxuICogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGlzIHJldHVybnMgYSBjb25maWcgb2JqZWN0IHdpdGggYGZpbGVuYW1lYCBzZXQuXHJcbiAqIE90aGVyd2lzZSwgdGhlIGluY2x1ZGVkIGZpbGUgd291bGQgbm90IGJlIGFibGUgdG8gdXNlIHJlbGF0aXZlIHBhdGhzXHJcbiAqXHJcbiAqIEBwYXJhbSBwYXRoIHBhdGggZm9yIHRoZSBzcGVjaWZpZWQgZmlsZSAoaWYgcmVsYXRpdmUsIHNwZWNpZnkgYHZpZXdzYCBvbiBgb3B0aW9uc2ApXHJcbiAqIEBwYXJhbSBvcHRpb25zIGNvbXBpbGF0aW9uIG9wdGlvbnNcclxuICogQHJldHVybiBbRXRhIHRlbXBsYXRlIGZ1bmN0aW9uLCBuZXcgY29uZmlnIG9iamVjdF1cclxuICovXHJcbmZ1bmN0aW9uIGluY2x1ZGVGaWxlKHBhdGgsIG9wdGlvbnMpIHtcclxuICAgIC8vIHRoZSBiZWxvdyBjcmVhdGVzIGEgbmV3IG9wdGlvbnMgb2JqZWN0LCB1c2luZyB0aGUgcGFyZW50IGZpbGVwYXRoIG9mIHRoZSBvbGQgb3B0aW9ucyBvYmplY3QgYW5kIHRoZSBwYXRoXHJcbiAgICB2YXIgbmV3RmlsZU9wdGlvbnMgPSBnZXRDb25maWcoeyBmaWxlbmFtZTogZ2V0UGF0aChwYXRoLCBvcHRpb25zKSB9LCBvcHRpb25zKTtcclxuICAgIC8vIFRPRE86IG1ha2Ugc3VyZSBwcm9wZXJ0aWVzIGFyZSBjdXJyZWN0bHkgY29waWVkIG92ZXJcclxuICAgIHJldHVybiBbaGFuZGxlQ2FjaGUkMShuZXdGaWxlT3B0aW9ucyksIG5ld0ZpbGVPcHRpb25zXTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJGaWxlKGZpbGVuYW1lLCBkYXRhLCBjb25maWcsIGNiKSB7XHJcbiAgICAvKlxyXG4gICAgSGVyZSB3ZSBoYXZlIHNvbWUgZnVuY3Rpb24gb3ZlcmxvYWRpbmcuXHJcbiAgICBFc3NlbnRpYWxseSwgdGhlIGZpcnN0IDIgYXJndW1lbnRzIHRvIHJlbmRlckZpbGUgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlsZW5hbWUgYW5kIGRhdGFcclxuICAgIEhvd2V2ZXIsIHdpdGggRXhwcmVzcywgY29uZmlndXJhdGlvbiBvcHRpb25zIHdpbGwgYmUgcGFzc2VkIGFsb25nIHdpdGggdGhlIGRhdGEuXHJcbiAgICBUaHVzLCBFeHByZXNzIHdpbGwgY2FsbCByZW5kZXJGaWxlIHdpdGggKGZpbGVuYW1lLCBkYXRhQW5kT3B0aW9ucywgY2IpXHJcbiAgICBBbmQgd2Ugd2FudCB0byBhbHNvIG1ha2UgKGZpbGVuYW1lLCBkYXRhLCBvcHRpb25zLCBjYikgYXZhaWxhYmxlXHJcbiAgICAqL1xyXG4gICAgdmFyIHJlbmRlckNvbmZpZztcclxuICAgIHZhciBjYWxsYmFjaztcclxuICAgIGRhdGEgPSBkYXRhIHx8IHt9OyAvLyBJZiBkYXRhIGlzIHVuZGVmaW5lZCwgd2UgZG9uJ3Qgd2FudCBhY2Nlc3NpbmcgZGF0YS5zZXR0aW5ncyB0byBlcnJvclxyXG4gICAgLy8gRmlyc3QsIGFzc2lnbiBvdXIgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYGNhbGxiYWNrYFxyXG4gICAgLy8gV2UgY2FuIGxlYXZlIGl0IHVuZGVmaW5lZCBpZiBuZWl0aGVyIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uO1xyXG4gICAgLy8gQ2FsbGJhY2tzIGFyZSBvcHRpb25hbFxyXG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIFRoZSA0dGggYXJndW1lbnQgaXMgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgY2FsbGJhY2sgPSBjYjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBjb25maWcgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBUaGUgM3JkIGFyZyBpcyB0aGUgY2FsbGJhY2tcclxuICAgICAgICBjYWxsYmFjayA9IGNvbmZpZztcclxuICAgIH1cclxuICAgIC8vIElmIHRoZXJlIGlzIGEgY29uZmlnIG9iamVjdCBwYXNzZWQgaW4gZXhwbGljaXRseSwgdXNlIGl0XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZW5kZXJDb25maWcgPSBnZXRDb25maWcoY29uZmlnIHx8IHt9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgZ2V0IHRoZSBjb25maWcgZnJvbSB0aGUgZGF0YSBvYmplY3RcclxuICAgICAgICAvLyBBbmQgdGhlbiBncmFiIHNvbWUgY29uZmlnIG9wdGlvbnMgZnJvbSBkYXRhLnNldHRpbmdzXHJcbiAgICAgICAgLy8gV2hpY2ggaXMgd2hlcmUgRXhwcmVzcyBzb21ldGltZXMgc3RvcmVzIHRoZW1cclxuICAgICAgICByZW5kZXJDb25maWcgPSBnZXRDb25maWcoZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgLy8gUHVsbCBhIGZldyB0aGluZ3MgZnJvbSBrbm93biBsb2NhdGlvbnNcclxuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3Mudmlld3MpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckNvbmZpZy52aWV3cyA9IGRhdGEuc2V0dGluZ3Mudmlld3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3NbJ3ZpZXcgY2FjaGUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29uZmlnLmNhY2hlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBVbmRvY3VtZW50ZWQgYWZ0ZXIgRXhwcmVzcyAyLCBidXQgc3RpbGwgdXNhYmxlLCBlc3AuIGZvclxyXG4gICAgICAgICAgICAvLyBpdGVtcyB0aGF0IGFyZSB1bnNhZmUgdG8gYmUgcGFzc2VkIGFsb25nIHdpdGggZGF0YSwgbGlrZSBgcm9vdGBcclxuICAgICAgICAgICAgdmFyIHZpZXdPcHRzID0gZGF0YS5zZXR0aW5nc1sndmlldyBvcHRpb25zJ107XHJcbiAgICAgICAgICAgIGlmICh2aWV3T3B0cykge1xyXG4gICAgICAgICAgICAgICAgY29weVByb3BzKHJlbmRlckNvbmZpZywgdmlld09wdHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2V0IHRoZSBmaWxlbmFtZSBvcHRpb24gb24gdGhlIHRlbXBsYXRlXHJcbiAgICAvLyBUaGlzIHdpbGwgZmlyc3QgdHJ5IHRvIHJlc29sdmUgdGhlIGZpbGUgcGF0aCAoc2VlIGdldFBhdGggZm9yIGRldGFpbHMpXHJcbiAgICByZW5kZXJDb25maWcuZmlsZW5hbWUgPSBnZXRQYXRoKGZpbGVuYW1lLCByZW5kZXJDb25maWcpO1xyXG4gICAgcmV0dXJuIHRyeUhhbmRsZUNhY2hlKGRhdGEsIHJlbmRlckNvbmZpZywgY2FsbGJhY2spO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckZpbGVBc3luYyhmaWxlbmFtZSwgZGF0YSwgY29uZmlnLCBjYikge1xyXG4gICAgcmV0dXJuIHJlbmRlckZpbGUoZmlsZW5hbWUsIHR5cGVvZiBjb25maWcgPT09ICdmdW5jdGlvbicgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgYXN5bmM6IHRydWUgfSkgOiBkYXRhLCB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb25maWcpLCB7IGFzeW5jOiB0cnVlIH0pIDogY29uZmlnLCBjYik7XHJcbn1cblxuLyogRU5EIFRZUEVTICovXHJcbi8qKlxyXG4gKiBDYWxsZWQgd2l0aCBgaW5jbHVkZUZpbGUocGF0aCwgZGF0YSlgXHJcbiAqL1xyXG5mdW5jdGlvbiBpbmNsdWRlRmlsZUhlbHBlcihwYXRoLCBkYXRhKSB7XHJcbiAgICB2YXIgdGVtcGxhdGVBbmRDb25maWcgPSBpbmNsdWRlRmlsZShwYXRoLCB0aGlzKTtcclxuICAgIHJldHVybiB0ZW1wbGF0ZUFuZENvbmZpZ1swXShkYXRhLCB0ZW1wbGF0ZUFuZENvbmZpZ1sxXSk7XHJcbn1cblxuLyogRU5EIFRZUEVTICovXHJcbmZ1bmN0aW9uIGhhbmRsZUNhY2hlKHRlbXBsYXRlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucy5jYWNoZSAmJiBvcHRpb25zLm5hbWUgJiYgb3B0aW9ucy50ZW1wbGF0ZXMuZ2V0KG9wdGlvbnMubmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucy50ZW1wbGF0ZXMuZ2V0KG9wdGlvbnMubmFtZSk7XHJcbiAgICB9XHJcbiAgICB2YXIgdGVtcGxhdGVGdW5jID0gdHlwZW9mIHRlbXBsYXRlID09PSAnZnVuY3Rpb24nID8gdGVtcGxhdGUgOiBjb21waWxlKHRlbXBsYXRlLCBvcHRpb25zKTtcclxuICAgIC8vIE5vdGUgdGhhdCB3ZSBkb24ndCBoYXZlIHRvIGNoZWNrIGlmIGl0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjYWNoZTtcclxuICAgIC8vIGl0IHdvdWxkIGhhdmUgcmV0dXJuZWQgZWFybGllciBpZiBpdCBoYWRcclxuICAgIGlmIChvcHRpb25zLmNhY2hlICYmIG9wdGlvbnMubmFtZSkge1xyXG4gICAgICAgIG9wdGlvbnMudGVtcGxhdGVzLmRlZmluZShvcHRpb25zLm5hbWUsIHRlbXBsYXRlRnVuYyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcGxhdGVGdW5jO1xyXG59XHJcbi8qKlxyXG4gKiBSZW5kZXIgYSB0ZW1wbGF0ZVxyXG4gKlxyXG4gKiBJZiBgdGVtcGxhdGVgIGlzIGEgc3RyaW5nLCBFdGEgd2lsbCBjb21waWxlIGl0IHRvIGEgZnVuY3Rpb24gYW5kIHRoZW4gY2FsbCBpdCB3aXRoIHRoZSBwcm92aWRlZCBkYXRhLlxyXG4gKiBJZiBgdGVtcGxhdGVgIGlzIGEgdGVtcGxhdGUgZnVuY3Rpb24sIEV0YSB3aWxsIGNhbGwgaXQgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YS5cclxuICpcclxuICogSWYgYGNvbmZpZy5hc3luY2AgaXMgYGZhbHNlYCwgRXRhIHdpbGwgcmV0dXJuIHRoZSByZW5kZXJlZCB0ZW1wbGF0ZS5cclxuICpcclxuICogSWYgYGNvbmZpZy5hc3luY2AgaXMgYHRydWVgIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgZnVuY3Rpb24sIEV0YSB3aWxsIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggYChlcnIsIHJlbmRlcmVkVGVtcGxhdGUpYC5cclxuICogSWYgYGNvbmZpZy5hc3luY2AgaXMgYHRydWVgIGFuZCB0aGVyZSdzIG5vdCBhIGNhbGxiYWNrIGZ1bmN0aW9uLCBFdGEgd2lsbCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlbmRlcmVkIHRlbXBsYXRlLlxyXG4gKlxyXG4gKiBJZiBgY29uZmlnLmNhY2hlYCBpcyBgdHJ1ZWAgYW5kIGBjb25maWdgIGhhcyBhIGBuYW1lYCBvciBgZmlsZW5hbWVgIHByb3BlcnR5LCBFdGEgd2lsbCBjYWNoZSB0aGUgdGVtcGxhdGUgb24gdGhlIGZpcnN0IHJlbmRlciBhbmQgdXNlIHRoZSBjYWNoZWQgdGVtcGxhdGUgZm9yIGFsbCBzdWJzZXF1ZW50IHJlbmRlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB0ZW1wbGF0ZSBUZW1wbGF0ZSBzdHJpbmcgb3IgdGVtcGxhdGUgZnVuY3Rpb25cclxuICogQHBhcmFtIGRhdGEgRGF0YSB0byByZW5kZXIgdGhlIHRlbXBsYXRlIHdpdGhcclxuICogQHBhcmFtIGNvbmZpZyBPcHRpb25hbCBjb25maWcgb3B0aW9uc1xyXG4gKiBAcGFyYW0gY2IgQ2FsbGJhY2sgZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSwgZGF0YSwgY29uZmlnLCBjYikge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBnZXRDb25maWcoY29uZmlnIHx8IHt9KTtcclxuICAgIGlmIChvcHRpb25zLmFzeW5jKSB7XHJcbiAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHVzZXIgcGFzc2VzIGNhbGxiYWNrXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBpZiB0aGVyZSBpcyBhbiBlcnJvciB3aGlsZSByZW5kZXJpbmcgdGhlIHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gSXQgd2lsbCBidWJibGUgdXAgYW5kIGJlIGNhdWdodCBoZXJlXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVGbiA9IGhhbmRsZUNhY2hlKHRlbXBsYXRlLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlRm4oZGF0YSwgb3B0aW9ucywgY2IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYihlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyBjYWxsYmFjaywgdHJ5IHJldHVybmluZyBhIHByb21pc2VcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9taXNlSW1wbCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBwcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShoYW5kbGVDYWNoZSh0ZW1wbGF0ZSwgb3B0aW9ucykoZGF0YSwgb3B0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXRhRXJyKFwiUGxlYXNlIHByb3ZpZGUgYSBjYWxsYmFjayBmdW5jdGlvbiwgdGhpcyBlbnYgZG9lc24ndCBzdXBwb3J0IFByb21pc2VzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNhY2hlKHRlbXBsYXRlLCBvcHRpb25zKShkYXRhLCBvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogUmVuZGVyIGEgdGVtcGxhdGUgYXN5bmNocm9ub3VzbHlcclxuICpcclxuICogSWYgYHRlbXBsYXRlYCBpcyBhIHN0cmluZywgRXRhIHdpbGwgY29tcGlsZSBpdCB0byBhIGZ1bmN0aW9uIGFuZCBjYWxsIGl0IHdpdGggdGhlIHByb3ZpZGVkIGRhdGEuXHJcbiAqIElmIGB0ZW1wbGF0ZWAgaXMgYSBmdW5jdGlvbiwgRXRhIHdpbGwgY2FsbCBpdCB3aXRoIHRoZSBwcm92aWRlZCBkYXRhLlxyXG4gKlxyXG4gKiBJZiB0aGVyZSBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLCBFdGEgd2lsbCBjYWxsIGl0IHdpdGggYChlcnIsIHJlbmRlcmVkVGVtcGxhdGUpYC5cclxuICogSWYgdGhlcmUgaXMgbm90IGEgY2FsbGJhY2sgZnVuY3Rpb24sIEV0YSB3aWxsIHJldHVybiBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVuZGVyZWQgdGVtcGxhdGVcclxuICpcclxuICogQHBhcmFtIHRlbXBsYXRlIFRlbXBsYXRlIHN0cmluZyBvciB0ZW1wbGF0ZSBmdW5jdGlvblxyXG4gKiBAcGFyYW0gZGF0YSBEYXRhIHRvIHJlbmRlciB0aGUgdGVtcGxhdGUgd2l0aFxyXG4gKiBAcGFyYW0gY29uZmlnIE9wdGlvbmFsIGNvbmZpZyBvcHRpb25zXHJcbiAqIEBwYXJhbSBjYiBDYWxsYmFjayBmdW5jdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyQXN5bmModGVtcGxhdGUsIGRhdGEsIGNvbmZpZywgY2IpIHtcclxuICAgIC8vIFVzaW5nIE9iamVjdC5hc3NpZ24gdG8gbG93ZXIgYnVuZGxlIHNpemUsIHVzaW5nIHNwcmVhZCBvcGVyYXRvciBtYWtlcyBpdCBsYXJnZXIgYmVjYXVzZSBvZiB0eXBlc2NyaXB0IGluamVjdGVkIHBvbHlmaWxsc1xyXG4gICAgcmV0dXJuIHJlbmRlcih0ZW1wbGF0ZSwgZGF0YSwgT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7IGFzeW5jOiB0cnVlIH0pLCBjYik7XHJcbn1cblxuLy8gQGRlbm9pZnktaWdub3JlXHJcbmNvbmZpZy5pbmNsdWRlRmlsZSA9IGluY2x1ZGVGaWxlSGVscGVyO1xyXG5jb25maWcuZmlsZXBhdGhDYWNoZSA9IHt9O1xuXG5leHBvcnQgeyByZW5kZXJGaWxlIGFzIF9fZXhwcmVzcywgY29tcGlsZSwgY29tcGlsZVRvU3RyaW5nLCBjb25maWcsIGNvbmZpZ3VyZSwgY29uZmlnIGFzIGRlZmF1bHRDb25maWcsIGdldENvbmZpZywgbG9hZEZpbGUsIHBhcnNlLCByZW5kZXIsIHJlbmRlckFzeW5jLCByZW5kZXJGaWxlLCByZW5kZXJGaWxlQXN5bmMsIHRlbXBsYXRlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXRhLmVzLmpzLm1hcFxuIiwiaW1wb3J0IHsgQXBwLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcDogQXBwKSB7fVxuICAgIGFic3RyYWN0IGdlbmVyYXRlQ29udGV4dChmaWxlOiBURmlsZSk6IFByb21pc2U8YW55Pjtcbn0iLCJpbXBvcnQgVGVtcGxhdGVyUGx1Z2luIGZyb20gXCJtYWluXCI7XG5pbXBvcnQgeyBBcHAsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBUUGFyc2VyIH0gZnJvbSBcIlRQYXJzZXJcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEludGVybmFsTW9kdWxlIGV4dGVuZHMgVFBhcnNlciB7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG5hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgc3RhdGljX3RlbXBsYXRlczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY190ZW1wbGF0ZXM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XG4gICAgcHJvdGVjdGVkIGZpbGU6IFRGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHByb3RlY3RlZCBwbHVnaW46IFRlbXBsYXRlclBsdWdpbikge1xuICAgICAgICBzdXBlcihhcHApO1xuICAgIH1cblxuICAgIGdldE5hbWUoKTogU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGFic3RyYWN0IGNyZWF0ZVN0YXRpY1RlbXBsYXRlcygpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGFic3RyYWN0IHVwZGF0ZVRlbXBsYXRlcygpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgYXN5bmMgZ2VuZXJhdGVDb250ZXh0KGZpbGU6IFRGaWxlKSB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGljX3RlbXBsYXRlcy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVN0YXRpY1RlbXBsYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGVtcGxhdGVzKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLk9iamVjdC5mcm9tRW50cmllcyh0aGlzLnN0YXRpY190ZW1wbGF0ZXMpLFxuICAgICAgICAgICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKHRoaXMuZHluYW1pY190ZW1wbGF0ZXMpLFxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEludGVybmFsTW9kdWxlIH0gZnJvbSBcIi4uL0ludGVybmFsTW9kdWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbE1vZHVsZURhdGUgZXh0ZW5kcyBJbnRlcm5hbE1vZHVsZSB7XG4gICAgbmFtZSA9IFwiZGF0ZVwiO1xuXG4gICAgYXN5bmMgY3JlYXRlU3RhdGljVGVtcGxhdGVzKCkge1xuICAgICAgICB0aGlzLnN0YXRpY190ZW1wbGF0ZXMuc2V0KFwibm93XCIsIHRoaXMuZ2VuZXJhdGVfbm93KCkpO1xuICAgICAgICB0aGlzLnN0YXRpY190ZW1wbGF0ZXMuc2V0KFwidG9tb3Jyb3dcIiwgdGhpcy5nZW5lcmF0ZV90b21vcnJvdygpKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcIndlZWtkYXlcIiwgdGhpcy5nZW5lcmF0ZV93ZWVrZGF5KCkpO1xuICAgICAgICB0aGlzLnN0YXRpY190ZW1wbGF0ZXMuc2V0KFwieWVzdGVyZGF5XCIsIHRoaXMuZ2VuZXJhdGVfeWVzdGVyZGF5KCkpO1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRlbXBsYXRlcygpIHt9XG5cbiAgICBnZW5lcmF0ZV9ub3coKSB7XG4gICAgICAgIHJldHVybiAoZm9ybWF0OiBzdHJpbmcgPSBcIllZWVktTU0tRERcIiwgb2Zmc2V0PzogbnVtYmVyfHN0cmluZywgcmVmZXJlbmNlPzogc3RyaW5nLCByZWZlcmVuY2VfZm9ybWF0Pzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlICYmICF3aW5kb3cubW9tZW50KHJlZmVyZW5jZSwgcmVmZXJlbmNlX2Zvcm1hdCkuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCByZWZlcmVuY2UgZGF0ZSBmb3JtYXQsIHRyeSBzcGVjaWZ5aW5nIG9uZSB3aXRoIHRoZSBhcmd1bWVudCAncmVmZXJlbmNlX2Zvcm1hdCdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZHVyYXRpb247XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gd2luZG93Lm1vbWVudC5kdXJhdGlvbihvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9mZnNldCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gd2luZG93Lm1vbWVudC5kdXJhdGlvbihvZmZzZXQsIFwiZGF5c1wiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tb21lbnQocmVmZXJlbmNlLCByZWZlcmVuY2VfZm9ybWF0KS5hZGQoZHVyYXRpb24pLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVfdG9tb3Jyb3coKSB7XG4gICAgICAgIHJldHVybiAoZm9ybWF0OiBzdHJpbmcgPSBcIllZWVktTU0tRERcIikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX3dlZWtkYXkoKSB7XG4gICAgICAgIHJldHVybiAoZm9ybWF0OiBzdHJpbmcgPSBcIllZWVktTU0tRERcIiwgd2Vla2RheTogbnVtYmVyLCByZWZlcmVuY2U/OiBzdHJpbmcsIHJlZmVyZW5jZV9mb3JtYXQ/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2UgJiYgIXdpbmRvdy5tb21lbnQocmVmZXJlbmNlLCByZWZlcmVuY2VfZm9ybWF0KS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlZmVyZW5jZSBkYXRlIGZvcm1hdCwgdHJ5IHNwZWNpZnlpbmcgb25lIHdpdGggdGhlIGFyZ3VtZW50ICdyZWZlcmVuY2VfZm9ybWF0J1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubW9tZW50KHJlZmVyZW5jZSwgcmVmZXJlbmNlX2Zvcm1hdCkud2Vla2RheSh3ZWVrZGF5KS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX3llc3RlcmRheSgpIHtcbiAgICAgICAgcmV0dXJuIChmb3JtYXQ6IHN0cmluZyA9IFwiWVlZWS1NTS1ERFwiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm1vbWVudCgpLmFkZCgtMSwgJ2RheXMnKS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgVU5TVVBQT1JURURfTU9CSUxFX1RFTVBMQVRFOiBzdHJpbmcgPSBcIkVycm9yX01vYmlsZVVuc3VwcG9ydGVkVGVtcGxhdGVcIjtcbmV4cG9ydCBjb25zdCBJQ09OX0RBVEE6IHN0cmluZyA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxLjEzMjggMjguN1wiPjxwYXRoIGQ9XCJNMCAxNS4xNCAwIDEwLjE1IDE4LjY3IDEuNTEgMTguNjcgNi4wMyA0LjcyIDEyLjMzIDQuNzIgMTIuNzYgMTguNjcgMTkuMjIgMTguNjcgMjMuNzQgMCAxNS4xNFpNMzMuNjkyOCAxLjg0QzMzLjY5MjggMS44NCAzMy45NzYxIDIuMTQ2NyAzNC41NDI4IDIuNzZDMzUuMTA5NCAzLjM4IDM1LjM5MjggNC41NiAzNS4zOTI4IDYuM0MzNS4zOTI4IDguMDQ2NiAzNC44MTk1IDkuNTQgMzMuNjcyOCAxMC43OEMzMi41MjYxIDEyLjAyIDMxLjA5OTUgMTIuNjQgMjkuMzkyOCAxMi42NEMyNy42ODYyIDEyLjY0IDI2LjI2NjEgMTIuMDI2NyAyNS4xMzI4IDEwLjhDMjMuOTkyOCA5LjU3MzMgMjMuNDIyOCA4LjA4NjcgMjMuNDIyOCA2LjM0QzIzLjQyMjggNC42IDIzLjk5OTUgMy4xMDY2IDI1LjE1MjggMS44NkMyNi4yOTk0LjYyIDI3LjcyNjEgMCAyOS40MzI4IDBDMzEuMTM5NSAwIDMyLjU1OTQuNjEzMyAzMy42OTI4IDEuODRNNDkuODIyOC42NyAyOS41MzI4IDI4LjM4IDI0LjQxMjggMjguMzggNDQuNzEyOC42NyA0OS44MjI4LjY3TTMxLjAzMjggOC4zOEMzMS4wMzI4IDguMzggMzEuMTM5NSA4LjI0NjcgMzEuMzUyOCA3Ljk4QzMxLjU2NjIgNy43MDY3IDMxLjY3MjggNy4xNzMzIDMxLjY3MjggNi4zOEMzMS42NzI4IDUuNTg2NyAzMS40NDYxIDQuOTIgMzAuOTkyOCA0LjM4QzMwLjU0NjEgMy44NCAyOS45OTk1IDMuNTcgMjkuMzUyOCAzLjU3QzI4LjcwNjEgMy41NyAyOC4xNjk1IDMuODQgMjcuNzQyOCA0LjM4QzI3LjMyMjggNC45MiAyNy4xMTI4IDUuNTg2NyAyNy4xMTI4IDYuMzhDMjcuMTEyOCA3LjE3MzMgMjcuMzM2MSA3Ljg0IDI3Ljc4MjggOC4zOEMyOC4yMzYxIDguOTI2NyAyOC43ODYxIDkuMiAyOS40MzI4IDkuMkMzMC4wNzk1IDkuMiAzMC42MTI4IDguOTI2NyAzMS4wMzI4IDguMzhNNDkuNDMyOCAxNy45QzQ5LjQzMjggMTcuOSA0OS43MTYxIDE4LjIwNjcgNTAuMjgyOCAxOC44MkM1MC44NDk1IDE5LjQzMzMgNTEuMTMyOCAyMC42MTMzIDUxLjEzMjggMjIuMzZDNTEuMTMyOCAyNC4xIDUwLjU1OTQgMjUuNTkgNDkuNDEyOCAyNi44M0M0OC4yNTk1IDI4LjA3NjYgNDYuODI5NSAyOC43IDQ1LjEyMjggMjguN0M0My40MjI4IDI4LjcgNDIuMDAyOCAyOC4wODMzIDQwLjg2MjggMjYuODVDMzkuNzI5NSAyNS42MjMzIDM5LjE2MjggMjQuMTM2NiAzOS4xNjI4IDIyLjM5QzM5LjE2MjggMjAuNjUgMzkuNzM2MSAxOS4xNiA0MC44ODI4IDE3LjkyQzQyLjAzNjEgMTYuNjczMyA0My40NjI4IDE2LjA1IDQ1LjE2MjggMTYuMDVDNDYuODY5NCAxNi4wNSA0OC4yOTI4IDE2LjY2NjcgNDkuNDMyOCAxNy45TTQ2Ljg1MjggMjQuNTJDNDYuODUyOCAyNC41MiA0Ni45NTk1IDI0LjM4MzMgNDcuMTcyOCAyNC4xMUM0Ny4zNzk1IDIzLjgzNjcgNDcuNDgyOCAyMy4zMDMzIDQ3LjQ4MjggMjIuNTFDNDcuNDgyOCAyMS43MTY3IDQ3LjI1OTUgMjEuMDUgNDYuODEyOCAyMC41MUM0Ni4zNjYxIDE5Ljk3IDQ1LjgxNjIgMTkuNyA0NS4xNjI4IDE5LjdDNDQuNTE2MSAxOS43IDQzLjk4MjggMTkuOTcgNDMuNTYyOCAyMC41MUM0My4xNDI4IDIxLjA1IDQyLjkzMjggMjEuNzE2NyA0Mi45MzI4IDIyLjUxQzQyLjkzMjggMjMuMzAzMyA0My4xNTYxIDIzLjk3MzMgNDMuNjAyOCAyNC41MkM0NC4wNDk0IDI1LjA2IDQ0LjU5NjEgMjUuMzMgNDUuMjQyOCAyNS4zM0M0NS44ODk1IDI1LjMzIDQ2LjQyNjEgMjUuMDYgNDYuODUyOCAyNC41MlpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPjwvc3ZnPmA7IiwiaW1wb3J0IHsgSW50ZXJuYWxNb2R1bGUgfSBmcm9tIFwiLi4vSW50ZXJuYWxNb2R1bGVcIjtcblxuaW1wb3J0IHsgRmlsZVN5c3RlbUFkYXB0ZXIsIGdldEFsbFRhZ3MsIE1hcmtkb3duVmlldywgbm9ybWFsaXplUGF0aCwgcGFyc2VMaW5rdGV4dCwgcmVzb2x2ZVN1YnBhdGgsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgeyBVTlNVUFBPUlRFRF9NT0JJTEVfVEVNUExBVEUgfSBmcm9tIFwiQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBERVBUSF9MSU1JVCA9IDEwO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJuYWxNb2R1bGVGaWxlIGV4dGVuZHMgSW50ZXJuYWxNb2R1bGUge1xuICAgIG5hbWUgPSBcImZpbGVcIjtcbiAgICBwcml2YXRlIGluY2x1ZGVfZGVwdGg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBsaW5rcGF0aF9yZWdleCA9IG5ldyBSZWdFeHAoXCJeXFxcXFtcXFxcWyguKilcXFxcXVxcXFxdJFwiKTtcblxuICAgIGFzeW5jIGNyZWF0ZVN0YXRpY1RlbXBsYXRlcygpIHtcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXNcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcImNsaXBib2FyZFwiLCB0aGlzLmdlbmVyYXRlX2NsaXBib2FyZCgpKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcImN1cnNvclwiLCB0aGlzLmdlbmVyYXRlX2N1cnNvcigpKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcInNlbGVjdGlvblwiLCB0aGlzLmdlbmVyYXRlX3NlbGVjdGlvbigpKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUZW1wbGF0ZXMoKSB7XG4gICAgICAgIHRoaXMuZHluYW1pY190ZW1wbGF0ZXMuc2V0KFwiY29udGVudFwiLCBhd2FpdCB0aGlzLmdlbmVyYXRlX2NvbnRlbnQoKSk7XG4gICAgICAgIHRoaXMuZHluYW1pY190ZW1wbGF0ZXMuc2V0KFwiY3JlYXRpb25fZGF0ZVwiLCB0aGlzLmdlbmVyYXRlX2NyZWF0aW9uX2RhdGUoKSk7XG4gICAgICAgIHRoaXMuZHluYW1pY190ZW1wbGF0ZXMuc2V0KFwiZm9sZGVyXCIsIHRoaXMuZ2VuZXJhdGVfZm9sZGVyKCkpO1xuICAgICAgICB0aGlzLmR5bmFtaWNfdGVtcGxhdGVzLnNldChcImluY2x1ZGVcIiwgdGhpcy5nZW5lcmF0ZV9pbmNsdWRlKCkpO1xuICAgICAgICB0aGlzLmR5bmFtaWNfdGVtcGxhdGVzLnNldChcImxhc3RfbW9kaWZpZWRfZGF0ZVwiLCB0aGlzLmdlbmVyYXRlX2xhc3RfbW9kaWZpZWRfZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5keW5hbWljX3RlbXBsYXRlcy5zZXQoXCJwYXRoXCIsIHRoaXMuZ2VuZXJhdGVfcGF0aCgpKTtcbiAgICAgICAgdGhpcy5keW5hbWljX3RlbXBsYXRlcy5zZXQoXCJyZW5hbWVcIiwgdGhpcy5nZW5lcmF0ZV9yZW5hbWUoKSk7XG4gICAgICAgIHRoaXMuZHluYW1pY190ZW1wbGF0ZXMuc2V0KFwidGFnc1wiLCB0aGlzLmdlbmVyYXRlX3RhZ3MoKSk7XG4gICAgICAgIHRoaXMuZHluYW1pY190ZW1wbGF0ZXMuc2V0KFwidGl0bGVcIiwgdGhpcy5nZW5lcmF0ZV90aXRsZSgpKTtcblxuICAgIH1cblxuICAgIGdlbmVyYXRlX2NsaXBib2FyZCgpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB0aGlzXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2dfdXBkYXRlKFwidHAuZmlsZS5jbGlwYm9hcmQgd2FzIG1vdmVkIHRvIGEgbmV3IG1vZHVsZTogU3lzdGVtIE1vZHVsZSE8YnIvPiBZb3UgbXVzdCBub3cgdXNlIHRwLnN5c3RlbS5jbGlwYm9hcmQoKVwiKTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVfY3Vyc29yKCkge1xuICAgICAgICByZXR1cm4gKG9yZGVyPzogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAvLyBIYWNrIHRvIHByZXZlbnQgZW1wdHkgb3V0cHV0XG4gICAgICAgICAgICByZXR1cm4gYDwlIHRwLmZpbGUuY3Vyc29yKCR7b3JkZXIgPz8gJyd9KSAlPmA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZW5lcmF0ZV9jb250ZW50KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZCh0aGlzLmZpbGUpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlX2NyZWF0aW9uX2RhdGUoKSB7XG4gICAgICAgIHJldHVybiAoZm9ybWF0OiBzdHJpbmcgPSBcIllZWVktTU0tREQgSEg6bW1cIikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5tb21lbnQodGhpcy5maWxlLnN0YXQuY3RpbWUpLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVfZm9sZGVyKCkge1xuICAgICAgICByZXR1cm4gKHJlbGF0aXZlOiBib29sZWFuID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmZpbGUucGFyZW50O1xuICAgICAgICAgICAgbGV0IGZvbGRlcjtcblxuICAgICAgICAgICAgaWYgKHJlbGF0aXZlKSB7XG4gICAgICAgICAgICAgICAgZm9sZGVyID0gcGFyZW50LnBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb2xkZXIgPSBwYXJlbnQubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZvbGRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX2luY2x1ZGUoKSB7XG4gICAgICAgIHJldHVybiBhc3luYyAoaW5jbHVkZV9saW5rOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IEFkZCBtdXRleCBmb3IgdGhpcywgdGhpcyBtYXkgY3VycmVudGx5IGxlYWQgdG8gYSByYWNlIGNvbmRpdGlvbi4gXG4gICAgICAgICAgICAvLyBXaGlsZSBub3QgdmVyeSBpbXBhY3RmdWwsIHRoYXQgY291bGQgc3RpbGwgYmUgYW5ub3lpbmcuXG4gICAgICAgICAgICB0aGlzLmluY2x1ZGVfZGVwdGggKz0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLmluY2x1ZGVfZGVwdGggPiBERVBUSF9MSU1JVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jbHVkZV9kZXB0aCA9IDA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY2hlZCBpbmNsdXNpb24gZGVwdGggbGltaXQgKG1heCA9IDEwKVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAgICAgaWYgKChtYXRjaCA9IHRoaXMubGlua3BhdGhfcmVnZXguZXhlYyhpbmNsdWRlX2xpbmspKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZ191cGRhdGUoXCJ0cC5maWxlLmluY2x1ZGUgd2FzIHVwZGF0ZWQhIFlvdSBtdXN0IG5vdyBwcm92aWRlIHRoZSAnaW5jbHVkZV9maWxlbmFtZScgcGFyYW1ldGVyIGFzIGFuIG9ic2lkaWFuIGxpbmsgaW4gdGhlIGZvcm0gJ1tbTXlGaWxlXV0nPGJyLz48YnIvPlRoaXMgZW5zdXJlcyB0aGF0IGlmIHlvdSBjaGFuZ2UgYSBmaWxlIG5hbWUsIHRwLmZpbGUuaW5jbHVkZSBpc24ndCBicm9rZW4uPGJyLz48YnIvPlRoaXMgYWxzbyBhZGRzIHN1cHBvcnRzIGZvciBzZWN0aW9ucyBhbmQgYmxvY2tzIGluY2x1c2lvbnMhXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7cGF0aCwgc3VicGF0aH0gPSBwYXJzZUxpbmt0ZXh0KG1hdGNoWzFdKTtcblxuICAgICAgICAgICAgbGV0IGluY19maWxlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaXJzdExpbmtwYXRoRGVzdChwYXRoLCBcIlwiKTtcbiAgICAgICAgICAgIGlmICghaW5jX2ZpbGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZpbGUgJHtpbmNsdWRlX2xpbmt9IGRvZXNuJ3QgZXhpc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGluY19maWxlIGluc3RhbmNlb2YgVEZpbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2luY2x1ZGVfbGlua30gaXMgYSBmb2xkZXIsIG5vdCBhIGZpbGVgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGluY19maWxlX2NvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGluY19maWxlKTtcbiAgICAgICAgICAgIGlmIChzdWJwYXRoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoaW5jX2ZpbGUpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzb2x2ZVN1YnBhdGgoY2FjaGUsIHN1YnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBpbmNfZmlsZV9jb250ZW50ID0gaW5jX2ZpbGVfY29udGVudC5zbGljZShyZXN1bHQuc3RhcnQub2Zmc2V0LCByZXN1bHQuZW5kLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGFyc2VkX2NvbnRlbnQgPSBhd2FpdCB0aGlzLnBsdWdpbi5wYXJzZXIucGFyc2VUZW1wbGF0ZXMoaW5jX2ZpbGVfY29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaW5jbHVkZV9kZXB0aCAtPSAxO1xuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRfY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX2xhc3RfbW9kaWZpZWRfZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIChmb3JtYXQ6IHN0cmluZyA9IFwiWVlZWS1NTS1ERCBISDptbVwiKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubW9tZW50KHRoaXMuZmlsZS5zdGF0Lm10aW1lKS5mb3JtYXQoZm9ybWF0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX3BhdGgoKSB7XG4gICAgICAgIHJldHVybiAocmVsYXRpdmU6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogQWRkIG1vYmlsZSBzdXBwb3J0XG4gICAgICAgICAgICBpZiAodGhpcy5hcHAuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVU5TVVBQT1JURURfTU9CSUxFX1RFTVBMQVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEodGhpcy5hcHAudmF1bHQuYWRhcHRlciBpbnN0YW5jZW9mIEZpbGVTeXN0ZW1BZGFwdGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwcC52YXVsdCBpcyBub3QgYSBGaWxlU3lzdGVtQWRhcHRlciBpbnN0YW5jZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YXVsdF9wYXRoID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlci5nZXRCYXNlUGF0aCgpO1xuXG4gICAgICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLnBhdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmF1bHRfcGF0aH0vJHt0aGlzLmZpbGUucGF0aH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVfcmVuYW1lKCkge1xuICAgICAgICByZXR1cm4gYXN5bmMgKG5ld190aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3X3BhdGggPSBub3JtYWxpemVQYXRoKGAke3RoaXMuZmlsZS5wYXJlbnQucGF0aH0vJHtuZXdfdGl0bGV9LiR7dGhpcy5maWxlLmV4dGVuc2lvbn1gKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnJlbmFtZUZpbGUodGhpcy5maWxlLCBuZXdfcGF0aCk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX3NlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVfdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlX3ZpZXcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjdGl2ZSB2aWV3IGlzIG51bGwsIGNhbid0IHJlYWQgc2VsZWN0aW9uLlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGVkaXRvciA9IGFjdGl2ZV92aWV3LmVkaXRvcjtcbiAgICAgICAgICAgIHJldHVybiBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZV90YWdzKCkge1xuICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZSh0aGlzLmZpbGUpO1xuICAgICAgICByZXR1cm4gZ2V0QWxsVGFncyhjYWNoZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVfdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbGUuYmFzZW5hbWU7XG4gICAgfVxufSIsImltcG9ydCB7IEludGVybmFsTW9kdWxlIH0gZnJvbSBcIi4uL0ludGVybmFsTW9kdWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbE1vZHVsZVdlYiBleHRlbmRzIEludGVybmFsTW9kdWxlIHtcbiAgICBuYW1lID0gXCJ3ZWJcIjtcblxuICAgIGFzeW5jIGNyZWF0ZVN0YXRpY1RlbXBsYXRlcygpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcImRhaWx5X3F1b3RlXCIsIHRoaXMuZ2VuZXJhdGVfZGFpbHlfcXVvdGUoKSk7XG4gICAgICAgIHRoaXMuc3RhdGljX3RlbXBsYXRlcy5zZXQoXCJyYW5kb21fcGljdHVyZVwiLCB0aGlzLmdlbmVyYXRlX3JhbmRvbV9waWN0dXJlKCkpO1xuICAgICAgICB0aGlzLnN0YXRpY190ZW1wbGF0ZXMuc2V0KFwiZ2V0X3JlcXVlc3RcIiwgdGhpcy5nZW5lcmF0ZV9nZXRfcmVxdWVzdCgpKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBkYXRlVGVtcGxhdGVzKCkge31cblxuICAgIGFzeW5jIGdldFJlcXVlc3QodXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBlcmZvcm1pbmcgR0VUIHJlcXVlc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlX2RhaWx5X3F1b3RlKCkge1xuICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRSZXF1ZXN0KFwiaHR0cHM6Ly9xdW90ZXMucmVzdC9xb2RcIik7XG4gICAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgbGV0IGF1dGhvciA9IGpzb24uY29udGVudHMucXVvdGVzWzBdLmF1dGhvcjtcbiAgICAgICAgICAgIGxldCBxdW90ZSA9IGpzb24uY29udGVudHMucXVvdGVzWzBdLnF1b3RlO1xuICAgICAgICAgICAgbGV0IG5ld19jb250ZW50ID0gYD4gJHtxdW90ZX1cXG4+ICZtZGFzaDsgPGNpdGU+JHthdXRob3J9PC9jaXRlPmA7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdfY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX3JhbmRvbV9waWN0dXJlKCkge1xuICAgICAgICByZXR1cm4gYXN5bmMgKHNpemU6IHN0cmluZywgcXVlcnk/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0UmVxdWVzdChgaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8ke3NpemUgPz8gJyd9PyR7cXVlcnkgPz8gJyd9YCk7XG4gICAgICAgICAgICBsZXQgdXJsID0gcmVzcG9uc2UudXJsO1xuICAgICAgICAgICAgcmV0dXJuIGAhW3RwLndlYi5yYW5kb21fcGljdHVyZV0oJHt1cmx9KWA7ICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0ZV9nZXRfcmVxdWVzdCgpIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiBqc29uO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEludGVybmFsTW9kdWxlIH0gZnJvbSBcIi4uL0ludGVybmFsTW9kdWxlXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbE1vZHVsZUZyb250bWF0dGVyIGV4dGVuZHMgSW50ZXJuYWxNb2R1bGUge1xuICAgIG5hbWUgPSBcImZyb250bWF0dGVyXCI7XG5cbiAgICBhc3luYyBjcmVhdGVTdGF0aWNUZW1wbGF0ZXMoKSB7fVxuXG4gICAgYXN5bmMgdXBkYXRlVGVtcGxhdGVzKCkge1xuICAgICAgICBsZXQgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZSh0aGlzLmZpbGUpXG4gICAgICAgIHRoaXMuZHluYW1pY190ZW1wbGF0ZXMgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGNhY2hlPy5mcm9udG1hdHRlciB8fCB7fSkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHAsIE1vZGFsIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9tcHRNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgICBwcml2YXRlIHByb21wdEVsOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgY2I6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHByaXZhdGUgcHJvbXB0X3RleHQ6IHN0cmluZywgcHJpdmF0ZSBkZWZhdWx0X3ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYXBwKTtcbiAgICB9XG5cbiAgICBvbk9wZW4oKSB7XG4gICAgICAgIHRoaXMudGl0bGVFbC5zZXRUZXh0KHRoaXMucHJvbXB0X3RleHQpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZvcm0oKSB7XG4gICAgICAgIGxldCBkaXYgPSB0aGlzLmNvbnRlbnRFbC5jcmVhdGVEaXYoKTtcbiAgICAgICAgZGl2LmFkZENsYXNzKFwidGVtcGxhdGVyLXByb21wdC1kaXZcIik7XG5cbiAgICAgICAgbGV0IGZvcm0gPSBkaXYuY3JlYXRlRWwoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtLmFkZENsYXNzKFwidGVtcGxhdGVyLXByb21wdC1mb3JtXCIpO1xuICAgICAgICBmb3JtLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgICBmb3JtLm9uc3VibWl0ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNiKHRoaXMucHJvbXB0RWwudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9tcHRFbCA9IGZvcm0uY3JlYXRlRWwoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5wcm9tcHRFbC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRoaXMucHJvbXB0RWwucGxhY2Vob2xkZXIgPSBcIlR5cGUgdGV4dCBoZXJlLi4uXCI7XG4gICAgICAgIHRoaXMucHJvbXB0RWwudmFsdWUgPSB0aGlzLmRlZmF1bHRfdmFsdWUgPz8gXCJcIjtcbiAgICAgICAgdGhpcy5wcm9tcHRFbC5hZGRDbGFzcyhcInRlbXBsYXRlci1wcm9tcHQtaW5wdXRcIilcbiAgICAgICAgdGhpcy5wcm9tcHRFbC5zZWxlY3QoKTtcbiAgICB9XG5cbiAgICBhc3luYyBvcGVuQW5kR2V0VmFsdWUoY2I6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuY2IgPSBjYjtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxufSIsImltcG9ydCB7IFVOU1VQUE9SVEVEX01PQklMRV9URU1QTEFURSB9IGZyb20gXCJDb25zdGFudHNcIjtcbmltcG9ydCB7IEludGVybmFsTW9kdWxlIH0gZnJvbSBcIkludGVybmFsVGVtcGxhdGVzL0ludGVybmFsTW9kdWxlXCI7XG5pbXBvcnQgeyBQcm9tcHRNb2RhbCB9IGZyb20gXCIuL1Byb21wdE1vZGFsXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbE1vZHVsZVN5c3RlbSBleHRlbmRzIEludGVybmFsTW9kdWxlIHtcbiAgICBuYW1lID0gXCJzeXN0ZW1cIjtcblxuICAgIGFzeW5jIGNyZWF0ZVN0YXRpY1RlbXBsYXRlcygpIHtcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcImNsaXBib2FyZFwiLCB0aGlzLmdlbmVyYXRlX2NsaXBib2FyZCgpKTtcbiAgICAgICAgdGhpcy5zdGF0aWNfdGVtcGxhdGVzLnNldChcInByb21wdFwiLCB0aGlzLmdlbmVyYXRlX3Byb21wdCgpKTtcbiAgICB9XG5cbiAgICBhc3luYyB1cGRhdGVUZW1wbGF0ZXMoKSB7fVxuXG4gICAgZ2VuZXJhdGVfY2xpcGJvYXJkKCkge1xuICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogQWRkIG1vYmlsZSBzdXBwb3J0XG4gICAgICAgICAgICBpZiAodGhpcy5hcHAuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVU5TVVBQT1JURURfTU9CSUxFX1RFTVBMQVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlX3Byb21wdCgpIHtcbiAgICAgICAgcmV0dXJuIChwcm9tcHRfdGV4dD86IHN0cmluZywgZGVmYXVsdF92YWx1ZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvbXB0ID0gbmV3IFByb21wdE1vZGFsKHRoaXMuYXBwLCBwcm9tcHRfdGV4dCwgZGVmYXVsdF92YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKSA9PiBwcm9tcHQub3BlbkFuZEdldFZhbHVlKHJlc29sdmUpKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHAsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbmltcG9ydCBUZW1wbGF0ZXJQbHVnaW4gZnJvbSBcIm1haW5cIjtcbmltcG9ydCB7IFRQYXJzZXIgfSBmcm9tIFwiVFBhcnNlclwiO1xuaW1wb3J0IHsgSW50ZXJuYWxNb2R1bGUgfSBmcm9tIFwiLi9JbnRlcm5hbE1vZHVsZVwiO1xuaW1wb3J0IHsgSW50ZXJuYWxNb2R1bGVEYXRlIH0gZnJvbSBcIi4vZGF0ZS9JbnRlcm5hbE1vZHVsZURhdGVcIjtcbmltcG9ydCB7IEludGVybmFsTW9kdWxlRmlsZSB9IGZyb20gXCIuL2ZpbGUvSW50ZXJuYWxNb2R1bGVGaWxlXCI7XG5pbXBvcnQgeyBJbnRlcm5hbE1vZHVsZVdlYiB9IGZyb20gXCIuL3dlYi9JbnRlcm5hbE1vZHVsZVdlYlwiO1xuaW1wb3J0IHsgSW50ZXJuYWxNb2R1bGVGcm9udG1hdHRlciB9IGZyb20gXCIuL2Zyb250bWF0dGVyL0ludGVybmFsTW9kdWxlRnJvbnRtYXR0ZXJcIjtcbmltcG9ydCB7IEludGVybmFsTW9kdWxlU3lzdGVtIH0gZnJvbSBcIi4vc3lzdGVtL0ludGVybmFsTW9kdWxlU3lzdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFRlbXBsYXRlUGFyc2VyIGV4dGVuZHMgVFBhcnNlciB7XG4gICAgcHJpdmF0ZSBtb2R1bGVzX2FycmF5OiBBcnJheTxJbnRlcm5hbE1vZHVsZT4gPSBuZXcgQXJyYXkoKTtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwcml2YXRlIHBsdWdpbjogVGVtcGxhdGVyUGx1Z2luKSB7XG4gICAgICAgIHN1cGVyKGFwcCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTW9kdWxlcygpO1xuICAgIH1cblxuICAgIGNyZWF0ZU1vZHVsZXMoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlc19hcnJheS5wdXNoKG5ldyBJbnRlcm5hbE1vZHVsZURhdGUodGhpcy5hcHAsIHRoaXMucGx1Z2luKSk7XG4gICAgICAgIHRoaXMubW9kdWxlc19hcnJheS5wdXNoKG5ldyBJbnRlcm5hbE1vZHVsZUZpbGUodGhpcy5hcHAsIHRoaXMucGx1Z2luKSk7XG4gICAgICAgIHRoaXMubW9kdWxlc19hcnJheS5wdXNoKG5ldyBJbnRlcm5hbE1vZHVsZVdlYih0aGlzLmFwcCwgdGhpcy5wbHVnaW4pKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzX2FycmF5LnB1c2gobmV3IEludGVybmFsTW9kdWxlRnJvbnRtYXR0ZXIodGhpcy5hcHAsIHRoaXMucGx1Z2luKSk7XG4gICAgICAgIHRoaXMubW9kdWxlc19hcnJheS5wdXNoKG5ldyBJbnRlcm5hbE1vZHVsZVN5c3RlbSh0aGlzLmFwcCwgdGhpcy5wbHVnaW4pKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZW5lcmF0ZUNvbnRleHQoZjogVEZpbGUpIHtcbiAgICAgICAgbGV0IG1vZHVsZXNfY29udGV4dF9tYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgZm9yIChsZXQgbW9kIG9mIHRoaXMubW9kdWxlc19hcnJheSkge1xuICAgICAgICAgICAgbW9kdWxlc19jb250ZXh0X21hcC5zZXQobW9kLmdldE5hbWUoKSwgYXdhaXQgbW9kLmdlbmVyYXRlQ29udGV4dChmKSk7XG4gICAgICAgIH1cblxuICAgICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMobW9kdWxlc19jb250ZXh0X21hcCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFwcCwgRmlsZVN5c3RlbUFkYXB0ZXIsIE5vdGljZSwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSBcInV0aWxcIjtcblxuaW1wb3J0IFRlbXBsYXRlclBsdWdpbiBmcm9tIFwibWFpblwiO1xuaW1wb3J0IHsgQ29udGV4dE1vZGUgfSBmcm9tIFwiVGVtcGxhdGVQYXJzZXJcIjtcbmltcG9ydCB7IFRQYXJzZXIgfSBmcm9tIFwiVFBhcnNlclwiO1xuaW1wb3J0IHsgVU5TVVBQT1JURURfTU9CSUxFX1RFTVBMQVRFIH0gZnJvbSBcIkNvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlclRlbXBsYXRlUGFyc2VyIGV4dGVuZHMgVFBhcnNlciB7XG4gICAgY3dkOiBzdHJpbmc7XG4gICAgY21kX29wdGlvbnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwcml2YXRlIHBsdWdpbjogVGVtcGxhdGVyUGx1Z2luKSB7XG4gICAgICAgIHN1cGVyKGFwcCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZUN3ZCgpOyAgICAgICAgXG4gICAgfVxuXG4gICAgcmVzb2x2ZUN3ZCgpIHtcbiAgICAgICAgLy8gVE9ETzogQWRkIG1vYmlsZSBzdXBwb3J0XG4gICAgICAgIGlmICh0aGlzLmFwcC5pc01vYmlsZSB8fCAhKHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIgaW5zdGFuY2VvZiBGaWxlU3lzdGVtQWRhcHRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuY3dkID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3dkID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlci5nZXRCYXNlUGF0aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2VuZXJhdGVVc2VyVGVtcGxhdGVzKGZpbGU6IFRGaWxlKSB7XG4gICAgICAgIGxldCB1c2VyX3RlbXBsYXRlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgY29uc3QgZXhlY19wcm9taXNlID0gcHJvbWlzaWZ5KGV4ZWMpO1xuXG4gICAgICAgIGxldCBjb250ZXh0ID0gYXdhaXQgdGhpcy5wbHVnaW4ucGFyc2VyLmdlbmVyYXRlQ29udGV4dChmaWxlLCBDb250ZXh0TW9kZS5JTlRFUk5BTCk7XG5cbiAgICAgICAgZm9yIChsZXQgW3RlbXBsYXRlLCBjbWRdIG9mIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsYXRlc19wYWlycykge1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBcIlwiIHx8IGNtZCA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hcHAuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB1c2VyX3RlbXBsYXRlcy5zZXQodGVtcGxhdGUsICh1c2VyX2FyZ3M/OiBhbnkpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gVU5TVVBQT1JURURfTU9CSUxFX1RFTVBMQVRFO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbWQgPSBhd2FpdCB0aGlzLnBsdWdpbi5wYXJzZXIucGFyc2VUZW1wbGF0ZXMoY21kLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIHVzZXJfdGVtcGxhdGVzLnNldCh0ZW1wbGF0ZSwgYXN5bmMgKHVzZXJfYXJncz86IGFueSk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvY2Vzc19lbnYgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJvY2Vzcy5lbnYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udXNlcl9hcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNtZF9vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbW1hbmRfdGltZW91dCAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3dkOiB0aGlzLmN3ZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnY6IHByb2Nlc3NfZW52LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHtzdGRvdXR9ID0gYXdhaXQgZXhlY19wcm9taXNlKGNtZCwgY21kX29wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZG91dC50cmltUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4ubG9nX2Vycm9yKGBFcnJvciB3aXRoIFVzZXIgVGVtcGxhdGUgJHt0ZW1wbGF0ZX1gLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyX3RlbXBsYXRlcztcbiAgICB9XG5cbiAgICBhc3luYyBnZW5lcmF0ZUNvbnRleHQoZmlsZTogVEZpbGUpIHtcbiAgICAgICAgbGV0IHVzZXJfdGVtcGxhdGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuZW5hYmxlX3N5c3RlbV9jb21tYW5kcyA/IGF3YWl0IHRoaXMuZ2VuZXJhdGVVc2VyVGVtcGxhdGVzKGZpbGUpIDogbmV3IE1hcCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5PYmplY3QuZnJvbUVudHJpZXModXNlcl90ZW1wbGF0ZXMpLFxuICAgICAgICB9O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHAsIEVkaXRvclBvc2l0aW9uLCBFZGl0b3JSYW5nZU9yQ2FyZXQsIEVkaXRvclRyYW5zYWN0aW9uLCBNYXJrZG93blZpZXcgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB7IGVzY2FwZVJlZ0V4cCB9IGZyb20gXCJVdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQ3Vyc29ySnVtcGVyIHtcbiAgICBwcml2YXRlIGN1cnNvcl9yZWdleCA9IG5ldyBSZWdFeHAoXCI8JVxcXFxzKnRwLmZpbGUuY3Vyc29yXFxcXCgoPzxvcmRlcj5bMC05XXswLDJ9KVxcXFwpXFxcXHMqJT5cIiwgXCJnXCIpO1x0XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7fVxuXG4gICAgZ2V0X2VkaXRvcl9wb3NpdGlvbl9mcm9tX2luZGV4KGNvbnRlbnQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IEVkaXRvclBvc2l0aW9uIHtcbiAgICAgICAgbGV0IHN1YnN0ciA9IGNvbnRlbnQuc3Vic3RyKDAsIGluZGV4KTtcblxuICAgICAgICBsZXQgbCA9IDA7XG4gICAgICAgIGxldCBvZmZzZXQgPSAtMTtcbiAgICAgICAgbGV0IHIgPSAtMTtcbiAgICAgICAgZm9yICg7IChyID0gc3Vic3RyLmluZGV4T2YoXCJcXG5cIiwgcisxKSkgIT09IC0xIDsgbCsrLCBvZmZzZXQ9cik7XG4gICAgICAgIG9mZnNldCArPSAxO1xuXG4gICAgICAgIGxldCBjaCA9IGNvbnRlbnQuc3Vic3RyKG9mZnNldCwgaW5kZXgtb2Zmc2V0KS5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHtsaW5lOiBsLCBjaDogY2h9O1xuICAgIH1cblxuICAgIGFzeW5jIGp1bXBfdG9fbmV4dF9jdXJzb3JfbG9jYXRpb24oKSB7XG4gICAgICAgIGxldCBhY3RpdmVfdmlldyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk7XG4gICAgICAgIGlmIChhY3RpdmVfdmlldyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWN0aXZlIHZpZXcsIGNhbid0IGFwcGVuZCB0ZW1wbGF0ZXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3RpdmVfZmlsZSA9IGFjdGl2ZV92aWV3LmZpbGU7XG4gICAgICAgIGF3YWl0IGFjdGl2ZV92aWV3LnNhdmUoKTtcblxuICAgICAgICBsZXQgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoYWN0aXZlX2ZpbGUpO1xuXG4gICAgICAgIGNvbnN0IHtuZXdfY29udGVudCwgcG9zaXRpb25zfSA9IHRoaXMucmVwbGFjZV9hbmRfZ2V0X2N1cnNvcl9wb3NpdGlvbnMoY29udGVudCk7XG4gICAgICAgIGlmIChwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShhY3RpdmVfZmlsZSwgbmV3X2NvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRfY3Vyc29yX2xvY2F0aW9uKHBvc2l0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXBsYWNlX2FuZF9nZXRfY3Vyc29yX3Bvc2l0aW9ucyhjb250ZW50OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGN1cnNvcl9tYXRjaGVzID0gW107XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgd2hpbGUoKG1hdGNoID0gdGhpcy5jdXJzb3JfcmVnZXguZXhlYyhjb250ZW50KSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3Vyc29yX21hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnNvcl9tYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY3Vyc29yX21hdGNoZXMuc29ydCgobTEsIG0yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKG0xLmdyb3Vwc1tcIm9yZGVyXCJdKSAtIE51bWJlcihtMi5ncm91cHNbXCJvcmRlclwiXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbWF0Y2hfc3RyID0gY3Vyc29yX21hdGNoZXNbMF1bMF07XG5cbiAgICAgICAgY3Vyc29yX21hdGNoZXMgPSBjdXJzb3JfbWF0Y2hlcy5maWx0ZXIobSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbVswXSA9PT0gbWF0Y2hfc3RyO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9zaXRpb25zID0gW107XG4gICAgICAgIGxldCBpbmRleF9vZmZzZXQgPSAwO1xuICAgICAgICBmb3IgKGxldCBtYXRjaCBvZiBjdXJzb3JfbWF0Y2hlcykge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gbWF0Y2guaW5kZXggLSBpbmRleF9vZmZzZXQ7XG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaCh0aGlzLmdldF9lZGl0b3JfcG9zaXRpb25fZnJvbV9pbmRleChjb250ZW50LCBpbmRleCkpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKG1hdGNoWzBdKSksIFwiXCIpO1xuICAgICAgICAgICAgaW5kZXhfb2Zmc2V0ICs9IG1hdGNoWzBdLmxlbmd0aDtcblxuICAgICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHRoaXMsIGJyZWFraW5nIGZvciBub3cgd2FpdGluZyBmb3IgdGhlIG5ldyBzZXRTZWxlY3Rpb25zIEFQSVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAvLyBGb3IgdHAuZmlsZS5jdXJzb3IoKSwgd2Ugb25seSBmaW5kIG9uZVxuICAgICAgICAgICAgaWYgKG1hdGNoWzFdID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtuZXdfY29udGVudDogY29udGVudCwgcG9zaXRpb25zOiBwb3NpdGlvbnN9O1xuICAgIH1cblxuICAgIHNldF9jdXJzb3JfbG9jYXRpb24ocG9zaXRpb25zOiBBcnJheTxFZGl0b3JQb3NpdGlvbj4pIHtcbiAgICAgICAgbGV0IGFjdGl2ZV92aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcbiAgICAgICAgaWYgKGFjdGl2ZV92aWV3ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpc1xuICAgICAgICBsZXQgZWRpdG9yID0gYWN0aXZlX3ZpZXcuZWRpdG9yO1xuICAgICAgICBlZGl0b3IuZm9jdXMoKTtcbiAgICAgICAgZWRpdG9yLnNldEN1cnNvcihwb3NpdGlvbnNbMF0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGxldCBzZWxlY3Rpb25zID0gW107XG4gICAgICAgIGZvciAobGV0IHBvcyBvZiBwb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbnMucHVzaCh7YW5jaG9yOiBwb3MsIGhlYWQ6IHBvc30pO1xuICAgICAgICB9XG4gICAgICAgIGVkaXRvci5mb2N1cygpO1xuICAgICAgICBlZGl0b3Iuc2V0U2VsZWN0aW9ucyhzZWxlY3Rpb25zKTtcbiAgICAgICAgKi9cblxuICAgICAgICAvKlxuICAgICAgICAvLyBDaGVjayBodHRwczovL2dpdGh1Yi5jb20vb2JzaWRpYW5tZC9vYnNpZGlhbi1hcGkvaXNzdWVzLzE0XG5cbiAgICAgICAgbGV0IGVkaXRvciA9IGFjdGl2ZV92aWV3LmVkaXRvcjtcbiAgICAgICAgZWRpdG9yLmZvY3VzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgcG9zIG9mIHBvc2l0aW9ucykge1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiBFZGl0b3JUcmFuc2FjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogcG9zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVkaXRvci50cmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICB9XG59IiwiaW1wb3J0IHsgQXBwLCBFZGl0b3JQb3NpdGlvbiwgTWFya2Rvd25WaWV3LCBURmlsZSwgVEZvbGRlciB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0ICogYXMgRXRhIGZyb20gXCJldGFcIjtcblxuaW1wb3J0IHsgSW50ZXJuYWxUZW1wbGF0ZVBhcnNlciB9IGZyb20gXCIuL0ludGVybmFsVGVtcGxhdGVzL0ludGVybmFsVGVtcGxhdGVQYXJzZXJcIjtcbmltcG9ydCBUZW1wbGF0ZXJQbHVnaW4gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgVXNlclRlbXBsYXRlUGFyc2VyIH0gZnJvbSBcIi4vVXNlclRlbXBsYXRlcy9Vc2VyVGVtcGxhdGVQYXJzZXJcIjtcbmltcG9ydCB7IFRQYXJzZXIgfSBmcm9tIFwiVFBhcnNlclwiO1xuaW1wb3J0IHsgQ3Vyc29ySnVtcGVyIH0gZnJvbSBcIkN1cnNvckp1bXBlclwiO1xuXG5leHBvcnQgZW51bSBDb250ZXh0TW9kZSB7XG4gICAgVVNFUixcbiAgICBJTlRFUk5BTCxcbiAgICBVU0VSX0lOVEVSTkFMLFxuICAgIERZTkFNSUMsXG59O1xuXG4vLyBUT0RPOiBSZW1vdmUgdGhhdFxuY29uc3QgdHBfY3Vyc29yID0gbmV3IFJlZ0V4cChcIjwlXFxcXHMqdHAuZmlsZS5jdXJzb3JcXFxccyolPlwiKTtcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUGFyc2VyIGV4dGVuZHMgVFBhcnNlciB7XG4gICAgcHVibGljIGludGVybmFsVGVtcGxhdGVQYXJzZXI6IEludGVybmFsVGVtcGxhdGVQYXJzZXI7XG5cdHB1YmxpYyB1c2VyVGVtcGxhdGVQYXJzZXI6IFVzZXJUZW1wbGF0ZVBhcnNlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJyZW50X2NvbnRleHQ6IGFueTtcbiAgICBwdWJsaWMgY3Vyc29yX2p1bXBlcjogQ3Vyc29ySnVtcGVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwcml2YXRlIHBsdWdpbjogVGVtcGxhdGVyUGx1Z2luKSB7XG4gICAgICAgIHN1cGVyKGFwcCk7XG4gICAgICAgIHRoaXMuY3Vyc29yX2p1bXBlciA9IG5ldyBDdXJzb3JKdW1wZXIodGhpcy5hcHApO1xuICAgICAgICB0aGlzLmludGVybmFsVGVtcGxhdGVQYXJzZXIgPSBuZXcgSW50ZXJuYWxUZW1wbGF0ZVBhcnNlcih0aGlzLmFwcCwgdGhpcy5wbHVnaW4pO1xuICAgICAgICB0aGlzLnVzZXJUZW1wbGF0ZVBhcnNlciA9IG5ldyBVc2VyVGVtcGxhdGVQYXJzZXIodGhpcy5hcHAsIHRoaXMucGx1Z2luKTtcbiAgICB9XG5cbiAgICBhc3luYyBzZXRDdXJyZW50Q29udGV4dChmaWxlOiBURmlsZSwgY29udGV4dF9tb2RlOiBDb250ZXh0TW9kZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRfY29udGV4dCA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVDb250ZXh0KGZpbGUsIGNvbnRleHRfbW9kZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2VuZXJhdGVDb250ZXh0KGZpbGU6IFRGaWxlLCBjb250ZXh0X21vZGU6IENvbnRleHRNb2RlID0gQ29udGV4dE1vZGUuVVNFUl9JTlRFUk5BTCkge1xuICAgICAgICBsZXQgY29udGV4dCA9IHt9O1xuICAgICAgICBsZXQgaW50ZXJuYWxfY29udGV4dCA9IGF3YWl0IHRoaXMuaW50ZXJuYWxUZW1wbGF0ZVBhcnNlci5nZW5lcmF0ZUNvbnRleHQoZmlsZSk7XG4gICAgICAgIGxldCB1c2VyX2NvbnRleHQgPSB7fTtcblxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudF9jb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBJZiBhIHVzZXIgc3lzdGVtIGNvbW1hbmQgaXMgdXNpbmcgdHAuZmlsZS5pbmNsdWRlLCB3ZSBuZWVkIHRoZSBjb250ZXh0IHRvIGJlIHNldC5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudF9jb250ZXh0ID0gaW50ZXJuYWxfY29udGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoY29udGV4dF9tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnRleHRNb2RlLlVTRVI6XG4gICAgICAgICAgICAgICAgdXNlcl9jb250ZXh0ID0gYXdhaXQgdGhpcy51c2VyVGVtcGxhdGVQYXJzZXIuZ2VuZXJhdGVDb250ZXh0KGZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnVzZXJfY29udGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29udGV4dE1vZGUuSU5URVJOQUw6XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IGludGVybmFsX2NvbnRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnRleHRNb2RlLkRZTkFNSUM6XG4gICAgICAgICAgICAgICAgdXNlcl9jb250ZXh0ID0gYXdhaXQgdGhpcy51c2VyVGVtcGxhdGVQYXJzZXIuZ2VuZXJhdGVDb250ZXh0KGZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmludGVybmFsX2NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udXNlcl9jb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb250ZXh0TW9kZS5VU0VSX0lOVEVSTkFMOlxuICAgICAgICAgICAgICAgIHVzZXJfY29udGV4dCA9IGF3YWl0IHRoaXMudXNlclRlbXBsYXRlUGFyc2VyLmdlbmVyYXRlQ29udGV4dChmaWxlKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5pbnRlcm5hbF9jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi51c2VyX2NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG5cbiAgICBhc3luYyBwYXJzZVRlbXBsYXRlcyhjb250ZW50OiBzdHJpbmcsIGNvbnRleHQ/OiBhbnkpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5jdXJyZW50X2NvbnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGVudC5tYXRjaCh0cF9jdXJzb3IpKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sb2dfdXBkYXRlKGB0cC5maWxlLmN1cnNvciB3YXMgdXBkYXRlZCEgSXQncyBub3cgYW4gaW50ZXJuYWwgZnVuY3Rpb24sIHlvdSBzaG91bGQgY2FsbCBpdCBsaWtlIHNvOiB0cC5maWxlLmN1cnNvcigpIDxici8+XG50cC5maWxlLmN1cnNvciBub3cgc3VwcG9ydHMgY3Vyc29yIGp1bXAgb3JkZXIhIFNwZWNpZnkgdGhlIGp1bXAgb3JkZXIgYXMgYW4gYXJndW1lbnQgKHRwLmZpbGUuY3Vyc29yKDEpLCB0cC5maWxlLmN1cnNvcigyKSwgLi4uKSwgaWYgeW91IHdpc2ggdG8gY2hhbmdlIHRoZSBkZWZhdWx0IHRvcCB0byBib3R0b20gb3JkZXIuPGJyLz5cbkNoZWNrIHRoZSA8YSBocmVmPSdodHRwczovL3NpbGVudHZvaWQxMy5naXRodWIuaW8vVGVtcGxhdGVyL2RvY3MvaW50ZXJuYWwtdmFyaWFibGVzLWZ1bmN0aW9ucy9pbnRlcm5hbC1tb2R1bGVzL2ZpbGUtbW9kdWxlJz5kb2N1bWVudGF0aW9uPC9hPiBmb3IgbW9yZSBpbmZvcm1hdGlvbnMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBhd2FpdCBFdGEucmVuZGVyQXN5bmMoY29udGVudCwgY29udGV4dCwge1xuICAgICAgICAgICAgICAgIHZhck5hbWU6IFwidHBcIixcbiAgICAgICAgICAgICAgICBwYXJzZToge1xuICAgICAgICAgICAgICAgICAgICBleGVjOiBcIipcIixcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGU6IFwiflwiLFxuICAgICAgICAgICAgICAgICAgICByYXc6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdXRvVHJpbTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2xvYmFsQXdhaXQ6IHRydWUsXG4gICAgICAgICAgICB9KSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxvZ19lcnJvcihcIlRlbXBsYXRlIHBhcnNpbmcgZXJyb3IsIGFib3J0aW5nLlwiLCBlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICByZXBsYWNlX2luX2FjdGl2ZV9maWxlKCk6IHZvaWQge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgYWN0aXZlX3ZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuXHRcdFx0aWYgKGFjdGl2ZV92aWV3ID09PSBudWxsKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkFjdGl2ZSB2aWV3IGlzIG51bGxcIik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlcGxhY2VfdGVtcGxhdGVzX2FuZF9vdmVyd3JpdGVfaW5fZmlsZShhY3RpdmVfdmlldy5maWxlKTtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyb3IpIHtcblx0XHRcdHRoaXMucGx1Z2luLmxvZ19lcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9XG5cbiAgICBhc3luYyBjcmVhdGVfbmV3X25vdGVfZnJvbV90ZW1wbGF0ZSh0ZW1wbGF0ZV9maWxlOiBURmlsZSwgZm9sZGVyPzogVEZvbGRlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRlbXBsYXRlX2NvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKHRlbXBsYXRlX2ZpbGUpO1xuXG4gICAgICAgICAgICBpZiAoIWZvbGRlcikge1xuICAgICAgICAgICAgICAgIGZvbGRlciA9IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLmdldE5ld0ZpbGVQYXJlbnQoXCJcIik7XG4gICAgICAgICAgICAgICAgLy9mb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRDb25maWcoXCJuZXdGaWxlRm9sZGVyUGF0aFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogQ2hhbmdlIHRoYXQsIG5vdCBzdGFibGUgYXRtXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBsZXQgY3JlYXRlZF9ub3RlID0gYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIuY3JlYXRlTmV3TWFya2Rvd25GaWxlKGZvbGRlciwgXCJVbnRpdGxlZFwiKTtcbiAgICAgICAgICAgIC8vbGV0IGNyZWF0ZWRfbm90ZSA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShcIlVudGl0bGVkLm1kXCIsIFwiXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldEN1cnJlbnRDb250ZXh0KGNyZWF0ZWRfbm90ZSwgQ29udGV4dE1vZGUuVVNFUl9JTlRFUk5BTCk7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLnBhcnNlci5wYXJzZVRlbXBsYXRlcyh0ZW1wbGF0ZV9jb250ZW50KTtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGNyZWF0ZWRfbm90ZSwgY29udGVudCk7XG5cbiAgICAgICAgICAgIGxldCBhY3RpdmVfbGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xuICAgICAgICAgICAgaWYgKCFhY3RpdmVfbGVhZikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSBsZWFmXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgYWN0aXZlX2xlYWYub3BlbkZpbGUoY3JlYXRlZF9ub3RlLCB7c3RhdGU6IHttb2RlOiAnc291cmNlJ30sIGVTdGF0ZToge3JlbmFtZTogJ2FsbCd9fSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY3Vyc29yX2p1bXBlci5qdW1wX3RvX25leHRfY3Vyc29yX2xvY2F0aW9uKCk7XG4gICAgICAgIH1cblx0XHRjYXRjaChlcnJvcikge1xuXHRcdFx0dGhpcy5wbHVnaW4ubG9nX2Vycm9yKGVycm9yKTtcblx0XHR9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVwbGFjZV90ZW1wbGF0ZXNfYW5kX2FwcGVuZCh0ZW1wbGF0ZV9maWxlOiBURmlsZSkge1xuICAgICAgICBsZXQgYWN0aXZlX3ZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuICAgICAgICBpZiAoYWN0aXZlX3ZpZXcgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSB2aWV3LCBjYW4ndCBhcHBlbmQgdGVtcGxhdGVzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlZGl0b3IgPSBhY3RpdmVfdmlldy5lZGl0b3I7XG4gICAgICAgIGxldCBkb2MgPSBlZGl0b3IuZ2V0RG9jKCk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKHRlbXBsYXRlX2ZpbGUpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0Q3VycmVudENvbnRleHQoYWN0aXZlX3ZpZXcuZmlsZSwgQ29udGV4dE1vZGUuVVNFUl9JTlRFUk5BTCk7XG4gICAgICAgIGNvbnRlbnQgPSBhd2FpdCB0aGlzLnBhcnNlVGVtcGxhdGVzKGNvbnRlbnQpO1xuICAgICAgICBcbiAgICAgICAgZG9jLnJlcGxhY2VTZWxlY3Rpb24oY29udGVudCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5jdXJzb3JfanVtcGVyLmp1bXBfdG9fbmV4dF9jdXJzb3JfbG9jYXRpb24oKTtcbiAgICAgICAgZWRpdG9yLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVwbGFjZV90ZW1wbGF0ZXNfYW5kX292ZXJ3cml0ZV9pbl9maWxlKGZpbGU6IFRGaWxlKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcblxuICAgICAgICBhd2FpdCB0aGlzLnNldEN1cnJlbnRDb250ZXh0KGZpbGUsIENvbnRleHRNb2RlLlVTRVJfSU5URVJOQUwpO1xuICAgICAgICBsZXQgbmV3X2NvbnRlbnQgPSBhd2FpdCB0aGlzLnBhcnNlVGVtcGxhdGVzKGNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChuZXdfY29udGVudCAhPT0gY29udGVudCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5ld19jb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCkgPT09IGZpbGUpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmN1cnNvcl9qdW1wZXIuanVtcF90b19uZXh0X2N1cnNvcl9sb2NhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGFkZEljb24sIEV2ZW50UmVmLCBNYXJrZG93blZpZXcsIE1lbnUsIE1lbnVJdGVtLCBOb3RpY2UsIFBsdWdpbiwgVEFic3RyYWN0RmlsZSwgVEZpbGUsIFRGb2xkZXIgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTLCBUZW1wbGF0ZXJTZXR0aW5ncywgVGVtcGxhdGVyU2V0dGluZ1RhYiB9IGZyb20gJ1NldHRpbmdzJztcclxuaW1wb3J0IHsgVGVtcGxhdGVyRnV6enlTdWdnZXN0TW9kYWwgfSBmcm9tICdUZW1wbGF0ZXJGdXp6eVN1Z2dlc3QnO1xyXG5pbXBvcnQgeyBDb250ZXh0TW9kZSwgVGVtcGxhdGVQYXJzZXIgfSBmcm9tICdUZW1wbGF0ZVBhcnNlcic7XHJcbmltcG9ydCB7IElDT05fREFUQSB9IGZyb20gJ0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAnVXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVyUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRwdWJsaWMgZnV6enlTdWdnZXN0OiBUZW1wbGF0ZXJGdXp6eVN1Z2dlc3RNb2RhbDtcclxuXHRwdWJsaWMgc2V0dGluZ3M6IFRlbXBsYXRlclNldHRpbmdzOyBcclxuXHRwdWJsaWMgcGFyc2VyOiBUZW1wbGF0ZVBhcnNlclxyXG5cdHByaXZhdGUgdHJpZ2dlcl9vbl9maWxlX2NyZWF0aW9uX2V2ZW50OiBFdmVudFJlZjtcclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcclxuXHJcblx0XHR0aGlzLmZ1enp5U3VnZ2VzdCA9IG5ldyBUZW1wbGF0ZXJGdXp6eVN1Z2dlc3RNb2RhbCh0aGlzLmFwcCwgdGhpcyk7XHJcblx0XHR0aGlzLnBhcnNlciA9IG5ldyBUZW1wbGF0ZVBhcnNlcih0aGlzLmFwcCwgdGhpcyk7XHJcblxyXG5cdFx0dGhpcy5yZWdpc3Rlck1hcmtkb3duUG9zdFByb2Nlc3NvcigoZWwsIGN0eCkgPT4gdGhpcy5keW5hbWljX3RlbXBsYXRlc19wcm9jZXNzb3IoZWwsIGN0eCkpO1xyXG5cclxuXHRcdGFkZEljb24oXCJ0ZW1wbGF0ZXItaWNvblwiLCBJQ09OX0RBVEEpO1xyXG5cdFx0dGhpcy5hZGRSaWJib25JY29uKCd0ZW1wbGF0ZXItaWNvbicsICdUZW1wbGF0ZXInLCBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRoaXMuZnV6enlTdWdnZXN0Lmluc2VydF90ZW1wbGF0ZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6IFwiaW5zZXJ0LXRlbXBsYXRlclwiLFxyXG5cdFx0XHRuYW1lOiBcIkluc2VydCBUZW1wbGF0ZVwiLFxyXG5cdFx0XHRob3RrZXlzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcblx0XHRcdFx0XHRrZXk6ICdlJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZnV6enlTdWdnZXN0Lmluc2VydF90ZW1wbGF0ZSgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuICAgICAgICAgICAgaWQ6IFwicmVwbGFjZS1pbi1maWxlLXRlbXBsYXRlclwiLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlJlcGxhY2UgdGVtcGxhdGVzIGluIHRoZSBhY3RpdmUgZmlsZVwiLFxyXG4gICAgICAgICAgICBob3RrZXlzOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAncicsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucGFyc2VyLnJlcGxhY2VfaW5fYWN0aXZlX2ZpbGUoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJqdW1wLXRvLW5leHQtY3Vyc29yLWxvY2F0aW9uXCIsXHJcblx0XHRcdG5hbWU6IFwiSnVtcCB0byBuZXh0IGN1cnNvciBsb2NhdGlvblwiLFxyXG5cdFx0XHRob3RrZXlzOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bW9kaWZpZXJzOiBbXCJBbHRcIl0sXHJcblx0XHRcdFx0XHRrZXk6IFwiVGFiXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhpcy5wYXJzZXIuY3Vyc29yX2p1bXBlci5qdW1wX3RvX25leHRfY3Vyc29yX2xvY2F0aW9uKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoKGVycm9yKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvZ19lcnJvcihlcnJvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogXCJjcmVhdGUtbmV3LW5vdGUtZnJvbS10ZW1wbGF0ZVwiLFxyXG5cdFx0XHRuYW1lOiBcIkNyZWF0ZSBuZXcgbm90ZSBmcm9tIHRlbXBsYXRlXCIsXHJcblx0XHRcdGhvdGtleXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtb2RpZmllcnM6IFtcIkFsdFwiXSxcclxuXHRcdFx0XHRcdGtleTogXCJuXCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmZ1enp5U3VnZ2VzdC5jcmVhdGVfbmV3X25vdGVfZnJvbV90ZW1wbGF0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub25MYXlvdXRSZWFkeSgoKSA9PiB7XHJcblx0XHRcdHRoaXMudXBkYXRlX3RyaWdnZXJfZmlsZV9vbl9jcmVhdGlvbigpO1x0XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcblx0XHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtbWVudVwiLCAobWVudTogTWVudSwgZmlsZTogVEZpbGUpID0+IHtcclxuXHRcdFx0XHRpZiAoZmlsZSBpbnN0YW5jZW9mIFRGb2xkZXIpIHtcclxuXHRcdFx0XHRcdG1lbnUuYWRkSXRlbSgoaXRlbTogTWVudUl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0aXRlbS5zZXRUaXRsZShcIkNyZWF0ZSBuZXcgbm90ZSBmcm9tIHRlbXBsYXRlXCIpXHJcblx0XHRcdFx0XHRcdFx0LnNldEljb24oXCJ0ZW1wbGF0ZXItaWNvblwiKVxyXG5cdFx0XHRcdFx0XHRcdC5vbkNsaWNrKGV2dCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZ1enp5U3VnZ2VzdC5jcmVhdGVfbmV3X25vdGVfZnJvbV90ZW1wbGF0ZShmaWxlKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFRlbXBsYXRlclNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuXHR9XHRcclxuXHJcblx0dXBkYXRlX3RyaWdnZXJfZmlsZV9vbl9jcmVhdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnRyaWdnZXJfb25fZmlsZV9jcmVhdGlvbikge1xyXG5cdFx0XHR0aGlzLnRyaWdnZXJfb25fZmlsZV9jcmVhdGlvbl9ldmVudCA9IHRoaXMuYXBwLnZhdWx0Lm9uKFwiY3JlYXRlXCIsIGFzeW5jIChmaWxlOiBUQWJzdHJhY3RGaWxlKSA9PiB7XHJcblx0XHRcdFx0Ly8gVE9ETzogRmluZCBhIHdheSB0byBub3QgdHJpZ2dlciB0aGlzIG9uIGZpbGVzIGNvcHlcclxuXHRcdFx0XHQvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzXHJcblx0XHRcdFx0Ly8gQ3VycmVudGx5LCBJIGhhdmUgdG8gd2FpdCBmb3IgdGhlIGRhaWx5IG5vdGUgcGx1Z2luIHRvIGFkZCB0aGUgZmlsZSBjb250ZW50IGJlZm9yZSByZXBsYWNpbmdcclxuXHRcdFx0XHQvLyBOb3QgYSBwcm9ibGVtIHdpdGggQ2FsZW5kYXIgaG93ZXZlciBzaW5jZSBpdCBjcmVhdGVzIHRoZSBmaWxlIHdpdGggdGhlIGV4aXN0aW5nIGNvbnRlbnRcclxuXHRcdFx0XHRhd2FpdCBkZWxheSgzMDApO1xyXG5cdFx0XHRcdC8vICEgVGhpcyBjb3VsZCBjb3JydXB0IGJpbmFyeSBmaWxlc1xyXG5cdFx0XHRcdGlmICghKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkgfHwgZmlsZS5leHRlbnNpb24gIT09IFwibWRcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnBhcnNlci5yZXBsYWNlX3RlbXBsYXRlc19hbmRfb3ZlcndyaXRlX2luX2ZpbGUoZmlsZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcblx0XHRcdFx0dGhpcy50cmlnZ2VyX29uX2ZpbGVfY3JlYXRpb25fZXZlbnRcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy50cmlnZ2VyX29uX2ZpbGVfY3JlYXRpb25fZXZlbnQpIHtcclxuXHRcdFx0XHR0aGlzLmFwcC52YXVsdC5vZmZyZWYodGhpcy50cmlnZ2VyX29uX2ZpbGVfY3JlYXRpb25fZXZlbnQpO1xyXG5cdFx0XHRcdHRoaXMudHJpZ2dlcl9vbl9maWxlX2NyZWF0aW9uX2V2ZW50ID0gdW5kZWZpbmVkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2dfdXBkYXRlKG1zZzogc3RyaW5nKSB7XHJcblx0XHRsZXQgbm90aWNlID0gbmV3IE5vdGljZShcIlwiLCAxNTAwMCk7XHJcblx0XHQvLyBUT0RPOiBGaW5kIGJldHRlciB3YXkgZm9yIHRoaXNcclxuXHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdG5vdGljZS5ub3RpY2VFbC5pbm5lckhUTUwgPSBgPGI+VGVtcGxhdGVyIHVwZGF0ZTwvYj46PGJyLz4ke21zZ31gO1xyXG5cdH1cclxuXHJcblx0bG9nX2Vycm9yKG1zZzogc3RyaW5nLCBlcnJvcj86IHN0cmluZykge1xyXG5cdFx0bGV0IG5vdGljZSA9IG5ldyBOb3RpY2UoXCJcIiwgODAwMCk7XHJcblx0XHRpZiAoZXJyb3IpIHtcclxuXHRcdFx0Ly8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgZm9yIHRoaXNcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRub3RpY2Uubm90aWNlRWwuaW5uZXJIVE1MID0gYDxiPlRlbXBsYXRlciBFcnJvcjwvYj46PGJyLz4ke21zZ308YnIvPkNoZWNrIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb25zYDtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihtc2csIGVycm9yKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdG5vdGljZS5ub3RpY2VFbC5pbm5lckhUTUwgPSBgPGI+VGVtcGxhdGVyIEVycm9yPC9iPjo8YnIvPiR7bXNnfWA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBkeW5hbWljX3RlbXBsYXRlc19wcm9jZXNzb3IoZWw6IEhUTUxFbGVtZW50LCBjdHg6IGFueSkge1xyXG5cdFx0aWYgKGVsLnRleHRDb250ZW50LmNvbnRhaW5zKFwidHAuZHluYW1pY1wiKSkge1xyXG5cdFx0XHQvLyBUT0RPOiBUaGlzIHdpbGwgbm90IGFsd2F5cyBiZSB0aGUgYWN0aXZlIGZpbGUsIFxyXG5cdFx0XHQvLyBJIG5lZWQgdG8gdXNlIGdldEZpcnN0TGlua3BhdGhEZXN0IGFuZCBjdHggdG8gZmluZCB0aGUgYWN0dWFsIGZpbGVcclxuXHRcdFx0bGV0IGZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xyXG5cdFx0XHRhd2FpdCB0aGlzLnBhcnNlci5zZXRDdXJyZW50Q29udGV4dChmaWxlLCBDb250ZXh0TW9kZS5EWU5BTUlDKTtcclxuXHRcdFx0bGV0IG5ld19odG1sID0gYXdhaXQgdGhpcy5wYXJzZXIucGFyc2VUZW1wbGF0ZXMoZWwuaW5uZXJIVE1MKTtcclxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gbmV3X2h0bWw7XHJcblx0XHR9XHJcblx0fVxyXG59OyJdLCJuYW1lcyI6WyJQbHVnaW5TZXR0aW5nVGFiIiwiU2V0dGluZyIsImVzY2FwZVJlZ0V4cCIsIm5vcm1hbGl6ZVBhdGgiLCJURm9sZGVyIiwiVmF1bHQiLCJURmlsZSIsIkZ1enp5U3VnZ2VzdE1vZGFsIiwicGF0aCIsImV4aXN0c1N5bmMiLCJyZWFkRmlsZVN5bmMiLCJwYXJzZUxpbmt0ZXh0IiwicmVzb2x2ZVN1YnBhdGgiLCJGaWxlU3lzdGVtQWRhcHRlciIsIk1hcmtkb3duVmlldyIsImdldEFsbFRhZ3MiLCJNb2RhbCIsInByb21pc2lmeSIsImV4ZWMiLCJFdGEu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
