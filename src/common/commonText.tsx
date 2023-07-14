import { FC } from "react";
import { styled } from "styled-components";
export interface CM_Title_itf {
    content: string;
    color?:string;
    size?:any ;
    bold?: boolean;
}
export const CMTitle: FC<CM_Title_itf> = ({content, color, size, bold }) => {
    return (
        <CMTitleWrapper $color={color} $size={size} $bold={bold}>
            {content}
        </CMTitleWrapper>
    )
}
const CMTitleWrapper = styled.div<{$color?:string;$size?:any;$bold?:boolean}>`
       color: ${props => props.$color};
       font-size: ${props => props.$size};
       font-weight: ${props => props.$bold? 'bold' : 'normal'};
`;