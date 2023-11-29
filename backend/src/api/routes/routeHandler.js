import express from "express";
import controller from "../controllers/controller.js";
import { tables } from "../../constants.js";

const router = express.Router();

tables.forEach((table) => {
  router.route(`/${table}s`).get(controller["getAllTuples"]);
  router.route(`/${table}s/desc`).get(controller["getTableDesc"]);
  router.route(`/${table}s/:id`).get(controller["getTupleById"]);
  router.route(`/${table}s`).post(controller["addTuple"]);
  router.route(`/${table}s/:id`).put(controller["updateTuple"]);
  router.route(`/${table}s/:id`).delete(controller["deleteTuple"]);
});

export { router };
