import React from 'react';

const NftFeatured = () => {
    return (
        <section className="nft_featured py-5 bg-light">
            <div className="container py-3">
                <h1 className='pb-5'>Collection Featured NFTS</h1>
                <div className="row">
                    {Array.from({ length: 3 }, (d, i) =>
                        <div className="col-lg-4 col-md-6" key={i}>
                            <div className='nft_fea_img d-flex'>
                                <div className='parent_img'>
                                    <img src="./images/f01.png" alt="" />
                                </div>
                                <div className='child_parent ps-0 ps-sm-3'>
                                    <div className='child_img pb-0 pb-sm-2'>
                                        <img src="./images/fs03.png" alt="" />
                                    </div>
                                    <div className='child_img pb-0 pb-sm-2'>
                                        <img src="./images/fs02.png" alt="" />
                                    </div>
                                    <div className='child_img pb-0 pb-sm-2'>
                                        <img src="./images/fs01.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default NftFeatured;