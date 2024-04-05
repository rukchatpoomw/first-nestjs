import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { TUsers } from './entities/user.entity';

@Injectable()
export class UsersService {
  userList: TUsers[] = [
    {
      id: 1,
      name: 'Poom',
      start_date: new Date().getTime(),
      last_date: new Date().getTime(),
      isVerified: true,
    },
  ];

  create(createUserDto: CreateUserDto) {
    // this.userList.push();
    return 'This action adds a new user';
  }

  findAll() {
    return this.userList;
  }

  findOne(id: number) {
    const foundItem = this.userList.find((item) => item.id === id);
    return foundItem;
  }

  updateAll(id: number, updateUserDto: UpdateUserDto) {
    const foundIndex = this.findIndexById(id);
    // this.userList[foundIndex] = updateUserDto
    return `This action updates all field for a #${id} user`;
  }

  updateOne(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const foundIndex = this.findIndexById(id);
    this.userList.splice(foundIndex, 1);
    return `This action removes a #${id} user`;
  }

  findItemById(id: number) {
    return this.userList.find((item) => item.id === id);
  }

  findIndexById(id: number) {
    return this.userList.findIndex((item) => item.id === id);
  }
}
