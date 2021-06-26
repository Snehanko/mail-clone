const Header = () => {
    return (
        <div>
            <nav classNameName="navbar navbar-light bg-light">
                <div classNameName="container-fluid">
                 <a classNameName="navbar-brand" href="#">Mail</a>
                 <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search Mail" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                 </form>
                </div>
            </nav>
        </div>
    )
}

export default Header
