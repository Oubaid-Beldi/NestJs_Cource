import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    // Get all users
    @Get()
    findAll(@Query('role') role?:'INTERN'|'ENGINER'|'ADMIN'){
        return []
    }
    // Get user by id 
    @Get(':id')
    findOne(@Param('id') id:string){
        return {id}
    }
    @Post()
    create(@Body() user:{}){
        return user
    }
    @Patch(':id')
    update(@Param('id') id:string,@Body() userUpdate:{}){
        return {id,...userUpdate}
    }
    @Delete(':id')
    delete(@Param('id') id:string){
        return {id}

    }



}
