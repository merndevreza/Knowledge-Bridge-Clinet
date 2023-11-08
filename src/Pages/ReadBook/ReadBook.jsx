import { useLoaderData } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import table from "../../assets/images/table-2.jpg"
import demo1 from "../../assets/images/banner-3.jpg"
import demo2 from "../../assets/images/banner-5.jpg"
//==========
//component
//==========
const ReadBook = () => {
  const loadedBook = useLoaderData();
  const {
    bookName,
    authorName,
    photo,
    content,
  } = loadedBook;

  return (
    <div className="dark:bg-theme-dark bg-white px-2 ">
      <div className="container mx-auto py-[100px]">
        <h2 className="text-4xl text-center font-bold text-theme-golden">
          {bookName}
        </h2>
        <h3 className="text-2xl font-bold mt-4 text-center dark:text-white ">
          {authorName}
        </h3>
        <div className="mt-10">
          <HTMLFlipBook
            className="mx-auto shadow-2xl bg-[#fff9f3]  "
            width={500}
            height={700}
          >
            <div>
               <img className="w-full h-full object-cover object-right" src={table} alt="" />
            </div>
            <div>
               <img className="w-full h-full object-cover shadow-xl" src={photo} alt="" />
            </div>
            {/* page-1 */}
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Chapter:01
              </h3>
              <h4 className="text-center mb-5 font-bold text-xl">{bookName}</h4>
              <div className="flex flex-col gap-5 text-justify">
               <p>{content}</p>
               <p>{content}</p>
               <p>{content}</p>
              </div>
            </div>
            {/* page-2 */}
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Chapter:02
              </h3>
              <h4 className="text-center mb-5 font-bold text-xl">{bookName}</h4>
              <div className="flex flex-col gap-5 text-justify">
               <img src={demo1} alt="" />
               <p>{content}</p>
              </div>
            </div>
            {/* page-3 */}
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Chapter:03
              </h3>
              <h4 className="text-center mb-5 font-bold text-xl">{bookName}</h4>
              <div className="flex flex-col gap-5 text-justify">
               <p>{content}</p>
               <p>{content}</p>
              </div>
            </div>
            {/* page-4 */}
            <div className="p-6">
              <h3 className="text-center font-bold text-2xl mb-2">
                Chapter:04
              </h3>
              <h4 className="text-center mb-5 font-bold text-xl">{bookName}</h4>
              <div className="flex flex-col gap-5 text-justify">
               <p>{content}</p>
               <img src={demo2} alt="" />
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
