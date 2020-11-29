import { adjectives, nouns } from "./words";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => null;

export const sendSecretMail = (address, secret) => {
  const email = {
    from : "sungwong@prismagram.com",
    to : address,
    subject: "Login Secret for Prismagram ❤",
    
  }
}