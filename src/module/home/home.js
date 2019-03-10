import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        {/* 顶部搜索框 */}
        <div className="search_bar">
          <Input icon="search" placeholder='请输入搜索...' fluid/>
        </div>
        {/* 轮播图 */}
        
      </div>
    )
  }
}
export default Home
