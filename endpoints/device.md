# DEVICE ENPOINTS

## GET Device Details

-   URL: `/device/:deviceID`
-   Method: `GET`

### Success Response

```json
{
	"_id": "6660249b7f54e1bf38865624",
	"deviceID": "1",
	"magnitude": "0.12",
	"longitude": "12.23",
	"timeStamp": "2024-06-05T08:42:09.536Z",
	"__v": 0,
	"userID": null
}
```

## GET All Devices

-   URL: `/device`
-   Method: `GET`

## POST Update Device Coordinate (user pencet tombol)

-   URL: `/device/update`
-   Method: `POST`
-   Body:

```json
{
	"deviceID": "",
	"magnitude": "",
	"longitude": ""
}
```

### Success Response

```json
{
	"device": ""
}
```

## POST Add New Device

-   URL: `/device`
-   method: `POST`
-   Body:

```json
{
	"deviceID": "",
	"magnitude": "",
	"longitude": ""
}
```

### Success Response

```json
{
	"device": {}
}
```
