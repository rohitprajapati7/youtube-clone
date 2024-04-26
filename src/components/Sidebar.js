import { useSelector } from "react-redux";

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen){
        return null;
    }
    return (
        <div className="shadow-md w-48 m-3">
            <h1></h1>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>

            <h2 className="font-bold">
                You 
            </h2>

            <ul className="mt-1">
                <li>Your Channel</li>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>

            <h2 className="font-bold mt-1">Explore</h2>
            <ul>
                <li>Trending</li>
                <li>Shopping </li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
            </ul>
        </div>
    )
}

export default SideBar;