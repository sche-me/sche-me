FROM openjdk:17-jdk-slim
COPY ./server/build/libs/colecto-0.0.1-SNAPSHOT.jar colecto.jar
EXPOSE 8080
ENTRYPOINT exec java -jar colecto.jar