import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { username } = params;

    const parent = await Parent.findOne({ username });

    if (!parent) {
      return new Response(
        "Failed to fetch parent",
        { status: 500 }
      );
    }

    return new Response(
      "Successfully got parent",
      { parent: JSON.stringify(parent) },
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      "Failed to fetch parent",
      { status: 500 }
    );
  }
}
