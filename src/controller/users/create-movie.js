import fs from "fs";

export const createMovie = (req, res) => { 
    const rawMovies = fs.readFileSync("src/DB/movies.json", "utf8");
    console.log(rawMovies);
    const movies = JSON.parse(rawMovies);
    movies.push(req.body);
    fs.writeFileSync("src/DB/movies.json", JSON.stringify(movies));
    res.send(req.body);
 };
 import { log } from "console";
import fs from "fs";

export const deleteMovie = (req, res) => {
    const rawMovies = fs.readFileSync("src/DB/movies.json");
    console.log(rawMovies);
    
    const movies = JSON.parse(rawMovies);
    if (movies.length > 0) {
        const removedMovie = movies.pop();
        res.json(removedMovie);
        fs.writeFileSync("src/DB/movies.json", JSON.stringify(movies));
    } else {
        res.json({ message: "No movies to delete" });
    }
    fs.writeFileSync("src/DB/movies.json", JSON.stringify(movies));
};