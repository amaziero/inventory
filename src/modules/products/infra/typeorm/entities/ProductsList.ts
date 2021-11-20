import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("products_list")
class ProductsList {
	@PrimaryColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	value: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { ProductsList };
