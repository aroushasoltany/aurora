import React from "react";
import Image from "next/image";

const BookComponent = (image: any) => {
  console.log(image.image);
  return (
    <div className="rounded overflow-hidden items-center  ">
      <Image src={image.image} alt="Picture" width="200" height="200" />
    </div>
  );
};

const CardComponent = ({ id, title, dateCreated, readers, image }: any) => {
  return (
    <div
      className="border rounded-lg p-4 shadow-md flex flex-row justify-between h-600  "
      onClick={ ()=>console.log(id)}
    >
      <BookComponent image={image} />
      <div className="border rounded-lg p-4 shadow-md flex flex-col justify-between h-600 items-center bg-purple-900  ">
        <div className="flex flex-col items-center text-sm text-gray-100">
          <span>{dateCreated}</span>
        </div>
        <div className="text-lg font-bold mb-2 p-5 items-center text-center text-white">
          {title}
        </div>
        <div className="flex flex-row items-center text-sm text-gray-100">
          {readers.map((reader: any, index: number) => (
            <div key={index}>
              <Image
                src={`/avatars/${reader.avatar}`}
                alt="Avatar"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GridComponent = ({ books }: any) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book: any, index: number) => (
        <div key={index} className="m-5">
          <CardComponent
            id={book.bookId}
            title={book.title}
            dateCreated={book.created}
            readers={book.readers}
            image={`/covers/cover${index + 1}.png`}
          />
        </div>
      ))}

      <CardComponent
        title={"Create New"}
        dateCreated={"today"}
        readers={[]}
        image={`/covers/new.svg`}
      />
    </div>
  );
};

export default GridComponent;
