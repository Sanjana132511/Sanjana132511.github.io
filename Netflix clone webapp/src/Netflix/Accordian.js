import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function Accordian(){
    return(
        <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="accordian">
            <li>
                <input type="radio" name="accordian" id="first"/>
                <label for="first">What is Netflix?</label>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere assumenda
                     minus ut nulla optio consectetur enim a modi,
                     sequi laudantium numquam soluta cum reiciendis? Minima optio eius animi culpa?
                </div>
            </li>
            <li>
                <input type="radio" name="accordian" id="second"/>
                <label for="second">How much does Netflix cost?</label>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere assumenda
                     minus ut nulla optio consectetur enim a modi,
                     sequi laudantium numquam soluta cum reiciendis? Minima optio eius animi culpa?
                </div>
            </li>
            <li>
            <input type="radio" name="accordian" id="third"/>
            <label for="third">Where can I watch? </label>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere assumenda
                 minus ut nulla optio consectetur enim a modi,
                 sequi laudantium numquam soluta cum reiciendis? Minima optio eius animi culpa?
            </div>
        </li>
        <li>
            <input type="radio" name="accordian" id="fourth"/>
            <label for="fourth">How do I cancel? </label>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere assumenda
                 minus ut nulla optio consectetur enim a modi,
                 sequi laudantium numquam soluta cum reiciendis? Minima optio eius animi culpa?
            </div>
        </li>
        <li>
            <input type="radio" name="accordian" id="five"/>
            <label for="five">What can I watch on Netflix? </label>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere assumenda
                 minus ut nulla optio consectetur enim a modi,
                 sequi laudantium numquam soluta cum reiciendis? Minima optio eius animi culpa?
            </div>
        </li>
        <li>
            <input type="radio" name="accordian" id="six"/>
            <label for="six">What can Is Netflix good for kids? </label>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid facere assumenda
                 minus ut nulla optio consectetur enim a modi,
                 sequi laudantium numquam soluta cum reiciendis? Minima optio eius animi culpa?
            </div>
        </li>
        </ul>
        <small style={{color:"white"}}>
            Ready to watch? Enter your email to create or  restart your membership.
        </small>
        <form className="email-signup">
            <input type="email" placeholder="Email address" required/>
            <button type="submit">Get Started <FontAwesomeIcon icon={faAngleRight}/>    </button>
    
        </form>

      </div>
    )
}