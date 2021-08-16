import { useState, useEffect } from "react";
import $ from "jquery";
import API_BASE_URL from "./env";
import Carousel from "react-multi-carousel";
import Coin from "./Coin";
import "react-multi-carousel/lib/styles.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

export default function CoinSlideshow(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sortChange = (e) => {
    setSort(e.target.value);
  }
  const [coins, setCoins] = useState([]);
  const [biggestMovers, setBiggestMovers] = useState([]);
  const [biggestWinners, setBiggestWinners] = useState([]);
  const [biggestLosers, setBiggestLosers] = useState([]);
  const [biggestMarketCap, setBiggestMarketCap] = useState([]);
  const [biggestVolume, setBiggestVolume] = useState([]);
  const [sort, setSort] = useState("Market Cap");

  useEffect(() => {
    $.ajax({
      type: "GET",
      url: API_BASE_URL + "/coins",
    }).then((res) => {
      setCoins(res.coins);
      setBiggestMovers(res.biggestMovers);
      setBiggestWinners(res.biggestWinners);
      setBiggestLosers(res.biggestLosers);
      setBiggestMarketCap(res.biggestMarketCap);
      setBiggestVolume(res.biggestVolume);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center slideshow-container">
      <FormControl className='w-25 mb-2'>
        <InputLabel id="sort-select">Sort</InputLabel>
        <Select
          labelId="sort-select"
          id="sort-select"
          value={sort}
          onChange={sortChange}
        >
          <MenuItem value={'Market Cap'}>Market Cap</MenuItem>
          <MenuItem value={'% Change'}>% Change</MenuItem>
          <MenuItem value={'% Gain'}>% Gain</MenuItem>
          <MenuItem value={'% Loss'}>% Loss</MenuItem>
          <MenuItem value={'Volume'}>Volume</MenuItem>
        </Select>
      </FormControl>
      <Carousel
        className="w-75 m-auto"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          sort === 'Market Cap' && coins.map((coin, key) => {
            return <Coin key={key} coinInfo={coin} />;
          })
        }
        {
          sort === '% Change' && biggestMovers.map((coin, key) => {
            return <Coin key={key} coinInfo={coin} />;
          })
        }
        {
          sort === '% Gain' && biggestWinners.map((coin, key) => {
            return <Coin key={key} coinInfo={coin} />;
          })
        }
        {
          sort === '% Loss' && biggestLosers.map((coin, key) => {
            return <Coin key={key} coinInfo={coin} />;
          })
        }
        {
          sort === 'Volume' && biggestVolume.map((coin, key) => {
            return <Coin key={key} coinInfo={coin} />;
          })
        }
      </Carousel>
    </div>
  );
}
