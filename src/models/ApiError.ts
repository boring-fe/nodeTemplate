export class ApiError {
  public constructor(
    public id: string,
    public msg: string,
    public param?: string
  ) {
  }
}
