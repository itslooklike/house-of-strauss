# house-of-strauss

- Typescript
- NextJS
- Atomic Design

## Quick start with Docker

```sh
docker build -t house .
docker run --init --rm -itp 3000:3000 house
# http://localhost:3000
# `ctrl + c` - for exit
```

## Local develop

```sh
yarn     # install deps
yarn dev # -> app:       http://localhost:3000/
```

## ENV

```
NEXT_PUBLIC_GOOGLE_MAP_API_KEY=<google-map-api-key>
```
