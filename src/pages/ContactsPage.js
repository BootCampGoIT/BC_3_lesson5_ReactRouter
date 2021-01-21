import React from "react";

const ContactsPage = ({ history, location }) => {

  const onHandleGoBack = () => {
    history.push({
        pathname: "/about",
        state: {query: location.state.query},
        // query: location.state.query
    });
  };
  return (
    <>
      <h2>Contacts</h2>
      <button onClick={onHandleGoBack}>Go back</button>
    </>
  );
};

export default ContactsPage;
