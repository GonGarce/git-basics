---
title: Crear y Clonar repositorios
description: Referencias rápidas para crear y clonar repositorios
---

### Crear

Iniciar un repositorio local

````bash frame="none"
git init
````

### Clonar

Clonar en una carpeta con el mismo nombre que el repositorio remoto

````bash frame="none"
git clone https://github.com/GonGarce/git-basics.git
````

Clonar en una carpeta con un nombre personalizado

````bash frame="none"
git clone https://github.com/GonGarce/git-basics.git my-repo
````

### Básico sobre remotos

Añadir un repositorio remoto

````bash frame="none"
git remote add origin https://github.com/GonGarce/git-basics.git 
````

Ver todos los repositorios remotos

````bash frame="none"
git remote -v
````