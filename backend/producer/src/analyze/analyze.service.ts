import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { timeout } from "rxjs";
import { CreateAnalyzeDto } from "./dto/create-analyze.dto";

@Injectable()
export class AnalyzeService {
  constructor(@Inject("ANALYZE_SERVICE") private rabbitClient: ClientProxy) {}
  placeOrder(analyzeDTO: CreateAnalyzeDto) {
    this.rabbitClient.emit("analyze-places", analyzeDTO);

    return { message: "Analyze Started" };
  }
}
