import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevService } from './data/services/dev.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produtos/produto.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    CategoriaModule,
    ProdutoModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
