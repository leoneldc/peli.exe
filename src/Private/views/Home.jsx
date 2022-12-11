import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { api_img_fz, api_key, api_URL } from "../../settings/api/Apiconfig";
import { CircularProgress, Typography } from "@mui/material";
import "../styles/home.css";

const data = [
  {
    src:
      "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src:
      "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

function Home(params) {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState();
  const complete_url = "movie/popular";

  function searchPopularMovies() {
    fetch(`${api_URL}${complete_url}${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        setPopularMovies(data.results);
        console.log(data.results);
      });
  }

  useEffect(() => {
    searchPopularMovies();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="mostPopular">
      {(loading ? Array.from(new Array(20)) : popularMovies).map(
        (item, index) => (
          <Box
            className="boxPopularMovies"
            key={index}
            sx={{
              width: 150,
              marginTop: "25px",
              marginRight: 1.5,
              marginLeft: 1.5,
            }}
          >
            {item ? (
              <Box height={200}>
                <img
                  loading="lazy"
                  alt={item.title}
                  src={api_img_fz + item.poster_path}
                  className="portada"
                />
                <CircularProgress
                  className={`puntuacion ${
                    item.vote_average >= 7.6
                      ? "green"
                      : item.vote_average > 5
                      ? "yellow"
                      : "red"
                  }`}
                  variant="determinate"
                  value={item.vote_average * 10}
                />
                <Typography variant="caption" className="valorPuntuacion">
                  {`${item.vote_average * 10}%`}
                </Typography>
              </Box>
            ) : (
              <Skeleton variant="rounded" width={150} height={200} />
            )}

            {item ? (
              <Box sx={{ pr: 2 }} className="boxDataPopularMovies">
                <Typography className="titulo">
                  {item.title}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ pt: 1 }}>
                <Skeleton width="150px" height={40} />
              </Box>
            )}
          </Box>
        )
      )}
    </div>
  );
}

export default Home;
