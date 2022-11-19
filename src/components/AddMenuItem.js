import React, {useCallback} from "react";
import classes from './AddMenuItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RestaurantActions} from "../store/restaurant-slice";
import {useNavigate} from "react-router-dom";
import IconButton from "./UI/IconButton";

const AddMenuItem = () => {
    const { category, name, price, description, imageURL } = useSelector(state => state.restaurant.newMenuItem)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleItemCategoryChange = (event) => {
        const itemCategory = event.currentTarget.value
        console.log("itemCategoryChange", itemCategory)
        dispatch(RestaurantActions.updateNewMenuItemCategory(itemCategory))
    }
    const handleItemNameChange = (event) => {
        const itemName = event.target.value
        dispatch(RestaurantActions.updateNewMenuItemName(itemName))
    }
    const handleItemPriceChange = useCallback((event) => {
        const a = event.target.value
        let array = []
        const b = a.split('')
        b.forEach((b, index) => {
            if(b !== '.'){
                array.push(b)
            }
        })
        let change = ''
        array.splice((array.length-2), 0 , '.')
        if(array.length <= 4){
            for(let x = 0; x < (5-array.length); x++) {
                change = change.concat('0')
            }
        }
        array.forEach((val, i) => {
            if(array.length > 5 && i == 0 && val == '0'){

            }else{
                change = change.concat(val)
            }

        })


        console.log(change)
        dispatch(RestaurantActions.updateNewMenuItemPrice(change))


    }, [price])
    const handleItemDescriptionChange = (event) => {
        const itemDescr = event.target.value
        dispatch(RestaurantActions.updateNewMenuItemDescription(itemDescr))
    }
    const handleItemImageChange = (event) => {
        const itemImageInput = document.getElementById('item-image')
        const itemImageFile = itemImageInput.files[0]
        const itemImageUrl = URL.createObjectURL(itemImageFile)

        dispatch(RestaurantActions.updateNewMenuItemImageFile(itemImageUrl))
    }

    const handleSubmitItem = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        const itemImageInput = document.getElementById('item-image')
        const itemImageFile = itemImageInput.files[0]
        formData.append('itemImageFile', itemImageFile)
        formData.append("category", category)
        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)

        const res = await fetch("http://localhost:5000/restaurant/new-item", {method: 'POST', body: formData})
        if(res.ok){
            dispatch(RestaurantActions.resetFormField())
            // const json = await res.json()
            // dispatch(RestaurantActions.updateMenuItems(json))
            navigate('/restaurant-menu/')
        }else{
            dispatch(RestaurantActions.setError(res.statusMessage))
            console.log('Error uploading new item...')
        }
    }

    return(
        <div>

            <span className={classes.title}><h3>Create New Menu Item</h3></span>

            <form onSubmit={handleSubmitItem}>
                <div className={classes.newMenuItemControl}>
                    <label htmlFor={'menu_category'}>Item Category</label>
                    <select name={'menu_category'} id={'menu_category'} onChange={handleItemCategoryChange} value={category}>
                        <option value={'appetizer'}>Appetizer</option>
                        <option value={'entree'}>Entree</option>
                        <option value={'beverage'}>Beverage</option>
                    </select>
                </div>


                <div className={classes.newMenuItemControl}>
                    <label htmlFor={'item_name'}>Item Name</label>
                    <input id={'item_name'} type={'text'} onChange={handleItemNameChange} value={name} placeholder={'Item name'} />
                </div>


                <div className={classes.newMenuItemControl}>
                    <label htmlFor={'price'}>Item Price</label>
                    <input id={'price'} type={'string'} onChange={handleItemPriceChange} value={price}/>
                </div>


                <div className={classes.newMenuItemControl}>
                    <label>Item Description</label>
                    <textarea maxLength={300} rows={10} cols={30} placeholder={"Item description"} onChange={handleItemDescriptionChange} value={description} />
                </div>


                <div className={classes.newMenuItemImageUpload}>
                    {imageURL ? (
                        <div className={classes.imageUploadPreview__container} style={{backgroundImage: `url(${imageURL})`}}>
                            {/*<img id={'item-image-preview'} alt={'new item image preview'} src={imageURL}/>*/}
                        </div>
                    ): <div className={classes.imageUploadPreview__container} style={{backgroundColor: `slategray`}}></div>}
                    <label htmlFor={'item-image'}>
                        Upload Image
                        <span className="material-symbols-outlined">file_upload</span>
                        <input id={'item-image'} type={'file'} onInputCapture={handleItemImageChange} hidden />
                    </label>
                </div>
                <div className={classes.submitNewItemButton__container}>
                    <IconButton iconName={'send'} styles={{backgroundColor: 'rgba(255,255,255,1) '}} />
                </div>


            </form>
        </div>
    )
}

export default AddMenuItem;
