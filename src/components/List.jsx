import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material'
import React, { useState } from 'react'

const List = () => {
  var[names,setNames] =useState (
    [
        {"sname":"Tiya","age":10},
        {"sname":"Maya","age":20},
        {"sname":"Kuttus","age":30}
    ])
return (
<div>
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell Style={{color:"red",fontFamily:"cursive",fontSize:"50px"}}>Names</TableCell>
                    <TableCell Style={{color:"blue",fontFamily:"cursive",fontSize:"50px"}}>Age</TableCell>
                </TableRow>
                
            </TableHead>
            <TableBody>
                {names.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.sname}</TableCell>
                            <TableCell>{val.age}</TableCell>
                    
                        </TableRow>
                    )
                })}

                




            </TableBody>
        </Table>
    </TableContainer>
</div>
)
}

export default List