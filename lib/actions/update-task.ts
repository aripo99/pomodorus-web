"use server";

import getSupabaseServerActionClient from "@/lib/supabase/action-client"
import { revalidatePath } from 'next/cache';

export async function updateTask(id: string, status: string) {
    const client = getSupabaseServerActionClient();
    const sessionResponse = await client.auth.getSession();
    const user = sessionResponse.data?.session?.user;
    const numericId = BigInt(id);
    const { data, error } = await client.from("tasks").update({ status }).eq('id', numericId).eq('user_id', user?.id);
    if (error) {
        console.error(error);
        return { error };
    }
    revalidatePath("/", 'page');
    return { data };
}