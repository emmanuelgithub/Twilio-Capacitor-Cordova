(self["webpackChunkTwilio_Capacitor_Cordova"] = self["webpackChunkTwilio_Capacitor_Cordova"] || []).push([["src_app_home_home_module_ts"],{

/***/ 946:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidiModule": () => (/* binding */ BidiModule),
/* harmony export */   "DIR_DOCUMENT": () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   "Dir": () => (/* binding */ Dir),
/* harmony export */   "Directionality": () => (/* binding */ Directionality),
/* harmony export */   "ɵangular_material_src_cdk_bidi_bidi_a": () => (/* binding */ DIR_DOCUMENT_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */

const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/** @docs-private */
function DIR_DOCUMENT_FACTORY() {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
class Directionality {
    constructor(_document) {
        /** The current 'ltr' or 'rtl' value. */
        this.value = 'ltr';
        /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            const bodyDir = _document.body ? _document.body.dir : null;
            const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            const value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    ngOnDestroy() {
        this.change.complete();
    }
}
Directionality.ɵfac = function Directionality_Factory(t) { return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8)); };
Directionality.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function Directionality_Factory() { return new Directionality(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
Directionality.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [DIR_DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [DIR_DOCUMENT]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
class Dir {
    constructor() {
        /** Normalized direction that accounts for invalid/unsupported values. */
        this._dir = 'ltr';
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** Event emitted when the direction changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /** @docs-private */
    get dir() { return this._dir; }
    set dir(value) {
        const old = this._dir;
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /** Current layout direction of the element. */
    get value() { return this.dir; }
    /** Initialize once default value has been set. */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.ɵfac = function Dir_Factory(t) { return new (t || Dir)(); };
Dir.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: Dir, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function Dir_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
    } }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: Directionality, useExisting: Dir }])] });
Dir.propDecorators = {
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['dirChange',] }],
    dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir'
            }]
    }], function () { return []; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['dirChange']
        }], dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class BidiModule {
}
BidiModule.ɵfac = function BidiModule_Factory(t) { return new (t || BidiModule)(); };
BidiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BidiModule });
BidiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [Dir],
                declarations: [Dir]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, { declarations: [Dir], exports: [Dir] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=bidi.js.map

/***/ }),

/***/ 9490:
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isNumberValue": () => (/* binding */ _isNumberValue),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "coerceBooleanProperty": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "coerceCssPixelValue": () => (/* binding */ coerceCssPixelValue),
/* harmony export */   "coerceElement": () => (/* binding */ coerceElement),
/* harmony export */   "coerceNumberProperty": () => (/* binding */ coerceNumberProperty),
/* harmony export */   "coerceStringArray": () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


//# sourceMappingURL=coercion.js.map


/***/ }),

/***/ 7736:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ɵMatchMedia": () => (/* binding */ MatchMedia),
/* harmony export */   "ɵMockMatchMedia": () => (/* binding */ MockMatchMedia),
/* harmony export */   "ɵMockMatchMediaProvider": () => (/* binding */ MockMatchMediaProvider),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "removeStyles": () => (/* binding */ removeStyles),
/* harmony export */   "BROWSER_PROVIDER": () => (/* binding */ BROWSER_PROVIDER),
/* harmony export */   "CLASS_NAME": () => (/* binding */ CLASS_NAME),
/* harmony export */   "MediaChange": () => (/* binding */ MediaChange),
/* harmony export */   "StylesheetMap": () => (/* binding */ StylesheetMap),
/* harmony export */   "DEFAULT_CONFIG": () => (/* binding */ DEFAULT_CONFIG),
/* harmony export */   "LAYOUT_CONFIG": () => (/* binding */ LAYOUT_CONFIG),
/* harmony export */   "SERVER_TOKEN": () => (/* binding */ SERVER_TOKEN),
/* harmony export */   "BREAKPOINT": () => (/* binding */ BREAKPOINT),
/* harmony export */   "mergeAlias": () => (/* binding */ mergeAlias),
/* harmony export */   "BaseDirective2": () => (/* binding */ BaseDirective2),
/* harmony export */   "DEFAULT_BREAKPOINTS": () => (/* binding */ DEFAULT_BREAKPOINTS),
/* harmony export */   "ScreenTypes": () => (/* binding */ ScreenTypes),
/* harmony export */   "ORIENTATION_BREAKPOINTS": () => (/* binding */ ORIENTATION_BREAKPOINTS),
/* harmony export */   "BreakPointRegistry": () => (/* binding */ BreakPointRegistry),
/* harmony export */   "BREAKPOINTS": () => (/* binding */ BREAKPOINTS),
/* harmony export */   "MediaObserver": () => (/* binding */ MediaObserver),
/* harmony export */   "MediaTrigger": () => (/* binding */ MediaTrigger),
/* harmony export */   "sortDescendingPriority": () => (/* binding */ sortDescendingPriority),
/* harmony export */   "sortAscendingPriority": () => (/* binding */ sortAscendingPriority),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "StyleUtils": () => (/* binding */ StyleUtils),
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder),
/* harmony export */   "validateBasis": () => (/* binding */ validateBasis),
/* harmony export */   "MediaMarshaller": () => (/* binding */ MediaMarshaller),
/* harmony export */   "BREAKPOINT_PRINT": () => (/* binding */ BREAKPOINT_PRINT),
/* harmony export */   "PrintHook": () => (/* binding */ PrintHook)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8571);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8307);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * Generated from: core/browser-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */

function removeStyles(_document, platformId) {
    return (/**
     * @return {?}
     */
    () => {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId)) {
            /** @type {?} */
            const elements = Array.from(_document.querySelectorAll(`[class*=${CLASS_NAME}]`));
            // RegExp constructor should only be used if passing a variable to the constructor.
            // When using static regular expression it is more performant to use reg exp literal.
            // This is also needed to provide Safari 9 compatibility, please see
            // https://stackoverflow.com/questions/37919802 for more discussion.
            /** @type {?} */
            const classRegex = /\bflex-layout-.+?\b/g;
            elements.forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => {
                el.classList.contains(`${CLASS_NAME}ssr`) && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
            }));
        }
    });
}
/**
 *  Provider to remove SSR styles on the browser
 * @type {?}
 */
const BROWSER_PROVIDER = {
    provide: (/** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_BOOTSTRAP_LISTENER)),
    useFactory: removeStyles,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID],
    multi: true
};
/** @type {?} */
const CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * Generated from: core/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for common Angular Layout utilities
 * *****************************************************************
 */
class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [BROWSER_PROVIDER] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                providers: [BROWSER_PROVIDER]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-change.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
class MediaChange {
    /**
     * @param {?=} matches whether the mediaQuery is currently activated
     * @param {?=} mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
     * @param {?=} mqAlias e.g. gt-sm, md, gt-lg
     * @param {?=} suffix e.g. GtSM, Md, GtLg
     * @param {?=} priority the priority of activation for the given breakpoint
     */
    constructor(matches = false, mediaQuery = 'all', mqAlias = '', suffix = '', priority = 0) {
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
        this.priority = priority;
        this.property = '';
    }
    /**
     * Create an exact copy of the MediaChange
     * @return {?}
     */
    clone() {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/stylesheet-map/stylesheet-map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
class StylesheetMap {
    constructor() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    addStyleToElement(element, style, value) {
        /** @type {?} */
        const stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    }
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    clearStyles() {
        this.stylesheet.clear();
    }
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    getStyleForElement(el, styleName) {
        /** @type {?} */
        const styles = this.stylesheet.get(el);
        /** @type {?} */
        let value = '';
        if (styles) {
            /** @type {?} */
            const style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    }
}
StylesheetMap.ɵfac = function StylesheetMap_Factory(t) { return new (t || StylesheetMap)(); };
/** @nocollapse */ StylesheetMap.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function StylesheetMap_Factory() { return new StylesheetMap(); }, token: StylesheetMap, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StylesheetMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: core/stylesheet-map/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/library-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CONFIG = {
    addFlexToParent: true,
    addOrientationBps: false,
    disableDefaultBps: false,
    disableVendorPrefixes: false,
    serverLoaded: false,
    useColumnBasisZero: true,
    printWithBreakpoints: [],
    mediaTriggerAutoRestore: true,
    ssrObserveBreakpoints: [],
};
/** @type {?} */
const LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Flex Layout token, config options for the library', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => DEFAULT_CONFIG)
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/server-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 * @type {?}
 */
const SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('FlexLayoutServerLoaded', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => false)
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/breakpoint-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Flex Layout token, collect all breakpoints into one provider', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => null)
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/tokens/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/add-alias.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    dest = dest ? dest.clone() : new MediaChange();
    if (source) {
        dest.mqAlias = source.alias;
        dest.mediaQuery = source.mediaQuery;
        dest.suffix = (/** @type {?} */ (source.suffix));
        dest.priority = (/** @type {?} */ (source.priority));
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: utils/layout-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const INLINE = 'inline';
/** @type {?} */
const LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    let [direction, wrap, isInline] = validateValue(value);
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    let [direction, wrap, inline] = value.split(' ');
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find((/**
     * @param {?} x
     * @return {?}
     */
    x => x === direction))) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap = null, inline = false) {
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/base/base2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseDirective2 {
    /**
     * @protected
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        this.elementRef = elementRef;
        this.styleBuilder = styleBuilder;
        this.styler = styler;
        this.marshal = marshal;
        this.DIRECTIVE_KEY = '';
        this.inputs = [];
        /**
         * The most recently used styles for the builder
         */
        this.mru = {};
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /**
         * Cache map for style computation
         */
        this.styleCache = new Map();
    }
    /**
     * Access to host element's parent DOM node
     * @protected
     * @return {?}
     */
    get parentElement() {
        return this.elementRef.nativeElement.parentElement;
    }
    /**
     * Access to the HTMLElement for the directive
     * @protected
     * @return {?}
     */
    get nativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * Access to the activated value for the directive
     * @return {?}
     */
    get activatedValue() {
        return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activatedValue(value) {
        this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
    }
    /**
     * For \@Input changes
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        Object.keys(changes).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (this.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                const bp = key.split('.').slice(1).join('.');
                /** @type {?} */
                const val = changes[key].currentValue;
                this.setValue(val, bp);
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroySubject.next();
        this.destroySubject.complete();
        this.marshal.releaseElement(this.nativeElement);
    }
    /**
     * Register with central marshaller service
     * @protected
     * @param {?=} extraTriggers
     * @return {?}
     */
    init(extraTriggers = []) {
        this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
    }
    /**
     * Add styles to the element using predefined style builder
     * @protected
     * @param {?} input
     * @param {?=} parent
     * @return {?}
     */
    addStyles(input, parent) {
        /** @type {?} */
        const builder = this.styleBuilder;
        /** @type {?} */
        const useCache = builder.shouldCache;
        /** @type {?} */
        let genStyles = this.styleCache.get(input);
        if (!genStyles || !useCache) {
            genStyles = builder.buildStyles(input, parent);
            if (useCache) {
                this.styleCache.set(input, genStyles);
            }
        }
        this.mru = Object.assign({}, genStyles);
        this.applyStyleToElement(genStyles);
        builder.sideEffect(input, genStyles, parent);
    }
    /**
     * Remove generated styles from an element using predefined style builder
     * @protected
     * @return {?}
     */
    clearStyles() {
        Object.keys(this.mru).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            this.mru[k] = '';
        }));
        this.applyStyleToElement(this.mru);
        this.mru = {};
    }
    /**
     * Force trigger style updates on DOM element
     * @protected
     * @return {?}
     */
    triggerUpdate() {
        this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
    }
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @protected
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    getFlexFlowDirection(target, addIfMissing = false) {
        if (target) {
            const [value, hasInlineValue] = this.styler.getFlowDirection(target);
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                const style = buildLayoutCSS(value);
                /** @type {?} */
                const elements = [target];
                this.styler.applyStyleToElements(style, elements);
            }
            return value.trim();
        }
        return 'row';
    }
    /**
     * @protected
     * @param {?} target
     * @return {?}
     */
    hasWrap(target) {
        return this.styler.hasWrap(target);
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     * @protected
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    applyStyleToElement(style, value, element = this.nativeElement) {
        this.styler.applyStyleToElement(element, style, value);
    }
    /**
     * @protected
     * @param {?} val
     * @param {?} bp
     * @return {?}
     */
    setValue(val, bp) {
        this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
    }
    /**
     * @protected
     * @param {?} input
     * @return {?}
     */
    updateWithValue(input) {
        if (this.currentValue !== input) {
            this.addStyles(input);
            this.currentValue = input;
        }
    }
}
BaseDirective2.ɵfac = function BaseDirective2_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"](); };
BaseDirective2.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseDirective2, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/**
 * @fileoverview added by tsickle
 * Generated from: core/base/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/data/break-points.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NOTE: Smaller ranges have HIGHER priority since the match is more specific
 * @type {?}
 */
const DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.98px)',
        priority: 1000,
    },
    {
        alias: 'sm',
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.98px)',
        priority: 900,
    },
    {
        alias: 'md',
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.98px)',
        priority: 800,
    },
    {
        alias: 'lg',
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.98px)',
        priority: 700,
    },
    {
        alias: 'xl',
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.98px)',
        priority: 600,
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 599.98px)',
        priority: 950,
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 959.98px)',
        priority: 850,
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1279.98px)',
        priority: 750,
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        priority: 650,
        mediaQuery: 'screen and (max-width: 1919.98px)',
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)',
        priority: -950,
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)',
        priority: -850,
    }, {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)',
        priority: -750,
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)',
        priority: -650,
    }
];

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/data/orientation-break-points.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/* tslint:disable */
/** @type {?} */
const HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.98px)';
/** @type {?} */
const HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.98px)';
/** @type {?} */
const TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)';
/** @type {?} */
const TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)';
/** @type {?} */
const WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
/** @type {?} */
const WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
/** @type {?} */
const ScreenTypes = {
    'HANDSET': `${HANDSET_PORTRAIT}, ${HANDSET_LANDSCAPE}`,
    'TABLET': `${TABLET_PORTRAIT} , ${TABLET_LANDSCAPE}`,
    'WEB': `${WEB_PORTRAIT}, ${WEB_LANDSCAPE} `,
    'HANDSET_PORTRAIT': `${HANDSET_PORTRAIT}`,
    'TABLET_PORTRAIT': `${TABLET_PORTRAIT} `,
    'WEB_PORTRAIT': `${WEB_PORTRAIT}`,
    'HANDSET_LANDSCAPE': `${HANDSET_LANDSCAPE}`,
    'TABLET_LANDSCAPE': `${TABLET_LANDSCAPE}`,
    'WEB_LANDSCAPE': `${WEB_LANDSCAPE}`
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 * @type {?}
 */
const ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', priority: 2000, 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', priority: 2000, 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', priority: 2000, 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', priority: 2100, 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', priority: 2100, 'mediaQuery': ScreenTypes.TABLET_LANDSCAPE },
    { 'alias': 'tablet.portrait', priority: 2100, 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', priority: 2200, 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', priority: 2200, 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', priority: 2200, 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/break-point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: utils/object-extend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/breakpoint-tools.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    /** @type {?} */
    let first = part.length > 0 ? part.charAt(0) : '';
    /** @type {?} */
    let remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach((/**
     * @param {?} bp
     * @return {?}
     */
    (bp) => {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    }));
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom = []) {
    /** @type {?} */
    const dict = {};
    defaults.forEach((/**
     * @param {?} bp
     * @return {?}
     */
    bp => {
        dict[bp.alias] = bp;
    }));
    // Merge custom breakpoints
    custom.forEach((/**
     * @param {?} bp
     * @return {?}
     */
    (bp) => {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    }));
    return validateSuffixes(Object.keys(dict).map((/**
     * @param {?} k
     * @return {?}
     */
    k => dict[k])));
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/break-points-token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 * @type {?}
 */
const BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Token (@angular/flex-layout) Breakpoints', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const breakpoints = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(BREAKPOINT);
        /** @type {?} */
        const layoutConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(LAYOUT_CONFIG);
        /** @type {?} */
        const bpFlattenArray = [].concat.apply([], (breakpoints || [])
            .map((/**
         * @param {?} v
         * @return {?}
         */
        (v) => Array.isArray(v) ? v : [v])));
        /** @type {?} */
        const builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS)
            .concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
    })
});

/**
 * @fileoverview added by tsickle
 * Generated from: core/utils/sort.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * HOF to sort the breakpoints by descending priority
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sortDescendingPriority(a, b) {
    /** @type {?} */
    const priorityA = a ? a.priority || 0 : 0;
    /** @type {?} */
    const priorityB = b ? b.priority || 0 : 0;
    return priorityB - priorityA;
}
/**
 * HOF to sort the breakpoints by ascending priority
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function sortAscendingPriority(a, b) {
    /** @type {?} */
    const pA = a.priority || 0;
    /** @type {?} */
    const pB = b.priority || 0;
    return pA - pB;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/break-point-registry.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
class BreakPointRegistry {
    /**
     * @param {?} list
     */
    constructor(list) {
        /**
         * Memoized BreakPoint Lookups
         */
        this.findByMap = new Map();
        this.items = [...list].sort(sortAscendingPriority);
    }
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    findByAlias(alias) {
        return !alias ? null : this.findWithPredicate(alias, (/**
         * @param {?} bp
         * @return {?}
         */
        (bp) => bp.alias == alias));
    }
    /**
     * @param {?} query
     * @return {?}
     */
    findByQuery(query) {
        return this.findWithPredicate(query, (/**
         * @param {?} bp
         * @return {?}
         */
        (bp) => bp.mediaQuery == query));
    }
    /**
     * Get all the breakpoints whose ranges could overlapping `normal` ranges;
     * e.g. gt-sm overlaps md, lg, and xl
     * @return {?}
     */
    get overlappings() {
        return this.items.filter((/**
         * @param {?} it
         * @return {?}
         */
        it => it.overlapping == true));
    }
    /**
     * Get list of all registered (non-empty) breakpoint aliases
     * @return {?}
     */
    get aliases() {
        return this.items.map((/**
         * @param {?} it
         * @return {?}
         */
        it => it.alias));
    }
    /**
     * Aliases are mapped to properties using suffixes
     * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
     * for property layoutGtSM.
     * @return {?}
     */
    get suffixes() {
        return this.items.map((/**
         * @param {?} it
         * @return {?}
         */
        it => !!it.suffix ? it.suffix : ''));
    }
    /**
     * Memoized lookup using custom predicate function
     * @private
     * @param {?} key
     * @param {?} searchFn
     * @return {?}
     */
    findWithPredicate(key, searchFn) {
        /** @type {?} */
        let response = this.findByMap.get(key);
        if (!response) {
            response = this.items.find(searchFn) || null;
            this.findByMap.set(key, response);
        }
        return response || null;
    }
}
BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) { return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BREAKPOINTS)); };
/** @nocollapse */ BreakPointRegistry.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function BreakPointRegistry_Factory() { return new BreakPointRegistry((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(BREAKPOINTS)); }, token: BreakPointRegistry, providedIn: "root" });
/** @nocollapse */
BreakPointRegistry.ctorParameters = () => [
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [BREAKPOINTS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BreakPointRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [BREAKPOINTS]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: core/breakpoints/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/match-media/match-media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
class MatchMedia {
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     */
    constructor(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        /**
         * Initialize source with 'all' so all non-responsive APIs trigger style updates
         */
        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(new MediaChange(true));
        this.registry = new Map();
        this.pendingRemoveListenerFns = [];
        this._observable$ = this.source.asObservable();
    }
    /**
     * Publish list of all current activations
     * @return {?}
     */
    get activations() {
        /** @type {?} */
        const results = [];
        this.registry.forEach((/**
         * @param {?} mql
         * @param {?} key
         * @return {?}
         */
        (mql, key) => {
            if (mql.matches) {
                results.push(key);
            }
        }));
        return results;
    }
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    isActive(mediaQuery) {
        /** @type {?} */
        const mql = this.registry.get(mediaQuery);
        return !!mql ? mql.matches : this.registerQuery(mediaQuery).some((/**
         * @param {?} m
         * @return {?}
         */
        m => m.matches));
    }
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * Use deferred registration process to register breakpoints only on subscription
     * This logic also enforces logic to register all mediaQueries BEFORE notify
     * subscribers of notifications.
     * @param {?=} mqList
     * @param {?=} filterOthers
     * @return {?}
     */
    observe(mqList, filterOthers = false) {
        if (mqList && mqList.length) {
            /** @type {?} */
            const matchMedia$ = this._observable$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((/**
             * @param {?} change
             * @return {?}
             */
            (change) => !filterOthers ? true : (mqList.indexOf(change.mediaQuery) > -1))));
            /** @type {?} */
            const registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                // tslint:disable-line:max-line-length
                /** @type {?} */
                const matches = this.registerQuery(mqList);
                if (matches.length) {
                    /** @type {?} */
                    const lastChange = (/** @type {?} */ (matches.pop()));
                    matches.forEach((/**
                     * @param {?} e
                     * @return {?}
                     */
                    (e) => {
                        observer.next(e);
                    }));
                    this.source.next(lastChange); // last match is cached
                }
                observer.complete();
            }));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(registration$, matchMedia$);
        }
        return this._observable$;
    }
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    registerQuery(mediaQuery) {
        /** @type {?} */
        const list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
        /** @type {?} */
        const matches = [];
        buildQueryCss(list, this._document);
        list.forEach((/**
         * @param {?} query
         * @return {?}
         */
        (query) => {
            /** @type {?} */
            const onMQLEvent = (/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                this._zone.run((/**
                 * @return {?}
                 */
                () => this.source.next(new MediaChange(e.matches, query))));
            });
            /** @type {?} */
            let mql = this.registry.get(query);
            if (!mql) {
                mql = this.buildMQL(query);
                mql.addListener(onMQLEvent);
                this.pendingRemoveListenerFns.push((/**
                 * @return {?}
                 */
                () => (/** @type {?} */ (mql)).removeListener(onMQLEvent)));
                this.registry.set(query, mql);
            }
            if (mql.matches) {
                matches.push(new MediaChange(true, query));
            }
        }));
        return matches;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        let fn;
        while (fn = this.pendingRemoveListenerFns.pop()) {
            fn();
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    buildMQL(query) {
        return constructMql(query, (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId));
    }
}
MatchMedia.ɵfac = function MatchMedia_Factory(t) { return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
/** @nocollapse */ MatchMedia.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MatchMedia_Factory() { return new MatchMedia((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); }, token: MatchMedia, providedIn: "root" });
/** @nocollapse */
MatchMedia.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatchMedia, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 * @type {?}
 */
