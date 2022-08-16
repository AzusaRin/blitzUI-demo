import sinon from "sinon/pkg/sinon-esm";

const expect = chai.expect;
import Vue from 'vue'
import Input from "../src/Input";

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.exist
    })
    const Constructor = Vue.extend(Input)
    let vm
    describe('props', () => {
        afterEach(() => {
            vm.$destroy()
        })

        it('接收value.', () => {
            vm = new Constructor({
                propsData: {
                    value: 'test1'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.eq('test1')
        })
        it('接收placeholder.', () => {
            vm = new Constructor({
                propsData: {
                    placeholder: 'test2'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.placeholder).to.eq('test2')
        })
        it('接收disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.eq(true)
        })
        it('接收readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.eq(true)
        })
        it('接收error.', () => {
            vm = new Constructor({
                propsData: {
                    error: 'test2'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.eq('#icon-error')
            const errorText = vm.$el.querySelector('.errorText')
            expect(errorText.innerText).to.eq('test2')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('change',callback)
            //触发 input 的 change 事件
            let event = new Event('change')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).have.been.calledWith(event)
        })
        it('支持input事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('input',callback)
            //触发 input 的 input 事件
            let event = new Event('input')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).have.been.calledWith(event)
        })
        it('支持focus事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('focus',callback)
            //触发 input 的 change 事件
            let event = new Event('focus')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).have.been.calledWith(event)
        })
        it('支持blur事件', () => {
            vm = new Constructor({}).$mount()
            const callback = sinon.fake()
            vm.$on('blur',callback)
            //触发 input 的 change 事件
            let event = new Event('blur')
            let inputElement = vm.$el.querySelector('input')
            inputElement.dispatchEvent(event)
            expect(callback).have.been.calledWith(event)
        })
    })
})