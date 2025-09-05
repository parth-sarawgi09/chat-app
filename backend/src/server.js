import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/api/auth/signup', (req, res) => {
    res.send("Signup route");
});

app.get('/api/auth/login', (req, res) => {
    res.send("Login route");
});
app.get('/api/auth/home', (req, res) => {
    res.send("Home route");
});



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});