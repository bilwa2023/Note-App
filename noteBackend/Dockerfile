# Use OpenJDK base image
FROM openjdk:21-jdk-slim as build

# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Fix permissions for Maven wrapper
RUN chmod +x ./mvnw

# Download dependencies (cache layer)
RUN ./mvnw dependency:go-offline

# Copy source code
COPY src src

# Build the application
RUN ./mvnw clean package -DskipTests

# Run stage
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copy the jar from build stage
COPY --from=build /app/target/*.jar app.jar

# Expose app port
EXPOSE 8080

# Start the app
ENTRYPOINT ["java","-jar","app.jar"]