const ALL_STYLES = {};
/**
 * For Webkit engines that only trigger the MediaQueryList Listener
 * when there is at least one CSS selector for the respective media query.
 *
 * @param {?} mediaQueries
 * @param {?} _document
 * @return {?}
 */
function buildQueryCss(mediaQueries, _document) {
    /** @type {?} */
    const list = mediaQueries.filter((/**
     * @param {?} it
     * @return {?}
     */
    it => !ALL_STYLES[it]));
    if (list.length > 0) {
        /** @type {?} */
        const query = list.join(', ');
        try {
            /** @type {?} */
            const styleEl = _document.createElement('style');
            styleEl.setAttribute('type', 'text/css');
            if (!((/** @type {?} */ (styleEl))).styleSheet) {
                /** @type {?} */
                const cssText = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${query} {.fx-query-test{ }}
`;
                styleEl.appendChild(_document.createTextNode(cssText));
            }
            (/** @type {?} */ (_document.head)).appendChild(styleEl);
            // Store in private global registry
            list.forEach((/**
             * @param {?} mq
             * @return {?}
             */
            mq => ALL_STYLES[mq] = styleEl));
        }
        catch (e) {
            console.error(e);
        }
    }
}
/**
 * @param {?} query
 * @param {?} isBrowser
 * @return {?}
 */
function constructMql(query, isBrowser) {
    /** @type {?} */
    const canListen = isBrowser && !!((/** @type {?} */ (window))).matchMedia('all').addListener;
    return canListen ? ((/** @type {?} */ (window))).matchMedia(query) : (/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: (/**
         * @return {?}
         */
        () => {
        }),
        removeListener: (/**
         * @return {?}
         */
        () => {
        }),
        onchange: null,
        /**
         * @return {?}
         */
        addEventListener() {
        },
        /**
         * @return {?}
         */
        removeEventListener() {
        },
        /**
         * @return {?}
         */
        dispatchEvent() {
            return false;
        }
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/match-media/mock/mock-match-media.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
class MockMatchMedia extends MatchMedia {
    // Allow fallback to overlapping mediaQueries
    /**
     * @param {?} _zone
     * @param {?} _platformId
     * @param {?} _document
     * @param {?} _breakpoints
     */
    constructor(_zone, _platformId, _document, _breakpoints) {
        super(_zone, _platformId, _document);
        this._breakpoints = _breakpoints;
        this.autoRegisterQueries = true; // Used for testing BreakPoint registrations
        // Used for testing BreakPoint registrations
        this.useOverlaps = false; // Allow fallback to overlapping mediaQueries
    }
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    clearAll() {
        this.registry.forEach((/**
         * @param {?} mql
         * @return {?}
         */
        (mql) => {
            ((/** @type {?} */ (mql))).destroy();
        }));
        this.registry.clear();
        this.useOverlaps = false;
    }
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    activate(mediaQuery, useOverlaps = false) {
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    }
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    _validateQuery(queryOrAlias) {
        /** @type {?} */
        const bp = this._breakpoints.findByAlias(queryOrAlias);
        return (bp && bp.mediaQuery) || queryOrAlias;
    }
    /**
     * Manually onMediaChange any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @private
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    _activateWithOverlaps(mediaQuery, useOverlaps) {
        if (useOverlaps) {
            /** @type {?} */
            const bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */
            const alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias(['lt-xl']);
                    break;
                case 'md':
                    this._activateByAlias(['lt-xl', 'lt-lg']);
                    break;
                case 'sm':
                    this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md']);
                    break;
                case 'xs':
                    this._activateByAlias(['lt-xl', 'lt-lg', 'lt-md', 'lt-sm']);
                    break;
            }
            // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias(['gt-lg', 'gt-md', 'gt-sm', 'gt-xs']);
                    break;
                case 'lg':
                    this._activateByAlias(['gt-md', 'gt-sm', 'gt-xs']);
                    break;
                case 'md':
                    this._activateByAlias(['gt-sm', 'gt-xs']);
                    break;
                case 'sm':
                    this._activateByAlias(['gt-xs']);
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    }
    /**
     *
     * @private
     * @param {?} aliases
     * @return {?}
     */
    _activateByAlias(aliases) {
        /** @type {?} */
        const activate = (/**
         * @param {?} alias
         * @return {?}
         */
        (alias) => {
            /** @type {?} */
            const bp = this._breakpoints.findByAlias(alias);
            this._activateByQuery(bp ? bp.mediaQuery : alias);
        });
        aliases.forEach(activate);
    }
    /**
     *
     * @private
     * @param {?} mediaQuery
     * @return {?}
     */
    _activateByQuery(mediaQuery) {
        if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
            this._registerMediaQuery(mediaQuery);
        }
        /** @type {?} */
        const mql = (/** @type {?} */ (this.registry.get(mediaQuery)));
        if (mql && !this.isActive(mediaQuery)) {
            this.registry.set(mediaQuery, mql.activate());
        }
        return this.hasActivated;
    }
    /**
     * Deactivate all current MQLs and reset the buffer
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    _deactivateAll() {
        (/** @type {?} */ (this)).registry.forEach((/**
         * @param {?} it
         * @return {?}
         */
        (it) => {
            ((/** @type {?} */ (it))).deactivate();
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @private
     * @param {?} mediaQuery
     * @return {?}
     */
    _registerMediaQuery(mediaQuery) {
        if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    }
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @protected
     * @param {?} query
     * @return {?}
     */
    buildMQL(query) {
        return new MockMediaQueryList(query);
    }
    /**
     * @protected
     * @return {?}
     */
    get hasActivated() {
        return this.activations.length > 0;
    }
}
MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) { return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry)); };
MockMatchMedia.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MockMatchMedia, factory: MockMatchMedia.ɵfac });
/** @nocollapse */
MockMatchMedia.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] },
    { type: BreakPointRegistry }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MockMatchMedia, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }, { type: BreakPointRegistry }]; }, null); })();
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
class MockMediaQueryList {
    /**
     * @param {?} _mediaQuery
     */
    constructor(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._isActive;
    }
    /**
     * @return {?}
     */
    get media() {
        return this._mediaQuery;
    }
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    destroy() {
        this.deactivate();
        this._listeners = [];
    }
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    activate() {
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach((/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => {
                /** @type {?} */
                const cb = (/** @type {?} */ (callback));
                cb.call(this, (/** @type {?} */ ({ matches: this.matches, media: this.media })));
            }));
        }
        return this;
    }
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    deactivate() {
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach((/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => {
                /** @type {?} */
                const cb = (/** @type {?} */ (callback));
                cb.call(this, (/** @type {?} */ ({ matches: this.matches, media: this.media })));
            }));
        }
        return this;
    }
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    addListener(listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            /** @type {?} */
            const cb = (/** @type {?} */ (listener));
            cb.call(this, (/** @type {?} */ ({ matches: this.matches, media: this.media })));
        }
    }
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    removeListener(_) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    addEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @param {?} __
     * @param {?=} ___
     * @return {?}
     */
    removeEventListener(_, __, ___) {
    }
    /**
     * @param {?} _
     * @return {?}
     */
    dispatchEvent(_) {
        return false;
    }
}
/**
 * Pre-configured provider for MockMatchMedia
 * @type {?}
 */
const MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * Generated from: core/match-media/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-marshaller/print-hook.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PRINT = 'print';
/** @type {?} */
const BREAKPOINT_PRINT = {
    alias: PRINT,
    mediaQuery: PRINT,
    priority: 1000
};
/**
 * PrintHook - Use to intercept print MediaQuery activations and force
 *             layouts to render with the specified print alias/breakpoint
 *
 * Used in MediaMarshaller and MediaObserver
 */
class PrintHook {
    /**
     * @param {?} breakpoints
     * @param {?} layoutConfig
     * @param {?} _document
     */
    constructor(breakpoints, layoutConfig, _document) {
        this.breakpoints = breakpoints;
        this.layoutConfig = layoutConfig;
        this._document = _document;
        // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
        //  and `afterprint` event listeners.
        this.registeredBeforeAfterPrintHooks = false;
        // isPrintingBeforeAfterEvent is used to track if we are printing from within
        // a `beforeprint` event handler. This prevents the typicall `stopPrinting`
        // form `interceptEvents` so that printing is not stopped while the dialog
        // is still open. This is an extension of the `isPrinting` property on
        // browsers which support `beforeprint` and `afterprint` events.
        this.isPrintingBeforeAfterEvent = false;
        this.beforePrintEventListeners = [];
        this.afterPrintEventListeners = [];
        /**
         * Is this service currently in Print-mode ?
         */
        this.isPrinting = false;
        this.queue = new PrintQueue();
        this.deactivations = [];
    }
    /**
     * Add 'print' mediaQuery: to listen for matchMedia activations
     * @param {?} queries
     * @return {?}
     */
    withPrintQuery(queries) {
        return [...queries, PRINT];
    }
    /**
     * Is the MediaChange event for any 'print' \@media
     * @param {?} e
     * @return {?}
     */
    isPrintEvent(e) {
        return e.mediaQuery.startsWith(PRINT);
    }
    /**
     * What is the desired mqAlias to use while printing?
     * @return {?}
     */
    get printAlias() {
        return this.layoutConfig.printWithBreakpoints || [];
    }
    /**
     * Lookup breakpoints associated with print aliases.
     * @return {?}
     */
    get printBreakPoints() {
        return (/** @type {?} */ (this.printAlias
            .map((/**
         * @param {?} alias
         * @return {?}
         */
        alias => this.breakpoints.findByAlias(alias)))
            .filter((/**
         * @param {?} bp
         * @return {?}
         */
        bp => bp !== null))));
    }
    /**
     * Lookup breakpoint associated with mediaQuery
     * @param {?} __0
     * @return {?}
     */
    getEventBreakpoints({ mediaQuery }) {
        /** @type {?} */
        const bp = this.breakpoints.findByQuery(mediaQuery);
        /** @type {?} */
        const list = bp ? [...this.printBreakPoints, bp] : this.printBreakPoints;
        return list.sort(sortDescendingPriority);
    }
    /**
     * Update event with printAlias mediaQuery information
     * @param {?} event
     * @return {?}
     */
    updateEvent(event) {
        /** @type {?} */
        let bp = this.breakpoints.findByQuery(event.mediaQuery);
        if (this.isPrintEvent(event)) {
            // Reset from 'print' to first (highest priority) print breakpoint
            bp = this.getEventBreakpoints(event)[0];
            event.mediaQuery = bp ? bp.mediaQuery : '';
        }
        return mergeAlias(event, bp);
    }
    // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
    // trigger print styles synchronously and apply proper layout styles.
    // It is a noop if the hooks have already been registered or if the document's
    // `defaultView` is not available.
    /**
     * @private
     * @param {?} target
     * @return {?}
     */
    registerBeforeAfterPrintHooks(target) {
        // `defaultView` may be null when rendering on the server or in other contexts.
        if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
            return;
        }
        this.registeredBeforeAfterPrintHooks = true;
        /** @type {?} */
        const beforePrintListener = (/**
         * @return {?}
         */
        () => {
            // If we aren't already printing, start printing and update the styles as
            // if there was a regular print `MediaChange`(from matchMedia).
            if (!this.isPrinting) {
                this.isPrintingBeforeAfterEvent = true;
                this.startPrinting(target, this.getEventBreakpoints(new MediaChange(true, PRINT)));
                target.updateStyles();
            }
        });
        /** @type {?} */
        const afterPrintListener = (/**
         * @return {?}
         */
        () => {
            // If we aren't already printing, start printing and update the styles as
            // if there was a regular print `MediaChange`(from matchMedia).
            this.isPrintingBeforeAfterEvent = false;
            if (this.isPrinting) {
                this.stopPrinting(target);
                target.updateStyles();
            }
        });
        // Could we have teardown logic to remove if there are no print listeners being used?
        this._document.defaultView.addEventListener('beforeprint', beforePrintListener);
        this._document.defaultView.addEventListener('afterprint', afterPrintListener);
        this.beforePrintEventListeners.push(beforePrintListener);
        this.afterPrintEventListeners.push(afterPrintListener);
    }
    /**
     * Prepare RxJS filter operator with partial application
     * @param {?} target
     * @return {?} pipeable filter predicate
     */
    interceptEvents(target) {
        this.registerBeforeAfterPrintHooks(target);
        return (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.isPrintEvent(event)) {
                if (event.matches && !this.isPrinting) {
                    this.startPrinting(target, this.getEventBreakpoints(event));
                    target.updateStyles();
                }
                else if (!event.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent) {
                    this.stopPrinting(target);
                    target.updateStyles();
                }
            }
            else {
                this.collectActivations(event);
            }
        });
    }
    /**
     * Stop mediaChange event propagation in event streams
     * @return {?}
     */
    blockPropagation() {
        return (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            return !(this.isPrinting || this.isPrintEvent(event));
        });
    }
    /**
     * Save current activateBreakpoints (for later restore)
     * and substitute only the printAlias breakpoint
     * @protected
     * @param {?} target
     * @param {?} bpList
     * @return {?}
     */
    startPrinting(target, bpList) {
        this.isPrinting = true;
        target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
    }
    /**
     * For any print de-activations, reset the entire print queue
     * @protected
     * @param {?} target
     * @return {?}
     */
    stopPrinting(target) {
        target.activatedBreakpoints = this.deactivations;
        this.deactivations = [];
        this.queue.clear();
        this.isPrinting = false;
    }
    /**
     * To restore pre-Print Activations, we must capture the proper
     * list of breakpoint activations BEFORE print starts. OnBeforePrint()
     * is supported; so 'print' mediaQuery activations are used as a fallback
     * in browsers without `beforeprint` support.
     *
     * >  But activated breakpoints are deactivated BEFORE 'print' activation.
     *
     * Let's capture all de-activations using the following logic:
     *
     *  When not printing:
     *    - clear cache when activating non-print breakpoint
     *    - update cache (and sort) when deactivating
     *
     *  When printing:
     *    - sort and save when starting print
     *    - restore as activatedTargets and clear when stop printing
     * @param {?} event
     * @return {?}
     */
    collectActivations(event) {
        if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
            if (!event.matches) {
                /** @type {?} */
                const bp = this.breakpoints.findByQuery(event.mediaQuery);
                if (bp) { // Deactivating a breakpoint
                    this.deactivations.push(bp);
                    this.deactivations.sort(sortDescendingPriority);
                }
            }
            else if (!this.isPrintingBeforeAfterEvent) {
                // Only clear deactivations if we aren't printing from a `beforeprint` event.
                // Otherwise this will clear before `stopPrinting()` is called to restore
                // the pre-Print Activations.
                this.deactivations = [];
            }
        }
    }
    /**
     * Teardown logic for the service.
     * @return {?}
     */
    ngOnDestroy() {
        if (this._document.defaultView) {
            this.beforePrintEventListeners.forEach((/**
             * @param {?} l
             * @return {?}
             */
            l => this._document.defaultView.removeEventListener('beforeprint', l)));
            this.afterPrintEventListeners.forEach((/**
             * @param {?} l
             * @return {?}
             */
            l => this._document.defaultView.removeEventListener('afterprint', l)));
        }
    }
}
PrintHook.ɵfac = function PrintHook_Factory(t) { return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
/** @nocollapse */ PrintHook.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function PrintHook_Factory() { return new PrintHook((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(BreakPointRegistry), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LAYOUT_CONFIG), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); }, token: PrintHook, providedIn: "root" });
/** @nocollapse */
PrintHook.ctorParameters = () => [
    { type: BreakPointRegistry },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [LAYOUT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PrintHook, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakPointRegistry }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [LAYOUT_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();
// ************************************************************************
// Internal Utility class 'PrintQueue'
// ************************************************************************
/**
 * Utility class to manage print breakpoints + activatedBreakpoints
 * with correct sorting WHILE printing
 */
class PrintQueue {
    constructor() {
        /**
         * Sorted queue with prioritized print breakpoints
         */
        this.printBreakpoints = [];
    }
    /**
     * @param {?} bpList
     * @return {?}
     */
    addPrintBreakpoints(bpList) {
        bpList.push(BREAKPOINT_PRINT);
        bpList.sort(sortDescendingPriority);
        bpList.forEach((/**
         * @param {?} bp
         * @return {?}
         */
        bp => this.addBreakpoint(bp)));
        return this.printBreakpoints;
    }
    /**
     * Add Print breakpoint to queue
     * @param {?} bp
     * @return {?}
     */
    addBreakpoint(bp) {
        if (!!bp) {
            /** @type {?} */
            const bpInList = this.printBreakpoints.find((/**
             * @param {?} it
             * @return {?}
             */
            it => it.mediaQuery === bp.mediaQuery));
            if (bpInList === undefined) {
                // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
                // register as highest priority in the queue
                this.printBreakpoints = isPrintBreakPoint(bp) ? [bp, ...this.printBreakpoints]
                    : [...this.printBreakpoints, bp];
            }
        }
    }
    /**
     * Restore original activated breakpoints and clear internal caches
     * @return {?}
     */
    clear() {
        this.printBreakpoints = [];
    }
}
// ************************************************************************
// Internal Utility methods
// ************************************************************************
/**
 * Only support intercept queueing if the Breakpoint is a print \@media query
 * @param {?} bp
 * @return {?}
 */
function isPrintBreakPoint(bp) {
    return bp ? bp.mediaQuery.startsWith(PRINT) : false;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/utils/array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-observer/media-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
 * if a mediaQuery is currently activated.
 *
 * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
 * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
 * in 1 event notification. The reported activations will be sorted in descending priority order.
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * Note: Developers should note that only mediaChange activations (not de-activations)
 *       are announced by the MediaObserver.
 *
 * \@usage
 *
 *  // RxJS
 *  import { filter } from 'rxjs/operators';
 *  import { MediaObserver } from '\@angular/flex-layout';
 *
 * \@Component({ ... })
 *  export class AppComponent {
 *    status: string = '';
 *
 *    constructor(mediaObserver: MediaObserver) {
 *      const media$ = mediaObserver.asObservable().pipe(
 *        filter((changes: MediaChange[]) => true)   // silly noop filter
 *      );
 *
 *      media$.subscribe((changes: MediaChange[]) => {
 *        let status = '';
 *        changes.forEach( change => {
 *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
 *        });
 *        this.status = status;
 *     });
 *
 *    }
 *  }
 */
class MediaObserver {
    /**
     * @param {?} breakpoints
     * @param {?} matchMedia
     * @param {?} hook
     */
    constructor(breakpoints, matchMedia, hook) {
        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.hook = hook;
        /**
         * Filter MediaChange notifications for overlapping breakpoints
         */
        this.filterOverlaps = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this._media$ = this.watchActivations();
        this.media$ = this._media$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((/**
         * @param {?} changes
         * @return {?}
         */
        (changes) => changes.length > 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((/**
         * @param {?} changes
         * @return {?}
         */
        (changes) => changes[0])));
    }
    /**
     * Completes the active subject, signalling to all complete for all
     * MediaObserver subscribers
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    // ************************************************
    // Public Methods
    // ************************************************
    /**
     * Observe changes to current activation 'list'
     * @return {?}
     */
    asObservable() {
        return this._media$;
    }
    /**
     * Allow programmatic query to determine if one or more media query/alias match
     * the current viewport size.
     * @param {?} value One or more media queries (or aliases) to check.
     * @return {?} Whether any of the media queries match.
     */
    isActive(value) {
        /** @type {?} */
        const aliases = splitQueries(coerceArray(value));
        return aliases.some((/**
         * @param {?} alias
         * @return {?}
         */
        alias => {
            /** @type {?} */
            const query = toMediaQuery(alias, this.breakpoints);
            return query !== null && this.matchMedia.isActive(query);
        }));
    }
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @private
     * @return {?}
     */
    watchActivations() {
        /** @type {?} */
        const queries = this.breakpoints.items.map((/**
         * @param {?} bp
         * @return {?}
         */
        bp => bp.mediaQuery));
        return this.buildObservable(queries);
    }
    /**
     * Only pass/announce activations (not de-activations)
     *
     * Since multiple-mediaQueries can be activation in a cycle,
     * gather all current activations into a single list of changes to observers
     *
     * Inject associated (if any) alias information into the MediaChange event
     * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
     * - Exclude print activations that do not have an associated mediaQuery
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @private
     * @param {?} mqList
     * @return {?}
     */
    buildObservable(mqList) {
        /** @type {?} */
        const hasChanges = (/**
         * @param {?} changes
         * @return {?}
         */
        (changes) => {
            /** @type {?} */
            const isValidQuery = (/**
             * @param {?} change
             * @return {?}
             */
            (change) => (change.mediaQuery.length > 0));
            return (changes.filter(isValidQuery).length > 0);
        });
        /** @type {?} */
        const excludeOverlaps = (/**
         * @param {?} changes
         * @return {?}
         */
        (changes) => {
            return !this.filterOverlaps ? changes : changes.filter((/**
             * @param {?} change
             * @return {?}
             */
            change => {
                /** @type {?} */
                const bp = this.breakpoints.findByQuery(change.mediaQuery);
                return !bp ? true : !bp.overlapping;
            }));
        });
        /**
         */
        return this.matchMedia
            .observe(this.hook.withPrintQuery(mqList))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((/**
         * @param {?} change
         * @return {?}
         */
        (change) => change.matches)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0, rxjs__WEBPACK_IMPORTED_MODULE_9__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)((/**
         * @param {?} _
         * @return {?}
         */
        _ => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.findAllActivations()))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(excludeOverlaps), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(hasChanges), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed$));
    }
    /**
     * Find all current activations and prepare single list of activations
     * sorted by descending priority.
     * @private
     * @return {?}
     */
    findAllActivations() {
        /** @type {?} */
        const mergeMQAlias = (/**
         * @param {?} change
         * @return {?}
         */
        (change) => {
            /** @type {?} */
            let bp = this.breakpoints.findByQuery(change.mediaQuery);
            return mergeAlias(change, bp);
        });
        /** @type {?} */
        const replaceWithPrintAlias = (/**
         * @param {?} change
         * @return {?}
         */
        (change) => {
            return this.hook.isPrintEvent(change) ? this.hook.updateEvent(change) : change;
        });
        return this.matchMedia
            .activations
            .map((/**
         * @param {?} query
         * @return {?}
         */
        query => new MediaChange(true, query)))
            .map(replaceWithPrintAlias)
            .map(mergeMQAlias)
            .sort(sortDescendingPriority);
    }
}
MediaObserver.ɵfac = function MediaObserver_Factory(t) { return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PrintHook)); };
/** @nocollapse */ MediaObserver.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MediaObserver_Factory() { return new MediaObserver((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(BreakPointRegistry), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MatchMedia), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(PrintHook)); }, token: MediaObserver, providedIn: "root" });
/** @nocollapse */
MediaObserver.ctorParameters = () => [
    { type: BreakPointRegistry },
    { type: MatchMedia },
    { type: PrintHook }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakPointRegistry }, { type: MatchMedia }, { type: PrintHook }]; }, null); })();
/**
 * Find associated breakpoint (if any)
 * @param {?} query
 * @param {?} locator
 * @return {?}
 */
function toMediaQuery(query, locator) {
    /** @type {?} */
    const bp = locator.findByAlias(query) || locator.findByQuery(query);
    return bp ? bp.mediaQuery : null;
}
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 * @param {?} queries
 * @return {?}
 */
function splitQueries(queries) {
    return queries.map((/**
     * @param {?} query
     * @return {?}
     */
    (query) => query.split(',')))
        .reduce((/**
     * @param {?} a1
     * @param {?} a2
     * @return {?}
     */
    (a1, a2) => a1.concat(a2)))
        .map((/**
     * @param {?} query
     * @return {?}
     */
    query => query.trim()));
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-observer/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-trigger/media-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class
 */
class MediaTrigger {
    /**
     * @param {?} breakpoints
     * @param {?} matchMedia
     * @param {?} layoutConfig
     * @param {?} _platformId
     * @param {?} _document
     */
    constructor(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.layoutConfig = layoutConfig;
        this._platformId = _platformId;
        this._document = _document;
        this.hasCachedRegistryMatches = false;
        this.originalActivations = [];
        this.originalRegistry = new Map();
    }
    /**
     * Manually activate range of breakpoints
     * @param {?} list array of mediaQuery or alias strings
     * @return {?}
     */
    activate(list) {
        list = list.map((/**
         * @param {?} it
         * @return {?}
         */
        it => it.trim())); // trim queries
        this.saveActivations();
        this.deactivateAll();
        this.setActivations(list);
        this.prepareAutoRestore();
    }
    /**
     * Restore original, 'real' breakpoints and emit events
     * to trigger stream notification
     * @return {?}
     */
    restore() {
        if (this.hasCachedRegistryMatches) {
            /** @type {?} */
            const extractQuery = (/**
             * @param {?} change
             * @return {?}
             */
            (change) => change.mediaQuery);
            /** @type {?} */
            const list = this.originalActivations.map(extractQuery);
            try {
                this.deactivateAll();
                this.restoreRegistryMatches();
                this.setActivations(list);
            }
            finally {
                this.originalActivations = [];
                if (this.resizeSubscription) {
                    this.resizeSubscription.unsubscribe();
                }
            }
        }
    }
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Whenever window resizes, immediately auto-restore original
     * activations (if we are simulating activations)
     * @private
     * @return {?}
     */
    prepareAutoRestore() {
        /** @type {?} */
        const isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) && this._document;
        /** @type {?} */
        const enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;
        if (enableAutoRestore) {
            /** @type {?} */
            const resize$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.fromEvent)(window, 'resize').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1));
            this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
        }
    }
    /**
     * Notify all matchMedia subscribers of de-activations
     *
     * Note: we must force 'matches' updates for
     *       future matchMedia::activation lookups
     * @private
     * @return {?}
     */
    deactivateAll() {
        /** @type {?} */
        const list = this.currentActivations;
        this.forceRegistryMatches(list, false);
        this.simulateMediaChanges(list, false);
    }
    /**
     * Cache current activations as sorted, prioritized list of MediaChanges
     * @private
     * @return {?}
     */
    saveActivations() {
        if (!this.hasCachedRegistryMatches) {
            /** @type {?} */
            const toMediaChange = (/**
             * @param {?} query
             * @return {?}
             */
            (query) => new MediaChange(true, query));
            /** @type {?} */
            const mergeMQAlias = (/**
             * @param {?} change
             * @return {?}
             */
            (change) => {
                /** @type {?} */
                const bp = this.breakpoints.findByQuery(change.mediaQuery);
                return mergeAlias(change, bp);
            });
            this.originalActivations = this.currentActivations
                .map(toMediaChange)
                .map(mergeMQAlias)
                .sort(sortDescendingPriority);
            this.cacheRegistryMatches();
        }
    }
    /**
     * Force set manual activations for specified mediaQuery list
     * @private
     * @param {?} list
     * @return {?}
     */
    setActivations(list) {
        if (!!this.originalRegistry) {
            this.forceRegistryMatches(list, true);
        }
        this.simulateMediaChanges(list);
    }
    /**
     * For specified mediaQuery list manually simulate activations or deactivations
     * @private
     * @param {?} queries
     * @param {?=} matches
     * @return {?}
     */
    simulateMediaChanges(queries, matches = true) {
        /** @type {?} */
        const toMediaQuery = (/**
         * @param {?} query
         * @return {?}
         */
        (query) => {
            /** @type {?} */
            const locator = this.breakpoints;
            /** @type {?} */
            const bp = locator.findByAlias(query) || locator.findByQuery(query);
            return bp ? bp.mediaQuery : query;
        });
        /** @type {?} */
        const emitChangeEvent = (/**
         * @param {?} query
         * @return {?}
         */
        (query) => this.emitChangeEvent(matches, query));
        queries.map(toMediaQuery).forEach(emitChangeEvent);
    }
    /**
     * Replace current registry with simulated registry...
     * Note: this is required since MediaQueryList::matches is 'readOnly'
     * @private
     * @param {?} queries
     * @param {?} matches
     * @return {?}
     */
    forceRegistryMatches(queries, matches) {
        /** @type {?} */
        const registry = new Map();
        queries.forEach((/**
         * @param {?} query
         * @return {?}
         */
        query => {
            registry.set(query, (/** @type {?} */ ({ matches })));
        }));
        this.matchMedia.registry = registry;
    }
    /**
     * Save current MatchMedia::registry items.
     * @private
     * @return {?}
     */
    cacheRegistryMatches() {
        /** @type {?} */
        const target = this.originalRegistry;
        target.clear();
        this.matchMedia.registry.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            target.set(key, value);
        }));
        this.hasCachedRegistryMatches = true;
    }
    /**
     * Restore original, 'true' registry
     * @private
     * @return {?}
     */
    restoreRegistryMatches() {
        /** @type {?} */
        const target = this.matchMedia.registry;
        target.clear();
        this.originalRegistry.forEach((/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            target.set(key, value);
        }));
        this.originalRegistry.clear();
        this.hasCachedRegistryMatches = false;
    }
    /**
     * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
     * @private
     * @param {?} matches
     * @param {?} query
     * @return {?}
     */
    emitChangeEvent(matches, query) {
        this.matchMedia.source.next(new MediaChange(matches, query));
    }
    /**
     * @private
     * @return {?}
     */
    get currentActivations() {
        return this.matchMedia.activations;
    }
}
MediaTrigger.ɵfac = function MediaTrigger_Factory(t) { return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); };
/** @nocollapse */ MediaTrigger.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MediaTrigger_Factory() { return new MediaTrigger((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(BreakPointRegistry), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MatchMedia), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LAYOUT_CONFIG), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT)); }, token: MediaTrigger, providedIn: "root" });
/** @nocollapse */
MediaTrigger.ctorParameters = () => [
    { type: BreakPointRegistry },
    { type: MatchMedia },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [LAYOUT_CONFIG,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: BreakPointRegistry }, { type: MatchMedia }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [LAYOUT_CONFIG]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-trigger/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: utils/auto-prefixer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (let key in target) {
        /** @type {?} */
        let value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/style-utils/style-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleUtils {
    /**
     * @param {?} _serverStylesheet
     * @param {?} _serverModuleLoaded
     * @param {?} _platformId
     * @param {?} layoutConfig
     */
    constructor(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    applyStyleToElement(element, style, value = null) {
        /** @type {?} */
        let styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    }
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    applyStyleToElements(style, elements = []) {
        /** @type {?} */
        const styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            this._applyMultiValueStyleToElement(styles, el);
        }));
    }
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    getFlowDirection(target) {
        /** @type {?} */
        const query = 'flex-direction';
        /** @type {?} */
        let value = this.lookupStyle(target, query);
        /** @type {?} */
        const hasInlineValue = this.lookupInlineStyle(target, query) ||
            ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformServer)(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    }
    /**
     * @param {?} target
     * @return {?}
     */
    hasWrap(target) {
        /** @type {?} */
        const query = 'flex-wrap';
        return this.lookupStyle(target, query) === 'wrap';
    }
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    lookupAttributeValue(element, attribute) {
        return element.getAttribute(attribute) || '';
    }
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    lookupInlineStyle(element, styleName) {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) ?
            element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
    }
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    lookupStyle(element, styleName, inlineOnly = false) {
        /** @type {?} */
        let value = '';
        if (element) {
            /** @type {?} */
            let immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : '';
    }
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @private
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    _applyMultiValueStyleToElement(styles, element) {
        Object.keys(styles).sort().forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const el = styles[key];
            /** @type {?} */
            const values = Array.isArray(el) ? el : [el];
            values.sort();
            for (let value of values) {
                value = value ? value + '' : '';
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) || !this._serverModuleLoaded) {
                    (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) ?
                        element.style.setProperty(key, value) : this._setServerStyle(element, key, value);
                }
                else {
                    this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        }));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    _setServerStyle(element, styleName, styleValue) {
        styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        const styleMap = this._readStyleAttribute(element);
        styleMap[styleName] = styleValue || '';
        this._writeStyleAttribute(element, styleMap);
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    _getServerStyle(element, styleName) {
        /** @type {?} */
        const styleMap = this._readStyleAttribute(element);
        return styleMap[styleName] || '';
    }
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    _readStyleAttribute(element) {
        /** @type {?} */
        const styleMap = {};
        /** @type {?} */
        const styleAttribute = element.getAttribute('style');
        if (styleAttribute) {
            /** @type {?} */
            const styleList = styleAttribute.split(/;+/g);
            for (let i = 0; i < styleList.length; i++) {
                /** @type {?} */
                const style = styleList[i].trim();
                if (style.length > 0) {
                    /** @type {?} */
                    const colonIndex = style.indexOf(':');
                    if (colonIndex === -1) {
                        throw new Error(`Invalid CSS style: ${style}`);
                    }
                    /** @type {?} */
                    const name = style.substr(0, colonIndex).trim();
                    styleMap[name] = style.substr(colonIndex + 1).trim();
                }
            }
        }
        return styleMap;
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    _writeStyleAttribute(element, styleMap) {
        /** @type {?} */
        let styleAttrValue = '';
        for (const key in styleMap) {
            /** @type {?} */
            const newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.setAttribute('style', styleAttrValue);
    }
}
StyleUtils.ɵfac = function StyleUtils_Factory(t) { return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAYOUT_CONFIG)); };
/** @nocollapse */ StyleUtils.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function StyleUtils_Factory() { return new StyleUtils((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(StylesheetMap), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(SERVER_TOKEN), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LAYOUT_CONFIG)); }, token: StyleUtils, providedIn: "root" });
/** @nocollapse */
StyleUtils.ctorParameters = () => [
    { type: StylesheetMap },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [SERVER_TOKEN,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [LAYOUT_CONFIG,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: StylesheetMap }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [SERVER_TOKEN]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [LAYOUT_CONFIG]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: core/style-builder/style-builder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A class that encapsulates CSS style generation for common directives
 * @abstract
 */
class StyleBuilder {
    constructor() {
        /**
         * Whether to cache the generated output styles
         */
        this.shouldCache = true;
    }
    /**
     * Run a side effect computation given the input string and the computed styles
     * from the build task and the host configuration object
     * NOTE: This should be a no-op unless an algorithm is provided in a subclass
     * @param {?} _input
     * @param {?} _styles
     * @param {?=} _parent
     * @return {?}
     */
    sideEffect(_input, _styles, _parent) {
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/basis-validator/basis-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow = '1', shrink = '1') {
    /** @type {?} */
    let parts = [grow, shrink, basis];
    /** @type {?} */
    let j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */
        let matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        /** @type {?} */
        let matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/media-marshaller/media-marshaller.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * MediaMarshaller - register responsive values from directives and
 *                   trigger them based on media query events
 */
class MediaMarshaller {
    /**
     * @param {?} matchMedia
     * @param {?} breakpoints
     * @param {?} hook
     */
    constructor(matchMedia, breakpoints, hook) {
        this.matchMedia = matchMedia;
        this.breakpoints = breakpoints;
        this.hook = hook;
        this.activatedBreakpoints = [];
        this.elementMap = new Map();
        this.elementKeyMap = new WeakMap();
        this.watcherMap = new WeakMap(); // special triggers to update elements
        // special triggers to update elements
        this.updateMap = new WeakMap(); // callback functions to update styles
        // callback functions to update styles
        this.clearMap = new WeakMap(); // callback functions to clear styles
        // callback functions to clear styles
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.observeActivations();
    }
    /**
     * @return {?}
     */
    get activatedAlias() {
        return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
    }
    /**
     * Update styles on breakpoint activates or deactivates
     * @param {?} mc
     * @return {?}
     */
    onMediaChange(mc) {
        /** @type {?} */
        const bp = this.findByQuery(mc.mediaQuery);
        if (bp) {
            mc = mergeAlias(mc, bp);
            if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
                this.activatedBreakpoints.push(bp);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
            }
            else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
                // Remove the breakpoint when it's deactivated
                this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
                this.activatedBreakpoints.sort(sortDescendingPriority);
                this.updateStyles();
            }
        }
    }
    /**
     * initialize the marshaller with necessary elements for delegation on an element
     * @param {?} element
     * @param {?} key
     * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
     * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
     * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
     * @return {?}
     */
    init(element, key, updateFn, clearFn, extraTriggers = []) {
        initBuilderMap(this.updateMap, element, key, updateFn);
        initBuilderMap(this.clearMap, element, key, clearFn);
        this.buildElementKeyMap(element, key);
        this.watchExtraTriggers(element, key, extraTriggers);
    }
    /**
     * get the value for an element and key and optionally a given breakpoint
     * @param {?} element
     * @param {?} key
     * @param {?=} bp
     * @return {?}
     */
    getValue(element, key, bp) {
        /** @type {?} */
        const bpMap = this.elementMap.get(element);
        if (bpMap) {
            /** @type {?} */
            const values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);
            if (values) {
                return values.get(key);
            }
        }
        return undefined;
    }
    /**
     * whether the element has values for a given key
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    hasValue(element, key) {
        /** @type {?} */
        const bpMap = this.elementMap.get(element);
        if (bpMap) {
            /** @type {?} */
            const values = this.getActivatedValues(bpMap, key);
            if (values) {
                return values.get(key) !== undefined || false;
            }
        }
        return false;
    }
    /**
     * Set the value for an input on a directive
     * @param {?} element the element in question
     * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
     * @param {?} val the value for the breakpoint
     * @param {?} bp the breakpoint suffix (empty string = default)
     * @return {?}
     */
    setValue(element, key, val, bp) {
        /** @type {?} */
        let bpMap = this.elementMap.get(element);
        if (!bpMap) {
            bpMap = new Map().set(bp, new Map().set(key, val));
            this.elementMap.set(element, bpMap);
        }
        else {
            /** @type {?} */
            const values = (bpMap.get(bp) || new Map()).set(key, val);
            bpMap.set(bp, values);
            this.elementMap.set(element, bpMap);
        }
        /** @type {?} */
        const value = this.getValue(element, key);
        if (value !== undefined) {
            this.updateElement(element, key, value);
        }
    }
    /**
     * Track element value changes for a specific key
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    trackValue(element, key) {
        return this.subject
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((/**
         * @param {?} v
         * @return {?}
         */
        v => v.element === element && v.key === key)));
    }
    /**
     * update all styles for all elements on the current breakpoint
     * @return {?}
     */
    updateStyles() {
        this.elementMap.forEach((/**
         * @param {?} bpMap
         * @param {?} el
         * @return {?}
         */
        (bpMap, el) => {
            /** @type {?} */
            const keyMap = new Set((/** @type {?} */ (this.elementKeyMap.get(el))));
            /** @type {?} */
            let valueMap = this.getActivatedValues(bpMap);
            if (valueMap) {
                valueMap.forEach((/**
                 * @param {?} v
                 * @param {?} k
                 * @return {?}
                 */
                (v, k) => {
                    this.updateElement(el, k, v);
                    keyMap.delete(k);
                }));
            }
            keyMap.forEach((/**
             * @param {?} k
             * @return {?}
             */
            k => {
                valueMap = this.getActivatedValues(bpMap, k);
                if (valueMap) {
                    /** @type {?} */
                    const value = valueMap.get(k);
                    this.updateElement(el, k, value);
                }
                else {
                    this.clearElement(el, k);
                }
            }));
        }));
    }
    /**
     * clear the styles for a given element
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    clearElement(element, key) {
        /** @type {?} */
        const builders = this.clearMap.get(element);
        if (builders) {
            /** @type {?} */
            const clearFn = (/** @type {?} */ (builders.get(key)));
            if (!!clearFn) {
                clearFn();
                this.subject.next({ element, key, value: '' });
            }
        }
    }
    /**
     * update a given element with the activated values for a given key
     * @param {?} element
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateElement(element, key, value) {
        /** @type {?} */
        const builders = this.updateMap.get(element);
        if (builders) {
            /** @type {?} */
            const updateFn = (/** @type {?} */ (builders.get(key)));
            if (!!updateFn) {
                updateFn(value);
                this.subject.next({ element, key, value });
            }
        }
    }
    /**
     * release all references to a given element
     * @param {?} element
     * @return {?}
     */
    releaseElement(element) {
        /** @type {?} */
        const watcherMap = this.watcherMap.get(element);
        if (watcherMap) {
            watcherMap.forEach((/**
             * @param {?} s
             * @return {?}
             */
            s => s.unsubscribe()));
            this.watcherMap.delete(element);
        }
        /** @type {?} */
        const elementMap = this.elementMap.get(element);
        if (elementMap) {
            elementMap.forEach((/**
             * @param {?} _
             * @param {?} s
             * @return {?}
             */
            (_, s) => elementMap.delete(s)));
            this.elementMap.delete(element);
        }
    }
    /**
     * trigger an update for a given element and key (e.g. layout)
     * @param {?} element
     * @param {?=} key
     * @return {?}
     */
    triggerUpdate(element, key) {
        /** @type {?} */
        const bpMap = this.elementMap.get(element);
        if (bpMap) {
            /** @type {?} */
            const valueMap = this.getActivatedValues(bpMap, key);
            if (valueMap) {
                if (key) {
                    this.updateElement(element, key, valueMap.get(key));
                }
                else {
                    valueMap.forEach((/**
                     * @param {?} v
                     * @param {?} k
                     * @return {?}
                     */
                    (v, k) => this.updateElement(element, k, v)));
                }
            }
        }
    }
    /**
     * Cross-reference for HTMLElement with directive key
     * @private
     * @param {?} element
     * @param {?} key
     * @return {?}
     */
    buildElementKeyMap(element, key) {
        /** @type {?} */
        let keyMap = this.elementKeyMap.get(element);
        if (!keyMap) {
            keyMap = new Set();
            this.elementKeyMap.set(element, keyMap);
        }
        keyMap.add(key);
    }
    /**
     * Other triggers that should force style updates:
     * - directionality
     * - layout changes
     * - mutationobserver updates
     * @private
     * @param {?} element
     * @param {?} key
     * @param {?} triggers
     * @return {?}
     */
    watchExtraTriggers(element, key, triggers) {
        if (triggers && triggers.length) {
            /** @type {?} */
            let watchers = this.watcherMap.get(element);
            if (!watchers) {
                watchers = new Map();
                this.watcherMap.set(element, watchers);
            }
            /** @type {?} */
            const subscription = watchers.get(key);
            if (!subscription) {
                /** @type {?} */
                const newSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(...triggers).subscribe((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const currentValue = this.getValue(element, key);
                    this.updateElement(element, key, currentValue);
                }));
                watchers.set(key, newSubscription);
            }
        }
    }
    /**
     * Breakpoint locator by mediaQuery
     * @private
     * @param {?} query
     * @return {?}
     */
    findByQuery(query) {
        return this.breakpoints.findByQuery(query);
    }
    /**
     * get the fallback breakpoint for a given element, starting with the current breakpoint
     * @private
     * @param {?} bpMap
     * @param {?=} key
     * @return {?}
     */
    getActivatedValues(bpMap, key) {
        for (let i = 0; i < this.activatedBreakpoints.length; i++) {
            /** @type {?} */
            const activatedBp = this.activatedBreakpoints[i];
            /** @type {?} */
            const valueMap = bpMap.get(activatedBp.alias);
            if (valueMap) {
                if (key === undefined || (valueMap.has(key) && valueMap.get(key) != null)) {
                    return valueMap;
                }
            }
        }
        /** @type {?} */
        const lastHope = bpMap.get('');
        return (key === undefined || lastHope && lastHope.has(key)) ? lastHope : undefined;
    }
    /**
     * Watch for mediaQuery breakpoint activations
     * @private
     * @return {?}
     */
    observeActivations() {
        /** @type {?} */
        const target = (/** @type {?} */ ((/** @type {?} */ (this))));
        /** @type {?} */
        const queries = this.breakpoints.items.map((/**
         * @param {?} bp
         * @return {?}
         */
        bp => bp.mediaQuery));
        this.matchMedia
            .observe(this.hook.withPrintQuery(queries))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(this.hook.interceptEvents(target)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(this.hook.blockPropagation()))
            .subscribe(this.onMediaChange.bind(this));
    }
}
MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) { return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PrintHook)); };
/** @nocollapse */ MediaMarshaller.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MediaMarshaller_Factory() { return new MediaMarshaller((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MatchMedia), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(BreakPointRegistry), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(PrintHook)); }, token: MediaMarshaller, providedIn: "root" });
/** @nocollapse */
MediaMarshaller.ctorParameters = () => [
    { type: MatchMedia },
    { type: BreakPointRegistry },
    { type: PrintHook }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MediaMarshaller, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MatchMedia }, { type: BreakPointRegistry }, { type: PrintHook }]; }, null); })();
/**
 * @param {?} map
 * @param {?} element
 * @param {?} key
 * @param {?=} input
 * @return {?}
 */
function initBuilderMap(map$$1, element, key, input) {
    if (input !== undefined) {
        /** @type {?} */
        let oldMap = map$$1.get(element);
        if (!oldMap) {
            oldMap = new Map();
            map$$1.set(element, oldMap);
        }
        oldMap.set(key, input);
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: core/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: core/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=core.js.map

/***/ }),

/***/ 8030:
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendedModule": () => (/* binding */ ExtendedModule),
/* harmony export */   "ClassDirective": () => (/* binding */ ClassDirective),
/* harmony export */   "DefaultClassDirective": () => (/* binding */ DefaultClassDirective),
/* harmony export */   "ImgSrcStyleBuilder": () => (/* binding */ ImgSrcStyleBuilder),
/* harmony export */   "ImgSrcDirective": () => (/* binding */ ImgSrcDirective),
/* harmony export */   "DefaultImgSrcDirective": () => (/* binding */ DefaultImgSrcDirective),
/* harmony export */   "ShowHideStyleBuilder": () => (/* binding */ ShowHideStyleBuilder),
/* harmony export */   "ShowHideDirective": () => (/* binding */ ShowHideDirective),
/* harmony export */   "DefaultShowHideDirective": () => (/* binding */ DefaultShowHideDirective),
/* harmony export */   "StyleDirective": () => (/* binding */ StyleDirective),
/* harmony export */   "DefaultStyleDirective": () => (/* binding */ DefaultStyleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 7736);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * Generated from: extended/img-src/img-src.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




class ImgSrcStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} url
     * @return {?}
     */
    buildStyles(url) {
        return { 'content': url ? `url(${url})` : '' };
    }
}
ImgSrcStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵImgSrcStyleBuilder_BaseFactory; return function ImgSrcStyleBuilder_Factory(t) { return (ɵImgSrcStyleBuilder_BaseFactory || (ɵImgSrcStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder)))(t || ImgSrcStyleBuilder); }; }();
/** @nocollapse */ ImgSrcStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ImgSrcStyleBuilder_Factory() { return new ImgSrcStyleBuilder(); }, token: ImgSrcStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class ImgSrcDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     * @param {?} platformId
     * @param {?} serverModuleLoaded
     */
    constructor(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
        super(elementRef, styleBuilder, styler, marshal);
        this.platformId = platformId;
        this.serverModuleLoaded = serverModuleLoaded;
        this.DIRECTIVE_KEY = 'img-src';
        this.defaultSrc = '';
        this.styleCache = imgSrcCache;
        this.init();
        this.setValue(this.nativeElement.getAttribute('src') || '', '');
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.setAttribute('src', '');
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set src(val) {
        this.defaultSrc = val;
        this.setValue(this.defaultSrc, '');
    }
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @protected
     * @param {?=} value
     * @return {?}
     */
    updateWithValue(value) {
        /** @type {?} */
        const url = value || this.defaultSrc;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId) && this.serverModuleLoaded) {
            this.addStyles(url);
        }
        else {
            this.nativeElement.setAttribute('src', url);
        }
    }
}
ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) { return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN)); };
ImgSrcDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ImgSrcDirective, inputs: { src: "src" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
ImgSrcDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: ImgSrcStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN,] }] }
];
ImgSrcDirective.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['src',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ImgSrcDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: ImgSrcStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
            }] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['src']
        }] }); })();
/** @type {?} */
const imgSrcCache = new Map();
/** @type {?} */
const inputs = [
    'src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl',
    'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl',
    'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'
];
/** @type {?} */
const selector = `
  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],
  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],
  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]
`;
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
class DefaultImgSrcDirective extends ImgSrcDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
}
DefaultImgSrcDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultImgSrcDirective_BaseFactory; return function DefaultImgSrcDirective_Factory(t) { return (ɵDefaultImgSrcDirective_BaseFactory || (ɵDefaultImgSrcDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective)))(t || DefaultImgSrcDirective); }; }();
DefaultImgSrcDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultImgSrcDirective, selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]], inputs: { "src.xs": "src.xs", "src.sm": "src.sm", "src.md": "src.md", "src.lg": "src.lg", "src.xl": "src.xl", "src.lt-sm": "src.lt-sm", "src.lt-md": "src.lt-md", "src.lt-lg": "src.lt-lg", "src.lt-xl": "src.lt-xl", "src.gt-xs": "src.gt-xs", "src.gt-sm": "src.gt-sm", "src.gt-md": "src.gt-md", "src.gt-lg": "src.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector, inputs }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: extended/class/class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styler
     * @param {?} marshal
     * @param {?} iterableDiffers
     * @param {?} keyValueDiffers
     * @param {?} renderer2
     * @param {?} ngClassInstance
     */
    constructor(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
        super(elementRef, (/** @type {?} */ (null)), styler, marshal);
        this.ngClassInstance = ngClassInstance;
        this.DIRECTIVE_KEY = 'ngClass';
        if (!this.ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            this.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass(iterableDiffers, keyValueDiffers, elementRef, renderer2);
        }
        this.init();
        this.setValue('', '');
    }
    /**
     * Capture class assignments so we cache the default classes
     * which are merged with activated styles and used as fallbacks.
     * @param {?} val
     * @return {?}
     */
    set klass(val) {
        this.ngClassInstance.klass = val;
        this.setValue(val, '');
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.ngClassInstance.ngClass = value;
        this.ngClassInstance.ngDoCheck();
    }
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ngDoCheck() {
        this.ngClassInstance.ngDoCheck();
    }
}
ClassDirective.ɵfac = function ClassDirective_Factory(t) { return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, 10)); };
ClassDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClassDirective, inputs: { klass: ["class", "klass"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
ClassDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self }] }
];
ClassDirective.propDecorators = {
    klass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['class',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.IterableDiffers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
            }] }]; }, { klass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['class']
        }] }); })();
/** @type {?} */
const inputs$1 = [
    'ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl',
    'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl',
    'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'
];
/** @type {?} */
const selector$1 = `
  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
`;
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
class DefaultClassDirective extends ClassDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$1;
    }
}
DefaultClassDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultClassDirective_BaseFactory; return function DefaultClassDirective_Factory(t) { return (ɵDefaultClassDirective_BaseFactory || (ɵDefaultClassDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultClassDirective)))(t || DefaultClassDirective); }; }();
DefaultClassDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultClassDirective, selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]], inputs: { ngClass: "ngClass", "ngClass.xs": "ngClass.xs", "ngClass.sm": "ngClass.sm", "ngClass.md": "ngClass.md", "ngClass.lg": "ngClass.lg", "ngClass.xl": "ngClass.xl", "ngClass.lt-sm": "ngClass.lt-sm", "ngClass.lt-md": "ngClass.lt-md", "ngClass.lt-lg": "ngClass.lt-lg", "ngClass.lt-xl": "ngClass.lt-xl", "ngClass.gt-xs": "ngClass.gt-xs", "ngClass.gt-sm": "ngClass.gt-sm", "ngClass.gt-md": "ngClass.gt-md", "ngClass.gt-lg": "ngClass.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: extended/show-hide/show-hide.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShowHideStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} show
     * @param {?} parent
     * @return {?}
     */
    buildStyles(show, parent) {
        /** @type {?} */
        const shouldShow = show === 'true';
        return { 'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none' };
    }
}
ShowHideStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵShowHideStyleBuilder_BaseFactory; return function ShowHideStyleBuilder_Factory(t) { return (ɵShowHideStyleBuilder_BaseFactory || (ɵShowHideStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder)))(t || ShowHideStyleBuilder); }; }();
/** @nocollapse */ ShowHideStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ShowHideStyleBuilder_Factory() { return new ShowHideStyleBuilder(); }, token: ShowHideStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class ShowHideDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     * @param {?} layoutConfig
     * @param {?} platformId
     * @param {?} serverModuleLoaded
     */
    constructor(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
        super(elementRef, styleBuilder, styler, marshal);
        this.layoutConfig = layoutConfig;
        this.platformId = platformId;
        this.serverModuleLoaded = serverModuleLoaded;
        this.DIRECTIVE_KEY = 'show-hide';
        /**
         * Original DOM Element CSS display style
         */
        this.display = '';
        this.hasLayout = false;
        this.hasFlexChild = false;
    }
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.trackExtraTriggers();
        /** @type {?} */
        const children = Array.from(this.nativeElement.children);
        for (let i = 0; i < children.length; i++) {
            if (this.marshal.hasValue((/** @type {?} */ (children[i])), 'flex')) {
                this.hasFlexChild = true;
                break;
            }
        }
        if (DISPLAY_MAP.has(this.nativeElement)) {
            this.display = (/** @type {?} */ (DISPLAY_MAP.get(this.nativeElement)));
        }
        else {
            this.display = this.getDisplayStyle();
            DISPLAY_MAP.set(this.nativeElement, this.display);
        }
        this.init();
        // set the default to show unless explicitly overridden
        /** @type {?} */
        const defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');
        if (defaultValue === undefined || defaultValue === '') {
            this.setValue(true, '');
        }
        else {
            this.triggerUpdate();
        }
    }
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        Object.keys(changes).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (this.inputs.indexOf(key) !== -1) {
                /** @type {?} */
                const inputKey = key.split('.');
                /** @type {?} */
                const bp = inputKey.slice(1).join('.');
                /** @type {?} */
                const inputValue = changes[key].currentValue;
                /** @type {?} */
                let shouldShow = inputValue !== '' ?
                    inputValue !== 0 ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(inputValue) : false
                    : true;
                if (inputKey[0] === 'fxHide') {
                    shouldShow = !shouldShow;
                }
                this.setValue(shouldShow, bp);
            }
        }));
    }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *  Watch for these extra triggers to update fxShow, fxHide stylings
     * @protected
     * @return {?}
     */
    trackExtraTriggers() {
        this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
        ['layout', 'layout-align'].forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.marshal
                .trackValue(this.nativeElement, key)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroySubject))
                .subscribe(this.triggerUpdate.bind(this));
        }));
    }
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @protected
     * @return {?}
     */
    getDisplayStyle() {
        return (this.hasLayout || (this.hasFlexChild && this.layoutConfig.addFlexToParent)) ?
            'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
    }
    /**
     * Validate the visibility value and then update the host's inline display style
     * @protected
     * @param {?=} value
     * @return {?}
     */
    updateWithValue(value = true) {
        if (value === '') {
            return;
        }
        /** @type {?} */
        const isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(this.platformId);
        this.addStyles(value ? 'true' : 'false', { display: this.display, isServer });
        if (isServer && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
        this.marshal.triggerUpdate((/** @type {?} */ (this.parentElement)), 'layout-gap');
    }
}
ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) { return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN)); };
ShowHideDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ShowHideDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
ShowHideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: ShowHideStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: ShowHideStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
            }] }]; }, null); })();
/** @type {?} */
const DISPLAY_MAP = new WeakMap();
/** @type {?} */
const inputs$2 = [
    'fxShow', 'fxShow.print',
    'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl',
    'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl',
    'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg',
    'fxHide', 'fxHide.print',
    'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl',
    'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl',
    'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'
];
/** @type {?} */
const selector$2 = `
  [fxShow], [fxShow.print],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide], [fxHide.print],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`;
/**
 * 'show' Layout API directive
 */
class DefaultShowHideDirective extends ShowHideDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$2;
    }
}
DefaultShowHideDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultShowHideDirective_BaseFactory; return function DefaultShowHideDirective_Factory(t) { return (ɵDefaultShowHideDirective_BaseFactory || (ɵDefaultShowHideDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultShowHideDirective)))(t || DefaultShowHideDirective); }; }();
DefaultShowHideDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultShowHideDirective, selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]], inputs: { fxShow: "fxShow", "fxShow.print": "fxShow.print", "fxShow.xs": "fxShow.xs", "fxShow.sm": "fxShow.sm", "fxShow.md": "fxShow.md", "fxShow.lg": "fxShow.lg", "fxShow.xl": "fxShow.xl", "fxShow.lt-sm": "fxShow.lt-sm", "fxShow.lt-md": "fxShow.lt-md", "fxShow.lt-lg": "fxShow.lt-lg", "fxShow.lt-xl": "fxShow.lt-xl", "fxShow.gt-xs": "fxShow.gt-xs", "fxShow.gt-sm": "fxShow.gt-sm", "fxShow.gt-md": "fxShow.gt-md", "fxShow.gt-lg": "fxShow.gt-lg", fxHide: "fxHide", "fxHide.print": "fxHide.print", "fxHide.xs": "fxHide.xs", "fxHide.sm": "fxHide.sm", "fxHide.md": "fxHide.md", "fxHide.lg": "fxHide.lg", "fxHide.xl": "fxHide.xl", "fxHide.lt-sm": "fxHide.lt-sm", "fxHide.lt-md": "fxHide.lt-md", "fxHide.lt-lg": "fxHide.lt-lg", "fxHide.lt-xl": "fxHide.lt-xl", "fxHide.gt-xs": "fxHide.gt-xs", "fxHide.gt-sm": "fxHide.gt-sm", "fxHide.gt-md": "fxHide.gt-md", "fxHide.gt-lg": "fxHide.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$2, inputs: inputs$2 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: extended/style/style-transforms.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * NgStyle allowed inputs
 */
class NgStyleKeyValue {
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} noQuotes
     */
    constructor(key, value, noQuotes = true) {
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
}
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    /** @type {?} */
    let what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter = ';') {
    return String(source)
        .trim()
        .split(delimiter)
        .map((/**
     * @param {?} val
     * @return {?}
     */
    (val) => val.trim()))
        .filter((/**
     * @param {?} val
     * @return {?}
     */
    val => val !== ''));
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    /** @type {?} */
    const sanitizeValue = (/**
     * @param {?} it
     * @return {?}
     */
    (it) => {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    });
    return styles
        .map(stringToKeyValue)
        .filter((/**
     * @param {?} entry
     * @return {?}
     */
    entry => !!entry))
        .map(sanitizeValue)
        .reduce(keyValuesToMap, (/** @type {?} */ ({})));
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    /** @type {?} */
    let list = [];
    if (getType(source) === 'set') {
        ((/** @type {?} */ (source))).forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => list.push(entry)));
    }
    else {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            list.push(`${key}:${((/** @type {?} */ (source)))[key]}`);
        }));
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    const [key, ...vals] = it.split(':');
    return new NgStyleKeyValue(key, vals.join(':'));
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * Generated from: extended/style/style.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StyleDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styler
     * @param {?} marshal
     * @param {?} sanitizer
     * @param {?} differs
     * @param {?} renderer2
     * @param {?} ngStyleInstance
     * @param {?} serverLoaded
     * @param {?} platformId
     */
    constructor(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
        super(elementRef, (/** @type {?} */ (null)), styler, marshal);
        this.sanitizer = sanitizer;
        this.ngStyleInstance = ngStyleInstance;
        this.DIRECTIVE_KEY = 'ngStyle';
        if (!this.ngStyleInstance) {
            // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            this.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle(elementRef, differs, renderer2);
        }
        this.init();
        /** @type {?} */
        const styles = this.nativeElement.getAttribute('style') || '';
        this.fallbackStyles = this.buildStyleMap(styles);
        this.isServer = serverLoaded && (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformServer)(platformId);
    }
    /**
     * Add generated styles
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        /** @type {?} */
        const styles = this.buildStyleMap(value);
        this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), styles);
        if (this.isServer) {
            this.applyStyleToElement(styles);
        }
        this.ngStyleInstance.ngDoCheck();
    }
    /**
     * Remove generated styles
     * @protected
     * @return {?}
     */
    clearStyles() {
        this.ngStyleInstance.ngStyle = this.fallbackStyles;
        this.ngStyleInstance.ngDoCheck();
    }
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @protected
     * @param {?} styles
     * @return {?}
     */
    buildStyleMap(styles) {
        // Always safe-guard (aka sanitize) style property values
        /** @type {?} */
        const sanitizer = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.STYLE, val) || '');
        if (styles) {
            switch (getType(styles)) {
                case 'string': return buildMapFromList$1(buildRawList(styles), sanitizer);
                case 'array': return buildMapFromList$1((/** @type {?} */ (styles)), sanitizer);
                case 'set': return buildMapFromSet(styles, sanitizer);
                default: return buildMapFromSet(styles, sanitizer);
            }
        }
        return {};
    }
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ngDoCheck() {
        this.ngStyleInstance.ngDoCheck();
    }
}
StyleDirective.ɵfac = function StyleDirective_Factory(t) { return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID)); };
StyleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: StyleDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
StyleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.KeyValueDiffers }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2 }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
            }] }]; }, null); })();
/** @type {?} */
const inputs$3 = [
    'ngStyle',
    'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl',
    'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl',
    'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'
];
/** @type {?} */
const selector$3 = `
  [ngStyle],
  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],
  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],
  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]
