import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const user = {
    email: "test@gmail.com",
    password: "testpassword",
    username: "testuser"
};

app.post("/login", async(req, res) => {
    const { email, password } = req.body;

    if (email !== user.email || password !== user.password) {
        return res.status(401).json({ message: "bilgiler geçersiz" });
    }

    const accessToken = jwt.sign({ email: user.email, username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' });

    return res.status(200).json({ accessToken });
});

app.listen(3000, () => {
    console.log("server 3000 ready");
});
