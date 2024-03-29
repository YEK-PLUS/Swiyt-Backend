# Swiyt-Backend



---
## Authentication

**Add Authorization Header the request**

|Authorization|Bearer JWT|
|-|-|

---
## API Endpoints
### `/auth` Authentication Main Route
---
#### `/token`
**Authentication Not Required**

**Required Fileds**

|Username|Password|
|--|--|
|Requiered|Requiered|

**Returned Value**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJkMDZlMzc4ZC01MDJiLTRhMzEtYWEyNi02N2I2MGU4ZThiY2EiLCJpYXQiOjE1Njc0MzU1ODB9.GWA9jPDy8DcYsg7hhNgP_biyDqB899eh7qB8SVBtpw0"
}
```
---
#### `/login`
**[Authentication] Required !**

**No Required Filed**

**Returned Values**

```json
{
    "uid": "d06e378d-502b-4a31-aa26-67b60e8e8bca",
    "username": "YEK",
    "realname": "Yunus Emre Köker",
    "image": {
        "uid": "default",
        "cdn_uid": 0,
        "cdn": {
            "uid": 0,
            "url": "http://image.com/image.png"
        }
    }
}
```
```json
{
    "error": "fill in the required fields"
}
```
---
#### `/logout`
**[Authentication] Required !**

**No Required Filed**

**Returned Values**

```json
{
    "success":"success"
}
```
---
#### `/register`
**Authentication Not Required**

**Required Fileds**

|Username|Password|Mail|
|--|--|--|
|Requiered|Requiered|Requiered|

**Returned Values**

```json
{
    "success": "success"
}
```
```json
{
    "error": "user exists"
}
```
```json
{
    "error": "fill in the required fields"
}
```
---

|[System Diagram Link][System Diagram]|
|-------|
|[![System Diagram](/doc/diagram-01.svg "System Diagram")][System Diagram]|

|[Database Diagram Link][Database Diagram]|
|-------|
|[![Database Diagram](doc/database.svg "Database Diagram")][Database Diagram]|



[System Diagram]: <https://bit.ly/2ls3TlU>
[Database Diagram]: <https://i.hizliresim.com/5Nnnrz.png>
[Authentication]: <#authentication>
