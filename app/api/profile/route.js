import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";
import { cookies } from "next/headers";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const cookiesStore = cookies();
    const user = cookiesStore.get('username');
    const username = user.value;

    const parent = await Parent.findOne({ username });

    if (!parent) {
      const message = "Failed to fetch parent";
      return new Response(
        JSON.stringify({ message }),
        { status: 500 }
      );
    }



    return new Response(
      JSON.stringify({
        message: "Successfully got parent",
        parent
      }),
      { status: 200 }
    );
  } catch (error) {
    const message = "Failed to fetch parent";
    return new Response(
      JSON.stringify({ message }),
      { status: 500 }
    );
  }
}
