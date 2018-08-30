import React from "react";
import Head from "next/head";
//import 'isomorphic-fetch'

import { ToastContainer } from "react-toastify";
import { Container } from "reactstrap";

import requireCandidateLoggedIn from "./requireCandidateLoggedIn";

// import Breadcrumb from './portal/Breadcrumb/Breadcrumb'
import Sidebar from "../../components/portal/adminUI/Sidebar/Sidebar";
// import Header from "../../components/portal/adminUI/Header/Header";

// import TopHeader from "../../components/common/Header/TopHeader";
import Nav from "../../components/common/Header/Nav";
import Footer from "../../components/common/Footer/Footer";

export default function withLayout(Child) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context, apolloClient) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context, apolloClient);
      }

      return {
        ...ChildProps
      };
    }

    render() {
      // if (!this.props.loggedInUser.candidate) {
      //   return (
      //     <div>Hollup</div>
      //   )
      // }
      return (
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet="utf-8" />
            {/* <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/> */}
            {/* <!-- Stylesheets--> */}
            <link
              href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Raleway:300,400,500,600,700,800,900"
              rel="stylesheet"
            />

            {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> */}
            {/* bootstrap 4 css  */}
            <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            {/* font-awesome css  */}
            <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
            {/* animate css */}
            <link rel="stylesheet" href="/static/css/animate.css" />
            {/* owl carousel css */}
            {/* <link rel="stylesheet" href="/static/css/owl.carousel.min.css"/> */}

            {/* slicknav css */}
            <link rel="stylesheet" href="/static/css/slicknav.min.css" />
            {/* main css */}
            <link rel="stylesheet" href="/static/css/main.css" />
            {/* responsive css */}
            <link rel="stylesheet" href="/static/css/responsive.css" />
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/css/nprogress.css"
            />
            {/* HomePage Styles */}
            <link rel="stylesheet" href="/static/css/portal/style.css" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
            />
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
          </Head>
          <div className="app">
            <header className="header-area">
              {/* <TopHeader /> */}
              <Nav />
            </header>
            {/* <Header/> */}
            <div className="app-body">
              <Sidebar />
              <main className="main">
                {/* <Breadcrumb/> */}
                <Container fluid>
                  {/* <img className="slider-overlay" src={"/static/images/home-slider/overlay.png"} alt={'YEZ'}/> */}
                  {/* <p className="display-4 text-center" style={{fontSize: '2rem'}}>
                  Candidate
                </p> */}
                  <Child />
                </Container>
                <Footer noDonate />
              </main>
            </div>
          </div>
          <ToastContainer />
          {/* <Scripts /> */}
          <style jsx>{`
            .main {
              padding-top: 30px;
              overflow: auto;
              max-height: 86vh;
            }
          `}</style>
        </div>
      );
    }
  }

  return requireCandidateLoggedIn(WrappedComponent);
}
