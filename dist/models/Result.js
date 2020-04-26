"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(success, status, data, errors) {
        this.success = success;
        this.status = status;
        this.data = data;
        this.errors = errors;
    }
    static createSuccess(data) {
        return new ApiResponse(true, 200, data, undefined);
    }
    static createError(status, err) {
        return new ApiResponse(false, status, undefined, err);
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=Result.js.map