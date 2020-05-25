import React from "react";

import { connect } from "react-redux";

import ArticleCard from "./ArticleCard";

import styled from "styled-components";

const Home = ({ news = [] }) => {
  const Column = styled.section`
    float: left;
    width: 25%;
  `;

  const Container = styled.section`
    margin: 2em;
  `;
  return (
    (
      <Container>
        <div>
          {news.map((oneNew) => (
            <div key={oneNew.id}>
              <Column>
                <ArticleCard
                  title={oneNew.title}
                  image={oneNew.img_url}
                  linkUrl={oneNew.url}
                  source={oneNew.source_name}
                  key={oneNew.id}
                />
              </Column>
            </div>
          ))}
        </div>
      </Container>
    )
  );
};

const mapStatetoProps = (state) => {
  console.log(state);

  return {
    news: state.newsReducer.news,
  };
};

export default connect(mapStatetoProps, {})(Home);
