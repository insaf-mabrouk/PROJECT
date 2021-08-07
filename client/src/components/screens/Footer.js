import React from 'react'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer1">
            <div className="overall">
                <div className="col">
                    <ul className="list">
                        <Link><li><b>Painting</b></li></Link>
                        <Link><li>Acrilic</li></Link>
                      <Link><li>Pensil</li></Link>  
                      <Link><li>Oil</li></Link>  
                        
                    </ul>
                </div>
                <div className="col">
                    <ul className="list">
                        <Link><li><b>Sell</b></li></Link>
                      <Link><li>Sell on ArtZone</li></Link>  
                       
                    </ul>
                </div>
                <div className="col">
                    <ul className="list">
                        <Link to="/about"> <li><b>About</b></li></Link>
                       
                        
                    </ul>
                </div>
                <div className="col">
                  
                    <div className="querybtns">
                        <button className="querybuttons">Download the ArtZone App</button>
                    </div>
                    <div className="icons">
                        
                            <InstagramIcon className="iconssub"/>
                            <FacebookIcon className="iconssub"/>
                            <PinterestIcon className="iconssub" />
                            <TwitterIcon className="iconssub" />
                            <YouTubeIcon className="iconssub" />
                    </div>
                </div>
            </div>
        </div>
    )
}