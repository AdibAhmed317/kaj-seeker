import {
  IsBoolean,
  IsOptional,
  IsString,
  IsEmail,
  IsInt,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  passwordHash: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  coins?: number;

  @IsString()
  @IsOptional()
  role?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
