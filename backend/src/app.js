import express from "express";
import cors from "cors";

import articleRoutes
from "./routes/articleRoutes.js";

const app =
express();

app.use(cors());

app.use(express.json());

app.use(
"/api/articles",
articleRoutes
);

app.get(
"/",
(req, res) => {

res.send(
"Publication Website API Running 🚀"
);

}
);

export default app;