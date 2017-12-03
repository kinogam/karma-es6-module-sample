import Vue from 'vue';
import ExampleInjector from '!!vue-loader?inject!./example.vue';

import EI2 from 'inject-loader!./polygon';

const ExampleWithMocks = ExampleInjector({
    // mock it
    './service': {
        msg: 'Hello from a mocked service!'
    }
});

const MockClass = EI2({
    './service': {
        msg: 'xxx'
    }
});

describe('test', () => {

    it('should render', () => {
        let instance = new Vue(ExampleWithMocks);

        expect(instance.msg).toBe('Hello from a mocked service!');
    });


    it('another test', () => {
        let instance = new MockClass.default();

        expect(instance.getSomething()).toBe('hello xxx');

    });

});


