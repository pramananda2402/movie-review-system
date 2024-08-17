const express = require('express');
const app = express();
const sequelize = require('./config/database.js');
const userRoutes = require('./routes/user.routes.js');
const movieRoutes = require('./routes/movie.routes.js');

const genreRoutes = require('./routes/gener.routes.js');

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', movieRoutes);
app.use('/api', genreRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    try {
        await sequelize.authenticate();
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
});
