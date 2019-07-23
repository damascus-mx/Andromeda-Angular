export interface Repository {
    GetAll(): any[];
    GetById(id: any): any;
    Create(model: any): void;
    Update(id: any): void;
    Delete(id: any): void;
}
