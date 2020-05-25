import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/fontawesome-free-solid";

const Header = () => {
  const Head = styled.div`
    background-color: rgb(91, 51, 236);
    color: white;
    font-size: 18px;
    padding: 30px 0;
    padding-left: 20px;
  `;

  return (
    <Head>
      <Typography gutterBottom variant="h5" component="h2">
        <FontAwesomeIcon icon={faNewspaper} /> NewsFeed
      </Typography>
    </Head>
  );
};

export default Header;
