// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => {
  console.log('about page')
  return (
    <div>
      <Header />
      <h1>About Route</h1>
      <LogoutButton />
    </div>
  )
}
export default About
