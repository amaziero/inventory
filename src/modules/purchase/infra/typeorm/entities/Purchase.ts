import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToMany,
	ManyToOne,
	PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Users } from '../../../../users/infra/typeorm/entities/Users'
import { ProductsList } from '../../../../products/infra/typeorm/entities/ProductsList'

@Entity("purchase")
class Purchase {
	@PrimaryColumn()
	id: string;

	@ManyToOne(() => Users)
	@JoinColumn({ name: 'id' })
	id_user: string;

	@ManyToMany(() => ProductsList)
	@JoinColumn({ name: 'id' })
	id_product: string;

	@CreateDateColumn()
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { Purchase };
