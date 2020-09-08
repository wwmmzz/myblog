import Article from "@/components/article.vue"
import { shallowMount, createLocalVue} from "@vue/test-utils"
import Vuex from 'vuex'

describe('测试article.vue组件', ()=>{
    let storeOption, store
    const localVue = createLocalVue()
    localVue.use(Vuex)

    beforeEach(()=>{
        storeOption = {
            state: {
                loginstate:null,
                list:[
                    {
                        id:1,
                        tit:'title',
                        article:'article'
                    }
                ],
                user:[
                    {
                        id:1,
                        name:'name'
                    }
                ]
            },
            mutations: {
                comment:jest.fn()
            }
        }

        store = new Vuex.Store(storeOption)
    })

    test('渲染', ()=>{
        const mocks = {
            $router:{
                replace:jest.fn()
            },
            $route:{
                params:{
                    id:1
                }
            }
        }
        const comm ={}
        const wrapper = shallowMount(Article, {
            localVue,
            store,
            mocks,
            data(){
                return{
                    comm:comm
                }
            }
        })

        wrapper.vm.comment()
        expect(mocks.$router.replace).toHaveBeenCalledWith({path:'/login'})

        storeOption.state.loginstate = 1
        store.commit = jest.fn()
        wrapper.vm.comment()

        expect(store.commit).toHaveBeenCalledWith('comment', comm)
    })
})