import {useEffect } from "react"
import { TODO } from "../../Types/types"

const  Render = async (Todo: [TODO], visible: boolean) :JSX.Element  => {
    return(
        <>
            {
                Todo.map( post => (
                    <div>
                        <div>{post.id}</div>
                        <div>{post.description}</div>
                    </div>
                ))
            }
        </>
    )
}

export default Render