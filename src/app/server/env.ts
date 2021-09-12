import { cleanEnv, str, num } from "envalid";
import dotenv from "dotenv";

dotenv.config();

export default cleanEnv(process.env, {
  BOT_TOKEN: str({ desc: "The Telegram bot API token" }),
  DETA_PATH: str({ default: undefined }),
  ADMIN: num({ default: undefined }),
  PORT: num({
    desc: "Server port",
    default: (process.env.PORT as unknown as number) || 8080,
  }),
});
