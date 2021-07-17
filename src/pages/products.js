import { gql,useQuery,useMutation } from '@apollo/client'
import InsertProduct from './insertProduct';

const GET_PRODUCTS = gql`
query{
    allProducts{
        id,
        name,
        price,
        Category{
            name
        }
    }
}   
`;

const INSERT_PRODUCT=gql`
mutation($input: ProductInput!){
    insertProduct(input: $input ){
        status
    }
} 
`;

function AllProducts() {

    const [callInsertProduct, { dataM }] = useMutation(INSERT_PRODUCT,{
      refetchQueries: [
        { query: GET_PRODUCTS }
      ]
    });

    const { loading, error, data } = useQuery(GET_PRODUCTS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return ( 
      <>
      <InsertProduct callInsertProduct={callInsertProduct}/>
      {
      data.allProducts.map((product) => (
        <div className="card" key={product.id}>
          <h2>{product.Category.name}/ {product.name}</h2>
          <p>{product.price}&euro; </p>
        </div>
      ))
      }
      
      </>
    );
  }
  
  export default AllProducts;