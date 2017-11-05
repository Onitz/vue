'''
The following script resets ../index.html and moves it to /html
'''
import re
from os import listdir
from os.path import isfile, join
import time
import shutil

log = open('log.txt', 'a') #open for writing - append mode
filefrom = 'blankslate.html' #this is assumed in same dir as flush
fileto   = '../index.html' # + filename[i]
archive  = 'html/'

fileList = [f for f in listdir(archive) if isfile(join(archive, f))]

max = 000
for x in fileList:
  if re.match('\d{3}.*', x):
    if x[:3] > max:
      max = int(x[:3])
next = max + 1

shutil.copy2(fileto, archive+str(next)+'.html')
shutil.copy2(filefrom, fileto)
log.write('\n'+str(next).zfill(3) + '\t\t' + time.strftime("%I:%M %p %Y/%m/%d"))
print 'Flushed index: ' + str(next)

'''
for i in range(0, fileList): #first 35 done manually. will start at 36 (index 35)
	n = i+1
	if(not os.path.isfile(fileto+filename[i])):
		if not os.path.isdir(fileto):                # If the dir does not exist, create it :)
			os.makedirs(fileto)

		shutil.copy2(di, fileto+filename[i])  #copy out
		shutil.copy2(filefrom, di) #copy in
		log.write('\n'+str(n).zfill(3) + '\t\t' + time.strftime("%I:%M %p %Y/%m/%d"))
		print 'Flushed index: ' + str(n) + '\n' + filename[i]
		break
'''

log.close()

