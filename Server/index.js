// server.js

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./server/routes/auth.routes.js";
import userRoutes from "./server/routes/user.routes.js";
import connectDB from "./server/DB/databaseConfigs.js";
import researchRoutes from "./server/routes/research.routes.js"; // Remove curly braces for default import
import productRoutes from "./server/routes/product.routes.js"
import projectRoutes from "./server/routes/project.routes.js"
import eventRoutes from "./server/routes/event.routes.js"
import machineRoutes from "./server/routes/machine.routes.js"
import ideaRoutes from "./server/routes/idea.routes.js"
import orderRoutes from "./server/routes/order.routes.js"
import membershipRoutes from "./server/routes/membership.routes.js"
import personRoutes from "./server/routes/person.routes.js"
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/product', productRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/machine', machineRoutes);
app.use('/api/idea', ideaRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/membership', membershipRoutes);
app.use('/api/person', personRoutes);


app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
