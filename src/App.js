import Header from './Header'
import Footer from './Footer'
import BasicExample from './BasicExample';


function App() {
  return (
    <div className="App">
      <Header/>
      <BasicExample                  price={34} />
      <BasicExample title={"phones"} price={45} />
      <BasicExample title={"PCs"} price={345} /> 
      
      <Footer/>
    </div>
  );
}

export default App;
