/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {enquireScreen} from 'enquire-js';
import {Content1} from '../components/Home';
import CryptoSvg from '../assets/svg/undraw_crypto_flowers_re_dyqo.svg';

export const Content10DataSource = {
    wrapper: {className: 'home-page-wrapper about-wrapper'},
    OverPack: {className: 'home-page about', playScale: 0.3},
    imgWrapper: {className: 'about-img', md: 10, xs: 24},
    img: {
        children: CryptoSvg,
    },
    textWrapper: {className: 'about-text', md: 14, xs: 24},
    title: {
        className: 'about-title',
        children: (
            <span>
        <h3>About Us</h3>
      </span>
        ),
    },
    content: {
        className: 'about-content',
        children: (
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.<br/>
            </p>
        ),
    },
};

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const {location = {}} = typeof window !== 'undefined' ? window : {};

export class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port,
        };
    }

    componentDidMount() {
        enquireScreen((b) => {
            this.setState({isMobile: !!b});
        });
        if (location.port) {
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
    }

    render() {
        const children = [
            <Content1
                id="Content1_0"
                key="Content1_0"
                dataSource={Content10DataSource}
                isMobile={this.state.isMobile}
            />
        ];
        return (
            <div
                className="templates-wrapper container paper"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                {this.state.show && children}
            </div>
        );
    }
}
