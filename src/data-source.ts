import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./modules/user/entities/user.entity";
import { Role } from "./modules/user/entities/role.entity";
import { Permission } from "./modules/user/entities/permission.entity";

import * as dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_NAME,  NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT || "5432"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
  
    synchronize: true,
    logging: false,
    entities: [User, Role, Permission],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
})
