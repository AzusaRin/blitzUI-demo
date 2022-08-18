const expect = chai.expect;
import Vue from 'vue'
import Row from "../src/Row";
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.exist
    })
    it('接收gutter', (done) => {
        Vue.component('bl-row', Row)
        Vue.component('bl-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
           <bl-row gutter="20">
              <bl-col></bl-col>
              <bl-col></bl-col>
           </bl-row>
         `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const rows = vm.$el.querySelectorAll('.row')
            expect(getComputedStyle(rows[0]).marginRight).to.eq('-10px')
            expect(getComputedStyle(rows[0]).marginLeft).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接收align.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)

    expect(getComputedStyle(vm.$el).justifyContent).to.eq('center')
    vm.$el.remove()
    vm.$destroy()
    })
})