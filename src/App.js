import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => {
  return <div>Loading...</div>
}

export const MobileApp = Loadable({
  loader: () => import(/* webpackChunkName: "/mobile" */ './mobile'),
  loading: Loading
})

export const DesktopApp = Loadable({
  loader: () => import(/* webpackChunkName: "/default" */ './default'),
  loading: Loading
})
