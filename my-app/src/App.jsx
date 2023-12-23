import ActionAreaCard from './post';


function App() {
  return(

<div className="App">

    <div style={{display:'flex', justifyContent:'space-around', marginTop:'200px'}}>

      <ActionAreaCard imgSrc='https://images.pexels.com/photos/735174/pexels-photo-735174.jpeg?cs=srgb&dl=pexels-sameera-madusanka-735174.jpg&fm=jpg'/>
     
      <ActionAreaCard imgSrc='https://images.unsplash.com/photo-1615798763618-183906cd14b2?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     
      <ActionAreaCard imgSrc='https://images.unsplash.com/photo-1607863002591-e1718c499b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpemFyZHxlbnwwfHwwfHx8MA%3D%3D'/>

    </div>


      
    </div>  
    )
}

export default App;