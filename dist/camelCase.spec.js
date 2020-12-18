"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelcase_1 = require("./camelcase");
var TEST_CASES = [
    ["", ""],
    ["test", "test"],
    ["test-string", "testString"],
    [" test-string ", "testString"],
    ["Test-String", "testString"],
    ["TestV2", "testV2"],
    ["_foo_bar_", "fooBar"],
    ["foo 1.2.10", "foo1210"],
    ["foo 1.21.0", "foo1210"],
    ["foo 1.2.10", "foo1210"]
];
describe("camel case", function () {
    var _loop_1 = function (input, result) {
        it(input + " -> " + result, function () {
            expect(camelcase_1.camelcase(input)).toEqual(result);
        });
    };
    for (var _i = 0, TEST_CASES_1 = TEST_CASES; _i < TEST_CASES_1.length; _i++) {
        var _a = TEST_CASES_1[_i], input = _a[0], result = _a[1];
        _loop_1(input, result);
    }
});
//# sourceMappingURL=camelcase.spec.js.map