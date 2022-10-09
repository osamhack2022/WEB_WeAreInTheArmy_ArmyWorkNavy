import { IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDto {
    @IsNotEmpty()
    @IsString()
    identifier: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}