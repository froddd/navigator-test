import React from "react";

const NeedsOnline = () => (
  <div data-testid="needs-online">
    {!navigator.onLine && "Offline "}
    {navigator.onLine === true && "Online "}
  </div>
);

export default NeedsOnline;
