import Common from "@/components/children/common.vue"
import { shallowMount } from "@vue/test-utils"
import { testPathIgnorePatterns } from "../jest.conf"

describe("测试common.vue组件", ()=>{
    test ('props', ()=>{
        const common = {
            user:'user',
            comm: "comment"
        }

        const wrapper = shallowMount(Common, {
            propsData:{
                common
            }
        })
        const span = wrapper.findAll('span').wrappers
        expect(span[0].text()).toContain(common.user)
        expect(span[1].text()).toContain(common.comm)
    })
})