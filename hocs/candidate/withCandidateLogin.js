import React from 'react'
import Head from 'next/head'
// import { Mutation } from 'react-apollo'

import { ToastContainer } from 'react-toastify'

import redirectIfCandidateLoggedIn from './redirectIfCandidateLoggedIn'


function withCandidateLogin(Child) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context, apolloClient) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context, apolloClient)
      }

      return {
        ...ChildProps
      }
    }


    render() {
      const opts = opts || {};
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta charSet="utf-8"/>
            <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>
            {/* <!-- Stylesheets--> */}
            <link rel="stylesheet" href="/static/css/portal/style.css"/>
            <link rel="stylesheet" href="/static/css/react-toastify/react-toastify.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"/>
          </Head>
          <Child {...this.props}/>
          {/* <Mutation mutation={LOGIN_CANDIDATE_MUTATION}
            onCompleted={this.onCompleted}
            onError={this.onError}>
            {(loginCandidate) => ( */}
              {/* // <Child {...this.props} loginCandidate={loginCandidate}/> */}
              {/* )}
          </Mutation> */}
          <ToastContainer />
        </div>
    )}
  }

  return redirectIfCandidateLoggedIn(WrappedComponent)
}

export default (withCandidateLogin)
