import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AccountTypes } from "../entities/users.entity";

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    identifier: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEnum(AccountTypes)
    type: AccountTypes;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    organization: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    address: string;
}