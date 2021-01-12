import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import FAQ from '../../src/pages/home/FAQ.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Greeting.vue', () => {
    it('renders a greeting', () => {
      const wrapper = mount(FAQ, {
        localVue,
        router
      })
  
      expect(wrapper.text()).toMatch("Foire Aux Questions")
    })
  })
