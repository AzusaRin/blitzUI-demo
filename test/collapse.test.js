import Collapse from "../src/Collapse";

const expect = chai.expect;
import Vue from 'vue'
import CollapseItem from "../src/Collapse-item";
import sinon from "sinon/pkg/sinon-esm";
Vue.component('bl-collapse',Collapse)
Vue.component('bl-collapse-item',CollapseItem)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.exist
    })
    it('可以设置selected',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <bl-collapse :selected="test"  >
       <bl-collapse-item name="1" title="标题1"><span id="item-1"></span></bl-collapse-item>
       <bl-collapse-item name="2" title="标题2"><span id="item-2"></span></bl-collapse-item>
       <bl-collapse-item name="3" title="标题3"><span id="item-3"></span></bl-collapse-item>
       <bl-collapse-item name="4" title="标题4"><span id="item-4"></span></bl-collapse-item>
   </bl-collapse>
        `
        const  vm = new Vue({
            el:div,
            data:{
                test:['1','2']
            }
        })
        vm.$nextTick(()=>{
            expect(vm.$el.querySelector('#item-1')).to.be.exist
            expect(vm.$el.querySelector('#item-2')).to.be.exist
            expect(vm.$el.querySelector('#item-3')).to.be.not.exist
            expect(vm.$el.querySelector('#item-4')).to.be.not.exist
            done()
        })
    })
    it('可以设置single',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <bl-collapse :selected.sync="test"  single="true">
       <bl-collapse-item name="1" title="标题1"><span id="item-1"></span></bl-collapse-item>
       <bl-collapse-item name="2" title="标题2"><span id="item-2"></span></bl-collapse-item>
       <bl-collapse-item name="3" title="标题3"><span id="item-3"></span></bl-collapse-item>
       <bl-collapse-item name="4" title="标题4"><span id="item-4"></span></bl-collapse-item>
   </bl-collapse>
        `
        const  vm = new Vue({
            el:div,
            data:{
                test:['2']
            }
        })
        vm.$nextTick(()=>{
            expect(vm.$el.querySelector('#item-2')).to.be.exist
            vm.$el.querySelector('[data-name="1"]').click()
            vm.$nextTick(()=>{
                expect(vm.$el.querySelector('#item-2')).to.be.not.exist
                expect(vm.$el.querySelector('#item-1')).to.be.exist
                done()
            })
        })
    })
    it('可以触发update:selected事件',(done)=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML=`
        <bl-collapse :selected="test"  @update:selected="selectTest">
       <bl-collapse-item name="1" title="标题1"><span id="item-1"></span></bl-collapse-item>
       <bl-collapse-item name="2" title="标题2"><span id="item-2"></span></bl-collapse-item>
       <bl-collapse-item name="3" title="标题3"><span id="item-3"></span></bl-collapse-item>
       <bl-collapse-item name="4" title="标题4"><span id="item-4"></span></bl-collapse-item>
   </bl-collapse>
        `
        const callback = sinon.fake()
        const vm = new Vue({
            el:div,
            data:{
                test:['1']
            },
            methods:{
                selectTest:callback
            }
        })
        vm.$nextTick(()=>{
            vm.$el.querySelector('[data-name="2"]').click()
            vm.$nextTick(()=>{
                expect(callback).to.have.been.called
                done()
            })
        })
    })
})