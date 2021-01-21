import React, { useEffect } from "react";

const AboutPage = ({ history, location }) => {
  
  useEffect(() => {
    location.state && console.log(location.state.query);
  }, [location]);

  const onHandleGoBack = (e) => {
    // history.push("/admin");
    history.push({
      pathname: "/contacts",
      search: "?q=andrew",
      hash: "#treasure-island",
      state: { from: location.pathname, query: "andrew" },
      hello: "from about",
    });

    // history.goBack();
  };
  return (
    <>
      <h2>About</h2>
      <button onClick={onHandleGoBack}>Go contacts</button>
    </>
  );
};

export default AboutPage;
