import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Products/Product'

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://lh3.googleusercontent.com/uNWidKbKEA3D9vWJhF1YPtRhnmC9F5RJ9G-bt6wpiv_AMZYcfRTXgXyFZzvyUIDmZ90B3zF3LdgjzeILNcI4vzlwLTPfdC5dAsfGUREOUVUdXVllcHcLu1dHQDbuGQqPuApBwlMa4igNgTzk_2prA0vNwYd7NXGZcMNnnZRc8JMD7P4206NAOVmbwNPJIeK_wmVv0PwOiAPcNg4Lww04oMrTGB1pCI4Z6u2FYpyqCiusexRG8F_PcW_2hMJojjdDOHSO_OWuF1SsIMn64f0yhIK_S_Mwn-Sn6rQ_PxGNnkY_Gz39h_ALrjQOILGmwJbw7xkEdrvVZUo5SAPLaazftQSrKpW47T1dQcDAeZgPFzc_2XYs_7mKjZrayiik_qyT8HiMWPXfDWnv9G1t1Ee4aJTOwxTU9KN43eg9mVdlDFRFrv7JSSkPFsLLUqNGrwZhGYC6LSo9HbeM3-uA3IhOF-KS9VkS7aSPaU8-1K39kaOzUushO8Ll54QJ9jP2QrIJ5jLDACxZLBe-K6h1UBbr4SUFo0zxK3hiO788Fq-z3hLQPtipkE5HmqfcK6qcyBi2uQSG81DD-M3DXzsjabYRhwO7Y5l42y4yw2fnUGI9yxyownLX7D_0I37aXpWE4R8hK8FfPzCxfY-DXI1VtbW6h5cKyD_X0BKVsrtV-WEp1-YP6irQFzKAnbt-sMnelyI=w1433-h955-no?authuser=0' },
  { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://lh3.googleusercontent.com/7FqIJpamAaS8y_CNAr-foiUiGjRZoPJLSWlYNi9TE_YKV-q7_z1-fV9OcMy_rw1wT604tD0Gr6TE7N24pWy9ErMIJv8GgSLpTlxq2wvEr9oMEWnbOQzCLHNY8drBaWXqspe3iIp_24vD_f2hvL3fYqFhfrImkM2S_5k5aV8VqB1KyEAserhq8Kz3qZNZsz6Dfgfiaic1EF2sRQa2Xbmy_Jru68g9fokcdyo7PAjBH6yeW_yAytnteeg2Mx3lMr32TbxhjW31mgdPe2FZ0lkE5fVq3VXufkcsMaf7DJCGTvPS1qJ42vF2qSxhBLhCegvZaajmGFMoQk6t-WmvOJrjcnlVc-8cLAun3hsCd8ZyZKZ-jsuJbdmkGGWiPcRLKVwskoHQrj1SDTTxjwfaz9N4w-znDKFetc6nQFZRmnd8NUcEP7gYi3C4IQ6rXdZKtVcPFY6YDS-e0HHPc_G5W_D5scBiH2OyN96cJRxxOdyKdHuI5MxQm4yVvOFDt5qFTFwfQCL6JaawY1KBu-1CKJVoW7Bacl47dLcpeI1SbcN43KnQgLkXgVqWHzAMYt0RXo8RM9YdfQvx_Q7tRC-iDc-du-AHS9Kq8U6SmMKCuLiKEKsi-lykilyMjGoW2j2Jw4CXgktUf_xILP_7GkipdkTKZoPZpTp4NuTLPGQ5BTSJEKpxpNH5uq1GFaBkgmPZS3Y=w538-h955-no?authuser=0' },
];

const Products = () => {
  console.log(products);
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={ product }/>
          </Grid>
        )
        )}
      </Grid>
    </main>
  );
}

export default Products;