FROM openjdk:11-jre

ADD ./build/libs/account-service.jar /app/
CMD ["java", "-Xmx200m", "-jar", "-Dspring.profiles.active=prod", "/app/account-service.jar"]

EXPOSE 6000
