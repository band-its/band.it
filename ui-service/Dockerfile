FROM openjdk:11-jre

ADD ./build/libs/ui-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "/app/ui-service.jar"]

EXPOSE 4000