import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
// import { UserRepository } from '../repositories/user.repository';
import { uuid } from 'uuidv4';
import { UserNotFoundException } from '../exceptions/userNotFound.exception';
let dataUser = [
  {
    id: '123',
    firtname: 'mary',
    lastname: 'make',
    fullname: 'make mary',
    age: '12',
    coordinate: '123:456',
  },
  {
    id: '1234',
    firtname: 'tom',
    lastname: 'dul',
    fullname: 'dul tom',
    age: '20',
    coordinate: '145:489',
  },
];

@Injectable()
export class UserService {
  // constructor(private readonly userRepository: UserRepository) {}
  async getAll() {
    return {
      data: dataUser,
    };
  }

  async getUserById(userId: string) {
    const user = dataUser.find(({ id }) => id === userId);
    if (!user) {
      throw new UserNotFoundException(userId);
    }
    return user;
  }

  async getSearch(name: string) {
    var search = new RegExp(name, 'i');
    let users = dataUser.filter(({ fullname }) => search.test(fullname));
    return users;
  }

  async updateUser(userId: string, dto: UpdateUserDto) {
    const oldUser = dataUser.find(({ id }) => id === userId);
    const modelUpdate = {
      fullname: dto.lastname + ' ' + dto.firtname,
      ...dto,
    };
    const newUser = Object.assign(oldUser, modelUpdate);
    dataUser = dataUser.filter((item) => item.id !== userId);
    dataUser.push(newUser);
    return {
      success: true,
      newUser: newUser,
    };
  }

  async createUser(user: CreateUserDto) {
    let model: any = {
      id: uuid(),
      fullname: user.lastname + ' ' + user.firtname,
      ...user,
    };
    dataUser.push(model);
    return {
      success: true,
      user: model,
    };
  }

  async deleteUser(userId: string) {
    dataUser = dataUser.filter((item) => item.id !== userId);
    return {
      success: true,
      userId: userId,
    };
  }

  async getLocate(n: number, userId: string) {
    const user = dataUser.find(({ id }) => id === userId);
    const list = dataUser.filter(
      ({ coordinate }) => coordinate === user.coordinate,
    );

    if (list.length <= n) {
      return {
        data: list,
      };
    }
    return {
      data: list.slice(0, n),
    };
  }
}
