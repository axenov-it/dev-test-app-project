import { IsOptional, IsIn } from 'class-validator';
import { FieldTypes, SortTypes } from './interfaces';

export class GetUsersDto {
  @IsOptional()
  @IsIn(['name', 'company', 'city', 'account'])
  sort: FieldTypes;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  type: SortTypes;

  @IsOptional()
  @IsIn(['name', 'company', 'city', 'account'])
  unique: FieldTypes;
}
