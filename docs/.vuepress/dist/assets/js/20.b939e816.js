(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{241:function(e,t,n){},244:function(e,t,n){"use strict";n(241)},245:function(e,t,n){"use strict";var a={components:{"bl-icon":n(240).a},name:"BlitzInput",props:{placeholder:{type:String,default:"请键入内容"},value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String}}},r=(n(244),n(14)),l=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper",class:{error:e.error}},[t("input",{attrs:{placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,type:"text"},domProps:{value:e.value},on:{change:function(t){return e.$emit("change",t.target.value)},input:function(t){return e.$emit("input",t.target.value)},focus:function(t){return e.$emit("focus",t.target.value)},blur:function(t){return e.$emit("blur",t.target.value)}}}),e._v(" "),e.error?[t("bl-icon",{staticClass:"errorIcon",attrs:{name:"error"}}),e._v(" "),t("span",{staticClass:"errorText"},[e._v(e._s(e.error))])]:e._e()],2)}),[],!1,null,"70b8ee07",null);t.a=l.exports},294:function(e,t,n){},354:function(e,t,n){"use strict";n(294)},392:function(e,t,n){"use strict";n.r(t);var a=n(245),r=n(236),l=(n(237),{components:{"bl-input":a.a,VueCodeHighlight:r.a},data:()=>({code:'<bl-input v-model="value" :readonly="true"></bl-input>\n\nexport default {\n  data() {\n    return {\n      value:\'只读状态\'\n    }\n  }\n}\n',value:"只读状态"})}),i=(n(354),n(14)),s=Object(i.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"all-wrapper"},[t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input"},[t("bl-input",{attrs:{readonly:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"code"},[t("vue-code-highlight",[t("pre",[t("code",[e._v(e._s(e.code))])])])],1)])}),[function(){var e=this._self._c;return e("div",{staticClass:"info"},[e("span",[this._v("使用"),e("code",[this._v(':readonly="true"')]),this._v("和"),e("code",[this._v(':readonly="false"')]),this._v("来切换只读状态")])])}],!1,null,"61c6e40c",null);t.default=s.exports}}]);