# Build and Deploy Workflow

Este repositorio utiliza GitHub Actions para automatizar la construcción y el despliegue de un sitio generado con Jekyll y configurado con un entorno virtual de Python. A continuación, se describe el proceso de configuración y uso del workflow.

---

## **Descripción del Workflow**

El workflow llamado **"Build and Deploy"** se activa automáticamente cada vez que se realiza un push en la rama `master`. Este flujo realiza las siguientes tareas:

1. **Checkout del código fuente**: Clona el repositorio en el entorno de ejecución.
2. **Configuración de Python**: Establece la versión de Python requerida.
3. **Instalación de dependencias**: Crea un entorno virtual (venv) e instala las dependencias definidas en `requirements.txt`.
4. **Construcción del sitio con Jekyll**: Construye el sitio utilizando Jekyll y lo prepara para su despliegue.

---

## **Requisitos Previos**

Antes de usar este workflow, asegúrate de cumplir con los siguientes requisitos:

1. **Archivo `requirements.txt`**

2. **Configuración del proyecto con Jekyll**

- Asegúrate de tener un archivo de configuración de Jekyll, como `_config.yml`, y todos los archivos requeridos para generar el sitio.

1. **Configuración en GitHub**:

- La rama principal del repositorio debe ser `master`.
- El repositorio debe estar configurado para GitHub Pages (si aplica).

---

## **Cómo usar el Workflow**

### Configuración automática con GitHub Actions

Una vez que hayas clonado el repositorio, GitHub Actions se encargará automáticamente de gestionar el entorno y las dependencias cuando se realice un push a la rama master. Esto incluye:

Configuración del entorno virtual.
Instalación de dependencias desde requirements.txt.
Construcción del sitio con Jekyll.

## **Contribuciones**

Si deseas mejorar el workflow o resolver problemas, crea un pull request o abre un issue en este repositorio.

---

## **Licencia**

Este proyecto está disponible bajo la licencia [MIT](LICENSE).
