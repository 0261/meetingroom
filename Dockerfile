FROM mysql
ADD ddl.sql /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=password \
    MYSQL_DATABASE=zigzag
EXPOSE 3306
CMD ["mysqld"]