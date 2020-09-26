import React from "react";

// Types
import { ReportBook } from "../types/ReportBook";

// Components
import { ClubBookList } from "./ClubBookList";
import { ClubBooksPaginationControl } from "./ClubBooksPaginationControl";

interface ClubBookRecommendationsProps {
  bookList?: ReportBook[];
  clubId: string;
  pageNum: number;
}

interface ClubBookRecommendationsState {
  bookListMaxPage: number;
}

class ClubBookRecommendations extends React.Component<
  ClubBookRecommendationsProps,
  ClubBookRecommendationsState
> {
  constructor(props: ClubBookRecommendationsProps) {
    super(props);
    this.state = {
      bookListMaxPage: props.bookList
        ? Math.ceil(props.bookList.length / 6)
        : 1,
    };
  }

  render() {
    let pageNumChecked: number;

    if (
      isNaN(this.props.pageNum) ||
      this.props.pageNum > this.state.bookListMaxPage ||
      this.props.pageNum < 1
    ) {
      pageNumChecked = 1;
    } else {
      pageNumChecked = this.props.pageNum;
    }

    return (
      <div className="h-full border-solid border-2 border-gray-400 shadow rounded">
        {this.props.bookList && (
          <ClubBookList
            reportBooks={this.props.bookList}
            pageNumber={pageNumChecked}
          />
        )}
        <ClubBooksPaginationControl
          clubId={this.props.clubId}
          currentPage={pageNumChecked}
          maxPage={this.state.bookListMaxPage}
        />
      </div>
    );
  }
}

export { ClubBookRecommendations };
