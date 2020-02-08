import React  from "react";
import {Link} from "react-router-dom";
import moment from "moment";
export default ({id, description,note,amount,createdAt})=>(
    <div>
    <h4>
       <Link to={`/edit/${id}`}>{description}</Link>
    </h4>
        <p>
            {note}
        </p>

        <p>
            {amount}-{createdAt}
        </p>
    </div>
)

