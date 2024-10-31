import pika
import time
import json
import logging
from WebAnalyzer import WebAnalyzer

logging.basicConfig(level=logging.INFO,filename='./debug.log',filemode='a', format='%(asctime)s - %(levelname)s - %(message)s')

def callback(ch, method, properties, body):
    try:
        data = json.loads(body).get('data')
        url = data.get('url')
        print(f'Got Url {url}')
        logging.info(f"Received URL: {url}")
        
        analyze = WebAnalyzer(url)
        result = analyze.analyze()
        json_object = json.dumps(result, indent=4, ensure_ascii=False)
        
        # Сохраняем результат в файл
        with open(f"result.json", "w", encoding='utf-8') as outfile:
            outfile.write(json_object)
        
        logging.info(f"Finished processing {url}")
        ch.basic_ack(delivery_tag=method.delivery_tag)
    except Exception as e:
        logging.error(f"Error processing message: {e}")
        ch.basic_nack(delivery_tag=method.delivery_tag, requeue=False)

def connect_to_rabbitmq():
    credentials = pika.PlainCredentials('user', 'password')
    parameters = pika.ConnectionParameters('localhost', 5672, '/', credentials)
    connection = pika.BlockingConnection(parameters)
    return connection

def consume_messages():
    connection = connect_to_rabbitmq()
    channel = connection.channel()
    
    # Объявляем очередь
    channel.queue_declare(queue='task-queue', durable=False)
    channel.basic_qos(prefetch_count=1)
    channel.basic_consume(queue='task-queue', on_message_callback=callback)
    
    logging.info('Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        consume_messages()
    except KeyboardInterrupt:
        logging.info("Gracefully shutting down...")
