const BorrowedBooksCard = ({ item }) => {
  const { book, borrowedDate, returnDate } = item;
  const { bookName, photo, category } = book;

  return (
    <div className="flex p-4 border-2 gap-4 dark:border-[#c0c0c0]">
      <div>
        <img className="w-[200px]" src={photo} alt="" />
      </div>
      <div className="flex flex-col justify-center w-full">
        <div>
          <h2 className="text-xl md:text-3xl text-theme-golden">{bookName}</h2>
          <p className="capitalize font-bold text-xl dark:text-white">Category: {category}</p>
        </div>
        <div className="mt-5">
          <p className="text-lg font-bold dark:text-white">Borrowed Date: {borrowedDate}</p>
          <p className="text-lg font-bold text-theme-golden">
            Return Date: {returnDate}
          </p>
        </div>
        <div className="mt-5 text-end">
        <button className="btn rounded-full bg-theme-golden border-none hover:bg-theme-black dark:hover:bg-white dark:hover:text-theme-golden text-lg font-bold text-white px-6">
          Return Now
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default BorrowedBooksCard;
