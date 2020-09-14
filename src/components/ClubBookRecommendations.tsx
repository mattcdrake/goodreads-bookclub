import React from "react";

// Types
import { Book } from "../types/Book";

// Components
import { ClubBookList } from "./ClubBookList";
import { ClubBooksPaginationControl } from "./ClubBooksPaginationControl";

interface ClubBookRecommendationsProps {
  bookList?: Book[];
}

interface ClubBookRecommendationsState {
  bookListPageLength: number;
  bookListPageNumber: number;
  bookListMaxPage: number;
}

class ClubBookRecommendations extends React.Component<
  ClubBookRecommendationsProps,
  ClubBookRecommendationsState
> {
  constructor(props: ClubBookRecommendationsProps) {
    super(props);
    this.state = {
      bookListPageLength: 6,
      bookListPageNumber: 0,
      bookListMaxPage: props.bookList
        ? Math.ceil(props.bookList.length / 6)
        : 0,
    };
    this.getBookListSettings = this.getBookListSettings.bind(this);
  }

  componentDidMount() {
    this.getBookListSettings();
  }

  getBookListSettings() {
    let maxPage = this.props.bookList
      ? Math.ceil(this.props.bookList.length / 6)
      : 0;
    this.setState({
      bookListPageLength: 6,
      bookListPageNumber: 0,
      bookListMaxPage: maxPage,
    });
  }

  render() {
    return (
      <div className="border-solid border-2 border-gray-400 shadow rounded">
        {this.props.bookList && (
          <ClubBookList
            books={this.props.bookList}
            pageLength={this.state.bookListPageLength}
            pageNumber={this.state.bookListPageNumber}
          />
        )}
        <ClubBooksPaginationControl
          currentPage={this.state.bookListPageNumber}
          maxPage={this.state.bookListMaxPage}
        />
      </div>
    );
  }
}

export { ClubBookRecommendations };
