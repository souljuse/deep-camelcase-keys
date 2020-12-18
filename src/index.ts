import { camelcase } from "./camelcase";

const deepCamelize = (obj: Record<string, any>) => {
  if (typeof obj !== "object") {
    return obj;
  }

  return Object.keys(obj).reduce(
    (acc: Record<string, any> | undefined, key: string) => {
      if (acc === undefined) {
        return acc;
      }

      acc[camelcase(key)] = deepCamelize(obj[key]);

      return acc;
    },
    {}
  );
};

export default deepCamelize;
