"use client"

import AppHeader from "@/components/AppHeader";
import { TextField, TextareaAutosize } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import Link from "next/link";
import buttonClasses from "@/components/ui/ButtonClass";

function SubHeading({text=""}) {
  return <h2 className="text-xl bg-white">{text}</h2>;
}

function Post()
{
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  console.log(`${date?.format("DD/MM/YY")}, ${title}, ${content}`);

  return (
    <section className="h-svh flex flex-col">
      <AppHeader/>
      <div className="px-4 md:mx-64 flex flex-col flex-grow bg-white shadow-default-gray shadow-md">
        <nav className="mt-2">
          <Link href="/Dashboard">&lt; Dashboard</Link>
        </nav>
        <section className="mt-2 flex flex-col flex-grow">
          <h1 className="text-4xl">Write a New Entry</h1>
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
              defaultValue={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <Link
              className={`p-2 mb-4 bg-default-primary hover:bg-default-secondary text-lg md:text-xl ${buttonClasses}`}
              href="/dashboard"
            >
              Submit
            </Link>
          </div>
        </section>
      </div>
      
    </section>
  );
}

export default Post;