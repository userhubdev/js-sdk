import { TransportRequest, TransportResponse } from "./http";

export interface Transport {
  execute(req: TransportRequest): Promise<TransportResponse>;
}
