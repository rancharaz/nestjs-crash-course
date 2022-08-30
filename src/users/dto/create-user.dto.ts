/* eslint-disable */

import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    
    //shown on the swagger as schema
    @ApiProperty()
    name:string;

    //shown on the swagger as schema
    @ApiProperty({required: false})
    age?: number
}