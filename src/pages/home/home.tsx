import React from 'react';
import './home.scss';
import ClickBtn from '../../components/ui-kits/buttons/click-btn';
import NftArt from './nft-art';
import TopCollection from './top-collection';
import NftFeatured from './nft-featured';
import SellNft from './sell-nft';
import NftMore from './nft-more';
// import HomeSlider from './home-slider';

const Home = () => {
    return (
        <div className="">
            <section className="hero_banner container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className='mt-4'>
                            <h1>Discover, and collect figital art nfts</h1>
                            <p className='f_20 max_w_450'>
                                Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                            </p>
                            <ClickBtn className="my-3">Explore Now</ClickBtn>
                            <div className='total_client pt-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-md-start'>
                                <div className='single_client pe-4 mb-3'>
                                    <h2 className='m-0'>
                                        <span>98k<span>+</span></span>
                                    </h2>
                                    <span className='text-muted'>Artwork</span>
                                </div>
                                <div className='single_client pe-4 mb-3'>
                                    <h2 className='m-0'>
                                        <span>12k<span>+</span></span>
                                    </h2>
                                    <span className='text-muted'>Auction</span>
                                </div>
                                <div className='single_client pe-4 mb-3'>
                                    <h2 className='m-0'>
                                        <span>15k<span>+</span></span>
                                    </h2>
                                    <span className='text-muted'>Artist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-1 col-md-5 mb-3">
                        <div className="content">
                            <div className='img_parent'>
                                {/* <HomeSlider /> */}
                                <div className='' >
                                    <img src="./images/grp-01.png" alt="" className='w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-none'>
                    <div className="col-md-6 mb-3">
                        <h1>Discover, and collect figital art nfts</h1>
                        <p className='f_20 max_w_450'>
                            Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
                        </p>
                        <ClickBtn className="my-3">Explore Now</ClickBtn>
                        <div className='total_client pt-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center align-items-md-start'>
                            <div className='single_client pe-4 mb-3'>
                                <h2 className='m-0'>
                                    <span>98k<span>+</span></span>
                                </h2>
                                <span className='text-muted'>Artwork</span>
                            </div>
                            <div className='single_client pe-4 mb-3'>
                                <h2 className='m-0'>
                                    <span>12k<span>+</span></span>
                                </h2>
                                <span className='text-muted'>Auction</span>
                            </div>
                            <div className='single_client pe-4 mb-3'>
                                <h2 className='m-0'>
                                    <span>15k<span>+</span></span>
                                </h2>
                                <span className='text-muted'>Artist</span>
                            </div>
                        </div>
                    </div>
                    <div className="offset-md-1 col-md-5 mb-3">
                        <div className="content">
                            <div className='img_parent'>
                                {/* <HomeSlider /> */}
                                <div className='' >
                                    <img src="./images/grp-01.png" alt="" className='w-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NftArt />
            <TopCollection />
            <NftFeatured />
            <SellNft />
            <NftMore />
        </div>
    );
};

export default Home;