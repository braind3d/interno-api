import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class W2fpDto {
  @IsString()
  @ApiProperty({ type: String })
  query: string
}
