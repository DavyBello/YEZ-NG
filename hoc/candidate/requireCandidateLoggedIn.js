import React, { Component } from 'react'
import cookie from 'cookie'

import redirect from '../lib/redirect'
import checkCandidateLoggedIn from '../lib/auth/checkCandidateLoggedIn'

export default function requireCandidate(Child) {
    class WrappedComponent extends Component {
        static async getInitialProps(context) {
            let ChildProps = {};

            if (Child.getInitialProps) {
                ChildProps = await Child.getInitialProps(context)
            }

            //Validate loggedin user
            const { isAuthenticated } = await checkCandidateLoggedIn(context.apolloClient)

            if (!isAuthenticated) {
              if (process.browser) {
                // If not signed in, send them somewhere more useful
                document.cookie = cookie.serialize('token', '', {
                  maxAge: -1, // Expire the cookie immediately
                  path: '/'
                })
                document.cookie = cookie.serialize('userType', '', {
                  maxAge: -1, // Expire the cookie immediately
                  path: '/'
                })
              }
              // If not signed in, send them somewhere more useful
              redirect(context, '/user/login')
            }

            return {
                ...ChildProps,
                isAuthenticated
            }
        }

        render() {
            return (
                <Child />
            )
        }
    }

    return (WrappedComponent)
}
