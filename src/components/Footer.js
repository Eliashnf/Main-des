import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className='main-footer'>
        <div className='footer-middle'>

        
            <div className='container'>
                <div className='row'>
                    {/*Column 1*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4> Contact Us</h4>
                        <ul className='list-unstyled'>
                            <li>Arna</li>
                            <li>DZ</li>
                            <li>Kraded</li>
                        </ul>
                    </div>
                    {/*Column 2*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Something</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>This is a Link</a></li>
                            <li><a href='/'>This is a Link</a></li>
                            <li><a href='/'>This is a Link</a></li>
                        </ul>
                    </div>
                    {/*Column 3*/}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Something</h4>
                        <ul className='list-unstyled'>
                            <li><a href='/'>This is a Link</a></li>
                            <li><a href='/'>This is a Link</a></li>
                            <li><a href='/'>This is a Link</a></li>
                        </ul>
                    </div>
                </div>
                {/* Footer body */}
                <div className='footer-bottom'>
                    <p className='text-xs-center'>
                        &copy;{new Date().getFullYear()} Arna_Fc - All Rights Reserved
                    </p>
                </div>
            </div>

        </div>
    </FooterContainer>   
  )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainWhite);
    padding-top: 2rem;
    color: var(--mainDark);
}
.footer-bottom {
    padding-top: 2rem;
    padding-bottom: 1rem;
}
ul li a {
    color: var(--mainGrey);
    text-decoration: none;
}
ul li a:hover{
    color: var(--mainLightGrey);
}

`;