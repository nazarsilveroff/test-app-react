import React from "react";
const ClientsList = ({ clients }) => {
  return (
    <ul className="clientsList">
      {clients.map((clients) => (
        <li key={clients.id}>{clients.name}</li>
      ))}
    </ul>
  );
};

export default ClientsList;
