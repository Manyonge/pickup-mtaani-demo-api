import { Injectable } from '@nestjs/common';
import { CreateLocationDto, UpdateLocationDto } from './dto';
import { supabase } from '../supabase';

@Injectable()
export class LocationsService {
  async create(createLocationDto: CreateLocationDto) {
    return supabase.from('pickup mtaani locations').insert(createLocationDto);
  }

  async findAll() {
    return supabase.from('pickup mtaani locations').select();
  }

  async findOne(id: number) {
    return supabase.from('pickup mtaani locations').select().eq('id', id).single();
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    return supabase.from('pickup mtaani locations').update([updateLocationDto]).eq('id', id);
  }

  async remove(id: number) {
    return supabase.from('pickup mtaani locations').delete().eq('id', id);
  }
}
