import { PickType } from '@nestjs/swagger';
import { LocationDto } from './location.dto';

export class UpdateLocationDto extends PickType(LocationDto, ['name'] as const) {
}
