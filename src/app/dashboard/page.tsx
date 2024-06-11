import AppHeader from "@/components/AppHeader";
import Button from "@/components/ui/Button";
import React, { useState, useEffect } from "react";
import Entries from "@/components/posts/Entries";
import { redirect } from 'next/navigation'

import { createClient } from "../../../utils/supabase/server"; 

async function DashBoard() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login')
  }
  console.log(data);

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