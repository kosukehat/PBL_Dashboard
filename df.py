import pandas as pd
import requests
url = "https://data.bodik.jp/api/3/action/package_search?q=organization:232025"
res = requests.get(url)
data = res.json()
# print(data.keys()) #['help', 'success', 'result']
# print(data['result'].keys()) #['count', 'facets', 'results', 'sort', 'search_facets']
# print(data['result']['results'][1]['resources'][0])
# print(data['result']['results'][1]['resources'][0]['url'])

for i in range(len(data['result']['results'])):
    if data['result']['results'][i]['resources'][0]['format'] != 'CSV':
        continue
    df = pd.read_csv(data['result']['results'][i]['resources'][0]['url'])
    print(f"Dataset {i+1}: {data['result']['results'][i]['resources'][0]['description']}\nurl: {data['result']['results'][i]['resources'][0]['url']}\n\n{df.columns}\n\n\n")
