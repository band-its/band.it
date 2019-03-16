FROM openjdk:11-jre

ADD ./build/libs/registry.jar /app/
CMD ["java", "-Xmx200m", "-jar", "-Dspring.profiles.active=prod", "/app/registry.jar"]

EXPOSE 8761
