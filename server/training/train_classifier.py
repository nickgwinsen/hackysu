import pickle

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np


data_dict = pickle.load(open('../data.pickle', 'rb'))

max_length = max([len(x) for x in data_dict['data']])
data = np.zeros((len(data_dict['data']), max_length))

for i, sample in enumerate(data_dict['data']):
    data[i, :len(sample)] = sample


labels = np.asarray(data_dict['labels'])

x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)

model = RandomForestClassifier()

model.fit(x_train, y_train)

y_predict = model.predict(x_test)

score = accuracy_score(y_predict, y_test)

print('{}% of samples were classified correctly !'.format(score * 100))

f = open('../model.p', 'wb')
pickle.dump({'model': model}, f)
f.close()
