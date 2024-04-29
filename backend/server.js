import express from "express";
import { json } from "express";

//routes
import eventRoutes from "./routes/eventRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import organizerRoutes from "./routes/organizerRoutes.js";

const app = express();
const port = 3000;

//middlewares
app.use(json());

app.get("/status", (req, res) => {
  res.json({
    message: "Works fine...",
  });
});

app.listen(port, async () => {
  console.log(`Eventify listening on port ${port}`);
});

app.use("/api/events", eventRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/organizers", organizerRoutes);
