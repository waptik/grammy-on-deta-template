import { Composer } from "grammy";

import info from "./info";

const composer = new Composer();

composer.use(info);

export default composer;
