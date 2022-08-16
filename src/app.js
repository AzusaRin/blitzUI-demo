import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"
import Input from "./Input";

Vue.component('bl-button',Button)
Vue.component('bl-icon',Icon)
Vue.component('bl-button-group',ButtonGroup)
Vue.component('bl-input',Input)
new Vue({
    el:'#app',

    data:{
        loading1:true,
        loading2:true,
    },
    methods:{
        inputChange(event){
            console.log(event.target.value)
        }
    }
})

