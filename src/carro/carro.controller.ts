import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CarroService } from './carro.service';
import { CreateCarroDto } from './dto/create-carro.dto';
import { UpdateCarroDto } from './dto/update-carro.dto';

@Controller('carro')
export class CarroController {
  constructor(private readonly carroService: CarroService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCarroDto: CreateCarroDto) {
    return this.carroService.create(createCarroDto);
  }

  @Get()
  findAll() {
    return this.carroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carroService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateCarroDto: UpdateCarroDto) {
    return this.carroService.update(id, updateCarroDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.carroService.remove(id);
  }
}
