import Vue from "vue";
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"

Vue.component('bl-button', Button)
Vue.component('bl-icon', Icon)
Vue.component('bl-button-group', ButtonGroup)
new Vue({
    el: '#app',

    data: {
        loading1: true,
        loading2: true,
    }
})

//单元测试

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies);
//测试setting
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount()

    chai.expect(vm.$el.querySelector('use').getAttribute('xlink:href')).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()

}
//测试loading
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading:true,
        }
    })
    vm.$mount()

    chai.expect(vm.$el.querySelector('use').getAttribute('xlink:href')).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
//测试左右位置
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount(div)

chai.expect(window.getComputedStyle(vm.$el.querySelector('svg')).order).to.eq('1')

    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    vm.$mount(div)

    chai.expect(window.getComputedStyle(vm.$el.querySelector('svg')).order).to.eq('2')

    vm.$el.remove()
    vm.$destroy()
}
//测试@Click
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor()
    vm.$mount()
    const spy = chai.spy(function (){})
    vm.$on('click',spy)

    vm.$el.click()
    chai.expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}