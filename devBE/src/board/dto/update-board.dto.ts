import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { RequestTypes } from '../entities/board.entity';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {

    @IsOptional()
    @IsEnum(RequestTypes)
    @ApiProperty({description: "request types: enviromental, disastor, social, default"})
    type: RequestTypes;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "request title"})
    title: string;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "reqeust concrete description"})
    description: string;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "request location"})
    location: string;
    
    @IsOptional()
    @IsBoolean()
    @ApiProperty({description: "agreement of providing personal information"})
    admit: boolean;

    @IsOptional()
    @IsString()
    @ApiProperty({description: "[opt] image of the place"})
    image: string;

}