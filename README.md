# Swiyt-Backend


## API Endpoints

### `/auth` Authentication
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
	"token":"JWT Token"
}
```
---
---
#### `/login`
**Authentication Required !**

**No Required Filed**

**Returned Value**

```json
{
	"uuid":"User uuid",
	"username":"User username",
	"realname":"User realname",
	"":"User uuid",
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
<!--stackedit_data:
eyJoaXN0b3J5IjpbODY3ODIwODA5LC0xMzg1OTcxMTM3LC04Mz
UzNTk5MTQsNDQ2NTE5ODAyXX0=
-->