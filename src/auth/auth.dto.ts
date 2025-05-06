import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    @ApiProperty({
        description: "user's phone number (required)",
        example: '920708419',
    })
    number: string;

    @ApiProperty({
         description: "user's password (required)",
        example: 'mylitlefimosento808m1',
    })
    password: string;
}

export class AccessTokenDto {
    @ApiProperty({
        description: "access token",
        example: "123e4567-e89b-12d3-a456-426614174000",
    })
    access_token: string;
}

