import React, {Component, PropTypes} from 'react'
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl'

class App extends Component {
  render () {
    return (
      <div style={{height: '100%', position: 'relative'}}>
        <Layout fixedHeader>
          <Header style={{background: '#80bd01'}} title='Cnode' />
          <Drawer title='菜单'>
            <Navigation>
              <a href='#'>论坛</a>
              <a href='#'>个人</a>
            </Navigation>
          </Drawer>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
