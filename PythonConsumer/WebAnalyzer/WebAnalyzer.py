from .ScarppingService import ScrappingService
from .ImgAttributeService import ImageAttributeChecker
from .PageChecker import PageChecker
from .HtmlService import HTMLService
from .TechnologyService import TechnologyService
from .WebVitalsService import WebVitalsService
import logging
base_obj = {
    'url': '',
    'OverallRate': {
        'SEO': 0,
        'Performance': 0,
        'WebVitals': 0,
    },
    'SEO': {
        'Image_analyze': [],
        'Page_analyze': [],
        'ExternalLinks': {
            'Telegram': '',
            'Facebook': '',
            'Instagram': '',
            'Snapchat': '',
            'YouTube': '',
            'Vk': '',
            'Others': []
        },
    },
    'TechnicalCondition': {
        'HasRobotsTxt': False,
        'HasSiteMap': False,
        'Page404': False,
        'Page200': False,
        'SSL': False,
        'LoadTime': [],
        'BrokenLinks': [],
        'Technologies': {},
    },
    'WebVitals': {}

}


class WebAnalyzer:
    def __init__(self, url) -> None:
        self.url = url
        
    

    def analyze(self,):
        return_obj = base_obj
        return_obj['url'] = self.url
        logging.info(f"Started scrapping urls")
        scapper = ScrappingService(url=self.url)
        scapper.process()
        htmlService = HTMLService(scapper.internal_links)
        htmlService.get_htmls()

        logging.info(f"Started analyzing Images")
        img_checker = ImageAttributeChecker(self.url)
        image_attributes = img_checker.check_image_attributes()
        image_penalty = img_checker.get_image_penalty()
        return_obj['SEO']['Image_analyze'] = image_attributes

        logging.info(f"Started analyzing each page")
        page_checker = PageChecker(result=htmlService.html_results)
        page_attributes = page_checker.check_pages()
        pages_penalty = page_checker.get_pages_penalty()
        return_obj['SEO']['Page_analyze'] = page_attributes
        return_obj['OverallRate']['SEO'] = (pages_penalty+image_penalty)/2
        logging.info(f"Checking technical conditions")
        return_obj['TechnicalCondition']['LoadTime'] = htmlService.time_results
        return_obj['OverallRate']['Performance'] = htmlService.get_overall_performance_score()
        return_obj['TechnicalCondition']['BrokenLinks'] = htmlService.broken_links_result

        logging.info(f"Obtaining external Links")
        return_obj['SEO']['ExternalLinks'] = scapper.social_links

        WAnalyzer = TechnologyService(self.url)

        logging.info(f"Checking SSL avialability")
        HasSSL = WAnalyzer.HasSSL()
        return_obj['TechnicalCondition']['SSL'] = HasSSL

        logging.info(f"Checking Robots.txt aviability")
        HasRobotsTxt = WAnalyzer.HasRobotsTxt()
        return_obj['TechnicalCondition']['HasRobotsTxt'] = HasRobotsTxt

        logging.info(f"Checking Sitemap.txt aviability")
        HasSiteMap = WAnalyzer.HasSitemap()
        return_obj['TechnicalCondition']['HasSiteMap'] = HasSiteMap

        logging.info(f"Checking 404 page status code")
        Page404 = WAnalyzer.Check404Page()
        return_obj['TechnicalCondition']['Page404'] = Page404
        logging.info(f"Checking 404 page status code")
        Page404 = WAnalyzer.Check404Page()
        return_obj['TechnicalCondition']['Page404'] = Page404

        logging.info(f"Searching for Website technologies")
        WAnalyzer.get_technologies()
        return_obj['TechnicalCondition']['Technologies'] = WAnalyzer.full_analyze

        logging.info(f"Collecting WebVitals")
        WVitals = WebVitalsService(self.url)
        web_vitals_metrics = WVitals.GetMetrics()
        web_vitals_overall = WVitals.GetOverallValue()
        return_obj['WebVitals'] = web_vitals_metrics
        return_obj['OverallRate']['WebVitals'] = web_vitals_overall
        logging.info(f"Finish analyzing")
        return return_obj
