import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import path from "path";
import apiRouter from "./src/api/index.api";
import corsConfig from "./src/config/cors.config";
import { serverConfig, STATIC_PATH } from "./src/config/server.config";
import addVoutesSchedule from "./src/schedules/addVoutes.schedule";

if (!serverConfig) {
     throw new Error(`❌ [server] could not read .env file, make sure it existed and contain fields`);
}

const app = express();

app.use(express.json());
app.use(cors(corsConfig));
app.use(express.static(path.resolve(STATIC_PATH)));

addVoutesSchedule();

app.use("/api", apiRouter);

app.get("*", (_, res) => res.sendFile(path.resolve(STATIC_PATH, "index.html")));

if (serverConfig.SECURE === "true") {
     const http = express();
     http.get("*", function (req, res) {
          res.redirect(302, "https://" + req.headers.host + req.url);
     });
     http.listen(serverConfig.HTTP_PORT);

     if (!serverConfig.SSL_CERT_PATH || !serverConfig.SSL_KEY_PATH) {
          throw new Error(`❌ [server] SSL files paths not provided in .env file`);
     }

     const httpsOptions = {
          cert: fs.readFileSync(serverConfig.SSL_CERT_PATH),
          key: fs.readFileSync(serverConfig.SSL_KEY_PATH),
     };

     const server = https.createServer(httpsOptions, app);

     server.listen(serverConfig.HTTPS_PORT, () => {
          console.log(`\n⚡[INFO] SECURE Server launched at ${serverConfig!.HOST}:${serverConfig!.HTTPS_PORT}`);
     });
} else {
     app.listen(serverConfig.HTTP_PORT, () => {
          console.log(`\n⚡[INFO] Server launched at ${serverConfig!.HOST}:${serverConfig!.HTTP_PORT}`);
     });
}
