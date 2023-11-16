import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { supabase } from '../supabase';

@Injectable()
export class AgentsService {
  async create(createAgentDto: CreateAgentDto) {
    return supabase.from('pickup mtaani agents').insert([createAgentDto]);
  }

  async findAll(location: string) {
    return supabase.from('pickup mtaani agents').select().eq('location', location);
  }

  async findOne(id: number) {
    return supabase.from('pickup mtaani agents').select().eq('id', id);

  }

  async update(id: number, updateAgentDto: UpdateAgentDto) {
    return supabase.from('pickup mtaani agents').update([updateAgentDto]);

  }

  async remove(id: number) {
    return supabase.from('pickup mtaani agents').delete().eq('id', id);
  }
}
