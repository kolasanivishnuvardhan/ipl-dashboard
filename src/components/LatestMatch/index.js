import './index.css'

const LatestMatch = props => {
  const {details} = props
  const updatedData = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    firstInnings: details.first_innings,
    id: details.id,
    manOfTheMatch: details.man_of_the_match,
    matchStatus: details.match_status,
    result: details.result,
    secondInnings: details.second_innings,
    umpires: details.umpires,
    venue: details.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedData
  return (
    <div className="latest-match-container">
      <div className="match-info-and-logo-container">
        <div className="match-info">
          <p className="cometing-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="cometing-team-logo"
        />
      </div>
      <hr className="seperator" />
      <div>
        <p className="first-innings">First Innings</p>
        <p className="first-innings-team-name">{firstInnings}</p>
        <p className="first-innings">Second Innings</p>
        <p className="first-innings-team-name">{secondInnings}</p>
        <p className="first-innings">Man Of The Match</p>
        <p className="first-innings-team-name">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="first-innings-team-name">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
