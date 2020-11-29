import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolver(__dirname, ".env") });
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = (email) => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD,
    },
  };
};
const client = nodemailer.createTransport(sgTransport(options));

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "sungwong@prismagram.com",
    to: address,
    subject: "Login Secret for Prismagram ❤",
    html: `Hello! Your login secret is ${secret}. <br/> Copy paste on the website to log in`,
  };
};
