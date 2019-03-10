import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'
import './main.css'
import '../assets/fonts/iconfont.css'
import Home from './home/home'

// 菜单按钮组件
function Menu(props) {
  const { path, isExact, label, icon } = props
  return (
    <Route
      path={path}
      exact={isExact}
      children={({match}) => {
        return (
          <Link to={path}>
            <div className="menu_item">
              <i className={`iconfont icon-${icon} ${match ? 'menu_active' : ''}`}></i>
              <div className={`${match ? 'menu_active' : ''}`}>{label}</div>
            </div>
          </Link>
        )
      }}
    />
  )
}

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        {/* 内容展示区 */}
        <div className="main-content">
          <Route path="/home/main" component={Home}/>
          <Route path="/home/info" render={() => <div>信息</div>}/>
          <Route path="/home/chat" render={() => <div>微聊</div>}/>
          <Route path="/home/my" render={() => <div>我的</div>}/>
        </div>
        {/* 菜单区 */}
        <div className="main-menu">
          <Grid columns="4" textAlign="center" divided>
            <Grid.Row>
              <Grid.Column>
                <Menu path="/home/main" label="主页" icon="all" isExact={true}/>
              </Grid.Column>
              <Grid.Column>
                <Menu path="/home/info" label="资讯" icon="search" isExact={true}/>
              </Grid.Column>
              <Grid.Column>
                <Menu path="/home/chat" label="微聊" icon="atm" isExact={true}/>
              </Grid.Column>
              <Grid.Column>
                <Menu path="/home/my" label="我的" icon="account" isExact={true}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Main
