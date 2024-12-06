import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyLedHeader>
        <Logo />
           <Menu />
        </StyLedHeader>
    );
};

const StyLedHeader=styled.header`
    background-color: aquamarine;
    // в меню элементы развели по сторонам
    display: flex;
    justify-content: space-between;
    
`
