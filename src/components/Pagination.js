import { useMemo } from "react";

const Pagination = ({ meta, paginationFn }) => {
  const pages = useMemo(() => {
    return Array.from({ length: meta.last_page }, (_, i) => i + 1);
  }, [meta]);

  return (
    <div className="box-footer">
      <div className="items-center sm:flex">
        <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
          Showing {meta.from} to {meta.to} of {meta.total} entries
          <i className="font-semibold bi bi-arrow-right ms-2"></i>
        </div>
        <div className="ms-auto">
          <nav aria-label="Page navigation" className="pagination-style-4">
            <ul className="flex gap-1 mb-0 ti-pagination">
              <li
                className={`page-item ${meta.current_page <= 1 && "disabled"}`}
              >
                <button
                  className="page-link"
                  disabled={meta.current_page <= 1}
                  onClick={() => {
                    paginationFn({ page: meta.current_page - 1 });
                  }}
                >
                  Prev
                </button>
              </li>
              {pages.map((page) => (
                <li key={page} className={`page-item `}>
                  <button
                    className={`page-link !text-primary ${
                      meta.current_page === page && "active"
                    }`}
                    onClick={() => {
                      paginationFn({ page });
                    }}
                  >
                    {page}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  meta.current_page <= meta.last_page && "disabled"
                }`}
              >
                <button
                  className="page-link !text-primary"
                  disabled={meta.current_page >= meta.last_page}
                  onClick={() => {
                    paginationFn({ page: meta.current_page + 1 });
                  }}
                >
                  next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
