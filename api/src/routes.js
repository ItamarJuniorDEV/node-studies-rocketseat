import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: parseRoutePath("/products"),
    controller: (req, res) => {
      return res.end("Lista de produtos!");
    },
  },
  {
    method: "POST",
    path: parseRoutePath("/products"),
    controller: (req, res) => {
      return res.writeHead(201).end(JSON.stringify(req.body));
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: (req, res) => {
      return res.end("Produto removido com ID: " + req.params.id);
    },
  },
].map((route) => {
  return {
    ...route,
    path: parseRoutePath(route.path),
  };
});
