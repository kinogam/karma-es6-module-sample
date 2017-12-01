import Vue from 'vue';
const ExampleInjector = require('!!vue-loader?inject!./example.vue');

const ExampleWithMocks = ExampleInjector({
    // mock it
    './service': {
        msg: 'Hello from a mocked service!'
    }
});

it('should render', () => {

    let instance = new Vue(ExampleWithMocks);

    expect(instance.msg).toBe('Hello from a mocked service!');
});