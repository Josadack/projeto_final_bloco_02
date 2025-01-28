import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "../../produtos/entities/produtos.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_categorias"})
export class Categoria{

    @PrimaryGeneratedColumn()
 //   @ApiProperty()
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable:false})
  //  @ApiProperty()
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable:false})
//@ApiProperty()
    descricao: string;

   // @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.categoria )
    produto: Produto[];

}