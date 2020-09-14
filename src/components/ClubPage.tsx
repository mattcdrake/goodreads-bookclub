import faker from "faker";
import React from "react";

import { Book } from "../types/Book";
import { User } from "../types/User";

import { ClubBookRecommendations } from "./ClubBookRecommendations";
import { ClubParticipantsPanel } from "./ClubParticipantsPanel";
import { ClubPageFrontMatter } from "./ClubPageFrontMatter";

// Dev dependencies
import { spoofUser } from "../helpers/spoofUser";

interface ClubPageProps {
  id: number;
}

interface ClubInfo {
  id: number;
  name: string;
  reportDate?: Date;
  bookList?: Book[];
  organizer: User;
  participants?: User[];
}

function getBookList(): Book[] {
  let bookISBNs = [
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
  ];

  let output: Book[] = [];

  for (let i = 0; i < bookISBNs.length; ++i) {
    output.push({
      isbn13: bookISBNs[i],
      title: `Title Placeholder #${i}`,
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
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

  return (
    <div className="container mx-auto p-8">
      <ClubPageFrontMatter
        name={clubInfo.name}
        reportDate={clubInfo.reportDate}
      />
      <div className="flex justify-around py-4">
        <ClubBookRecommendations bookList={clubInfo.bookList} />
        <ClubParticipantsPanel
          organizer={clubInfo.organizer}
          participants={clubInfo.participants}
        />
      </div>
    </div>
  );
}

export { ClubPage };
