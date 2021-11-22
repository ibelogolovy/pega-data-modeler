## Pega-Data-Tools
This project is designed for self-study purposes. No relations with Pega, only use Pega API.

## Stack

Frontend: React + Redux

Backend: Spring Boot + configs are saved in a json file (pega-settings.json)

## Setup
Run from directory for generating jar (/backend/build/libs/backend-*.jar)
```
./gradlew build
```
You can use the app in Docker running sh (the syntax depends on the OS):
```
./Docker/build.sh
```
It will create docker image and container and run the last one.

## Details
1) Wide clipboard uses Pega API for getting work object data to show it as tree structure and detailed info about each property.
   
   ![WideClipboard](https://github.com/ibelogolovy/pega-data-modeler/demo/blob/master/wide-clipboard.png?raw=true)
2) Clipboard Comparator can help you to compare different work objects highlighting the differences.
   
   ![ClipboardComparator](https://github.com/ibelogolovy/pega-data-modeler/demo/blob/master/clipboard-comparator.png?raw=true)
3) Clipboard Model tool allows you to build a diagram of dependencies between classes.
   
   ![ClassModel](https://github.com/ibelogolovy/pega-data-modeler/demo/blob/master/class-model.png?raw=true)
4) Data Model tool is a fully functional tool for managing the case data model. It can generate initial diagram from case.
   
   ![DataModel](https://github.com/ibelogolovy/pega-data-modeler/demo/blob/master/data-model.png?raw=true)
   ![DataModelWide](https://github.com/ibelogolovy/pega-data-modeler/demo/blob/master/data-model.png?raw=true)
   