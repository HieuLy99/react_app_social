import React from 'react'
import { styled } from 'styled-components';

export default function Draft() {
  return (
    <DraftWrapper>
        <DraftContentEditer>DraftContentEditer</DraftContentEditer>
    </DraftWrapper>
  )
}
const DraftWrapper = styled.div`
    display: flex;
    width:80%;
    padding: 2rem 4rem 0rem 4rem;
`;

const DraftContentEditer = styled.div`
    border: 1px solid #ccc;
    width: 100%;
    height: 85vh;
`;