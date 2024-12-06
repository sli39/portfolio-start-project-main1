import React from 'react';
import {Icon} from "../icon/Icon";

export const Logo = () => {
    return (
          <a href="/">
                {/* в место этого <img src="" alt=""/>это Icon
                стотри инструкцию в Icon.txt*/}
              <Icon iconId={'codeSvg'} />
          </a>

    );
};

