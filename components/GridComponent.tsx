import React from "react";
import bookphoto from "@/public/landing.png";
import Image from "next/image";

const BookComponent = () => {
  // const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  return (
    <div>
      <Image src={bookphoto} alt="Picture" width={20} height={20} />
    </div>
  );
};

const CardComponent = ({ title, dateCreated, readers }: any) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col justify-between h-600 items-center bg-purple-900">
      <div className="flex flex-col items-center text-sm text-gray-100">
        <span>{dateCreated}</span>
      </div>
      <div className="text-lg font-bold mb-2 p-5 items-center text-center text-white">
        {title}
      </div>
      <div className="flex flex-row items-center text-sm text-gray-100">
        {readers.map((reader: any, index: number) => (
          <div key={index}>
            <img
              src={
                "./../public/avatars/white-" +
                reader.avatar.icon +
                "-" +
                reader.avatar.colour +
                ".png"
              }
              alt="Avatar"
              width={20}
              height={20}
            />
          </div>
        ))}
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
            title={book.title}
            dateCreated={book.created}
            readers={book.readers}
          />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
