// блок страницы My Works секция
import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
// импортируем картинки
import socialImg from './../../../assets/images/pro-1.png'
 import timerImg from './../../../assets/images/pro-2.png'


// сделели такое же меню как и в Header.txt
const workItems = ["All", "landing page", "React", "spa"]

 export const Works = () => {
    return (
        <StyledWorks>
            {/*заголовок второго уровня*/}
           <SectionTitle>My Works</SectionTitle>
            {/*меню menuItems из Menu.tsx в писали значение выше workItems что бы ы этом блоку были ведны ["All", "landing page", "React", "spa"] */}
            <Menu menuItems={workItems} />
            {/*в этом блоке флекс будут элементы с одинаковой структурой контейнеры отделили друг от друга space-around*/}
            <FlexWrapper justify={"space-around"}>
                {/*перенесли из Work.tsx  и сюда передаем из Work Title и тд*/}
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const  StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #6ce0e0;
`