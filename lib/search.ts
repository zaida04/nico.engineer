import leven from "leven"
import { sort } from "moderndash";

export const searchForSimilar = <T extends { name: string; aliases?: string[] }>(input: string, allOptions: T[]) => {
  return allOptions.filter(option => {
    if (option.name.toLowerCase().startsWith(input.toLowerCase())) return true;
    if (option.aliases?.some(alias => alias.toLowerCase().startsWith(input.toLowerCase()))) return true;

    const nameDistance = leven(option.name, input);
    const inputLength = input.length;

    const aliasClosest = sort(option.aliases?.map(alias => leven(alias, input)) ?? [])[0];
    if (aliasClosest < nameDistance) return aliasClosest <= inputLength / 2;
    return nameDistance <= inputLength / 2;
  });
}