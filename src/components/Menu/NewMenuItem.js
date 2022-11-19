import React, {useEffect, useRef, useState} from "react";
import classes from './NewMenuItem.module.css'
import IconButton from "../UI/IconButton";
const NewMenuItem = (props) => {
    const imageString = `url(http://localhost:5000${props.imageURL})`
    const itemDescriptionRef = useRef()
    const [overflow, setOverflowActive] = useState(false)
    const [descriptionExpanded, setDescriptionExpanded] = useState(false)

    useEffect(() => {
        if(itemDescriptionRef.current){
            let e = itemDescriptionRef.current
            let active =  e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
            console.log('ellipsis is active', active, '\nscroll width, height: ', e.offsetHeight, e.scrollHeight)
            if(e.offsetHeight === e.scrollHeight){
                setOverflowActive(false)
            }else{
                setOverflowActive(true)
            }

        }
    },[])

    const isEllipsisActive = () => {
        let e = itemDescriptionRef.current
        return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
    }
    // console.log(isEllipsisActive())
    const descriptionStyles = descriptionExpanded ? ` ${classes.itemDescriptionExpanded}` : `${classes.itemDescription}`
    const handleToggleDescription = () => {
        setDescriptionExpanded(state => !state)
    }

    const stylesButton = {
        gridArea: '2/1/3/1',
        // backgroundColor
    }

    return(
        <React.Fragment>
            {/*<div className={classes.itemImage__container}>*/}
                <div className={classes.image2} style={{backgroundImage: imageString}}>
                    {/*<img className={classes.itemImage} src={`http://localhost:5000${props.imageURL}`} />*/}
                </div>
            {/*</div>*/}

            <div className={classes.itemInformation}>
                <span className={classes.itemName}>{props.name}</span>
                <div className={classes.description__container}>
                    <div className={descriptionStyles}><p ref={itemDescriptionRef}>{props.description}</p></div>
                    {overflow && (descriptionExpanded ? <IconButton onClick={handleToggleDescription} iconName={'expand_less'} styles={stylesButton} /> : <IconButton onClick={handleToggleDescription} iconName={'expand_more'} styles={stylesButton} />)}
                </div>

                <span className={classes.itemPrice}>${props.price}</span>
            </div>

        </React.Fragment>
    )
}

export default NewMenuItem