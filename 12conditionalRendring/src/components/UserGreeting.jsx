import PropTypes from 'prop-types'


 function UserGreeting({isLogedIn=true,username="Guest"}){

    const greetingStyles={
        backgroundColor:"green",
        textAlign:"center", 
         fontSize:"48px"

    }
    const errorStyles={
        backgroundColor:"red",
        textAlign:"center",
        fontSize:"48px"

    }

    const welcomeMessage= <h2 style={greetingStyles}>Welcome {username}</h2>
    const loginPrompt= <h2 style={errorStyles}>Please log in to continue</h2>

    return(
        isLogedIn ? welcomeMessage :loginPrompt
                           
    )


}
UserGreeting.propTypes = {
  isLogedIn: PropTypes.bool,
  username: PropTypes.string,
};


UserGreeting.defaultProps = {
  isLogedIn: true,
  username: 'guest',
};



export default UserGreeting