export interface ControllerInterface {
  index(query: any, req: any): Promise<any>;
  create(body: any, req?: any): Promise<any>;
  show(id: number, req?: any): Promise<any>;
  edit(id: number, body?: any, req?: any): Promise<any>;
  destroy(id: number, req?: any): Promise<any>;
}
