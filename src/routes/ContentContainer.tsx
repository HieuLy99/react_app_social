import React from 'react'
import { styled } from 'styled-components';
import Post from '../component/Post';
import Feed from '../component/Feed';
import '../index.css'
export default function ContentContainer() {
  return (
    <ContentWrapper id='style-2' className='scrollbar'>
      <Post></Post>
      <Feed/>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 2rem 4rem 0rem 4rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
