

const Pagination = () => {
    return (
        <div className="box-footer">
        <div className="sm:flex items-center">
          <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
            Showing 5 Entries
            <i className="bi bi-arrow-right ms-2 font-semibold"></i>
          </div>
          <div className="ms-auto">
            <nav
              aria-label="Page navigation"
              className="pagination-style-4"
            >
              <ul className="ti-pagination mb-0">
                <li className="page-item disabled">
                  <a className="page-link" href="javascript:void(0);">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link active"
                    href="javascript:void(0);"
                  >
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="javascript:void(0);">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link !text-primary"
                    href="javascript:void(0);"
                  >
                    next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
};

export default Pagination;