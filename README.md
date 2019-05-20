# Getting Start
```
docker image build -t meeting .
docker run -d -p 3306:3306 meeting

npm i
npm start
```

# PLAYGROUND
`localhost:4000/playgroud`

# POSTMAN
```
curl -X POST \
  http://localhost:4000/graphql \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 4194b3b8-ba0f-4b4a-a137-ed18b54c16c8' \
  -H 'cache-control: no-cache' \
  -d '{
    "query": "{reservations{member_id \n reservation_time}}"
}'
```ㅇ