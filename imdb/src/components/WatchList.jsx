import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchList, SetWatchList, handleRemoveFromWatchList}) {
  let [search, SetSearch] = useState("");
  let [genre, setGenre] = useState(["All genres"]);
  let [currentGenre,SetCurrentGenre] = useState("All Genres");


  let handleSearch = (e) => {
    SetSearch(e.target.value);
  };

  const handleFilter = (gen) =>{
    SetCurrentGenre(gen)
  }
  

  let RatingIncreasing = () => {
    let sortIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    SetWatchList([...sortIncreasing]);
  };

  let RatingDecreasing = () => {
    let sortDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    SetWatchList([...sortDecreasing]);
  };

  let PopularityIncreasing = () => {
    let Inc = watchList.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    SetWatchList([...Inc]);
  };

  let PopularityDecreasing = () => {
    let dec = watchList.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    SetWatchList([...dec]);
  };

  useEffect(() => {
    let temp = watchList.map((movieobj) => {
      return genreids[movieobj.genre_ids[0]];
    });
    temp = new Set(temp)
    setGenre(["All Genres", ...temp]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((genres) => {
          return <div onClick={()=>handleFilter(genres)} className={currentGenre==genres? "flex justify-center items-center h-[3rem] w-[7rem] bg-blue-400 rounded-xl text-white font-bold m-4":"flex justify-center items-center h-[3rem] w-[7rem] bg-gray-400 rounded-xl text-white font-bold m-4"}>
            {genres}
          </div>;
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="search movie"
          className="h-[3rem] w-[18rem] text-xl bg-gray-200 px-4"
        ></input>
      </div>
      <div className="border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex justify-center">
                <div onClick={RatingIncreasing} className="p-2">
                  <i class={"fa-solid fa-arrow-up"}></i>
                </div>
                <th className="p-2">Ratings</th>
                <div onClick={RatingDecreasing} className="p-2">
                  <i class={"fa-solid fa-arrow-down"}></i>
                </div>
              </div>
              <th>
                <>
                  <div onClick={PopularityIncreasing}>
                    <i class={"fa-solid fa-arrow-up"}></i>
                  </div>
                  Popularity
                  <div onClick={PopularityDecreasing}>
                    <i class={"fa-solid fa-arrow-down"}></i>
                  </div>
                </>
              </th>
              <th>Gener</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movieobj)=>{
                if(currentGenre=="All Genres")
                {
                    return true;
                }
                else{
                    return genreids[movieobj.genre_ids[0]]==currentGenre;
                }
            })
              .filter((movieobj) => {
                return movieobj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieobj.backdrop_path}`}
                      ></img>
                      <div className="mx-10">{movieobj.original_title}</div>
                    </td>
                    <td>{movieobj.vote_average}</td>
                    <td>{movieobj.popularity}</td>
                    <td>{genreids[movieobj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveFromWatchList(movieobj)} className="text-red-400">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
