import faker from "faker";
import React from "react";

import { Book } from "../types/Book";
import { ReportBook } from "../types/ReportBook";
import { User } from "../types/User";

import { ClubBookRecommendations } from "./ClubBookRecommendations";
import { ClubParticipantsPanel } from "./ClubParticipantsPanel";
import { ClubAdminPanel } from "./ClubAdminPanel";
import { ClubPageFrontMatter } from "./ClubPageFrontMatter";

// Dev dependencies
import { spoofUser } from "../helpers/spoofUser";

interface ClubPageProps {
  match: { params: { clubId: string; pageNum?: string } };
}

interface ClubPageState {
  id: string;
  name: string;
  reportDate?: Date;
  bookList?: ReportBook[];
  organizer: User;
  participants: User[];
}

class ClubPage extends React.Component<ClubPageProps, ClubPageState> {
  constructor(props: ClubPageProps) {
    super(props);
    let name = "The First Bookclub";
    let reportDate = new Date();
    let bookList = this.getBookList();
    let organizer = spoofUser();
    let participants: User[] = [];

    for (let i = 0; i < 17; ++i) {
      participants.push(spoofUser());
    }

    this.state = {
      id: props.match.params.clubId,
      name,
      reportDate,
      bookList,
      organizer,
      participants,
    };
  }

  getBookList(): ReportBook[] {
    let bookISBNs = [
      "9780134093413",
      "9780134093413",
      "9780134444321",
      "9780134580999",
      "9780321199911",
      "9780321775658",
      "9780328925124",
      "9780500841150",
      "9781259755330",
      "9781285741550",
      "9781400079155",
      "9780133486872",
      "9780133871319",
      "9780134419695",
      "9780134462455",
      "9780134444321",
      "9780134580999",
      "9780321199911",
      "9780321775658",
      "9780328925124",
      "9780500841150",
      "9781259755330",
      "9781285741550",
      "9781400079155",
      "9780133486872",
      "9780133871319",
      "9780134419695",
      "9780134462455",
    ];
    let output: ReportBook[] = [];

    for (let i = 0; i < bookISBNs.length; ++i) {
      output.push({
        book: {
          isbn13: bookISBNs[i],
          title: `Title Placeholder
  #${i}`,
          author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        },
        matches: Math.floor(Math.random() * 15) + 1,
      });
    }

    return output;
  }

  render() {
    if (!this.state.id) {
      return <div>There isn't a club with that ID.</div>;
    }
    let pageNum;
    if (!this.props.match.params.pageNum) {
      pageNum = 1;
    } else {
      pageNum = parseInt(this.props.match.params.pageNum);
    }

    return (
      <div className="container mx-auto p-8">
        <ClubPageFrontMatter
          name={this.state.name}
          reportDate={this.state.reportDate}
        />
        <div className="flex justify-around py-4">
          <ClubBookRecommendations
            bookList={this.state.bookList}
            clubId={this.state.id}
            pageNum={pageNum}
          />
          <div className="space-y-4">
            <ClubParticipantsPanel
              clubId={this.state.id}
              organizer={this.state.organizer}
              participants={this.state.participants}
            />
            <ClubAdminPanel />
          </div>
        </div>
      </div>
    );
  }
}

export { ClubPage };
