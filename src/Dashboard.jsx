import { useEffect, useState } from 'react'
import './Dashboard.css'

function Dashboard() {
  const [participants, setParticipants] = useState([])

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/data/results.json')
        const json = await res.json()
        setParticipants(json.participants || [])
      } catch (err) {
        console.error('Failed to load data', err)
      }
    }
    loadData()
  }, [])

  const total = participants.length
  const average = total > 0
    ? Math.round(participants.reduce((sum, p) => sum + p.score, 0) / total)
    : 0

  return (
    <div className="dashboard">
      <h1>Personality Test Dashboard</h1>
      <div className="summary">
        <div className="metric">
          <h2>Total Participants</h2>
          <p>{total}</p>
        </div>
        <div className="metric">
          <h2>Average Score</h2>
          <p>{average}</p>
        </div>
      </div>
      <div className="participants-grid">
        {participants.map((p) => (
          <div key={p.id} className="participant-card">
            <h3>{p.name}</h3>
            <p>Score: {p.score}</p>
            <p>Personality: {p.personality}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
