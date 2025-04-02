import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Netflixabout(){
    return(
     <div className="about">
          <div className="hr-line">
   <div className="bck">
      
   </div>
</div>
    <h2 className="Tranding">Trending Now</h2>
        <select className="inda" data-uia="row-select-dropdown">
            <option label="India" value="local" selected="">India</option>
            <option label="Global" value="global">Global</option>

        </select>
       
        <select className="movies" name="content" data-uia="row-select-dropdown">
            <option label="Movies" value="localMovies">Movies</option>
            <option label="TV Shows" value="localTv">TV Shows</option>
        </select>
     
      
        <div class="container">
            <div className="slider-wrapper">
              <button id="prev-slide" className="slide-button material-symbols-rounded">
              <FontAwesomeIcon icon={faAngleLeft}/>
              </button>
              <ul className="image-list">
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/0/0d/Fabbricante_di_lacrime%2C_poster.jpg"alt="img-1 "/>
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/1/1c/Meiyazhagan_poster.jpg" alt="img-2"/>
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/0/0f/Uglies_film_poster.jpg" alt="img-3" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/4/46/Family_affair_2024_film.jpg" alt="img-4" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/e/e5/Rebel_Ridge_film_poster.jpg" alt="img-5" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/f/f4/Atlas_2024_film_poster.png" alt="img-6" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/d/d5/Badland_Hunters_film_poster.jpg" alt="img-7" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/2/2f/Wonderlandfilm.jpg" alt="img-8" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/f/f7/Under_Paris_film.jpeg" alt="img-9" />
                <img className="image-item" src="https://upload.wikimedia.org/wikipedia/en/4/4a/Anweshippin_Kandethum.jpg" alt="img-10" />
                
                
                
              </ul>
              <button id="next-slide" className="slide-button material-symbols-rounded">
              <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
            <div className="slider-scrollbar">
              <div className="scrollbar-track">
                <div className="scrollbar-thumb"></div>
              </div>
            </div>
          </div>







     </div>
 
         

    
    )
}




const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);