const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                 <a class="navbar-brand">Mail</a>
                 <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search Mail" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                 </form>
                </div>
            </nav>
        </div>
    )
}

export default Header
