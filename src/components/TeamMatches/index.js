import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true, id: ''}
  componentDidMount = () => {
    this.getRecentMatches()
  }

  getRecentMatches = async () => {
    const {match} = this.props
    const {url} = match
    const id = url.split('/').pop()
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamDetails: updatedData, isLoading: false, id: id})

    console.log(updatedData)
  }

  getBackgroundColor = () => {
    const {id} = this.state
    switch (id) {
      case 'RCB':
        return 'bg-rcb'
      case 'KKR':
        return 'bg-kkr'
      case 'KXP':
        return 'bg-pbks'
      case 'CSK':
        return 'bg-csk'
      case 'RR':
        return 'bg-rr'
      case 'MI':
        return 'bg-mi'
      case 'SRH':
        return 'bg-srh'
      case 'DC':
        return 'bg-dc'
      default:
        return ''
    }
  }

  renderTeamMatches = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    function snakeToCamelKey(snakeCaseString) {
      return snakeCaseString.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase(),
      )
    }

    function convertArrayToCamelCase(details) {
      return details.map(obj => {
        const newObj = {}
        Object.keys(obj).forEach(key => {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const camelCaseKey = snakeToCamelKey(key)
            newObj[camelCaseKey] = obj[key]
          }
        })
        
        return newObj
      })
    }
    const updatedRecentMatches = convertArrayToCamelCase(recentMatches)

    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" className="teambanner-img" />
        <h1 className="latest-matches">Latest Matches</h1>
        <LatestMatch details={latestMatchDetails} />
        <ul className="recent-matches-container">
          {updatedRecentMatches.map(eachObj => (
            <MatchCard details={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className={`team-matches-bg-container ${this.getBackgroundColor()}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
