import React, {useState, useEffect} from 'react';
//import ItemContainer from './ItemContainer';
import Item from '../maple/Item'


function ItemSearch(){
    const [itemDB, setItemDB] = useState({})
    const [items, setItems] = useState([])
    const [searchTimeout, setSearchTimeout] = useState(0)

    function generateItemDB(){
        return fetch("https://maplestory.io/api/gms/251/item/list")
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    useEffect(() =>{
        generateItemDB().then((data) =>{
            setItemDB(data)
        })
    })

    function getItemByID(id){
        return fetch(`https://maplestory.io/api/gms/251/item/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
    }

    function searchByName(evt){
        var name = evt.target.value
        if(searchTimeout) clearTimeout(searchTimeout);
        setSearchTimeout(setTimeout(() => {

            var tempItems = []

            for (var i = 0; i<itemDB.length; i++){
                if(itemDB[String(i)]["name"] === name){

                    getItemByID(itemDB[String(i)]["id"]).then(data => {
                        tempItems.push(data)
                        console.log(data)
                    })
                    //console.log(itemDB[String(i)]["id"])
                }
            }

            setItems(tempItems)

        }, 300))

        //console.log(name)
    }

    return(
        <div className="search-pane">
            <p>
                # of Items: {itemDB.length}
            </p>
            <input onChange={e => searchByName(e)}/>
            <div>
                <p>
                    Found {items.length} results
                </p>
                {
                    Object.keys(items || {}).map((value, index) =>{
                        const data = items[index]
                        return <Item icon={data["metaInfo"]["icon"]} itemname={data['description']['name']} tradeblock={data['metaInfo']['tradeBlock']}/>
                        //return <img src={`data:image/png;base64,${data["metaInfo"]["icon"]}`} />
                    })
                }
            </div>
        </div>
    )
}

export default ItemSearch;