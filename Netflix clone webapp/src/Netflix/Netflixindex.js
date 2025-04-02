
// import { Register } from "./Register";
//import'./Register .css';
import './Netflixindex.css';  
import { Netflixheader } from "./Netflixheader";
import './Netflixheader.css';
import { Netflixabout } from "./Netflixabout";
import'./Netflixabout.css';
import { Main } from "./Main";
import'./Main.css';
import { Accordian } from "./Accordian";
import './Accordian.css';
import { Footer } from "./Footer";
import './Footer.css';








export function Netflixindex(){
    return(
    <> 
    <header>
  
       <Netflixheader  />
      </header>
     <main>
        <Netflixabout />
        <Main />
        <Accordian />
       
     </main>
     <footer>
    <Footer />
     </footer>

     
        
        </> 
    )
}