`;
/**
 * Directive to add responsive support for ngStyle.
 *
 */
class DefaultStyleDirective extends StyleDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$3;
    }
}
DefaultStyleDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultStyleDirective_BaseFactory; return function DefaultStyleDirective_Factory(t) { return (ɵDefaultStyleDirective_BaseFactory || (ɵDefaultStyleDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultStyleDirective)))(t || DefaultStyleDirective); }; }();
DefaultStyleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultStyleDirective, selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]], inputs: { ngStyle: "ngStyle", "ngStyle.xs": "ngStyle.xs", "ngStyle.sm": "ngStyle.sm", "ngStyle.md": "ngStyle.md", "ngStyle.lg": "ngStyle.lg", "ngStyle.xl": "ngStyle.xl", "ngStyle.lt-sm": "ngStyle.lt-sm", "ngStyle.lt-md": "ngStyle.lt-md", "ngStyle.lt-lg": "ngStyle.lt-lg", "ngStyle.lt-xl": "ngStyle.lt-xl", "ngStyle.gt-xs": "ngStyle.gt-xs", "ngStyle.gt-sm": "ngStyle.gt-sm", "ngStyle.gt-md": "ngStyle.gt-md", "ngStyle.gt-lg": "ngStyle.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultStyleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();
/**
 * Build a styles map from a list of styles, while sanitizing bad values first
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList$1(styles, sanitize) {
    /** @type {?} */
    const sanitizeValue = (/**
     * @param {?} it
     * @return {?}
     */
    (it) => {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    });
    return styles
        .map(stringToKeyValue)
        .filter((/**
     * @param {?} entry
     * @return {?}
     */
    entry => !!entry))
        .map(sanitizeValue)
        .reduce(keyValuesToMap, (/** @type {?} */ ({})));
}

/**
 * @fileoverview added by tsickle
 * Generated from: extended/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ALL_DIRECTIVES = [
    DefaultShowHideDirective,
    DefaultClassDirective,
    DefaultStyleDirective,
    DefaultImgSrcDirective,
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
class ExtendedModule {
}
ExtendedModule.ɵfac = function ExtendedModule_Factory(t) { return new (t || ExtendedModule)(); };
ExtendedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExtendedModule });
ExtendedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExtendedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
                declarations: [...ALL_DIRECTIVES],
                exports: [...ALL_DIRECTIVES]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExtendedModule, { declarations: function () { return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective]; }, imports: function () { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]; }, exports: function () { return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: extended/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: extended/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=extended.js.map

/***/ }),

/***/ 5830:
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ɵMatchMedia": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMatchMedia"]),
/* harmony export */   "ɵMockMatchMedia": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMockMatchMedia"]),
/* harmony export */   "ɵMockMatchMediaProvider": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__["ɵMockMatchMediaProvider"]),
/* harmony export */   "CoreModule": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "removeStyles": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.removeStyles),
/* harmony export */   "BROWSER_PROVIDER": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BROWSER_PROVIDER),
/* harmony export */   "CLASS_NAME": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CLASS_NAME),
/* harmony export */   "MediaChange": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaChange),
/* harmony export */   "StylesheetMap": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StylesheetMap),
/* harmony export */   "DEFAULT_CONFIG": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG),
/* harmony export */   "LAYOUT_CONFIG": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG),
/* harmony export */   "SERVER_TOKEN": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN),
/* harmony export */   "BREAKPOINT": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT),
/* harmony export */   "mergeAlias": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.mergeAlias),
/* harmony export */   "BaseDirective2": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2),
/* harmony export */   "DEFAULT_BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_BREAKPOINTS),
/* harmony export */   "ScreenTypes": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.ScreenTypes),
/* harmony export */   "ORIENTATION_BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.ORIENTATION_BREAKPOINTS),
/* harmony export */   "BreakPointRegistry": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BreakPointRegistry),
/* harmony export */   "BREAKPOINTS": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS),
/* harmony export */   "MediaObserver": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaObserver),
/* harmony export */   "MediaTrigger": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaTrigger),
/* harmony export */   "sortDescendingPriority": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.sortDescendingPriority),
/* harmony export */   "sortAscendingPriority": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.sortAscendingPriority),
/* harmony export */   "coerceArray": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.coerceArray),
/* harmony export */   "StyleUtils": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "validateBasis": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis),
/* harmony export */   "MediaMarshaller": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller),
/* harmony export */   "BREAKPOINT_PRINT": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT_PRINT),
/* harmony export */   "PrintHook": () => (/* reexport safe */ _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.PrintHook),
/* harmony export */   "ExtendedModule": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule),
/* harmony export */   "ClassDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ClassDirective),
/* harmony export */   "DefaultClassDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultClassDirective),
/* harmony export */   "ImgSrcStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ImgSrcStyleBuilder),
/* harmony export */   "ImgSrcDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ImgSrcDirective),
/* harmony export */   "DefaultImgSrcDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultImgSrcDirective),
/* harmony export */   "ShowHideStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ShowHideStyleBuilder),
/* harmony export */   "ShowHideDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ShowHideDirective),
/* harmony export */   "DefaultShowHideDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultShowHideDirective),
/* harmony export */   "StyleDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.StyleDirective),
/* harmony export */   "DefaultStyleDirective": () => (/* reexport safe */ _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.DefaultStyleDirective),
/* harmony export */   "FlexModule": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule),
/* harmony export */   "FlexStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexStyleBuilder),
/* harmony export */   "FlexDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexDirective),
/* harmony export */   "DefaultFlexDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective),
/* harmony export */   "FlexAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexAlignStyleBuilder),
/* harmony export */   "FlexAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexAlignDirective),
/* harmony export */   "DefaultFlexAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexAlignDirective),
/* harmony export */   "FlexFillStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillStyleBuilder),
/* harmony export */   "FlexFillDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexFillDirective),
/* harmony export */   "FlexOffsetStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOffsetStyleBuilder),
/* harmony export */   "FlexOffsetDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOffsetDirective),
/* harmony export */   "DefaultFlexOffsetDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexOffsetDirective),
/* harmony export */   "FlexOrderStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOrderStyleBuilder),
/* harmony export */   "FlexOrderDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexOrderDirective),
/* harmony export */   "DefaultFlexOrderDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexOrderDirective),
/* harmony export */   "LayoutStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutStyleBuilder),
/* harmony export */   "LayoutDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutDirective),
/* harmony export */   "DefaultLayoutDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective),
/* harmony export */   "LayoutAlignStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutAlignStyleBuilder),
/* harmony export */   "LayoutAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutAlignDirective),
/* harmony export */   "DefaultLayoutAlignDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective),
/* harmony export */   "LayoutGapStyleBuilder": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutGapStyleBuilder),
/* harmony export */   "LayoutGapDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.LayoutGapDirective),
/* harmony export */   "DefaultLayoutGapDirective": () => (/* reexport safe */ _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutGapDirective),
/* harmony export */   "ɵgrid_privatef": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatef"]),
/* harmony export */   "ɵgrid_privatee": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatee"]),
/* harmony export */   "ɵgrid_privated": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privated"]),
/* harmony export */   "ɵgrid_privatei": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatei"]),
/* harmony export */   "ɵgrid_privateh": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateh"]),
/* harmony export */   "ɵgrid_privateg": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateg"]),
/* harmony export */   "ɵgrid_privatel": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatel"]),
/* harmony export */   "ɵgrid_privatek": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatek"]),
/* harmony export */   "ɵgrid_privatej": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatej"]),
/* harmony export */   "ɵgrid_privateo": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateo"]),
/* harmony export */   "ɵgrid_privaten": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privaten"]),
/* harmony export */   "ɵgrid_privatem": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatem"]),
/* harmony export */   "ɵgrid_privater": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privater"]),
/* harmony export */   "ɵgrid_privateq": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateq"]),
/* harmony export */   "ɵgrid_privatep": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatep"]),
/* harmony export */   "ɵgrid_privateu": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateu"]),
/* harmony export */   "ɵgrid_privatet": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatet"]),
/* harmony export */   "ɵgrid_privates": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privates"]),
/* harmony export */   "ɵgrid_privatex": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatex"]),
/* harmony export */   "ɵgrid_privatew": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatew"]),
/* harmony export */   "ɵgrid_privatev": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatev"]),
/* harmony export */   "ɵgrid_privateba": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateba"]),
/* harmony export */   "ɵgrid_privatez": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatez"]),
/* harmony export */   "ɵgrid_privatey": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatey"]),
/* harmony export */   "ɵgrid_privatec": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatec"]),
/* harmony export */   "ɵgrid_privateb": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privateb"]),
/* harmony export */   "ɵgrid_privatea": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatea"]),
/* harmony export */   "ɵgrid_privatebd": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatebd"]),
/* harmony export */   "ɵgrid_privatebc": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatebc"]),
/* harmony export */   "ɵgrid_privatebb": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatebb"]),
/* harmony export */   "ɵgrid_privatebg": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatebg"]),
/* harmony export */   "ɵgrid_privatebf": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatebf"]),
/* harmony export */   "ɵgrid_privatebe": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__["ɵgrid_privatebe"]),
/* harmony export */   "GridModule": () => (/* reexport safe */ _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "FlexLayoutModule": () => (/* binding */ FlexLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 7736);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/extended */ 8030);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/grid */ 4568);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












/**
 * @fileoverview added by tsickle
 * Generated from: version.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 * @type {?}
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.Version('12.0.0-beta.34');

/**
 * @fileoverview added by tsickle
 * Generated from: module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
class FlexLayoutModule {
    /**
     * @param {?} serverModuleLoaded
     * @param {?} platformId
     */
    constructor(serverModuleLoaded, platformId) {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    static withConfig(configOptions, 
    // tslint:disable-next-line:max-line-length
    breakpoints = []) {
        return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ?
                [
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG, useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG), configOptions) },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT, useValue: breakpoints, multi: true },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN, useValue: true },
                ] : [
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG, useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONFIG), configOptions) },
                { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINT, useValue: breakpoints, multi: true },
            ]
        };
    }
}
FlexLayoutModule.ɵfac = function FlexLayoutModule_Factory(t) { return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID)); };
FlexLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: FlexLayoutModule });
FlexLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule] });
/** @nocollapse */
FlexLayoutModule.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](FlexLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule],
                exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]
            }]
    }], function () { return [{ type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.SERVER_TOKEN]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](FlexLayoutModule, { imports: function () { return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]; }, exports: function () { return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.FlexModule, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_1__.ExtendedModule, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_3__.GridModule]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=flex-layout.js.map

/***/ }),

/***/ 5618:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlexModule": () => (/* binding */ FlexModule),
/* harmony export */   "FlexStyleBuilder": () => (/* binding */ FlexStyleBuilder),
/* harmony export */   "FlexDirective": () => (/* binding */ FlexDirective),
/* harmony export */   "DefaultFlexDirective": () => (/* binding */ DefaultFlexDirective),
/* harmony export */   "FlexAlignStyleBuilder": () => (/* binding */ FlexAlignStyleBuilder),
/* harmony export */   "FlexAlignDirective": () => (/* binding */ FlexAlignDirective),
/* harmony export */   "DefaultFlexAlignDirective": () => (/* binding */ DefaultFlexAlignDirective),
/* harmony export */   "FlexFillStyleBuilder": () => (/* binding */ FlexFillStyleBuilder),
/* harmony export */   "FlexFillDirective": () => (/* binding */ FlexFillDirective),
/* harmony export */   "FlexOffsetStyleBuilder": () => (/* binding */ FlexOffsetStyleBuilder),
/* harmony export */   "FlexOffsetDirective": () => (/* binding */ FlexOffsetDirective),
/* harmony export */   "DefaultFlexOffsetDirective": () => (/* binding */ DefaultFlexOffsetDirective),
/* harmony export */   "FlexOrderStyleBuilder": () => (/* binding */ FlexOrderStyleBuilder),
/* harmony export */   "FlexOrderDirective": () => (/* binding */ FlexOrderDirective),
/* harmony export */   "DefaultFlexOrderDirective": () => (/* binding */ DefaultFlexOrderDirective),
/* harmony export */   "LayoutStyleBuilder": () => (/* binding */ LayoutStyleBuilder),
/* harmony export */   "LayoutDirective": () => (/* binding */ LayoutDirective),
/* harmony export */   "DefaultLayoutDirective": () => (/* binding */ DefaultLayoutDirective),
/* harmony export */   "LayoutAlignStyleBuilder": () => (/* binding */ LayoutAlignStyleBuilder),
/* harmony export */   "LayoutAlignDirective": () => (/* binding */ LayoutAlignDirective),
/* harmony export */   "DefaultLayoutAlignDirective": () => (/* binding */ DefaultLayoutAlignDirective),
/* harmony export */   "LayoutGapStyleBuilder": () => (/* binding */ LayoutGapStyleBuilder),
/* harmony export */   "LayoutGapDirective": () => (/* binding */ LayoutGapDirective),
/* harmony export */   "DefaultLayoutGapDirective": () => (/* binding */ DefaultLayoutGapDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 7736);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 946);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * Generated from: utils/layout-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */



const INLINE = 'inline';
/** @type {?} */
const LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    let [direction, wrap, isInline] = validateValue(value);
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    let [direction, wrap, inline] = value.split(' ');
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find((/**
     * @param {?} x
     * @return {?}
     */
    x => x === direction))) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    let [flow,] = validateValue(value);
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap = null, inline = false) {
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: flex/layout/layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @return {?}
     */
    buildStyles(input) {
        return buildLayoutCSS(input);
    }
}
LayoutStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵLayoutStyleBuilder_BaseFactory; return function LayoutStyleBuilder_Factory(t) { return (ɵLayoutStyleBuilder_BaseFactory || (ɵLayoutStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LayoutStyleBuilder)))(t || LayoutStyleBuilder); }; }();
/** @nocollapse */ LayoutStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LayoutStyleBuilder_Factory() { return new LayoutStyleBuilder(); }, token: LayoutStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** @type {?} */
const inputs = [
    'fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md',
    'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md',
    'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm',
    'fxLayout.gt-md', 'fxLayout.gt-lg'
];
/** @type {?} */
const selector = `
  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],
  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],
  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],
  [fxLayout.gt-md], [fxLayout.gt-lg]
