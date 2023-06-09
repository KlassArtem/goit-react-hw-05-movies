import axios from "axios";

export async function getTrendingMovies () {
    try {
        const response = await axios("https://api.themoviedb.org/3/trending/all/day?api_key=3e2f1ab4f0b29a2221a588c6ca70bc56")
        if (response.status === 200) {
            return response.data.results;
        };
        
    } catch (error) {
        console.log(error);
    };
};

export async function searchMovie(value) {
        try {
        const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=3e2f1ab4f0b29a2221a588c6ca70bc56&language=en-US&page=1&include_adult=false&query=${value}`)
        if (response.status === 200) { return response.data.results}
        
    } catch (error) {
        console.log(error);
    }
}

export async function movieDetails(id) {
         try {
             const response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=3e2f1ab4f0b29a2221a588c6ca70bc56&language=en-US`);
             if (response.status === 200) {
                 return response.data;
             };
      } catch (error) {
        console.log(error);
    };
};

export async function movieCast (id) {
       try {
        const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3e2f1ab4f0b29a2221a588c6ca70bc56&language=en-US`)
           if (response.status === 200) return response.data.cast;;
        
    } catch (error) {
        console.log(error);
    };
};

export async function movieReviews (id) {
       try {
           const response = await axios(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3e2f1ab4f0b29a2221a588c6ca70bc56&language=en-US&page=1`);
           if (response.status === 200) {
               return response.data.results;
           };
         } catch (error) {
        console.log(error);
    };
};