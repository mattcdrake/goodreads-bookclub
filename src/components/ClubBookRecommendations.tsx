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
    this.changePage = this.changePage.bind(this);
    this.decreasePage = this.decreasePage.bind(this);
    this.increasePage = this.increasePage.bind(this);
    this.getBookListSettings = this.getBookListSettings.bind(this);
  }

  componentDidMount() {
    this.getBookListSettings();
  }

  changePage(newPage: number) {
    if (newPage <= 0) {
      this.setState({ bookListPageNumber: 0 });
    } else if (newPage > this.state.bookListMaxPage) {
      this.setState({ bookListPageNumber: this.state.bookListMaxPage });
    } else {
      this.setState({ bookListPageNumber: newPage });
    }
  }

  decreasePage() {
    let newPageNum = Math.max(this.state.bookListPageNumber - 1, 0);
    this.setState({
      bookListPageNumber: newPageNum,
    });
  }

  increasePage() {
    let newPageNum = Math.min(
      this.state.bookListPageNumber + 1,
      this.state.bookListMaxPage
    );
    this.setState({
      bookListPageNumber: newPageNum,
    });
  }

  getBookListSettings() {
    let maxPage = 0;
    if (this.props.bookList) {
      let len = this.props.bookList.length;
      maxPage = Math.ceil(len / this.state.bookListPageLength) - 1;
    }
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
          changePage={this.changePage}
          currentPage={this.state.bookListPageNumber}
          decreasePage={this.decreasePage}
          increasePage={this.increasePage}
          maxPage={this.state.bookListMaxPage}
        />
      </div>
    );
  }
}

export { ClubBookRecommendations };
