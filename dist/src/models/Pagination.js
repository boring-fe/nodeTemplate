"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pagination {
    constructor(total, perPage = 10, currentPage = 0) {
        this.total = total;
        this.perPage = perPage;
        this.currentPage = currentPage;
        this.totalPages = Math.floor(total / perPage);
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=Pagination.js.map