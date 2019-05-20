# Getting Start
```
https://github.com/0261/meetingroom.git

docker image build -t meeting .
docker run -d -p 3306:3306 meeting

npm i
npm start
```

# PLAYGROUND
```
localhost:4000/playground

query {
  reservations{
    member_id
    meeting_room_id
    reservation_time
  }
  rooms(targetDate:"2019-05-25 22:00:00") {
    name
    table_size
    id
  }  
}
```

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