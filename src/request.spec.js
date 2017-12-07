describe('request', () => {

    let aladdin = {
        http: {
            request() {
            }
        }
    };

    (() => {
        let streamList = [],
            flushList = [];

        aladdin.http.request = (options, callback) => {

            streamList.forEach(item => {
                if (item._matcher.test(options.url)) {
                    flushList.push({
                        // options: options,
                        callback: callback,
                        mockRes: item._mockRes
                    });
                }
            });

        };

        aladdin.mockBackend = {
            cleanup() {
                streamList = [];
                flushList = [];
            },
            when(matcher) {
                let stream = {
                    _mockRes: null,
                    _matcher: matcher,
                    respond(mockRes) {
                        this._mockRes = mockRes;
                    }
                };
                streamList.push(stream);
                return stream;
            },
            flush() {
                flushList.forEach(item => {
                    item.callback(undefined, {body: JSON.stringify(item.mockRes)});
                });

                flushList = [];
            }
        };
    })();

    function updateRes(obj) {
        aladdin.http.request({url: 'http://www.abc.com'}, (err, res) => {
            if (err) {
                return;
            }
            if (res.body) {
                let body = JSON.parse(res.body);
                if (body.responseCode === '000000') {
                    obj.msg = body.data.msg;
                }
            }
        });
    }

    beforeEach(() => {

    });

    it('should response mock data when expect url appear', function () {
        let res = {
            msg: ''
        };

        aladdin.mockBackend.when(/abc\.com/).respond({
            "data": {
                msg: 'hello'
            },
            "responseCode": "000000",
            "responseMsg": "success"
        });

        updateRes(res);

        aladdin.mockBackend.flush();

        expect(res.msg).toBe('hello');
    });
});