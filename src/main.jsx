import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/Store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   { /* this store is the values when using context api inplace of vlaues it is store */}
    <App />
  </Provider>,
)
