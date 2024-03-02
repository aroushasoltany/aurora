import { connectToDB } from "@/utils/database";
import { Parent } from "@/models/parent";
import EmailValidator from "email-validator";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { email } = params;

    const valid = EmailValidator.validate(email);

    if (!valid) {
      return new Response(
        "Invalid email address",
        { status: 404 }
      );
    }

    const exists = await Parent.exists({ email });

    if (exists) {
      return new Response(
        "A user with this email already exists",
        { status: 401 }
      );
    }

    return new Response(
      "Valid email address",
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      "Failed to fetch parent",
      { status: 500 }
    );
  }
}
