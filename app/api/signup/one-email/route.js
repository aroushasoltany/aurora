import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";
import EmailValidator from "email-validator";

export const POST = async (req) => {
  let { email } = await req.json();
  email = email.toLowerCase();

  try {
    const valid = EmailValidator.validate(email);

    if (!valid) {
      const message = "Invalid email address";
      return new Response(JSON.stringify({ message }), { status: 404 });
    }
  } catch (error) {
    const message = "Failed to check email using validator"
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }

  try {
    await connectToDB();

    const parent = await Parent.findOne({ email });

    const message = parent
      ? "A user with this email already exists"
      : "Valid email";
    const status = parent ? 404 : 200;

    return new Response(JSON.stringify({ message }), { status });
  } catch (error) {
    const message = "Failed to fetch parent"
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
