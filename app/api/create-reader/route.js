import { connectToDB } from "@/utils/database";
import { Child } from "@/models/child";

export const POST = async (req) => {
  const { name, dob, gender, avatar, favs } = await req.json();

  try {
    await connectToDB();

    const newChild = await new Child({
      name,
      gender,
      dob,
      avatar,
      favs,
    });

    await newChild.save();

    const message = "New reader/child created";
    return new Response(JSON.stringify({ message }), { status: 201 });
  } catch (error) {
    const message = "Failed to create new reader/child";
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
