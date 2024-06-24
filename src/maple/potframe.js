import rare from '../resources/rare.png'
import epic from '../resources/epic.png'
import unique from '../resources/unique.png'
import legendary from '../resources/legendary.png'

function PotFrame(props){
    
    function getImage(){
        switch(props.potentialTier){
            case "rare":
                return rare;
            case "epic":
                return epic;
            case "unique":
                return unique;
            case "legendary":
                return legendary;
        }
    }

    return(
        <img alt={'potframe'} draggable={false} src={getImage()} className="potframe" />
    )
}

export default PotFrame;