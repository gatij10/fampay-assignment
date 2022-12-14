import React from 'react';
import PropTypes from 'prop-types';
import {
    ContentContainer, Hc6CardContainer, Image, RightArrow, Text,
} from './Hc6Card.styles';
import profilePlaceHolder from '../../assets/images/profile_placeholder.png';
import rightArrow from '../../assets/images/right-arrow.svg';
import formatText from '../../utils/formatText';

const Hc6Card = ({ cardData = {} }) => (
    <Hc6CardContainer onClick={() => { window.open(cardData?.url); }}>
        <ContentContainer>
            <Image
                src={cardData?.icon?.image_url || profilePlaceHolder}
                alt="profile_img"
            />
            <Text dangerouslySetInnerHTML={{ __html: formatText(cardData?.formatted_title) }} />
        </ContentContainer>
        <RightArrow src={rightArrow} alt="right_arrow" />
    </Hc6CardContainer>

);

Hc6Card.propTypes = {
    cardData: PropTypes.object.isRequired,
};

export default Hc6Card;
