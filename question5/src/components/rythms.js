
const Rythm = ({matches}) => {

    const renderContent = () => {
        if(!matches) {
            return <></>
        }
        if(matches.length > 0){
            return matches?.map(item => {
                return (
                    <p key={item.word}>{item.word}</p>
                )
                }) 
        } else {
            return <p>Nothing has been found</p>
        }
    }

 return renderContent()
}



export default Rythm