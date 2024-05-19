"use server";

import getSupabaseServerActionClient from "@/lib/supabase/action-client"
import { revalidatePath } from 'next/cache';

export async function listTasks() {
    const client = getSupabaseServerActionClient();
    const sessionResponse = await client.auth.getSession();
    const user = sessionResponse.data?.session?.user;
    const { data, error } = await client.from("tasks").select('id, title, minutes, status').eq('user_id', user?.id);
    if (error) {
        console.error(error);
        return { error };
    }
    revalidatePath("/", 'page');
    return { data };
}