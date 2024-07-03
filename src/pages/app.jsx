import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { getData } from 'src/routes/api';

import { setUser } from 'src/store/reducers/user';
import { setCompany } from 'src/store/reducers/company';

import { AppView } from 'src/sections/overview/view';

export const fetchUserDetails = async (dispatch) => {
  try {
    const { data } = await getData('api/v1/profile/');
    dispatch(setUser(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCompanyDetails = async (dispatch) => {
  try {
    const { data } = await getData('api/v1/profile/company/');
    dispatch(setCompany(data));
  } catch (error) {
    console.log(error);
  }
};

export default function AppPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUserDetails(dispatch);
    fetchCompanyDetails(dispatch);
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <AppView />
    </>
  );
}
