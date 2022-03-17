import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import env from "./config/env";
import { i18n } from "./config/i18n";
import { setLanguage } from "./middlewares/localzation";
import routes from "./routes";
import { Context, Logger } from "./utils/logger";
export const app = express();
const logger = new Logger(Context.SERVER);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use(i18n.init);
app.use(setLanguage);

app.use("/", routes);

const port = env.port || 3000;
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
