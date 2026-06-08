import json

jsonString = '{"a":54, "b": 28}'
aDict = json.loads(jsonString)
print(aDict)
print(aDict['a'])
print(aDict['b'])


jsonExample = '{"widget": {"debug": "on", "window": {"title": "Sample Konfabulator Widget", "name": "main_window", "width": 500, "height": 500}, "image": {"src": "Images/Sun.png", "name": "sun1", "hOffset": 250, "vOffset": 250,"alignment": "center"}, "text": {"data": "Click Here", "size": 36, "style": "bold", "name": "text1", "hOffset": 250, "vOffset": 100, "alignment": "center", "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"}}}'

dictionary1 = json.loads(jsonExample)
print("dic: " + jsonExample)
print("json: " + json.dumps(dictionary1))
