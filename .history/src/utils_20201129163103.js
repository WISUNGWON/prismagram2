import { adjectives } from "./words";

export const secretGenerator = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);;
};
