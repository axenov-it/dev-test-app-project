import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '../../common/http.service';
import { SortService } from '../../common/sort.service';
import { GetUsersDto } from './dto';

import { UserInterface } from './interfaces';

@Injectable()
export class UserService {
  constructor(
    private httpService: HttpService,
    private sortService: SortService,
    private configService: ConfigService,
  ) {}

  async getUsers(query: GetUsersDto): Promise<UserInterface[]> {
    const apiUrl = this.configService.get<string>('API_URL');
    const apiHost = this.configService.get<string>('API_HOST');

    const response = await this.httpService.get(`${apiUrl}/users`, {
      headers: { host: apiHost },
    });

    const filterdData = query.unique
      ? this.sortService.filterByUnique(response.data, query.unique)
      : response.data;

    const sortedData = query.sort
      ? this.sortService.sortByFieldName(filterdData, query.sort, query.type)
      : filterdData;

    return sortedData;
  }
}
