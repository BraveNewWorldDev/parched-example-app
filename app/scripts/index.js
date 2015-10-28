// This view exists to show that jade works in browserify
// Safe to delete
import template from './view'
$(document.getElementsByClassName('jade-example')[0]).html(template())

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
//window.React = React

ReactDOM.render(
  <App />,
  document.getElementsByClassName('cosmos')[0]
)
