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
import Tabs from "./Tabs";
import TabsBody from "./Tabs-body";
import TabsHead from "./Tabs-head";
import TabsPanel from "./Tabs-panel";
import TabsItem from "./Tabs-item";

Vue.use(toastPlugin)

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
Vue.component('bl-tabs', Tabs)
Vue.component('bl-tabs-body', TabsBody)
Vue.component('bl-tabs-head', TabsHead)
Vue.component('bl-tabs-panel', TabsPanel)
Vue.component('bl-tabs-item', TabsItem)

new Vue({
    el: '#app',

    data: {
        selected: '2'
    },
    methods: {}

})

