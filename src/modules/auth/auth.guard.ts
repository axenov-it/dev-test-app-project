import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ExtractJwt } from 'passport-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);

    try {
      this.jwtService.verify(token);
    } catch (error) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return true;
  }
}
