import { useState } from 'react';

export const usePagination = (initialPage, pageSize, loadMore, total) => {
    const [page, setPage] = useState(initialPage);

    const canLoadMore = page * pageSize < total;
    const loadNextPage = () => {
        if (canLoadMore) {
            setPage(page + 1);
            loadMore();
        }
    };

    const loadPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const indexOfLastItem = page * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;

    return {
        page,
        pageSize,
        loadNextPage,
        loadPreviousPage,
        indexOfLastItem,
        indexOfFirstItem,
        canLoadMore,
    };
};
