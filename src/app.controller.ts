import { Controller, Get, Param, Post} from '@nestjs/common';
import { AppService,ApiService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }
  @Post('/:name')
    async getByname(@Param('name') name:string) : Promise<string>
  {
    return this.appService.getName(name)
  }
   @Get('/find/:id')
  async getbyid(@Param('id') id:string):Promise <string>
  {
    return this.appService.getId(id)

  }
  @Post('/insert/:token')
  async deletebyName(@Param('token') token : string){
    return this.appService.inserttoken(token)
  }
  @Get('/delete/:id')
  async deletebyId(@Param('id') id : string){
    return this.appService.deleteid(id)
  }

}

@Controller("/auth")
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('/api')
  getData() {
    console.log('hello')
    return this.apiService.getExample()
  }
}