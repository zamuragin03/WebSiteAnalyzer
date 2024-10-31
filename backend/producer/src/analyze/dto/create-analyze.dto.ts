import { IsEmail, IsInt, IsOptional, IsString, IsUrl, MinLength } from "class-validator"

export class CreateAnalyzeDto {
    @IsUrl({}, { 'message': 'Некорректный URL' })
    url: string
}