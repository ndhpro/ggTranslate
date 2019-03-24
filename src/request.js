export async function PostApi(url, json) {
  const myRequest = new Request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json)
  });
  const result = fetch(myRequest)
    .then(response => {
      // console.log(response);
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      }
      if (response.status === 404) throw new Error("Need logout");
    })
    .then(response => response);
    return result;
}