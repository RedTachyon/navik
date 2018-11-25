from __future__ import division
from picamera import PiCamera
from time import sleep
from time import time
import boto3
from botocore.exceptions import ClientError
import math
import base64

import Adafruit_PCA9685

def validate_face(result):
    unmatched = result['UnmatchedFaces']
    matched = result['FaceMatches']

    if len(matched) > 0:
        return True
    else:
        return False

# Helper function to make setting a servo pulse width simpler.
def set_servo_pulse(channel, pulse):
    pulse_length = 1000000    # 1,000,000 us per second
    pulse_length //= 60       # 60 Hz
    print('{0}us per period'.format(pulse_length))
    pulse_length //= 4096     # 12 bits of resolution
    print('{0}us per bit'.format(pulse_length))
    pulse *= 1000
    pulse //= pulse_length
    pwm.set_pwm(channel, 0, pulse)

# Setup the camera
camera = PiCamera()
camera.rotation = 180
client = boto3.client('rekognition')
bucket = 'navik'

# Setup the servo
pwm = Adafruit_PCA9685.PCA9685()

# Configure min and max servo pulse lengths
servo_min = 150  # Min pulse length out of 4096
servo_max = 390  # Max pulse length out of 4096
pwm.set_pwm_freq(60)


while True:
    today = int(math.floor(time()))

    print('Taking picture...')
    camera.start_preview(alpha=200)
    sleep(1)
    picpath = '/home/pi/pics/test_' + str(today) + '.jpg'
    camera.capture(picpath)
    camera.stop_preview()

    try:
        with open(picpath, "rb") as imageFile:
            imageBytes = imageFile.read()
            print('Comparing images..')
            response = client.compare_faces(
                SimilarityThreshold=90,
                SourceImage={
                    'Bytes':imageBytes
                },
                TargetImage={
                    'S3Object': {
                        'Bucket': bucket,
                        'Name': 'dark1.jpg'
                    }
                }
            )
    except ClientError: # If doesn't work, just catch everything
        print("Face not found, trying again in a while")
        sleep(5)
    else:
        correct_face = validate_face(response)
        if correct_face:
            print("Correct face found, moving")
            pwm.set_pwm(0, 0, servo_max)
            sleep(10)
            pwm.set_pwm(0, 0, servo_min)
            break
        else:
            print("Correct face not found, trying again in a while")
            sleep(5)

# Uncomment to enable debug output.
#import logging
#logging.basicConfig(level=logging.DEBUG)

# Initialise the PCA9685 using the default address (0x40).

# Alternatively specify a different address and/or bus:
#pwm = Adafruit_PCA9685.PCA9685(address=0x41, busnum=2)




