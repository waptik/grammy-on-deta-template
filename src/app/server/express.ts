import Express from "express";

import routes from "./routes";

const express = Express();

express.use(Express.json());

express.use(routes);

export default express;
