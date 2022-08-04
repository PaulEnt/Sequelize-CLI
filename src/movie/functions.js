const Movie = require("./table");

exports.createMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.findMovie = async (movieObj) => {
  try {
    // console.log(movieObj);
    const findMovie = await Movie.findAll({
      where: movieObj
    });
    console.log(findMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (updateObj, filterObj) => {
  try {
    console.log(updateObj)
    console.log(filterObj)
    const updateMovie = await Movie.update(updateObj, {
      where: filterObj
    });

    console.log(updateMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    console.log("D");
    await Movie.destroy({
      where: movieObj
    });
  } catch (error) {
    console.log(error);
  }
};
