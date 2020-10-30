import "./database/connection";
import "reflect-metadata";
import { app } from "app";

app.listen(process.env.PORT || 3001, () => {
  console.log(`Ready at port ${process.env.PORT || 3001}`);
});
