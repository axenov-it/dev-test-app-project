import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import config from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    {
      ...JwtModule.register({
        secret: config().authKey,
      }),
      global: true,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
