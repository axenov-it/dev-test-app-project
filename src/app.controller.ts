import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

import { AuthGuard } from './modules/auth/auth.guard';

import {
  GetUsersDto,
  UserModule,
  UserService,
  UserInterface,
} from './modules/user';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly lazyModuleLoader: LazyModuleLoader) {}

  @Get('users')
  async getUsers(@Query() query: GetUsersDto): Promise<UserInterface[]> {
    const moduleRef = await this.lazyModuleLoader.load(() => UserModule);
    const service = moduleRef.get(UserService);
    return service.getUsers(query);
  }
}
