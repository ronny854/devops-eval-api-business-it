# DevOps Evaluation API

API REST desarrollada con Node.js y Express.

## Ejecutar localmente

Requisitos:

- Node.js 20 o superior
- npm

Instalar dependencias:

```bash
npm ci
```

Ejecutar pruebas y lint:

```bash
npm test
npm run lint
```

Iniciar el servicio:

```bash
npm start
```

La API queda disponible en:

```text
http://localhost:3000
```

Probar los endpoints:

```bash
curl http://localhost:3000/health
curl "http://localhost:3000/greet?name=DevOps"
curl -i http://localhost:3000/greet
```

Respuestas esperadas:

```json
{"status":"ok"}
```

```json
{"message":"Hello, DevOps!"}
```

La última petición debe responder HTTP `400` porque no incluye el parámetro `name`.

## Ejecutar con Docker

Construir la imagen desde el repositorio:

```bash
docker build -t devops-eval-api:local .
```

Levantar el contenedor:

```bash
docker run --rm -p 3000:3000 --name devops-eval-api devops-eval-api:local
```

Ejecutarlo en segundo plano:

```bash
docker run -d -p 3000:3000 --name devops-eval-api devops-eval-api:local
docker logs -f devops-eval-api
```

Detener el contenedor:

```bash
docker stop devops-eval-api
```

## Descargar la imagen publicada

Descargar la última imagen desde GitHub Container Registry:

```bash
docker pull ghcr.io/ronny854/devops-eval-api-business-it:latest
```

Ejecutar la imagen:

```bash
docker run --rm -p 3000:3000 --name devops-eval-api ghcr.io/ronny854/devops-eval-api-business-it:latest
```

Probarla:

```bash
curl http://localhost:3000/health
curl "http://localhost:3000/greet?name=Docker"
```

Si el paquete es privado, primero se debe iniciar sesión en GHCR:

```bash
echo "<GITHUB_PAT>" | docker login ghcr.io --username ronny854 --password-stdin
```

El PAT requiere al menos el permiso `read:packages`.

## Probar el servicio desplegado

URL del servicio:

```text
https://devops-eval-api-business-it.onrender.com
```

Health check:

```bash
curl https://devops-eval-api-business-it.onrender.com/health
```

Saludo:

```bash
curl "https://devops-eval-api-business-it.onrender.com/greet?name=Render"
```

Validar el error por parámetro faltante:

```bash
curl -i https://devops-eval-api-business-it.onrender.com/greet
```

En el plan gratuito de Render, la primera petición puede tardar mientras el servicio sale del estado de suspensión.
