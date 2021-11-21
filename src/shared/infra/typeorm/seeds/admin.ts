import { hash } from "bcrypt";
import { v4 as uudiV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = createConnection("localhost");

  const id = uudiV4();
  const password = await hash("admin", 8);

  (await connection).query(
    `INSERT INTO USERS(id,  name, email, password, "isAdmin", created_at, driver_license)
			values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'XXXXXX')
		`
  );

  (await connection).close();
}

create().then(() => ("user admin created"));
