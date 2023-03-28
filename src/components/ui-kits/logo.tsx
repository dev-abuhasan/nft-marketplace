import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    href?: any;
    typeImg?: boolean;
}

const Logo: React.FC<Props> = ({ href, typeImg }) => {
    return (
        <div>
            {typeImg ?
                <div>
                    img
                </div> :
                <Link className='text-primary text-decoration-none fw-bolder title' to={href ? href : '/'} style={{ fontSize: '30px' }}>
                    NFTERS
                </Link>
            }

        </div>
    );
};

export default Logo;
