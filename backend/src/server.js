import express from "express";
import { ENV } from "./config/env.js";

const app = express();

const PORT = ENV.PORT;

app.get("/api/health",(req,res) => {
    return res.status(200).json({message: "OK"})
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
