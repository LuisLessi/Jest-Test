import { mount } from '@vue/test-utils'
import Message from '../../src/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(Message, {
      props: { msg: "Hello Friends" }
    })
    expect(wrapper.text()).toContain("Hello Friends")
  })
})
