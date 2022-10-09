import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum AccountTypes {
    ADMINISTRATOR = "administrator",
    CITIZEN = "citizen",
    MILLITARY = "millitary",
    DEFAULT = "default"
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    idx: number;

    @Column({ unique: true })
    identifier: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: AccountTypes,
        default: AccountTypes.DEFAULT,
    })
    type: AccountTypes;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column({ nullable: true })
    organization: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    address: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
