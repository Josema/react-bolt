import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from '/components/App'
import reset from '/constants/css/reset'

const GlobalStyle = createGlobalStyle`${reset}`

ReactDOM.render(
    <Fragment>
        <App />
        <GlobalStyle />
    </Fragment>,
    document.getElementById('root')
)
