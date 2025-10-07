FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci
# Copy the rest of the source files into the image.
COPY . .

RUN npm run build

FROM ghcr.io/levino/levins-pocketbase-auth-layer:v1

ENV POCKETBASE_URL=https://api.levinkeller.de
ENV POCKETBASE_GROUP=example
ENV PORT=8000
EXPOSE 8000

# Copy the built files from the builder stage
COPY --from=builder /usr/src/app/build /app/build

COPY --from=builder /usr/src/app/node_modules/pocketbase/dist/pocketbase.umd.js /app/build/public/

# Start the Node.js application
CMD ["npm", "run", "start"]
