import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";

Vue.component('bl-button',Button)
Vue.component('bl-icon',Icon)
Vue.component('bl-button-group',ButtonGroup)
Vue.component('bl-input',Input)
Vue.component('bl-row',Row)
Vue.component('bl-col',Col)
new Vue({
    el:'#app',

    data:{
        loading1:true,
        loading2:true,
        message:'你好'
    },

})

