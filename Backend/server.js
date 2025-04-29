const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB error", err));

app.use('/users', userRoutes);
app.use('/movies', movieRoutes);

const PORT = process.env.PORT
app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));
