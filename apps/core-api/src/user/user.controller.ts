import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getIndex(): Promise<any> {
    return await this.userService.getAllUsers();
  }
}
