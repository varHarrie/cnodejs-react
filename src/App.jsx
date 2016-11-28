import React, {Component, PropTypes} from 'react'
import {Layout, Header, HeaderRow, Drawer, Navigation, Content} from 'react-mdl'

class App extends Component {
  render () {
    return (
      <div style={{height: '100%', position: 'relative'}}>
        <Layout fixedHeader fixedTabs>
          <Header style={{background: '#80bd01'}}>
            <HeaderRow title='Cnode' />
            {this.props.extra}
          </Header>
          <Drawer title='菜单'>
            <Navigation>
              <a href='#'>占位</a>
            </Navigation>
          </Drawer>
          <Content>
            {this.props.main}
          </Content>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  main: PropTypes.element,
  extra: PropTypes.element
}

export default App
