import React from 'react'
import {Link} from "react-router-dom";
import "./Home.css"

const Home: React.FC = () => {    
    return (
        <div className='container'>
            <div className='heading'>
                <h1>CRUD-APPLICATION</h1>
            </div>
            <div className='goto-crud'>
                <Link to={"/crud"}>
                    <button>
                        Go To CRUD
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
