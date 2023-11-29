import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DB_NAME = "schooldb";
const __api = "/api/v1";
const tables = [
  "Student",
  "Teacher",
  "Classroom",
  "Subject",
  "Class",
  "StudentClasses",
];

export { __dirname, DB_NAME, __api, tables };
