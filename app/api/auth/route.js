import { cookies } from "next/headers";

export const POST = async (req) => {
  try {
    const cookiesStore = cookies();
    const auth = cookiesStore.has('username');

    return new Response(
      JSON.stringify({
        message: auth ? "Authenticated session" : "Unauthorised",
        auth,
      }),
      { status: auth ? 200 : 401 }
    );
  } catch (error) {
    const message = "Failed to authenticate session";
    return new Response(JSON.stringify({ message, error }), { status: 500 });
  }
}
