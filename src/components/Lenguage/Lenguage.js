import React from 'react'
import { Link } from "react-router-dom";

export const Lenguage = () => {
    return(
    <article>
    <div className="chooseContainer">
        <div class="text-container">    
        <span class="typed"></span>
        </div>
        <Link to={`/inicio`}>
        <button class="button es">
            ES
        </button>
        </Link>
        <Link to={`/home`}>
        <button class="button eng">
            EN
        </button>
        </Link>
    </div>
    </article>
    )
}
export default Lenguage;