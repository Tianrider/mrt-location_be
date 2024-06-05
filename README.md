# MRT-LOCATION BE

## Models Schema:

### Admin

```
username : string, required
password : string, required
```

### User

```
nama : string, required
NIK : string, required
NoHP : string, required
ktpUrl : string, required
stasiunAwal: string, required
stasiunTujuan: string, required
timeStamp: String, required
isConnected: boolean, required
```

### Device

```
deviceID : string, required
userID : ref User.ObjectID
magnitude : string, required
longitude : string, required
timeStamp: String, required
```
