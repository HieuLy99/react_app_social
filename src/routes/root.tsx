import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import RightContent from "../component/RightContent";
import { styled } from "styled-components";

export default function Root() {
  return (
    <>
      <div id="sidebar">
      <LeftMenuWrapper>
        <div>
          logo
        </div>
        <div>
          leftmenu
        </div>
      </LeftMenuWrapper>
      </div>
      <div id="detail">
        <div id="header">
          <Header></Header>
        </div>
        <ContentWrapper>
          <Outlet />
          <RightContent />
        </ContentWrapper>
      </div>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  height: 100vh;
  /* overflow: scroll; */
`;

const LeftMenuWrapper = styled.div`
display: flex;
flex-direction: column;
`;