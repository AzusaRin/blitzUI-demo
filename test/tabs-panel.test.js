import Vue from 'vue'
import TabsPanel from "../src/Tabs-panel";

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPanel', () => {
    it('存在.', () => {
        expect(TabsPanel).to.be.exist
    })
    it('接受name',()=>{
        const Constructor = Vue.extend(TabsPanel)
        const vm = new Constructor({
            propsData: {
                name:'test'
            },
            data(){
                return{
                    active:true
                }
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('test')
    })
})