import React from "react";

interface PostData {
  title: string,
  date: string,
  content: string
}

function EntryCard({title, date, content} : PostData) {
  return(
    <article className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-3xl text-default-black">
        {title}
      </h2>
      <h3 className="text-md text-default-gray">
        {date}
      </h3>
      <p className="text-lg text-default-black">
        {content}
      </p>
    </article>
  );
}

export default EntryCard;