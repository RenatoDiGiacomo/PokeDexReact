import React from "react";
import { styled } from "styled-components";
import {  TestContainer, TestContent, TestItem } from "./Sliderstyle";
import MainContainerStyled from "../../Components/MainContainer/style";

const Home = () => {
  return (
    <MainContainerStyled>
      <TestContainer >
        <TestContent >
          <TestItem>
            <span class="h1">itgem1</span>
          </TestItem>
          <TestItem>
            <span class="h1">😊</span>
          </TestItem>
          <TestItem>
            <span class="h1">😀</span>
          </TestItem>
        </TestContent>
      </TestContainer>
    </MainContainerStyled>
  );
};

export default Home;
