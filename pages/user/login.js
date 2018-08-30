import { Component } from 'react'
import Head from 'next/head'

import withCandidateLogin from '../../hocs/candidate/withCandidateLogin'
import Login from '../../components/portal/LoginPage/LoginPage'

class LoginPage extends Component {
  render(){
    return (
      <div className="animated fadeIn">
        <Head>
          <title>KTT Youth Empowerment Zone | Candidate Login</title>
        </Head>
        {/* <Login /> */}
        <Login {...this.props}/>
      </div>
    )
  }
}

// export default (LoginPage)
export default withCandidateLogin(LoginPage)
