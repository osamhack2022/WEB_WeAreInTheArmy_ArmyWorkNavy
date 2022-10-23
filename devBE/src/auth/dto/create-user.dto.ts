import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AccountTypes } from "../entities/users.entity";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "identifier"})
    identifier: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "password"})
    password: string;

    @IsNotEmpty()
    @IsEnum(AccountTypes)
    @ApiProperty({description: "account type: administrator, citizen, millitary"})
    type: AccountTypes;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "user name"})
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "phone number"})
    phone: string;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "[opt] organization"})
    organization: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    @ApiProperty({description: "[opt] email address"})
    email: string;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "[opt] address"})
    address: string;
}