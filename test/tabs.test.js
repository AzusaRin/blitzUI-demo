import Vue from 'vue'
import Tabs from "../src/Tabs";
import TabsBody from "../src/Tabs-body";
import TabsHead from "../src/Tabs-head";
import TabsPanel from "../src/Tabs-panel";
import TabsItem from "../src/Tabs-item";


Vue.component('bl-tabs', Tabs)
Vue.component('bl-tabs-body', TabsBody)
Vue.component('bl-tabs-head', TabsHead)
Vue.component('bl-tabs-panel', TabsPanel)
Vue.component('bl-tabs-item', TabsItem)
const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.exist
    })
    it('接受selected', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
     <bl-tabs selected="1">
        <bl-tabs-head>
            <bl-tabs-item name="1">
              1
            </bl-tabs-item>
            <bl-tabs-item name="2" >
              2
            </bl-tabs-item>
            <bl-tabs-item name="3">
              3
            </bl-tabs-item>
        </bl-tabs-head>
        <bl-tabs-body>
            <bl-tabs-panel name="1">
                1的相关信息
            </bl-tabs-panel>
            <bl-tabs-panel name="2">
                2的相关信息
            </bl-tabs-panel>
            <bl-tabs-panel name="3">
                3的相关信息
            </bl-tabs-panel>
        </bl-tabs-body>

    </bl-tabs>
    `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            const x = vm.$el.querySelector(`.tabs-item[data-name="1"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
})
