import './index.css'
const MatchCard = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = details

  return (
    <li className="each-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${matchStatus === 'Won' ? 'won' : 'lost'}`}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
