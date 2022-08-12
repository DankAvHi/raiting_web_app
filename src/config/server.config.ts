import dotenv from "dotenv";
import path from "path";

export const isProduction = !(process.env.NODE_ENV === "development" || process.argv[2] === "development");

export const serverConfig = dotenv.config({
     path: path.resolve(process.cwd(), isProduction ? "production.env" : "development.env"),
}).parsed;

export const STATIC_PATH = path.resolve("client", "build");
