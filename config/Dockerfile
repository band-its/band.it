FROM openjdk:11-jre

ADD ./build/libs/config.jar /app/
CMD ["java", "-Xmx200m", "-jar", "-Dspring.profiles.active=prod", "/app/config.jar"]

HEALTHCHECK --interval=30s --timeout=30s CMD curl -f http://localhost:8888/actuator/health || exit 1

EXPOSE 8888
