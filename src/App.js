import React, { useEffect, useState } from 'react';

import Tmdb from './Tmdb/index';
import './GlobalStyles.css'

//Components imports-related
import Header from './Components/Header/index';
import MovieRow from './Components/MovieRow/index';
import FeaturedMovie from './Components/FeaturedMovie';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
    const loadList = async () => {
      //Taking Movies List
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      //Taking Featured Movie
      const originals = list.filter(item =>
        item.slug === 'originals',
      )

      //Taking a Randon Movie From Original List
      const randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      const chosen = originals[0].items.results[randonChosen]

      //Taking Information of Movie Selected
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    };

    loadList();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 600) {
        setHeaderBlack(true);
      } else {
        setHeaderBlack(false);
      }
    };

    //Adding event on page
    window.addEventListener('scroll', scrollListener);

    return () => {
      //Removing event on page
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={headerBlack} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Created by <strong>Geziel Elyon</strong> <span>🚀</span>
      </footer>
    </div>
  );
}

export default App;
