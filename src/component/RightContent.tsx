import React from 'react'
import { styled } from 'styled-components'

export default function RightContent() {
    return (
        <RightContentWrapper>
            {TrendingContainer()}
            {CommunityContainer()}
            {ListFriendContainer()}
        </RightContentWrapper>
    )
}

export const TrendingContainer = () => {
    return (
        <TrendingWrapper>TrendingContainer</TrendingWrapper>
    )
}

export const CommunityContainer = () => {
    return (<CommunityWrapper>CommunityContainer</CommunityWrapper>)
}

export const ListFriendContainer = () => {
    return (<ListFriendWrapper>ListFriendContainer</ListFriendWrapper>)
}

const TrendingWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 15em;
    margin-bottom: 20px;
    padding: 1em;
`;
const CommunityWrapper = styled.div`
border: 1px solid #ccc;
    border-radius: 5px;
    height: 15em;
    margin-bottom: 20px;
`;
const ListFriendWrapper = styled.div`
border: 1px solid #ccc;
    border-radius: 5px;
    height: 15em;
    margin-bottom: 20px;
    padding: 1em;
`;
const RightContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 2rem 3rem 0rem 1rem;
`;
