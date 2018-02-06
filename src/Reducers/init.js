export const initialState = {
  "overallAttributes": {
    "width": 900,
    "height": 600,
    "background-fill": "#fff",
    "border": "#3a3a3a"
  },
  "drawing": {
    "beingDrawn": false,
    "currentShape": "rect",
    "activeLayerId" : "",
    "activeShapeId" : "",
    "layerIds": [],
  },
  "data": [],
  "file": {
    "isLoaded": false,
  },
};

export const keyToShape = {
  "r": "rect",
  "c": "circle"
};