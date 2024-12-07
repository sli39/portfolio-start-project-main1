import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
// делаем типизацию для подключения пропсов из Icon.tsx чтобы передовать в Skills значения
type SkillPropsType = {
    // картанки для иконок будут разные через пропсы
    iconId: string,
    // SkillTitle ЧТОБЫ ОТРИСОВАТЬ НОВЫЕ тайтлы как html5
    title: string,
    //текст лорем передаем так же
    description: string,

}
// тут передаем что пропс будет типаSkillPropsType
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            {/*iconId придет из пропсов с Skills.tsx*/}
            <Icon iconId={props.iconId} />
            {/*тут передаем в пропсах чтобы кидать в Skills.tsx */}
            <SkillTitle>{props.title}</SkillTitle>
            {/*тут передаем в пропсах чтобы кидать в Skills.tsx */}
            <SkillTect>{props.description}</SkillTect>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    //блоки с иконками станут по 3 вряд
    width: 30%;
    background-color: antiquewhite;
    margin: 9px;
`
const SkillTitle = styled.h3`

`
const SkillTect = styled.p`

`