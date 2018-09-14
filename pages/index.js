import { Component } from 'react'
// import withLayout from '../hocs/withLayout'
import Slider from '../components/Slider'
import Layout from '../components/layout/Layout';

class HomePage extends Component{
  render(){
    return(
      <Layout>
        <Slider />
        <div>
          /a
        </div>
      </Layout>
    )
  }
}

export default HomePage
// export default withLayout(HomePage)
