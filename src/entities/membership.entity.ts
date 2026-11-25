
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Membership {

  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column("varchar", { length: 50 })
  first_name!: string;

  @Column("varchar", { length: 50 })
  last_name!: string;

  @Column("varchar", { length: 50 })
  middle_name!: string;

  @Column("varchar", { length: 75 })
  address_1!: string;

  @Column("varchar", { length: 75 })
  address_2!: string;

  @Column("varchar", { length: 75 })
  address_3!: string;

  @Column("varchar", { length: 75 })
  city!: string;

  @Column("varchar", { length: 2 })
  state!: string;

  @Column("varchar", { length: 5 })
  zip!: string;

  @Column("varchar", { length: 100 })
  email!: string;

  @Column("date")
  birthday!: string;

  @Column("datetime", { nullable: true })
  created!: string;

  @Column("varchar", { length: 100 })
  school!: string;

  @Column("int")
  grad_year!: number;

  @Column("varchar", { length: 100 })
  major!: string;

}
