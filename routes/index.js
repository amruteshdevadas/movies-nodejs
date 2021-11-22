var express = require("express");
var router = express.Router();
var movies = require("../Movies.json");
var moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//router for the movies page
router.get("/getMovies", async (req, res) => {
  res.send(movies.movies);
});

//router for add the movie
router.post("/addMovie", async (req, res) => {
  let { movieData } = req.body;

  if (!movieData) {
    res.send({
      status: false,
      message: "Data not found",
    });
  } else {
    try {
      //to add id for movie
      let id = movies.movies.length +1
     
      movies.movies.push(
        {
          id: id,
          title: movieData.title,
          releaseDate: movieData.releaseDate,
          rating: movieData.rating
        }
      );
      res.send("Movie Added Successfully")
    } catch (error) {
      console.log(error);
      res.send(error.message);
    }
  }
});

module.exports = router;
