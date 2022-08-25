import React from "react"

// import Api from "./components/api/Api"
import Menu from './components/menu/Menu'

// Rotas Nav
import MainRoutes from "./routes/MainRoutes"


// export default function App(){
//     return(
//         <div>
//             <h1>ESTUDO SOBRE USE-EFFECTS</h1>
//             <Api/>
//         </div>
//     )
// }

export default function App(){

    return (
        <>
            <Menu/>
            <MainRoutes/>
        </>
    )
}


//  const App = ()=>{
  
//     return(
//         <div>
//             <h1>ESTUDO SOBRE USE-EFFECTS</h1>
//         </div>
//     )
//  }

// export default App