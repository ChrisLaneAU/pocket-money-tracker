const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/goal-tracker/:id", (req, res) => {
      const actualPage = "/goal-tracker";
      const queryParams = {
        name: req.params.id,
        name: req.params.name,
        image: req.params.image,
        child: req.params.child,
        price: req.params.price,
        progress: req.params.progress
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
