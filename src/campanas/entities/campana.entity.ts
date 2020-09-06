import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Campanas {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('text')
    names: string;
  
    @Column('text')
    surnames: string;
  
    @Column({ type: 'numeric' })
    phones: number;

    @Column('text')
    addresses: string;

    @Column({ type: 'date' })
    crate_at: Date;    
}
