import Home from '@/components/home.vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Item from '@/components/children/item.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe("store测试", ()=>{
   let storeOptions = {
        state:{
            // list:[{}, {}, {}]
        }
   }
   let store = new Vuex.Store(storeOptions)

    test ('store', async ()=>{
        const items = [{
            date: 2,
            likecount: 2
        }, 
        {
            date:3,
            likecount:1
        },
         {
            date: 1,
            likecount: 3
        }]
        storeOptions.state.list = items

        const wrapper = shallowMount(Home, {
            localVue,
            store,
            
        })

        const Items = wrapper.findAllComponents(Item)
        // expect(Items).toHaveLength(storeOptions.state.list.length)
        expect(Items).toHaveLength(items.length)
        Items.wrappers.forEach((wrapper, i)=>{
            expect(wrapper.vm.info).toBe(items[i])
        })

        wrapper.vm.handhot()
        await wrapper.vm.$nextTick()

       for(let i = 0; i<items.length-1; i++){
           expect(Items.wrappers[i].vm.info.likecount).toBeGreaterThan(Items.wrappers[i+1].vm.info.likecount)
       }

       wrapper.vm.handnew()
       await wrapper.vm.$nextTick()

       for(let i = 0; i<items.length-1; i++){
        expect(Items.wrappers[i].vm.info.date).toBeGreaterThan(Items.wrappers[i+1].vm.info.date)
    }


    })
})