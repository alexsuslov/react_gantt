# Simple React Gantt Diagram
## Demo
[react_gantt](https://alexsuslov.github.io/react_gantt/)
## Use
```
<Gantt {...{
  start: new Date(1970, 0, 1),
  stop: new Date(),
  data:[  {
    "name": "Sprint 0",
    "desc": "Analysis",
    "values": [{
      "from": 1320192000000,
      "to": 1322401600000,
      "label": "Requirement Gathering",
      "customClass": "ganttRed"
    }]
    ]
  }} 
/>
```