FROM php:8.1.5

RUN apt-get update \
    && apt-get install -y unzip libicu-dev \
    && docker-php-ext-install intl \
    && docker-php-ext-install pdo_mysql \
    && apt-get clean \
    && rm -fr /var/lib/apt/lists/*

EXPOSE 8765
