import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const loadedBook = useLoaderData();
  const {
    _id,
    bookName,
    authorName,
    photo,
    category,
    rating,
    shortDescription,
    content,
  } = loadedBook;

  return (
    <div>
      <img src={photo} alt="" />
    </div>
  );
};

export default BookDetails;
