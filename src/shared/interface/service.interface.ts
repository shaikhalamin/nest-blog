export interface ServiceInterface {
  findAll?(query?: any, req?: any): Promise<any>;
  add(body: any, req?: any): Promise<any>;
  findById(id: number, req?: any): Promise<any>;
  update(id: number, body: any, req?: any): Promise<any>;
  delete(id: number, req?: any): Promise<any>;
}
