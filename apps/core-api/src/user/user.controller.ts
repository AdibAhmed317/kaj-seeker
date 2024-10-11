import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entity/user.entity';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getIndex(): Promise<any> {
    return await this.userService.getAllUsers();
  }
}
