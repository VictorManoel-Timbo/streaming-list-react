import { QueryParams } from "@/models/query-params";
import StreamingRest from "@/services/rest/streamings.rest";

export class StreamingService {
    static async get(params: QueryParams, mediaType?: string) {
        try {
            const response: any = await StreamingRest.get(params, mediaType!);
            return response.results;
        } catch (error: any) {
            console.error("ERRO", error.message);
            return [];
        }
    }
}