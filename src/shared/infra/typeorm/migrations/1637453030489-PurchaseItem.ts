import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PurchaseItem1637453030489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'purchase_item',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "id_purchase",
                        type: "uuid",
                    },
                    {
                        name: "id_product",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKPurchase",
                        referencedTableName: "purchase",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_purchase"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKProduct",
                        referencedTableName: "products_list",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_product"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("purchase_item");
    }

}
