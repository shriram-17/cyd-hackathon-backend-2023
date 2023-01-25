import { Injectable, HttpException } from '@nestjs/common';

import { DbService } from './shared';

@Injectable()
export class AppService {
  constructor(private readonly db: DbService) {
    
  }
  async getHello(): Promise<string> {
    const result = await this.db.create('vitalikWatchlist', ['matic-network']);
    return `Hello Wold! ${JSON.stringify(result)}`;
  }
  
  async getName(name:string) :Promise<string>{
    const result = await this.db.create(name,[]);
   if(!result)
   {
    throw new HttpException('Not Found',404)
   }
   return JSON.stringify(result)
  }
  async getId(id:string) :Promise<string>{
    const list = this.db.findId(id)
   if(!list)
   {
    throw new HttpException('Not Found',404)
   }
   return list
  }
  async deleteid(id:string) : Promise<String>
  {
    const message =this.db.Deleterecord(id)
    return message
  }
  async inserttoken(token:string) :Promise<String>
  {
    console.log(token)
    return "The Record is Deleted"
  }
}
