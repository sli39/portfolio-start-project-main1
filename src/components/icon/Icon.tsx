import React from 'react';
// нужно пролодить путь к <use xlinkHref={}
import iconsSprite from '../../assets/imades/icons-sprite.svg';

// чтобы сработал props.iconId нужна типизация . Чтобы в Logo.txt заработала <Icon iconId={'code'} />
// iconId пойдет и в Skill.tsx
type IconPropsType = {
    iconId: string,
    // иконка принимает размеры диначически см ниже значения
    width?:string,
    height?:string,
    viewBox?:string,

}

// этот компонент Icon будет принимать props типа IconPropsType в кавычки
export const Icon = (props: IconPropsType) => {
    return (
            // изменяем эти значения
            <svg width={props.width || "50"} height= {props.height || "50"} viewBox={props.width || "0 0 50 50"}  fill="none" xmlns="http://www.w3.org/2000/svg">
                {/*передаем файл через id через props */}
                <use xlinkHref={ `${iconsSprite}#${props.iconId}` } />
            </svg>

);
};

