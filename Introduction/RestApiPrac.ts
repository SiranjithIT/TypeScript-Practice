interface Product{
  id: string;
  name: string;
  data: object;
}

interface ProductReq{
  name: string;
  data: object;
}

const getProducts = ():Promise<Product[]> => {
  const headers: Headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Accept', 'application/json')

  const request: Request = new Request("https://api.restful-api.dev/objects",{
    method: 'GET',
    headers: headers
  })

  const products:Promise<Product[]> = fetch(request)
                        .then(res=>res.json())
                        .then(res=>{return res as Product[]})
  return products
}

const addProducts = async(product: ProductReq): Promise<Product> => {
  const headers: Headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Accept', 'application/json')

  const request: Request = new Request("https://api.restful-api.dev/objects",{
    method: 'POST',
    headers: headers,
    body: JSON.stringify(product)
  })

  const response = await fetch(request);
  const addedProduct = await response.json();
  return addedProduct as Product;
}


getProducts().then(
  res=>console.log(res)
)

const product: ProductReq = {
   name: "Apple MacBook Pro 16",
   data: {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}

addProducts(product).then(
  res => console.log(res)
)