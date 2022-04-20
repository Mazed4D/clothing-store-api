import { PartialType } from '@nestjs/mapped-types';
import { CreateBottomDto } from './create-bottom.dto';

export class UpdateBottomDto extends PartialType(CreateBottomDto) {}
