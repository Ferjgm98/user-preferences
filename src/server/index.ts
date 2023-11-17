import express from "express";
import cors from "cors";
import userPreferencesRouter from "./user-preferences";
import helmet from "helmet";
import compression from "compression";
import path from "path";

const app = express();
app.use(helmet());
app.use(compression());
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.use("/api/user-preferences", userPreferencesRouter);

app.use(express.static(path.join(__dirname, "../")));
app.get("/*", (_, res) => {
	res.sendFile(path.join(__dirname, "../", "index.html"));
});
app.listen(port, () => {
	console.log("Server is up and running on port ", port);
});
