import "reflect-metadata";

import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then(async (options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database_inventory"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  await createConnection({
    ...options,
  });
});
