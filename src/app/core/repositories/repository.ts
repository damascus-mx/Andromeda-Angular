/**
 * @name Andromeda
 * @version 0.0.1a
 * @copyright Damascus. 2019 All rights reserved.
 * @license Confidential This file belongs to Damascus IT intellectual property,
 * any unauthorized distribution of this file will be punished by law.
 * @author Alonso Ruiz
 * @description Main generic repository interface
 */
export interface Repository<T> {
    GetAll(): T[];
    GetById(id: any): T;
    Create(model: T): void;
    Update(id: any): void;
    Delete(id: any): void;
}
