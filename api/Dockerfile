FROM golang:1.20-alpine

LABEL author="Chris Minor <chris.c.minor@gmail.com>"

WORKDIR /app

COPY . .
RUN go mod tidy

RUN go build -o /logbook ./cmd/

EXPOSE 3000

ENTRYPOINT [ "/logbook" ]
