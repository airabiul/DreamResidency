import { useLoaderData, useParams } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const singleNews = data.find((item) => item.id === parseInt(id));

  if (!singleNews) {
    return <h2 className="text-center text-red-500">News Not Found!</h2>;
  }

  const { estate_title, image, segment_name, description, price, status, area, location } = singleNews;

  return (
    <div className=" text-center max-w-4xl mx-auto p-5">
      <img className="w-full rounded-xl" src={image} alt={estate_title} />

      <h2 className="text-3xl font-bold mt-4">{estate_title}</h2>
      <p className="text-gray-500">{segment_name}</p>

      <p className="mt-3">{description}</p>

      <div className="mt-4 space-y-2">
        <p>Price: {price}</p>
        <p>Status: {status}</p>
        <p>Area: {area}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
};

export default NewsDetails;
