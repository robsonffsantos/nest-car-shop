import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';
import { CarroController } from './carro.controller';
import { CarroService } from './carro.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  controllers: [CarroController],
  providers: [CarroService],
})
export class CarroModule {}
