import { connectToDB } from "@/utils/database";
import { Child } from "@/models/child";

export const POST = async (req) => {
  const { name, gender, dob, avatar, favs } = await req.json();

  try {
    await connectToDB();
    const newChild = await new Child({
      name,
      gender,
      dob,
      avatar: {
        colour: avatar.colour,
        icon: avatar.icon,
      },
      favs,
    });

    await newChild.save();
    
    return new Response(
      "New child created",
      { status: 201 }
    );
  } catch (error) {
    return new Response("Failed to create a new child.", { status: 500 });
  }
}
