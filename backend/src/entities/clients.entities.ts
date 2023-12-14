import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./contacts.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column({ type: "varchar", array: true, length: 15, nullable: true })
  telephone: string[];

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @OneToMany(() => Contact, contact => contact.client, { 
    eager: true, 
    onDelete: "CASCADE" 
  } )
  contacts: Contact[]

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password)

    if (!hasRounds) {
      this.password = hashSync(this.password, 10)
    }
  }
};

export default Client