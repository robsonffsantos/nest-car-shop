import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';
import { Carro } from './entities/carro.entity';

@Injectable()
export class CarroService {
  constructor(
    @InjectRepository(Carro) private readonly repository: Repository<Carro>,
  ) {}

  create(createCarroDto: CreateCarroDto): Promise<Carro> {
    const carro = this.repository.create(createCarroDto);
    return this.repository.save(carro);
  }

  findAll(): Promise<Carro[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<Carro> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateCarroDto: UpdateCarroDto): Promise<Carro> {
    const carro = await this.repository.preload({
      id: id,
      ...updateCarroDto,
    });
    if (!carro) {
      throw new NotFoundException(`Carro ${id} not found`);
    }
    return this.repository.save(carro);
  }

  async remove(id: string) {
    const carro = await this.findOne(id);
    return this.repository.remove(carro);
  }
}
