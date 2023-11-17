import express from "express";
import { api } from "./api";

const app = express();
const port = process.env.PORT || 3002;

app.use(api);
app.use(express.static(process.cwd() + "/dist"));
app.listen(port, () => {
	console.log("Server is up and running on port ", port);
});
