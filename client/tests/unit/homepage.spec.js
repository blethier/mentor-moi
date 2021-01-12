import { mount, createLocalVue } from '@vue/test-utils'
import Homepage from '../../src/pages/home/Homepage.vue'
import Hero from '../../src/components/Hero.vue'
import Wave from '../../src/components/Waves.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()


describe('Should contain Hero', () => {
  it("does not render a Child component", () => {
    const wrapper = mount(Homepage,{
      localVue,
      router
    })
  
    expect(wrapper.findComponent(Hero).exists()).toBe(true)

  })
})

describe('Shoul have 2 wave', () => {
  it("renders many children", () => {
    const wrapper = mount(Homepage, {
      localVue,
      router
    })
  
    expect(wrapper.findAllComponents(Wave).length).toBe(2)
  })
})






  