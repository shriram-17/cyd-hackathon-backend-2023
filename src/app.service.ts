import { Injectable, HttpException } from '@nestjs/common';
import { FetchService } from 'nestjs-fetch';

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
@Injectable()
export class ApiService {
	constructor(private readonly fetch: FetchService) {}

	async getExample(): Promise<string> {
		const response = await this.fetch.get('https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_5a2de76a56af48f8a0388fe5fa3');
		return response.text();
	}
}