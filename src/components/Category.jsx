import React from "react";
import { connect } from "react-redux";
import ArticleCard from "./ArticleCard";
import styled from "styled-components";

// import { Switch, Route } from "react-router-dom";
// import Nav from "../containers/Nav";

const Category = ({ newsCategory = [] }, props) => {
  const Column = styled.section`
    float: left;
    width: 25%;
  `;

  const Container = styled.section`
    margin: 2em;
  `;

  return (
    <div>
      {console.log("CATEGORY:", newsCategory)}
      {/* <Switch>
        <Route exact path="/category" component={Nav} />
        <Route
          path="/category/:categoryId"
          render={({ match }) => {
            // const news = newsCategory.find(a => a.bayes_category_id === match.params.id); 
            

            return            (   */}
      {/* {} newsCategory.filter((oneNew) => oneNew.bayes_category_id === match.params.id).map((oneNew) => ( */}

      {newsCategory.map((oneNew) => (
        <div key={oneNew.id}>
          <Container>
            <Column>
              <ArticleCard
                title={oneNew.title}
                image={oneNew.img_url}
                linkUrl={oneNew.url}
                source={oneNew.source_name}
                key={oneNew.id}
                category={oneNew}
              />
            </Column>
          </Container>
        </div>
      ))}
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log(state);

  return {
    newsCategory: state.newsReducer.newsCategory,
  };
};

export default connect(mapStatetoProps, {})(Category);
