import { Pagination } from './Pagination';

export class Data<T> {
  public constructor(
    public entries: Array<T>,
    public pagination: Pagination
  ) { }
}
