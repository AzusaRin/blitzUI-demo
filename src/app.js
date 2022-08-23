import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Layout from "./Layout"
import Header from "./Header"
import Sider from "./Sider"
import Content from "./Content"
import Footer from "./Footer"
import Toast from "./Toast";
import toastPlugin from "./toastPlugin";

Vue.component('bl-button', Button)
Vue.component('bl-icon', Icon)
Vue.component('bl-button-group', ButtonGroup)
Vue.component('bl-input', Input)
Vue.component('bl-row', Row)
Vue.component('bl-col', Col)
Vue.component('bl-layout', Layout)
Vue.component('bl-header', Header)
Vue.component('bl-sider', Sider)
Vue.component('bl-content', Content)
Vue.component('bl-footer', Footer)
Vue.component('bl-toast', Toast)
Vue.use(toastPlugin)
new Vue({
    el: '#app',

    data: {
        loading1: true,
        loading2: true,
        message: '你好'
    },
    methods: {
        showToast1() {
            this.$toast('密码输入字段不得低于八个', {
                position:'top',
                closeButton:{}
            })
        },
        showToast2() {
            this.$toast('密码输入字段不得低于八个', {
                position: 'middle',

            })
        },
        showToast3() {
            this.$toast('密码输入字段不得低于八个', {
                    position: 'bottom',

            })
        }
    }

})

