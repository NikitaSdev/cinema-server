import { Module } from "@nestjs/common"
import { MovieController } from "./movie.controller"
import { MovieService } from "./movie.service"
import { MovieModel } from "./movie.model"
import { TypegooseModule } from "nestjs-typegoose"

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MovieModel,
        schemaOptions: {
          collection: "Movie"
        }
      }
    ])
  ],
  exports: [MovieService],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
