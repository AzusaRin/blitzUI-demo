import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";

Vue.component('bl-button',Button)
Vue.component('bl-icon',Icon)
new Vue({
    el:'#app',

    data:{
        loading1:true,
        loading2:true,
    }
})