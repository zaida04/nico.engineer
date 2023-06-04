import leven from "leven"

export const searchForSimilar = <T extends { name: string; }>(input: string, allOptions: T[]) => {
  return allOptions.filter(option => {
    if (option.name.toLowerCase().startsWith(input.toLowerCase())) return true;

    const distance = leven(option.name, input);
    const inputLength = input.length;

    return distance <= inputLength / 2;
  });
}