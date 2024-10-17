import './components.css'

import { useState } from 'react';

const head_exp = ({heading, exp_content}) => {
    const [expanded, setExpanded] = useState(false);

    return(
        <div className="headexp_main">
            <div className="headexp_head">
                <h3 onClick={() => setExpanded(!expanded)}>{heading}</h3>
            </div>
            { expanded ? <div className="headexp_body">{exp_content}</div> : ""}
        </div>
    );
}

export default head_exp;