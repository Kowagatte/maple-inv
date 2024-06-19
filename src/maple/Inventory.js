import invimg from '../resources/emptyinventory.png';
import './inventory.css'

function Inventory() {
    return (
        <img src={invimg} alt="inv" className='inventory' draggable='false' />
    )
}

export default Inventory;
