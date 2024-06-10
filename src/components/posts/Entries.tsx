import React from "react";
import EntryCard from "./EntryCard";
import { sql } from "@vercel/postgres";

async function Entries() {
  const PostPromise = await sql`SELECT * FROM entries;`;
  const cards = [];
  const entries = PostPromise.rows;
  for(let i = 0; i < entries.length; ++i) {
    cards.push(
      <EntryCard 
        key={i}
        title={entries[i].title} 
        date={entries[i].date} 
        content={entries[i].content}
      />
    );
  }

  return (
    <article className="flex flex-col gap-y-4">
      {cards}
    </article>
  );
}

export default Entries;