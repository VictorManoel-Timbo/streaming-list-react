import { StreamingService } from "./streaming.service";
import { QueryParams } from "@/models/query-params";
import StructurePage from "@/components/structurePage/structure-page";
import { Streamings } from "@/models/streamings";

export default async function Home() {
  let params: QueryParams = { page: 9 }
  let test: Streamings[] = await StreamingService.get(params,'tv')
  return (
    <>
      <StructurePage streamings={test} />
    </>
  )
}
