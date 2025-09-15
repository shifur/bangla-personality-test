import InsightsChart from './InsightsChart'

const traitData = [
  { trait: 'Openness', score: 80 },
  { trait: 'Conscientiousness', score: 70 },
  { trait: 'Extraversion', score: 65 },
  { trait: 'Agreeableness', score: 85 },
  { trait: 'Neuroticism', score: 40 },
]

const Dashboard = () => {
  return (
    <div>
      <h2>Personality Insights</h2>
      <InsightsChart data={traitData} />
    </div>
  )
}

export default Dashboard
