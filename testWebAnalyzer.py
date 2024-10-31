# from WebAnalyzer import WebAnalyzer
# import json
# analyzer=  WebAnalyzer('https://eosomsk.ru/')

# result = analyzer.analyze()
# json_object = json.dumps(result, indent=4, ensure_ascii=False)
# with open("result.json", "w") as outfile:
#     outfile.write(json_object)


import requests


resp = requests.post('http://localhost:3000/analyze',data={
    'url':'https://music.yandex.ru/home'
})
print(resp.text)