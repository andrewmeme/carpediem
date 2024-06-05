import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user_id = params.user_id;

  try {
      const result = 
        await sql`SELECT * FROM entries WHERE user_id = ${user_id};`;
      return NextResponse.json({ result });
  } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
  }
}