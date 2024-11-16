import { useEffect, useState } from "react";

export default function Page({ currentPage, totalPages, onPageChange }) {


    const [Starindex, setStarindex] = useState(0);
    const [Endindex, setEndindex] = useState(totalPages);

    console.log(Starindex, Endindex);


    useEffect(() => {

        if (totalPages > 10) {

            if (currentPage > 4 && currentPage < totalPages - 4) {

                setStarindex(currentPage - 2);
                setEndindex(currentPage + 3 <totalPages - 4 ? currentPage + 3 : totalPages - 4);
            }
            else if (currentPage >= totalPages - 4) {

                setStarindex(totalPages - 8);
                setEndindex(totalPages - 4);
            }
            else if (currentPage <= 4) {

                setStarindex(1);
                setEndindex(6);

            }
        }
    }, [currentPage])

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
                        <a
                            className="page-link"
                            aria-label="Previous"
                            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {Array.from({ length: totalPages }).slice(Starindex, Endindex).map((_, index) => {

                        const pageNumber = Starindex === 0 ? index + 1 : Starindex + index;

                        return (
                            <li className="page-item" key={index}>
                                <a
                                    className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
                                    onClick={() => onPageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </a>
                            </li>
                        );
                    })}

                    {totalPages > 10 && Endindex < totalPages - 4 && (
                        <>
                            <li className="page-item" key="null">
                                <a className="page-link">
                                    ....
                                </a>
                            </li>


                        </>
                    )}


                    {totalPages > 10 &&

                        Array.from({ length: totalPages + 1 }).slice(totalPages - 4, totalPages + 1).map((_, index) => (
                            <li className="page-item" key={index + (totalPages - 4)}>
                                <a
                                    className={`page-link ${currentPage === index + (totalPages - 4) ? 'active' : ''}`}
                                    onClick={() => onPageChange(index + (totalPages - 4))}
                                >
                                    {index + (totalPages - 4)}

                                </a>
                            </li>
                        ))
                    }

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                        <a
                            className="page-link"
                            aria-label="Next"
                            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

