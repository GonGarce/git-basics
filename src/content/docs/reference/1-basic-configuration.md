---
title: Configuración Básica
description: Referencias rápidas de onfiguración básica de un repositorio git
---

## Configura tu identidad

Configura tu Nombre y Correo electrónico de forma global

````sh frame=none
git config --global user.name "Tu Nombre"
git config --global user.email tucorreo@ejemplo.com
````

Configura tu Nombre y Correo electrónico en un repositorio específico

````sh frame=none
git config user.name "Tu Nombre"
git config user.email tucorreo@ejemplo.com
````

## Crear comandos de acceso rápido: Alias

Sintaxis para crear un alias:

````sh frame=none
git config --global alias.nombre_del_alias "comando"
````

Crear el alias ``co`` para ``checkout``:

````sh frame=none
git config --global alias.co checkout
````

Otros alias que pueden ser de utilidad:

````sh frame=none
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
````

### Alias para publicar una nueva rama y conectarla con el repositorio remoto

Alias para subir cambios a un repositorio remoto de una rama que no existe:

````sh frame=none
git config --global alias.push-origin !git push -u origin "$(git rev-parse --abbrev-ref HEAD)"
````

## Omitir archivos del seguimiento: .gitignore

Ejemplo de un ``.gitignore`` para un proyecto de ``astrojs`` con node:

````sh title=".gitignore"
# build output
dist/
# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# environment variables
.env
.env.production

# macOS-specific files
.DS_Store
````

### Archivos .gitignore base

Puedes encontrar archivos ``.gitignore`` para distintos proyectos en la web:

- [gitignore.io](https://www.toptal.com/developers/gitignore/)
- [github/gitignore](https://github.com/github/gitignore)

## Sigue leyendo

- Para más información puedes consultar la referencia completa del comando [config](https://git-scm.com/docs/git-config).
- Para más información sobre [alias](https://git-scm.com/book/ms/v2/Git-Basics-Git-Aliases).
- Para más información sobre [gitignore](https://git-scm.com/docs/gitignore).
