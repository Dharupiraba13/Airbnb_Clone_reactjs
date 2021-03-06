import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import { useHistory } from 'react-router'
import './Banner.css'
import Search from './Search'
function Banner() {
   
    const history=useHistory();
    const[showSearch,setShowSearch]=useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={
                    ()=> setShowSearch(!showSearch)
                }
                className='banner__searchButton' variant='outlined'>
                    {showSearch? 'Hide' : 'Search Dates'}
                </Button>

            </div>
            <div className="banner__information">
                <h2>Get out and stretch out your imagination</h2>
                <h5>
                    Plan a different kind of gateway to uncover the hidden
                    gem near you.
                </h5>
                <Button onClick={()=>history.push('/search')} variant='outlined'>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner

