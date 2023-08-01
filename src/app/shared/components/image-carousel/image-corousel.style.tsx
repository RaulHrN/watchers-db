import { Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    carouselContainer: {
      position: "relative",
      margin: "0 auto",
      overflow: "hidden",
    },
    carousel: {
    "&.slick-track": {
        width: "100% !important",
        transform: "none !important",
      },
    },
    slide: {
      width: "235px !important",
      height: "350px",
      display: "flex !important",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      overflow: "hidden",
      position: "relative",
    },
    arrowContainer: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    itemTitle: {
      position: "absolute",
      bottom: 4,
      left: 4,
      fontSize: "12px",
    },
    itemPoster: {
      width: "100%",
      height: "100%",
    },
  });
});
