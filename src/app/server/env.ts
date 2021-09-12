import { cleanEnv, str } from "envalid";
import dotenv from "dotenv";

dotenv.config();

export default cleanEnv(process.env, {
  BOT_TOKEN: str({ desc: "The Telegram bot API token" }),
  DETA_PATH: str({ default: undefined }),
});
