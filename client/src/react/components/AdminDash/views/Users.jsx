import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {DataGrid} from '@mui/x-data-grid'
import { getAllUsers } from '../../../../redux/actions';


const Users = () => {
  
  let users = useSelector(state => state.users)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  
  //deberia hacer un Use effect y me traigo todos los users
  // ... cosa a tener en cuenta... los usuarios de google no estan.
  // podria traeme la info personal tambien...


  const newColumns = [
    { field: 'name', headerName: 'Name', width: 270 },
    { field: 'email', headerName: 'Email', width: 100 },
    { field: 'email_verified', headerName: 'Verified', width: 100},
    { field: 'img', headerName: 'Image', width: 90, renderCell: (params) => {
          return (
            <>
              {/* {<img className='w-10' src={params.value}></img>} */}
              <Avatar src={params.value}/>
            </>
          );
        }
    },
    {field: 'editar',headerName: 'Editar', width: 70, renderCell: ()=><EditIcon className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},
    {field: 'eliminar',headerName: 'Eliminar', width: 70, renderCell: ()=><DeleteRoundedIcon className='text-red-600 bg-gray-500 rounded-md' fontSize='large' />},


  ];

  return (
    users ?
    <div className='flex flex-4 items-center justify-center h-[100vh] bg-red-200 '>
      <DataGrid className='w-[80vw]'
        rows={users}
        columns={newColumns}
        pageSize={20}
        rowsPerPageOptions={[10]}
        // checkboxSelection 
      />
      {/* Users */}
    </div>: null
  )
}

export default Users