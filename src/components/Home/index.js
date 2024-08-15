import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}
  componentDidMount = () => {
    this.getAllIplTeams()
  }

  getAllIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeams: updatedData, isLoading: false})
  }

  renderIplTeams = () => {
    const {iplTeams} = this.state
    return (
      <ul className="ipl-teams-list">
        {iplTeams.map(eachTeam => (
          <TeamCard details={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }
  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-dashboard">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-name">IPL Dashboard</h1>
        </div>
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderIplTeams()
          )}
        </div>
      </div>
    )
  }
}

export default Home
