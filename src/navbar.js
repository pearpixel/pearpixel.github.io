import { Link } from'react-router-dom';

const lsnavbar = () => {
    const links = [
        "/cpp",
        '/game'
    ];
    return(
        <div id="navbar_divider_base">
            <Link id="title_name" 
                style={{ "alignSelf": "center",}}
                to={'/'}
            >pearpixeLS</Link>
            <div style={{"alignSelf": "center", "marginLeft": "15px"}}>
                <Link className="bordered_elem isolate_elem link_elem" 
                    to={links[0]}>C++</Link>
                <Link className="bordered_elem isolate_elem link_elem" 
                    to={links[1]}>GAME</Link>
            </div>
        </div>
    );
};

export default lsnavbar;