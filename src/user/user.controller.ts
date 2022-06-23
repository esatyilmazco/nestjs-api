import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { identity } from 'rxjs';

@Controller({ path: 'user' })
export class UserController {
  @Get()
  getUser(@Req() req: Request): string {
    return 'UserController';
  }
  //   @Get(':id')
  //   findUserById(@Param('id') id: string): string {
  //     console.log('id', id);
  //     return id;
  //   }

  @Get('/query')
  findUserQuery(
    @Query('ad') query,
    @Query('q') q,
    @Query('lastname') lname,
  ): string {
    console.log('query', query, q, lname);
    return 'selam';
  }
  @Get('wildcard|wild*crd')
  WilCard(): string {
    return 'wildcard';
  }

  @Post()
  createUser(@Body() data: { id: string | number; name: string }): string {
    console.log('data', data);
    return 'Esat';
  }
  @Delete()
  deleteUser(@Body() data: { id: string }): string {
    return 'Deleted';
  }
  @Put()
  updateUser(@Query('id') id: string, @Body() data: { name: string }): string {
    return 'Updated';
  }
}
