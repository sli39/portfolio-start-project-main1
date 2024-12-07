import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyleSkills>

        <SectionTitle>My Skills</SectionTitle>
            {/*чтобы элемент блок например html5 когда будет 30% должен скивываться вниз пишем wrap={"wrap"} напимали в Skills.tsx*/}
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                {/*передали title с Skill.tsx*/}
                <Skill iconId={"codeSvg"}
                       title={"html5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />

                <Skill iconId={"css"}
                       title={"css3"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />

                <Skill iconId={"react"}
                       title={"React"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />

                <Skill iconId={"typescript"}
                       title={"typescript"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />

                <Skill iconId={"styled-components-icon.svg"}
                       title={"styled components"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />

                <Skill iconId={"figma"}
                       title={"WEB DESIgN"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"} />



            </FlexWrapper>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`
    background-color: #f2dfd2;
    //если незнаем сколько элементов вблоке то ставим min займет всю высоту экрана
    min-height: 100vh;
`
