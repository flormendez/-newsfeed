import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const categories = [
  {
    id: "0",
    name: "Home",
    className: "hom",
  },
  {
    id: "1",
    name: "Deportes",
    className: "deo",
  },
  {
    id: "2",
    name: "Política",
    className: "pol",
  },
  {
    id: "3",
    name: "Internacional",
    className: "int",
  },
  {
    id: "4",
    name: "Tecnología",
    className: "tec",
  },
  {
    id: "5",
    name: "Espectáculos",
    className: "esp",
  },
];
const Nav = () => {
  const Nav = styled.div`
    height: 70px;
    padding: 10px;
  `;
  const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    text-decoration: none;

    justify-content: space-between;
  `;
  const NavItem = styled.li`
    color: rgb(91, 51, 236);
    text-decoration: none;
    font-size: 18px;
    transition: 0.2s all;
  `;
  return (
    <div>
      {" "}
      <Nav>
        <NavBar>
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Typography gutterBottom variant="h5" component="h2">
                <NavItem
                  className={`${category.name}`}
                  key={category.id}
                >
                  {" "}
                  {category.name}
                </NavItem>
              </Typography>
            </Link>
          ))}
        </NavBar>
      </Nav>
    </div>
  );
};

export default Nav;
