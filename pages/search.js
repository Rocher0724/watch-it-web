import { useRouter } from 'next/router';
import MovieList from '@/components/MovieList';
import SearchForm from '@/components/SearchForm';
import styles from '@/styles/Search.module.css';
import Container from '@/components/Container';
import {useCallback, useEffect, useState} from "react";
import axios from "@/lib/axios";
import Head from "next/head";

export default function Search() {
  const router = useRouter();
  const q = router.query['q'];
  const [movies, setMovies] = useState([])

  const getMoviesOnQuery = useCallback(async (q) => {
    const res = await axios.get(`/movies/?q=${q}`)
    const nextMovies = res.data.results ?? []
    setMovies(nextMovies)
  }, [])

  useEffect(() => {
    getMoviesOnQuery(q)
  }, [q, getMoviesOnQuery])

  return (
    <>
      <Head>
        <title>{q} - Watch-It</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <MovieList movies={movies} />
    </>
  );
}
