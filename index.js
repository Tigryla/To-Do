const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const todosRoutes = require("./routes/todos");

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(todosRoutes);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://tg-app:4339875asd@cluster0.jjyrf7v.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log("Server has been started...");
    });
  } catch (e) {
    console.log(e);
  }
}

start();
