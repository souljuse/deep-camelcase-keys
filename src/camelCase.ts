const preserveCamelCase = (string: string): string => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
      string = string.slice(0, i) + "-" + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (
      isLastCharUpper &&
      isLastLastCharUpper &&
      /[\p{Ll}]/u.test(character)
    ) {
      string = string.slice(0, i - 1) + "-" + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower =
        character.toLowerCase() === character &&
        character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper =
        character.toUpperCase() === character &&
        character.toLowerCase() !== character;
    }
  }

  return string;
};

const camelize = (key: string) => {
  return key
    .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1: string) =>
      p1.toUpperCase()
    )
    .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, (m: string) => m.toUpperCase());
};

export const camelcase = (key: string): string => {
  let newKey = key.trim();

  if (newKey.length === 0) {
    return "";
  }

  if (newKey.length === 1) {
    return newKey.toLowerCase();
  }

  const hasUpperCase = newKey !== newKey.toLowerCase();

  if (hasUpperCase) {
    newKey = preserveCamelCase(newKey);
  }

  newKey = newKey.replace(/^[_.\- ]+/, "").toLowerCase();

  return camelize(newKey);
};
