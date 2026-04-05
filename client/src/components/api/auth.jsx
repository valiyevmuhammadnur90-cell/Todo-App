export const loginUser = async (data) => {
  const res = await fetch("http://localhost:2000/kirish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
};
