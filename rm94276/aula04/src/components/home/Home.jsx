import React from "react";
import { Link } from "react-router";

export default function Home(){
    
    return(

        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/api"></Link>
            </header>
        </div>
    )
}