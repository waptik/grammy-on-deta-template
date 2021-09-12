import Express from "express";

import expressHandlers from "app/handlers/server";

const express = Express();

express.use(expressHandlers);
express.use(Express.json());

export default express;
