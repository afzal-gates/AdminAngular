FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["AdminAngular/AdminAngular.csproj", "AdminAngular/"]

RUN dotnet restore "AdminAngular/AdminAngular.csproj"
COPY . .
WORKDIR "/src/AdminAngular"
RUN dotnet build "AdminAngular.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AdminAngular.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AdminAngular.dll"]