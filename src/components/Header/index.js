import './style.scss'

const Header = () => {
  return (
    <div data-testid="header" className="header">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="logo">
            <span>hello</span>.com
          </h1>
        </div>
        <div className="col">
          <h2 className="app-title">
            Link<span>VOTE</span> <small>Challenge</small>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Header
