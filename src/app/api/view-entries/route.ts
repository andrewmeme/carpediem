import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

// CREATE TABLE users (user_id SERIAL PRIMARY KEY, user_name varchar(50), email varchar(255));
// 

export async function GET() {
    try {
        const result = 
          await sql`FROM entries;`;
        return NextResponse.json({ result });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}