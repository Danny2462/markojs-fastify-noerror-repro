import path from "path";
import fastify from "fastify"
import fastifyStatic from "fastify-static";
import fastifyCompress from "fastify-compress";
import fastifyMarko from "@marko/fastify";
import indexPage from "./pages/index";

const port = process.env.PORT || 3000;

fastify()
  .register(fastifyCompress)
  .register(fastifyStatic, {
    root: path.resolve("dist/assets"),
    prefix: "/assets"
  })
  .register(fastifyMarko)
  .get("/", indexPage)
  .listen(port, (err, address) => {
    if (err) {
      throw err;
    }

    if (port !== "0") {
      console.log(`Listening on port ${address}`);
    }
  })
