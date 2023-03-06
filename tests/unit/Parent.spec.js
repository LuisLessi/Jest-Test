//import { mount } from '@vue/test-utils' Renderiza o componente junto com seus componentes filhos
import { shallowMount } from '@vue/test-utils' //Renderiza apenas o componente.
import Parent from '../../src/components/Parent.vue'

describe('Parent.vue', () => {
  it('Check if parent text exists', () => {
    const wrapper = shallowMount(Parent)

    expect(wrapper.text()).toContain("Parent")
  })
})
