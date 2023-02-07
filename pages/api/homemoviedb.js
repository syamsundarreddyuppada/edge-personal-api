export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const responseMovie = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=6e37d364da090a453e6c12697bcfcde7&page=1`
  );
  const parsedRes = await responseMovie.json();
  return Response.json({
    data: parsedRes,
  });
}
