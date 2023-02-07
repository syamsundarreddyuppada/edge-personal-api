export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const query = req?.nextUrl?.search;
  const splitsArr = query.slice(4);
  const responseMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${splitsArr}?api_key=6e37d364da090a453e6c12697bcfcde7`
  );
  const parsedRes = await responseMovie.json();
  return Response.json({
    data: parsedRes,
  });
}
