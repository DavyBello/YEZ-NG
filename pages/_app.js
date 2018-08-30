import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'

// import Router from 'next/router'
// import NProgress from 'nprogress'

// Router.events.on('routeChangeStart', () => NProgress.start())
// Router.events.on('routeChangeComplete', () => NProgress.done())
// Router.events.on('routeChangeError', () => NProgress.done())

// Router.onrouteChangeStart = () => NProgress.start();
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onrouteChangeError = () => NProgress.done();

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return <Container>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  }
}

export default withApollo(MyApp)
