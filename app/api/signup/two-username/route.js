import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";

export const POST = async (req) => {
  let { username } = await req.json();
  username.toLowerCase();

  let status = 200;
  let message = "Valid username";

  if (username.length < 4  || username.length > 15) {
    status = 404;
    message = "Username must be 4-15 characters"
  } else if (!/^[a-z0-9._]+$/.test(username)) {
    status = 404;
    message = "Username can only contain a-z, 0-9, '_' and '.'"
  }

  if (status !== 200) {
    return new Response(JSON.stringify({ message }), { status });
  }

  try {
    await connectToDB();

    const parent = await Parent.findOne({ username });

    if (parent) {
      status = 404;
      message = "A user with this username already exists";
    }

    return new Response(JSON.stringify({ message }), { status });
  } catch (error) {
    message = "Failed to fetch parent"
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
