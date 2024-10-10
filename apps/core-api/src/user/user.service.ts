import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<any> {
    const userInfo = await this.userRepo.find();
    return userInfo.length > 0 ? userInfo : 'No data found';
  }

  async addUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = this.userRepo.create(createUserDto);
    return await this.userRepo.save(newUser);
  }
}
