import { PickType } from '@nestjs/swagger';
import { LocationDto } from './location.dto';

export class CreateLocationDto extends PickType(LocationDto, ['name'] as const) {
}
