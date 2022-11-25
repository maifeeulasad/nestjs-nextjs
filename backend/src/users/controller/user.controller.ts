import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  signup(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }
  @Post('login')
  login(@Body() userDto: UserDto) {
    return this.userService.login(userDto);
  }
}
