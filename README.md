# Proyecto Test Trioteca 

## Guía de Instalación y Configuración del Proyecto Laravel con Sail y React Redux

Este proyecto está compuesto por un **backend en Laravel** con **Sail** para facilitar la ejecución en contenedores Docker, y un **frontend desarrollado en React, con Redux, integrando Redux Toolkit Query para un manejo eficiente de cache**. A continuación se describen los pasos necesarios para levantar y ejecutar el proyecto.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu máquina:

1. **Docker**: [Instalar Docker](https://www.docker.com/get-started)
2. **Docker Compose**: [Instalar Docker Compose](https://docs.docker.com/compose/install/)
3. **Node.js y Yarn**: [Instalar Node.js y Yarn](https://yarnpkg.com/getting-started/install)
4. **Composer**: [Instalar Composer](https://getcomposer.org/download/)
5. **Git**: [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

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

### Comentarios: 

El proyecto no utiliza Laravel Nova, pero para agregar valor, en lugar de usar Blade, integré un frontend en React. Esto permite desacoplar el backend del frontend, facilitando la comunicación entre ambas aplicaciones separadas y mostrando mi capacidad para utilizar e integrar APIs y gestionarlos proyectos de forma independiente. Además, utilizo Redux y Redux Toolkit Query para el manejo del estado de la aplicación en el frontend, optimizando el rendimiento mediante la caché y evitando solicitudes redundantes al servidor.

Para el envío de correos, utilicé MailTrap. He incluido mis credenciales en el archivo .env.example para permitir el envío de correos durante las pruebas. Sin embargo, pueden cambiar esas credenciales por las suyas y verificar que los correos se envían correctamente.

### Email
Si se desea desactivar el envío de correos, basta con comentar el observer asociado en el archivo EventServiceProvider. El observer en cuestión es el AppraisalHistoryObserver, que se encuentra en el directorio app/Observers. Simplemente pueden comentar la línea de código donde se registra el observer dentro de EventServiceProvider:

```bash
 protected $observers = [
        AppraisalRequest::class => [
            AppraisalRequestObserver::class,
        ],
        // AppraisalHistory::class => [
        //     AppraisalHistoryObserver::class,
        // ],
];
```


