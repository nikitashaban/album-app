const baseUrl = "https://jsonplaceholder.typicode.com/";
export const handleFetch = (url: string) => {
  return fetch(`${baseUrl}${url}`)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e.message);
    });
};
