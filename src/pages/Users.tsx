import React from 'react'
import $axios from '../http'
import { Button, Typography } from '@mui/material'

const Users:React.FC = () => {

    const fetchUsers = async () => {
        try {
            const res = await $axios.get('/users')
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Button onClick={fetchUsers}>
        <Typography>
            FETCH
        </Typography>
    </Button>
  )
}

export default Users