import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('user')
export class UserController {
    @Post()
    create(@Res() res: Response): void {
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Res() res: Response): void {
     res.status(HttpStatus.OK).json([]);
  }
}
