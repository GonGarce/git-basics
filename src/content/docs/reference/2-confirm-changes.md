---
title: Guardar cambios (commit)
description: Referencias rápidas para hacer commits
---

## Añadir todos los cambios

````sh frame=none
git add .
````

### Añadir archivos concretos con expresiones regulares

Todos los archivos con cierta extensión

````sh frame=none
git add *.txt
````

Para añadir todos los archivos de un subdirectorio llamado ``components`` puedes usar la siguiente expresión:

````sh frame=none
git add **/components/*
````

Por su ruta completa o su nombre

````sh frame=none
git add src/content/docs/1-git-first-steps/2-confirm-changes.mdx
git add **/2-confirm-changes.mdx
git add **/*-changes.mdx # Aunque esto podría incluir a otros archivos que terminen con "-changes.mdx"
````

## Hacer un commit

Hacer un commit escribiendo el mesanje en el editor de textos

````sh frame=none
git commit
````

### Escribir el mensaje en la consola

````sh frame=none
git commit -m "Initial commit"
````

### Añadir todos los archivos modificados

Los archivos que ya están en el radar de git, _tracked files_, se pueden añadir a un commit en el momento de hacerlo con el flag ``-a``:

````sh frame=none
git commit -a -m "Modified readme file"
````

### Reescribir el último commit

:::danger
¡Nunca modifiques un commit que exista en un repositorio remoto!

Cada commit tiene su propio hash que lo identifica, si lo cambiamos, realmente estamos eliminado ese punto de la historia y añadiendo otro nuevo,
esto generará muchos conflictos si otra persona tenía esa versión. Por eso nunca se debe reescribir la historia en repositorios remotos o cuando
trabajamos con otras personas.
:::

Hacer un commit con los cambios añadidos y modificar el commit anterior:

````sh frame=none
git commit --amend -m "Modified readme file"
````

Reutilizar el mensaje anterior podemos usar el flag ``--no-edit``

````sh frame=none
git commit --amend --no-edit
````

### Modificar el author del último commit

Reescribir el último commit, sin editar el mensaje y usando el autor actual.

````sh frame=none
git commit  --amend --reset-author --no-edit
````
