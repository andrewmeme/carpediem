import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

// CREATE TABLE users (user_id SERIAL PRIMARY KEY, user_name varchar(50), email varchar(255));
// CREATE TABLE entries(user_id SERIAL REFERENCES users(user_id), title varchar(50), date varchar(20), content text);

export async function GET() {
    try {
        const result = 
          await sql`CREATE TABLE entries(user_id SERIAL REFERENCES users(user_id), title varchar(50), date varchar(20), content text);`;
        return NextResponse.json({ result });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}