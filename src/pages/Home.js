/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {enquireScreen} from 'enquire-js';

import {Banner1, Content0, Content1, Content3, Footer0} from '../components/Home';

import {
    Banner10DataSource,
    Content00DataSource,
    Content10DataSource,
    Content30DataSource,
    Footer00DataSource,
} from '../components/Home/data.source';
// import '../assets/styles/pages/Home/index.less';

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const {location = {}} = typeof window !== 'undefined' ? window : {};

export class Home extends React.Component {
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
            <Banner1
                id="Banner1_0"
                key="Banner1_0"
                dataSource={Banner10DataSource}
                isMobile={this.state.isMobile}
            />,
            <Content0
                id="Content0_0"
                key="Content0_0"
                dataSource={Content00DataSource}
                isMobile={this.state.isMobile}
            />,
            <Content1
                id="Content1_0"
                key="Content1_0"
                dataSource={Content10DataSource}
                isMobile={this.state.isMobile}
            />,
            <Content3
                id="Content3_0"
                key="Content3_0"
                dataSource={Content30DataSource}
                isMobile={this.state.isMobile}
            />,
            <Footer0
                id="Footer0_0"
                key="Footer0_0"
                dataSource={Footer00DataSource}
                isMobile={this.state.isMobile}
            />,
        ];
        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                {this.state.show && children}
            </div>
        );
    }
}
