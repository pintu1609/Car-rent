import React from 'react';


const ITEMS_PER_PAGE = 6;

const Page = ({ totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-between' style={{ height: '8vh', margin: '10px 20px', border: '1px solid black', borderRadius: '15px', background: '#f2f5fc', color: '#44455c' }}>
        <div>
          <p style={{ padding: 10 }}>{currentPage} from {totalPages}</p>
        </div>
        <div className='page' style={{ padding: '2px 10px' }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous" style={{margin:2}}>
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {/* Render page numbers dynamically */}
              {Array.from({ length: totalPages }, (_, index) => (
                <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index} style={{margin:2}}>
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="page-item">
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next" style={{margin:2}}>
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Page;