`;
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
class LayoutDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'layout';
        this.styleCache = layoutCache;
        this.init();
    }
}
LayoutDirective.ɵfac = function LayoutDirective_Factory(t) { return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
LayoutDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
LayoutDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: LayoutStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: LayoutStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
class DefaultLayoutDirective extends LayoutDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
}
DefaultLayoutDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultLayoutDirective_BaseFactory; return function DefaultLayoutDirective_Factory(t) { return (ɵDefaultLayoutDirective_BaseFactory || (ɵDefaultLayoutDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultLayoutDirective)))(t || DefaultLayoutDirective); }; }();
DefaultLayoutDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultLayoutDirective, selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector, inputs }]
    }], null, null); })();
/** @type {?} */
const layoutCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/layout-gap/layout-gap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CLEAR_MARGIN_CSS = {
    'margin-left': null,
    'margin-right': null,
    'margin-top': null,
    'margin-bottom': null
};
class LayoutGapStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} _styler
     */
    constructor(_styler) {
        super();
        this._styler = _styler;
    }
    /**
     * @param {?} gapValue
     * @param {?} parent
     * @return {?}
     */
    buildStyles(gapValue, parent) {
        if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
            // Add the margin to the host element
            return buildGridMargin(gapValue, parent.directionality);
        }
        else {
            return {};
        }
    }
    /**
     * @param {?} gapValue
     * @param {?} _styles
     * @param {?} parent
     * @return {?}
     */
    sideEffect(gapValue, _styles, parent) {
        /** @type {?} */
        const items = parent.items;
        if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER));
            // For each `element` children, set the padding
            /** @type {?} */
            const paddingStyles = buildGridPadding(gapValue, parent.directionality);
            this._styler.applyStyleToElements(paddingStyles, parent.items);
        }
        else {
            /** @type {?} */
            const lastItem = (/** @type {?} */ (items.pop()));
            // For each `element` children EXCEPT the last,
            // set the margin right/bottom styles...
            /** @type {?} */
            const gapCss = buildGapCSS(gapValue, parent);
            this._styler.applyStyleToElements(gapCss, items);
            // Clear all gaps for all visible elements
            this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
        }
    }
}
LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) { return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils)); };
/** @nocollapse */ LayoutGapStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LayoutGapStyleBuilder_Factory() { return new LayoutGapStyleBuilder((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils)); }, token: LayoutGapStyleBuilder, providedIn: "root" });
/** @nocollapse */
LayoutGapStyleBuilder.ctorParameters = () => [
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }]; }, null); })();
/** @type {?} */
const inputs$1 = [
    'fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md',
    'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md',
    'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm',
    'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'
];
/** @type {?} */
const selector$1 = `
  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],
  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],
  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],
  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]
