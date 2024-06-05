"use client"

import AppHeader from "@/components/AppHeader";
import { TextField, TextareaAutosize } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import Link from "next/link";
import buttonClasses from "@/components/ui/ButtonClass";
import { sql } from "@vercel/postgres";
import Button from "@/components/ui/Button";

function SubHeading({text=""}) {
  return <h2 className="text-xl bg-white">{text}</h2>;
}

function Post() {
  const [sendLock, setSendLock] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  console.log(`${date?.format("DD/MM/YYYY")}, ${title}, ${content}`);

  const sendDataUsingApi = async () => {
    setSendLock(true);
    try {
      const response = await fetch("/api/create-entry", {
        headers:{
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          user_id: 1,
          title: title,
          date: date?.format("DD/MM/YYYY"),
          content: content
        })
      });
      console.log("sent entry to database");
    } catch (error) {
      console.log(error);
    } finally {
      setSendLock(false);
    }
  };


  return (
    <section className="h-svh flex flex-col">
      <AppHeader/>
      <div className="px-4 md:mx-64 flex flex-col flex-grow bg-white shadow-default-gray shadow-md">
        <nav className="mt-2">
          <Link href="/dashboard">&lt; Dashboard</Link>
        </nav>
        <section className="mt-2 flex flex-col flex-grow">
          <div className="flex flex-col flex-grow gap-y-8 items-stretch">
            <DatePicker 
              className="border-default-black border" 
              value={date} 
              defaultValue={date} 
              onChange={(newDate) => setDate(newDate)}
            />
            <TextField 
              className="border-default-black border"
              placeholder={"Title"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea 
              className="p-[14px] flex-grow resize-none border-default-black border rounded-md" 
              maxLength={1200}
              placeholder=""
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* className={`p-2 mb-4 bg-default-primary hover:bg-default-secondary text-lg md:text-xl ${buttonClasses}`} */}

            <button 
              className={`p-2 mb-4 bg-default-primary hover:bg-default-secondary text-lg md:text-xl ${buttonClasses}`}
              onClick={sendDataUsingApi}
            >
              Submit
            </button>
          </div>
        </section>
      </div>
      
    </section>
  );
}

export default Post;