const expect = chai.expect;
import Vue from 'vue'
import Col from "../src/Col";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.exist
    })

    it('接收span.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收offset.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset:1
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收pad.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pad:{span:11,offset:22 }
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-pad-11')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pad-22')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收smallDevice.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                smallDevice:{span:11,offset:22 }
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-small-device-11')).to.eq(true)
        expect(vm.$el.classList.contains('offset-small-device-22')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收middleDevice.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                middleDevice:{span:11,offset:22 }
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-middle-device-11')).to.eq(true)
        expect(vm.$el.classList.contains('offset-middle-device-22')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收bigDevice.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                bigDevice:{span:11,offset:22 }
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-big-device-11')).to.eq(true)
        expect(vm.$el.classList.contains('offset-big-device-22')).to.eq(true)
        vm.$el.remove()
        vm.$destroy()
    })

})