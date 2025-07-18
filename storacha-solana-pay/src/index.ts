import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { adminRouter } from "./routes/admin.route";
dotenv.config();
const PORT = process.env.PORT || 3000;

/**
 * Add a function here to load all the env variables otherwise throw error if not available
 */

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
