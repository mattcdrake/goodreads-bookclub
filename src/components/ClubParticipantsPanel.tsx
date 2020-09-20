import React from "react";

import { User } from "../types/User";

// Dev dependencies
import { spoofUser } from "../helpers/spoofUser";

interface ClubParticipantsPanelState {
  organizer: User;
  participants?: User[];
}

interface ClubParticipantsPanelProps {
  clubId: number;
}

class ClubParticipantsPanel extends React.Component<
  ClubParticipantsPanelProps,
  ClubParticipantsPanelState
> {
  constructor(props: ClubParticipantsPanelProps) {
    super(props);
    this.state = { organizer: spoofUser(), participants: [] };
  }

  componentDidMount() {
    let userArray: User[] = [];

    for (let i = 0; i < 15; ++i) {
      userArray.push(spoofUser());
    }

    this.setState({ participants: userArray });
  }

  render() {
    return (
      <div className="flex flex-col border-solid border-2 border-gray-400 shadow rounded w-64">
        <div className="text-2xl mx-auto mt-4">Group Members</div>
        <img
          className="w-32 h-32 mx-auto mt-4 mb-2 rounded-full"
          src={this.state.organizer.avatarURL}
          alt="test"
        />
        <div className="text-1xl mx-auto">
          {this.state.organizer.name}, Organizer
        </div>
      </div>
    );
  }
}

export { ClubParticipantsPanel };
