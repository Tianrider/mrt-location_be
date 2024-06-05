# ADMIN / AUTH ENDPOINT

Untuk saat ini admin hanya bisa di tambah (register) manual, apa mau bikin endpoint nya??

## GET All Admin Data

-   URL: `/auth`
-   Method: `GET`

### Success Response

-   Code: 200

```json
{
	"_id": "66601bff4e71a483fd1e9547",
	"username": "admin",
	"password": "$2a$10$v1QLOwxFvXJvc.qCcM9Bw.ADBYPp39B5yC.myWWFIzlQ3vJDRMF5C",
	"__v": 0
}
```

## POST Login Admin

-   URL: `/auth/login`
-   Method: `POST`
-   Body: (bisa form-data)

```json
{
	"username": "admin",
	"password": "admin"
}
```

### Success Response

-   Code: 200

```json
{
	"message": "Login successful"
}
```

## POST Change Password

-   URL: `/auth/change-pass`
-   Method: `POST`
-   Body: (bisa form-data)

```json
{
	"username": "admin",
	"oldPassword": "admin",
	"newPassword": "admin123"
}
```

### Success Response

-   Code: 200

```json
{
	"message": "Password changed"
}
```
