export class Pagination {
  public totalPages: number;
  public constructor(
    public total: number,
    public perPage: number = 10,
    public currentPage: number = 0
  ) {
    this.totalPages = Math.floor(total / perPage);
  }
}
