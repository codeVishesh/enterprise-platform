function Dashboard() {

  const metrics = [
    { title:'Users', value:'50,000+'},
    { title:'Revenue', value:'$10M'},
    { title:'Requests', value:'10M/day'},
    { title:'Uptime', value:'99.99%'}
  ]

  return (
    <div style={{padding:'40px'}}>

      <h1>Enterprise Analytics Dashboard</h1>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(4,1fr)',
        gap:'20px',
        marginTop:'30px'
      }}>

        {metrics.map((metric,index)=>(
          <div key={index}
            style={{
              border:'1px solid #ccc',
              padding:'20px',
              borderRadius:'10px'
            }}>
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </div>
        ))}

      </div>

      <div style={{marginTop:'40px'}}>
        <h2>System Monitoring</h2>

        <ul>
          <li>CPU Usage: 45%</li>
          <li>Memory Usage: 67%</li>
          <li>API Latency: 85ms</li>
          <li>Cache Hit Rate: 92%</li>
          <li>Database Queries/sec: 4500</li>
        </ul>
      </div>

    </div>
  )
}

export default Dashboard