import sinon from "sinon/pkg/sinon-esm";
import Vue from 'vue'
import Toast from "../src/Toast";

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.exist
    })
    describe('props', function () {
        it('接收autoClose.', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('beforeClose', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接收closeButton', () => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            closeButton.click()
            expect(callback).to.have.been.called
            vm.$el.remove()
            vm.$destroy()
        })
        it('接收enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">test</strong>']
            vm.$mount()
            let test = vm.$el.querySelector('#test')
            expect(test).to.exist
            vm.$el.remove()
            vm.$destroy()
        })
        it('接收position.', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
            vm.$el.remove()
            vm.$destroy()
        })
    })
})