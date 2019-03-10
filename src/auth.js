import React from 'react'
import { Route, Redirect } from "react-router-dom"

// 检查是否登录的组件
function CheckAuth(props) {
  // path: 需要拦截检查的路径 component: 路径对应要显示的组件
  const { path, component: Component } = props
  // 检查是否有token 有则显示对应组件 没有则重定向到登录页面
  const token = window.sessionStorage.getItem('token')
  return (
    <Route
      path={path}
      render={() => {
        return (
          token ? <Component /> : <Redirect to='/'/>
        )
      }}
    />
  )
}
export default CheckAuth
