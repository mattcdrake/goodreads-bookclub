import React from "react";

import { User } from "../types/User";

interface ClubParticipantsPanelProps {
  clubId: string;
  organizer: User;
  participants?: User[];
}

function ClubParticipantsPanel(props: ClubParticipantsPanelProps) {
  return (
    <div className="p-4 flex-col border-solid border-2 border-gray-400 shadow rounded w-64">
      <div className="text-2xl mx-auto">Group Members</div>
      <img
        className="w-32 h-32 mx-auto mt-4 mb-2 rounded-full"
        src={props.organizer.avatarURL}
        alt="test"
      />
      <div className="text-1xl mx-auto">{props.organizer.name}, Organizer</div>
      <ul className="grid grid-cols-4 gap-2 mt-4">
        {props.participants &&
          props.participants.map((user) => {
            return (
              <li key={user.id.toString()} className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.avatarURL}
                  alt={user.name}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export { ClubParticipantsPanel };
