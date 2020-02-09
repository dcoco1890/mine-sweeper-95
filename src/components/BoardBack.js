import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { plantFlag } from "../utils/redux/actions";



const BoardBack = props => {
    const [minesLeft, setMinesLeft] = useState(() => {
        return props.mines
    })
    useEffect(() => {
        
    })

    return(    

    )
}

export default BoardBack;