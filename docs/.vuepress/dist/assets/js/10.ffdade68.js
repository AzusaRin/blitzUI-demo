(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{235:function(t,o,s){},238:function(t,o,s){"use strict";s(235)},239:function(t,o,s){"use strict";var e={name:"BlitzButton",components:{"bl-icon":s(240).a},props:{iconName:{type:String,validator:t=>["info","setting","download","success","warning","error","left","right"].includes(t)},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:t=>!("left"!==t&&"right"!==t)},disabled:{type:Boolean,default:!1}}},n=(s(238),s(14)),i=Object(n.a)(e,(function(){var t=this,o=t._self._c;return o("button",{staticClass:"bl-button",class:{["position-"+t.iconPosition]:!0,["icon-"+t.iconName]:!0},attrs:{disabled:t.disabled},on:{click:function(o){return t.$emit("click")}}},[t.iconName&&!t.loading?o("bl-icon",{staticClass:"icon",class:t.iconName,attrs:{name:t.iconName}}):t._e(),t._v(" "),t.loading?o("bl-icon",{staticClass:"icon",class:{iconName:!0,loading:!0},attrs:{name:"loading"}}):t._e(),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"25eb94ce",null);o.a=i.exports},242:function(t,o,s){},243:function(t,o,s){"use strict";var e={components:{"bl-icon":s(240).a},name:"BlitzToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:t=>!1===t||"number"==typeof t},closeButton:{type:Object,default:null},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:t=>["top","middle","bottom"].includes(t)}},mounted(){this.execAutoClose()},computed:{toastClass(){return{["position-"+this.position]:!0}}},methods:{execAutoClose(){this.autoClose&&setTimeout(()=>{this.close()},1e3*this.autoClose)},close(){this.$el.remove(),this.$emit("beforeClose"),this.$destroy()},onClickClose(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},n=(s(249),s(14)),i=Object(n.a)(e,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"wrapper",class:t.toastClass},[o("div",{staticClass:"toast"},[t.enableHtml?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default"),t._v(" "),t.closeButton?o("div",{staticClass:"toastInner"},[o("span",{staticClass:"close",on:{click:t.onClickClose}},[o("bl-icon",{staticClass:"closeIcon",attrs:{name:"close"}})],1)]):t._e()],2)])}),[],!1,null,"5060c958",null);o.a=i.exports},248:function(t,o,s){"use strict";var e=s(243);let n;o.a={install(t,o){t.prototype.$toast=function(o,s){n&&n.close(),n=function({Vue:t,message:o,propsData:s,onBeforeClose:n}){let i=new(t.extend(e.a))({propsData:s});return i.$slots.default=[o],i.$mount(),i.$on("beforeClose",n),document.body.appendChild(i.$el),i}({Vue:t,message:o,propsData:s,onBeforeClose:()=>{}})}}}},249:function(t,o,s){"use strict";s(242)},308:function(t,o,s){},368:function(t,o,s){"use strict";s(308)},399:function(t,o,s){"use strict";s.r(o);var e=s(236),n=(s(237),s(0)),i=s(248),a=s(243),l=s(239);n.a.use(i.a);var c={components:{VueCodeHighlight:e.a,"bl-toast":a.a,"bl-button":l.a},data:()=>({code:'\n<div class="wrapper">\n  <bl-button @click="showToast">可修改自动关闭时间的Toast</bl-button>\n</div>\n\n\nimport Vue from "vue";\nimport {  toastPlugin  } from "blitz-ui-demo";\nimport {  Toast  } from "blitz-ui-demo";\nimport {  Button  } from "blitz-ui-demo";\n\n\n\nexport default {\n  methods: {\n    showToast() {\n      this.$toast(\'本提示将会在两秒后关闭\', {autoClose:2})\n    }\n  }\n}\n\n'}),methods:{showToast(){this.$toast("本提示将会在两秒后关闭",{autoClose:2})}}},u=(s(368),s(14)),r=Object(u.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"all-wrapper"},[t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"input"},[t("div",{staticClass:"wrapper"},[t("bl-button",{on:{click:this.showToast}},[this._v("可修改自动关闭时间的Toast")])],1),this._v(" "),this._m(0)]),this._v(" "),t("div",{staticClass:"code"},[t("vue-code-highlight",[t("pre",[t("code",[this._v(this._s(this.code))])])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"info"},[t("span",[this._v("可修改Toast的自动关闭时间,可在方法里传入"),t("code",[this._v("autoClose")]),this._v("属性来调用。可设置为false，取消自动关闭。默认五秒之后自动关闭。")])])}],!1,null,"6ff5a6b1",null);o.default=r.exports}}]);