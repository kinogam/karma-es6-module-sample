import mockPromises from '../mock/mock-promise';

describe('hello promise', () => {

    beforeEach(() => {
        window.Promise = mockPromises.getMockPromise(Promise);
    });

    function test() {
        return {
            name: 'kino',
            methodA() {
                this.methodB().then(name =>
                    this.name = name
                );
            },
            methodB() {
                return new Promise((resolve) => {
                    resolve('test');
                });
            }
        }
    }

    it('test', () => {
        let obj = test();
        obj.methodA();
        mockPromises.tick();
        expect(obj.name).toBe('test');

    });
    
});