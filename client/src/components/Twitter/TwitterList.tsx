import React from "react";

import {} from "./styles";

interface Twitter {
  user: string;
  message: string;
  timestamp: string;
  matching_terms: string[];
}

interface Props {
  twitterData: Twitter[];
}

function TwitterList({ twitterData }: Props) {
  return <div></div>;
}

export default TwitterList;
