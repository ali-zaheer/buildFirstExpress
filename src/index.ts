
import express from "express";
import routes from "./routes";
import logger from "./middleware/logger";


const app = express();
const port = 3000;

app.use("/", logger, routes);

app.get("/", (req, res) => {
    res.send("main page");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
