(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{235:function(t,o,s){},238:function(t,o,s){"use strict";s(235)},239:function(t,o,s){"use strict";var n={name:"BlitzButton",components:{"bl-icon":s(240).a},props:{iconName:{type:String,validator:t=>["info","setting","download","success","warning","error","left","right"].includes(t)},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:t=>!("left"!==t&&"right"!==t)},disabled:{type:Boolean,default:!1}}},e=(s(238),s(14)),i=Object(e.a)(n,(function(){var t=this,o=t._self._c;return o("button",{staticClass:"bl-button",class:{["position-"+t.iconPosition]:!0,["icon-"+t.iconName]:!0},attrs:{disabled:t.disabled},on:{click:function(o){return t.$emit("click")}}},[t.iconName&&!t.loading?o("bl-icon",{staticClass:"icon",class:t.iconName,attrs:{name:t.iconName}}):t._e(),t._v(" "),t.loading?o("bl-icon",{staticClass:"icon",class:{iconName:!0,loading:!0},attrs:{name:"loading"}}):t._e(),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2)],1)}),[],!1,null,"25eb94ce",null);o.a=i.exports},242:function(t,o,s){},243:function(t,o,s){"use strict";var n={components:{"bl-icon":s(240).a},name:"BlitzToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:t=>!1===t||"number"==typeof t},closeButton:{type:Object,default:null},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator:t=>["top","middle","bottom"].includes(t)}},mounted(){this.execAutoClose()},computed:{toastClass(){return{["position-"+this.position]:!0}}},methods:{execAutoClose(){this.autoClose&&setTimeout(()=>{this.close()},1e3*this.autoClose)},close(){this.$el.remove(),this.$emit("beforeClose"),this.$destroy()},onClickClose(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},e=(s(249),s(14)),i=Object(e.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"wrapper",class:t.toastClass},[o("div",{staticClass:"toast"},[t.enableHtml?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default"),t._v(" "),t.closeButton?o("div",{staticClass:"toastInner"},[o("span",{staticClass:"close",on:{click:t.onClickClose}},[o("bl-icon",{staticClass:"closeIcon",attrs:{name:"close"}})],1)]):t._e()],2)])}),[],!1,null,"5060c958",null);o.a=i.exports},248:function(t,o,s){"use strict";var n=s(243);let e;o.a={install(t,o){t.prototype.$toast=function(o,s){e&&e.close(),e=function({Vue:t,message:o,propsData:s,onBeforeClose:e}){let i=new(t.extend(n.a))({propsData:s});return i.$slots.default=[o],i.$mount(),i.$on("beforeClose",e),document.body.appendChild(i.$el),i}({Vue:t,message:o,propsData:s,onBeforeClose:()=>{}})}}}},249:function(t,o,s){"use strict";s(242)},308:function(t,o,s){},368:function(t,o,s){"use strict";s(308)},399:function(t,o,s){"use strict";s.r(o);var n=s(236),e=(s(237),s(0)),i=s(248),a=s(243),l=s(239);e.a.use(i.a);var c={components:{VueCodeHighlight:n.a,"bl-toast":a.a,"bl-button":l.a},data:()=>({code:'\n<div class="wrapper">\n  <bl-button @click="showToastTop">上方Toast</bl-button>\n  <bl-button @click="showToastMiddle">中间Toast</bl-button>\n  <bl-button @click="showToastBottom">下方Toast</bl-button>\n</div>\n\n\nimport Vue from "vue";\nimport {  toastPlugin  } from "blitz-ui-demo";\nimport {  Toast  } from "blitz-ui-demo";\nimport {  Button  } from "blitz-ui-demo";\n\n\n\nexport default {\n  methods: {\n    showToastTop() {\n      this.$toast(\'提示内容\')\n    },\n    showToastMiddle() {\n      this.$toast(\'提示内容\',{position:\'middle\'})\n    },\n    showToastBottom() {\n      this.$toast(\'提示内容\',{position:\'bottom\'})\n    },\n  }\n}\n\n'}),methods:{showToastTop(){this.$toast("提示内容")},showToastMiddle(){this.$toast("提示内容",{position:"middle"})},showToastBottom(){this.$toast("提示内容",{position:"bottom"})}}},u=(s(368),s(14)),r=Object(u.a)(c,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"all-wrapper"},[o("div",{staticClass:"input-wrapper"},[o("div",{staticClass:"input"},[o("div",{staticClass:"wrapper"},[o("bl-button",{on:{click:t.showToastTop}},[t._v("上方Toast")]),t._v(" "),o("bl-button",{on:{click:t.showToastMiddle}},[t._v("中间Toast")]),t._v(" "),o("bl-button",{on:{click:t.showToastBottom}},[t._v("下方Toast")])],1),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticClass:"code"},[o("vue-code-highlight",[o("pre",[o("code",[t._v(t._s(t.code))])])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"info"},[t("span",[this._v("最基础的点击组件显示Toast,可在方法里传入"),t("code",[this._v("position")]),this._v("属性修改Toast位置，默认为视窗上端。默认五秒之后自动关闭。")])])}],!1,null,"68e0ee9e",null);o.default=r.exports}}]);