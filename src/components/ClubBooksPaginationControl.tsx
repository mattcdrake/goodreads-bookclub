import React from "react";

// Page numbers are zero-indexed.
interface ClubBooksPaginationControlProps {
  changePage: (pageNum: number) => void;
  currentPage: number;
  decreasePage: () => void;
  increasePage: () => void;
  maxPage: number;
}

/**
 * Creates an array of numbers that is of length 1-5. This creates a sliding
 * window on the currentPage value. `undefined` represents the place to add an
 * ellipsis.
 *
 * Always show the first and last page, then show a 'window' of max-length 3.
 *
 * CONVERTS FROM 0-INDEX TO 1-INDEX.
 */
function getPageWindow(
  currentPage: number,
  maxPage: number
): (number | undefined)[] {
  let currentPageOne = currentPage + 1;
  let maxPageOne = maxPage + 1;
  let outputArray: (number | undefined)[] = [1];

  if (maxPageOne < 4) {
    for (let i = 2; i <= maxPageOne; ++i) {
      outputArray.push(i);
    }
    return outputArray;
  }

  // Check for a gap on the left side
  if (currentPageOne >= 4) {
    outputArray.push(undefined);
  }

  // Add window of numbers
  if (currentPageOne === 1) {
    outputArray.push(2);
  } else if (currentPageOne === 2) {
    outputArray.push(2, 3);
  } else if (currentPageOne >= maxPageOne - 1) {
    for (let i = currentPageOne - 1; i < maxPageOne; ++i) {
      outputArray.push(i);
    }
    return outputArray;
  } else {
    for (let i = currentPageOne - 1; i < currentPageOne + 2; ++i) {
      outputArray.push(i);
    }
  }

  // Check for a gap on the right side
  if (currentPageOne < maxPageOne - 2) {
    outputArray.push(undefined);
  }
  outputArray.push(maxPageOne);

  return outputArray;
}

function ClubBooksPaginationControl(props: ClubBooksPaginationControlProps) {
  let anchorClasses =
    "block hover:bg-blue-600 border-r rounded border-gray-400 px-3 py-2";

  return (
    <ul className="flex list-reset border rounded justify-center">
      <li key="back">
        <a className={anchorClasses} onClick={props.decreasePage} href="#">
          Previous
        </a>
      </li>

      {getPageWindow(props.currentPage, props.maxPage).map((pageNum) => {
        if (pageNum) {
          return (
            <li
              key={pageNum}
              className={anchorClasses}
              //href={`/page/${pageNum}`}
              onClick={() => props.changePage(pageNum - 1)}
            >
              {pageNum}
            </li>
          );
        }
        return <li key="ellipsis">...</li>;
      })}

      <li key="forward">
        <a className={anchorClasses} onClick={props.increasePage} href="#">
          Next
        </a>
      </li>
    </ul>
  );
}

export { ClubBooksPaginationControl };
