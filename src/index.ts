import express from "express";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/accounts", async (req, res) => {
});

app.listen(app.get("port"), () => {
  console.log(`gamza coin trading api server is listening on port ${app.get("port")}`);
});
