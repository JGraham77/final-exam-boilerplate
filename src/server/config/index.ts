import * as dotenv from "dotenv";

dotenv.config();

export const sqlconfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
};

export const stripeconfig = {
    apiKey: process.env.STRIPE_API_KEY as string,
};

export const mailgunconfig = {
    apiKey: process.env.MAILGUN_KEY as string,
    domain: process.env.MAILGUN_DOMAIN as string,
    toEmail: process.env.MAILGUN_TO_EMAIL as string,
};

export const jwtconfig = {
    secret: process.env.JWT_SECRET as string,
    expires: process.env.JWT_EXPIRES,
};
