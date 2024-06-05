# USER ENDPOINT

## GET All User Data

-   URL: `/user`
-   Method: `GET`

### Success Response

```json
{
	"_id": "666025db85dcbb7fd99f504c",
	"nama": "Christian Hadiwijaya",
	"NIK": "2306161952",
	"NoHP": "082113383767",
	"ktpUrl": "https://cdn.discordapp.com/attachments/1169082776012730378/1238115756928139284/image.png?ex=66610c67&is=665fbae7&hm=36dd10c5ba608846ad6d6e2334340a6d1eac70c2cc680af1926e8b87efc5cef8&",
	"stasiunAwal": "Universitas Indonesia",
	"stasiunTujuan": "Tebet",
	"isConnected": false,
	"__v": 0
}
```

## POST User Form Submit

-   URL: `/user/add`
-   Method: `POST`
-   Body:

```json
{
	"nama": "",
	"NIK": "",
	"NoHP": "",
	"ktpUrl": "",
	"stasiunAwal": "",
	"stasiunTujuan": ""
}
```

### Success Response

```json
{
	"message": "User added sucessfully",
	"user": {},
	"device": {}
}
```

## POST User Disconnect

-   URL : `/user/disconnect`
-   Method : `POST`
-   Body:

```json
{
	"nama": ""
}
```

### Success Response

```json
{
	"message": "User disconnected successfully",
	"user": {},
	"device": {}
}
```
