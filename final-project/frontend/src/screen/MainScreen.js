import React, { useState } from 'react';
import ControlledCarousel from '../component/Carousel/Carousel';
import GridCard, {Groupexample} from '../component/GridCard';
import PageTitle from '../component/PageTitle';
import GroupCard from '../component/GroupCard';
import Exhibition from '../component/Exhibition';
import Button from 'react-bootstrap/Button';
import './MainScreen.css';



const MainScreen = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div style={{backgroundColor:"lightgrey"}}>
        <ControlledCarousel />
        {/* <PageTitle /> */}
        <div className='text-center'>
        <Button href="/template" className="mb-1" style={{border:"none",height:"15vh", width:"25ch", fontSize:"50px",backgroundColor:"#25274D", padding:"1%", fontStyle:"bold"}}>GET STARTED!</Button>
        </div>

        <GridCard  title="What are we?" text="Building a site doesn't need to involve coding - design and build with our visual canvas. Get started with one of our best-in-class website templates and customize it to fit your needs."/>
        <p></p>
        <Exhibition title="Example" />
        <p></p>
        <GroupCard title="Develop Group" className="no-border" />

        </div>
    )
}

export default MainScreen