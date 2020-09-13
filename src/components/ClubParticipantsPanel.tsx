import faker from "faker";
import React from "react";

import { User } from "../types/User";

interface ClubParticipantsPanelProps {
  organizer: User;
  participants: User[];
}

function ClubParticipantsPanel(props: ClubParticipantsPanelProps) {
  return (
    <div className="flex flex-col border-solid border-2 border-gray-600 shadow rounded w-64">
      <div className="text-2xl mx-auto mt-4">Group Members</div>
      <img
        className="w-32 h-32 mx-auto mt-4 mb-2 rounded-full"
        src={faker.image.avatar()}
        alt="test"
      />
      <div className="text-1xl mx-auto">
        {faker.name.firstName() + " " + faker.name.lastName()}, Organizer
      </div>
    </div>
  );
}

function NonOrganizerParticipantsPanel(props) {
  return <div></div>;
}

export { ClubParticipantsPanel };
