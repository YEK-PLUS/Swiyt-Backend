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
    "uid": "d06e378d-502b-4a31-aa26-67b60e8e8bca",
    "username": "YEK",
    "realname": "Yunus Emre Köker",
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
eyJoaXN0b3J5IjpbMTY3OTUyNDI2MiwtMTM4NTk3MTEzNywtOD
M1MzU5OTE0LDQ0NjUxOTgwMl19
-->