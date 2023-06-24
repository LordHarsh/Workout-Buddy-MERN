FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
RUN npm install -g serve
ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL=$BACKEND_URL
RUN npm run build
EXPOSE 3000
CMD ["serve", "build"]