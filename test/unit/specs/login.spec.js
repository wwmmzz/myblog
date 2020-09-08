import Login from '@/components/login.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

describe('测试login.vue组件', ()=>{
    const localVue = createLocalVue()
    localVue.use(Vuex)

    let storeOption, store
    beforeEach(()=>{
        storeOption = {
            state:{
                loginstate:1
            },
            mutations:{
                login:jest.fn(),
                regist:jest.fn()
            }
        }

        store = new Vuex.Store(storeOption)
    })
    test ('login方法', ()=>{
        const user = {
            name: '123',
            password: '123'
        }

        const mocks = {
            $router:{
                replace:jest.fn()
            }
        }

        const wrapper = shallowMount(Login, {
            data(){
                return {
                    user: user
                }
            },
            localVue,
            store,
            mocks,
        })
        store.commit = jest.fn()
        wrapper.vm.login()
        expect(store.commit).toHaveBeenCalledWith('login', user)
        expect(mocks.$router.replace).toHaveBeenCalledWith({path: '/home'})

        wrapper.vm.regist()
        expect(store.commit).toHaveBeenCalledWith('regist', user)

        wrapper.vm.acco()
        expect(wrapper.vm.account).toBe(false)
    })
})