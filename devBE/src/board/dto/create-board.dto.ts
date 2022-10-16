import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { RequestTypes } from "../entities/board.entity";

export class CreateBoardDto {
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "identifier"})
    identifier: string;

    @IsNotEmpty()
    @IsEnum(RequestTypes)
    @ApiProperty({description: "request types: enviromental, disastor, social, default"})
    type: RequestTypes;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "request title"})
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "reqeust concrete description"})
    description: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({description: "request location"})
    location: string;
    
    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty({description: "agreement of providing personal information"})
    admit: boolean;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "[opt] image of the place"})
    image: string;
}