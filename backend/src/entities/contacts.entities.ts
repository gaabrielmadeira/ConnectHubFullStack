import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./clients.entities";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length: 50})
  name: string;

  @Column({length: 50})
  email: string;

  @Column({ type: "varchar", array: true, length: 15, nullable: true })
  telephone: string[];

  @CreateDateColumn({type: "date"})
  createdAt: string | Date;

  @ManyToOne(() => Client, client => client.contacts)
  client: Client;
}

export default Contact;