import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty({ default: 1 })
  id: number | string;
  @ApiProperty({ default: 'Kiserian', description: 'The name of the location. Can have one or more agents' })
  name: string;
  @ApiProperty()
  created_at: string;
}