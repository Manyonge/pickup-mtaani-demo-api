import { ApiProperty } from '@nestjs/swagger';

export class Agent {
  @ApiProperty()
  id: number;
  @ApiProperty()
  location: string;
  @ApiProperty()
  agent_name: string;
}
