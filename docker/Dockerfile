FROM openjdk:8-jdk-alpine

EXPOSE 8090
COPY backend*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]