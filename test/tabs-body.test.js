import Vue from 'vue'
import TabsBody from "../src/Tabs-body";

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsBody', () => {
    it('存在.', () => {
        expect(TabsBody).to.be.exist
    })
})