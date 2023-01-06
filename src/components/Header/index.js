// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => {
  console.log('header page')
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}
export default withRouter(Header)
