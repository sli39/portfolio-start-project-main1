import styled from "styled-components";
// универсальный компонент для флекса

// типы для пропсов
type FlexWrapperPropsType = {
    // напровление оси
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string
}
// нужно указать какого типа пропсы придут styled.div<>
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
display: flex;
    //значегия будут идти из пропсов или по умолчанию
flex-direction: ${props=>props.direction || "row" };
   justify-content: ${props=>props.justify || "flex-start"}; 
align-items: ${props=>props.align || "stretch"};
flex-wrap: ${props=>props.wrap || "nowrap"};    
    
`








