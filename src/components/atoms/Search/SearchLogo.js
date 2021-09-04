import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function SearchLogo({onClick}) {
    return (
        <SearchSharpIcon data-testid='searchId' onClick={onClick} style={{ fill:"black", marginLeft: "5px", cursor:"pointer"}}/>
    )
}

export default SearchLogo
