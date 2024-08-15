import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`} className="link-items">
      <button className="ipl-teams-btn" type="button">
        <li className="each-team-item">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p className="team-name">{name}</p>
        </li>
      </button>
    </Link>
  )
}

export default TeamCard
