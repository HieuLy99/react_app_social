import React from 'react'
import { styled } from 'styled-components';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Feed() {
    const RenderFeed = () => {
        return (
            <FeedItemWrapper>
                <FeedHeadAction>
                    <div>
                        avt
                    </div>
                    <div>
                        <BookmarkIcon></BookmarkIcon>
                        <MoreVertIcon></MoreVertIcon>
                    </div>
                </FeedHeadAction>
                <FeedContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In voluptatem veniam iste quia ipsum vel officia fugit debitis nobis vitae itaque, adipisci quae cupiditate rem nam recusandae sapiente error saepe.
                </FeedContent>
                <CmtSession>
                    <CmtInput type="text" placeholder='post cmt' />
                    <ListCmtWrapper> 
                        <div style={{
                            display:'flex',
                            alignItems:'center',
                        }}>
            All comments <KeyboardArrowDownIcon/>
                        </div>
                    <ListCmt className='cmt'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique atque odit soluta dolores! Magni consequuntur ad amet id doloremque, provident eos, iusto, fugiat adipisci laudantium voluptatem dolore voluptas. Voluptates, at!
                    </ListCmt>
                    </ListCmtWrapper>
                </CmtSession>
            </FeedItemWrapper>
        )
    }
    return (
        <FeedWrapper>
            {RenderFeed()}
            {RenderFeed()}
            {RenderFeed()}
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
    margin: 2em 3em 0em;
`;
const FeedHeadAction = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1em;
`;
const FeedContent = styled.div`

`;
const CmtSession = styled.div`

`;
const FeedItemWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1em;
    margin-bottom: 20px;
`;
const CmtInput = styled.input`
    width: 100%;
    margin:  10px 0;
`;
const ListCmt = styled.div`
    padding: 1em;
font-size: 13px;
`;

const ListCmtWrapper = styled.div`
display: flex;
flex-direction: column;
`;