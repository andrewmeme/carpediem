"use client"
import AppHeader from "@/components/AppHeader";
import Button from "@/components/ui/Button";
import React, { useState, useEffect } from "react";
import EntryCard from "@/components/EntryCard";

function Entries() {
  const [loading, setLoading] = useState<boolean>(false);
  const [entries, setEntries] = useState<JSON | undefined>(undefined);

  useEffect(() => {
    const response = async() => {
      setLoading(true);
      try {
        const response = await fetch("/api/entries/1", {
          headers:{
            "Content-Type": "application/JSON",
          },
          method: "GET",
          next: {}
        });
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!loading) {
      response().catch(console.error);
    }
  }, []);

  if (entries != undefined) {
    const cards = [];
    const data = entries.result.rows;
    console.log(data);
    for(let i = 0; i < data.length; ++i) {
      cards.push(
        <EntryCard 
          key={i}
          title={data[i].title} 
          date={data[i].date} 
          content={data[i].content}
        />
      );
    }

    return (
      <article className="flex flex-col gap-y-4">
        {cards}
      </article>
    );
  } else {
    return (<article></article>);
  }
}

function DashBoard() {
  return (
    <div>
      <AppHeader/>
      <section className="mt-8 flex items-center justify-center">
        <Button href="dashboard/post" text="New Entry"/>
      </section>
      <section className="mt-8 px-4">
        <Entries />
      </section>
    </div>
    
  );
}

export default DashBoard;