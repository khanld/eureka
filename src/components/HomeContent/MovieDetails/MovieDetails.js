import React from 'react'
import classes from './MovieDetails.module.css'
import Button from '../../UI/Button/Button'
import PosterInteraction from '../Posters/PosterContent/PosterInteraction'
import CertificateImage from '../../Certificate/CertificateImage/CertificateImage'
import poster1 from '../../../assets/hinh-1.jpg'
import poster2 from '../../../assets/hinh-2.jpg'

const MovieDetails = (props) => {
    return (
        <React.Fragment>
        <div className={["container", classes.Container].join(' ')}>
            <div className={[classes.MovieDetails, "row"].join(' ')}>
                <div className="col-md-6">
                    <div className={classes.MoviePoster}>
                      <CertificateImage
                        poster={poster1}
                        date="25/7/2000"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.MovieContent}>
                        <PosterInteraction 
                            title="Check in Hoi An"
                            content="Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate
                            asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem
                            ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!"
                            btnWidth="100%"
                            check={true}
                            pubKey="0x4dF231C38b4Bb27c3060F5817Cd831286C94A49C"
                            date="25/7/2000"
                            loved={Math.floor(Math.random()*100)}
                            watched={Math.floor(Math.random()*10000)}
                            certAddress="0x84b7D9f90D5D8E068aBcD7a1A586f788A4B10b42" />
                            <Button btnType="posterBtn" btnWidth="100%">SEE ON TOURCHAIN SOCIAL APP</Button>
                            <Button btnType="posterBtn" btnWidth="100%">SHARE YOUR PHOTOS NOW</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className={["container", classes.Container].join(' ')}>
            <div className={[classes.MovieDetails, "row", classes.RowReverse].join(' ')}>
                <div className="col-md-6">
                    <div className={classes.MoviePoster}>
                    <CertificateImage
                        poster={poster2}
                        /> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={classes.MovieContent}>
                        <PosterInteraction 
                            title="Check in Da Nang"
                            content="Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate
                            asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem
                            ratione odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!"
                            btnWidth="100%"
                            date="25/7/2000"
                            check={true}
                            pubKey="0x14a812669cC393290416Ab9613737B7958FF134c"
                            certAddress="0x84b7D9f90D5D8E068aBcD7a1A586f788A4B10b42"
                            loved={Math.floor(Math.random()*100)}
                            watched={Math.floor(Math.random()*10000)} />
                            <Button btnType="posterBtn" btnWidth="100%">SEE ON TOURCHAIN SOCIAL APP</Button>
                            <Button btnType="posterBtn" btnWidth="100%">SHARE YOUR PHOTOS NOW</Button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default MovieDetails