import React from 'react';
import styled from "styled-components";
//какие пропсы будет ждать компонент внизу
type WorkPropsType = {
    title: string;
    text: string;
    src: string;
}


// переносим Work в Works.tsx
 export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            {/*в эти пропсы приходит с верху title: string; и тд*/}
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link >demo</Link>
            <Link >code</Link>
        </StyledWork>
    );
};
// блок картинка текст и тд
 const StyledWork = styled.div`
 background-color: bisque;
     max-width: 540px;
     //для адоптива
     width: 100%;
 `
//картинка
const Image = styled.img`
    width: 100%;
    height: 268px;
    //чтобы все было красиво
    object-fit: cover;
`
const Link = styled.a`

`
const Title = styled.h3`

`
const Text = styled.p`

`


