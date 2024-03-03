import React from "react";

const BookComponent = ({ title, dateCreated }: any) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col justify-between h-600 pb-11 items-center bg-purple-200">
      <div className="text-lg font-bold mb-2 p-5">{title}</div>
      <div className="flex flex-col items-center text-sm text-gray-500">
        <span>Date Created:</span>
        <span>{dateCreated}</span>
      </div>
      <div className="flex flex-col items-center pb-9"></div>
    </div>
  );
};



const GridComponent = ({ books }: any) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {books.map((book: any, index: number) => (
        <div key={index} className="m-5">
          <BookComponent title={book.title} dateCreated={book.created} />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
