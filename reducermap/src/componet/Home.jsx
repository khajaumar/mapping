import React from "react";
import {reducer} from "../Reducer";

export const Home=()=>{
 return(
     <div>
         <table>
          <tr>
              {
              reducer.data.map((item)=> (
               <td>
                   <figure>
                   <img src={`${item.imgurl}`} alt="" width="200px"/>
                   <figcaption>{item.title}</figcaption>
                   </figure>
                   
                </td>))
                }
          </tr>

         </table>
     </div>
 )


}