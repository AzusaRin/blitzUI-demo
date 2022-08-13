import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"

Vue.component('bl-button',Button)
Vue.component('bl-icon',Icon)
Vue.component('bl-button-group',ButtonGroup)
new Vue({
    el:'#app',

    data:{
        loading1:true,
        loading2:true,
    }
})