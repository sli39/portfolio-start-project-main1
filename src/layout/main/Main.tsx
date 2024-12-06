// тело 1 страница
import React from 'react';
import styled from "styled-components";
// путь к картинки сохраняем в переменную и потом использовать эту переменную в отребуте ниже <Photo src=""
import photo from '../../assets/imades/foto01.jpg'
import {FlexWrapper} from "../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            {/*пищем сами текст и фото позиция стала по вертикали */}
            <FlexWrapper align={"center"} justify={"space-around"}>
                {/*эту див мы засунули в FlexWrapper ее создали отдельно. Надписи и фото стали в 1 рад*/}
                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyablo</h2>
                    <h1>A Web Developer. </h1>
                </div>
                {/* вместо <img src="" alt=""/ фото на странице>*/ }
                <Photo src={photo} alt=""/>
            </FlexWrapper>



        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
`

const Photo = styled.img`
width: 350px;
height: 430px;
    //сделать изоб е нормальным
    object-fit: cover;
`
