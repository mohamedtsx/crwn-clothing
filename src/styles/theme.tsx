import { css } from "styled-components";

const theme = {
    breakPoints: {
        mobileS: 'max-width: 33em',
        mobileM: 'max-width: 40em',
        mobileL: 'max-width: 48em',
        tabletS: 'max-width: 60em',
        tabletL: 'max-width: 76.8em',
        desktopXS: 'max-width: 90em',
        desktopS: 'max-width: 108em',
        desktopM: 'max-width: 120em',
        desktopL: 'max-width: 140em'
    },
    mixes: {
        flexCenter: css`
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        
        flexBetween: css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `
    }
}

export default theme;