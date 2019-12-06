FROM openjdk:11-jre

ADD ./build/libs/auth-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "-Dspring.profiles.active=prod", "/app/auth-service.jar"]

EXPOSE 5000
