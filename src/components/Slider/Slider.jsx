import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from './style';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE, total } from '../../configs/constants';
import { getRandomNumber, getNextRoundRobin } from '../../libs/utils/math';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,

        };
    }

    componentDidMount = () => {
        const { random, duration } = this.props;
        this.id = setInterval(() => {
            const currentIndex = random ? getRandomNumber(this.props.banner.length) : getNextRoundRobin(currentIndex, total)
            this.setState({ current: currentIndex });
        }, duration);
    }

    componentWillUnmount = () => {
        clearInterval(this.id);
    }

    render() {
        
        const { current } = this.state;
        const {
            altText, height, duration, banner,
        } = this.props;
        const { defaultbanner } = this.props;
        const bannerSrc = banner.length ? `${PUBLIC_IMAGE_FOLDER}${banner[current]}` : `${PUBLIC_IMAGE_FOLDER}${defaultbanner}`

        return (
          <>
            <div align="center">
              <Img src={bannerSrc} alt={altText} height={height} duration={duration} />
            </div>
          </>
        );
    }
}
Slider.propTypes = {
    altText: PropTypes.string,
    banner: PropTypes.arrayOf(PropTypes.string),
    defaultbanner: PropTypes.string,
    duration: PropTypes.number,
    height: PropTypes.number,
    random: PropTypes.bool,
};
Slider.defaultProps = {
    altText: 'default banner',
    banner: [],
    defaultbanner: DEFAULT_BANNER_IMAGE,
    duration: 2000,
    height: 200,
    random: false,
};
export default Slider;