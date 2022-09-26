const express = require("express");
const app = express();
const PORT = 4000;
const homeRoutes = require("./routes/home");
const itemsRoutes = require("./routes/items");
const cors = require("cors");
app.use(homeRoutes);
app.use(itemsRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
