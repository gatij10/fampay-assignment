import styled from 'styled-components';

export const Hc3CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-radius: 12px;
`;

export const Hc3CardContentContainer = styled.div`
    display: flex;
    height: 350px;
    width: 100%;
    flex-direction: column;
    color: #fff;
    background-color: ${({ backgroundColor }) => (backgroundColor || '#454AA6')};
    background-image: ${({ backgroundImage }) => (`url(${backgroundImage})` || 'none')};
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 12px;
    justify-content: flex-end;

    .content-container {
        padding: 0px 0px 20px 20px;
    }

    .text-container {
        width: 100%;
        margin-bottom: 40px;
    }

    .heading {
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        word-wrap: break-word;
        white-space: pre-wrap;
    }

    .sub-heading {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }

    .cta {
        background-color: ${({ cta }) => (cta ? cta[0].bg_color : '#000')};
        border-radius: 6px;
        width: 125px;
        color: ${({ cta }) => (cta ? cta[0].text_color : '#fff')};
        padding: 10px;
      }
`;

export const SideBarContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      flex-direction: column;
`;

export const SideBarBtnConatiner = styled.div`
    background-color: #f7f6f3;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 12px;

    .btn-text {
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        color: #000000;
    }

    :first-child {
        margin-bottom: 30px
    }
`;
