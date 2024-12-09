import React from 'react';
import styled from "styled-components";
// чтобы меню в li подставлялись друние значения как Home Skills и тд делаем следущее переносим const items = ["Home", "Skills", "Works", "Testimony", "Contact"] в Header.txt
// ниже прописываем пропсы пишем название из головы menuItems и Array массив
export const Menu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            {/*меню li осталось 1 а было много.Из за map принял стрелочную функция, теперь строка <a href="">{item}</a> будет принимать разные значения ["Home", "Skills", "Works", "Testimony", "Contact"] */}
            <ul>
                {props.menuItems.map((item, index) => {
                    // что бы li не путали значения Home", "Skills" и тд нужен уникальный ключ index выше в функцию и в li
                    return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
 ul {
     //(выравнили в сторку)
display: flex;
     //отступы 
     gap: 30px;
     justify-content: center;
 }
`
