import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  getUserById() {}
}
