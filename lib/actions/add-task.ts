"use server";

import getSupabaseServerActionClient from "@/lib/supabase/action-client"
import { revalidatePath } from 'next/cache';

export async function addTask(title: string, minutes: number) {
    const client = getSupabaseServerActionClient();
    const sessionResponse = await client.auth.getSession();
    const user = sessionResponse.data?.session?.user;
    const { data, error } = await client.from("tasks").insert([{ title, user_id: user?.id, minutes }]).select('id');
    if (error) {
        console.error(error);
        return { error };
    }
    revalidatePath("/", 'page');
    return { data: data[0] };
}