import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty, IsNumber, IsPositive, } from "class-validator";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NumericTransformer } from "../util/numericTransformer";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn()
 //   @ApiProperty() 
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable:false})
 //   @ApiProperty() 
    nome: string;


    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 255, nullable:false})
//    @ApiProperty() 
    descricao: string;
  
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
 //   @ApiProperty() 
    preco: number;

    
    @IsNotEmpty()
    @IsPositive()
    @Column({ type: "int", nullable:false})
 //   @ApiProperty() 
    quantidade: number;

    @Column({length: 11, nullable:false})
//    @ApiProperty() 
    data_validade: string;


    @IsNotEmpty()
    @Column({length: 5000, nullable:true})
  //  @ApiProperty() 
    foto: string;


  //  @ApiProperty() 
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        lazy: true,
        onDelete: "CASCADE"
    })
    categoria: Categoria;




}