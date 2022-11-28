import { useState } from 'react';

export const usePagination = (
    initialPage,
    initialPageSize,
    loadMore,
    hasMore
) => {
    const [page, setPage] = useState(initialPage);
    const [pageSize, setPageSize] = useState(initialPageSize);

    const loadNextPage = () => {
        if (hasMore) {
            setPage(page + 1);
            loadMore();
        }
    };

    const loadPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return {
        page,
        pageSize,
        loadNextPage,
        loadPreviousPage,
    };
};
