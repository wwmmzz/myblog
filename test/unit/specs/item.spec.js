import { shallowMount, RouterLinkStub, createLocalVue} from '@vue/test-utils'
import item from '@/components/children/item.vue'
import Vuex from 'vuex'
import jestConf from '../../../../myblog/test/untils/jest.conf'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('测试item组件', ()=>{
    let storeOptions, 
        store

    beforeEach(()=>{
         storeOptions = {
            state:{
                loginstate:null
            },
            mutations:{
                addlike: jest.fn()
            }
        }

         store = new Vuex.Store(storeOptions)
    })


    test ('title', ()=>{
        const info = {
            tit: 'title',
            article:'article'
        }
        const wrapper = shallowMount(item, {
            propsData:{
                info
            },
            stubs:{
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.find('h4').text()).toContain(info.tit)
        expect(wrapper.find('p').text()).toContain(info.article)
    })

    test('add方法', ()=>{
        storeOptions.state.loginstate = 1

        const info = {
            id:1
        }

        const wrapper = shallowMount(item, {
            propsData:{
                info
            },
            stubs:{
                RouterLink: RouterLinkStub
            },
            localVue,
            store,
            
        })
        store.commit = jest.fn()
        wrapper.vm.add()
        expect(store.commit).toHaveBeenCalledWith('addlike', info.id)
  
    })

    test('路由跳转', ()=>{
        const mocks = {
            $router: {
                replace: jest.fn()
            }
        }

        const wrapper = shallowMount(item,{
            localVue,
            store,
            mocks,
            propsData:{
                info:{
                    id:1
                }
            },
            stubs:{
                RouterLink: RouterLinkStub
            },
        })

        wrapper.vm.add()
        expect(mocks.$router.replace).toHaveBeenCalledWith({path:'/login'})
    })
})