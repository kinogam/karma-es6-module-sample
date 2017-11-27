import Vue from 'vue';
import MyComponent from './demo.vue';

describe('MyComponent', () => {
    // Inspect the raw component options
    it('has a created hook', () => {
        expect(typeof MyComponent.created).toBe('function');
    });

    it('sets the correct default data', () => {
        expect(typeof MyComponent.data).toBe('function');
        const defaultData = MyComponent.data();
        expect(defaultData.message).toBe('hello!')
    });

    it('correctly sets the message when created', () => {
        const vm = new Vue(MyComponent).$mount();
        expect(vm.message).toBe('bye!')
    });

    it('renders the correct message', () => {
        const Ctor = Vue.extend(MyComponent);
        const vm = new Ctor().$mount();
        expect(vm.$el.textContent).toBe('bye!')
    });
});