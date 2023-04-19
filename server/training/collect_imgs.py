import os
import cv2


DATA_DIR = '../data'
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

number_of_classes = 9 #number of total image sets we have trained
dataset_size = 2000

cap = cv2.VideoCapture(0) #webcam you are capturing from
for j in range(number_of_classes):
    if j == 5: #change this to modify which image set you are training
        if not os.path.exists(os.path.join(DATA_DIR, str(j))): 
            os.makedirs(os.path.join(DATA_DIR, str(j))) #make a new file in folder data, subfolder j

        print('Collecting data for class {}'.format(j))

        counter = 1000
        done = False
        while True:
            ret, frame = cap.read()
            camText = 'Press Q to begin training, taking {}'.format(dataset_size-counter) + ' images.'
            cv2.putText(frame, camText, (0, 50), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 235), 3,
                        cv2.LINE_AA)
            cv2.imshow('frame', frame)
            if cv2.waitKey(25) == ord('q'):
                break

        while counter < dataset_size:
            ret, frame = cap.read()
            cv2.imshow('frame', frame)
            cv2.waitKey(25)
            cv2.imwrite(os.path.join(DATA_DIR, str(j), '{}.jpg'.format(counter)), frame) #add file to data in correct subfolder

            counter += 1

cap.release()
cv2.destroyAllWindows()
