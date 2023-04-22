import { Controller, Get, HostParam, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    // @Redirect('https://docs.nestjs.com', 302)
    getHello(@HostParam() hostParams?: string[]): string {
        console.log({ hostParams });
        return this.appService.getHello();
    }
}
