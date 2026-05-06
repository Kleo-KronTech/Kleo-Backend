import * as dotenv from 'dotenv';

const env = process.env;

dotenv.config();

export default {
    JWT_SECRET: env.JWT_SECRET,
    JWT_EXPIRATION: env.JWT_EXPIRATION!,
    PORT:  Number(env.PORT ?? 3000),
    DB_URL: env.DB_URL!,
};

