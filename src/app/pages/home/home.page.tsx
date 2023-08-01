import React, { useEffect } from "react";
import { useTmdb } from "../../../provider/TmdbContext";
import { ImageCarousel } from "../../shared/components/image-carousel/image-carousel.component";

export function HomePage() {
  const { popularMovies, searchPopularMovies } = useTmdb();

  useEffect(() => {
    searchPopularMovies();
  }, [searchPopularMovies]);

  return (
    <>
      {!!popularMovies && (
        <div>
          <ImageCarousel items={popularMovies}/>
        </div>
      )}
    </>
  );
};
