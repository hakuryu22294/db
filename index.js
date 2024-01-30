import jsonServer from "json-server";
import auth from "json-server-auth";

const server = jsonServer.create();
const auth = auth.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const PORT = 8080;
server.use(middleware);
server.use(router);
server.use(auth);
server.listen(PORT);
