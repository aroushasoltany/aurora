import { connectToDB } from "@/utils/database";
import { Child } from "@/models/child";
import { Parent } from "@/models/parent";
import { cookies } from "next/headers";

export const POST = async (req) => {
  const { name, dob, gender, avatar, favs } = await req.json();
  const cookiesStore = cookies();
  const user = cookiesStore.get('username');
  const username = user.value;

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

    const parent = await Parent.findOne({ username });
    
    const children = parent?.children;
    
    if (!parent || !children) {
      const message = parent
        ? "Failed to access parent's children"
        : "Failed to find the parent";
      return new Response(JSON.stringify({ message }), { status: 404 });
    }
    
    const newChildren = [...children, newChild];

    await Parent.updateOne({ username }, { children: newChildren });

    const message = "New reader/child created";
    return new Response(JSON.stringify({ message }), { status: 201 });
  } catch (error) {
    const message = "Failed to create new reader/child";
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
