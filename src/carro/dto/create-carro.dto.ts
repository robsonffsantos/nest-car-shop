import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarroDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Monza' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '2.0' })
  model: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'ABC-1952' })
  licensePlate: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example:
      'https://png.pngtree.com/png-clipart/20190520/original/pngtree-cute-car-cartoon-vector-illustration-png-image_3755506.jpg',
  })
  photo: string;
}
