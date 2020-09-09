import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('campanas')
export class Campanas {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('text')
    names: string;
  
    @Column('text')
    surnames: string;
  
    @Column({ type: 'numeric' })
    phones: number;

    @Column('text')
    addresses: string;

    @Column({ type: 'date' })
    create_at: Date;    
}
