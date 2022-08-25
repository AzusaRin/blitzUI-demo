import Popover from "../src/Popover";
import Vue from 'vue'

const expect = chai.expect;


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.exist
    })
    it('可以设置position', (done) => {
        Vue.component('bl-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
     <bl-popover position="left" ref="a">
        <template slot="content">
            <div>popover内容</div>
        </template>
        <button>点击</button>
    </bl-popover>
    `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-left')).to.be.true
                done()
            })
        })
    })
})