`;
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
class LayoutGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} zone
     * @param {?} directionality
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.zone = zone;
        this.directionality = directionality;
        this.styleUtils = styleUtils;
        this.layout = 'row'; // default flex-direction
        // default flex-direction
        this.DIRECTIVE_KEY = 'layout-gap';
        this.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        /** @type {?} */
        const extraTriggers = [this.directionality.change, this.observerSubject.asObservable()];
        this.init(extraTriggers);
        this.marshal
            .trackValue(this.nativeElement, 'layout')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject))
            .subscribe(this.onLayoutChange.bind(this));
    }
    /**
     * Special accessor to query for all child 'element' nodes regardless of type, class, etc
     * @protected
     * @return {?}
     */
    get childrenNodes() {
        /** @type {?} */
        const obj = this.nativeElement.children;
        /** @type {?} */
        const buffer = [];
        // iterate backwards ensuring that length is an UInt32
        for (let i = obj.length; i--;) {
            buffer[i] = obj[i];
        }
        return buffer;
    }
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.buildChildObservable();
        this.triggerUpdate();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    onLayoutChange(matcher) {
        /** @type {?} */
        const layout = matcher.value;
        // Make sure to filter out 'wrap' option
        /** @type {?} */
        const direction = layout.split(' ');
        this.layout = direction[0];
        if (!LAYOUT_VALUES.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x === this.layout))) {
            this.layout = 'row';
        }
        this.triggerUpdate();
    }
    /**
     *
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        // Gather all non-hidden Element nodes
        /** @type {?} */
        const items = this.childrenNodes
            .filter((/**
         * @param {?} el
         * @return {?}
         */
        el => el.nodeType === 1 && this.willDisplay(el)))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            const orderA = +this.styler.lookupStyle(a, 'order');
            /** @type {?} */
            const orderB = +this.styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        }));
        if (items.length > 0) {
            /** @type {?} */
            const directionality = this.directionality.value;
            /** @type {?} */
            const layout = this.layout;
            if (layout === 'row' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheRowRtl;
            }
            else if (layout === 'row' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheRowLtr;
            }
            else if (layout === 'column' && directionality === 'rtl') {
                this.styleCache = layoutGapCacheColumnRtl;
            }
            else if (layout === 'column' && directionality !== 'rtl') {
                this.styleCache = layoutGapCacheColumnLtr;
            }
            this.addStyles(value, { directionality, items, layout });
        }
    }
    /**
     * We need to override clearStyles because in most cases mru isn't populated
     * @protected
     * @return {?}
     */
    clearStyles() {
        /** @type {?} */
        const gridMode = Object.keys(this.mru).length > 0;
        /** @type {?} */
        const childrenStyle = gridMode ? 'padding' :
            getMarginType(this.directionality.value, this.layout);
        // If there are styles on the parent remove them
        if (gridMode) {
            super.clearStyles();
        }
        // Then remove the children styles too
        this.styleUtils.applyStyleToElements({ [childrenStyle]: '' }, this.childrenNodes);
    }
    /**
     * Determine if an element will show or hide based on current activation
     * @protected
     * @param {?} source
     * @return {?}
     */
    willDisplay(source) {
        /** @type {?} */
        const value = this.marshal.getValue(source, 'show-hide');
        return value === true ||
            (value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none');
    }
    /**
     * @protected
     * @return {?}
     */
    buildChildObservable() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (typeof MutationObserver !== 'undefined') {
                this.observer = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                (mutations) => {
                    /** @type {?} */
                    const validatedChanges = (/**
                     * @param {?} it
                     * @return {?}
                     */
                    (it) => {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    });
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        this.observerSubject.next();
                    }
                }));
                this.observer.observe(this.nativeElement, { childList: true });
            }
        }));
    }
}
LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) { return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
LayoutGapDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutGapDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
LayoutGapDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: LayoutGapStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: LayoutGapStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
class DefaultLayoutGapDirective extends LayoutGapDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$1;
    }
}
DefaultLayoutGapDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultLayoutGapDirective_BaseFactory; return function DefaultLayoutGapDirective_Factory(t) { return (ɵDefaultLayoutGapDirective_BaseFactory || (ɵDefaultLayoutGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective)))(t || DefaultLayoutGapDirective); }; }();
DefaultLayoutGapDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultLayoutGapDirective, selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]], inputs: { fxLayoutGap: "fxLayoutGap", "fxLayoutGap.xs": "fxLayoutGap.xs", "fxLayoutGap.sm": "fxLayoutGap.sm", "fxLayoutGap.md": "fxLayoutGap.md", "fxLayoutGap.lg": "fxLayoutGap.lg", "fxLayoutGap.xl": "fxLayoutGap.xl", "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md": "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md": "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();
/** @type {?} */
const layoutGapCacheRowRtl = new Map();
/** @type {?} */
const layoutGapCacheColumnRtl = new Map();
/** @type {?} */
const layoutGapCacheRowLtr = new Map();
/** @type {?} */
const layoutGapCacheColumnLtr = new Map();
/** @type {?} */
const GRID_SPECIFIER = ' grid';
/**
 * @param {?} value
 * @param {?} directionality
 * @return {?}
 */
function buildGridPadding(value, directionality) {
    const [between, below] = value.split(' ');
    /** @type {?} */
    const bottom = below || between;
    /** @type {?} */
    let paddingRight = '0px';
    /** @type {?} */
    let paddingBottom = bottom;
    /** @type {?} */
    let paddingLeft = '0px';
    if (directionality === 'rtl') {
        paddingLeft = between;
    }
    else {
        paddingRight = between;
    }
    return { 'padding': `0px ${paddingRight} ${paddingBottom} ${paddingLeft}` };
}
/**
 * @param {?} value
 * @param {?} directionality
 * @return {?}
 */
function buildGridMargin(value, directionality) {
    const [between, below] = value.split(' ');
    /** @type {?} */
    const bottom = below || between;
    /** @type {?} */
    const minus = (/**
     * @param {?} str
     * @return {?}
     */
    (str) => `-${str}`);
    /** @type {?} */
    let marginRight = '0px';
    /** @type {?} */
    let marginBottom = minus(bottom);
    /** @type {?} */
    let marginLeft = '0px';
    if (directionality === 'rtl') {
        marginLeft = minus(between);
    }
    else {
        marginRight = minus(between);
    }
    return { 'margin': `0px ${marginRight} ${marginBottom} ${marginLeft}` };
}
/**
 * @param {?} directionality
 * @param {?} layout
 * @return {?}
 */
function getMarginType(directionality, layout) {
    switch (layout) {
        case 'column':
            return 'margin-bottom';
        case 'column-reverse':
            return 'margin-top';
        case 'row':
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
        case 'row-reverse':
            return directionality === 'rtl' ? 'margin-right' : 'margin-left';
        default:
            return directionality === 'rtl' ? 'margin-left' : 'margin-right';
    }
}
/**
 * @param {?} gapValue
 * @param {?} parent
 * @return {?}
 */
function buildGapCSS(gapValue, parent) {
    /** @type {?} */
    const key = getMarginType(parent.directionality, parent.layout);
    /** @type {?} */
    const margins = Object.assign({}, CLEAR_MARGIN_CSS);
    margins[key] = gapValue;
    return margins;
}

/**
 * @fileoverview added by tsickle
 * Generated from: utils/object-extend.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest, ...sources) {
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex/flex.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} layoutConfig
     */
    constructor(layoutConfig) {
        super();
        this.layoutConfig = layoutConfig;
    }
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        let [grow, shrink, ...basisParts] = input.split(' ');
        /** @type {?} */
        let basis = basisParts.join(' ');
        // The flex-direction of this element's flex container. Defaults to 'row'.
        /** @type {?} */
        const direction = (parent.direction.indexOf('column') > -1) ? 'column' : 'row';
        /** @type {?} */
        const max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        /** @type {?} */
        const min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        /** @type {?} */
        const hasCalc = String(basis).indexOf('calc') > -1;
        /** @type {?} */
        const usingCalc = hasCalc || (basis === 'auto');
        /** @type {?} */
        const isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        /** @type {?} */
        const hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 ||
            String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 ||
            String(basis).indexOf('vh') > -1;
        /** @type {?} */
        let isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        // make box inflexible when shrink and grow are both zero
        // should not set a min when the grow is zero
        // should not set a max when the shrink is zero
        /** @type {?} */
        const isFixed = !grow && !shrink;
        /** @type {?} */
        let css = {};
        // flex-basis allows you to specify the initial/starting main-axis size of the element,
        // before anything else is computed. It can either be a percentage or an absolute value.
        // It is, however, not the breaking point for flex-grow/shrink properties
        //
        // flex-grow can be seen as this:
        //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
        //   1: (Default value). Stretch; will be the same size to all other flex items on
        //       the same row since they have a default value of 1.
        //   ≥2 (integer n): Stretch. Will be n times the size of other elements
        //      with 'flex-grow: 1' on the same row.
        // Use `null` to clear existing styles.
        /** @type {?} */
        const clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                /** @type {?} */
                const useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : (useColumnBasisZero ? '0.000000001px' : 'auto');
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN((/** @type {?} */ (basis)))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': `${grow} ${shrink} ${isValue ? basis : '100%'}`
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': `${grow} ${shrink} ${basis}`
                });
            }
        }
        // Fix for issues 277, 534, and 728
        if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || (isValue && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': `${grow} ${shrink} ${basis}`
                });
            }
        }
        else {
            // Fix for issue 660
            if (parent.hasWrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : `${grow} ${shrink} ${css[max]}`) :
                    (hasCalc ? css[min] : `${grow} ${shrink} ${css[min]}`);
            }
        }
        return (/** @type {?} */ (extendObject(css, { 'box-sizing': 'border-box' })));
    }
}
FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) { return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG)); };
/** @nocollapse */ FlexStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexStyleBuilder_Factory() { return new FlexStyleBuilder((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG)); }, token: FlexStyleBuilder, providedIn: "root" });
/** @nocollapse */
FlexStyleBuilder.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
            }] }]; }, null); })();
/** @type {?} */
const inputs$2 = [
    'fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md',
    'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md',
    'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm',
    'fxFlex.gt-md', 'fxFlex.gt-lg'
];
/** @type {?} */
const selector$2 = `
  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],
  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],
  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],
  [fxFlex.gt-md], [fxFlex.gt-lg]
