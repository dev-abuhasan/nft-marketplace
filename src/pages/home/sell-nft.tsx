import React from 'react';
import ClickBtn from '../../components/ui-kits/buttons/click-btn';

const SellNft = () => {
    return (
        <section className="nft_sell py-5">
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className='img_parent'>
                            <img src="./images/sell01.png" alt="" />
                            <div className="profile">
                                <img src="./images/woman.png" alt="" />
                            </div>
                        </div>
                        <div className='img_parent img02'>
                            <img src="./images/sell02.png" alt="" />
                            <div className="profile">
                                <img src="./images/woman.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='img_parent img03'>
                            <img src="./images/sell03.png" alt="" />
                            {/* <div className="profile">
                                <img src="./images/woman.png" alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center">
                        <h1>Create And Sell Your NFTS</h1>
                        <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                        <div>
                            <ClickBtn>Sign Up Now</ClickBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellNft;