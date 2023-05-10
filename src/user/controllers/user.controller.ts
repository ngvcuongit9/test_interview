import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import {
  CreateUserDto,
  UpdateUserDto

} from '../dto/user.dto';
import { UserService } from '../services/user.service';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('/read/:id')
  getUserById(@Param('id') id: string) {
    console.log('iddd', id)
    return this.userService.getUserById(id);
  }

  @Get('/read/search/:name')
  getSearch(@Param('name') name: string) {
    return this.userService.getSearch(name);
  }

  @Post('/add')
  async createUser(@Body() user: CreateUserDto) {

    console.log('user', user)
    return this.userService.createUser(user);
  }

  @Put('/edit/:id')
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(id, dto);
  }

  @Delete('/edit/:id')
  async deleteUser(@Param('id') id: string) {

    console.log('id', id)
    return this.userService.deleteUser(id);
  }

  @Get('/locate/:n/:userId')
  async getLocate(@Param('n') n: number, @Param('userId') userId: string) {
    return this.userService.getLocate(n, userId);
  }

}
