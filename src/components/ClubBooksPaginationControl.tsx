import React from "react";
import { Link } from "react-router-dom";

interface ClubBooksPaginationControlProps {
  clubId: number;
  currentPage: number;
  maxPage: number;
}

/**
 * Creates an array of numbers that is of length 1-5. This creates a sliding
 * window on the currentPage value. `undefined` represents the place to add an
 * ellipsis.
 *
 * Always show the first and last page, then show a 'window' of max-length 3.
 */
function getPageWindow(
  currentPage: number,
  maxPage: number
): (number | undefined)[] {
  let outputArray: (number | undefined)[] = [1];

  if (maxPage < 4) {
    for (let i = 2; i <= maxPage; ++i) {
      outputArray.push(i);
    }
    return outputArray;
  }

  // Check for a gap on the left side
  if (currentPage >= 4) {
    outputArray.push(undefined);
  }

  // Add window of numbers
  if (currentPage === 1) {
    outputArray.push(2);
  } else if (currentPage === 2) {
    outputArray.push(2, 3);
  } else if (currentPage >= maxPage - 1) {
    for (let i = currentPage - 1; i <= maxPage; ++i) {
      outputArray.push(i);
    }
    return outputArray;
  } else {
    for (let i = currentPage - 1; i < currentPage + 2; ++i) {
      outputArray.push(i);
    }
  }

  // Check for a gap on the right side
  if (currentPage < maxPage - 2) {
    outputArray.push(undefined);
  }
  outputArray.push(maxPage);

  return outputArray;
}

function ClubBooksPaginationControl(props: ClubBooksPaginationControlProps) {
  let prevPage = Math.max(props.currentPage - 1, 1);
  let nextPage = Math.min(props.currentPage + 1, props.maxPage);
  let anchorClasses =
    "block hover:bg-blue-600 border-r rounded border-gray-400 px-3 py-2";
  let ellipsisClasses = "block border-r rounded border-gray-400 px-3 py-2";

  return (
    <ul className="flex list-reset border rounded justify-center">
      <li key="back">
        <Link
          className={anchorClasses}
          to={`/clubs/${props.clubId}/page/${prevPage}`}
          replace
        >
          Previous
        </Link>
      </li>

      {getPageWindow(props.currentPage, props.maxPage).map((pageNum) => {
        let cssClasses = anchorClasses;
        if (pageNum === props.currentPage) {
          cssClasses += " bg-blue-600";
        }
        if (pageNum) {
          return (
            <li key={pageNum}>
              <Link
                className={cssClasses}
                to={`/clubs/${props.clubId}/page/${pageNum}`}
                replace
              >
                {pageNum}
              </Link>
            </li>
          );
        }
        return (
          <li key="ellipsis" className={ellipsisClasses}>
            ...
          </li>
        );
      })}

      <li key="forward">
        <Link
          className={anchorClasses}
          to={`/clubs/${props.clubId}/page/${nextPage}`}
          replace
        >
          Next
        </Link>
      </li>
    </ul>
  );
}

export { ClubBooksPaginationControl };