`;
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
class FlexDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} layoutConfig
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.layoutConfig = layoutConfig;
        this.marshal = marshal;
        this.DIRECTIVE_KEY = 'flex';
        this.direction = undefined;
        this.wrap = undefined;
        this.flexGrow = '1';
        this.flexShrink = '1';
        this.init();
    }
    /**
     * @return {?}
     */
    get shrink() { return this.flexShrink; }
    /**
     * @param {?} value
     * @return {?}
     */
    set shrink(value) {
        this.flexShrink = value || '1';
        this.triggerReflow();
    }
    /**
     * @return {?}
     */
    get grow() { return this.flexGrow; }
    /**
     * @param {?} value
     * @return {?}
     */
    set grow(value) {
        this.flexGrow = value || '1';
        this.triggerReflow();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.parentElement) {
            this.marshal.trackValue(this.parentElement, 'layout')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject))
                .subscribe(this.onLayoutChange.bind(this));
            this.marshal.trackValue(this.nativeElement, 'layout-align')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject))
                .subscribe(this.triggerReflow.bind(this));
        }
    }
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    onLayoutChange(matcher) {
        /** @type {?} */
        const layout = matcher.value;
        /** @type {?} */
        const layoutParts = layout.split(' ');
        this.direction = layoutParts[0];
        this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
        this.triggerUpdate();
    }
    /**
     * Input to this is exclusively the basis input value
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        /** @type {?} */
        const addFlexToParent = this.layoutConfig.addFlexToParent !== false;
        if (this.direction === undefined) {
            this.direction = this.getFlexFlowDirection((/** @type {?} */ (this.parentElement)), addFlexToParent);
        }
        if (this.wrap === undefined) {
            this.wrap = this.hasWrap((/** @type {?} */ (this.parentElement)));
        }
        /** @type {?} */
        const direction = this.direction;
        /** @type {?} */
        const isHorizontal = direction.startsWith('row');
        /** @type {?} */
        const hasWrap = this.wrap;
        if (isHorizontal && hasWrap) {
            this.styleCache = flexRowWrapCache;
        }
        else if (isHorizontal && !hasWrap) {
            this.styleCache = flexRowCache;
        }
        else if (!isHorizontal && hasWrap) {
            this.styleCache = flexColumnWrapCache;
        }
        else if (!isHorizontal && !hasWrap) {
            this.styleCache = flexColumnCache;
        }
        /** @type {?} */
        const basis = String(value).replace(';', '');
        /** @type {?} */
        const parts = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis)(basis, this.flexGrow, this.flexShrink);
        this.addStyles(parts.join(' '), { direction, hasWrap });
    }
    /**
     * Trigger a style reflow, usually based on a shrink/grow input event
     * @protected
     * @return {?}
     */
    triggerReflow() {
        /** @type {?} */
        const activatedValue = this.activatedValue;
        if (activatedValue !== undefined) {
            /** @type {?} */
            const parts = (0,_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.validateBasis)(activatedValue + '', this.flexGrow, this.flexShrink);
            this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
        }
    }
}
FlexDirective.ɵfac = function FlexDirective_Factory(t) { return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
FlexDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexDirective, inputs: { shrink: ["fxShrink", "shrink"], grow: ["fxGrow", "grow"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
FlexDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG,] }] },
    { type: FlexStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
FlexDirective.propDecorators = {
    shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['fxShrink',] }],
    grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['fxGrow',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_CONFIG]
            }] }, { type: FlexStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { shrink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['fxShrink']
        }], grow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['fxGrow']
        }] }); })();
class DefaultFlexDirective extends FlexDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$2;
    }
}
DefaultFlexDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultFlexDirective_BaseFactory; return function DefaultFlexDirective_Factory(t) { return (ɵDefaultFlexDirective_BaseFactory || (ɵDefaultFlexDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexDirective)))(t || DefaultFlexDirective); }; }();
DefaultFlexDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexDirective, selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]], inputs: { fxFlex: "fxFlex", "fxFlex.xs": "fxFlex.xs", "fxFlex.sm": "fxFlex.sm", "fxFlex.md": "fxFlex.md", "fxFlex.lg": "fxFlex.lg", "fxFlex.xl": "fxFlex.xl", "fxFlex.lt-sm": "fxFlex.lt-sm", "fxFlex.lt-md": "fxFlex.lt-md", "fxFlex.lt-lg": "fxFlex.lt-lg", "fxFlex.lt-xl": "fxFlex.lt-xl", "fxFlex.gt-xs": "fxFlex.gt-xs", "fxFlex.gt-sm": "fxFlex.gt-sm", "fxFlex.gt-md": "fxFlex.gt-md", "fxFlex.gt-lg": "fxFlex.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ inputs: inputs$2, selector: selector$2 }]
    }], null, null); })();
/** @type {?} */
const flexRowCache = new Map();
/** @type {?} */
const flexColumnCache = new Map();
/** @type {?} */
const flexRowWrapCache = new Map();
/** @type {?} */
const flexColumnWrapCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-order/flex-order.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexOrderStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} value
     * @return {?}
     */
    buildStyles(value) {
        return { order: (value && parseInt(value, 10)) || '' };
    }
}
FlexOrderStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵFlexOrderStyleBuilder_BaseFactory; return function FlexOrderStyleBuilder_Factory(t) { return (ɵFlexOrderStyleBuilder_BaseFactory || (ɵFlexOrderStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder)))(t || FlexOrderStyleBuilder); }; }();
/** @nocollapse */ FlexOrderStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexOrderStyleBuilder_Factory() { return new FlexOrderStyleBuilder(); }, token: FlexOrderStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** @type {?} */
const inputs$3 = [
    'fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md',
    'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md',
    'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm',
    'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'
];
/** @type {?} */
const selector$3 = `
  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],
  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],
  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],
  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]
`;
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
class FlexOrderDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'flex-order';
        this.styleCache = flexOrderCache;
        this.init();
    }
}
FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) { return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
FlexOrderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexOrderDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
FlexOrderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: FlexOrderStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOrderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: FlexOrderStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const flexOrderCache = new Map();
class DefaultFlexOrderDirective extends FlexOrderDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$3;
    }
}
DefaultFlexOrderDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultFlexOrderDirective_BaseFactory; return function DefaultFlexOrderDirective_Factory(t) { return (ɵDefaultFlexOrderDirective_BaseFactory || (ɵDefaultFlexOrderDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective)))(t || DefaultFlexOrderDirective); }; }();
DefaultFlexOrderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexOrderDirective, selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]], inputs: { fxFlexOrder: "fxFlexOrder", "fxFlexOrder.xs": "fxFlexOrder.xs", "fxFlexOrder.sm": "fxFlexOrder.sm", "fxFlexOrder.md": "fxFlexOrder.md", "fxFlexOrder.lg": "fxFlexOrder.lg", "fxFlexOrder.xl": "fxFlexOrder.xl", "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm", "fxFlexOrder.lt-md": "fxFlexOrder.lt-md", "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg", "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl", "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs", "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm", "fxFlexOrder.gt-md": "fxFlexOrder.gt-md", "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-offset/flex-offset.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexOffsetStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} offset
     * @param {?} parent
     * @return {?}
     */
    buildStyles(offset, parent) {
        if (offset === '') {
            offset = '0';
        }
        /** @type {?} */
        const isPercent = String(offset).indexOf('%') > -1;
        /** @type {?} */
        const isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(+offset)) {
            offset = offset + '%';
        }
        /** @type {?} */
        const horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
        /** @type {?} */
        const styles = isFlowHorizontal(parent.layout) ?
            { [horizontalLayoutKey]: `${offset}` } : { 'margin-top': `${offset}` };
        return styles;
    }
}
FlexOffsetStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵFlexOffsetStyleBuilder_BaseFactory; return function FlexOffsetStyleBuilder_Factory(t) { return (ɵFlexOffsetStyleBuilder_BaseFactory || (ɵFlexOffsetStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexOffsetStyleBuilder)))(t || FlexOffsetStyleBuilder); }; }();
/** @nocollapse */ FlexOffsetStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexOffsetStyleBuilder_Factory() { return new FlexOffsetStyleBuilder(); }, token: FlexOffsetStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** @type {?} */
const inputs$4 = [
    'fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md',
    'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md',
    'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm',
    'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'
];
/** @type {?} */
const selector$4 = `
  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],
  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],
  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],
  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]
`;
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
class FlexOffsetDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} directionality
     * @param {?} styleBuilder
     * @param {?} marshal
     * @param {?} styler
     */
    constructor(elRef, directionality, styleBuilder, marshal, styler) {
        super(elRef, styleBuilder, styler, marshal);
        this.directionality = directionality;
        this.DIRECTIVE_KEY = 'flex-offset';
        this.init([this.directionality.change]);
        // Parent DOM `layout-gap` with affect the nested child with `flex-offset`
        if (this.parentElement) {
            this.marshal
                .trackValue(this.parentElement, 'layout-gap')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject))
                .subscribe(this.triggerUpdate.bind(this));
        }
    }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @protected
     * @param {?=} value
     * @return {?}
     */
    updateWithValue(value = '') {
        // The flex-direction of this element's flex container. Defaults to 'row'.
        /** @type {?} */
        const layout = this.getFlexFlowDirection((/** @type {?} */ (this.parentElement)), true);
        /** @type {?} */
        const isRtl = this.directionality.value === 'rtl';
        if (layout === 'row' && isRtl) {
            this.styleCache = flexOffsetCacheRowRtl;
        }
        else if (layout === 'row' && !isRtl) {
            this.styleCache = flexOffsetCacheRowLtr;
        }
        else if (layout === 'column' && isRtl) {
            this.styleCache = flexOffsetCacheColumnRtl;
        }
        else if (layout === 'column' && !isRtl) {
            this.styleCache = flexOffsetCacheColumnLtr;
        }
        this.addStyles(value + '', { layout, isRtl });
    }
}
FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) { return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils)); };
FlexOffsetDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexOffsetDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
FlexOffsetDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality },
    { type: FlexOffsetStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexOffsetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.Directionality }, { type: FlexOffsetStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }]; }, null); })();
class DefaultFlexOffsetDirective extends FlexOffsetDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$4;
    }
}
DefaultFlexOffsetDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultFlexOffsetDirective_BaseFactory; return function DefaultFlexOffsetDirective_Factory(t) { return (ɵDefaultFlexOffsetDirective_BaseFactory || (ɵDefaultFlexOffsetDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective)))(t || DefaultFlexOffsetDirective); }; }();
DefaultFlexOffsetDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexOffsetDirective, selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]], inputs: { fxFlexOffset: "fxFlexOffset", "fxFlexOffset.xs": "fxFlexOffset.xs", "fxFlexOffset.sm": "fxFlexOffset.sm", "fxFlexOffset.md": "fxFlexOffset.md", "fxFlexOffset.lg": "fxFlexOffset.lg", "fxFlexOffset.xl": "fxFlexOffset.xl", "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm", "fxFlexOffset.lt-md": "fxFlexOffset.lt-md", "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg", "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl", "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs", "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm", "fxFlexOffset.gt-md": "fxFlexOffset.gt-md", "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$4, inputs: inputs$4 }]
    }], null, null); })();
/** @type {?} */
const flexOffsetCacheRowRtl = new Map();
/** @type {?} */
const flexOffsetCacheColumnRtl = new Map();
/** @type {?} */
const flexOffsetCacheRowLtr = new Map();
/** @type {?} */
const flexOffsetCacheColumnLtr = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-align/flex-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlexAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @return {?}
     */
    buildStyles(input) {
        input = input || 'stretch';
        /** @type {?} */
        const styles = {};
        // Cross-axis
        switch (input) {
            case 'start':
                styles['align-self'] = 'flex-start';
                break;
            case 'end':
                styles['align-self'] = 'flex-end';
                break;
            default:
                styles['align-self'] = input;
                break;
        }
        return styles;
    }
}
FlexAlignStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵFlexAlignStyleBuilder_BaseFactory; return function FlexAlignStyleBuilder_Factory(t) { return (ɵFlexAlignStyleBuilder_BaseFactory || (ɵFlexAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder)))(t || FlexAlignStyleBuilder); }; }();
/** @nocollapse */ FlexAlignStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexAlignStyleBuilder_Factory() { return new FlexAlignStyleBuilder(); }, token: FlexAlignStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** @type {?} */
const inputs$5 = [
    'fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md',
    'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md',
    'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm',
    'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'
];
/** @type {?} */
const selector$5 = `
  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],
  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],
  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],
  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]
`;
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
class FlexAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'flex-align';
        this.styleCache = flexAlignCache;
        this.init();
    }
}
FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) { return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
FlexAlignDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexAlignDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
FlexAlignDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: FlexAlignStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: FlexAlignStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const flexAlignCache = new Map();
class DefaultFlexAlignDirective extends FlexAlignDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$5;
    }
}
DefaultFlexAlignDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultFlexAlignDirective_BaseFactory; return function DefaultFlexAlignDirective_Factory(t) { return (ɵDefaultFlexAlignDirective_BaseFactory || (ɵDefaultFlexAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective)))(t || DefaultFlexAlignDirective); }; }();
DefaultFlexAlignDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultFlexAlignDirective, selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]], inputs: { fxFlexAlign: "fxFlexAlign", "fxFlexAlign.xs": "fxFlexAlign.xs", "fxFlexAlign.sm": "fxFlexAlign.sm", "fxFlexAlign.md": "fxFlexAlign.md", "fxFlexAlign.lg": "fxFlexAlign.lg", "fxFlexAlign.xl": "fxFlexAlign.xl", "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm", "fxFlexAlign.lt-md": "fxFlexAlign.lt-md", "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg", "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl", "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs", "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm", "fxFlexAlign.gt-md": "fxFlexAlign.gt-md", "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$5, inputs: inputs$5 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/flex-fill/flex-fill.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
class FlexFillStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} _input
     * @return {?}
     */
    buildStyles(_input) {
        return FLEX_FILL_CSS;
    }
}
FlexFillStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵFlexFillStyleBuilder_BaseFactory; return function FlexFillStyleBuilder_Factory(t) { return (ɵFlexFillStyleBuilder_BaseFactory || (ɵFlexFillStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder)))(t || FlexFillStyleBuilder); }; }();
/** @nocollapse */ FlexFillStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FlexFillStyleBuilder_Factory() { return new FlexFillStyleBuilder(); }, token: FlexFillStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
class FlexFillDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.styleCache = flexFillCache;
        this.addStyles('');
    }
}
FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) { return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
FlexFillDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FlexFillDirective, selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
FlexFillDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: FlexFillStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexFillDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: `[fxFill], [fxFlexFill]` }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: FlexFillStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const flexFillCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/layout-align/layout-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LayoutAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} align
     * @param {?} parent
     * @return {?}
     */
    buildStyles(align, parent) {
        /** @type {?} */
        const css = {};
        const [mainAxis, crossAxis] = align.split(' ');
        // Main axis
        switch (mainAxis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'space-between':
                css['align-content'] = 'space-between';
                css['align-items'] = 'stretch';
                break;
            case 'space-around':
                css['align-content'] = 'space-around';
                css['align-items'] = 'stretch';
                break;
            case 'baseline':
                css['align-content'] = 'stretch';
                css['align-items'] = 'baseline';
                break;
            case 'stretch':
            default: // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return (/** @type {?} */ (extendObject(css, {
            'display': parent.inline ? 'inline-flex' : 'flex',
            'flex-direction': parent.layout,
            'box-sizing': 'border-box',
            'max-width': crossAxis === 'stretch' ?
                !isFlowHorizontal(parent.layout) ? '100%' : null : null,
            'max-height': crossAxis === 'stretch' ?
                isFlowHorizontal(parent.layout) ? '100%' : null : null,
        })));
    }
}
LayoutAlignStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵLayoutAlignStyleBuilder_BaseFactory; return function LayoutAlignStyleBuilder_Factory(t) { return (ɵLayoutAlignStyleBuilder_BaseFactory || (ɵLayoutAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder)))(t || LayoutAlignStyleBuilder); }; }();
/** @nocollapse */ LayoutAlignStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LayoutAlignStyleBuilder_Factory() { return new LayoutAlignStyleBuilder(); }, token: LayoutAlignStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** @type {?} */
const inputs$6 = [
    'fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md',
    'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md',
    'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm',
    'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'
];
/** @type {?} */
const selector$6 = `
  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],
  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],
  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],
  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]
`;
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 * @see https://css-tricks.com/almanac/properties/j/justify-content/
 * @see https://css-tricks.com/almanac/properties/a/align-items/
 * @see https://css-tricks.com/almanac/properties/a/align-content/
 */
class LayoutAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    // default inline value
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'layout-align';
        this.layout = 'row'; // default flex-direction
        // default flex-direction
        this.inline = false; // default inline value
        this.init();
        this.marshal.trackValue(this.nativeElement, 'layout')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroySubject))
            .subscribe(this.onLayoutChange.bind(this));
    }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        /** @type {?} */
        const layout = this.layout || 'row';
        /** @type {?} */
        const inline = this.inline;
        if (layout === 'row' && inline) {
            this.styleCache = layoutAlignHorizontalInlineCache;
        }
        else if (layout === 'row' && !inline) {
            this.styleCache = layoutAlignHorizontalCache;
        }
        else if (layout === 'row-reverse' && inline) {
            this.styleCache = layoutAlignHorizontalRevInlineCache;
        }
        else if (layout === 'row-reverse' && !inline) {
            this.styleCache = layoutAlignHorizontalRevCache;
        }
        else if (layout === 'column' && inline) {
            this.styleCache = layoutAlignVerticalInlineCache;
        }
        else if (layout === 'column' && !inline) {
            this.styleCache = layoutAlignVerticalCache;
        }
        else if (layout === 'column-reverse' && inline) {
            this.styleCache = layoutAlignVerticalRevInlineCache;
        }
        else if (layout === 'column-reverse' && !inline) {
            this.styleCache = layoutAlignVerticalRevCache;
        }
        this.addStyles(value, { layout, inline });
    }
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @protected
     * @param {?} matcher
     * @return {?}
     */
    onLayoutChange(matcher) {
        /** @type {?} */
        const layoutKeys = matcher.value.split(' ');
        this.layout = layoutKeys[0];
        this.inline = matcher.value.includes('inline');
        if (!LAYOUT_VALUES.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x === this.layout))) {
            this.layout = 'row';
        }
        this.triggerUpdate();
    }
}
LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) { return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
LayoutAlignDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LayoutAlignDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
LayoutAlignDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: LayoutAlignStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayoutAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: LayoutAlignStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
class DefaultLayoutAlignDirective extends LayoutAlignDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$6;
    }
}
DefaultLayoutAlignDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultLayoutAlignDirective_BaseFactory; return function DefaultLayoutAlignDirective_Factory(t) { return (ɵDefaultLayoutAlignDirective_BaseFactory || (ɵDefaultLayoutAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective)))(t || DefaultLayoutAlignDirective); }; }();
DefaultLayoutAlignDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultLayoutAlignDirective, selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]], inputs: { fxLayoutAlign: "fxLayoutAlign", "fxLayoutAlign.xs": "fxLayoutAlign.xs", "fxLayoutAlign.sm": "fxLayoutAlign.sm", "fxLayoutAlign.md": "fxLayoutAlign.md", "fxLayoutAlign.lg": "fxLayoutAlign.lg", "fxLayoutAlign.xl": "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$6, inputs: inputs$6 }]
    }], null, null); })();
/** @type {?} */
const layoutAlignHorizontalCache = new Map();
/** @type {?} */
const layoutAlignVerticalCache = new Map();
/** @type {?} */
const layoutAlignHorizontalRevCache = new Map();
/** @type {?} */
const layoutAlignVerticalRevCache = new Map();
/** @type {?} */
const layoutAlignHorizontalInlineCache = new Map();
/** @type {?} */
const layoutAlignVerticalInlineCache = new Map();
/** @type {?} */
const layoutAlignHorizontalRevInlineCache = new Map();
/** @type {?} */
const layoutAlignVerticalRevInlineCache = new Map();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ALL_DIRECTIVES = [
    DefaultLayoutDirective,
    DefaultLayoutGapDirective,
    DefaultLayoutAlignDirective,
    DefaultFlexOrderDirective,
    DefaultFlexOffsetDirective,
    FlexFillDirective,
    DefaultFlexAlignDirective,
    DefaultFlexDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
class FlexModule {
}
FlexModule.ɵfac = function FlexModule_Factory(t) { return new (t || FlexModule)(); };
FlexModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FlexModule });
FlexModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FlexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule],
                declarations: [...ALL_DIRECTIVES],
                exports: [...ALL_DIRECTIVES]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlexModule, { declarations: function () { return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective]; }, imports: function () { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]; }, exports: function () { return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: flex/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: flex/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=flex.js.map

/***/ }),

/***/ 4568:
/*!************************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GridModule": () => (/* binding */ GridModule),
/* harmony export */   "ɵgrid_privatef": () => (/* binding */ DefaultGridAlignColumnsDirective),
/* harmony export */   "ɵgrid_privatee": () => (/* binding */ GridAlignColumnsDirective),
/* harmony export */   "ɵgrid_privated": () => (/* binding */ GridAlignColumnsStyleBuilder),
/* harmony export */   "ɵgrid_privatei": () => (/* binding */ DefaultGridAlignRowsDirective),
/* harmony export */   "ɵgrid_privateh": () => (/* binding */ GridAlignRowsDirective),
/* harmony export */   "ɵgrid_privateg": () => (/* binding */ GridAlignRowsStyleBuilder),
/* harmony export */   "ɵgrid_privatel": () => (/* binding */ DefaultGridAreaDirective),
/* harmony export */   "ɵgrid_privatek": () => (/* binding */ GridAreaDirective),
/* harmony export */   "ɵgrid_privatej": () => (/* binding */ GridAreaStyleBuilder),
/* harmony export */   "ɵgrid_privateo": () => (/* binding */ DefaultGridAreasDirective),
/* harmony export */   "ɵgrid_privaten": () => (/* binding */ GridAreasDirective),
/* harmony export */   "ɵgrid_privatem": () => (/* binding */ GridAreasStyleBuiler),
/* harmony export */   "ɵgrid_privater": () => (/* binding */ DefaultGridAutoDirective),
/* harmony export */   "ɵgrid_privateq": () => (/* binding */ GridAutoDirective),
/* harmony export */   "ɵgrid_privatep": () => (/* binding */ GridAutoStyleBuilder),
/* harmony export */   "ɵgrid_privateu": () => (/* binding */ DefaultGridColumnDirective),
/* harmony export */   "ɵgrid_privatet": () => (/* binding */ GridColumnDirective),
/* harmony export */   "ɵgrid_privates": () => (/* binding */ GridColumnStyleBuilder),
/* harmony export */   "ɵgrid_privatex": () => (/* binding */ DefaultGridColumnsDirective),
/* harmony export */   "ɵgrid_privatew": () => (/* binding */ GridColumnsDirective),
/* harmony export */   "ɵgrid_privatev": () => (/* binding */ GridColumnsStyleBuilder),
/* harmony export */   "ɵgrid_privateba": () => (/* binding */ DefaultGridGapDirective),
/* harmony export */   "ɵgrid_privatez": () => (/* binding */ GridGapDirective),
/* harmony export */   "ɵgrid_privatey": () => (/* binding */ GridGapStyleBuilder),
/* harmony export */   "ɵgrid_privatec": () => (/* binding */ DefaultGridAlignDirective),
/* harmony export */   "ɵgrid_privateb": () => (/* binding */ GridAlignDirective),
/* harmony export */   "ɵgrid_privatea": () => (/* binding */ GridAlignStyleBuilder),
/* harmony export */   "ɵgrid_privatebd": () => (/* binding */ DefaultGridRowDirective),
/* harmony export */   "ɵgrid_privatebc": () => (/* binding */ GridRowDirective),
/* harmony export */   "ɵgrid_privatebb": () => (/* binding */ GridRowStyleBuilder),
/* harmony export */   "ɵgrid_privatebg": () => (/* binding */ DefaultGridRowsDirective),
/* harmony export */   "ɵgrid_privatebf": () => (/* binding */ GridRowsDirective),
/* harmony export */   "ɵgrid_privatebe": () => (/* binding */ GridRowsStyleBuilder)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout/core */ 7736);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 9490);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * Generated from: grid/grid-align/grid-align.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */


const ROW_DEFAULT = 'stretch';
/** @type {?} */
const COL_DEFAULT = 'stretch';
class GridAlignStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @return {?}
     */
    buildStyles(input) {
        return buildCss(input || ROW_DEFAULT);
    }
}
GridAlignStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridAlignStyleBuilder_BaseFactory; return function GridAlignStyleBuilder_Factory(t) { return (ɵGridAlignStyleBuilder_BaseFactory || (ɵGridAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder)))(t || GridAlignStyleBuilder); }; }();
/** @nocollapse */ GridAlignStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAlignStyleBuilder_Factory() { return new GridAlignStyleBuilder(); }, token: GridAlignStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridAlignDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-align';
        this.styleCache = alignCache;
        this.init();
    }
}
GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) { return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridAlignDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAlignDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridAlignDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridAlignStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridAlignStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const alignCache = new Map();
/** @type {?} */
const inputs = [
    'gdGridAlign',
    'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl',
    'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl',
    'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'
];
/** @type {?} */
const selector = `
  [gdGridAlign],
  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],
  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],
  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]
