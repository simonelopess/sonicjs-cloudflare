const commonHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400", // 24 hours
};

export const return200 = (data = {}) => {
  return new Response(JSON.stringify(data), {
    headers: commonHeaders,
    status: 200,
  });
};

export const return201 = (data) => {
  return new Response(JSON.stringify(data), {
    headers: commonHeaders,
    status: 201,
  });
};

export const return400 = (message = "Unauthorized") => {
  return new Response(
    JSON.stringify({
      message,
    }),
    { headers: commonHeaders, status: 400 }
  );
};

export const return401 = (message = "Unauthorized") => {
  return new Response(
    JSON.stringify({
      message,
    }),
    { headers: commonHeaders, status: 401 }
  );
};

export const return404 = (message = "Not Found") => {
  return new Response(
    JSON.stringify({
      message,
    }),
    { headers: commonHeaders, status: 404 }
  );
};

export function return500(): Response;
export function return500(message: string): Response;
export function return500(object: object): Response;
export function return500(
  messageOrObject: string | object = "Internal Server Error"
): Response {
  if (typeof messageOrObject === "string") {
    return new Response(
      JSON.stringify({
        message: messageOrObject,
      }),
      { headers: commonHeaders, status: 500 }
    );
  }
  return new Response(JSON.stringify(messageOrObject), {
    headers: commonHeaders,
    status: 500,
  });
}
