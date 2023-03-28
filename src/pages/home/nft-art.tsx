import React from 'react';
import { growth_v1, transaction_v1 } from '../../services/utils/svg';

const NftArt = () => {
    return (
        <section className="nft_art bg-light py-5">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-3">
                        <h2>The amazing nft art of the world here</h2>
                    </div>
                    <div className="offset-lg-1 col-lg-3 col-md-6 mb-3">
                        <div className='content d-flex flex-column flex-md-row align-items-center align-items-md-start'>
                            <div className='pe-3'>
                                {transaction_v1}
                            </div>
                            <div>
                                <h5 className='fw-bold'>Fast Transaction</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className='content d-flex flex-column flex-md-row align-items-center align-items-md-start'>
                            <div className='pe-3'>
                                {growth_v1}
                            </div>
                            <div>
                                <h5 className='fw-bold'>Growth Transaction</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NftArt;