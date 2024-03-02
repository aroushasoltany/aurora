import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";

export const POST = async (req) => {
  const { email, username, password, confirmPassword } = await req.json();

  if (password.length < 8 || password.length > 15) {
    return new Response(
      "Password must be between 8 and 15 characters",
      { status: 404 }
    );
  }

  if (password !== confirmPassword) {
    return new Response(
      "Password and confirm password are different",
      { status: 404 }
    );
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
    
    return new Response(
      "New user created",
      { status: 201 }
    );
  } catch (error) {
    return new Response("Failed to create a new user.", { status: 500 });
  }
}
