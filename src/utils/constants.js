
const GOOGLE_API_KEY = "AIzaSyB0FfoqpsQ8dgku3NQLoYIvIfr5ethh1J8"; // should be in env file 

// have to get your own api key to use it 
 // Google api key = AIzaSyB0FfoqpsQ8dgku3NQLoYIvIfr5ethh1J8
 export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" + GOOGLE_API_KEY;

 export const YOUTUBE_SEARCH_API= "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";