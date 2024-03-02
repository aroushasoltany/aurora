import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";

export const POST = async (req) => {
  let { username, password } = await req.json();
  username = username.toLowerCase();

  try {
    await connectToDB();

    const parent = await Parent.findOne({ username, password });

    const message = parent ? "User verified" : "Invalid username or password";
    const status = parent ? 200 : 401;

    return new Response(JSON.stringify({ message }), { status });
  } catch (error) {
    const message = "Failed to fetch parent"
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
