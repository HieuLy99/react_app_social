import React, { useState } from 'react'
import { styled } from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function RightContent() {
    return (
        <RightContentWrapper>
            <TrendingContainer />
            <CommunityContainer />
            <ListFriendContainer />
        </RightContentWrapper>
    )
}

export const TrendingContainer = () => {
    const [dropDown, setDropDown] = useState<boolean>(false)
    const handleDropDown = () => {
        setDropDown(!dropDown)
    }

    return (
        <TrendingWrapper $dropDown={dropDown}>
            <TrendingHeader onClick={() => handleDropDown()}>
                TrendingContainer {dropDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </TrendingHeader>
        </TrendingWrapper>
    )
}

export const CommunityContainer = () => {
    return (
        <CommunityWrapper>
            <ImgCommunity></ImgCommunity>
            <CommunityContainerWrapper>
                <NameCommunity>NameCommunity</NameCommunity>
                <AboutCommunity>AboutCommunity</AboutCommunity>
                <ContactComunity>Join Community</ContactComunity>
            </CommunityContainerWrapper>
        </CommunityWrapper>
    )
}

export const ListFriendContainer = () => {
    const [dropDownListFriend, setDropDownListFriend] = useState<boolean>(false)
    const handleDropDown = () => {
        setDropDownListFriend(!dropDownListFriend)
    }
    return (
        <ListFriendWrapper $dropDownListFriend={dropDownListFriend}>
            <TrendingListFriend onClick={() => handleDropDown()}>
                ListFriendContainer{dropDownListFriend ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </TrendingListFriend>
        </ListFriendWrapper>
    )
}

// const ImgCommunity = styled.img``;
const ImgCommunity = styled.div`
    height: 70%;
    background-color: black;
`;
const CommunityContainerWrapper = styled.div`
    padding: 10px;
`;
const NameCommunity = styled.div`
    margin-bottom: 5px;
`;
const AboutCommunity = styled.div`
    margin-bottom: 5px;
`;
const ContactComunity = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
`;
const TrendingWrapper = styled.div<{ $dropDown?: boolean; }>`
    border: 1px solid #ccc;
    border-radius: 5px;
    height: ${props => props.$dropDown ? '4sem' : '15em'};
    margin-bottom: 20px;
    padding: 1em;
`;
const CommunityWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 22em;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;
const ListFriendWrapper = styled.div<{ $dropDownListFriend: boolean }>`
    border: 1px solid #ccc;
    border-radius: 5px;
    height: ${props => props.$dropDownListFriend ? '4em' : '15em'};
    margin-bottom: 20px;
    padding: 1em;
`;
const RightContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding: 2rem 2rem 0rem 1rem;
`;
const TrendingHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TrendingListFriend = styled.div`
    display: flex;
    justify-content: space-between;
`;