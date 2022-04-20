import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ClothingType } from '../../types/clothing.type';
import { Size } from '../../types/size.type';

export enum BottomType {
  JEANS = 'jeans',
  SHORTS = 'shorts',
  SWEATPANT = 'sweatpant',
  SKIRT = 'skirt',
}

@Entity('bottoms')
export class Bottom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ClothingType,
    default: 'unisex',
  })
  type: ClothingType;

  @Column({
    type: 'enum',
    enum: BottomType,
    default: 'jeans',
  })
  botomType: BottomType;

  @Column({
    type: 'enum',
    enum: Size,
    default: 's',
  })
  size: Size;

  @Column()
  name: string;

  @Column({ type: 'bigint' })
  price: number;

  @Column({ default: 0 })
  sale: number;

  @Column()
  imageUri: string;

  @Column({ default: 0 })
  quantity: number;

  @Column({ default: false })
  featured: boolean;
}
