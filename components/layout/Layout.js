import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily.primary};
  }
`

// import '../../assets/styles/vendors/tachyons.min.css'
import '../../assets/styles/vendors/bootstrap.min.css'

import TopHeader from '../TopHeader'
import NavBar from '../NavBar'
// import Header from './Header';
// import Footer from './Footer';

// progress bar
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = props => (
  <div>
    <Head>
      {/* <link rel="shortcut icon" href={favIcon} /> */}
      <link
        rel='stylesheet'
        href='/static/css/font-awesome.min.css'
      />
      <link
        rel='stylesheet'
        href='/static/css/nprogress.css'
      />
    </Head>
    <TopHeader />
    <NavBar />
    {/* <Header /> */}
    <div className="container">{props.children}</div>
    {/* <Footer /> */}
    <GlobalStyle whiteColor />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default Layout;