`;
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
class DefaultGridAlignDirective extends GridAlignDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs;
    }
}
DefaultGridAlignDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridAlignDirective_BaseFactory; return function DefaultGridAlignDirective_Factory(t) { return (ɵDefaultGridAlignDirective_BaseFactory || (ɵDefaultGridAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective)))(t || DefaultGridAlignDirective); }; }();
DefaultGridAlignDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAlignDirective, selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]], inputs: { gdGridAlign: "gdGridAlign", "gdGridAlign.xs": "gdGridAlign.xs", "gdGridAlign.sm": "gdGridAlign.sm", "gdGridAlign.md": "gdGridAlign.md", "gdGridAlign.lg": "gdGridAlign.lg", "gdGridAlign.xl": "gdGridAlign.xl", "gdGridAlign.lt-sm": "gdGridAlign.lt-sm", "gdGridAlign.lt-md": "gdGridAlign.lt-md", "gdGridAlign.lt-lg": "gdGridAlign.lt-lg", "gdGridAlign.lt-xl": "gdGridAlign.lt-xl", "gdGridAlign.gt-xs": "gdGridAlign.gt-xs", "gdGridAlign.gt-sm": "gdGridAlign.gt-sm", "gdGridAlign.gt-md": "gdGridAlign.gt-md", "gdGridAlign.gt-lg": "gdGridAlign.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector, inputs }]
    }], null, null); })();
/**
 * @param {?=} align
 * @return {?}
 */
function buildCss(align = '') {
    /** @type {?} */
    const css = {};
    const [rowAxis, columnAxis] = align.split(' ');
    // Row axis
    switch (rowAxis) {
        case 'end':
            css['justify-self'] = 'end';
            break;
        case 'center':
            css['justify-self'] = 'center';
            break;
        case 'stretch':
            css['justify-self'] = 'stretch';
            break;
        case 'start':
            css['justify-self'] = 'start';
            break;
        default:
            css['justify-self'] = ROW_DEFAULT; // default row axis
            break;
    }
    // Column axis
    switch (columnAxis) {
        case 'end':
            css['align-self'] = 'end';
            break;
        case 'center':
            css['align-self'] = 'center';
            break;
        case 'stretch':
            css['align-self'] = 'stretch';
            break;
        case 'start':
            css['align-self'] = 'start';
            break;
        default:
            css['align-self'] = COL_DEFAULT; // default column axis
            break;
    }
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/align-columns/align-columns.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_MAIN = 'start';
/** @type {?} */
const DEFAULT_CROSS = 'stretch';
class GridAlignColumnsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        return buildCss$1(input || `${DEFAULT_MAIN} ${DEFAULT_CROSS}`, parent.inline);
    }
}
GridAlignColumnsStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridAlignColumnsStyleBuilder_BaseFactory; return function GridAlignColumnsStyleBuilder_Factory(t) { return (ɵGridAlignColumnsStyleBuilder_BaseFactory || (ɵGridAlignColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder)))(t || GridAlignColumnsStyleBuilder); }; }();
/** @nocollapse */ GridAlignColumnsStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAlignColumnsStyleBuilder_Factory() { return new GridAlignColumnsStyleBuilder(); }, token: GridAlignColumnsStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridAlignColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-align-columns';
        this._inline = false;
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) { return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridAlignColumnsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAlignColumnsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridAlignColumnsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridAlignColumnsStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridAlignColumnsDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridAlignColumnsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const alignColumnsCache = new Map();
/** @type {?} */
const alignColumnsInlineCache = new Map();
/** @type {?} */
const inputs$1 = [
    'gdAlignColumns',
    'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md',
    'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm',
    'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl',
    'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md',
    'gdAlignColumns.gt-lg'
];
/** @type {?} */
const selector$1 = `
  [gdAlignColumns],
  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],
  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],
  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],
  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],
  [gdAlignColumns.gt-lg]
`;
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
class DefaultGridAlignColumnsDirective extends GridAlignColumnsDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$1;
    }
}
DefaultGridAlignColumnsDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridAlignColumnsDirective_BaseFactory; return function DefaultGridAlignColumnsDirective_Factory(t) { return (ɵDefaultGridAlignColumnsDirective_BaseFactory || (ɵDefaultGridAlignColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective)))(t || DefaultGridAlignColumnsDirective); }; }();
DefaultGridAlignColumnsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAlignColumnsDirective, selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]], inputs: { gdAlignColumns: "gdAlignColumns", "gdAlignColumns.xs": "gdAlignColumns.xs", "gdAlignColumns.sm": "gdAlignColumns.sm", "gdAlignColumns.md": "gdAlignColumns.md", "gdAlignColumns.lg": "gdAlignColumns.lg", "gdAlignColumns.xl": "gdAlignColumns.xl", "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md": "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md": "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$1, inputs: inputs$1 }]
    }], null, null); })();
/**
 * @param {?} align
 * @param {?} inline
 * @return {?}
 */
function buildCss$1(align, inline) {
    /** @type {?} */
    const css = {};
    const [mainAxis, crossAxis] = align.split(' ');
    // Main axis
    switch (mainAxis) {
        case 'center':
            css['align-content'] = 'center';
            break;
        case 'space-around':
            css['align-content'] = 'space-around';
            break;
        case 'space-between':
            css['align-content'] = 'space-between';
            break;
        case 'space-evenly':
            css['align-content'] = 'space-evenly';
            break;
        case 'end':
            css['align-content'] = 'end';
            break;
        case 'start':
            css['align-content'] = 'start';
            break;
        case 'stretch':
            css['align-content'] = 'stretch';
            break;
        default:
            css['align-content'] = DEFAULT_MAIN; // default main axis
            break;
    }
    // Cross-axis
    switch (crossAxis) {
        case 'start':
            css['align-items'] = 'start';
            break;
        case 'center':
            css['align-items'] = 'center';
            break;
        case 'end':
            css['align-items'] = 'end';
            break;
        case 'stretch':
            css['align-items'] = 'stretch';
            break;
        default: // 'stretch'
            css['align-items'] = DEFAULT_CROSS; // default cross axis
            break;
    }
    css['display'] = inline ? 'inline-grid' : 'grid';
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/align-rows/align-rows.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_MAIN$1 = 'start';
/** @type {?} */
const DEFAULT_CROSS$1 = 'stretch';
class GridAlignRowsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        return buildCss$2(input || `${DEFAULT_MAIN$1} ${DEFAULT_CROSS$1}`, parent.inline);
    }
}
GridAlignRowsStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridAlignRowsStyleBuilder_BaseFactory; return function GridAlignRowsStyleBuilder_Factory(t) { return (ɵGridAlignRowsStyleBuilder_BaseFactory || (ɵGridAlignRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder)))(t || GridAlignRowsStyleBuilder); }; }();
/** @nocollapse */ GridAlignRowsStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAlignRowsStyleBuilder_Factory() { return new GridAlignRowsStyleBuilder(); }, token: GridAlignRowsStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridAlignRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-align-rows';
        this._inline = false;
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) { return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridAlignRowsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAlignRowsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridAlignRowsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridAlignRowsStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridAlignRowsDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridAlignRowsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const alignRowsCache = new Map();
/** @type {?} */
const alignRowsInlineCache = new Map();
/** @type {?} */
const inputs$2 = [
    'gdAlignRows',
    'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md',
    'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm',
    'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl',
    'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md',
    'gdAlignRows.gt-lg'
];
/** @type {?} */
const selector$2 = `
  [gdAlignRows],
  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],
  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],
  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],
  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],
  [gdAlignRows.gt-lg]
`;
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
class DefaultGridAlignRowsDirective extends GridAlignRowsDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$2;
    }
}
DefaultGridAlignRowsDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridAlignRowsDirective_BaseFactory; return function DefaultGridAlignRowsDirective_Factory(t) { return (ɵDefaultGridAlignRowsDirective_BaseFactory || (ɵDefaultGridAlignRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective)))(t || DefaultGridAlignRowsDirective); }; }();
DefaultGridAlignRowsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAlignRowsDirective, selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]], inputs: { gdAlignRows: "gdAlignRows", "gdAlignRows.xs": "gdAlignRows.xs", "gdAlignRows.sm": "gdAlignRows.sm", "gdAlignRows.md": "gdAlignRows.md", "gdAlignRows.lg": "gdAlignRows.lg", "gdAlignRows.xl": "gdAlignRows.xl", "gdAlignRows.lt-sm": "gdAlignRows.lt-sm", "gdAlignRows.lt-md": "gdAlignRows.lt-md", "gdAlignRows.lt-lg": "gdAlignRows.lt-lg", "gdAlignRows.lt-xl": "gdAlignRows.lt-xl", "gdAlignRows.gt-xs": "gdAlignRows.gt-xs", "gdAlignRows.gt-sm": "gdAlignRows.gt-sm", "gdAlignRows.gt-md": "gdAlignRows.gt-md", "gdAlignRows.gt-lg": "gdAlignRows.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$2, inputs: inputs$2 }]
    }], null, null); })();
/**
 * @param {?} align
 * @param {?} inline
 * @return {?}
 */
function buildCss$2(align, inline) {
    /** @type {?} */
    const css = {};
    const [mainAxis, crossAxis] = align.split(' ');
    // Main axis
    switch (mainAxis) {
        case 'center':
        case 'space-around':
        case 'space-between':
        case 'space-evenly':
        case 'end':
        case 'start':
        case 'stretch':
            css['justify-content'] = mainAxis;
            break;
        default:
            css['justify-content'] = DEFAULT_MAIN$1; // default main axis
            break;
    }
    // Cross-axis
    switch (crossAxis) {
        case 'start':
        case 'center':
        case 'end':
        case 'stretch':
            css['justify-items'] = crossAxis;
            break;
        default: // 'stretch'
            css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
            break;
    }
    css['display'] = inline ? 'inline-grid' : 'grid';
    return css;
}

/**
 * @fileoverview added by tsickle
 * Generated from: grid/area/area.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE = 'auto';
class GridAreaStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @return {?}
     */
    buildStyles(input) {
        return { 'grid-area': input || DEFAULT_VALUE };
    }
}
GridAreaStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridAreaStyleBuilder_BaseFactory; return function GridAreaStyleBuilder_Factory(t) { return (ɵGridAreaStyleBuilder_BaseFactory || (ɵGridAreaStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder)))(t || GridAreaStyleBuilder); }; }();
/** @nocollapse */ GridAreaStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAreaStyleBuilder_Factory() { return new GridAreaStyleBuilder(); }, token: GridAreaStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridAreaDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'grid-area';
        this.styleCache = gridAreaCache;
        this.init();
    }
}
GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) { return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridAreaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAreaDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridAreaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: GridAreaStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: GridAreaStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const gridAreaCache = new Map();
/** @type {?} */
const inputs$3 = [
    'gdArea',
    'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl',
    'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl',
    'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'
];
/** @type {?} */
const selector$3 = `
  [gdArea],
  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],
  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],
  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]
`;
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
class DefaultGridAreaDirective extends GridAreaDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$3;
    }
}
DefaultGridAreaDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridAreaDirective_BaseFactory; return function DefaultGridAreaDirective_Factory(t) { return (ɵDefaultGridAreaDirective_BaseFactory || (ɵDefaultGridAreaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective)))(t || DefaultGridAreaDirective); }; }();
DefaultGridAreaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAreaDirective, selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]], inputs: { gdArea: "gdArea", "gdArea.xs": "gdArea.xs", "gdArea.sm": "gdArea.sm", "gdArea.md": "gdArea.md", "gdArea.lg": "gdArea.lg", "gdArea.xl": "gdArea.xl", "gdArea.lt-sm": "gdArea.lt-sm", "gdArea.lt-md": "gdArea.lt-md", "gdArea.lt-lg": "gdArea.lt-lg", "gdArea.lt-xl": "gdArea.lt-xl", "gdArea.gt-xs": "gdArea.gt-xs", "gdArea.gt-sm": "gdArea.gt-sm", "gdArea.gt-md": "gdArea.gt-md", "gdArea.gt-lg": "gdArea.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$3, inputs: inputs$3 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/areas/areas.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$1 = 'none';
/** @type {?} */
const DELIMETER = '|';
class GridAreasStyleBuiler extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        /** @type {?} */
        const areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map((/**
         * @param {?} v
         * @return {?}
         */
        v => `"${v.trim()}"`));
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    }
}
GridAreasStyleBuiler.ɵfac = /*@__PURE__*/ function () { let ɵGridAreasStyleBuiler_BaseFactory; return function GridAreasStyleBuiler_Factory(t) { return (ɵGridAreasStyleBuiler_BaseFactory || (ɵGridAreasStyleBuiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler)))(t || GridAreasStyleBuiler); }; }();
/** @nocollapse */ GridAreasStyleBuiler.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAreasStyleBuiler_Factory() { return new GridAreasStyleBuiler(); }, token: GridAreasStyleBuiler, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridAreasDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'grid-areas';
        this._inline = false;
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? areasInlineCache : areasCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) { return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridAreasDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAreasDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridAreasDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: GridAreasStyleBuiler },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridAreasDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAreasDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: GridAreasStyleBuiler }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const areasCache = new Map();
/** @type {?} */
const areasInlineCache = new Map();
/** @type {?} */
const inputs$4 = [
    'gdAreas',
    'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl',
    'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl',
    'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'
];
/** @type {?} */
const selector$4 = `
  [gdAreas],
  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],
  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],
  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]
`;
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
class DefaultGridAreasDirective extends GridAreasDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$4;
    }
}
DefaultGridAreasDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridAreasDirective_BaseFactory; return function DefaultGridAreasDirective_Factory(t) { return (ɵDefaultGridAreasDirective_BaseFactory || (ɵDefaultGridAreasDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective)))(t || DefaultGridAreasDirective); }; }();
DefaultGridAreasDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAreasDirective, selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]], inputs: { gdAreas: "gdAreas", "gdAreas.xs": "gdAreas.xs", "gdAreas.sm": "gdAreas.sm", "gdAreas.md": "gdAreas.md", "gdAreas.lg": "gdAreas.lg", "gdAreas.xl": "gdAreas.xl", "gdAreas.lt-sm": "gdAreas.lt-sm", "gdAreas.lt-md": "gdAreas.lt-md", "gdAreas.lt-lg": "gdAreas.lt-lg", "gdAreas.lt-xl": "gdAreas.lt-xl", "gdAreas.gt-xs": "gdAreas.gt-xs", "gdAreas.gt-sm": "gdAreas.gt-sm", "gdAreas.gt-md": "gdAreas.gt-md", "gdAreas.gt-lg": "gdAreas.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$4, inputs: inputs$4 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/auto/auto.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$2 = 'initial';
class GridAutoStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        let [direction, dense] = (input || DEFAULT_VALUE$2).split(' ');
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    }
}
GridAutoStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridAutoStyleBuilder_BaseFactory; return function GridAutoStyleBuilder_Factory(t) { return (ɵGridAutoStyleBuilder_BaseFactory || (ɵGridAutoStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder)))(t || GridAutoStyleBuilder); }; }();
/** @nocollapse */ GridAutoStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridAutoStyleBuilder_Factory() { return new GridAutoStyleBuilder(); }, token: GridAutoStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridAutoDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this._inline = false;
        this.DIRECTIVE_KEY = 'grid-auto';
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? autoInlineCache : autoCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) { return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridAutoDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridAutoDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridAutoDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridAutoStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridAutoDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridAutoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridAutoStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const autoCache = new Map();
/** @type {?} */
const autoInlineCache = new Map();
/** @type {?} */
const inputs$5 = [
    'gdAuto',
    'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl',
    'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl',
    'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'
];
/** @type {?} */
const selector$5 = `
  [gdAuto],
  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],
  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],
  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]
`;
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
class DefaultGridAutoDirective extends GridAutoDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$5;
    }
}
DefaultGridAutoDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridAutoDirective_BaseFactory; return function DefaultGridAutoDirective_Factory(t) { return (ɵDefaultGridAutoDirective_BaseFactory || (ɵDefaultGridAutoDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective)))(t || DefaultGridAutoDirective); }; }();
DefaultGridAutoDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridAutoDirective, selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]], inputs: { gdAuto: "gdAuto", "gdAuto.xs": "gdAuto.xs", "gdAuto.sm": "gdAuto.sm", "gdAuto.md": "gdAuto.md", "gdAuto.lg": "gdAuto.lg", "gdAuto.xl": "gdAuto.xl", "gdAuto.lt-sm": "gdAuto.lt-sm", "gdAuto.lt-md": "gdAuto.lt-md", "gdAuto.lt-lg": "gdAuto.lt-lg", "gdAuto.lt-xl": "gdAuto.lt-xl", "gdAuto.gt-xs": "gdAuto.gt-xs", "gdAuto.gt-sm": "gdAuto.gt-sm", "gdAuto.gt-md": "gdAuto.gt-md", "gdAuto.gt-lg": "gdAuto.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$5, inputs: inputs$5 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/column/column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$3 = 'auto';
class GridColumnStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @return {?}
     */
    buildStyles(input) {
        return { 'grid-column': input || DEFAULT_VALUE$3 };
    }
}
GridColumnStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridColumnStyleBuilder_BaseFactory; return function GridColumnStyleBuilder_Factory(t) { return (ɵGridColumnStyleBuilder_BaseFactory || (ɵGridColumnStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder)))(t || GridColumnStyleBuilder); }; }();
/** @nocollapse */ GridColumnStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridColumnStyleBuilder_Factory() { return new GridColumnStyleBuilder(); }, token: GridColumnStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridColumnDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-column';
        this.styleCache = columnCache;
        this.init();
    }
}
GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) { return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridColumnDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridColumnDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridColumnDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridColumnStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridColumnStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const columnCache = new Map();
/** @type {?} */
const inputs$6 = [
    'gdColumn',
    'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl',
    'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl',
    'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'
];
/** @type {?} */
const selector$6 = `
  [gdColumn],
  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],
  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],
  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]
