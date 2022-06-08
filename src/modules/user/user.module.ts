import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { HttpService } from '../../common/http.service';
import { SortService } from '../../common/sort.service';

@Module({
  imports: [ConfigModule],
  providers: [UserService, HttpService, SortService],
})
export class UserModule {}
