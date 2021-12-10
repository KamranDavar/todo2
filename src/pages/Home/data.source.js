import React from 'react';
import ToolSvg from '../../assets/svg/tool.svg'
import SpeakersSvg from '../../assets/svg/speakers.svg'
import MusicSvg from '../../assets/svg/43-music-note-outline.svg'
import arrowSvg from '../../assets/svg/212-arrow-1-rounded.svg'
import Fingerprint from '../../assets/svg/500-fingerprint-security-outline.svg'
import stars from '../../assets/svg/1865-shooting-stars-outline.svg'
import GiftSvg from '../../assets/svg/412-gift-outline.svg'
import CryptoSvg from '../../assets/svg/undraw_crypto_flowers_re_dyqo.svg'


export const Banner10DataSource = {
    wrapper: {className: 'banner1'},
    BannerAnim: {
        children: [
            {
                name: 'elem0',
                BannerElement: {className: 'banner-user-elem'},
                textWrapper: {className: 'banner1-text-wrapper'},
                bg: {className: 'bg bg0'},
                title: {
                    className: 'banner1-title',
                    children: (
                        <h3>
                            <b>Business&nbsp;LOGO</b>
                        </h3>
                    ),
                },
                content: {
                    className: 'banner1-content',
                    children: (
                        <p>myslogan</p>
                    ),
                },
                button: {className: 'banner1-button', children: 'Learn More'},
            },
        ],
    },
};
export const Content00DataSource = {
    wrapper: {className: 'home-page-wrapper content0-wrapper'},
    page: {className: 'home-page content0'},
    OverPack: {playScale: 0.3, className: ''},
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <p>Lorem Ipsum is simply dummy</p>
                ),
            },
        ],
    },
    childWrapper: {
        className: 'content0-block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                <img src={SpeakersSvg} alt='speaker'/>,
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: (
                                <p>Lorem Ipsum</p>
                            ),
                        },
                        {
                            name: 'content',
                            children: (
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children: <img src={ToolSvg} alt="tool"/>
                            ,
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: (
                                <span>
                  <p>Lorem Ipsum</p>
                </span>
                            ),
                        },
                        {
                            name: 'content',
                            children: (
                                <p>Lorem Ipsum is simply dummy text of the</p>
                            ),
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                <img src={stars} alt='globe'/>,
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: (
                                <span>
                  <p>Lorem Ipsum</p>
                </span>
                            ),
                        },
                        {
                            name: 'content',
                            children: (
                                <span>
                  <p>Lorem Ipsum is simply dummy text of the</p>
                </span>
                            ),
                        },
                    ],
                },
            },
        ],
    },
};
export const Content10DataSource = {
    wrapper: {className: 'home-page-wrapper content1-wrapper'},
    OverPack: {className: 'home-page content1', playScale: 0.3},
    imgWrapper: {className: 'content1-img', md: 10, xs: 24},
    img: {
        children: CryptoSvg,
    },
    textWrapper: {className: 'content1-text', md: 14, xs: 24},
    title: {
        className: 'content1-title',
        children: (
            <span>
        <p>Lorem Ipsum </p>
      </span>
        ),
    },
    content: {
        className: 'content1-content',
        children: (
            <span>
        <span>
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
        </span>
      </span>
        ),
    },
};
export const Content30DataSource = {
    wrapper: {className: 'home-page-wrapper content3-wrapper'},
    page: {className: 'home-page content3'},
    OverPack: {playScale: 0.3},
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'title',
                children: (
                    <span>
            <p>Where does it come from?</p>
          </span>
                ),
                className: 'title-h1',
            },
            {
                name: 'content',
                className: 'title-content',
                children: (
                    <span>
            <p>
              <br/>
            </p>
          </span>
                ),
            },
        ],
    },
    block: {
        className: 'content3-block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                        SpeakersSvg,
                    },
                    textWrapper: {className: 'content3-text'},
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                <span>
                  <span>
                    <p>Lorem Ipsum</p>
                  </span>
                </span>
              </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.&nbsp;
                </p>
              </span>
                        ),
                    },
                },
            },
            {
                name: 'block1',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:
                        ToolSvg,
                    },
                    textWrapper: {className: 'content3-text'},
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                <p>Lorem Ipsum</p>
              </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
              </span>
                        ),
                    },
                },
            },
            {
                name: 'block2',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children: GiftSvg,
                    },
                    textWrapper: {className: 'content3-text'},
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                <p>Lorem Ipsum</p>
              </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
              </span>
                        ),
                    },
                },
            },
            {
                name: 'block3',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:Fingerprint ,
                    },
                    textWrapper: {className: 'content3-text'},
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                <p>Lorem Ipsum</p>
              </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                <span>
                  <span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </p>
                  </span>
                </span>
              </span>
                        ),
                    },
                },
            },
            {
                name: 'block4',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children:arrowSvg,
                    },
                    textWrapper: {className: 'content3-text'},
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                <p>Lorem Ipsum</p>
              </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry.{' '}
                            </p>
                        ),
                    },
                },
            },
            {
                name: 'block5',
                className: 'content3-block',
                md: 8,
                xs: 24,
                children: {
                    icon: {
                        className: 'content3-icon',
                        children: MusicSvg,
                    },
                    textWrapper: {className: 'content3-text'},
                    title: {
                        className: 'content3-title',
                        children: (
                            <span>
                <p>Lorem Ipsum</p>
              </span>
                        ),
                    },
                    content: {
                        className: 'content3-content',
                        children: (
                            <span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
              </span>
                        ),
                    },
                },
            },
        ],
    },
};
export const Footer00DataSource = {
    wrapper: {className: 'home-page-wrapper footer0-wrapper'},
    OverPack: {className: 'home-page footer0', playScale: 0.1},
    copyright: {
        className: 'copyright',
        children: (
            <span>
        ©2021 By Kamran
      </span>
        ),
    },
};