`;
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
class DefaultGridColumnDirective extends GridColumnDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$6;
    }
}
DefaultGridColumnDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridColumnDirective_BaseFactory; return function DefaultGridColumnDirective_Factory(t) { return (ɵDefaultGridColumnDirective_BaseFactory || (ɵDefaultGridColumnDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective)))(t || DefaultGridColumnDirective); }; }();
DefaultGridColumnDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridColumnDirective, selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]], inputs: { gdColumn: "gdColumn", "gdColumn.xs": "gdColumn.xs", "gdColumn.sm": "gdColumn.sm", "gdColumn.md": "gdColumn.md", "gdColumn.lg": "gdColumn.lg", "gdColumn.xl": "gdColumn.xl", "gdColumn.lt-sm": "gdColumn.lt-sm", "gdColumn.lt-md": "gdColumn.lt-md", "gdColumn.lt-lg": "gdColumn.lt-lg", "gdColumn.lt-xl": "gdColumn.lt-xl", "gdColumn.gt-xs": "gdColumn.gt-xs", "gdColumn.gt-sm": "gdColumn.gt-sm", "gdColumn.gt-md": "gdColumn.gt-md", "gdColumn.gt-lg": "gdColumn.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$6, inputs: inputs$6 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/columns/columns.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$4 = 'none';
/** @type {?} */
const AUTO_SPECIFIER = '!';
class GridColumnsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        input = input || DEFAULT_VALUE$4;
        /** @type {?} */
        let auto = false;
        if (input.endsWith(AUTO_SPECIFIER)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        const css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        const key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = input;
        return css;
    }
}
GridColumnsStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridColumnsStyleBuilder_BaseFactory; return function GridColumnsStyleBuilder_Factory(t) { return (ɵGridColumnsStyleBuilder_BaseFactory || (ɵGridColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder)))(t || GridColumnsStyleBuilder); }; }();
/** @nocollapse */ GridColumnsStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridColumnsStyleBuilder_Factory() { return new GridColumnsStyleBuilder(); }, token: GridColumnsStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridColumnsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-columns';
        this._inline = false;
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? columnsInlineCache : columnsCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) { return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridColumnsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridColumnsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridColumnsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridColumnsStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridColumnsDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridColumnsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const columnsCache = new Map();
/** @type {?} */
const columnsInlineCache = new Map();
/** @type {?} */
const inputs$7 = [
    'gdColumns',
    'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl',
    'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl',
    'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'
];
/** @type {?} */
const selector$7 = `
  [gdColumns],
  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],
  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],
  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]
`;
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
class DefaultGridColumnsDirective extends GridColumnsDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$7;
    }
}
DefaultGridColumnsDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridColumnsDirective_BaseFactory; return function DefaultGridColumnsDirective_Factory(t) { return (ɵDefaultGridColumnsDirective_BaseFactory || (ɵDefaultGridColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective)))(t || DefaultGridColumnsDirective); }; }();
DefaultGridColumnsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridColumnsDirective, selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]], inputs: { gdColumns: "gdColumns", "gdColumns.xs": "gdColumns.xs", "gdColumns.sm": "gdColumns.sm", "gdColumns.md": "gdColumns.md", "gdColumns.lg": "gdColumns.lg", "gdColumns.xl": "gdColumns.xl", "gdColumns.lt-sm": "gdColumns.lt-sm", "gdColumns.lt-md": "gdColumns.lt-md", "gdColumns.lt-lg": "gdColumns.lt-lg", "gdColumns.lt-xl": "gdColumns.lt-xl", "gdColumns.gt-xs": "gdColumns.gt-xs", "gdColumns.gt-sm": "gdColumns.gt-sm", "gdColumns.gt-md": "gdColumns.gt-md", "gdColumns.gt-lg": "gdColumns.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$7, inputs: inputs$7 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/gap/gap.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$5 = '0';
class GridGapStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-gap': input || DEFAULT_VALUE$5
        };
    }
}
GridGapStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridGapStyleBuilder_BaseFactory; return function GridGapStyleBuilder_Factory(t) { return (ɵGridGapStyleBuilder_BaseFactory || (ɵGridGapStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridGapStyleBuilder)))(t || GridGapStyleBuilder); }; }();
/** @nocollapse */ GridGapStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridGapStyleBuilder_Factory() { return new GridGapStyleBuilder(); }, token: GridGapStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridGapDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elRef
     * @param {?} styleUtils
     * @param {?} styleBuilder
     * @param {?} marshal
     */
    constructor(elRef, styleUtils, styleBuilder, marshal) {
        super(elRef, styleBuilder, styleUtils, marshal);
        this.DIRECTIVE_KEY = 'grid-gap';
        this._inline = false;
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? gapInlineCache : gapCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridGapDirective.ɵfac = function GridGapDirective_Factory(t) { return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridGapDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridGapDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridGapDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: GridGapStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridGapDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: GridGapStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const gapCache = new Map();
/** @type {?} */
const gapInlineCache = new Map();
/** @type {?} */
const inputs$8 = [
    'gdGap',
    'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl',
    'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl',
    'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'
];
/** @type {?} */
const selector$8 = `
  [gdGap],
  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],
  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],
  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]
`;
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
class DefaultGridGapDirective extends GridGapDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$8;
    }
}
DefaultGridGapDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridGapDirective_BaseFactory; return function DefaultGridGapDirective_Factory(t) { return (ɵDefaultGridGapDirective_BaseFactory || (ɵDefaultGridGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridGapDirective)))(t || DefaultGridGapDirective); }; }();
DefaultGridGapDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridGapDirective, selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]], inputs: { gdGap: "gdGap", "gdGap.xs": "gdGap.xs", "gdGap.sm": "gdGap.sm", "gdGap.md": "gdGap.md", "gdGap.lg": "gdGap.lg", "gdGap.xl": "gdGap.xl", "gdGap.lt-sm": "gdGap.lt-sm", "gdGap.lt-md": "gdGap.lt-md", "gdGap.lt-lg": "gdGap.lt-lg", "gdGap.lt-xl": "gdGap.lt-xl", "gdGap.gt-xs": "gdGap.gt-xs", "gdGap.gt-sm": "gdGap.gt-sm", "gdGap.gt-md": "gdGap.gt-md", "gdGap.gt-lg": "gdGap.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$8, inputs: inputs$8 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/row/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$6 = 'auto';
class GridRowStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @return {?}
     */
    buildStyles(input) {
        return { 'grid-row': input || DEFAULT_VALUE$6 };
    }
}
GridRowStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridRowStyleBuilder_BaseFactory; return function GridRowStyleBuilder_Factory(t) { return (ɵGridRowStyleBuilder_BaseFactory || (ɵGridRowStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowStyleBuilder)))(t || GridRowStyleBuilder); }; }();
/** @nocollapse */ GridRowStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridRowStyleBuilder_Factory() { return new GridRowStyleBuilder(); }, token: GridRowStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridRowDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-row';
        this.styleCache = rowCache;
        this.init();
    }
}
GridRowDirective.ɵfac = function GridRowDirective_Factory(t) { return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridRowDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridRowDirective, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridRowDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridRowStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridRowStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, null); })();
/** @type {?} */
const rowCache = new Map();
/** @type {?} */
const inputs$9 = [
    'gdRow',
    'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl',
    'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl',
    'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'
];
/** @type {?} */
const selector$9 = `
  [gdRow],
  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],
  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],
  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]
`;
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
class DefaultGridRowDirective extends GridRowDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$9;
    }
}
DefaultGridRowDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridRowDirective_BaseFactory; return function DefaultGridRowDirective_Factory(t) { return (ɵDefaultGridRowDirective_BaseFactory || (ɵDefaultGridRowDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowDirective)))(t || DefaultGridRowDirective); }; }();
DefaultGridRowDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridRowDirective, selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]], inputs: { gdRow: "gdRow", "gdRow.xs": "gdRow.xs", "gdRow.sm": "gdRow.sm", "gdRow.md": "gdRow.md", "gdRow.lg": "gdRow.lg", "gdRow.xl": "gdRow.xl", "gdRow.lt-sm": "gdRow.lt-sm", "gdRow.lt-md": "gdRow.lt-md", "gdRow.lt-lg": "gdRow.lt-lg", "gdRow.lt-xl": "gdRow.lt-xl", "gdRow.gt-xs": "gdRow.gt-xs", "gdRow.gt-sm": "gdRow.gt-sm", "gdRow.gt-md": "gdRow.gt-md", "gdRow.gt-lg": "gdRow.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$9, inputs: inputs$9 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/rows/rows.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_VALUE$7 = 'none';
/** @type {?} */
const AUTO_SPECIFIER$1 = '!';
class GridRowsStyleBuilder extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder {
    /**
     * @param {?} input
     * @param {?} parent
     * @return {?}
     */
    buildStyles(input, parent) {
        input = input || DEFAULT_VALUE$7;
        /** @type {?} */
        let auto = false;
        if (input.endsWith(AUTO_SPECIFIER$1)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        const css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        const key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = input;
        return css;
    }
}
GridRowsStyleBuilder.ɵfac = /*@__PURE__*/ function () { let ɵGridRowsStyleBuilder_BaseFactory; return function GridRowsStyleBuilder_Factory(t) { return (ɵGridRowsStyleBuilder_BaseFactory || (ɵGridRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder)))(t || GridRowsStyleBuilder); }; }();
/** @nocollapse */ GridRowsStyleBuilder.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function GridRowsStyleBuilder_Factory() { return new GridRowsStyleBuilder(); }, token: GridRowsStyleBuilder, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
class GridRowsDirective extends _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.BaseDirective2 {
    /**
     * @param {?} elementRef
     * @param {?} styleBuilder
     * @param {?} styler
     * @param {?} marshal
     */
    constructor(elementRef, styleBuilder, styler, marshal) {
        super(elementRef, styleBuilder, styler, marshal);
        this.DIRECTIVE_KEY = 'grid-rows';
        this._inline = false;
        this.init();
    }
    /**
     * @return {?}
     */
    get inline() { return this._inline; }
    /**
     * @param {?} val
     * @return {?}
     */
    set inline(val) { this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(val); }
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    updateWithValue(value) {
        this.styleCache = this.inline ? rowsInlineCache : rowsCache;
        this.addStyles(value, { inline: this.inline });
    }
}
GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) { return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller)); };
GridRowsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GridRowsDirective, inputs: { inline: ["gdInline", "inline"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
GridRowsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef },
    { type: GridRowsStyleBuilder },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils },
    { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }
];
GridRowsDirective.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['gdInline',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }, { type: GridRowsStyleBuilder }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.StyleUtils }, { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.MediaMarshaller }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['gdInline']
        }] }); })();
/** @type {?} */
const rowsCache = new Map();
/** @type {?} */
const rowsInlineCache = new Map();
/** @type {?} */
const inputs$10 = [
    'gdRows',
    'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl',
    'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl',
    'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'
];
/** @type {?} */
const selector$10 = `
  [gdRows],
  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],
  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],
  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]
`;
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
class DefaultGridRowsDirective extends GridRowsDirective {
    constructor() {
        super(...arguments);
        this.inputs = inputs$10;
    }
}
DefaultGridRowsDirective.ɵfac = /*@__PURE__*/ function () { let ɵDefaultGridRowsDirective_BaseFactory; return function DefaultGridRowsDirective_Factory(t) { return (ɵDefaultGridRowsDirective_BaseFactory || (ɵDefaultGridRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective)))(t || DefaultGridRowsDirective); }; }();
DefaultGridRowsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DefaultGridRowsDirective, selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]], inputs: { gdRows: "gdRows", "gdRows.xs": "gdRows.xs", "gdRows.sm": "gdRows.sm", "gdRows.md": "gdRows.md", "gdRows.lg": "gdRows.lg", "gdRows.xl": "gdRows.xl", "gdRows.lt-sm": "gdRows.lt-sm", "gdRows.lt-md": "gdRows.lt-md", "gdRows.lt-lg": "gdRows.lt-lg", "gdRows.lt-xl": "gdRows.lt-xl", "gdRows.gt-xs": "gdRows.gt-xs", "gdRows.gt-sm": "gdRows.gt-sm", "gdRows.gt-md": "gdRows.gt-md", "gdRows.gt-lg": "gdRows.gt-lg" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{ selector: selector$10, inputs: inputs$10 }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ALL_DIRECTIVES = [
    DefaultGridAlignDirective,
    DefaultGridAlignColumnsDirective,
    DefaultGridAlignRowsDirective,
    DefaultGridAreaDirective,
    DefaultGridAreasDirective,
    DefaultGridAutoDirective,
    DefaultGridColumnDirective,
    DefaultGridColumnsDirective,
    DefaultGridGapDirective,
    DefaultGridRowDirective,
    DefaultGridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
class GridModule {
}
GridModule.ɵfac = function GridModule_Factory(t) { return new (t || GridModule)(); };
GridModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GridModule });
GridModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule],
                declarations: [...ALL_DIRECTIVES],
                exports: [...ALL_DIRECTIVES]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GridModule, { declarations: function () { return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective]; }, imports: function () { return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_0__.CoreModule]; }, exports: function () { return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: grid/public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: grid/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 4395:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 7393);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 3637);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 6782:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 5345);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 2901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 7339:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapAction": () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ 6239);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 401);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}
//# sourceMappingURL=AsapAction.js.map

/***/ }),

/***/ 5899:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapScheduler": () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 2901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 8571:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asapScheduler": () => (/* binding */ asapScheduler),
/* harmony export */   "asap": () => (/* binding */ asap)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 7339);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 5899);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;
//# sourceMappingURL=asap.js.map

/***/ }),

/***/ 3637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler),
/* harmony export */   "async": () => (/* binding */ async)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 6239:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immediate": () => (/* binding */ Immediate),
/* harmony export */   "TestTools": () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};
//# sourceMappingURL=Immediate.js.map

/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 5830);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);






let HomePage = class HomePage {
    constructor(toastCtrl, alertController, http, platform) {
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.http = http;
        this.platform = platform;
        this.tokenUrl = 'https://quickstart-4650-dev.twil.io/access-token';
        this.accessToken = '';
        this.speakerEnabled = false;
        this.status = 'Initializing...';
        this.timer = 0;
        this.incoming = false;
        this.calling = false;
        this.from = '';
        console.log(this.platform.platforms());
        this.getToken();
    }
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.showMessage(this.platform.platforms().toString());
            // if (this.isMobile())
            if (this.platform.is('android') ||
                this.platform.is('capacitor') ||
                this.platform.is('cordova') ||
                this.platform.is('ios') ||
                this.platform.is('ipad') ||
                this.platform.is('iphone')) {
                console.log(' Inside IF ');
                console.log('android ' + this.platform.is('android'));
                console.log('capacitor ' + this.platform.is('capacitor'));
                console.log('cordova ' + this.platform.is('cordova'));
                console.log('ios ' + this.platform.is('ios'));
                console.log('ipad ' + this.platform.is('ipad'));
                console.log('iphone ' + this.platform.is('iphone'));
                yield this.platform.ready();
                //this.http.get(this.tokenUrl, {}, {})
                this.http.get(this.tokenUrl, {}, {})
                    .then((res) => {
                    console.log(JSON.stringify(res));
                    // this.showMessage(JSON.stringify(res));
                    if (res.status === 200) {
                        this.accessToken = res.data;
                        this.init();
                        this.isInit();
                        this.setupHandler();
                        this.status = 'Ready';
                    }
                }).catch(err => {
                    console.log(JSON.stringify(err));
                    this.showMessage(JSON.stringify(err));
                });
            }
            else if (this.platform.is('mobileweb') ||
                this.platform.is('pwa')) {
                console.log(' Inside ELSE ');
                console.log('mobileweb ' + this.platform.is('mobileweb'));
                console.log('pwa ' + this.platform.is('pwa'));
                this.http.get(this.tokenUrl, {}, {})
                    .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        this.accessToken = res.data;
                        this.initPWA();
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        });
    }
    init() {
        window.Twilio.TwilioVoiceClient.initialize(this.accessToken);
    }
    initPWA() {
        // Create a new outgoing Connection
        console.log('initPWA ' + this.accessToken);
        console.log(this.platform.platforms());
        this.device = new window.Twilio.Device(this.accessToken, {
            debug: true,
            answerOnBridge: true,
            // Set Opus as our preferred codec. Opus generally performs better, requiring less bandwidth and
            // providing better audio quality in restrained network conditions. Opus will be default in 2.0.
            codecPreferences: ["opus", "pcmu"],
        });
        console.log(this.device);
        // call is a Twilio.Call instance
        // const call = this.device.connect();
        this.addDeviceListeners(this.device);
        // // Device must be registered in order to receive incoming calls
        this.device.register();
    }
    isInit() {
        window.Twilio.TwilioVoiceClient.clientinitialized((res) => {
            console.log('init', JSON.stringify(res));
            this.showMessage('Ready to recieve calls');
        });
    }
    addDeviceListeners(device) {
        this.device.on('registered', () => {
            console.log('Twilio.Device Ready to make and receive calls!');
            this.status = 'Ready';
        });
        this.device.on('error', (error) => {
            console.log('Twilio.Device Error: ' + error.message);
            this.status = 'Error';
        });
        this.device.on('incoming', (call) => {
            if (call) {
                this.call = call;
                console.log(`Incoming call from ${call.parameters.From}`);
                this.incoming = true;
                this.from = call.parameters.From;
                this.status = 'Incoming call...';
                this.showMessage('Incoming call...');
            }
        });
        // device.audio.on('deviceChange', updateAllAudioDevices.bind(device));
        // Show audio selection UI if it is supported by the browser.
        // if (device.audio.isOutputSelectionSupported) {
        //     audioSelectionDiv.classList.remove('hide');
        // }
    }
    callFn() {
        this.call = this.device.connect();
    }
    setupHandler() {
        // Accept or reject a call - only needed on Android - iOS uses CallKit
        window.Twilio.TwilioVoiceClient.callinvitereceived((call) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // var confirmed = confirm('Accept incoming call from ' + call.from + '?');
            this.showMessage(call);
            console.log('call Invite Received', JSON.stringify(call));
            if (call) {
                this.incoming = true;
                this.from = call.from;
                this.status = 'Incoming call...';
                this.showMessage('Incoming call...');
            }
        }));
        // Handle Errors
        window.Twilio.TwilioVoiceClient.error((error) => {
            this.showMessage(error.message);
            console.log('error', JSON.stringify(error));
        });
        // Handle Call Connection
        window.Twilio.TwilioVoiceClient.calldidconnect((call) => {
            this.showMessage("Successfully established call");
            console.log('connect', JSON.stringify(call));
        });
        // Handle Call Disconnect
        window.Twilio.TwilioVoiceClient.calldiddisconnect((call) => {
            this.showMessage("Call ended");
            console.log('disconnect', JSON.stringify(call));
            this.status = 'Ready';
            this.calling = false;
            this.incoming = false;
        });
        this.showMessage("Handler established");
    }
    acceptCallInvite() {
        if (this.call) {
            this.call.accept();
            this.status = 'Call ongoing...';
            this.calling = true;
            return;
        }
        if (this.incoming) {
            window.Twilio.TwilioVoiceClient.acceptCallInvite();
            this.status = 'Call ongoing...';
            this.calling = true;
        }
    }
    rejectCallInvite() {
        if (this.call) {
            this.call.reject();
            this.status = 'Ready';
            this.showMessage('Reject call');
            this.calling = false;
            this.incoming = false;
            this.call = null;
            return;
        }
        if (this.incoming) {
            window.Twilio.TwilioVoiceClient.rejectCallInvite();
            this.status = 'Ready';
            this.showMessage('Reject call');
            this.calling = false;
            this.incoming = false;
        }
    }
    dial() {
        var params = { "To": "+15136559957" };
        console.log('params ' + JSON.stringify(params));
        if (this.platform.is('capacitor')) {
            window.Twilio.TwilioVoiceClient.call(this.accessToken, params);
        }
        else {
            this.device.connect(params);
        }
    }
    disconnect() {
        if (this.call) {
            this.device.disconnectAll();
            this.status = 'Ready';
            this.calling = false;
            this.incoming = false;
            this.call = null;
            return;
        }
        window.Twilio.TwilioVoiceClient.disconnect();
        this.status = 'Ready';
        this.calling = false;
        this.incoming = false;
    }
    speaker() {
        this.speakerEnabled = !this.speakerEnabled;
        if (this.speakerEnabled) {
            window.Twilio.TwilioVoiceClient.setSpeaker('on');
        }
        else {
            window.Twilio.TwilioVoiceClient.setSpeaker('off');
        }
    }
    mute() {
        window.Twilio.TwilioVoiceClient.muteCall();
    }
    unmute() {
        window.Twilio.TwilioVoiceClient.unmuteCall();
    }
    showMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                //   header: message,
                message,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    isMobile() {
        console.log('isMobile ' + this.platform.is('cordova'));
        console.log('this.platform ' + this.platform.platforms());
        const platformNames = Object.keys(this.platform.platforms());
        console.log('platformNames ' + platformNames);
        // android
        // capacitor
        // cordova
        // ios
        // ipad
        // iphone
        // phablet
        // tablet
        // mobile
        // mobileweb
        // hybrid
        return this.platform.is('cordova');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Twilio Receive Incoming calls\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"width: 100%; height: 100%;\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\n      <ion-img style=\"width: 300px;\" src=\"assets/support.jpg\"></ion-img>\n      <div>Status: {{status}}</div>\n      <div *ngIf=\"!calling\" fxLayout=\"row wrap\" fxLayoutGap=\"8px\">\n          <ion-button color=\"success\" (click)=\"acceptCallInvite()\">Receive</ion-button>\n          <ion-button color=\"danger\" (click)=\"rejectCallInvite()\">Reject</ion-button>\n          <ion-button color=\"secondary\" (click)=\"dial()\">Dial</ion-button>\n      </div>\n      <div *ngIf=\"calling\" fxLayout=\"row wrap\" fxLayoutGap=\"8px\">\n        <ion-button *ngIf=\"isMobile()\" color=\"success\" (click)=\"speaker()\">Speaker {{ speakerEnabled ? 'OFF' : 'ON'}}</ion-button>\n        <ion-button color=\"danger\" (click)=\"disconnect()\">Close Call</ion-button>\n        <ion-button *ngIf=\"isMobile()\" color=\"secondary\" (click)=\"dial()\">Dial</ion-button>\n    </div>\n    <!-- <ion-button color=\"danger\" (click)=\"callFn()\">Call</ion-button> -->\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map