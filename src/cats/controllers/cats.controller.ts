import {
    Controller,
    Get,
    Post,
    HttpCode,
    Param,
    Body,
    Query,
    Put,
    Delete,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from '../dto/cats.dto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Query() query: ListAllEntities): string {
        const { limit = 10 } = query;
        return `This action returns all cats (limit: ${limit}) items`;
    }
    @Post()
    @HttpCode(204)
    create(@Body() createCatDto: CreateCatDto): string {
        return 'This action adds a new cat.';
    }
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action return a #${id} cat`;
    }
    @Put(':id')
    update(@Param(':id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a cat with id ${id}`;
    }
}
