import React, { useEffect } from 'react'
import { TODO } from '../../Types/types'

const RenderComponent = (todo: any):JSX.Element => {

    console.log(todo)
    return(
                <div>
                    <div>{todo}</div>
                </div>
    )
}

 export default RenderComponent
