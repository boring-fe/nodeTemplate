import { ApiError } from './ApiError';

export class ApiResponse<T = undefined> {
  public static createSuccess<T>(data: T | undefined): ApiResponse<T> {
    return new ApiResponse<T>(true, 200, data, undefined);
  }

  public static createError(status: number, err: ApiError[] | undefined): ApiResponse {
    return new ApiResponse<undefined>(false, status, undefined, err);
  }

  private constructor(
    public readonly success: boolean,
    public readonly status: number,
    public readonly data: T | undefined,
    public readonly errors: ApiError[] | undefined
  ) {
  }
}
