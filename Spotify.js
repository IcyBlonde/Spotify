// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCET4QkfyV-qpuN0UvZxVjD0MFV2r7qgMf9XhbaCyoQ6Tul0J-qIxfuG11LRIC-G6aCrWPxjN8kpL7sQGv-JFu2KPH2ei_rnTEd6CawHXJ1e7sNL2KNAL3rEPNsQWjYnQ_DAFREDtMLpBG9d8COQ0EsT91rz2VRTe9zCNWQcG8h3TuzPv1g9dsqAmUlGnRUsV-BUQFq1O6HZpxSXR2j9MHJw2UGgpVhjbd1L5we_SIWkJXyjUE0rtNx8vvPTecpoZVGWFmUmdJt4-rpZ7uFVxwYVuTv7UTFHk6JNfTQCq5h4qXP90wjbitG';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);