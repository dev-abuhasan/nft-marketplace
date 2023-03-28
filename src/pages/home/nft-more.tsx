import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ClickBtn from '../../components/ui-kits/buttons/click-btn';
import { diamond_v2, filter_v1 } from '../../services/utils/svg';

const NftMore = () => {
    return (
        <section className="nft_more py-5 bg-light">
            <div className="container py-3">
                <h1>Discover More NFTS</h1>
                <div className="filters my-3">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="navbarScroll">
                                All Filters
                            </Navbar.Toggle>
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <div className='me-3 mb-3'>
                                        <ClickBtn className="px-3 py-2">All Categories</ClickBtn>
                                    </div>
                                    <div className='me-3 mb-3'>
                                        <ClickBtn type="outline" className="px-3 py-2">Art</ClickBtn>
                                    </div>
                                    <div className='me-3 mb-3'>
                                        <ClickBtn type="outline" className="px-3 py-2">Celebrities</ClickBtn>
                                    </div>
                                    <div className='me-3 mb-3'>
                                        <ClickBtn type="outline" className="px-3 py-2">Gaming</ClickBtn>
                                    </div>
                                    <div className='me-3'>
                                        <ClickBtn type="outline" className="px-3 py-2">Music</ClickBtn>
                                    </div>
                                    <div className='me-3 mb-3'>
                                        <ClickBtn type="outline" className="px-3 py-2">Crypto</ClickBtn>
                                    </div>
                                </Nav>
                                <ClickBtn type="outline" className="px-3 py-2">
                                    {filter_v1}
                                    All Filters
                                </ClickBtn>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="content row">
                    {Array.from({ length: 16 }, (d, i) =>
                        <div className="col-md-3 mb-3" key={i}>
                            <div className="bg-white p-3 rounded">
                                <div className="img_parent">
                                    <img src="./images/more01.png" alt="" className='w-100' />
                                    <div className="profile">
                                        <img src="./images/more02.png" alt="" />
                                        <img src="./images/more03.png" alt="" className='img2' />
                                        <img src="./images/more02.png" alt="" className='img2' />
                                        <img src="./images/more03.png" alt="" className='img2' />
                                    </div>
                                </div>
                                <div className="content pt-4 px-3">
                                    <h4 className='fw-bolder'>Art Crypto</h4>
                                    <div className='text-muted d-flex justify-content-between fw-bold'>
                                        <span className='text-success fw-bold small'>
                                            {diamond_v2} 0.25 ETH
                                        </span>
                                        <span>1 of 321</span>
                                    </div>
                                    <div className='d-flex justify-content-between py-3'>
                                        <div>
                                            <ClickBtn className="py-1 px-3 f_10 border-0 bg-light" type="outline">3h 50m 2s Left</ClickBtn>
                                        </div>
                                        <div>
                                            <ClickBtn className="py-1 px-3 f_10 border-0 bg-light" type="outline">Place a bid </ClickBtn>
                                        </div>
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

export default NftMore;