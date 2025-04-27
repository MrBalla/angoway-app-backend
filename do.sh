#!/bin/bash

# Define as entidades e seus campos (nome e tipo zod)
declare -A schemas

schemas["user"]="name:z.string(),email:z.string().email(),number:z.string(),password:z.string(),disability:z.string().optional(),url_foto_de_perfil:z.string().optional(),role:z.string().optional()"
schemas["bus"]="matricula:z.string(),driverId:z.number(),routeId:z.number(),status:z.string().optional(),capacity:z.number(),currentLoad:z.number(),location:z.string()"
schemas["route"]="name:z.string(),origin:z.string(),destination:z.string(),departureTime:z.string(),estimatedTime:z.string(),arrivalTime:z.string(),status:z.string().optional()"
schemas["stop"]="name:z.string(),routeId:z.number()"
schemas["feedback"]="userId:z.number(),busId:z.number(),rating:z.number(),comment:z.string()"
schemas["notification"]="userId:z.number(),title:z.string(),message:z.string(),read:z.boolean().optional()"

# Base src path
base_path="./src"

# Cria pastas e arquivos
for resource in "${!schemas[@]}"
do
    mkdir -p "$base_path/$resource/schema"
    
    # Começa o conteúdo do arquivo
    content="// $resource create schema
import { z } from 'zod';

export const Create$(tr '[:lower:]' '[:upper:]' <<< ${resource:0:1})${resource:1}Schema = z.object({
"

    # Pega os campos e adiciona
    IFS=',' read -ra fields <<< "${schemas[$resource]}"
    for field in "${fields[@]}"; do
        content+="  $field,
"
    done

    # Fecha o objeto
    content+="});"

    # Escreve no arquivo
    echo "$content" > "$base_path/$resource/schema/create.schema.ts"
done

echo "✅ Pastas, arquivos e schemas criados com sucesso!"
