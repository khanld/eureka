import React from 'react'
import poster1 from '../../../assets/poster-1.jpg'
import poster2 from '../../../assets/poster-2.jpg'
import poster3 from '../../../assets/poster-3.jpg'
import poster4 from '../../../assets/poster-4.jpg'
import poster5 from '../../../assets/poster-5.jpeg'
import poster6 from '../../../assets/poster-6.png'
import classes from './Posters.module.css'
import PosterImage from './PosterImage/PosterImage'
import PosterInteraction from './PosterContent/PosterInteraction'
import Button from '../../UI/Button/Button'


const Body = (props) => {
    let posters = [
        {
            poster: poster1,
            name: "Web Developer",
            content: "Street-smart Dominic's armed robbery of a convenience store goes wrong when he crosses paths with hard-working Jay,..."
        }, {
            poster: poster2,
            name: "Graphic Design",
            content: "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Defected stormtrooper Finn and ..."
        }, {
            poster: poster3,
            name: "Data Analysic",
            content: "After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him."
        }, {
            poster: poster4,
            name: "Video Production",
            content: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man."
        }, {
            poster: poster5,
            name: "Python Programming",
            content: "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his new-found ally, ..."
        }, {
            poster: poster6,
            name: "Computer Programming",
            content: "The story revolves around Bauua Singh (Shah Rukh Khan), a vertically challenged man, who is full of charm and wit,..."
        }


    ]
    return (
        <div className="container">
            <div className={["row", classes.Body].join(' ')}>
                {posters.map((poster, index) => (
                    <div className="col-lg-4 col-md-6" key={poster.poster}>
                        <div className={[classes.Wrapper].join(' ')}>

                            <PosterImage
                                poster={poster.poster}
                                index={index} />

                            <PosterInteraction
                                loved={Math.floor(Math.random() * 100)}
                                watched={Math.floor(Math.random() * 10000)}
                                name={poster.name}
                                content={poster.content} />
                            <Button btnType="posterBtn" btnWidth="80px">BUY</Button>
                            <Button btnType="posterBtn" btnWidth="80px">DETAILS</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Body