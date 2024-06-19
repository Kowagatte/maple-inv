//import React, {useState, useEffect} from 'react';
import br from '../resources/itembr.png'
import unt from '../resources/untradable.png'
import iconpanel from '../resources/iconpanel.png'
import './item.css'

function Item(props){

    return(
        <div className='item'>
            <div className='title-bar'>
                <span>{props.itemname}</span>
                <br/>
                { props.tradeblock === true && <img alt='untradable' src={unt} className='untradable'/> }
            </div>
            <img alt={'br'} src={br} className='br' />
            <div className='item-req'>
                <img alt={'item-panel'} src={iconpanel} className='item-panel' />
                <img alt={props.itemname} src={`data:image/png;base64,${props.icon}`} className='icon'/>
            </div>
            <img alt={'br'} src={br} className='br' />
        </div>
    )
}

export default Item;