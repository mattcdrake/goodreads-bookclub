import moment from "moment";
import React from "react";

interface ClubReportFrontMatterProps {
  name: string;
  reportDate?: Date;
}

function ClubReportFrontMatter(props: ClubReportFrontMatterProps) {
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

export { ClubReportFrontMatter };
