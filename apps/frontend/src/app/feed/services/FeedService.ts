import axios from "axios";

const FeedService = {
  async getFeed() {
    const response = await axios.get("http://localhost:3000/api");
    return response.data;
  }
}

export default FeedService;
