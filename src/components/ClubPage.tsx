import faker from "faker";
import moment from "moment";
import React from "react";

import { Book } from "../types/Book";
import { User } from "../types/User";

import { BookList } from "./BookList";
import { ClubParticipantsPanel } from "./ClubParticipantsPanel";

// Dev dependencies
import { spoofUser } from "../helpers/spoofUser";

interface ClubPageProps {
  id: number;
}

interface ClubInfo {
  id?: number;
  name?: string;
  reportDate?: Date;
  bookList?: Book[];
  organizer?: User;
  participants?: User[];
}

function getBookList(): Book[] {
  let output: Book[] = [];

  for (let i = 0; i < 6; ++i) {
    output.push({
      id: i,
      title: `The Way of Kings ${i}`,
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      coverPath: "http://covers.openlibrary.org/b/isbn/0765365279-M.jpg",
      altText: `Cover of Book #${i}`,
    });
  }

  return output;
}

// TODO Implement this after developing the API
function getClubInfo(id: number): ClubInfo {
  let output: ClubInfo = {
    id: id,
    name: "The First Bookclub",
    reportDate: new Date(),
    bookList: getBookList(),
    organizer: spoofUser(),
    participants: [],
  };

  for (let i = 0; i < 10; ++i) {
    if (output.participants) {
      output.participants.push(spoofUser());
    }
  }

  return output;
}

function ClubPage(props: ClubPageProps) {
  let clubInfo: ClubInfo = getClubInfo(props.id);
  const formattedDate = moment(clubInfo.reportDate);
  const pageStyles = "container mx-auto p-8";

  return (
    <div className={pageStyles}>
      <div className="text-5xl">{clubInfo.name}</div>
      <div className="italic">
        Report last generated on {formattedDate.format("MMM Do YYYY")}
      </div>
      <div className="text-3xl my-4">Good Choices</div>
      <div className="flex justify-around">
        {clubInfo.bookList && <BookList books={clubInfo.bookList} />}
        <ClubParticipantsPanel
          organizer={clubInfo.organizer}
          participants={clubInfo.participants}
        />
      </div>
    </div>
  );
}

export { ClubPage };
