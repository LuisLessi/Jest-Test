import { mount } from "@vue/test-utils"
import TodoApp from '../../src/components/TodoApp.vue'

describe('TodoApp.vue', () => {
    it('should render todo text', () => {
        const wrapper = mount(TodoApp);

        const todo = wrapper.get('[data-test="todo"]')

        expect(wrapper.text()).toBe("Learn vue Testing")
    })
})
