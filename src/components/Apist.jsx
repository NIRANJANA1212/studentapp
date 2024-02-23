import { TableCell, TableContainer, TableHead, TableRow, Table, TableBody, Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Apist = () => {
    var [user, setUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4001/students")
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
            })
    }, []);

    const deleteUser = (id) => {
        axios.delete("http://localhost:4001/students/" + id).then(()=>{
            alert("Deleted Row");
            window.location.reload();
        }).catch(()=>{
            alert("Deleting failed");
        })
    }

    const editUser = (id) => {
        axios.delete("http://localhost:4001/students/" + id)
        .then((reponse)=>{
            setSelected(reponse.data);
            setEdit(true);


        })
            .catch(() => {
            alert("Deleted Row");
            window.location.reload();
        }).catch(()=>{
            alert("cannot edi now");
        });
    };

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>age</TableCell>
                            <TableCell>dept</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val, ind) => {
                            return (
                                <TableRow>
                                    <TableCell key={ind}>{val.student_name}</TableCell>
                                    <TableCell key={ind}>{val.student_age}</TableCell>
                                    <TableCell key={ind}>{val.student_dept}</TableCell>
                                    <TableCell>
                                        <Button>Edit</Button>
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => {
                                            deleteUser(val._id);
                                        }} >Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Apist
