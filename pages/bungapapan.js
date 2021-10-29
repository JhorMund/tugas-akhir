import { 
  Button,
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Grid,
  Link,
  Typography, 
} from "@material-ui/core";
import NextLink from 'next/link';
import Layout from "../components/Layout";
import data from '../utils/data';

export default function bungapapan() {
  return (
    <Layout>
      <div>
        <NextLink href="/" passHref>
          <Link>
            <Typography>
              Kembali
            </Typography>
          </Link>
        </NextLink>
        <h1>Bunga Papan</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid 
              item 
              md={4} 
              key={product.name}
            >
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia 
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>
                        {product.name}
                      </Typography>
                      <Typography>
                        Rp.{product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Button
                    size="small" 
                    color="primary"
                    variant="contained"
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}