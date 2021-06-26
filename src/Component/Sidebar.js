const Sidebar = () => {
    return (
        <div  className="row">
            <nav class="flex-column">
            <a class="nav-link active" aria-current="page" href="#">Create</a>
            <a class="nav-link" href="#">Inbox</a>
            <a class="nav-link" href="#">Trash</a>
            <a class="nav-link" href="#">Spam</a>
            </nav>
        </div>
    )
}

export default Sidebar
