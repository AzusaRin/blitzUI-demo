import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"

Vue.component('bl-button',Button)
Vue.component('bl-icon',Icon)
Vue.component('bl-button-group',ButtonGroup)
new Vue({
    el:'#app',

    data:{
        loading1:true,
        loading2:true,
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 单元测试
try {
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#icon-setting')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#icon-loading')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        // mock
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        })
        vm.$mount()
        vm.$on('click', function () {
            expect(1).to.eq(1)
        })
        let spy = chai.spy(function () {
        })

        vm.$on('click', spy)
        // 希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
}catch (error) {
    window.errors = [error]
} finally {
    window.errors.forEach((error) => {
        console.error(error.message)
    })
}
