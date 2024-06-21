var $8zHUo$solidjsweb = require("solid-js/web");
var $8zHUo$solidjs = require("solid-js");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Button", () => $d2b829112a4fe600$export$353f5b6fc5456de1);


var $d2b829112a4fe600$var$_tmpl$ = /*#__PURE__*/ (0, $8zHUo$solidjsweb.template)(`<button>Click me`);
const $d2b829112a4fe600$export$353f5b6fc5456de1 = ()=>{
    const [state, setState] = (0, $8zHUo$solidjs.createSignal)(0);
    return (()=>{
        var _el$ = (0, $8zHUo$solidjsweb.getNextElement)($d2b829112a4fe600$var$_tmpl$);
        _el$.$$click = ()=>setState(state() + 1);
        (0, $8zHUo$solidjsweb.runHydrationEvents)();
        return _el$;
    })();
};
(0, $8zHUo$solidjsweb.delegateEvents)([
    "click"
]);




//# sourceMappingURL=main.js.map
