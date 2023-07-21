import Header from './Header'
import Footer from './Footer'
import Card2 from './Card2';


function App() {

  let productArr = [
    {id:1, title: "phone", price: 24, stock: 100},
    {id:2, title: "laptop", price: 43, stock: 150},
    {id:3, title: "clothes", price: 56, stock: 200}
  ];

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header/>

      {
        productArr.map((product)=>{
          return <Card2 key={product.id} title={product.title} price={product.price} stock={product.stock} />
        })
      }

      {/* <Card                  price={34} />
      <Card title={"phones"} price={45} />
      <Card title={"PCs"} price={345} />  */}
      
      <Footer/>
    </div>
  );
}

export default App;
