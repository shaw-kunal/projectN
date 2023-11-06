import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import "./list.scss"
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'


const List = () => {
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        console.log(distance);
        if (direction === "left" && slideNumber > 0) {
            setIsMoved(true);
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }

        if (direction === 'right' && slideNumber < 5) {
            setIsMoved(true);
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }

    }

    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined
                    className='slideArrow left'
                    onClick={() => handleClick("left")}
                    style={{display:!isMoved&&"none"}}
                />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined
                    className='slideArrow right'
                    onClick={() => handleClick("right")}

                />
            </div>
        </div>
    )
}

export default List