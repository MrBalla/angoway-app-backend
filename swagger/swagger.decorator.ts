import { ApiOperation, ApiBody } from '@nestjs/swagger';
import { ZodSchema, ZodObject } from 'zod'; // Importa o tipo do Zod
import { applyDecorators, Post } from '@nestjs/common';
import { zodToOpenAPI } from 'nestjs-zod';

// Função para garantir que o `example` seja um Zod object (z.object)
function isZodObject(schema: any): schema is ZodObject<any> {
  return schema && schema._def && schema._def.typeName === 'ZodObject';
}

// Decorator SwaggerPost
export function SPost( route: string, schema: ZodObject<any>) {
  if (!isZodObject(schema)) {
    throw new Error('The schema must be a Zod object (z.object)');
  }

  return applyDecorators(
    Post(route),
    ApiBody({ 
        schema: {
            type: 'object',
            properties: zodToOpenAPI(schema).properties,
            required: Object.keys(schema.shape)
        } 
    })
  );
}
