import { useState, useEffect } from 'react';

import {
  Card,
  Table,
  Button,
  Container,
  TableBody,
  TableContainer,
  TablePagination,
} from '@mui/material';

import { getData } from 'src/routes/api';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { Heading } from 'src/components/component-heading';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

// ----------------------------------------------------------------------

export const UserView = () => {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [state, setState] = useState({
    users: [],
    loading: true,
    error: null,
  });

  const fetchUsers = async () => {
    try {
      const { data } = await getData('api/v1/users/');
      setState({
        users: data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        users: [],
        loading: false,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: state.users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const getLabels = () => {
    if (state.users && state.users.length > 0) {
      const user = { ...state.users[0] };
      delete user.imageUrl;
      const keys = Object.keys(user).map((key) => ({
        id: key,
        label: key.includes('Name')
          ? key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (str) => str.toUpperCase())
          : key.charAt(0).toUpperCase() + key.slice(1),
      }));
      return [
        ...keys,
        {
          id: 'action',
          label: '',
        },
      ];
    }

    return [];
  };

  return (
    <Container>
      <Heading
        title="Users"
        content={
          <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        }
      />

      <Card>
        <UserTableToolbar filterName={filterName} onFilterName={handleFilterByName} />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleSort}
                headLabel={getLabels()}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow key={row.id} {...row} />
                  ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, state.users.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={state.users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
};
