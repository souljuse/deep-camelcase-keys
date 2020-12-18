import { camelcase } from "./camelcase";
var deepCamelize = function (obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    return Object.keys(obj).reduce(function (acc, key) {
        if (acc === undefined) {
            return acc;
        }
        acc[camelcase(key)] = deepCamelize(obj[key]);
        return acc;
    }, {});
};
export default deepCamelize;
//# sourceMappingURL=index.js.map