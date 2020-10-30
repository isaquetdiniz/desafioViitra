import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Succesfully connected with database"))
  .catch((err) => {
    console.log("Error connecting to database", err);
  });
