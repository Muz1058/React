import reactLogo from './logo.svg'


function Card(){

    return(
        <div className="card">

            <img className="card-image" src={reactLogo} alt="" ></img> 
            <h2 className="card-title">React</h2>
            <p className="card-desc">i am create a card using react library</p>

        </div>
    )



}

export default Card