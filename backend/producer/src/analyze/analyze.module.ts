import { Module } from "@nestjs/common";
import { AnalyzeService } from "./analyze.service";
import { AnalyzeController } from "./analyze.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "ANALYZE_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://user:password@localhost:5672"],
          queue: "task-queue",
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AnalyzeController],
  providers: [AnalyzeService],
})
export class AnalyzeModule {}
