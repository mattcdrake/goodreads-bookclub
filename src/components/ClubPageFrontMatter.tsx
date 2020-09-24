import moment from "moment";
import React from "react";

interface ClubPageFrontMatterProps {
  name: string;
  reportDate?: Date;
}

function ClubPageFrontMatter(props: ClubPageFrontMatterProps) {
  let reportDateString = "Report hasn't been generated yet.";

  if (props.reportDate) {
    reportDateString = `Report last generated on ${moment(
      props.reportDate
    ).format("MMM Do YYYY")}`;
  }

  return (
    <div>
      <div className="text-5xl">{props.name}</div>
      <div className="italic">{reportDateString}</div>
    </div>
  );
}

export { ClubPageFrontMatter };
