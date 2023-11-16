import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';

@Injectable()
export class AgentsService {
  create(createAgentDto: CreateAgentDto) {
    return 'This action adds a new agent';
  }

  findAll(location: string) {
    return `This action returns all ${location} agents`;
  }

  findOne(id: number, location: string) {
    return `This action returns a ${location} #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number, location: string) {
    return `This action removes a ${location} #${id} agent`;
  }
}
