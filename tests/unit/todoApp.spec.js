import { mount } from "@vue/test-utils"
import TodoApp from '../../src/components/TodoApp.vue'

describe('TodoApp.vue', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(TodoApp)
    })


    it('should render todo text', () => {
        const todo = wrapper.get('[data-test="todo"]')

        expect(todo.text().trim()).toBe('Learn vue Testing');
        
    });

    it("should add new todo", async () => {
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

        await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

    })

    it("should clear input when clear button is clicked", async () => {      
        const input = wrapper.get('[data-test="new-todo"]');
        await input.setValue('New Todo');
      
        expect(input.element.value).toBe('New Todo');
      
        const clearButton = wrapper.get('[data-test="clear-button"]');
        await clearButton.trigger('click');
      
        expect(input.element.value).toBe('');
      
        const todoText = wrapper.get('[data-test="todo"]').text();
        expect(todoText.trim()).toBe('Learn vue Testing');
    });

    it("should add new todo", async () => {
        await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

        expect(wrapper.get('[data-test="todo"').classes()).toContain('completed')


    })
})
