
import express from "express";
import routes from "./routes";
import teachers from "./routes/api/teachers";
import students from "./routes/api/students";

const app = express();
const port = 3000;

app.use("/api", routes);
app.use('/api/teachers', teachers);
app.use('/api/students', students);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
