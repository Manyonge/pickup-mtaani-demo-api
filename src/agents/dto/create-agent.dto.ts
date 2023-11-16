import { PickType } from '@nestjs/swagger';
import { Agent } from '../entities/agent.entity';

export class CreateAgentDto extends PickType(Agent, ['location', 'agent_name']) {
}
