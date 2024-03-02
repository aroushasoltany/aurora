import { connectToDB } from "@utils/database";

export const POST = async (req) => {

  try {
    await connectToDB();
  } catch (error) {
    console.log('errorrrr')
  }
}