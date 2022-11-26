import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  createUser(userDto: UserDto) {
    const newUser = this.userRepository.create(userDto);
    return this.userRepository.save(newUser);
  }

  findUserByEmailAndPassword(email: string, password: string) {
    return this.userRepository.findOne({
      where: { email: email, password: password },
    });
  }

  async login(userDto: UserDto) {
    const user = await this.findUserByEmailAndPassword(
      userDto.email,
      userDto.password,
    );
    if (user === null || user === undefined) {
      throw new UnauthorizedException();
    }
    const payload = { username: userDto.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
