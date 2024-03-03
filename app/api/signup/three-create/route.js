import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";
import { cookies } from "next/headers";

export const POST = async (req) => {
  let { email, username, password, confirmPassword } = await req.json();
  email = email.toLowerCase();
  username = username.toLowerCase();

  let status = 201;
  let message = "New user created";

  if (password.length < 8 || password.length > 15) {
    status = 404;
    message = "Password must be 8-15 characters";
  }

  if (password !== confirmPassword) {
    status = 404;
    message = "Password and confirm password don't match"
  }

  if (status !== 201) {
    return new Response(JSON.stringify({ message }), { status });
  }

  try {
    await connectToDB();

    const newParent = await new Parent({
      email,
      username,
      password,
      children: [],
      books: [],
    });

    await newParent.save();

    const cookiesStore = cookies();
    cookiesStore.set('username', username);

    return new Response(JSON.stringify({ message }), { status });
  } catch (error) {
    message = "Failed to create a new parent"
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
