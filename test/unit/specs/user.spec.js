import User from '@/components/user.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'

describe('测试user.vue组件', ()=>{
    let storeOption, store
    const localVue = createLocalVue()
    localVue.use(Vuex)

    beforeEach(()=>{
        storeOption = {
            state: {
                loginstate:1
            },
            mutations: {
                fabu: jest.fn()
            }
        }
        store = new Vuex.Store(storeOption)
    })

    test ('fabu和logout方法', ()=>{
        const mocks = {
            $router:{
                replace: jest.fn()
            }
        }
        const arti = {
            msg: "123",
            tit: "123"
        }

        const wrapper = shallowMount(User, {
            localVue,
            store,
            mocks,
            data(){
                return{
                    arti:arti
                }
            }
        })

        store.commit = jest.fn()
        wrapper.vm.fabu()
        expect(store.commit).toHaveBeenCalledWith('fabu', arti)

        wrapper.vm.logout()
        expect(store.state.loginstate).toBe(null)
        expect(mocks.$router.replace).toHaveBeenCalledWith({path: '/home'})
    })
})