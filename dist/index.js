"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camelcase_1 = require("./camelcase");
var deepCamelize = function (obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    return Object.keys(obj).reduce(function (acc, key) {
        if (acc === undefined) {
            return acc;
        }
        acc[camelcase_1.camelcase(key)] = deepCamelize(obj[key]);
        return acc;
    }, {});
};
exports.default = deepCamelize;
//# sourceMappingURL=index.js.map