FROM mysql
ADD ddl.sql /docker-entrypoint-initdb.d
ENV MYSQL_ROOT_PASSWORD=password
EXPOSE 3306
CMD ["mysqld"]