
import React from "react";
import movie from '../assets/movie.png'
import booking from '../assets/booking.png'
import bookstore from '../assets/bookstore.png'
import figma from '../assets/figma.png'

import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Booking App-using MERN Stack' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={booking} alt="" />
            </a>}
            {title=='Movie App using React' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={movie} alt="" />
            </a>}
            {title=='Bookstore App using MERN' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={bookstore} alt="" />
            </a>}
            {title=='Movie App using Figma' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={figma} alt="" />
            </a>}
            

            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Movie App using React',
        description:'This is a simple frontend project called MovieLand which makes use of react for displaying movies .Data is generated from api-key using Omdb website',
        image: {movie},
        git:'https://github.com/nikhithareddy1824/Movie-App-React',
        technologies:[ ,'ReactJS' , 'NodeJS','RestAPI']
    },
    {
        title:'Movie App using Figma',
        description:'This is a simple Graphic Designing  project which makes  displays the ui of a  movies app .It is done using Figma by using various advanced tools like auto layout',
        image: {figma},
        git:'https://www.figma.com/proto/DDladqq8waP2aFQpcf4C8a/Movie-App?page-id=0%3A1&node-id=11-391&node-type=canvas&viewport=547%2C393%2C0.67&t=dE6YwJajKhOngI20-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=0%3A3',
        technologies:['UI' , 'Figma']
    },
    {
        title:'Hotel Booking using MERN  ',
        description:'A Hotel Booking App built using the MERN stack (MongoDB, Express.js, React.js, Node.js) is a web application that allows users to search, browse, and book hotel rooms. The app typically features user authentication, room availability checks, booking management,',
        image: {booking},
        git:"https://github.com/nikhithareddy1824/Booking-Mern",
        technologies:[ 'MongoDB','Expressjs','NordJS','React JS']
    },
   
    {
        title:'BookStore App using MERN  ',
        description:'The Bookstore app, built using the MERN stack (MongoDB, Express, React, Node.js), is a full-stack web application designed for browsing, purchasing, and managing books.',
        image: {bookstore},
        git:"https://github.com/nikhithareddy1824/Booking-Mern",
        technologies:[ 'MongoDB','Expressjs','NordJS','React JS']
    }
]

export default Projects