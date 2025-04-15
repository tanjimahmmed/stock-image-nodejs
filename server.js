const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const Item = require("./models/Item");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})