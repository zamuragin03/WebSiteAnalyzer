import { Body, Controller, Post } from "@nestjs/common";
import { AnalyzeService } from "./analyze.service";
import { CreateAnalyzeDto } from "./dto/create-analyze.dto";

@Controller()
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Post("analyze")
  placeOrder(@Body() AnalyzeDTO: CreateAnalyzeDto) {
    return this.analyzeService.placeOrder(AnalyzeDTO);
  }
}
