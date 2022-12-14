import sinon from "sinon/pkg/sinon-esm";
import Vue from 'vue'
import TabsItem from "../src/Tabs-item";


const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.exist
    })

    it('接受name',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name:'test'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('test')
    })
    it('接受disabled',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled:true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})