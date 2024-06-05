import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface Form {
  user_id : number,
  title: string,
  date: string,
  content: string
}

export async function POST(request: Request) {
  const data: Form = await request.json();
  const {user_id, title, date, content} = data;

  try {
    const result = 
      await sql`INSERT INTO entries (user_id, title, date, content) VALUES (${user_id}, ${title}, ${date}, ${content});`;
    return NextResponse.json({ result });
} catch (error) {
    return NextResponse.json({ error }, { status: 500 });
}
}