import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Menu } from '@material-ui/core';
import { useForm, FormProvider} from 'react-hook-form';

import FormInput from './CustomTextField';

import { commerce } from '../../lib/commerce';


const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState([]);
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState([]);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState([]);

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    console.log(countries)
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
  }, [])
  
  const methods = useForm();

  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider { ... methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <FormInput required name='firstName' label='First name' />
            <FormInput required name='lastName' label='Last name' />
            <FormInput required name='address1' label='Address' />
            <FormInput required name='email' label='Email' />
            <FormInput required name='city' label='City' />
            <FormInput required name='zip' label='ZIP / Postal Code' />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.label}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm
