function Navbar() {
  return (
    <nav style={{
      padding:'20px',
      background:'#111827',
      color:'white',
      display:'flex',
      justifyContent:'space-between'
    }}>
      <h2>Enterprise Platform</h2>

      <div>
        <span style={{marginRight:'20px'}}>Dashboard</span>
        <span style={{marginRight:'20px'}}>Analytics</span>
        <span>Monitoring</span>
      </div>
    </nav>
  )
}

export default Navbar