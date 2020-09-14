import React from "react";

// Page numbers are zero-indexed.
interface ClubBooksPaginationControlProps {
  currentPage: number;
  maxPage: number;
}

/**
 * Creates an array of numbers that is of length 0-3. This creates a sliding
 * window on the currentPage value.
 */
function getPageWindow(currentPage: number, maxPage: number): number[] {
  if (currentPage <= 0 || currentPage > maxPage) {
    return [0];
  }
  if (currentPage === 1) {
    return [0, 1];
  }
  if (currentPage === 2) {
    return [0, 1, 2];
  }
  if (currentPage === maxPage) {
    return [currentPage - 2, currentPage - 1, currentPage];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
}

function ClubBooksPaginationControl(props: ClubBooksPaginationControlProps) {
  let anchorClasses =
    "block hover:bg-blue-500 border-r border-gray-400 px-3 py-2";

  return (
    <ul className="flex list-reset border rounded justify-center">
      <li>
        <a className={anchorClasses} href="#">
          Previous
        </a>
      </li>
      <li>
        <a className={anchorClasses} href="#">
          1
        </a>
      </li>
      <li>
        <a className={anchorClasses} href="#">
          2
        </a>
      </li>
      <li>
        <a className={anchorClasses} href="#">
          3
        </a>
      </li>
      <li>
        <a className={anchorClasses} href="#">
          Next
        </a>
      </li>
    </ul>
  );
}

export { ClubBooksPaginationControl };
