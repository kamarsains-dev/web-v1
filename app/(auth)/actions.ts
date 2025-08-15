"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function getUserSession() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return null;
    }
    return { status: "success", user: data?.user };
}

export async function login(formData: FormData) {

  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/home", "layout");
  redirect("/home");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/home", "layout");
  redirect("/home");
}

export async function signOut() {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}

export async function signInWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo:
        process.env.NODE_ENV === "production"
          ? "https://kamarsains.vercel.app/auth/callback"
          : "http://localhost:3000/auth/callback",
    },
  });

  if(data?.url) {
    console.log(data)
    redirect(data.url)
  }

  if(error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath("/home", "layout")
}

export async function changePassword (formData: FormData) {
  const newPassword = formData.get("new-password") as string;
  const confirmPassword = formData.get('confirm-password') as string;

  if (newPassword.length < 6) {
    return { error: "Kata sandi minimal harus 6 karakter." };
  }

  if(newPassword !== confirmPassword) {
    return {error: "Kata sandi baru dan konfirmasi tidak cocok."}
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.updateUser({ password: newPassword });

  if (error) {
    return { error: error.message };
  }

  await supabase.auth.signOut();

  return {success: "Kata sandi berhasil diubah. Balik login"}
}

export async function deleteAccount() {
  const supabase = await createClient()

  await supabase.auth.signOut();

  return {success: "Akun berhasil dihapus.", error: "Gagal"}

}