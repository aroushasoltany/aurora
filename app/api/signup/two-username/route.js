import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    let { username } = params;
    username = username.toLowerCase();
    

    // Check length
    if (username.length < 4  || username.length > 15) {
      return new Response(
        "Username must be between 4 and 15 characters",
        { status: 404 }
      )
    }

    // Check alphanumeric + "_", "."
    const pattern = /^[a-z0-9._]+$/
    if (pattern.test(username)) {
      return new Response(
        "Username must only consist of letters, numbers, . and _",
        { status: 404 }
      )
    }

    const exists = await Parent.exists({ username });

    if (exists) {
      return new Response(
        "A user with this username already exists",
        { status: 401 }
      );
    }

    return new Response(
      "Valid username",
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      "Failed to fetch parent",
      { status: 500 }
    );
  }
}
