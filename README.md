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
---
#### `/login`

**Authentication Not Required**

**Required Fileds**

|Username|Password|Mail|
|--|--|--|
|Requiered|Requiered|Requiered|

**Returned Value**

```json
{
    "token": "success"
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTAyMTEzNzc3MSwxNzY2ODM2OTA5LDIwND
YyNDY4MiwtMTM4NTk3MTEzNywtODM1MzU5OTE0LDQ0NjUxOTgw
Ml19
-->