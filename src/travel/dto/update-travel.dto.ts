import { PartialType } from '@nestjs/swagger';
import { CreateTravelDto } from './create-travel.dto';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {}
