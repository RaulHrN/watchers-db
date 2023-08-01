import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { MovieTmdb } from "../../models/tmdb";
import { useStyles } from "./image-corousel.style";
import { Box, IconButton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

interface ImageCarouselProps {
  items: MovieTmdb[];
}

export function ImageCarousel({ items }: ImageCarouselProps) {
  const sliderRef = useRef<Slider>(null);
  const classes = useStyles();
  const settings: Settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    dots: false,
    arrows: true,
  };

  return (
    <Box className={classes.carouselContainer}>
      <Slider {...settings} className={classes.carousel}>
        {items.map((item: MovieTmdb) => (
          <div key={item.id} className={classes.slide}>
            <h2 className={classes.itemTitle}>{item.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={item.title}
              className={classes.itemPoster}
            />
          </div>
        ))}
      </Slider>
      <Box className={classes.arrowContainer}>
        <IconButton onClick={() => sliderRef?.current?.slickPrev()}>
          <ArrowLeft />
        </IconButton>
        <IconButton onClick={() => sliderRef?.current?.slickNext()}>
          <ArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}
