import { mount } from '@vue/test-utils';
import Nav from '../../src/components/Nav.vue'

describe('Nav.vue', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(Nav)
    })


    it('renders a profile link.', () => {
        let wrapper = mount(Nav, {
            data(){
                return{
                    isLoggedIn: true
                }
            }
        })

        const profileLink = wrapper.get("#profile")
        expect(profileLink.text()).toEqual("My profile")
        
    });

    it('should not render a profile link', () => {
        let wrapper = mount(Nav, {
            data(){
                return{
                    isLoggedIn: false
                }
            }
        })

        const profileLink = wrapper.find("#profile")

        expect(profileLink.exists()).toBe(false)
        
    });
    
})