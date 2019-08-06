import React from 'react';
import Card from './card'

const Followers = (props) => {
    console.log(props)
    return(<>
        {props.followers.map(i => <Card key={i.login} {...i} />)}
         </>
        )
}

export default Followers;