const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { createMovie, findMovie, updateMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
  await sequelize.sync({ alter: true });
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor });
    //add movie to DB
  } else if (yargsObj.read) {
    await findMovie({ title: yargsObj.title });
    //list all movies from DB
  } else if (yargsObj.update) {
    const updateObj = { title: yargsObj.newTitle };
    const filterObj = { title: yargsObj.title };
    await updateMovie(updateObj, filterObj);
    //update one movie from DB
  } else if (yargsObj.delete) {
    await deleteMovie( {title: yargsObj.title} );
    //delete one movie from DB
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);
