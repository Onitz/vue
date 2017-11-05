import re
from os import listdir
from os.path import isfile, join
import time
import shutil

log = open('log.txt', 'a')   # open for writing - append mode
filefrom = 'blankslate.html' # this is assumed in same dir as flush
fileto   = '../index.html'
archive  = 'html/'
fileList = [f for f in listdir(archive) if isfile(join(archive, f))]

maxno = 0
for x in fileList:
  try:
    n = re.match('(\d+).*', x).group(1)
  except: #aka catch
    continue
  if n > maxno:
    maxno = int(n)
nextno = maxno + 1

shutil.copy2(fileto, archive+str(nextno).zfill(3)+'.html')
shutil.copy2(filefrom, fileto)
log.write('\n'+str(nextno).zfill(3) + '\t\t' + time.strftime("%I:%M %p %Y/%m/%d"))
print 'Flushed index: ' + str(nextno)
log.close()

