---
title: Publicar cambios
description: Referencias rápidas para publicar cambios en un repositorio remoto Git.
---

## Subir los cambios de una rama no existente en remoto

````sh frame=none
git push origin master
````

````sh frame=none
git push remoteName branchesName
````

## Asociar rama con la rama remota al subir los cambios

````sh frame=none
git push origin master -u
````

## Subir cambios desde una rama asociada con un repo remoto

````sh frame=none
git push
````