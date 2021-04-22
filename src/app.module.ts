import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }), LivrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
