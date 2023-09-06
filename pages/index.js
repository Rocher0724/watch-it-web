import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Home.module.css';
import {useCallback, useEffect, useState} from "react";
import axios from "@/lib/axios";
import {Head} from "next/head";

export default function Home() {
  const [movies, setMovies] = useState([])

  const getAllMovies = useCallback(async () => {
    const res = await axios.get(`/movies`)
    const nextMovies = res.data.results ?? []
    setMovies(nextMovies)
  }, [])

  useEffect(() => {
    getAllMovies()
  }, [getAllMovies]);

  return (
    <>
      <SearchForm />
      <MovieList className={styles.movieList} movies={movies} />
    </>
  );
}
