//import movie classes
import { Movie } from "src/classes/movie-class.js";
import { MovieList } from "src/classes/movie-list.js";

//Local storage
let movies = JSON.parse(localStorage.getItem("Movie"));

//start with vue

const { createApp } = window.Vue;

const component = {
    data() {
        return {
            MovieList: MovieList,
            userArray: [],
            username: "",
            comingSoon: [],
            watchList: []
        }
    },

    method: {
        logout() {
            localStorage.removeItem();
            window.location.href = "../../login.html"
        },
        //When the button is clicked add the movie to watchlist
        watchBTN() {
            window.location.href = "../watchlist.html"
        }

    },

    computed:{
        //computed property for coming soon movies
        comingSoon(){
            return this.movieLister.filter((movie) =>{
                return movie.comingSoon === true;
            })
        },

        availableMovie(){
            return this.movieLister.filter((movie) =>{
                return movie.comingSoon === false;
            })
        },

        mounted(){
            //get user info from local storage
            localStorage.getItem("Movie", JSON.stringify(movies));
            
        },

        template: //html
        `<!-- As a link -->
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
        </nav>
        
        <!-- As a heading -->
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>`
    }


}
//when you click the logout button it directs you back to the login page
document.getElementById("click").onclick = function () {
    window.location.assign ('login.html');
};

//changing the background color of the navigation bar
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        nav.classList.add('nav_black')
    }else{
        nav.classList.remove('nav_black');
    }
});

