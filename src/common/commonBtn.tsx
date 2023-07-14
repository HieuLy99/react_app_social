import { FC } from "react";
import { styled } from "styled-components";
export interface CM_Button_itf {
    text: string;
    func?: () => void;
    color?: string;
    style?: any
}
export const CMButton: FC<CM_Button_itf> = ({ text, func, color , style }) => {
    return <ButtonWrapper $color={color} onClick={func} style={style}>
        {text}
    </ButtonWrapper>
}

const ButtonWrapper = styled.div<{ $color?: string }>`
    border: 1px solid #ccc;
    padding: 8px 20px;
    border-radius: 5px;
    margin: 0 0 0 10px;
    color: ${props => props.$color};
    display: flex;
    align-items: center;
    cursor: pointer;
`;