import React from 'react'
import { styled } from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PersonPinIcon from '@mui/icons-material/PersonPin';
export default function Header() {
  return (
    <HeaderMenuWrapper>
      <LeftHeaderMenu>
        <div>
          <HomeIcon></HomeIcon> 
        </div>
        <ListItemMenu>
          <ItemMenu>item</ItemMenu>
          <ItemMenu>item</ItemMenu>
          <ItemMenu>item</ItemMenu>
          <ItemMenu>item</ItemMenu>
        </ListItemMenu>
      </LeftHeaderMenu>
      <RightHeaderMenu>
        <RightHeaderItem>
          <ChatIcon></ChatIcon>
        </RightHeaderItem>
        <RightHeaderItem>
          <CircleNotificationsIcon></CircleNotificationsIcon>
        </RightHeaderItem>
        <RightHeaderItem>
          <PersonPinIcon></PersonPinIcon> acc
        </RightHeaderItem>
      </RightHeaderMenu>
    </HeaderMenuWrapper>
  )
}
const ItemMenu = styled.div`
 margin: 0 1rem;
 padding: 0 16px;
`;
const HeaderMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;
const LeftHeaderMenu = styled.div`
  display: flex;
  width: 70%;
  padding: 1rem 1rem;
`;
const ListItemMenu = styled.div`
 display: flex;
 padding:0 1rem;
 margin: 0 2rem;
`;
const RightHeaderMenu = styled.div`
  display: flex;
  padding: 1rem 1rem;
`;
const RightHeaderItem = styled.div`
  display: flex;
  margin:0 1rem ;
`;
