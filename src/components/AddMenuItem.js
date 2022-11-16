import React from "react";
import classes from './AddMenuItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RestaurantActions} from "../store/restaurant-slice";

const AddMenuItem = () => {
    const { category, name, price, description, imageURL } = useSelector(state => state.restaurant.newMenuItem)
    const dispatch = useDispatch()

    const handleItemCategoryChange = (event) => {
        const itemCategory = event.currentTarget.value
        console.log("itemCategoryChange", itemCategory)
        dispatch(RestaurantActions.updateNewMenuItemCategory(itemCategory))
    }
    const handleItemNameChange = (event) => {
        const itemName = event.target.value
        dispatch(RestaurantActions.updateNewMenuItemName(itemName))
    }
    const handleItemPriceChange = (event) => {
        const itemPrice = event.target.value
        dispatch(RestaurantActions.updateNewMenuItemPrice(itemPrice))
    }
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

    return(
        <div>
            Add menu item

            <form>
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
                    <input id={'item_name'} type={'text'} onChange={handleItemNameChange} value={name} />
                </div>


                <div className={classes.newMenuItemControl}>
                    <label htmlFor={'price'}>Item Price</label>
                    <input id={'price'} type={'number'} onChange={handleItemPriceChange} value={price} min={0.00} step={0.01} />
                </div>


                <div className={classes.newMenuItemControl}>
                    <label>Item Description</label>
                    <textarea maxLength={100} rows={10} cols={30} placeholder={"Item description"} onChange={handleItemDescriptionChange} value={description} />
                </div>


                <div className={classes.newMenuItemControl}>
                    {imageURL && <img id={'item-image-preview'} alt={'new item image preview'} src={imageURL}/>}
                    <label htmlFor={'item-image'}>
                        <span className="material-symbols-outlined">file_upload</span>
                        <input id={'item-image'} type={'file'} onInputCapture={handleItemImageChange} hidden />
                    </label>
                </div>



                <button>Add Item To Menu</button>

            </form>
        </div>
    )
}

export default AddMenuItem;
