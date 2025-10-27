import { DataSource } from "typeorm";
import { categoria } from "./entities/categoria.entity";
import { Inject } from "@nestjs/common";

export const categoriaProviders = [
  {
    provide: 'CATEGORIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(categoria),
    inject: ['DATABASE_CONNECTION_POSTGRES']
  },
];