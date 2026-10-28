export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          ok: true,
          service: "my register API"
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({ ok: false, error: "Not found" }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
