/** @format */

import app from "./app";
import { createServer } from "node:http";
import { PORT } from "./config/env";

const port = PORT;

async function main() {
  const server = createServer(app);
  console.log(`Server is running on the port http://localhost:${port}`);

  server.listen(port);
}

main();
