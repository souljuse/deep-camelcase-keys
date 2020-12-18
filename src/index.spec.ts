import deepCamelize from "./index";
const deepEqual = require("deep-equal");

const obj = {
  foo: {
    "bar-bar": {
      " baz_baFF": {
        "root----ciao": "ciao"
      }
    }
  }
};

const match = {
  foo: {
    barBar: {
      bazBaFf: {
        rootCiao: "ciao"
      }
    }
  }
};

describe("index", () => {
  it(`obj -> result`, () => {
    const result = deepCamelize(obj);
    console.log(result);

    expect(deepEqual(result, match)).toEqual(true);
  });
});
