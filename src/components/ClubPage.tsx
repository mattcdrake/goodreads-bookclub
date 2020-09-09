import React from "react";

interface ClubPageProps {
  name: string;
}

function ClubPage(props: ClubPageProps) {
  const pageStyles = "container p-8";
  return (
    <div className={pageStyles}>
      <div className={"text-5xl"}>{props.name}</div>
    </div>
  );
}

export default ClubPage;
