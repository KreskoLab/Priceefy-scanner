import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./schemas/user";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async addUser(dto: CreateUserDto): Promise<User> {
    return this.usersRepository.create(dto);
  }

  async getUserByGoogleId(googleId: string): Promise<User> {
    return this.usersRepository.findByGoogleId(googleId);
  }

  async getUserById(id: string): Promise<User> {
    return this.usersRepository.findById(id);
  }
}
