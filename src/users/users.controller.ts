/* eslint-disable */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger/dist';
import { ApiOkResponse } from '@nestjs/swagger/dist/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
// route for the api

@ApiTags('users')

@Controller('users') // the main component to be used
export class UsersController {
    constructor(private usersService:UsersService){} // initiate userService 


    @ApiOkResponse({type: User}) ////on a post response 201 type user
    @Get()
    getUsers(): User[] { //adding type user array to function
      return this.usersService.findAll() // use userservice to with the function findAll
    }

    @Get(':id')// get element by id
    getUserById(@Param('id') id:string): User{
      return 
      this.usersService.findbyId(Number(id));
    }

    @ApiCreatedResponse({type: User}) //on a post response 201 type user
    @Post()
    createUser(@Body() body:CreateUserDto ): User {
      return this.usersService.createUser(body);
    }
}
