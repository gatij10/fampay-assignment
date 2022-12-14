import styled from 'styled-components';

export const Hc1CardContainer = styled.div`
    display: flex;
    width: ${({ isScrollable }) => (isScrollable ? '0%' : '100%')};
    min-width: ${({ isScrollable }) => (isScrollable ? '100%' : '0%')};
    max-height: 50px;
    overflow-y: hidden;
    overflow-x: auto;
    border-radius: 12px;
    padding: 10px 0px 10px 0px;
    background-color: ${({ backgroundColor }) => (backgroundColor || '#FBAF03')};

    .content-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: fit-content;
    }

    .img {
        height: 35px;
        width: 35px;
        object-fit: contain;
        padding-left: 10px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
    }

    .title {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
    }

    .sub-title {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        margin: 0;
        color: rgba(27, 27, 30, 0.725524);
        padding-bottom: 20px;
      }

      :last-child {
        margin-left: 16px;
      }
`;
