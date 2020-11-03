import React from 'react'
import Member from './Member/Member'
import member1 from '../../../assets/member-1.jpg'
import member2 from '../../../assets/member-2.png'
import member3 from '../../../assets/member-3.jpg'
import classes from './Team.module.css'

const Team = (props) => {
    const team = [{
        image: member1,
        name: "Lê Duy Khánh",
        role: "Student",
        description: "My name is Lê Duy Khánh, I'm a freelance web developer and worked with React in many projects. I'm also a 5-star rated instructor here on Udemy."
    }, {
        image: member2,
        name: "Dương Thanh Nguyên",
        role: "Student",
        description: "I'm Dương Thanh Nguyên, a full-stack developer living in beautiful Philadelphia! I launched my first Udemy course in 2014 and had a blast teaching and helping others."
    }, {
        image: member3,
        name: "Nguyễn Trung Nam",
        role: "Student",
        description: "I'm a full-stack web developer and designer with a passion for building beautiful things from scratch. I've been building websites and apps since 2007."
    }]
    return (
        <div className={["container", classes.Team].join(' ')}>
            <div className="row">
                {team.map(member => (
                    <div className={["col-md-6 col-lg-4", classes.Content].join(' ')} key={member.name}>
                        <Member
                        image={member.image}
                        name={member.name}
                        role={member.role}
                        description={member.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team