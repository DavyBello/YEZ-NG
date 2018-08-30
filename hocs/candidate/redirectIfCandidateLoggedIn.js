/* eslint-disable no-undef*/
import React, { Component } from 'react'

import redirect from '../../lib/redirect'
import checkCandidateLoggedIn from '../../lib/auth/checkCandidateLoggedIn'

export default (Child) => {
    class WrappedComponent extends Component {
        static async getInitialProps(context) {
            let ChildProps = {};

            if (Child.getInitialProps) {
                ChildProps = await Child.getInitialProps(context)
            }

            //Validate loggedin user
            const { isAuthenticated } = await checkCandidateLoggedIn(context.apolloClient)

            if (isAuthenticated) {
              // If signed in, send them somewhere more useful
              const target = await context.query.from || `/user`;
              redirect(context, target)
            }

            return {
                ...ChildProps,
                // isAuthenticated
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
