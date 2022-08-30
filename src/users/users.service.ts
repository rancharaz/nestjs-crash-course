/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
//logic of the api 
// calculation, filtering etc
export class UsersService {
  findById(arg0: number) {
      throw new Error('Method not implemented.');
  }
  private users: User[] = [{ id: 0, name: 'Marius' }];

  findAll(): User[]{
    return this.users;
  }
  findbyId(userId: number): User{
    return this.users.find(user => user.id === userId)
  }

  createUser(createUserDto: CreateUserDto): User{
    const newUser = { id: Date.now(), ...createUserDto};
    this.users.push(newUser)
    return newUser;
  }
}
