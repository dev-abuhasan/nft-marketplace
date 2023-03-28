import React from 'react';
import ClickBtn from '../../components/ui-kits/buttons/click-btn';
import { diamond_v1, diamond_v2, verify_v1 } from '../../services/utils/svg';

const TopCollection = () => {

    return (
        <section className="nft_art py-5">
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-xl-4">
                        <div className=''>
                            <img src="./images/col0.png" alt="" className='w-100' />
                        </div>
                        <div className='my-4 d-flex align-items-center'>
                            <div>
                                <img src="./images/man.png" alt="" className='pe-3' width={70} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div>
                                    <h5 className='m-0 fw-bolder'>The Futr Abstr</h5>
                                    <span>10 in the stock</span>
                                </div>
                                <div>
                                    <span>Highest Bid</span>
                                    <h6 className='fw-bolder m-0 mt-2'>
                                        {diamond_v2} &nbsp; 0.25 ETH
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        {Array.from({ length: 3 }, (d, i) =>
                            <div className='row mb-4' key={i}>
                                <div className="col-md-5">
                                    <img className='w-100' src="./images/col01.png" alt="" />
                                </div>
                                <div className='col-md-7'>
                                    <div className='d-flex flex-column align-items-between justify-content-between h-100'>
                                        <div className="profile mt-2">
                                            <h6 className='fw-bolder'>The Futr Abstr</h6>
                                            <img src="./images/man.png" alt="" className='pe-3' />
                                            <button className='btn border border-2 border-success text-success fw-bold mb-3'>
                                                {diamond_v2} 0.25 ETH
                                            </button>
                                            <span className='text-muted ps-2'>1 of 8</span>
                                        </div>
                                        <div>
                                            <ClickBtn className="px-3 py-2" type={i !== 0 ? 'outline' : ''}>Place a Bid</ClickBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-6 col-xl-4 border-start ps-md-5">
                        <h4 className='title'>Top Collection Over</h4>
                        <p className='fw-bolder ps-2'>Last 7 days</p>
                        {Array.from({ length: 5 }, (d, i) =>
                            <div key={i} className="content border-bottom d-flex align-items-center justify-content-between py-3">
                                <h4 className='fw-bolder pe-2' >
                                    {i + 1}
                                </h4>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='profile me-3 d-flex align-items-center'>
                                        <img src={`./images/avater${i % 2 === 0 ? '01' : '02'}.png`} alt="" width={70} />
                                        {i % 3 == 0 && <div className='icon'>
                                            {verify_v1}
                                        </div>}
                                    </div>
                                    <div className="info">
                                        <p className='m-0'>PunkArt</p>
                                        <span className='d-flex align-items-center'>
                                            {diamond_v1}
                                            <span className='ps-2'> 19,769.39</span>
                                        </span>
                                    </div>
                                </div>
                                <h3 className='text-warning fw-bolder'>+26.52%</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default TopCollection;