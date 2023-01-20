// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    count = 0
    const spielbergMovies = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama") === true) {
            count ++
        }
    })
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const average = moviesArray.map(element => element.score).filter((element) => typeof element ==="number").reduce((accumulator, element) => accumulator + element) / moviesArray.length
    return Math.round((average + Number.EPSILON) * 100) / 100
}
/* console.log(scoresAverage(moviesArray)) */

// Iteration 4: Drama movies - Get the average of Drama Movies  
function dramaMoviesScore(moviesArray) {
    const someArr = moviesArray.filter((element) => {
        if(element.genre.includes("Drama") === true){
            return element
        }
    });
    const testArr = scoresAverage(someArr)
    return testArr
    /* const lastArr = someArr.reduce((accumulator, element) => {
    console.log(element)
        if(element.score) {accumulator + element.score}
       },0) / someArr.length
    console.log(lastArr)
    return +lastArr.toFixed(2) */
}
 /* const moviesCopy = moviesArray.map((x) => x).sort((a, b) =>  a.year - b.year) */
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    moviesCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        else if (a.year < b.year) {
            return -1
        }
        else {
            if(a.title > b.title) {
                return 1
            }
            else if (a.title < b.title) {
                return -1
            }
            else {
                return 0
            }
        }
    });         
    return moviesCopy
}
/* function orderByYear(moviesArray) {
  const copy = structuredClone(moviesArray)
  copy.sort((a, b) => {
    if (a.year - b.year < 0) {
      return -1
    } else if (a.year - b.year > 0) {
      return 1
    } else {
      return a.title.localeCompare(b.title)
    }
  })
  return copy */

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    if (moviesCopy.length > 20) {
        moviesCopy.sort((a, b) => {
            if(a.title > b.title) {
                return 1
            }
            else if (a.title < b.title) {
                return -1
            }
            else {
                return 0
            }
        });
        let slicedArray = moviesCopy.slice(0,20)
        let newSlicedArray = slicedArray.map((x) => {return x.title})
        return newSlicedArray
    }
    else { 
        moviesCopy.sort((a, b) => {
        if(a.title > b.title) {
            return 1
        }
        else if (a.title < b.title) {
            return -1
        }
        else {
            return 0
        }
    });
    let someArr = moviesCopy.map((x) => {return x.title})
    return someArr

    }

}
/* function orderAlphabetically(moviesArray) {
  const copy = moviesArray.map(movie => movie.title)
  copy.sort((a, b) => a.localeCompare(b))
  return copy.slice(0, 20)
} */


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
