import { Children, createContext } from "react";
export const CreateContext=createContext();

export const ContextProvider=({children})=>{
   
    const Handlecart=((val)=>{
  
   })
   return <CreateContext.Provider value={0}>
{children}
   </CreateContext.Provider>
}