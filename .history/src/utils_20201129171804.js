import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => null;

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "sungwong@prismagram.com",
    to: address,
    subject: "Login Secret for Prismagram ❤",
    html: `Hello! Your login secret is ${secret}. <br/> Copy paste on the website to log in`,
  };
};
