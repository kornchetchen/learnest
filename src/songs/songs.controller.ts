import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create new song :)';
  }
  @Get()
  findAll() {
    return 'find all songs in this endpoint';
  }
  @Get(':id')
  findOne() {
    return 'fetch song with id ';
  }
  @Put(':id')
  update() {
    return 'update song with id';
  }
  @Delete(':id')
  delete() {
    return 'delete already , thanks you';
  }
}
