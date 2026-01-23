import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {

  const {id, estate_title, image, segment_name, description, price, status, area,location} = news;

  return <div className="card bg-base-100 shadow-xl">
    <p className="text-center font-semibold">Id:{id}</p>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>Name: {segment_name}</p>
    <p>Description: {description}</p>
    <p>Price: {price}</p>
    <p>Status: {status}</p>
    <p>Area: {area}</p>
    <p>Location: {location}</p>
    <div className="card-actions justify-center">
      <Link className="text-blue-700 font-medium" to={`/news/${id}`}>Show More</Link>
    </div>
  </div>
</div>

};

export default NewsCard;
