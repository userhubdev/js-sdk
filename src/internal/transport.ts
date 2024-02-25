import { TransportRequest, TransportResponse } from "./http.ts";

export interface Transport {
  execute(req: TransportRequest): Promise<TransportResponse>;
}
