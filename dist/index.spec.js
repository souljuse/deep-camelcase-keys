"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var deepEqual = require("deep-equal");
var obj = {
    foo: {
        "bar-bar": {
            " baz_baFF": {
                "root----ciao": "ciao"
            }
        }
    }
};
var match = {
    foo: {
        barBar: {
            bazBaFf: {
                rootCiao: "ciao"
            }
        }
    }
};
describe("index", function () {
    it("obj -> result", function () {
        var result = index_1.default(obj);
        console.log(result);
        expect(deepEqual(result, match)).toEqual(true);
    });
});
//# sourceMappingURL=index.spec.js.map