import FeedService from "../services/FeedService"
import {useEffect, useState} from "react"

const HomeComponent = () => {

  useEffect(() => {
    FeedService.getFeed().then(m => console.log(m))
    FeedService.getFeed().then(m => console.log(m))
  })

  return (
    <div>
      hello from home
    </div>
  );
}

export default HomeComponent;
