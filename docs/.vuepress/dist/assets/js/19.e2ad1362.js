(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{241:function(e,t,a){},244:function(e,t,a){"use strict";a(241)},245:function(e,t,a){"use strict";var n={components:{"bl-icon":a(240).a},name:"BlitzInput",props:{placeholder:{type:String,default:"请键入内容"},value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String}}},r=(a(244),a(14)),l=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper",class:{error:e.error}},[t("input",{attrs:{placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,type:"text"},domProps:{value:e.value},on:{change:function(t){return e.$emit("change",t.target.value)},input:function(t){return e.$emit("input",t.target.value)},focus:function(t){return e.$emit("focus",t.target.value)},blur:function(t){return e.$emit("blur",t.target.value)}}}),e._v(" "),e.error?[t("bl-icon",{staticClass:"errorIcon",attrs:{name:"error"}}),e._v(" "),t("span",{staticClass:"errorText"},[e._v(e._s(e.error))])]:e._e()],2)}),[],!1,null,"70b8ee07",null);t.a=l.exports},292:function(e,t,a){},352:function(e,t,a){"use strict";a(292)},390:function(e,t,a){"use strict";a.r(t);var n=a(245),r=a(236),l=(a(237),{components:{"bl-input":n.a,VueCodeHighlight:r.a},data:()=>({code:"<bl-input v-model=\"value\"></bl-input>\n\nexport default {\n  data() {\n    return {\n      placeholder:'可以自行设置placeholder',\n      value:''\n    }\n  }\n}\n",placeholder:"可以自行设置placeholder",value:""})}),o=(a(352),a(14)),i=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"all-wrapper"},[t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input"},[t("bl-input",{attrs:{placeholder:e.placeholder},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),e._m(0)]),e._v(" "),t("div",{staticClass:"code"},[t("vue-code-highlight",[t("pre",[t("code",[e._v(e._s(e.code))])])])],1)])}),[function(){var e=this._self._c;return e("div",{staticClass:"info"},[e("span",[this._v("可在data自行设置placeholder")])])}],!1,null,"1b07f6ec",null);t.default=i.exports}}]);