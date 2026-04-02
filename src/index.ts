
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.get("/api", (req, res) => {
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
