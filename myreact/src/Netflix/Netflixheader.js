import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export function Netflixheader(){
    return(
        // <div className="header">
        //  <h1 style={{color:"red"}}>NETFLIX</h1>

        // </div>
        <div className="header">
        <nav>
          
            <a href="#"><img src="https://fontmeme.com/permalink/241031/07f8917d3f7cbb46966ab29626a91143.png" alt="netflix-font" border="0" className="logo"/></a>
         
            <div>  
           {/* <button className="lang-btn">木<sub>A</sub> English 
           <search className="fa-solid fa-sort-down" >
            <option>English</option>
            <option>English</option>

            </search></button> */}
              {/* <button class="lang-btn"><p>木<sub>A</sub>    English <i class="fa-solid fa-sort-down"></i></p></button> */}
            <select className="lang">
     
            <option>  木<sub>A</sub>    English </option>
            <option>     木<sub>A</sub>   हिन्दी</option>
            </select>
               
                   <button className="sign-btn">Sign In</button>
            </div>
        </nav>
        <div className="header-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Starts at $6.99.Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or  restart your membership.</p>
        <form className="email-signup">
            <input type="email" placeholder="Email address" required/>
            <button type="submit">Get Started <FontAwesomeIcon  icon={faAngleRight} /></button>

        </form>

        </div>
    </div>
    )
}