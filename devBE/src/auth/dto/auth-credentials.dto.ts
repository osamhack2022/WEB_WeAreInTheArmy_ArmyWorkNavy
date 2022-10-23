import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "identifier"})
    identifier: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "password"})
    password: string;
}