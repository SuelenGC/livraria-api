import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivrosModule } from './livros/livros.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      logging: false,
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      synchronize: true,
      autoLoadEntities: true
    }), LivrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
