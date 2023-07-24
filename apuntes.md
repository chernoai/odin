# Comandos relacionados con un repositorio remoto:

git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
git pusho git push origin main(Ambos logran el mismo objetivo en este contexto)
Comandos relacionados con el flujo de trabajo:
git add .
git commit -m "A message describing what you have done to make this snapshot different"
Comandos relacionados con la verificación del estado o el historial de registro
git status
git log
La sintaxis básica de Git es program | action | destination.

Por ejemplo,

git add .se lee como git | add | ., donde el punto representa todo en el directorio actual;
git commit -m "message"se lee como git | commit -m | "message"; y
git statusse lee como git | status | (no destination).