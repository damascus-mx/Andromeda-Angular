export interface Repository<T> {
    GetAll(): T[];
    GetById(id: any): T;
    Create(model: T): void;
    Update(id: any): void;
    Delete(id: any): void;
}
