import express = require("express");
import * as statusController from './controllers/status'

const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', statusController.hi);
app.post('/awsome', statusController.awsome);

export default app;