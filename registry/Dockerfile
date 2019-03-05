FROM openjdk:11-jre

ADD ./build/libs/registry.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/registry.jar"]

EXPOSE 8761