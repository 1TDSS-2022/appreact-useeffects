import React from "react"
import Api from "./components/api/Api"

export default function App(){
    
    const objeto = [
        {
            nome: "Dougra Weberx",
            id: 196,
        },
        {
            nome: "Manelas Ésim",
            id:157,

        }


    ]
    
    
    return(
        <div>
            <h1>ESTUDO SOBRE USE-EFFECTS</h1>
            <Api/>
        </div>
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