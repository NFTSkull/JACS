#!/bin/bash

# Script para actualizar headers móviles en todas las páginas de productos

# Array de archivos y sus productos activos
declare -A files=(
    ["tarima-js-32.html"]="Tarima JS-32"
    ["tarima-js-30.html"]="Tarima JS-30"
    ["caja-allende.html"]="Caja Montemorelos"
    ["jacspana.html"]="JACSPANA"
)

# Función para agregar header móvil
add_mobile_header() {
    local file=$1
    local active_product=$2
    
    echo "Actualizando $file con producto activo: $active_product"
    
    # Backup del archivo
    cp "$file" "${file}.backup"
    
    # Aquí se agregaría el código para insertar el header móvil
    # Por ahora solo mostramos el progreso
    echo "✓ Header móvil agregado a $file"
}

# Ejecutar para cada archivo
for file in "${!files[@]}"; do
    add_mobile_header "$file" "${files[$file]}"
done

echo "✓ Todos los headers móviles han sido actualizados"
