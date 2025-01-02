import { QueryParams } from "@/models/query-params";
import api from "../axios/config";

export default class StreamingsRest {
    static async get(params: QueryParams, mediaType: string) {
        return await api.get(`/trending/${ mediaType || 'all' }/day`, params);
    }
}

