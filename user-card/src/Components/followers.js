import React from 'react';

const Followers = (props) => {
    console.log(props)
    return(<>
        {props.followers.map(i => <div key={i.login}>{i.login}</div>)}
         </>
        )
}

export default Followers;