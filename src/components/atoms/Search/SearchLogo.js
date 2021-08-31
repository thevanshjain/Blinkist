import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function SearchLogo({onClick}) {
    return (
        <SearchSharpIcon onClick={onClick} style={{ fill:"black", marginLeft: "5px"}}/>
    )
}

export default SearchLogo
