import requests
import configparser
from pathlib import Path
import sys


class WebVitalsService:

    def __init__(self, url):
        self.url = url
        config = configparser.ConfigParser()
        PATH = Path(__file__).resolve().parent
        config.read(str(PATH) + '/config.ini')
        self.token = config["WebVitals"]["TOKEN"]

    def GetOverallValue(self):
        return sum([self.CLS['score'], self.LCP['score'], self.INP['score']])/3

    def GetMetrics(self):
        endpoint = f'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={self.url}&key={self.token}'
        response = requests.get(endpoint)
        result = response.json()
        self.LCP = {
            'displayValue': result['lighthouseResult']['audits']['largest-contentful-paint']['displayValue'],
            'numericValue': result['lighthouseResult']['audits']['largest-contentful-paint']['numericValue'],
            'score': result['lighthouseResult']['audits']['largest-contentful-paint']['score']
        }
        self.CLS = {
            'displayValue': result['lighthouseResult']['audits']['cumulative-layout-shift']['displayValue'],
            'numericValue': result['lighthouseResult']['audits']['cumulative-layout-shift']['numericValue'],
            'score': result['lighthouseResult']['audits']['cumulative-layout-shift']['score'],
        }
        self.INP = {
            'displayValue': result['lighthouseResult']['audits']['interactive']['displayValue'],
            'numericValue': result['lighthouseResult']['audits']['interactive']['numericValue'],
            'score':    result['lighthouseResult']['audits']['interactive']['score']
        }
        return {
            'LCP': self.LCP,
            'CLS': self.CLS,
            'INP': self.INP
        }
