import { StreamingService } from "./streaming.service";
import { QueryParams } from "@/models/query-params";

export default async function Home() {
  let params: QueryParams = { page: 1 }
  let test: any = await StreamingService.get(params)
  console.log(test)
  return (
    <div className="">
      {test.map((post: any) => (
        <p key={post.id}>{post.title || post.name}</p>
      ))}
    </div>
  )
}

