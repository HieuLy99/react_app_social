/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { styled } from 'styled-components';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { CMButton } from '../common/commonBtn';
import { useNavigate } from "react-router-dom";
export default function Post() {
    const navigate = useNavigate();
    const handleDraft = () => {
        navigate('/draft-post');
    }
    return (
        <PostWrapper>
            <InputWrapper type="text" />
            <ActionPostWrapper>
                <ActionPostSession>
                    <LocalSeeIcon></LocalSeeIcon>
                    <PanoramaIcon></PanoramaIcon>
                    <AttachFileIcon></AttachFileIcon>
                    <LocationOnIcon></LocationOnIcon>
                    <EmojiEmotionsIcon></EmojiEmotionsIcon>
                </ActionPostSession>
                <PostSession>
                    <CMButton text='Draft' func={handleDraft}/>
                    <CMButton text='Post' />
                </PostSession>
            </ActionPostWrapper>
        </PostWrapper>
    )
}
const PostSession = styled.div`
    display: flex;
    flex-direction: row;
`;
const ActionPostSession = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`;
const ActionPostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
const InputWrapper = styled.input`
    width: 100%;
    margin-bottom: 1em;
`;
const PostWrapper = styled.div`
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 1em;
    margin:  0 3em;
`;
