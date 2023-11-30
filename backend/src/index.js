import app from "./api/app.js";
import "./db/startDB.js";
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API Server is running on PORT ${PORT}`);
});
