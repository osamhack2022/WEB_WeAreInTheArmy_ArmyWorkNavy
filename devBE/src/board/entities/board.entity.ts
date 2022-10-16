import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/users.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum RequestTypes {
    ENVIROMENTAL = "enviromental",
    DISASTOR = "disastor",
    SOCIAL = "social",
    DEFAULT = "default"
}

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: "[primary] index" })
    idx: number;
 
    @Column()
    @ApiProperty({ description: "identifier" })
    identifier: string;

    @Column({
        type: "enum",
        enum: RequestTypes,
        default: RequestTypes.DEFAULT,
    })
    @ApiProperty({ description: "request types: enviromental, disastor, social, default" })
    type: RequestTypes;

    @Column()
    @ApiProperty({ description: "request title" })
    title: string;

    @Column({ type: "text" })
    @ApiProperty({ description: "request description" })
    description: string;

    @Column()
    @ApiProperty({ description: "request location" })
    location: string;

    @Column()
    @ApiProperty({ description: "agreement of providing personal information" })
    admit: boolean;

    @Column({ nullable: true })
    @ApiProperty({ description: "image of the place" })
    image: string;

    @CreateDateColumn()
    @ApiProperty({ description: "createdAt - auto created" })
    createdAt: Date;

    @UpdateDateColumn()
    @ApiProperty({ description: "updatedAt - auto created" })
    updatedAt: Date;

    @JoinColumn({referencedColumnName: "identifier", name: "userId"})
    @ManyToOne(() => User, (user) => user.boards, { onDelete: "CASCADE", })
    user: User;
}
