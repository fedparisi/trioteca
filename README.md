# Guía de Instalación y Configuración del Proyecto Laravel con Sail y React

Este proyecto está compuesto por un **backend en Laravel** con **Sail** para facilitar la ejecución en contenedores Docker, y un **frontend desarrollado en React, con Redux, integrando Redux Toolkit Query para un manejo eficiente de cache**. A continuación se describen los pasos necesarios para levantar y ejecutar el proyecto.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu máquina:

1. **Docker**: [Instalar Docker](https://www.docker.com/get-started)
2. **Docker Compose**: [Instalar Docker Compose](https://docs.docker.com/compose/install/)
3. **Node.js y Yarn**: [Instalar Node.js y Yarn](https://yarnpkg.com/getting-started/install)
4. **Composer**: [Instalar Composer](https://getcomposer.org/download/)
5. **Git**: [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## URL PROJECT: https://github.com/fedparisi/trioteca

## Pasos para la configuración del proyecto

### 1. Clonar el repositorio

Comienza clonando el repositorio en tu máquina local:

```bash
git clone https://github.com/fedparisi/trioteca.git 
git clone git@github.com:fedparisi/trioteca.git
```

2. Instalar dependencias de PHP con Composer
```bash
   composer install
```   

3. Configurar el entorno de Laravel con Sail

Configura el archivo .env en el directorio raíz del proyecto:
```bash
cp .env.example .env
```

4. Levantar los contenedores de Sail
```bash
./vendor/bin/sail up -d
```

5. Ejecutar las migraciones y seeders
```bash
./vendor/bin/sail artisan migrate:fresh --seed
```

 (Verificar que el backend funciona: ir a http://localhost)

6. Configurar el frontend en React
(En el directorio raiz)
```bash
yarn install
```

7. Levantar el servidor de desarrollo
```bash
yarn run dev
```


