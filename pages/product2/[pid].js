import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import { 
  Button,
  Card,
  Grid, 
  Link, 
  List,
  ListItem,
  Typography,
 } from '@material-ui/core';
import useStyles from '../../utils/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function ProductScreen() {
  const classes = useStyles
  const router = useRouter();
  const { pid } = router.query;
  const product = data.product1.find((a) => a.pid === pid);
  if (!product) {
    return <div> Product Tidak Ditemukan</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>
              Kembali
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>  
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
            <Typography>
              Kategory: {product.category}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Deskripsi:{product.description}
              </Typography> 
            </ListItem>
            <ListItem>
              <Typography>
                Ukuran:{product.ukuran}
              </Typography> 
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      Status :
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'ada barang' : 'tidak terbatas'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      Harga :
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      Rp. {product.price}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button 
                  fullwidth 
                  variant="contained" 
                  color="primary"
                >
                  Add To Cart
                </Button>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Typography>
                    Jika Anda Ingin Memesan Tinggal Kontak Kami Di Aplikasi Whatsapp
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Button 
                  fullwidth 
                  variant="contained" 
                  color="primary" 
                  href="https://api.whatsapp.com/send?phone=628999207632&text=Halo,%20Saya%20Mau%20Pesan%bunga." 
                  passHref
                  startIcon={<WhatsAppIcon/>}
                >
                  WhatsApp
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
