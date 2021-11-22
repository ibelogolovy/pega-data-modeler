## Pega-Data-Tools
This project uses the Pega Platform API to describe and explore the case data models.

## Stack

Frontend: React + Redux

Backend: Spring Boot + no database (pega settings and schemes will be stored in file system)

## Setup
Run from directory for generating jar (/backend/build/libs/backend-*.jar)
```
./gradlew build
```
You can use the app in Docker running sh script (the syntax depends on the OS) after project building:
```
./Docker/build.sh
```
It will create docker image and container and run the last one.

## Details
1) Wide clipboard uses Pega API for getting work object data to show it as tree structure and detailed info about each property.
   
   ![WideClipboard](https://github.com/ibelogolovy/pega-data-modeler/blob/master/demo/wide-clipboard.png?raw=true)
2) Clipboard Comparator can help you to compare different work objects highlighting the differences.
   
   ![ClipboardComparator](https://github.com/ibelogolovy/pega-data-modeler/blob/master/demo/clipboard-comparator.png?raw=true)
3) Clipboard Model tool allows you to build a diagram of dependencies between classes.
   
   ![ClassModel](https://github.com/ibelogolovy/pega-data-modeler/blob/master/demo/class-model.png?raw=true)
4) Data Model tool is a fully functional tool for managing the case data model. It can generate initial diagram from case.
   
   ![DataModel](https://github.com/ibelogolovy/pega-data-modeler/blob/master/demo/data-model.png?raw=true)
   And you can save, remove and edit diagram data separately.
   ![DataModelWide](https://github.com/ibelogolovy/pega-data-modeler/blob/master/demo/data-model-wide.png?raw=true)

## Plans
- Use nosql database for managing case schemas/models (questionable)
- Small backend refactoring
- In Wide Clipboard tool property information from data model will be accessible.