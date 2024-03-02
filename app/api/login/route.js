import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { username, password } = params;

    const parent = await Parent.find({ username, password });

    if (!parent) {
      return new Response(
        "Invalid username or password",
        {  status: 401 }
      );
    }

    return new Response(
      "User verified",
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      "Failed to fetch parent",
      { status: 500 }
    );
  }
}
