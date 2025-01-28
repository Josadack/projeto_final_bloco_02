import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseFloatPipe, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Categoria,  } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";
import { ApiTags } from "@nestjs/swagger";


//@ApiTags('Categorias')
@Controller('/categorias')
export class CategoriaController{
    constructor(
        private readonly categoriaService: CategoriaService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]>{
        return this.categoriaService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param ('id', ParseIntPipe) id: number): Promise<Categoria>{
        return this.categoriaService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByGenero(@Param ('nome') nome: string): Promise<{mensagem: string; categoria: Categoria[]}>{
        return this.categoriaService.findByGenero(nome)
    }  

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Categoria): Promise<Categoria>{
        return this.categoriaService.create(produto)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()  genero: Categoria): Promise<Categoria>{
        return this.categoriaService.update(genero)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param ('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id)
    }


}