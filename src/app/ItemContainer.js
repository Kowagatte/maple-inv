import React from "react";

class ItemContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {items: []}
    }

    render(){
        return(
            <div>
                <p>
                    Item Container
                </p>
            </div>
        )
    }

}

export default ItemContainer;