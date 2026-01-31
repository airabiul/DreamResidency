import { useLoaderData } from "react-router-dom";
import Slider from "../component/Slider";
import NewsCard from "../component/NewsCard";

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Slider></Slider>
          <div className="w-[1300px] mx-auto gap-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                news.map(aNews => <NewsCard key={news.id} news={aNews}></NewsCard>)
             }
          </div>
           
        </div>
    );
};

export default Home;